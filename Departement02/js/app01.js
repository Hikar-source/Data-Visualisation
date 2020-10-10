/********************************************************************** */
/*JS GRAPHIQUE FICHIER DATA */
/********************************************************************** */
const name_abs = "Abstentions";
const name_Blancs = "Blancs";
const name_Nul = "Nuls";
const name_rejete = "Rejeter";
const name_macron = "Macron";
const name_lepen = "Lepen";

chartIt02001();
chartIt02002();
chartIt02003();
chartIt02004();
chartIt02005();
chartIt02006();
chartIt02007();
chartIt02008();
chartIt02009();
chartIt02010();
chartIt02011();
chartIt02012();
chartIt02013();
chartIt02014();
chartIt02015();
chartIt02016();
chartIt02017();
chartIt02018();
chartIt02019();
chartIt02020();
chartIt02021();
chartIt02022();
chartIt02023();
chartIt02024();
chartIt02025();
chartIt02026();
chartIt02027();
chartIt02028();
chartIt02029();
chartIt02030();
chartIt02031();
chartIt02032();
chartIt02033();
chartIt02034();
chartIt02035();
chartIt02036();
chartIt02037();
chartIt02038();
chartIt02039();
chartIt02040();
chartIt02041();
chartIt02042();
chartIt02043();
chartIt02044();
chartIt02045();
chartIt02046();
chartIt02047();
chartIt02048();
chartIt02049();
chartIt02050();
chartIt02051();
chartIt02052();
chartIt02053();
chartIt02054();
chartIt02055();
chartIt02056();
chartIt02057();
chartIt02058();
chartIt02059();
chartIt02060();
chartIt02061();
chartIt02062();
chartIt02063();
chartIt02064();
chartIt02065();
chartIt02066();
chartIt02067();
chartIt02068();
chartIt02069();
chartIt02070();
chartIt02071();
chartIt02072();
chartIt02073();
chartIt02074();
chartIt02075();
chartIt02076();
chartIt02077();
chartIt02078();
chartIt02079();
chartIt02080();
chartIt02081();
chartIt02082();
chartIt02083();
chartIt02084();
chartIt02085();
chartIt02086();
chartIt02087();
chartIt02088();
chartIt02089();
chartIt02090();
chartIt02091();
chartIt02092();
chartIt02093();
chartIt02094();
chartIt02095();
chartIt02096();
chartIt02097();
chartIt02098();
chartIt02099();
/*------------------------------------------------------------------ */
/*COMMUNE 02001*/
/*------------------------------------------------------------------ */
async function GraphDATA02001() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02001.push(vote_macron); 
    vote_lepen_02001.push(vote_lepen);
    vote_rejet_02001.push(vote_rejet);
    vote_macronpop_02001.push(vote_macronMediane);
    vote_lepenpop_02001.push(vote_lepenMediane);
    vote_rejetpop_02001.push(vote_rejetMediane);
    name_Commune_02001.push(nameCommune);
    Pourcentage_02001.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02001.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02001.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02001.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02001.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02001 = [];
const vote_lepen_02001 = [];
const vote_rejet_02001 = [];
const vote_macronpop_02001 = [];
const vote_lepenpop_02001 = [];
const vote_rejetpop_02001 = [];
const name_Commune_02001 = [];
const Pourcentage_02001 = [];
const Pourcentage_rejet_02001 = [];
const vote_gene_macron_02001 = [];
const vote_gene_lepen_02001 = [];
const vote_gene_rejet_02001 = [];

async function chartIt02001(){
    await GraphDATA02001();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02001-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02001
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02001
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02001-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02001,vote_lepen_02001,vote_rejet_02001]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02001-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02001,vote_lepenpop_02001,vote_rejetpop_02001]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02001"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02001
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02001
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02001
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02002*/
/*------------------------------------------------------------------ */
async function GraphDATA02002() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02002.push(vote_macron); 
    vote_lepen_02002.push(vote_lepen);
    vote_rejet_02002.push(vote_rejet);
    vote_macronpop_02002.push(vote_macronMediane);
    vote_lepenpop_02002.push(vote_lepenMediane);
    vote_rejetpop_02002.push(vote_rejetMediane);
    name_Commune_02002.push(nameCommune);
    Pourcentage_02002.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02002.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02002.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02002.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02002.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02002 = [];
const vote_lepen_02002 = [];
const vote_rejet_02002 = [];
const vote_macronpop_02002 = [];
const vote_lepenpop_02002 = [];
const vote_rejetpop_02002 = [];
const name_Commune_02002 = [];
const Pourcentage_02002 = [];
const Pourcentage_rejet_02002 = [];
const vote_gene_macron_02002 = [];
const vote_gene_lepen_02002 = [];
const vote_gene_rejet_02002 = [];

async function chartIt02002(){
    await GraphDATA02002();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02002-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02002
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02002
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02002-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02002,vote_lepen_02002,vote_rejet_02002]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02002-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02002,vote_lepenpop_02002,vote_rejetpop_02002]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02002"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02002
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02002
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02002
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02003*/
/*------------------------------------------------------------------ */
async function GraphDATA02003() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02003.push(vote_macron); 
    vote_lepen_02003.push(vote_lepen);
    vote_rejet_02003.push(vote_rejet);
    vote_macronpop_02003.push(vote_macronMediane);
    vote_lepenpop_02003.push(vote_lepenMediane);
    vote_rejetpop_02003.push(vote_rejetMediane);
    name_Commune_02003.push(nameCommune);
    Pourcentage_02003.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02003.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02003.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02003.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02003.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02003 = [];
const vote_lepen_02003 = [];
const vote_rejet_02003 = [];
const vote_macronpop_02003 = [];
const vote_lepenpop_02003 = [];
const vote_rejetpop_02003 = [];
const name_Commune_02003 = [];
const Pourcentage_02003 = [];
const Pourcentage_rejet_02003 = [];
const vote_gene_macron_02003 = [];
const vote_gene_lepen_02003 = [];
const vote_gene_rejet_02003 = [];

async function chartIt02003(){
    await GraphDATA02003();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02003-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02003
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02003
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02003-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02003,vote_lepen_02003,vote_rejet_02003]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02003-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02003,vote_lepenpop_02003,vote_rejetpop_02003]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02003"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02003
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02003
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02003
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02004*/
/*------------------------------------------------------------------ */
async function GraphDATA02004() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02004.push(vote_macron); 
    vote_lepen_02004.push(vote_lepen);
    vote_rejet_02004.push(vote_rejet);
    vote_macronpop_02004.push(vote_macronMediane);
    vote_lepenpop_02004.push(vote_lepenMediane);
    vote_rejetpop_02004.push(vote_rejetMediane);
    name_Commune_02004.push(nameCommune);
    Pourcentage_02004.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02004.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02004.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02004.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02004.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02004 = [];
const vote_lepen_02004 = [];
const vote_rejet_02004 = [];
const vote_macronpop_02004 = [];
const vote_lepenpop_02004 = [];
const vote_rejetpop_02004 = [];
const name_Commune_02004 = [];
const Pourcentage_02004 = [];
const Pourcentage_rejet_02004 = [];
const vote_gene_macron_02004 = [];
const vote_gene_lepen_02004 = [];
const vote_gene_rejet_02004 = [];

async function chartIt02004(){
    await GraphDATA02004();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02004-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02004
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02004
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02004-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02004,vote_lepen_02004,vote_rejet_02004]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02004-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02004,vote_lepenpop_02004,vote_rejetpop_02004]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02004"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02004
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02004
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02004
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02005*/
/*------------------------------------------------------------------ */
async function GraphDATA02005() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02005.push(vote_macron); 
    vote_lepen_02005.push(vote_lepen);
    vote_rejet_02005.push(vote_rejet);
    vote_macronpop_02005.push(vote_macronMediane);
    vote_lepenpop_02005.push(vote_lepenMediane);
    vote_rejetpop_02005.push(vote_rejetMediane);
    name_Commune_02005.push(nameCommune);
    Pourcentage_02005.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02005.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02005.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02005.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02005.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02005 = [];
const vote_lepen_02005 = [];
const vote_rejet_02005 = [];
const vote_macronpop_02005 = [];
const vote_lepenpop_02005 = [];
const vote_rejetpop_02005 = [];
const name_Commune_02005 = [];
const Pourcentage_02005 = [];
const Pourcentage_rejet_02005 = [];
const vote_gene_macron_02005 = [];
const vote_gene_lepen_02005 = [];
const vote_gene_rejet_02005 = [];

async function chartIt02005(){
    await GraphDATA02005();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02005-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02005
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02005
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02005-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02005,vote_lepen_02005,vote_rejet_02005]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02005-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02005,vote_lepenpop_02005,vote_rejetpop_02005]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02005"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02005
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02005
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02005
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02006*/
/*------------------------------------------------------------------ */
async function GraphDATA02006() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02006.push(vote_macron); 
    vote_lepen_02006.push(vote_lepen);
    vote_rejet_02006.push(vote_rejet);
    vote_macronpop_02006.push(vote_macronMediane);
    vote_lepenpop_02006.push(vote_lepenMediane);
    vote_rejetpop_02006.push(vote_rejetMediane);
    name_Commune_02006.push(nameCommune);
    Pourcentage_02006.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02006.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02006.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02006.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02006.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02006 = [];
const vote_lepen_02006 = [];
const vote_rejet_02006 = [];
const vote_macronpop_02006 = [];
const vote_lepenpop_02006 = [];
const vote_rejetpop_02006 = [];
const name_Commune_02006 = [];
const Pourcentage_02006 = [];
const Pourcentage_rejet_02006 = [];
const vote_gene_macron_02006 = [];
const vote_gene_lepen_02006 = [];
const vote_gene_rejet_02006 = [];

async function chartIt02006(){
    await GraphDATA02006();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02006-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02006
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02006
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02006-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02006,vote_lepen_02006,vote_rejet_02006]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02006-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02006,vote_lepenpop_02006,vote_rejetpop_02006]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02006"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02006
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02006
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02006
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02007*/
/*------------------------------------------------------------------ */
async function GraphDATA02007() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02007.push(vote_macron); 
    vote_lepen_02007.push(vote_lepen);
    vote_rejet_02007.push(vote_rejet);
    vote_macronpop_02007.push(vote_macronMediane);
    vote_lepenpop_02007.push(vote_lepenMediane);
    vote_rejetpop_02007.push(vote_rejetMediane);
    name_Commune_02007.push(nameCommune);
    Pourcentage_02007.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02007.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02007.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02007.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02007.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02007 = [];
const vote_lepen_02007 = [];
const vote_rejet_02007 = [];
const vote_macronpop_02007 = [];
const vote_lepenpop_02007 = [];
const vote_rejetpop_02007 = [];
const name_Commune_02007 = [];
const Pourcentage_02007 = [];
const Pourcentage_rejet_02007 = [];
const vote_gene_macron_02007 = [];
const vote_gene_lepen_02007 = [];
const vote_gene_rejet_02007 = [];

async function chartIt02007(){
    await GraphDATA02007();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02007-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02007
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02007
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02007-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02007,vote_lepen_02007,vote_rejet_02007]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02007-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02007,vote_lepenpop_02007,vote_rejetpop_02007]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02007"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02007
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02007
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02007
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02008*/
/*------------------------------------------------------------------ */
async function GraphDATA02008() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02008.push(vote_macron); 
    vote_lepen_02008.push(vote_lepen);
    vote_rejet_02008.push(vote_rejet);
    vote_macronpop_02008.push(vote_macronMediane);
    vote_lepenpop_02008.push(vote_lepenMediane);
    vote_rejetpop_02008.push(vote_rejetMediane);
    name_Commune_02008.push(nameCommune);
    Pourcentage_02008.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02008.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02008.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02008.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02008.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02008 = [];
const vote_lepen_02008 = [];
const vote_rejet_02008 = [];
const vote_macronpop_02008 = [];
const vote_lepenpop_02008 = [];
const vote_rejetpop_02008 = [];
const name_Commune_02008 = [];
const Pourcentage_02008 = [];
const Pourcentage_rejet_02008 = [];
const vote_gene_macron_02008 = [];
const vote_gene_lepen_02008 = [];
const vote_gene_rejet_02008 = [];

async function chartIt02008(){
    await GraphDATA02008();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02008-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02008
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02008
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02008-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02008,vote_lepen_02008,vote_rejet_02008]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02008-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02008,vote_lepenpop_02008,vote_rejetpop_02008]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02008"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02008
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02008
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02008
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02009*/
/*------------------------------------------------------------------ */
async function GraphDATA02009() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02009.push(vote_macron); 
    vote_lepen_02009.push(vote_lepen);
    vote_rejet_02009.push(vote_rejet);
    vote_macronpop_02009.push(vote_macronMediane);
    vote_lepenpop_02009.push(vote_lepenMediane);
    vote_rejetpop_02009.push(vote_rejetMediane);
    name_Commune_02009.push(nameCommune);
    Pourcentage_02009.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02009.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02009.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02009.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02009.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02009 = [];
const vote_lepen_02009 = [];
const vote_rejet_02009 = [];
const vote_macronpop_02009 = [];
const vote_lepenpop_02009 = [];
const vote_rejetpop_02009 = [];
const name_Commune_02009 = [];
const Pourcentage_02009 = [];
const Pourcentage_rejet_02009 = [];
const vote_gene_macron_02009 = [];
const vote_gene_lepen_02009 = [];
const vote_gene_rejet_02009 = [];

async function chartIt02009(){
    await GraphDATA02009();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02009-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02009
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02009
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02009-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02009,vote_lepen_02009,vote_rejet_02009]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02009-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02009,vote_lepenpop_02009,vote_rejetpop_02009]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02009"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02009
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02009
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02009
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02010*/
/*------------------------------------------------------------------ */
async function GraphDATA02010() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02010.push(vote_macron); 
    vote_lepen_02010.push(vote_lepen);
    vote_rejet_02010.push(vote_rejet);
    vote_macronpop_02010.push(vote_macronMediane);
    vote_lepenpop_02010.push(vote_lepenMediane);
    vote_rejetpop_02010.push(vote_rejetMediane);
    name_Commune_02010.push(nameCommune);
    Pourcentage_02010.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02010.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02010.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02010.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02010.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02010 = [];
const vote_lepen_02010 = [];
const vote_rejet_02010 = [];
const vote_macronpop_02010 = [];
const vote_lepenpop_02010 = [];
const vote_rejetpop_02010 = [];
const name_Commune_02010 = [];
const Pourcentage_02010 = [];
const Pourcentage_rejet_02010 = [];
const vote_gene_macron_02010 = [];
const vote_gene_lepen_02010 = [];
const vote_gene_rejet_02010 = [];

async function chartIt02010(){
    await GraphDATA02010();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02010-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02010
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02010
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02010-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02010,vote_lepen_02010,vote_rejet_02010]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02010-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02010,vote_lepenpop_02010,vote_rejetpop_02010]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02010"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02010
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02010
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02010
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02011*/
/*------------------------------------------------------------------ */
async function GraphDATA02011() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02011.push(vote_macron); 
    vote_lepen_02011.push(vote_lepen);
    vote_rejet_02011.push(vote_rejet);
    vote_macronpop_02011.push(vote_macronMediane);
    vote_lepenpop_02011.push(vote_lepenMediane);
    vote_rejetpop_02011.push(vote_rejetMediane);
    name_Commune_02011.push(nameCommune);
    Pourcentage_02011.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02011.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02011.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02011.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02011.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02011 = [];
const vote_lepen_02011 = [];
const vote_rejet_02011 = [];
const vote_macronpop_02011 = [];
const vote_lepenpop_02011 = [];
const vote_rejetpop_02011 = [];
const name_Commune_02011 = [];
const Pourcentage_02011 = [];
const Pourcentage_rejet_02011 = [];
const vote_gene_macron_02011 = [];
const vote_gene_lepen_02011 = [];
const vote_gene_rejet_02011 = [];

