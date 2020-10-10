/********************************************************************** */
/*JS GRAPHIQUE FICHIER DATA */
/********************************************************************** */
const name_abs = "Abstentions";
const name_Blancs = "Blancs";
const name_Nul = "Nuls";
const name_rejete = "Rejeter";
const name_macron = "Macron";
const name_lepen = "Lepen";

chartIt06001();
chartIt06002();
chartIt06003();
chartIt06004();
chartIt06005();
chartIt06006();
chartIt06007();
chartIt06008();
chartIt06009();
chartIt06010();
chartIt06011();
chartIt06012();
chartIt06013();
chartIt06014();
chartIt06015();
chartIt06016();
chartIt06017();
chartIt06018();
chartIt06019();
chartIt06020();
chartIt06021();
chartIt06022();
chartIt06023();
chartIt06024();
chartIt06025();
chartIt06026();
chartIt06027();
chartIt06028();
chartIt06029();
chartIt06030();
chartIt06031();
chartIt06032();
chartIt06033();
chartIt06034();
chartIt06035();
chartIt06036();
chartIt06037();
chartIt06038();
chartIt06039();
chartIt06040();
chartIt06041();
chartIt06042();
chartIt06043();
chartIt06044();
chartIt06045();
chartIt06046();
chartIt06047();
chartIt06048();
chartIt06049();
chartIt06050();
chartIt06051();
chartIt06052();
chartIt06053();
chartIt06054();
chartIt06055();
chartIt06056();
chartIt06057();
chartIt06058();
chartIt06059();
chartIt06060();
chartIt06061();
chartIt06062();
chartIt06063();
chartIt06064();
chartIt06065();
chartIt06066();
chartIt06067();
chartIt06068();
chartIt06069();
chartIt06070();
chartIt06071();
chartIt06072();
chartIt06073();
chartIt06074();
chartIt06075();
chartIt06076();
chartIt06077();
chartIt06078();
chartIt06079();
chartIt06080();
chartIt06081();
chartIt06082();
chartIt06083();
chartIt06084();
chartIt06085();
chartIt06086();
chartIt06087();
chartIt06088();
chartIt06089();
chartIt06090();
chartIt06091();
chartIt06092();
chartIt06093();
chartIt06094();
chartIt06095();
chartIt06096();
chartIt06097();
chartIt06098();
chartIt06099();
/*------------------------------------------------------------------ */
/*COMMUNE 06001*/
/*------------------------------------------------------------------ */
async function GraphDATA06001() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06001.push(vote_macron); 
    vote_lepen_06001.push(vote_lepen);
    vote_rejet_06001.push(vote_rejet);
    vote_macronpop_06001.push(vote_macronMediane);
    vote_lepenpop_06001.push(vote_lepenMediane);
    vote_rejetpop_06001.push(vote_rejetMediane);
    name_Commune_06001.push(nameCommune);
    Pourcentage_06001.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06001.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06001.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06001.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06001.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06001 = [];
const vote_lepen_06001 = [];
const vote_rejet_06001 = [];
const vote_macronpop_06001 = [];
const vote_lepenpop_06001 = [];
const vote_rejetpop_06001 = [];
const name_Commune_06001 = [];
const Pourcentage_06001 = [];
const Pourcentage_rejet_06001 = [];
const vote_gene_macron_06001 = [];
const vote_gene_lepen_06001 = [];
const vote_gene_rejet_06001 = [];

async function chartIt06001(){
    await GraphDATA06001();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06001-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06001
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06001
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06001-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06001,vote_lepen_06001,vote_rejet_06001]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06001-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06001,vote_lepenpop_06001,vote_rejetpop_06001]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06001"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06001
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06001
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06001
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06002*/
/*------------------------------------------------------------------ */
async function GraphDATA06002() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06002.push(vote_macron); 
    vote_lepen_06002.push(vote_lepen);
    vote_rejet_06002.push(vote_rejet);
    vote_macronpop_06002.push(vote_macronMediane);
    vote_lepenpop_06002.push(vote_lepenMediane);
    vote_rejetpop_06002.push(vote_rejetMediane);
    name_Commune_06002.push(nameCommune);
    Pourcentage_06002.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06002.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06002.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06002.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06002.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06002 = [];
const vote_lepen_06002 = [];
const vote_rejet_06002 = [];
const vote_macronpop_06002 = [];
const vote_lepenpop_06002 = [];
const vote_rejetpop_06002 = [];
const name_Commune_06002 = [];
const Pourcentage_06002 = [];
const Pourcentage_rejet_06002 = [];
const vote_gene_macron_06002 = [];
const vote_gene_lepen_06002 = [];
const vote_gene_rejet_06002 = [];

async function chartIt06002(){
    await GraphDATA06002();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06002-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06002
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06002
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06002-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06002,vote_lepen_06002,vote_rejet_06002]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06002-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06002,vote_lepenpop_06002,vote_rejetpop_06002]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06002"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06002
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06002
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06002
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06003*/
/*------------------------------------------------------------------ */
async function GraphDATA06003() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06003.push(vote_macron); 
    vote_lepen_06003.push(vote_lepen);
    vote_rejet_06003.push(vote_rejet);
    vote_macronpop_06003.push(vote_macronMediane);
    vote_lepenpop_06003.push(vote_lepenMediane);
    vote_rejetpop_06003.push(vote_rejetMediane);
    name_Commune_06003.push(nameCommune);
    Pourcentage_06003.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06003.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06003.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06003.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06003.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06003 = [];
const vote_lepen_06003 = [];
const vote_rejet_06003 = [];
const vote_macronpop_06003 = [];
const vote_lepenpop_06003 = [];
const vote_rejetpop_06003 = [];
const name_Commune_06003 = [];
const Pourcentage_06003 = [];
const Pourcentage_rejet_06003 = [];
const vote_gene_macron_06003 = [];
const vote_gene_lepen_06003 = [];
const vote_gene_rejet_06003 = [];

async function chartIt06003(){
    await GraphDATA06003();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06003-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06003
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06003
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06003-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06003,vote_lepen_06003,vote_rejet_06003]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06003-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06003,vote_lepenpop_06003,vote_rejetpop_06003]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06003"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06003
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06003
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06003
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06004*/
/*------------------------------------------------------------------ */
async function GraphDATA06004() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06004.push(vote_macron); 
    vote_lepen_06004.push(vote_lepen);
    vote_rejet_06004.push(vote_rejet);
    vote_macronpop_06004.push(vote_macronMediane);
    vote_lepenpop_06004.push(vote_lepenMediane);
    vote_rejetpop_06004.push(vote_rejetMediane);
    name_Commune_06004.push(nameCommune);
    Pourcentage_06004.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06004.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06004.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06004.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06004.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06004 = [];
const vote_lepen_06004 = [];
const vote_rejet_06004 = [];
const vote_macronpop_06004 = [];
const vote_lepenpop_06004 = [];
const vote_rejetpop_06004 = [];
const name_Commune_06004 = [];
const Pourcentage_06004 = [];
const Pourcentage_rejet_06004 = [];
const vote_gene_macron_06004 = [];
const vote_gene_lepen_06004 = [];
const vote_gene_rejet_06004 = [];

async function chartIt06004(){
    await GraphDATA06004();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06004-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06004
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06004
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06004-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06004,vote_lepen_06004,vote_rejet_06004]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06004-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06004,vote_lepenpop_06004,vote_rejetpop_06004]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06004"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06004
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06004
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06004
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06005*/
/*------------------------------------------------------------------ */
async function GraphDATA06005() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06005.push(vote_macron); 
    vote_lepen_06005.push(vote_lepen);
    vote_rejet_06005.push(vote_rejet);
    vote_macronpop_06005.push(vote_macronMediane);
    vote_lepenpop_06005.push(vote_lepenMediane);
    vote_rejetpop_06005.push(vote_rejetMediane);
    name_Commune_06005.push(nameCommune);
    Pourcentage_06005.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06005.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06005.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06005.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06005.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06005 = [];
const vote_lepen_06005 = [];
const vote_rejet_06005 = [];
const vote_macronpop_06005 = [];
const vote_lepenpop_06005 = [];
const vote_rejetpop_06005 = [];
const name_Commune_06005 = [];
const Pourcentage_06005 = [];
const Pourcentage_rejet_06005 = [];
const vote_gene_macron_06005 = [];
const vote_gene_lepen_06005 = [];
const vote_gene_rejet_06005 = [];

async function chartIt06005(){
    await GraphDATA06005();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06005-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06005
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06005
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06005-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06005,vote_lepen_06005,vote_rejet_06005]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06005-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06005,vote_lepenpop_06005,vote_rejetpop_06005]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06005"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06005
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06005
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06005
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06006*/
/*------------------------------------------------------------------ */
async function GraphDATA06006() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06006.push(vote_macron); 
    vote_lepen_06006.push(vote_lepen);
    vote_rejet_06006.push(vote_rejet);
    vote_macronpop_06006.push(vote_macronMediane);
    vote_lepenpop_06006.push(vote_lepenMediane);
    vote_rejetpop_06006.push(vote_rejetMediane);
    name_Commune_06006.push(nameCommune);
    Pourcentage_06006.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06006.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06006.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06006.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06006.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06006 = [];
const vote_lepen_06006 = [];
const vote_rejet_06006 = [];
const vote_macronpop_06006 = [];
const vote_lepenpop_06006 = [];
const vote_rejetpop_06006 = [];
const name_Commune_06006 = [];
const Pourcentage_06006 = [];
const Pourcentage_rejet_06006 = [];
const vote_gene_macron_06006 = [];
const vote_gene_lepen_06006 = [];
const vote_gene_rejet_06006 = [];

async function chartIt06006(){
    await GraphDATA06006();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06006-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06006
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06006
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06006-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06006,vote_lepen_06006,vote_rejet_06006]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06006-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06006,vote_lepenpop_06006,vote_rejetpop_06006]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06006"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06006
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06006
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06006
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06007*/
/*------------------------------------------------------------------ */
async function GraphDATA06007() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06007.push(vote_macron); 
    vote_lepen_06007.push(vote_lepen);
    vote_rejet_06007.push(vote_rejet);
    vote_macronpop_06007.push(vote_macronMediane);
    vote_lepenpop_06007.push(vote_lepenMediane);
    vote_rejetpop_06007.push(vote_rejetMediane);
    name_Commune_06007.push(nameCommune);
    Pourcentage_06007.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06007.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06007.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06007.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06007.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06007 = [];
const vote_lepen_06007 = [];
const vote_rejet_06007 = [];
const vote_macronpop_06007 = [];
const vote_lepenpop_06007 = [];
const vote_rejetpop_06007 = [];
const name_Commune_06007 = [];
const Pourcentage_06007 = [];
const Pourcentage_rejet_06007 = [];
const vote_gene_macron_06007 = [];
const vote_gene_lepen_06007 = [];
const vote_gene_rejet_06007 = [];

async function chartIt06007(){
    await GraphDATA06007();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06007-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06007
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06007
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06007-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06007,vote_lepen_06007,vote_rejet_06007]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06007-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06007,vote_lepenpop_06007,vote_rejetpop_06007]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06007"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06007
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06007
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06007
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06008*/
/*------------------------------------------------------------------ */
async function GraphDATA06008() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06008.push(vote_macron); 
    vote_lepen_06008.push(vote_lepen);
    vote_rejet_06008.push(vote_rejet);
    vote_macronpop_06008.push(vote_macronMediane);
    vote_lepenpop_06008.push(vote_lepenMediane);
    vote_rejetpop_06008.push(vote_rejetMediane);
    name_Commune_06008.push(nameCommune);
    Pourcentage_06008.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06008.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06008.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06008.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06008.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06008 = [];
const vote_lepen_06008 = [];
const vote_rejet_06008 = [];
const vote_macronpop_06008 = [];
const vote_lepenpop_06008 = [];
const vote_rejetpop_06008 = [];
const name_Commune_06008 = [];
const Pourcentage_06008 = [];
const Pourcentage_rejet_06008 = [];
const vote_gene_macron_06008 = [];
const vote_gene_lepen_06008 = [];
const vote_gene_rejet_06008 = [];

async function chartIt06008(){
    await GraphDATA06008();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06008-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06008
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06008
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06008-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06008,vote_lepen_06008,vote_rejet_06008]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06008-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06008,vote_lepenpop_06008,vote_rejetpop_06008]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06008"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06008
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06008
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06008
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06009*/
/*------------------------------------------------------------------ */
async function GraphDATA06009() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06009.push(vote_macron); 
    vote_lepen_06009.push(vote_lepen);
    vote_rejet_06009.push(vote_rejet);
    vote_macronpop_06009.push(vote_macronMediane);
    vote_lepenpop_06009.push(vote_lepenMediane);
    vote_rejetpop_06009.push(vote_rejetMediane);
    name_Commune_06009.push(nameCommune);
    Pourcentage_06009.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06009.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06009.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06009.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06009.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06009 = [];
const vote_lepen_06009 = [];
const vote_rejet_06009 = [];
const vote_macronpop_06009 = [];
const vote_lepenpop_06009 = [];
const vote_rejetpop_06009 = [];
const name_Commune_06009 = [];
const Pourcentage_06009 = [];
const Pourcentage_rejet_06009 = [];
const vote_gene_macron_06009 = [];
const vote_gene_lepen_06009 = [];
const vote_gene_rejet_06009 = [];

async function chartIt06009(){
    await GraphDATA06009();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06009-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06009
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06009
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06009-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06009,vote_lepen_06009,vote_rejet_06009]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06009-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06009,vote_lepenpop_06009,vote_rejetpop_06009]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06009"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06009
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06009
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06009
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06010*/
/*------------------------------------------------------------------ */
async function GraphDATA06010() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06010.push(vote_macron); 
    vote_lepen_06010.push(vote_lepen);
    vote_rejet_06010.push(vote_rejet);
    vote_macronpop_06010.push(vote_macronMediane);
    vote_lepenpop_06010.push(vote_lepenMediane);
    vote_rejetpop_06010.push(vote_rejetMediane);
    name_Commune_06010.push(nameCommune);
    Pourcentage_06010.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06010.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06010.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06010.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06010.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06010 = [];
const vote_lepen_06010 = [];
const vote_rejet_06010 = [];
const vote_macronpop_06010 = [];
const vote_lepenpop_06010 = [];
const vote_rejetpop_06010 = [];
const name_Commune_06010 = [];
const Pourcentage_06010 = [];
const Pourcentage_rejet_06010 = [];
const vote_gene_macron_06010 = [];
const vote_gene_lepen_06010 = [];
const vote_gene_rejet_06010 = [];

async function chartIt06010(){
    await GraphDATA06010();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06010-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06010
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06010
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06010-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06010,vote_lepen_06010,vote_rejet_06010]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06010-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06010,vote_lepenpop_06010,vote_rejetpop_06010]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06010"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06010
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06010
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06010
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06011*/
/*------------------------------------------------------------------ */
async function GraphDATA06011() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06011.push(vote_macron); 
    vote_lepen_06011.push(vote_lepen);
    vote_rejet_06011.push(vote_rejet);
    vote_macronpop_06011.push(vote_macronMediane);
    vote_lepenpop_06011.push(vote_lepenMediane);
    vote_rejetpop_06011.push(vote_rejetMediane);
    name_Commune_06011.push(nameCommune);
    Pourcentage_06011.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06011.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06011.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06011.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06011.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06011 = [];
const vote_lepen_06011 = [];
const vote_rejet_06011 = [];
const vote_macronpop_06011 = [];
const vote_lepenpop_06011 = [];
const vote_rejetpop_06011 = [];
const name_Commune_06011 = [];
const Pourcentage_06011 = [];
const Pourcentage_rejet_06011 = [];
const vote_gene_macron_06011 = [];
const vote_gene_lepen_06011 = [];
const vote_gene_rejet_06011 = [];

