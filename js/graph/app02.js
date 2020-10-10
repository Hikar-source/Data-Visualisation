/********************************************************************** */
/*JS GRAPHIQUE FICHIER DATA */
/********************************************************************** */
const name_abs = "Abstentions";
const name_Blancs = "Blancs";
const name_Nul = "Nuls";
const name_rejete = "Rejeter";
const name_macron = "Macron";
const name_lepen = "Lepen";

chartIt01001();
chartIt01002();
chartIt01003();
chartIt01004();
chartIt01005();
chartIt01006();
chartIt01007();
chartIt01008();
chartIt01009();
chartIt01010();
chartIt01011();
chartIt01012();
chartIt01013();
chartIt01014();
chartIt01015();
chartIt01016();
chartIt01017();
chartIt01018();
chartIt01019();
chartIt01020();
chartIt01021();
chartIt01022();
chartIt01023();
chartIt01024();
chartIt01025();
chartIt01026();
chartIt01027();
chartIt01028();
chartIt01029();
chartIt01030();
chartIt01031();
chartIt01032();
chartIt01033();
chartIt01034();
chartIt01035();
chartIt01036();
chartIt01037();
chartIt01038();
chartIt01039();
chartIt01040();
chartIt01041();
chartIt01042();
chartIt01043();
chartIt01044();
chartIt01045();
chartIt01046();
chartIt01047();
chartIt01048();
chartIt01049();
chartIt01050();
chartIt01051();
chartIt01052();
chartIt01053();
chartIt01054();
chartIt01055();
chartIt01056();
chartIt01057();
chartIt01058();
chartIt01059();
chartIt01060();
chartIt01061();
chartIt01062();
chartIt01063();
chartIt01064();
chartIt01065();
chartIt01066();
chartIt01067();
chartIt01068();
chartIt01069();
chartIt01070();
chartIt01071();
chartIt01072();
chartIt01073();
chartIt01074();
chartIt01075();
chartIt01076();
chartIt01077();
chartIt01078();
chartIt01079();
chartIt01080();
chartIt01081();
chartIt01082();
chartIt01083();
chartIt01084();
chartIt01085();
chartIt01086();
chartIt01087();
chartIt01088();
chartIt01089();
chartIt01090();
chartIt01091();
chartIt01092();
chartIt01093();
chartIt01094();
chartIt01095();
chartIt01096();
chartIt01097();
chartIt01098();
chartIt01099();
/*------------------------------------------------------------------ */
/*COMMUNE 01001*/
/*------------------------------------------------------------------ */
async function GraphDATA01001() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01001.push(vote_macron); 
    vote_lepen_01001.push(vote_lepen);
    vote_rejet_01001.push(vote_rejet);
    vote_macronpop_01001.push(vote_macronMediane);
    vote_lepenpop_01001.push(vote_lepenMediane);
    vote_rejetpop_01001.push(vote_rejetMediane);
    name_Commune_01001.push(nameCommune);
    Pourcentage_01001.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01001.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01001.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01001.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01001.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01001 = [];
const vote_lepen_01001 = [];
const vote_rejet_01001 = [];
const vote_macronpop_01001 = [];
const vote_lepenpop_01001 = [];
const vote_rejetpop_01001 = [];
const name_Commune_01001 = [];
const Pourcentage_01001 = [];
const Pourcentage_rejet_01001 = [];
const vote_gene_macron_01001 = [];
const vote_gene_lepen_01001 = [];
const vote_gene_rejet_01001 = [];

async function chartIt01001(){
    await GraphDATA01001();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01001-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01001
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01001
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01001-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01001,vote_lepen_01001,vote_rejet_01001]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01001-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01001,vote_lepenpop_01001,vote_rejetpop_01001]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01001"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01001
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01001
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01001
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01002*/
/*------------------------------------------------------------------ */
async function GraphDATA01002() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01002.push(vote_macron); 
    vote_lepen_01002.push(vote_lepen);
    vote_rejet_01002.push(vote_rejet);
    vote_macronpop_01002.push(vote_macronMediane);
    vote_lepenpop_01002.push(vote_lepenMediane);
    vote_rejetpop_01002.push(vote_rejetMediane);
    name_Commune_01002.push(nameCommune);
    Pourcentage_01002.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01002.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01002.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01002.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01002.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01002 = [];
const vote_lepen_01002 = [];
const vote_rejet_01002 = [];
const vote_macronpop_01002 = [];
const vote_lepenpop_01002 = [];
const vote_rejetpop_01002 = [];
const name_Commune_01002 = [];
const Pourcentage_01002 = [];
const Pourcentage_rejet_01002 = [];
const vote_gene_macron_01002 = [];
const vote_gene_lepen_01002 = [];
const vote_gene_rejet_01002 = [];

async function chartIt01002(){
    await GraphDATA01002();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01002-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01002
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01002
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01002-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01002,vote_lepen_01002,vote_rejet_01002]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01002-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01002,vote_lepenpop_01002,vote_rejetpop_01002]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01002"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01002
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01002
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01002
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01003*/
/*------------------------------------------------------------------ */
async function GraphDATA01003() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01003.push(vote_macron); 
    vote_lepen_01003.push(vote_lepen);
    vote_rejet_01003.push(vote_rejet);
    vote_macronpop_01003.push(vote_macronMediane);
    vote_lepenpop_01003.push(vote_lepenMediane);
    vote_rejetpop_01003.push(vote_rejetMediane);
    name_Commune_01003.push(nameCommune);
    Pourcentage_01003.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01003.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01003.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01003.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01003.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01003 = [];
const vote_lepen_01003 = [];
const vote_rejet_01003 = [];
const vote_macronpop_01003 = [];
const vote_lepenpop_01003 = [];
const vote_rejetpop_01003 = [];
const name_Commune_01003 = [];
const Pourcentage_01003 = [];
const Pourcentage_rejet_01003 = [];
const vote_gene_macron_01003 = [];
const vote_gene_lepen_01003 = [];
const vote_gene_rejet_01003 = [];

async function chartIt01003(){
    await GraphDATA01003();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01003-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01003
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01003
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01003-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01003,vote_lepen_01003,vote_rejet_01003]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01003-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01003,vote_lepenpop_01003,vote_rejetpop_01003]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01003"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01003
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01003
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01003
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01004*/
/*------------------------------------------------------------------ */
async function GraphDATA01004() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01004.push(vote_macron); 
    vote_lepen_01004.push(vote_lepen);
    vote_rejet_01004.push(vote_rejet);
    vote_macronpop_01004.push(vote_macronMediane);
    vote_lepenpop_01004.push(vote_lepenMediane);
    vote_rejetpop_01004.push(vote_rejetMediane);
    name_Commune_01004.push(nameCommune);
    Pourcentage_01004.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01004.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01004.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01004.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01004.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01004 = [];
const vote_lepen_01004 = [];
const vote_rejet_01004 = [];
const vote_macronpop_01004 = [];
const vote_lepenpop_01004 = [];
const vote_rejetpop_01004 = [];
const name_Commune_01004 = [];
const Pourcentage_01004 = [];
const Pourcentage_rejet_01004 = [];
const vote_gene_macron_01004 = [];
const vote_gene_lepen_01004 = [];
const vote_gene_rejet_01004 = [];

async function chartIt01004(){
    await GraphDATA01004();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01004-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01004
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01004
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01004-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01004,vote_lepen_01004,vote_rejet_01004]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01004-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01004,vote_lepenpop_01004,vote_rejetpop_01004]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01004"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01004
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01004
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01004
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01005*/
/*------------------------------------------------------------------ */
async function GraphDATA01005() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01005.push(vote_macron); 
    vote_lepen_01005.push(vote_lepen);
    vote_rejet_01005.push(vote_rejet);
    vote_macronpop_01005.push(vote_macronMediane);
    vote_lepenpop_01005.push(vote_lepenMediane);
    vote_rejetpop_01005.push(vote_rejetMediane);
    name_Commune_01005.push(nameCommune);
    Pourcentage_01005.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01005.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01005.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01005.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01005.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01005 = [];
const vote_lepen_01005 = [];
const vote_rejet_01005 = [];
const vote_macronpop_01005 = [];
const vote_lepenpop_01005 = [];
const vote_rejetpop_01005 = [];
const name_Commune_01005 = [];
const Pourcentage_01005 = [];
const Pourcentage_rejet_01005 = [];
const vote_gene_macron_01005 = [];
const vote_gene_lepen_01005 = [];
const vote_gene_rejet_01005 = [];

async function chartIt01005(){
    await GraphDATA01005();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01005-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01005
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01005
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01005-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01005,vote_lepen_01005,vote_rejet_01005]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01005-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01005,vote_lepenpop_01005,vote_rejetpop_01005]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01005"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01005
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01005
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01005
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01006*/
/*------------------------------------------------------------------ */
async function GraphDATA01006() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01006.push(vote_macron); 
    vote_lepen_01006.push(vote_lepen);
    vote_rejet_01006.push(vote_rejet);
    vote_macronpop_01006.push(vote_macronMediane);
    vote_lepenpop_01006.push(vote_lepenMediane);
    vote_rejetpop_01006.push(vote_rejetMediane);
    name_Commune_01006.push(nameCommune);
    Pourcentage_01006.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01006.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01006.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01006.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01006.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01006 = [];
const vote_lepen_01006 = [];
const vote_rejet_01006 = [];
const vote_macronpop_01006 = [];
const vote_lepenpop_01006 = [];
const vote_rejetpop_01006 = [];
const name_Commune_01006 = [];
const Pourcentage_01006 = [];
const Pourcentage_rejet_01006 = [];
const vote_gene_macron_01006 = [];
const vote_gene_lepen_01006 = [];
const vote_gene_rejet_01006 = [];

async function chartIt01006(){
    await GraphDATA01006();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01006-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01006
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01006
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01006-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01006,vote_lepen_01006,vote_rejet_01006]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01006-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01006,vote_lepenpop_01006,vote_rejetpop_01006]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01006"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01006
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01006
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01006
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01007*/
/*------------------------------------------------------------------ */
async function GraphDATA01007() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01007.push(vote_macron); 
    vote_lepen_01007.push(vote_lepen);
    vote_rejet_01007.push(vote_rejet);
    vote_macronpop_01007.push(vote_macronMediane);
    vote_lepenpop_01007.push(vote_lepenMediane);
    vote_rejetpop_01007.push(vote_rejetMediane);
    name_Commune_01007.push(nameCommune);
    Pourcentage_01007.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01007.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01007.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01007.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01007.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01007 = [];
const vote_lepen_01007 = [];
const vote_rejet_01007 = [];
const vote_macronpop_01007 = [];
const vote_lepenpop_01007 = [];
const vote_rejetpop_01007 = [];
const name_Commune_01007 = [];
const Pourcentage_01007 = [];
const Pourcentage_rejet_01007 = [];
const vote_gene_macron_01007 = [];
const vote_gene_lepen_01007 = [];
const vote_gene_rejet_01007 = [];

async function chartIt01007(){
    await GraphDATA01007();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01007-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01007
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01007
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01007-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01007,vote_lepen_01007,vote_rejet_01007]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01007-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01007,vote_lepenpop_01007,vote_rejetpop_01007]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01007"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01007
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01007
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01007
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01008*/
/*------------------------------------------------------------------ */
async function GraphDATA01008() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01008.push(vote_macron); 
    vote_lepen_01008.push(vote_lepen);
    vote_rejet_01008.push(vote_rejet);
    vote_macronpop_01008.push(vote_macronMediane);
    vote_lepenpop_01008.push(vote_lepenMediane);
    vote_rejetpop_01008.push(vote_rejetMediane);
    name_Commune_01008.push(nameCommune);
    Pourcentage_01008.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01008.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01008.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01008.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01008.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01008 = [];
const vote_lepen_01008 = [];
const vote_rejet_01008 = [];
const vote_macronpop_01008 = [];
const vote_lepenpop_01008 = [];
const vote_rejetpop_01008 = [];
const name_Commune_01008 = [];
const Pourcentage_01008 = [];
const Pourcentage_rejet_01008 = [];
const vote_gene_macron_01008 = [];
const vote_gene_lepen_01008 = [];
const vote_gene_rejet_01008 = [];

async function chartIt01008(){
    await GraphDATA01008();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01008-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01008
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01008
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01008-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01008,vote_lepen_01008,vote_rejet_01008]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01008-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01008,vote_lepenpop_01008,vote_rejetpop_01008]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01008"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01008
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01008
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01008
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01009*/
/*------------------------------------------------------------------ */
async function GraphDATA01009() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01009.push(vote_macron); 
    vote_lepen_01009.push(vote_lepen);
    vote_rejet_01009.push(vote_rejet);
    vote_macronpop_01009.push(vote_macronMediane);
    vote_lepenpop_01009.push(vote_lepenMediane);
    vote_rejetpop_01009.push(vote_rejetMediane);
    name_Commune_01009.push(nameCommune);
    Pourcentage_01009.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01009.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01009.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01009.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01009.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01009 = [];
const vote_lepen_01009 = [];
const vote_rejet_01009 = [];
const vote_macronpop_01009 = [];
const vote_lepenpop_01009 = [];
const vote_rejetpop_01009 = [];
const name_Commune_01009 = [];
const Pourcentage_01009 = [];
const Pourcentage_rejet_01009 = [];
const vote_gene_macron_01009 = [];
const vote_gene_lepen_01009 = [];
const vote_gene_rejet_01009 = [];

async function chartIt01009(){
    await GraphDATA01009();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01009-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01009
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01009
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01009-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01009,vote_lepen_01009,vote_rejet_01009]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01009-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01009,vote_lepenpop_01009,vote_rejetpop_01009]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01009"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01009
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01009
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01009
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01010*/
/*------------------------------------------------------------------ */
async function GraphDATA01010() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01010.push(vote_macron); 
    vote_lepen_01010.push(vote_lepen);
    vote_rejet_01010.push(vote_rejet);
    vote_macronpop_01010.push(vote_macronMediane);
    vote_lepenpop_01010.push(vote_lepenMediane);
    vote_rejetpop_01010.push(vote_rejetMediane);
    name_Commune_01010.push(nameCommune);
    Pourcentage_01010.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01010.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01010.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01010.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01010.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01010 = [];
const vote_lepen_01010 = [];
const vote_rejet_01010 = [];
const vote_macronpop_01010 = [];
const vote_lepenpop_01010 = [];
const vote_rejetpop_01010 = [];
const name_Commune_01010 = [];
const Pourcentage_01010 = [];
const Pourcentage_rejet_01010 = [];
const vote_gene_macron_01010 = [];
const vote_gene_lepen_01010 = [];
const vote_gene_rejet_01010 = [];

async function chartIt01010(){
    await GraphDATA01010();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01010-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01010
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01010
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01010-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01010,vote_lepen_01010,vote_rejet_01010]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01010-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01010,vote_lepenpop_01010,vote_rejetpop_01010]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01010"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01010
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01010
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01010
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01011*/
/*------------------------------------------------------------------ */
async function GraphDATA01011() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01011.push(vote_macron); 
    vote_lepen_01011.push(vote_lepen);
    vote_rejet_01011.push(vote_rejet);
    vote_macronpop_01011.push(vote_macronMediane);
    vote_lepenpop_01011.push(vote_lepenMediane);
    vote_rejetpop_01011.push(vote_rejetMediane);
    name_Commune_01011.push(nameCommune);
    Pourcentage_01011.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01011.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01011.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01011.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01011.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01011 = [];
const vote_lepen_01011 = [];
const vote_rejet_01011 = [];
const vote_macronpop_01011 = [];
const vote_lepenpop_01011 = [];
const vote_rejetpop_01011 = [];
const name_Commune_01011 = [];
const Pourcentage_01011 = [];
const Pourcentage_rejet_01011 = [];
const vote_gene_macron_01011 = [];
const vote_gene_lepen_01011 = [];
const vote_gene_rejet_01011 = [];

