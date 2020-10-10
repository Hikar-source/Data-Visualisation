/********************************************************************** */
/*JS GRAPHIQUE FICHIER DATA */
/********************************************************************** */
chartIt03101();
chartIt03102();
chartIt03103();
chartIt03104();
chartIt03105();
chartIt03106();
chartIt03107();
chartIt03108();
chartIt03109();
chartIt03110();
chartIt03111();
chartIt03112();
chartIt03113();
chartIt03114();
chartIt03115();
chartIt03116();
chartIt03117();
chartIt03118();
chartIt03119();
chartIt03120();
chartIt03121();
chartIt03122();
chartIt03123();
chartIt03124();
chartIt03125();
chartIt03126();
chartIt03127();
chartIt03128();
chartIt03129();
chartIt03130();
chartIt03131();
chartIt03132();
chartIt03133();
chartIt03134();
chartIt03135();
chartIt03136();
chartIt03137();
chartIt03138();
chartIt03139();
chartIt03140();
chartIt03141();
chartIt03142();
chartIt03143();
chartIt03144();
chartIt03145();
chartIt03146();
chartIt03147();
chartIt03148();
chartIt03149();
chartIt03150();
chartIt03151();
chartIt03152();
chartIt03153();
chartIt03154();
chartIt03155();
chartIt03156();
chartIt03157();
chartIt03158();
chartIt03159();
chartIt03160();
chartIt03161();
chartIt03162();
chartIt03163();
chartIt03164();
chartIt03165();
chartIt03166();
chartIt03167();
chartIt03168();
chartIt03169();
chartIt03170();
chartIt03171();
chartIt03172();
chartIt03173();
chartIt03174();
chartIt03175();
chartIt03176();
chartIt03177();
chartIt03178();
chartIt03179();
chartIt03180();
chartIt03181();
chartIt03182();
chartIt03183();
chartIt03184();
chartIt03185();
chartIt03186();
chartIt03187();
chartIt03188();
chartIt03189();
chartIt03190();
chartIt03191();
chartIt03192();
chartIt03193();
chartIt03194();
chartIt03195();
chartIt03196();
chartIt03197();
chartIt03198();
chartIt03199();
/*------------------------------------------------------------------ */
/*COMMUNE 03101*/
/*------------------------------------------------------------------ */
async function GraphDATA03101() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03101.push(vote_macron); 
    vote_lepen_03101.push(vote_lepen);
    vote_rejet_03101.push(vote_rejet);
    vote_macronpop_03101.push(vote_macronMediane);
    vote_lepenpop_03101.push(vote_lepenMediane);
    vote_rejetpop_03101.push(vote_rejetMediane);
    name_Commune_03101.push(nameCommune);
    Pourcentage_03101.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03101.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03101.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03101.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03101.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03101 = [];
const vote_lepen_03101 = [];
const vote_rejet_03101 = [];
const vote_macronpop_03101 = [];
const vote_lepenpop_03101 = [];
const vote_rejetpop_03101 = [];
const name_Commune_03101 = [];
const Pourcentage_03101 = [];
const Pourcentage_rejet_03101 = [];
const vote_gene_macron_03101 = [];
const vote_gene_lepen_03101 = [];
const vote_gene_rejet_03101 = [];

async function chartIt03101(){
    await GraphDATA03101();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03101-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03101
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03101
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03101-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03101,vote_lepen_03101,vote_rejet_03101]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03101-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03101,vote_lepenpop_03101,vote_rejetpop_03101]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03101"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03101
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03101
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03101
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03102*/
/*------------------------------------------------------------------ */
async function GraphDATA03102() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03102.push(vote_macron); 
    vote_lepen_03102.push(vote_lepen);
    vote_rejet_03102.push(vote_rejet);
    vote_macronpop_03102.push(vote_macronMediane);
    vote_lepenpop_03102.push(vote_lepenMediane);
    vote_rejetpop_03102.push(vote_rejetMediane);
    name_Commune_03102.push(nameCommune);
    Pourcentage_03102.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03102.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03102.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03102.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03102.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03102 = [];
const vote_lepen_03102 = [];
const vote_rejet_03102 = [];
const vote_macronpop_03102 = [];
const vote_lepenpop_03102 = [];
const vote_rejetpop_03102 = [];
const name_Commune_03102 = [];
const Pourcentage_03102 = [];
const Pourcentage_rejet_03102 = [];
const vote_gene_macron_03102 = [];
const vote_gene_lepen_03102 = [];
const vote_gene_rejet_03102 = [];

async function chartIt03102(){
    await GraphDATA03102();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03102-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03102
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03102
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03102-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03102,vote_lepen_03102,vote_rejet_03102]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03102-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03102,vote_lepenpop_03102,vote_rejetpop_03102]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03102"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03102
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03102
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03102
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03103*/
/*------------------------------------------------------------------ */
async function GraphDATA03103() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03103.push(vote_macron); 
    vote_lepen_03103.push(vote_lepen);
    vote_rejet_03103.push(vote_rejet);
    vote_macronpop_03103.push(vote_macronMediane);
    vote_lepenpop_03103.push(vote_lepenMediane);
    vote_rejetpop_03103.push(vote_rejetMediane);
    name_Commune_03103.push(nameCommune);
    Pourcentage_03103.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03103.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03103.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03103.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03103.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03103 = [];
const vote_lepen_03103 = [];
const vote_rejet_03103 = [];
const vote_macronpop_03103 = [];
const vote_lepenpop_03103 = [];
const vote_rejetpop_03103 = [];
const name_Commune_03103 = [];
const Pourcentage_03103 = [];
const Pourcentage_rejet_03103 = [];
const vote_gene_macron_03103 = [];
const vote_gene_lepen_03103 = [];
const vote_gene_rejet_03103 = [];

async function chartIt03103(){
    await GraphDATA03103();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03103-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03103
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03103
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03103-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03103,vote_lepen_03103,vote_rejet_03103]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03103-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03103,vote_lepenpop_03103,vote_rejetpop_03103]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03103"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03103
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03103
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03103
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03104*/
/*------------------------------------------------------------------ */
async function GraphDATA03104() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03104.push(vote_macron); 
    vote_lepen_03104.push(vote_lepen);
    vote_rejet_03104.push(vote_rejet);
    vote_macronpop_03104.push(vote_macronMediane);
    vote_lepenpop_03104.push(vote_lepenMediane);
    vote_rejetpop_03104.push(vote_rejetMediane);
    name_Commune_03104.push(nameCommune);
    Pourcentage_03104.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03104.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03104.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03104.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03104.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03104 = [];
const vote_lepen_03104 = [];
const vote_rejet_03104 = [];
const vote_macronpop_03104 = [];
const vote_lepenpop_03104 = [];
const vote_rejetpop_03104 = [];
const name_Commune_03104 = [];
const Pourcentage_03104 = [];
const Pourcentage_rejet_03104 = [];
const vote_gene_macron_03104 = [];
const vote_gene_lepen_03104 = [];
const vote_gene_rejet_03104 = [];

async function chartIt03104(){
    await GraphDATA03104();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03104-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03104
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03104
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03104-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03104,vote_lepen_03104,vote_rejet_03104]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03104-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03104,vote_lepenpop_03104,vote_rejetpop_03104]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03104"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03104
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03104
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03104
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03105*/
/*------------------------------------------------------------------ */
async function GraphDATA03105() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03105.push(vote_macron); 
    vote_lepen_03105.push(vote_lepen);
    vote_rejet_03105.push(vote_rejet);
    vote_macronpop_03105.push(vote_macronMediane);
    vote_lepenpop_03105.push(vote_lepenMediane);
    vote_rejetpop_03105.push(vote_rejetMediane);
    name_Commune_03105.push(nameCommune);
    Pourcentage_03105.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03105.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03105.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03105.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03105.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03105 = [];
const vote_lepen_03105 = [];
const vote_rejet_03105 = [];
const vote_macronpop_03105 = [];
const vote_lepenpop_03105 = [];
const vote_rejetpop_03105 = [];
const name_Commune_03105 = [];
const Pourcentage_03105 = [];
const Pourcentage_rejet_03105 = [];
const vote_gene_macron_03105 = [];
const vote_gene_lepen_03105 = [];
const vote_gene_rejet_03105 = [];

async function chartIt03105(){
    await GraphDATA03105();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03105-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03105
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03105
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03105-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03105,vote_lepen_03105,vote_rejet_03105]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03105-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03105,vote_lepenpop_03105,vote_rejetpop_03105]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03105"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03105
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03105
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03105
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03106*/
/*------------------------------------------------------------------ */
async function GraphDATA03106() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03106.push(vote_macron); 
    vote_lepen_03106.push(vote_lepen);
    vote_rejet_03106.push(vote_rejet);
    vote_macronpop_03106.push(vote_macronMediane);
    vote_lepenpop_03106.push(vote_lepenMediane);
    vote_rejetpop_03106.push(vote_rejetMediane);
    name_Commune_03106.push(nameCommune);
    Pourcentage_03106.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03106.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03106.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03106.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03106.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03106 = [];
const vote_lepen_03106 = [];
const vote_rejet_03106 = [];
const vote_macronpop_03106 = [];
const vote_lepenpop_03106 = [];
const vote_rejetpop_03106 = [];
const name_Commune_03106 = [];
const Pourcentage_03106 = [];
const Pourcentage_rejet_03106 = [];
const vote_gene_macron_03106 = [];
const vote_gene_lepen_03106 = [];
const vote_gene_rejet_03106 = [];

async function chartIt03106(){
    await GraphDATA03106();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03106-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03106
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03106
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03106-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03106,vote_lepen_03106,vote_rejet_03106]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03106-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03106,vote_lepenpop_03106,vote_rejetpop_03106]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03106"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03106
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03106
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03106
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03107*/
/*------------------------------------------------------------------ */
async function GraphDATA03107() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03107.push(vote_macron); 
    vote_lepen_03107.push(vote_lepen);
    vote_rejet_03107.push(vote_rejet);
    vote_macronpop_03107.push(vote_macronMediane);
    vote_lepenpop_03107.push(vote_lepenMediane);
    vote_rejetpop_03107.push(vote_rejetMediane);
    name_Commune_03107.push(nameCommune);
    Pourcentage_03107.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03107.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03107.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03107.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03107.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03107 = [];
const vote_lepen_03107 = [];
const vote_rejet_03107 = [];
const vote_macronpop_03107 = [];
const vote_lepenpop_03107 = [];
const vote_rejetpop_03107 = [];
const name_Commune_03107 = [];
const Pourcentage_03107 = [];
const Pourcentage_rejet_03107 = [];
const vote_gene_macron_03107 = [];
const vote_gene_lepen_03107 = [];
const vote_gene_rejet_03107 = [];

async function chartIt03107(){
    await GraphDATA03107();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03107-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03107
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03107
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03107-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03107,vote_lepen_03107,vote_rejet_03107]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03107-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03107,vote_lepenpop_03107,vote_rejetpop_03107]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03107"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03107
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03107
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03107
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03108*/
/*------------------------------------------------------------------ */
async function GraphDATA03108() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03108.push(vote_macron); 
    vote_lepen_03108.push(vote_lepen);
    vote_rejet_03108.push(vote_rejet);
    vote_macronpop_03108.push(vote_macronMediane);
    vote_lepenpop_03108.push(vote_lepenMediane);
    vote_rejetpop_03108.push(vote_rejetMediane);
    name_Commune_03108.push(nameCommune);
    Pourcentage_03108.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03108.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03108.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03108.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03108.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03108 = [];
const vote_lepen_03108 = [];
const vote_rejet_03108 = [];
const vote_macronpop_03108 = [];
const vote_lepenpop_03108 = [];
const vote_rejetpop_03108 = [];
const name_Commune_03108 = [];
const Pourcentage_03108 = [];
const Pourcentage_rejet_03108 = [];
const vote_gene_macron_03108 = [];
const vote_gene_lepen_03108 = [];
const vote_gene_rejet_03108 = [];

async function chartIt03108(){
    await GraphDATA03108();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03108-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03108
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03108
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03108-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03108,vote_lepen_03108,vote_rejet_03108]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03108-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03108,vote_lepenpop_03108,vote_rejetpop_03108]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03108"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03108
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03108
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03108
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03109*/
/*------------------------------------------------------------------ */
async function GraphDATA03109() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03109.push(vote_macron); 
    vote_lepen_03109.push(vote_lepen);
    vote_rejet_03109.push(vote_rejet);
    vote_macronpop_03109.push(vote_macronMediane);
    vote_lepenpop_03109.push(vote_lepenMediane);
    vote_rejetpop_03109.push(vote_rejetMediane);
    name_Commune_03109.push(nameCommune);
    Pourcentage_03109.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03109.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03109.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03109.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03109.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03109 = [];
const vote_lepen_03109 = [];
const vote_rejet_03109 = [];
const vote_macronpop_03109 = [];
const vote_lepenpop_03109 = [];
const vote_rejetpop_03109 = [];
const name_Commune_03109 = [];
const Pourcentage_03109 = [];
const Pourcentage_rejet_03109 = [];
const vote_gene_macron_03109 = [];
const vote_gene_lepen_03109 = [];
const vote_gene_rejet_03109 = [];

async function chartIt03109(){
    await GraphDATA03109();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03109-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03109
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03109
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03109-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03109,vote_lepen_03109,vote_rejet_03109]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03109-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03109,vote_lepenpop_03109,vote_rejetpop_03109]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03109"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03109
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03109
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03109
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03110*/
/*------------------------------------------------------------------ */
async function GraphDATA03110() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03110.push(vote_macron); 
    vote_lepen_03110.push(vote_lepen);
    vote_rejet_03110.push(vote_rejet);
    vote_macronpop_03110.push(vote_macronMediane);
    vote_lepenpop_03110.push(vote_lepenMediane);
    vote_rejetpop_03110.push(vote_rejetMediane);
    name_Commune_03110.push(nameCommune);
    Pourcentage_03110.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03110.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03110.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03110.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03110.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03110 = [];
const vote_lepen_03110 = [];
const vote_rejet_03110 = [];
const vote_macronpop_03110 = [];
const vote_lepenpop_03110 = [];
const vote_rejetpop_03110 = [];
const name_Commune_03110 = [];
const Pourcentage_03110 = [];
const Pourcentage_rejet_03110 = [];
const vote_gene_macron_03110 = [];
const vote_gene_lepen_03110 = [];
const vote_gene_rejet_03110 = [];

async function chartIt03110(){
    await GraphDATA03110();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03110-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03110
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03110
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03110-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03110,vote_lepen_03110,vote_rejet_03110]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03110-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03110,vote_lepenpop_03110,vote_rejetpop_03110]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03110"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03110
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03110
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03110
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03111*/
/*------------------------------------------------------------------ */
async function GraphDATA03111() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03111.push(vote_macron); 
    vote_lepen_03111.push(vote_lepen);
    vote_rejet_03111.push(vote_rejet);
    vote_macronpop_03111.push(vote_macronMediane);
    vote_lepenpop_03111.push(vote_lepenMediane);
    vote_rejetpop_03111.push(vote_rejetMediane);
    name_Commune_03111.push(nameCommune);
    Pourcentage_03111.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03111.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03111.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03111.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03111.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03111 = [];
const vote_lepen_03111 = [];
const vote_rejet_03111 = [];
const vote_macronpop_03111 = [];
const vote_lepenpop_03111 = [];
const vote_rejetpop_03111 = [];
const name_Commune_03111 = [];
const Pourcentage_03111 = [];
const Pourcentage_rejet_03111 = [];
const vote_gene_macron_03111 = [];
const vote_gene_lepen_03111 = [];
const vote_gene_rejet_03111 = [];

