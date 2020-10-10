/********************************************************************** */
/*JS GRAPHIQUE FICHIER DATA */
/********************************************************************** */
const name_abs = "Abstentions";
const name_Blancs = "Blancs";
const name_Nul = "Nuls";
const name_rejete = "Rejeter";
const name_macron = "Macron";
const name_lepen = "Lepen";

chartIt04001();
chartIt04002();
chartIt04003();
chartIt04004();
chartIt04005();
chartIt04006();
chartIt04007();
chartIt04008();
chartIt04009();
chartIt04010();
chartIt04011();
chartIt04012();
chartIt04013();
chartIt04014();
chartIt04015();
chartIt04016();
chartIt04017();
chartIt04018();
chartIt04019();
chartIt04020();
chartIt04021();
chartIt04022();
chartIt04023();
chartIt04024();
chartIt04025();
chartIt04026();
chartIt04027();
chartIt04028();
chartIt04029();
chartIt04030();
chartIt04031();
chartIt04032();
chartIt04033();
chartIt04034();
chartIt04035();
chartIt04036();
chartIt04037();
chartIt04038();
chartIt04039();
chartIt04040();
chartIt04041();
chartIt04042();
chartIt04043();
chartIt04044();
chartIt04045();
chartIt04046();
chartIt04047();
chartIt04048();
chartIt04049();
chartIt04050();
chartIt04051();
chartIt04052();
chartIt04053();
chartIt04054();
chartIt04055();
chartIt04056();
chartIt04057();
chartIt04058();
chartIt04059();
chartIt04060();
chartIt04061();
chartIt04062();
chartIt04063();
chartIt04064();
chartIt04065();
chartIt04066();
chartIt04067();
chartIt04068();
chartIt04069();
chartIt04070();
chartIt04071();
chartIt04072();
chartIt04073();
chartIt04074();
chartIt04075();
chartIt04076();
chartIt04077();
chartIt04078();
chartIt04079();
chartIt04080();
chartIt04081();
chartIt04082();
chartIt04083();
chartIt04084();
chartIt04085();
chartIt04086();
chartIt04087();
chartIt04088();
chartIt04089();
chartIt04090();
chartIt04091();
chartIt04092();
chartIt04093();
chartIt04094();
chartIt04095();
chartIt04096();
chartIt04097();
chartIt04098();
chartIt04099();
/*------------------------------------------------------------------ */
/*COMMUNE 04001*/
/*------------------------------------------------------------------ */
async function GraphDATA04001() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04001.push(vote_macron); 
    vote_lepen_04001.push(vote_lepen);
    vote_rejet_04001.push(vote_rejet);
    vote_macronpop_04001.push(vote_macronMediane);
    vote_lepenpop_04001.push(vote_lepenMediane);
    vote_rejetpop_04001.push(vote_rejetMediane);
    name_Commune_04001.push(nameCommune);
    Pourcentage_04001.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04001.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04001.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04001.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04001.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04001 = [];
const vote_lepen_04001 = [];
const vote_rejet_04001 = [];
const vote_macronpop_04001 = [];
const vote_lepenpop_04001 = [];
const vote_rejetpop_04001 = [];
const name_Commune_04001 = [];
const Pourcentage_04001 = [];
const Pourcentage_rejet_04001 = [];
const vote_gene_macron_04001 = [];
const vote_gene_lepen_04001 = [];
const vote_gene_rejet_04001 = [];

async function chartIt04001(){
    await GraphDATA04001();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04001-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04001
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04001
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04001-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04001,vote_lepen_04001,vote_rejet_04001]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04001-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04001,vote_lepenpop_04001,vote_rejetpop_04001]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04001"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04001
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04001
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04001
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04002*/
/*------------------------------------------------------------------ */
async function GraphDATA04002() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04002.push(vote_macron); 
    vote_lepen_04002.push(vote_lepen);
    vote_rejet_04002.push(vote_rejet);
    vote_macronpop_04002.push(vote_macronMediane);
    vote_lepenpop_04002.push(vote_lepenMediane);
    vote_rejetpop_04002.push(vote_rejetMediane);
    name_Commune_04002.push(nameCommune);
    Pourcentage_04002.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04002.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04002.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04002.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04002.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04002 = [];
const vote_lepen_04002 = [];
const vote_rejet_04002 = [];
const vote_macronpop_04002 = [];
const vote_lepenpop_04002 = [];
const vote_rejetpop_04002 = [];
const name_Commune_04002 = [];
const Pourcentage_04002 = [];
const Pourcentage_rejet_04002 = [];
const vote_gene_macron_04002 = [];
const vote_gene_lepen_04002 = [];
const vote_gene_rejet_04002 = [];

async function chartIt04002(){
    await GraphDATA04002();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04002-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04002
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04002
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04002-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04002,vote_lepen_04002,vote_rejet_04002]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04002-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04002,vote_lepenpop_04002,vote_rejetpop_04002]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04002"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04002
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04002
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04002
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04003*/
/*------------------------------------------------------------------ */
async function GraphDATA04003() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04003.push(vote_macron); 
    vote_lepen_04003.push(vote_lepen);
    vote_rejet_04003.push(vote_rejet);
    vote_macronpop_04003.push(vote_macronMediane);
    vote_lepenpop_04003.push(vote_lepenMediane);
    vote_rejetpop_04003.push(vote_rejetMediane);
    name_Commune_04003.push(nameCommune);
    Pourcentage_04003.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04003.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04003.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04003.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04003.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04003 = [];
const vote_lepen_04003 = [];
const vote_rejet_04003 = [];
const vote_macronpop_04003 = [];
const vote_lepenpop_04003 = [];
const vote_rejetpop_04003 = [];
const name_Commune_04003 = [];
const Pourcentage_04003 = [];
const Pourcentage_rejet_04003 = [];
const vote_gene_macron_04003 = [];
const vote_gene_lepen_04003 = [];
const vote_gene_rejet_04003 = [];

async function chartIt04003(){
    await GraphDATA04003();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04003-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04003
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04003
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04003-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04003,vote_lepen_04003,vote_rejet_04003]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04003-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04003,vote_lepenpop_04003,vote_rejetpop_04003]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04003"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04003
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04003
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04003
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04004*/
/*------------------------------------------------------------------ */
async function GraphDATA04004() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04004.push(vote_macron); 
    vote_lepen_04004.push(vote_lepen);
    vote_rejet_04004.push(vote_rejet);
    vote_macronpop_04004.push(vote_macronMediane);
    vote_lepenpop_04004.push(vote_lepenMediane);
    vote_rejetpop_04004.push(vote_rejetMediane);
    name_Commune_04004.push(nameCommune);
    Pourcentage_04004.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04004.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04004.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04004.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04004.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04004 = [];
const vote_lepen_04004 = [];
const vote_rejet_04004 = [];
const vote_macronpop_04004 = [];
const vote_lepenpop_04004 = [];
const vote_rejetpop_04004 = [];
const name_Commune_04004 = [];
const Pourcentage_04004 = [];
const Pourcentage_rejet_04004 = [];
const vote_gene_macron_04004 = [];
const vote_gene_lepen_04004 = [];
const vote_gene_rejet_04004 = [];

async function chartIt04004(){
    await GraphDATA04004();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04004-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04004
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04004
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04004-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04004,vote_lepen_04004,vote_rejet_04004]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04004-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04004,vote_lepenpop_04004,vote_rejetpop_04004]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04004"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04004
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04004
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04004
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04005*/
/*------------------------------------------------------------------ */
async function GraphDATA04005() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04005.push(vote_macron); 
    vote_lepen_04005.push(vote_lepen);
    vote_rejet_04005.push(vote_rejet);
    vote_macronpop_04005.push(vote_macronMediane);
    vote_lepenpop_04005.push(vote_lepenMediane);
    vote_rejetpop_04005.push(vote_rejetMediane);
    name_Commune_04005.push(nameCommune);
    Pourcentage_04005.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04005.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04005.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04005.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04005.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04005 = [];
const vote_lepen_04005 = [];
const vote_rejet_04005 = [];
const vote_macronpop_04005 = [];
const vote_lepenpop_04005 = [];
const vote_rejetpop_04005 = [];
const name_Commune_04005 = [];
const Pourcentage_04005 = [];
const Pourcentage_rejet_04005 = [];
const vote_gene_macron_04005 = [];
const vote_gene_lepen_04005 = [];
const vote_gene_rejet_04005 = [];

async function chartIt04005(){
    await GraphDATA04005();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04005-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04005
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04005
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04005-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04005,vote_lepen_04005,vote_rejet_04005]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04005-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04005,vote_lepenpop_04005,vote_rejetpop_04005]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04005"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04005
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04005
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04005
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04006*/
/*------------------------------------------------------------------ */
async function GraphDATA04006() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04006.push(vote_macron); 
    vote_lepen_04006.push(vote_lepen);
    vote_rejet_04006.push(vote_rejet);
    vote_macronpop_04006.push(vote_macronMediane);
    vote_lepenpop_04006.push(vote_lepenMediane);
    vote_rejetpop_04006.push(vote_rejetMediane);
    name_Commune_04006.push(nameCommune);
    Pourcentage_04006.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04006.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04006.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04006.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04006.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04006 = [];
const vote_lepen_04006 = [];
const vote_rejet_04006 = [];
const vote_macronpop_04006 = [];
const vote_lepenpop_04006 = [];
const vote_rejetpop_04006 = [];
const name_Commune_04006 = [];
const Pourcentage_04006 = [];
const Pourcentage_rejet_04006 = [];
const vote_gene_macron_04006 = [];
const vote_gene_lepen_04006 = [];
const vote_gene_rejet_04006 = [];

async function chartIt04006(){
    await GraphDATA04006();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04006-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04006
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04006
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04006-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04006,vote_lepen_04006,vote_rejet_04006]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04006-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04006,vote_lepenpop_04006,vote_rejetpop_04006]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04006"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04006
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04006
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04006
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04007*/
/*------------------------------------------------------------------ */
async function GraphDATA04007() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04007.push(vote_macron); 
    vote_lepen_04007.push(vote_lepen);
    vote_rejet_04007.push(vote_rejet);
    vote_macronpop_04007.push(vote_macronMediane);
    vote_lepenpop_04007.push(vote_lepenMediane);
    vote_rejetpop_04007.push(vote_rejetMediane);
    name_Commune_04007.push(nameCommune);
    Pourcentage_04007.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04007.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04007.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04007.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04007.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04007 = [];
const vote_lepen_04007 = [];
const vote_rejet_04007 = [];
const vote_macronpop_04007 = [];
const vote_lepenpop_04007 = [];
const vote_rejetpop_04007 = [];
const name_Commune_04007 = [];
const Pourcentage_04007 = [];
const Pourcentage_rejet_04007 = [];
const vote_gene_macron_04007 = [];
const vote_gene_lepen_04007 = [];
const vote_gene_rejet_04007 = [];

async function chartIt04007(){
    await GraphDATA04007();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04007-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04007
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04007
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04007-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04007,vote_lepen_04007,vote_rejet_04007]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04007-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04007,vote_lepenpop_04007,vote_rejetpop_04007]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04007"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04007
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04007
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04007
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04008*/
/*------------------------------------------------------------------ */
async function GraphDATA04008() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04008.push(vote_macron); 
    vote_lepen_04008.push(vote_lepen);
    vote_rejet_04008.push(vote_rejet);
    vote_macronpop_04008.push(vote_macronMediane);
    vote_lepenpop_04008.push(vote_lepenMediane);
    vote_rejetpop_04008.push(vote_rejetMediane);
    name_Commune_04008.push(nameCommune);
    Pourcentage_04008.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04008.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04008.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04008.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04008.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04008 = [];
const vote_lepen_04008 = [];
const vote_rejet_04008 = [];
const vote_macronpop_04008 = [];
const vote_lepenpop_04008 = [];
const vote_rejetpop_04008 = [];
const name_Commune_04008 = [];
const Pourcentage_04008 = [];
const Pourcentage_rejet_04008 = [];
const vote_gene_macron_04008 = [];
const vote_gene_lepen_04008 = [];
const vote_gene_rejet_04008 = [];

async function chartIt04008(){
    await GraphDATA04008();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04008-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04008
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04008
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04008-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04008,vote_lepen_04008,vote_rejet_04008]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04008-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04008,vote_lepenpop_04008,vote_rejetpop_04008]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04008"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04008
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04008
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04008
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04009*/
/*------------------------------------------------------------------ */
async function GraphDATA04009() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04009.push(vote_macron); 
    vote_lepen_04009.push(vote_lepen);
    vote_rejet_04009.push(vote_rejet);
    vote_macronpop_04009.push(vote_macronMediane);
    vote_lepenpop_04009.push(vote_lepenMediane);
    vote_rejetpop_04009.push(vote_rejetMediane);
    name_Commune_04009.push(nameCommune);
    Pourcentage_04009.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04009.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04009.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04009.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04009.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04009 = [];
const vote_lepen_04009 = [];
const vote_rejet_04009 = [];
const vote_macronpop_04009 = [];
const vote_lepenpop_04009 = [];
const vote_rejetpop_04009 = [];
const name_Commune_04009 = [];
const Pourcentage_04009 = [];
const Pourcentage_rejet_04009 = [];
const vote_gene_macron_04009 = [];
const vote_gene_lepen_04009 = [];
const vote_gene_rejet_04009 = [];

async function chartIt04009(){
    await GraphDATA04009();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04009-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04009
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04009
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04009-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04009,vote_lepen_04009,vote_rejet_04009]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04009-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04009,vote_lepenpop_04009,vote_rejetpop_04009]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04009"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04009
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04009
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04009
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04010*/
/*------------------------------------------------------------------ */
async function GraphDATA04010() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04010.push(vote_macron); 
    vote_lepen_04010.push(vote_lepen);
    vote_rejet_04010.push(vote_rejet);
    vote_macronpop_04010.push(vote_macronMediane);
    vote_lepenpop_04010.push(vote_lepenMediane);
    vote_rejetpop_04010.push(vote_rejetMediane);
    name_Commune_04010.push(nameCommune);
    Pourcentage_04010.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04010.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04010.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04010.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04010.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04010 = [];
const vote_lepen_04010 = [];
const vote_rejet_04010 = [];
const vote_macronpop_04010 = [];
const vote_lepenpop_04010 = [];
const vote_rejetpop_04010 = [];
const name_Commune_04010 = [];
const Pourcentage_04010 = [];
const Pourcentage_rejet_04010 = [];
const vote_gene_macron_04010 = [];
const vote_gene_lepen_04010 = [];
const vote_gene_rejet_04010 = [];

async function chartIt04010(){
    await GraphDATA04010();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04010-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04010
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04010
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04010-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04010,vote_lepen_04010,vote_rejet_04010]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04010-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04010,vote_lepenpop_04010,vote_rejetpop_04010]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04010"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04010
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04010
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04010
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04011*/
/*------------------------------------------------------------------ */
async function GraphDATA04011() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04011.push(vote_macron); 
    vote_lepen_04011.push(vote_lepen);
    vote_rejet_04011.push(vote_rejet);
    vote_macronpop_04011.push(vote_macronMediane);
    vote_lepenpop_04011.push(vote_lepenMediane);
    vote_rejetpop_04011.push(vote_rejetMediane);
    name_Commune_04011.push(nameCommune);
    Pourcentage_04011.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04011.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04011.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04011.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04011.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04011 = [];
const vote_lepen_04011 = [];
const vote_rejet_04011 = [];
const vote_macronpop_04011 = [];
const vote_lepenpop_04011 = [];
const vote_rejetpop_04011 = [];
const name_Commune_04011 = [];
const Pourcentage_04011 = [];
const Pourcentage_rejet_04011 = [];
const vote_gene_macron_04011 = [];
const vote_gene_lepen_04011 = [];
const vote_gene_rejet_04011 = [];

