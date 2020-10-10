/********************************************************************** */
/*JS GRAPHIQUE FICHIER DATA */
/********************************************************************** */
const name_abs = "Abstentions";
const name_Blancs = "Blancs";
const name_Nul = "Nuls";
const name_rejete = "Rejeter";
const name_macron = "Macron";
const name_lepen = "Lepen";

chartIt05001();
chartIt05002();
chartIt05003();
chartIt05004();
chartIt05005();
chartIt05006();
chartIt05007();
chartIt05008();
chartIt05009();
chartIt05010();
chartIt05011();
chartIt05012();
chartIt05013();
chartIt05014();
chartIt05015();
chartIt05016();
chartIt05017();
chartIt05018();
chartIt05019();
chartIt05020();
chartIt05021();
chartIt05022();
chartIt05023();
chartIt05024();
chartIt05025();
chartIt05026();
chartIt05027();
chartIt05028();
chartIt05029();
chartIt05030();
chartIt05031();
chartIt05032();
chartIt05033();
chartIt05034();
chartIt05035();
chartIt05036();
chartIt05037();
chartIt05038();
chartIt05039();
chartIt05040();
chartIt05041();
chartIt05042();
chartIt05043();
chartIt05044();
chartIt05045();
chartIt05046();
chartIt05047();
chartIt05048();
chartIt05049();
chartIt05050();
chartIt05051();
chartIt05052();
chartIt05053();
chartIt05054();
chartIt05055();
chartIt05056();
chartIt05057();
chartIt05058();
chartIt05059();
chartIt05060();
chartIt05061();
chartIt05062();
chartIt05063();
chartIt05064();
chartIt05065();
chartIt05066();
chartIt05067();
chartIt05068();
chartIt05069();
chartIt05070();
chartIt05071();
chartIt05072();
chartIt05073();
chartIt05074();
chartIt05075();
chartIt05076();
chartIt05077();
chartIt05078();
chartIt05079();
chartIt05080();
chartIt05081();
chartIt05082();
chartIt05083();
chartIt05084();
chartIt05085();
chartIt05086();
chartIt05087();
chartIt05088();
chartIt05089();
chartIt05090();
chartIt05091();
chartIt05092();
chartIt05093();
chartIt05094();
chartIt05095();
chartIt05096();
chartIt05097();
chartIt05098();
chartIt05099();
/*------------------------------------------------------------------ */
/*COMMUNE 05001*/
/*------------------------------------------------------------------ */
async function GraphDATA05001() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[0];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05001.push(vote_macron); 
    vote_lepen_05001.push(vote_lepen);
    vote_rejet_05001.push(vote_rejet);
    vote_macronpop_05001.push(vote_macronMediane);
    vote_lepenpop_05001.push(vote_lepenMediane);
    vote_rejetpop_05001.push(vote_rejetMediane);
    name_Commune_05001.push(nameCommune);
    Pourcentage_05001.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05001.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05001.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05001.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05001.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05001 = [];
const vote_lepen_05001 = [];
const vote_rejet_05001 = [];
const vote_macronpop_05001 = [];
const vote_lepenpop_05001 = [];
const vote_rejetpop_05001 = [];
const name_Commune_05001 = [];
const Pourcentage_05001 = [];
const Pourcentage_rejet_05001 = [];
const vote_gene_macron_05001 = [];
const vote_gene_lepen_05001 = [];
const vote_gene_rejet_05001 = [];

async function chartIt05001(){
    await GraphDATA05001();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05001-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05001
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05001
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05001-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05001,vote_lepen_05001,vote_rejet_05001]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05001-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05001,vote_lepenpop_05001,vote_rejetpop_05001]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05001"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05001
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05001
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05001
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05002*/
/*------------------------------------------------------------------ */
async function GraphDATA05002() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[1];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05002.push(vote_macron); 
    vote_lepen_05002.push(vote_lepen);
    vote_rejet_05002.push(vote_rejet);
    vote_macronpop_05002.push(vote_macronMediane);
    vote_lepenpop_05002.push(vote_lepenMediane);
    vote_rejetpop_05002.push(vote_rejetMediane);
    name_Commune_05002.push(nameCommune);
    Pourcentage_05002.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05002.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05002.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05002.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05002.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05002 = [];
const vote_lepen_05002 = [];
const vote_rejet_05002 = [];
const vote_macronpop_05002 = [];
const vote_lepenpop_05002 = [];
const vote_rejetpop_05002 = [];
const name_Commune_05002 = [];
const Pourcentage_05002 = [];
const Pourcentage_rejet_05002 = [];
const vote_gene_macron_05002 = [];
const vote_gene_lepen_05002 = [];
const vote_gene_rejet_05002 = [];

async function chartIt05002(){
    await GraphDATA05002();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05002-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05002
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05002
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05002-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05002,vote_lepen_05002,vote_rejet_05002]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05002-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05002,vote_lepenpop_05002,vote_rejetpop_05002]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05002"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05002
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05002
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05002
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05003*/
/*------------------------------------------------------------------ */
async function GraphDATA05003() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[2];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05003.push(vote_macron); 
    vote_lepen_05003.push(vote_lepen);
    vote_rejet_05003.push(vote_rejet);
    vote_macronpop_05003.push(vote_macronMediane);
    vote_lepenpop_05003.push(vote_lepenMediane);
    vote_rejetpop_05003.push(vote_rejetMediane);
    name_Commune_05003.push(nameCommune);
    Pourcentage_05003.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05003.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05003.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05003.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05003.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05003 = [];
const vote_lepen_05003 = [];
const vote_rejet_05003 = [];
const vote_macronpop_05003 = [];
const vote_lepenpop_05003 = [];
const vote_rejetpop_05003 = [];
const name_Commune_05003 = [];
const Pourcentage_05003 = [];
const Pourcentage_rejet_05003 = [];
const vote_gene_macron_05003 = [];
const vote_gene_lepen_05003 = [];
const vote_gene_rejet_05003 = [];

async function chartIt05003(){
    await GraphDATA05003();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05003-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05003
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05003
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05003-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05003,vote_lepen_05003,vote_rejet_05003]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05003-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05003,vote_lepenpop_05003,vote_rejetpop_05003]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05003"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05003
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05003
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05003
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05004*/
/*------------------------------------------------------------------ */
async function GraphDATA05004() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[3];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05004.push(vote_macron); 
    vote_lepen_05004.push(vote_lepen);
    vote_rejet_05004.push(vote_rejet);
    vote_macronpop_05004.push(vote_macronMediane);
    vote_lepenpop_05004.push(vote_lepenMediane);
    vote_rejetpop_05004.push(vote_rejetMediane);
    name_Commune_05004.push(nameCommune);
    Pourcentage_05004.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05004.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05004.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05004.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05004.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05004 = [];
const vote_lepen_05004 = [];
const vote_rejet_05004 = [];
const vote_macronpop_05004 = [];
const vote_lepenpop_05004 = [];
const vote_rejetpop_05004 = [];
const name_Commune_05004 = [];
const Pourcentage_05004 = [];
const Pourcentage_rejet_05004 = [];
const vote_gene_macron_05004 = [];
const vote_gene_lepen_05004 = [];
const vote_gene_rejet_05004 = [];

async function chartIt05004(){
    await GraphDATA05004();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05004-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05004
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05004
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05004-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05004,vote_lepen_05004,vote_rejet_05004]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05004-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05004,vote_lepenpop_05004,vote_rejetpop_05004]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05004"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05004
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05004
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05004
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05005*/
/*------------------------------------------------------------------ */
async function GraphDATA05005() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[4];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05005.push(vote_macron); 
    vote_lepen_05005.push(vote_lepen);
    vote_rejet_05005.push(vote_rejet);
    vote_macronpop_05005.push(vote_macronMediane);
    vote_lepenpop_05005.push(vote_lepenMediane);
    vote_rejetpop_05005.push(vote_rejetMediane);
    name_Commune_05005.push(nameCommune);
    Pourcentage_05005.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05005.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05005.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05005.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05005.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05005 = [];
const vote_lepen_05005 = [];
const vote_rejet_05005 = [];
const vote_macronpop_05005 = [];
const vote_lepenpop_05005 = [];
const vote_rejetpop_05005 = [];
const name_Commune_05005 = [];
const Pourcentage_05005 = [];
const Pourcentage_rejet_05005 = [];
const vote_gene_macron_05005 = [];
const vote_gene_lepen_05005 = [];
const vote_gene_rejet_05005 = [];

async function chartIt05005(){
    await GraphDATA05005();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05005-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05005
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05005
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05005-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05005,vote_lepen_05005,vote_rejet_05005]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05005-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05005,vote_lepenpop_05005,vote_rejetpop_05005]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05005"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05005
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05005
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05005
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05006*/
/*------------------------------------------------------------------ */
async function GraphDATA05006() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[5];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05006.push(vote_macron); 
    vote_lepen_05006.push(vote_lepen);
    vote_rejet_05006.push(vote_rejet);
    vote_macronpop_05006.push(vote_macronMediane);
    vote_lepenpop_05006.push(vote_lepenMediane);
    vote_rejetpop_05006.push(vote_rejetMediane);
    name_Commune_05006.push(nameCommune);
    Pourcentage_05006.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05006.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05006.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05006.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05006.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05006 = [];
const vote_lepen_05006 = [];
const vote_rejet_05006 = [];
const vote_macronpop_05006 = [];
const vote_lepenpop_05006 = [];
const vote_rejetpop_05006 = [];
const name_Commune_05006 = [];
const Pourcentage_05006 = [];
const Pourcentage_rejet_05006 = [];
const vote_gene_macron_05006 = [];
const vote_gene_lepen_05006 = [];
const vote_gene_rejet_05006 = [];

async function chartIt05006(){
    await GraphDATA05006();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05006-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05006
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05006
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05006-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05006,vote_lepen_05006,vote_rejet_05006]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05006-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05006,vote_lepenpop_05006,vote_rejetpop_05006]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05006"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05006
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05006
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05006
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05007*/
/*------------------------------------------------------------------ */
async function GraphDATA05007() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[6];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05007.push(vote_macron); 
    vote_lepen_05007.push(vote_lepen);
    vote_rejet_05007.push(vote_rejet);
    vote_macronpop_05007.push(vote_macronMediane);
    vote_lepenpop_05007.push(vote_lepenMediane);
    vote_rejetpop_05007.push(vote_rejetMediane);
    name_Commune_05007.push(nameCommune);
    Pourcentage_05007.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05007.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05007.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05007.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05007.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05007 = [];
const vote_lepen_05007 = [];
const vote_rejet_05007 = [];
const vote_macronpop_05007 = [];
const vote_lepenpop_05007 = [];
const vote_rejetpop_05007 = [];
const name_Commune_05007 = [];
const Pourcentage_05007 = [];
const Pourcentage_rejet_05007 = [];
const vote_gene_macron_05007 = [];
const vote_gene_lepen_05007 = [];
const vote_gene_rejet_05007 = [];

async function chartIt05007(){
    await GraphDATA05007();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05007-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05007
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05007
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05007-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05007,vote_lepen_05007,vote_rejet_05007]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05007-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05007,vote_lepenpop_05007,vote_rejetpop_05007]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05007"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05007
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05007
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05007
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05008*/
/*------------------------------------------------------------------ */
async function GraphDATA05008() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[7];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05008.push(vote_macron); 
    vote_lepen_05008.push(vote_lepen);
    vote_rejet_05008.push(vote_rejet);
    vote_macronpop_05008.push(vote_macronMediane);
    vote_lepenpop_05008.push(vote_lepenMediane);
    vote_rejetpop_05008.push(vote_rejetMediane);
    name_Commune_05008.push(nameCommune);
    Pourcentage_05008.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05008.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05008.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05008.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05008.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05008 = [];
const vote_lepen_05008 = [];
const vote_rejet_05008 = [];
const vote_macronpop_05008 = [];
const vote_lepenpop_05008 = [];
const vote_rejetpop_05008 = [];
const name_Commune_05008 = [];
const Pourcentage_05008 = [];
const Pourcentage_rejet_05008 = [];
const vote_gene_macron_05008 = [];
const vote_gene_lepen_05008 = [];
const vote_gene_rejet_05008 = [];

async function chartIt05008(){
    await GraphDATA05008();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05008-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05008
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05008
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05008-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05008,vote_lepen_05008,vote_rejet_05008]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05008-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05008,vote_lepenpop_05008,vote_rejetpop_05008]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05008"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05008
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05008
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05008
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05009*/
/*------------------------------------------------------------------ */
async function GraphDATA05009() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[8];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05009.push(vote_macron); 
    vote_lepen_05009.push(vote_lepen);
    vote_rejet_05009.push(vote_rejet);
    vote_macronpop_05009.push(vote_macronMediane);
    vote_lepenpop_05009.push(vote_lepenMediane);
    vote_rejetpop_05009.push(vote_rejetMediane);
    name_Commune_05009.push(nameCommune);
    Pourcentage_05009.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05009.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05009.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05009.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05009.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05009 = [];
const vote_lepen_05009 = [];
const vote_rejet_05009 = [];
const vote_macronpop_05009 = [];
const vote_lepenpop_05009 = [];
const vote_rejetpop_05009 = [];
const name_Commune_05009 = [];
const Pourcentage_05009 = [];
const Pourcentage_rejet_05009 = [];
const vote_gene_macron_05009 = [];
const vote_gene_lepen_05009 = [];
const vote_gene_rejet_05009 = [];

async function chartIt05009(){
    await GraphDATA05009();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05009-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05009
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05009
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05009-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05009,vote_lepen_05009,vote_rejet_05009]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05009-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05009,vote_lepenpop_05009,vote_rejetpop_05009]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05009"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05009
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05009
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05009
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05010*/
/*------------------------------------------------------------------ */
async function GraphDATA05010() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[9];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05010.push(vote_macron); 
    vote_lepen_05010.push(vote_lepen);
    vote_rejet_05010.push(vote_rejet);
    vote_macronpop_05010.push(vote_macronMediane);
    vote_lepenpop_05010.push(vote_lepenMediane);
    vote_rejetpop_05010.push(vote_rejetMediane);
    name_Commune_05010.push(nameCommune);
    Pourcentage_05010.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05010.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05010.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05010.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05010.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05010 = [];
const vote_lepen_05010 = [];
const vote_rejet_05010 = [];
const vote_macronpop_05010 = [];
const vote_lepenpop_05010 = [];
const vote_rejetpop_05010 = [];
const name_Commune_05010 = [];
const Pourcentage_05010 = [];
const Pourcentage_rejet_05010 = [];
const vote_gene_macron_05010 = [];
const vote_gene_lepen_05010 = [];
const vote_gene_rejet_05010 = [];

async function chartIt05010(){
    await GraphDATA05010();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05010-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05010
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05010
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05010-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05010,vote_lepen_05010,vote_rejet_05010]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05010-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05010,vote_lepenpop_05010,vote_rejetpop_05010]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05010"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05010
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05010
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05010
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05011*/
/*------------------------------------------------------------------ */
async function GraphDATA05011() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[10];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05011.push(vote_macron); 
    vote_lepen_05011.push(vote_lepen);
    vote_rejet_05011.push(vote_rejet);
    vote_macronpop_05011.push(vote_macronMediane);
    vote_lepenpop_05011.push(vote_lepenMediane);
    vote_rejetpop_05011.push(vote_rejetMediane);
    name_Commune_05011.push(nameCommune);
    Pourcentage_05011.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05011.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05011.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05011.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05011.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05011 = [];
const vote_lepen_05011 = [];
const vote_rejet_05011 = [];
const vote_macronpop_05011 = [];
const vote_lepenpop_05011 = [];
const vote_rejetpop_05011 = [];
const name_Commune_05011 = [];
const Pourcentage_05011 = [];
const Pourcentage_rejet_05011 = [];
const vote_gene_macron_05011 = [];
const vote_gene_lepen_05011 = [];
const vote_gene_rejet_05011 = [];