async function chartIt03111(){
    await GraphDATA03111();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03111-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03111
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03111
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03111-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03111,vote_lepen_03111,vote_rejet_03111]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03111-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03111,vote_lepenpop_03111,vote_rejetpop_03111]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03111"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03111
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03111
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03111
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03112*/
/*------------------------------------------------------------------ */
async function GraphDATA03112() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03112.push(vote_macron); 
    vote_lepen_03112.push(vote_lepen);
    vote_rejet_03112.push(vote_rejet);
    vote_macronpop_03112.push(vote_macronMediane);
    vote_lepenpop_03112.push(vote_lepenMediane);
    vote_rejetpop_03112.push(vote_rejetMediane);
    name_Commune_03112.push(nameCommune);
    Pourcentage_03112.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03112.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03112.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03112.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03112.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03112 = [];
const vote_lepen_03112 = [];
const vote_rejet_03112 = [];
const vote_macronpop_03112 = [];
const vote_lepenpop_03112 = [];
const vote_rejetpop_03112 = [];
const name_Commune_03112 = [];
const Pourcentage_03112 = [];
const Pourcentage_rejet_03112 = [];
const vote_gene_macron_03112 = [];
const vote_gene_lepen_03112 = [];
const vote_gene_rejet_03112 = [];

async function chartIt03112(){
    await GraphDATA03112();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03112-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03112
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03112
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03112-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03112,vote_lepen_03112,vote_rejet_03112]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03112-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03112,vote_lepenpop_03112,vote_rejetpop_03112]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03112"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03112
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03112
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03112
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03113*/
/*------------------------------------------------------------------ */
async function GraphDATA03113() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03113.push(vote_macron); 
    vote_lepen_03113.push(vote_lepen);
    vote_rejet_03113.push(vote_rejet);
    vote_macronpop_03113.push(vote_macronMediane);
    vote_lepenpop_03113.push(vote_lepenMediane);
    vote_rejetpop_03113.push(vote_rejetMediane);
    name_Commune_03113.push(nameCommune);
    Pourcentage_03113.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03113.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03113.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03113.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03113.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03113 = [];
const vote_lepen_03113 = [];
const vote_rejet_03113 = [];
const vote_macronpop_03113 = [];
const vote_lepenpop_03113 = [];
const vote_rejetpop_03113 = [];
const name_Commune_03113 = [];
const Pourcentage_03113 = [];
const Pourcentage_rejet_03113 = [];
const vote_gene_macron_03113 = [];
const vote_gene_lepen_03113 = [];
const vote_gene_rejet_03113 = [];

async function chartIt03113(){
    await GraphDATA03113();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03113-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03113
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03113
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03113-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03113,vote_lepen_03113,vote_rejet_03113]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03113-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03113,vote_lepenpop_03113,vote_rejetpop_03113]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03113"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03113
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03113
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03113
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03114*/
/*------------------------------------------------------------------ */
async function GraphDATA03114() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03114.push(vote_macron); 
    vote_lepen_03114.push(vote_lepen);
    vote_rejet_03114.push(vote_rejet);
    vote_macronpop_03114.push(vote_macronMediane);
    vote_lepenpop_03114.push(vote_lepenMediane);
    vote_rejetpop_03114.push(vote_rejetMediane);
    name_Commune_03114.push(nameCommune);
    Pourcentage_03114.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03114.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03114.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03114.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03114.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03114 = [];
const vote_lepen_03114 = [];
const vote_rejet_03114 = [];
const vote_macronpop_03114 = [];
const vote_lepenpop_03114 = [];
const vote_rejetpop_03114 = [];
const name_Commune_03114 = [];
const Pourcentage_03114 = [];
const Pourcentage_rejet_03114 = [];
const vote_gene_macron_03114 = [];
const vote_gene_lepen_03114 = [];
const vote_gene_rejet_03114 = [];

async function chartIt03114(){
    await GraphDATA03114();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03114-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03114
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03114
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03114-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03114,vote_lepen_03114,vote_rejet_03114]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03114-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03114,vote_lepenpop_03114,vote_rejetpop_03114]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03114"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03114
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03114
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03114
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03115*/
/*------------------------------------------------------------------ */
async function GraphDATA03115() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03115.push(vote_macron); 
    vote_lepen_03115.push(vote_lepen);
    vote_rejet_03115.push(vote_rejet);
    vote_macronpop_03115.push(vote_macronMediane);
    vote_lepenpop_03115.push(vote_lepenMediane);
    vote_rejetpop_03115.push(vote_rejetMediane);
    name_Commune_03115.push(nameCommune);
    Pourcentage_03115.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03115.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03115.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03115.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03115.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03115 = [];
const vote_lepen_03115 = [];
const vote_rejet_03115 = [];
const vote_macronpop_03115 = [];
const vote_lepenpop_03115 = [];
const vote_rejetpop_03115 = [];
const name_Commune_03115 = [];
const Pourcentage_03115 = [];
const Pourcentage_rejet_03115 = [];
const vote_gene_macron_03115 = [];
const vote_gene_lepen_03115 = [];
const vote_gene_rejet_03115 = [];

async function chartIt03115(){
    await GraphDATA03115();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03115-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03115
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03115
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03115-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03115,vote_lepen_03115,vote_rejet_03115]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03115-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03115,vote_lepenpop_03115,vote_rejetpop_03115]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03115"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03115
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03115
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03115
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03116*/
/*------------------------------------------------------------------ */
async function GraphDATA03116() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03116.push(vote_macron); 
    vote_lepen_03116.push(vote_lepen);
    vote_rejet_03116.push(vote_rejet);
    vote_macronpop_03116.push(vote_macronMediane);
    vote_lepenpop_03116.push(vote_lepenMediane);
    vote_rejetpop_03116.push(vote_rejetMediane);
    name_Commune_03116.push(nameCommune);
    Pourcentage_03116.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03116.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03116.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03116.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03116.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03116 = [];
const vote_lepen_03116 = [];
const vote_rejet_03116 = [];
const vote_macronpop_03116 = [];
const vote_lepenpop_03116 = [];
const vote_rejetpop_03116 = [];
const name_Commune_03116 = [];
const Pourcentage_03116 = [];
const Pourcentage_rejet_03116 = [];
const vote_gene_macron_03116 = [];
const vote_gene_lepen_03116 = [];
const vote_gene_rejet_03116 = [];

async function chartIt03116(){
    await GraphDATA03116();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03116-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03116
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03116
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03116-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03116,vote_lepen_03116,vote_rejet_03116]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03116-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03116,vote_lepenpop_03116,vote_rejetpop_03116]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03116"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03116
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03116
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03116
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03117*/
/*------------------------------------------------------------------ */
async function GraphDATA03117() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03117.push(vote_macron); 
    vote_lepen_03117.push(vote_lepen);
    vote_rejet_03117.push(vote_rejet);
    vote_macronpop_03117.push(vote_macronMediane);
    vote_lepenpop_03117.push(vote_lepenMediane);
    vote_rejetpop_03117.push(vote_rejetMediane);
    name_Commune_03117.push(nameCommune);
    Pourcentage_03117.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03117.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03117.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03117.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03117.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03117 = [];
const vote_lepen_03117 = [];
const vote_rejet_03117 = [];
const vote_macronpop_03117 = [];
const vote_lepenpop_03117 = [];
const vote_rejetpop_03117 = [];
const name_Commune_03117 = [];
const Pourcentage_03117 = [];
const Pourcentage_rejet_03117 = [];
const vote_gene_macron_03117 = [];
const vote_gene_lepen_03117 = [];
const vote_gene_rejet_03117 = [];

async function chartIt03117(){
    await GraphDATA03117();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03117-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03117
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03117
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03117-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03117,vote_lepen_03117,vote_rejet_03117]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03117-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03117,vote_lepenpop_03117,vote_rejetpop_03117]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03117"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03117
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03117
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03117
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03118*/
/*------------------------------------------------------------------ */
async function GraphDATA03118() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03118.push(vote_macron); 
    vote_lepen_03118.push(vote_lepen);
    vote_rejet_03118.push(vote_rejet);
    vote_macronpop_03118.push(vote_macronMediane);
    vote_lepenpop_03118.push(vote_lepenMediane);
    vote_rejetpop_03118.push(vote_rejetMediane);
    name_Commune_03118.push(nameCommune);
    Pourcentage_03118.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03118.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03118.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03118.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03118.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03118 = [];
const vote_lepen_03118 = [];
const vote_rejet_03118 = [];
const vote_macronpop_03118 = [];
const vote_lepenpop_03118 = [];
const vote_rejetpop_03118 = [];
const name_Commune_03118 = [];
const Pourcentage_03118 = [];
const Pourcentage_rejet_03118 = [];
const vote_gene_macron_03118 = [];
const vote_gene_lepen_03118 = [];
const vote_gene_rejet_03118 = [];

async function chartIt03118(){
    await GraphDATA03118();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03118-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03118
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03118
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03118-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03118,vote_lepen_03118,vote_rejet_03118]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03118-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03118,vote_lepenpop_03118,vote_rejetpop_03118]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03118"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03118
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03118
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03118
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03119*/
/*------------------------------------------------------------------ */
async function GraphDATA03119() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03119.push(vote_macron); 
    vote_lepen_03119.push(vote_lepen);
    vote_rejet_03119.push(vote_rejet);
    vote_macronpop_03119.push(vote_macronMediane);
    vote_lepenpop_03119.push(vote_lepenMediane);
    vote_rejetpop_03119.push(vote_rejetMediane);
    name_Commune_03119.push(nameCommune);
    Pourcentage_03119.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03119.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03119.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03119.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03119.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03119 = [];
const vote_lepen_03119 = [];
const vote_rejet_03119 = [];
const vote_macronpop_03119 = [];
const vote_lepenpop_03119 = [];
const vote_rejetpop_03119 = [];
const name_Commune_03119 = [];
const Pourcentage_03119 = [];
const Pourcentage_rejet_03119 = [];
const vote_gene_macron_03119 = [];
const vote_gene_lepen_03119 = [];
const vote_gene_rejet_03119 = [];

async function chartIt03119(){
    await GraphDATA03119();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03119-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03119
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03119
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03119-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03119,vote_lepen_03119,vote_rejet_03119]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03119-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03119,vote_lepenpop_03119,vote_rejetpop_03119]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03119"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03119
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03119
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03119
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03120*/
/*------------------------------------------------------------------ */
async function GraphDATA03120() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03120.push(vote_macron); 
    vote_lepen_03120.push(vote_lepen);
    vote_rejet_03120.push(vote_rejet);
    vote_macronpop_03120.push(vote_macronMediane);
    vote_lepenpop_03120.push(vote_lepenMediane);
    vote_rejetpop_03120.push(vote_rejetMediane);
    name_Commune_03120.push(nameCommune);
    Pourcentage_03120.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03120.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03120.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03120.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03120.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03120 = [];
const vote_lepen_03120 = [];
const vote_rejet_03120 = [];
const vote_macronpop_03120 = [];
const vote_lepenpop_03120 = [];
const vote_rejetpop_03120 = [];
const name_Commune_03120 = [];
const Pourcentage_03120 = [];
const Pourcentage_rejet_03120 = [];
const vote_gene_macron_03120 = [];
const vote_gene_lepen_03120 = [];
const vote_gene_rejet_03120 = [];

async function chartIt03120(){
    await GraphDATA03120();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03120-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03120
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03120
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03120-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03120,vote_lepen_03120,vote_rejet_03120]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03120-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03120,vote_lepenpop_03120,vote_rejetpop_03120]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03120"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03120
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03120
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03120
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03121*/
/*------------------------------------------------------------------ */
async function GraphDATA03121() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03121.push(vote_macron); 
    vote_lepen_03121.push(vote_lepen);
    vote_rejet_03121.push(vote_rejet);
    vote_macronpop_03121.push(vote_macronMediane);
    vote_lepenpop_03121.push(vote_lepenMediane);
    vote_rejetpop_03121.push(vote_rejetMediane);
    name_Commune_03121.push(nameCommune);
    Pourcentage_03121.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03121.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03121.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03121.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03121.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03121 = [];
const vote_lepen_03121 = [];
const vote_rejet_03121 = [];
const vote_macronpop_03121 = [];
const vote_lepenpop_03121 = [];
const vote_rejetpop_03121 = [];
const name_Commune_03121 = [];
const Pourcentage_03121 = [];
const Pourcentage_rejet_03121 = [];
const vote_gene_macron_03121 = [];
const vote_gene_lepen_03121 = [];
const vote_gene_rejet_03121 = [];

async function chartIt03121(){
    await GraphDATA03121();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03121-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03121
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03121
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03121-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03121,vote_lepen_03121,vote_rejet_03121]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03121-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03121,vote_lepenpop_03121,vote_rejetpop_03121]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03121"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03121
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03121
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03121
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03122*/
/*------------------------------------------------------------------ */
async function GraphDATA03122() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03122.push(vote_macron); 
    vote_lepen_03122.push(vote_lepen);
    vote_rejet_03122.push(vote_rejet);
    vote_macronpop_03122.push(vote_macronMediane);
    vote_lepenpop_03122.push(vote_lepenMediane);
    vote_rejetpop_03122.push(vote_rejetMediane);
    name_Commune_03122.push(nameCommune);
    Pourcentage_03122.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03122.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03122.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03122.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03122.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03122 = [];
const vote_lepen_03122 = [];
const vote_rejet_03122 = [];
const vote_macronpop_03122 = [];
const vote_lepenpop_03122 = [];
const vote_rejetpop_03122 = [];
const name_Commune_03122 = [];
const Pourcentage_03122 = [];
const Pourcentage_rejet_03122 = [];
const vote_gene_macron_03122 = [];
const vote_gene_lepen_03122 = [];
const vote_gene_rejet_03122 = [];

async function chartIt03122(){
    await GraphDATA03122();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03122-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03122
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03122
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03122-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03122,vote_lepen_03122,vote_rejet_03122]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03122-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03122,vote_lepenpop_03122,vote_rejetpop_03122]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03122"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03122
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03122
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03122
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03123*/
/*------------------------------------------------------------------ */
async function GraphDATA03123() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03123.push(vote_macron); 
    vote_lepen_03123.push(vote_lepen);
    vote_rejet_03123.push(vote_rejet);
    vote_macronpop_03123.push(vote_macronMediane);
    vote_lepenpop_03123.push(vote_lepenMediane);
    vote_rejetpop_03123.push(vote_rejetMediane);
    name_Commune_03123.push(nameCommune);
    Pourcentage_03123.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03123.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03123.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03123.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03123.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03123 = [];
const vote_lepen_03123 = [];
const vote_rejet_03123 = [];
const vote_macronpop_03123 = [];
const vote_lepenpop_03123 = [];
const vote_rejetpop_03123 = [];
const name_Commune_03123 = [];
const Pourcentage_03123 = [];
const Pourcentage_rejet_03123 = [];
const vote_gene_macron_03123 = [];
const vote_gene_lepen_03123 = [];
const vote_gene_rejet_03123 = [];

async function chartIt03123(){
    await GraphDATA03123();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03123-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03123
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03123
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03123-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03123,vote_lepen_03123,vote_rejet_03123]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03123-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03123,vote_lepenpop_03123,vote_rejetpop_03123]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03123"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03123
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03123
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03123
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03124*/
/*------------------------------------------------------------------ */
async function GraphDATA03124() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03124.push(vote_macron); 
    vote_lepen_03124.push(vote_lepen);
    vote_rejet_03124.push(vote_rejet);
    vote_macronpop_03124.push(vote_macronMediane);
    vote_lepenpop_03124.push(vote_lepenMediane);
    vote_rejetpop_03124.push(vote_rejetMediane);
    name_Commune_03124.push(nameCommune);
    Pourcentage_03124.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03124.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03124.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03124.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03124.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03124 = [];