async function chartIt06011(){
    await GraphDATA06011();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06011-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06011
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06011
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06011-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06011,vote_lepen_06011,vote_rejet_06011]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06011-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06011,vote_lepenpop_06011,vote_rejetpop_06011]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06011"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06011
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06011
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06011
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06012*/
/*------------------------------------------------------------------ */
async function GraphDATA06012() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06012.push(vote_macron); 
    vote_lepen_06012.push(vote_lepen);
    vote_rejet_06012.push(vote_rejet);
    vote_macronpop_06012.push(vote_macronMediane);
    vote_lepenpop_06012.push(vote_lepenMediane);
    vote_rejetpop_06012.push(vote_rejetMediane);
    name_Commune_06012.push(nameCommune);
    Pourcentage_06012.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06012.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06012.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06012.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06012.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06012 = [];
const vote_lepen_06012 = [];
const vote_rejet_06012 = [];
const vote_macronpop_06012 = [];
const vote_lepenpop_06012 = [];
const vote_rejetpop_06012 = [];
const name_Commune_06012 = [];
const Pourcentage_06012 = [];
const Pourcentage_rejet_06012 = [];
const vote_gene_macron_06012 = [];
const vote_gene_lepen_06012 = [];
const vote_gene_rejet_06012 = [];

async function chartIt06012(){
    await GraphDATA06012();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06012-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06012
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06012
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06012-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06012,vote_lepen_06012,vote_rejet_06012]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06012-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06012,vote_lepenpop_06012,vote_rejetpop_06012]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06012"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06012
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06012
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06012
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06013*/
/*------------------------------------------------------------------ */
async function GraphDATA06013() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06013.push(vote_macron); 
    vote_lepen_06013.push(vote_lepen);
    vote_rejet_06013.push(vote_rejet);
    vote_macronpop_06013.push(vote_macronMediane);
    vote_lepenpop_06013.push(vote_lepenMediane);
    vote_rejetpop_06013.push(vote_rejetMediane);
    name_Commune_06013.push(nameCommune);
    Pourcentage_06013.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06013.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06013.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06013.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06013.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06013 = [];
const vote_lepen_06013 = [];
const vote_rejet_06013 = [];
const vote_macronpop_06013 = [];
const vote_lepenpop_06013 = [];
const vote_rejetpop_06013 = [];
const name_Commune_06013 = [];
const Pourcentage_06013 = [];
const Pourcentage_rejet_06013 = [];
const vote_gene_macron_06013 = [];
const vote_gene_lepen_06013 = [];
const vote_gene_rejet_06013 = [];

async function chartIt06013(){
    await GraphDATA06013();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06013-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06013
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06013
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06013-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06013,vote_lepen_06013,vote_rejet_06013]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06013-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06013,vote_lepenpop_06013,vote_rejetpop_06013]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06013"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06013
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06013
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06013
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06014*/
/*------------------------------------------------------------------ */
async function GraphDATA06014() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06014.push(vote_macron); 
    vote_lepen_06014.push(vote_lepen);
    vote_rejet_06014.push(vote_rejet);
    vote_macronpop_06014.push(vote_macronMediane);
    vote_lepenpop_06014.push(vote_lepenMediane);
    vote_rejetpop_06014.push(vote_rejetMediane);
    name_Commune_06014.push(nameCommune);
    Pourcentage_06014.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06014.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06014.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06014.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06014.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06014 = [];
const vote_lepen_06014 = [];
const vote_rejet_06014 = [];
const vote_macronpop_06014 = [];
const vote_lepenpop_06014 = [];
const vote_rejetpop_06014 = [];
const name_Commune_06014 = [];
const Pourcentage_06014 = [];
const Pourcentage_rejet_06014 = [];
const vote_gene_macron_06014 = [];
const vote_gene_lepen_06014 = [];
const vote_gene_rejet_06014 = [];

async function chartIt06014(){
    await GraphDATA06014();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06014-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06014
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06014
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06014-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06014,vote_lepen_06014,vote_rejet_06014]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06014-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06014,vote_lepenpop_06014,vote_rejetpop_06014]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06014"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06014
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06014
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06014
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06015*/
/*------------------------------------------------------------------ */
async function GraphDATA06015() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06015.push(vote_macron); 
    vote_lepen_06015.push(vote_lepen);
    vote_rejet_06015.push(vote_rejet);
    vote_macronpop_06015.push(vote_macronMediane);
    vote_lepenpop_06015.push(vote_lepenMediane);
    vote_rejetpop_06015.push(vote_rejetMediane);
    name_Commune_06015.push(nameCommune);
    Pourcentage_06015.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06015.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06015.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06015.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06015.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06015 = [];
const vote_lepen_06015 = [];
const vote_rejet_06015 = [];
const vote_macronpop_06015 = [];
const vote_lepenpop_06015 = [];
const vote_rejetpop_06015 = [];
const name_Commune_06015 = [];
const Pourcentage_06015 = [];
const Pourcentage_rejet_06015 = [];
const vote_gene_macron_06015 = [];
const vote_gene_lepen_06015 = [];
const vote_gene_rejet_06015 = [];

async function chartIt06015(){
    await GraphDATA06015();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06015-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06015
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06015
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06015-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06015,vote_lepen_06015,vote_rejet_06015]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06015-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06015,vote_lepenpop_06015,vote_rejetpop_06015]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06015"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06015
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06015
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06015
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06016*/
/*------------------------------------------------------------------ */
async function GraphDATA06016() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06016.push(vote_macron); 
    vote_lepen_06016.push(vote_lepen);
    vote_rejet_06016.push(vote_rejet);
    vote_macronpop_06016.push(vote_macronMediane);
    vote_lepenpop_06016.push(vote_lepenMediane);
    vote_rejetpop_06016.push(vote_rejetMediane);
    name_Commune_06016.push(nameCommune);
    Pourcentage_06016.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06016.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06016.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06016.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06016.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06016 = [];
const vote_lepen_06016 = [];
const vote_rejet_06016 = [];
const vote_macronpop_06016 = [];
const vote_lepenpop_06016 = [];
const vote_rejetpop_06016 = [];
const name_Commune_06016 = [];
const Pourcentage_06016 = [];
const Pourcentage_rejet_06016 = [];
const vote_gene_macron_06016 = [];
const vote_gene_lepen_06016 = [];
const vote_gene_rejet_06016 = [];

async function chartIt06016(){
    await GraphDATA06016();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06016-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06016
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06016
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06016-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06016,vote_lepen_06016,vote_rejet_06016]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06016-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06016,vote_lepenpop_06016,vote_rejetpop_06016]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06016"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06016
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06016
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06016
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06017*/
/*------------------------------------------------------------------ */
async function GraphDATA06017() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06017.push(vote_macron); 
    vote_lepen_06017.push(vote_lepen);
    vote_rejet_06017.push(vote_rejet);
    vote_macronpop_06017.push(vote_macronMediane);
    vote_lepenpop_06017.push(vote_lepenMediane);
    vote_rejetpop_06017.push(vote_rejetMediane);
    name_Commune_06017.push(nameCommune);
    Pourcentage_06017.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06017.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06017.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06017.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06017.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06017 = [];
const vote_lepen_06017 = [];
const vote_rejet_06017 = [];
const vote_macronpop_06017 = [];
const vote_lepenpop_06017 = [];
const vote_rejetpop_06017 = [];
const name_Commune_06017 = [];
const Pourcentage_06017 = [];
const Pourcentage_rejet_06017 = [];
const vote_gene_macron_06017 = [];
const vote_gene_lepen_06017 = [];
const vote_gene_rejet_06017 = [];

async function chartIt06017(){
    await GraphDATA06017();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06017-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06017
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06017
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06017-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06017,vote_lepen_06017,vote_rejet_06017]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06017-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06017,vote_lepenpop_06017,vote_rejetpop_06017]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06017"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06017
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06017
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06017
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06018*/
/*------------------------------------------------------------------ */
async function GraphDATA06018() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06018.push(vote_macron); 
    vote_lepen_06018.push(vote_lepen);
    vote_rejet_06018.push(vote_rejet);
    vote_macronpop_06018.push(vote_macronMediane);
    vote_lepenpop_06018.push(vote_lepenMediane);
    vote_rejetpop_06018.push(vote_rejetMediane);
    name_Commune_06018.push(nameCommune);
    Pourcentage_06018.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06018.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06018.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06018.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06018.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06018 = [];
const vote_lepen_06018 = [];
const vote_rejet_06018 = [];
const vote_macronpop_06018 = [];
const vote_lepenpop_06018 = [];
const vote_rejetpop_06018 = [];
const name_Commune_06018 = [];
const Pourcentage_06018 = [];
const Pourcentage_rejet_06018 = [];
const vote_gene_macron_06018 = [];
const vote_gene_lepen_06018 = [];
const vote_gene_rejet_06018 = [];

async function chartIt06018(){
    await GraphDATA06018();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06018-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06018
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06018
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06018-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06018,vote_lepen_06018,vote_rejet_06018]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06018-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06018,vote_lepenpop_06018,vote_rejetpop_06018]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06018"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06018
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06018
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06018
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06019*/
/*------------------------------------------------------------------ */
async function GraphDATA06019() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06019.push(vote_macron); 
    vote_lepen_06019.push(vote_lepen);
    vote_rejet_06019.push(vote_rejet);
    vote_macronpop_06019.push(vote_macronMediane);
    vote_lepenpop_06019.push(vote_lepenMediane);
    vote_rejetpop_06019.push(vote_rejetMediane);
    name_Commune_06019.push(nameCommune);
    Pourcentage_06019.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06019.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06019.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06019.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06019.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06019 = [];
const vote_lepen_06019 = [];
const vote_rejet_06019 = [];
const vote_macronpop_06019 = [];
const vote_lepenpop_06019 = [];
const vote_rejetpop_06019 = [];
const name_Commune_06019 = [];
const Pourcentage_06019 = [];
const Pourcentage_rejet_06019 = [];
const vote_gene_macron_06019 = [];
const vote_gene_lepen_06019 = [];
const vote_gene_rejet_06019 = [];

async function chartIt06019(){
    await GraphDATA06019();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06019-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06019
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06019
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06019-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06019,vote_lepen_06019,vote_rejet_06019]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06019-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06019,vote_lepenpop_06019,vote_rejetpop_06019]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06019"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06019
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06019
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06019
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06020*/
/*------------------------------------------------------------------ */
async function GraphDATA06020() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06020.push(vote_macron); 
    vote_lepen_06020.push(vote_lepen);
    vote_rejet_06020.push(vote_rejet);
    vote_macronpop_06020.push(vote_macronMediane);
    vote_lepenpop_06020.push(vote_lepenMediane);
    vote_rejetpop_06020.push(vote_rejetMediane);
    name_Commune_06020.push(nameCommune);
    Pourcentage_06020.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06020.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06020.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06020.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06020.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06020 = [];
const vote_lepen_06020 = [];
const vote_rejet_06020 = [];
const vote_macronpop_06020 = [];
const vote_lepenpop_06020 = [];
const vote_rejetpop_06020 = [];
const name_Commune_06020 = [];
const Pourcentage_06020 = [];
const Pourcentage_rejet_06020 = [];
const vote_gene_macron_06020 = [];
const vote_gene_lepen_06020 = [];
const vote_gene_rejet_06020 = [];

async function chartIt06020(){
    await GraphDATA06020();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06020-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06020
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06020
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06020-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06020,vote_lepen_06020,vote_rejet_06020]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06020-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06020,vote_lepenpop_06020,vote_rejetpop_06020]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06020"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06020
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06020
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06020
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06021*/
/*------------------------------------------------------------------ */
async function GraphDATA06021() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06021.push(vote_macron); 
    vote_lepen_06021.push(vote_lepen);
    vote_rejet_06021.push(vote_rejet);
    vote_macronpop_06021.push(vote_macronMediane);
    vote_lepenpop_06021.push(vote_lepenMediane);
    vote_rejetpop_06021.push(vote_rejetMediane);
    name_Commune_06021.push(nameCommune);
    Pourcentage_06021.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06021.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06021.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06021.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06021.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06021 = [];
const vote_lepen_06021 = [];
const vote_rejet_06021 = [];
const vote_macronpop_06021 = [];
const vote_lepenpop_06021 = [];
const vote_rejetpop_06021 = [];
const name_Commune_06021 = [];
const Pourcentage_06021 = [];
const Pourcentage_rejet_06021 = [];
const vote_gene_macron_06021 = [];
const vote_gene_lepen_06021 = [];
const vote_gene_rejet_06021 = [];

async function chartIt06021(){
    await GraphDATA06021();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06021-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06021
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06021
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06021-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06021,vote_lepen_06021,vote_rejet_06021]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06021-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06021,vote_lepenpop_06021,vote_rejetpop_06021]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06021"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06021
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06021
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06021
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06022*/
/*------------------------------------------------------------------ */
async function GraphDATA06022() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06022.push(vote_macron); 
    vote_lepen_06022.push(vote_lepen);
    vote_rejet_06022.push(vote_rejet);
    vote_macronpop_06022.push(vote_macronMediane);
    vote_lepenpop_06022.push(vote_lepenMediane);
    vote_rejetpop_06022.push(vote_rejetMediane);
    name_Commune_06022.push(nameCommune);
    Pourcentage_06022.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06022.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06022.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06022.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06022.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06022 = [];
const vote_lepen_06022 = [];
const vote_rejet_06022 = [];
const vote_macronpop_06022 = [];
const vote_lepenpop_06022 = [];
const vote_rejetpop_06022 = [];
const name_Commune_06022 = [];
const Pourcentage_06022 = [];
const Pourcentage_rejet_06022 = [];
const vote_gene_macron_06022 = [];
const vote_gene_lepen_06022 = [];
const vote_gene_rejet_06022 = [];

async function chartIt06022(){
    await GraphDATA06022();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06022-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06022
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06022
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06022-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06022,vote_lepen_06022,vote_rejet_06022]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06022-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06022,vote_lepenpop_06022,vote_rejetpop_06022]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06022"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06022
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06022
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06022
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06023*/
/*------------------------------------------------------------------ */
async function GraphDATA06023() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06023.push(vote_macron); 
    vote_lepen_06023.push(vote_lepen);
    vote_rejet_06023.push(vote_rejet);
    vote_macronpop_06023.push(vote_macronMediane);
    vote_lepenpop_06023.push(vote_lepenMediane);
    vote_rejetpop_06023.push(vote_rejetMediane);
    name_Commune_06023.push(nameCommune);
    Pourcentage_06023.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06023.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06023.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06023.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06023.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06023 = [];
const vote_lepen_06023 = [];
const vote_rejet_06023 = [];
const vote_macronpop_06023 = [];
const vote_lepenpop_06023 = [];
const vote_rejetpop_06023 = [];
const name_Commune_06023 = [];
const Pourcentage_06023 = [];
const Pourcentage_rejet_06023 = [];
const vote_gene_macron_06023 = [];
const vote_gene_lepen_06023 = [];
const vote_gene_rejet_06023 = [];

async function chartIt06023(){
    await GraphDATA06023();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06023-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06023
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06023
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06023-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06023,vote_lepen_06023,vote_rejet_06023]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06023-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06023,vote_lepenpop_06023,vote_rejetpop_06023]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06023"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06023
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06023
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06023
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06024*/
/*------------------------------------------------------------------ */
async function GraphDATA06024() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06024.push(vote_macron); 
    vote_lepen_06024.push(vote_lepen);
    vote_rejet_06024.push(vote_rejet);
    vote_macronpop_06024.push(vote_macronMediane);
    vote_lepenpop_06024.push(vote_lepenMediane);
    vote_rejetpop_06024.push(vote_rejetMediane);
    name_Commune_06024.push(nameCommune);
    Pourcentage_06024.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06024.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06024.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06024.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06024.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06024 = [];