async function chartIt05011(){
    await GraphDATA05011();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05011-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05011
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05011
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05011-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05011,vote_lepen_05011,vote_rejet_05011]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05011-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05011,vote_lepenpop_05011,vote_rejetpop_05011]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05011"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05011
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05011
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05011
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05012*/
/*------------------------------------------------------------------ */
async function GraphDATA05012() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[11];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05012.push(vote_macron); 
    vote_lepen_05012.push(vote_lepen);
    vote_rejet_05012.push(vote_rejet);
    vote_macronpop_05012.push(vote_macronMediane);
    vote_lepenpop_05012.push(vote_lepenMediane);
    vote_rejetpop_05012.push(vote_rejetMediane);
    name_Commune_05012.push(nameCommune);
    Pourcentage_05012.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05012.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05012.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05012.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05012.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05012 = [];
const vote_lepen_05012 = [];
const vote_rejet_05012 = [];
const vote_macronpop_05012 = [];
const vote_lepenpop_05012 = [];
const vote_rejetpop_05012 = [];
const name_Commune_05012 = [];
const Pourcentage_05012 = [];
const Pourcentage_rejet_05012 = [];
const vote_gene_macron_05012 = [];
const vote_gene_lepen_05012 = [];
const vote_gene_rejet_05012 = [];

async function chartIt05012(){
    await GraphDATA05012();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05012-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05012
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05012
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05012-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05012,vote_lepen_05012,vote_rejet_05012]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05012-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05012,vote_lepenpop_05012,vote_rejetpop_05012]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05012"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05012
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05012
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05012
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05013*/
/*------------------------------------------------------------------ */
async function GraphDATA05013() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[12];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05013.push(vote_macron); 
    vote_lepen_05013.push(vote_lepen);
    vote_rejet_05013.push(vote_rejet);
    vote_macronpop_05013.push(vote_macronMediane);
    vote_lepenpop_05013.push(vote_lepenMediane);
    vote_rejetpop_05013.push(vote_rejetMediane);
    name_Commune_05013.push(nameCommune);
    Pourcentage_05013.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05013.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05013.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05013.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05013.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05013 = [];
const vote_lepen_05013 = [];
const vote_rejet_05013 = [];
const vote_macronpop_05013 = [];
const vote_lepenpop_05013 = [];
const vote_rejetpop_05013 = [];
const name_Commune_05013 = [];
const Pourcentage_05013 = [];
const Pourcentage_rejet_05013 = [];
const vote_gene_macron_05013 = [];
const vote_gene_lepen_05013 = [];
const vote_gene_rejet_05013 = [];

async function chartIt05013(){
    await GraphDATA05013();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05013-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05013
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05013
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05013-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05013,vote_lepen_05013,vote_rejet_05013]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05013-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05013,vote_lepenpop_05013,vote_rejetpop_05013]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05013"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05013
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05013
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05013
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05014*/
/*------------------------------------------------------------------ */
async function GraphDATA05014() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[13];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05014.push(vote_macron); 
    vote_lepen_05014.push(vote_lepen);
    vote_rejet_05014.push(vote_rejet);
    vote_macronpop_05014.push(vote_macronMediane);
    vote_lepenpop_05014.push(vote_lepenMediane);
    vote_rejetpop_05014.push(vote_rejetMediane);
    name_Commune_05014.push(nameCommune);
    Pourcentage_05014.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05014.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05014.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05014.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05014.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05014 = [];
const vote_lepen_05014 = [];
const vote_rejet_05014 = [];
const vote_macronpop_05014 = [];
const vote_lepenpop_05014 = [];
const vote_rejetpop_05014 = [];
const name_Commune_05014 = [];
const Pourcentage_05014 = [];
const Pourcentage_rejet_05014 = [];
const vote_gene_macron_05014 = [];
const vote_gene_lepen_05014 = [];
const vote_gene_rejet_05014 = [];

async function chartIt05014(){
    await GraphDATA05014();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05014-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05014
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05014
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05014-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05014,vote_lepen_05014,vote_rejet_05014]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05014-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05014,vote_lepenpop_05014,vote_rejetpop_05014]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05014"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05014
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05014
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05014
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05015*/
/*------------------------------------------------------------------ */
async function GraphDATA05015() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[14];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05015.push(vote_macron); 
    vote_lepen_05015.push(vote_lepen);
    vote_rejet_05015.push(vote_rejet);
    vote_macronpop_05015.push(vote_macronMediane);
    vote_lepenpop_05015.push(vote_lepenMediane);
    vote_rejetpop_05015.push(vote_rejetMediane);
    name_Commune_05015.push(nameCommune);
    Pourcentage_05015.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05015.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05015.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05015.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05015.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05015 = [];
const vote_lepen_05015 = [];
const vote_rejet_05015 = [];
const vote_macronpop_05015 = [];
const vote_lepenpop_05015 = [];
const vote_rejetpop_05015 = [];
const name_Commune_05015 = [];
const Pourcentage_05015 = [];
const Pourcentage_rejet_05015 = [];
const vote_gene_macron_05015 = [];
const vote_gene_lepen_05015 = [];
const vote_gene_rejet_05015 = [];

async function chartIt05015(){
    await GraphDATA05015();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05015-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05015
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05015
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05015-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05015,vote_lepen_05015,vote_rejet_05015]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05015-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05015,vote_lepenpop_05015,vote_rejetpop_05015]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05015"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05015
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05015
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05015
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05016*/
/*------------------------------------------------------------------ */
async function GraphDATA05016() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[15];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05016.push(vote_macron); 
    vote_lepen_05016.push(vote_lepen);
    vote_rejet_05016.push(vote_rejet);
    vote_macronpop_05016.push(vote_macronMediane);
    vote_lepenpop_05016.push(vote_lepenMediane);
    vote_rejetpop_05016.push(vote_rejetMediane);
    name_Commune_05016.push(nameCommune);
    Pourcentage_05016.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05016.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05016.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05016.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05016.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05016 = [];
const vote_lepen_05016 = [];
const vote_rejet_05016 = [];
const vote_macronpop_05016 = [];
const vote_lepenpop_05016 = [];
const vote_rejetpop_05016 = [];
const name_Commune_05016 = [];
const Pourcentage_05016 = [];
const Pourcentage_rejet_05016 = [];
const vote_gene_macron_05016 = [];
const vote_gene_lepen_05016 = [];
const vote_gene_rejet_05016 = [];

async function chartIt05016(){
    await GraphDATA05016();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05016-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05016
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05016
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05016-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05016,vote_lepen_05016,vote_rejet_05016]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05016-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05016,vote_lepenpop_05016,vote_rejetpop_05016]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05016"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05016
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05016
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05016
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05017*/
/*------------------------------------------------------------------ */
async function GraphDATA05017() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[16];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05017.push(vote_macron); 
    vote_lepen_05017.push(vote_lepen);
    vote_rejet_05017.push(vote_rejet);
    vote_macronpop_05017.push(vote_macronMediane);
    vote_lepenpop_05017.push(vote_lepenMediane);
    vote_rejetpop_05017.push(vote_rejetMediane);
    name_Commune_05017.push(nameCommune);
    Pourcentage_05017.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05017.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05017.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05017.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05017.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05017 = [];
const vote_lepen_05017 = [];
const vote_rejet_05017 = [];
const vote_macronpop_05017 = [];
const vote_lepenpop_05017 = [];
const vote_rejetpop_05017 = [];
const name_Commune_05017 = [];
const Pourcentage_05017 = [];
const Pourcentage_rejet_05017 = [];
const vote_gene_macron_05017 = [];
const vote_gene_lepen_05017 = [];
const vote_gene_rejet_05017 = [];

async function chartIt05017(){
    await GraphDATA05017();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05017-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05017
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05017
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05017-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05017,vote_lepen_05017,vote_rejet_05017]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05017-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05017,vote_lepenpop_05017,vote_rejetpop_05017]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05017"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05017
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05017
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05017
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05018*/
/*------------------------------------------------------------------ */
async function GraphDATA05018() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[17];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05018.push(vote_macron); 
    vote_lepen_05018.push(vote_lepen);
    vote_rejet_05018.push(vote_rejet);
    vote_macronpop_05018.push(vote_macronMediane);
    vote_lepenpop_05018.push(vote_lepenMediane);
    vote_rejetpop_05018.push(vote_rejetMediane);
    name_Commune_05018.push(nameCommune);
    Pourcentage_05018.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05018.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05018.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05018.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05018.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05018 = [];
const vote_lepen_05018 = [];
const vote_rejet_05018 = [];
const vote_macronpop_05018 = [];
const vote_lepenpop_05018 = [];
const vote_rejetpop_05018 = [];
const name_Commune_05018 = [];
const Pourcentage_05018 = [];
const Pourcentage_rejet_05018 = [];
const vote_gene_macron_05018 = [];
const vote_gene_lepen_05018 = [];
const vote_gene_rejet_05018 = [];

async function chartIt05018(){
    await GraphDATA05018();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05018-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05018
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05018
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05018-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05018,vote_lepen_05018,vote_rejet_05018]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05018-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05018,vote_lepenpop_05018,vote_rejetpop_05018]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05018"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05018
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05018
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05018
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05019*/
/*------------------------------------------------------------------ */
async function GraphDATA05019() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[18];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05019.push(vote_macron); 
    vote_lepen_05019.push(vote_lepen);
    vote_rejet_05019.push(vote_rejet);
    vote_macronpop_05019.push(vote_macronMediane);
    vote_lepenpop_05019.push(vote_lepenMediane);
    vote_rejetpop_05019.push(vote_rejetMediane);
    name_Commune_05019.push(nameCommune);
    Pourcentage_05019.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05019.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05019.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05019.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05019.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05019 = [];
const vote_lepen_05019 = [];
const vote_rejet_05019 = [];
const vote_macronpop_05019 = [];
const vote_lepenpop_05019 = [];
const vote_rejetpop_05019 = [];
const name_Commune_05019 = [];
const Pourcentage_05019 = [];
const Pourcentage_rejet_05019 = [];
const vote_gene_macron_05019 = [];
const vote_gene_lepen_05019 = [];
const vote_gene_rejet_05019 = [];

async function chartIt05019(){
    await GraphDATA05019();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05019-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05019
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05019
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05019-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05019,vote_lepen_05019,vote_rejet_05019]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05019-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05019,vote_lepenpop_05019,vote_rejetpop_05019]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05019"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05019
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05019
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05019
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05020*/
/*------------------------------------------------------------------ */
async function GraphDATA05020() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[19];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05020.push(vote_macron); 
    vote_lepen_05020.push(vote_lepen);
    vote_rejet_05020.push(vote_rejet);
    vote_macronpop_05020.push(vote_macronMediane);
    vote_lepenpop_05020.push(vote_lepenMediane);
    vote_rejetpop_05020.push(vote_rejetMediane);
    name_Commune_05020.push(nameCommune);
    Pourcentage_05020.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05020.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05020.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05020.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05020.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05020 = [];
const vote_lepen_05020 = [];
const vote_rejet_05020 = [];
const vote_macronpop_05020 = [];
const vote_lepenpop_05020 = [];
const vote_rejetpop_05020 = [];
const name_Commune_05020 = [];
const Pourcentage_05020 = [];
const Pourcentage_rejet_05020 = [];
const vote_gene_macron_05020 = [];
const vote_gene_lepen_05020 = [];
const vote_gene_rejet_05020 = [];

async function chartIt05020(){
    await GraphDATA05020();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05020-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05020
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05020
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05020-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05020,vote_lepen_05020,vote_rejet_05020]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05020-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05020,vote_lepenpop_05020,vote_rejetpop_05020]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05020"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05020
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05020
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05020
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05021*/
/*------------------------------------------------------------------ */
async function GraphDATA05021() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[20];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05021.push(vote_macron); 
    vote_lepen_05021.push(vote_lepen);
    vote_rejet_05021.push(vote_rejet);
    vote_macronpop_05021.push(vote_macronMediane);
    vote_lepenpop_05021.push(vote_lepenMediane);
    vote_rejetpop_05021.push(vote_rejetMediane);
    name_Commune_05021.push(nameCommune);
    Pourcentage_05021.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05021.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05021.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05021.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05021.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05021 = [];
const vote_lepen_05021 = [];
const vote_rejet_05021 = [];
const vote_macronpop_05021 = [];
const vote_lepenpop_05021 = [];
const vote_rejetpop_05021 = [];
const name_Commune_05021 = [];
const Pourcentage_05021 = [];
const Pourcentage_rejet_05021 = [];
const vote_gene_macron_05021 = [];
const vote_gene_lepen_05021 = [];
const vote_gene_rejet_05021 = [];

async function chartIt05021(){
    await GraphDATA05021();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05021-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05021
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05021
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05021-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05021,vote_lepen_05021,vote_rejet_05021]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05021-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05021,vote_lepenpop_05021,vote_rejetpop_05021]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05021"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05021
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05021
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05021
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05022*/
/*------------------------------------------------------------------ */
async function GraphDATA05022() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[21];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05022.push(vote_macron); 
    vote_lepen_05022.push(vote_lepen);
    vote_rejet_05022.push(vote_rejet);
    vote_macronpop_05022.push(vote_macronMediane);
    vote_lepenpop_05022.push(vote_lepenMediane);
    vote_rejetpop_05022.push(vote_rejetMediane);
    name_Commune_05022.push(nameCommune);
    Pourcentage_05022.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05022.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05022.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05022.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05022.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05022 = [];
const vote_lepen_05022 = [];
const vote_rejet_05022 = [];
const vote_macronpop_05022 = [];
const vote_lepenpop_05022 = [];
const vote_rejetpop_05022 = [];
const name_Commune_05022 = [];
const Pourcentage_05022 = [];
const Pourcentage_rejet_05022 = [];
const vote_gene_macron_05022 = [];
const vote_gene_lepen_05022 = [];
const vote_gene_rejet_05022 = [];

async function chartIt05022(){
    await GraphDATA05022();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05022-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05022
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05022
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05022-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05022,vote_lepen_05022,vote_rejet_05022]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05022-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05022,vote_lepenpop_05022,vote_rejetpop_05022]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05022"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05022
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05022
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05022
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05023*/
/*------------------------------------------------------------------ */
async function GraphDATA05023() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[22];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05023.push(vote_macron); 
    vote_lepen_05023.push(vote_lepen);
    vote_rejet_05023.push(vote_rejet);
    vote_macronpop_05023.push(vote_macronMediane);
    vote_lepenpop_05023.push(vote_lepenMediane);
    vote_rejetpop_05023.push(vote_rejetMediane);
    name_Commune_05023.push(nameCommune);
    Pourcentage_05023.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05023.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05023.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05023.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05023.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05023 = [];
const vote_lepen_05023 = [];
const vote_rejet_05023 = [];
const vote_macronpop_05023 = [];
const vote_lepenpop_05023 = [];
const vote_rejetpop_05023 = [];
const name_Commune_05023 = [];
const Pourcentage_05023 = [];
const Pourcentage_rejet_05023 = [];
const vote_gene_macron_05023 = [];
const vote_gene_lepen_05023 = [];
const vote_gene_rejet_05023 = [];

async function chartIt05023(){
    await GraphDATA05023();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05023-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05023
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05023
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05023-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05023,vote_lepen_05023,vote_rejet_05023]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05023-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05023,vote_lepenpop_05023,vote_rejetpop_05023]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05023"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05023
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05023
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05023
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05024*/
/*------------------------------------------------------------------ */
async function GraphDATA05024() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[23];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05024.push(vote_macron); 
    vote_lepen_05024.push(vote_lepen);
    vote_rejet_05024.push(vote_rejet);
    vote_macronpop_05024.push(vote_macronMediane);
    vote_lepenpop_05024.push(vote_lepenMediane);
    vote_rejetpop_05024.push(vote_rejetMediane);
    name_Commune_05024.push(nameCommune);
    Pourcentage_05024.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05024.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05024.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05024.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05024.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05024 = [];