async function chartIt01011(){
    await GraphDATA01011();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01011-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01011
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01011
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01011-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01011,vote_lepen_01011,vote_rejet_01011]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01011-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01011,vote_lepenpop_01011,vote_rejetpop_01011]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01011"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01011
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01011
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01011
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01012*/
/*------------------------------------------------------------------ */
async function GraphDATA01012() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01012.push(vote_macron); 
    vote_lepen_01012.push(vote_lepen);
    vote_rejet_01012.push(vote_rejet);
    vote_macronpop_01012.push(vote_macronMediane);
    vote_lepenpop_01012.push(vote_lepenMediane);
    vote_rejetpop_01012.push(vote_rejetMediane);
    name_Commune_01012.push(nameCommune);
    Pourcentage_01012.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01012.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01012.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01012.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01012.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01012 = [];
const vote_lepen_01012 = [];
const vote_rejet_01012 = [];
const vote_macronpop_01012 = [];
const vote_lepenpop_01012 = [];
const vote_rejetpop_01012 = [];
const name_Commune_01012 = [];
const Pourcentage_01012 = [];
const Pourcentage_rejet_01012 = [];
const vote_gene_macron_01012 = [];
const vote_gene_lepen_01012 = [];
const vote_gene_rejet_01012 = [];

async function chartIt01012(){
    await GraphDATA01012();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01012-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01012
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01012
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01012-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01012,vote_lepen_01012,vote_rejet_01012]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01012-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01012,vote_lepenpop_01012,vote_rejetpop_01012]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01012"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01012
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01012
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01012
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01013*/
/*------------------------------------------------------------------ */
async function GraphDATA01013() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01013.push(vote_macron); 
    vote_lepen_01013.push(vote_lepen);
    vote_rejet_01013.push(vote_rejet);
    vote_macronpop_01013.push(vote_macronMediane);
    vote_lepenpop_01013.push(vote_lepenMediane);
    vote_rejetpop_01013.push(vote_rejetMediane);
    name_Commune_01013.push(nameCommune);
    Pourcentage_01013.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01013.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01013.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01013.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01013.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01013 = [];
const vote_lepen_01013 = [];
const vote_rejet_01013 = [];
const vote_macronpop_01013 = [];
const vote_lepenpop_01013 = [];
const vote_rejetpop_01013 = [];
const name_Commune_01013 = [];
const Pourcentage_01013 = [];
const Pourcentage_rejet_01013 = [];
const vote_gene_macron_01013 = [];
const vote_gene_lepen_01013 = [];
const vote_gene_rejet_01013 = [];

async function chartIt01013(){
    await GraphDATA01013();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01013-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01013
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01013
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01013-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01013,vote_lepen_01013,vote_rejet_01013]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01013-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01013,vote_lepenpop_01013,vote_rejetpop_01013]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01013"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01013
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01013
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01013
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01014*/
/*------------------------------------------------------------------ */
async function GraphDATA01014() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01014.push(vote_macron); 
    vote_lepen_01014.push(vote_lepen);
    vote_rejet_01014.push(vote_rejet);
    vote_macronpop_01014.push(vote_macronMediane);
    vote_lepenpop_01014.push(vote_lepenMediane);
    vote_rejetpop_01014.push(vote_rejetMediane);
    name_Commune_01014.push(nameCommune);
    Pourcentage_01014.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01014.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01014.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01014.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01014.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01014 = [];
const vote_lepen_01014 = [];
const vote_rejet_01014 = [];
const vote_macronpop_01014 = [];
const vote_lepenpop_01014 = [];
const vote_rejetpop_01014 = [];
const name_Commune_01014 = [];
const Pourcentage_01014 = [];
const Pourcentage_rejet_01014 = [];
const vote_gene_macron_01014 = [];
const vote_gene_lepen_01014 = [];
const vote_gene_rejet_01014 = [];

async function chartIt01014(){
    await GraphDATA01014();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01014-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01014
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01014
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01014-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01014,vote_lepen_01014,vote_rejet_01014]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01014-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01014,vote_lepenpop_01014,vote_rejetpop_01014]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01014"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01014
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01014
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01014
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01015*/
/*------------------------------------------------------------------ */
async function GraphDATA01015() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01015.push(vote_macron); 
    vote_lepen_01015.push(vote_lepen);
    vote_rejet_01015.push(vote_rejet);
    vote_macronpop_01015.push(vote_macronMediane);
    vote_lepenpop_01015.push(vote_lepenMediane);
    vote_rejetpop_01015.push(vote_rejetMediane);
    name_Commune_01015.push(nameCommune);
    Pourcentage_01015.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01015.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01015.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01015.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01015.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01015 = [];
const vote_lepen_01015 = [];
const vote_rejet_01015 = [];
const vote_macronpop_01015 = [];
const vote_lepenpop_01015 = [];
const vote_rejetpop_01015 = [];
const name_Commune_01015 = [];
const Pourcentage_01015 = [];
const Pourcentage_rejet_01015 = [];
const vote_gene_macron_01015 = [];
const vote_gene_lepen_01015 = [];
const vote_gene_rejet_01015 = [];

async function chartIt01015(){
    await GraphDATA01015();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01015-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01015
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01015
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01015-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01015,vote_lepen_01015,vote_rejet_01015]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01015-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01015,vote_lepenpop_01015,vote_rejetpop_01015]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01015"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01015
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01015
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01015
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01016*/
/*------------------------------------------------------------------ */
async function GraphDATA01016() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01016.push(vote_macron); 
    vote_lepen_01016.push(vote_lepen);
    vote_rejet_01016.push(vote_rejet);
    vote_macronpop_01016.push(vote_macronMediane);
    vote_lepenpop_01016.push(vote_lepenMediane);
    vote_rejetpop_01016.push(vote_rejetMediane);
    name_Commune_01016.push(nameCommune);
    Pourcentage_01016.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01016.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01016.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01016.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01016.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01016 = [];
const vote_lepen_01016 = [];
const vote_rejet_01016 = [];
const vote_macronpop_01016 = [];
const vote_lepenpop_01016 = [];
const vote_rejetpop_01016 = [];
const name_Commune_01016 = [];
const Pourcentage_01016 = [];
const Pourcentage_rejet_01016 = [];
const vote_gene_macron_01016 = [];
const vote_gene_lepen_01016 = [];
const vote_gene_rejet_01016 = [];

async function chartIt01016(){
    await GraphDATA01016();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01016-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01016
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01016
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01016-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01016,vote_lepen_01016,vote_rejet_01016]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01016-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01016,vote_lepenpop_01016,vote_rejetpop_01016]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01016"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01016
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01016
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01016
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01017*/
/*------------------------------------------------------------------ */
async function GraphDATA01017() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01017.push(vote_macron); 
    vote_lepen_01017.push(vote_lepen);
    vote_rejet_01017.push(vote_rejet);
    vote_macronpop_01017.push(vote_macronMediane);
    vote_lepenpop_01017.push(vote_lepenMediane);
    vote_rejetpop_01017.push(vote_rejetMediane);
    name_Commune_01017.push(nameCommune);
    Pourcentage_01017.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01017.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01017.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01017.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01017.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01017 = [];
const vote_lepen_01017 = [];
const vote_rejet_01017 = [];
const vote_macronpop_01017 = [];
const vote_lepenpop_01017 = [];
const vote_rejetpop_01017 = [];
const name_Commune_01017 = [];
const Pourcentage_01017 = [];
const Pourcentage_rejet_01017 = [];
const vote_gene_macron_01017 = [];
const vote_gene_lepen_01017 = [];
const vote_gene_rejet_01017 = [];

async function chartIt01017(){
    await GraphDATA01017();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01017-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01017
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01017
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01017-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01017,vote_lepen_01017,vote_rejet_01017]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01017-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01017,vote_lepenpop_01017,vote_rejetpop_01017]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01017"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01017
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01017
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01017
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01018*/
/*------------------------------------------------------------------ */
async function GraphDATA01018() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01018.push(vote_macron); 
    vote_lepen_01018.push(vote_lepen);
    vote_rejet_01018.push(vote_rejet);
    vote_macronpop_01018.push(vote_macronMediane);
    vote_lepenpop_01018.push(vote_lepenMediane);
    vote_rejetpop_01018.push(vote_rejetMediane);
    name_Commune_01018.push(nameCommune);
    Pourcentage_01018.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01018.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01018.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01018.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01018.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01018 = [];
const vote_lepen_01018 = [];
const vote_rejet_01018 = [];
const vote_macronpop_01018 = [];
const vote_lepenpop_01018 = [];
const vote_rejetpop_01018 = [];
const name_Commune_01018 = [];
const Pourcentage_01018 = [];
const Pourcentage_rejet_01018 = [];
const vote_gene_macron_01018 = [];
const vote_gene_lepen_01018 = [];
const vote_gene_rejet_01018 = [];

async function chartIt01018(){
    await GraphDATA01018();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01018-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01018
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01018
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01018-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01018,vote_lepen_01018,vote_rejet_01018]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01018-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01018,vote_lepenpop_01018,vote_rejetpop_01018]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01018"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01018
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01018
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01018
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01019*/
/*------------------------------------------------------------------ */
async function GraphDATA01019() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01019.push(vote_macron); 
    vote_lepen_01019.push(vote_lepen);
    vote_rejet_01019.push(vote_rejet);
    vote_macronpop_01019.push(vote_macronMediane);
    vote_lepenpop_01019.push(vote_lepenMediane);
    vote_rejetpop_01019.push(vote_rejetMediane);
    name_Commune_01019.push(nameCommune);
    Pourcentage_01019.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01019.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01019.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01019.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01019.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01019 = [];
const vote_lepen_01019 = [];
const vote_rejet_01019 = [];
const vote_macronpop_01019 = [];
const vote_lepenpop_01019 = [];
const vote_rejetpop_01019 = [];
const name_Commune_01019 = [];
const Pourcentage_01019 = [];
const Pourcentage_rejet_01019 = [];
const vote_gene_macron_01019 = [];
const vote_gene_lepen_01019 = [];
const vote_gene_rejet_01019 = [];

async function chartIt01019(){
    await GraphDATA01019();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01019-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01019
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01019
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01019-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01019,vote_lepen_01019,vote_rejet_01019]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01019-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01019,vote_lepenpop_01019,vote_rejetpop_01019]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01019"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01019
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01019
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01019
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01020*/
/*------------------------------------------------------------------ */
async function GraphDATA01020() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01020.push(vote_macron); 
    vote_lepen_01020.push(vote_lepen);
    vote_rejet_01020.push(vote_rejet);
    vote_macronpop_01020.push(vote_macronMediane);
    vote_lepenpop_01020.push(vote_lepenMediane);
    vote_rejetpop_01020.push(vote_rejetMediane);
    name_Commune_01020.push(nameCommune);
    Pourcentage_01020.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01020.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01020.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01020.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01020.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01020 = [];
const vote_lepen_01020 = [];
const vote_rejet_01020 = [];
const vote_macronpop_01020 = [];
const vote_lepenpop_01020 = [];
const vote_rejetpop_01020 = [];
const name_Commune_01020 = [];
const Pourcentage_01020 = [];
const Pourcentage_rejet_01020 = [];
const vote_gene_macron_01020 = [];
const vote_gene_lepen_01020 = [];
const vote_gene_rejet_01020 = [];

async function chartIt01020(){
    await GraphDATA01020();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01020-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01020
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01020
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01020-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01020,vote_lepen_01020,vote_rejet_01020]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01020-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01020,vote_lepenpop_01020,vote_rejetpop_01020]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01020"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01020
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01020
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01020
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01021*/
/*------------------------------------------------------------------ */
async function GraphDATA01021() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01021.push(vote_macron); 
    vote_lepen_01021.push(vote_lepen);
    vote_rejet_01021.push(vote_rejet);
    vote_macronpop_01021.push(vote_macronMediane);
    vote_lepenpop_01021.push(vote_lepenMediane);
    vote_rejetpop_01021.push(vote_rejetMediane);
    name_Commune_01021.push(nameCommune);
    Pourcentage_01021.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01021.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01021.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01021.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01021.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01021 = [];
const vote_lepen_01021 = [];
const vote_rejet_01021 = [];
const vote_macronpop_01021 = [];
const vote_lepenpop_01021 = [];
const vote_rejetpop_01021 = [];
const name_Commune_01021 = [];
const Pourcentage_01021 = [];
const Pourcentage_rejet_01021 = [];
const vote_gene_macron_01021 = [];
const vote_gene_lepen_01021 = [];
const vote_gene_rejet_01021 = [];

async function chartIt01021(){
    await GraphDATA01021();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01021-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01021
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01021
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01021-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01021,vote_lepen_01021,vote_rejet_01021]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01021-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01021,vote_lepenpop_01021,vote_rejetpop_01021]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01021"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01021
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01021
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01021
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01022*/
/*------------------------------------------------------------------ */
async function GraphDATA01022() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01022.push(vote_macron); 
    vote_lepen_01022.push(vote_lepen);
    vote_rejet_01022.push(vote_rejet);
    vote_macronpop_01022.push(vote_macronMediane);
    vote_lepenpop_01022.push(vote_lepenMediane);
    vote_rejetpop_01022.push(vote_rejetMediane);
    name_Commune_01022.push(nameCommune);
    Pourcentage_01022.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01022.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01022.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01022.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01022.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01022 = [];
const vote_lepen_01022 = [];
const vote_rejet_01022 = [];
const vote_macronpop_01022 = [];
const vote_lepenpop_01022 = [];
const vote_rejetpop_01022 = [];
const name_Commune_01022 = [];
const Pourcentage_01022 = [];
const Pourcentage_rejet_01022 = [];
const vote_gene_macron_01022 = [];
const vote_gene_lepen_01022 = [];
const vote_gene_rejet_01022 = [];

async function chartIt01022(){
    await GraphDATA01022();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01022-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01022
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01022
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01022-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01022,vote_lepen_01022,vote_rejet_01022]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01022-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01022,vote_lepenpop_01022,vote_rejetpop_01022]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01022"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01022
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01022
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01022
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01023*/
/*------------------------------------------------------------------ */
async function GraphDATA01023() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01023.push(vote_macron); 
    vote_lepen_01023.push(vote_lepen);
    vote_rejet_01023.push(vote_rejet);
    vote_macronpop_01023.push(vote_macronMediane);
    vote_lepenpop_01023.push(vote_lepenMediane);
    vote_rejetpop_01023.push(vote_rejetMediane);
    name_Commune_01023.push(nameCommune);
    Pourcentage_01023.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01023.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01023.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01023.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01023.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01023 = [];
const vote_lepen_01023 = [];
const vote_rejet_01023 = [];
const vote_macronpop_01023 = [];
const vote_lepenpop_01023 = [];
const vote_rejetpop_01023 = [];
const name_Commune_01023 = [];
const Pourcentage_01023 = [];
const Pourcentage_rejet_01023 = [];
const vote_gene_macron_01023 = [];
const vote_gene_lepen_01023 = [];
const vote_gene_rejet_01023 = [];

async function chartIt01023(){
    await GraphDATA01023();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01023-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01023
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01023
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01023-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01023,vote_lepen_01023,vote_rejet_01023]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01023-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01023,vote_lepenpop_01023,vote_rejetpop_01023]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01023"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01023
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01023
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01023
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01024*/
/*------------------------------------------------------------------ */
async function GraphDATA01024() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01024.push(vote_macron); 
    vote_lepen_01024.push(vote_lepen);
    vote_rejet_01024.push(vote_rejet);
    vote_macronpop_01024.push(vote_macronMediane);
    vote_lepenpop_01024.push(vote_lepenMediane);
    vote_rejetpop_01024.push(vote_rejetMediane);
    name_Commune_01024.push(nameCommune);
    Pourcentage_01024.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01024.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01024.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01024.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01024.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01024 = [];