const vote_lepen_03124 = [];
const vote_rejet_03124 = [];
const vote_macronpop_03124 = [];
const vote_lepenpop_03124 = [];
const vote_rejetpop_03124 = [];
const name_Commune_03124 = [];
const Pourcentage_03124 = [];
const Pourcentage_rejet_03124 = [];
const vote_gene_macron_03124 = [];
const vote_gene_lepen_03124 = [];
const vote_gene_rejet_03124 = [];

async function chartIt03124(){
    await GraphDATA03124();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03124-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03124
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03124
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03124-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03124,vote_lepen_03124,vote_rejet_03124]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03124-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03124,vote_lepenpop_03124,vote_rejetpop_03124]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03124"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03124
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03124
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03124
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03125*/
/*------------------------------------------------------------------ */
async function GraphDATA03125() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03125.push(vote_macron); 
    vote_lepen_03125.push(vote_lepen);
    vote_rejet_03125.push(vote_rejet);
    vote_macronpop_03125.push(vote_macronMediane);
    vote_lepenpop_03125.push(vote_lepenMediane);
    vote_rejetpop_03125.push(vote_rejetMediane);
    name_Commune_03125.push(nameCommune);
    Pourcentage_03125.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03125.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03125.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03125.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03125.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03125 = [];
const vote_lepen_03125 = [];
const vote_rejet_03125 = [];
const vote_macronpop_03125 = [];
const vote_lepenpop_03125 = [];
const vote_rejetpop_03125 = [];
const name_Commune_03125 = [];
const Pourcentage_03125 = [];
const Pourcentage_rejet_03125 = [];
const vote_gene_macron_03125 = [];
const vote_gene_lepen_03125 = [];
const vote_gene_rejet_03125 = [];

async function chartIt03125(){
    await GraphDATA03125();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03125-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03125
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03125
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03125-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03125,vote_lepen_03125,vote_rejet_03125]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03125-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03125,vote_lepenpop_03125,vote_rejetpop_03125]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03125"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03125
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03125
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03125
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03126*/
/*------------------------------------------------------------------ */
async function GraphDATA03126() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03126.push(vote_macron); 
    vote_lepen_03126.push(vote_lepen);
    vote_rejet_03126.push(vote_rejet);
    vote_macronpop_03126.push(vote_macronMediane);
    vote_lepenpop_03126.push(vote_lepenMediane);
    vote_rejetpop_03126.push(vote_rejetMediane);
    name_Commune_03126.push(nameCommune);
    Pourcentage_03126.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03126.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03126.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03126.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03126.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03126 = [];
const vote_lepen_03126 = [];
const vote_rejet_03126 = [];
const vote_macronpop_03126 = [];
const vote_lepenpop_03126 = [];
const vote_rejetpop_03126 = [];
const name_Commune_03126 = [];
const Pourcentage_03126 = [];
const Pourcentage_rejet_03126 = [];
const vote_gene_macron_03126 = [];
const vote_gene_lepen_03126 = [];
const vote_gene_rejet_03126 = [];

async function chartIt03126(){
    await GraphDATA03126();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03126-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03126
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03126
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03126-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03126,vote_lepen_03126,vote_rejet_03126]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03126-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03126,vote_lepenpop_03126,vote_rejetpop_03126]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03126"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03126
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03126
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03126
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03127*/
/*------------------------------------------------------------------ */
async function GraphDATA03127() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03127.push(vote_macron); 
    vote_lepen_03127.push(vote_lepen);
    vote_rejet_03127.push(vote_rejet);
    vote_macronpop_03127.push(vote_macronMediane);
    vote_lepenpop_03127.push(vote_lepenMediane);
    vote_rejetpop_03127.push(vote_rejetMediane);
    name_Commune_03127.push(nameCommune);
    Pourcentage_03127.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03127.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03127.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03127.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03127.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03127 = [];
const vote_lepen_03127 = [];
const vote_rejet_03127 = [];
const vote_macronpop_03127 = [];
const vote_lepenpop_03127 = [];
const vote_rejetpop_03127 = [];
const name_Commune_03127 = [];
const Pourcentage_03127 = [];
const Pourcentage_rejet_03127 = [];
const vote_gene_macron_03127 = [];
const vote_gene_lepen_03127 = [];
const vote_gene_rejet_03127 = [];

async function chartIt03127(){
    await GraphDATA03127();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03127-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03127
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03127
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03127-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03127,vote_lepen_03127,vote_rejet_03127]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03127-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03127,vote_lepenpop_03127,vote_rejetpop_03127]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03127"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03127
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03127
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03127
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03128*/
/*------------------------------------------------------------------ */
async function GraphDATA03128() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03128.push(vote_macron); 
    vote_lepen_03128.push(vote_lepen);
    vote_rejet_03128.push(vote_rejet);
    vote_macronpop_03128.push(vote_macronMediane);
    vote_lepenpop_03128.push(vote_lepenMediane);
    vote_rejetpop_03128.push(vote_rejetMediane);
    name_Commune_03128.push(nameCommune);
    Pourcentage_03128.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03128.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03128.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03128.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03128.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03128 = [];
const vote_lepen_03128 = [];
const vote_rejet_03128 = [];
const vote_macronpop_03128 = [];
const vote_lepenpop_03128 = [];
const vote_rejetpop_03128 = [];
const name_Commune_03128 = [];
const Pourcentage_03128 = [];
const Pourcentage_rejet_03128 = [];
const vote_gene_macron_03128 = [];
const vote_gene_lepen_03128 = [];
const vote_gene_rejet_03128 = [];

async function chartIt03128(){
    await GraphDATA03128();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03128-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03128
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03128
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03128-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03128,vote_lepen_03128,vote_rejet_03128]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03128-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03128,vote_lepenpop_03128,vote_rejetpop_03128]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03128"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03128
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03128
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03128
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03129*/
/*------------------------------------------------------------------ */
async function GraphDATA03129() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03129.push(vote_macron); 
    vote_lepen_03129.push(vote_lepen);
    vote_rejet_03129.push(vote_rejet);
    vote_macronpop_03129.push(vote_macronMediane);
    vote_lepenpop_03129.push(vote_lepenMediane);
    vote_rejetpop_03129.push(vote_rejetMediane);
    name_Commune_03129.push(nameCommune);
    Pourcentage_03129.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03129.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03129.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03129.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03129.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03129 = [];
const vote_lepen_03129 = [];
const vote_rejet_03129 = [];
const vote_macronpop_03129 = [];
const vote_lepenpop_03129 = [];
const vote_rejetpop_03129 = [];
const name_Commune_03129 = [];
const Pourcentage_03129 = [];
const Pourcentage_rejet_03129 = [];
const vote_gene_macron_03129 = [];
const vote_gene_lepen_03129 = [];
const vote_gene_rejet_03129 = [];

async function chartIt03129(){
    await GraphDATA03129();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03129-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03129
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03129
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03129-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03129,vote_lepen_03129,vote_rejet_03129]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03129-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03129,vote_lepenpop_03129,vote_rejetpop_03129]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03129"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03129
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03129
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03129
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03130*/
/*------------------------------------------------------------------ */
async function GraphDATA03130() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03130.push(vote_macron); 
    vote_lepen_03130.push(vote_lepen);
    vote_rejet_03130.push(vote_rejet);
    vote_macronpop_03130.push(vote_macronMediane);
    vote_lepenpop_03130.push(vote_lepenMediane);
    vote_rejetpop_03130.push(vote_rejetMediane);
    name_Commune_03130.push(nameCommune);
    Pourcentage_03130.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03130.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03130.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03130.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03130.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03130 = [];
const vote_lepen_03130 = [];
const vote_rejet_03130 = [];
const vote_macronpop_03130 = [];
const vote_lepenpop_03130 = [];
const vote_rejetpop_03130 = [];
const name_Commune_03130 = [];
const Pourcentage_03130 = [];
const Pourcentage_rejet_03130 = [];
const vote_gene_macron_03130 = [];
const vote_gene_lepen_03130 = [];
const vote_gene_rejet_03130 = [];

async function chartIt03130(){
    await GraphDATA03130();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03130-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03130
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03130
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03130-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03130,vote_lepen_03130,vote_rejet_03130]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03130-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03130,vote_lepenpop_03130,vote_rejetpop_03130]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03130"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03130
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03130
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03130
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03131*/
/*------------------------------------------------------------------ */
async function GraphDATA03131() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03131.push(vote_macron); 
    vote_lepen_03131.push(vote_lepen);
    vote_rejet_03131.push(vote_rejet);
    vote_macronpop_03131.push(vote_macronMediane);
    vote_lepenpop_03131.push(vote_lepenMediane);
    vote_rejetpop_03131.push(vote_rejetMediane);
    name_Commune_03131.push(nameCommune);
    Pourcentage_03131.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03131.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03131.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03131.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03131.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03131 = [];
const vote_lepen_03131 = [];
const vote_rejet_03131 = [];
const vote_macronpop_03131 = [];
const vote_lepenpop_03131 = [];
const vote_rejetpop_03131 = [];
const name_Commune_03131 = [];
const Pourcentage_03131 = [];
const Pourcentage_rejet_03131 = [];
const vote_gene_macron_03131 = [];
const vote_gene_lepen_03131 = [];
const vote_gene_rejet_03131 = [];

async function chartIt03131(){
    await GraphDATA03131();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03131-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03131
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03131
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03131-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03131,vote_lepen_03131,vote_rejet_03131]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03131-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03131,vote_lepenpop_03131,vote_rejetpop_03131]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03131"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03131
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03131
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03131
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03132*/
/*------------------------------------------------------------------ */
async function GraphDATA03132() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03132.push(vote_macron); 
    vote_lepen_03132.push(vote_lepen);
    vote_rejet_03132.push(vote_rejet);
    vote_macronpop_03132.push(vote_macronMediane);
    vote_lepenpop_03132.push(vote_lepenMediane);
    vote_rejetpop_03132.push(vote_rejetMediane);
    name_Commune_03132.push(nameCommune);
    Pourcentage_03132.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03132.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03132.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03132.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03132.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03132 = [];
const vote_lepen_03132 = [];
const vote_rejet_03132 = [];
const vote_macronpop_03132 = [];
const vote_lepenpop_03132 = [];
const vote_rejetpop_03132 = [];
const name_Commune_03132 = [];
const Pourcentage_03132 = [];
const Pourcentage_rejet_03132 = [];
const vote_gene_macron_03132 = [];
const vote_gene_lepen_03132 = [];
const vote_gene_rejet_03132 = [];

async function chartIt03132(){
    await GraphDATA03132();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03132-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03132
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03132
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03132-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03132,vote_lepen_03132,vote_rejet_03132]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03132-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03132,vote_lepenpop_03132,vote_rejetpop_03132]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03132"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03132
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03132
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03132
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03133*/
/*------------------------------------------------------------------ */
async function GraphDATA03133() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03133.push(vote_macron); 
    vote_lepen_03133.push(vote_lepen);
    vote_rejet_03133.push(vote_rejet);
    vote_macronpop_03133.push(vote_macronMediane);
    vote_lepenpop_03133.push(vote_lepenMediane);
    vote_rejetpop_03133.push(vote_rejetMediane);
    name_Commune_03133.push(nameCommune);
    Pourcentage_03133.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03133.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03133.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03133.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03133.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03133 = [];
const vote_lepen_03133 = [];
const vote_rejet_03133 = [];
const vote_macronpop_03133 = [];
const vote_lepenpop_03133 = [];
const vote_rejetpop_03133 = [];
const name_Commune_03133 = [];
const Pourcentage_03133 = [];
const Pourcentage_rejet_03133 = [];
const vote_gene_macron_03133 = [];
const vote_gene_lepen_03133 = [];
const vote_gene_rejet_03133 = [];

async function chartIt03133(){
    await GraphDATA03133();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03133-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03133
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03133
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03133-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03133,vote_lepen_03133,vote_rejet_03133]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03133-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03133,vote_lepenpop_03133,vote_rejetpop_03133]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03133"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03133
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03133
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03133
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03134*/
/*------------------------------------------------------------------ */
async function GraphDATA03134() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03134.push(vote_macron); 
    vote_lepen_03134.push(vote_lepen);
    vote_rejet_03134.push(vote_rejet);
    vote_macronpop_03134.push(vote_macronMediane);
    vote_lepenpop_03134.push(vote_lepenMediane);
    vote_rejetpop_03134.push(vote_rejetMediane);
    name_Commune_03134.push(nameCommune);
    Pourcentage_03134.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03134.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03134.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03134.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03134.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03134 = [];
const vote_lepen_03134 = [];
const vote_rejet_03134 = [];
const vote_macronpop_03134 = [];
const vote_lepenpop_03134 = [];
const vote_rejetpop_03134 = [];
const name_Commune_03134 = [];
const Pourcentage_03134 = [];
const Pourcentage_rejet_03134 = [];
const vote_gene_macron_03134 = [];
const vote_gene_lepen_03134 = [];
const vote_gene_rejet_03134 = [];

async function chartIt03134(){
    await GraphDATA03134();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03134-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03134
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03134
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03134-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03134,vote_lepen_03134,vote_rejet_03134]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03134-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03134,vote_lepenpop_03134,vote_rejetpop_03134]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03134"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03134
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03134
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03134
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03135*/
/*------------------------------------------------------------------ */
async function GraphDATA03135() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03135.push(vote_macron); 
    vote_lepen_03135.push(vote_lepen);
    vote_rejet_03135.push(vote_rejet);
    vote_macronpop_03135.push(vote_macronMediane);
    vote_lepenpop_03135.push(vote_lepenMediane);
    vote_rejetpop_03135.push(vote_rejetMediane);
    name_Commune_03135.push(nameCommune);
    Pourcentage_03135.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03135.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03135.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03135.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03135.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03135 = [];
const vote_lepen_03135 = [];
const vote_rejet_03135 = [];
const vote_macronpop_03135 = [];
const vote_lepenpop_03135 = [];
const vote_rejetpop_03135 = [];
const name_Commune_03135 = [];
const Pourcentage_03135 = [];
const Pourcentage_rejet_03135 = [];
const vote_gene_macron_03135 = [];
const vote_gene_lepen_03135 = [];
const vote_gene_rejet_03135 = [];

async function chartIt03135(){
    await GraphDATA03135();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03135-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03135
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03135
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03135-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03135,vote_lepen_03135,vote_rejet_03135]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03135-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03135,vote_lepenpop_03135,vote_rejetpop_03135]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03135"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03135
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03135
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03135
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03136*/
/*------------------------------------------------------------------ */
async function GraphDATA03136() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03136.push(vote_macron); 
    vote_lepen_03136.push(vote_lepen);
    vote_rejet_03136.push(vote_rejet);
    vote_macronpop_03136.push(vote_macronMediane);
    vote_lepenpop_03136.push(vote_lepenMediane);
    vote_rejetpop_03136.push(vote_rejetMediane);
    name_Commune_03136.push(nameCommune);
    Pourcentage_03136.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03136.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03136.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03136.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03136.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03136 = [];
const vote_lepen_03136 = [];
const vote_rejet_03136 = [];
const vote_macronpop_03136 = [];
const vote_lepenpop_03136 = [];
const vote_rejetpop_03136 = [];
const name_Commune_03136 = [];
const Pourcentage_03136 = [];
const Pourcentage_rejet_03136 = [];
const vote_gene_macron_03136 = [];
const vote_gene_lepen_03136 = [];
const vote_gene_rejet_03136 = [];