async function chartIt04011(){
    await GraphDATA04011();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04011-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04011
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04011
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04011-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04011,vote_lepen_04011,vote_rejet_04011]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04011-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04011,vote_lepenpop_04011,vote_rejetpop_04011]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04011"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04011
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04011
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04011
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04012*/
/*------------------------------------------------------------------ */
async function GraphDATA04012() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04012.push(vote_macron); 
    vote_lepen_04012.push(vote_lepen);
    vote_rejet_04012.push(vote_rejet);
    vote_macronpop_04012.push(vote_macronMediane);
    vote_lepenpop_04012.push(vote_lepenMediane);
    vote_rejetpop_04012.push(vote_rejetMediane);
    name_Commune_04012.push(nameCommune);
    Pourcentage_04012.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04012.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04012.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04012.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04012.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04012 = [];
const vote_lepen_04012 = [];
const vote_rejet_04012 = [];
const vote_macronpop_04012 = [];
const vote_lepenpop_04012 = [];
const vote_rejetpop_04012 = [];
const name_Commune_04012 = [];
const Pourcentage_04012 = [];
const Pourcentage_rejet_04012 = [];
const vote_gene_macron_04012 = [];
const vote_gene_lepen_04012 = [];
const vote_gene_rejet_04012 = [];

async function chartIt04012(){
    await GraphDATA04012();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04012-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04012
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04012
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04012-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04012,vote_lepen_04012,vote_rejet_04012]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04012-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04012,vote_lepenpop_04012,vote_rejetpop_04012]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04012"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04012
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04012
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04012
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04013*/
/*------------------------------------------------------------------ */
async function GraphDATA04013() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04013.push(vote_macron); 
    vote_lepen_04013.push(vote_lepen);
    vote_rejet_04013.push(vote_rejet);
    vote_macronpop_04013.push(vote_macronMediane);
    vote_lepenpop_04013.push(vote_lepenMediane);
    vote_rejetpop_04013.push(vote_rejetMediane);
    name_Commune_04013.push(nameCommune);
    Pourcentage_04013.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04013.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04013.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04013.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04013.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04013 = [];
const vote_lepen_04013 = [];
const vote_rejet_04013 = [];
const vote_macronpop_04013 = [];
const vote_lepenpop_04013 = [];
const vote_rejetpop_04013 = [];
const name_Commune_04013 = [];
const Pourcentage_04013 = [];
const Pourcentage_rejet_04013 = [];
const vote_gene_macron_04013 = [];
const vote_gene_lepen_04013 = [];
const vote_gene_rejet_04013 = [];

async function chartIt04013(){
    await GraphDATA04013();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04013-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04013
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04013
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04013-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04013,vote_lepen_04013,vote_rejet_04013]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04013-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04013,vote_lepenpop_04013,vote_rejetpop_04013]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04013"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04013
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04013
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04013
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04014*/
/*------------------------------------------------------------------ */
async function GraphDATA04014() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04014.push(vote_macron); 
    vote_lepen_04014.push(vote_lepen);
    vote_rejet_04014.push(vote_rejet);
    vote_macronpop_04014.push(vote_macronMediane);
    vote_lepenpop_04014.push(vote_lepenMediane);
    vote_rejetpop_04014.push(vote_rejetMediane);
    name_Commune_04014.push(nameCommune);
    Pourcentage_04014.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04014.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04014.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04014.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04014.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04014 = [];
const vote_lepen_04014 = [];
const vote_rejet_04014 = [];
const vote_macronpop_04014 = [];
const vote_lepenpop_04014 = [];
const vote_rejetpop_04014 = [];
const name_Commune_04014 = [];
const Pourcentage_04014 = [];
const Pourcentage_rejet_04014 = [];
const vote_gene_macron_04014 = [];
const vote_gene_lepen_04014 = [];
const vote_gene_rejet_04014 = [];

async function chartIt04014(){
    await GraphDATA04014();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04014-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04014
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04014
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04014-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04014,vote_lepen_04014,vote_rejet_04014]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04014-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04014,vote_lepenpop_04014,vote_rejetpop_04014]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04014"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04014
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04014
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04014
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04015*/
/*------------------------------------------------------------------ */
async function GraphDATA04015() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04015.push(vote_macron); 
    vote_lepen_04015.push(vote_lepen);
    vote_rejet_04015.push(vote_rejet);
    vote_macronpop_04015.push(vote_macronMediane);
    vote_lepenpop_04015.push(vote_lepenMediane);
    vote_rejetpop_04015.push(vote_rejetMediane);
    name_Commune_04015.push(nameCommune);
    Pourcentage_04015.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04015.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04015.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04015.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04015.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04015 = [];
const vote_lepen_04015 = [];
const vote_rejet_04015 = [];
const vote_macronpop_04015 = [];
const vote_lepenpop_04015 = [];
const vote_rejetpop_04015 = [];
const name_Commune_04015 = [];
const Pourcentage_04015 = [];
const Pourcentage_rejet_04015 = [];
const vote_gene_macron_04015 = [];
const vote_gene_lepen_04015 = [];
const vote_gene_rejet_04015 = [];

async function chartIt04015(){
    await GraphDATA04015();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04015-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04015
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04015
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04015-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04015,vote_lepen_04015,vote_rejet_04015]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04015-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04015,vote_lepenpop_04015,vote_rejetpop_04015]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04015"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04015
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04015
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04015
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04016*/
/*------------------------------------------------------------------ */
async function GraphDATA04016() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04016.push(vote_macron); 
    vote_lepen_04016.push(vote_lepen);
    vote_rejet_04016.push(vote_rejet);
    vote_macronpop_04016.push(vote_macronMediane);
    vote_lepenpop_04016.push(vote_lepenMediane);
    vote_rejetpop_04016.push(vote_rejetMediane);
    name_Commune_04016.push(nameCommune);
    Pourcentage_04016.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04016.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04016.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04016.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04016.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04016 = [];
const vote_lepen_04016 = [];
const vote_rejet_04016 = [];
const vote_macronpop_04016 = [];
const vote_lepenpop_04016 = [];
const vote_rejetpop_04016 = [];
const name_Commune_04016 = [];
const Pourcentage_04016 = [];
const Pourcentage_rejet_04016 = [];
const vote_gene_macron_04016 = [];
const vote_gene_lepen_04016 = [];
const vote_gene_rejet_04016 = [];

async function chartIt04016(){
    await GraphDATA04016();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04016-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04016
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04016
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04016-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04016,vote_lepen_04016,vote_rejet_04016]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04016-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04016,vote_lepenpop_04016,vote_rejetpop_04016]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04016"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04016
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04016
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04016
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04017*/
/*------------------------------------------------------------------ */
async function GraphDATA04017() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04017.push(vote_macron); 
    vote_lepen_04017.push(vote_lepen);
    vote_rejet_04017.push(vote_rejet);
    vote_macronpop_04017.push(vote_macronMediane);
    vote_lepenpop_04017.push(vote_lepenMediane);
    vote_rejetpop_04017.push(vote_rejetMediane);
    name_Commune_04017.push(nameCommune);
    Pourcentage_04017.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04017.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04017.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04017.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04017.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04017 = [];
const vote_lepen_04017 = [];
const vote_rejet_04017 = [];
const vote_macronpop_04017 = [];
const vote_lepenpop_04017 = [];
const vote_rejetpop_04017 = [];
const name_Commune_04017 = [];
const Pourcentage_04017 = [];
const Pourcentage_rejet_04017 = [];
const vote_gene_macron_04017 = [];
const vote_gene_lepen_04017 = [];
const vote_gene_rejet_04017 = [];

async function chartIt04017(){
    await GraphDATA04017();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04017-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04017
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04017
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04017-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04017,vote_lepen_04017,vote_rejet_04017]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04017-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04017,vote_lepenpop_04017,vote_rejetpop_04017]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04017"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04017
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04017
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04017
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04018*/
/*------------------------------------------------------------------ */
async function GraphDATA04018() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04018.push(vote_macron); 
    vote_lepen_04018.push(vote_lepen);
    vote_rejet_04018.push(vote_rejet);
    vote_macronpop_04018.push(vote_macronMediane);
    vote_lepenpop_04018.push(vote_lepenMediane);
    vote_rejetpop_04018.push(vote_rejetMediane);
    name_Commune_04018.push(nameCommune);
    Pourcentage_04018.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04018.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04018.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04018.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04018.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04018 = [];
const vote_lepen_04018 = [];
const vote_rejet_04018 = [];
const vote_macronpop_04018 = [];
const vote_lepenpop_04018 = [];
const vote_rejetpop_04018 = [];
const name_Commune_04018 = [];
const Pourcentage_04018 = [];
const Pourcentage_rejet_04018 = [];
const vote_gene_macron_04018 = [];
const vote_gene_lepen_04018 = [];
const vote_gene_rejet_04018 = [];

async function chartIt04018(){
    await GraphDATA04018();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04018-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04018
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04018
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04018-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04018,vote_lepen_04018,vote_rejet_04018]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04018-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04018,vote_lepenpop_04018,vote_rejetpop_04018]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04018"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04018
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04018
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04018
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04019*/
/*------------------------------------------------------------------ */
async function GraphDATA04019() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04019.push(vote_macron); 
    vote_lepen_04019.push(vote_lepen);
    vote_rejet_04019.push(vote_rejet);
    vote_macronpop_04019.push(vote_macronMediane);
    vote_lepenpop_04019.push(vote_lepenMediane);
    vote_rejetpop_04019.push(vote_rejetMediane);
    name_Commune_04019.push(nameCommune);
    Pourcentage_04019.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04019.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04019.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04019.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04019.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04019 = [];
const vote_lepen_04019 = [];
const vote_rejet_04019 = [];
const vote_macronpop_04019 = [];
const vote_lepenpop_04019 = [];
const vote_rejetpop_04019 = [];
const name_Commune_04019 = [];
const Pourcentage_04019 = [];
const Pourcentage_rejet_04019 = [];
const vote_gene_macron_04019 = [];
const vote_gene_lepen_04019 = [];
const vote_gene_rejet_04019 = [];

async function chartIt04019(){
    await GraphDATA04019();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04019-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04019
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04019
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04019-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04019,vote_lepen_04019,vote_rejet_04019]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04019-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04019,vote_lepenpop_04019,vote_rejetpop_04019]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04019"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04019
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04019
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04019
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04020*/
/*------------------------------------------------------------------ */
async function GraphDATA04020() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04020.push(vote_macron); 
    vote_lepen_04020.push(vote_lepen);
    vote_rejet_04020.push(vote_rejet);
    vote_macronpop_04020.push(vote_macronMediane);
    vote_lepenpop_04020.push(vote_lepenMediane);
    vote_rejetpop_04020.push(vote_rejetMediane);
    name_Commune_04020.push(nameCommune);
    Pourcentage_04020.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04020.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04020.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04020.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04020.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04020 = [];
const vote_lepen_04020 = [];
const vote_rejet_04020 = [];
const vote_macronpop_04020 = [];
const vote_lepenpop_04020 = [];
const vote_rejetpop_04020 = [];
const name_Commune_04020 = [];
const Pourcentage_04020 = [];
const Pourcentage_rejet_04020 = [];
const vote_gene_macron_04020 = [];
const vote_gene_lepen_04020 = [];
const vote_gene_rejet_04020 = [];

async function chartIt04020(){
    await GraphDATA04020();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04020-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04020
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04020
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04020-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04020,vote_lepen_04020,vote_rejet_04020]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04020-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04020,vote_lepenpop_04020,vote_rejetpop_04020]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04020"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04020
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04020
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04020
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04021*/
/*------------------------------------------------------------------ */
async function GraphDATA04021() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04021.push(vote_macron); 
    vote_lepen_04021.push(vote_lepen);
    vote_rejet_04021.push(vote_rejet);
    vote_macronpop_04021.push(vote_macronMediane);
    vote_lepenpop_04021.push(vote_lepenMediane);
    vote_rejetpop_04021.push(vote_rejetMediane);
    name_Commune_04021.push(nameCommune);
    Pourcentage_04021.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04021.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04021.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04021.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04021.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04021 = [];
const vote_lepen_04021 = [];
const vote_rejet_04021 = [];
const vote_macronpop_04021 = [];
const vote_lepenpop_04021 = [];
const vote_rejetpop_04021 = [];
const name_Commune_04021 = [];
const Pourcentage_04021 = [];
const Pourcentage_rejet_04021 = [];
const vote_gene_macron_04021 = [];
const vote_gene_lepen_04021 = [];
const vote_gene_rejet_04021 = [];

async function chartIt04021(){
    await GraphDATA04021();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04021-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04021
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04021
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04021-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04021,vote_lepen_04021,vote_rejet_04021]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04021-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04021,vote_lepenpop_04021,vote_rejetpop_04021]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04021"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04021
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04021
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04021
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04022*/
/*------------------------------------------------------------------ */
async function GraphDATA04022() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04022.push(vote_macron); 
    vote_lepen_04022.push(vote_lepen);
    vote_rejet_04022.push(vote_rejet);
    vote_macronpop_04022.push(vote_macronMediane);
    vote_lepenpop_04022.push(vote_lepenMediane);
    vote_rejetpop_04022.push(vote_rejetMediane);
    name_Commune_04022.push(nameCommune);
    Pourcentage_04022.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04022.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04022.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04022.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04022.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04022 = [];
const vote_lepen_04022 = [];
const vote_rejet_04022 = [];
const vote_macronpop_04022 = [];
const vote_lepenpop_04022 = [];
const vote_rejetpop_04022 = [];
const name_Commune_04022 = [];
const Pourcentage_04022 = [];
const Pourcentage_rejet_04022 = [];
const vote_gene_macron_04022 = [];
const vote_gene_lepen_04022 = [];
const vote_gene_rejet_04022 = [];

async function chartIt04022(){
    await GraphDATA04022();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04022-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04022
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04022
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04022-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04022,vote_lepen_04022,vote_rejet_04022]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04022-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04022,vote_lepenpop_04022,vote_rejetpop_04022]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04022"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04022
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04022
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04022
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04023*/
/*------------------------------------------------------------------ */
async function GraphDATA04023() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04023.push(vote_macron); 
    vote_lepen_04023.push(vote_lepen);
    vote_rejet_04023.push(vote_rejet);
    vote_macronpop_04023.push(vote_macronMediane);
    vote_lepenpop_04023.push(vote_lepenMediane);
    vote_rejetpop_04023.push(vote_rejetMediane);
    name_Commune_04023.push(nameCommune);
    Pourcentage_04023.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04023.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04023.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04023.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04023.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04023 = [];
const vote_lepen_04023 = [];
const vote_rejet_04023 = [];
const vote_macronpop_04023 = [];
const vote_lepenpop_04023 = [];
const vote_rejetpop_04023 = [];
const name_Commune_04023 = [];
const Pourcentage_04023 = [];
const Pourcentage_rejet_04023 = [];
const vote_gene_macron_04023 = [];
const vote_gene_lepen_04023 = [];
const vote_gene_rejet_04023 = [];

async function chartIt04023(){
    await GraphDATA04023();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04023-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04023
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04023
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04023-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04023,vote_lepen_04023,vote_rejet_04023]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04023-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04023,vote_lepenpop_04023,vote_rejetpop_04023]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04023"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04023
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04023
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04023
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04024*/
/*------------------------------------------------------------------ */
async function GraphDATA04024() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04024.push(vote_macron); 
    vote_lepen_04024.push(vote_lepen);
    vote_rejet_04024.push(vote_rejet);
    vote_macronpop_04024.push(vote_macronMediane);
    vote_lepenpop_04024.push(vote_lepenMediane);
    vote_rejetpop_04024.push(vote_rejetMediane);
    name_Commune_04024.push(nameCommune);
    Pourcentage_04024.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04024.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04024.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04024.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04024.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04024 = [];