const vote_lepen_05024 = [];
const vote_rejet_05024 = [];
const vote_macronpop_05024 = [];
const vote_lepenpop_05024 = [];
const vote_rejetpop_05024 = [];
const name_Commune_05024 = [];
const Pourcentage_05024 = [];
const Pourcentage_rejet_05024 = [];
const vote_gene_macron_05024 = [];
const vote_gene_lepen_05024 = [];
const vote_gene_rejet_05024 = [];

async function chartIt05024(){
    await GraphDATA05024();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05024-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05024
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05024
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05024-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05024,vote_lepen_05024,vote_rejet_05024]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05024-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05024,vote_lepenpop_05024,vote_rejetpop_05024]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05024"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05024
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05024
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05024
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05025*/
/*------------------------------------------------------------------ */
async function GraphDATA05025() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[24];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05025.push(vote_macron); 
    vote_lepen_05025.push(vote_lepen);
    vote_rejet_05025.push(vote_rejet);
    vote_macronpop_05025.push(vote_macronMediane);
    vote_lepenpop_05025.push(vote_lepenMediane);
    vote_rejetpop_05025.push(vote_rejetMediane);
    name_Commune_05025.push(nameCommune);
    Pourcentage_05025.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05025.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05025.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05025.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05025.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05025 = [];
const vote_lepen_05025 = [];
const vote_rejet_05025 = [];
const vote_macronpop_05025 = [];
const vote_lepenpop_05025 = [];
const vote_rejetpop_05025 = [];
const name_Commune_05025 = [];
const Pourcentage_05025 = [];
const Pourcentage_rejet_05025 = [];
const vote_gene_macron_05025 = [];
const vote_gene_lepen_05025 = [];
const vote_gene_rejet_05025 = [];

async function chartIt05025(){
    await GraphDATA05025();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05025-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05025
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05025
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05025-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05025,vote_lepen_05025,vote_rejet_05025]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05025-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05025,vote_lepenpop_05025,vote_rejetpop_05025]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05025"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05025
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05025
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05025
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05026*/
/*------------------------------------------------------------------ */
async function GraphDATA05026() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[25];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05026.push(vote_macron); 
    vote_lepen_05026.push(vote_lepen);
    vote_rejet_05026.push(vote_rejet);
    vote_macronpop_05026.push(vote_macronMediane);
    vote_lepenpop_05026.push(vote_lepenMediane);
    vote_rejetpop_05026.push(vote_rejetMediane);
    name_Commune_05026.push(nameCommune);
    Pourcentage_05026.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05026.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05026.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05026.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05026.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05026 = [];
const vote_lepen_05026 = [];
const vote_rejet_05026 = [];
const vote_macronpop_05026 = [];
const vote_lepenpop_05026 = [];
const vote_rejetpop_05026 = [];
const name_Commune_05026 = [];
const Pourcentage_05026 = [];
const Pourcentage_rejet_05026 = [];
const vote_gene_macron_05026 = [];
const vote_gene_lepen_05026 = [];
const vote_gene_rejet_05026 = [];

async function chartIt05026(){
    await GraphDATA05026();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05026-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05026
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05026
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05026-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05026,vote_lepen_05026,vote_rejet_05026]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05026-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05026,vote_lepenpop_05026,vote_rejetpop_05026]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05026"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05026
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05026
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05026
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05027*/
/*------------------------------------------------------------------ */
async function GraphDATA05027() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[26];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05027.push(vote_macron); 
    vote_lepen_05027.push(vote_lepen);
    vote_rejet_05027.push(vote_rejet);
    vote_macronpop_05027.push(vote_macronMediane);
    vote_lepenpop_05027.push(vote_lepenMediane);
    vote_rejetpop_05027.push(vote_rejetMediane);
    name_Commune_05027.push(nameCommune);
    Pourcentage_05027.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05027.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05027.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05027.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05027.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05027 = [];
const vote_lepen_05027 = [];
const vote_rejet_05027 = [];
const vote_macronpop_05027 = [];
const vote_lepenpop_05027 = [];
const vote_rejetpop_05027 = [];
const name_Commune_05027 = [];
const Pourcentage_05027 = [];
const Pourcentage_rejet_05027 = [];
const vote_gene_macron_05027 = [];
const vote_gene_lepen_05027 = [];
const vote_gene_rejet_05027 = [];

async function chartIt05027(){
    await GraphDATA05027();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05027-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05027
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05027
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05027-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05027,vote_lepen_05027,vote_rejet_05027]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05027-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05027,vote_lepenpop_05027,vote_rejetpop_05027]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05027"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05027
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05027
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05027
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05028*/
/*------------------------------------------------------------------ */
async function GraphDATA05028() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[27];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05028.push(vote_macron); 
    vote_lepen_05028.push(vote_lepen);
    vote_rejet_05028.push(vote_rejet);
    vote_macronpop_05028.push(vote_macronMediane);
    vote_lepenpop_05028.push(vote_lepenMediane);
    vote_rejetpop_05028.push(vote_rejetMediane);
    name_Commune_05028.push(nameCommune);
    Pourcentage_05028.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05028.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05028.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05028.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05028.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05028 = [];
const vote_lepen_05028 = [];
const vote_rejet_05028 = [];
const vote_macronpop_05028 = [];
const vote_lepenpop_05028 = [];
const vote_rejetpop_05028 = [];
const name_Commune_05028 = [];
const Pourcentage_05028 = [];
const Pourcentage_rejet_05028 = [];
const vote_gene_macron_05028 = [];
const vote_gene_lepen_05028 = [];
const vote_gene_rejet_05028 = [];

async function chartIt05028(){
    await GraphDATA05028();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05028-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05028
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05028
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05028-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05028,vote_lepen_05028,vote_rejet_05028]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05028-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05028,vote_lepenpop_05028,vote_rejetpop_05028]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05028"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05028
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05028
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05028
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05029*/
/*------------------------------------------------------------------ */
async function GraphDATA05029() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[28];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05029.push(vote_macron); 
    vote_lepen_05029.push(vote_lepen);
    vote_rejet_05029.push(vote_rejet);
    vote_macronpop_05029.push(vote_macronMediane);
    vote_lepenpop_05029.push(vote_lepenMediane);
    vote_rejetpop_05029.push(vote_rejetMediane);
    name_Commune_05029.push(nameCommune);
    Pourcentage_05029.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05029.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05029.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05029.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05029.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05029 = [];
const vote_lepen_05029 = [];
const vote_rejet_05029 = [];
const vote_macronpop_05029 = [];
const vote_lepenpop_05029 = [];
const vote_rejetpop_05029 = [];
const name_Commune_05029 = [];
const Pourcentage_05029 = [];
const Pourcentage_rejet_05029 = [];
const vote_gene_macron_05029 = [];
const vote_gene_lepen_05029 = [];
const vote_gene_rejet_05029 = [];

async function chartIt05029(){
    await GraphDATA05029();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05029-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05029
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05029
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05029-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05029,vote_lepen_05029,vote_rejet_05029]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05029-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05029,vote_lepenpop_05029,vote_rejetpop_05029]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05029"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05029
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05029
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05029
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05030*/
/*------------------------------------------------------------------ */
async function GraphDATA05030() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[29];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05030.push(vote_macron); 
    vote_lepen_05030.push(vote_lepen);
    vote_rejet_05030.push(vote_rejet);
    vote_macronpop_05030.push(vote_macronMediane);
    vote_lepenpop_05030.push(vote_lepenMediane);
    vote_rejetpop_05030.push(vote_rejetMediane);
    name_Commune_05030.push(nameCommune);
    Pourcentage_05030.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05030.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05030.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05030.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05030.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05030 = [];
const vote_lepen_05030 = [];
const vote_rejet_05030 = [];
const vote_macronpop_05030 = [];
const vote_lepenpop_05030 = [];
const vote_rejetpop_05030 = [];
const name_Commune_05030 = [];
const Pourcentage_05030 = [];
const Pourcentage_rejet_05030 = [];
const vote_gene_macron_05030 = [];
const vote_gene_lepen_05030 = [];
const vote_gene_rejet_05030 = [];

async function chartIt05030(){
    await GraphDATA05030();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05030-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05030
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05030
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05030-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05030,vote_lepen_05030,vote_rejet_05030]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05030-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05030,vote_lepenpop_05030,vote_rejetpop_05030]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05030"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05030
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05030
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05030
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05031*/
/*------------------------------------------------------------------ */
async function GraphDATA05031() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[30];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05031.push(vote_macron); 
    vote_lepen_05031.push(vote_lepen);
    vote_rejet_05031.push(vote_rejet);
    vote_macronpop_05031.push(vote_macronMediane);
    vote_lepenpop_05031.push(vote_lepenMediane);
    vote_rejetpop_05031.push(vote_rejetMediane);
    name_Commune_05031.push(nameCommune);
    Pourcentage_05031.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05031.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05031.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05031.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05031.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05031 = [];
const vote_lepen_05031 = [];
const vote_rejet_05031 = [];
const vote_macronpop_05031 = [];
const vote_lepenpop_05031 = [];
const vote_rejetpop_05031 = [];
const name_Commune_05031 = [];
const Pourcentage_05031 = [];
const Pourcentage_rejet_05031 = [];
const vote_gene_macron_05031 = [];
const vote_gene_lepen_05031 = [];
const vote_gene_rejet_05031 = [];

async function chartIt05031(){
    await GraphDATA05031();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05031-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05031
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05031
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05031-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05031,vote_lepen_05031,vote_rejet_05031]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05031-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05031,vote_lepenpop_05031,vote_rejetpop_05031]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05031"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05031
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05031
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05031
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05032*/
/*------------------------------------------------------------------ */
async function GraphDATA05032() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[31];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05032.push(vote_macron); 
    vote_lepen_05032.push(vote_lepen);
    vote_rejet_05032.push(vote_rejet);
    vote_macronpop_05032.push(vote_macronMediane);
    vote_lepenpop_05032.push(vote_lepenMediane);
    vote_rejetpop_05032.push(vote_rejetMediane);
    name_Commune_05032.push(nameCommune);
    Pourcentage_05032.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05032.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05032.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05032.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05032.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05032 = [];
const vote_lepen_05032 = [];
const vote_rejet_05032 = [];
const vote_macronpop_05032 = [];
const vote_lepenpop_05032 = [];
const vote_rejetpop_05032 = [];
const name_Commune_05032 = [];
const Pourcentage_05032 = [];
const Pourcentage_rejet_05032 = [];
const vote_gene_macron_05032 = [];
const vote_gene_lepen_05032 = [];
const vote_gene_rejet_05032 = [];

async function chartIt05032(){
    await GraphDATA05032();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05032-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05032
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05032
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05032-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05032,vote_lepen_05032,vote_rejet_05032]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05032-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05032,vote_lepenpop_05032,vote_rejetpop_05032]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05032"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05032
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05032
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05032
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05033*/
/*------------------------------------------------------------------ */
async function GraphDATA05033() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[32];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05033.push(vote_macron); 
    vote_lepen_05033.push(vote_lepen);
    vote_rejet_05033.push(vote_rejet);
    vote_macronpop_05033.push(vote_macronMediane);
    vote_lepenpop_05033.push(vote_lepenMediane);
    vote_rejetpop_05033.push(vote_rejetMediane);
    name_Commune_05033.push(nameCommune);
    Pourcentage_05033.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05033.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05033.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05033.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05033.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05033 = [];
const vote_lepen_05033 = [];
const vote_rejet_05033 = [];
const vote_macronpop_05033 = [];
const vote_lepenpop_05033 = [];
const vote_rejetpop_05033 = [];
const name_Commune_05033 = [];
const Pourcentage_05033 = [];
const Pourcentage_rejet_05033 = [];
const vote_gene_macron_05033 = [];
const vote_gene_lepen_05033 = [];
const vote_gene_rejet_05033 = [];

async function chartIt05033(){
    await GraphDATA05033();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05033-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05033
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05033
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05033-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05033,vote_lepen_05033,vote_rejet_05033]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05033-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05033,vote_lepenpop_05033,vote_rejetpop_05033]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05033"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05033
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05033
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05033
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05034*/
/*------------------------------------------------------------------ */
async function GraphDATA05034() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[33];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05034.push(vote_macron); 
    vote_lepen_05034.push(vote_lepen);
    vote_rejet_05034.push(vote_rejet);
    vote_macronpop_05034.push(vote_macronMediane);
    vote_lepenpop_05034.push(vote_lepenMediane);
    vote_rejetpop_05034.push(vote_rejetMediane);
    name_Commune_05034.push(nameCommune);
    Pourcentage_05034.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05034.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05034.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05034.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05034.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05034 = [];
const vote_lepen_05034 = [];
const vote_rejet_05034 = [];
const vote_macronpop_05034 = [];
const vote_lepenpop_05034 = [];
const vote_rejetpop_05034 = [];
const name_Commune_05034 = [];
const Pourcentage_05034 = [];
const Pourcentage_rejet_05034 = [];
const vote_gene_macron_05034 = [];
const vote_gene_lepen_05034 = [];
const vote_gene_rejet_05034 = [];

async function chartIt05034(){
    await GraphDATA05034();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05034-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05034
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05034
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05034-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05034,vote_lepen_05034,vote_rejet_05034]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05034-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05034,vote_lepenpop_05034,vote_rejetpop_05034]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05034"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05034
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05034
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05034
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05035*/
/*------------------------------------------------------------------ */
async function GraphDATA05035() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[34];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05035.push(vote_macron); 
    vote_lepen_05035.push(vote_lepen);
    vote_rejet_05035.push(vote_rejet);
    vote_macronpop_05035.push(vote_macronMediane);
    vote_lepenpop_05035.push(vote_lepenMediane);
    vote_rejetpop_05035.push(vote_rejetMediane);
    name_Commune_05035.push(nameCommune);
    Pourcentage_05035.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05035.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05035.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05035.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05035.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05035 = [];
const vote_lepen_05035 = [];
const vote_rejet_05035 = [];
const vote_macronpop_05035 = [];
const vote_lepenpop_05035 = [];
const vote_rejetpop_05035 = [];
const name_Commune_05035 = [];
const Pourcentage_05035 = [];
const Pourcentage_rejet_05035 = [];
const vote_gene_macron_05035 = [];
const vote_gene_lepen_05035 = [];
const vote_gene_rejet_05035 = [];

async function chartIt05035(){
    await GraphDATA05035();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05035-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05035
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05035
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05035-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05035,vote_lepen_05035,vote_rejet_05035]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05035-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05035,vote_lepenpop_05035,vote_rejetpop_05035]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05035"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05035
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05035
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05035
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05036*/
/*------------------------------------------------------------------ */
async function GraphDATA05036() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[35];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05036.push(vote_macron); 
    vote_lepen_05036.push(vote_lepen);
    vote_rejet_05036.push(vote_rejet);
    vote_macronpop_05036.push(vote_macronMediane);
    vote_lepenpop_05036.push(vote_lepenMediane);
    vote_rejetpop_05036.push(vote_rejetMediane);
    name_Commune_05036.push(nameCommune);
    Pourcentage_05036.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05036.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05036.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05036.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05036.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05036 = [];
const vote_lepen_05036 = [];
const vote_rejet_05036 = [];
const vote_macronpop_05036 = [];
const vote_lepenpop_05036 = [];
const vote_rejetpop_05036 = [];
const name_Commune_05036 = [];
const Pourcentage_05036 = [];
const Pourcentage_rejet_05036 = [];
const vote_gene_macron_05036 = [];
const vote_gene_lepen_05036 = [];
const vote_gene_rejet_05036 = [];