const vote_lepen_01024 = [];
const vote_rejet_01024 = [];
const vote_macronpop_01024 = [];
const vote_lepenpop_01024 = [];
const vote_rejetpop_01024 = [];
const name_Commune_01024 = [];
const Pourcentage_01024 = [];
const Pourcentage_rejet_01024 = [];
const vote_gene_macron_01024 = [];
const vote_gene_lepen_01024 = [];
const vote_gene_rejet_01024 = [];

async function chartIt01024(){
    await GraphDATA01024();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01024-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01024
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01024
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01024-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01024,vote_lepen_01024,vote_rejet_01024]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01024-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01024,vote_lepenpop_01024,vote_rejetpop_01024]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01024"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01024
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01024
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01024
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01025*/
/*------------------------------------------------------------------ */
async function GraphDATA01025() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01025.push(vote_macron); 
    vote_lepen_01025.push(vote_lepen);
    vote_rejet_01025.push(vote_rejet);
    vote_macronpop_01025.push(vote_macronMediane);
    vote_lepenpop_01025.push(vote_lepenMediane);
    vote_rejetpop_01025.push(vote_rejetMediane);
    name_Commune_01025.push(nameCommune);
    Pourcentage_01025.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01025.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01025.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01025.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01025.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01025 = [];
const vote_lepen_01025 = [];
const vote_rejet_01025 = [];
const vote_macronpop_01025 = [];
const vote_lepenpop_01025 = [];
const vote_rejetpop_01025 = [];
const name_Commune_01025 = [];
const Pourcentage_01025 = [];
const Pourcentage_rejet_01025 = [];
const vote_gene_macron_01025 = [];
const vote_gene_lepen_01025 = [];
const vote_gene_rejet_01025 = [];

async function chartIt01025(){
    await GraphDATA01025();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01025-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01025
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01025
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01025-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01025,vote_lepen_01025,vote_rejet_01025]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01025-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01025,vote_lepenpop_01025,vote_rejetpop_01025]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01025"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01025
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01025
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01025
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01026*/
/*------------------------------------------------------------------ */
async function GraphDATA01026() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01026.push(vote_macron); 
    vote_lepen_01026.push(vote_lepen);
    vote_rejet_01026.push(vote_rejet);
    vote_macronpop_01026.push(vote_macronMediane);
    vote_lepenpop_01026.push(vote_lepenMediane);
    vote_rejetpop_01026.push(vote_rejetMediane);
    name_Commune_01026.push(nameCommune);
    Pourcentage_01026.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01026.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01026.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01026.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01026.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01026 = [];
const vote_lepen_01026 = [];
const vote_rejet_01026 = [];
const vote_macronpop_01026 = [];
const vote_lepenpop_01026 = [];
const vote_rejetpop_01026 = [];
const name_Commune_01026 = [];
const Pourcentage_01026 = [];
const Pourcentage_rejet_01026 = [];
const vote_gene_macron_01026 = [];
const vote_gene_lepen_01026 = [];
const vote_gene_rejet_01026 = [];

async function chartIt01026(){
    await GraphDATA01026();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01026-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01026
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01026
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01026-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01026,vote_lepen_01026,vote_rejet_01026]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01026-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01026,vote_lepenpop_01026,vote_rejetpop_01026]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01026"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01026
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01026
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01026
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01027*/
/*------------------------------------------------------------------ */
async function GraphDATA01027() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01027.push(vote_macron); 
    vote_lepen_01027.push(vote_lepen);
    vote_rejet_01027.push(vote_rejet);
    vote_macronpop_01027.push(vote_macronMediane);
    vote_lepenpop_01027.push(vote_lepenMediane);
    vote_rejetpop_01027.push(vote_rejetMediane);
    name_Commune_01027.push(nameCommune);
    Pourcentage_01027.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01027.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01027.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01027.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01027.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01027 = [];
const vote_lepen_01027 = [];
const vote_rejet_01027 = [];
const vote_macronpop_01027 = [];
const vote_lepenpop_01027 = [];
const vote_rejetpop_01027 = [];
const name_Commune_01027 = [];
const Pourcentage_01027 = [];
const Pourcentage_rejet_01027 = [];
const vote_gene_macron_01027 = [];
const vote_gene_lepen_01027 = [];
const vote_gene_rejet_01027 = [];

async function chartIt01027(){
    await GraphDATA01027();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01027-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01027
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01027
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01027-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01027,vote_lepen_01027,vote_rejet_01027]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01027-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01027,vote_lepenpop_01027,vote_rejetpop_01027]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01027"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01027
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01027
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01027
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01028*/
/*------------------------------------------------------------------ */
async function GraphDATA01028() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01028.push(vote_macron); 
    vote_lepen_01028.push(vote_lepen);
    vote_rejet_01028.push(vote_rejet);
    vote_macronpop_01028.push(vote_macronMediane);
    vote_lepenpop_01028.push(vote_lepenMediane);
    vote_rejetpop_01028.push(vote_rejetMediane);
    name_Commune_01028.push(nameCommune);
    Pourcentage_01028.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01028.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01028.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01028.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01028.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01028 = [];
const vote_lepen_01028 = [];
const vote_rejet_01028 = [];
const vote_macronpop_01028 = [];
const vote_lepenpop_01028 = [];
const vote_rejetpop_01028 = [];
const name_Commune_01028 = [];
const Pourcentage_01028 = [];
const Pourcentage_rejet_01028 = [];
const vote_gene_macron_01028 = [];
const vote_gene_lepen_01028 = [];
const vote_gene_rejet_01028 = [];

async function chartIt01028(){
    await GraphDATA01028();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01028-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01028
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01028
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01028-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01028,vote_lepen_01028,vote_rejet_01028]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01028-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01028,vote_lepenpop_01028,vote_rejetpop_01028]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01028"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01028
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01028
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01028
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01029*/
/*------------------------------------------------------------------ */
async function GraphDATA01029() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01029.push(vote_macron); 
    vote_lepen_01029.push(vote_lepen);
    vote_rejet_01029.push(vote_rejet);
    vote_macronpop_01029.push(vote_macronMediane);
    vote_lepenpop_01029.push(vote_lepenMediane);
    vote_rejetpop_01029.push(vote_rejetMediane);
    name_Commune_01029.push(nameCommune);
    Pourcentage_01029.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01029.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01029.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01029.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01029.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01029 = [];
const vote_lepen_01029 = [];
const vote_rejet_01029 = [];
const vote_macronpop_01029 = [];
const vote_lepenpop_01029 = [];
const vote_rejetpop_01029 = [];
const name_Commune_01029 = [];
const Pourcentage_01029 = [];
const Pourcentage_rejet_01029 = [];
const vote_gene_macron_01029 = [];
const vote_gene_lepen_01029 = [];
const vote_gene_rejet_01029 = [];

async function chartIt01029(){
    await GraphDATA01029();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01029-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01029
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01029
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01029-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01029,vote_lepen_01029,vote_rejet_01029]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01029-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01029,vote_lepenpop_01029,vote_rejetpop_01029]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01029"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01029
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01029
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01029
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01030*/
/*------------------------------------------------------------------ */
async function GraphDATA01030() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01030.push(vote_macron); 
    vote_lepen_01030.push(vote_lepen);
    vote_rejet_01030.push(vote_rejet);
    vote_macronpop_01030.push(vote_macronMediane);
    vote_lepenpop_01030.push(vote_lepenMediane);
    vote_rejetpop_01030.push(vote_rejetMediane);
    name_Commune_01030.push(nameCommune);
    Pourcentage_01030.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01030.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01030.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01030.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01030.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01030 = [];
const vote_lepen_01030 = [];
const vote_rejet_01030 = [];
const vote_macronpop_01030 = [];
const vote_lepenpop_01030 = [];
const vote_rejetpop_01030 = [];
const name_Commune_01030 = [];
const Pourcentage_01030 = [];
const Pourcentage_rejet_01030 = [];
const vote_gene_macron_01030 = [];
const vote_gene_lepen_01030 = [];
const vote_gene_rejet_01030 = [];

async function chartIt01030(){
    await GraphDATA01030();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01030-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01030
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01030
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01030-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01030,vote_lepen_01030,vote_rejet_01030]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01030-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01030,vote_lepenpop_01030,vote_rejetpop_01030]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01030"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01030
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01030
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01030
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01031*/
/*------------------------------------------------------------------ */
async function GraphDATA01031() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01031.push(vote_macron); 
    vote_lepen_01031.push(vote_lepen);
    vote_rejet_01031.push(vote_rejet);
    vote_macronpop_01031.push(vote_macronMediane);
    vote_lepenpop_01031.push(vote_lepenMediane);
    vote_rejetpop_01031.push(vote_rejetMediane);
    name_Commune_01031.push(nameCommune);
    Pourcentage_01031.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01031.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01031.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01031.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01031.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01031 = [];
const vote_lepen_01031 = [];
const vote_rejet_01031 = [];
const vote_macronpop_01031 = [];
const vote_lepenpop_01031 = [];
const vote_rejetpop_01031 = [];
const name_Commune_01031 = [];
const Pourcentage_01031 = [];
const Pourcentage_rejet_01031 = [];
const vote_gene_macron_01031 = [];
const vote_gene_lepen_01031 = [];
const vote_gene_rejet_01031 = [];

async function chartIt01031(){
    await GraphDATA01031();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01031-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01031
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01031
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01031-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01031,vote_lepen_01031,vote_rejet_01031]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01031-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01031,vote_lepenpop_01031,vote_rejetpop_01031]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01031"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01031
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01031
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01031
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01032*/
/*------------------------------------------------------------------ */
async function GraphDATA01032() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01032.push(vote_macron); 
    vote_lepen_01032.push(vote_lepen);
    vote_rejet_01032.push(vote_rejet);
    vote_macronpop_01032.push(vote_macronMediane);
    vote_lepenpop_01032.push(vote_lepenMediane);
    vote_rejetpop_01032.push(vote_rejetMediane);
    name_Commune_01032.push(nameCommune);
    Pourcentage_01032.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01032.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01032.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01032.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01032.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01032 = [];
const vote_lepen_01032 = [];
const vote_rejet_01032 = [];
const vote_macronpop_01032 = [];
const vote_lepenpop_01032 = [];
const vote_rejetpop_01032 = [];
const name_Commune_01032 = [];
const Pourcentage_01032 = [];
const Pourcentage_rejet_01032 = [];
const vote_gene_macron_01032 = [];
const vote_gene_lepen_01032 = [];
const vote_gene_rejet_01032 = [];

async function chartIt01032(){
    await GraphDATA01032();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01032-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01032
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01032
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01032-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01032,vote_lepen_01032,vote_rejet_01032]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01032-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01032,vote_lepenpop_01032,vote_rejetpop_01032]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01032"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01032
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01032
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01032
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01033*/
/*------------------------------------------------------------------ */
async function GraphDATA01033() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01033.push(vote_macron); 
    vote_lepen_01033.push(vote_lepen);
    vote_rejet_01033.push(vote_rejet);
    vote_macronpop_01033.push(vote_macronMediane);
    vote_lepenpop_01033.push(vote_lepenMediane);
    vote_rejetpop_01033.push(vote_rejetMediane);
    name_Commune_01033.push(nameCommune);
    Pourcentage_01033.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01033.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01033.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01033.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01033.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01033 = [];
const vote_lepen_01033 = [];
const vote_rejet_01033 = [];
const vote_macronpop_01033 = [];
const vote_lepenpop_01033 = [];
const vote_rejetpop_01033 = [];
const name_Commune_01033 = [];
const Pourcentage_01033 = [];
const Pourcentage_rejet_01033 = [];
const vote_gene_macron_01033 = [];
const vote_gene_lepen_01033 = [];
const vote_gene_rejet_01033 = [];

async function chartIt01033(){
    await GraphDATA01033();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01033-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01033
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01033
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01033-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01033,vote_lepen_01033,vote_rejet_01033]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01033-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01033,vote_lepenpop_01033,vote_rejetpop_01033]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01033"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01033
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01033
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01033
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01034*/
/*------------------------------------------------------------------ */
async function GraphDATA01034() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01034.push(vote_macron); 
    vote_lepen_01034.push(vote_lepen);
    vote_rejet_01034.push(vote_rejet);
    vote_macronpop_01034.push(vote_macronMediane);
    vote_lepenpop_01034.push(vote_lepenMediane);
    vote_rejetpop_01034.push(vote_rejetMediane);
    name_Commune_01034.push(nameCommune);
    Pourcentage_01034.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01034.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01034.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01034.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01034.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01034 = [];
const vote_lepen_01034 = [];
const vote_rejet_01034 = [];
const vote_macronpop_01034 = [];
const vote_lepenpop_01034 = [];
const vote_rejetpop_01034 = [];
const name_Commune_01034 = [];
const Pourcentage_01034 = [];
const Pourcentage_rejet_01034 = [];
const vote_gene_macron_01034 = [];
const vote_gene_lepen_01034 = [];
const vote_gene_rejet_01034 = [];

async function chartIt01034(){
    await GraphDATA01034();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01034-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01034
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01034
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01034-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01034,vote_lepen_01034,vote_rejet_01034]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01034-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01034,vote_lepenpop_01034,vote_rejetpop_01034]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01034"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01034
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01034
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01034
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01035*/
/*------------------------------------------------------------------ */
async function GraphDATA01035() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01035.push(vote_macron); 
    vote_lepen_01035.push(vote_lepen);
    vote_rejet_01035.push(vote_rejet);
    vote_macronpop_01035.push(vote_macronMediane);
    vote_lepenpop_01035.push(vote_lepenMediane);
    vote_rejetpop_01035.push(vote_rejetMediane);
    name_Commune_01035.push(nameCommune);
    Pourcentage_01035.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01035.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01035.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01035.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01035.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01035 = [];
const vote_lepen_01035 = [];
const vote_rejet_01035 = [];
const vote_macronpop_01035 = [];
const vote_lepenpop_01035 = [];
const vote_rejetpop_01035 = [];
const name_Commune_01035 = [];
const Pourcentage_01035 = [];
const Pourcentage_rejet_01035 = [];
const vote_gene_macron_01035 = [];
const vote_gene_lepen_01035 = [];
const vote_gene_rejet_01035 = [];

async function chartIt01035(){
    await GraphDATA01035();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01035-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01035
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01035
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01035-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01035,vote_lepen_01035,vote_rejet_01035]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01035-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01035,vote_lepenpop_01035,vote_rejetpop_01035]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01035"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01035
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01035
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01035
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01036*/
/*------------------------------------------------------------------ */
async function GraphDATA01036() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01036.push(vote_macron); 
    vote_lepen_01036.push(vote_lepen);
    vote_rejet_01036.push(vote_rejet);
    vote_macronpop_01036.push(vote_macronMediane);
    vote_lepenpop_01036.push(vote_lepenMediane);
    vote_rejetpop_01036.push(vote_rejetMediane);
    name_Commune_01036.push(nameCommune);
    Pourcentage_01036.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01036.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01036.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01036.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01036.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01036 = [];
const vote_lepen_01036 = [];
const vote_rejet_01036 = [];
const vote_macronpop_01036 = [];
const vote_lepenpop_01036 = [];
const vote_rejetpop_01036 = [];
const name_Commune_01036 = [];
const Pourcentage_01036 = [];
const Pourcentage_rejet_01036 = [];
const vote_gene_macron_01036 = [];
const vote_gene_lepen_01036 = [];
const vote_gene_rejet_01036 = [];