const vote_lepen_06024 = [];
const vote_rejet_06024 = [];
const vote_macronpop_06024 = [];
const vote_lepenpop_06024 = [];
const vote_rejetpop_06024 = [];
const name_Commune_06024 = [];
const Pourcentage_06024 = [];
const Pourcentage_rejet_06024 = [];
const vote_gene_macron_06024 = [];
const vote_gene_lepen_06024 = [];
const vote_gene_rejet_06024 = [];

async function chartIt06024(){
    await GraphDATA06024();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06024-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06024
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06024
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06024-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06024,vote_lepen_06024,vote_rejet_06024]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06024-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06024,vote_lepenpop_06024,vote_rejetpop_06024]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06024"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06024
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06024
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06024
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06025*/
/*------------------------------------------------------------------ */
async function GraphDATA06025() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06025.push(vote_macron); 
    vote_lepen_06025.push(vote_lepen);
    vote_rejet_06025.push(vote_rejet);
    vote_macronpop_06025.push(vote_macronMediane);
    vote_lepenpop_06025.push(vote_lepenMediane);
    vote_rejetpop_06025.push(vote_rejetMediane);
    name_Commune_06025.push(nameCommune);
    Pourcentage_06025.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06025.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06025.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06025.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06025.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06025 = [];
const vote_lepen_06025 = [];
const vote_rejet_06025 = [];
const vote_macronpop_06025 = [];
const vote_lepenpop_06025 = [];
const vote_rejetpop_06025 = [];
const name_Commune_06025 = [];
const Pourcentage_06025 = [];
const Pourcentage_rejet_06025 = [];
const vote_gene_macron_06025 = [];
const vote_gene_lepen_06025 = [];
const vote_gene_rejet_06025 = [];

async function chartIt06025(){
    await GraphDATA06025();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06025-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06025
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06025
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06025-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06025,vote_lepen_06025,vote_rejet_06025]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06025-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06025,vote_lepenpop_06025,vote_rejetpop_06025]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06025"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06025
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06025
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06025
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06026*/
/*------------------------------------------------------------------ */
async function GraphDATA06026() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06026.push(vote_macron); 
    vote_lepen_06026.push(vote_lepen);
    vote_rejet_06026.push(vote_rejet);
    vote_macronpop_06026.push(vote_macronMediane);
    vote_lepenpop_06026.push(vote_lepenMediane);
    vote_rejetpop_06026.push(vote_rejetMediane);
    name_Commune_06026.push(nameCommune);
    Pourcentage_06026.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06026.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06026.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06026.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06026.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06026 = [];
const vote_lepen_06026 = [];
const vote_rejet_06026 = [];
const vote_macronpop_06026 = [];
const vote_lepenpop_06026 = [];
const vote_rejetpop_06026 = [];
const name_Commune_06026 = [];
const Pourcentage_06026 = [];
const Pourcentage_rejet_06026 = [];
const vote_gene_macron_06026 = [];
const vote_gene_lepen_06026 = [];
const vote_gene_rejet_06026 = [];

async function chartIt06026(){
    await GraphDATA06026();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06026-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06026
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06026
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06026-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06026,vote_lepen_06026,vote_rejet_06026]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06026-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06026,vote_lepenpop_06026,vote_rejetpop_06026]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06026"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06026
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06026
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06026
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06027*/
/*------------------------------------------------------------------ */
async function GraphDATA06027() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06027.push(vote_macron); 
    vote_lepen_06027.push(vote_lepen);
    vote_rejet_06027.push(vote_rejet);
    vote_macronpop_06027.push(vote_macronMediane);
    vote_lepenpop_06027.push(vote_lepenMediane);
    vote_rejetpop_06027.push(vote_rejetMediane);
    name_Commune_06027.push(nameCommune);
    Pourcentage_06027.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06027.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06027.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06027.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06027.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06027 = [];
const vote_lepen_06027 = [];
const vote_rejet_06027 = [];
const vote_macronpop_06027 = [];
const vote_lepenpop_06027 = [];
const vote_rejetpop_06027 = [];
const name_Commune_06027 = [];
const Pourcentage_06027 = [];
const Pourcentage_rejet_06027 = [];
const vote_gene_macron_06027 = [];
const vote_gene_lepen_06027 = [];
const vote_gene_rejet_06027 = [];

async function chartIt06027(){
    await GraphDATA06027();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06027-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06027
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06027
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06027-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06027,vote_lepen_06027,vote_rejet_06027]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06027-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06027,vote_lepenpop_06027,vote_rejetpop_06027]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06027"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06027
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06027
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06027
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06028*/
/*------------------------------------------------------------------ */
async function GraphDATA06028() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06028.push(vote_macron); 
    vote_lepen_06028.push(vote_lepen);
    vote_rejet_06028.push(vote_rejet);
    vote_macronpop_06028.push(vote_macronMediane);
    vote_lepenpop_06028.push(vote_lepenMediane);
    vote_rejetpop_06028.push(vote_rejetMediane);
    name_Commune_06028.push(nameCommune);
    Pourcentage_06028.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06028.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06028.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06028.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06028.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06028 = [];
const vote_lepen_06028 = [];
const vote_rejet_06028 = [];
const vote_macronpop_06028 = [];
const vote_lepenpop_06028 = [];
const vote_rejetpop_06028 = [];
const name_Commune_06028 = [];
const Pourcentage_06028 = [];
const Pourcentage_rejet_06028 = [];
const vote_gene_macron_06028 = [];
const vote_gene_lepen_06028 = [];
const vote_gene_rejet_06028 = [];

async function chartIt06028(){
    await GraphDATA06028();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06028-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06028
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06028
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06028-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06028,vote_lepen_06028,vote_rejet_06028]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06028-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06028,vote_lepenpop_06028,vote_rejetpop_06028]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06028"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06028
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06028
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06028
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06029*/
/*------------------------------------------------------------------ */
async function GraphDATA06029() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06029.push(vote_macron); 
    vote_lepen_06029.push(vote_lepen);
    vote_rejet_06029.push(vote_rejet);
    vote_macronpop_06029.push(vote_macronMediane);
    vote_lepenpop_06029.push(vote_lepenMediane);
    vote_rejetpop_06029.push(vote_rejetMediane);
    name_Commune_06029.push(nameCommune);
    Pourcentage_06029.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06029.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06029.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06029.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06029.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06029 = [];
const vote_lepen_06029 = [];
const vote_rejet_06029 = [];
const vote_macronpop_06029 = [];
const vote_lepenpop_06029 = [];
const vote_rejetpop_06029 = [];
const name_Commune_06029 = [];
const Pourcentage_06029 = [];
const Pourcentage_rejet_06029 = [];
const vote_gene_macron_06029 = [];
const vote_gene_lepen_06029 = [];
const vote_gene_rejet_06029 = [];

async function chartIt06029(){
    await GraphDATA06029();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06029-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06029
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06029
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06029-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06029,vote_lepen_06029,vote_rejet_06029]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06029-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06029,vote_lepenpop_06029,vote_rejetpop_06029]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06029"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06029
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06029
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06029
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06030*/
/*------------------------------------------------------------------ */
async function GraphDATA06030() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06030.push(vote_macron); 
    vote_lepen_06030.push(vote_lepen);
    vote_rejet_06030.push(vote_rejet);
    vote_macronpop_06030.push(vote_macronMediane);
    vote_lepenpop_06030.push(vote_lepenMediane);
    vote_rejetpop_06030.push(vote_rejetMediane);
    name_Commune_06030.push(nameCommune);
    Pourcentage_06030.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06030.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06030.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06030.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06030.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06030 = [];
const vote_lepen_06030 = [];
const vote_rejet_06030 = [];
const vote_macronpop_06030 = [];
const vote_lepenpop_06030 = [];
const vote_rejetpop_06030 = [];
const name_Commune_06030 = [];
const Pourcentage_06030 = [];
const Pourcentage_rejet_06030 = [];
const vote_gene_macron_06030 = [];
const vote_gene_lepen_06030 = [];
const vote_gene_rejet_06030 = [];

async function chartIt06030(){
    await GraphDATA06030();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06030-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06030
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06030
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06030-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06030,vote_lepen_06030,vote_rejet_06030]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06030-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06030,vote_lepenpop_06030,vote_rejetpop_06030]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06030"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06030
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06030
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06030
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06031*/
/*------------------------------------------------------------------ */
async function GraphDATA06031() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06031.push(vote_macron); 
    vote_lepen_06031.push(vote_lepen);
    vote_rejet_06031.push(vote_rejet);
    vote_macronpop_06031.push(vote_macronMediane);
    vote_lepenpop_06031.push(vote_lepenMediane);
    vote_rejetpop_06031.push(vote_rejetMediane);
    name_Commune_06031.push(nameCommune);
    Pourcentage_06031.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06031.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06031.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06031.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06031.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06031 = [];
const vote_lepen_06031 = [];
const vote_rejet_06031 = [];
const vote_macronpop_06031 = [];
const vote_lepenpop_06031 = [];
const vote_rejetpop_06031 = [];
const name_Commune_06031 = [];
const Pourcentage_06031 = [];
const Pourcentage_rejet_06031 = [];
const vote_gene_macron_06031 = [];
const vote_gene_lepen_06031 = [];
const vote_gene_rejet_06031 = [];

async function chartIt06031(){
    await GraphDATA06031();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06031-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06031
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06031
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06031-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06031,vote_lepen_06031,vote_rejet_06031]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06031-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06031,vote_lepenpop_06031,vote_rejetpop_06031]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06031"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06031
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06031
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06031
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06032*/
/*------------------------------------------------------------------ */
async function GraphDATA06032() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06032.push(vote_macron); 
    vote_lepen_06032.push(vote_lepen);
    vote_rejet_06032.push(vote_rejet);
    vote_macronpop_06032.push(vote_macronMediane);
    vote_lepenpop_06032.push(vote_lepenMediane);
    vote_rejetpop_06032.push(vote_rejetMediane);
    name_Commune_06032.push(nameCommune);
    Pourcentage_06032.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06032.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06032.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06032.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06032.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06032 = [];
const vote_lepen_06032 = [];
const vote_rejet_06032 = [];
const vote_macronpop_06032 = [];
const vote_lepenpop_06032 = [];
const vote_rejetpop_06032 = [];
const name_Commune_06032 = [];
const Pourcentage_06032 = [];
const Pourcentage_rejet_06032 = [];
const vote_gene_macron_06032 = [];
const vote_gene_lepen_06032 = [];
const vote_gene_rejet_06032 = [];

async function chartIt06032(){
    await GraphDATA06032();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06032-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06032
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06032
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06032-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06032,vote_lepen_06032,vote_rejet_06032]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06032-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06032,vote_lepenpop_06032,vote_rejetpop_06032]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06032"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06032
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06032
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06032
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06033*/
/*------------------------------------------------------------------ */
async function GraphDATA06033() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06033.push(vote_macron); 
    vote_lepen_06033.push(vote_lepen);
    vote_rejet_06033.push(vote_rejet);
    vote_macronpop_06033.push(vote_macronMediane);
    vote_lepenpop_06033.push(vote_lepenMediane);
    vote_rejetpop_06033.push(vote_rejetMediane);
    name_Commune_06033.push(nameCommune);
    Pourcentage_06033.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06033.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06033.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06033.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06033.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06033 = [];
const vote_lepen_06033 = [];
const vote_rejet_06033 = [];
const vote_macronpop_06033 = [];
const vote_lepenpop_06033 = [];
const vote_rejetpop_06033 = [];
const name_Commune_06033 = [];
const Pourcentage_06033 = [];
const Pourcentage_rejet_06033 = [];
const vote_gene_macron_06033 = [];
const vote_gene_lepen_06033 = [];
const vote_gene_rejet_06033 = [];

async function chartIt06033(){
    await GraphDATA06033();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06033-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06033
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06033
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06033-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06033,vote_lepen_06033,vote_rejet_06033]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06033-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06033,vote_lepenpop_06033,vote_rejetpop_06033]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06033"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06033
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06033
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06033
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06034*/
/*------------------------------------------------------------------ */
async function GraphDATA06034() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06034.push(vote_macron); 
    vote_lepen_06034.push(vote_lepen);
    vote_rejet_06034.push(vote_rejet);
    vote_macronpop_06034.push(vote_macronMediane);
    vote_lepenpop_06034.push(vote_lepenMediane);
    vote_rejetpop_06034.push(vote_rejetMediane);
    name_Commune_06034.push(nameCommune);
    Pourcentage_06034.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06034.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06034.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06034.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06034.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06034 = [];
const vote_lepen_06034 = [];
const vote_rejet_06034 = [];
const vote_macronpop_06034 = [];
const vote_lepenpop_06034 = [];
const vote_rejetpop_06034 = [];
const name_Commune_06034 = [];
const Pourcentage_06034 = [];
const Pourcentage_rejet_06034 = [];
const vote_gene_macron_06034 = [];
const vote_gene_lepen_06034 = [];
const vote_gene_rejet_06034 = [];

async function chartIt06034(){
    await GraphDATA06034();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06034-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06034
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06034
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06034-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06034,vote_lepen_06034,vote_rejet_06034]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06034-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06034,vote_lepenpop_06034,vote_rejetpop_06034]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06034"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06034
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06034
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06034
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06035*/
/*------------------------------------------------------------------ */
async function GraphDATA06035() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06035.push(vote_macron); 
    vote_lepen_06035.push(vote_lepen);
    vote_rejet_06035.push(vote_rejet);
    vote_macronpop_06035.push(vote_macronMediane);
    vote_lepenpop_06035.push(vote_lepenMediane);
    vote_rejetpop_06035.push(vote_rejetMediane);
    name_Commune_06035.push(nameCommune);
    Pourcentage_06035.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06035.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06035.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06035.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06035.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06035 = [];
const vote_lepen_06035 = [];
const vote_rejet_06035 = [];
const vote_macronpop_06035 = [];
const vote_lepenpop_06035 = [];
const vote_rejetpop_06035 = [];
const name_Commune_06035 = [];
const Pourcentage_06035 = [];
const Pourcentage_rejet_06035 = [];
const vote_gene_macron_06035 = [];
const vote_gene_lepen_06035 = [];
const vote_gene_rejet_06035 = [];

async function chartIt06035(){
    await GraphDATA06035();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06035-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06035
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06035
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06035-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06035,vote_lepen_06035,vote_rejet_06035]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06035-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06035,vote_lepenpop_06035,vote_rejetpop_06035]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06035"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06035
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06035
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06035
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06036*/
/*------------------------------------------------------------------ */
async function GraphDATA06036() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06036.push(vote_macron); 
    vote_lepen_06036.push(vote_lepen);
    vote_rejet_06036.push(vote_rejet);
    vote_macronpop_06036.push(vote_macronMediane);
    vote_lepenpop_06036.push(vote_lepenMediane);
    vote_rejetpop_06036.push(vote_rejetMediane);
    name_Commune_06036.push(nameCommune);
    Pourcentage_06036.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06036.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06036.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06036.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06036.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06036 = [];
const vote_lepen_06036 = [];
const vote_rejet_06036 = [];
const vote_macronpop_06036 = [];
const vote_lepenpop_06036 = [];
const vote_rejetpop_06036 = [];
const name_Commune_06036 = [];
const Pourcentage_06036 = [];
const Pourcentage_rejet_06036 = [];
const vote_gene_macron_06036 = [];
const vote_gene_lepen_06036 = [];
const vote_gene_rejet_06036 = [];