const vote_lepen_04024 = [];
const vote_rejet_04024 = [];
const vote_macronpop_04024 = [];
const vote_lepenpop_04024 = [];
const vote_rejetpop_04024 = [];
const name_Commune_04024 = [];
const Pourcentage_04024 = [];
const Pourcentage_rejet_04024 = [];
const vote_gene_macron_04024 = [];
const vote_gene_lepen_04024 = [];
const vote_gene_rejet_04024 = [];

async function chartIt04024(){
    await GraphDATA04024();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04024-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04024
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04024
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04024-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04024,vote_lepen_04024,vote_rejet_04024]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04024-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04024,vote_lepenpop_04024,vote_rejetpop_04024]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04024"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04024
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04024
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04024
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04025*/
/*------------------------------------------------------------------ */
async function GraphDATA04025() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04025.push(vote_macron); 
    vote_lepen_04025.push(vote_lepen);
    vote_rejet_04025.push(vote_rejet);
    vote_macronpop_04025.push(vote_macronMediane);
    vote_lepenpop_04025.push(vote_lepenMediane);
    vote_rejetpop_04025.push(vote_rejetMediane);
    name_Commune_04025.push(nameCommune);
    Pourcentage_04025.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04025.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04025.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04025.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04025.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04025 = [];
const vote_lepen_04025 = [];
const vote_rejet_04025 = [];
const vote_macronpop_04025 = [];
const vote_lepenpop_04025 = [];
const vote_rejetpop_04025 = [];
const name_Commune_04025 = [];
const Pourcentage_04025 = [];
const Pourcentage_rejet_04025 = [];
const vote_gene_macron_04025 = [];
const vote_gene_lepen_04025 = [];
const vote_gene_rejet_04025 = [];

async function chartIt04025(){
    await GraphDATA04025();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04025-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04025
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04025
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04025-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04025,vote_lepen_04025,vote_rejet_04025]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04025-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04025,vote_lepenpop_04025,vote_rejetpop_04025]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04025"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04025
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04025
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04025
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04026*/
/*------------------------------------------------------------------ */
async function GraphDATA04026() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04026.push(vote_macron); 
    vote_lepen_04026.push(vote_lepen);
    vote_rejet_04026.push(vote_rejet);
    vote_macronpop_04026.push(vote_macronMediane);
    vote_lepenpop_04026.push(vote_lepenMediane);
    vote_rejetpop_04026.push(vote_rejetMediane);
    name_Commune_04026.push(nameCommune);
    Pourcentage_04026.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04026.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04026.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04026.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04026.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04026 = [];
const vote_lepen_04026 = [];
const vote_rejet_04026 = [];
const vote_macronpop_04026 = [];
const vote_lepenpop_04026 = [];
const vote_rejetpop_04026 = [];
const name_Commune_04026 = [];
const Pourcentage_04026 = [];
const Pourcentage_rejet_04026 = [];
const vote_gene_macron_04026 = [];
const vote_gene_lepen_04026 = [];
const vote_gene_rejet_04026 = [];

async function chartIt04026(){
    await GraphDATA04026();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04026-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04026
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04026
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04026-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04026,vote_lepen_04026,vote_rejet_04026]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04026-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04026,vote_lepenpop_04026,vote_rejetpop_04026]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04026"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04026
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04026
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04026
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04027*/
/*------------------------------------------------------------------ */
async function GraphDATA04027() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04027.push(vote_macron); 
    vote_lepen_04027.push(vote_lepen);
    vote_rejet_04027.push(vote_rejet);
    vote_macronpop_04027.push(vote_macronMediane);
    vote_lepenpop_04027.push(vote_lepenMediane);
    vote_rejetpop_04027.push(vote_rejetMediane);
    name_Commune_04027.push(nameCommune);
    Pourcentage_04027.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04027.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04027.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04027.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04027.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04027 = [];
const vote_lepen_04027 = [];
const vote_rejet_04027 = [];
const vote_macronpop_04027 = [];
const vote_lepenpop_04027 = [];
const vote_rejetpop_04027 = [];
const name_Commune_04027 = [];
const Pourcentage_04027 = [];
const Pourcentage_rejet_04027 = [];
const vote_gene_macron_04027 = [];
const vote_gene_lepen_04027 = [];
const vote_gene_rejet_04027 = [];

async function chartIt04027(){
    await GraphDATA04027();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04027-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04027
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04027
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04027-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04027,vote_lepen_04027,vote_rejet_04027]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04027-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04027,vote_lepenpop_04027,vote_rejetpop_04027]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04027"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04027
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04027
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04027
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04028*/
/*------------------------------------------------------------------ */
async function GraphDATA04028() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04028.push(vote_macron); 
    vote_lepen_04028.push(vote_lepen);
    vote_rejet_04028.push(vote_rejet);
    vote_macronpop_04028.push(vote_macronMediane);
    vote_lepenpop_04028.push(vote_lepenMediane);
    vote_rejetpop_04028.push(vote_rejetMediane);
    name_Commune_04028.push(nameCommune);
    Pourcentage_04028.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04028.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04028.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04028.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04028.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04028 = [];
const vote_lepen_04028 = [];
const vote_rejet_04028 = [];
const vote_macronpop_04028 = [];
const vote_lepenpop_04028 = [];
const vote_rejetpop_04028 = [];
const name_Commune_04028 = [];
const Pourcentage_04028 = [];
const Pourcentage_rejet_04028 = [];
const vote_gene_macron_04028 = [];
const vote_gene_lepen_04028 = [];
const vote_gene_rejet_04028 = [];

async function chartIt04028(){
    await GraphDATA04028();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04028-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04028
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04028
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04028-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04028,vote_lepen_04028,vote_rejet_04028]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04028-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04028,vote_lepenpop_04028,vote_rejetpop_04028]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04028"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04028
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04028
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04028
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04029*/
/*------------------------------------------------------------------ */
async function GraphDATA04029() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04029.push(vote_macron); 
    vote_lepen_04029.push(vote_lepen);
    vote_rejet_04029.push(vote_rejet);
    vote_macronpop_04029.push(vote_macronMediane);
    vote_lepenpop_04029.push(vote_lepenMediane);
    vote_rejetpop_04029.push(vote_rejetMediane);
    name_Commune_04029.push(nameCommune);
    Pourcentage_04029.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04029.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04029.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04029.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04029.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04029 = [];
const vote_lepen_04029 = [];
const vote_rejet_04029 = [];
const vote_macronpop_04029 = [];
const vote_lepenpop_04029 = [];
const vote_rejetpop_04029 = [];
const name_Commune_04029 = [];
const Pourcentage_04029 = [];
const Pourcentage_rejet_04029 = [];
const vote_gene_macron_04029 = [];
const vote_gene_lepen_04029 = [];
const vote_gene_rejet_04029 = [];

async function chartIt04029(){
    await GraphDATA04029();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04029-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04029
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04029
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04029-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04029,vote_lepen_04029,vote_rejet_04029]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04029-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04029,vote_lepenpop_04029,vote_rejetpop_04029]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04029"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04029
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04029
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04029
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04030*/
/*------------------------------------------------------------------ */
async function GraphDATA04030() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04030.push(vote_macron); 
    vote_lepen_04030.push(vote_lepen);
    vote_rejet_04030.push(vote_rejet);
    vote_macronpop_04030.push(vote_macronMediane);
    vote_lepenpop_04030.push(vote_lepenMediane);
    vote_rejetpop_04030.push(vote_rejetMediane);
    name_Commune_04030.push(nameCommune);
    Pourcentage_04030.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04030.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04030.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04030.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04030.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04030 = [];
const vote_lepen_04030 = [];
const vote_rejet_04030 = [];
const vote_macronpop_04030 = [];
const vote_lepenpop_04030 = [];
const vote_rejetpop_04030 = [];
const name_Commune_04030 = [];
const Pourcentage_04030 = [];
const Pourcentage_rejet_04030 = [];
const vote_gene_macron_04030 = [];
const vote_gene_lepen_04030 = [];
const vote_gene_rejet_04030 = [];

async function chartIt04030(){
    await GraphDATA04030();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04030-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04030
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04030
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04030-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04030,vote_lepen_04030,vote_rejet_04030]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04030-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04030,vote_lepenpop_04030,vote_rejetpop_04030]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04030"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04030
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04030
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04030
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04031*/
/*------------------------------------------------------------------ */
async function GraphDATA04031() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04031.push(vote_macron); 
    vote_lepen_04031.push(vote_lepen);
    vote_rejet_04031.push(vote_rejet);
    vote_macronpop_04031.push(vote_macronMediane);
    vote_lepenpop_04031.push(vote_lepenMediane);
    vote_rejetpop_04031.push(vote_rejetMediane);
    name_Commune_04031.push(nameCommune);
    Pourcentage_04031.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04031.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04031.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04031.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04031.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04031 = [];
const vote_lepen_04031 = [];
const vote_rejet_04031 = [];
const vote_macronpop_04031 = [];
const vote_lepenpop_04031 = [];
const vote_rejetpop_04031 = [];
const name_Commune_04031 = [];
const Pourcentage_04031 = [];
const Pourcentage_rejet_04031 = [];
const vote_gene_macron_04031 = [];
const vote_gene_lepen_04031 = [];
const vote_gene_rejet_04031 = [];

async function chartIt04031(){
    await GraphDATA04031();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04031-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04031
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04031
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04031-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04031,vote_lepen_04031,vote_rejet_04031]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04031-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04031,vote_lepenpop_04031,vote_rejetpop_04031]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04031"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04031
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04031
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04031
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04032*/
/*------------------------------------------------------------------ */
async function GraphDATA04032() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04032.push(vote_macron); 
    vote_lepen_04032.push(vote_lepen);
    vote_rejet_04032.push(vote_rejet);
    vote_macronpop_04032.push(vote_macronMediane);
    vote_lepenpop_04032.push(vote_lepenMediane);
    vote_rejetpop_04032.push(vote_rejetMediane);
    name_Commune_04032.push(nameCommune);
    Pourcentage_04032.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04032.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04032.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04032.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04032.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04032 = [];
const vote_lepen_04032 = [];
const vote_rejet_04032 = [];
const vote_macronpop_04032 = [];
const vote_lepenpop_04032 = [];
const vote_rejetpop_04032 = [];
const name_Commune_04032 = [];
const Pourcentage_04032 = [];
const Pourcentage_rejet_04032 = [];
const vote_gene_macron_04032 = [];
const vote_gene_lepen_04032 = [];
const vote_gene_rejet_04032 = [];

async function chartIt04032(){
    await GraphDATA04032();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04032-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04032
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04032
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04032-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04032,vote_lepen_04032,vote_rejet_04032]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04032-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04032,vote_lepenpop_04032,vote_rejetpop_04032]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04032"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04032
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04032
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04032
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04033*/
/*------------------------------------------------------------------ */
async function GraphDATA04033() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04033.push(vote_macron); 
    vote_lepen_04033.push(vote_lepen);
    vote_rejet_04033.push(vote_rejet);
    vote_macronpop_04033.push(vote_macronMediane);
    vote_lepenpop_04033.push(vote_lepenMediane);
    vote_rejetpop_04033.push(vote_rejetMediane);
    name_Commune_04033.push(nameCommune);
    Pourcentage_04033.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04033.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04033.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04033.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04033.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04033 = [];
const vote_lepen_04033 = [];
const vote_rejet_04033 = [];
const vote_macronpop_04033 = [];
const vote_lepenpop_04033 = [];
const vote_rejetpop_04033 = [];
const name_Commune_04033 = [];
const Pourcentage_04033 = [];
const Pourcentage_rejet_04033 = [];
const vote_gene_macron_04033 = [];
const vote_gene_lepen_04033 = [];
const vote_gene_rejet_04033 = [];

async function chartIt04033(){
    await GraphDATA04033();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04033-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04033
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04033
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04033-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04033,vote_lepen_04033,vote_rejet_04033]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04033-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04033,vote_lepenpop_04033,vote_rejetpop_04033]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04033"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04033
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04033
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04033
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04034*/
/*------------------------------------------------------------------ */
async function GraphDATA04034() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04034.push(vote_macron); 
    vote_lepen_04034.push(vote_lepen);
    vote_rejet_04034.push(vote_rejet);
    vote_macronpop_04034.push(vote_macronMediane);
    vote_lepenpop_04034.push(vote_lepenMediane);
    vote_rejetpop_04034.push(vote_rejetMediane);
    name_Commune_04034.push(nameCommune);
    Pourcentage_04034.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04034.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04034.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04034.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04034.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04034 = [];
const vote_lepen_04034 = [];
const vote_rejet_04034 = [];
const vote_macronpop_04034 = [];
const vote_lepenpop_04034 = [];
const vote_rejetpop_04034 = [];
const name_Commune_04034 = [];
const Pourcentage_04034 = [];
const Pourcentage_rejet_04034 = [];
const vote_gene_macron_04034 = [];
const vote_gene_lepen_04034 = [];
const vote_gene_rejet_04034 = [];

async function chartIt04034(){
    await GraphDATA04034();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04034-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04034
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04034
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04034-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04034,vote_lepen_04034,vote_rejet_04034]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04034-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04034,vote_lepenpop_04034,vote_rejetpop_04034]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04034"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04034
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04034
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04034
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04035*/
/*------------------------------------------------------------------ */
async function GraphDATA04035() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04035.push(vote_macron); 
    vote_lepen_04035.push(vote_lepen);
    vote_rejet_04035.push(vote_rejet);
    vote_macronpop_04035.push(vote_macronMediane);
    vote_lepenpop_04035.push(vote_lepenMediane);
    vote_rejetpop_04035.push(vote_rejetMediane);
    name_Commune_04035.push(nameCommune);
    Pourcentage_04035.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04035.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04035.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04035.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04035.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04035 = [];
const vote_lepen_04035 = [];
const vote_rejet_04035 = [];
const vote_macronpop_04035 = [];
const vote_lepenpop_04035 = [];
const vote_rejetpop_04035 = [];
const name_Commune_04035 = [];
const Pourcentage_04035 = [];
const Pourcentage_rejet_04035 = [];
const vote_gene_macron_04035 = [];
const vote_gene_lepen_04035 = [];
const vote_gene_rejet_04035 = [];

async function chartIt04035(){
    await GraphDATA04035();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04035-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04035
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04035
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04035-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04035,vote_lepen_04035,vote_rejet_04035]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04035-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04035,vote_lepenpop_04035,vote_rejetpop_04035]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04035"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04035
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04035
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04035
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04036*/
/*------------------------------------------------------------------ */
async function GraphDATA04036() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04036.push(vote_macron); 
    vote_lepen_04036.push(vote_lepen);
    vote_rejet_04036.push(vote_rejet);
    vote_macronpop_04036.push(vote_macronMediane);
    vote_lepenpop_04036.push(vote_lepenMediane);
    vote_rejetpop_04036.push(vote_rejetMediane);
    name_Commune_04036.push(nameCommune);
    Pourcentage_04036.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04036.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04036.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04036.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04036.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04036 = [];
const vote_lepen_04036 = [];
const vote_rejet_04036 = [];
const vote_macronpop_04036 = [];
const vote_lepenpop_04036 = [];
const vote_rejetpop_04036 = [];
const name_Commune_04036 = [];
const Pourcentage_04036 = [];
const Pourcentage_rejet_04036 = [];
const vote_gene_macron_04036 = [];
const vote_gene_lepen_04036 = [];
const vote_gene_rejet_04036 = [];