async function chartIt02011(){
    await GraphDATA02011();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02011-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02011
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02011
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02011-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02011,vote_lepen_02011,vote_rejet_02011]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02011-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02011,vote_lepenpop_02011,vote_rejetpop_02011]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02011"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02011
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02011
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02011
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02012*/
/*------------------------------------------------------------------ */
async function GraphDATA02012() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02012.push(vote_macron); 
    vote_lepen_02012.push(vote_lepen);
    vote_rejet_02012.push(vote_rejet);
    vote_macronpop_02012.push(vote_macronMediane);
    vote_lepenpop_02012.push(vote_lepenMediane);
    vote_rejetpop_02012.push(vote_rejetMediane);
    name_Commune_02012.push(nameCommune);
    Pourcentage_02012.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02012.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02012.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02012.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02012.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02012 = [];
const vote_lepen_02012 = [];
const vote_rejet_02012 = [];
const vote_macronpop_02012 = [];
const vote_lepenpop_02012 = [];
const vote_rejetpop_02012 = [];
const name_Commune_02012 = [];
const Pourcentage_02012 = [];
const Pourcentage_rejet_02012 = [];
const vote_gene_macron_02012 = [];
const vote_gene_lepen_02012 = [];
const vote_gene_rejet_02012 = [];

async function chartIt02012(){
    await GraphDATA02012();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02012-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02012
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02012
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02012-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02012,vote_lepen_02012,vote_rejet_02012]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02012-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02012,vote_lepenpop_02012,vote_rejetpop_02012]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02012"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02012
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02012
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02012
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02013*/
/*------------------------------------------------------------------ */
async function GraphDATA02013() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02013.push(vote_macron); 
    vote_lepen_02013.push(vote_lepen);
    vote_rejet_02013.push(vote_rejet);
    vote_macronpop_02013.push(vote_macronMediane);
    vote_lepenpop_02013.push(vote_lepenMediane);
    vote_rejetpop_02013.push(vote_rejetMediane);
    name_Commune_02013.push(nameCommune);
    Pourcentage_02013.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02013.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02013.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02013.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02013.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02013 = [];
const vote_lepen_02013 = [];
const vote_rejet_02013 = [];
const vote_macronpop_02013 = [];
const vote_lepenpop_02013 = [];
const vote_rejetpop_02013 = [];
const name_Commune_02013 = [];
const Pourcentage_02013 = [];
const Pourcentage_rejet_02013 = [];
const vote_gene_macron_02013 = [];
const vote_gene_lepen_02013 = [];
const vote_gene_rejet_02013 = [];

async function chartIt02013(){
    await GraphDATA02013();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02013-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02013
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02013
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02013-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02013,vote_lepen_02013,vote_rejet_02013]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02013-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02013,vote_lepenpop_02013,vote_rejetpop_02013]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02013"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02013
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02013
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02013
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02014*/
/*------------------------------------------------------------------ */
async function GraphDATA02014() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02014.push(vote_macron); 
    vote_lepen_02014.push(vote_lepen);
    vote_rejet_02014.push(vote_rejet);
    vote_macronpop_02014.push(vote_macronMediane);
    vote_lepenpop_02014.push(vote_lepenMediane);
    vote_rejetpop_02014.push(vote_rejetMediane);
    name_Commune_02014.push(nameCommune);
    Pourcentage_02014.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02014.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02014.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02014.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02014.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02014 = [];
const vote_lepen_02014 = [];
const vote_rejet_02014 = [];
const vote_macronpop_02014 = [];
const vote_lepenpop_02014 = [];
const vote_rejetpop_02014 = [];
const name_Commune_02014 = [];
const Pourcentage_02014 = [];
const Pourcentage_rejet_02014 = [];
const vote_gene_macron_02014 = [];
const vote_gene_lepen_02014 = [];
const vote_gene_rejet_02014 = [];

async function chartIt02014(){
    await GraphDATA02014();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02014-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02014
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02014
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02014-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02014,vote_lepen_02014,vote_rejet_02014]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02014-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02014,vote_lepenpop_02014,vote_rejetpop_02014]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02014"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02014
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02014
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02014
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02015*/
/*------------------------------------------------------------------ */
async function GraphDATA02015() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02015.push(vote_macron); 
    vote_lepen_02015.push(vote_lepen);
    vote_rejet_02015.push(vote_rejet);
    vote_macronpop_02015.push(vote_macronMediane);
    vote_lepenpop_02015.push(vote_lepenMediane);
    vote_rejetpop_02015.push(vote_rejetMediane);
    name_Commune_02015.push(nameCommune);
    Pourcentage_02015.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02015.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02015.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02015.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02015.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02015 = [];
const vote_lepen_02015 = [];
const vote_rejet_02015 = [];
const vote_macronpop_02015 = [];
const vote_lepenpop_02015 = [];
const vote_rejetpop_02015 = [];
const name_Commune_02015 = [];
const Pourcentage_02015 = [];
const Pourcentage_rejet_02015 = [];
const vote_gene_macron_02015 = [];
const vote_gene_lepen_02015 = [];
const vote_gene_rejet_02015 = [];

async function chartIt02015(){
    await GraphDATA02015();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02015-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02015
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02015
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02015-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02015,vote_lepen_02015,vote_rejet_02015]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02015-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02015,vote_lepenpop_02015,vote_rejetpop_02015]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02015"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02015
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02015
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02015
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02016*/
/*------------------------------------------------------------------ */
async function GraphDATA02016() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02016.push(vote_macron); 
    vote_lepen_02016.push(vote_lepen);
    vote_rejet_02016.push(vote_rejet);
    vote_macronpop_02016.push(vote_macronMediane);
    vote_lepenpop_02016.push(vote_lepenMediane);
    vote_rejetpop_02016.push(vote_rejetMediane);
    name_Commune_02016.push(nameCommune);
    Pourcentage_02016.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02016.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02016.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02016.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02016.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02016 = [];
const vote_lepen_02016 = [];
const vote_rejet_02016 = [];
const vote_macronpop_02016 = [];
const vote_lepenpop_02016 = [];
const vote_rejetpop_02016 = [];
const name_Commune_02016 = [];
const Pourcentage_02016 = [];
const Pourcentage_rejet_02016 = [];
const vote_gene_macron_02016 = [];
const vote_gene_lepen_02016 = [];
const vote_gene_rejet_02016 = [];

async function chartIt02016(){
    await GraphDATA02016();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02016-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02016
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02016
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02016-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02016,vote_lepen_02016,vote_rejet_02016]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02016-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02016,vote_lepenpop_02016,vote_rejetpop_02016]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02016"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02016
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02016
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02016
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02017*/
/*------------------------------------------------------------------ */
async function GraphDATA02017() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02017.push(vote_macron); 
    vote_lepen_02017.push(vote_lepen);
    vote_rejet_02017.push(vote_rejet);
    vote_macronpop_02017.push(vote_macronMediane);
    vote_lepenpop_02017.push(vote_lepenMediane);
    vote_rejetpop_02017.push(vote_rejetMediane);
    name_Commune_02017.push(nameCommune);
    Pourcentage_02017.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02017.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02017.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02017.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02017.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02017 = [];
const vote_lepen_02017 = [];
const vote_rejet_02017 = [];
const vote_macronpop_02017 = [];
const vote_lepenpop_02017 = [];
const vote_rejetpop_02017 = [];
const name_Commune_02017 = [];
const Pourcentage_02017 = [];
const Pourcentage_rejet_02017 = [];
const vote_gene_macron_02017 = [];
const vote_gene_lepen_02017 = [];
const vote_gene_rejet_02017 = [];

async function chartIt02017(){
    await GraphDATA02017();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02017-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02017
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02017
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02017-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02017,vote_lepen_02017,vote_rejet_02017]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02017-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02017,vote_lepenpop_02017,vote_rejetpop_02017]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02017"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02017
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02017
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02017
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02018*/
/*------------------------------------------------------------------ */
async function GraphDATA02018() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02018.push(vote_macron); 
    vote_lepen_02018.push(vote_lepen);
    vote_rejet_02018.push(vote_rejet);
    vote_macronpop_02018.push(vote_macronMediane);
    vote_lepenpop_02018.push(vote_lepenMediane);
    vote_rejetpop_02018.push(vote_rejetMediane);
    name_Commune_02018.push(nameCommune);
    Pourcentage_02018.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02018.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02018.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02018.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02018.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02018 = [];
const vote_lepen_02018 = [];
const vote_rejet_02018 = [];
const vote_macronpop_02018 = [];
const vote_lepenpop_02018 = [];
const vote_rejetpop_02018 = [];
const name_Commune_02018 = [];
const Pourcentage_02018 = [];
const Pourcentage_rejet_02018 = [];
const vote_gene_macron_02018 = [];
const vote_gene_lepen_02018 = [];
const vote_gene_rejet_02018 = [];

async function chartIt02018(){
    await GraphDATA02018();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02018-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02018
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02018
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02018-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02018,vote_lepen_02018,vote_rejet_02018]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02018-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02018,vote_lepenpop_02018,vote_rejetpop_02018]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02018"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02018
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02018
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02018
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02019*/
/*------------------------------------------------------------------ */
async function GraphDATA02019() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02019.push(vote_macron); 
    vote_lepen_02019.push(vote_lepen);
    vote_rejet_02019.push(vote_rejet);
    vote_macronpop_02019.push(vote_macronMediane);
    vote_lepenpop_02019.push(vote_lepenMediane);
    vote_rejetpop_02019.push(vote_rejetMediane);
    name_Commune_02019.push(nameCommune);
    Pourcentage_02019.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02019.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02019.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02019.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02019.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02019 = [];
const vote_lepen_02019 = [];
const vote_rejet_02019 = [];
const vote_macronpop_02019 = [];
const vote_lepenpop_02019 = [];
const vote_rejetpop_02019 = [];
const name_Commune_02019 = [];
const Pourcentage_02019 = [];
const Pourcentage_rejet_02019 = [];
const vote_gene_macron_02019 = [];
const vote_gene_lepen_02019 = [];
const vote_gene_rejet_02019 = [];

async function chartIt02019(){
    await GraphDATA02019();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02019-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02019
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02019
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02019-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02019,vote_lepen_02019,vote_rejet_02019]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02019-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02019,vote_lepenpop_02019,vote_rejetpop_02019]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02019"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02019
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02019
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02019
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02020*/
/*------------------------------------------------------------------ */
async function GraphDATA02020() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02020.push(vote_macron); 
    vote_lepen_02020.push(vote_lepen);
    vote_rejet_02020.push(vote_rejet);
    vote_macronpop_02020.push(vote_macronMediane);
    vote_lepenpop_02020.push(vote_lepenMediane);
    vote_rejetpop_02020.push(vote_rejetMediane);
    name_Commune_02020.push(nameCommune);
    Pourcentage_02020.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02020.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02020.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02020.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02020.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02020 = [];
const vote_lepen_02020 = [];
const vote_rejet_02020 = [];
const vote_macronpop_02020 = [];
const vote_lepenpop_02020 = [];
const vote_rejetpop_02020 = [];
const name_Commune_02020 = [];
const Pourcentage_02020 = [];
const Pourcentage_rejet_02020 = [];
const vote_gene_macron_02020 = [];
const vote_gene_lepen_02020 = [];
const vote_gene_rejet_02020 = [];

async function chartIt02020(){
    await GraphDATA02020();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02020-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02020
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02020
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02020-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02020,vote_lepen_02020,vote_rejet_02020]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02020-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02020,vote_lepenpop_02020,vote_rejetpop_02020]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02020"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02020
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02020
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02020
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02021*/
/*------------------------------------------------------------------ */
async function GraphDATA02021() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02021.push(vote_macron); 
    vote_lepen_02021.push(vote_lepen);
    vote_rejet_02021.push(vote_rejet);
    vote_macronpop_02021.push(vote_macronMediane);
    vote_lepenpop_02021.push(vote_lepenMediane);
    vote_rejetpop_02021.push(vote_rejetMediane);
    name_Commune_02021.push(nameCommune);
    Pourcentage_02021.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02021.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02021.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02021.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02021.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02021 = [];
const vote_lepen_02021 = [];
const vote_rejet_02021 = [];
const vote_macronpop_02021 = [];
const vote_lepenpop_02021 = [];
const vote_rejetpop_02021 = [];
const name_Commune_02021 = [];
const Pourcentage_02021 = [];
const Pourcentage_rejet_02021 = [];
const vote_gene_macron_02021 = [];
const vote_gene_lepen_02021 = [];
const vote_gene_rejet_02021 = [];

async function chartIt02021(){
    await GraphDATA02021();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02021-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02021
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02021
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02021-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02021,vote_lepen_02021,vote_rejet_02021]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02021-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02021,vote_lepenpop_02021,vote_rejetpop_02021]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02021"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02021
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02021
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02021
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02022*/
/*------------------------------------------------------------------ */
async function GraphDATA02022() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02022.push(vote_macron); 
    vote_lepen_02022.push(vote_lepen);
    vote_rejet_02022.push(vote_rejet);
    vote_macronpop_02022.push(vote_macronMediane);
    vote_lepenpop_02022.push(vote_lepenMediane);
    vote_rejetpop_02022.push(vote_rejetMediane);
    name_Commune_02022.push(nameCommune);
    Pourcentage_02022.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02022.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02022.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02022.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02022.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02022 = [];
const vote_lepen_02022 = [];
const vote_rejet_02022 = [];
const vote_macronpop_02022 = [];
const vote_lepenpop_02022 = [];
const vote_rejetpop_02022 = [];
const name_Commune_02022 = [];
const Pourcentage_02022 = [];
const Pourcentage_rejet_02022 = [];
const vote_gene_macron_02022 = [];
const vote_gene_lepen_02022 = [];
const vote_gene_rejet_02022 = [];

async function chartIt02022(){
    await GraphDATA02022();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02022-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02022
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02022
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02022-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02022,vote_lepen_02022,vote_rejet_02022]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02022-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02022,vote_lepenpop_02022,vote_rejetpop_02022]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02022"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02022
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02022
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02022
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02023*/
/*------------------------------------------------------------------ */
async function GraphDATA02023() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02023.push(vote_macron); 
    vote_lepen_02023.push(vote_lepen);
    vote_rejet_02023.push(vote_rejet);
    vote_macronpop_02023.push(vote_macronMediane);
    vote_lepenpop_02023.push(vote_lepenMediane);
    vote_rejetpop_02023.push(vote_rejetMediane);
    name_Commune_02023.push(nameCommune);
    Pourcentage_02023.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02023.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02023.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02023.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02023.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02023 = [];
const vote_lepen_02023 = [];
const vote_rejet_02023 = [];
const vote_macronpop_02023 = [];
const vote_lepenpop_02023 = [];
const vote_rejetpop_02023 = [];
const name_Commune_02023 = [];
const Pourcentage_02023 = [];
const Pourcentage_rejet_02023 = [];
const vote_gene_macron_02023 = [];
const vote_gene_lepen_02023 = [];
const vote_gene_rejet_02023 = [];

async function chartIt02023(){
    await GraphDATA02023();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02023-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02023
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02023
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02023-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02023,vote_lepen_02023,vote_rejet_02023]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02023-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02023,vote_lepenpop_02023,vote_rejetpop_02023]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02023"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02023
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02023
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02023
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02024*/
/*------------------------------------------------------------------ */
async function GraphDATA02024() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02024.push(vote_macron); 
    vote_lepen_02024.push(vote_lepen);
    vote_rejet_02024.push(vote_rejet);
    vote_macronpop_02024.push(vote_macronMediane);
    vote_lepenpop_02024.push(vote_lepenMediane);
    vote_rejetpop_02024.push(vote_rejetMediane);
    name_Commune_02024.push(nameCommune);
    Pourcentage_02024.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02024.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02024.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02024.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02024.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02024 = [];