async function chartIt03136(){
    await GraphDATA03136();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03136-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03136
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03136
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03136-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03136,vote_lepen_03136,vote_rejet_03136]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03136-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03136,vote_lepenpop_03136,vote_rejetpop_03136]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03136"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03136
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03136
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03136
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03137*/
/*------------------------------------------------------------------ */
async function GraphDATA03137() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03137.push(vote_macron); 
    vote_lepen_03137.push(vote_lepen);
    vote_rejet_03137.push(vote_rejet);
    vote_macronpop_03137.push(vote_macronMediane);
    vote_lepenpop_03137.push(vote_lepenMediane);
    vote_rejetpop_03137.push(vote_rejetMediane);
    name_Commune_03137.push(nameCommune);
    Pourcentage_03137.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03137.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03137.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03137.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03137.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03137 = [];
const vote_lepen_03137 = [];
const vote_rejet_03137 = [];
const vote_macronpop_03137 = [];
const vote_lepenpop_03137 = [];
const vote_rejetpop_03137 = [];
const name_Commune_03137 = [];
const Pourcentage_03137 = [];
const Pourcentage_rejet_03137 = [];
const vote_gene_macron_03137 = [];
const vote_gene_lepen_03137 = [];
const vote_gene_rejet_03137 = [];

async function chartIt03137(){
    await GraphDATA03137();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03137-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03137
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03137
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03137-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03137,vote_lepen_03137,vote_rejet_03137]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03137-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03137,vote_lepenpop_03137,vote_rejetpop_03137]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03137"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03137
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03137
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03137
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03138*/
/*------------------------------------------------------------------ */
async function GraphDATA03138() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03138.push(vote_macron); 
    vote_lepen_03138.push(vote_lepen);
    vote_rejet_03138.push(vote_rejet);
    vote_macronpop_03138.push(vote_macronMediane);
    vote_lepenpop_03138.push(vote_lepenMediane);
    vote_rejetpop_03138.push(vote_rejetMediane);
    name_Commune_03138.push(nameCommune);
    Pourcentage_03138.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03138.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03138.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03138.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03138.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03138 = [];
const vote_lepen_03138 = [];
const vote_rejet_03138 = [];
const vote_macronpop_03138 = [];
const vote_lepenpop_03138 = [];
const vote_rejetpop_03138 = [];
const name_Commune_03138 = [];
const Pourcentage_03138 = [];
const Pourcentage_rejet_03138 = [];
const vote_gene_macron_03138 = [];
const vote_gene_lepen_03138 = [];
const vote_gene_rejet_03138 = [];

async function chartIt03138(){
    await GraphDATA03138();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03138-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03138
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03138
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03138-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03138,vote_lepen_03138,vote_rejet_03138]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03138-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03138,vote_lepenpop_03138,vote_rejetpop_03138]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03138"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03138
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03138
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03138
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03139*/
/*------------------------------------------------------------------ */
async function GraphDATA03139() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03139.push(vote_macron); 
    vote_lepen_03139.push(vote_lepen);
    vote_rejet_03139.push(vote_rejet);
    vote_macronpop_03139.push(vote_macronMediane);
    vote_lepenpop_03139.push(vote_lepenMediane);
    vote_rejetpop_03139.push(vote_rejetMediane);
    name_Commune_03139.push(nameCommune);
    Pourcentage_03139.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03139.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03139.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03139.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03139.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03139 = [];
const vote_lepen_03139 = [];
const vote_rejet_03139 = [];
const vote_macronpop_03139 = [];
const vote_lepenpop_03139 = [];
const vote_rejetpop_03139 = [];
const name_Commune_03139 = [];
const Pourcentage_03139 = [];
const Pourcentage_rejet_03139 = [];
const vote_gene_macron_03139 = [];
const vote_gene_lepen_03139 = [];
const vote_gene_rejet_03139 = [];

async function chartIt03139(){
    await GraphDATA03139();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03139-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03139
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03139
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03139-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03139,vote_lepen_03139,vote_rejet_03139]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03139-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03139,vote_lepenpop_03139,vote_rejetpop_03139]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03139"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03139
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03139
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03139
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03140*/
/*------------------------------------------------------------------ */
async function GraphDATA03140() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03140.push(vote_macron); 
    vote_lepen_03140.push(vote_lepen);
    vote_rejet_03140.push(vote_rejet);
    vote_macronpop_03140.push(vote_macronMediane);
    vote_lepenpop_03140.push(vote_lepenMediane);
    vote_rejetpop_03140.push(vote_rejetMediane);
    name_Commune_03140.push(nameCommune);
    Pourcentage_03140.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03140.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03140.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03140.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03140.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03140 = [];
const vote_lepen_03140 = [];
const vote_rejet_03140 = [];
const vote_macronpop_03140 = [];
const vote_lepenpop_03140 = [];
const vote_rejetpop_03140 = [];
const name_Commune_03140 = [];
const Pourcentage_03140 = [];
const Pourcentage_rejet_03140 = [];
const vote_gene_macron_03140 = [];
const vote_gene_lepen_03140 = [];
const vote_gene_rejet_03140 = [];

async function chartIt03140(){
    await GraphDATA03140();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03140-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03140
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03140
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03140-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03140,vote_lepen_03140,vote_rejet_03140]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03140-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03140,vote_lepenpop_03140,vote_rejetpop_03140]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03140"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03140
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03140
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03140
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03141*/
/*------------------------------------------------------------------ */
async function GraphDATA03141() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03141.push(vote_macron); 
    vote_lepen_03141.push(vote_lepen);
    vote_rejet_03141.push(vote_rejet);
    vote_macronpop_03141.push(vote_macronMediane);
    vote_lepenpop_03141.push(vote_lepenMediane);
    vote_rejetpop_03141.push(vote_rejetMediane);
    name_Commune_03141.push(nameCommune);
    Pourcentage_03141.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03141.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03141.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03141.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03141.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03141 = [];
const vote_lepen_03141 = [];
const vote_rejet_03141 = [];
const vote_macronpop_03141 = [];
const vote_lepenpop_03141 = [];
const vote_rejetpop_03141 = [];
const name_Commune_03141 = [];
const Pourcentage_03141 = [];
const Pourcentage_rejet_03141 = [];
const vote_gene_macron_03141 = [];
const vote_gene_lepen_03141 = [];
const vote_gene_rejet_03141 = [];

async function chartIt03141(){
    await GraphDATA03141();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03141-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03141
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03141
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03141-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03141,vote_lepen_03141,vote_rejet_03141]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03141-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03141,vote_lepenpop_03141,vote_rejetpop_03141]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03141"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03141
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03141
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03141
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03142*/
/*------------------------------------------------------------------ */
async function GraphDATA03142() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03142.push(vote_macron); 
    vote_lepen_03142.push(vote_lepen);
    vote_rejet_03142.push(vote_rejet);
    vote_macronpop_03142.push(vote_macronMediane);
    vote_lepenpop_03142.push(vote_lepenMediane);
    vote_rejetpop_03142.push(vote_rejetMediane);
    name_Commune_03142.push(nameCommune);
    Pourcentage_03142.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03142.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03142.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03142.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03142.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03142 = [];
const vote_lepen_03142 = [];
const vote_rejet_03142 = [];
const vote_macronpop_03142 = [];
const vote_lepenpop_03142 = [];
const vote_rejetpop_03142 = [];
const name_Commune_03142 = [];
const Pourcentage_03142 = [];
const Pourcentage_rejet_03142 = [];
const vote_gene_macron_03142 = [];
const vote_gene_lepen_03142 = [];
const vote_gene_rejet_03142 = [];

async function chartIt03142(){
    await GraphDATA03142();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03142-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03142
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03142
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03142-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03142,vote_lepen_03142,vote_rejet_03142]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03142-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03142,vote_lepenpop_03142,vote_rejetpop_03142]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03142"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03142
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03142
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03142
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03143*/
/*------------------------------------------------------------------ */
async function GraphDATA03143() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03143.push(vote_macron); 
    vote_lepen_03143.push(vote_lepen);
    vote_rejet_03143.push(vote_rejet);
    vote_macronpop_03143.push(vote_macronMediane);
    vote_lepenpop_03143.push(vote_lepenMediane);
    vote_rejetpop_03143.push(vote_rejetMediane);
    name_Commune_03143.push(nameCommune);
    Pourcentage_03143.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03143.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03143.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03143.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03143.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03143 = [];
const vote_lepen_03143 = [];
const vote_rejet_03143 = [];
const vote_macronpop_03143 = [];
const vote_lepenpop_03143 = [];
const vote_rejetpop_03143 = [];
const name_Commune_03143 = [];
const Pourcentage_03143 = [];
const Pourcentage_rejet_03143 = [];
const vote_gene_macron_03143 = [];
const vote_gene_lepen_03143 = [];
const vote_gene_rejet_03143 = [];

async function chartIt03143(){
    await GraphDATA03143();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03143-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03143
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03143
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03143-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03143,vote_lepen_03143,vote_rejet_03143]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03143-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03143,vote_lepenpop_03143,vote_rejetpop_03143]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03143"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03143
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03143
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03143
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03144*/
/*------------------------------------------------------------------ */
async function GraphDATA03144() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03144.push(vote_macron); 
    vote_lepen_03144.push(vote_lepen);
    vote_rejet_03144.push(vote_rejet);
    vote_macronpop_03144.push(vote_macronMediane);
    vote_lepenpop_03144.push(vote_lepenMediane);
    vote_rejetpop_03144.push(vote_rejetMediane);
    name_Commune_03144.push(nameCommune);
    Pourcentage_03144.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03144.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03144.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03144.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03144.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03144 = [];
const vote_lepen_03144 = [];
const vote_rejet_03144 = [];
const vote_macronpop_03144 = [];
const vote_lepenpop_03144 = [];
const vote_rejetpop_03144 = [];
const name_Commune_03144 = [];
const Pourcentage_03144 = [];
const Pourcentage_rejet_03144 = [];
const vote_gene_macron_03144 = [];
const vote_gene_lepen_03144 = [];
const vote_gene_rejet_03144 = [];

async function chartIt03144(){
    await GraphDATA03144();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03144-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03144
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03144
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03144-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03144,vote_lepen_03144,vote_rejet_03144]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03144-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03144,vote_lepenpop_03144,vote_rejetpop_03144]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03144"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03144
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03144
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03144
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03145*/
/*------------------------------------------------------------------ */
async function GraphDATA03145() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03145.push(vote_macron); 
    vote_lepen_03145.push(vote_lepen);
    vote_rejet_03145.push(vote_rejet);
    vote_macronpop_03145.push(vote_macronMediane);
    vote_lepenpop_03145.push(vote_lepenMediane);
    vote_rejetpop_03145.push(vote_rejetMediane);
    name_Commune_03145.push(nameCommune);
    Pourcentage_03145.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03145.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03145.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03145.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03145.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03145 = [];
const vote_lepen_03145 = [];
const vote_rejet_03145 = [];
const vote_macronpop_03145 = [];
const vote_lepenpop_03145 = [];
const vote_rejetpop_03145 = [];
const name_Commune_03145 = [];
const Pourcentage_03145 = [];
const Pourcentage_rejet_03145 = [];
const vote_gene_macron_03145 = [];
const vote_gene_lepen_03145 = [];
const vote_gene_rejet_03145 = [];

async function chartIt03145(){
    await GraphDATA03145();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03145-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03145
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03145
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03145-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03145,vote_lepen_03145,vote_rejet_03145]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03145-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03145,vote_lepenpop_03145,vote_rejetpop_03145]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03145"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03145
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03145
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03145
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03146*/
/*------------------------------------------------------------------ */
async function GraphDATA03146() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03146.push(vote_macron); 
    vote_lepen_03146.push(vote_lepen);
    vote_rejet_03146.push(vote_rejet);
    vote_macronpop_03146.push(vote_macronMediane);
    vote_lepenpop_03146.push(vote_lepenMediane);
    vote_rejetpop_03146.push(vote_rejetMediane);
    name_Commune_03146.push(nameCommune);
    Pourcentage_03146.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03146.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03146.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03146.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03146.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03146 = [];
const vote_lepen_03146 = [];
const vote_rejet_03146 = [];
const vote_macronpop_03146 = [];
const vote_lepenpop_03146 = [];
const vote_rejetpop_03146 = [];
const name_Commune_03146 = [];
const Pourcentage_03146 = [];
const Pourcentage_rejet_03146 = [];
const vote_gene_macron_03146 = [];
const vote_gene_lepen_03146 = [];
const vote_gene_rejet_03146 = [];

async function chartIt03146(){
    await GraphDATA03146();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03146-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03146
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03146
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03146-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03146,vote_lepen_03146,vote_rejet_03146]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03146-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03146,vote_lepenpop_03146,vote_rejetpop_03146]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03146"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03146
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03146
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03146
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03147*/
/*------------------------------------------------------------------ */
async function GraphDATA03147() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03147.push(vote_macron); 
    vote_lepen_03147.push(vote_lepen);
    vote_rejet_03147.push(vote_rejet);
    vote_macronpop_03147.push(vote_macronMediane);
    vote_lepenpop_03147.push(vote_lepenMediane);
    vote_rejetpop_03147.push(vote_rejetMediane);
    name_Commune_03147.push(nameCommune);
    Pourcentage_03147.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03147.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03147.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03147.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03147.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03147 = [];
const vote_lepen_03147 = [];
const vote_rejet_03147 = [];
const vote_macronpop_03147 = [];
const vote_lepenpop_03147 = [];
const vote_rejetpop_03147 = [];
const name_Commune_03147 = [];
const Pourcentage_03147 = [];
const Pourcentage_rejet_03147 = [];
const vote_gene_macron_03147 = [];
const vote_gene_lepen_03147 = [];
const vote_gene_rejet_03147 = [];

async function chartIt03147(){
    await GraphDATA03147();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03147-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03147
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03147
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03147-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03147,vote_lepen_03147,vote_rejet_03147]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03147-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03147,vote_lepenpop_03147,vote_rejetpop_03147]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03147"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03147
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03147
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03147
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03148*/
/*------------------------------------------------------------------ */
async function GraphDATA03148() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03148.push(vote_macron); 
    vote_lepen_03148.push(vote_lepen);
    vote_rejet_03148.push(vote_rejet);
    vote_macronpop_03148.push(vote_macronMediane);
    vote_lepenpop_03148.push(vote_lepenMediane);
    vote_rejetpop_03148.push(vote_rejetMediane);
    name_Commune_03148.push(nameCommune);
    Pourcentage_03148.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03148.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03148.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03148.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03148.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03148 = [];
const vote_lepen_03148 = [];
const vote_rejet_03148 = [];
const vote_macronpop_03148 = [];
const vote_lepenpop_03148 = [];
const vote_rejetpop_03148 = [];
const name_Commune_03148 = [];
const Pourcentage_03148 = [];
const Pourcentage_rejet_03148 = [];
const vote_gene_macron_03148 = [];
const vote_gene_lepen_03148 = [];
const vote_gene_rejet_03148 = [];

async function chartIt03148(){
    await GraphDATA03148();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03148-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03148
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03148
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03148-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03148,vote_lepen_03148,vote_rejet_03148]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03148-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03148,vote_lepenpop_03148,vote_rejetpop_03148]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03148"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03148
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03148
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03148
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03149*/
/*------------------------------------------------------------------ */
async function GraphDATA03149() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03149.push(vote_macron); 
    vote_lepen_03149.push(vote_lepen);
    vote_rejet_03149.push(vote_rejet);
    vote_macronpop_03149.push(vote_macronMediane);
    vote_lepenpop_03149.push(vote_lepenMediane);
    vote_rejetpop_03149.push(vote_rejetMediane);
    name_Commune_03149.push(nameCommune);
    Pourcentage_03149.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03149.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03149.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03149.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03149.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03149 = [];
const vote_lepen_03149 = [];
const vote_rejet_03149 = [];
const vote_macronpop_03149 = [];
const vote_lepenpop_03149 = [];
const vote_rejetpop_03149 = [];
const name_Commune_03149 = [];
const Pourcentage_03149 = [];
const Pourcentage_rejet_03149 = [];
const vote_gene_macron_03149 = [];
const vote_gene_lepen_03149 = [];
const vote_gene_rejet_03149 = [];