async function chartIt04036(){
    await GraphDATA04036();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04036-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04036
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04036
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04036-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04036,vote_lepen_04036,vote_rejet_04036]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04036-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04036,vote_lepenpop_04036,vote_rejetpop_04036]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04036"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04036
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04036
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04036
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04037*/
/*------------------------------------------------------------------ */
async function GraphDATA04037() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04037.push(vote_macron); 
    vote_lepen_04037.push(vote_lepen);
    vote_rejet_04037.push(vote_rejet);
    vote_macronpop_04037.push(vote_macronMediane);
    vote_lepenpop_04037.push(vote_lepenMediane);
    vote_rejetpop_04037.push(vote_rejetMediane);
    name_Commune_04037.push(nameCommune);
    Pourcentage_04037.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04037.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04037.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04037.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04037.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04037 = [];
const vote_lepen_04037 = [];
const vote_rejet_04037 = [];
const vote_macronpop_04037 = [];
const vote_lepenpop_04037 = [];
const vote_rejetpop_04037 = [];
const name_Commune_04037 = [];
const Pourcentage_04037 = [];
const Pourcentage_rejet_04037 = [];
const vote_gene_macron_04037 = [];
const vote_gene_lepen_04037 = [];
const vote_gene_rejet_04037 = [];

async function chartIt04037(){
    await GraphDATA04037();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04037-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04037
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04037
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04037-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04037,vote_lepen_04037,vote_rejet_04037]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04037-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04037,vote_lepenpop_04037,vote_rejetpop_04037]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04037"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04037
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04037
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04037
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04038*/
/*------------------------------------------------------------------ */
async function GraphDATA04038() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04038.push(vote_macron); 
    vote_lepen_04038.push(vote_lepen);
    vote_rejet_04038.push(vote_rejet);
    vote_macronpop_04038.push(vote_macronMediane);
    vote_lepenpop_04038.push(vote_lepenMediane);
    vote_rejetpop_04038.push(vote_rejetMediane);
    name_Commune_04038.push(nameCommune);
    Pourcentage_04038.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04038.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04038.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04038.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04038.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04038 = [];
const vote_lepen_04038 = [];
const vote_rejet_04038 = [];
const vote_macronpop_04038 = [];
const vote_lepenpop_04038 = [];
const vote_rejetpop_04038 = [];
const name_Commune_04038 = [];
const Pourcentage_04038 = [];
const Pourcentage_rejet_04038 = [];
const vote_gene_macron_04038 = [];
const vote_gene_lepen_04038 = [];
const vote_gene_rejet_04038 = [];

async function chartIt04038(){
    await GraphDATA04038();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04038-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04038
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04038
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04038-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04038,vote_lepen_04038,vote_rejet_04038]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04038-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04038,vote_lepenpop_04038,vote_rejetpop_04038]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04038"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04038
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04038
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04038
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04039*/
/*------------------------------------------------------------------ */
async function GraphDATA04039() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04039.push(vote_macron); 
    vote_lepen_04039.push(vote_lepen);
    vote_rejet_04039.push(vote_rejet);
    vote_macronpop_04039.push(vote_macronMediane);
    vote_lepenpop_04039.push(vote_lepenMediane);
    vote_rejetpop_04039.push(vote_rejetMediane);
    name_Commune_04039.push(nameCommune);
    Pourcentage_04039.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04039.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04039.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04039.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04039.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04039 = [];
const vote_lepen_04039 = [];
const vote_rejet_04039 = [];
const vote_macronpop_04039 = [];
const vote_lepenpop_04039 = [];
const vote_rejetpop_04039 = [];
const name_Commune_04039 = [];
const Pourcentage_04039 = [];
const Pourcentage_rejet_04039 = [];
const vote_gene_macron_04039 = [];
const vote_gene_lepen_04039 = [];
const vote_gene_rejet_04039 = [];

async function chartIt04039(){
    await GraphDATA04039();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04039-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04039
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04039
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04039-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04039,vote_lepen_04039,vote_rejet_04039]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04039-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04039,vote_lepenpop_04039,vote_rejetpop_04039]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04039"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04039
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04039
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04039
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04040*/
/*------------------------------------------------------------------ */
async function GraphDATA04040() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04040.push(vote_macron); 
    vote_lepen_04040.push(vote_lepen);
    vote_rejet_04040.push(vote_rejet);
    vote_macronpop_04040.push(vote_macronMediane);
    vote_lepenpop_04040.push(vote_lepenMediane);
    vote_rejetpop_04040.push(vote_rejetMediane);
    name_Commune_04040.push(nameCommune);
    Pourcentage_04040.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04040.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04040.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04040.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04040.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04040 = [];
const vote_lepen_04040 = [];
const vote_rejet_04040 = [];
const vote_macronpop_04040 = [];
const vote_lepenpop_04040 = [];
const vote_rejetpop_04040 = [];
const name_Commune_04040 = [];
const Pourcentage_04040 = [];
const Pourcentage_rejet_04040 = [];
const vote_gene_macron_04040 = [];
const vote_gene_lepen_04040 = [];
const vote_gene_rejet_04040 = [];

async function chartIt04040(){
    await GraphDATA04040();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04040-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04040
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04040
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04040-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04040,vote_lepen_04040,vote_rejet_04040]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04040-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04040,vote_lepenpop_04040,vote_rejetpop_04040]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04040"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04040
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04040
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04040
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04041*/
/*------------------------------------------------------------------ */
async function GraphDATA04041() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04041.push(vote_macron); 
    vote_lepen_04041.push(vote_lepen);
    vote_rejet_04041.push(vote_rejet);
    vote_macronpop_04041.push(vote_macronMediane);
    vote_lepenpop_04041.push(vote_lepenMediane);
    vote_rejetpop_04041.push(vote_rejetMediane);
    name_Commune_04041.push(nameCommune);
    Pourcentage_04041.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04041.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04041.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04041.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04041.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04041 = [];
const vote_lepen_04041 = [];
const vote_rejet_04041 = [];
const vote_macronpop_04041 = [];
const vote_lepenpop_04041 = [];
const vote_rejetpop_04041 = [];
const name_Commune_04041 = [];
const Pourcentage_04041 = [];
const Pourcentage_rejet_04041 = [];
const vote_gene_macron_04041 = [];
const vote_gene_lepen_04041 = [];
const vote_gene_rejet_04041 = [];

async function chartIt04041(){
    await GraphDATA04041();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04041-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04041
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04041
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04041-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04041,vote_lepen_04041,vote_rejet_04041]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04041-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04041,vote_lepenpop_04041,vote_rejetpop_04041]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04041"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04041
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04041
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04041
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04042*/
/*------------------------------------------------------------------ */
async function GraphDATA04042() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04042.push(vote_macron); 
    vote_lepen_04042.push(vote_lepen);
    vote_rejet_04042.push(vote_rejet);
    vote_macronpop_04042.push(vote_macronMediane);
    vote_lepenpop_04042.push(vote_lepenMediane);
    vote_rejetpop_04042.push(vote_rejetMediane);
    name_Commune_04042.push(nameCommune);
    Pourcentage_04042.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04042.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04042.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04042.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04042.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04042 = [];
const vote_lepen_04042 = [];
const vote_rejet_04042 = [];
const vote_macronpop_04042 = [];
const vote_lepenpop_04042 = [];
const vote_rejetpop_04042 = [];
const name_Commune_04042 = [];
const Pourcentage_04042 = [];
const Pourcentage_rejet_04042 = [];
const vote_gene_macron_04042 = [];
const vote_gene_lepen_04042 = [];
const vote_gene_rejet_04042 = [];

async function chartIt04042(){
    await GraphDATA04042();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04042-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04042
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04042
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04042-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04042,vote_lepen_04042,vote_rejet_04042]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04042-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04042,vote_lepenpop_04042,vote_rejetpop_04042]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04042"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04042
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04042
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04042
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04043*/
/*------------------------------------------------------------------ */
async function GraphDATA04043() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04043.push(vote_macron); 
    vote_lepen_04043.push(vote_lepen);
    vote_rejet_04043.push(vote_rejet);
    vote_macronpop_04043.push(vote_macronMediane);
    vote_lepenpop_04043.push(vote_lepenMediane);
    vote_rejetpop_04043.push(vote_rejetMediane);
    name_Commune_04043.push(nameCommune);
    Pourcentage_04043.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04043.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04043.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04043.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04043.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04043 = [];
const vote_lepen_04043 = [];
const vote_rejet_04043 = [];
const vote_macronpop_04043 = [];
const vote_lepenpop_04043 = [];
const vote_rejetpop_04043 = [];
const name_Commune_04043 = [];
const Pourcentage_04043 = [];
const Pourcentage_rejet_04043 = [];
const vote_gene_macron_04043 = [];
const vote_gene_lepen_04043 = [];
const vote_gene_rejet_04043 = [];

async function chartIt04043(){
    await GraphDATA04043();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04043-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04043
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04043
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04043-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04043,vote_lepen_04043,vote_rejet_04043]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04043-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04043,vote_lepenpop_04043,vote_rejetpop_04043]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04043"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04043
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04043
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04043
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04044*/
/*------------------------------------------------------------------ */
async function GraphDATA04044() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04044.push(vote_macron); 
    vote_lepen_04044.push(vote_lepen);
    vote_rejet_04044.push(vote_rejet);
    vote_macronpop_04044.push(vote_macronMediane);
    vote_lepenpop_04044.push(vote_lepenMediane);
    vote_rejetpop_04044.push(vote_rejetMediane);
    name_Commune_04044.push(nameCommune);
    Pourcentage_04044.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04044.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04044.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04044.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04044.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04044 = [];
const vote_lepen_04044 = [];
const vote_rejet_04044 = [];
const vote_macronpop_04044 = [];
const vote_lepenpop_04044 = [];
const vote_rejetpop_04044 = [];
const name_Commune_04044 = [];
const Pourcentage_04044 = [];
const Pourcentage_rejet_04044 = [];
const vote_gene_macron_04044 = [];
const vote_gene_lepen_04044 = [];
const vote_gene_rejet_04044 = [];

async function chartIt04044(){
    await GraphDATA04044();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04044-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04044
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04044
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04044-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04044,vote_lepen_04044,vote_rejet_04044]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04044-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04044,vote_lepenpop_04044,vote_rejetpop_04044]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04044"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04044
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04044
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04044
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04045*/
/*------------------------------------------------------------------ */
async function GraphDATA04045() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04045.push(vote_macron); 
    vote_lepen_04045.push(vote_lepen);
    vote_rejet_04045.push(vote_rejet);
    vote_macronpop_04045.push(vote_macronMediane);
    vote_lepenpop_04045.push(vote_lepenMediane);
    vote_rejetpop_04045.push(vote_rejetMediane);
    name_Commune_04045.push(nameCommune);
    Pourcentage_04045.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04045.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04045.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04045.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04045.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04045 = [];
const vote_lepen_04045 = [];
const vote_rejet_04045 = [];
const vote_macronpop_04045 = [];
const vote_lepenpop_04045 = [];
const vote_rejetpop_04045 = [];
const name_Commune_04045 = [];
const Pourcentage_04045 = [];
const Pourcentage_rejet_04045 = [];
const vote_gene_macron_04045 = [];
const vote_gene_lepen_04045 = [];
const vote_gene_rejet_04045 = [];

async function chartIt04045(){
    await GraphDATA04045();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04045-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04045
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04045
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04045-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04045,vote_lepen_04045,vote_rejet_04045]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04045-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04045,vote_lepenpop_04045,vote_rejetpop_04045]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04045"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04045
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04045
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04045
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04046*/
/*------------------------------------------------------------------ */
async function GraphDATA04046() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04046.push(vote_macron); 
    vote_lepen_04046.push(vote_lepen);
    vote_rejet_04046.push(vote_rejet);
    vote_macronpop_04046.push(vote_macronMediane);
    vote_lepenpop_04046.push(vote_lepenMediane);
    vote_rejetpop_04046.push(vote_rejetMediane);
    name_Commune_04046.push(nameCommune);
    Pourcentage_04046.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04046.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04046.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04046.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04046.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04046 = [];
const vote_lepen_04046 = [];
const vote_rejet_04046 = [];
const vote_macronpop_04046 = [];
const vote_lepenpop_04046 = [];
const vote_rejetpop_04046 = [];
const name_Commune_04046 = [];
const Pourcentage_04046 = [];
const Pourcentage_rejet_04046 = [];
const vote_gene_macron_04046 = [];
const vote_gene_lepen_04046 = [];
const vote_gene_rejet_04046 = [];

async function chartIt04046(){
    await GraphDATA04046();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04046-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04046
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04046
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04046-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04046,vote_lepen_04046,vote_rejet_04046]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04046-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04046,vote_lepenpop_04046,vote_rejetpop_04046]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04046"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04046
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04046
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04046
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04047*/
/*------------------------------------------------------------------ */
async function GraphDATA04047() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04047.push(vote_macron); 
    vote_lepen_04047.push(vote_lepen);
    vote_rejet_04047.push(vote_rejet);
    vote_macronpop_04047.push(vote_macronMediane);
    vote_lepenpop_04047.push(vote_lepenMediane);
    vote_rejetpop_04047.push(vote_rejetMediane);
    name_Commune_04047.push(nameCommune);
    Pourcentage_04047.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04047.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04047.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04047.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04047.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04047 = [];
const vote_lepen_04047 = [];
const vote_rejet_04047 = [];
const vote_macronpop_04047 = [];
const vote_lepenpop_04047 = [];
const vote_rejetpop_04047 = [];
const name_Commune_04047 = [];
const Pourcentage_04047 = [];
const Pourcentage_rejet_04047 = [];
const vote_gene_macron_04047 = [];
const vote_gene_lepen_04047 = [];
const vote_gene_rejet_04047 = [];

async function chartIt04047(){
    await GraphDATA04047();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04047-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04047
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04047
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04047-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04047,vote_lepen_04047,vote_rejet_04047]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04047-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04047,vote_lepenpop_04047,vote_rejetpop_04047]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04047"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04047
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04047
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04047
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04048*/
/*------------------------------------------------------------------ */
async function GraphDATA04048() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04048.push(vote_macron); 
    vote_lepen_04048.push(vote_lepen);
    vote_rejet_04048.push(vote_rejet);
    vote_macronpop_04048.push(vote_macronMediane);
    vote_lepenpop_04048.push(vote_lepenMediane);
    vote_rejetpop_04048.push(vote_rejetMediane);
    name_Commune_04048.push(nameCommune);
    Pourcentage_04048.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04048.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04048.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04048.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04048.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04048 = [];
const vote_lepen_04048 = [];
const vote_rejet_04048 = [];
const vote_macronpop_04048 = [];
const vote_lepenpop_04048 = [];
const vote_rejetpop_04048 = [];
const name_Commune_04048 = [];
const Pourcentage_04048 = [];
const Pourcentage_rejet_04048 = [];
const vote_gene_macron_04048 = [];
const vote_gene_lepen_04048 = [];
const vote_gene_rejet_04048 = [];

async function chartIt04048(){
    await GraphDATA04048();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04048-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04048
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04048
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04048-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04048,vote_lepen_04048,vote_rejet_04048]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04048-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04048,vote_lepenpop_04048,vote_rejetpop_04048]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04048"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04048
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04048
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04048
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04049*/
/*------------------------------------------------------------------ */
async function GraphDATA04049() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04049.push(vote_macron); 
    vote_lepen_04049.push(vote_lepen);
    vote_rejet_04049.push(vote_rejet);
    vote_macronpop_04049.push(vote_macronMediane);
    vote_lepenpop_04049.push(vote_lepenMediane);
    vote_rejetpop_04049.push(vote_rejetMediane);
    name_Commune_04049.push(nameCommune);
    Pourcentage_04049.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04049.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04049.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04049.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04049.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04049 = [];