const vote_lepen_02024 = [];
const vote_rejet_02024 = [];
const vote_macronpop_02024 = [];
const vote_lepenpop_02024 = [];
const vote_rejetpop_02024 = [];
const name_Commune_02024 = [];
const Pourcentage_02024 = [];
const Pourcentage_rejet_02024 = [];
const vote_gene_macron_02024 = [];
const vote_gene_lepen_02024 = [];
const vote_gene_rejet_02024 = [];

async function chartIt02024(){
    await GraphDATA02024();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02024-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02024
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02024
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02024-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02024,vote_lepen_02024,vote_rejet_02024]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02024-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02024,vote_lepenpop_02024,vote_rejetpop_02024]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02024"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02024
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02024
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02024
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02025*/
/*------------------------------------------------------------------ */
async function GraphDATA02025() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02025.push(vote_macron); 
    vote_lepen_02025.push(vote_lepen);
    vote_rejet_02025.push(vote_rejet);
    vote_macronpop_02025.push(vote_macronMediane);
    vote_lepenpop_02025.push(vote_lepenMediane);
    vote_rejetpop_02025.push(vote_rejetMediane);
    name_Commune_02025.push(nameCommune);
    Pourcentage_02025.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02025.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02025.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02025.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02025.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02025 = [];
const vote_lepen_02025 = [];
const vote_rejet_02025 = [];
const vote_macronpop_02025 = [];
const vote_lepenpop_02025 = [];
const vote_rejetpop_02025 = [];
const name_Commune_02025 = [];
const Pourcentage_02025 = [];
const Pourcentage_rejet_02025 = [];
const vote_gene_macron_02025 = [];
const vote_gene_lepen_02025 = [];
const vote_gene_rejet_02025 = [];

async function chartIt02025(){
    await GraphDATA02025();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02025-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02025
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02025
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02025-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02025,vote_lepen_02025,vote_rejet_02025]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02025-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02025,vote_lepenpop_02025,vote_rejetpop_02025]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02025"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02025
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02025
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02025
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02026*/
/*------------------------------------------------------------------ */
async function GraphDATA02026() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02026.push(vote_macron); 
    vote_lepen_02026.push(vote_lepen);
    vote_rejet_02026.push(vote_rejet);
    vote_macronpop_02026.push(vote_macronMediane);
    vote_lepenpop_02026.push(vote_lepenMediane);
    vote_rejetpop_02026.push(vote_rejetMediane);
    name_Commune_02026.push(nameCommune);
    Pourcentage_02026.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02026.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02026.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02026.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02026.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02026 = [];
const vote_lepen_02026 = [];
const vote_rejet_02026 = [];
const vote_macronpop_02026 = [];
const vote_lepenpop_02026 = [];
const vote_rejetpop_02026 = [];
const name_Commune_02026 = [];
const Pourcentage_02026 = [];
const Pourcentage_rejet_02026 = [];
const vote_gene_macron_02026 = [];
const vote_gene_lepen_02026 = [];
const vote_gene_rejet_02026 = [];

async function chartIt02026(){
    await GraphDATA02026();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02026-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02026
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02026
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02026-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02026,vote_lepen_02026,vote_rejet_02026]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02026-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02026,vote_lepenpop_02026,vote_rejetpop_02026]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02026"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02026
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02026
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02026
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02027*/
/*------------------------------------------------------------------ */
async function GraphDATA02027() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02027.push(vote_macron); 
    vote_lepen_02027.push(vote_lepen);
    vote_rejet_02027.push(vote_rejet);
    vote_macronpop_02027.push(vote_macronMediane);
    vote_lepenpop_02027.push(vote_lepenMediane);
    vote_rejetpop_02027.push(vote_rejetMediane);
    name_Commune_02027.push(nameCommune);
    Pourcentage_02027.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02027.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02027.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02027.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02027.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02027 = [];
const vote_lepen_02027 = [];
const vote_rejet_02027 = [];
const vote_macronpop_02027 = [];
const vote_lepenpop_02027 = [];
const vote_rejetpop_02027 = [];
const name_Commune_02027 = [];
const Pourcentage_02027 = [];
const Pourcentage_rejet_02027 = [];
const vote_gene_macron_02027 = [];
const vote_gene_lepen_02027 = [];
const vote_gene_rejet_02027 = [];

async function chartIt02027(){
    await GraphDATA02027();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02027-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02027
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02027
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02027-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02027,vote_lepen_02027,vote_rejet_02027]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02027-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02027,vote_lepenpop_02027,vote_rejetpop_02027]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02027"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02027
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02027
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02027
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02028*/
/*------------------------------------------------------------------ */
async function GraphDATA02028() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02028.push(vote_macron); 
    vote_lepen_02028.push(vote_lepen);
    vote_rejet_02028.push(vote_rejet);
    vote_macronpop_02028.push(vote_macronMediane);
    vote_lepenpop_02028.push(vote_lepenMediane);
    vote_rejetpop_02028.push(vote_rejetMediane);
    name_Commune_02028.push(nameCommune);
    Pourcentage_02028.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02028.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02028.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02028.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02028.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02028 = [];
const vote_lepen_02028 = [];
const vote_rejet_02028 = [];
const vote_macronpop_02028 = [];
const vote_lepenpop_02028 = [];
const vote_rejetpop_02028 = [];
const name_Commune_02028 = [];
const Pourcentage_02028 = [];
const Pourcentage_rejet_02028 = [];
const vote_gene_macron_02028 = [];
const vote_gene_lepen_02028 = [];
const vote_gene_rejet_02028 = [];

async function chartIt02028(){
    await GraphDATA02028();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02028-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02028
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02028
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02028-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02028,vote_lepen_02028,vote_rejet_02028]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02028-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02028,vote_lepenpop_02028,vote_rejetpop_02028]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02028"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02028
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02028
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02028
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02029*/
/*------------------------------------------------------------------ */
async function GraphDATA02029() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02029.push(vote_macron); 
    vote_lepen_02029.push(vote_lepen);
    vote_rejet_02029.push(vote_rejet);
    vote_macronpop_02029.push(vote_macronMediane);
    vote_lepenpop_02029.push(vote_lepenMediane);
    vote_rejetpop_02029.push(vote_rejetMediane);
    name_Commune_02029.push(nameCommune);
    Pourcentage_02029.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02029.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02029.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02029.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02029.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02029 = [];
const vote_lepen_02029 = [];
const vote_rejet_02029 = [];
const vote_macronpop_02029 = [];
const vote_lepenpop_02029 = [];
const vote_rejetpop_02029 = [];
const name_Commune_02029 = [];
const Pourcentage_02029 = [];
const Pourcentage_rejet_02029 = [];
const vote_gene_macron_02029 = [];
const vote_gene_lepen_02029 = [];
const vote_gene_rejet_02029 = [];

async function chartIt02029(){
    await GraphDATA02029();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02029-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02029
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02029
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02029-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02029,vote_lepen_02029,vote_rejet_02029]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02029-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02029,vote_lepenpop_02029,vote_rejetpop_02029]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02029"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02029
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02029
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02029
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02030*/
/*------------------------------------------------------------------ */
async function GraphDATA02030() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02030.push(vote_macron); 
    vote_lepen_02030.push(vote_lepen);
    vote_rejet_02030.push(vote_rejet);
    vote_macronpop_02030.push(vote_macronMediane);
    vote_lepenpop_02030.push(vote_lepenMediane);
    vote_rejetpop_02030.push(vote_rejetMediane);
    name_Commune_02030.push(nameCommune);
    Pourcentage_02030.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02030.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02030.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02030.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02030.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02030 = [];
const vote_lepen_02030 = [];
const vote_rejet_02030 = [];
const vote_macronpop_02030 = [];
const vote_lepenpop_02030 = [];
const vote_rejetpop_02030 = [];
const name_Commune_02030 = [];
const Pourcentage_02030 = [];
const Pourcentage_rejet_02030 = [];
const vote_gene_macron_02030 = [];
const vote_gene_lepen_02030 = [];
const vote_gene_rejet_02030 = [];

async function chartIt02030(){
    await GraphDATA02030();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02030-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02030
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02030
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02030-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02030,vote_lepen_02030,vote_rejet_02030]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02030-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02030,vote_lepenpop_02030,vote_rejetpop_02030]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02030"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02030
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02030
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02030
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02031*/
/*------------------------------------------------------------------ */
async function GraphDATA02031() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02031.push(vote_macron); 
    vote_lepen_02031.push(vote_lepen);
    vote_rejet_02031.push(vote_rejet);
    vote_macronpop_02031.push(vote_macronMediane);
    vote_lepenpop_02031.push(vote_lepenMediane);
    vote_rejetpop_02031.push(vote_rejetMediane);
    name_Commune_02031.push(nameCommune);
    Pourcentage_02031.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02031.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02031.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02031.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02031.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02031 = [];
const vote_lepen_02031 = [];
const vote_rejet_02031 = [];
const vote_macronpop_02031 = [];
const vote_lepenpop_02031 = [];
const vote_rejetpop_02031 = [];
const name_Commune_02031 = [];
const Pourcentage_02031 = [];
const Pourcentage_rejet_02031 = [];
const vote_gene_macron_02031 = [];
const vote_gene_lepen_02031 = [];
const vote_gene_rejet_02031 = [];

async function chartIt02031(){
    await GraphDATA02031();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02031-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02031
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02031
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02031-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02031,vote_lepen_02031,vote_rejet_02031]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02031-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02031,vote_lepenpop_02031,vote_rejetpop_02031]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02031"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02031
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02031
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02031
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02032*/
/*------------------------------------------------------------------ */
async function GraphDATA02032() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02032.push(vote_macron); 
    vote_lepen_02032.push(vote_lepen);
    vote_rejet_02032.push(vote_rejet);
    vote_macronpop_02032.push(vote_macronMediane);
    vote_lepenpop_02032.push(vote_lepenMediane);
    vote_rejetpop_02032.push(vote_rejetMediane);
    name_Commune_02032.push(nameCommune);
    Pourcentage_02032.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02032.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02032.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02032.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02032.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02032 = [];
const vote_lepen_02032 = [];
const vote_rejet_02032 = [];
const vote_macronpop_02032 = [];
const vote_lepenpop_02032 = [];
const vote_rejetpop_02032 = [];
const name_Commune_02032 = [];
const Pourcentage_02032 = [];
const Pourcentage_rejet_02032 = [];
const vote_gene_macron_02032 = [];
const vote_gene_lepen_02032 = [];
const vote_gene_rejet_02032 = [];

async function chartIt02032(){
    await GraphDATA02032();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02032-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02032
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02032
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02032-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02032,vote_lepen_02032,vote_rejet_02032]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02032-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02032,vote_lepenpop_02032,vote_rejetpop_02032]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02032"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02032
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02032
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02032
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02033*/
/*------------------------------------------------------------------ */
async function GraphDATA02033() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02033.push(vote_macron); 
    vote_lepen_02033.push(vote_lepen);
    vote_rejet_02033.push(vote_rejet);
    vote_macronpop_02033.push(vote_macronMediane);
    vote_lepenpop_02033.push(vote_lepenMediane);
    vote_rejetpop_02033.push(vote_rejetMediane);
    name_Commune_02033.push(nameCommune);
    Pourcentage_02033.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02033.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02033.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02033.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02033.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02033 = [];
const vote_lepen_02033 = [];
const vote_rejet_02033 = [];
const vote_macronpop_02033 = [];
const vote_lepenpop_02033 = [];
const vote_rejetpop_02033 = [];
const name_Commune_02033 = [];
const Pourcentage_02033 = [];
const Pourcentage_rejet_02033 = [];
const vote_gene_macron_02033 = [];
const vote_gene_lepen_02033 = [];
const vote_gene_rejet_02033 = [];

async function chartIt02033(){
    await GraphDATA02033();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02033-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02033
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02033
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02033-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02033,vote_lepen_02033,vote_rejet_02033]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02033-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02033,vote_lepenpop_02033,vote_rejetpop_02033]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02033"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02033
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02033
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02033
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02034*/
/*------------------------------------------------------------------ */
async function GraphDATA02034() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02034.push(vote_macron); 
    vote_lepen_02034.push(vote_lepen);
    vote_rejet_02034.push(vote_rejet);
    vote_macronpop_02034.push(vote_macronMediane);
    vote_lepenpop_02034.push(vote_lepenMediane);
    vote_rejetpop_02034.push(vote_rejetMediane);
    name_Commune_02034.push(nameCommune);
    Pourcentage_02034.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02034.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02034.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02034.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02034.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02034 = [];
const vote_lepen_02034 = [];
const vote_rejet_02034 = [];
const vote_macronpop_02034 = [];
const vote_lepenpop_02034 = [];
const vote_rejetpop_02034 = [];
const name_Commune_02034 = [];
const Pourcentage_02034 = [];
const Pourcentage_rejet_02034 = [];
const vote_gene_macron_02034 = [];
const vote_gene_lepen_02034 = [];
const vote_gene_rejet_02034 = [];

async function chartIt02034(){
    await GraphDATA02034();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02034-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02034
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02034
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02034-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02034,vote_lepen_02034,vote_rejet_02034]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02034-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02034,vote_lepenpop_02034,vote_rejetpop_02034]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02034"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02034
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02034
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02034
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02035*/
/*------------------------------------------------------------------ */
async function GraphDATA02035() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02035.push(vote_macron); 
    vote_lepen_02035.push(vote_lepen);
    vote_rejet_02035.push(vote_rejet);
    vote_macronpop_02035.push(vote_macronMediane);
    vote_lepenpop_02035.push(vote_lepenMediane);
    vote_rejetpop_02035.push(vote_rejetMediane);
    name_Commune_02035.push(nameCommune);
    Pourcentage_02035.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02035.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02035.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02035.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02035.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02035 = [];
const vote_lepen_02035 = [];
const vote_rejet_02035 = [];
const vote_macronpop_02035 = [];
const vote_lepenpop_02035 = [];
const vote_rejetpop_02035 = [];
const name_Commune_02035 = [];
const Pourcentage_02035 = [];
const Pourcentage_rejet_02035 = [];
const vote_gene_macron_02035 = [];
const vote_gene_lepen_02035 = [];
const vote_gene_rejet_02035 = [];

async function chartIt02035(){
    await GraphDATA02035();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02035-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02035
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02035
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02035-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02035,vote_lepen_02035,vote_rejet_02035]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02035-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02035,vote_lepenpop_02035,vote_rejetpop_02035]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02035"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02035
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02035
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02035
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02036*/
/*------------------------------------------------------------------ */
async function GraphDATA02036() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02036.push(vote_macron); 
    vote_lepen_02036.push(vote_lepen);
    vote_rejet_02036.push(vote_rejet);
    vote_macronpop_02036.push(vote_macronMediane);
    vote_lepenpop_02036.push(vote_lepenMediane);
    vote_rejetpop_02036.push(vote_rejetMediane);
    name_Commune_02036.push(nameCommune);
    Pourcentage_02036.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02036.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02036.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02036.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02036.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02036 = [];
const vote_lepen_02036 = [];
const vote_rejet_02036 = [];
const vote_macronpop_02036 = [];
const vote_lepenpop_02036 = [];
const vote_rejetpop_02036 = [];
const name_Commune_02036 = [];
const Pourcentage_02036 = [];
const Pourcentage_rejet_02036 = [];
const vote_gene_macron_02036 = [];
const vote_gene_lepen_02036 = [];
const vote_gene_rejet_02036 = [];