async function chartIt06036(){
    await GraphDATA06036();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06036-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06036
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06036
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06036-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06036,vote_lepen_06036,vote_rejet_06036]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06036-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06036,vote_lepenpop_06036,vote_rejetpop_06036]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06036"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06036
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06036
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06036
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06037*/
/*------------------------------------------------------------------ */
async function GraphDATA06037() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06037.push(vote_macron); 
    vote_lepen_06037.push(vote_lepen);
    vote_rejet_06037.push(vote_rejet);
    vote_macronpop_06037.push(vote_macronMediane);
    vote_lepenpop_06037.push(vote_lepenMediane);
    vote_rejetpop_06037.push(vote_rejetMediane);
    name_Commune_06037.push(nameCommune);
    Pourcentage_06037.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06037.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06037.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06037.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06037.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06037 = [];
const vote_lepen_06037 = [];
const vote_rejet_06037 = [];
const vote_macronpop_06037 = [];
const vote_lepenpop_06037 = [];
const vote_rejetpop_06037 = [];
const name_Commune_06037 = [];
const Pourcentage_06037 = [];
const Pourcentage_rejet_06037 = [];
const vote_gene_macron_06037 = [];
const vote_gene_lepen_06037 = [];
const vote_gene_rejet_06037 = [];

async function chartIt06037(){
    await GraphDATA06037();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06037-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06037
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06037
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06037-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06037,vote_lepen_06037,vote_rejet_06037]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06037-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06037,vote_lepenpop_06037,vote_rejetpop_06037]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06037"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06037
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06037
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06037
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06038*/
/*------------------------------------------------------------------ */
async function GraphDATA06038() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06038.push(vote_macron); 
    vote_lepen_06038.push(vote_lepen);
    vote_rejet_06038.push(vote_rejet);
    vote_macronpop_06038.push(vote_macronMediane);
    vote_lepenpop_06038.push(vote_lepenMediane);
    vote_rejetpop_06038.push(vote_rejetMediane);
    name_Commune_06038.push(nameCommune);
    Pourcentage_06038.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06038.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06038.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06038.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06038.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06038 = [];
const vote_lepen_06038 = [];
const vote_rejet_06038 = [];
const vote_macronpop_06038 = [];
const vote_lepenpop_06038 = [];
const vote_rejetpop_06038 = [];
const name_Commune_06038 = [];
const Pourcentage_06038 = [];
const Pourcentage_rejet_06038 = [];
const vote_gene_macron_06038 = [];
const vote_gene_lepen_06038 = [];
const vote_gene_rejet_06038 = [];

async function chartIt06038(){
    await GraphDATA06038();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06038-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06038
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06038
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06038-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06038,vote_lepen_06038,vote_rejet_06038]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06038-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06038,vote_lepenpop_06038,vote_rejetpop_06038]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06038"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06038
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06038
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06038
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06039*/
/*------------------------------------------------------------------ */
async function GraphDATA06039() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06039.push(vote_macron); 
    vote_lepen_06039.push(vote_lepen);
    vote_rejet_06039.push(vote_rejet);
    vote_macronpop_06039.push(vote_macronMediane);
    vote_lepenpop_06039.push(vote_lepenMediane);
    vote_rejetpop_06039.push(vote_rejetMediane);
    name_Commune_06039.push(nameCommune);
    Pourcentage_06039.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06039.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06039.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06039.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06039.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06039 = [];
const vote_lepen_06039 = [];
const vote_rejet_06039 = [];
const vote_macronpop_06039 = [];
const vote_lepenpop_06039 = [];
const vote_rejetpop_06039 = [];
const name_Commune_06039 = [];
const Pourcentage_06039 = [];
const Pourcentage_rejet_06039 = [];
const vote_gene_macron_06039 = [];
const vote_gene_lepen_06039 = [];
const vote_gene_rejet_06039 = [];

async function chartIt06039(){
    await GraphDATA06039();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06039-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06039
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06039
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06039-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06039,vote_lepen_06039,vote_rejet_06039]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06039-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06039,vote_lepenpop_06039,vote_rejetpop_06039]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06039"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06039
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06039
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06039
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06040*/
/*------------------------------------------------------------------ */
async function GraphDATA06040() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06040.push(vote_macron); 
    vote_lepen_06040.push(vote_lepen);
    vote_rejet_06040.push(vote_rejet);
    vote_macronpop_06040.push(vote_macronMediane);
    vote_lepenpop_06040.push(vote_lepenMediane);
    vote_rejetpop_06040.push(vote_rejetMediane);
    name_Commune_06040.push(nameCommune);
    Pourcentage_06040.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06040.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06040.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06040.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06040.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06040 = [];
const vote_lepen_06040 = [];
const vote_rejet_06040 = [];
const vote_macronpop_06040 = [];
const vote_lepenpop_06040 = [];
const vote_rejetpop_06040 = [];
const name_Commune_06040 = [];
const Pourcentage_06040 = [];
const Pourcentage_rejet_06040 = [];
const vote_gene_macron_06040 = [];
const vote_gene_lepen_06040 = [];
const vote_gene_rejet_06040 = [];

async function chartIt06040(){
    await GraphDATA06040();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06040-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06040
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06040
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06040-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06040,vote_lepen_06040,vote_rejet_06040]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06040-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06040,vote_lepenpop_06040,vote_rejetpop_06040]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06040"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06040
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06040
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06040
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06041*/
/*------------------------------------------------------------------ */
async function GraphDATA06041() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06041.push(vote_macron); 
    vote_lepen_06041.push(vote_lepen);
    vote_rejet_06041.push(vote_rejet);
    vote_macronpop_06041.push(vote_macronMediane);
    vote_lepenpop_06041.push(vote_lepenMediane);
    vote_rejetpop_06041.push(vote_rejetMediane);
    name_Commune_06041.push(nameCommune);
    Pourcentage_06041.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06041.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06041.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06041.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06041.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06041 = [];
const vote_lepen_06041 = [];
const vote_rejet_06041 = [];
const vote_macronpop_06041 = [];
const vote_lepenpop_06041 = [];
const vote_rejetpop_06041 = [];
const name_Commune_06041 = [];
const Pourcentage_06041 = [];
const Pourcentage_rejet_06041 = [];
const vote_gene_macron_06041 = [];
const vote_gene_lepen_06041 = [];
const vote_gene_rejet_06041 = [];

async function chartIt06041(){
    await GraphDATA06041();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06041-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06041
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06041
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06041-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06041,vote_lepen_06041,vote_rejet_06041]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06041-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06041,vote_lepenpop_06041,vote_rejetpop_06041]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06041"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06041
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06041
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06041
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06042*/
/*------------------------------------------------------------------ */
async function GraphDATA06042() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06042.push(vote_macron); 
    vote_lepen_06042.push(vote_lepen);
    vote_rejet_06042.push(vote_rejet);
    vote_macronpop_06042.push(vote_macronMediane);
    vote_lepenpop_06042.push(vote_lepenMediane);
    vote_rejetpop_06042.push(vote_rejetMediane);
    name_Commune_06042.push(nameCommune);
    Pourcentage_06042.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06042.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06042.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06042.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06042.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06042 = [];
const vote_lepen_06042 = [];
const vote_rejet_06042 = [];
const vote_macronpop_06042 = [];
const vote_lepenpop_06042 = [];
const vote_rejetpop_06042 = [];
const name_Commune_06042 = [];
const Pourcentage_06042 = [];
const Pourcentage_rejet_06042 = [];
const vote_gene_macron_06042 = [];
const vote_gene_lepen_06042 = [];
const vote_gene_rejet_06042 = [];

async function chartIt06042(){
    await GraphDATA06042();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06042-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06042
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06042
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06042-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06042,vote_lepen_06042,vote_rejet_06042]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06042-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06042,vote_lepenpop_06042,vote_rejetpop_06042]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06042"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06042
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06042
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06042
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06043*/
/*------------------------------------------------------------------ */
async function GraphDATA06043() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06043.push(vote_macron); 
    vote_lepen_06043.push(vote_lepen);
    vote_rejet_06043.push(vote_rejet);
    vote_macronpop_06043.push(vote_macronMediane);
    vote_lepenpop_06043.push(vote_lepenMediane);
    vote_rejetpop_06043.push(vote_rejetMediane);
    name_Commune_06043.push(nameCommune);
    Pourcentage_06043.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06043.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06043.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06043.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06043.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06043 = [];
const vote_lepen_06043 = [];
const vote_rejet_06043 = [];
const vote_macronpop_06043 = [];
const vote_lepenpop_06043 = [];
const vote_rejetpop_06043 = [];
const name_Commune_06043 = [];
const Pourcentage_06043 = [];
const Pourcentage_rejet_06043 = [];
const vote_gene_macron_06043 = [];
const vote_gene_lepen_06043 = [];
const vote_gene_rejet_06043 = [];

async function chartIt06043(){
    await GraphDATA06043();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06043-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06043
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06043
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06043-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06043,vote_lepen_06043,vote_rejet_06043]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06043-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06043,vote_lepenpop_06043,vote_rejetpop_06043]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06043"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06043
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06043
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06043
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06044*/
/*------------------------------------------------------------------ */
async function GraphDATA06044() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06044.push(vote_macron); 
    vote_lepen_06044.push(vote_lepen);
    vote_rejet_06044.push(vote_rejet);
    vote_macronpop_06044.push(vote_macronMediane);
    vote_lepenpop_06044.push(vote_lepenMediane);
    vote_rejetpop_06044.push(vote_rejetMediane);
    name_Commune_06044.push(nameCommune);
    Pourcentage_06044.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06044.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06044.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06044.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06044.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06044 = [];
const vote_lepen_06044 = [];
const vote_rejet_06044 = [];
const vote_macronpop_06044 = [];
const vote_lepenpop_06044 = [];
const vote_rejetpop_06044 = [];
const name_Commune_06044 = [];
const Pourcentage_06044 = [];
const Pourcentage_rejet_06044 = [];
const vote_gene_macron_06044 = [];
const vote_gene_lepen_06044 = [];
const vote_gene_rejet_06044 = [];

async function chartIt06044(){
    await GraphDATA06044();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06044-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06044
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06044
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06044-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06044,vote_lepen_06044,vote_rejet_06044]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06044-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06044,vote_lepenpop_06044,vote_rejetpop_06044]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06044"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06044
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06044
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06044
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06045*/
/*------------------------------------------------------------------ */
async function GraphDATA06045() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06045.push(vote_macron); 
    vote_lepen_06045.push(vote_lepen);
    vote_rejet_06045.push(vote_rejet);
    vote_macronpop_06045.push(vote_macronMediane);
    vote_lepenpop_06045.push(vote_lepenMediane);
    vote_rejetpop_06045.push(vote_rejetMediane);
    name_Commune_06045.push(nameCommune);
    Pourcentage_06045.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06045.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06045.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06045.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06045.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06045 = [];
const vote_lepen_06045 = [];
const vote_rejet_06045 = [];
const vote_macronpop_06045 = [];
const vote_lepenpop_06045 = [];
const vote_rejetpop_06045 = [];
const name_Commune_06045 = [];
const Pourcentage_06045 = [];
const Pourcentage_rejet_06045 = [];
const vote_gene_macron_06045 = [];
const vote_gene_lepen_06045 = [];
const vote_gene_rejet_06045 = [];

async function chartIt06045(){
    await GraphDATA06045();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06045-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06045
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06045
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06045-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06045,vote_lepen_06045,vote_rejet_06045]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06045-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06045,vote_lepenpop_06045,vote_rejetpop_06045]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06045"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06045
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06045
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06045
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06046*/
/*------------------------------------------------------------------ */
async function GraphDATA06046() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06046.push(vote_macron); 
    vote_lepen_06046.push(vote_lepen);
    vote_rejet_06046.push(vote_rejet);
    vote_macronpop_06046.push(vote_macronMediane);
    vote_lepenpop_06046.push(vote_lepenMediane);
    vote_rejetpop_06046.push(vote_rejetMediane);
    name_Commune_06046.push(nameCommune);
    Pourcentage_06046.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06046.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06046.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06046.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06046.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06046 = [];
const vote_lepen_06046 = [];
const vote_rejet_06046 = [];
const vote_macronpop_06046 = [];
const vote_lepenpop_06046 = [];
const vote_rejetpop_06046 = [];
const name_Commune_06046 = [];
const Pourcentage_06046 = [];
const Pourcentage_rejet_06046 = [];
const vote_gene_macron_06046 = [];
const vote_gene_lepen_06046 = [];
const vote_gene_rejet_06046 = [];

async function chartIt06046(){
    await GraphDATA06046();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06046-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06046
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06046
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06046-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06046,vote_lepen_06046,vote_rejet_06046]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06046-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06046,vote_lepenpop_06046,vote_rejetpop_06046]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06046"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06046
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06046
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06046
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06047*/
/*------------------------------------------------------------------ */
async function GraphDATA06047() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06047.push(vote_macron); 
    vote_lepen_06047.push(vote_lepen);
    vote_rejet_06047.push(vote_rejet);
    vote_macronpop_06047.push(vote_macronMediane);
    vote_lepenpop_06047.push(vote_lepenMediane);
    vote_rejetpop_06047.push(vote_rejetMediane);
    name_Commune_06047.push(nameCommune);
    Pourcentage_06047.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06047.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06047.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06047.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06047.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06047 = [];
const vote_lepen_06047 = [];
const vote_rejet_06047 = [];
const vote_macronpop_06047 = [];
const vote_lepenpop_06047 = [];
const vote_rejetpop_06047 = [];
const name_Commune_06047 = [];
const Pourcentage_06047 = [];
const Pourcentage_rejet_06047 = [];
const vote_gene_macron_06047 = [];
const vote_gene_lepen_06047 = [];
const vote_gene_rejet_06047 = [];

async function chartIt06047(){
    await GraphDATA06047();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06047-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06047
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06047
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06047-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06047,vote_lepen_06047,vote_rejet_06047]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06047-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06047,vote_lepenpop_06047,vote_rejetpop_06047]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06047"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06047
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06047
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06047
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06048*/
/*------------------------------------------------------------------ */
async function GraphDATA06048() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06048.push(vote_macron); 
    vote_lepen_06048.push(vote_lepen);
    vote_rejet_06048.push(vote_rejet);
    vote_macronpop_06048.push(vote_macronMediane);
    vote_lepenpop_06048.push(vote_lepenMediane);
    vote_rejetpop_06048.push(vote_rejetMediane);
    name_Commune_06048.push(nameCommune);
    Pourcentage_06048.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06048.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06048.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06048.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06048.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06048 = [];
const vote_lepen_06048 = [];
const vote_rejet_06048 = [];
const vote_macronpop_06048 = [];
const vote_lepenpop_06048 = [];
const vote_rejetpop_06048 = [];
const name_Commune_06048 = [];
const Pourcentage_06048 = [];
const Pourcentage_rejet_06048 = [];
const vote_gene_macron_06048 = [];
const vote_gene_lepen_06048 = [];
const vote_gene_rejet_06048 = [];

async function chartIt06048(){
    await GraphDATA06048();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06048-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06048
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06048
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06048-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06048,vote_lepen_06048,vote_rejet_06048]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06048-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06048,vote_lepenpop_06048,vote_rejetpop_06048]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06048"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06048
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06048
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06048
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06049*/
/*------------------------------------------------------------------ */
async function GraphDATA06049() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06049.push(vote_macron); 
    vote_lepen_06049.push(vote_lepen);
    vote_rejet_06049.push(vote_rejet);
    vote_macronpop_06049.push(vote_macronMediane);
    vote_lepenpop_06049.push(vote_lepenMediane);
    vote_rejetpop_06049.push(vote_rejetMediane);
    name_Commune_06049.push(nameCommune);
    Pourcentage_06049.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06049.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06049.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06049.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06049.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06049 = [];