const vote_lepen_04049 = [];
const vote_rejet_04049 = [];
const vote_macronpop_04049 = [];
const vote_lepenpop_04049 = [];
const vote_rejetpop_04049 = [];
const name_Commune_04049 = [];
const Pourcentage_04049 = [];
const Pourcentage_rejet_04049 = [];
const vote_gene_macron_04049 = [];
const vote_gene_lepen_04049 = [];
const vote_gene_rejet_04049 = [];

async function chartIt04049(){
    await GraphDATA04049();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04049-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04049
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04049
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04049-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04049,vote_lepen_04049,vote_rejet_04049]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04049-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04049,vote_lepenpop_04049,vote_rejetpop_04049]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04049"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04049
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04049
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04049
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04050*/
/*------------------------------------------------------------------ */
async function GraphDATA04050() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04050.push(vote_macron); 
    vote_lepen_04050.push(vote_lepen);
    vote_rejet_04050.push(vote_rejet);
    vote_macronpop_04050.push(vote_macronMediane);
    vote_lepenpop_04050.push(vote_lepenMediane);
    vote_rejetpop_04050.push(vote_rejetMediane);
    name_Commune_04050.push(nameCommune);
    Pourcentage_04050.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04050.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04050.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04050.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04050.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04050 = [];
const vote_lepen_04050 = [];
const vote_rejet_04050 = [];
const vote_macronpop_04050 = [];
const vote_lepenpop_04050 = [];
const vote_rejetpop_04050 = [];
const name_Commune_04050 = [];
const Pourcentage_04050 = [];
const Pourcentage_rejet_04050 = [];
const vote_gene_macron_04050 = [];
const vote_gene_lepen_04050 = [];
const vote_gene_rejet_04050 = [];

async function chartIt04050(){
    await GraphDATA04050();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04050-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04050
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04050
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04050-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04050,vote_lepen_04050,vote_rejet_04050]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04050-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04050,vote_lepenpop_04050,vote_rejetpop_04050]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04050"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04050
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04050
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04050
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04051*/
/*------------------------------------------------------------------ */
async function GraphDATA04051() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04051.push(vote_macron); 
    vote_lepen_04051.push(vote_lepen);
    vote_rejet_04051.push(vote_rejet);
    vote_macronpop_04051.push(vote_macronMediane);
    vote_lepenpop_04051.push(vote_lepenMediane);
    vote_rejetpop_04051.push(vote_rejetMediane);
    name_Commune_04051.push(nameCommune);
    Pourcentage_04051.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04051.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04051.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04051.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04051.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04051 = [];
const vote_lepen_04051 = [];
const vote_rejet_04051 = [];
const vote_macronpop_04051 = [];
const vote_lepenpop_04051 = [];
const vote_rejetpop_04051 = [];
const name_Commune_04051 = [];
const Pourcentage_04051 = [];
const Pourcentage_rejet_04051 = [];
const vote_gene_macron_04051 = [];
const vote_gene_lepen_04051 = [];
const vote_gene_rejet_04051 = [];

async function chartIt04051(){
    await GraphDATA04051();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04051-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04051
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04051
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04051-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04051,vote_lepen_04051,vote_rejet_04051]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04051-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04051,vote_lepenpop_04051,vote_rejetpop_04051]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04051"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04051
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04051
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04051
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04052*/
/*------------------------------------------------------------------ */
async function GraphDATA04052() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04052.push(vote_macron); 
    vote_lepen_04052.push(vote_lepen);
    vote_rejet_04052.push(vote_rejet);
    vote_macronpop_04052.push(vote_macronMediane);
    vote_lepenpop_04052.push(vote_lepenMediane);
    vote_rejetpop_04052.push(vote_rejetMediane);
    name_Commune_04052.push(nameCommune);
    Pourcentage_04052.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04052.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04052.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04052.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04052.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04052 = [];
const vote_lepen_04052 = [];
const vote_rejet_04052 = [];
const vote_macronpop_04052 = [];
const vote_lepenpop_04052 = [];
const vote_rejetpop_04052 = [];
const name_Commune_04052 = [];
const Pourcentage_04052 = [];
const Pourcentage_rejet_04052 = [];
const vote_gene_macron_04052 = [];
const vote_gene_lepen_04052 = [];
const vote_gene_rejet_04052 = [];

async function chartIt04052(){
    await GraphDATA04052();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04052-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04052
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04052
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04052-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04052,vote_lepen_04052,vote_rejet_04052]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04052-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04052,vote_lepenpop_04052,vote_rejetpop_04052]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04052"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04052
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04052
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04052
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04053*/
/*------------------------------------------------------------------ */
async function GraphDATA04053() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04053.push(vote_macron); 
    vote_lepen_04053.push(vote_lepen);
    vote_rejet_04053.push(vote_rejet);
    vote_macronpop_04053.push(vote_macronMediane);
    vote_lepenpop_04053.push(vote_lepenMediane);
    vote_rejetpop_04053.push(vote_rejetMediane);
    name_Commune_04053.push(nameCommune);
    Pourcentage_04053.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04053.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04053.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04053.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04053.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04053 = [];
const vote_lepen_04053 = [];
const vote_rejet_04053 = [];
const vote_macronpop_04053 = [];
const vote_lepenpop_04053 = [];
const vote_rejetpop_04053 = [];
const name_Commune_04053 = [];
const Pourcentage_04053 = [];
const Pourcentage_rejet_04053 = [];
const vote_gene_macron_04053 = [];
const vote_gene_lepen_04053 = [];
const vote_gene_rejet_04053 = [];

async function chartIt04053(){
    await GraphDATA04053();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04053-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04053
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04053
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04053-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04053,vote_lepen_04053,vote_rejet_04053]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04053-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04053,vote_lepenpop_04053,vote_rejetpop_04053]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04053"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04053
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04053
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04053
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04054*/
/*------------------------------------------------------------------ */
async function GraphDATA04054() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04054.push(vote_macron); 
    vote_lepen_04054.push(vote_lepen);
    vote_rejet_04054.push(vote_rejet);
    vote_macronpop_04054.push(vote_macronMediane);
    vote_lepenpop_04054.push(vote_lepenMediane);
    vote_rejetpop_04054.push(vote_rejetMediane);
    name_Commune_04054.push(nameCommune);
    Pourcentage_04054.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04054.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04054.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04054.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04054.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04054 = [];
const vote_lepen_04054 = [];
const vote_rejet_04054 = [];
const vote_macronpop_04054 = [];
const vote_lepenpop_04054 = [];
const vote_rejetpop_04054 = [];
const name_Commune_04054 = [];
const Pourcentage_04054 = [];
const Pourcentage_rejet_04054 = [];
const vote_gene_macron_04054 = [];
const vote_gene_lepen_04054 = [];
const vote_gene_rejet_04054 = [];

async function chartIt04054(){
    await GraphDATA04054();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04054-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04054
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04054
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04054-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04054,vote_lepen_04054,vote_rejet_04054]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04054-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04054,vote_lepenpop_04054,vote_rejetpop_04054]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04054"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04054
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04054
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04054
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04055*/
/*------------------------------------------------------------------ */
async function GraphDATA04055() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04055.push(vote_macron); 
    vote_lepen_04055.push(vote_lepen);
    vote_rejet_04055.push(vote_rejet);
    vote_macronpop_04055.push(vote_macronMediane);
    vote_lepenpop_04055.push(vote_lepenMediane);
    vote_rejetpop_04055.push(vote_rejetMediane);
    name_Commune_04055.push(nameCommune);
    Pourcentage_04055.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04055.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04055.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04055.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04055.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04055 = [];
const vote_lepen_04055 = [];
const vote_rejet_04055 = [];
const vote_macronpop_04055 = [];
const vote_lepenpop_04055 = [];
const vote_rejetpop_04055 = [];
const name_Commune_04055 = [];
const Pourcentage_04055 = [];
const Pourcentage_rejet_04055 = [];
const vote_gene_macron_04055 = [];
const vote_gene_lepen_04055 = [];
const vote_gene_rejet_04055 = [];

async function chartIt04055(){
    await GraphDATA04055();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04055-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04055
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04055
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04055-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04055,vote_lepen_04055,vote_rejet_04055]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04055-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04055,vote_lepenpop_04055,vote_rejetpop_04055]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04055"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04055
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04055
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04055
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04056*/
/*------------------------------------------------------------------ */
async function GraphDATA04056() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04056.push(vote_macron); 
    vote_lepen_04056.push(vote_lepen);
    vote_rejet_04056.push(vote_rejet);
    vote_macronpop_04056.push(vote_macronMediane);
    vote_lepenpop_04056.push(vote_lepenMediane);
    vote_rejetpop_04056.push(vote_rejetMediane);
    name_Commune_04056.push(nameCommune);
    Pourcentage_04056.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04056.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04056.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04056.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04056.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04056 = [];
const vote_lepen_04056 = [];
const vote_rejet_04056 = [];
const vote_macronpop_04056 = [];
const vote_lepenpop_04056 = [];
const vote_rejetpop_04056 = [];
const name_Commune_04056 = [];
const Pourcentage_04056 = [];
const Pourcentage_rejet_04056 = [];
const vote_gene_macron_04056 = [];
const vote_gene_lepen_04056 = [];
const vote_gene_rejet_04056 = [];

async function chartIt04056(){
    await GraphDATA04056();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04056-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04056
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04056
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04056-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04056,vote_lepen_04056,vote_rejet_04056]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04056-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04056,vote_lepenpop_04056,vote_rejetpop_04056]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04056"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04056
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04056
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04056
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04057*/
/*------------------------------------------------------------------ */
async function GraphDATA04057() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04057.push(vote_macron); 
    vote_lepen_04057.push(vote_lepen);
    vote_rejet_04057.push(vote_rejet);
    vote_macronpop_04057.push(vote_macronMediane);
    vote_lepenpop_04057.push(vote_lepenMediane);
    vote_rejetpop_04057.push(vote_rejetMediane);
    name_Commune_04057.push(nameCommune);
    Pourcentage_04057.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04057.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04057.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04057.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04057.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04057 = [];
const vote_lepen_04057 = [];
const vote_rejet_04057 = [];
const vote_macronpop_04057 = [];
const vote_lepenpop_04057 = [];
const vote_rejetpop_04057 = [];
const name_Commune_04057 = [];
const Pourcentage_04057 = [];
const Pourcentage_rejet_04057 = [];
const vote_gene_macron_04057 = [];
const vote_gene_lepen_04057 = [];
const vote_gene_rejet_04057 = [];

async function chartIt04057(){
    await GraphDATA04057();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04057-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04057
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04057
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04057-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04057,vote_lepen_04057,vote_rejet_04057]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04057-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04057,vote_lepenpop_04057,vote_rejetpop_04057]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04057"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04057
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04057
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04057
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04058*/
/*------------------------------------------------------------------ */
async function GraphDATA04058() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04058.push(vote_macron); 
    vote_lepen_04058.push(vote_lepen);
    vote_rejet_04058.push(vote_rejet);
    vote_macronpop_04058.push(vote_macronMediane);
    vote_lepenpop_04058.push(vote_lepenMediane);
    vote_rejetpop_04058.push(vote_rejetMediane);
    name_Commune_04058.push(nameCommune);
    Pourcentage_04058.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04058.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04058.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04058.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04058.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04058 = [];
const vote_lepen_04058 = [];
const vote_rejet_04058 = [];
const vote_macronpop_04058 = [];
const vote_lepenpop_04058 = [];
const vote_rejetpop_04058 = [];
const name_Commune_04058 = [];
const Pourcentage_04058 = [];
const Pourcentage_rejet_04058 = [];
const vote_gene_macron_04058 = [];
const vote_gene_lepen_04058 = [];
const vote_gene_rejet_04058 = [];

async function chartIt04058(){
    await GraphDATA04058();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04058-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04058
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04058
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04058-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04058,vote_lepen_04058,vote_rejet_04058]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04058-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04058,vote_lepenpop_04058,vote_rejetpop_04058]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04058"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04058
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04058
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04058
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04059*/
/*------------------------------------------------------------------ */
async function GraphDATA04059() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04059.push(vote_macron); 
    vote_lepen_04059.push(vote_lepen);
    vote_rejet_04059.push(vote_rejet);
    vote_macronpop_04059.push(vote_macronMediane);
    vote_lepenpop_04059.push(vote_lepenMediane);
    vote_rejetpop_04059.push(vote_rejetMediane);
    name_Commune_04059.push(nameCommune);
    Pourcentage_04059.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04059.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04059.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04059.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04059.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04059 = [];
const vote_lepen_04059 = [];
const vote_rejet_04059 = [];
const vote_macronpop_04059 = [];
const vote_lepenpop_04059 = [];
const vote_rejetpop_04059 = [];
const name_Commune_04059 = [];
const Pourcentage_04059 = [];
const Pourcentage_rejet_04059 = [];
const vote_gene_macron_04059 = [];
const vote_gene_lepen_04059 = [];
const vote_gene_rejet_04059 = [];

async function chartIt04059(){
    await GraphDATA04059();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04059-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04059
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04059
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04059-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04059,vote_lepen_04059,vote_rejet_04059]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04059-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04059,vote_lepenpop_04059,vote_rejetpop_04059]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04059"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04059
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04059
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04059
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04060*/
/*------------------------------------------------------------------ */
async function GraphDATA04060() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04060.push(vote_macron); 
    vote_lepen_04060.push(vote_lepen);
    vote_rejet_04060.push(vote_rejet);
    vote_macronpop_04060.push(vote_macronMediane);
    vote_lepenpop_04060.push(vote_lepenMediane);
    vote_rejetpop_04060.push(vote_rejetMediane);
    name_Commune_04060.push(nameCommune);
    Pourcentage_04060.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04060.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04060.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04060.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04060.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04060 = [];
const vote_lepen_04060 = [];
const vote_rejet_04060 = [];
const vote_macronpop_04060 = [];
const vote_lepenpop_04060 = [];
const vote_rejetpop_04060 = [];
const name_Commune_04060 = [];
const Pourcentage_04060 = [];
const Pourcentage_rejet_04060 = [];
const vote_gene_macron_04060 = [];
const vote_gene_lepen_04060 = [];
const vote_gene_rejet_04060 = [];

async function chartIt04060(){
    await GraphDATA04060();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04060-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04060
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04060
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04060-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04060,vote_lepen_04060,vote_rejet_04060]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04060-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04060,vote_lepenpop_04060,vote_rejetpop_04060]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04060"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04060
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04060
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04060
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04061*/
/*------------------------------------------------------------------ */
async function GraphDATA04061() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04061.push(vote_macron); 
    vote_lepen_04061.push(vote_lepen);
    vote_rejet_04061.push(vote_rejet);
    vote_macronpop_04061.push(vote_macronMediane);
    vote_lepenpop_04061.push(vote_lepenMediane);
    vote_rejetpop_04061.push(vote_rejetMediane);
    name_Commune_04061.push(nameCommune);
    Pourcentage_04061.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04061.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04061.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04061.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04061.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04061 = [];
const vote_lepen_04061 = [];
const vote_rejet_04061 = [];
const vote_macronpop_04061 = [];
const vote_lepenpop_04061 = [];
const vote_rejetpop_04061 = [];
const name_Commune_04061 = [];
const Pourcentage_04061 = [];
const Pourcentage_rejet_04061 = [];
const vote_gene_macron_04061 = [];
const vote_gene_lepen_04061 = [];
const vote_gene_rejet_04061 = [];

async function chartIt04061(){
    await GraphDATA04061();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04061-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04061
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04061
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04061-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04061,vote_lepen_04061,vote_rejet_04061]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04061-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04061,vote_lepenpop_04061,vote_rejetpop_04061]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04061"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04061
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04061
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04061
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04062*/
/*------------------------------------------------------------------ */
async function GraphDATA04062() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04062.push(vote_macron); 
    vote_lepen_04062.push(vote_lepen);
    vote_rejet_04062.push(vote_rejet);
    vote_macronpop_04062.push(vote_macronMediane);
    vote_lepenpop_04062.push(vote_lepenMediane);
    vote_rejetpop_04062.push(vote_rejetMediane);
    name_Commune_04062.push(nameCommune);
    Pourcentage_04062.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04062.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04062.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04062.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04062.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04062 = [];