async function chartIt02036(){
    await GraphDATA02036();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02036-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02036
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02036
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02036-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02036,vote_lepen_02036,vote_rejet_02036]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02036-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02036,vote_lepenpop_02036,vote_rejetpop_02036]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02036"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02036
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02036
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02036
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02037*/
/*------------------------------------------------------------------ */
async function GraphDATA02037() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02037.push(vote_macron); 
    vote_lepen_02037.push(vote_lepen);
    vote_rejet_02037.push(vote_rejet);
    vote_macronpop_02037.push(vote_macronMediane);
    vote_lepenpop_02037.push(vote_lepenMediane);
    vote_rejetpop_02037.push(vote_rejetMediane);
    name_Commune_02037.push(nameCommune);
    Pourcentage_02037.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02037.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02037.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02037.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02037.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02037 = [];
const vote_lepen_02037 = [];
const vote_rejet_02037 = [];
const vote_macronpop_02037 = [];
const vote_lepenpop_02037 = [];
const vote_rejetpop_02037 = [];
const name_Commune_02037 = [];
const Pourcentage_02037 = [];
const Pourcentage_rejet_02037 = [];
const vote_gene_macron_02037 = [];
const vote_gene_lepen_02037 = [];
const vote_gene_rejet_02037 = [];

async function chartIt02037(){
    await GraphDATA02037();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02037-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02037
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02037
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02037-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02037,vote_lepen_02037,vote_rejet_02037]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02037-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02037,vote_lepenpop_02037,vote_rejetpop_02037]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02037"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02037
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02037
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02037
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02038*/
/*------------------------------------------------------------------ */
async function GraphDATA02038() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02038.push(vote_macron); 
    vote_lepen_02038.push(vote_lepen);
    vote_rejet_02038.push(vote_rejet);
    vote_macronpop_02038.push(vote_macronMediane);
    vote_lepenpop_02038.push(vote_lepenMediane);
    vote_rejetpop_02038.push(vote_rejetMediane);
    name_Commune_02038.push(nameCommune);
    Pourcentage_02038.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02038.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02038.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02038.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02038.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02038 = [];
const vote_lepen_02038 = [];
const vote_rejet_02038 = [];
const vote_macronpop_02038 = [];
const vote_lepenpop_02038 = [];
const vote_rejetpop_02038 = [];
const name_Commune_02038 = [];
const Pourcentage_02038 = [];
const Pourcentage_rejet_02038 = [];
const vote_gene_macron_02038 = [];
const vote_gene_lepen_02038 = [];
const vote_gene_rejet_02038 = [];

async function chartIt02038(){
    await GraphDATA02038();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02038-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02038
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02038
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02038-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02038,vote_lepen_02038,vote_rejet_02038]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02038-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02038,vote_lepenpop_02038,vote_rejetpop_02038]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02038"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02038
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02038
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02038
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02039*/
/*------------------------------------------------------------------ */
async function GraphDATA02039() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02039.push(vote_macron); 
    vote_lepen_02039.push(vote_lepen);
    vote_rejet_02039.push(vote_rejet);
    vote_macronpop_02039.push(vote_macronMediane);
    vote_lepenpop_02039.push(vote_lepenMediane);
    vote_rejetpop_02039.push(vote_rejetMediane);
    name_Commune_02039.push(nameCommune);
    Pourcentage_02039.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02039.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02039.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02039.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02039.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02039 = [];
const vote_lepen_02039 = [];
const vote_rejet_02039 = [];
const vote_macronpop_02039 = [];
const vote_lepenpop_02039 = [];
const vote_rejetpop_02039 = [];
const name_Commune_02039 = [];
const Pourcentage_02039 = [];
const Pourcentage_rejet_02039 = [];
const vote_gene_macron_02039 = [];
const vote_gene_lepen_02039 = [];
const vote_gene_rejet_02039 = [];

async function chartIt02039(){
    await GraphDATA02039();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02039-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02039
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02039
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02039-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02039,vote_lepen_02039,vote_rejet_02039]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02039-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02039,vote_lepenpop_02039,vote_rejetpop_02039]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02039"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02039
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02039
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02039
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02040*/
/*------------------------------------------------------------------ */
async function GraphDATA02040() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02040.push(vote_macron); 
    vote_lepen_02040.push(vote_lepen);
    vote_rejet_02040.push(vote_rejet);
    vote_macronpop_02040.push(vote_macronMediane);
    vote_lepenpop_02040.push(vote_lepenMediane);
    vote_rejetpop_02040.push(vote_rejetMediane);
    name_Commune_02040.push(nameCommune);
    Pourcentage_02040.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02040.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02040.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02040.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02040.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02040 = [];
const vote_lepen_02040 = [];
const vote_rejet_02040 = [];
const vote_macronpop_02040 = [];
const vote_lepenpop_02040 = [];
const vote_rejetpop_02040 = [];
const name_Commune_02040 = [];
const Pourcentage_02040 = [];
const Pourcentage_rejet_02040 = [];
const vote_gene_macron_02040 = [];
const vote_gene_lepen_02040 = [];
const vote_gene_rejet_02040 = [];

async function chartIt02040(){
    await GraphDATA02040();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02040-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02040
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02040
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02040-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02040,vote_lepen_02040,vote_rejet_02040]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02040-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02040,vote_lepenpop_02040,vote_rejetpop_02040]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02040"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02040
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02040
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02040
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02041*/
/*------------------------------------------------------------------ */
async function GraphDATA02041() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02041.push(vote_macron); 
    vote_lepen_02041.push(vote_lepen);
    vote_rejet_02041.push(vote_rejet);
    vote_macronpop_02041.push(vote_macronMediane);
    vote_lepenpop_02041.push(vote_lepenMediane);
    vote_rejetpop_02041.push(vote_rejetMediane);
    name_Commune_02041.push(nameCommune);
    Pourcentage_02041.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02041.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02041.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02041.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02041.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02041 = [];
const vote_lepen_02041 = [];
const vote_rejet_02041 = [];
const vote_macronpop_02041 = [];
const vote_lepenpop_02041 = [];
const vote_rejetpop_02041 = [];
const name_Commune_02041 = [];
const Pourcentage_02041 = [];
const Pourcentage_rejet_02041 = [];
const vote_gene_macron_02041 = [];
const vote_gene_lepen_02041 = [];
const vote_gene_rejet_02041 = [];

async function chartIt02041(){
    await GraphDATA02041();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02041-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02041
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02041
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02041-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02041,vote_lepen_02041,vote_rejet_02041]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02041-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02041,vote_lepenpop_02041,vote_rejetpop_02041]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02041"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02041
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02041
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02041
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02042*/
/*------------------------------------------------------------------ */
async function GraphDATA02042() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02042.push(vote_macron); 
    vote_lepen_02042.push(vote_lepen);
    vote_rejet_02042.push(vote_rejet);
    vote_macronpop_02042.push(vote_macronMediane);
    vote_lepenpop_02042.push(vote_lepenMediane);
    vote_rejetpop_02042.push(vote_rejetMediane);
    name_Commune_02042.push(nameCommune);
    Pourcentage_02042.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02042.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02042.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02042.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02042.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02042 = [];
const vote_lepen_02042 = [];
const vote_rejet_02042 = [];
const vote_macronpop_02042 = [];
const vote_lepenpop_02042 = [];
const vote_rejetpop_02042 = [];
const name_Commune_02042 = [];
const Pourcentage_02042 = [];
const Pourcentage_rejet_02042 = [];
const vote_gene_macron_02042 = [];
const vote_gene_lepen_02042 = [];
const vote_gene_rejet_02042 = [];

async function chartIt02042(){
    await GraphDATA02042();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02042-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02042
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02042
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02042-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02042,vote_lepen_02042,vote_rejet_02042]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02042-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02042,vote_lepenpop_02042,vote_rejetpop_02042]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02042"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02042
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02042
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02042
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02043*/
/*------------------------------------------------------------------ */
async function GraphDATA02043() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02043.push(vote_macron); 
    vote_lepen_02043.push(vote_lepen);
    vote_rejet_02043.push(vote_rejet);
    vote_macronpop_02043.push(vote_macronMediane);
    vote_lepenpop_02043.push(vote_lepenMediane);
    vote_rejetpop_02043.push(vote_rejetMediane);
    name_Commune_02043.push(nameCommune);
    Pourcentage_02043.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02043.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02043.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02043.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02043.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02043 = [];
const vote_lepen_02043 = [];
const vote_rejet_02043 = [];
const vote_macronpop_02043 = [];
const vote_lepenpop_02043 = [];
const vote_rejetpop_02043 = [];
const name_Commune_02043 = [];
const Pourcentage_02043 = [];
const Pourcentage_rejet_02043 = [];
const vote_gene_macron_02043 = [];
const vote_gene_lepen_02043 = [];
const vote_gene_rejet_02043 = [];

async function chartIt02043(){
    await GraphDATA02043();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02043-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02043
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02043
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02043-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02043,vote_lepen_02043,vote_rejet_02043]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02043-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02043,vote_lepenpop_02043,vote_rejetpop_02043]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02043"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02043
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02043
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02043
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02044*/
/*------------------------------------------------------------------ */
async function GraphDATA02044() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02044.push(vote_macron); 
    vote_lepen_02044.push(vote_lepen);
    vote_rejet_02044.push(vote_rejet);
    vote_macronpop_02044.push(vote_macronMediane);
    vote_lepenpop_02044.push(vote_lepenMediane);
    vote_rejetpop_02044.push(vote_rejetMediane);
    name_Commune_02044.push(nameCommune);
    Pourcentage_02044.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02044.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02044.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02044.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02044.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02044 = [];
const vote_lepen_02044 = [];
const vote_rejet_02044 = [];
const vote_macronpop_02044 = [];
const vote_lepenpop_02044 = [];
const vote_rejetpop_02044 = [];
const name_Commune_02044 = [];
const Pourcentage_02044 = [];
const Pourcentage_rejet_02044 = [];
const vote_gene_macron_02044 = [];
const vote_gene_lepen_02044 = [];
const vote_gene_rejet_02044 = [];

async function chartIt02044(){
    await GraphDATA02044();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02044-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02044
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02044
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02044-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02044,vote_lepen_02044,vote_rejet_02044]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02044-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02044,vote_lepenpop_02044,vote_rejetpop_02044]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02044"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02044
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02044
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02044
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02045*/
/*------------------------------------------------------------------ */
async function GraphDATA02045() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02045.push(vote_macron); 
    vote_lepen_02045.push(vote_lepen);
    vote_rejet_02045.push(vote_rejet);
    vote_macronpop_02045.push(vote_macronMediane);
    vote_lepenpop_02045.push(vote_lepenMediane);
    vote_rejetpop_02045.push(vote_rejetMediane);
    name_Commune_02045.push(nameCommune);
    Pourcentage_02045.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02045.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02045.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02045.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02045.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02045 = [];
const vote_lepen_02045 = [];
const vote_rejet_02045 = [];
const vote_macronpop_02045 = [];
const vote_lepenpop_02045 = [];
const vote_rejetpop_02045 = [];
const name_Commune_02045 = [];
const Pourcentage_02045 = [];
const Pourcentage_rejet_02045 = [];
const vote_gene_macron_02045 = [];
const vote_gene_lepen_02045 = [];
const vote_gene_rejet_02045 = [];

async function chartIt02045(){
    await GraphDATA02045();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02045-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02045
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02045
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02045-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02045,vote_lepen_02045,vote_rejet_02045]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02045-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02045,vote_lepenpop_02045,vote_rejetpop_02045]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02045"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02045
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02045
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02045
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02046*/
/*------------------------------------------------------------------ */
async function GraphDATA02046() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02046.push(vote_macron); 
    vote_lepen_02046.push(vote_lepen);
    vote_rejet_02046.push(vote_rejet);
    vote_macronpop_02046.push(vote_macronMediane);
    vote_lepenpop_02046.push(vote_lepenMediane);
    vote_rejetpop_02046.push(vote_rejetMediane);
    name_Commune_02046.push(nameCommune);
    Pourcentage_02046.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02046.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02046.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02046.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02046.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02046 = [];
const vote_lepen_02046 = [];
const vote_rejet_02046 = [];
const vote_macronpop_02046 = [];
const vote_lepenpop_02046 = [];
const vote_rejetpop_02046 = [];
const name_Commune_02046 = [];
const Pourcentage_02046 = [];
const Pourcentage_rejet_02046 = [];
const vote_gene_macron_02046 = [];
const vote_gene_lepen_02046 = [];
const vote_gene_rejet_02046 = [];

async function chartIt02046(){
    await GraphDATA02046();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02046-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02046
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02046
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02046-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02046,vote_lepen_02046,vote_rejet_02046]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02046-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02046,vote_lepenpop_02046,vote_rejetpop_02046]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02046"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02046
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02046
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02046
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02047*/
/*------------------------------------------------------------------ */
async function GraphDATA02047() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02047.push(vote_macron); 
    vote_lepen_02047.push(vote_lepen);
    vote_rejet_02047.push(vote_rejet);
    vote_macronpop_02047.push(vote_macronMediane);
    vote_lepenpop_02047.push(vote_lepenMediane);
    vote_rejetpop_02047.push(vote_rejetMediane);
    name_Commune_02047.push(nameCommune);
    Pourcentage_02047.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02047.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02047.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02047.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02047.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02047 = [];
const vote_lepen_02047 = [];
const vote_rejet_02047 = [];
const vote_macronpop_02047 = [];
const vote_lepenpop_02047 = [];
const vote_rejetpop_02047 = [];
const name_Commune_02047 = [];
const Pourcentage_02047 = [];
const Pourcentage_rejet_02047 = [];
const vote_gene_macron_02047 = [];
const vote_gene_lepen_02047 = [];
const vote_gene_rejet_02047 = [];

async function chartIt02047(){
    await GraphDATA02047();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02047-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02047
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02047
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02047-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02047,vote_lepen_02047,vote_rejet_02047]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02047-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02047,vote_lepenpop_02047,vote_rejetpop_02047]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02047"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02047
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02047
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02047
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02048*/
/*------------------------------------------------------------------ */
async function GraphDATA02048() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02048.push(vote_macron); 
    vote_lepen_02048.push(vote_lepen);
    vote_rejet_02048.push(vote_rejet);
    vote_macronpop_02048.push(vote_macronMediane);
    vote_lepenpop_02048.push(vote_lepenMediane);
    vote_rejetpop_02048.push(vote_rejetMediane);
    name_Commune_02048.push(nameCommune);
    Pourcentage_02048.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02048.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02048.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02048.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02048.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02048 = [];
const vote_lepen_02048 = [];
const vote_rejet_02048 = [];
const vote_macronpop_02048 = [];
const vote_lepenpop_02048 = [];
const vote_rejetpop_02048 = [];
const name_Commune_02048 = [];
const Pourcentage_02048 = [];
const Pourcentage_rejet_02048 = [];
const vote_gene_macron_02048 = [];
const vote_gene_lepen_02048 = [];
const vote_gene_rejet_02048 = [];

async function chartIt02048(){
    await GraphDATA02048();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02048-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02048
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02048
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02048-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02048,vote_lepen_02048,vote_rejet_02048]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02048-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02048,vote_lepenpop_02048,vote_rejetpop_02048]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02048"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02048
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02048
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02048
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02049*/
/*------------------------------------------------------------------ */
async function GraphDATA02049() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02049.push(vote_macron); 
    vote_lepen_02049.push(vote_lepen);
    vote_rejet_02049.push(vote_rejet);
    vote_macronpop_02049.push(vote_macronMediane);
    vote_lepenpop_02049.push(vote_lepenMediane);
    vote_rejetpop_02049.push(vote_rejetMediane);
    name_Commune_02049.push(nameCommune);
    Pourcentage_02049.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02049.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02049.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02049.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02049.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02049 = [];