async function chartIt01036(){
    await GraphDATA01036();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01036-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01036
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01036
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01036-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01036,vote_lepen_01036,vote_rejet_01036]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01036-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01036,vote_lepenpop_01036,vote_rejetpop_01036]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01036"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01036
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01036
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01036
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01037*/
/*------------------------------------------------------------------ */
async function GraphDATA01037() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01037.push(vote_macron); 
    vote_lepen_01037.push(vote_lepen);
    vote_rejet_01037.push(vote_rejet);
    vote_macronpop_01037.push(vote_macronMediane);
    vote_lepenpop_01037.push(vote_lepenMediane);
    vote_rejetpop_01037.push(vote_rejetMediane);
    name_Commune_01037.push(nameCommune);
    Pourcentage_01037.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01037.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01037.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01037.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01037.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01037 = [];
const vote_lepen_01037 = [];
const vote_rejet_01037 = [];
const vote_macronpop_01037 = [];
const vote_lepenpop_01037 = [];
const vote_rejetpop_01037 = [];
const name_Commune_01037 = [];
const Pourcentage_01037 = [];
const Pourcentage_rejet_01037 = [];
const vote_gene_macron_01037 = [];
const vote_gene_lepen_01037 = [];
const vote_gene_rejet_01037 = [];

async function chartIt01037(){
    await GraphDATA01037();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01037-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01037
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01037
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01037-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01037,vote_lepen_01037,vote_rejet_01037]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01037-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01037,vote_lepenpop_01037,vote_rejetpop_01037]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01037"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01037
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01037
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01037
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01038*/
/*------------------------------------------------------------------ */
async function GraphDATA01038() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01038.push(vote_macron); 
    vote_lepen_01038.push(vote_lepen);
    vote_rejet_01038.push(vote_rejet);
    vote_macronpop_01038.push(vote_macronMediane);
    vote_lepenpop_01038.push(vote_lepenMediane);
    vote_rejetpop_01038.push(vote_rejetMediane);
    name_Commune_01038.push(nameCommune);
    Pourcentage_01038.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01038.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01038.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01038.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01038.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01038 = [];
const vote_lepen_01038 = [];
const vote_rejet_01038 = [];
const vote_macronpop_01038 = [];
const vote_lepenpop_01038 = [];
const vote_rejetpop_01038 = [];
const name_Commune_01038 = [];
const Pourcentage_01038 = [];
const Pourcentage_rejet_01038 = [];
const vote_gene_macron_01038 = [];
const vote_gene_lepen_01038 = [];
const vote_gene_rejet_01038 = [];

async function chartIt01038(){
    await GraphDATA01038();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01038-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01038
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01038
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01038-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01038,vote_lepen_01038,vote_rejet_01038]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01038-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01038,vote_lepenpop_01038,vote_rejetpop_01038]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01038"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01038
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01038
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01038
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01039*/
/*------------------------------------------------------------------ */
async function GraphDATA01039() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01039.push(vote_macron); 
    vote_lepen_01039.push(vote_lepen);
    vote_rejet_01039.push(vote_rejet);
    vote_macronpop_01039.push(vote_macronMediane);
    vote_lepenpop_01039.push(vote_lepenMediane);
    vote_rejetpop_01039.push(vote_rejetMediane);
    name_Commune_01039.push(nameCommune);
    Pourcentage_01039.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01039.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01039.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01039.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01039.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01039 = [];
const vote_lepen_01039 = [];
const vote_rejet_01039 = [];
const vote_macronpop_01039 = [];
const vote_lepenpop_01039 = [];
const vote_rejetpop_01039 = [];
const name_Commune_01039 = [];
const Pourcentage_01039 = [];
const Pourcentage_rejet_01039 = [];
const vote_gene_macron_01039 = [];
const vote_gene_lepen_01039 = [];
const vote_gene_rejet_01039 = [];

async function chartIt01039(){
    await GraphDATA01039();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01039-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01039
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01039
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01039-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01039,vote_lepen_01039,vote_rejet_01039]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01039-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01039,vote_lepenpop_01039,vote_rejetpop_01039]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01039"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01039
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01039
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01039
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01040*/
/*------------------------------------------------------------------ */
async function GraphDATA01040() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01040.push(vote_macron); 
    vote_lepen_01040.push(vote_lepen);
    vote_rejet_01040.push(vote_rejet);
    vote_macronpop_01040.push(vote_macronMediane);
    vote_lepenpop_01040.push(vote_lepenMediane);
    vote_rejetpop_01040.push(vote_rejetMediane);
    name_Commune_01040.push(nameCommune);
    Pourcentage_01040.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01040.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01040.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01040.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01040.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01040 = [];
const vote_lepen_01040 = [];
const vote_rejet_01040 = [];
const vote_macronpop_01040 = [];
const vote_lepenpop_01040 = [];
const vote_rejetpop_01040 = [];
const name_Commune_01040 = [];
const Pourcentage_01040 = [];
const Pourcentage_rejet_01040 = [];
const vote_gene_macron_01040 = [];
const vote_gene_lepen_01040 = [];
const vote_gene_rejet_01040 = [];

async function chartIt01040(){
    await GraphDATA01040();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01040-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01040
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01040
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01040-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01040,vote_lepen_01040,vote_rejet_01040]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01040-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01040,vote_lepenpop_01040,vote_rejetpop_01040]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01040"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01040
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01040
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01040
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01041*/
/*------------------------------------------------------------------ */
async function GraphDATA01041() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01041.push(vote_macron); 
    vote_lepen_01041.push(vote_lepen);
    vote_rejet_01041.push(vote_rejet);
    vote_macronpop_01041.push(vote_macronMediane);
    vote_lepenpop_01041.push(vote_lepenMediane);
    vote_rejetpop_01041.push(vote_rejetMediane);
    name_Commune_01041.push(nameCommune);
    Pourcentage_01041.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01041.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01041.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01041.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01041.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01041 = [];
const vote_lepen_01041 = [];
const vote_rejet_01041 = [];
const vote_macronpop_01041 = [];
const vote_lepenpop_01041 = [];
const vote_rejetpop_01041 = [];
const name_Commune_01041 = [];
const Pourcentage_01041 = [];
const Pourcentage_rejet_01041 = [];
const vote_gene_macron_01041 = [];
const vote_gene_lepen_01041 = [];
const vote_gene_rejet_01041 = [];

async function chartIt01041(){
    await GraphDATA01041();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01041-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01041
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01041
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01041-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01041,vote_lepen_01041,vote_rejet_01041]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01041-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01041,vote_lepenpop_01041,vote_rejetpop_01041]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01041"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01041
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01041
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01041
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01042*/
/*------------------------------------------------------------------ */
async function GraphDATA01042() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01042.push(vote_macron); 
    vote_lepen_01042.push(vote_lepen);
    vote_rejet_01042.push(vote_rejet);
    vote_macronpop_01042.push(vote_macronMediane);
    vote_lepenpop_01042.push(vote_lepenMediane);
    vote_rejetpop_01042.push(vote_rejetMediane);
    name_Commune_01042.push(nameCommune);
    Pourcentage_01042.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01042.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01042.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01042.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01042.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01042 = [];
const vote_lepen_01042 = [];
const vote_rejet_01042 = [];
const vote_macronpop_01042 = [];
const vote_lepenpop_01042 = [];
const vote_rejetpop_01042 = [];
const name_Commune_01042 = [];
const Pourcentage_01042 = [];
const Pourcentage_rejet_01042 = [];
const vote_gene_macron_01042 = [];
const vote_gene_lepen_01042 = [];
const vote_gene_rejet_01042 = [];

async function chartIt01042(){
    await GraphDATA01042();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01042-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01042
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01042
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01042-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01042,vote_lepen_01042,vote_rejet_01042]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01042-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01042,vote_lepenpop_01042,vote_rejetpop_01042]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01042"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01042
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01042
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01042
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01043*/
/*------------------------------------------------------------------ */
async function GraphDATA01043() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01043.push(vote_macron); 
    vote_lepen_01043.push(vote_lepen);
    vote_rejet_01043.push(vote_rejet);
    vote_macronpop_01043.push(vote_macronMediane);
    vote_lepenpop_01043.push(vote_lepenMediane);
    vote_rejetpop_01043.push(vote_rejetMediane);
    name_Commune_01043.push(nameCommune);
    Pourcentage_01043.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01043.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01043.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01043.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01043.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01043 = [];
const vote_lepen_01043 = [];
const vote_rejet_01043 = [];
const vote_macronpop_01043 = [];
const vote_lepenpop_01043 = [];
const vote_rejetpop_01043 = [];
const name_Commune_01043 = [];
const Pourcentage_01043 = [];
const Pourcentage_rejet_01043 = [];
const vote_gene_macron_01043 = [];
const vote_gene_lepen_01043 = [];
const vote_gene_rejet_01043 = [];

async function chartIt01043(){
    await GraphDATA01043();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01043-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01043
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01043
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01043-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01043,vote_lepen_01043,vote_rejet_01043]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01043-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01043,vote_lepenpop_01043,vote_rejetpop_01043]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01043"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01043
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01043
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01043
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01044*/
/*------------------------------------------------------------------ */
async function GraphDATA01044() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01044.push(vote_macron); 
    vote_lepen_01044.push(vote_lepen);
    vote_rejet_01044.push(vote_rejet);
    vote_macronpop_01044.push(vote_macronMediane);
    vote_lepenpop_01044.push(vote_lepenMediane);
    vote_rejetpop_01044.push(vote_rejetMediane);
    name_Commune_01044.push(nameCommune);
    Pourcentage_01044.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01044.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01044.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01044.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01044.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01044 = [];
const vote_lepen_01044 = [];
const vote_rejet_01044 = [];
const vote_macronpop_01044 = [];
const vote_lepenpop_01044 = [];
const vote_rejetpop_01044 = [];
const name_Commune_01044 = [];
const Pourcentage_01044 = [];
const Pourcentage_rejet_01044 = [];
const vote_gene_macron_01044 = [];
const vote_gene_lepen_01044 = [];
const vote_gene_rejet_01044 = [];

async function chartIt01044(){
    await GraphDATA01044();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01044-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01044
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01044
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01044-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01044,vote_lepen_01044,vote_rejet_01044]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01044-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01044,vote_lepenpop_01044,vote_rejetpop_01044]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01044"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01044
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01044
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01044
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01045*/
/*------------------------------------------------------------------ */
async function GraphDATA01045() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01045.push(vote_macron); 
    vote_lepen_01045.push(vote_lepen);
    vote_rejet_01045.push(vote_rejet);
    vote_macronpop_01045.push(vote_macronMediane);
    vote_lepenpop_01045.push(vote_lepenMediane);
    vote_rejetpop_01045.push(vote_rejetMediane);
    name_Commune_01045.push(nameCommune);
    Pourcentage_01045.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01045.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01045.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01045.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01045.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01045 = [];
const vote_lepen_01045 = [];
const vote_rejet_01045 = [];
const vote_macronpop_01045 = [];
const vote_lepenpop_01045 = [];
const vote_rejetpop_01045 = [];
const name_Commune_01045 = [];
const Pourcentage_01045 = [];
const Pourcentage_rejet_01045 = [];
const vote_gene_macron_01045 = [];
const vote_gene_lepen_01045 = [];
const vote_gene_rejet_01045 = [];

async function chartIt01045(){
    await GraphDATA01045();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01045-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01045
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01045
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01045-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01045,vote_lepen_01045,vote_rejet_01045]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01045-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01045,vote_lepenpop_01045,vote_rejetpop_01045]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01045"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01045
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01045
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01045
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01046*/
/*------------------------------------------------------------------ */
async function GraphDATA01046() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01046.push(vote_macron); 
    vote_lepen_01046.push(vote_lepen);
    vote_rejet_01046.push(vote_rejet);
    vote_macronpop_01046.push(vote_macronMediane);
    vote_lepenpop_01046.push(vote_lepenMediane);
    vote_rejetpop_01046.push(vote_rejetMediane);
    name_Commune_01046.push(nameCommune);
    Pourcentage_01046.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01046.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01046.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01046.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01046.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01046 = [];
const vote_lepen_01046 = [];
const vote_rejet_01046 = [];
const vote_macronpop_01046 = [];
const vote_lepenpop_01046 = [];
const vote_rejetpop_01046 = [];
const name_Commune_01046 = [];
const Pourcentage_01046 = [];
const Pourcentage_rejet_01046 = [];
const vote_gene_macron_01046 = [];
const vote_gene_lepen_01046 = [];
const vote_gene_rejet_01046 = [];

async function chartIt01046(){
    await GraphDATA01046();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01046-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01046
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01046
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01046-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01046,vote_lepen_01046,vote_rejet_01046]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01046-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01046,vote_lepenpop_01046,vote_rejetpop_01046]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01046"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01046
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01046
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01046
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01047*/
/*------------------------------------------------------------------ */
async function GraphDATA01047() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01047.push(vote_macron); 
    vote_lepen_01047.push(vote_lepen);
    vote_rejet_01047.push(vote_rejet);
    vote_macronpop_01047.push(vote_macronMediane);
    vote_lepenpop_01047.push(vote_lepenMediane);
    vote_rejetpop_01047.push(vote_rejetMediane);
    name_Commune_01047.push(nameCommune);
    Pourcentage_01047.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01047.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01047.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01047.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01047.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01047 = [];
const vote_lepen_01047 = [];
const vote_rejet_01047 = [];
const vote_macronpop_01047 = [];
const vote_lepenpop_01047 = [];
const vote_rejetpop_01047 = [];
const name_Commune_01047 = [];
const Pourcentage_01047 = [];
const Pourcentage_rejet_01047 = [];
const vote_gene_macron_01047 = [];
const vote_gene_lepen_01047 = [];
const vote_gene_rejet_01047 = [];

async function chartIt01047(){
    await GraphDATA01047();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01047-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01047
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01047
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01047-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01047,vote_lepen_01047,vote_rejet_01047]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01047-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01047,vote_lepenpop_01047,vote_rejetpop_01047]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01047"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01047
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01047
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01047
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01048*/
/*------------------------------------------------------------------ */
async function GraphDATA01048() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01048.push(vote_macron); 
    vote_lepen_01048.push(vote_lepen);
    vote_rejet_01048.push(vote_rejet);
    vote_macronpop_01048.push(vote_macronMediane);
    vote_lepenpop_01048.push(vote_lepenMediane);
    vote_rejetpop_01048.push(vote_rejetMediane);
    name_Commune_01048.push(nameCommune);
    Pourcentage_01048.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01048.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01048.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01048.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01048.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01048 = [];
const vote_lepen_01048 = [];
const vote_rejet_01048 = [];
const vote_macronpop_01048 = [];
const vote_lepenpop_01048 = [];
const vote_rejetpop_01048 = [];
const name_Commune_01048 = [];
const Pourcentage_01048 = [];
const Pourcentage_rejet_01048 = [];
const vote_gene_macron_01048 = [];
const vote_gene_lepen_01048 = [];
const vote_gene_rejet_01048 = [];

async function chartIt01048(){
    await GraphDATA01048();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01048-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01048
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01048
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01048-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01048,vote_lepen_01048,vote_rejet_01048]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01048-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01048,vote_lepenpop_01048,vote_rejetpop_01048]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01048"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01048
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01048
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01048
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01049*/
/*------------------------------------------------------------------ */
async function GraphDATA01049() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01049.push(vote_macron); 
    vote_lepen_01049.push(vote_lepen);
    vote_rejet_01049.push(vote_rejet);
    vote_macronpop_01049.push(vote_macronMediane);
    vote_lepenpop_01049.push(vote_lepenMediane);
    vote_rejetpop_01049.push(vote_rejetMediane);
    name_Commune_01049.push(nameCommune);
    Pourcentage_01049.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01049.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01049.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01049.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01049.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01049 = [];