const vote_lepen_04062 = [];
const vote_rejet_04062 = [];
const vote_macronpop_04062 = [];
const vote_lepenpop_04062 = [];
const vote_rejetpop_04062 = [];
const name_Commune_04062 = [];
const Pourcentage_04062 = [];
const Pourcentage_rejet_04062 = [];
const vote_gene_macron_04062 = [];
const vote_gene_lepen_04062 = [];
const vote_gene_rejet_04062 = [];

async function chartIt04062(){
    await GraphDATA04062();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04062-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04062
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04062
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04062-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04062,vote_lepen_04062,vote_rejet_04062]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04062-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04062,vote_lepenpop_04062,vote_rejetpop_04062]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04062"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04062
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04062
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04062
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04063*/
/*------------------------------------------------------------------ */
async function GraphDATA04063() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04063.push(vote_macron); 
    vote_lepen_04063.push(vote_lepen);
    vote_rejet_04063.push(vote_rejet);
    vote_macronpop_04063.push(vote_macronMediane);
    vote_lepenpop_04063.push(vote_lepenMediane);
    vote_rejetpop_04063.push(vote_rejetMediane);
    name_Commune_04063.push(nameCommune);
    Pourcentage_04063.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04063.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04063.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04063.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04063.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04063 = [];
const vote_lepen_04063 = [];
const vote_rejet_04063 = [];
const vote_macronpop_04063 = [];
const vote_lepenpop_04063 = [];
const vote_rejetpop_04063 = [];
const name_Commune_04063 = [];
const Pourcentage_04063 = [];
const Pourcentage_rejet_04063 = [];
const vote_gene_macron_04063 = [];
const vote_gene_lepen_04063 = [];
const vote_gene_rejet_04063 = [];

async function chartIt04063(){
    await GraphDATA04063();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04063-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04063
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04063
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04063-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04063,vote_lepen_04063,vote_rejet_04063]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04063-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04063,vote_lepenpop_04063,vote_rejetpop_04063]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04063"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04063
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04063
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04063
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04064*/
/*------------------------------------------------------------------ */
async function GraphDATA04064() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04064.push(vote_macron); 
    vote_lepen_04064.push(vote_lepen);
    vote_rejet_04064.push(vote_rejet);
    vote_macronpop_04064.push(vote_macronMediane);
    vote_lepenpop_04064.push(vote_lepenMediane);
    vote_rejetpop_04064.push(vote_rejetMediane);
    name_Commune_04064.push(nameCommune);
    Pourcentage_04064.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04064.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04064.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04064.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04064.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04064 = [];
const vote_lepen_04064 = [];
const vote_rejet_04064 = [];
const vote_macronpop_04064 = [];
const vote_lepenpop_04064 = [];
const vote_rejetpop_04064 = [];
const name_Commune_04064 = [];
const Pourcentage_04064 = [];
const Pourcentage_rejet_04064 = [];
const vote_gene_macron_04064 = [];
const vote_gene_lepen_04064 = [];
const vote_gene_rejet_04064 = [];

async function chartIt04064(){
    await GraphDATA04064();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04064-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04064
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04064
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04064-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04064,vote_lepen_04064,vote_rejet_04064]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04064-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04064,vote_lepenpop_04064,vote_rejetpop_04064]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04064"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04064
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04064
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04064
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04065*/
/*------------------------------------------------------------------ */
async function GraphDATA04065() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04065.push(vote_macron); 
    vote_lepen_04065.push(vote_lepen);
    vote_rejet_04065.push(vote_rejet);
    vote_macronpop_04065.push(vote_macronMediane);
    vote_lepenpop_04065.push(vote_lepenMediane);
    vote_rejetpop_04065.push(vote_rejetMediane);
    name_Commune_04065.push(nameCommune);
    Pourcentage_04065.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04065.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04065.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04065.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04065.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04065 = [];
const vote_lepen_04065 = [];
const vote_rejet_04065 = [];
const vote_macronpop_04065 = [];
const vote_lepenpop_04065 = [];
const vote_rejetpop_04065 = [];
const name_Commune_04065 = [];
const Pourcentage_04065 = [];
const Pourcentage_rejet_04065 = [];
const vote_gene_macron_04065 = [];
const vote_gene_lepen_04065 = [];
const vote_gene_rejet_04065 = [];

async function chartIt04065(){
    await GraphDATA04065();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04065-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04065
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04065
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04065-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04065,vote_lepen_04065,vote_rejet_04065]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04065-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04065,vote_lepenpop_04065,vote_rejetpop_04065]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04065"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04065
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04065
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04065
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04066*/
/*------------------------------------------------------------------ */
async function GraphDATA04066() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04066.push(vote_macron); 
    vote_lepen_04066.push(vote_lepen);
    vote_rejet_04066.push(vote_rejet);
    vote_macronpop_04066.push(vote_macronMediane);
    vote_lepenpop_04066.push(vote_lepenMediane);
    vote_rejetpop_04066.push(vote_rejetMediane);
    name_Commune_04066.push(nameCommune);
    Pourcentage_04066.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04066.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04066.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04066.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04066.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04066 = [];
const vote_lepen_04066 = [];
const vote_rejet_04066 = [];
const vote_macronpop_04066 = [];
const vote_lepenpop_04066 = [];
const vote_rejetpop_04066 = [];
const name_Commune_04066 = [];
const Pourcentage_04066 = [];
const Pourcentage_rejet_04066 = [];
const vote_gene_macron_04066 = [];
const vote_gene_lepen_04066 = [];
const vote_gene_rejet_04066 = [];

async function chartIt04066(){
    await GraphDATA04066();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04066-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04066
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04066
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04066-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04066,vote_lepen_04066,vote_rejet_04066]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04066-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04066,vote_lepenpop_04066,vote_rejetpop_04066]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04066"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04066
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04066
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04066
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04067*/
/*------------------------------------------------------------------ */
async function GraphDATA04067() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04067.push(vote_macron); 
    vote_lepen_04067.push(vote_lepen);
    vote_rejet_04067.push(vote_rejet);
    vote_macronpop_04067.push(vote_macronMediane);
    vote_lepenpop_04067.push(vote_lepenMediane);
    vote_rejetpop_04067.push(vote_rejetMediane);
    name_Commune_04067.push(nameCommune);
    Pourcentage_04067.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04067.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04067.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04067.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04067.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04067 = [];
const vote_lepen_04067 = [];
const vote_rejet_04067 = [];
const vote_macronpop_04067 = [];
const vote_lepenpop_04067 = [];
const vote_rejetpop_04067 = [];
const name_Commune_04067 = [];
const Pourcentage_04067 = [];
const Pourcentage_rejet_04067 = [];
const vote_gene_macron_04067 = [];
const vote_gene_lepen_04067 = [];
const vote_gene_rejet_04067 = [];

async function chartIt04067(){
    await GraphDATA04067();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04067-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04067
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04067
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04067-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04067,vote_lepen_04067,vote_rejet_04067]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04067-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04067,vote_lepenpop_04067,vote_rejetpop_04067]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04067"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04067
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04067
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04067
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04068*/
/*------------------------------------------------------------------ */
async function GraphDATA04068() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04068.push(vote_macron); 
    vote_lepen_04068.push(vote_lepen);
    vote_rejet_04068.push(vote_rejet);
    vote_macronpop_04068.push(vote_macronMediane);
    vote_lepenpop_04068.push(vote_lepenMediane);
    vote_rejetpop_04068.push(vote_rejetMediane);
    name_Commune_04068.push(nameCommune);
    Pourcentage_04068.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04068.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04068.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04068.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04068.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04068 = [];
const vote_lepen_04068 = [];
const vote_rejet_04068 = [];
const vote_macronpop_04068 = [];
const vote_lepenpop_04068 = [];
const vote_rejetpop_04068 = [];
const name_Commune_04068 = [];
const Pourcentage_04068 = [];
const Pourcentage_rejet_04068 = [];
const vote_gene_macron_04068 = [];
const vote_gene_lepen_04068 = [];
const vote_gene_rejet_04068 = [];

async function chartIt04068(){
    await GraphDATA04068();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04068-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04068
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04068
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04068-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04068,vote_lepen_04068,vote_rejet_04068]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04068-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04068,vote_lepenpop_04068,vote_rejetpop_04068]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04068"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04068
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04068
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04068
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04069*/
/*------------------------------------------------------------------ */
async function GraphDATA04069() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04069.push(vote_macron); 
    vote_lepen_04069.push(vote_lepen);
    vote_rejet_04069.push(vote_rejet);
    vote_macronpop_04069.push(vote_macronMediane);
    vote_lepenpop_04069.push(vote_lepenMediane);
    vote_rejetpop_04069.push(vote_rejetMediane);
    name_Commune_04069.push(nameCommune);
    Pourcentage_04069.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04069.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04069.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04069.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04069.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04069 = [];
const vote_lepen_04069 = [];
const vote_rejet_04069 = [];
const vote_macronpop_04069 = [];
const vote_lepenpop_04069 = [];
const vote_rejetpop_04069 = [];
const name_Commune_04069 = [];
const Pourcentage_04069 = [];
const Pourcentage_rejet_04069 = [];
const vote_gene_macron_04069 = [];
const vote_gene_lepen_04069 = [];
const vote_gene_rejet_04069 = [];

async function chartIt04069(){
    await GraphDATA04069();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04069-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04069
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04069
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04069-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04069,vote_lepen_04069,vote_rejet_04069]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04069-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04069,vote_lepenpop_04069,vote_rejetpop_04069]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04069"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04069
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04069
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04069
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04070*/
/*------------------------------------------------------------------ */
async function GraphDATA04070() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04070.push(vote_macron); 
    vote_lepen_04070.push(vote_lepen);
    vote_rejet_04070.push(vote_rejet);
    vote_macronpop_04070.push(vote_macronMediane);
    vote_lepenpop_04070.push(vote_lepenMediane);
    vote_rejetpop_04070.push(vote_rejetMediane);
    name_Commune_04070.push(nameCommune);
    Pourcentage_04070.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04070.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04070.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04070.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04070.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04070 = [];
const vote_lepen_04070 = [];
const vote_rejet_04070 = [];
const vote_macronpop_04070 = [];
const vote_lepenpop_04070 = [];
const vote_rejetpop_04070 = [];
const name_Commune_04070 = [];
const Pourcentage_04070 = [];
const Pourcentage_rejet_04070 = [];
const vote_gene_macron_04070 = [];
const vote_gene_lepen_04070 = [];
const vote_gene_rejet_04070 = [];

async function chartIt04070(){
    await GraphDATA04070();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04070-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04070
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04070
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04070-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04070,vote_lepen_04070,vote_rejet_04070]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04070-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04070,vote_lepenpop_04070,vote_rejetpop_04070]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04070"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04070
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04070
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04070
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04071*/
/*------------------------------------------------------------------ */
async function GraphDATA04071() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04071.push(vote_macron); 
    vote_lepen_04071.push(vote_lepen);
    vote_rejet_04071.push(vote_rejet);
    vote_macronpop_04071.push(vote_macronMediane);
    vote_lepenpop_04071.push(vote_lepenMediane);
    vote_rejetpop_04071.push(vote_rejetMediane);
    name_Commune_04071.push(nameCommune);
    Pourcentage_04071.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04071.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04071.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04071.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04071.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04071 = [];
const vote_lepen_04071 = [];
const vote_rejet_04071 = [];
const vote_macronpop_04071 = [];
const vote_lepenpop_04071 = [];
const vote_rejetpop_04071 = [];
const name_Commune_04071 = [];
const Pourcentage_04071 = [];
const Pourcentage_rejet_04071 = [];
const vote_gene_macron_04071 = [];
const vote_gene_lepen_04071 = [];
const vote_gene_rejet_04071 = [];

async function chartIt04071(){
    await GraphDATA04071();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04071-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04071
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04071
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04071-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04071,vote_lepen_04071,vote_rejet_04071]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04071-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04071,vote_lepenpop_04071,vote_rejetpop_04071]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04071"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04071
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04071
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04071
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04072*/
/*------------------------------------------------------------------ */
async function GraphDATA04072() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04072.push(vote_macron); 
    vote_lepen_04072.push(vote_lepen);
    vote_rejet_04072.push(vote_rejet);
    vote_macronpop_04072.push(vote_macronMediane);
    vote_lepenpop_04072.push(vote_lepenMediane);
    vote_rejetpop_04072.push(vote_rejetMediane);
    name_Commune_04072.push(nameCommune);
    Pourcentage_04072.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04072.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04072.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04072.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04072.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04072 = [];
const vote_lepen_04072 = [];
const vote_rejet_04072 = [];
const vote_macronpop_04072 = [];
const vote_lepenpop_04072 = [];
const vote_rejetpop_04072 = [];
const name_Commune_04072 = [];
const Pourcentage_04072 = [];
const Pourcentage_rejet_04072 = [];
const vote_gene_macron_04072 = [];
const vote_gene_lepen_04072 = [];
const vote_gene_rejet_04072 = [];

async function chartIt04072(){
    await GraphDATA04072();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04072-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04072
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04072
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04072-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04072,vote_lepen_04072,vote_rejet_04072]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04072-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04072,vote_lepenpop_04072,vote_rejetpop_04072]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04072"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04072
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04072
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04072
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04073*/
/*------------------------------------------------------------------ */
async function GraphDATA04073() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04073.push(vote_macron); 
    vote_lepen_04073.push(vote_lepen);
    vote_rejet_04073.push(vote_rejet);
    vote_macronpop_04073.push(vote_macronMediane);
    vote_lepenpop_04073.push(vote_lepenMediane);
    vote_rejetpop_04073.push(vote_rejetMediane);
    name_Commune_04073.push(nameCommune);
    Pourcentage_04073.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04073.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04073.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04073.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04073.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04073 = [];
const vote_lepen_04073 = [];
const vote_rejet_04073 = [];
const vote_macronpop_04073 = [];
const vote_lepenpop_04073 = [];
const vote_rejetpop_04073 = [];
const name_Commune_04073 = [];
const Pourcentage_04073 = [];
const Pourcentage_rejet_04073 = [];
const vote_gene_macron_04073 = [];
const vote_gene_lepen_04073 = [];
const vote_gene_rejet_04073 = [];

async function chartIt04073(){
    await GraphDATA04073();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04073-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04073
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04073
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04073-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04073,vote_lepen_04073,vote_rejet_04073]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04073-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04073,vote_lepenpop_04073,vote_rejetpop_04073]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04073"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04073
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04073
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04073
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04074*/
/*------------------------------------------------------------------ */
async function GraphDATA04074() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04074.push(vote_macron); 
    vote_lepen_04074.push(vote_lepen);
    vote_rejet_04074.push(vote_rejet);
    vote_macronpop_04074.push(vote_macronMediane);
    vote_lepenpop_04074.push(vote_lepenMediane);
    vote_rejetpop_04074.push(vote_rejetMediane);
    name_Commune_04074.push(nameCommune);
    Pourcentage_04074.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04074.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04074.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04074.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04074.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04074 = [];
const vote_lepen_04074 = [];
const vote_rejet_04074 = [];
const vote_macronpop_04074 = [];
const vote_lepenpop_04074 = [];
const vote_rejetpop_04074 = [];
const name_Commune_04074 = [];
const Pourcentage_04074 = [];
const Pourcentage_rejet_04074 = [];
const vote_gene_macron_04074 = [];
const vote_gene_lepen_04074 = [];
const vote_gene_rejet_04074 = [];