const vote_lepen_02049 = [];
const vote_rejet_02049 = [];
const vote_macronpop_02049 = [];
const vote_lepenpop_02049 = [];
const vote_rejetpop_02049 = [];
const name_Commune_02049 = [];
const Pourcentage_02049 = [];
const Pourcentage_rejet_02049 = [];
const vote_gene_macron_02049 = [];
const vote_gene_lepen_02049 = [];
const vote_gene_rejet_02049 = [];

async function chartIt02049(){
    await GraphDATA02049();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02049-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02049
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02049
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02049-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02049,vote_lepen_02049,vote_rejet_02049]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02049-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02049,vote_lepenpop_02049,vote_rejetpop_02049]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02049"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02049
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02049
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02049
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02050*/
/*------------------------------------------------------------------ */
async function GraphDATA02050() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02050.push(vote_macron); 
    vote_lepen_02050.push(vote_lepen);
    vote_rejet_02050.push(vote_rejet);
    vote_macronpop_02050.push(vote_macronMediane);
    vote_lepenpop_02050.push(vote_lepenMediane);
    vote_rejetpop_02050.push(vote_rejetMediane);
    name_Commune_02050.push(nameCommune);
    Pourcentage_02050.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02050.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02050.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02050.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02050.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02050 = [];
const vote_lepen_02050 = [];
const vote_rejet_02050 = [];
const vote_macronpop_02050 = [];
const vote_lepenpop_02050 = [];
const vote_rejetpop_02050 = [];
const name_Commune_02050 = [];
const Pourcentage_02050 = [];
const Pourcentage_rejet_02050 = [];
const vote_gene_macron_02050 = [];
const vote_gene_lepen_02050 = [];
const vote_gene_rejet_02050 = [];

async function chartIt02050(){
    await GraphDATA02050();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02050-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02050
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02050
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02050-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02050,vote_lepen_02050,vote_rejet_02050]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02050-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02050,vote_lepenpop_02050,vote_rejetpop_02050]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02050"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02050
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02050
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02050
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02051*/
/*------------------------------------------------------------------ */
async function GraphDATA02051() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02051.push(vote_macron); 
    vote_lepen_02051.push(vote_lepen);
    vote_rejet_02051.push(vote_rejet);
    vote_macronpop_02051.push(vote_macronMediane);
    vote_lepenpop_02051.push(vote_lepenMediane);
    vote_rejetpop_02051.push(vote_rejetMediane);
    name_Commune_02051.push(nameCommune);
    Pourcentage_02051.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02051.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02051.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02051.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02051.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02051 = [];
const vote_lepen_02051 = [];
const vote_rejet_02051 = [];
const vote_macronpop_02051 = [];
const vote_lepenpop_02051 = [];
const vote_rejetpop_02051 = [];
const name_Commune_02051 = [];
const Pourcentage_02051 = [];
const Pourcentage_rejet_02051 = [];
const vote_gene_macron_02051 = [];
const vote_gene_lepen_02051 = [];
const vote_gene_rejet_02051 = [];

async function chartIt02051(){
    await GraphDATA02051();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02051-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02051
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02051
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02051-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02051,vote_lepen_02051,vote_rejet_02051]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02051-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02051,vote_lepenpop_02051,vote_rejetpop_02051]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02051"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02051
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02051
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02051
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02052*/
/*------------------------------------------------------------------ */
async function GraphDATA02052() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02052.push(vote_macron); 
    vote_lepen_02052.push(vote_lepen);
    vote_rejet_02052.push(vote_rejet);
    vote_macronpop_02052.push(vote_macronMediane);
    vote_lepenpop_02052.push(vote_lepenMediane);
    vote_rejetpop_02052.push(vote_rejetMediane);
    name_Commune_02052.push(nameCommune);
    Pourcentage_02052.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02052.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02052.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02052.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02052.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02052 = [];
const vote_lepen_02052 = [];
const vote_rejet_02052 = [];
const vote_macronpop_02052 = [];
const vote_lepenpop_02052 = [];
const vote_rejetpop_02052 = [];
const name_Commune_02052 = [];
const Pourcentage_02052 = [];
const Pourcentage_rejet_02052 = [];
const vote_gene_macron_02052 = [];
const vote_gene_lepen_02052 = [];
const vote_gene_rejet_02052 = [];

async function chartIt02052(){
    await GraphDATA02052();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02052-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02052
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02052
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02052-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02052,vote_lepen_02052,vote_rejet_02052]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02052-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02052,vote_lepenpop_02052,vote_rejetpop_02052]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02052"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02052
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02052
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02052
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02053*/
/*------------------------------------------------------------------ */
async function GraphDATA02053() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02053.push(vote_macron); 
    vote_lepen_02053.push(vote_lepen);
    vote_rejet_02053.push(vote_rejet);
    vote_macronpop_02053.push(vote_macronMediane);
    vote_lepenpop_02053.push(vote_lepenMediane);
    vote_rejetpop_02053.push(vote_rejetMediane);
    name_Commune_02053.push(nameCommune);
    Pourcentage_02053.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02053.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02053.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02053.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02053.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02053 = [];
const vote_lepen_02053 = [];
const vote_rejet_02053 = [];
const vote_macronpop_02053 = [];
const vote_lepenpop_02053 = [];
const vote_rejetpop_02053 = [];
const name_Commune_02053 = [];
const Pourcentage_02053 = [];
const Pourcentage_rejet_02053 = [];
const vote_gene_macron_02053 = [];
const vote_gene_lepen_02053 = [];
const vote_gene_rejet_02053 = [];

async function chartIt02053(){
    await GraphDATA02053();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02053-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02053
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02053
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02053-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02053,vote_lepen_02053,vote_rejet_02053]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02053-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02053,vote_lepenpop_02053,vote_rejetpop_02053]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02053"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02053
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02053
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02053
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02054*/
/*------------------------------------------------------------------ */
async function GraphDATA02054() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02054.push(vote_macron); 
    vote_lepen_02054.push(vote_lepen);
    vote_rejet_02054.push(vote_rejet);
    vote_macronpop_02054.push(vote_macronMediane);
    vote_lepenpop_02054.push(vote_lepenMediane);
    vote_rejetpop_02054.push(vote_rejetMediane);
    name_Commune_02054.push(nameCommune);
    Pourcentage_02054.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02054.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02054.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02054.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02054.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02054 = [];
const vote_lepen_02054 = [];
const vote_rejet_02054 = [];
const vote_macronpop_02054 = [];
const vote_lepenpop_02054 = [];
const vote_rejetpop_02054 = [];
const name_Commune_02054 = [];
const Pourcentage_02054 = [];
const Pourcentage_rejet_02054 = [];
const vote_gene_macron_02054 = [];
const vote_gene_lepen_02054 = [];
const vote_gene_rejet_02054 = [];

async function chartIt02054(){
    await GraphDATA02054();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02054-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02054
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02054
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02054-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02054,vote_lepen_02054,vote_rejet_02054]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02054-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02054,vote_lepenpop_02054,vote_rejetpop_02054]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02054"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02054
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02054
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02054
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02055*/
/*------------------------------------------------------------------ */
async function GraphDATA02055() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02055.push(vote_macron); 
    vote_lepen_02055.push(vote_lepen);
    vote_rejet_02055.push(vote_rejet);
    vote_macronpop_02055.push(vote_macronMediane);
    vote_lepenpop_02055.push(vote_lepenMediane);
    vote_rejetpop_02055.push(vote_rejetMediane);
    name_Commune_02055.push(nameCommune);
    Pourcentage_02055.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02055.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02055.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02055.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02055.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02055 = [];
const vote_lepen_02055 = [];
const vote_rejet_02055 = [];
const vote_macronpop_02055 = [];
const vote_lepenpop_02055 = [];
const vote_rejetpop_02055 = [];
const name_Commune_02055 = [];
const Pourcentage_02055 = [];
const Pourcentage_rejet_02055 = [];
const vote_gene_macron_02055 = [];
const vote_gene_lepen_02055 = [];
const vote_gene_rejet_02055 = [];

async function chartIt02055(){
    await GraphDATA02055();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02055-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02055
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02055
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02055-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02055,vote_lepen_02055,vote_rejet_02055]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02055-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02055,vote_lepenpop_02055,vote_rejetpop_02055]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02055"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02055
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02055
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02055
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02056*/
/*------------------------------------------------------------------ */
async function GraphDATA02056() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02056.push(vote_macron); 
    vote_lepen_02056.push(vote_lepen);
    vote_rejet_02056.push(vote_rejet);
    vote_macronpop_02056.push(vote_macronMediane);
    vote_lepenpop_02056.push(vote_lepenMediane);
    vote_rejetpop_02056.push(vote_rejetMediane);
    name_Commune_02056.push(nameCommune);
    Pourcentage_02056.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02056.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02056.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02056.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02056.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02056 = [];
const vote_lepen_02056 = [];
const vote_rejet_02056 = [];
const vote_macronpop_02056 = [];
const vote_lepenpop_02056 = [];
const vote_rejetpop_02056 = [];
const name_Commune_02056 = [];
const Pourcentage_02056 = [];
const Pourcentage_rejet_02056 = [];
const vote_gene_macron_02056 = [];
const vote_gene_lepen_02056 = [];
const vote_gene_rejet_02056 = [];

async function chartIt02056(){
    await GraphDATA02056();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02056-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02056
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02056
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02056-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02056,vote_lepen_02056,vote_rejet_02056]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02056-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02056,vote_lepenpop_02056,vote_rejetpop_02056]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02056"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02056
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02056
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02056
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02057*/
/*------------------------------------------------------------------ */
async function GraphDATA02057() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02057.push(vote_macron); 
    vote_lepen_02057.push(vote_lepen);
    vote_rejet_02057.push(vote_rejet);
    vote_macronpop_02057.push(vote_macronMediane);
    vote_lepenpop_02057.push(vote_lepenMediane);
    vote_rejetpop_02057.push(vote_rejetMediane);
    name_Commune_02057.push(nameCommune);
    Pourcentage_02057.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02057.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02057.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02057.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02057.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02057 = [];
const vote_lepen_02057 = [];
const vote_rejet_02057 = [];
const vote_macronpop_02057 = [];
const vote_lepenpop_02057 = [];
const vote_rejetpop_02057 = [];
const name_Commune_02057 = [];
const Pourcentage_02057 = [];
const Pourcentage_rejet_02057 = [];
const vote_gene_macron_02057 = [];
const vote_gene_lepen_02057 = [];
const vote_gene_rejet_02057 = [];

async function chartIt02057(){
    await GraphDATA02057();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02057-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02057
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02057
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02057-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02057,vote_lepen_02057,vote_rejet_02057]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02057-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02057,vote_lepenpop_02057,vote_rejetpop_02057]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02057"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02057
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02057
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02057
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02058*/
/*------------------------------------------------------------------ */
async function GraphDATA02058() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02058.push(vote_macron); 
    vote_lepen_02058.push(vote_lepen);
    vote_rejet_02058.push(vote_rejet);
    vote_macronpop_02058.push(vote_macronMediane);
    vote_lepenpop_02058.push(vote_lepenMediane);
    vote_rejetpop_02058.push(vote_rejetMediane);
    name_Commune_02058.push(nameCommune);
    Pourcentage_02058.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02058.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02058.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02058.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02058.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02058 = [];
const vote_lepen_02058 = [];
const vote_rejet_02058 = [];
const vote_macronpop_02058 = [];
const vote_lepenpop_02058 = [];
const vote_rejetpop_02058 = [];
const name_Commune_02058 = [];
const Pourcentage_02058 = [];
const Pourcentage_rejet_02058 = [];
const vote_gene_macron_02058 = [];
const vote_gene_lepen_02058 = [];
const vote_gene_rejet_02058 = [];

async function chartIt02058(){
    await GraphDATA02058();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02058-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02058
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02058
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02058-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02058,vote_lepen_02058,vote_rejet_02058]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02058-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02058,vote_lepenpop_02058,vote_rejetpop_02058]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02058"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02058
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02058
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02058
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02059*/
/*------------------------------------------------------------------ */
async function GraphDATA02059() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02059.push(vote_macron); 
    vote_lepen_02059.push(vote_lepen);
    vote_rejet_02059.push(vote_rejet);
    vote_macronpop_02059.push(vote_macronMediane);
    vote_lepenpop_02059.push(vote_lepenMediane);
    vote_rejetpop_02059.push(vote_rejetMediane);
    name_Commune_02059.push(nameCommune);
    Pourcentage_02059.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02059.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02059.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02059.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02059.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02059 = [];
const vote_lepen_02059 = [];
const vote_rejet_02059 = [];
const vote_macronpop_02059 = [];
const vote_lepenpop_02059 = [];
const vote_rejetpop_02059 = [];
const name_Commune_02059 = [];
const Pourcentage_02059 = [];
const Pourcentage_rejet_02059 = [];
const vote_gene_macron_02059 = [];
const vote_gene_lepen_02059 = [];
const vote_gene_rejet_02059 = [];

async function chartIt02059(){
    await GraphDATA02059();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02059-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02059
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02059
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02059-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02059,vote_lepen_02059,vote_rejet_02059]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02059-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02059,vote_lepenpop_02059,vote_rejetpop_02059]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02059"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02059
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02059
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02059
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02060*/
/*------------------------------------------------------------------ */
async function GraphDATA02060() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02060.push(vote_macron); 
    vote_lepen_02060.push(vote_lepen);
    vote_rejet_02060.push(vote_rejet);
    vote_macronpop_02060.push(vote_macronMediane);
    vote_lepenpop_02060.push(vote_lepenMediane);
    vote_rejetpop_02060.push(vote_rejetMediane);
    name_Commune_02060.push(nameCommune);
    Pourcentage_02060.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02060.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02060.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02060.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02060.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02060 = [];
const vote_lepen_02060 = [];
const vote_rejet_02060 = [];
const vote_macronpop_02060 = [];
const vote_lepenpop_02060 = [];
const vote_rejetpop_02060 = [];
const name_Commune_02060 = [];
const Pourcentage_02060 = [];
const Pourcentage_rejet_02060 = [];
const vote_gene_macron_02060 = [];
const vote_gene_lepen_02060 = [];
const vote_gene_rejet_02060 = [];

async function chartIt02060(){
    await GraphDATA02060();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02060-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02060
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02060
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02060-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02060,vote_lepen_02060,vote_rejet_02060]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02060-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02060,vote_lepenpop_02060,vote_rejetpop_02060]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02060"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02060
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02060
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02060
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02061*/
/*------------------------------------------------------------------ */
async function GraphDATA02061() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02061.push(vote_macron); 
    vote_lepen_02061.push(vote_lepen);
    vote_rejet_02061.push(vote_rejet);
    vote_macronpop_02061.push(vote_macronMediane);
    vote_lepenpop_02061.push(vote_lepenMediane);
    vote_rejetpop_02061.push(vote_rejetMediane);
    name_Commune_02061.push(nameCommune);
    Pourcentage_02061.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02061.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02061.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02061.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02061.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02061 = [];
const vote_lepen_02061 = [];
const vote_rejet_02061 = [];
const vote_macronpop_02061 = [];
const vote_lepenpop_02061 = [];
const vote_rejetpop_02061 = [];
const name_Commune_02061 = [];
const Pourcentage_02061 = [];
const Pourcentage_rejet_02061 = [];
const vote_gene_macron_02061 = [];
const vote_gene_lepen_02061 = [];
const vote_gene_rejet_02061 = [];

async function chartIt02061(){
    await GraphDATA02061();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02061-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02061
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02061
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02061-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02061,vote_lepen_02061,vote_rejet_02061]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02061-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02061,vote_lepenpop_02061,vote_rejetpop_02061]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02061"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02061
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02061
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02061
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02062*/
/*------------------------------------------------------------------ */
async function GraphDATA02062() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02062.push(vote_macron); 
    vote_lepen_02062.push(vote_lepen);
    vote_rejet_02062.push(vote_rejet);
    vote_macronpop_02062.push(vote_macronMediane);
    vote_lepenpop_02062.push(vote_lepenMediane);
    vote_rejetpop_02062.push(vote_rejetMediane);
    name_Commune_02062.push(nameCommune);
    Pourcentage_02062.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02062.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02062.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02062.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02062.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02062 = [];