const vote_lepen_06049 = [];
const vote_rejet_06049 = [];
const vote_macronpop_06049 = [];
const vote_lepenpop_06049 = [];
const vote_rejetpop_06049 = [];
const name_Commune_06049 = [];
const Pourcentage_06049 = [];
const Pourcentage_rejet_06049 = [];
const vote_gene_macron_06049 = [];
const vote_gene_lepen_06049 = [];
const vote_gene_rejet_06049 = [];

async function chartIt06049(){
    await GraphDATA06049();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06049-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06049
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06049
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06049-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06049,vote_lepen_06049,vote_rejet_06049]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06049-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06049,vote_lepenpop_06049,vote_rejetpop_06049]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06049"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06049
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06049
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06049
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06050*/
/*------------------------------------------------------------------ */
async function GraphDATA06050() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06050.push(vote_macron); 
    vote_lepen_06050.push(vote_lepen);
    vote_rejet_06050.push(vote_rejet);
    vote_macronpop_06050.push(vote_macronMediane);
    vote_lepenpop_06050.push(vote_lepenMediane);
    vote_rejetpop_06050.push(vote_rejetMediane);
    name_Commune_06050.push(nameCommune);
    Pourcentage_06050.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06050.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06050.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06050.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06050.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06050 = [];
const vote_lepen_06050 = [];
const vote_rejet_06050 = [];
const vote_macronpop_06050 = [];
const vote_lepenpop_06050 = [];
const vote_rejetpop_06050 = [];
const name_Commune_06050 = [];
const Pourcentage_06050 = [];
const Pourcentage_rejet_06050 = [];
const vote_gene_macron_06050 = [];
const vote_gene_lepen_06050 = [];
const vote_gene_rejet_06050 = [];

async function chartIt06050(){
    await GraphDATA06050();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06050-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06050
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06050
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06050-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06050,vote_lepen_06050,vote_rejet_06050]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06050-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06050,vote_lepenpop_06050,vote_rejetpop_06050]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06050"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06050
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06050
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06050
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06051*/
/*------------------------------------------------------------------ */
async function GraphDATA06051() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06051.push(vote_macron); 
    vote_lepen_06051.push(vote_lepen);
    vote_rejet_06051.push(vote_rejet);
    vote_macronpop_06051.push(vote_macronMediane);
    vote_lepenpop_06051.push(vote_lepenMediane);
    vote_rejetpop_06051.push(vote_rejetMediane);
    name_Commune_06051.push(nameCommune);
    Pourcentage_06051.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06051.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06051.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06051.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06051.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06051 = [];
const vote_lepen_06051 = [];
const vote_rejet_06051 = [];
const vote_macronpop_06051 = [];
const vote_lepenpop_06051 = [];
const vote_rejetpop_06051 = [];
const name_Commune_06051 = [];
const Pourcentage_06051 = [];
const Pourcentage_rejet_06051 = [];
const vote_gene_macron_06051 = [];
const vote_gene_lepen_06051 = [];
const vote_gene_rejet_06051 = [];

async function chartIt06051(){
    await GraphDATA06051();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06051-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06051
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06051
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06051-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06051,vote_lepen_06051,vote_rejet_06051]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06051-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06051,vote_lepenpop_06051,vote_rejetpop_06051]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06051"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06051
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06051
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06051
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06052*/
/*------------------------------------------------------------------ */
async function GraphDATA06052() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06052.push(vote_macron); 
    vote_lepen_06052.push(vote_lepen);
    vote_rejet_06052.push(vote_rejet);
    vote_macronpop_06052.push(vote_macronMediane);
    vote_lepenpop_06052.push(vote_lepenMediane);
    vote_rejetpop_06052.push(vote_rejetMediane);
    name_Commune_06052.push(nameCommune);
    Pourcentage_06052.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06052.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06052.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06052.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06052.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06052 = [];
const vote_lepen_06052 = [];
const vote_rejet_06052 = [];
const vote_macronpop_06052 = [];
const vote_lepenpop_06052 = [];
const vote_rejetpop_06052 = [];
const name_Commune_06052 = [];
const Pourcentage_06052 = [];
const Pourcentage_rejet_06052 = [];
const vote_gene_macron_06052 = [];
const vote_gene_lepen_06052 = [];
const vote_gene_rejet_06052 = [];

async function chartIt06052(){
    await GraphDATA06052();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06052-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06052
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06052
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06052-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06052,vote_lepen_06052,vote_rejet_06052]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06052-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06052,vote_lepenpop_06052,vote_rejetpop_06052]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06052"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06052
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06052
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06052
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06053*/
/*------------------------------------------------------------------ */
async function GraphDATA06053() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06053.push(vote_macron); 
    vote_lepen_06053.push(vote_lepen);
    vote_rejet_06053.push(vote_rejet);
    vote_macronpop_06053.push(vote_macronMediane);
    vote_lepenpop_06053.push(vote_lepenMediane);
    vote_rejetpop_06053.push(vote_rejetMediane);
    name_Commune_06053.push(nameCommune);
    Pourcentage_06053.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06053.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06053.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06053.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06053.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06053 = [];
const vote_lepen_06053 = [];
const vote_rejet_06053 = [];
const vote_macronpop_06053 = [];
const vote_lepenpop_06053 = [];
const vote_rejetpop_06053 = [];
const name_Commune_06053 = [];
const Pourcentage_06053 = [];
const Pourcentage_rejet_06053 = [];
const vote_gene_macron_06053 = [];
const vote_gene_lepen_06053 = [];
const vote_gene_rejet_06053 = [];

async function chartIt06053(){
    await GraphDATA06053();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06053-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06053
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06053
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06053-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06053,vote_lepen_06053,vote_rejet_06053]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06053-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06053,vote_lepenpop_06053,vote_rejetpop_06053]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06053"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06053
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06053
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06053
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06054*/
/*------------------------------------------------------------------ */
async function GraphDATA06054() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06054.push(vote_macron); 
    vote_lepen_06054.push(vote_lepen);
    vote_rejet_06054.push(vote_rejet);
    vote_macronpop_06054.push(vote_macronMediane);
    vote_lepenpop_06054.push(vote_lepenMediane);
    vote_rejetpop_06054.push(vote_rejetMediane);
    name_Commune_06054.push(nameCommune);
    Pourcentage_06054.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06054.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06054.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06054.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06054.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06054 = [];
const vote_lepen_06054 = [];
const vote_rejet_06054 = [];
const vote_macronpop_06054 = [];
const vote_lepenpop_06054 = [];
const vote_rejetpop_06054 = [];
const name_Commune_06054 = [];
const Pourcentage_06054 = [];
const Pourcentage_rejet_06054 = [];
const vote_gene_macron_06054 = [];
const vote_gene_lepen_06054 = [];
const vote_gene_rejet_06054 = [];

async function chartIt06054(){
    await GraphDATA06054();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06054-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06054
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06054
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06054-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06054,vote_lepen_06054,vote_rejet_06054]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06054-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06054,vote_lepenpop_06054,vote_rejetpop_06054]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06054"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06054
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06054
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06054
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06055*/
/*------------------------------------------------------------------ */
async function GraphDATA06055() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06055.push(vote_macron); 
    vote_lepen_06055.push(vote_lepen);
    vote_rejet_06055.push(vote_rejet);
    vote_macronpop_06055.push(vote_macronMediane);
    vote_lepenpop_06055.push(vote_lepenMediane);
    vote_rejetpop_06055.push(vote_rejetMediane);
    name_Commune_06055.push(nameCommune);
    Pourcentage_06055.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06055.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06055.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06055.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06055.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06055 = [];
const vote_lepen_06055 = [];
const vote_rejet_06055 = [];
const vote_macronpop_06055 = [];
const vote_lepenpop_06055 = [];
const vote_rejetpop_06055 = [];
const name_Commune_06055 = [];
const Pourcentage_06055 = [];
const Pourcentage_rejet_06055 = [];
const vote_gene_macron_06055 = [];
const vote_gene_lepen_06055 = [];
const vote_gene_rejet_06055 = [];

async function chartIt06055(){
    await GraphDATA06055();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06055-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06055
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06055
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06055-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06055,vote_lepen_06055,vote_rejet_06055]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06055-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06055,vote_lepenpop_06055,vote_rejetpop_06055]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06055"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06055
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06055
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06055
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06056*/
/*------------------------------------------------------------------ */
async function GraphDATA06056() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06056.push(vote_macron); 
    vote_lepen_06056.push(vote_lepen);
    vote_rejet_06056.push(vote_rejet);
    vote_macronpop_06056.push(vote_macronMediane);
    vote_lepenpop_06056.push(vote_lepenMediane);
    vote_rejetpop_06056.push(vote_rejetMediane);
    name_Commune_06056.push(nameCommune);
    Pourcentage_06056.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06056.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06056.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06056.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06056.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06056 = [];
const vote_lepen_06056 = [];
const vote_rejet_06056 = [];
const vote_macronpop_06056 = [];
const vote_lepenpop_06056 = [];
const vote_rejetpop_06056 = [];
const name_Commune_06056 = [];
const Pourcentage_06056 = [];
const Pourcentage_rejet_06056 = [];
const vote_gene_macron_06056 = [];
const vote_gene_lepen_06056 = [];
const vote_gene_rejet_06056 = [];

async function chartIt06056(){
    await GraphDATA06056();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06056-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06056
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06056
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06056-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06056,vote_lepen_06056,vote_rejet_06056]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06056-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06056,vote_lepenpop_06056,vote_rejetpop_06056]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06056"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06056
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06056
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06056
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06057*/
/*------------------------------------------------------------------ */
async function GraphDATA06057() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06057.push(vote_macron); 
    vote_lepen_06057.push(vote_lepen);
    vote_rejet_06057.push(vote_rejet);
    vote_macronpop_06057.push(vote_macronMediane);
    vote_lepenpop_06057.push(vote_lepenMediane);
    vote_rejetpop_06057.push(vote_rejetMediane);
    name_Commune_06057.push(nameCommune);
    Pourcentage_06057.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06057.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06057.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06057.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06057.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06057 = [];
const vote_lepen_06057 = [];
const vote_rejet_06057 = [];
const vote_macronpop_06057 = [];
const vote_lepenpop_06057 = [];
const vote_rejetpop_06057 = [];
const name_Commune_06057 = [];
const Pourcentage_06057 = [];
const Pourcentage_rejet_06057 = [];
const vote_gene_macron_06057 = [];
const vote_gene_lepen_06057 = [];
const vote_gene_rejet_06057 = [];

async function chartIt06057(){
    await GraphDATA06057();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06057-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06057
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06057
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06057-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06057,vote_lepen_06057,vote_rejet_06057]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06057-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06057,vote_lepenpop_06057,vote_rejetpop_06057]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06057"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06057
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06057
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06057
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06058*/
/*------------------------------------------------------------------ */
async function GraphDATA06058() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06058.push(vote_macron); 
    vote_lepen_06058.push(vote_lepen);
    vote_rejet_06058.push(vote_rejet);
    vote_macronpop_06058.push(vote_macronMediane);
    vote_lepenpop_06058.push(vote_lepenMediane);
    vote_rejetpop_06058.push(vote_rejetMediane);
    name_Commune_06058.push(nameCommune);
    Pourcentage_06058.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06058.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06058.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06058.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06058.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06058 = [];
const vote_lepen_06058 = [];
const vote_rejet_06058 = [];
const vote_macronpop_06058 = [];
const vote_lepenpop_06058 = [];
const vote_rejetpop_06058 = [];
const name_Commune_06058 = [];
const Pourcentage_06058 = [];
const Pourcentage_rejet_06058 = [];
const vote_gene_macron_06058 = [];
const vote_gene_lepen_06058 = [];
const vote_gene_rejet_06058 = [];

async function chartIt06058(){
    await GraphDATA06058();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06058-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06058
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06058
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06058-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06058,vote_lepen_06058,vote_rejet_06058]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06058-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06058,vote_lepenpop_06058,vote_rejetpop_06058]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06058"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06058
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06058
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06058
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06059*/
/*------------------------------------------------------------------ */
async function GraphDATA06059() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06059.push(vote_macron); 
    vote_lepen_06059.push(vote_lepen);
    vote_rejet_06059.push(vote_rejet);
    vote_macronpop_06059.push(vote_macronMediane);
    vote_lepenpop_06059.push(vote_lepenMediane);
    vote_rejetpop_06059.push(vote_rejetMediane);
    name_Commune_06059.push(nameCommune);
    Pourcentage_06059.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06059.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06059.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06059.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06059.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06059 = [];
const vote_lepen_06059 = [];
const vote_rejet_06059 = [];
const vote_macronpop_06059 = [];
const vote_lepenpop_06059 = [];
const vote_rejetpop_06059 = [];
const name_Commune_06059 = [];
const Pourcentage_06059 = [];
const Pourcentage_rejet_06059 = [];
const vote_gene_macron_06059 = [];
const vote_gene_lepen_06059 = [];
const vote_gene_rejet_06059 = [];

async function chartIt06059(){
    await GraphDATA06059();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06059-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06059
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06059
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06059-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06059,vote_lepen_06059,vote_rejet_06059]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06059-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06059,vote_lepenpop_06059,vote_rejetpop_06059]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06059"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06059
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06059
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06059
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06060*/
/*------------------------------------------------------------------ */
async function GraphDATA06060() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06060.push(vote_macron); 
    vote_lepen_06060.push(vote_lepen);
    vote_rejet_06060.push(vote_rejet);
    vote_macronpop_06060.push(vote_macronMediane);
    vote_lepenpop_06060.push(vote_lepenMediane);
    vote_rejetpop_06060.push(vote_rejetMediane);
    name_Commune_06060.push(nameCommune);
    Pourcentage_06060.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06060.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06060.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06060.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06060.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06060 = [];
const vote_lepen_06060 = [];
const vote_rejet_06060 = [];
const vote_macronpop_06060 = [];
const vote_lepenpop_06060 = [];
const vote_rejetpop_06060 = [];
const name_Commune_06060 = [];
const Pourcentage_06060 = [];
const Pourcentage_rejet_06060 = [];
const vote_gene_macron_06060 = [];
const vote_gene_lepen_06060 = [];
const vote_gene_rejet_06060 = [];

async function chartIt06060(){
    await GraphDATA06060();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06060-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06060
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06060
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06060-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06060,vote_lepen_06060,vote_rejet_06060]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06060-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06060,vote_lepenpop_06060,vote_rejetpop_06060]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06060"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06060
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06060
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06060
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06061*/
/*------------------------------------------------------------------ */
async function GraphDATA06061() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06061.push(vote_macron); 
    vote_lepen_06061.push(vote_lepen);
    vote_rejet_06061.push(vote_rejet);
    vote_macronpop_06061.push(vote_macronMediane);
    vote_lepenpop_06061.push(vote_lepenMediane);
    vote_rejetpop_06061.push(vote_rejetMediane);
    name_Commune_06061.push(nameCommune);
    Pourcentage_06061.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06061.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06061.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06061.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06061.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06061 = [];
const vote_lepen_06061 = [];
const vote_rejet_06061 = [];
const vote_macronpop_06061 = [];
const vote_lepenpop_06061 = [];
const vote_rejetpop_06061 = [];
const name_Commune_06061 = [];
const Pourcentage_06061 = [];
const Pourcentage_rejet_06061 = [];
const vote_gene_macron_06061 = [];
const vote_gene_lepen_06061 = [];
const vote_gene_rejet_06061 = [];

async function chartIt06061(){
    await GraphDATA06061();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06061-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06061
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06061
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06061-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06061,vote_lepen_06061,vote_rejet_06061]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06061-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06061,vote_lepenpop_06061,vote_rejetpop_06061]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06061"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06061
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06061
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06061
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06062*/
/*------------------------------------------------------------------ */
async function GraphDATA06062() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06062.push(vote_macron); 
    vote_lepen_06062.push(vote_lepen);
    vote_rejet_06062.push(vote_rejet);
    vote_macronpop_06062.push(vote_macronMediane);
    vote_lepenpop_06062.push(vote_lepenMediane);
    vote_rejetpop_06062.push(vote_rejetMediane);
    name_Commune_06062.push(nameCommune);
    Pourcentage_06062.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06062.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06062.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06062.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06062.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06062 = [];