async function chartIt03149(){
    await GraphDATA03149();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03149-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03149
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03149
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03149-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03149,vote_lepen_03149,vote_rejet_03149]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03149-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03149,vote_lepenpop_03149,vote_rejetpop_03149]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03149"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03149
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03149
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03149
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03150*/
/*------------------------------------------------------------------ */
async function GraphDATA03150() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03150.push(vote_macron); 
    vote_lepen_03150.push(vote_lepen);
    vote_rejet_03150.push(vote_rejet);
    vote_macronpop_03150.push(vote_macronMediane);
    vote_lepenpop_03150.push(vote_lepenMediane);
    vote_rejetpop_03150.push(vote_rejetMediane);
    name_Commune_03150.push(nameCommune);
    Pourcentage_03150.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03150.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03150.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03150.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03150.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03150 = [];
const vote_lepen_03150 = [];
const vote_rejet_03150 = [];
const vote_macronpop_03150 = [];
const vote_lepenpop_03150 = [];
const vote_rejetpop_03150 = [];
const name_Commune_03150 = [];
const Pourcentage_03150 = [];
const Pourcentage_rejet_03150 = [];
const vote_gene_macron_03150 = [];
const vote_gene_lepen_03150 = [];
const vote_gene_rejet_03150 = [];

async function chartIt03150(){
    await GraphDATA03150();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03150-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03150
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03150
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03150-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03150,vote_lepen_03150,vote_rejet_03150]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03150-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03150,vote_lepenpop_03150,vote_rejetpop_03150]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03150"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03150
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03150
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03150
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03151*/
/*------------------------------------------------------------------ */
async function GraphDATA03151() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03151.push(vote_macron); 
    vote_lepen_03151.push(vote_lepen);
    vote_rejet_03151.push(vote_rejet);
    vote_macronpop_03151.push(vote_macronMediane);
    vote_lepenpop_03151.push(vote_lepenMediane);
    vote_rejetpop_03151.push(vote_rejetMediane);
    name_Commune_03151.push(nameCommune);
    Pourcentage_03151.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03151.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03151.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03151.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03151.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03151 = [];
const vote_lepen_03151 = [];
const vote_rejet_03151 = [];
const vote_macronpop_03151 = [];
const vote_lepenpop_03151 = [];
const vote_rejetpop_03151 = [];
const name_Commune_03151 = [];
const Pourcentage_03151 = [];
const Pourcentage_rejet_03151 = [];
const vote_gene_macron_03151 = [];
const vote_gene_lepen_03151 = [];
const vote_gene_rejet_03151 = [];

async function chartIt03151(){
    await GraphDATA03151();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03151-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03151
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03151
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03151-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03151,vote_lepen_03151,vote_rejet_03151]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03151-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03151,vote_lepenpop_03151,vote_rejetpop_03151]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03151"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03151
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03151
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03151
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03152*/
/*------------------------------------------------------------------ */
async function GraphDATA03152() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03152.push(vote_macron); 
    vote_lepen_03152.push(vote_lepen);
    vote_rejet_03152.push(vote_rejet);
    vote_macronpop_03152.push(vote_macronMediane);
    vote_lepenpop_03152.push(vote_lepenMediane);
    vote_rejetpop_03152.push(vote_rejetMediane);
    name_Commune_03152.push(nameCommune);
    Pourcentage_03152.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03152.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03152.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03152.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03152.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03152 = [];
const vote_lepen_03152 = [];
const vote_rejet_03152 = [];
const vote_macronpop_03152 = [];
const vote_lepenpop_03152 = [];
const vote_rejetpop_03152 = [];
const name_Commune_03152 = [];
const Pourcentage_03152 = [];
const Pourcentage_rejet_03152 = [];
const vote_gene_macron_03152 = [];
const vote_gene_lepen_03152 = [];
const vote_gene_rejet_03152 = [];

async function chartIt03152(){
    await GraphDATA03152();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03152-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03152
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03152
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03152-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03152,vote_lepen_03152,vote_rejet_03152]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03152-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03152,vote_lepenpop_03152,vote_rejetpop_03152]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03152"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03152
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03152
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03152
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03153*/
/*------------------------------------------------------------------ */
async function GraphDATA03153() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03153.push(vote_macron); 
    vote_lepen_03153.push(vote_lepen);
    vote_rejet_03153.push(vote_rejet);
    vote_macronpop_03153.push(vote_macronMediane);
    vote_lepenpop_03153.push(vote_lepenMediane);
    vote_rejetpop_03153.push(vote_rejetMediane);
    name_Commune_03153.push(nameCommune);
    Pourcentage_03153.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03153.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03153.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03153.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03153.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03153 = [];
const vote_lepen_03153 = [];
const vote_rejet_03153 = [];
const vote_macronpop_03153 = [];
const vote_lepenpop_03153 = [];
const vote_rejetpop_03153 = [];
const name_Commune_03153 = [];
const Pourcentage_03153 = [];
const Pourcentage_rejet_03153 = [];
const vote_gene_macron_03153 = [];
const vote_gene_lepen_03153 = [];
const vote_gene_rejet_03153 = [];

async function chartIt03153(){
    await GraphDATA03153();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03153-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03153
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03153
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03153-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03153,vote_lepen_03153,vote_rejet_03153]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03153-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03153,vote_lepenpop_03153,vote_rejetpop_03153]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03153"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03153
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03153
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03153
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03154*/
/*------------------------------------------------------------------ */
async function GraphDATA03154() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03154.push(vote_macron); 
    vote_lepen_03154.push(vote_lepen);
    vote_rejet_03154.push(vote_rejet);
    vote_macronpop_03154.push(vote_macronMediane);
    vote_lepenpop_03154.push(vote_lepenMediane);
    vote_rejetpop_03154.push(vote_rejetMediane);
    name_Commune_03154.push(nameCommune);
    Pourcentage_03154.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03154.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03154.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03154.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03154.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03154 = [];
const vote_lepen_03154 = [];
const vote_rejet_03154 = [];
const vote_macronpop_03154 = [];
const vote_lepenpop_03154 = [];
const vote_rejetpop_03154 = [];
const name_Commune_03154 = [];
const Pourcentage_03154 = [];
const Pourcentage_rejet_03154 = [];
const vote_gene_macron_03154 = [];
const vote_gene_lepen_03154 = [];
const vote_gene_rejet_03154 = [];

async function chartIt03154(){
    await GraphDATA03154();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03154-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03154
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03154
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03154-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03154,vote_lepen_03154,vote_rejet_03154]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03154-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03154,vote_lepenpop_03154,vote_rejetpop_03154]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03154"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03154
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03154
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03154
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03155*/
/*------------------------------------------------------------------ */
async function GraphDATA03155() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03155.push(vote_macron); 
    vote_lepen_03155.push(vote_lepen);
    vote_rejet_03155.push(vote_rejet);
    vote_macronpop_03155.push(vote_macronMediane);
    vote_lepenpop_03155.push(vote_lepenMediane);
    vote_rejetpop_03155.push(vote_rejetMediane);
    name_Commune_03155.push(nameCommune);
    Pourcentage_03155.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03155.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03155.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03155.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03155.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03155 = [];
const vote_lepen_03155 = [];
const vote_rejet_03155 = [];
const vote_macronpop_03155 = [];
const vote_lepenpop_03155 = [];
const vote_rejetpop_03155 = [];
const name_Commune_03155 = [];
const Pourcentage_03155 = [];
const Pourcentage_rejet_03155 = [];
const vote_gene_macron_03155 = [];
const vote_gene_lepen_03155 = [];
const vote_gene_rejet_03155 = [];

async function chartIt03155(){
    await GraphDATA03155();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03155-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03155
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03155
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03155-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03155,vote_lepen_03155,vote_rejet_03155]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03155-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03155,vote_lepenpop_03155,vote_rejetpop_03155]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03155"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03155
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03155
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03155
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03156*/
/*------------------------------------------------------------------ */
async function GraphDATA03156() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03156.push(vote_macron); 
    vote_lepen_03156.push(vote_lepen);
    vote_rejet_03156.push(vote_rejet);
    vote_macronpop_03156.push(vote_macronMediane);
    vote_lepenpop_03156.push(vote_lepenMediane);
    vote_rejetpop_03156.push(vote_rejetMediane);
    name_Commune_03156.push(nameCommune);
    Pourcentage_03156.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03156.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03156.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03156.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03156.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03156 = [];
const vote_lepen_03156 = [];
const vote_rejet_03156 = [];
const vote_macronpop_03156 = [];
const vote_lepenpop_03156 = [];
const vote_rejetpop_03156 = [];
const name_Commune_03156 = [];
const Pourcentage_03156 = [];
const Pourcentage_rejet_03156 = [];
const vote_gene_macron_03156 = [];
const vote_gene_lepen_03156 = [];
const vote_gene_rejet_03156 = [];

async function chartIt03156(){
    await GraphDATA03156();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03156-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03156
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03156
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03156-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03156,vote_lepen_03156,vote_rejet_03156]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03156-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03156,vote_lepenpop_03156,vote_rejetpop_03156]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03156"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03156
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03156
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03156
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03157*/
/*------------------------------------------------------------------ */
async function GraphDATA03157() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03157.push(vote_macron); 
    vote_lepen_03157.push(vote_lepen);
    vote_rejet_03157.push(vote_rejet);
    vote_macronpop_03157.push(vote_macronMediane);
    vote_lepenpop_03157.push(vote_lepenMediane);
    vote_rejetpop_03157.push(vote_rejetMediane);
    name_Commune_03157.push(nameCommune);
    Pourcentage_03157.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03157.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03157.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03157.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03157.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03157 = [];
const vote_lepen_03157 = [];
const vote_rejet_03157 = [];
const vote_macronpop_03157 = [];
const vote_lepenpop_03157 = [];
const vote_rejetpop_03157 = [];
const name_Commune_03157 = [];
const Pourcentage_03157 = [];
const Pourcentage_rejet_03157 = [];
const vote_gene_macron_03157 = [];
const vote_gene_lepen_03157 = [];
const vote_gene_rejet_03157 = [];

async function chartIt03157(){
    await GraphDATA03157();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03157-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03157
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03157
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03157-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03157,vote_lepen_03157,vote_rejet_03157]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03157-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03157,vote_lepenpop_03157,vote_rejetpop_03157]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03157"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03157
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03157
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03157
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03158*/
/*------------------------------------------------------------------ */
async function GraphDATA03158() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03158.push(vote_macron); 
    vote_lepen_03158.push(vote_lepen);
    vote_rejet_03158.push(vote_rejet);
    vote_macronpop_03158.push(vote_macronMediane);
    vote_lepenpop_03158.push(vote_lepenMediane);
    vote_rejetpop_03158.push(vote_rejetMediane);
    name_Commune_03158.push(nameCommune);
    Pourcentage_03158.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03158.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03158.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03158.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03158.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03158 = [];
const vote_lepen_03158 = [];
const vote_rejet_03158 = [];
const vote_macronpop_03158 = [];
const vote_lepenpop_03158 = [];
const vote_rejetpop_03158 = [];
const name_Commune_03158 = [];
const Pourcentage_03158 = [];
const Pourcentage_rejet_03158 = [];
const vote_gene_macron_03158 = [];
const vote_gene_lepen_03158 = [];
const vote_gene_rejet_03158 = [];

async function chartIt03158(){
    await GraphDATA03158();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03158-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03158
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03158
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03158-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03158,vote_lepen_03158,vote_rejet_03158]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03158-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03158,vote_lepenpop_03158,vote_rejetpop_03158]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03158"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03158
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03158
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03158
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03159*/
/*------------------------------------------------------------------ */
async function GraphDATA03159() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03159.push(vote_macron); 
    vote_lepen_03159.push(vote_lepen);
    vote_rejet_03159.push(vote_rejet);
    vote_macronpop_03159.push(vote_macronMediane);
    vote_lepenpop_03159.push(vote_lepenMediane);
    vote_rejetpop_03159.push(vote_rejetMediane);
    name_Commune_03159.push(nameCommune);
    Pourcentage_03159.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03159.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03159.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03159.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03159.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03159 = [];
const vote_lepen_03159 = [];
const vote_rejet_03159 = [];
const vote_macronpop_03159 = [];
const vote_lepenpop_03159 = [];
const vote_rejetpop_03159 = [];
const name_Commune_03159 = [];
const Pourcentage_03159 = [];
const Pourcentage_rejet_03159 = [];
const vote_gene_macron_03159 = [];
const vote_gene_lepen_03159 = [];
const vote_gene_rejet_03159 = [];

async function chartIt03159(){
    await GraphDATA03159();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03159-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03159
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03159
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03159-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03159,vote_lepen_03159,vote_rejet_03159]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03159-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03159,vote_lepenpop_03159,vote_rejetpop_03159]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03159"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03159
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03159
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03159
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03160*/
/*------------------------------------------------------------------ */
async function GraphDATA03160() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03160.push(vote_macron); 
    vote_lepen_03160.push(vote_lepen);
    vote_rejet_03160.push(vote_rejet);
    vote_macronpop_03160.push(vote_macronMediane);
    vote_lepenpop_03160.push(vote_lepenMediane);
    vote_rejetpop_03160.push(vote_rejetMediane);
    name_Commune_03160.push(nameCommune);
    Pourcentage_03160.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03160.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03160.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03160.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03160.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03160 = [];
const vote_lepen_03160 = [];
const vote_rejet_03160 = [];
const vote_macronpop_03160 = [];
const vote_lepenpop_03160 = [];
const vote_rejetpop_03160 = [];
const name_Commune_03160 = [];
const Pourcentage_03160 = [];
const Pourcentage_rejet_03160 = [];
const vote_gene_macron_03160 = [];
const vote_gene_lepen_03160 = [];
const vote_gene_rejet_03160 = [];

async function chartIt03160(){
    await GraphDATA03160();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03160-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03160
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03160
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03160-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03160,vote_lepen_03160,vote_rejet_03160]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03160-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03160,vote_lepenpop_03160,vote_rejetpop_03160]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03160"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03160
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03160
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03160
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03161*/
/*------------------------------------------------------------------ */
async function GraphDATA03161() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03161.push(vote_macron); 
    vote_lepen_03161.push(vote_lepen);
    vote_rejet_03161.push(vote_rejet);
    vote_macronpop_03161.push(vote_macronMediane);
    vote_lepenpop_03161.push(vote_lepenMediane);
    vote_rejetpop_03161.push(vote_rejetMediane);
    name_Commune_03161.push(nameCommune);
    Pourcentage_03161.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03161.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03161.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03161.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03161.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03161 = [];
const vote_lepen_03161 = [];
const vote_rejet_03161 = [];
const vote_macronpop_03161 = [];
const vote_lepenpop_03161 = [];
const vote_rejetpop_03161 = [];
const name_Commune_03161 = [];
const Pourcentage_03161 = [];
const Pourcentage_rejet_03161 = [];
const vote_gene_macron_03161 = [];
const vote_gene_lepen_03161 = [];
const vote_gene_rejet_03161 = [];

async function chartIt03161(){
    await GraphDATA03161();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03161-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03161
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03161
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03161-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03161,vote_lepen_03161,vote_rejet_03161]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03161-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03161,vote_lepenpop_03161,vote_rejetpop_03161]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03161"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03161
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03161
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03161
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03162*/
/*------------------------------------------------------------------ */
async function GraphDATA03162() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03162.push(vote_macron); 
    vote_lepen_03162.push(vote_lepen);
    vote_rejet_03162.push(vote_rejet);
    vote_macronpop_03162.push(vote_macronMediane);
    vote_lepenpop_03162.push(vote_lepenMediane);
    vote_rejetpop_03162.push(vote_rejetMediane);
    name_Commune_03162.push(nameCommune);
    Pourcentage_03162.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03162.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03162.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03162.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03162.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03162 = [];