const vote_lepen_02062 = [];
const vote_rejet_02062 = [];
const vote_macronpop_02062 = [];
const vote_lepenpop_02062 = [];
const vote_rejetpop_02062 = [];
const name_Commune_02062 = [];
const Pourcentage_02062 = [];
const Pourcentage_rejet_02062 = [];
const vote_gene_macron_02062 = [];
const vote_gene_lepen_02062 = [];
const vote_gene_rejet_02062 = [];

async function chartIt02062(){
    await GraphDATA02062();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02062-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02062
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02062
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02062-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02062,vote_lepen_02062,vote_rejet_02062]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02062-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02062,vote_lepenpop_02062,vote_rejetpop_02062]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02062"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02062
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02062
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02062
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02063*/
/*------------------------------------------------------------------ */
async function GraphDATA02063() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02063.push(vote_macron); 
    vote_lepen_02063.push(vote_lepen);
    vote_rejet_02063.push(vote_rejet);
    vote_macronpop_02063.push(vote_macronMediane);
    vote_lepenpop_02063.push(vote_lepenMediane);
    vote_rejetpop_02063.push(vote_rejetMediane);
    name_Commune_02063.push(nameCommune);
    Pourcentage_02063.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02063.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02063.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02063.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02063.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02063 = [];
const vote_lepen_02063 = [];
const vote_rejet_02063 = [];
const vote_macronpop_02063 = [];
const vote_lepenpop_02063 = [];
const vote_rejetpop_02063 = [];
const name_Commune_02063 = [];
const Pourcentage_02063 = [];
const Pourcentage_rejet_02063 = [];
const vote_gene_macron_02063 = [];
const vote_gene_lepen_02063 = [];
const vote_gene_rejet_02063 = [];

async function chartIt02063(){
    await GraphDATA02063();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02063-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02063
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02063
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02063-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02063,vote_lepen_02063,vote_rejet_02063]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02063-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02063,vote_lepenpop_02063,vote_rejetpop_02063]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02063"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02063
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02063
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02063
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02064*/
/*------------------------------------------------------------------ */
async function GraphDATA02064() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02064.push(vote_macron); 
    vote_lepen_02064.push(vote_lepen);
    vote_rejet_02064.push(vote_rejet);
    vote_macronpop_02064.push(vote_macronMediane);
    vote_lepenpop_02064.push(vote_lepenMediane);
    vote_rejetpop_02064.push(vote_rejetMediane);
    name_Commune_02064.push(nameCommune);
    Pourcentage_02064.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02064.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02064.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02064.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02064.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02064 = [];
const vote_lepen_02064 = [];
const vote_rejet_02064 = [];
const vote_macronpop_02064 = [];
const vote_lepenpop_02064 = [];
const vote_rejetpop_02064 = [];
const name_Commune_02064 = [];
const Pourcentage_02064 = [];
const Pourcentage_rejet_02064 = [];
const vote_gene_macron_02064 = [];
const vote_gene_lepen_02064 = [];
const vote_gene_rejet_02064 = [];

async function chartIt02064(){
    await GraphDATA02064();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02064-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02064
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02064
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02064-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02064,vote_lepen_02064,vote_rejet_02064]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02064-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02064,vote_lepenpop_02064,vote_rejetpop_02064]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02064"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02064
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02064
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02064
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02065*/
/*------------------------------------------------------------------ */
async function GraphDATA02065() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02065.push(vote_macron); 
    vote_lepen_02065.push(vote_lepen);
    vote_rejet_02065.push(vote_rejet);
    vote_macronpop_02065.push(vote_macronMediane);
    vote_lepenpop_02065.push(vote_lepenMediane);
    vote_rejetpop_02065.push(vote_rejetMediane);
    name_Commune_02065.push(nameCommune);
    Pourcentage_02065.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02065.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02065.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02065.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02065.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02065 = [];
const vote_lepen_02065 = [];
const vote_rejet_02065 = [];
const vote_macronpop_02065 = [];
const vote_lepenpop_02065 = [];
const vote_rejetpop_02065 = [];
const name_Commune_02065 = [];
const Pourcentage_02065 = [];
const Pourcentage_rejet_02065 = [];
const vote_gene_macron_02065 = [];
const vote_gene_lepen_02065 = [];
const vote_gene_rejet_02065 = [];

async function chartIt02065(){
    await GraphDATA02065();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02065-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02065
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02065
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02065-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02065,vote_lepen_02065,vote_rejet_02065]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02065-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02065,vote_lepenpop_02065,vote_rejetpop_02065]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02065"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02065
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02065
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02065
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02066*/
/*------------------------------------------------------------------ */
async function GraphDATA02066() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02066.push(vote_macron); 
    vote_lepen_02066.push(vote_lepen);
    vote_rejet_02066.push(vote_rejet);
    vote_macronpop_02066.push(vote_macronMediane);
    vote_lepenpop_02066.push(vote_lepenMediane);
    vote_rejetpop_02066.push(vote_rejetMediane);
    name_Commune_02066.push(nameCommune);
    Pourcentage_02066.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02066.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02066.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02066.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02066.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02066 = [];
const vote_lepen_02066 = [];
const vote_rejet_02066 = [];
const vote_macronpop_02066 = [];
const vote_lepenpop_02066 = [];
const vote_rejetpop_02066 = [];
const name_Commune_02066 = [];
const Pourcentage_02066 = [];
const Pourcentage_rejet_02066 = [];
const vote_gene_macron_02066 = [];
const vote_gene_lepen_02066 = [];
const vote_gene_rejet_02066 = [];

async function chartIt02066(){
    await GraphDATA02066();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02066-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02066
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02066
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02066-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02066,vote_lepen_02066,vote_rejet_02066]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02066-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02066,vote_lepenpop_02066,vote_rejetpop_02066]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02066"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02066
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02066
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02066
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02067*/
/*------------------------------------------------------------------ */
async function GraphDATA02067() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02067.push(vote_macron); 
    vote_lepen_02067.push(vote_lepen);
    vote_rejet_02067.push(vote_rejet);
    vote_macronpop_02067.push(vote_macronMediane);
    vote_lepenpop_02067.push(vote_lepenMediane);
    vote_rejetpop_02067.push(vote_rejetMediane);
    name_Commune_02067.push(nameCommune);
    Pourcentage_02067.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02067.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02067.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02067.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02067.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02067 = [];
const vote_lepen_02067 = [];
const vote_rejet_02067 = [];
const vote_macronpop_02067 = [];
const vote_lepenpop_02067 = [];
const vote_rejetpop_02067 = [];
const name_Commune_02067 = [];
const Pourcentage_02067 = [];
const Pourcentage_rejet_02067 = [];
const vote_gene_macron_02067 = [];
const vote_gene_lepen_02067 = [];
const vote_gene_rejet_02067 = [];

async function chartIt02067(){
    await GraphDATA02067();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02067-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02067
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02067
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02067-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02067,vote_lepen_02067,vote_rejet_02067]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02067-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02067,vote_lepenpop_02067,vote_rejetpop_02067]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02067"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02067
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02067
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02067
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02068*/
/*------------------------------------------------------------------ */
async function GraphDATA02068() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02068.push(vote_macron); 
    vote_lepen_02068.push(vote_lepen);
    vote_rejet_02068.push(vote_rejet);
    vote_macronpop_02068.push(vote_macronMediane);
    vote_lepenpop_02068.push(vote_lepenMediane);
    vote_rejetpop_02068.push(vote_rejetMediane);
    name_Commune_02068.push(nameCommune);
    Pourcentage_02068.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02068.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02068.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02068.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02068.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02068 = [];
const vote_lepen_02068 = [];
const vote_rejet_02068 = [];
const vote_macronpop_02068 = [];
const vote_lepenpop_02068 = [];
const vote_rejetpop_02068 = [];
const name_Commune_02068 = [];
const Pourcentage_02068 = [];
const Pourcentage_rejet_02068 = [];
const vote_gene_macron_02068 = [];
const vote_gene_lepen_02068 = [];
const vote_gene_rejet_02068 = [];

async function chartIt02068(){
    await GraphDATA02068();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02068-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02068
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02068
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02068-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02068,vote_lepen_02068,vote_rejet_02068]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02068-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02068,vote_lepenpop_02068,vote_rejetpop_02068]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02068"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02068
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02068
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02068
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02069*/
/*------------------------------------------------------------------ */
async function GraphDATA02069() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02069.push(vote_macron); 
    vote_lepen_02069.push(vote_lepen);
    vote_rejet_02069.push(vote_rejet);
    vote_macronpop_02069.push(vote_macronMediane);
    vote_lepenpop_02069.push(vote_lepenMediane);
    vote_rejetpop_02069.push(vote_rejetMediane);
    name_Commune_02069.push(nameCommune);
    Pourcentage_02069.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02069.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02069.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02069.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02069.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02069 = [];
const vote_lepen_02069 = [];
const vote_rejet_02069 = [];
const vote_macronpop_02069 = [];
const vote_lepenpop_02069 = [];
const vote_rejetpop_02069 = [];
const name_Commune_02069 = [];
const Pourcentage_02069 = [];
const Pourcentage_rejet_02069 = [];
const vote_gene_macron_02069 = [];
const vote_gene_lepen_02069 = [];
const vote_gene_rejet_02069 = [];

async function chartIt02069(){
    await GraphDATA02069();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02069-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02069
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02069
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02069-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02069,vote_lepen_02069,vote_rejet_02069]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02069-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02069,vote_lepenpop_02069,vote_rejetpop_02069]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02069"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02069
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02069
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02069
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02070*/
/*------------------------------------------------------------------ */
async function GraphDATA02070() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02070.push(vote_macron); 
    vote_lepen_02070.push(vote_lepen);
    vote_rejet_02070.push(vote_rejet);
    vote_macronpop_02070.push(vote_macronMediane);
    vote_lepenpop_02070.push(vote_lepenMediane);
    vote_rejetpop_02070.push(vote_rejetMediane);
    name_Commune_02070.push(nameCommune);
    Pourcentage_02070.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02070.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02070.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02070.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02070.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02070 = [];
const vote_lepen_02070 = [];
const vote_rejet_02070 = [];
const vote_macronpop_02070 = [];
const vote_lepenpop_02070 = [];
const vote_rejetpop_02070 = [];
const name_Commune_02070 = [];
const Pourcentage_02070 = [];
const Pourcentage_rejet_02070 = [];
const vote_gene_macron_02070 = [];
const vote_gene_lepen_02070 = [];
const vote_gene_rejet_02070 = [];

async function chartIt02070(){
    await GraphDATA02070();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02070-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02070
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02070
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02070-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02070,vote_lepen_02070,vote_rejet_02070]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02070-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02070,vote_lepenpop_02070,vote_rejetpop_02070]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02070"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02070
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02070
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02070
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02071*/
/*------------------------------------------------------------------ */
async function GraphDATA02071() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02071.push(vote_macron); 
    vote_lepen_02071.push(vote_lepen);
    vote_rejet_02071.push(vote_rejet);
    vote_macronpop_02071.push(vote_macronMediane);
    vote_lepenpop_02071.push(vote_lepenMediane);
    vote_rejetpop_02071.push(vote_rejetMediane);
    name_Commune_02071.push(nameCommune);
    Pourcentage_02071.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02071.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02071.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02071.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02071.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02071 = [];
const vote_lepen_02071 = [];
const vote_rejet_02071 = [];
const vote_macronpop_02071 = [];
const vote_lepenpop_02071 = [];
const vote_rejetpop_02071 = [];
const name_Commune_02071 = [];
const Pourcentage_02071 = [];
const Pourcentage_rejet_02071 = [];
const vote_gene_macron_02071 = [];
const vote_gene_lepen_02071 = [];
const vote_gene_rejet_02071 = [];

async function chartIt02071(){
    await GraphDATA02071();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02071-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02071
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02071
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02071-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02071,vote_lepen_02071,vote_rejet_02071]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02071-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02071,vote_lepenpop_02071,vote_rejetpop_02071]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02071"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02071
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02071
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02071
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02072*/
/*------------------------------------------------------------------ */
async function GraphDATA02072() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02072.push(vote_macron); 
    vote_lepen_02072.push(vote_lepen);
    vote_rejet_02072.push(vote_rejet);
    vote_macronpop_02072.push(vote_macronMediane);
    vote_lepenpop_02072.push(vote_lepenMediane);
    vote_rejetpop_02072.push(vote_rejetMediane);
    name_Commune_02072.push(nameCommune);
    Pourcentage_02072.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02072.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02072.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02072.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02072.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02072 = [];
const vote_lepen_02072 = [];
const vote_rejet_02072 = [];
const vote_macronpop_02072 = [];
const vote_lepenpop_02072 = [];
const vote_rejetpop_02072 = [];
const name_Commune_02072 = [];
const Pourcentage_02072 = [];
const Pourcentage_rejet_02072 = [];
const vote_gene_macron_02072 = [];
const vote_gene_lepen_02072 = [];
const vote_gene_rejet_02072 = [];

async function chartIt02072(){
    await GraphDATA02072();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02072-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02072
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02072
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02072-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02072,vote_lepen_02072,vote_rejet_02072]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02072-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02072,vote_lepenpop_02072,vote_rejetpop_02072]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02072"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02072
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02072
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02072
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02073*/
/*------------------------------------------------------------------ */
async function GraphDATA02073() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02073.push(vote_macron); 
    vote_lepen_02073.push(vote_lepen);
    vote_rejet_02073.push(vote_rejet);
    vote_macronpop_02073.push(vote_macronMediane);
    vote_lepenpop_02073.push(vote_lepenMediane);
    vote_rejetpop_02073.push(vote_rejetMediane);
    name_Commune_02073.push(nameCommune);
    Pourcentage_02073.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02073.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02073.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02073.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02073.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02073 = [];
const vote_lepen_02073 = [];
const vote_rejet_02073 = [];
const vote_macronpop_02073 = [];
const vote_lepenpop_02073 = [];
const vote_rejetpop_02073 = [];
const name_Commune_02073 = [];
const Pourcentage_02073 = [];
const Pourcentage_rejet_02073 = [];
const vote_gene_macron_02073 = [];
const vote_gene_lepen_02073 = [];
const vote_gene_rejet_02073 = [];

async function chartIt02073(){
    await GraphDATA02073();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02073-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02073
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02073
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02073-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02073,vote_lepen_02073,vote_rejet_02073]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02073-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02073,vote_lepenpop_02073,vote_rejetpop_02073]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02073"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02073
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02073
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02073
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02074*/
/*------------------------------------------------------------------ */
async function GraphDATA02074() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02074.push(vote_macron); 
    vote_lepen_02074.push(vote_lepen);
    vote_rejet_02074.push(vote_rejet);
    vote_macronpop_02074.push(vote_macronMediane);
    vote_lepenpop_02074.push(vote_lepenMediane);
    vote_rejetpop_02074.push(vote_rejetMediane);
    name_Commune_02074.push(nameCommune);
    Pourcentage_02074.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02074.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02074.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02074.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02074.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02074 = [];
const vote_lepen_02074 = [];
const vote_rejet_02074 = [];
const vote_macronpop_02074 = [];
const vote_lepenpop_02074 = [];
const vote_rejetpop_02074 = [];
const name_Commune_02074 = [];
const Pourcentage_02074 = [];
const Pourcentage_rejet_02074 = [];
const vote_gene_macron_02074 = [];
const vote_gene_lepen_02074 = [];
const vote_gene_rejet_02074 = [];