async function chartIt04074(){
    await GraphDATA04074();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04074-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04074
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04074
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04074-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04074,vote_lepen_04074,vote_rejet_04074]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04074-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04074,vote_lepenpop_04074,vote_rejetpop_04074]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04074"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04074
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04074
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04074
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04075*/
/*------------------------------------------------------------------ */
async function GraphDATA04075() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04075.push(vote_macron); 
    vote_lepen_04075.push(vote_lepen);
    vote_rejet_04075.push(vote_rejet);
    vote_macronpop_04075.push(vote_macronMediane);
    vote_lepenpop_04075.push(vote_lepenMediane);
    vote_rejetpop_04075.push(vote_rejetMediane);
    name_Commune_04075.push(nameCommune);
    Pourcentage_04075.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04075.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04075.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04075.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04075.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04075 = [];
const vote_lepen_04075 = [];
const vote_rejet_04075 = [];
const vote_macronpop_04075 = [];
const vote_lepenpop_04075 = [];
const vote_rejetpop_04075 = [];
const name_Commune_04075 = [];
const Pourcentage_04075 = [];
const Pourcentage_rejet_04075 = [];
const vote_gene_macron_04075 = [];
const vote_gene_lepen_04075 = [];
const vote_gene_rejet_04075 = [];

async function chartIt04075(){
    await GraphDATA04075();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04075-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04075
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04075
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04075-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04075,vote_lepen_04075,vote_rejet_04075]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04075-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04075,vote_lepenpop_04075,vote_rejetpop_04075]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04075"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04075
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04075
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04075
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04076*/
/*------------------------------------------------------------------ */
async function GraphDATA04076() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04076.push(vote_macron); 
    vote_lepen_04076.push(vote_lepen);
    vote_rejet_04076.push(vote_rejet);
    vote_macronpop_04076.push(vote_macronMediane);
    vote_lepenpop_04076.push(vote_lepenMediane);
    vote_rejetpop_04076.push(vote_rejetMediane);
    name_Commune_04076.push(nameCommune);
    Pourcentage_04076.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04076.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04076.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04076.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04076.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04076 = [];
const vote_lepen_04076 = [];
const vote_rejet_04076 = [];
const vote_macronpop_04076 = [];
const vote_lepenpop_04076 = [];
const vote_rejetpop_04076 = [];
const name_Commune_04076 = [];
const Pourcentage_04076 = [];
const Pourcentage_rejet_04076 = [];
const vote_gene_macron_04076 = [];
const vote_gene_lepen_04076 = [];
const vote_gene_rejet_04076 = [];

async function chartIt04076(){
    await GraphDATA04076();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04076-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04076
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04076
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04076-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04076,vote_lepen_04076,vote_rejet_04076]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04076-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04076,vote_lepenpop_04076,vote_rejetpop_04076]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04076"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04076
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04076
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04076
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04077*/
/*------------------------------------------------------------------ */
async function GraphDATA04077() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04077.push(vote_macron); 
    vote_lepen_04077.push(vote_lepen);
    vote_rejet_04077.push(vote_rejet);
    vote_macronpop_04077.push(vote_macronMediane);
    vote_lepenpop_04077.push(vote_lepenMediane);
    vote_rejetpop_04077.push(vote_rejetMediane);
    name_Commune_04077.push(nameCommune);
    Pourcentage_04077.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04077.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04077.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04077.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04077.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04077 = [];
const vote_lepen_04077 = [];
const vote_rejet_04077 = [];
const vote_macronpop_04077 = [];
const vote_lepenpop_04077 = [];
const vote_rejetpop_04077 = [];
const name_Commune_04077 = [];
const Pourcentage_04077 = [];
const Pourcentage_rejet_04077 = [];
const vote_gene_macron_04077 = [];
const vote_gene_lepen_04077 = [];
const vote_gene_rejet_04077 = [];

async function chartIt04077(){
    await GraphDATA04077();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04077-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04077
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04077
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04077-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04077,vote_lepen_04077,vote_rejet_04077]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04077-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04077,vote_lepenpop_04077,vote_rejetpop_04077]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04077"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04077
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04077
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04077
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04078*/
/*------------------------------------------------------------------ */
async function GraphDATA04078() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04078.push(vote_macron); 
    vote_lepen_04078.push(vote_lepen);
    vote_rejet_04078.push(vote_rejet);
    vote_macronpop_04078.push(vote_macronMediane);
    vote_lepenpop_04078.push(vote_lepenMediane);
    vote_rejetpop_04078.push(vote_rejetMediane);
    name_Commune_04078.push(nameCommune);
    Pourcentage_04078.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04078.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04078.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04078.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04078.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04078 = [];
const vote_lepen_04078 = [];
const vote_rejet_04078 = [];
const vote_macronpop_04078 = [];
const vote_lepenpop_04078 = [];
const vote_rejetpop_04078 = [];
const name_Commune_04078 = [];
const Pourcentage_04078 = [];
const Pourcentage_rejet_04078 = [];
const vote_gene_macron_04078 = [];
const vote_gene_lepen_04078 = [];
const vote_gene_rejet_04078 = [];

async function chartIt04078(){
    await GraphDATA04078();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04078-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04078
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04078
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04078-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04078,vote_lepen_04078,vote_rejet_04078]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04078-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04078,vote_lepenpop_04078,vote_rejetpop_04078]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04078"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04078
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04078
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04078
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04079*/
/*------------------------------------------------------------------ */
async function GraphDATA04079() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04079.push(vote_macron); 
    vote_lepen_04079.push(vote_lepen);
    vote_rejet_04079.push(vote_rejet);
    vote_macronpop_04079.push(vote_macronMediane);
    vote_lepenpop_04079.push(vote_lepenMediane);
    vote_rejetpop_04079.push(vote_rejetMediane);
    name_Commune_04079.push(nameCommune);
    Pourcentage_04079.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04079.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04079.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04079.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04079.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04079 = [];
const vote_lepen_04079 = [];
const vote_rejet_04079 = [];
const vote_macronpop_04079 = [];
const vote_lepenpop_04079 = [];
const vote_rejetpop_04079 = [];
const name_Commune_04079 = [];
const Pourcentage_04079 = [];
const Pourcentage_rejet_04079 = [];
const vote_gene_macron_04079 = [];
const vote_gene_lepen_04079 = [];
const vote_gene_rejet_04079 = [];

async function chartIt04079(){
    await GraphDATA04079();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04079-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04079
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04079
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04079-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04079,vote_lepen_04079,vote_rejet_04079]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04079-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04079,vote_lepenpop_04079,vote_rejetpop_04079]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04079"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04079
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04079
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04079
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04080*/
/*------------------------------------------------------------------ */
async function GraphDATA04080() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04080.push(vote_macron); 
    vote_lepen_04080.push(vote_lepen);
    vote_rejet_04080.push(vote_rejet);
    vote_macronpop_04080.push(vote_macronMediane);
    vote_lepenpop_04080.push(vote_lepenMediane);
    vote_rejetpop_04080.push(vote_rejetMediane);
    name_Commune_04080.push(nameCommune);
    Pourcentage_04080.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04080.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04080.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04080.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04080.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04080 = [];
const vote_lepen_04080 = [];
const vote_rejet_04080 = [];
const vote_macronpop_04080 = [];
const vote_lepenpop_04080 = [];
const vote_rejetpop_04080 = [];
const name_Commune_04080 = [];
const Pourcentage_04080 = [];
const Pourcentage_rejet_04080 = [];
const vote_gene_macron_04080 = [];
const vote_gene_lepen_04080 = [];
const vote_gene_rejet_04080 = [];

async function chartIt04080(){
    await GraphDATA04080();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04080-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04080
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04080
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04080-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04080,vote_lepen_04080,vote_rejet_04080]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04080-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04080,vote_lepenpop_04080,vote_rejetpop_04080]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04080"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04080
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04080
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04080
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04081*/
/*------------------------------------------------------------------ */
async function GraphDATA04081() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04081.push(vote_macron); 
    vote_lepen_04081.push(vote_lepen);
    vote_rejet_04081.push(vote_rejet);
    vote_macronpop_04081.push(vote_macronMediane);
    vote_lepenpop_04081.push(vote_lepenMediane);
    vote_rejetpop_04081.push(vote_rejetMediane);
    name_Commune_04081.push(nameCommune);
    Pourcentage_04081.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04081.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04081.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04081.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04081.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04081 = [];
const vote_lepen_04081 = [];
const vote_rejet_04081 = [];
const vote_macronpop_04081 = [];
const vote_lepenpop_04081 = [];
const vote_rejetpop_04081 = [];
const name_Commune_04081 = [];
const Pourcentage_04081 = [];
const Pourcentage_rejet_04081 = [];
const vote_gene_macron_04081 = [];
const vote_gene_lepen_04081 = [];
const vote_gene_rejet_04081 = [];

async function chartIt04081(){
    await GraphDATA04081();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04081-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04081
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04081
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04081-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04081,vote_lepen_04081,vote_rejet_04081]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04081-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04081,vote_lepenpop_04081,vote_rejetpop_04081]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04081"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04081
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04081
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04081
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04082*/
/*------------------------------------------------------------------ */
async function GraphDATA04082() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04082.push(vote_macron); 
    vote_lepen_04082.push(vote_lepen);
    vote_rejet_04082.push(vote_rejet);
    vote_macronpop_04082.push(vote_macronMediane);
    vote_lepenpop_04082.push(vote_lepenMediane);
    vote_rejetpop_04082.push(vote_rejetMediane);
    name_Commune_04082.push(nameCommune);
    Pourcentage_04082.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04082.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04082.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04082.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04082.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04082 = [];
const vote_lepen_04082 = [];
const vote_rejet_04082 = [];
const vote_macronpop_04082 = [];
const vote_lepenpop_04082 = [];
const vote_rejetpop_04082 = [];
const name_Commune_04082 = [];
const Pourcentage_04082 = [];
const Pourcentage_rejet_04082 = [];
const vote_gene_macron_04082 = [];
const vote_gene_lepen_04082 = [];
const vote_gene_rejet_04082 = [];

async function chartIt04082(){
    await GraphDATA04082();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04082-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04082
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04082
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04082-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04082,vote_lepen_04082,vote_rejet_04082]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04082-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04082,vote_lepenpop_04082,vote_rejetpop_04082]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04082"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04082
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04082
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04082
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04083*/
/*------------------------------------------------------------------ */
async function GraphDATA04083() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04083.push(vote_macron); 
    vote_lepen_04083.push(vote_lepen);
    vote_rejet_04083.push(vote_rejet);
    vote_macronpop_04083.push(vote_macronMediane);
    vote_lepenpop_04083.push(vote_lepenMediane);
    vote_rejetpop_04083.push(vote_rejetMediane);
    name_Commune_04083.push(nameCommune);
    Pourcentage_04083.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04083.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04083.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04083.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04083.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04083 = [];
const vote_lepen_04083 = [];
const vote_rejet_04083 = [];
const vote_macronpop_04083 = [];
const vote_lepenpop_04083 = [];
const vote_rejetpop_04083 = [];
const name_Commune_04083 = [];
const Pourcentage_04083 = [];
const Pourcentage_rejet_04083 = [];
const vote_gene_macron_04083 = [];
const vote_gene_lepen_04083 = [];
const vote_gene_rejet_04083 = [];

async function chartIt04083(){
    await GraphDATA04083();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04083-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04083
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04083
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04083-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04083,vote_lepen_04083,vote_rejet_04083]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04083-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04083,vote_lepenpop_04083,vote_rejetpop_04083]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04083"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04083
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04083
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04083
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04084*/
/*------------------------------------------------------------------ */
async function GraphDATA04084() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04084.push(vote_macron); 
    vote_lepen_04084.push(vote_lepen);
    vote_rejet_04084.push(vote_rejet);
    vote_macronpop_04084.push(vote_macronMediane);
    vote_lepenpop_04084.push(vote_lepenMediane);
    vote_rejetpop_04084.push(vote_rejetMediane);
    name_Commune_04084.push(nameCommune);
    Pourcentage_04084.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04084.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04084.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04084.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04084.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04084 = [];
const vote_lepen_04084 = [];
const vote_rejet_04084 = [];
const vote_macronpop_04084 = [];
const vote_lepenpop_04084 = [];
const vote_rejetpop_04084 = [];
const name_Commune_04084 = [];
const Pourcentage_04084 = [];
const Pourcentage_rejet_04084 = [];
const vote_gene_macron_04084 = [];
const vote_gene_lepen_04084 = [];
const vote_gene_rejet_04084 = [];

async function chartIt04084(){
    await GraphDATA04084();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04084-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04084
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04084
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04084-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04084,vote_lepen_04084,vote_rejet_04084]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04084-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04084,vote_lepenpop_04084,vote_rejetpop_04084]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04084"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04084
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04084
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04084
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04085*/
/*------------------------------------------------------------------ */
async function GraphDATA04085() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04085.push(vote_macron); 
    vote_lepen_04085.push(vote_lepen);
    vote_rejet_04085.push(vote_rejet);
    vote_macronpop_04085.push(vote_macronMediane);
    vote_lepenpop_04085.push(vote_lepenMediane);
    vote_rejetpop_04085.push(vote_rejetMediane);
    name_Commune_04085.push(nameCommune);
    Pourcentage_04085.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04085.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04085.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04085.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04085.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04085 = [];
const vote_lepen_04085 = [];
const vote_rejet_04085 = [];
const vote_macronpop_04085 = [];
const vote_lepenpop_04085 = [];
const vote_rejetpop_04085 = [];
const name_Commune_04085 = [];
const Pourcentage_04085 = [];
const Pourcentage_rejet_04085 = [];
const vote_gene_macron_04085 = [];
const vote_gene_lepen_04085 = [];
const vote_gene_rejet_04085 = [];

async function chartIt04085(){
    await GraphDATA04085();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04085-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04085
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04085
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04085-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04085,vote_lepen_04085,vote_rejet_04085]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04085-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04085,vote_lepenpop_04085,vote_rejetpop_04085]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04085"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04085
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04085
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04085
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04086*/
/*------------------------------------------------------------------ */
async function GraphDATA04086() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04086.push(vote_macron); 
    vote_lepen_04086.push(vote_lepen);
    vote_rejet_04086.push(vote_rejet);
    vote_macronpop_04086.push(vote_macronMediane);
    vote_lepenpop_04086.push(vote_lepenMediane);
    vote_rejetpop_04086.push(vote_rejetMediane);
    name_Commune_04086.push(nameCommune);
    Pourcentage_04086.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04086.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04086.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04086.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04086.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04086 = [];
const vote_lepen_04086 = [];
const vote_rejet_04086 = [];
const vote_macronpop_04086 = [];
const vote_lepenpop_04086 = [];
const vote_rejetpop_04086 = [];
const name_Commune_04086 = [];
const Pourcentage_04086 = [];
const Pourcentage_rejet_04086 = [];
const vote_gene_macron_04086 = [];
const vote_gene_lepen_04086 = [];
const vote_gene_rejet_04086 = [];

async function chartIt04086(){
    await GraphDATA04086();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04086-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04086
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04086
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04086-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04086,vote_lepen_04086,vote_rejet_04086]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04086-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04086,vote_lepenpop_04086,vote_rejetpop_04086]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04086"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04086
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04086
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04086
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04087*/
/*------------------------------------------------------------------ */
async function GraphDATA04087() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04087.push(vote_macron); 
    vote_lepen_04087.push(vote_lepen);
    vote_rejet_04087.push(vote_rejet);
    vote_macronpop_04087.push(vote_macronMediane);
    vote_lepenpop_04087.push(vote_lepenMediane);
    vote_rejetpop_04087.push(vote_rejetMediane);
    name_Commune_04087.push(nameCommune);
    Pourcentage_04087.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04087.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04087.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04087.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04087.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04087 = [];