async function chartIt05036(){
    await GraphDATA05036();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05036-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05036
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05036
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05036-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05036,vote_lepen_05036,vote_rejet_05036]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05036-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05036,vote_lepenpop_05036,vote_rejetpop_05036]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05036"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05036
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05036
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05036
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05037*/
/*------------------------------------------------------------------ */
async function GraphDATA05037() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[36];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05037.push(vote_macron); 
    vote_lepen_05037.push(vote_lepen);
    vote_rejet_05037.push(vote_rejet);
    vote_macronpop_05037.push(vote_macronMediane);
    vote_lepenpop_05037.push(vote_lepenMediane);
    vote_rejetpop_05037.push(vote_rejetMediane);
    name_Commune_05037.push(nameCommune);
    Pourcentage_05037.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05037.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05037.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05037.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05037.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05037 = [];
const vote_lepen_05037 = [];
const vote_rejet_05037 = [];
const vote_macronpop_05037 = [];
const vote_lepenpop_05037 = [];
const vote_rejetpop_05037 = [];
const name_Commune_05037 = [];
const Pourcentage_05037 = [];
const Pourcentage_rejet_05037 = [];
const vote_gene_macron_05037 = [];
const vote_gene_lepen_05037 = [];
const vote_gene_rejet_05037 = [];

async function chartIt05037(){
    await GraphDATA05037();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05037-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05037
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05037
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05037-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05037,vote_lepen_05037,vote_rejet_05037]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05037-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05037,vote_lepenpop_05037,vote_rejetpop_05037]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05037"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05037
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05037
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05037
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05038*/
/*------------------------------------------------------------------ */
async function GraphDATA05038() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[37];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05038.push(vote_macron); 
    vote_lepen_05038.push(vote_lepen);
    vote_rejet_05038.push(vote_rejet);
    vote_macronpop_05038.push(vote_macronMediane);
    vote_lepenpop_05038.push(vote_lepenMediane);
    vote_rejetpop_05038.push(vote_rejetMediane);
    name_Commune_05038.push(nameCommune);
    Pourcentage_05038.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05038.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05038.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05038.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05038.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05038 = [];
const vote_lepen_05038 = [];
const vote_rejet_05038 = [];
const vote_macronpop_05038 = [];
const vote_lepenpop_05038 = [];
const vote_rejetpop_05038 = [];
const name_Commune_05038 = [];
const Pourcentage_05038 = [];
const Pourcentage_rejet_05038 = [];
const vote_gene_macron_05038 = [];
const vote_gene_lepen_05038 = [];
const vote_gene_rejet_05038 = [];

async function chartIt05038(){
    await GraphDATA05038();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05038-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05038
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05038
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05038-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05038,vote_lepen_05038,vote_rejet_05038]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05038-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05038,vote_lepenpop_05038,vote_rejetpop_05038]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05038"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05038
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05038
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05038
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05039*/
/*------------------------------------------------------------------ */
async function GraphDATA05039() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[38];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05039.push(vote_macron); 
    vote_lepen_05039.push(vote_lepen);
    vote_rejet_05039.push(vote_rejet);
    vote_macronpop_05039.push(vote_macronMediane);
    vote_lepenpop_05039.push(vote_lepenMediane);
    vote_rejetpop_05039.push(vote_rejetMediane);
    name_Commune_05039.push(nameCommune);
    Pourcentage_05039.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05039.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05039.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05039.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05039.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05039 = [];
const vote_lepen_05039 = [];
const vote_rejet_05039 = [];
const vote_macronpop_05039 = [];
const vote_lepenpop_05039 = [];
const vote_rejetpop_05039 = [];
const name_Commune_05039 = [];
const Pourcentage_05039 = [];
const Pourcentage_rejet_05039 = [];
const vote_gene_macron_05039 = [];
const vote_gene_lepen_05039 = [];
const vote_gene_rejet_05039 = [];

async function chartIt05039(){
    await GraphDATA05039();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05039-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05039
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05039
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05039-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05039,vote_lepen_05039,vote_rejet_05039]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05039-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05039,vote_lepenpop_05039,vote_rejetpop_05039]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05039"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05039
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05039
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05039
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05040*/
/*------------------------------------------------------------------ */
async function GraphDATA05040() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[39];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05040.push(vote_macron); 
    vote_lepen_05040.push(vote_lepen);
    vote_rejet_05040.push(vote_rejet);
    vote_macronpop_05040.push(vote_macronMediane);
    vote_lepenpop_05040.push(vote_lepenMediane);
    vote_rejetpop_05040.push(vote_rejetMediane);
    name_Commune_05040.push(nameCommune);
    Pourcentage_05040.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05040.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05040.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05040.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05040.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05040 = [];
const vote_lepen_05040 = [];
const vote_rejet_05040 = [];
const vote_macronpop_05040 = [];
const vote_lepenpop_05040 = [];
const vote_rejetpop_05040 = [];
const name_Commune_05040 = [];
const Pourcentage_05040 = [];
const Pourcentage_rejet_05040 = [];
const vote_gene_macron_05040 = [];
const vote_gene_lepen_05040 = [];
const vote_gene_rejet_05040 = [];

async function chartIt05040(){
    await GraphDATA05040();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05040-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05040
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05040
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05040-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05040,vote_lepen_05040,vote_rejet_05040]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05040-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05040,vote_lepenpop_05040,vote_rejetpop_05040]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05040"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05040
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05040
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05040
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05041*/
/*------------------------------------------------------------------ */
async function GraphDATA05041() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[40];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05041.push(vote_macron); 
    vote_lepen_05041.push(vote_lepen);
    vote_rejet_05041.push(vote_rejet);
    vote_macronpop_05041.push(vote_macronMediane);
    vote_lepenpop_05041.push(vote_lepenMediane);
    vote_rejetpop_05041.push(vote_rejetMediane);
    name_Commune_05041.push(nameCommune);
    Pourcentage_05041.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05041.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05041.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05041.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05041.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05041 = [];
const vote_lepen_05041 = [];
const vote_rejet_05041 = [];
const vote_macronpop_05041 = [];
const vote_lepenpop_05041 = [];
const vote_rejetpop_05041 = [];
const name_Commune_05041 = [];
const Pourcentage_05041 = [];
const Pourcentage_rejet_05041 = [];
const vote_gene_macron_05041 = [];
const vote_gene_lepen_05041 = [];
const vote_gene_rejet_05041 = [];

async function chartIt05041(){
    await GraphDATA05041();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05041-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05041
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05041
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05041-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05041,vote_lepen_05041,vote_rejet_05041]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05041-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05041,vote_lepenpop_05041,vote_rejetpop_05041]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05041"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05041
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05041
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05041
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05042*/
/*------------------------------------------------------------------ */
async function GraphDATA05042() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[41];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05042.push(vote_macron); 
    vote_lepen_05042.push(vote_lepen);
    vote_rejet_05042.push(vote_rejet);
    vote_macronpop_05042.push(vote_macronMediane);
    vote_lepenpop_05042.push(vote_lepenMediane);
    vote_rejetpop_05042.push(vote_rejetMediane);
    name_Commune_05042.push(nameCommune);
    Pourcentage_05042.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05042.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05042.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05042.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05042.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05042 = [];
const vote_lepen_05042 = [];
const vote_rejet_05042 = [];
const vote_macronpop_05042 = [];
const vote_lepenpop_05042 = [];
const vote_rejetpop_05042 = [];
const name_Commune_05042 = [];
const Pourcentage_05042 = [];
const Pourcentage_rejet_05042 = [];
const vote_gene_macron_05042 = [];
const vote_gene_lepen_05042 = [];
const vote_gene_rejet_05042 = [];

async function chartIt05042(){
    await GraphDATA05042();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05042-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05042
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05042
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05042-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05042,vote_lepen_05042,vote_rejet_05042]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05042-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05042,vote_lepenpop_05042,vote_rejetpop_05042]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05042"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05042
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05042
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05042
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05043*/
/*------------------------------------------------------------------ */
async function GraphDATA05043() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[42];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05043.push(vote_macron); 
    vote_lepen_05043.push(vote_lepen);
    vote_rejet_05043.push(vote_rejet);
    vote_macronpop_05043.push(vote_macronMediane);
    vote_lepenpop_05043.push(vote_lepenMediane);
    vote_rejetpop_05043.push(vote_rejetMediane);
    name_Commune_05043.push(nameCommune);
    Pourcentage_05043.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05043.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05043.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05043.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05043.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05043 = [];
const vote_lepen_05043 = [];
const vote_rejet_05043 = [];
const vote_macronpop_05043 = [];
const vote_lepenpop_05043 = [];
const vote_rejetpop_05043 = [];
const name_Commune_05043 = [];
const Pourcentage_05043 = [];
const Pourcentage_rejet_05043 = [];
const vote_gene_macron_05043 = [];
const vote_gene_lepen_05043 = [];
const vote_gene_rejet_05043 = [];

async function chartIt05043(){
    await GraphDATA05043();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05043-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05043
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05043
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05043-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05043,vote_lepen_05043,vote_rejet_05043]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05043-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05043,vote_lepenpop_05043,vote_rejetpop_05043]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05043"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05043
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05043
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05043
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05044*/
/*------------------------------------------------------------------ */
async function GraphDATA05044() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[43];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05044.push(vote_macron); 
    vote_lepen_05044.push(vote_lepen);
    vote_rejet_05044.push(vote_rejet);
    vote_macronpop_05044.push(vote_macronMediane);
    vote_lepenpop_05044.push(vote_lepenMediane);
    vote_rejetpop_05044.push(vote_rejetMediane);
    name_Commune_05044.push(nameCommune);
    Pourcentage_05044.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05044.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05044.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05044.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05044.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05044 = [];
const vote_lepen_05044 = [];
const vote_rejet_05044 = [];
const vote_macronpop_05044 = [];
const vote_lepenpop_05044 = [];
const vote_rejetpop_05044 = [];
const name_Commune_05044 = [];
const Pourcentage_05044 = [];
const Pourcentage_rejet_05044 = [];
const vote_gene_macron_05044 = [];
const vote_gene_lepen_05044 = [];
const vote_gene_rejet_05044 = [];

async function chartIt05044(){
    await GraphDATA05044();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05044-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05044
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05044
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05044-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05044,vote_lepen_05044,vote_rejet_05044]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05044-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05044,vote_lepenpop_05044,vote_rejetpop_05044]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05044"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05044
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05044
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05044
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05045*/
/*------------------------------------------------------------------ */
async function GraphDATA05045() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[44];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05045.push(vote_macron); 
    vote_lepen_05045.push(vote_lepen);
    vote_rejet_05045.push(vote_rejet);
    vote_macronpop_05045.push(vote_macronMediane);
    vote_lepenpop_05045.push(vote_lepenMediane);
    vote_rejetpop_05045.push(vote_rejetMediane);
    name_Commune_05045.push(nameCommune);
    Pourcentage_05045.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05045.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05045.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05045.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05045.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05045 = [];
const vote_lepen_05045 = [];
const vote_rejet_05045 = [];
const vote_macronpop_05045 = [];
const vote_lepenpop_05045 = [];
const vote_rejetpop_05045 = [];
const name_Commune_05045 = [];
const Pourcentage_05045 = [];
const Pourcentage_rejet_05045 = [];
const vote_gene_macron_05045 = [];
const vote_gene_lepen_05045 = [];
const vote_gene_rejet_05045 = [];

async function chartIt05045(){
    await GraphDATA05045();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05045-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05045
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05045
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05045-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05045,vote_lepen_05045,vote_rejet_05045]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05045-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05045,vote_lepenpop_05045,vote_rejetpop_05045]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05045"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05045
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05045
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05045
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05046*/
/*------------------------------------------------------------------ */
async function GraphDATA05046() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[45];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05046.push(vote_macron); 
    vote_lepen_05046.push(vote_lepen);
    vote_rejet_05046.push(vote_rejet);
    vote_macronpop_05046.push(vote_macronMediane);
    vote_lepenpop_05046.push(vote_lepenMediane);
    vote_rejetpop_05046.push(vote_rejetMediane);
    name_Commune_05046.push(nameCommune);
    Pourcentage_05046.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05046.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05046.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05046.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05046.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05046 = [];
const vote_lepen_05046 = [];
const vote_rejet_05046 = [];
const vote_macronpop_05046 = [];
const vote_lepenpop_05046 = [];
const vote_rejetpop_05046 = [];
const name_Commune_05046 = [];
const Pourcentage_05046 = [];
const Pourcentage_rejet_05046 = [];
const vote_gene_macron_05046 = [];
const vote_gene_lepen_05046 = [];
const vote_gene_rejet_05046 = [];

async function chartIt05046(){
    await GraphDATA05046();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05046-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05046
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05046
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05046-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05046,vote_lepen_05046,vote_rejet_05046]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05046-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05046,vote_lepenpop_05046,vote_rejetpop_05046]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05046"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05046
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05046
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05046
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05047*/
/*------------------------------------------------------------------ */
async function GraphDATA05047() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[46];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05047.push(vote_macron); 
    vote_lepen_05047.push(vote_lepen);
    vote_rejet_05047.push(vote_rejet);
    vote_macronpop_05047.push(vote_macronMediane);
    vote_lepenpop_05047.push(vote_lepenMediane);
    vote_rejetpop_05047.push(vote_rejetMediane);
    name_Commune_05047.push(nameCommune);
    Pourcentage_05047.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05047.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05047.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05047.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05047.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05047 = [];
const vote_lepen_05047 = [];
const vote_rejet_05047 = [];
const vote_macronpop_05047 = [];
const vote_lepenpop_05047 = [];
const vote_rejetpop_05047 = [];
const name_Commune_05047 = [];
const Pourcentage_05047 = [];
const Pourcentage_rejet_05047 = [];
const vote_gene_macron_05047 = [];
const vote_gene_lepen_05047 = [];
const vote_gene_rejet_05047 = [];

async function chartIt05047(){
    await GraphDATA05047();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05047-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05047
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05047
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05047-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05047,vote_lepen_05047,vote_rejet_05047]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05047-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05047,vote_lepenpop_05047,vote_rejetpop_05047]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05047"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05047
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05047
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05047
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05048*/
/*------------------------------------------------------------------ */
async function GraphDATA05048() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[47];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05048.push(vote_macron); 
    vote_lepen_05048.push(vote_lepen);
    vote_rejet_05048.push(vote_rejet);
    vote_macronpop_05048.push(vote_macronMediane);
    vote_lepenpop_05048.push(vote_lepenMediane);
    vote_rejetpop_05048.push(vote_rejetMediane);
    name_Commune_05048.push(nameCommune);
    Pourcentage_05048.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05048.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05048.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05048.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05048.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05048 = [];
const vote_lepen_05048 = [];
const vote_rejet_05048 = [];
const vote_macronpop_05048 = [];
const vote_lepenpop_05048 = [];
const vote_rejetpop_05048 = [];
const name_Commune_05048 = [];
const Pourcentage_05048 = [];
const Pourcentage_rejet_05048 = [];
const vote_gene_macron_05048 = [];
const vote_gene_lepen_05048 = [];
const vote_gene_rejet_05048 = [];

async function chartIt05048(){
    await GraphDATA05048();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05048-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05048
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05048
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05048-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05048,vote_lepen_05048,vote_rejet_05048]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05048-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05048,vote_lepenpop_05048,vote_rejetpop_05048]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05048"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05048
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05048
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05048
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05049*/
/*------------------------------------------------------------------ */
async function GraphDATA05049() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[48];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05049.push(vote_macron); 
    vote_lepen_05049.push(vote_lepen);
    vote_rejet_05049.push(vote_rejet);
    vote_macronpop_05049.push(vote_macronMediane);
    vote_lepenpop_05049.push(vote_lepenMediane);
    vote_rejetpop_05049.push(vote_rejetMediane);
    name_Commune_05049.push(nameCommune);
    Pourcentage_05049.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05049.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05049.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05049.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05049.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05049 = [];