async function chartIt02074(){
    await GraphDATA02074();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02074-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02074
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02074
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02074-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02074,vote_lepen_02074,vote_rejet_02074]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02074-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02074,vote_lepenpop_02074,vote_rejetpop_02074]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02074"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02074
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02074
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02074
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02075*/
/*------------------------------------------------------------------ */
async function GraphDATA02075() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02075.push(vote_macron); 
    vote_lepen_02075.push(vote_lepen);
    vote_rejet_02075.push(vote_rejet);
    vote_macronpop_02075.push(vote_macronMediane);
    vote_lepenpop_02075.push(vote_lepenMediane);
    vote_rejetpop_02075.push(vote_rejetMediane);
    name_Commune_02075.push(nameCommune);
    Pourcentage_02075.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02075.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02075.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02075.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02075.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02075 = [];
const vote_lepen_02075 = [];
const vote_rejet_02075 = [];
const vote_macronpop_02075 = [];
const vote_lepenpop_02075 = [];
const vote_rejetpop_02075 = [];
const name_Commune_02075 = [];
const Pourcentage_02075 = [];
const Pourcentage_rejet_02075 = [];
const vote_gene_macron_02075 = [];
const vote_gene_lepen_02075 = [];
const vote_gene_rejet_02075 = [];

async function chartIt02075(){
    await GraphDATA02075();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02075-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02075
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02075
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02075-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02075,vote_lepen_02075,vote_rejet_02075]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02075-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02075,vote_lepenpop_02075,vote_rejetpop_02075]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02075"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02075
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02075
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02075
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02076*/
/*------------------------------------------------------------------ */
async function GraphDATA02076() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02076.push(vote_macron); 
    vote_lepen_02076.push(vote_lepen);
    vote_rejet_02076.push(vote_rejet);
    vote_macronpop_02076.push(vote_macronMediane);
    vote_lepenpop_02076.push(vote_lepenMediane);
    vote_rejetpop_02076.push(vote_rejetMediane);
    name_Commune_02076.push(nameCommune);
    Pourcentage_02076.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02076.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02076.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02076.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02076.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02076 = [];
const vote_lepen_02076 = [];
const vote_rejet_02076 = [];
const vote_macronpop_02076 = [];
const vote_lepenpop_02076 = [];
const vote_rejetpop_02076 = [];
const name_Commune_02076 = [];
const Pourcentage_02076 = [];
const Pourcentage_rejet_02076 = [];
const vote_gene_macron_02076 = [];
const vote_gene_lepen_02076 = [];
const vote_gene_rejet_02076 = [];

async function chartIt02076(){
    await GraphDATA02076();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02076-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02076
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02076
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02076-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02076,vote_lepen_02076,vote_rejet_02076]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02076-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02076,vote_lepenpop_02076,vote_rejetpop_02076]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02076"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02076
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02076
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02076
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02077*/
/*------------------------------------------------------------------ */
async function GraphDATA02077() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02077.push(vote_macron); 
    vote_lepen_02077.push(vote_lepen);
    vote_rejet_02077.push(vote_rejet);
    vote_macronpop_02077.push(vote_macronMediane);
    vote_lepenpop_02077.push(vote_lepenMediane);
    vote_rejetpop_02077.push(vote_rejetMediane);
    name_Commune_02077.push(nameCommune);
    Pourcentage_02077.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02077.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02077.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02077.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02077.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02077 = [];
const vote_lepen_02077 = [];
const vote_rejet_02077 = [];
const vote_macronpop_02077 = [];
const vote_lepenpop_02077 = [];
const vote_rejetpop_02077 = [];
const name_Commune_02077 = [];
const Pourcentage_02077 = [];
const Pourcentage_rejet_02077 = [];
const vote_gene_macron_02077 = [];
const vote_gene_lepen_02077 = [];
const vote_gene_rejet_02077 = [];

async function chartIt02077(){
    await GraphDATA02077();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02077-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02077
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02077
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02077-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02077,vote_lepen_02077,vote_rejet_02077]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02077-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02077,vote_lepenpop_02077,vote_rejetpop_02077]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02077"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02077
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02077
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02077
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02078*/
/*------------------------------------------------------------------ */
async function GraphDATA02078() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02078.push(vote_macron); 
    vote_lepen_02078.push(vote_lepen);
    vote_rejet_02078.push(vote_rejet);
    vote_macronpop_02078.push(vote_macronMediane);
    vote_lepenpop_02078.push(vote_lepenMediane);
    vote_rejetpop_02078.push(vote_rejetMediane);
    name_Commune_02078.push(nameCommune);
    Pourcentage_02078.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02078.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02078.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02078.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02078.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02078 = [];
const vote_lepen_02078 = [];
const vote_rejet_02078 = [];
const vote_macronpop_02078 = [];
const vote_lepenpop_02078 = [];
const vote_rejetpop_02078 = [];
const name_Commune_02078 = [];
const Pourcentage_02078 = [];
const Pourcentage_rejet_02078 = [];
const vote_gene_macron_02078 = [];
const vote_gene_lepen_02078 = [];
const vote_gene_rejet_02078 = [];

async function chartIt02078(){
    await GraphDATA02078();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02078-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02078
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02078
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02078-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02078,vote_lepen_02078,vote_rejet_02078]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02078-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02078,vote_lepenpop_02078,vote_rejetpop_02078]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02078"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02078
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02078
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02078
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02079*/
/*------------------------------------------------------------------ */
async function GraphDATA02079() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02079.push(vote_macron); 
    vote_lepen_02079.push(vote_lepen);
    vote_rejet_02079.push(vote_rejet);
    vote_macronpop_02079.push(vote_macronMediane);
    vote_lepenpop_02079.push(vote_lepenMediane);
    vote_rejetpop_02079.push(vote_rejetMediane);
    name_Commune_02079.push(nameCommune);
    Pourcentage_02079.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02079.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02079.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02079.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02079.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02079 = [];
const vote_lepen_02079 = [];
const vote_rejet_02079 = [];
const vote_macronpop_02079 = [];
const vote_lepenpop_02079 = [];
const vote_rejetpop_02079 = [];
const name_Commune_02079 = [];
const Pourcentage_02079 = [];
const Pourcentage_rejet_02079 = [];
const vote_gene_macron_02079 = [];
const vote_gene_lepen_02079 = [];
const vote_gene_rejet_02079 = [];

async function chartIt02079(){
    await GraphDATA02079();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02079-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02079
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02079
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02079-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02079,vote_lepen_02079,vote_rejet_02079]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02079-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02079,vote_lepenpop_02079,vote_rejetpop_02079]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02079"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02079
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02079
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02079
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02080*/
/*------------------------------------------------------------------ */
async function GraphDATA02080() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02080.push(vote_macron); 
    vote_lepen_02080.push(vote_lepen);
    vote_rejet_02080.push(vote_rejet);
    vote_macronpop_02080.push(vote_macronMediane);
    vote_lepenpop_02080.push(vote_lepenMediane);
    vote_rejetpop_02080.push(vote_rejetMediane);
    name_Commune_02080.push(nameCommune);
    Pourcentage_02080.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02080.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02080.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02080.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02080.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02080 = [];
const vote_lepen_02080 = [];
const vote_rejet_02080 = [];
const vote_macronpop_02080 = [];
const vote_lepenpop_02080 = [];
const vote_rejetpop_02080 = [];
const name_Commune_02080 = [];
const Pourcentage_02080 = [];
const Pourcentage_rejet_02080 = [];
const vote_gene_macron_02080 = [];
const vote_gene_lepen_02080 = [];
const vote_gene_rejet_02080 = [];

async function chartIt02080(){
    await GraphDATA02080();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02080-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02080
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02080
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02080-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02080,vote_lepen_02080,vote_rejet_02080]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02080-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02080,vote_lepenpop_02080,vote_rejetpop_02080]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02080"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02080
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02080
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02080
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02081*/
/*------------------------------------------------------------------ */
async function GraphDATA02081() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02081.push(vote_macron); 
    vote_lepen_02081.push(vote_lepen);
    vote_rejet_02081.push(vote_rejet);
    vote_macronpop_02081.push(vote_macronMediane);
    vote_lepenpop_02081.push(vote_lepenMediane);
    vote_rejetpop_02081.push(vote_rejetMediane);
    name_Commune_02081.push(nameCommune);
    Pourcentage_02081.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02081.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02081.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02081.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02081.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02081 = [];
const vote_lepen_02081 = [];
const vote_rejet_02081 = [];
const vote_macronpop_02081 = [];
const vote_lepenpop_02081 = [];
const vote_rejetpop_02081 = [];
const name_Commune_02081 = [];
const Pourcentage_02081 = [];
const Pourcentage_rejet_02081 = [];
const vote_gene_macron_02081 = [];
const vote_gene_lepen_02081 = [];
const vote_gene_rejet_02081 = [];

async function chartIt02081(){
    await GraphDATA02081();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02081-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02081
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02081
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02081-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02081,vote_lepen_02081,vote_rejet_02081]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02081-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02081,vote_lepenpop_02081,vote_rejetpop_02081]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02081"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02081
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02081
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02081
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02082*/
/*------------------------------------------------------------------ */
async function GraphDATA02082() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02082.push(vote_macron); 
    vote_lepen_02082.push(vote_lepen);
    vote_rejet_02082.push(vote_rejet);
    vote_macronpop_02082.push(vote_macronMediane);
    vote_lepenpop_02082.push(vote_lepenMediane);
    vote_rejetpop_02082.push(vote_rejetMediane);
    name_Commune_02082.push(nameCommune);
    Pourcentage_02082.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02082.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02082.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02082.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02082.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02082 = [];
const vote_lepen_02082 = [];
const vote_rejet_02082 = [];
const vote_macronpop_02082 = [];
const vote_lepenpop_02082 = [];
const vote_rejetpop_02082 = [];
const name_Commune_02082 = [];
const Pourcentage_02082 = [];
const Pourcentage_rejet_02082 = [];
const vote_gene_macron_02082 = [];
const vote_gene_lepen_02082 = [];
const vote_gene_rejet_02082 = [];

async function chartIt02082(){
    await GraphDATA02082();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02082-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02082
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02082
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02082-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02082,vote_lepen_02082,vote_rejet_02082]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02082-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02082,vote_lepenpop_02082,vote_rejetpop_02082]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02082"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02082
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02082
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02082
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02083*/
/*------------------------------------------------------------------ */
async function GraphDATA02083() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02083.push(vote_macron); 
    vote_lepen_02083.push(vote_lepen);
    vote_rejet_02083.push(vote_rejet);
    vote_macronpop_02083.push(vote_macronMediane);
    vote_lepenpop_02083.push(vote_lepenMediane);
    vote_rejetpop_02083.push(vote_rejetMediane);
    name_Commune_02083.push(nameCommune);
    Pourcentage_02083.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02083.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02083.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02083.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02083.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02083 = [];
const vote_lepen_02083 = [];
const vote_rejet_02083 = [];
const vote_macronpop_02083 = [];
const vote_lepenpop_02083 = [];
const vote_rejetpop_02083 = [];
const name_Commune_02083 = [];
const Pourcentage_02083 = [];
const Pourcentage_rejet_02083 = [];
const vote_gene_macron_02083 = [];
const vote_gene_lepen_02083 = [];
const vote_gene_rejet_02083 = [];

async function chartIt02083(){
    await GraphDATA02083();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02083-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02083
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02083
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02083-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02083,vote_lepen_02083,vote_rejet_02083]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02083-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02083,vote_lepenpop_02083,vote_rejetpop_02083]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02083"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02083
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02083
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02083
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02084*/
/*------------------------------------------------------------------ */
async function GraphDATA02084() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02084.push(vote_macron); 
    vote_lepen_02084.push(vote_lepen);
    vote_rejet_02084.push(vote_rejet);
    vote_macronpop_02084.push(vote_macronMediane);
    vote_lepenpop_02084.push(vote_lepenMediane);
    vote_rejetpop_02084.push(vote_rejetMediane);
    name_Commune_02084.push(nameCommune);
    Pourcentage_02084.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02084.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02084.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02084.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02084.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02084 = [];
const vote_lepen_02084 = [];
const vote_rejet_02084 = [];
const vote_macronpop_02084 = [];
const vote_lepenpop_02084 = [];
const vote_rejetpop_02084 = [];
const name_Commune_02084 = [];
const Pourcentage_02084 = [];
const Pourcentage_rejet_02084 = [];
const vote_gene_macron_02084 = [];
const vote_gene_lepen_02084 = [];
const vote_gene_rejet_02084 = [];

async function chartIt02084(){
    await GraphDATA02084();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02084-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02084
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02084
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02084-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02084,vote_lepen_02084,vote_rejet_02084]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02084-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02084,vote_lepenpop_02084,vote_rejetpop_02084]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02084"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02084
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02084
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02084
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02085*/
/*------------------------------------------------------------------ */
async function GraphDATA02085() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02085.push(vote_macron); 
    vote_lepen_02085.push(vote_lepen);
    vote_rejet_02085.push(vote_rejet);
    vote_macronpop_02085.push(vote_macronMediane);
    vote_lepenpop_02085.push(vote_lepenMediane);
    vote_rejetpop_02085.push(vote_rejetMediane);
    name_Commune_02085.push(nameCommune);
    Pourcentage_02085.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02085.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02085.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02085.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02085.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02085 = [];
const vote_lepen_02085 = [];
const vote_rejet_02085 = [];
const vote_macronpop_02085 = [];
const vote_lepenpop_02085 = [];
const vote_rejetpop_02085 = [];
const name_Commune_02085 = [];
const Pourcentage_02085 = [];
const Pourcentage_rejet_02085 = [];
const vote_gene_macron_02085 = [];
const vote_gene_lepen_02085 = [];
const vote_gene_rejet_02085 = [];

async function chartIt02085(){
    await GraphDATA02085();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02085-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02085
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02085
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02085-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02085,vote_lepen_02085,vote_rejet_02085]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02085-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02085,vote_lepenpop_02085,vote_rejetpop_02085]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02085"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02085
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02085
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02085
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02086*/
/*------------------------------------------------------------------ */
async function GraphDATA02086() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02086.push(vote_macron); 
    vote_lepen_02086.push(vote_lepen);
    vote_rejet_02086.push(vote_rejet);
    vote_macronpop_02086.push(vote_macronMediane);
    vote_lepenpop_02086.push(vote_lepenMediane);
    vote_rejetpop_02086.push(vote_rejetMediane);
    name_Commune_02086.push(nameCommune);
    Pourcentage_02086.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02086.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02086.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02086.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02086.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02086 = [];
const vote_lepen_02086 = [];
const vote_rejet_02086 = [];
const vote_macronpop_02086 = [];
const vote_lepenpop_02086 = [];
const vote_rejetpop_02086 = [];
const name_Commune_02086 = [];
const Pourcentage_02086 = [];
const Pourcentage_rejet_02086 = [];
const vote_gene_macron_02086 = [];
const vote_gene_lepen_02086 = [];
const vote_gene_rejet_02086 = [];

async function chartIt02086(){
    await GraphDATA02086();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02086-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02086
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02086
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02086-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02086,vote_lepen_02086,vote_rejet_02086]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02086-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02086,vote_lepenpop_02086,vote_rejetpop_02086]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02086"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02086
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02086
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02086
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02087*/
/*------------------------------------------------------------------ */
async function GraphDATA02087() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02087.push(vote_macron); 
    vote_lepen_02087.push(vote_lepen);
    vote_rejet_02087.push(vote_rejet);
    vote_macronpop_02087.push(vote_macronMediane);
    vote_lepenpop_02087.push(vote_lepenMediane);
    vote_rejetpop_02087.push(vote_rejetMediane);
    name_Commune_02087.push(nameCommune);
    Pourcentage_02087.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02087.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02087.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02087.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02087.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02087 = [];