const vote_lepen_03162 = [];
const vote_rejet_03162 = [];
const vote_macronpop_03162 = [];
const vote_lepenpop_03162 = [];
const vote_rejetpop_03162 = [];
const name_Commune_03162 = [];
const Pourcentage_03162 = [];
const Pourcentage_rejet_03162 = [];
const vote_gene_macron_03162 = [];
const vote_gene_lepen_03162 = [];
const vote_gene_rejet_03162 = [];

async function chartIt03162(){
    await GraphDATA03162();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03162-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03162
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03162
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03162-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03162,vote_lepen_03162,vote_rejet_03162]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03162-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03162,vote_lepenpop_03162,vote_rejetpop_03162]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03162"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03162
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03162
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03162
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03163*/
/*------------------------------------------------------------------ */
async function GraphDATA03163() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03163.push(vote_macron); 
    vote_lepen_03163.push(vote_lepen);
    vote_rejet_03163.push(vote_rejet);
    vote_macronpop_03163.push(vote_macronMediane);
    vote_lepenpop_03163.push(vote_lepenMediane);
    vote_rejetpop_03163.push(vote_rejetMediane);
    name_Commune_03163.push(nameCommune);
    Pourcentage_03163.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03163.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03163.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03163.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03163.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03163 = [];
const vote_lepen_03163 = [];
const vote_rejet_03163 = [];
const vote_macronpop_03163 = [];
const vote_lepenpop_03163 = [];
const vote_rejetpop_03163 = [];
const name_Commune_03163 = [];
const Pourcentage_03163 = [];
const Pourcentage_rejet_03163 = [];
const vote_gene_macron_03163 = [];
const vote_gene_lepen_03163 = [];
const vote_gene_rejet_03163 = [];

async function chartIt03163(){
    await GraphDATA03163();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03163-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03163
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03163
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03163-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03163,vote_lepen_03163,vote_rejet_03163]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03163-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03163,vote_lepenpop_03163,vote_rejetpop_03163]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03163"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03163
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03163
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03163
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03164*/
/*------------------------------------------------------------------ */
async function GraphDATA03164() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03164.push(vote_macron); 
    vote_lepen_03164.push(vote_lepen);
    vote_rejet_03164.push(vote_rejet);
    vote_macronpop_03164.push(vote_macronMediane);
    vote_lepenpop_03164.push(vote_lepenMediane);
    vote_rejetpop_03164.push(vote_rejetMediane);
    name_Commune_03164.push(nameCommune);
    Pourcentage_03164.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03164.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03164.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03164.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03164.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03164 = [];
const vote_lepen_03164 = [];
const vote_rejet_03164 = [];
const vote_macronpop_03164 = [];
const vote_lepenpop_03164 = [];
const vote_rejetpop_03164 = [];
const name_Commune_03164 = [];
const Pourcentage_03164 = [];
const Pourcentage_rejet_03164 = [];
const vote_gene_macron_03164 = [];
const vote_gene_lepen_03164 = [];
const vote_gene_rejet_03164 = [];

async function chartIt03164(){
    await GraphDATA03164();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03164-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03164
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03164
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03164-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03164,vote_lepen_03164,vote_rejet_03164]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03164-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03164,vote_lepenpop_03164,vote_rejetpop_03164]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03164"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03164
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03164
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03164
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03165*/
/*------------------------------------------------------------------ */
async function GraphDATA03165() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03165.push(vote_macron); 
    vote_lepen_03165.push(vote_lepen);
    vote_rejet_03165.push(vote_rejet);
    vote_macronpop_03165.push(vote_macronMediane);
    vote_lepenpop_03165.push(vote_lepenMediane);
    vote_rejetpop_03165.push(vote_rejetMediane);
    name_Commune_03165.push(nameCommune);
    Pourcentage_03165.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03165.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03165.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03165.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03165.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03165 = [];
const vote_lepen_03165 = [];
const vote_rejet_03165 = [];
const vote_macronpop_03165 = [];
const vote_lepenpop_03165 = [];
const vote_rejetpop_03165 = [];
const name_Commune_03165 = [];
const Pourcentage_03165 = [];
const Pourcentage_rejet_03165 = [];
const vote_gene_macron_03165 = [];
const vote_gene_lepen_03165 = [];
const vote_gene_rejet_03165 = [];

async function chartIt03165(){
    await GraphDATA03165();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03165-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03165
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03165
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03165-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03165,vote_lepen_03165,vote_rejet_03165]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03165-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03165,vote_lepenpop_03165,vote_rejetpop_03165]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03165"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03165
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03165
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03165
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03166*/
/*------------------------------------------------------------------ */
async function GraphDATA03166() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03166.push(vote_macron); 
    vote_lepen_03166.push(vote_lepen);
    vote_rejet_03166.push(vote_rejet);
    vote_macronpop_03166.push(vote_macronMediane);
    vote_lepenpop_03166.push(vote_lepenMediane);
    vote_rejetpop_03166.push(vote_rejetMediane);
    name_Commune_03166.push(nameCommune);
    Pourcentage_03166.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03166.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03166.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03166.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03166.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03166 = [];
const vote_lepen_03166 = [];
const vote_rejet_03166 = [];
const vote_macronpop_03166 = [];
const vote_lepenpop_03166 = [];
const vote_rejetpop_03166 = [];
const name_Commune_03166 = [];
const Pourcentage_03166 = [];
const Pourcentage_rejet_03166 = [];
const vote_gene_macron_03166 = [];
const vote_gene_lepen_03166 = [];
const vote_gene_rejet_03166 = [];

async function chartIt03166(){
    await GraphDATA03166();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03166-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03166
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03166
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03166-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03166,vote_lepen_03166,vote_rejet_03166]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03166-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03166,vote_lepenpop_03166,vote_rejetpop_03166]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03166"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03166
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03166
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03166
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03167*/
/*------------------------------------------------------------------ */
async function GraphDATA03167() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03167.push(vote_macron); 
    vote_lepen_03167.push(vote_lepen);
    vote_rejet_03167.push(vote_rejet);
    vote_macronpop_03167.push(vote_macronMediane);
    vote_lepenpop_03167.push(vote_lepenMediane);
    vote_rejetpop_03167.push(vote_rejetMediane);
    name_Commune_03167.push(nameCommune);
    Pourcentage_03167.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03167.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03167.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03167.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03167.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03167 = [];
const vote_lepen_03167 = [];
const vote_rejet_03167 = [];
const vote_macronpop_03167 = [];
const vote_lepenpop_03167 = [];
const vote_rejetpop_03167 = [];
const name_Commune_03167 = [];
const Pourcentage_03167 = [];
const Pourcentage_rejet_03167 = [];
const vote_gene_macron_03167 = [];
const vote_gene_lepen_03167 = [];
const vote_gene_rejet_03167 = [];

async function chartIt03167(){
    await GraphDATA03167();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03167-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03167
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03167
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03167-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03167,vote_lepen_03167,vote_rejet_03167]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03167-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03167,vote_lepenpop_03167,vote_rejetpop_03167]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03167"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03167
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03167
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03167
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03168*/
/*------------------------------------------------------------------ */
async function GraphDATA03168() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03168.push(vote_macron); 
    vote_lepen_03168.push(vote_lepen);
    vote_rejet_03168.push(vote_rejet);
    vote_macronpop_03168.push(vote_macronMediane);
    vote_lepenpop_03168.push(vote_lepenMediane);
    vote_rejetpop_03168.push(vote_rejetMediane);
    name_Commune_03168.push(nameCommune);
    Pourcentage_03168.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03168.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03168.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03168.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03168.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03168 = [];
const vote_lepen_03168 = [];
const vote_rejet_03168 = [];
const vote_macronpop_03168 = [];
const vote_lepenpop_03168 = [];
const vote_rejetpop_03168 = [];
const name_Commune_03168 = [];
const Pourcentage_03168 = [];
const Pourcentage_rejet_03168 = [];
const vote_gene_macron_03168 = [];
const vote_gene_lepen_03168 = [];
const vote_gene_rejet_03168 = [];

async function chartIt03168(){
    await GraphDATA03168();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03168-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03168
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03168
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03168-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03168,vote_lepen_03168,vote_rejet_03168]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03168-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03168,vote_lepenpop_03168,vote_rejetpop_03168]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03168"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03168
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03168
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03168
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03169*/
/*------------------------------------------------------------------ */
async function GraphDATA03169() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03169.push(vote_macron); 
    vote_lepen_03169.push(vote_lepen);
    vote_rejet_03169.push(vote_rejet);
    vote_macronpop_03169.push(vote_macronMediane);
    vote_lepenpop_03169.push(vote_lepenMediane);
    vote_rejetpop_03169.push(vote_rejetMediane);
    name_Commune_03169.push(nameCommune);
    Pourcentage_03169.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03169.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03169.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03169.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03169.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03169 = [];
const vote_lepen_03169 = [];
const vote_rejet_03169 = [];
const vote_macronpop_03169 = [];
const vote_lepenpop_03169 = [];
const vote_rejetpop_03169 = [];
const name_Commune_03169 = [];
const Pourcentage_03169 = [];
const Pourcentage_rejet_03169 = [];
const vote_gene_macron_03169 = [];
const vote_gene_lepen_03169 = [];
const vote_gene_rejet_03169 = [];

async function chartIt03169(){
    await GraphDATA03169();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03169-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03169
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03169
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03169-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03169,vote_lepen_03169,vote_rejet_03169]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03169-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03169,vote_lepenpop_03169,vote_rejetpop_03169]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03169"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03169
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03169
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03169
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03170*/
/*------------------------------------------------------------------ */
async function GraphDATA03170() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03170.push(vote_macron); 
    vote_lepen_03170.push(vote_lepen);
    vote_rejet_03170.push(vote_rejet);
    vote_macronpop_03170.push(vote_macronMediane);
    vote_lepenpop_03170.push(vote_lepenMediane);
    vote_rejetpop_03170.push(vote_rejetMediane);
    name_Commune_03170.push(nameCommune);
    Pourcentage_03170.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03170.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03170.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03170.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03170.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03170 = [];
const vote_lepen_03170 = [];
const vote_rejet_03170 = [];
const vote_macronpop_03170 = [];
const vote_lepenpop_03170 = [];
const vote_rejetpop_03170 = [];
const name_Commune_03170 = [];
const Pourcentage_03170 = [];
const Pourcentage_rejet_03170 = [];
const vote_gene_macron_03170 = [];
const vote_gene_lepen_03170 = [];
const vote_gene_rejet_03170 = [];

async function chartIt03170(){
    await GraphDATA03170();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03170-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03170
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03170
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03170-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03170,vote_lepen_03170,vote_rejet_03170]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03170-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03170,vote_lepenpop_03170,vote_rejetpop_03170]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03170"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03170
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03170
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03170
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03171*/
/*------------------------------------------------------------------ */
async function GraphDATA03171() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03171.push(vote_macron); 
    vote_lepen_03171.push(vote_lepen);
    vote_rejet_03171.push(vote_rejet);
    vote_macronpop_03171.push(vote_macronMediane);
    vote_lepenpop_03171.push(vote_lepenMediane);
    vote_rejetpop_03171.push(vote_rejetMediane);
    name_Commune_03171.push(nameCommune);
    Pourcentage_03171.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03171.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03171.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03171.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03171.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03171 = [];
const vote_lepen_03171 = [];
const vote_rejet_03171 = [];
const vote_macronpop_03171 = [];
const vote_lepenpop_03171 = [];
const vote_rejetpop_03171 = [];
const name_Commune_03171 = [];
const Pourcentage_03171 = [];
const Pourcentage_rejet_03171 = [];
const vote_gene_macron_03171 = [];
const vote_gene_lepen_03171 = [];
const vote_gene_rejet_03171 = [];

async function chartIt03171(){
    await GraphDATA03171();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03171-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03171
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03171
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03171-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03171,vote_lepen_03171,vote_rejet_03171]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03171-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03171,vote_lepenpop_03171,vote_rejetpop_03171]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03171"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03171
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03171
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03171
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03172*/
/*------------------------------------------------------------------ */
async function GraphDATA03172() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03172.push(vote_macron); 
    vote_lepen_03172.push(vote_lepen);
    vote_rejet_03172.push(vote_rejet);
    vote_macronpop_03172.push(vote_macronMediane);
    vote_lepenpop_03172.push(vote_lepenMediane);
    vote_rejetpop_03172.push(vote_rejetMediane);
    name_Commune_03172.push(nameCommune);
    Pourcentage_03172.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03172.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03172.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03172.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03172.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03172 = [];
const vote_lepen_03172 = [];
const vote_rejet_03172 = [];
const vote_macronpop_03172 = [];
const vote_lepenpop_03172 = [];
const vote_rejetpop_03172 = [];
const name_Commune_03172 = [];
const Pourcentage_03172 = [];
const Pourcentage_rejet_03172 = [];
const vote_gene_macron_03172 = [];
const vote_gene_lepen_03172 = [];
const vote_gene_rejet_03172 = [];

async function chartIt03172(){
    await GraphDATA03172();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03172-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03172
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03172
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03172-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03172,vote_lepen_03172,vote_rejet_03172]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03172-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03172,vote_lepenpop_03172,vote_rejetpop_03172]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03172"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03172
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03172
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03172
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03173*/
/*------------------------------------------------------------------ */
async function GraphDATA03173() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03173.push(vote_macron); 
    vote_lepen_03173.push(vote_lepen);
    vote_rejet_03173.push(vote_rejet);
    vote_macronpop_03173.push(vote_macronMediane);
    vote_lepenpop_03173.push(vote_lepenMediane);
    vote_rejetpop_03173.push(vote_rejetMediane);
    name_Commune_03173.push(nameCommune);
    Pourcentage_03173.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03173.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03173.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03173.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03173.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03173 = [];
const vote_lepen_03173 = [];
const vote_rejet_03173 = [];
const vote_macronpop_03173 = [];
const vote_lepenpop_03173 = [];
const vote_rejetpop_03173 = [];
const name_Commune_03173 = [];
const Pourcentage_03173 = [];
const Pourcentage_rejet_03173 = [];
const vote_gene_macron_03173 = [];
const vote_gene_lepen_03173 = [];
const vote_gene_rejet_03173 = [];

async function chartIt03173(){
    await GraphDATA03173();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03173-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03173
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03173
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03173-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03173,vote_lepen_03173,vote_rejet_03173]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03173-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03173,vote_lepenpop_03173,vote_rejetpop_03173]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03173"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03173
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03173
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03173
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03174*/
/*------------------------------------------------------------------ */
async function GraphDATA03174() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03174.push(vote_macron); 
    vote_lepen_03174.push(vote_lepen);
    vote_rejet_03174.push(vote_rejet);
    vote_macronpop_03174.push(vote_macronMediane);
    vote_lepenpop_03174.push(vote_lepenMediane);
    vote_rejetpop_03174.push(vote_rejetMediane);
    name_Commune_03174.push(nameCommune);
    Pourcentage_03174.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03174.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03174.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03174.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03174.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03174 = [];
const vote_lepen_03174 = [];
const vote_rejet_03174 = [];
const vote_macronpop_03174 = [];
const vote_lepenpop_03174 = [];
const vote_rejetpop_03174 = [];
const name_Commune_03174 = [];
const Pourcentage_03174 = [];
const Pourcentage_rejet_03174 = [];
const vote_gene_macron_03174 = [];
const vote_gene_lepen_03174 = [];
const vote_gene_rejet_03174 = [];