const vote_lepen_05049 = [];
const vote_rejet_05049 = [];
const vote_macronpop_05049 = [];
const vote_lepenpop_05049 = [];
const vote_rejetpop_05049 = [];
const name_Commune_05049 = [];
const Pourcentage_05049 = [];
const Pourcentage_rejet_05049 = [];
const vote_gene_macron_05049 = [];
const vote_gene_lepen_05049 = [];
const vote_gene_rejet_05049 = [];

async function chartIt05049(){
    await GraphDATA05049();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05049-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05049
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05049
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05049-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05049,vote_lepen_05049,vote_rejet_05049]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05049-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05049,vote_lepenpop_05049,vote_rejetpop_05049]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05049"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05049
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05049
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05049
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05050*/
/*------------------------------------------------------------------ */
async function GraphDATA05050() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[49];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05050.push(vote_macron); 
    vote_lepen_05050.push(vote_lepen);
    vote_rejet_05050.push(vote_rejet);
    vote_macronpop_05050.push(vote_macronMediane);
    vote_lepenpop_05050.push(vote_lepenMediane);
    vote_rejetpop_05050.push(vote_rejetMediane);
    name_Commune_05050.push(nameCommune);
    Pourcentage_05050.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05050.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05050.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05050.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05050.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05050 = [];
const vote_lepen_05050 = [];
const vote_rejet_05050 = [];
const vote_macronpop_05050 = [];
const vote_lepenpop_05050 = [];
const vote_rejetpop_05050 = [];
const name_Commune_05050 = [];
const Pourcentage_05050 = [];
const Pourcentage_rejet_05050 = [];
const vote_gene_macron_05050 = [];
const vote_gene_lepen_05050 = [];
const vote_gene_rejet_05050 = [];

async function chartIt05050(){
    await GraphDATA05050();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05050-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05050
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05050
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05050-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05050,vote_lepen_05050,vote_rejet_05050]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05050-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05050,vote_lepenpop_05050,vote_rejetpop_05050]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05050"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05050
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05050
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05050
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05051*/
/*------------------------------------------------------------------ */
async function GraphDATA05051() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[50];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05051.push(vote_macron); 
    vote_lepen_05051.push(vote_lepen);
    vote_rejet_05051.push(vote_rejet);
    vote_macronpop_05051.push(vote_macronMediane);
    vote_lepenpop_05051.push(vote_lepenMediane);
    vote_rejetpop_05051.push(vote_rejetMediane);
    name_Commune_05051.push(nameCommune);
    Pourcentage_05051.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05051.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05051.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05051.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05051.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05051 = [];
const vote_lepen_05051 = [];
const vote_rejet_05051 = [];
const vote_macronpop_05051 = [];
const vote_lepenpop_05051 = [];
const vote_rejetpop_05051 = [];
const name_Commune_05051 = [];
const Pourcentage_05051 = [];
const Pourcentage_rejet_05051 = [];
const vote_gene_macron_05051 = [];
const vote_gene_lepen_05051 = [];
const vote_gene_rejet_05051 = [];

async function chartIt05051(){
    await GraphDATA05051();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05051-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05051
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05051
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05051-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05051,vote_lepen_05051,vote_rejet_05051]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05051-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05051,vote_lepenpop_05051,vote_rejetpop_05051]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05051"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05051
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05051
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05051
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05052*/
/*------------------------------------------------------------------ */
async function GraphDATA05052() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[51];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05052.push(vote_macron); 
    vote_lepen_05052.push(vote_lepen);
    vote_rejet_05052.push(vote_rejet);
    vote_macronpop_05052.push(vote_macronMediane);
    vote_lepenpop_05052.push(vote_lepenMediane);
    vote_rejetpop_05052.push(vote_rejetMediane);
    name_Commune_05052.push(nameCommune);
    Pourcentage_05052.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05052.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05052.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05052.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05052.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05052 = [];
const vote_lepen_05052 = [];
const vote_rejet_05052 = [];
const vote_macronpop_05052 = [];
const vote_lepenpop_05052 = [];
const vote_rejetpop_05052 = [];
const name_Commune_05052 = [];
const Pourcentage_05052 = [];
const Pourcentage_rejet_05052 = [];
const vote_gene_macron_05052 = [];
const vote_gene_lepen_05052 = [];
const vote_gene_rejet_05052 = [];

async function chartIt05052(){
    await GraphDATA05052();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05052-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05052
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05052
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05052-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05052,vote_lepen_05052,vote_rejet_05052]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05052-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05052,vote_lepenpop_05052,vote_rejetpop_05052]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05052"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05052
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05052
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05052
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05053*/
/*------------------------------------------------------------------ */
async function GraphDATA05053() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[52];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05053.push(vote_macron); 
    vote_lepen_05053.push(vote_lepen);
    vote_rejet_05053.push(vote_rejet);
    vote_macronpop_05053.push(vote_macronMediane);
    vote_lepenpop_05053.push(vote_lepenMediane);
    vote_rejetpop_05053.push(vote_rejetMediane);
    name_Commune_05053.push(nameCommune);
    Pourcentage_05053.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05053.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05053.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05053.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05053.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05053 = [];
const vote_lepen_05053 = [];
const vote_rejet_05053 = [];
const vote_macronpop_05053 = [];
const vote_lepenpop_05053 = [];
const vote_rejetpop_05053 = [];
const name_Commune_05053 = [];
const Pourcentage_05053 = [];
const Pourcentage_rejet_05053 = [];
const vote_gene_macron_05053 = [];
const vote_gene_lepen_05053 = [];
const vote_gene_rejet_05053 = [];

async function chartIt05053(){
    await GraphDATA05053();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05053-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05053
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05053
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05053-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05053,vote_lepen_05053,vote_rejet_05053]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05053-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05053,vote_lepenpop_05053,vote_rejetpop_05053]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05053"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05053
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05053
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05053
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05054*/
/*------------------------------------------------------------------ */
async function GraphDATA05054() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[53];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05054.push(vote_macron); 
    vote_lepen_05054.push(vote_lepen);
    vote_rejet_05054.push(vote_rejet);
    vote_macronpop_05054.push(vote_macronMediane);
    vote_lepenpop_05054.push(vote_lepenMediane);
    vote_rejetpop_05054.push(vote_rejetMediane);
    name_Commune_05054.push(nameCommune);
    Pourcentage_05054.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05054.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05054.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05054.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05054.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05054 = [];
const vote_lepen_05054 = [];
const vote_rejet_05054 = [];
const vote_macronpop_05054 = [];
const vote_lepenpop_05054 = [];
const vote_rejetpop_05054 = [];
const name_Commune_05054 = [];
const Pourcentage_05054 = [];
const Pourcentage_rejet_05054 = [];
const vote_gene_macron_05054 = [];
const vote_gene_lepen_05054 = [];
const vote_gene_rejet_05054 = [];

async function chartIt05054(){
    await GraphDATA05054();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05054-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05054
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05054
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05054-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05054,vote_lepen_05054,vote_rejet_05054]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05054-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05054,vote_lepenpop_05054,vote_rejetpop_05054]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05054"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05054
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05054
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05054
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05055*/
/*------------------------------------------------------------------ */
async function GraphDATA05055() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[54];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05055.push(vote_macron); 
    vote_lepen_05055.push(vote_lepen);
    vote_rejet_05055.push(vote_rejet);
    vote_macronpop_05055.push(vote_macronMediane);
    vote_lepenpop_05055.push(vote_lepenMediane);
    vote_rejetpop_05055.push(vote_rejetMediane);
    name_Commune_05055.push(nameCommune);
    Pourcentage_05055.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05055.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05055.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05055.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05055.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05055 = [];
const vote_lepen_05055 = [];
const vote_rejet_05055 = [];
const vote_macronpop_05055 = [];
const vote_lepenpop_05055 = [];
const vote_rejetpop_05055 = [];
const name_Commune_05055 = [];
const Pourcentage_05055 = [];
const Pourcentage_rejet_05055 = [];
const vote_gene_macron_05055 = [];
const vote_gene_lepen_05055 = [];
const vote_gene_rejet_05055 = [];

async function chartIt05055(){
    await GraphDATA05055();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05055-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05055
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05055
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05055-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05055,vote_lepen_05055,vote_rejet_05055]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05055-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05055,vote_lepenpop_05055,vote_rejetpop_05055]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05055"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05055
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05055
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05055
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05056*/
/*------------------------------------------------------------------ */
async function GraphDATA05056() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[55];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05056.push(vote_macron); 
    vote_lepen_05056.push(vote_lepen);
    vote_rejet_05056.push(vote_rejet);
    vote_macronpop_05056.push(vote_macronMediane);
    vote_lepenpop_05056.push(vote_lepenMediane);
    vote_rejetpop_05056.push(vote_rejetMediane);
    name_Commune_05056.push(nameCommune);
    Pourcentage_05056.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05056.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05056.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05056.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05056.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05056 = [];
const vote_lepen_05056 = [];
const vote_rejet_05056 = [];
const vote_macronpop_05056 = [];
const vote_lepenpop_05056 = [];
const vote_rejetpop_05056 = [];
const name_Commune_05056 = [];
const Pourcentage_05056 = [];
const Pourcentage_rejet_05056 = [];
const vote_gene_macron_05056 = [];
const vote_gene_lepen_05056 = [];
const vote_gene_rejet_05056 = [];

async function chartIt05056(){
    await GraphDATA05056();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05056-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05056
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05056
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05056-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05056,vote_lepen_05056,vote_rejet_05056]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05056-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05056,vote_lepenpop_05056,vote_rejetpop_05056]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05056"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05056
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05056
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05056
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05057*/
/*------------------------------------------------------------------ */
async function GraphDATA05057() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[56];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05057.push(vote_macron); 
    vote_lepen_05057.push(vote_lepen);
    vote_rejet_05057.push(vote_rejet);
    vote_macronpop_05057.push(vote_macronMediane);
    vote_lepenpop_05057.push(vote_lepenMediane);
    vote_rejetpop_05057.push(vote_rejetMediane);
    name_Commune_05057.push(nameCommune);
    Pourcentage_05057.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05057.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05057.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05057.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05057.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05057 = [];
const vote_lepen_05057 = [];
const vote_rejet_05057 = [];
const vote_macronpop_05057 = [];
const vote_lepenpop_05057 = [];
const vote_rejetpop_05057 = [];
const name_Commune_05057 = [];
const Pourcentage_05057 = [];
const Pourcentage_rejet_05057 = [];
const vote_gene_macron_05057 = [];
const vote_gene_lepen_05057 = [];
const vote_gene_rejet_05057 = [];

async function chartIt05057(){
    await GraphDATA05057();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05057-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05057
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05057
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05057-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05057,vote_lepen_05057,vote_rejet_05057]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05057-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05057,vote_lepenpop_05057,vote_rejetpop_05057]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05057"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05057
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05057
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05057
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05058*/
/*------------------------------------------------------------------ */
async function GraphDATA05058() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[57];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05058.push(vote_macron); 
    vote_lepen_05058.push(vote_lepen);
    vote_rejet_05058.push(vote_rejet);
    vote_macronpop_05058.push(vote_macronMediane);
    vote_lepenpop_05058.push(vote_lepenMediane);
    vote_rejetpop_05058.push(vote_rejetMediane);
    name_Commune_05058.push(nameCommune);
    Pourcentage_05058.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05058.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05058.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05058.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05058.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05058 = [];
const vote_lepen_05058 = [];
const vote_rejet_05058 = [];
const vote_macronpop_05058 = [];
const vote_lepenpop_05058 = [];
const vote_rejetpop_05058 = [];
const name_Commune_05058 = [];
const Pourcentage_05058 = [];
const Pourcentage_rejet_05058 = [];
const vote_gene_macron_05058 = [];
const vote_gene_lepen_05058 = [];
const vote_gene_rejet_05058 = [];

async function chartIt05058(){
    await GraphDATA05058();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05058-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05058
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05058
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05058-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05058,vote_lepen_05058,vote_rejet_05058]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05058-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05058,vote_lepenpop_05058,vote_rejetpop_05058]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05058"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05058
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05058
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05058
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05059*/
/*------------------------------------------------------------------ */
async function GraphDATA05059() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[58];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05059.push(vote_macron); 
    vote_lepen_05059.push(vote_lepen);
    vote_rejet_05059.push(vote_rejet);
    vote_macronpop_05059.push(vote_macronMediane);
    vote_lepenpop_05059.push(vote_lepenMediane);
    vote_rejetpop_05059.push(vote_rejetMediane);
    name_Commune_05059.push(nameCommune);
    Pourcentage_05059.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05059.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05059.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05059.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05059.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05059 = [];
const vote_lepen_05059 = [];
const vote_rejet_05059 = [];
const vote_macronpop_05059 = [];
const vote_lepenpop_05059 = [];
const vote_rejetpop_05059 = [];
const name_Commune_05059 = [];
const Pourcentage_05059 = [];
const Pourcentage_rejet_05059 = [];
const vote_gene_macron_05059 = [];
const vote_gene_lepen_05059 = [];
const vote_gene_rejet_05059 = [];

async function chartIt05059(){
    await GraphDATA05059();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05059-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05059
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05059
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05059-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05059,vote_lepen_05059,vote_rejet_05059]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05059-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05059,vote_lepenpop_05059,vote_rejetpop_05059]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05059"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05059
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05059
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05059
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05060*/
/*------------------------------------------------------------------ */
async function GraphDATA05060() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[59];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05060.push(vote_macron); 
    vote_lepen_05060.push(vote_lepen);
    vote_rejet_05060.push(vote_rejet);
    vote_macronpop_05060.push(vote_macronMediane);
    vote_lepenpop_05060.push(vote_lepenMediane);
    vote_rejetpop_05060.push(vote_rejetMediane);
    name_Commune_05060.push(nameCommune);
    Pourcentage_05060.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05060.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05060.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05060.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05060.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05060 = [];
const vote_lepen_05060 = [];
const vote_rejet_05060 = [];
const vote_macronpop_05060 = [];
const vote_lepenpop_05060 = [];
const vote_rejetpop_05060 = [];
const name_Commune_05060 = [];
const Pourcentage_05060 = [];
const Pourcentage_rejet_05060 = [];
const vote_gene_macron_05060 = [];
const vote_gene_lepen_05060 = [];
const vote_gene_rejet_05060 = [];

async function chartIt05060(){
    await GraphDATA05060();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05060-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05060
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05060
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05060-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05060,vote_lepen_05060,vote_rejet_05060]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05060-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05060,vote_lepenpop_05060,vote_rejetpop_05060]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05060"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05060
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05060
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05060
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05061*/
/*------------------------------------------------------------------ */
async function GraphDATA05061() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[60];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05061.push(vote_macron); 
    vote_lepen_05061.push(vote_lepen);
    vote_rejet_05061.push(vote_rejet);
    vote_macronpop_05061.push(vote_macronMediane);
    vote_lepenpop_05061.push(vote_lepenMediane);
    vote_rejetpop_05061.push(vote_rejetMediane);
    name_Commune_05061.push(nameCommune);
    Pourcentage_05061.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05061.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05061.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05061.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05061.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05061 = [];
const vote_lepen_05061 = [];
const vote_rejet_05061 = [];
const vote_macronpop_05061 = [];
const vote_lepenpop_05061 = [];
const vote_rejetpop_05061 = [];
const name_Commune_05061 = [];
const Pourcentage_05061 = [];
const Pourcentage_rejet_05061 = [];
const vote_gene_macron_05061 = [];
const vote_gene_lepen_05061 = [];
const vote_gene_rejet_05061 = [];

async function chartIt05061(){
    await GraphDATA05061();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05061-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05061
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05061
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05061-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05061,vote_lepen_05061,vote_rejet_05061]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05061-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05061,vote_lepenpop_05061,vote_rejetpop_05061]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05061"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05061
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05061
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05061
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05062*/
/*------------------------------------------------------------------ */
async function GraphDATA05062() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[61];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05062.push(vote_macron); 
    vote_lepen_05062.push(vote_lepen);
    vote_rejet_05062.push(vote_rejet);
    vote_macronpop_05062.push(vote_macronMediane);
    vote_lepenpop_05062.push(vote_lepenMediane);
    vote_rejetpop_05062.push(vote_rejetMediane);
    name_Commune_05062.push(nameCommune);
    Pourcentage_05062.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05062.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05062.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05062.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05062.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05062 = [];