const vote_lepen_06062 = [];
const vote_rejet_06062 = [];
const vote_macronpop_06062 = [];
const vote_lepenpop_06062 = [];
const vote_rejetpop_06062 = [];
const name_Commune_06062 = [];
const Pourcentage_06062 = [];
const Pourcentage_rejet_06062 = [];
const vote_gene_macron_06062 = [];
const vote_gene_lepen_06062 = [];
const vote_gene_rejet_06062 = [];

async function chartIt06062(){
    await GraphDATA06062();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06062-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06062
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06062
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06062-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06062,vote_lepen_06062,vote_rejet_06062]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06062-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06062,vote_lepenpop_06062,vote_rejetpop_06062]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06062"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06062
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06062
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06062
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06063*/
/*------------------------------------------------------------------ */
async function GraphDATA06063() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06063.push(vote_macron); 
    vote_lepen_06063.push(vote_lepen);
    vote_rejet_06063.push(vote_rejet);
    vote_macronpop_06063.push(vote_macronMediane);
    vote_lepenpop_06063.push(vote_lepenMediane);
    vote_rejetpop_06063.push(vote_rejetMediane);
    name_Commune_06063.push(nameCommune);
    Pourcentage_06063.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06063.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06063.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06063.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06063.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06063 = [];
const vote_lepen_06063 = [];
const vote_rejet_06063 = [];
const vote_macronpop_06063 = [];
const vote_lepenpop_06063 = [];
const vote_rejetpop_06063 = [];
const name_Commune_06063 = [];
const Pourcentage_06063 = [];
const Pourcentage_rejet_06063 = [];
const vote_gene_macron_06063 = [];
const vote_gene_lepen_06063 = [];
const vote_gene_rejet_06063 = [];

async function chartIt06063(){
    await GraphDATA06063();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06063-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06063
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06063
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06063-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06063,vote_lepen_06063,vote_rejet_06063]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06063-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06063,vote_lepenpop_06063,vote_rejetpop_06063]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06063"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06063
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06063
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06063
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06064*/
/*------------------------------------------------------------------ */
async function GraphDATA06064() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06064.push(vote_macron); 
    vote_lepen_06064.push(vote_lepen);
    vote_rejet_06064.push(vote_rejet);
    vote_macronpop_06064.push(vote_macronMediane);
    vote_lepenpop_06064.push(vote_lepenMediane);
    vote_rejetpop_06064.push(vote_rejetMediane);
    name_Commune_06064.push(nameCommune);
    Pourcentage_06064.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06064.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06064.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06064.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06064.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06064 = [];
const vote_lepen_06064 = [];
const vote_rejet_06064 = [];
const vote_macronpop_06064 = [];
const vote_lepenpop_06064 = [];
const vote_rejetpop_06064 = [];
const name_Commune_06064 = [];
const Pourcentage_06064 = [];
const Pourcentage_rejet_06064 = [];
const vote_gene_macron_06064 = [];
const vote_gene_lepen_06064 = [];
const vote_gene_rejet_06064 = [];

async function chartIt06064(){
    await GraphDATA06064();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06064-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06064
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06064
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06064-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06064,vote_lepen_06064,vote_rejet_06064]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06064-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06064,vote_lepenpop_06064,vote_rejetpop_06064]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06064"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06064
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06064
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06064
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06065*/
/*------------------------------------------------------------------ */
async function GraphDATA06065() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06065.push(vote_macron); 
    vote_lepen_06065.push(vote_lepen);
    vote_rejet_06065.push(vote_rejet);
    vote_macronpop_06065.push(vote_macronMediane);
    vote_lepenpop_06065.push(vote_lepenMediane);
    vote_rejetpop_06065.push(vote_rejetMediane);
    name_Commune_06065.push(nameCommune);
    Pourcentage_06065.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06065.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06065.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06065.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06065.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06065 = [];
const vote_lepen_06065 = [];
const vote_rejet_06065 = [];
const vote_macronpop_06065 = [];
const vote_lepenpop_06065 = [];
const vote_rejetpop_06065 = [];
const name_Commune_06065 = [];
const Pourcentage_06065 = [];
const Pourcentage_rejet_06065 = [];
const vote_gene_macron_06065 = [];
const vote_gene_lepen_06065 = [];
const vote_gene_rejet_06065 = [];

async function chartIt06065(){
    await GraphDATA06065();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06065-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06065
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06065
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06065-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06065,vote_lepen_06065,vote_rejet_06065]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06065-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06065,vote_lepenpop_06065,vote_rejetpop_06065]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06065"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06065
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06065
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06065
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06066*/
/*------------------------------------------------------------------ */
async function GraphDATA06066() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06066.push(vote_macron); 
    vote_lepen_06066.push(vote_lepen);
    vote_rejet_06066.push(vote_rejet);
    vote_macronpop_06066.push(vote_macronMediane);
    vote_lepenpop_06066.push(vote_lepenMediane);
    vote_rejetpop_06066.push(vote_rejetMediane);
    name_Commune_06066.push(nameCommune);
    Pourcentage_06066.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06066.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06066.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06066.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06066.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06066 = [];
const vote_lepen_06066 = [];
const vote_rejet_06066 = [];
const vote_macronpop_06066 = [];
const vote_lepenpop_06066 = [];
const vote_rejetpop_06066 = [];
const name_Commune_06066 = [];
const Pourcentage_06066 = [];
const Pourcentage_rejet_06066 = [];
const vote_gene_macron_06066 = [];
const vote_gene_lepen_06066 = [];
const vote_gene_rejet_06066 = [];

async function chartIt06066(){
    await GraphDATA06066();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06066-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06066
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06066
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06066-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06066,vote_lepen_06066,vote_rejet_06066]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06066-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06066,vote_lepenpop_06066,vote_rejetpop_06066]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06066"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06066
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06066
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06066
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06067*/
/*------------------------------------------------------------------ */
async function GraphDATA06067() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06067.push(vote_macron); 
    vote_lepen_06067.push(vote_lepen);
    vote_rejet_06067.push(vote_rejet);
    vote_macronpop_06067.push(vote_macronMediane);
    vote_lepenpop_06067.push(vote_lepenMediane);
    vote_rejetpop_06067.push(vote_rejetMediane);
    name_Commune_06067.push(nameCommune);
    Pourcentage_06067.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06067.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06067.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06067.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06067.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06067 = [];
const vote_lepen_06067 = [];
const vote_rejet_06067 = [];
const vote_macronpop_06067 = [];
const vote_lepenpop_06067 = [];
const vote_rejetpop_06067 = [];
const name_Commune_06067 = [];
const Pourcentage_06067 = [];
const Pourcentage_rejet_06067 = [];
const vote_gene_macron_06067 = [];
const vote_gene_lepen_06067 = [];
const vote_gene_rejet_06067 = [];

async function chartIt06067(){
    await GraphDATA06067();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06067-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06067
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06067
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06067-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06067,vote_lepen_06067,vote_rejet_06067]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06067-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06067,vote_lepenpop_06067,vote_rejetpop_06067]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06067"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06067
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06067
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06067
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06068*/
/*------------------------------------------------------------------ */
async function GraphDATA06068() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06068.push(vote_macron); 
    vote_lepen_06068.push(vote_lepen);
    vote_rejet_06068.push(vote_rejet);
    vote_macronpop_06068.push(vote_macronMediane);
    vote_lepenpop_06068.push(vote_lepenMediane);
    vote_rejetpop_06068.push(vote_rejetMediane);
    name_Commune_06068.push(nameCommune);
    Pourcentage_06068.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06068.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06068.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06068.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06068.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06068 = [];
const vote_lepen_06068 = [];
const vote_rejet_06068 = [];
const vote_macronpop_06068 = [];
const vote_lepenpop_06068 = [];
const vote_rejetpop_06068 = [];
const name_Commune_06068 = [];
const Pourcentage_06068 = [];
const Pourcentage_rejet_06068 = [];
const vote_gene_macron_06068 = [];
const vote_gene_lepen_06068 = [];
const vote_gene_rejet_06068 = [];

async function chartIt06068(){
    await GraphDATA06068();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06068-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06068
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06068
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06068-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06068,vote_lepen_06068,vote_rejet_06068]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06068-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06068,vote_lepenpop_06068,vote_rejetpop_06068]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06068"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06068
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06068
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06068
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06069*/
/*------------------------------------------------------------------ */
async function GraphDATA06069() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06069.push(vote_macron); 
    vote_lepen_06069.push(vote_lepen);
    vote_rejet_06069.push(vote_rejet);
    vote_macronpop_06069.push(vote_macronMediane);
    vote_lepenpop_06069.push(vote_lepenMediane);
    vote_rejetpop_06069.push(vote_rejetMediane);
    name_Commune_06069.push(nameCommune);
    Pourcentage_06069.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06069.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06069.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06069.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06069.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06069 = [];
const vote_lepen_06069 = [];
const vote_rejet_06069 = [];
const vote_macronpop_06069 = [];
const vote_lepenpop_06069 = [];
const vote_rejetpop_06069 = [];
const name_Commune_06069 = [];
const Pourcentage_06069 = [];
const Pourcentage_rejet_06069 = [];
const vote_gene_macron_06069 = [];
const vote_gene_lepen_06069 = [];
const vote_gene_rejet_06069 = [];

async function chartIt06069(){
    await GraphDATA06069();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06069-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06069
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06069
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06069-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06069,vote_lepen_06069,vote_rejet_06069]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06069-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06069,vote_lepenpop_06069,vote_rejetpop_06069]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06069"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06069
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06069
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06069
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06070*/
/*------------------------------------------------------------------ */
async function GraphDATA06070() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06070.push(vote_macron); 
    vote_lepen_06070.push(vote_lepen);
    vote_rejet_06070.push(vote_rejet);
    vote_macronpop_06070.push(vote_macronMediane);
    vote_lepenpop_06070.push(vote_lepenMediane);
    vote_rejetpop_06070.push(vote_rejetMediane);
    name_Commune_06070.push(nameCommune);
    Pourcentage_06070.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06070.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06070.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06070.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06070.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06070 = [];
const vote_lepen_06070 = [];
const vote_rejet_06070 = [];
const vote_macronpop_06070 = [];
const vote_lepenpop_06070 = [];
const vote_rejetpop_06070 = [];
const name_Commune_06070 = [];
const Pourcentage_06070 = [];
const Pourcentage_rejet_06070 = [];
const vote_gene_macron_06070 = [];
const vote_gene_lepen_06070 = [];
const vote_gene_rejet_06070 = [];

async function chartIt06070(){
    await GraphDATA06070();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06070-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06070
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06070
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06070-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06070,vote_lepen_06070,vote_rejet_06070]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06070-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06070,vote_lepenpop_06070,vote_rejetpop_06070]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06070"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06070
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06070
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06070
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06071*/
/*------------------------------------------------------------------ */
async function GraphDATA06071() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06071.push(vote_macron); 
    vote_lepen_06071.push(vote_lepen);
    vote_rejet_06071.push(vote_rejet);
    vote_macronpop_06071.push(vote_macronMediane);
    vote_lepenpop_06071.push(vote_lepenMediane);
    vote_rejetpop_06071.push(vote_rejetMediane);
    name_Commune_06071.push(nameCommune);
    Pourcentage_06071.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06071.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06071.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06071.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06071.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06071 = [];
const vote_lepen_06071 = [];
const vote_rejet_06071 = [];
const vote_macronpop_06071 = [];
const vote_lepenpop_06071 = [];
const vote_rejetpop_06071 = [];
const name_Commune_06071 = [];
const Pourcentage_06071 = [];
const Pourcentage_rejet_06071 = [];
const vote_gene_macron_06071 = [];
const vote_gene_lepen_06071 = [];
const vote_gene_rejet_06071 = [];

async function chartIt06071(){
    await GraphDATA06071();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06071-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06071
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06071
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06071-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06071,vote_lepen_06071,vote_rejet_06071]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06071-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06071,vote_lepenpop_06071,vote_rejetpop_06071]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06071"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06071
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06071
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06071
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06072*/
/*------------------------------------------------------------------ */
async function GraphDATA06072() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06072.push(vote_macron); 
    vote_lepen_06072.push(vote_lepen);
    vote_rejet_06072.push(vote_rejet);
    vote_macronpop_06072.push(vote_macronMediane);
    vote_lepenpop_06072.push(vote_lepenMediane);
    vote_rejetpop_06072.push(vote_rejetMediane);
    name_Commune_06072.push(nameCommune);
    Pourcentage_06072.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06072.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06072.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06072.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06072.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06072 = [];
const vote_lepen_06072 = [];
const vote_rejet_06072 = [];
const vote_macronpop_06072 = [];
const vote_lepenpop_06072 = [];
const vote_rejetpop_06072 = [];
const name_Commune_06072 = [];
const Pourcentage_06072 = [];
const Pourcentage_rejet_06072 = [];
const vote_gene_macron_06072 = [];
const vote_gene_lepen_06072 = [];
const vote_gene_rejet_06072 = [];

async function chartIt06072(){
    await GraphDATA06072();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06072-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06072
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06072
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06072-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06072,vote_lepen_06072,vote_rejet_06072]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06072-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06072,vote_lepenpop_06072,vote_rejetpop_06072]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06072"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06072
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06072
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06072
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06073*/
/*------------------------------------------------------------------ */
async function GraphDATA06073() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06073.push(vote_macron); 
    vote_lepen_06073.push(vote_lepen);
    vote_rejet_06073.push(vote_rejet);
    vote_macronpop_06073.push(vote_macronMediane);
    vote_lepenpop_06073.push(vote_lepenMediane);
    vote_rejetpop_06073.push(vote_rejetMediane);
    name_Commune_06073.push(nameCommune);
    Pourcentage_06073.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06073.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06073.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06073.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06073.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06073 = [];
const vote_lepen_06073 = [];
const vote_rejet_06073 = [];
const vote_macronpop_06073 = [];
const vote_lepenpop_06073 = [];
const vote_rejetpop_06073 = [];
const name_Commune_06073 = [];
const Pourcentage_06073 = [];
const Pourcentage_rejet_06073 = [];
const vote_gene_macron_06073 = [];
const vote_gene_lepen_06073 = [];
const vote_gene_rejet_06073 = [];

async function chartIt06073(){
    await GraphDATA06073();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06073-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06073
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06073
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06073-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06073,vote_lepen_06073,vote_rejet_06073]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06073-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06073,vote_lepenpop_06073,vote_rejetpop_06073]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06073"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06073
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06073
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06073
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06074*/
/*------------------------------------------------------------------ */
async function GraphDATA06074() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06074.push(vote_macron); 
    vote_lepen_06074.push(vote_lepen);
    vote_rejet_06074.push(vote_rejet);
    vote_macronpop_06074.push(vote_macronMediane);
    vote_lepenpop_06074.push(vote_lepenMediane);
    vote_rejetpop_06074.push(vote_rejetMediane);
    name_Commune_06074.push(nameCommune);
    Pourcentage_06074.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06074.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06074.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06074.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06074.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06074 = [];
const vote_lepen_06074 = [];
const vote_rejet_06074 = [];
const vote_macronpop_06074 = [];
const vote_lepenpop_06074 = [];
const vote_rejetpop_06074 = [];
const name_Commune_06074 = [];
const Pourcentage_06074 = [];
const Pourcentage_rejet_06074 = [];
const vote_gene_macron_06074 = [];
const vote_gene_lepen_06074 = [];
const vote_gene_rejet_06074 = [];