async function chartIt03174(){
    await GraphDATA03174();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03174-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03174
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03174
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03174-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03174,vote_lepen_03174,vote_rejet_03174]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03174-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03174,vote_lepenpop_03174,vote_rejetpop_03174]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03174"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03174
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03174
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03174
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03175*/
/*------------------------------------------------------------------ */
async function GraphDATA03175() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03175.push(vote_macron); 
    vote_lepen_03175.push(vote_lepen);
    vote_rejet_03175.push(vote_rejet);
    vote_macronpop_03175.push(vote_macronMediane);
    vote_lepenpop_03175.push(vote_lepenMediane);
    vote_rejetpop_03175.push(vote_rejetMediane);
    name_Commune_03175.push(nameCommune);
    Pourcentage_03175.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03175.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03175.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03175.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03175.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03175 = [];
const vote_lepen_03175 = [];
const vote_rejet_03175 = [];
const vote_macronpop_03175 = [];
const vote_lepenpop_03175 = [];
const vote_rejetpop_03175 = [];
const name_Commune_03175 = [];
const Pourcentage_03175 = [];
const Pourcentage_rejet_03175 = [];
const vote_gene_macron_03175 = [];
const vote_gene_lepen_03175 = [];
const vote_gene_rejet_03175 = [];

async function chartIt03175(){
    await GraphDATA03175();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03175-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03175
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03175
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03175-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03175,vote_lepen_03175,vote_rejet_03175]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03175-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03175,vote_lepenpop_03175,vote_rejetpop_03175]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03175"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03175
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03175
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03175
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03176*/
/*------------------------------------------------------------------ */
async function GraphDATA03176() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03176.push(vote_macron); 
    vote_lepen_03176.push(vote_lepen);
    vote_rejet_03176.push(vote_rejet);
    vote_macronpop_03176.push(vote_macronMediane);
    vote_lepenpop_03176.push(vote_lepenMediane);
    vote_rejetpop_03176.push(vote_rejetMediane);
    name_Commune_03176.push(nameCommune);
    Pourcentage_03176.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03176.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03176.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03176.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03176.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03176 = [];
const vote_lepen_03176 = [];
const vote_rejet_03176 = [];
const vote_macronpop_03176 = [];
const vote_lepenpop_03176 = [];
const vote_rejetpop_03176 = [];
const name_Commune_03176 = [];
const Pourcentage_03176 = [];
const Pourcentage_rejet_03176 = [];
const vote_gene_macron_03176 = [];
const vote_gene_lepen_03176 = [];
const vote_gene_rejet_03176 = [];

async function chartIt03176(){
    await GraphDATA03176();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03176-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03176
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03176
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03176-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03176,vote_lepen_03176,vote_rejet_03176]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03176-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03176,vote_lepenpop_03176,vote_rejetpop_03176]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03176"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03176
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03176
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03176
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03177*/
/*------------------------------------------------------------------ */
async function GraphDATA03177() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03177.push(vote_macron); 
    vote_lepen_03177.push(vote_lepen);
    vote_rejet_03177.push(vote_rejet);
    vote_macronpop_03177.push(vote_macronMediane);
    vote_lepenpop_03177.push(vote_lepenMediane);
    vote_rejetpop_03177.push(vote_rejetMediane);
    name_Commune_03177.push(nameCommune);
    Pourcentage_03177.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03177.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03177.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03177.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03177.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03177 = [];
const vote_lepen_03177 = [];
const vote_rejet_03177 = [];
const vote_macronpop_03177 = [];
const vote_lepenpop_03177 = [];
const vote_rejetpop_03177 = [];
const name_Commune_03177 = [];
const Pourcentage_03177 = [];
const Pourcentage_rejet_03177 = [];
const vote_gene_macron_03177 = [];
const vote_gene_lepen_03177 = [];
const vote_gene_rejet_03177 = [];

async function chartIt03177(){
    await GraphDATA03177();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03177-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03177
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03177
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03177-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03177,vote_lepen_03177,vote_rejet_03177]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03177-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03177,vote_lepenpop_03177,vote_rejetpop_03177]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03177"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03177
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03177
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03177
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03178*/
/*------------------------------------------------------------------ */
async function GraphDATA03178() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03178.push(vote_macron); 
    vote_lepen_03178.push(vote_lepen);
    vote_rejet_03178.push(vote_rejet);
    vote_macronpop_03178.push(vote_macronMediane);
    vote_lepenpop_03178.push(vote_lepenMediane);
    vote_rejetpop_03178.push(vote_rejetMediane);
    name_Commune_03178.push(nameCommune);
    Pourcentage_03178.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03178.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03178.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03178.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03178.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03178 = [];
const vote_lepen_03178 = [];
const vote_rejet_03178 = [];
const vote_macronpop_03178 = [];
const vote_lepenpop_03178 = [];
const vote_rejetpop_03178 = [];
const name_Commune_03178 = [];
const Pourcentage_03178 = [];
const Pourcentage_rejet_03178 = [];
const vote_gene_macron_03178 = [];
const vote_gene_lepen_03178 = [];
const vote_gene_rejet_03178 = [];

async function chartIt03178(){
    await GraphDATA03178();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03178-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03178
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03178
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03178-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03178,vote_lepen_03178,vote_rejet_03178]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03178-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03178,vote_lepenpop_03178,vote_rejetpop_03178]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03178"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03178
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03178
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03178
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03179*/
/*------------------------------------------------------------------ */
async function GraphDATA03179() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03179.push(vote_macron); 
    vote_lepen_03179.push(vote_lepen);
    vote_rejet_03179.push(vote_rejet);
    vote_macronpop_03179.push(vote_macronMediane);
    vote_lepenpop_03179.push(vote_lepenMediane);
    vote_rejetpop_03179.push(vote_rejetMediane);
    name_Commune_03179.push(nameCommune);
    Pourcentage_03179.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03179.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03179.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03179.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03179.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03179 = [];
const vote_lepen_03179 = [];
const vote_rejet_03179 = [];
const vote_macronpop_03179 = [];
const vote_lepenpop_03179 = [];
const vote_rejetpop_03179 = [];
const name_Commune_03179 = [];
const Pourcentage_03179 = [];
const Pourcentage_rejet_03179 = [];
const vote_gene_macron_03179 = [];
const vote_gene_lepen_03179 = [];
const vote_gene_rejet_03179 = [];

async function chartIt03179(){
    await GraphDATA03179();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03179-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03179
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03179
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03179-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03179,vote_lepen_03179,vote_rejet_03179]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03179-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03179,vote_lepenpop_03179,vote_rejetpop_03179]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03179"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03179
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03179
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03179
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03180*/
/*------------------------------------------------------------------ */
async function GraphDATA03180() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03180.push(vote_macron); 
    vote_lepen_03180.push(vote_lepen);
    vote_rejet_03180.push(vote_rejet);
    vote_macronpop_03180.push(vote_macronMediane);
    vote_lepenpop_03180.push(vote_lepenMediane);
    vote_rejetpop_03180.push(vote_rejetMediane);
    name_Commune_03180.push(nameCommune);
    Pourcentage_03180.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03180.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03180.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03180.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03180.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03180 = [];
const vote_lepen_03180 = [];
const vote_rejet_03180 = [];
const vote_macronpop_03180 = [];
const vote_lepenpop_03180 = [];
const vote_rejetpop_03180 = [];
const name_Commune_03180 = [];
const Pourcentage_03180 = [];
const Pourcentage_rejet_03180 = [];
const vote_gene_macron_03180 = [];
const vote_gene_lepen_03180 = [];
const vote_gene_rejet_03180 = [];

async function chartIt03180(){
    await GraphDATA03180();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03180-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03180
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03180
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03180-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03180,vote_lepen_03180,vote_rejet_03180]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03180-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03180,vote_lepenpop_03180,vote_rejetpop_03180]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03180"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03180
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03180
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03180
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03181*/
/*------------------------------------------------------------------ */
async function GraphDATA03181() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03181.push(vote_macron); 
    vote_lepen_03181.push(vote_lepen);
    vote_rejet_03181.push(vote_rejet);
    vote_macronpop_03181.push(vote_macronMediane);
    vote_lepenpop_03181.push(vote_lepenMediane);
    vote_rejetpop_03181.push(vote_rejetMediane);
    name_Commune_03181.push(nameCommune);
    Pourcentage_03181.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03181.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03181.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03181.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03181.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03181 = [];
const vote_lepen_03181 = [];
const vote_rejet_03181 = [];
const vote_macronpop_03181 = [];
const vote_lepenpop_03181 = [];
const vote_rejetpop_03181 = [];
const name_Commune_03181 = [];
const Pourcentage_03181 = [];
const Pourcentage_rejet_03181 = [];
const vote_gene_macron_03181 = [];
const vote_gene_lepen_03181 = [];
const vote_gene_rejet_03181 = [];

async function chartIt03181(){
    await GraphDATA03181();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03181-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03181
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03181
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03181-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03181,vote_lepen_03181,vote_rejet_03181]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03181-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03181,vote_lepenpop_03181,vote_rejetpop_03181]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03181"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03181
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03181
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03181
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03182*/
/*------------------------------------------------------------------ */
async function GraphDATA03182() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03182.push(vote_macron); 
    vote_lepen_03182.push(vote_lepen);
    vote_rejet_03182.push(vote_rejet);
    vote_macronpop_03182.push(vote_macronMediane);
    vote_lepenpop_03182.push(vote_lepenMediane);
    vote_rejetpop_03182.push(vote_rejetMediane);
    name_Commune_03182.push(nameCommune);
    Pourcentage_03182.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03182.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03182.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03182.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03182.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03182 = [];
const vote_lepen_03182 = [];
const vote_rejet_03182 = [];
const vote_macronpop_03182 = [];
const vote_lepenpop_03182 = [];
const vote_rejetpop_03182 = [];
const name_Commune_03182 = [];
const Pourcentage_03182 = [];
const Pourcentage_rejet_03182 = [];
const vote_gene_macron_03182 = [];
const vote_gene_lepen_03182 = [];
const vote_gene_rejet_03182 = [];

async function chartIt03182(){
    await GraphDATA03182();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03182-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03182
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03182
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03182-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03182,vote_lepen_03182,vote_rejet_03182]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03182-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03182,vote_lepenpop_03182,vote_rejetpop_03182]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03182"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03182
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03182
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03182
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03183*/
/*------------------------------------------------------------------ */
async function GraphDATA03183() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03183.push(vote_macron); 
    vote_lepen_03183.push(vote_lepen);
    vote_rejet_03183.push(vote_rejet);
    vote_macronpop_03183.push(vote_macronMediane);
    vote_lepenpop_03183.push(vote_lepenMediane);
    vote_rejetpop_03183.push(vote_rejetMediane);
    name_Commune_03183.push(nameCommune);
    Pourcentage_03183.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03183.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03183.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03183.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03183.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03183 = [];
const vote_lepen_03183 = [];
const vote_rejet_03183 = [];
const vote_macronpop_03183 = [];
const vote_lepenpop_03183 = [];
const vote_rejetpop_03183 = [];
const name_Commune_03183 = [];
const Pourcentage_03183 = [];
const Pourcentage_rejet_03183 = [];
const vote_gene_macron_03183 = [];
const vote_gene_lepen_03183 = [];
const vote_gene_rejet_03183 = [];

async function chartIt03183(){
    await GraphDATA03183();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03183-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03183
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03183
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03183-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03183,vote_lepen_03183,vote_rejet_03183]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03183-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03183,vote_lepenpop_03183,vote_rejetpop_03183]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03183"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03183
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03183
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03183
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03184*/
/*------------------------------------------------------------------ */
async function GraphDATA03184() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03184.push(vote_macron); 
    vote_lepen_03184.push(vote_lepen);
    vote_rejet_03184.push(vote_rejet);
    vote_macronpop_03184.push(vote_macronMediane);
    vote_lepenpop_03184.push(vote_lepenMediane);
    vote_rejetpop_03184.push(vote_rejetMediane);
    name_Commune_03184.push(nameCommune);
    Pourcentage_03184.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03184.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03184.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03184.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03184.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03184 = [];
const vote_lepen_03184 = [];
const vote_rejet_03184 = [];
const vote_macronpop_03184 = [];
const vote_lepenpop_03184 = [];
const vote_rejetpop_03184 = [];
const name_Commune_03184 = [];
const Pourcentage_03184 = [];
const Pourcentage_rejet_03184 = [];
const vote_gene_macron_03184 = [];
const vote_gene_lepen_03184 = [];
const vote_gene_rejet_03184 = [];

async function chartIt03184(){
    await GraphDATA03184();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03184-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03184
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03184
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03184-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03184,vote_lepen_03184,vote_rejet_03184]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03184-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03184,vote_lepenpop_03184,vote_rejetpop_03184]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03184"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03184
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03184
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03184
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03185*/
/*------------------------------------------------------------------ */
async function GraphDATA03185() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03185.push(vote_macron); 
    vote_lepen_03185.push(vote_lepen);
    vote_rejet_03185.push(vote_rejet);
    vote_macronpop_03185.push(vote_macronMediane);
    vote_lepenpop_03185.push(vote_lepenMediane);
    vote_rejetpop_03185.push(vote_rejetMediane);
    name_Commune_03185.push(nameCommune);
    Pourcentage_03185.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03185.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03185.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03185.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03185.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03185 = [];
const vote_lepen_03185 = [];
const vote_rejet_03185 = [];
const vote_macronpop_03185 = [];
const vote_lepenpop_03185 = [];
const vote_rejetpop_03185 = [];
const name_Commune_03185 = [];
const Pourcentage_03185 = [];
const Pourcentage_rejet_03185 = [];
const vote_gene_macron_03185 = [];
const vote_gene_lepen_03185 = [];
const vote_gene_rejet_03185 = [];

async function chartIt03185(){
    await GraphDATA03185();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03185-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03185
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03185
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03185-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03185,vote_lepen_03185,vote_rejet_03185]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03185-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03185,vote_lepenpop_03185,vote_rejetpop_03185]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03185"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03185
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03185
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03185
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03186*/
/*------------------------------------------------------------------ */
async function GraphDATA03186() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03186.push(vote_macron); 
    vote_lepen_03186.push(vote_lepen);
    vote_rejet_03186.push(vote_rejet);
    vote_macronpop_03186.push(vote_macronMediane);
    vote_lepenpop_03186.push(vote_lepenMediane);
    vote_rejetpop_03186.push(vote_rejetMediane);
    name_Commune_03186.push(nameCommune);
    Pourcentage_03186.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03186.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03186.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03186.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03186.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03186 = [];
const vote_lepen_03186 = [];
const vote_rejet_03186 = [];
const vote_macronpop_03186 = [];
const vote_lepenpop_03186 = [];
const vote_rejetpop_03186 = [];
const name_Commune_03186 = [];
const Pourcentage_03186 = [];
const Pourcentage_rejet_03186 = [];
const vote_gene_macron_03186 = [];
const vote_gene_lepen_03186 = [];
const vote_gene_rejet_03186 = [];

async function chartIt03186(){
    await GraphDATA03186();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03186-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03186
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03186
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03186-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03186,vote_lepen_03186,vote_rejet_03186]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03186-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03186,vote_lepenpop_03186,vote_rejetpop_03186]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03186"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03186
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03186
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03186
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03187*/
/*------------------------------------------------------------------ */
async function GraphDATA03187() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03187.push(vote_macron); 
    vote_lepen_03187.push(vote_lepen);
    vote_rejet_03187.push(vote_rejet);
    vote_macronpop_03187.push(vote_macronMediane);
    vote_lepenpop_03187.push(vote_lepenMediane);
    vote_rejetpop_03187.push(vote_rejetMediane);
    name_Commune_03187.push(nameCommune);
    Pourcentage_03187.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03187.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03187.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03187.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03187.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03187 = [];