const vote_lepen_05062 = [];
const vote_rejet_05062 = [];
const vote_macronpop_05062 = [];
const vote_lepenpop_05062 = [];
const vote_rejetpop_05062 = [];
const name_Commune_05062 = [];
const Pourcentage_05062 = [];
const Pourcentage_rejet_05062 = [];
const vote_gene_macron_05062 = [];
const vote_gene_lepen_05062 = [];
const vote_gene_rejet_05062 = [];

async function chartIt05062(){
    await GraphDATA05062();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05062-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05062
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05062
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05062-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05062,vote_lepen_05062,vote_rejet_05062]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05062-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05062,vote_lepenpop_05062,vote_rejetpop_05062]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05062"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05062
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05062
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05062
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05063*/
/*------------------------------------------------------------------ */
async function GraphDATA05063() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[62];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05063.push(vote_macron); 
    vote_lepen_05063.push(vote_lepen);
    vote_rejet_05063.push(vote_rejet);
    vote_macronpop_05063.push(vote_macronMediane);
    vote_lepenpop_05063.push(vote_lepenMediane);
    vote_rejetpop_05063.push(vote_rejetMediane);
    name_Commune_05063.push(nameCommune);
    Pourcentage_05063.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05063.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05063.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05063.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05063.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05063 = [];
const vote_lepen_05063 = [];
const vote_rejet_05063 = [];
const vote_macronpop_05063 = [];
const vote_lepenpop_05063 = [];
const vote_rejetpop_05063 = [];
const name_Commune_05063 = [];
const Pourcentage_05063 = [];
const Pourcentage_rejet_05063 = [];
const vote_gene_macron_05063 = [];
const vote_gene_lepen_05063 = [];
const vote_gene_rejet_05063 = [];

async function chartIt05063(){
    await GraphDATA05063();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05063-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05063
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05063
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05063-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05063,vote_lepen_05063,vote_rejet_05063]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05063-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05063,vote_lepenpop_05063,vote_rejetpop_05063]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05063"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05063
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05063
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05063
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05064*/
/*------------------------------------------------------------------ */
async function GraphDATA05064() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[63];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05064.push(vote_macron); 
    vote_lepen_05064.push(vote_lepen);
    vote_rejet_05064.push(vote_rejet);
    vote_macronpop_05064.push(vote_macronMediane);
    vote_lepenpop_05064.push(vote_lepenMediane);
    vote_rejetpop_05064.push(vote_rejetMediane);
    name_Commune_05064.push(nameCommune);
    Pourcentage_05064.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05064.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05064.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05064.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05064.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05064 = [];
const vote_lepen_05064 = [];
const vote_rejet_05064 = [];
const vote_macronpop_05064 = [];
const vote_lepenpop_05064 = [];
const vote_rejetpop_05064 = [];
const name_Commune_05064 = [];
const Pourcentage_05064 = [];
const Pourcentage_rejet_05064 = [];
const vote_gene_macron_05064 = [];
const vote_gene_lepen_05064 = [];
const vote_gene_rejet_05064 = [];

async function chartIt05064(){
    await GraphDATA05064();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05064-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05064
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05064
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05064-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05064,vote_lepen_05064,vote_rejet_05064]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05064-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05064,vote_lepenpop_05064,vote_rejetpop_05064]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05064"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05064
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05064
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05064
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05065*/
/*------------------------------------------------------------------ */
async function GraphDATA05065() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[64];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05065.push(vote_macron); 
    vote_lepen_05065.push(vote_lepen);
    vote_rejet_05065.push(vote_rejet);
    vote_macronpop_05065.push(vote_macronMediane);
    vote_lepenpop_05065.push(vote_lepenMediane);
    vote_rejetpop_05065.push(vote_rejetMediane);
    name_Commune_05065.push(nameCommune);
    Pourcentage_05065.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05065.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05065.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05065.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05065.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05065 = [];
const vote_lepen_05065 = [];
const vote_rejet_05065 = [];
const vote_macronpop_05065 = [];
const vote_lepenpop_05065 = [];
const vote_rejetpop_05065 = [];
const name_Commune_05065 = [];
const Pourcentage_05065 = [];
const Pourcentage_rejet_05065 = [];
const vote_gene_macron_05065 = [];
const vote_gene_lepen_05065 = [];
const vote_gene_rejet_05065 = [];

async function chartIt05065(){
    await GraphDATA05065();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05065-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05065
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05065
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05065-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05065,vote_lepen_05065,vote_rejet_05065]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05065-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05065,vote_lepenpop_05065,vote_rejetpop_05065]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05065"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05065
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05065
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05065
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05066*/
/*------------------------------------------------------------------ */
async function GraphDATA05066() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[65];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05066.push(vote_macron); 
    vote_lepen_05066.push(vote_lepen);
    vote_rejet_05066.push(vote_rejet);
    vote_macronpop_05066.push(vote_macronMediane);
    vote_lepenpop_05066.push(vote_lepenMediane);
    vote_rejetpop_05066.push(vote_rejetMediane);
    name_Commune_05066.push(nameCommune);
    Pourcentage_05066.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05066.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05066.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05066.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05066.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05066 = [];
const vote_lepen_05066 = [];
const vote_rejet_05066 = [];
const vote_macronpop_05066 = [];
const vote_lepenpop_05066 = [];
const vote_rejetpop_05066 = [];
const name_Commune_05066 = [];
const Pourcentage_05066 = [];
const Pourcentage_rejet_05066 = [];
const vote_gene_macron_05066 = [];
const vote_gene_lepen_05066 = [];
const vote_gene_rejet_05066 = [];

async function chartIt05066(){
    await GraphDATA05066();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05066-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05066
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05066
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05066-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05066,vote_lepen_05066,vote_rejet_05066]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05066-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05066,vote_lepenpop_05066,vote_rejetpop_05066]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05066"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05066
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05066
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05066
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05067*/
/*------------------------------------------------------------------ */
async function GraphDATA05067() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[66];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05067.push(vote_macron); 
    vote_lepen_05067.push(vote_lepen);
    vote_rejet_05067.push(vote_rejet);
    vote_macronpop_05067.push(vote_macronMediane);
    vote_lepenpop_05067.push(vote_lepenMediane);
    vote_rejetpop_05067.push(vote_rejetMediane);
    name_Commune_05067.push(nameCommune);
    Pourcentage_05067.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05067.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05067.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05067.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05067.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05067 = [];
const vote_lepen_05067 = [];
const vote_rejet_05067 = [];
const vote_macronpop_05067 = [];
const vote_lepenpop_05067 = [];
const vote_rejetpop_05067 = [];
const name_Commune_05067 = [];
const Pourcentage_05067 = [];
const Pourcentage_rejet_05067 = [];
const vote_gene_macron_05067 = [];
const vote_gene_lepen_05067 = [];
const vote_gene_rejet_05067 = [];

async function chartIt05067(){
    await GraphDATA05067();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05067-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05067
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05067
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05067-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05067,vote_lepen_05067,vote_rejet_05067]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05067-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05067,vote_lepenpop_05067,vote_rejetpop_05067]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05067"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05067
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05067
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05067
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05068*/
/*------------------------------------------------------------------ */
async function GraphDATA05068() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[67];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05068.push(vote_macron); 
    vote_lepen_05068.push(vote_lepen);
    vote_rejet_05068.push(vote_rejet);
    vote_macronpop_05068.push(vote_macronMediane);
    vote_lepenpop_05068.push(vote_lepenMediane);
    vote_rejetpop_05068.push(vote_rejetMediane);
    name_Commune_05068.push(nameCommune);
    Pourcentage_05068.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05068.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05068.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05068.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05068.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05068 = [];
const vote_lepen_05068 = [];
const vote_rejet_05068 = [];
const vote_macronpop_05068 = [];
const vote_lepenpop_05068 = [];
const vote_rejetpop_05068 = [];
const name_Commune_05068 = [];
const Pourcentage_05068 = [];
const Pourcentage_rejet_05068 = [];
const vote_gene_macron_05068 = [];
const vote_gene_lepen_05068 = [];
const vote_gene_rejet_05068 = [];

async function chartIt05068(){
    await GraphDATA05068();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05068-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05068
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05068
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05068-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05068,vote_lepen_05068,vote_rejet_05068]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05068-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05068,vote_lepenpop_05068,vote_rejetpop_05068]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05068"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05068
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05068
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05068
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05069*/
/*------------------------------------------------------------------ */
async function GraphDATA05069() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[68];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05069.push(vote_macron); 
    vote_lepen_05069.push(vote_lepen);
    vote_rejet_05069.push(vote_rejet);
    vote_macronpop_05069.push(vote_macronMediane);
    vote_lepenpop_05069.push(vote_lepenMediane);
    vote_rejetpop_05069.push(vote_rejetMediane);
    name_Commune_05069.push(nameCommune);
    Pourcentage_05069.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05069.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05069.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05069.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05069.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05069 = [];
const vote_lepen_05069 = [];
const vote_rejet_05069 = [];
const vote_macronpop_05069 = [];
const vote_lepenpop_05069 = [];
const vote_rejetpop_05069 = [];
const name_Commune_05069 = [];
const Pourcentage_05069 = [];
const Pourcentage_rejet_05069 = [];
const vote_gene_macron_05069 = [];
const vote_gene_lepen_05069 = [];
const vote_gene_rejet_05069 = [];

async function chartIt05069(){
    await GraphDATA05069();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05069-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05069
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05069
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05069-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05069,vote_lepen_05069,vote_rejet_05069]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05069-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05069,vote_lepenpop_05069,vote_rejetpop_05069]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05069"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05069
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05069
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05069
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05070*/
/*------------------------------------------------------------------ */
async function GraphDATA05070() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[69];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05070.push(vote_macron); 
    vote_lepen_05070.push(vote_lepen);
    vote_rejet_05070.push(vote_rejet);
    vote_macronpop_05070.push(vote_macronMediane);
    vote_lepenpop_05070.push(vote_lepenMediane);
    vote_rejetpop_05070.push(vote_rejetMediane);
    name_Commune_05070.push(nameCommune);
    Pourcentage_05070.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05070.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05070.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05070.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05070.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05070 = [];
const vote_lepen_05070 = [];
const vote_rejet_05070 = [];
const vote_macronpop_05070 = [];
const vote_lepenpop_05070 = [];
const vote_rejetpop_05070 = [];
const name_Commune_05070 = [];
const Pourcentage_05070 = [];
const Pourcentage_rejet_05070 = [];
const vote_gene_macron_05070 = [];
const vote_gene_lepen_05070 = [];
const vote_gene_rejet_05070 = [];

async function chartIt05070(){
    await GraphDATA05070();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05070-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05070
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05070
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05070-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05070,vote_lepen_05070,vote_rejet_05070]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05070-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05070,vote_lepenpop_05070,vote_rejetpop_05070]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05070"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05070
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05070
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05070
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05071*/
/*------------------------------------------------------------------ */
async function GraphDATA05071() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[70];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05071.push(vote_macron); 
    vote_lepen_05071.push(vote_lepen);
    vote_rejet_05071.push(vote_rejet);
    vote_macronpop_05071.push(vote_macronMediane);
    vote_lepenpop_05071.push(vote_lepenMediane);
    vote_rejetpop_05071.push(vote_rejetMediane);
    name_Commune_05071.push(nameCommune);
    Pourcentage_05071.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05071.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05071.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05071.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05071.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05071 = [];
const vote_lepen_05071 = [];
const vote_rejet_05071 = [];
const vote_macronpop_05071 = [];
const vote_lepenpop_05071 = [];
const vote_rejetpop_05071 = [];
const name_Commune_05071 = [];
const Pourcentage_05071 = [];
const Pourcentage_rejet_05071 = [];
const vote_gene_macron_05071 = [];
const vote_gene_lepen_05071 = [];
const vote_gene_rejet_05071 = [];

async function chartIt05071(){
    await GraphDATA05071();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05071-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05071
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05071
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05071-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05071,vote_lepen_05071,vote_rejet_05071]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05071-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05071,vote_lepenpop_05071,vote_rejetpop_05071]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05071"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05071
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05071
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05071
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05072*/
/*------------------------------------------------------------------ */
async function GraphDATA05072() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[71];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05072.push(vote_macron); 
    vote_lepen_05072.push(vote_lepen);
    vote_rejet_05072.push(vote_rejet);
    vote_macronpop_05072.push(vote_macronMediane);
    vote_lepenpop_05072.push(vote_lepenMediane);
    vote_rejetpop_05072.push(vote_rejetMediane);
    name_Commune_05072.push(nameCommune);
    Pourcentage_05072.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05072.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05072.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05072.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05072.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05072 = [];
const vote_lepen_05072 = [];
const vote_rejet_05072 = [];
const vote_macronpop_05072 = [];
const vote_lepenpop_05072 = [];
const vote_rejetpop_05072 = [];
const name_Commune_05072 = [];
const Pourcentage_05072 = [];
const Pourcentage_rejet_05072 = [];
const vote_gene_macron_05072 = [];
const vote_gene_lepen_05072 = [];
const vote_gene_rejet_05072 = [];

async function chartIt05072(){
    await GraphDATA05072();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05072-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05072
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05072
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05072-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05072,vote_lepen_05072,vote_rejet_05072]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05072-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05072,vote_lepenpop_05072,vote_rejetpop_05072]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05072"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05072
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05072
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05072
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05073*/
/*------------------------------------------------------------------ */
async function GraphDATA05073() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[72];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05073.push(vote_macron); 
    vote_lepen_05073.push(vote_lepen);
    vote_rejet_05073.push(vote_rejet);
    vote_macronpop_05073.push(vote_macronMediane);
    vote_lepenpop_05073.push(vote_lepenMediane);
    vote_rejetpop_05073.push(vote_rejetMediane);
    name_Commune_05073.push(nameCommune);
    Pourcentage_05073.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05073.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05073.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05073.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05073.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05073 = [];
const vote_lepen_05073 = [];
const vote_rejet_05073 = [];
const vote_macronpop_05073 = [];
const vote_lepenpop_05073 = [];
const vote_rejetpop_05073 = [];
const name_Commune_05073 = [];
const Pourcentage_05073 = [];
const Pourcentage_rejet_05073 = [];
const vote_gene_macron_05073 = [];
const vote_gene_lepen_05073 = [];
const vote_gene_rejet_05073 = [];

async function chartIt05073(){
    await GraphDATA05073();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05073-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05073
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05073
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05073-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05073,vote_lepen_05073,vote_rejet_05073]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05073-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05073,vote_lepenpop_05073,vote_rejetpop_05073]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05073"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05073
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05073
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05073
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05074*/
/*------------------------------------------------------------------ */
async function GraphDATA05074() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[73];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05074.push(vote_macron); 
    vote_lepen_05074.push(vote_lepen);
    vote_rejet_05074.push(vote_rejet);
    vote_macronpop_05074.push(vote_macronMediane);
    vote_lepenpop_05074.push(vote_lepenMediane);
    vote_rejetpop_05074.push(vote_rejetMediane);
    name_Commune_05074.push(nameCommune);
    Pourcentage_05074.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05074.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05074.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05074.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05074.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05074 = [];
const vote_lepen_05074 = [];
const vote_rejet_05074 = [];
const vote_macronpop_05074 = [];
const vote_lepenpop_05074 = [];
const vote_rejetpop_05074 = [];
const name_Commune_05074 = [];
const Pourcentage_05074 = [];
const Pourcentage_rejet_05074 = [];
const vote_gene_macron_05074 = [];
const vote_gene_lepen_05074 = [];
const vote_gene_rejet_05074 = [];