async function chartIt06074(){
    await GraphDATA06074();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06074-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06074
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06074
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06074-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06074,vote_lepen_06074,vote_rejet_06074]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06074-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06074,vote_lepenpop_06074,vote_rejetpop_06074]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06074"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06074
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06074
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06074
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06075*/
/*------------------------------------------------------------------ */
async function GraphDATA06075() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06075.push(vote_macron); 
    vote_lepen_06075.push(vote_lepen);
    vote_rejet_06075.push(vote_rejet);
    vote_macronpop_06075.push(vote_macronMediane);
    vote_lepenpop_06075.push(vote_lepenMediane);
    vote_rejetpop_06075.push(vote_rejetMediane);
    name_Commune_06075.push(nameCommune);
    Pourcentage_06075.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06075.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06075.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06075.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06075.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06075 = [];
const vote_lepen_06075 = [];
const vote_rejet_06075 = [];
const vote_macronpop_06075 = [];
const vote_lepenpop_06075 = [];
const vote_rejetpop_06075 = [];
const name_Commune_06075 = [];
const Pourcentage_06075 = [];
const Pourcentage_rejet_06075 = [];
const vote_gene_macron_06075 = [];
const vote_gene_lepen_06075 = [];
const vote_gene_rejet_06075 = [];

async function chartIt06075(){
    await GraphDATA06075();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06075-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06075
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06075
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06075-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06075,vote_lepen_06075,vote_rejet_06075]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06075-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06075,vote_lepenpop_06075,vote_rejetpop_06075]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06075"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06075
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06075
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06075
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06076*/
/*------------------------------------------------------------------ */
async function GraphDATA06076() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06076.push(vote_macron); 
    vote_lepen_06076.push(vote_lepen);
    vote_rejet_06076.push(vote_rejet);
    vote_macronpop_06076.push(vote_macronMediane);
    vote_lepenpop_06076.push(vote_lepenMediane);
    vote_rejetpop_06076.push(vote_rejetMediane);
    name_Commune_06076.push(nameCommune);
    Pourcentage_06076.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06076.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06076.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06076.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06076.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06076 = [];
const vote_lepen_06076 = [];
const vote_rejet_06076 = [];
const vote_macronpop_06076 = [];
const vote_lepenpop_06076 = [];
const vote_rejetpop_06076 = [];
const name_Commune_06076 = [];
const Pourcentage_06076 = [];
const Pourcentage_rejet_06076 = [];
const vote_gene_macron_06076 = [];
const vote_gene_lepen_06076 = [];
const vote_gene_rejet_06076 = [];

async function chartIt06076(){
    await GraphDATA06076();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06076-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06076
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06076
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06076-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06076,vote_lepen_06076,vote_rejet_06076]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06076-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06076,vote_lepenpop_06076,vote_rejetpop_06076]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06076"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06076
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06076
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06076
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06077*/
/*------------------------------------------------------------------ */
async function GraphDATA06077() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06077.push(vote_macron); 
    vote_lepen_06077.push(vote_lepen);
    vote_rejet_06077.push(vote_rejet);
    vote_macronpop_06077.push(vote_macronMediane);
    vote_lepenpop_06077.push(vote_lepenMediane);
    vote_rejetpop_06077.push(vote_rejetMediane);
    name_Commune_06077.push(nameCommune);
    Pourcentage_06077.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06077.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06077.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06077.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06077.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06077 = [];
const vote_lepen_06077 = [];
const vote_rejet_06077 = [];
const vote_macronpop_06077 = [];
const vote_lepenpop_06077 = [];
const vote_rejetpop_06077 = [];
const name_Commune_06077 = [];
const Pourcentage_06077 = [];
const Pourcentage_rejet_06077 = [];
const vote_gene_macron_06077 = [];
const vote_gene_lepen_06077 = [];
const vote_gene_rejet_06077 = [];

async function chartIt06077(){
    await GraphDATA06077();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06077-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06077
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06077
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06077-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06077,vote_lepen_06077,vote_rejet_06077]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06077-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06077,vote_lepenpop_06077,vote_rejetpop_06077]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06077"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06077
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06077
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06077
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06078*/
/*------------------------------------------------------------------ */
async function GraphDATA06078() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06078.push(vote_macron); 
    vote_lepen_06078.push(vote_lepen);
    vote_rejet_06078.push(vote_rejet);
    vote_macronpop_06078.push(vote_macronMediane);
    vote_lepenpop_06078.push(vote_lepenMediane);
    vote_rejetpop_06078.push(vote_rejetMediane);
    name_Commune_06078.push(nameCommune);
    Pourcentage_06078.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06078.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06078.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06078.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06078.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06078 = [];
const vote_lepen_06078 = [];
const vote_rejet_06078 = [];
const vote_macronpop_06078 = [];
const vote_lepenpop_06078 = [];
const vote_rejetpop_06078 = [];
const name_Commune_06078 = [];
const Pourcentage_06078 = [];
const Pourcentage_rejet_06078 = [];
const vote_gene_macron_06078 = [];
const vote_gene_lepen_06078 = [];
const vote_gene_rejet_06078 = [];

async function chartIt06078(){
    await GraphDATA06078();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06078-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06078
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06078
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06078-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06078,vote_lepen_06078,vote_rejet_06078]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06078-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06078,vote_lepenpop_06078,vote_rejetpop_06078]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06078"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06078
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06078
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06078
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06079*/
/*------------------------------------------------------------------ */
async function GraphDATA06079() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06079.push(vote_macron); 
    vote_lepen_06079.push(vote_lepen);
    vote_rejet_06079.push(vote_rejet);
    vote_macronpop_06079.push(vote_macronMediane);
    vote_lepenpop_06079.push(vote_lepenMediane);
    vote_rejetpop_06079.push(vote_rejetMediane);
    name_Commune_06079.push(nameCommune);
    Pourcentage_06079.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06079.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06079.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06079.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06079.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06079 = [];
const vote_lepen_06079 = [];
const vote_rejet_06079 = [];
const vote_macronpop_06079 = [];
const vote_lepenpop_06079 = [];
const vote_rejetpop_06079 = [];
const name_Commune_06079 = [];
const Pourcentage_06079 = [];
const Pourcentage_rejet_06079 = [];
const vote_gene_macron_06079 = [];
const vote_gene_lepen_06079 = [];
const vote_gene_rejet_06079 = [];

async function chartIt06079(){
    await GraphDATA06079();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06079-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06079
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06079
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06079-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06079,vote_lepen_06079,vote_rejet_06079]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06079-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06079,vote_lepenpop_06079,vote_rejetpop_06079]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06079"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06079
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06079
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06079
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06080*/
/*------------------------------------------------------------------ */
async function GraphDATA06080() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06080.push(vote_macron); 
    vote_lepen_06080.push(vote_lepen);
    vote_rejet_06080.push(vote_rejet);
    vote_macronpop_06080.push(vote_macronMediane);
    vote_lepenpop_06080.push(vote_lepenMediane);
    vote_rejetpop_06080.push(vote_rejetMediane);
    name_Commune_06080.push(nameCommune);
    Pourcentage_06080.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06080.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06080.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06080.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06080.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06080 = [];
const vote_lepen_06080 = [];
const vote_rejet_06080 = [];
const vote_macronpop_06080 = [];
const vote_lepenpop_06080 = [];
const vote_rejetpop_06080 = [];
const name_Commune_06080 = [];
const Pourcentage_06080 = [];
const Pourcentage_rejet_06080 = [];
const vote_gene_macron_06080 = [];
const vote_gene_lepen_06080 = [];
const vote_gene_rejet_06080 = [];

async function chartIt06080(){
    await GraphDATA06080();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06080-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06080
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06080
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06080-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06080,vote_lepen_06080,vote_rejet_06080]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06080-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06080,vote_lepenpop_06080,vote_rejetpop_06080]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06080"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06080
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06080
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06080
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06081*/
/*------------------------------------------------------------------ */
async function GraphDATA06081() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06081.push(vote_macron); 
    vote_lepen_06081.push(vote_lepen);
    vote_rejet_06081.push(vote_rejet);
    vote_macronpop_06081.push(vote_macronMediane);
    vote_lepenpop_06081.push(vote_lepenMediane);
    vote_rejetpop_06081.push(vote_rejetMediane);
    name_Commune_06081.push(nameCommune);
    Pourcentage_06081.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06081.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06081.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06081.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06081.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06081 = [];
const vote_lepen_06081 = [];
const vote_rejet_06081 = [];
const vote_macronpop_06081 = [];
const vote_lepenpop_06081 = [];
const vote_rejetpop_06081 = [];
const name_Commune_06081 = [];
const Pourcentage_06081 = [];
const Pourcentage_rejet_06081 = [];
const vote_gene_macron_06081 = [];
const vote_gene_lepen_06081 = [];
const vote_gene_rejet_06081 = [];

async function chartIt06081(){
    await GraphDATA06081();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06081-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06081
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06081
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06081-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06081,vote_lepen_06081,vote_rejet_06081]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06081-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06081,vote_lepenpop_06081,vote_rejetpop_06081]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06081"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06081
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06081
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06081
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06082*/
/*------------------------------------------------------------------ */
async function GraphDATA06082() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06082.push(vote_macron); 
    vote_lepen_06082.push(vote_lepen);
    vote_rejet_06082.push(vote_rejet);
    vote_macronpop_06082.push(vote_macronMediane);
    vote_lepenpop_06082.push(vote_lepenMediane);
    vote_rejetpop_06082.push(vote_rejetMediane);
    name_Commune_06082.push(nameCommune);
    Pourcentage_06082.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06082.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06082.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06082.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06082.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06082 = [];
const vote_lepen_06082 = [];
const vote_rejet_06082 = [];
const vote_macronpop_06082 = [];
const vote_lepenpop_06082 = [];
const vote_rejetpop_06082 = [];
const name_Commune_06082 = [];
const Pourcentage_06082 = [];
const Pourcentage_rejet_06082 = [];
const vote_gene_macron_06082 = [];
const vote_gene_lepen_06082 = [];
const vote_gene_rejet_06082 = [];

async function chartIt06082(){
    await GraphDATA06082();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06082-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06082
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06082
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06082-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06082,vote_lepen_06082,vote_rejet_06082]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06082-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06082,vote_lepenpop_06082,vote_rejetpop_06082]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06082"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06082
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06082
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06082
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06083*/
/*------------------------------------------------------------------ */
async function GraphDATA06083() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06083.push(vote_macron); 
    vote_lepen_06083.push(vote_lepen);
    vote_rejet_06083.push(vote_rejet);
    vote_macronpop_06083.push(vote_macronMediane);
    vote_lepenpop_06083.push(vote_lepenMediane);
    vote_rejetpop_06083.push(vote_rejetMediane);
    name_Commune_06083.push(nameCommune);
    Pourcentage_06083.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06083.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06083.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06083.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06083.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06083 = [];
const vote_lepen_06083 = [];
const vote_rejet_06083 = [];
const vote_macronpop_06083 = [];
const vote_lepenpop_06083 = [];
const vote_rejetpop_06083 = [];
const name_Commune_06083 = [];
const Pourcentage_06083 = [];
const Pourcentage_rejet_06083 = [];
const vote_gene_macron_06083 = [];
const vote_gene_lepen_06083 = [];
const vote_gene_rejet_06083 = [];

async function chartIt06083(){
    await GraphDATA06083();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06083-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06083
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06083
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06083-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06083,vote_lepen_06083,vote_rejet_06083]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06083-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06083,vote_lepenpop_06083,vote_rejetpop_06083]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06083"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06083
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06083
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06083
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06084*/
/*------------------------------------------------------------------ */
async function GraphDATA06084() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06084.push(vote_macron); 
    vote_lepen_06084.push(vote_lepen);
    vote_rejet_06084.push(vote_rejet);
    vote_macronpop_06084.push(vote_macronMediane);
    vote_lepenpop_06084.push(vote_lepenMediane);
    vote_rejetpop_06084.push(vote_rejetMediane);
    name_Commune_06084.push(nameCommune);
    Pourcentage_06084.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06084.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06084.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06084.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06084.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06084 = [];
const vote_lepen_06084 = [];
const vote_rejet_06084 = [];
const vote_macronpop_06084 = [];
const vote_lepenpop_06084 = [];
const vote_rejetpop_06084 = [];
const name_Commune_06084 = [];
const Pourcentage_06084 = [];
const Pourcentage_rejet_06084 = [];
const vote_gene_macron_06084 = [];
const vote_gene_lepen_06084 = [];
const vote_gene_rejet_06084 = [];

async function chartIt06084(){
    await GraphDATA06084();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06084-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06084
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06084
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06084-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06084,vote_lepen_06084,vote_rejet_06084]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06084-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06084,vote_lepenpop_06084,vote_rejetpop_06084]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06084"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06084
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06084
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06084
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06085*/
/*------------------------------------------------------------------ */
async function GraphDATA06085() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06085.push(vote_macron); 
    vote_lepen_06085.push(vote_lepen);
    vote_rejet_06085.push(vote_rejet);
    vote_macronpop_06085.push(vote_macronMediane);
    vote_lepenpop_06085.push(vote_lepenMediane);
    vote_rejetpop_06085.push(vote_rejetMediane);
    name_Commune_06085.push(nameCommune);
    Pourcentage_06085.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06085.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06085.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06085.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06085.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06085 = [];
const vote_lepen_06085 = [];
const vote_rejet_06085 = [];
const vote_macronpop_06085 = [];
const vote_lepenpop_06085 = [];
const vote_rejetpop_06085 = [];
const name_Commune_06085 = [];
const Pourcentage_06085 = [];
const Pourcentage_rejet_06085 = [];
const vote_gene_macron_06085 = [];
const vote_gene_lepen_06085 = [];
const vote_gene_rejet_06085 = [];

async function chartIt06085(){
    await GraphDATA06085();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06085-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06085
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06085
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06085-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06085,vote_lepen_06085,vote_rejet_06085]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06085-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06085,vote_lepenpop_06085,vote_rejetpop_06085]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06085"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06085
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06085
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06085
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06086*/
/*------------------------------------------------------------------ */
async function GraphDATA06086() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06086.push(vote_macron); 
    vote_lepen_06086.push(vote_lepen);
    vote_rejet_06086.push(vote_rejet);
    vote_macronpop_06086.push(vote_macronMediane);
    vote_lepenpop_06086.push(vote_lepenMediane);
    vote_rejetpop_06086.push(vote_rejetMediane);
    name_Commune_06086.push(nameCommune);
    Pourcentage_06086.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06086.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06086.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06086.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06086.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06086 = [];
const vote_lepen_06086 = [];
const vote_rejet_06086 = [];
const vote_macronpop_06086 = [];
const vote_lepenpop_06086 = [];
const vote_rejetpop_06086 = [];
const name_Commune_06086 = [];
const Pourcentage_06086 = [];
const Pourcentage_rejet_06086 = [];
const vote_gene_macron_06086 = [];
const vote_gene_lepen_06086 = [];
const vote_gene_rejet_06086 = [];

async function chartIt06086(){
    await GraphDATA06086();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06086-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06086
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06086
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06086-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06086,vote_lepen_06086,vote_rejet_06086]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06086-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06086,vote_lepenpop_06086,vote_rejetpop_06086]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06086"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06086
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06086
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06086
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06087*/
/*------------------------------------------------------------------ */
async function GraphDATA06087() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06087.push(vote_macron); 
    vote_lepen_06087.push(vote_lepen);
    vote_rejet_06087.push(vote_rejet);
    vote_macronpop_06087.push(vote_macronMediane);
    vote_lepenpop_06087.push(vote_lepenMediane);
    vote_rejetpop_06087.push(vote_rejetMediane);
    name_Commune_06087.push(nameCommune);
    Pourcentage_06087.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06087.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06087.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06087.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06087.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06087 = [];