const vote_lepen_03187 = [];
const vote_rejet_03187 = [];
const vote_macronpop_03187 = [];
const vote_lepenpop_03187 = [];
const vote_rejetpop_03187 = [];
const name_Commune_03187 = [];
const Pourcentage_03187 = [];
const Pourcentage_rejet_03187 = [];
const vote_gene_macron_03187 = [];
const vote_gene_lepen_03187 = [];
const vote_gene_rejet_03187 = [];

async function chartIt03187(){
    await GraphDATA03187();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03187-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03187
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03187
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03187-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03187,vote_lepen_03187,vote_rejet_03187]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03187-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03187,vote_lepenpop_03187,vote_rejetpop_03187]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03187"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03187
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03187
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03187
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03188*/
/*------------------------------------------------------------------ */
async function GraphDATA03188() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03188.push(vote_macron); 
    vote_lepen_03188.push(vote_lepen);
    vote_rejet_03188.push(vote_rejet);
    vote_macronpop_03188.push(vote_macronMediane);
    vote_lepenpop_03188.push(vote_lepenMediane);
    vote_rejetpop_03188.push(vote_rejetMediane);
    name_Commune_03188.push(nameCommune);
    Pourcentage_03188.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03188.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03188.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03188.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03188.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03188 = [];
const vote_lepen_03188 = [];
const vote_rejet_03188 = [];
const vote_macronpop_03188 = [];
const vote_lepenpop_03188 = [];
const vote_rejetpop_03188 = [];
const name_Commune_03188 = [];
const Pourcentage_03188 = [];
const Pourcentage_rejet_03188 = [];
const vote_gene_macron_03188 = [];
const vote_gene_lepen_03188 = [];
const vote_gene_rejet_03188 = [];

async function chartIt03188(){
    await GraphDATA03188();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03188-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03188
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03188
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03188-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03188,vote_lepen_03188,vote_rejet_03188]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03188-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03188,vote_lepenpop_03188,vote_rejetpop_03188]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03188"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03188
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03188
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03188
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03189*/
/*------------------------------------------------------------------ */
async function GraphDATA03189() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03189.push(vote_macron); 
    vote_lepen_03189.push(vote_lepen);
    vote_rejet_03189.push(vote_rejet);
    vote_macronpop_03189.push(vote_macronMediane);
    vote_lepenpop_03189.push(vote_lepenMediane);
    vote_rejetpop_03189.push(vote_rejetMediane);
    name_Commune_03189.push(nameCommune);
    Pourcentage_03189.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03189.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03189.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03189.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03189.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03189 = [];
const vote_lepen_03189 = [];
const vote_rejet_03189 = [];
const vote_macronpop_03189 = [];
const vote_lepenpop_03189 = [];
const vote_rejetpop_03189 = [];
const name_Commune_03189 = [];
const Pourcentage_03189 = [];
const Pourcentage_rejet_03189 = [];
const vote_gene_macron_03189 = [];
const vote_gene_lepen_03189 = [];
const vote_gene_rejet_03189 = [];

async function chartIt03189(){
    await GraphDATA03189();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03189-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03189
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03189
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03189-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03189,vote_lepen_03189,vote_rejet_03189]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03189-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03189,vote_lepenpop_03189,vote_rejetpop_03189]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03189"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03189
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03189
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03189
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03190*/
/*------------------------------------------------------------------ */
async function GraphDATA03190() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03190.push(vote_macron); 
    vote_lepen_03190.push(vote_lepen);
    vote_rejet_03190.push(vote_rejet);
    vote_macronpop_03190.push(vote_macronMediane);
    vote_lepenpop_03190.push(vote_lepenMediane);
    vote_rejetpop_03190.push(vote_rejetMediane);
    name_Commune_03190.push(nameCommune);
    Pourcentage_03190.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03190.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03190.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03190.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03190.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03190 = [];
const vote_lepen_03190 = [];
const vote_rejet_03190 = [];
const vote_macronpop_03190 = [];
const vote_lepenpop_03190 = [];
const vote_rejetpop_03190 = [];
const name_Commune_03190 = [];
const Pourcentage_03190 = [];
const Pourcentage_rejet_03190 = [];
const vote_gene_macron_03190 = [];
const vote_gene_lepen_03190 = [];
const vote_gene_rejet_03190 = [];

async function chartIt03190(){
    await GraphDATA03190();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03190-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03190
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03190
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03190-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03190,vote_lepen_03190,vote_rejet_03190]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03190-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03190,vote_lepenpop_03190,vote_rejetpop_03190]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03190"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03190
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03190
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03190
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03191*/
/*------------------------------------------------------------------ */
async function GraphDATA03191() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03191.push(vote_macron); 
    vote_lepen_03191.push(vote_lepen);
    vote_rejet_03191.push(vote_rejet);
    vote_macronpop_03191.push(vote_macronMediane);
    vote_lepenpop_03191.push(vote_lepenMediane);
    vote_rejetpop_03191.push(vote_rejetMediane);
    name_Commune_03191.push(nameCommune);
    Pourcentage_03191.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03191.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03191.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03191.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03191.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03191 = [];
const vote_lepen_03191 = [];
const vote_rejet_03191 = [];
const vote_macronpop_03191 = [];
const vote_lepenpop_03191 = [];
const vote_rejetpop_03191 = [];
const name_Commune_03191 = [];
const Pourcentage_03191 = [];
const Pourcentage_rejet_03191 = [];
const vote_gene_macron_03191 = [];
const vote_gene_lepen_03191 = [];
const vote_gene_rejet_03191 = [];

async function chartIt03191(){
    await GraphDATA03191();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03191-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03191
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03191
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03191-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03191,vote_lepen_03191,vote_rejet_03191]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03191-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03191,vote_lepenpop_03191,vote_rejetpop_03191]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03191"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03191
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03191
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03191
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03192*/
/*------------------------------------------------------------------ */
async function GraphDATA03192() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03192.push(vote_macron); 
    vote_lepen_03192.push(vote_lepen);
    vote_rejet_03192.push(vote_rejet);
    vote_macronpop_03192.push(vote_macronMediane);
    vote_lepenpop_03192.push(vote_lepenMediane);
    vote_rejetpop_03192.push(vote_rejetMediane);
    name_Commune_03192.push(nameCommune);
    Pourcentage_03192.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03192.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03192.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03192.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03192.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03192 = [];
const vote_lepen_03192 = [];
const vote_rejet_03192 = [];
const vote_macronpop_03192 = [];
const vote_lepenpop_03192 = [];
const vote_rejetpop_03192 = [];
const name_Commune_03192 = [];
const Pourcentage_03192 = [];
const Pourcentage_rejet_03192 = [];
const vote_gene_macron_03192 = [];
const vote_gene_lepen_03192 = [];
const vote_gene_rejet_03192 = [];

async function chartIt03192(){
    await GraphDATA03192();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03192-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03192
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03192
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03192-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03192,vote_lepen_03192,vote_rejet_03192]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03192-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03192,vote_lepenpop_03192,vote_rejetpop_03192]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03192"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03192
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03192
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03192
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03193*/
/*------------------------------------------------------------------ */
async function GraphDATA03193() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03193.push(vote_macron); 
    vote_lepen_03193.push(vote_lepen);
    vote_rejet_03193.push(vote_rejet);
    vote_macronpop_03193.push(vote_macronMediane);
    vote_lepenpop_03193.push(vote_lepenMediane);
    vote_rejetpop_03193.push(vote_rejetMediane);
    name_Commune_03193.push(nameCommune);
    Pourcentage_03193.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03193.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03193.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03193.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03193.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03193 = [];
const vote_lepen_03193 = [];
const vote_rejet_03193 = [];
const vote_macronpop_03193 = [];
const vote_lepenpop_03193 = [];
const vote_rejetpop_03193 = [];
const name_Commune_03193 = [];
const Pourcentage_03193 = [];
const Pourcentage_rejet_03193 = [];
const vote_gene_macron_03193 = [];
const vote_gene_lepen_03193 = [];
const vote_gene_rejet_03193 = [];

async function chartIt03193(){
    await GraphDATA03193();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03193-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03193
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03193
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03193-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03193,vote_lepen_03193,vote_rejet_03193]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03193-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03193,vote_lepenpop_03193,vote_rejetpop_03193]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03193"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03193
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03193
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03193
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03194*/
/*------------------------------------------------------------------ */
async function GraphDATA03194() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03194.push(vote_macron); 
    vote_lepen_03194.push(vote_lepen);
    vote_rejet_03194.push(vote_rejet);
    vote_macronpop_03194.push(vote_macronMediane);
    vote_lepenpop_03194.push(vote_lepenMediane);
    vote_rejetpop_03194.push(vote_rejetMediane);
    name_Commune_03194.push(nameCommune);
    Pourcentage_03194.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03194.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03194.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03194.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03194.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03194 = [];
const vote_lepen_03194 = [];
const vote_rejet_03194 = [];
const vote_macronpop_03194 = [];
const vote_lepenpop_03194 = [];
const vote_rejetpop_03194 = [];
const name_Commune_03194 = [];
const Pourcentage_03194 = [];
const Pourcentage_rejet_03194 = [];
const vote_gene_macron_03194 = [];
const vote_gene_lepen_03194 = [];
const vote_gene_rejet_03194 = [];

async function chartIt03194(){
    await GraphDATA03194();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03194-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03194
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03194
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03194-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03194,vote_lepen_03194,vote_rejet_03194]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03194-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03194,vote_lepenpop_03194,vote_rejetpop_03194]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03194"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03194
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03194
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03194
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03195*/
/*------------------------------------------------------------------ */
async function GraphDATA03195() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03195.push(vote_macron); 
    vote_lepen_03195.push(vote_lepen);
    vote_rejet_03195.push(vote_rejet);
    vote_macronpop_03195.push(vote_macronMediane);
    vote_lepenpop_03195.push(vote_lepenMediane);
    vote_rejetpop_03195.push(vote_rejetMediane);
    name_Commune_03195.push(nameCommune);
    Pourcentage_03195.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03195.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03195.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03195.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03195.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03195 = [];
const vote_lepen_03195 = [];
const vote_rejet_03195 = [];
const vote_macronpop_03195 = [];
const vote_lepenpop_03195 = [];
const vote_rejetpop_03195 = [];
const name_Commune_03195 = [];
const Pourcentage_03195 = [];
const Pourcentage_rejet_03195 = [];
const vote_gene_macron_03195 = [];
const vote_gene_lepen_03195 = [];
const vote_gene_rejet_03195 = [];

async function chartIt03195(){
    await GraphDATA03195();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03195-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03195
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03195
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03195-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03195,vote_lepen_03195,vote_rejet_03195]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03195-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03195,vote_lepenpop_03195,vote_rejetpop_03195]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03195"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03195
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03195
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03195
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03196*/
/*------------------------------------------------------------------ */
async function GraphDATA03196() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03196.push(vote_macron); 
    vote_lepen_03196.push(vote_lepen);
    vote_rejet_03196.push(vote_rejet);
    vote_macronpop_03196.push(vote_macronMediane);
    vote_lepenpop_03196.push(vote_lepenMediane);
    vote_rejetpop_03196.push(vote_rejetMediane);
    name_Commune_03196.push(nameCommune);
    Pourcentage_03196.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03196.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03196.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03196.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03196.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03196 = [];
const vote_lepen_03196 = [];
const vote_rejet_03196 = [];
const vote_macronpop_03196 = [];
const vote_lepenpop_03196 = [];
const vote_rejetpop_03196 = [];
const name_Commune_03196 = [];
const Pourcentage_03196 = [];
const Pourcentage_rejet_03196 = [];
const vote_gene_macron_03196 = [];
const vote_gene_lepen_03196 = [];
const vote_gene_rejet_03196 = [];

async function chartIt03196(){
    await GraphDATA03196();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03196-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03196
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03196
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03196-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03196,vote_lepen_03196,vote_rejet_03196]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03196-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03196,vote_lepenpop_03196,vote_rejetpop_03196]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03196"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03196
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03196
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03196
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03197*/
/*------------------------------------------------------------------ */
async function GraphDATA03197() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03197.push(vote_macron); 
    vote_lepen_03197.push(vote_lepen);
    vote_rejet_03197.push(vote_rejet);
    vote_macronpop_03197.push(vote_macronMediane);
    vote_lepenpop_03197.push(vote_lepenMediane);
    vote_rejetpop_03197.push(vote_rejetMediane);
    name_Commune_03197.push(nameCommune);
    Pourcentage_03197.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03197.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03197.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03197.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03197.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03197 = [];
const vote_lepen_03197 = [];
const vote_rejet_03197 = [];
const vote_macronpop_03197 = [];
const vote_lepenpop_03197 = [];
const vote_rejetpop_03197 = [];
const name_Commune_03197 = [];
const Pourcentage_03197 = [];
const Pourcentage_rejet_03197 = [];
const vote_gene_macron_03197 = [];
const vote_gene_lepen_03197 = [];
const vote_gene_rejet_03197 = [];

async function chartIt03197(){
    await GraphDATA03197();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03197-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03197
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03197
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03197-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03197,vote_lepen_03197,vote_rejet_03197]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03197-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03197,vote_lepenpop_03197,vote_rejetpop_03197]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03197"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03197
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03197
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03197
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03198*/
/*------------------------------------------------------------------ */
async function GraphDATA03198() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03198.push(vote_macron); 
    vote_lepen_03198.push(vote_lepen);
    vote_rejet_03198.push(vote_rejet);
    vote_macronpop_03198.push(vote_macronMediane);
    vote_lepenpop_03198.push(vote_lepenMediane);
    vote_rejetpop_03198.push(vote_rejetMediane);
    name_Commune_03198.push(nameCommune);
    Pourcentage_03198.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03198.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03198.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03198.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03198.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03198 = [];
const vote_lepen_03198 = [];
const vote_rejet_03198 = [];
const vote_macronpop_03198 = [];
const vote_lepenpop_03198 = [];
const vote_rejetpop_03198 = [];
const name_Commune_03198 = [];
const Pourcentage_03198 = [];
const Pourcentage_rejet_03198 = [];
const vote_gene_macron_03198 = [];
const vote_gene_lepen_03198 = [];
const vote_gene_rejet_03198 = [];

async function chartIt03198(){
    await GraphDATA03198();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03198-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03198
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03198
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03198-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03198,vote_lepen_03198,vote_rejet_03198]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03198-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03198,vote_lepenpop_03198,vote_rejetpop_03198]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03198"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03198
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03198
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03198
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03199*/
/*------------------------------------------------------------------ */
async function GraphDATA03199() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03199.push(vote_macron); 
    vote_lepen_03199.push(vote_lepen);
    vote_rejet_03199.push(vote_rejet);
    vote_macronpop_03199.push(vote_macronMediane);
    vote_lepenpop_03199.push(vote_lepenMediane);
    vote_rejetpop_03199.push(vote_rejetMediane);
    name_Commune_03199.push(nameCommune);
    Pourcentage_03199.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03199.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03199.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03199.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03199.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03199 = [];
const vote_lepen_03199 = [];
const vote_rejet_03199 = [];
const vote_macronpop_03199 = [];
const vote_lepenpop_03199 = [];
const vote_rejetpop_03199 = [];
const name_Commune_03199 = [];
const Pourcentage_03199 = [];
const Pourcentage_rejet_03199 = [];
const vote_gene_macron_03199 = [];
const vote_gene_lepen_03199 = [];
const vote_gene_rejet_03199 = [];

async function chartIt03199(){
    await GraphDATA03199();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03199-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03199
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03199
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03199-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03199,vote_lepen_03199,vote_rejet_03199]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03199-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03199,vote_lepenpop_03199,vote_rejetpop_03199]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03199"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03199
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03199
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03199
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}