const vote_lepen_02087 = [];
const vote_rejet_02087 = [];
const vote_macronpop_02087 = [];
const vote_lepenpop_02087 = [];
const vote_rejetpop_02087 = [];
const name_Commune_02087 = [];
const Pourcentage_02087 = [];
const Pourcentage_rejet_02087 = [];
const vote_gene_macron_02087 = [];
const vote_gene_lepen_02087 = [];
const vote_gene_rejet_02087 = [];

async function chartIt02087(){
    await GraphDATA02087();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02087-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02087
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02087
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02087-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02087,vote_lepen_02087,vote_rejet_02087]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02087-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02087,vote_lepenpop_02087,vote_rejetpop_02087]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02087"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02087
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02087
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02087
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02088*/
/*------------------------------------------------------------------ */
async function GraphDATA02088() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02088.push(vote_macron); 
    vote_lepen_02088.push(vote_lepen);
    vote_rejet_02088.push(vote_rejet);
    vote_macronpop_02088.push(vote_macronMediane);
    vote_lepenpop_02088.push(vote_lepenMediane);
    vote_rejetpop_02088.push(vote_rejetMediane);
    name_Commune_02088.push(nameCommune);
    Pourcentage_02088.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02088.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02088.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02088.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02088.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02088 = [];
const vote_lepen_02088 = [];
const vote_rejet_02088 = [];
const vote_macronpop_02088 = [];
const vote_lepenpop_02088 = [];
const vote_rejetpop_02088 = [];
const name_Commune_02088 = [];
const Pourcentage_02088 = [];
const Pourcentage_rejet_02088 = [];
const vote_gene_macron_02088 = [];
const vote_gene_lepen_02088 = [];
const vote_gene_rejet_02088 = [];

async function chartIt02088(){
    await GraphDATA02088();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02088-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02088
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02088
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02088-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02088,vote_lepen_02088,vote_rejet_02088]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02088-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02088,vote_lepenpop_02088,vote_rejetpop_02088]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02088"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02088
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02088
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02088
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02089*/
/*------------------------------------------------------------------ */
async function GraphDATA02089() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02089.push(vote_macron); 
    vote_lepen_02089.push(vote_lepen);
    vote_rejet_02089.push(vote_rejet);
    vote_macronpop_02089.push(vote_macronMediane);
    vote_lepenpop_02089.push(vote_lepenMediane);
    vote_rejetpop_02089.push(vote_rejetMediane);
    name_Commune_02089.push(nameCommune);
    Pourcentage_02089.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02089.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02089.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02089.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02089.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02089 = [];
const vote_lepen_02089 = [];
const vote_rejet_02089 = [];
const vote_macronpop_02089 = [];
const vote_lepenpop_02089 = [];
const vote_rejetpop_02089 = [];
const name_Commune_02089 = [];
const Pourcentage_02089 = [];
const Pourcentage_rejet_02089 = [];
const vote_gene_macron_02089 = [];
const vote_gene_lepen_02089 = [];
const vote_gene_rejet_02089 = [];

async function chartIt02089(){
    await GraphDATA02089();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02089-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02089
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02089
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02089-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02089,vote_lepen_02089,vote_rejet_02089]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02089-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02089,vote_lepenpop_02089,vote_rejetpop_02089]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02089"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02089
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02089
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02089
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02090*/
/*------------------------------------------------------------------ */
async function GraphDATA02090() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02090.push(vote_macron); 
    vote_lepen_02090.push(vote_lepen);
    vote_rejet_02090.push(vote_rejet);
    vote_macronpop_02090.push(vote_macronMediane);
    vote_lepenpop_02090.push(vote_lepenMediane);
    vote_rejetpop_02090.push(vote_rejetMediane);
    name_Commune_02090.push(nameCommune);
    Pourcentage_02090.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02090.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02090.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02090.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02090.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02090 = [];
const vote_lepen_02090 = [];
const vote_rejet_02090 = [];
const vote_macronpop_02090 = [];
const vote_lepenpop_02090 = [];
const vote_rejetpop_02090 = [];
const name_Commune_02090 = [];
const Pourcentage_02090 = [];
const Pourcentage_rejet_02090 = [];
const vote_gene_macron_02090 = [];
const vote_gene_lepen_02090 = [];
const vote_gene_rejet_02090 = [];

async function chartIt02090(){
    await GraphDATA02090();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02090-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02090
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02090
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02090-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02090,vote_lepen_02090,vote_rejet_02090]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02090-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02090,vote_lepenpop_02090,vote_rejetpop_02090]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02090"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02090
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02090
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02090
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02091*/
/*------------------------------------------------------------------ */
async function GraphDATA02091() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02091.push(vote_macron); 
    vote_lepen_02091.push(vote_lepen);
    vote_rejet_02091.push(vote_rejet);
    vote_macronpop_02091.push(vote_macronMediane);
    vote_lepenpop_02091.push(vote_lepenMediane);
    vote_rejetpop_02091.push(vote_rejetMediane);
    name_Commune_02091.push(nameCommune);
    Pourcentage_02091.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02091.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02091.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02091.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02091.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02091 = [];
const vote_lepen_02091 = [];
const vote_rejet_02091 = [];
const vote_macronpop_02091 = [];
const vote_lepenpop_02091 = [];
const vote_rejetpop_02091 = [];
const name_Commune_02091 = [];
const Pourcentage_02091 = [];
const Pourcentage_rejet_02091 = [];
const vote_gene_macron_02091 = [];
const vote_gene_lepen_02091 = [];
const vote_gene_rejet_02091 = [];

async function chartIt02091(){
    await GraphDATA02091();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02091-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02091
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02091
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02091-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02091,vote_lepen_02091,vote_rejet_02091]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02091-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02091,vote_lepenpop_02091,vote_rejetpop_02091]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02091"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02091
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02091
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02091
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02092*/
/*------------------------------------------------------------------ */
async function GraphDATA02092() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02092.push(vote_macron); 
    vote_lepen_02092.push(vote_lepen);
    vote_rejet_02092.push(vote_rejet);
    vote_macronpop_02092.push(vote_macronMediane);
    vote_lepenpop_02092.push(vote_lepenMediane);
    vote_rejetpop_02092.push(vote_rejetMediane);
    name_Commune_02092.push(nameCommune);
    Pourcentage_02092.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02092.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02092.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02092.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02092.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02092 = [];
const vote_lepen_02092 = [];
const vote_rejet_02092 = [];
const vote_macronpop_02092 = [];
const vote_lepenpop_02092 = [];
const vote_rejetpop_02092 = [];
const name_Commune_02092 = [];
const Pourcentage_02092 = [];
const Pourcentage_rejet_02092 = [];
const vote_gene_macron_02092 = [];
const vote_gene_lepen_02092 = [];
const vote_gene_rejet_02092 = [];

async function chartIt02092(){
    await GraphDATA02092();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02092-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02092
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02092
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02092-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02092,vote_lepen_02092,vote_rejet_02092]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02092-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02092,vote_lepenpop_02092,vote_rejetpop_02092]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02092"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02092
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02092
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02092
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02093*/
/*------------------------------------------------------------------ */
async function GraphDATA02093() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02093.push(vote_macron); 
    vote_lepen_02093.push(vote_lepen);
    vote_rejet_02093.push(vote_rejet);
    vote_macronpop_02093.push(vote_macronMediane);
    vote_lepenpop_02093.push(vote_lepenMediane);
    vote_rejetpop_02093.push(vote_rejetMediane);
    name_Commune_02093.push(nameCommune);
    Pourcentage_02093.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02093.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02093.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02093.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02093.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02093 = [];
const vote_lepen_02093 = [];
const vote_rejet_02093 = [];
const vote_macronpop_02093 = [];
const vote_lepenpop_02093 = [];
const vote_rejetpop_02093 = [];
const name_Commune_02093 = [];
const Pourcentage_02093 = [];
const Pourcentage_rejet_02093 = [];
const vote_gene_macron_02093 = [];
const vote_gene_lepen_02093 = [];
const vote_gene_rejet_02093 = [];

async function chartIt02093(){
    await GraphDATA02093();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02093-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02093
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02093
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02093-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02093,vote_lepen_02093,vote_rejet_02093]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02093-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02093,vote_lepenpop_02093,vote_rejetpop_02093]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02093"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02093
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02093
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02093
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02094*/
/*------------------------------------------------------------------ */
async function GraphDATA02094() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02094.push(vote_macron); 
    vote_lepen_02094.push(vote_lepen);
    vote_rejet_02094.push(vote_rejet);
    vote_macronpop_02094.push(vote_macronMediane);
    vote_lepenpop_02094.push(vote_lepenMediane);
    vote_rejetpop_02094.push(vote_rejetMediane);
    name_Commune_02094.push(nameCommune);
    Pourcentage_02094.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02094.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02094.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02094.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02094.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02094 = [];
const vote_lepen_02094 = [];
const vote_rejet_02094 = [];
const vote_macronpop_02094 = [];
const vote_lepenpop_02094 = [];
const vote_rejetpop_02094 = [];
const name_Commune_02094 = [];
const Pourcentage_02094 = [];
const Pourcentage_rejet_02094 = [];
const vote_gene_macron_02094 = [];
const vote_gene_lepen_02094 = [];
const vote_gene_rejet_02094 = [];

async function chartIt02094(){
    await GraphDATA02094();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02094-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02094
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02094
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02094-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02094,vote_lepen_02094,vote_rejet_02094]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02094-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02094,vote_lepenpop_02094,vote_rejetpop_02094]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02094"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02094
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02094
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02094
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02095*/
/*------------------------------------------------------------------ */
async function GraphDATA02095() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02095.push(vote_macron); 
    vote_lepen_02095.push(vote_lepen);
    vote_rejet_02095.push(vote_rejet);
    vote_macronpop_02095.push(vote_macronMediane);
    vote_lepenpop_02095.push(vote_lepenMediane);
    vote_rejetpop_02095.push(vote_rejetMediane);
    name_Commune_02095.push(nameCommune);
    Pourcentage_02095.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02095.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02095.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02095.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02095.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02095 = [];
const vote_lepen_02095 = [];
const vote_rejet_02095 = [];
const vote_macronpop_02095 = [];
const vote_lepenpop_02095 = [];
const vote_rejetpop_02095 = [];
const name_Commune_02095 = [];
const Pourcentage_02095 = [];
const Pourcentage_rejet_02095 = [];
const vote_gene_macron_02095 = [];
const vote_gene_lepen_02095 = [];
const vote_gene_rejet_02095 = [];

async function chartIt02095(){
    await GraphDATA02095();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02095-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02095
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02095
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02095-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02095,vote_lepen_02095,vote_rejet_02095]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02095-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02095,vote_lepenpop_02095,vote_rejetpop_02095]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02095"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02095
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02095
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02095
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02096*/
/*------------------------------------------------------------------ */
async function GraphDATA02096() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02096.push(vote_macron); 
    vote_lepen_02096.push(vote_lepen);
    vote_rejet_02096.push(vote_rejet);
    vote_macronpop_02096.push(vote_macronMediane);
    vote_lepenpop_02096.push(vote_lepenMediane);
    vote_rejetpop_02096.push(vote_rejetMediane);
    name_Commune_02096.push(nameCommune);
    Pourcentage_02096.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02096.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02096.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02096.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02096.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02096 = [];
const vote_lepen_02096 = [];
const vote_rejet_02096 = [];
const vote_macronpop_02096 = [];
const vote_lepenpop_02096 = [];
const vote_rejetpop_02096 = [];
const name_Commune_02096 = [];
const Pourcentage_02096 = [];
const Pourcentage_rejet_02096 = [];
const vote_gene_macron_02096 = [];
const vote_gene_lepen_02096 = [];
const vote_gene_rejet_02096 = [];

async function chartIt02096(){
    await GraphDATA02096();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02096-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02096
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02096
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02096-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02096,vote_lepen_02096,vote_rejet_02096]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02096-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02096,vote_lepenpop_02096,vote_rejetpop_02096]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02096"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02096
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02096
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02096
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02097*/
/*------------------------------------------------------------------ */
async function GraphDATA02097() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02097.push(vote_macron); 
    vote_lepen_02097.push(vote_lepen);
    vote_rejet_02097.push(vote_rejet);
    vote_macronpop_02097.push(vote_macronMediane);
    vote_lepenpop_02097.push(vote_lepenMediane);
    vote_rejetpop_02097.push(vote_rejetMediane);
    name_Commune_02097.push(nameCommune);
    Pourcentage_02097.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02097.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02097.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02097.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02097.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02097 = [];
const vote_lepen_02097 = [];
const vote_rejet_02097 = [];
const vote_macronpop_02097 = [];
const vote_lepenpop_02097 = [];
const vote_rejetpop_02097 = [];
const name_Commune_02097 = [];
const Pourcentage_02097 = [];
const Pourcentage_rejet_02097 = [];
const vote_gene_macron_02097 = [];
const vote_gene_lepen_02097 = [];
const vote_gene_rejet_02097 = [];

async function chartIt02097(){
    await GraphDATA02097();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02097-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02097
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02097
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02097-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02097,vote_lepen_02097,vote_rejet_02097]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02097-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02097,vote_lepenpop_02097,vote_rejetpop_02097]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02097"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02097
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02097
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02097
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02098*/
/*------------------------------------------------------------------ */
async function GraphDATA02098() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02098.push(vote_macron); 
    vote_lepen_02098.push(vote_lepen);
    vote_rejet_02098.push(vote_rejet);
    vote_macronpop_02098.push(vote_macronMediane);
    vote_lepenpop_02098.push(vote_lepenMediane);
    vote_rejetpop_02098.push(vote_rejetMediane);
    name_Commune_02098.push(nameCommune);
    Pourcentage_02098.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02098.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02098.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02098.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02098.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02098 = [];
const vote_lepen_02098 = [];
const vote_rejet_02098 = [];
const vote_macronpop_02098 = [];
const vote_lepenpop_02098 = [];
const vote_rejetpop_02098 = [];
const name_Commune_02098 = [];
const Pourcentage_02098 = [];
const Pourcentage_rejet_02098 = [];
const vote_gene_macron_02098 = [];
const vote_gene_lepen_02098 = [];
const vote_gene_rejet_02098 = [];

async function chartIt02098(){
    await GraphDATA02098();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02098-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02098
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02098
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02098-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02098,vote_lepen_02098,vote_rejet_02098]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02098-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02098,vote_lepenpop_02098,vote_rejetpop_02098]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02098"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02098
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02098
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02098
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02099*/
/*------------------------------------------------------------------ */
async function GraphDATA02099() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02099.push(vote_macron); 
    vote_lepen_02099.push(vote_lepen);
    vote_rejet_02099.push(vote_rejet);
    vote_macronpop_02099.push(vote_macronMediane);
    vote_lepenpop_02099.push(vote_lepenMediane);
    vote_rejetpop_02099.push(vote_rejetMediane);
    name_Commune_02099.push(nameCommune);
    Pourcentage_02099.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02099.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02099.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02099.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02099.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02099 = [];
const vote_lepen_02099 = [];
const vote_rejet_02099 = [];
const vote_macronpop_02099 = [];
const vote_lepenpop_02099 = [];
const vote_rejetpop_02099 = [];
const name_Commune_02099 = [];
const Pourcentage_02099 = [];
const Pourcentage_rejet_02099 = [];
const vote_gene_macron_02099 = [];
const vote_gene_lepen_02099 = [];
const vote_gene_rejet_02099 = [];

async function chartIt02099(){
    await GraphDATA02099();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02099-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02099
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02099
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02099-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02099,vote_lepen_02099,vote_rejet_02099]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02099-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02099,vote_lepenpop_02099,vote_rejetpop_02099]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02099"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02099
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02099
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02099
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}