const vote_lepen_01049 = [];
const vote_rejet_01049 = [];
const vote_macronpop_01049 = [];
const vote_lepenpop_01049 = [];
const vote_rejetpop_01049 = [];
const name_Commune_01049 = [];
const Pourcentage_01049 = [];
const Pourcentage_rejet_01049 = [];
const vote_gene_macron_01049 = [];
const vote_gene_lepen_01049 = [];
const vote_gene_rejet_01049 = [];

async function chartIt01049(){
    await GraphDATA01049();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01049-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01049
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01049
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01049-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01049,vote_lepen_01049,vote_rejet_01049]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01049-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01049,vote_lepenpop_01049,vote_rejetpop_01049]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01049"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01049
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01049
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01049
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01050*/
/*------------------------------------------------------------------ */
async function GraphDATA01050() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01050.push(vote_macron); 
    vote_lepen_01050.push(vote_lepen);
    vote_rejet_01050.push(vote_rejet);
    vote_macronpop_01050.push(vote_macronMediane);
    vote_lepenpop_01050.push(vote_lepenMediane);
    vote_rejetpop_01050.push(vote_rejetMediane);
    name_Commune_01050.push(nameCommune);
    Pourcentage_01050.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01050.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01050.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01050.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01050.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01050 = [];
const vote_lepen_01050 = [];
const vote_rejet_01050 = [];
const vote_macronpop_01050 = [];
const vote_lepenpop_01050 = [];
const vote_rejetpop_01050 = [];
const name_Commune_01050 = [];
const Pourcentage_01050 = [];
const Pourcentage_rejet_01050 = [];
const vote_gene_macron_01050 = [];
const vote_gene_lepen_01050 = [];
const vote_gene_rejet_01050 = [];

async function chartIt01050(){
    await GraphDATA01050();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01050-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01050
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01050
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01050-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01050,vote_lepen_01050,vote_rejet_01050]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01050-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01050,vote_lepenpop_01050,vote_rejetpop_01050]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01050"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01050
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01050
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01050
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01051*/
/*------------------------------------------------------------------ */
async function GraphDATA01051() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01051.push(vote_macron); 
    vote_lepen_01051.push(vote_lepen);
    vote_rejet_01051.push(vote_rejet);
    vote_macronpop_01051.push(vote_macronMediane);
    vote_lepenpop_01051.push(vote_lepenMediane);
    vote_rejetpop_01051.push(vote_rejetMediane);
    name_Commune_01051.push(nameCommune);
    Pourcentage_01051.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01051.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01051.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01051.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01051.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01051 = [];
const vote_lepen_01051 = [];
const vote_rejet_01051 = [];
const vote_macronpop_01051 = [];
const vote_lepenpop_01051 = [];
const vote_rejetpop_01051 = [];
const name_Commune_01051 = [];
const Pourcentage_01051 = [];
const Pourcentage_rejet_01051 = [];
const vote_gene_macron_01051 = [];
const vote_gene_lepen_01051 = [];
const vote_gene_rejet_01051 = [];

async function chartIt01051(){
    await GraphDATA01051();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01051-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01051
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01051
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01051-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01051,vote_lepen_01051,vote_rejet_01051]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01051-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01051,vote_lepenpop_01051,vote_rejetpop_01051]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01051"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01051
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01051
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01051
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01052*/
/*------------------------------------------------------------------ */
async function GraphDATA01052() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01052.push(vote_macron); 
    vote_lepen_01052.push(vote_lepen);
    vote_rejet_01052.push(vote_rejet);
    vote_macronpop_01052.push(vote_macronMediane);
    vote_lepenpop_01052.push(vote_lepenMediane);
    vote_rejetpop_01052.push(vote_rejetMediane);
    name_Commune_01052.push(nameCommune);
    Pourcentage_01052.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01052.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01052.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01052.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01052.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01052 = [];
const vote_lepen_01052 = [];
const vote_rejet_01052 = [];
const vote_macronpop_01052 = [];
const vote_lepenpop_01052 = [];
const vote_rejetpop_01052 = [];
const name_Commune_01052 = [];
const Pourcentage_01052 = [];
const Pourcentage_rejet_01052 = [];
const vote_gene_macron_01052 = [];
const vote_gene_lepen_01052 = [];
const vote_gene_rejet_01052 = [];

async function chartIt01052(){
    await GraphDATA01052();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01052-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01052
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01052
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01052-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01052,vote_lepen_01052,vote_rejet_01052]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01052-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01052,vote_lepenpop_01052,vote_rejetpop_01052]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01052"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01052
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01052
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01052
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01053*/
/*------------------------------------------------------------------ */
async function GraphDATA01053() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01053.push(vote_macron); 
    vote_lepen_01053.push(vote_lepen);
    vote_rejet_01053.push(vote_rejet);
    vote_macronpop_01053.push(vote_macronMediane);
    vote_lepenpop_01053.push(vote_lepenMediane);
    vote_rejetpop_01053.push(vote_rejetMediane);
    name_Commune_01053.push(nameCommune);
    Pourcentage_01053.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01053.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01053.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01053.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01053.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01053 = [];
const vote_lepen_01053 = [];
const vote_rejet_01053 = [];
const vote_macronpop_01053 = [];
const vote_lepenpop_01053 = [];
const vote_rejetpop_01053 = [];
const name_Commune_01053 = [];
const Pourcentage_01053 = [];
const Pourcentage_rejet_01053 = [];
const vote_gene_macron_01053 = [];
const vote_gene_lepen_01053 = [];
const vote_gene_rejet_01053 = [];

async function chartIt01053(){
    await GraphDATA01053();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01053-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01053
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01053
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01053-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01053,vote_lepen_01053,vote_rejet_01053]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01053-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01053,vote_lepenpop_01053,vote_rejetpop_01053]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01053"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01053
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01053
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01053
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01054*/
/*------------------------------------------------------------------ */
async function GraphDATA01054() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01054.push(vote_macron); 
    vote_lepen_01054.push(vote_lepen);
    vote_rejet_01054.push(vote_rejet);
    vote_macronpop_01054.push(vote_macronMediane);
    vote_lepenpop_01054.push(vote_lepenMediane);
    vote_rejetpop_01054.push(vote_rejetMediane);
    name_Commune_01054.push(nameCommune);
    Pourcentage_01054.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01054.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01054.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01054.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01054.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01054 = [];
const vote_lepen_01054 = [];
const vote_rejet_01054 = [];
const vote_macronpop_01054 = [];
const vote_lepenpop_01054 = [];
const vote_rejetpop_01054 = [];
const name_Commune_01054 = [];
const Pourcentage_01054 = [];
const Pourcentage_rejet_01054 = [];
const vote_gene_macron_01054 = [];
const vote_gene_lepen_01054 = [];
const vote_gene_rejet_01054 = [];

async function chartIt01054(){
    await GraphDATA01054();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01054-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01054
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01054
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01054-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01054,vote_lepen_01054,vote_rejet_01054]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01054-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01054,vote_lepenpop_01054,vote_rejetpop_01054]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01054"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01054
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01054
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01054
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01055*/
/*------------------------------------------------------------------ */
async function GraphDATA01055() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01055.push(vote_macron); 
    vote_lepen_01055.push(vote_lepen);
    vote_rejet_01055.push(vote_rejet);
    vote_macronpop_01055.push(vote_macronMediane);
    vote_lepenpop_01055.push(vote_lepenMediane);
    vote_rejetpop_01055.push(vote_rejetMediane);
    name_Commune_01055.push(nameCommune);
    Pourcentage_01055.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01055.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01055.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01055.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01055.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01055 = [];
const vote_lepen_01055 = [];
const vote_rejet_01055 = [];
const vote_macronpop_01055 = [];
const vote_lepenpop_01055 = [];
const vote_rejetpop_01055 = [];
const name_Commune_01055 = [];
const Pourcentage_01055 = [];
const Pourcentage_rejet_01055 = [];
const vote_gene_macron_01055 = [];
const vote_gene_lepen_01055 = [];
const vote_gene_rejet_01055 = [];

async function chartIt01055(){
    await GraphDATA01055();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01055-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01055
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01055
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01055-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01055,vote_lepen_01055,vote_rejet_01055]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01055-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01055,vote_lepenpop_01055,vote_rejetpop_01055]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01055"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01055
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01055
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01055
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01056*/
/*------------------------------------------------------------------ */
async function GraphDATA01056() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01056.push(vote_macron); 
    vote_lepen_01056.push(vote_lepen);
    vote_rejet_01056.push(vote_rejet);
    vote_macronpop_01056.push(vote_macronMediane);
    vote_lepenpop_01056.push(vote_lepenMediane);
    vote_rejetpop_01056.push(vote_rejetMediane);
    name_Commune_01056.push(nameCommune);
    Pourcentage_01056.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01056.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01056.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01056.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01056.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01056 = [];
const vote_lepen_01056 = [];
const vote_rejet_01056 = [];
const vote_macronpop_01056 = [];
const vote_lepenpop_01056 = [];
const vote_rejetpop_01056 = [];
const name_Commune_01056 = [];
const Pourcentage_01056 = [];
const Pourcentage_rejet_01056 = [];
const vote_gene_macron_01056 = [];
const vote_gene_lepen_01056 = [];
const vote_gene_rejet_01056 = [];

async function chartIt01056(){
    await GraphDATA01056();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01056-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01056
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01056
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01056-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01056,vote_lepen_01056,vote_rejet_01056]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01056-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01056,vote_lepenpop_01056,vote_rejetpop_01056]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01056"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01056
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01056
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01056
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01057*/
/*------------------------------------------------------------------ */
async function GraphDATA01057() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01057.push(vote_macron); 
    vote_lepen_01057.push(vote_lepen);
    vote_rejet_01057.push(vote_rejet);
    vote_macronpop_01057.push(vote_macronMediane);
    vote_lepenpop_01057.push(vote_lepenMediane);
    vote_rejetpop_01057.push(vote_rejetMediane);
    name_Commune_01057.push(nameCommune);
    Pourcentage_01057.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01057.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01057.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01057.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01057.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01057 = [];
const vote_lepen_01057 = [];
const vote_rejet_01057 = [];
const vote_macronpop_01057 = [];
const vote_lepenpop_01057 = [];
const vote_rejetpop_01057 = [];
const name_Commune_01057 = [];
const Pourcentage_01057 = [];
const Pourcentage_rejet_01057 = [];
const vote_gene_macron_01057 = [];
const vote_gene_lepen_01057 = [];
const vote_gene_rejet_01057 = [];

async function chartIt01057(){
    await GraphDATA01057();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01057-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01057
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01057
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01057-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01057,vote_lepen_01057,vote_rejet_01057]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01057-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01057,vote_lepenpop_01057,vote_rejetpop_01057]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01057"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01057
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01057
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01057
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01058*/
/*------------------------------------------------------------------ */
async function GraphDATA01058() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01058.push(vote_macron); 
    vote_lepen_01058.push(vote_lepen);
    vote_rejet_01058.push(vote_rejet);
    vote_macronpop_01058.push(vote_macronMediane);
    vote_lepenpop_01058.push(vote_lepenMediane);
    vote_rejetpop_01058.push(vote_rejetMediane);
    name_Commune_01058.push(nameCommune);
    Pourcentage_01058.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01058.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01058.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01058.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01058.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01058 = [];
const vote_lepen_01058 = [];
const vote_rejet_01058 = [];
const vote_macronpop_01058 = [];
const vote_lepenpop_01058 = [];
const vote_rejetpop_01058 = [];
const name_Commune_01058 = [];
const Pourcentage_01058 = [];
const Pourcentage_rejet_01058 = [];
const vote_gene_macron_01058 = [];
const vote_gene_lepen_01058 = [];
const vote_gene_rejet_01058 = [];

async function chartIt01058(){
    await GraphDATA01058();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01058-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01058
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01058
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01058-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01058,vote_lepen_01058,vote_rejet_01058]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01058-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01058,vote_lepenpop_01058,vote_rejetpop_01058]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01058"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01058
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01058
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01058
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01059*/
/*------------------------------------------------------------------ */
async function GraphDATA01059() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01059.push(vote_macron); 
    vote_lepen_01059.push(vote_lepen);
    vote_rejet_01059.push(vote_rejet);
    vote_macronpop_01059.push(vote_macronMediane);
    vote_lepenpop_01059.push(vote_lepenMediane);
    vote_rejetpop_01059.push(vote_rejetMediane);
    name_Commune_01059.push(nameCommune);
    Pourcentage_01059.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01059.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01059.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01059.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01059.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01059 = [];
const vote_lepen_01059 = [];
const vote_rejet_01059 = [];
const vote_macronpop_01059 = [];
const vote_lepenpop_01059 = [];
const vote_rejetpop_01059 = [];
const name_Commune_01059 = [];
const Pourcentage_01059 = [];
const Pourcentage_rejet_01059 = [];
const vote_gene_macron_01059 = [];
const vote_gene_lepen_01059 = [];
const vote_gene_rejet_01059 = [];

async function chartIt01059(){
    await GraphDATA01059();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01059-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01059
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01059
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01059-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01059,vote_lepen_01059,vote_rejet_01059]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01059-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01059,vote_lepenpop_01059,vote_rejetpop_01059]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01059"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01059
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01059
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01059
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01060*/
/*------------------------------------------------------------------ */
async function GraphDATA01060() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01060.push(vote_macron); 
    vote_lepen_01060.push(vote_lepen);
    vote_rejet_01060.push(vote_rejet);
    vote_macronpop_01060.push(vote_macronMediane);
    vote_lepenpop_01060.push(vote_lepenMediane);
    vote_rejetpop_01060.push(vote_rejetMediane);
    name_Commune_01060.push(nameCommune);
    Pourcentage_01060.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01060.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01060.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01060.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01060.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01060 = [];
const vote_lepen_01060 = [];
const vote_rejet_01060 = [];
const vote_macronpop_01060 = [];
const vote_lepenpop_01060 = [];
const vote_rejetpop_01060 = [];
const name_Commune_01060 = [];
const Pourcentage_01060 = [];
const Pourcentage_rejet_01060 = [];
const vote_gene_macron_01060 = [];
const vote_gene_lepen_01060 = [];
const vote_gene_rejet_01060 = [];

async function chartIt01060(){
    await GraphDATA01060();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01060-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01060
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01060
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01060-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01060,vote_lepen_01060,vote_rejet_01060]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01060-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01060,vote_lepenpop_01060,vote_rejetpop_01060]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01060"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01060
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01060
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01060
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01061*/
/*------------------------------------------------------------------ */
async function GraphDATA01061() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01061.push(vote_macron); 
    vote_lepen_01061.push(vote_lepen);
    vote_rejet_01061.push(vote_rejet);
    vote_macronpop_01061.push(vote_macronMediane);
    vote_lepenpop_01061.push(vote_lepenMediane);
    vote_rejetpop_01061.push(vote_rejetMediane);
    name_Commune_01061.push(nameCommune);
    Pourcentage_01061.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01061.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01061.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01061.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01061.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01061 = [];
const vote_lepen_01061 = [];
const vote_rejet_01061 = [];
const vote_macronpop_01061 = [];
const vote_lepenpop_01061 = [];
const vote_rejetpop_01061 = [];
const name_Commune_01061 = [];
const Pourcentage_01061 = [];
const Pourcentage_rejet_01061 = [];
const vote_gene_macron_01061 = [];
const vote_gene_lepen_01061 = [];
const vote_gene_rejet_01061 = [];

async function chartIt01061(){
    await GraphDATA01061();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01061-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01061
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01061
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01061-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01061,vote_lepen_01061,vote_rejet_01061]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01061-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01061,vote_lepenpop_01061,vote_rejetpop_01061]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01061"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01061
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01061
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01061
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01062*/
/*------------------------------------------------------------------ */
async function GraphDATA01062() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01062.push(vote_macron); 
    vote_lepen_01062.push(vote_lepen);
    vote_rejet_01062.push(vote_rejet);
    vote_macronpop_01062.push(vote_macronMediane);
    vote_lepenpop_01062.push(vote_lepenMediane);
    vote_rejetpop_01062.push(vote_rejetMediane);
    name_Commune_01062.push(nameCommune);
    Pourcentage_01062.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01062.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01062.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01062.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01062.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01062 = [];