const vote_lepen_04087 = [];
const vote_rejet_04087 = [];
const vote_macronpop_04087 = [];
const vote_lepenpop_04087 = [];
const vote_rejetpop_04087 = [];
const name_Commune_04087 = [];
const Pourcentage_04087 = [];
const Pourcentage_rejet_04087 = [];
const vote_gene_macron_04087 = [];
const vote_gene_lepen_04087 = [];
const vote_gene_rejet_04087 = [];

async function chartIt04087(){
    await GraphDATA04087();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04087-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04087
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04087
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04087-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04087,vote_lepen_04087,vote_rejet_04087]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04087-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04087,vote_lepenpop_04087,vote_rejetpop_04087]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04087"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04087
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04087
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04087
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04088*/
/*------------------------------------------------------------------ */
async function GraphDATA04088() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04088.push(vote_macron); 
    vote_lepen_04088.push(vote_lepen);
    vote_rejet_04088.push(vote_rejet);
    vote_macronpop_04088.push(vote_macronMediane);
    vote_lepenpop_04088.push(vote_lepenMediane);
    vote_rejetpop_04088.push(vote_rejetMediane);
    name_Commune_04088.push(nameCommune);
    Pourcentage_04088.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04088.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04088.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04088.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04088.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04088 = [];
const vote_lepen_04088 = [];
const vote_rejet_04088 = [];
const vote_macronpop_04088 = [];
const vote_lepenpop_04088 = [];
const vote_rejetpop_04088 = [];
const name_Commune_04088 = [];
const Pourcentage_04088 = [];
const Pourcentage_rejet_04088 = [];
const vote_gene_macron_04088 = [];
const vote_gene_lepen_04088 = [];
const vote_gene_rejet_04088 = [];

async function chartIt04088(){
    await GraphDATA04088();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04088-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04088
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04088
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04088-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04088,vote_lepen_04088,vote_rejet_04088]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04088-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04088,vote_lepenpop_04088,vote_rejetpop_04088]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04088"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04088
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04088
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04088
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04089*/
/*------------------------------------------------------------------ */
async function GraphDATA04089() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04089.push(vote_macron); 
    vote_lepen_04089.push(vote_lepen);
    vote_rejet_04089.push(vote_rejet);
    vote_macronpop_04089.push(vote_macronMediane);
    vote_lepenpop_04089.push(vote_lepenMediane);
    vote_rejetpop_04089.push(vote_rejetMediane);
    name_Commune_04089.push(nameCommune);
    Pourcentage_04089.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04089.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04089.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04089.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04089.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04089 = [];
const vote_lepen_04089 = [];
const vote_rejet_04089 = [];
const vote_macronpop_04089 = [];
const vote_lepenpop_04089 = [];
const vote_rejetpop_04089 = [];
const name_Commune_04089 = [];
const Pourcentage_04089 = [];
const Pourcentage_rejet_04089 = [];
const vote_gene_macron_04089 = [];
const vote_gene_lepen_04089 = [];
const vote_gene_rejet_04089 = [];

async function chartIt04089(){
    await GraphDATA04089();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04089-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04089
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04089
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04089-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04089,vote_lepen_04089,vote_rejet_04089]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04089-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04089,vote_lepenpop_04089,vote_rejetpop_04089]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04089"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04089
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04089
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04089
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04090*/
/*------------------------------------------------------------------ */
async function GraphDATA04090() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04090.push(vote_macron); 
    vote_lepen_04090.push(vote_lepen);
    vote_rejet_04090.push(vote_rejet);
    vote_macronpop_04090.push(vote_macronMediane);
    vote_lepenpop_04090.push(vote_lepenMediane);
    vote_rejetpop_04090.push(vote_rejetMediane);
    name_Commune_04090.push(nameCommune);
    Pourcentage_04090.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04090.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04090.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04090.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04090.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04090 = [];
const vote_lepen_04090 = [];
const vote_rejet_04090 = [];
const vote_macronpop_04090 = [];
const vote_lepenpop_04090 = [];
const vote_rejetpop_04090 = [];
const name_Commune_04090 = [];
const Pourcentage_04090 = [];
const Pourcentage_rejet_04090 = [];
const vote_gene_macron_04090 = [];
const vote_gene_lepen_04090 = [];
const vote_gene_rejet_04090 = [];

async function chartIt04090(){
    await GraphDATA04090();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04090-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04090
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04090
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04090-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04090,vote_lepen_04090,vote_rejet_04090]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04090-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04090,vote_lepenpop_04090,vote_rejetpop_04090]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04090"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04090
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04090
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04090
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04091*/
/*------------------------------------------------------------------ */
async function GraphDATA04091() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04091.push(vote_macron); 
    vote_lepen_04091.push(vote_lepen);
    vote_rejet_04091.push(vote_rejet);
    vote_macronpop_04091.push(vote_macronMediane);
    vote_lepenpop_04091.push(vote_lepenMediane);
    vote_rejetpop_04091.push(vote_rejetMediane);
    name_Commune_04091.push(nameCommune);
    Pourcentage_04091.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04091.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04091.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04091.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04091.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04091 = [];
const vote_lepen_04091 = [];
const vote_rejet_04091 = [];
const vote_macronpop_04091 = [];
const vote_lepenpop_04091 = [];
const vote_rejetpop_04091 = [];
const name_Commune_04091 = [];
const Pourcentage_04091 = [];
const Pourcentage_rejet_04091 = [];
const vote_gene_macron_04091 = [];
const vote_gene_lepen_04091 = [];
const vote_gene_rejet_04091 = [];

async function chartIt04091(){
    await GraphDATA04091();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04091-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04091
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04091
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04091-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04091,vote_lepen_04091,vote_rejet_04091]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04091-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04091,vote_lepenpop_04091,vote_rejetpop_04091]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04091"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04091
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04091
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04091
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04092*/
/*------------------------------------------------------------------ */
async function GraphDATA04092() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04092.push(vote_macron); 
    vote_lepen_04092.push(vote_lepen);
    vote_rejet_04092.push(vote_rejet);
    vote_macronpop_04092.push(vote_macronMediane);
    vote_lepenpop_04092.push(vote_lepenMediane);
    vote_rejetpop_04092.push(vote_rejetMediane);
    name_Commune_04092.push(nameCommune);
    Pourcentage_04092.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04092.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04092.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04092.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04092.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04092 = [];
const vote_lepen_04092 = [];
const vote_rejet_04092 = [];
const vote_macronpop_04092 = [];
const vote_lepenpop_04092 = [];
const vote_rejetpop_04092 = [];
const name_Commune_04092 = [];
const Pourcentage_04092 = [];
const Pourcentage_rejet_04092 = [];
const vote_gene_macron_04092 = [];
const vote_gene_lepen_04092 = [];
const vote_gene_rejet_04092 = [];

async function chartIt04092(){
    await GraphDATA04092();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04092-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04092
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04092
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04092-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04092,vote_lepen_04092,vote_rejet_04092]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04092-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04092,vote_lepenpop_04092,vote_rejetpop_04092]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04092"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04092
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04092
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04092
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04093*/
/*------------------------------------------------------------------ */
async function GraphDATA04093() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04093.push(vote_macron); 
    vote_lepen_04093.push(vote_lepen);
    vote_rejet_04093.push(vote_rejet);
    vote_macronpop_04093.push(vote_macronMediane);
    vote_lepenpop_04093.push(vote_lepenMediane);
    vote_rejetpop_04093.push(vote_rejetMediane);
    name_Commune_04093.push(nameCommune);
    Pourcentage_04093.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04093.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04093.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04093.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04093.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04093 = [];
const vote_lepen_04093 = [];
const vote_rejet_04093 = [];
const vote_macronpop_04093 = [];
const vote_lepenpop_04093 = [];
const vote_rejetpop_04093 = [];
const name_Commune_04093 = [];
const Pourcentage_04093 = [];
const Pourcentage_rejet_04093 = [];
const vote_gene_macron_04093 = [];
const vote_gene_lepen_04093 = [];
const vote_gene_rejet_04093 = [];

async function chartIt04093(){
    await GraphDATA04093();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04093-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04093
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04093
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04093-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04093,vote_lepen_04093,vote_rejet_04093]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04093-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04093,vote_lepenpop_04093,vote_rejetpop_04093]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04093"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04093
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04093
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04093
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04094*/
/*------------------------------------------------------------------ */
async function GraphDATA04094() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04094.push(vote_macron); 
    vote_lepen_04094.push(vote_lepen);
    vote_rejet_04094.push(vote_rejet);
    vote_macronpop_04094.push(vote_macronMediane);
    vote_lepenpop_04094.push(vote_lepenMediane);
    vote_rejetpop_04094.push(vote_rejetMediane);
    name_Commune_04094.push(nameCommune);
    Pourcentage_04094.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04094.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04094.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04094.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04094.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04094 = [];
const vote_lepen_04094 = [];
const vote_rejet_04094 = [];
const vote_macronpop_04094 = [];
const vote_lepenpop_04094 = [];
const vote_rejetpop_04094 = [];
const name_Commune_04094 = [];
const Pourcentage_04094 = [];
const Pourcentage_rejet_04094 = [];
const vote_gene_macron_04094 = [];
const vote_gene_lepen_04094 = [];
const vote_gene_rejet_04094 = [];

async function chartIt04094(){
    await GraphDATA04094();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04094-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04094
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04094
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04094-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04094,vote_lepen_04094,vote_rejet_04094]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04094-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04094,vote_lepenpop_04094,vote_rejetpop_04094]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04094"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04094
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04094
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04094
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04095*/
/*------------------------------------------------------------------ */
async function GraphDATA04095() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04095.push(vote_macron); 
    vote_lepen_04095.push(vote_lepen);
    vote_rejet_04095.push(vote_rejet);
    vote_macronpop_04095.push(vote_macronMediane);
    vote_lepenpop_04095.push(vote_lepenMediane);
    vote_rejetpop_04095.push(vote_rejetMediane);
    name_Commune_04095.push(nameCommune);
    Pourcentage_04095.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04095.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04095.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04095.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04095.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04095 = [];
const vote_lepen_04095 = [];
const vote_rejet_04095 = [];
const vote_macronpop_04095 = [];
const vote_lepenpop_04095 = [];
const vote_rejetpop_04095 = [];
const name_Commune_04095 = [];
const Pourcentage_04095 = [];
const Pourcentage_rejet_04095 = [];
const vote_gene_macron_04095 = [];
const vote_gene_lepen_04095 = [];
const vote_gene_rejet_04095 = [];

async function chartIt04095(){
    await GraphDATA04095();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04095-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04095
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04095
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04095-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04095,vote_lepen_04095,vote_rejet_04095]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04095-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04095,vote_lepenpop_04095,vote_rejetpop_04095]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04095"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04095
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04095
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04095
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04096*/
/*------------------------------------------------------------------ */
async function GraphDATA04096() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04096.push(vote_macron); 
    vote_lepen_04096.push(vote_lepen);
    vote_rejet_04096.push(vote_rejet);
    vote_macronpop_04096.push(vote_macronMediane);
    vote_lepenpop_04096.push(vote_lepenMediane);
    vote_rejetpop_04096.push(vote_rejetMediane);
    name_Commune_04096.push(nameCommune);
    Pourcentage_04096.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04096.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04096.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04096.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04096.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04096 = [];
const vote_lepen_04096 = [];
const vote_rejet_04096 = [];
const vote_macronpop_04096 = [];
const vote_lepenpop_04096 = [];
const vote_rejetpop_04096 = [];
const name_Commune_04096 = [];
const Pourcentage_04096 = [];
const Pourcentage_rejet_04096 = [];
const vote_gene_macron_04096 = [];
const vote_gene_lepen_04096 = [];
const vote_gene_rejet_04096 = [];

async function chartIt04096(){
    await GraphDATA04096();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04096-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04096
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04096
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04096-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04096,vote_lepen_04096,vote_rejet_04096]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04096-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04096,vote_lepenpop_04096,vote_rejetpop_04096]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04096"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04096
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04096
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04096
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04097*/
/*------------------------------------------------------------------ */
async function GraphDATA04097() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04097.push(vote_macron); 
    vote_lepen_04097.push(vote_lepen);
    vote_rejet_04097.push(vote_rejet);
    vote_macronpop_04097.push(vote_macronMediane);
    vote_lepenpop_04097.push(vote_lepenMediane);
    vote_rejetpop_04097.push(vote_rejetMediane);
    name_Commune_04097.push(nameCommune);
    Pourcentage_04097.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04097.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04097.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04097.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04097.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04097 = [];
const vote_lepen_04097 = [];
const vote_rejet_04097 = [];
const vote_macronpop_04097 = [];
const vote_lepenpop_04097 = [];
const vote_rejetpop_04097 = [];
const name_Commune_04097 = [];
const Pourcentage_04097 = [];
const Pourcentage_rejet_04097 = [];
const vote_gene_macron_04097 = [];
const vote_gene_lepen_04097 = [];
const vote_gene_rejet_04097 = [];

async function chartIt04097(){
    await GraphDATA04097();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04097-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04097
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04097
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04097-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04097,vote_lepen_04097,vote_rejet_04097]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04097-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04097,vote_lepenpop_04097,vote_rejetpop_04097]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04097"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04097
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04097
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04097
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04098*/
/*------------------------------------------------------------------ */
async function GraphDATA04098() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04098.push(vote_macron); 
    vote_lepen_04098.push(vote_lepen);
    vote_rejet_04098.push(vote_rejet);
    vote_macronpop_04098.push(vote_macronMediane);
    vote_lepenpop_04098.push(vote_lepenMediane);
    vote_rejetpop_04098.push(vote_rejetMediane);
    name_Commune_04098.push(nameCommune);
    Pourcentage_04098.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04098.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04098.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04098.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04098.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04098 = [];
const vote_lepen_04098 = [];
const vote_rejet_04098 = [];
const vote_macronpop_04098 = [];
const vote_lepenpop_04098 = [];
const vote_rejetpop_04098 = [];
const name_Commune_04098 = [];
const Pourcentage_04098 = [];
const Pourcentage_rejet_04098 = [];
const vote_gene_macron_04098 = [];
const vote_gene_lepen_04098 = [];
const vote_gene_rejet_04098 = [];

async function chartIt04098(){
    await GraphDATA04098();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04098-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04098
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04098
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04098-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04098,vote_lepen_04098,vote_rejet_04098]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04098-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04098,vote_lepenpop_04098,vote_rejetpop_04098]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04098"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04098
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04098
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04098
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04099*/
/*------------------------------------------------------------------ */
async function GraphDATA04099() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04099.push(vote_macron); 
    vote_lepen_04099.push(vote_lepen);
    vote_rejet_04099.push(vote_rejet);
    vote_macronpop_04099.push(vote_macronMediane);
    vote_lepenpop_04099.push(vote_lepenMediane);
    vote_rejetpop_04099.push(vote_rejetMediane);
    name_Commune_04099.push(nameCommune);
    Pourcentage_04099.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04099.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04099.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04099.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04099.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04099 = [];
const vote_lepen_04099 = [];
const vote_rejet_04099 = [];
const vote_macronpop_04099 = [];
const vote_lepenpop_04099 = [];
const vote_rejetpop_04099 = [];
const name_Commune_04099 = [];
const Pourcentage_04099 = [];
const Pourcentage_rejet_04099 = [];
const vote_gene_macron_04099 = [];
const vote_gene_lepen_04099 = [];
const vote_gene_rejet_04099 = [];

async function chartIt04099(){
    await GraphDATA04099();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04099-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04099
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04099
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04099-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04099,vote_lepen_04099,vote_rejet_04099]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04099-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04099,vote_lepenpop_04099,vote_rejetpop_04099]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04099"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04099
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04099
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04099
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}