async function chartIt05074(){
    await GraphDATA05074();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05074-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05074
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05074
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05074-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05074,vote_lepen_05074,vote_rejet_05074]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05074-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05074,vote_lepenpop_05074,vote_rejetpop_05074]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05074"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05074
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05074
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05074
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05075*/
/*------------------------------------------------------------------ */
async function GraphDATA05075() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[74];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05075.push(vote_macron); 
    vote_lepen_05075.push(vote_lepen);
    vote_rejet_05075.push(vote_rejet);
    vote_macronpop_05075.push(vote_macronMediane);
    vote_lepenpop_05075.push(vote_lepenMediane);
    vote_rejetpop_05075.push(vote_rejetMediane);
    name_Commune_05075.push(nameCommune);
    Pourcentage_05075.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05075.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05075.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05075.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05075.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05075 = [];
const vote_lepen_05075 = [];
const vote_rejet_05075 = [];
const vote_macronpop_05075 = [];
const vote_lepenpop_05075 = [];
const vote_rejetpop_05075 = [];
const name_Commune_05075 = [];
const Pourcentage_05075 = [];
const Pourcentage_rejet_05075 = [];
const vote_gene_macron_05075 = [];
const vote_gene_lepen_05075 = [];
const vote_gene_rejet_05075 = [];

async function chartIt05075(){
    await GraphDATA05075();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05075-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05075
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05075
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05075-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05075,vote_lepen_05075,vote_rejet_05075]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05075-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05075,vote_lepenpop_05075,vote_rejetpop_05075]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05075"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05075
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05075
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05075
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05076*/
/*------------------------------------------------------------------ */
async function GraphDATA05076() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[75];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05076.push(vote_macron); 
    vote_lepen_05076.push(vote_lepen);
    vote_rejet_05076.push(vote_rejet);
    vote_macronpop_05076.push(vote_macronMediane);
    vote_lepenpop_05076.push(vote_lepenMediane);
    vote_rejetpop_05076.push(vote_rejetMediane);
    name_Commune_05076.push(nameCommune);
    Pourcentage_05076.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05076.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05076.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05076.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05076.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05076 = [];
const vote_lepen_05076 = [];
const vote_rejet_05076 = [];
const vote_macronpop_05076 = [];
const vote_lepenpop_05076 = [];
const vote_rejetpop_05076 = [];
const name_Commune_05076 = [];
const Pourcentage_05076 = [];
const Pourcentage_rejet_05076 = [];
const vote_gene_macron_05076 = [];
const vote_gene_lepen_05076 = [];
const vote_gene_rejet_05076 = [];

async function chartIt05076(){
    await GraphDATA05076();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05076-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05076
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05076
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05076-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05076,vote_lepen_05076,vote_rejet_05076]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05076-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05076,vote_lepenpop_05076,vote_rejetpop_05076]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05076"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05076
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05076
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05076
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05077*/
/*------------------------------------------------------------------ */
async function GraphDATA05077() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[76];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05077.push(vote_macron); 
    vote_lepen_05077.push(vote_lepen);
    vote_rejet_05077.push(vote_rejet);
    vote_macronpop_05077.push(vote_macronMediane);
    vote_lepenpop_05077.push(vote_lepenMediane);
    vote_rejetpop_05077.push(vote_rejetMediane);
    name_Commune_05077.push(nameCommune);
    Pourcentage_05077.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05077.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05077.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05077.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05077.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05077 = [];
const vote_lepen_05077 = [];
const vote_rejet_05077 = [];
const vote_macronpop_05077 = [];
const vote_lepenpop_05077 = [];
const vote_rejetpop_05077 = [];
const name_Commune_05077 = [];
const Pourcentage_05077 = [];
const Pourcentage_rejet_05077 = [];
const vote_gene_macron_05077 = [];
const vote_gene_lepen_05077 = [];
const vote_gene_rejet_05077 = [];

async function chartIt05077(){
    await GraphDATA05077();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05077-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05077
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05077
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05077-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05077,vote_lepen_05077,vote_rejet_05077]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05077-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05077,vote_lepenpop_05077,vote_rejetpop_05077]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05077"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05077
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05077
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05077
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05078*/
/*------------------------------------------------------------------ */
async function GraphDATA05078() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[77];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05078.push(vote_macron); 
    vote_lepen_05078.push(vote_lepen);
    vote_rejet_05078.push(vote_rejet);
    vote_macronpop_05078.push(vote_macronMediane);
    vote_lepenpop_05078.push(vote_lepenMediane);
    vote_rejetpop_05078.push(vote_rejetMediane);
    name_Commune_05078.push(nameCommune);
    Pourcentage_05078.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05078.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05078.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05078.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05078.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05078 = [];
const vote_lepen_05078 = [];
const vote_rejet_05078 = [];
const vote_macronpop_05078 = [];
const vote_lepenpop_05078 = [];
const vote_rejetpop_05078 = [];
const name_Commune_05078 = [];
const Pourcentage_05078 = [];
const Pourcentage_rejet_05078 = [];
const vote_gene_macron_05078 = [];
const vote_gene_lepen_05078 = [];
const vote_gene_rejet_05078 = [];

async function chartIt05078(){
    await GraphDATA05078();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05078-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05078
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05078
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05078-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05078,vote_lepen_05078,vote_rejet_05078]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05078-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05078,vote_lepenpop_05078,vote_rejetpop_05078]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05078"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05078
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05078
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05078
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05079*/
/*------------------------------------------------------------------ */
async function GraphDATA05079() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[78];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05079.push(vote_macron); 
    vote_lepen_05079.push(vote_lepen);
    vote_rejet_05079.push(vote_rejet);
    vote_macronpop_05079.push(vote_macronMediane);
    vote_lepenpop_05079.push(vote_lepenMediane);
    vote_rejetpop_05079.push(vote_rejetMediane);
    name_Commune_05079.push(nameCommune);
    Pourcentage_05079.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05079.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05079.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05079.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05079.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05079 = [];
const vote_lepen_05079 = [];
const vote_rejet_05079 = [];
const vote_macronpop_05079 = [];
const vote_lepenpop_05079 = [];
const vote_rejetpop_05079 = [];
const name_Commune_05079 = [];
const Pourcentage_05079 = [];
const Pourcentage_rejet_05079 = [];
const vote_gene_macron_05079 = [];
const vote_gene_lepen_05079 = [];
const vote_gene_rejet_05079 = [];

async function chartIt05079(){
    await GraphDATA05079();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05079-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05079
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05079
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05079-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05079,vote_lepen_05079,vote_rejet_05079]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05079-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05079,vote_lepenpop_05079,vote_rejetpop_05079]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05079"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05079
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05079
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05079
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05080*/
/*------------------------------------------------------------------ */
async function GraphDATA05080() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[79];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05080.push(vote_macron); 
    vote_lepen_05080.push(vote_lepen);
    vote_rejet_05080.push(vote_rejet);
    vote_macronpop_05080.push(vote_macronMediane);
    vote_lepenpop_05080.push(vote_lepenMediane);
    vote_rejetpop_05080.push(vote_rejetMediane);
    name_Commune_05080.push(nameCommune);
    Pourcentage_05080.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05080.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05080.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05080.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05080.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05080 = [];
const vote_lepen_05080 = [];
const vote_rejet_05080 = [];
const vote_macronpop_05080 = [];
const vote_lepenpop_05080 = [];
const vote_rejetpop_05080 = [];
const name_Commune_05080 = [];
const Pourcentage_05080 = [];
const Pourcentage_rejet_05080 = [];
const vote_gene_macron_05080 = [];
const vote_gene_lepen_05080 = [];
const vote_gene_rejet_05080 = [];

async function chartIt05080(){
    await GraphDATA05080();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05080-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05080
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05080
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05080-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05080,vote_lepen_05080,vote_rejet_05080]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05080-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05080,vote_lepenpop_05080,vote_rejetpop_05080]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05080"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05080
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05080
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05080
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05081*/
/*------------------------------------------------------------------ */
async function GraphDATA05081() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[80];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05081.push(vote_macron); 
    vote_lepen_05081.push(vote_lepen);
    vote_rejet_05081.push(vote_rejet);
    vote_macronpop_05081.push(vote_macronMediane);
    vote_lepenpop_05081.push(vote_lepenMediane);
    vote_rejetpop_05081.push(vote_rejetMediane);
    name_Commune_05081.push(nameCommune);
    Pourcentage_05081.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05081.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05081.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05081.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05081.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05081 = [];
const vote_lepen_05081 = [];
const vote_rejet_05081 = [];
const vote_macronpop_05081 = [];
const vote_lepenpop_05081 = [];
const vote_rejetpop_05081 = [];
const name_Commune_05081 = [];
const Pourcentage_05081 = [];
const Pourcentage_rejet_05081 = [];
const vote_gene_macron_05081 = [];
const vote_gene_lepen_05081 = [];
const vote_gene_rejet_05081 = [];

async function chartIt05081(){
    await GraphDATA05081();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05081-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05081
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05081
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05081-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05081,vote_lepen_05081,vote_rejet_05081]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05081-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05081,vote_lepenpop_05081,vote_rejetpop_05081]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05081"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05081
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05081
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05081
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05082*/
/*------------------------------------------------------------------ */
async function GraphDATA05082() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[81];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05082.push(vote_macron); 
    vote_lepen_05082.push(vote_lepen);
    vote_rejet_05082.push(vote_rejet);
    vote_macronpop_05082.push(vote_macronMediane);
    vote_lepenpop_05082.push(vote_lepenMediane);
    vote_rejetpop_05082.push(vote_rejetMediane);
    name_Commune_05082.push(nameCommune);
    Pourcentage_05082.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05082.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05082.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05082.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05082.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05082 = [];
const vote_lepen_05082 = [];
const vote_rejet_05082 = [];
const vote_macronpop_05082 = [];
const vote_lepenpop_05082 = [];
const vote_rejetpop_05082 = [];
const name_Commune_05082 = [];
const Pourcentage_05082 = [];
const Pourcentage_rejet_05082 = [];
const vote_gene_macron_05082 = [];
const vote_gene_lepen_05082 = [];
const vote_gene_rejet_05082 = [];

async function chartIt05082(){
    await GraphDATA05082();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05082-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05082
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05082
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05082-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05082,vote_lepen_05082,vote_rejet_05082]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05082-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05082,vote_lepenpop_05082,vote_rejetpop_05082]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05082"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05082
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05082
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05082
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05083*/
/*------------------------------------------------------------------ */
async function GraphDATA05083() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[82];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05083.push(vote_macron); 
    vote_lepen_05083.push(vote_lepen);
    vote_rejet_05083.push(vote_rejet);
    vote_macronpop_05083.push(vote_macronMediane);
    vote_lepenpop_05083.push(vote_lepenMediane);
    vote_rejetpop_05083.push(vote_rejetMediane);
    name_Commune_05083.push(nameCommune);
    Pourcentage_05083.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05083.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05083.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05083.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05083.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05083 = [];
const vote_lepen_05083 = [];
const vote_rejet_05083 = [];
const vote_macronpop_05083 = [];
const vote_lepenpop_05083 = [];
const vote_rejetpop_05083 = [];
const name_Commune_05083 = [];
const Pourcentage_05083 = [];
const Pourcentage_rejet_05083 = [];
const vote_gene_macron_05083 = [];
const vote_gene_lepen_05083 = [];
const vote_gene_rejet_05083 = [];

async function chartIt05083(){
    await GraphDATA05083();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05083-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05083
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05083
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05083-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05083,vote_lepen_05083,vote_rejet_05083]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05083-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05083,vote_lepenpop_05083,vote_rejetpop_05083]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05083"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05083
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05083
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05083
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05084*/
/*------------------------------------------------------------------ */
async function GraphDATA05084() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[83];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05084.push(vote_macron); 
    vote_lepen_05084.push(vote_lepen);
    vote_rejet_05084.push(vote_rejet);
    vote_macronpop_05084.push(vote_macronMediane);
    vote_lepenpop_05084.push(vote_lepenMediane);
    vote_rejetpop_05084.push(vote_rejetMediane);
    name_Commune_05084.push(nameCommune);
    Pourcentage_05084.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05084.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05084.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05084.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05084.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05084 = [];
const vote_lepen_05084 = [];
const vote_rejet_05084 = [];
const vote_macronpop_05084 = [];
const vote_lepenpop_05084 = [];
const vote_rejetpop_05084 = [];
const name_Commune_05084 = [];
const Pourcentage_05084 = [];
const Pourcentage_rejet_05084 = [];
const vote_gene_macron_05084 = [];
const vote_gene_lepen_05084 = [];
const vote_gene_rejet_05084 = [];

async function chartIt05084(){
    await GraphDATA05084();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05084-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05084
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05084
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05084-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05084,vote_lepen_05084,vote_rejet_05084]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05084-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05084,vote_lepenpop_05084,vote_rejetpop_05084]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05084"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05084
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05084
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05084
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05085*/
/*------------------------------------------------------------------ */
async function GraphDATA05085() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[84];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05085.push(vote_macron); 
    vote_lepen_05085.push(vote_lepen);
    vote_rejet_05085.push(vote_rejet);
    vote_macronpop_05085.push(vote_macronMediane);
    vote_lepenpop_05085.push(vote_lepenMediane);
    vote_rejetpop_05085.push(vote_rejetMediane);
    name_Commune_05085.push(nameCommune);
    Pourcentage_05085.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05085.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05085.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05085.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05085.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05085 = [];
const vote_lepen_05085 = [];
const vote_rejet_05085 = [];
const vote_macronpop_05085 = [];
const vote_lepenpop_05085 = [];
const vote_rejetpop_05085 = [];
const name_Commune_05085 = [];
const Pourcentage_05085 = [];
const Pourcentage_rejet_05085 = [];
const vote_gene_macron_05085 = [];
const vote_gene_lepen_05085 = [];
const vote_gene_rejet_05085 = [];

async function chartIt05085(){
    await GraphDATA05085();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05085-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05085
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05085
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05085-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05085,vote_lepen_05085,vote_rejet_05085]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05085-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05085,vote_lepenpop_05085,vote_rejetpop_05085]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05085"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05085
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05085
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05085
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05086*/
/*------------------------------------------------------------------ */
async function GraphDATA05086() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[85];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05086.push(vote_macron); 
    vote_lepen_05086.push(vote_lepen);
    vote_rejet_05086.push(vote_rejet);
    vote_macronpop_05086.push(vote_macronMediane);
    vote_lepenpop_05086.push(vote_lepenMediane);
    vote_rejetpop_05086.push(vote_rejetMediane);
    name_Commune_05086.push(nameCommune);
    Pourcentage_05086.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05086.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05086.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05086.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05086.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05086 = [];
const vote_lepen_05086 = [];
const vote_rejet_05086 = [];
const vote_macronpop_05086 = [];
const vote_lepenpop_05086 = [];
const vote_rejetpop_05086 = [];
const name_Commune_05086 = [];
const Pourcentage_05086 = [];
const Pourcentage_rejet_05086 = [];
const vote_gene_macron_05086 = [];
const vote_gene_lepen_05086 = [];
const vote_gene_rejet_05086 = [];

async function chartIt05086(){
    await GraphDATA05086();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05086-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05086
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05086
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05086-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05086,vote_lepen_05086,vote_rejet_05086]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05086-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05086,vote_lepenpop_05086,vote_rejetpop_05086]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05086"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05086
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05086
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05086
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05087*/
/*------------------------------------------------------------------ */
async function GraphDATA05087() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[86];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05087.push(vote_macron); 
    vote_lepen_05087.push(vote_lepen);
    vote_rejet_05087.push(vote_rejet);
    vote_macronpop_05087.push(vote_macronMediane);
    vote_lepenpop_05087.push(vote_lepenMediane);
    vote_rejetpop_05087.push(vote_rejetMediane);
    name_Commune_05087.push(nameCommune);
    Pourcentage_05087.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05087.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05087.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05087.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05087.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05087 = [];