const vote_lepen_01062 = [];
const vote_rejet_01062 = [];
const vote_macronpop_01062 = [];
const vote_lepenpop_01062 = [];
const vote_rejetpop_01062 = [];
const name_Commune_01062 = [];
const Pourcentage_01062 = [];
const Pourcentage_rejet_01062 = [];
const vote_gene_macron_01062 = [];
const vote_gene_lepen_01062 = [];
const vote_gene_rejet_01062 = [];

async function chartIt01062(){
    await GraphDATA01062();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01062-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01062
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01062
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01062-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01062,vote_lepen_01062,vote_rejet_01062]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01062-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01062,vote_lepenpop_01062,vote_rejetpop_01062]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01062"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01062
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01062
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01062
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01063*/
/*------------------------------------------------------------------ */
async function GraphDATA01063() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01063.push(vote_macron); 
    vote_lepen_01063.push(vote_lepen);
    vote_rejet_01063.push(vote_rejet);
    vote_macronpop_01063.push(vote_macronMediane);
    vote_lepenpop_01063.push(vote_lepenMediane);
    vote_rejetpop_01063.push(vote_rejetMediane);
    name_Commune_01063.push(nameCommune);
    Pourcentage_01063.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01063.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01063.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01063.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01063.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01063 = [];
const vote_lepen_01063 = [];
const vote_rejet_01063 = [];
const vote_macronpop_01063 = [];
const vote_lepenpop_01063 = [];
const vote_rejetpop_01063 = [];
const name_Commune_01063 = [];
const Pourcentage_01063 = [];
const Pourcentage_rejet_01063 = [];
const vote_gene_macron_01063 = [];
const vote_gene_lepen_01063 = [];
const vote_gene_rejet_01063 = [];

async function chartIt01063(){
    await GraphDATA01063();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01063-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01063
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01063
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01063-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01063,vote_lepen_01063,vote_rejet_01063]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01063-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01063,vote_lepenpop_01063,vote_rejetpop_01063]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01063"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01063
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01063
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01063
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01064*/
/*------------------------------------------------------------------ */
async function GraphDATA01064() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01064.push(vote_macron); 
    vote_lepen_01064.push(vote_lepen);
    vote_rejet_01064.push(vote_rejet);
    vote_macronpop_01064.push(vote_macronMediane);
    vote_lepenpop_01064.push(vote_lepenMediane);
    vote_rejetpop_01064.push(vote_rejetMediane);
    name_Commune_01064.push(nameCommune);
    Pourcentage_01064.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01064.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01064.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01064.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01064.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01064 = [];
const vote_lepen_01064 = [];
const vote_rejet_01064 = [];
const vote_macronpop_01064 = [];
const vote_lepenpop_01064 = [];
const vote_rejetpop_01064 = [];
const name_Commune_01064 = [];
const Pourcentage_01064 = [];
const Pourcentage_rejet_01064 = [];
const vote_gene_macron_01064 = [];
const vote_gene_lepen_01064 = [];
const vote_gene_rejet_01064 = [];

async function chartIt01064(){
    await GraphDATA01064();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01064-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01064
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01064
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01064-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01064,vote_lepen_01064,vote_rejet_01064]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01064-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01064,vote_lepenpop_01064,vote_rejetpop_01064]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01064"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01064
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01064
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01064
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01065*/
/*------------------------------------------------------------------ */
async function GraphDATA01065() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01065.push(vote_macron); 
    vote_lepen_01065.push(vote_lepen);
    vote_rejet_01065.push(vote_rejet);
    vote_macronpop_01065.push(vote_macronMediane);
    vote_lepenpop_01065.push(vote_lepenMediane);
    vote_rejetpop_01065.push(vote_rejetMediane);
    name_Commune_01065.push(nameCommune);
    Pourcentage_01065.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01065.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01065.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01065.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01065.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01065 = [];
const vote_lepen_01065 = [];
const vote_rejet_01065 = [];
const vote_macronpop_01065 = [];
const vote_lepenpop_01065 = [];
const vote_rejetpop_01065 = [];
const name_Commune_01065 = [];
const Pourcentage_01065 = [];
const Pourcentage_rejet_01065 = [];
const vote_gene_macron_01065 = [];
const vote_gene_lepen_01065 = [];
const vote_gene_rejet_01065 = [];

async function chartIt01065(){
    await GraphDATA01065();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01065-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01065
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01065
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01065-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01065,vote_lepen_01065,vote_rejet_01065]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01065-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01065,vote_lepenpop_01065,vote_rejetpop_01065]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01065"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01065
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01065
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01065
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01066*/
/*------------------------------------------------------------------ */
async function GraphDATA01066() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01066.push(vote_macron); 
    vote_lepen_01066.push(vote_lepen);
    vote_rejet_01066.push(vote_rejet);
    vote_macronpop_01066.push(vote_macronMediane);
    vote_lepenpop_01066.push(vote_lepenMediane);
    vote_rejetpop_01066.push(vote_rejetMediane);
    name_Commune_01066.push(nameCommune);
    Pourcentage_01066.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01066.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01066.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01066.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01066.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01066 = [];
const vote_lepen_01066 = [];
const vote_rejet_01066 = [];
const vote_macronpop_01066 = [];
const vote_lepenpop_01066 = [];
const vote_rejetpop_01066 = [];
const name_Commune_01066 = [];
const Pourcentage_01066 = [];
const Pourcentage_rejet_01066 = [];
const vote_gene_macron_01066 = [];
const vote_gene_lepen_01066 = [];
const vote_gene_rejet_01066 = [];

async function chartIt01066(){
    await GraphDATA01066();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01066-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01066
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01066
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01066-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01066,vote_lepen_01066,vote_rejet_01066]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01066-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01066,vote_lepenpop_01066,vote_rejetpop_01066]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01066"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01066
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01066
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01066
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01067*/
/*------------------------------------------------------------------ */
async function GraphDATA01067() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01067.push(vote_macron); 
    vote_lepen_01067.push(vote_lepen);
    vote_rejet_01067.push(vote_rejet);
    vote_macronpop_01067.push(vote_macronMediane);
    vote_lepenpop_01067.push(vote_lepenMediane);
    vote_rejetpop_01067.push(vote_rejetMediane);
    name_Commune_01067.push(nameCommune);
    Pourcentage_01067.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01067.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01067.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01067.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01067.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01067 = [];
const vote_lepen_01067 = [];
const vote_rejet_01067 = [];
const vote_macronpop_01067 = [];
const vote_lepenpop_01067 = [];
const vote_rejetpop_01067 = [];
const name_Commune_01067 = [];
const Pourcentage_01067 = [];
const Pourcentage_rejet_01067 = [];
const vote_gene_macron_01067 = [];
const vote_gene_lepen_01067 = [];
const vote_gene_rejet_01067 = [];

async function chartIt01067(){
    await GraphDATA01067();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01067-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01067
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01067
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01067-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01067,vote_lepen_01067,vote_rejet_01067]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01067-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01067,vote_lepenpop_01067,vote_rejetpop_01067]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01067"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01067
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01067
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01067
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01068*/
/*------------------------------------------------------------------ */
async function GraphDATA01068() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01068.push(vote_macron); 
    vote_lepen_01068.push(vote_lepen);
    vote_rejet_01068.push(vote_rejet);
    vote_macronpop_01068.push(vote_macronMediane);
    vote_lepenpop_01068.push(vote_lepenMediane);
    vote_rejetpop_01068.push(vote_rejetMediane);
    name_Commune_01068.push(nameCommune);
    Pourcentage_01068.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01068.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01068.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01068.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01068.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01068 = [];
const vote_lepen_01068 = [];
const vote_rejet_01068 = [];
const vote_macronpop_01068 = [];
const vote_lepenpop_01068 = [];
const vote_rejetpop_01068 = [];
const name_Commune_01068 = [];
const Pourcentage_01068 = [];
const Pourcentage_rejet_01068 = [];
const vote_gene_macron_01068 = [];
const vote_gene_lepen_01068 = [];
const vote_gene_rejet_01068 = [];

async function chartIt01068(){
    await GraphDATA01068();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01068-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01068
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01068
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01068-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01068,vote_lepen_01068,vote_rejet_01068]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01068-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01068,vote_lepenpop_01068,vote_rejetpop_01068]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01068"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01068
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01068
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01068
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01069*/
/*------------------------------------------------------------------ */
async function GraphDATA01069() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01069.push(vote_macron); 
    vote_lepen_01069.push(vote_lepen);
    vote_rejet_01069.push(vote_rejet);
    vote_macronpop_01069.push(vote_macronMediane);
    vote_lepenpop_01069.push(vote_lepenMediane);
    vote_rejetpop_01069.push(vote_rejetMediane);
    name_Commune_01069.push(nameCommune);
    Pourcentage_01069.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01069.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01069.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01069.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01069.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01069 = [];
const vote_lepen_01069 = [];
const vote_rejet_01069 = [];
const vote_macronpop_01069 = [];
const vote_lepenpop_01069 = [];
const vote_rejetpop_01069 = [];
const name_Commune_01069 = [];
const Pourcentage_01069 = [];
const Pourcentage_rejet_01069 = [];
const vote_gene_macron_01069 = [];
const vote_gene_lepen_01069 = [];
const vote_gene_rejet_01069 = [];

async function chartIt01069(){
    await GraphDATA01069();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01069-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01069
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01069
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01069-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01069,vote_lepen_01069,vote_rejet_01069]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01069-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01069,vote_lepenpop_01069,vote_rejetpop_01069]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01069"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01069
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01069
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01069
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01070*/
/*------------------------------------------------------------------ */
async function GraphDATA01070() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01070.push(vote_macron); 
    vote_lepen_01070.push(vote_lepen);
    vote_rejet_01070.push(vote_rejet);
    vote_macronpop_01070.push(vote_macronMediane);
    vote_lepenpop_01070.push(vote_lepenMediane);
    vote_rejetpop_01070.push(vote_rejetMediane);
    name_Commune_01070.push(nameCommune);
    Pourcentage_01070.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01070.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01070.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01070.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01070.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01070 = [];
const vote_lepen_01070 = [];
const vote_rejet_01070 = [];
const vote_macronpop_01070 = [];
const vote_lepenpop_01070 = [];
const vote_rejetpop_01070 = [];
const name_Commune_01070 = [];
const Pourcentage_01070 = [];
const Pourcentage_rejet_01070 = [];
const vote_gene_macron_01070 = [];
const vote_gene_lepen_01070 = [];
const vote_gene_rejet_01070 = [];

async function chartIt01070(){
    await GraphDATA01070();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01070-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01070
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01070
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01070-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01070,vote_lepen_01070,vote_rejet_01070]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01070-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01070,vote_lepenpop_01070,vote_rejetpop_01070]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01070"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01070
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01070
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01070
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01071*/
/*------------------------------------------------------------------ */
async function GraphDATA01071() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01071.push(vote_macron); 
    vote_lepen_01071.push(vote_lepen);
    vote_rejet_01071.push(vote_rejet);
    vote_macronpop_01071.push(vote_macronMediane);
    vote_lepenpop_01071.push(vote_lepenMediane);
    vote_rejetpop_01071.push(vote_rejetMediane);
    name_Commune_01071.push(nameCommune);
    Pourcentage_01071.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01071.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01071.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01071.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01071.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01071 = [];
const vote_lepen_01071 = [];
const vote_rejet_01071 = [];
const vote_macronpop_01071 = [];
const vote_lepenpop_01071 = [];
const vote_rejetpop_01071 = [];
const name_Commune_01071 = [];
const Pourcentage_01071 = [];
const Pourcentage_rejet_01071 = [];
const vote_gene_macron_01071 = [];
const vote_gene_lepen_01071 = [];
const vote_gene_rejet_01071 = [];

async function chartIt01071(){
    await GraphDATA01071();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01071-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01071
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01071
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01071-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01071,vote_lepen_01071,vote_rejet_01071]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01071-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01071,vote_lepenpop_01071,vote_rejetpop_01071]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01071"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01071
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01071
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01071
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01072*/
/*------------------------------------------------------------------ */
async function GraphDATA01072() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01072.push(vote_macron); 
    vote_lepen_01072.push(vote_lepen);
    vote_rejet_01072.push(vote_rejet);
    vote_macronpop_01072.push(vote_macronMediane);
    vote_lepenpop_01072.push(vote_lepenMediane);
    vote_rejetpop_01072.push(vote_rejetMediane);
    name_Commune_01072.push(nameCommune);
    Pourcentage_01072.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01072.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01072.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01072.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01072.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01072 = [];
const vote_lepen_01072 = [];
const vote_rejet_01072 = [];
const vote_macronpop_01072 = [];
const vote_lepenpop_01072 = [];
const vote_rejetpop_01072 = [];
const name_Commune_01072 = [];
const Pourcentage_01072 = [];
const Pourcentage_rejet_01072 = [];
const vote_gene_macron_01072 = [];
const vote_gene_lepen_01072 = [];
const vote_gene_rejet_01072 = [];

async function chartIt01072(){
    await GraphDATA01072();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01072-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01072
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01072
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01072-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01072,vote_lepen_01072,vote_rejet_01072]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01072-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01072,vote_lepenpop_01072,vote_rejetpop_01072]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01072"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01072
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01072
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01072
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01073*/
/*------------------------------------------------------------------ */
async function GraphDATA01073() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01073.push(vote_macron); 
    vote_lepen_01073.push(vote_lepen);
    vote_rejet_01073.push(vote_rejet);
    vote_macronpop_01073.push(vote_macronMediane);
    vote_lepenpop_01073.push(vote_lepenMediane);
    vote_rejetpop_01073.push(vote_rejetMediane);
    name_Commune_01073.push(nameCommune);
    Pourcentage_01073.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01073.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01073.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01073.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01073.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01073 = [];
const vote_lepen_01073 = [];
const vote_rejet_01073 = [];
const vote_macronpop_01073 = [];
const vote_lepenpop_01073 = [];
const vote_rejetpop_01073 = [];
const name_Commune_01073 = [];
const Pourcentage_01073 = [];
const Pourcentage_rejet_01073 = [];
const vote_gene_macron_01073 = [];
const vote_gene_lepen_01073 = [];
const vote_gene_rejet_01073 = [];

async function chartIt01073(){
    await GraphDATA01073();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01073-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01073
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01073
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01073-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01073,vote_lepen_01073,vote_rejet_01073]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01073-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01073,vote_lepenpop_01073,vote_rejetpop_01073]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01073"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01073
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01073
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01073
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01074*/
/*------------------------------------------------------------------ */
async function GraphDATA01074() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01074.push(vote_macron); 
    vote_lepen_01074.push(vote_lepen);
    vote_rejet_01074.push(vote_rejet);
    vote_macronpop_01074.push(vote_macronMediane);
    vote_lepenpop_01074.push(vote_lepenMediane);
    vote_rejetpop_01074.push(vote_rejetMediane);
    name_Commune_01074.push(nameCommune);
    Pourcentage_01074.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01074.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01074.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01074.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01074.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01074 = [];
const vote_lepen_01074 = [];
const vote_rejet_01074 = [];
const vote_macronpop_01074 = [];
const vote_lepenpop_01074 = [];
const vote_rejetpop_01074 = [];
const name_Commune_01074 = [];
const Pourcentage_01074 = [];
const Pourcentage_rejet_01074 = [];
const vote_gene_macron_01074 = [];
const vote_gene_lepen_01074 = [];
const vote_gene_rejet_01074 = [];