const vote_lepen_06087 = [];
const vote_rejet_06087 = [];
const vote_macronpop_06087 = [];
const vote_lepenpop_06087 = [];
const vote_rejetpop_06087 = [];
const name_Commune_06087 = [];
const Pourcentage_06087 = [];
const Pourcentage_rejet_06087 = [];
const vote_gene_macron_06087 = [];
const vote_gene_lepen_06087 = [];
const vote_gene_rejet_06087 = [];

async function chartIt06087(){
    await GraphDATA06087();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06087-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06087
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06087
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06087-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06087,vote_lepen_06087,vote_rejet_06087]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06087-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06087,vote_lepenpop_06087,vote_rejetpop_06087]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06087"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06087
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06087
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06087
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06088*/
/*------------------------------------------------------------------ */
async function GraphDATA06088() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06088.push(vote_macron); 
    vote_lepen_06088.push(vote_lepen);
    vote_rejet_06088.push(vote_rejet);
    vote_macronpop_06088.push(vote_macronMediane);
    vote_lepenpop_06088.push(vote_lepenMediane);
    vote_rejetpop_06088.push(vote_rejetMediane);
    name_Commune_06088.push(nameCommune);
    Pourcentage_06088.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06088.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06088.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06088.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06088.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06088 = [];
const vote_lepen_06088 = [];
const vote_rejet_06088 = [];
const vote_macronpop_06088 = [];
const vote_lepenpop_06088 = [];
const vote_rejetpop_06088 = [];
const name_Commune_06088 = [];
const Pourcentage_06088 = [];
const Pourcentage_rejet_06088 = [];
const vote_gene_macron_06088 = [];
const vote_gene_lepen_06088 = [];
const vote_gene_rejet_06088 = [];

async function chartIt06088(){
    await GraphDATA06088();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06088-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06088
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06088
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06088-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06088,vote_lepen_06088,vote_rejet_06088]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06088-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06088,vote_lepenpop_06088,vote_rejetpop_06088]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06088"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06088
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06088
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06088
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06089*/
/*------------------------------------------------------------------ */
async function GraphDATA06089() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06089.push(vote_macron); 
    vote_lepen_06089.push(vote_lepen);
    vote_rejet_06089.push(vote_rejet);
    vote_macronpop_06089.push(vote_macronMediane);
    vote_lepenpop_06089.push(vote_lepenMediane);
    vote_rejetpop_06089.push(vote_rejetMediane);
    name_Commune_06089.push(nameCommune);
    Pourcentage_06089.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06089.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06089.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06089.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06089.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06089 = [];
const vote_lepen_06089 = [];
const vote_rejet_06089 = [];
const vote_macronpop_06089 = [];
const vote_lepenpop_06089 = [];
const vote_rejetpop_06089 = [];
const name_Commune_06089 = [];
const Pourcentage_06089 = [];
const Pourcentage_rejet_06089 = [];
const vote_gene_macron_06089 = [];
const vote_gene_lepen_06089 = [];
const vote_gene_rejet_06089 = [];

async function chartIt06089(){
    await GraphDATA06089();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06089-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06089
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06089
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06089-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06089,vote_lepen_06089,vote_rejet_06089]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06089-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06089,vote_lepenpop_06089,vote_rejetpop_06089]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06089"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06089
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06089
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06089
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06090*/
/*------------------------------------------------------------------ */
async function GraphDATA06090() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06090.push(vote_macron); 
    vote_lepen_06090.push(vote_lepen);
    vote_rejet_06090.push(vote_rejet);
    vote_macronpop_06090.push(vote_macronMediane);
    vote_lepenpop_06090.push(vote_lepenMediane);
    vote_rejetpop_06090.push(vote_rejetMediane);
    name_Commune_06090.push(nameCommune);
    Pourcentage_06090.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06090.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06090.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06090.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06090.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06090 = [];
const vote_lepen_06090 = [];
const vote_rejet_06090 = [];
const vote_macronpop_06090 = [];
const vote_lepenpop_06090 = [];
const vote_rejetpop_06090 = [];
const name_Commune_06090 = [];
const Pourcentage_06090 = [];
const Pourcentage_rejet_06090 = [];
const vote_gene_macron_06090 = [];
const vote_gene_lepen_06090 = [];
const vote_gene_rejet_06090 = [];

async function chartIt06090(){
    await GraphDATA06090();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06090-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06090
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06090
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06090-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06090,vote_lepen_06090,vote_rejet_06090]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06090-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06090,vote_lepenpop_06090,vote_rejetpop_06090]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06090"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06090
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06090
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06090
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06091*/
/*------------------------------------------------------------------ */
async function GraphDATA06091() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06091.push(vote_macron); 
    vote_lepen_06091.push(vote_lepen);
    vote_rejet_06091.push(vote_rejet);
    vote_macronpop_06091.push(vote_macronMediane);
    vote_lepenpop_06091.push(vote_lepenMediane);
    vote_rejetpop_06091.push(vote_rejetMediane);
    name_Commune_06091.push(nameCommune);
    Pourcentage_06091.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06091.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06091.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06091.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06091.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06091 = [];
const vote_lepen_06091 = [];
const vote_rejet_06091 = [];
const vote_macronpop_06091 = [];
const vote_lepenpop_06091 = [];
const vote_rejetpop_06091 = [];
const name_Commune_06091 = [];
const Pourcentage_06091 = [];
const Pourcentage_rejet_06091 = [];
const vote_gene_macron_06091 = [];
const vote_gene_lepen_06091 = [];
const vote_gene_rejet_06091 = [];

async function chartIt06091(){
    await GraphDATA06091();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06091-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06091
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06091
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06091-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06091,vote_lepen_06091,vote_rejet_06091]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06091-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06091,vote_lepenpop_06091,vote_rejetpop_06091]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06091"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06091
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06091
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06091
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06092*/
/*------------------------------------------------------------------ */
async function GraphDATA06092() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06092.push(vote_macron); 
    vote_lepen_06092.push(vote_lepen);
    vote_rejet_06092.push(vote_rejet);
    vote_macronpop_06092.push(vote_macronMediane);
    vote_lepenpop_06092.push(vote_lepenMediane);
    vote_rejetpop_06092.push(vote_rejetMediane);
    name_Commune_06092.push(nameCommune);
    Pourcentage_06092.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06092.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06092.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06092.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06092.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06092 = [];
const vote_lepen_06092 = [];
const vote_rejet_06092 = [];
const vote_macronpop_06092 = [];
const vote_lepenpop_06092 = [];
const vote_rejetpop_06092 = [];
const name_Commune_06092 = [];
const Pourcentage_06092 = [];
const Pourcentage_rejet_06092 = [];
const vote_gene_macron_06092 = [];
const vote_gene_lepen_06092 = [];
const vote_gene_rejet_06092 = [];

async function chartIt06092(){
    await GraphDATA06092();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06092-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06092
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06092
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06092-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06092,vote_lepen_06092,vote_rejet_06092]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06092-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06092,vote_lepenpop_06092,vote_rejetpop_06092]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06092"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06092
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06092
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06092
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06093*/
/*------------------------------------------------------------------ */
async function GraphDATA06093() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06093.push(vote_macron); 
    vote_lepen_06093.push(vote_lepen);
    vote_rejet_06093.push(vote_rejet);
    vote_macronpop_06093.push(vote_macronMediane);
    vote_lepenpop_06093.push(vote_lepenMediane);
    vote_rejetpop_06093.push(vote_rejetMediane);
    name_Commune_06093.push(nameCommune);
    Pourcentage_06093.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06093.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06093.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06093.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06093.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06093 = [];
const vote_lepen_06093 = [];
const vote_rejet_06093 = [];
const vote_macronpop_06093 = [];
const vote_lepenpop_06093 = [];
const vote_rejetpop_06093 = [];
const name_Commune_06093 = [];
const Pourcentage_06093 = [];
const Pourcentage_rejet_06093 = [];
const vote_gene_macron_06093 = [];
const vote_gene_lepen_06093 = [];
const vote_gene_rejet_06093 = [];

async function chartIt06093(){
    await GraphDATA06093();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06093-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06093
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06093
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06093-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06093,vote_lepen_06093,vote_rejet_06093]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06093-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06093,vote_lepenpop_06093,vote_rejetpop_06093]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06093"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06093
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06093
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06093
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06094*/
/*------------------------------------------------------------------ */
async function GraphDATA06094() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06094.push(vote_macron); 
    vote_lepen_06094.push(vote_lepen);
    vote_rejet_06094.push(vote_rejet);
    vote_macronpop_06094.push(vote_macronMediane);
    vote_lepenpop_06094.push(vote_lepenMediane);
    vote_rejetpop_06094.push(vote_rejetMediane);
    name_Commune_06094.push(nameCommune);
    Pourcentage_06094.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06094.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06094.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06094.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06094.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06094 = [];
const vote_lepen_06094 = [];
const vote_rejet_06094 = [];
const vote_macronpop_06094 = [];
const vote_lepenpop_06094 = [];
const vote_rejetpop_06094 = [];
const name_Commune_06094 = [];
const Pourcentage_06094 = [];
const Pourcentage_rejet_06094 = [];
const vote_gene_macron_06094 = [];
const vote_gene_lepen_06094 = [];
const vote_gene_rejet_06094 = [];

async function chartIt06094(){
    await GraphDATA06094();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06094-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06094
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06094
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06094-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06094,vote_lepen_06094,vote_rejet_06094]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06094-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06094,vote_lepenpop_06094,vote_rejetpop_06094]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06094"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06094
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06094
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06094
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06095*/
/*------------------------------------------------------------------ */
async function GraphDATA06095() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06095.push(vote_macron); 
    vote_lepen_06095.push(vote_lepen);
    vote_rejet_06095.push(vote_rejet);
    vote_macronpop_06095.push(vote_macronMediane);
    vote_lepenpop_06095.push(vote_lepenMediane);
    vote_rejetpop_06095.push(vote_rejetMediane);
    name_Commune_06095.push(nameCommune);
    Pourcentage_06095.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06095.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06095.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06095.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06095.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06095 = [];
const vote_lepen_06095 = [];
const vote_rejet_06095 = [];
const vote_macronpop_06095 = [];
const vote_lepenpop_06095 = [];
const vote_rejetpop_06095 = [];
const name_Commune_06095 = [];
const Pourcentage_06095 = [];
const Pourcentage_rejet_06095 = [];
const vote_gene_macron_06095 = [];
const vote_gene_lepen_06095 = [];
const vote_gene_rejet_06095 = [];

async function chartIt06095(){
    await GraphDATA06095();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06095-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06095
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06095
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06095-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06095,vote_lepen_06095,vote_rejet_06095]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06095-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06095,vote_lepenpop_06095,vote_rejetpop_06095]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06095"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06095
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06095
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06095
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06096*/
/*------------------------------------------------------------------ */
async function GraphDATA06096() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06096.push(vote_macron); 
    vote_lepen_06096.push(vote_lepen);
    vote_rejet_06096.push(vote_rejet);
    vote_macronpop_06096.push(vote_macronMediane);
    vote_lepenpop_06096.push(vote_lepenMediane);
    vote_rejetpop_06096.push(vote_rejetMediane);
    name_Commune_06096.push(nameCommune);
    Pourcentage_06096.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06096.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06096.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06096.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06096.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06096 = [];
const vote_lepen_06096 = [];
const vote_rejet_06096 = [];
const vote_macronpop_06096 = [];
const vote_lepenpop_06096 = [];
const vote_rejetpop_06096 = [];
const name_Commune_06096 = [];
const Pourcentage_06096 = [];
const Pourcentage_rejet_06096 = [];
const vote_gene_macron_06096 = [];
const vote_gene_lepen_06096 = [];
const vote_gene_rejet_06096 = [];

async function chartIt06096(){
    await GraphDATA06096();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06096-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06096
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06096
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06096-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06096,vote_lepen_06096,vote_rejet_06096]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06096-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06096,vote_lepenpop_06096,vote_rejetpop_06096]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06096"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06096
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06096
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06096
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06097*/
/*------------------------------------------------------------------ */
async function GraphDATA06097() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06097.push(vote_macron); 
    vote_lepen_06097.push(vote_lepen);
    vote_rejet_06097.push(vote_rejet);
    vote_macronpop_06097.push(vote_macronMediane);
    vote_lepenpop_06097.push(vote_lepenMediane);
    vote_rejetpop_06097.push(vote_rejetMediane);
    name_Commune_06097.push(nameCommune);
    Pourcentage_06097.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06097.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06097.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06097.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06097.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06097 = [];
const vote_lepen_06097 = [];
const vote_rejet_06097 = [];
const vote_macronpop_06097 = [];
const vote_lepenpop_06097 = [];
const vote_rejetpop_06097 = [];
const name_Commune_06097 = [];
const Pourcentage_06097 = [];
const Pourcentage_rejet_06097 = [];
const vote_gene_macron_06097 = [];
const vote_gene_lepen_06097 = [];
const vote_gene_rejet_06097 = [];

async function chartIt06097(){
    await GraphDATA06097();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06097-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06097
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06097
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06097-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06097,vote_lepen_06097,vote_rejet_06097]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06097-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06097,vote_lepenpop_06097,vote_rejetpop_06097]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06097"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06097
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06097
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06097
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06098*/
/*------------------------------------------------------------------ */
async function GraphDATA06098() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06098.push(vote_macron); 
    vote_lepen_06098.push(vote_lepen);
    vote_rejet_06098.push(vote_rejet);
    vote_macronpop_06098.push(vote_macronMediane);
    vote_lepenpop_06098.push(vote_lepenMediane);
    vote_rejetpop_06098.push(vote_rejetMediane);
    name_Commune_06098.push(nameCommune);
    Pourcentage_06098.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06098.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06098.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06098.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06098.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06098 = [];
const vote_lepen_06098 = [];
const vote_rejet_06098 = [];
const vote_macronpop_06098 = [];
const vote_lepenpop_06098 = [];
const vote_rejetpop_06098 = [];
const name_Commune_06098 = [];
const Pourcentage_06098 = [];
const Pourcentage_rejet_06098 = [];
const vote_gene_macron_06098 = [];
const vote_gene_lepen_06098 = [];
const vote_gene_rejet_06098 = [];

async function chartIt06098(){
    await GraphDATA06098();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06098-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06098
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06098
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06098-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06098,vote_lepen_06098,vote_rejet_06098]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06098-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06098,vote_lepenpop_06098,vote_rejetpop_06098]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06098"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06098
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06098
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06098
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06099*/
/*------------------------------------------------------------------ */
async function GraphDATA06099() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06099.push(vote_macron); 
    vote_lepen_06099.push(vote_lepen);
    vote_rejet_06099.push(vote_rejet);
    vote_macronpop_06099.push(vote_macronMediane);
    vote_lepenpop_06099.push(vote_lepenMediane);
    vote_rejetpop_06099.push(vote_rejetMediane);
    name_Commune_06099.push(nameCommune);
    Pourcentage_06099.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06099.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06099.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06099.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06099.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06099 = [];
const vote_lepen_06099 = [];
const vote_rejet_06099 = [];
const vote_macronpop_06099 = [];
const vote_lepenpop_06099 = [];
const vote_rejetpop_06099 = [];
const name_Commune_06099 = [];
const Pourcentage_06099 = [];
const Pourcentage_rejet_06099 = [];
const vote_gene_macron_06099 = [];
const vote_gene_lepen_06099 = [];
const vote_gene_rejet_06099 = [];

async function chartIt06099(){
    await GraphDATA06099();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06099-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06099
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06099
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06099-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06099,vote_lepen_06099,vote_rejet_06099]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06099-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06099,vote_lepenpop_06099,vote_rejetpop_06099]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06099"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06099
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06099
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06099
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}