const vote_lepen_05087 = [];
const vote_rejet_05087 = [];
const vote_macronpop_05087 = [];
const vote_lepenpop_05087 = [];
const vote_rejetpop_05087 = [];
const name_Commune_05087 = [];
const Pourcentage_05087 = [];
const Pourcentage_rejet_05087 = [];
const vote_gene_macron_05087 = [];
const vote_gene_lepen_05087 = [];
const vote_gene_rejet_05087 = [];

async function chartIt05087(){
    await GraphDATA05087();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05087-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05087
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05087
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05087-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05087,vote_lepen_05087,vote_rejet_05087]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05087-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05087,vote_lepenpop_05087,vote_rejetpop_05087]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05087"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05087
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05087
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05087
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05088*/
/*------------------------------------------------------------------ */
async function GraphDATA05088() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[87];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05088.push(vote_macron); 
    vote_lepen_05088.push(vote_lepen);
    vote_rejet_05088.push(vote_rejet);
    vote_macronpop_05088.push(vote_macronMediane);
    vote_lepenpop_05088.push(vote_lepenMediane);
    vote_rejetpop_05088.push(vote_rejetMediane);
    name_Commune_05088.push(nameCommune);
    Pourcentage_05088.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05088.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05088.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05088.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05088.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05088 = [];
const vote_lepen_05088 = [];
const vote_rejet_05088 = [];
const vote_macronpop_05088 = [];
const vote_lepenpop_05088 = [];
const vote_rejetpop_05088 = [];
const name_Commune_05088 = [];
const Pourcentage_05088 = [];
const Pourcentage_rejet_05088 = [];
const vote_gene_macron_05088 = [];
const vote_gene_lepen_05088 = [];
const vote_gene_rejet_05088 = [];

async function chartIt05088(){
    await GraphDATA05088();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05088-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05088
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05088
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05088-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05088,vote_lepen_05088,vote_rejet_05088]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05088-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05088,vote_lepenpop_05088,vote_rejetpop_05088]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05088"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05088
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05088
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05088
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05089*/
/*------------------------------------------------------------------ */
async function GraphDATA05089() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[88];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05089.push(vote_macron); 
    vote_lepen_05089.push(vote_lepen);
    vote_rejet_05089.push(vote_rejet);
    vote_macronpop_05089.push(vote_macronMediane);
    vote_lepenpop_05089.push(vote_lepenMediane);
    vote_rejetpop_05089.push(vote_rejetMediane);
    name_Commune_05089.push(nameCommune);
    Pourcentage_05089.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05089.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05089.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05089.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05089.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05089 = [];
const vote_lepen_05089 = [];
const vote_rejet_05089 = [];
const vote_macronpop_05089 = [];
const vote_lepenpop_05089 = [];
const vote_rejetpop_05089 = [];
const name_Commune_05089 = [];
const Pourcentage_05089 = [];
const Pourcentage_rejet_05089 = [];
const vote_gene_macron_05089 = [];
const vote_gene_lepen_05089 = [];
const vote_gene_rejet_05089 = [];

async function chartIt05089(){
    await GraphDATA05089();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05089-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05089
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05089
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05089-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05089,vote_lepen_05089,vote_rejet_05089]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05089-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05089,vote_lepenpop_05089,vote_rejetpop_05089]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05089"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05089
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05089
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05089
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05090*/
/*------------------------------------------------------------------ */
async function GraphDATA05090() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[89];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05090.push(vote_macron); 
    vote_lepen_05090.push(vote_lepen);
    vote_rejet_05090.push(vote_rejet);
    vote_macronpop_05090.push(vote_macronMediane);
    vote_lepenpop_05090.push(vote_lepenMediane);
    vote_rejetpop_05090.push(vote_rejetMediane);
    name_Commune_05090.push(nameCommune);
    Pourcentage_05090.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05090.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05090.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05090.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05090.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05090 = [];
const vote_lepen_05090 = [];
const vote_rejet_05090 = [];
const vote_macronpop_05090 = [];
const vote_lepenpop_05090 = [];
const vote_rejetpop_05090 = [];
const name_Commune_05090 = [];
const Pourcentage_05090 = [];
const Pourcentage_rejet_05090 = [];
const vote_gene_macron_05090 = [];
const vote_gene_lepen_05090 = [];
const vote_gene_rejet_05090 = [];

async function chartIt05090(){
    await GraphDATA05090();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05090-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05090
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05090
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05090-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05090,vote_lepen_05090,vote_rejet_05090]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05090-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05090,vote_lepenpop_05090,vote_rejetpop_05090]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05090"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05090
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05090
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05090
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05091*/
/*------------------------------------------------------------------ */
async function GraphDATA05091() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[90];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05091.push(vote_macron); 
    vote_lepen_05091.push(vote_lepen);
    vote_rejet_05091.push(vote_rejet);
    vote_macronpop_05091.push(vote_macronMediane);
    vote_lepenpop_05091.push(vote_lepenMediane);
    vote_rejetpop_05091.push(vote_rejetMediane);
    name_Commune_05091.push(nameCommune);
    Pourcentage_05091.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05091.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05091.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05091.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05091.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05091 = [];
const vote_lepen_05091 = [];
const vote_rejet_05091 = [];
const vote_macronpop_05091 = [];
const vote_lepenpop_05091 = [];
const vote_rejetpop_05091 = [];
const name_Commune_05091 = [];
const Pourcentage_05091 = [];
const Pourcentage_rejet_05091 = [];
const vote_gene_macron_05091 = [];
const vote_gene_lepen_05091 = [];
const vote_gene_rejet_05091 = [];

async function chartIt05091(){
    await GraphDATA05091();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05091-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05091
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05091
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05091-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05091,vote_lepen_05091,vote_rejet_05091]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05091-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05091,vote_lepenpop_05091,vote_rejetpop_05091]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05091"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05091
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05091
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05091
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05092*/
/*------------------------------------------------------------------ */
async function GraphDATA05092() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[91];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05092.push(vote_macron); 
    vote_lepen_05092.push(vote_lepen);
    vote_rejet_05092.push(vote_rejet);
    vote_macronpop_05092.push(vote_macronMediane);
    vote_lepenpop_05092.push(vote_lepenMediane);
    vote_rejetpop_05092.push(vote_rejetMediane);
    name_Commune_05092.push(nameCommune);
    Pourcentage_05092.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05092.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05092.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05092.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05092.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05092 = [];
const vote_lepen_05092 = [];
const vote_rejet_05092 = [];
const vote_macronpop_05092 = [];
const vote_lepenpop_05092 = [];
const vote_rejetpop_05092 = [];
const name_Commune_05092 = [];
const Pourcentage_05092 = [];
const Pourcentage_rejet_05092 = [];
const vote_gene_macron_05092 = [];
const vote_gene_lepen_05092 = [];
const vote_gene_rejet_05092 = [];

async function chartIt05092(){
    await GraphDATA05092();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05092-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05092
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05092
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05092-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05092,vote_lepen_05092,vote_rejet_05092]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05092-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05092,vote_lepenpop_05092,vote_rejetpop_05092]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05092"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05092
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05092
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05092
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05093*/
/*------------------------------------------------------------------ */
async function GraphDATA05093() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[92];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05093.push(vote_macron); 
    vote_lepen_05093.push(vote_lepen);
    vote_rejet_05093.push(vote_rejet);
    vote_macronpop_05093.push(vote_macronMediane);
    vote_lepenpop_05093.push(vote_lepenMediane);
    vote_rejetpop_05093.push(vote_rejetMediane);
    name_Commune_05093.push(nameCommune);
    Pourcentage_05093.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05093.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05093.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05093.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05093.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05093 = [];
const vote_lepen_05093 = [];
const vote_rejet_05093 = [];
const vote_macronpop_05093 = [];
const vote_lepenpop_05093 = [];
const vote_rejetpop_05093 = [];
const name_Commune_05093 = [];
const Pourcentage_05093 = [];
const Pourcentage_rejet_05093 = [];
const vote_gene_macron_05093 = [];
const vote_gene_lepen_05093 = [];
const vote_gene_rejet_05093 = [];

async function chartIt05093(){
    await GraphDATA05093();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05093-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05093
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05093
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05093-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05093,vote_lepen_05093,vote_rejet_05093]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05093-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05093,vote_lepenpop_05093,vote_rejetpop_05093]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05093"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05093
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05093
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05093
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05094*/
/*------------------------------------------------------------------ */
async function GraphDATA05094() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[93];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05094.push(vote_macron); 
    vote_lepen_05094.push(vote_lepen);
    vote_rejet_05094.push(vote_rejet);
    vote_macronpop_05094.push(vote_macronMediane);
    vote_lepenpop_05094.push(vote_lepenMediane);
    vote_rejetpop_05094.push(vote_rejetMediane);
    name_Commune_05094.push(nameCommune);
    Pourcentage_05094.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05094.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05094.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05094.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05094.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05094 = [];
const vote_lepen_05094 = [];
const vote_rejet_05094 = [];
const vote_macronpop_05094 = [];
const vote_lepenpop_05094 = [];
const vote_rejetpop_05094 = [];
const name_Commune_05094 = [];
const Pourcentage_05094 = [];
const Pourcentage_rejet_05094 = [];
const vote_gene_macron_05094 = [];
const vote_gene_lepen_05094 = [];
const vote_gene_rejet_05094 = [];

async function chartIt05094(){
    await GraphDATA05094();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05094-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05094
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05094
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05094-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05094,vote_lepen_05094,vote_rejet_05094]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05094-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05094,vote_lepenpop_05094,vote_rejetpop_05094]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05094"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05094
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05094
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05094
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05095*/
/*------------------------------------------------------------------ */
async function GraphDATA05095() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[94];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05095.push(vote_macron); 
    vote_lepen_05095.push(vote_lepen);
    vote_rejet_05095.push(vote_rejet);
    vote_macronpop_05095.push(vote_macronMediane);
    vote_lepenpop_05095.push(vote_lepenMediane);
    vote_rejetpop_05095.push(vote_rejetMediane);
    name_Commune_05095.push(nameCommune);
    Pourcentage_05095.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05095.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05095.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05095.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05095.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05095 = [];
const vote_lepen_05095 = [];
const vote_rejet_05095 = [];
const vote_macronpop_05095 = [];
const vote_lepenpop_05095 = [];
const vote_rejetpop_05095 = [];
const name_Commune_05095 = [];
const Pourcentage_05095 = [];
const Pourcentage_rejet_05095 = [];
const vote_gene_macron_05095 = [];
const vote_gene_lepen_05095 = [];
const vote_gene_rejet_05095 = [];

async function chartIt05095(){
    await GraphDATA05095();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05095-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05095
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05095
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05095-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05095,vote_lepen_05095,vote_rejet_05095]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05095-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05095,vote_lepenpop_05095,vote_rejetpop_05095]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05095"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05095
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05095
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05095
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05096*/
/*------------------------------------------------------------------ */
async function GraphDATA05096() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[95];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05096.push(vote_macron); 
    vote_lepen_05096.push(vote_lepen);
    vote_rejet_05096.push(vote_rejet);
    vote_macronpop_05096.push(vote_macronMediane);
    vote_lepenpop_05096.push(vote_lepenMediane);
    vote_rejetpop_05096.push(vote_rejetMediane);
    name_Commune_05096.push(nameCommune);
    Pourcentage_05096.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05096.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05096.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05096.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05096.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05096 = [];
const vote_lepen_05096 = [];
const vote_rejet_05096 = [];
const vote_macronpop_05096 = [];
const vote_lepenpop_05096 = [];
const vote_rejetpop_05096 = [];
const name_Commune_05096 = [];
const Pourcentage_05096 = [];
const Pourcentage_rejet_05096 = [];
const vote_gene_macron_05096 = [];
const vote_gene_lepen_05096 = [];
const vote_gene_rejet_05096 = [];

async function chartIt05096(){
    await GraphDATA05096();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05096-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05096
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05096
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05096-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05096,vote_lepen_05096,vote_rejet_05096]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05096-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05096,vote_lepenpop_05096,vote_rejetpop_05096]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05096"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05096
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05096
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05096
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05097*/
/*------------------------------------------------------------------ */
async function GraphDATA05097() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[96];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05097.push(vote_macron); 
    vote_lepen_05097.push(vote_lepen);
    vote_rejet_05097.push(vote_rejet);
    vote_macronpop_05097.push(vote_macronMediane);
    vote_lepenpop_05097.push(vote_lepenMediane);
    vote_rejetpop_05097.push(vote_rejetMediane);
    name_Commune_05097.push(nameCommune);
    Pourcentage_05097.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05097.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05097.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05097.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05097.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05097 = [];
const vote_lepen_05097 = [];
const vote_rejet_05097 = [];
const vote_macronpop_05097 = [];
const vote_lepenpop_05097 = [];
const vote_rejetpop_05097 = [];
const name_Commune_05097 = [];
const Pourcentage_05097 = [];
const Pourcentage_rejet_05097 = [];
const vote_gene_macron_05097 = [];
const vote_gene_lepen_05097 = [];
const vote_gene_rejet_05097 = [];

async function chartIt05097(){
    await GraphDATA05097();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05097-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05097
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05097
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05097-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05097,vote_lepen_05097,vote_rejet_05097]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05097-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05097,vote_lepenpop_05097,vote_rejetpop_05097]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05097"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05097
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05097
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05097
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05098*/
/*------------------------------------------------------------------ */
async function GraphDATA05098() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[97];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05098.push(vote_macron); 
    vote_lepen_05098.push(vote_lepen);
    vote_rejet_05098.push(vote_rejet);
    vote_macronpop_05098.push(vote_macronMediane);
    vote_lepenpop_05098.push(vote_lepenMediane);
    vote_rejetpop_05098.push(vote_rejetMediane);
    name_Commune_05098.push(nameCommune);
    Pourcentage_05098.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05098.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05098.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05098.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05098.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05098 = [];
const vote_lepen_05098 = [];
const vote_rejet_05098 = [];
const vote_macronpop_05098 = [];
const vote_lepenpop_05098 = [];
const vote_rejetpop_05098 = [];
const name_Commune_05098 = [];
const Pourcentage_05098 = [];
const Pourcentage_rejet_05098 = [];
const vote_gene_macron_05098 = [];
const vote_gene_lepen_05098 = [];
const vote_gene_rejet_05098 = [];

async function chartIt05098(){
    await GraphDATA05098();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05098-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05098
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05098
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05098-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05098,vote_lepen_05098,vote_rejet_05098]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05098-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05098,vote_lepenpop_05098,vote_rejetpop_05098]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05098"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05098
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05098
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05098
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05099*/
/*------------------------------------------------------------------ */
async function GraphDATA05099() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[98];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05099.push(vote_macron); 
    vote_lepen_05099.push(vote_lepen);
    vote_rejet_05099.push(vote_rejet);
    vote_macronpop_05099.push(vote_macronMediane);
    vote_lepenpop_05099.push(vote_lepenMediane);
    vote_rejetpop_05099.push(vote_rejetMediane);
    name_Commune_05099.push(nameCommune);
    Pourcentage_05099.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05099.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05099.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05099.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05099.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05099 = [];
const vote_lepen_05099 = [];
const vote_rejet_05099 = [];
const vote_macronpop_05099 = [];
const vote_lepenpop_05099 = [];
const vote_rejetpop_05099 = [];
const name_Commune_05099 = [];
const Pourcentage_05099 = [];
const Pourcentage_rejet_05099 = [];
const vote_gene_macron_05099 = [];
const vote_gene_lepen_05099 = [];
const vote_gene_rejet_05099 = [];

async function chartIt05099(){
    await GraphDATA05099();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05099-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05099
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05099
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05099-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05099,vote_lepen_05099,vote_rejet_05099]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05099-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05099,vote_lepenpop_05099,vote_rejetpop_05099]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05099"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05099
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05099
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05099
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}