async function chartIt01074(){
    await GraphDATA01074();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01074-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01074
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01074
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01074-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01074,vote_lepen_01074,vote_rejet_01074]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01074-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01074,vote_lepenpop_01074,vote_rejetpop_01074]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01074"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01074
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01074
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01074
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01075*/
/*------------------------------------------------------------------ */
async function GraphDATA01075() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01075.push(vote_macron); 
    vote_lepen_01075.push(vote_lepen);
    vote_rejet_01075.push(vote_rejet);
    vote_macronpop_01075.push(vote_macronMediane);
    vote_lepenpop_01075.push(vote_lepenMediane);
    vote_rejetpop_01075.push(vote_rejetMediane);
    name_Commune_01075.push(nameCommune);
    Pourcentage_01075.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01075.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01075.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01075.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01075.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01075 = [];
const vote_lepen_01075 = [];
const vote_rejet_01075 = [];
const vote_macronpop_01075 = [];
const vote_lepenpop_01075 = [];
const vote_rejetpop_01075 = [];
const name_Commune_01075 = [];
const Pourcentage_01075 = [];
const Pourcentage_rejet_01075 = [];
const vote_gene_macron_01075 = [];
const vote_gene_lepen_01075 = [];
const vote_gene_rejet_01075 = [];

async function chartIt01075(){
    await GraphDATA01075();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01075-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01075
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01075
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01075-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01075,vote_lepen_01075,vote_rejet_01075]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01075-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01075,vote_lepenpop_01075,vote_rejetpop_01075]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01075"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01075
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01075
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01075
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01076*/
/*------------------------------------------------------------------ */
async function GraphDATA01076() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01076.push(vote_macron); 
    vote_lepen_01076.push(vote_lepen);
    vote_rejet_01076.push(vote_rejet);
    vote_macronpop_01076.push(vote_macronMediane);
    vote_lepenpop_01076.push(vote_lepenMediane);
    vote_rejetpop_01076.push(vote_rejetMediane);
    name_Commune_01076.push(nameCommune);
    Pourcentage_01076.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01076.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01076.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01076.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01076.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01076 = [];
const vote_lepen_01076 = [];
const vote_rejet_01076 = [];
const vote_macronpop_01076 = [];
const vote_lepenpop_01076 = [];
const vote_rejetpop_01076 = [];
const name_Commune_01076 = [];
const Pourcentage_01076 = [];
const Pourcentage_rejet_01076 = [];
const vote_gene_macron_01076 = [];
const vote_gene_lepen_01076 = [];
const vote_gene_rejet_01076 = [];

async function chartIt01076(){
    await GraphDATA01076();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01076-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01076
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01076
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01076-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01076,vote_lepen_01076,vote_rejet_01076]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01076-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01076,vote_lepenpop_01076,vote_rejetpop_01076]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01076"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01076
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01076
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01076
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01077*/
/*------------------------------------------------------------------ */
async function GraphDATA01077() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01077.push(vote_macron); 
    vote_lepen_01077.push(vote_lepen);
    vote_rejet_01077.push(vote_rejet);
    vote_macronpop_01077.push(vote_macronMediane);
    vote_lepenpop_01077.push(vote_lepenMediane);
    vote_rejetpop_01077.push(vote_rejetMediane);
    name_Commune_01077.push(nameCommune);
    Pourcentage_01077.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01077.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01077.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01077.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01077.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01077 = [];
const vote_lepen_01077 = [];
const vote_rejet_01077 = [];
const vote_macronpop_01077 = [];
const vote_lepenpop_01077 = [];
const vote_rejetpop_01077 = [];
const name_Commune_01077 = [];
const Pourcentage_01077 = [];
const Pourcentage_rejet_01077 = [];
const vote_gene_macron_01077 = [];
const vote_gene_lepen_01077 = [];
const vote_gene_rejet_01077 = [];

async function chartIt01077(){
    await GraphDATA01077();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01077-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01077
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01077
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01077-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01077,vote_lepen_01077,vote_rejet_01077]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01077-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01077,vote_lepenpop_01077,vote_rejetpop_01077]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01077"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01077
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01077
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01077
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01078*/
/*------------------------------------------------------------------ */
async function GraphDATA01078() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01078.push(vote_macron); 
    vote_lepen_01078.push(vote_lepen);
    vote_rejet_01078.push(vote_rejet);
    vote_macronpop_01078.push(vote_macronMediane);
    vote_lepenpop_01078.push(vote_lepenMediane);
    vote_rejetpop_01078.push(vote_rejetMediane);
    name_Commune_01078.push(nameCommune);
    Pourcentage_01078.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01078.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01078.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01078.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01078.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01078 = [];
const vote_lepen_01078 = [];
const vote_rejet_01078 = [];
const vote_macronpop_01078 = [];
const vote_lepenpop_01078 = [];
const vote_rejetpop_01078 = [];
const name_Commune_01078 = [];
const Pourcentage_01078 = [];
const Pourcentage_rejet_01078 = [];
const vote_gene_macron_01078 = [];
const vote_gene_lepen_01078 = [];
const vote_gene_rejet_01078 = [];

async function chartIt01078(){
    await GraphDATA01078();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01078-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01078
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01078
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01078-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01078,vote_lepen_01078,vote_rejet_01078]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01078-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01078,vote_lepenpop_01078,vote_rejetpop_01078]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01078"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01078
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01078
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01078
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01079*/
/*------------------------------------------------------------------ */
async function GraphDATA01079() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01079.push(vote_macron); 
    vote_lepen_01079.push(vote_lepen);
    vote_rejet_01079.push(vote_rejet);
    vote_macronpop_01079.push(vote_macronMediane);
    vote_lepenpop_01079.push(vote_lepenMediane);
    vote_rejetpop_01079.push(vote_rejetMediane);
    name_Commune_01079.push(nameCommune);
    Pourcentage_01079.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01079.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01079.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01079.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01079.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01079 = [];
const vote_lepen_01079 = [];
const vote_rejet_01079 = [];
const vote_macronpop_01079 = [];
const vote_lepenpop_01079 = [];
const vote_rejetpop_01079 = [];
const name_Commune_01079 = [];
const Pourcentage_01079 = [];
const Pourcentage_rejet_01079 = [];
const vote_gene_macron_01079 = [];
const vote_gene_lepen_01079 = [];
const vote_gene_rejet_01079 = [];

async function chartIt01079(){
    await GraphDATA01079();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01079-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01079
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01079
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01079-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01079,vote_lepen_01079,vote_rejet_01079]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01079-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01079,vote_lepenpop_01079,vote_rejetpop_01079]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01079"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01079
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01079
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01079
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01080*/
/*------------------------------------------------------------------ */
async function GraphDATA01080() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01080.push(vote_macron); 
    vote_lepen_01080.push(vote_lepen);
    vote_rejet_01080.push(vote_rejet);
    vote_macronpop_01080.push(vote_macronMediane);
    vote_lepenpop_01080.push(vote_lepenMediane);
    vote_rejetpop_01080.push(vote_rejetMediane);
    name_Commune_01080.push(nameCommune);
    Pourcentage_01080.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01080.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01080.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01080.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01080.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01080 = [];
const vote_lepen_01080 = [];
const vote_rejet_01080 = [];
const vote_macronpop_01080 = [];
const vote_lepenpop_01080 = [];
const vote_rejetpop_01080 = [];
const name_Commune_01080 = [];
const Pourcentage_01080 = [];
const Pourcentage_rejet_01080 = [];
const vote_gene_macron_01080 = [];
const vote_gene_lepen_01080 = [];
const vote_gene_rejet_01080 = [];

async function chartIt01080(){
    await GraphDATA01080();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01080-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01080
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01080
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01080-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01080,vote_lepen_01080,vote_rejet_01080]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01080-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01080,vote_lepenpop_01080,vote_rejetpop_01080]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01080"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01080
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01080
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01080
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01081*/
/*------------------------------------------------------------------ */
async function GraphDATA01081() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01081.push(vote_macron); 
    vote_lepen_01081.push(vote_lepen);
    vote_rejet_01081.push(vote_rejet);
    vote_macronpop_01081.push(vote_macronMediane);
    vote_lepenpop_01081.push(vote_lepenMediane);
    vote_rejetpop_01081.push(vote_rejetMediane);
    name_Commune_01081.push(nameCommune);
    Pourcentage_01081.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01081.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01081.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01081.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01081.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01081 = [];
const vote_lepen_01081 = [];
const vote_rejet_01081 = [];
const vote_macronpop_01081 = [];
const vote_lepenpop_01081 = [];
const vote_rejetpop_01081 = [];
const name_Commune_01081 = [];
const Pourcentage_01081 = [];
const Pourcentage_rejet_01081 = [];
const vote_gene_macron_01081 = [];
const vote_gene_lepen_01081 = [];
const vote_gene_rejet_01081 = [];

async function chartIt01081(){
    await GraphDATA01081();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01081-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01081
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01081
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01081-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01081,vote_lepen_01081,vote_rejet_01081]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01081-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01081,vote_lepenpop_01081,vote_rejetpop_01081]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01081"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01081
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01081
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01081
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01082*/
/*------------------------------------------------------------------ */
async function GraphDATA01082() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01082.push(vote_macron); 
    vote_lepen_01082.push(vote_lepen);
    vote_rejet_01082.push(vote_rejet);
    vote_macronpop_01082.push(vote_macronMediane);
    vote_lepenpop_01082.push(vote_lepenMediane);
    vote_rejetpop_01082.push(vote_rejetMediane);
    name_Commune_01082.push(nameCommune);
    Pourcentage_01082.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01082.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01082.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01082.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01082.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01082 = [];
const vote_lepen_01082 = [];
const vote_rejet_01082 = [];
const vote_macronpop_01082 = [];
const vote_lepenpop_01082 = [];
const vote_rejetpop_01082 = [];
const name_Commune_01082 = [];
const Pourcentage_01082 = [];
const Pourcentage_rejet_01082 = [];
const vote_gene_macron_01082 = [];
const vote_gene_lepen_01082 = [];
const vote_gene_rejet_01082 = [];

async function chartIt01082(){
    await GraphDATA01082();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01082-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01082
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01082
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01082-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01082,vote_lepen_01082,vote_rejet_01082]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01082-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01082,vote_lepenpop_01082,vote_rejetpop_01082]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01082"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01082
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01082
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01082
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01083*/
/*------------------------------------------------------------------ */
async function GraphDATA01083() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01083.push(vote_macron); 
    vote_lepen_01083.push(vote_lepen);
    vote_rejet_01083.push(vote_rejet);
    vote_macronpop_01083.push(vote_macronMediane);
    vote_lepenpop_01083.push(vote_lepenMediane);
    vote_rejetpop_01083.push(vote_rejetMediane);
    name_Commune_01083.push(nameCommune);
    Pourcentage_01083.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01083.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01083.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01083.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01083.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01083 = [];
const vote_lepen_01083 = [];
const vote_rejet_01083 = [];
const vote_macronpop_01083 = [];
const vote_lepenpop_01083 = [];
const vote_rejetpop_01083 = [];
const name_Commune_01083 = [];
const Pourcentage_01083 = [];
const Pourcentage_rejet_01083 = [];
const vote_gene_macron_01083 = [];
const vote_gene_lepen_01083 = [];
const vote_gene_rejet_01083 = [];

async function chartIt01083(){
    await GraphDATA01083();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01083-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01083
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01083
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01083-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01083,vote_lepen_01083,vote_rejet_01083]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01083-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01083,vote_lepenpop_01083,vote_rejetpop_01083]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01083"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01083
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01083
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01083
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01084*/
/*------------------------------------------------------------------ */
async function GraphDATA01084() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01084.push(vote_macron); 
    vote_lepen_01084.push(vote_lepen);
    vote_rejet_01084.push(vote_rejet);
    vote_macronpop_01084.push(vote_macronMediane);
    vote_lepenpop_01084.push(vote_lepenMediane);
    vote_rejetpop_01084.push(vote_rejetMediane);
    name_Commune_01084.push(nameCommune);
    Pourcentage_01084.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01084.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01084.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01084.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01084.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01084 = [];
const vote_lepen_01084 = [];
const vote_rejet_01084 = [];
const vote_macronpop_01084 = [];
const vote_lepenpop_01084 = [];
const vote_rejetpop_01084 = [];
const name_Commune_01084 = [];
const Pourcentage_01084 = [];
const Pourcentage_rejet_01084 = [];
const vote_gene_macron_01084 = [];
const vote_gene_lepen_01084 = [];
const vote_gene_rejet_01084 = [];

async function chartIt01084(){
    await GraphDATA01084();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01084-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01084
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01084
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01084-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01084,vote_lepen_01084,vote_rejet_01084]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01084-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01084,vote_lepenpop_01084,vote_rejetpop_01084]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01084"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01084
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01084
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01084
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01085*/
/*------------------------------------------------------------------ */
async function GraphDATA01085() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01085.push(vote_macron); 
    vote_lepen_01085.push(vote_lepen);
    vote_rejet_01085.push(vote_rejet);
    vote_macronpop_01085.push(vote_macronMediane);
    vote_lepenpop_01085.push(vote_lepenMediane);
    vote_rejetpop_01085.push(vote_rejetMediane);
    name_Commune_01085.push(nameCommune);
    Pourcentage_01085.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01085.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01085.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01085.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01085.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01085 = [];
const vote_lepen_01085 = [];
const vote_rejet_01085 = [];
const vote_macronpop_01085 = [];
const vote_lepenpop_01085 = [];
const vote_rejetpop_01085 = [];
const name_Commune_01085 = [];
const Pourcentage_01085 = [];
const Pourcentage_rejet_01085 = [];
const vote_gene_macron_01085 = [];
const vote_gene_lepen_01085 = [];
const vote_gene_rejet_01085 = [];

async function chartIt01085(){
    await GraphDATA01085();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01085-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01085
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01085
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01085-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01085,vote_lepen_01085,vote_rejet_01085]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01085-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01085,vote_lepenpop_01085,vote_rejetpop_01085]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01085"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01085
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01085
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01085
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01086*/
/*------------------------------------------------------------------ */
async function GraphDATA01086() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01086.push(vote_macron); 
    vote_lepen_01086.push(vote_lepen);
    vote_rejet_01086.push(vote_rejet);
    vote_macronpop_01086.push(vote_macronMediane);
    vote_lepenpop_01086.push(vote_lepenMediane);
    vote_rejetpop_01086.push(vote_rejetMediane);
    name_Commune_01086.push(nameCommune);
    Pourcentage_01086.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01086.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01086.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01086.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01086.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01086 = [];
const vote_lepen_01086 = [];
const vote_rejet_01086 = [];
const vote_macronpop_01086 = [];
const vote_lepenpop_01086 = [];
const vote_rejetpop_01086 = [];
const name_Commune_01086 = [];
const Pourcentage_01086 = [];
const Pourcentage_rejet_01086 = [];
const vote_gene_macron_01086 = [];
const vote_gene_lepen_01086 = [];
const vote_gene_rejet_01086 = [];

async function chartIt01086(){
    await GraphDATA01086();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01086-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01086
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01086
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01086-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01086,vote_lepen_01086,vote_rejet_01086]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01086-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01086,vote_lepenpop_01086,vote_rejetpop_01086]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01086"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01086
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01086
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01086
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01087*/
/*------------------------------------------------------------------ */
async function GraphDATA01087() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01087.push(vote_macron); 
    vote_lepen_01087.push(vote_lepen);
    vote_rejet_01087.push(vote_rejet);
    vote_macronpop_01087.push(vote_macronMediane);
    vote_lepenpop_01087.push(vote_lepenMediane);
    vote_rejetpop_01087.push(vote_rejetMediane);
    name_Commune_01087.push(nameCommune);
    Pourcentage_01087.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01087.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01087.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01087.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01087.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01087 = [];
const vote_lepen_01087 = [];
const vote_rejet_01087 = [];
const vote_macronpop_01087 = [];
const vote_lepenpop_01087 = [];
const vote_rejetpop_01087 = [];
const name_Commune_01087 = [];
const Pourcentage_01087 = [];
const Pourcentage_rejet_01087 = [];
const vote_gene_macron_01087 = [];
const vote_gene_lepen_01087 = [];
const vote_gene_rejet_01087 = [];

async function chartIt01087(){
    await GraphDATA01087();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01087-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01087
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01087
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01087-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01087,vote_lepen_01087,vote_rejet_01087]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01087-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01087,vote_lepenpop_01087,vote_rejetpop_01087]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01087"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01087
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01087
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01087
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01088*/
/*------------------------------------------------------------------ */
async function GraphDATA01088() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01088.push(vote_macron); 
    vote_lepen_01088.push(vote_lepen);
    vote_rejet_01088.push(vote_rejet);
    vote_macronpop_01088.push(vote_macronMediane);
    vote_lepenpop_01088.push(vote_lepenMediane);
    vote_rejetpop_01088.push(vote_rejetMediane);
    name_Commune_01088.push(nameCommune);
    Pourcentage_01088.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01088.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01088.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01088.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01088.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01088 = [];
const vote_lepen_01088 = [];
const vote_rejet_01088 = [];
const vote_macronpop_01088 = [];
const vote_lepenpop_01088 = [];
const vote_rejetpop_01088 = [];
const name_Commune_01088 = [];
const Pourcentage_01088 = [];
const Pourcentage_rejet_01088 = [];
const vote_gene_macron_01088 = [];
const vote_gene_lepen_01088 = [];
const vote_gene_rejet_01088 = [];

async function chartIt01088(){
    await GraphDATA01088();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01088-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01088
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01088
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01088-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01088,vote_lepen_01088,vote_rejet_01088]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01088-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01088,vote_lepenpop_01088,vote_rejetpop_01088]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01088"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01088
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01088
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01088
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01089*/
/*------------------------------------------------------------------ */
async function GraphDATA01089() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01089.push(vote_macron); 
    vote_lepen_01089.push(vote_lepen);
    vote_rejet_01089.push(vote_rejet);
    vote_macronpop_01089.push(vote_macronMediane);
    vote_lepenpop_01089.push(vote_lepenMediane);
    vote_rejetpop_01089.push(vote_rejetMediane);
    name_Commune_01089.push(nameCommune);
    Pourcentage_01089.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01089.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01089.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01089.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01089.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01089 = [];
const vote_lepen_01089 = [];
const vote_rejet_01089 = [];
const vote_macronpop_01089 = [];
const vote_lepenpop_01089 = [];
const vote_rejetpop_01089 = [];
const name_Commune_01089 = [];
const Pourcentage_01089 = [];
const Pourcentage_rejet_01089 = [];
const vote_gene_macron_01089 = [];
const vote_gene_lepen_01089 = [];
const vote_gene_rejet_01089 = [];

async function chartIt01089(){
    await GraphDATA01089();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01089-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01089
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01089
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01089-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01089,vote_lepen_01089,vote_rejet_01089]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01089-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01089,vote_lepenpop_01089,vote_rejetpop_01089]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01089"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01089
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01089
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01089
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01090*/
/*------------------------------------------------------------------ */
async function GraphDATA01090() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01090.push(vote_macron); 
    vote_lepen_01090.push(vote_lepen);
    vote_rejet_01090.push(vote_rejet);
    vote_macronpop_01090.push(vote_macronMediane);
    vote_lepenpop_01090.push(vote_lepenMediane);
    vote_rejetpop_01090.push(vote_rejetMediane);
    name_Commune_01090.push(nameCommune);
    Pourcentage_01090.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01090.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01090.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01090.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01090.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01090 = [];
const vote_lepen_01090 = [];
const vote_rejet_01090 = [];
const vote_macronpop_01090 = [];
const vote_lepenpop_01090 = [];
const vote_rejetpop_01090 = [];
const name_Commune_01090 = [];
const Pourcentage_01090 = [];
const Pourcentage_rejet_01090 = [];
const vote_gene_macron_01090 = [];
const vote_gene_lepen_01090 = [];
const vote_gene_rejet_01090 = [];

async function chartIt01090(){
    await GraphDATA01090();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01090-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01090
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01090
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01090-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01090,vote_lepen_01090,vote_rejet_01090]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01090-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01090,vote_lepenpop_01090,vote_rejetpop_01090]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01090"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01090
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01090
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01090
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01091*/
/*------------------------------------------------------------------ */
async function GraphDATA01091() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01091.push(vote_macron); 
    vote_lepen_01091.push(vote_lepen);
    vote_rejet_01091.push(vote_rejet);
    vote_macronpop_01091.push(vote_macronMediane);
    vote_lepenpop_01091.push(vote_lepenMediane);
    vote_rejetpop_01091.push(vote_rejetMediane);
    name_Commune_01091.push(nameCommune);
    Pourcentage_01091.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01091.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01091.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01091.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01091.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01091 = [];
const vote_lepen_01091 = [];
const vote_rejet_01091 = [];
const vote_macronpop_01091 = [];
const vote_lepenpop_01091 = [];
const vote_rejetpop_01091 = [];
const name_Commune_01091 = [];
const Pourcentage_01091 = [];
const Pourcentage_rejet_01091 = [];
const vote_gene_macron_01091 = [];
const vote_gene_lepen_01091 = [];
const vote_gene_rejet_01091 = [];

async function chartIt01091(){
    await GraphDATA01091();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01091-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01091
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01091
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01091-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01091,vote_lepen_01091,vote_rejet_01091]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01091-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01091,vote_lepenpop_01091,vote_rejetpop_01091]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01091"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01091
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01091
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01091
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01092*/
/*------------------------------------------------------------------ */
async function GraphDATA01092() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01092.push(vote_macron); 
    vote_lepen_01092.push(vote_lepen);
    vote_rejet_01092.push(vote_rejet);
    vote_macronpop_01092.push(vote_macronMediane);
    vote_lepenpop_01092.push(vote_lepenMediane);
    vote_rejetpop_01092.push(vote_rejetMediane);
    name_Commune_01092.push(nameCommune);
    Pourcentage_01092.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01092.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01092.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01092.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01092.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01092 = [];
const vote_lepen_01092 = [];
const vote_rejet_01092 = [];
const vote_macronpop_01092 = [];
const vote_lepenpop_01092 = [];
const vote_rejetpop_01092 = [];
const name_Commune_01092 = [];
const Pourcentage_01092 = [];
const Pourcentage_rejet_01092 = [];
const vote_gene_macron_01092 = [];
const vote_gene_lepen_01092 = [];
const vote_gene_rejet_01092 = [];

async function chartIt01092(){
    await GraphDATA01092();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01092-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01092
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01092
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01092-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01092,vote_lepen_01092,vote_rejet_01092]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01092-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01092,vote_lepenpop_01092,vote_rejetpop_01092]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01092"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01092
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01092
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01092
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01093*/
/*------------------------------------------------------------------ */
async function GraphDATA01093() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01093.push(vote_macron); 
    vote_lepen_01093.push(vote_lepen);
    vote_rejet_01093.push(vote_rejet);
    vote_macronpop_01093.push(vote_macronMediane);
    vote_lepenpop_01093.push(vote_lepenMediane);
    vote_rejetpop_01093.push(vote_rejetMediane);
    name_Commune_01093.push(nameCommune);
    Pourcentage_01093.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01093.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01093.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01093.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01093.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01093 = [];
const vote_lepen_01093 = [];
const vote_rejet_01093 = [];
const vote_macronpop_01093 = [];
const vote_lepenpop_01093 = [];
const vote_rejetpop_01093 = [];
const name_Commune_01093 = [];
const Pourcentage_01093 = [];
const Pourcentage_rejet_01093 = [];
const vote_gene_macron_01093 = [];
const vote_gene_lepen_01093 = [];
const vote_gene_rejet_01093 = [];

async function chartIt01093(){
    await GraphDATA01093();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01093-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01093
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01093
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01093-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01093,vote_lepen_01093,vote_rejet_01093]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01093-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01093,vote_lepenpop_01093,vote_rejetpop_01093]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01093"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01093
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01093
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01093
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01094*/
/*------------------------------------------------------------------ */
async function GraphDATA01094() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01094.push(vote_macron); 
    vote_lepen_01094.push(vote_lepen);
    vote_rejet_01094.push(vote_rejet);
    vote_macronpop_01094.push(vote_macronMediane);
    vote_lepenpop_01094.push(vote_lepenMediane);
    vote_rejetpop_01094.push(vote_rejetMediane);
    name_Commune_01094.push(nameCommune);
    Pourcentage_01094.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01094.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01094.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01094.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01094.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01094 = [];
const vote_lepen_01094 = [];
const vote_rejet_01094 = [];
const vote_macronpop_01094 = [];
const vote_lepenpop_01094 = [];
const vote_rejetpop_01094 = [];
const name_Commune_01094 = [];
const Pourcentage_01094 = [];
const Pourcentage_rejet_01094 = [];
const vote_gene_macron_01094 = [];
const vote_gene_lepen_01094 = [];
const vote_gene_rejet_01094 = [];

async function chartIt01094(){
    await GraphDATA01094();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01094-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01094
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01094
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01094-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01094,vote_lepen_01094,vote_rejet_01094]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01094-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01094,vote_lepenpop_01094,vote_rejetpop_01094]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01094"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01094
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01094
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01094
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01095*/
/*------------------------------------------------------------------ */
async function GraphDATA01095() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01095.push(vote_macron); 
    vote_lepen_01095.push(vote_lepen);
    vote_rejet_01095.push(vote_rejet);
    vote_macronpop_01095.push(vote_macronMediane);
    vote_lepenpop_01095.push(vote_lepenMediane);
    vote_rejetpop_01095.push(vote_rejetMediane);
    name_Commune_01095.push(nameCommune);
    Pourcentage_01095.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01095.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01095.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01095.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01095.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01095 = [];
const vote_lepen_01095 = [];
const vote_rejet_01095 = [];
const vote_macronpop_01095 = [];
const vote_lepenpop_01095 = [];
const vote_rejetpop_01095 = [];
const name_Commune_01095 = [];
const Pourcentage_01095 = [];
const Pourcentage_rejet_01095 = [];
const vote_gene_macron_01095 = [];
const vote_gene_lepen_01095 = [];
const vote_gene_rejet_01095 = [];

async function chartIt01095(){
    await GraphDATA01095();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01095-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01095
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01095
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01095-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01095,vote_lepen_01095,vote_rejet_01095]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01095-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01095,vote_lepenpop_01095,vote_rejetpop_01095]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01095"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01095
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01095
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01095
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01096*/
/*------------------------------------------------------------------ */
async function GraphDATA01096() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01096.push(vote_macron); 
    vote_lepen_01096.push(vote_lepen);
    vote_rejet_01096.push(vote_rejet);
    vote_macronpop_01096.push(vote_macronMediane);
    vote_lepenpop_01096.push(vote_lepenMediane);
    vote_rejetpop_01096.push(vote_rejetMediane);
    name_Commune_01096.push(nameCommune);
    Pourcentage_01096.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01096.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01096.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01096.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01096.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01096 = [];
const vote_lepen_01096 = [];
const vote_rejet_01096 = [];
const vote_macronpop_01096 = [];
const vote_lepenpop_01096 = [];
const vote_rejetpop_01096 = [];
const name_Commune_01096 = [];
const Pourcentage_01096 = [];
const Pourcentage_rejet_01096 = [];
const vote_gene_macron_01096 = [];
const vote_gene_lepen_01096 = [];
const vote_gene_rejet_01096 = [];

async function chartIt01096(){
    await GraphDATA01096();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01096-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01096
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01096
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01096-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01096,vote_lepen_01096,vote_rejet_01096]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01096-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01096,vote_lepenpop_01096,vote_rejetpop_01096]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01096"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01096
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01096
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01096
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01097*/
/*------------------------------------------------------------------ */
async function GraphDATA01097() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01097.push(vote_macron); 
    vote_lepen_01097.push(vote_lepen);
    vote_rejet_01097.push(vote_rejet);
    vote_macronpop_01097.push(vote_macronMediane);
    vote_lepenpop_01097.push(vote_lepenMediane);
    vote_rejetpop_01097.push(vote_rejetMediane);
    name_Commune_01097.push(nameCommune);
    Pourcentage_01097.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01097.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01097.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01097.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01097.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01097 = [];
const vote_lepen_01097 = [];
const vote_rejet_01097 = [];
const vote_macronpop_01097 = [];
const vote_lepenpop_01097 = [];
const vote_rejetpop_01097 = [];
const name_Commune_01097 = [];
const Pourcentage_01097 = [];
const Pourcentage_rejet_01097 = [];
const vote_gene_macron_01097 = [];
const vote_gene_lepen_01097 = [];
const vote_gene_rejet_01097 = [];

async function chartIt01097(){
    await GraphDATA01097();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01097-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01097
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01097
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01097-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01097,vote_lepen_01097,vote_rejet_01097]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01097-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01097,vote_lepenpop_01097,vote_rejetpop_01097]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01097"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01097
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01097
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01097
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01098*/
/*------------------------------------------------------------------ */
async function GraphDATA01098() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01098.push(vote_macron); 
    vote_lepen_01098.push(vote_lepen);
    vote_rejet_01098.push(vote_rejet);
    vote_macronpop_01098.push(vote_macronMediane);
    vote_lepenpop_01098.push(vote_lepenMediane);
    vote_rejetpop_01098.push(vote_rejetMediane);
    name_Commune_01098.push(nameCommune);
    Pourcentage_01098.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01098.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01098.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01098.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01098.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01098 = [];
const vote_lepen_01098 = [];
const vote_rejet_01098 = [];
const vote_macronpop_01098 = [];
const vote_lepenpop_01098 = [];
const vote_rejetpop_01098 = [];
const name_Commune_01098 = [];
const Pourcentage_01098 = [];
const Pourcentage_rejet_01098 = [];
const vote_gene_macron_01098 = [];
const vote_gene_lepen_01098 = [];
const vote_gene_rejet_01098 = [];

async function chartIt01098(){
    await GraphDATA01098();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01098-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01098
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01098
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01098-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01098,vote_lepen_01098,vote_rejet_01098]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01098-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01098,vote_lepenpop_01098,vote_rejetpop_01098]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01098"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01098
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01098
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01098
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01099*/
/*------------------------------------------------------------------ */
async function GraphDATA01099() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01099.push(vote_macron); 
    vote_lepen_01099.push(vote_lepen);
    vote_rejet_01099.push(vote_rejet);
    vote_macronpop_01099.push(vote_macronMediane);
    vote_lepenpop_01099.push(vote_lepenMediane);
    vote_rejetpop_01099.push(vote_rejetMediane);
    name_Commune_01099.push(nameCommune);
    Pourcentage_01099.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01099.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01099.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01099.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01099.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01099 = [];
const vote_lepen_01099 = [];
const vote_rejet_01099 = [];
const vote_macronpop_01099 = [];
const vote_lepenpop_01099 = [];
const vote_rejetpop_01099 = [];
const name_Commune_01099 = [];
const Pourcentage_01099 = [];
const Pourcentage_rejet_01099 = [];
const vote_gene_macron_01099 = [];
const vote_gene_lepen_01099 = [];
const vote_gene_rejet_01099 = [];

async function chartIt01099(){
    await GraphDATA01099();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01099-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01099
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01099
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01099-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01099,vote_lepen_01099,vote_rejet_01099]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01099-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01099,vote_lepenpop_01099,vote_rejetpop_01099]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01099"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01099
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01099
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01099
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}