/********************************************************************** */
/*JS GRAPHIQUE FICHIER DATA */
/********************************************************************** */
const name_abs = "Abstentions";
const name_Blancs = "Blancs";
const name_Nul = "Nuls";
const name_rejete = "Rejeter";
const name_macron = "Macron";
const name_lepen = "Lepen";

chartIt03001();
chartIt03002();
chartIt03003();
chartIt03004();
chartIt03005();
chartIt03006();
chartIt03007();
chartIt03008();
chartIt03009();
chartIt03010();
chartIt03011();
chartIt03012();
chartIt03013();
chartIt03014();
chartIt03015();
chartIt03016();
chartIt03017();
chartIt03018();
chartIt03019();
chartIt03020();
chartIt03021();
chartIt03022();
chartIt03023();
chartIt03024();
chartIt03025();
chartIt03026();
chartIt03027();
chartIt03028();
chartIt03029();
chartIt03030();
chartIt03031();
chartIt03032();
chartIt03033();
chartIt03034();
chartIt03035();
chartIt03036();
chartIt03037();
chartIt03038();
chartIt03039();
chartIt03040();
chartIt03041();
chartIt03042();
chartIt03043();
chartIt03044();
chartIt03045();
chartIt03046();
chartIt03047();
chartIt03048();
chartIt03049();
chartIt03050();
chartIt03051();
chartIt03052();
chartIt03053();
chartIt03054();
chartIt03055();
chartIt03056();
chartIt03057();
chartIt03058();
chartIt03059();
chartIt03060();
chartIt03061();
chartIt03062();
chartIt03063();
chartIt03064();
chartIt03065();
chartIt03066();
chartIt03067();
chartIt03068();
chartIt03069();
chartIt03070();
chartIt03071();
chartIt03072();
chartIt03073();
chartIt03074();
chartIt03075();
chartIt03076();
chartIt03077();
chartIt03078();
chartIt03079();
chartIt03080();
chartIt03081();
chartIt03082();
chartIt03083();
chartIt03084();
chartIt03085();
chartIt03086();
chartIt03087();
chartIt03088();
chartIt03089();
chartIt03090();
chartIt03091();
chartIt03092();
chartIt03093();
chartIt03094();
chartIt03095();
chartIt03096();
chartIt03097();
chartIt03098();
chartIt03099();
/*------------------------------------------------------------------ */
/*COMMUNE 03001*/
/*------------------------------------------------------------------ */
async function GraphDATA03001() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03001.push(vote_macron); 
    vote_lepen_03001.push(vote_lepen);
    vote_rejet_03001.push(vote_rejet);
    vote_macronpop_03001.push(vote_macronMediane);
    vote_lepenpop_03001.push(vote_lepenMediane);
    vote_rejetpop_03001.push(vote_rejetMediane);
    name_Commune_03001.push(nameCommune);
    Pourcentage_03001.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03001.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03001.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03001.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03001.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03001 = [];
const vote_lepen_03001 = [];
const vote_rejet_03001 = [];
const vote_macronpop_03001 = [];
const vote_lepenpop_03001 = [];
const vote_rejetpop_03001 = [];
const name_Commune_03001 = [];
const Pourcentage_03001 = [];
const Pourcentage_rejet_03001 = [];
const vote_gene_macron_03001 = [];
const vote_gene_lepen_03001 = [];
const vote_gene_rejet_03001 = [];

async function chartIt03001(){
    await GraphDATA03001();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03001-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03001
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03001
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03001-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03001,vote_lepen_03001,vote_rejet_03001]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03001-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03001,vote_lepenpop_03001,vote_rejetpop_03001]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03001"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03001
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03001
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03001
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03002*/
/*------------------------------------------------------------------ */
async function GraphDATA03002() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03002.push(vote_macron); 
    vote_lepen_03002.push(vote_lepen);
    vote_rejet_03002.push(vote_rejet);
    vote_macronpop_03002.push(vote_macronMediane);
    vote_lepenpop_03002.push(vote_lepenMediane);
    vote_rejetpop_03002.push(vote_rejetMediane);
    name_Commune_03002.push(nameCommune);
    Pourcentage_03002.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03002.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03002.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03002.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03002.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03002 = [];
const vote_lepen_03002 = [];
const vote_rejet_03002 = [];
const vote_macronpop_03002 = [];
const vote_lepenpop_03002 = [];
const vote_rejetpop_03002 = [];
const name_Commune_03002 = [];
const Pourcentage_03002 = [];
const Pourcentage_rejet_03002 = [];
const vote_gene_macron_03002 = [];
const vote_gene_lepen_03002 = [];
const vote_gene_rejet_03002 = [];

async function chartIt03002(){
    await GraphDATA03002();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03002-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03002
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03002
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03002-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03002,vote_lepen_03002,vote_rejet_03002]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03002-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03002,vote_lepenpop_03002,vote_rejetpop_03002]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03002"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03002
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03002
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03002
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03003*/
/*------------------------------------------------------------------ */
async function GraphDATA03003() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03003.push(vote_macron); 
    vote_lepen_03003.push(vote_lepen);
    vote_rejet_03003.push(vote_rejet);
    vote_macronpop_03003.push(vote_macronMediane);
    vote_lepenpop_03003.push(vote_lepenMediane);
    vote_rejetpop_03003.push(vote_rejetMediane);
    name_Commune_03003.push(nameCommune);
    Pourcentage_03003.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03003.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03003.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03003.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03003.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03003 = [];
const vote_lepen_03003 = [];
const vote_rejet_03003 = [];
const vote_macronpop_03003 = [];
const vote_lepenpop_03003 = [];
const vote_rejetpop_03003 = [];
const name_Commune_03003 = [];
const Pourcentage_03003 = [];
const Pourcentage_rejet_03003 = [];
const vote_gene_macron_03003 = [];
const vote_gene_lepen_03003 = [];
const vote_gene_rejet_03003 = [];

async function chartIt03003(){
    await GraphDATA03003();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03003-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03003
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03003
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03003-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03003,vote_lepen_03003,vote_rejet_03003]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03003-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03003,vote_lepenpop_03003,vote_rejetpop_03003]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03003"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03003
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03003
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03003
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03004*/
/*------------------------------------------------------------------ */
async function GraphDATA03004() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03004.push(vote_macron); 
    vote_lepen_03004.push(vote_lepen);
    vote_rejet_03004.push(vote_rejet);
    vote_macronpop_03004.push(vote_macronMediane);
    vote_lepenpop_03004.push(vote_lepenMediane);
    vote_rejetpop_03004.push(vote_rejetMediane);
    name_Commune_03004.push(nameCommune);
    Pourcentage_03004.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03004.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03004.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03004.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03004.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03004 = [];
const vote_lepen_03004 = [];
const vote_rejet_03004 = [];
const vote_macronpop_03004 = [];
const vote_lepenpop_03004 = [];
const vote_rejetpop_03004 = [];
const name_Commune_03004 = [];
const Pourcentage_03004 = [];
const Pourcentage_rejet_03004 = [];
const vote_gene_macron_03004 = [];
const vote_gene_lepen_03004 = [];
const vote_gene_rejet_03004 = [];

async function chartIt03004(){
    await GraphDATA03004();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03004-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03004
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03004
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03004-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03004,vote_lepen_03004,vote_rejet_03004]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03004-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03004,vote_lepenpop_03004,vote_rejetpop_03004]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03004"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03004
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03004
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03004
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03005*/
/*------------------------------------------------------------------ */
async function GraphDATA03005() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03005.push(vote_macron); 
    vote_lepen_03005.push(vote_lepen);
    vote_rejet_03005.push(vote_rejet);
    vote_macronpop_03005.push(vote_macronMediane);
    vote_lepenpop_03005.push(vote_lepenMediane);
    vote_rejetpop_03005.push(vote_rejetMediane);
    name_Commune_03005.push(nameCommune);
    Pourcentage_03005.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03005.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03005.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03005.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03005.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03005 = [];
const vote_lepen_03005 = [];
const vote_rejet_03005 = [];
const vote_macronpop_03005 = [];
const vote_lepenpop_03005 = [];
const vote_rejetpop_03005 = [];
const name_Commune_03005 = [];
const Pourcentage_03005 = [];
const Pourcentage_rejet_03005 = [];
const vote_gene_macron_03005 = [];
const vote_gene_lepen_03005 = [];
const vote_gene_rejet_03005 = [];

async function chartIt03005(){
    await GraphDATA03005();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03005-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03005
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03005
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03005-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03005,vote_lepen_03005,vote_rejet_03005]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03005-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03005,vote_lepenpop_03005,vote_rejetpop_03005]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03005"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03005
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03005
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03005
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03006*/
/*------------------------------------------------------------------ */
async function GraphDATA03006() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03006.push(vote_macron); 
    vote_lepen_03006.push(vote_lepen);
    vote_rejet_03006.push(vote_rejet);
    vote_macronpop_03006.push(vote_macronMediane);
    vote_lepenpop_03006.push(vote_lepenMediane);
    vote_rejetpop_03006.push(vote_rejetMediane);
    name_Commune_03006.push(nameCommune);
    Pourcentage_03006.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03006.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03006.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03006.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03006.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03006 = [];
const vote_lepen_03006 = [];
const vote_rejet_03006 = [];
const vote_macronpop_03006 = [];
const vote_lepenpop_03006 = [];
const vote_rejetpop_03006 = [];
const name_Commune_03006 = [];
const Pourcentage_03006 = [];
const Pourcentage_rejet_03006 = [];
const vote_gene_macron_03006 = [];
const vote_gene_lepen_03006 = [];
const vote_gene_rejet_03006 = [];

async function chartIt03006(){
    await GraphDATA03006();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03006-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03006
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03006
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03006-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03006,vote_lepen_03006,vote_rejet_03006]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03006-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03006,vote_lepenpop_03006,vote_rejetpop_03006]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03006"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03006
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03006
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03006
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03007*/
/*------------------------------------------------------------------ */
async function GraphDATA03007() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03007.push(vote_macron); 
    vote_lepen_03007.push(vote_lepen);
    vote_rejet_03007.push(vote_rejet);
    vote_macronpop_03007.push(vote_macronMediane);
    vote_lepenpop_03007.push(vote_lepenMediane);
    vote_rejetpop_03007.push(vote_rejetMediane);
    name_Commune_03007.push(nameCommune);
    Pourcentage_03007.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03007.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03007.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03007.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03007.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03007 = [];
const vote_lepen_03007 = [];
const vote_rejet_03007 = [];
const vote_macronpop_03007 = [];
const vote_lepenpop_03007 = [];
const vote_rejetpop_03007 = [];
const name_Commune_03007 = [];
const Pourcentage_03007 = [];
const Pourcentage_rejet_03007 = [];
const vote_gene_macron_03007 = [];
const vote_gene_lepen_03007 = [];
const vote_gene_rejet_03007 = [];

async function chartIt03007(){
    await GraphDATA03007();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03007-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03007
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03007
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03007-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03007,vote_lepen_03007,vote_rejet_03007]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03007-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03007,vote_lepenpop_03007,vote_rejetpop_03007]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03007"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03007
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03007
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03007
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03008*/
/*------------------------------------------------------------------ */
async function GraphDATA03008() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03008.push(vote_macron); 
    vote_lepen_03008.push(vote_lepen);
    vote_rejet_03008.push(vote_rejet);
    vote_macronpop_03008.push(vote_macronMediane);
    vote_lepenpop_03008.push(vote_lepenMediane);
    vote_rejetpop_03008.push(vote_rejetMediane);
    name_Commune_03008.push(nameCommune);
    Pourcentage_03008.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03008.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03008.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03008.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03008.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03008 = [];
const vote_lepen_03008 = [];
const vote_rejet_03008 = [];
const vote_macronpop_03008 = [];
const vote_lepenpop_03008 = [];
const vote_rejetpop_03008 = [];
const name_Commune_03008 = [];
const Pourcentage_03008 = [];
const Pourcentage_rejet_03008 = [];
const vote_gene_macron_03008 = [];
const vote_gene_lepen_03008 = [];
const vote_gene_rejet_03008 = [];

async function chartIt03008(){
    await GraphDATA03008();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03008-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03008
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03008
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03008-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03008,vote_lepen_03008,vote_rejet_03008]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03008-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03008,vote_lepenpop_03008,vote_rejetpop_03008]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03008"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03008
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03008
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03008
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03009*/
/*------------------------------------------------------------------ */
async function GraphDATA03009() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03009.push(vote_macron); 
    vote_lepen_03009.push(vote_lepen);
    vote_rejet_03009.push(vote_rejet);
    vote_macronpop_03009.push(vote_macronMediane);
    vote_lepenpop_03009.push(vote_lepenMediane);
    vote_rejetpop_03009.push(vote_rejetMediane);
    name_Commune_03009.push(nameCommune);
    Pourcentage_03009.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03009.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03009.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03009.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03009.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03009 = [];
const vote_lepen_03009 = [];
const vote_rejet_03009 = [];
const vote_macronpop_03009 = [];
const vote_lepenpop_03009 = [];
const vote_rejetpop_03009 = [];
const name_Commune_03009 = [];
const Pourcentage_03009 = [];
const Pourcentage_rejet_03009 = [];
const vote_gene_macron_03009 = [];
const vote_gene_lepen_03009 = [];
const vote_gene_rejet_03009 = [];

async function chartIt03009(){
    await GraphDATA03009();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03009-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03009
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03009
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03009-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03009,vote_lepen_03009,vote_rejet_03009]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03009-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03009,vote_lepenpop_03009,vote_rejetpop_03009]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03009"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03009
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03009
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03009
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03010*/
/*------------------------------------------------------------------ */
async function GraphDATA03010() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03010.push(vote_macron); 
    vote_lepen_03010.push(vote_lepen);
    vote_rejet_03010.push(vote_rejet);
    vote_macronpop_03010.push(vote_macronMediane);
    vote_lepenpop_03010.push(vote_lepenMediane);
    vote_rejetpop_03010.push(vote_rejetMediane);
    name_Commune_03010.push(nameCommune);
    Pourcentage_03010.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03010.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03010.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03010.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03010.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03010 = [];
const vote_lepen_03010 = [];
const vote_rejet_03010 = [];
const vote_macronpop_03010 = [];
const vote_lepenpop_03010 = [];
const vote_rejetpop_03010 = [];
const name_Commune_03010 = [];
const Pourcentage_03010 = [];
const Pourcentage_rejet_03010 = [];
const vote_gene_macron_03010 = [];
const vote_gene_lepen_03010 = [];
const vote_gene_rejet_03010 = [];

async function chartIt03010(){
    await GraphDATA03010();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03010-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03010
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03010
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03010-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03010,vote_lepen_03010,vote_rejet_03010]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03010-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03010,vote_lepenpop_03010,vote_rejetpop_03010]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03010"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03010
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03010
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03010
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03011*/
/*------------------------------------------------------------------ */
async function GraphDATA03011() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03011.push(vote_macron); 
    vote_lepen_03011.push(vote_lepen);
    vote_rejet_03011.push(vote_rejet);
    vote_macronpop_03011.push(vote_macronMediane);
    vote_lepenpop_03011.push(vote_lepenMediane);
    vote_rejetpop_03011.push(vote_rejetMediane);
    name_Commune_03011.push(nameCommune);
    Pourcentage_03011.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03011.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03011.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03011.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03011.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03011 = [];
const vote_lepen_03011 = [];
const vote_rejet_03011 = [];
const vote_macronpop_03011 = [];
const vote_lepenpop_03011 = [];
const vote_rejetpop_03011 = [];
const name_Commune_03011 = [];
const Pourcentage_03011 = [];
const Pourcentage_rejet_03011 = [];
const vote_gene_macron_03011 = [];
const vote_gene_lepen_03011 = [];
const vote_gene_rejet_03011 = [];

async function chartIt03011(){
    await GraphDATA03011();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03011-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03011
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03011
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03011-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03011,vote_lepen_03011,vote_rejet_03011]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03011-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03011,vote_lepenpop_03011,vote_rejetpop_03011]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03011"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03011
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03011
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03011
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03012*/
/*------------------------------------------------------------------ */
async function GraphDATA03012() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03012.push(vote_macron); 
    vote_lepen_03012.push(vote_lepen);
    vote_rejet_03012.push(vote_rejet);
    vote_macronpop_03012.push(vote_macronMediane);
    vote_lepenpop_03012.push(vote_lepenMediane);
    vote_rejetpop_03012.push(vote_rejetMediane);
    name_Commune_03012.push(nameCommune);
    Pourcentage_03012.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03012.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03012.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03012.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03012.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03012 = [];
const vote_lepen_03012 = [];
const vote_rejet_03012 = [];
const vote_macronpop_03012 = [];
const vote_lepenpop_03012 = [];
const vote_rejetpop_03012 = [];
const name_Commune_03012 = [];
const Pourcentage_03012 = [];
const Pourcentage_rejet_03012 = [];
const vote_gene_macron_03012 = [];
const vote_gene_lepen_03012 = [];
const vote_gene_rejet_03012 = [];

async function chartIt03012(){
    await GraphDATA03012();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03012-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03012
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03012
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03012-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03012,vote_lepen_03012,vote_rejet_03012]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03012-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03012,vote_lepenpop_03012,vote_rejetpop_03012]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03012"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03012
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03012
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03012
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03013*/
/*------------------------------------------------------------------ */
async function GraphDATA03013() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03013.push(vote_macron); 
    vote_lepen_03013.push(vote_lepen);
    vote_rejet_03013.push(vote_rejet);
    vote_macronpop_03013.push(vote_macronMediane);
    vote_lepenpop_03013.push(vote_lepenMediane);
    vote_rejetpop_03013.push(vote_rejetMediane);
    name_Commune_03013.push(nameCommune);
    Pourcentage_03013.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03013.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03013.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03013.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03013.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03013 = [];
const vote_lepen_03013 = [];
const vote_rejet_03013 = [];
const vote_macronpop_03013 = [];
const vote_lepenpop_03013 = [];
const vote_rejetpop_03013 = [];
const name_Commune_03013 = [];
const Pourcentage_03013 = [];
const Pourcentage_rejet_03013 = [];
const vote_gene_macron_03013 = [];
const vote_gene_lepen_03013 = [];
const vote_gene_rejet_03013 = [];

async function chartIt03013(){
    await GraphDATA03013();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03013-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03013
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03013
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03013-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03013,vote_lepen_03013,vote_rejet_03013]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03013-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03013,vote_lepenpop_03013,vote_rejetpop_03013]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03013"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03013
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03013
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03013
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03014*/
/*------------------------------------------------------------------ */
async function GraphDATA03014() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03014.push(vote_macron); 
    vote_lepen_03014.push(vote_lepen);
    vote_rejet_03014.push(vote_rejet);
    vote_macronpop_03014.push(vote_macronMediane);
    vote_lepenpop_03014.push(vote_lepenMediane);
    vote_rejetpop_03014.push(vote_rejetMediane);
    name_Commune_03014.push(nameCommune);
    Pourcentage_03014.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03014.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03014.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03014.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03014.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03014 = [];
const vote_lepen_03014 = [];
const vote_rejet_03014 = [];
const vote_macronpop_03014 = [];
const vote_lepenpop_03014 = [];
const vote_rejetpop_03014 = [];
const name_Commune_03014 = [];
const Pourcentage_03014 = [];
const Pourcentage_rejet_03014 = [];
const vote_gene_macron_03014 = [];
const vote_gene_lepen_03014 = [];
const vote_gene_rejet_03014 = [];

async function chartIt03014(){
    await GraphDATA03014();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03014-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03014
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03014
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03014-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03014,vote_lepen_03014,vote_rejet_03014]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03014-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03014,vote_lepenpop_03014,vote_rejetpop_03014]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03014"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03014
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03014
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03014
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03015*/
/*------------------------------------------------------------------ */
async function GraphDATA03015() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03015.push(vote_macron); 
    vote_lepen_03015.push(vote_lepen);
    vote_rejet_03015.push(vote_rejet);
    vote_macronpop_03015.push(vote_macronMediane);
    vote_lepenpop_03015.push(vote_lepenMediane);
    vote_rejetpop_03015.push(vote_rejetMediane);
    name_Commune_03015.push(nameCommune);
    Pourcentage_03015.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03015.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03015.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03015.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03015.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03015 = [];
const vote_lepen_03015 = [];
const vote_rejet_03015 = [];
const vote_macronpop_03015 = [];
const vote_lepenpop_03015 = [];
const vote_rejetpop_03015 = [];
const name_Commune_03015 = [];
const Pourcentage_03015 = [];
const Pourcentage_rejet_03015 = [];
const vote_gene_macron_03015 = [];
const vote_gene_lepen_03015 = [];
const vote_gene_rejet_03015 = [];

async function chartIt03015(){
    await GraphDATA03015();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03015-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03015
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03015
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03015-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03015,vote_lepen_03015,vote_rejet_03015]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03015-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03015,vote_lepenpop_03015,vote_rejetpop_03015]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03015"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03015
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03015
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03015
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03016*/
/*------------------------------------------------------------------ */
async function GraphDATA03016() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03016.push(vote_macron); 
    vote_lepen_03016.push(vote_lepen);
    vote_rejet_03016.push(vote_rejet);
    vote_macronpop_03016.push(vote_macronMediane);
    vote_lepenpop_03016.push(vote_lepenMediane);
    vote_rejetpop_03016.push(vote_rejetMediane);
    name_Commune_03016.push(nameCommune);
    Pourcentage_03016.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03016.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03016.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03016.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03016.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03016 = [];
const vote_lepen_03016 = [];
const vote_rejet_03016 = [];
const vote_macronpop_03016 = [];
const vote_lepenpop_03016 = [];
const vote_rejetpop_03016 = [];
const name_Commune_03016 = [];
const Pourcentage_03016 = [];
const Pourcentage_rejet_03016 = [];
const vote_gene_macron_03016 = [];
const vote_gene_lepen_03016 = [];
const vote_gene_rejet_03016 = [];

async function chartIt03016(){
    await GraphDATA03016();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03016-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03016
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03016
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03016-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03016,vote_lepen_03016,vote_rejet_03016]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03016-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03016,vote_lepenpop_03016,vote_rejetpop_03016]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03016"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03016
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03016
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03016
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03017*/
/*------------------------------------------------------------------ */
async function GraphDATA03017() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03017.push(vote_macron); 
    vote_lepen_03017.push(vote_lepen);
    vote_rejet_03017.push(vote_rejet);
    vote_macronpop_03017.push(vote_macronMediane);
    vote_lepenpop_03017.push(vote_lepenMediane);
    vote_rejetpop_03017.push(vote_rejetMediane);
    name_Commune_03017.push(nameCommune);
    Pourcentage_03017.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03017.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03017.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03017.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03017.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03017 = [];
const vote_lepen_03017 = [];
const vote_rejet_03017 = [];
const vote_macronpop_03017 = [];
const vote_lepenpop_03017 = [];
const vote_rejetpop_03017 = [];
const name_Commune_03017 = [];
const Pourcentage_03017 = [];
const Pourcentage_rejet_03017 = [];
const vote_gene_macron_03017 = [];
const vote_gene_lepen_03017 = [];
const vote_gene_rejet_03017 = [];

async function chartIt03017(){
    await GraphDATA03017();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03017-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03017
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03017
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03017-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03017,vote_lepen_03017,vote_rejet_03017]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03017-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03017,vote_lepenpop_03017,vote_rejetpop_03017]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03017"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03017
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03017
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03017
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03018*/
/*------------------------------------------------------------------ */
async function GraphDATA03018() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03018.push(vote_macron); 
    vote_lepen_03018.push(vote_lepen);
    vote_rejet_03018.push(vote_rejet);
    vote_macronpop_03018.push(vote_macronMediane);
    vote_lepenpop_03018.push(vote_lepenMediane);
    vote_rejetpop_03018.push(vote_rejetMediane);
    name_Commune_03018.push(nameCommune);
    Pourcentage_03018.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03018.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03018.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03018.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03018.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03018 = [];
const vote_lepen_03018 = [];
const vote_rejet_03018 = [];
const vote_macronpop_03018 = [];
const vote_lepenpop_03018 = [];
const vote_rejetpop_03018 = [];
const name_Commune_03018 = [];
const Pourcentage_03018 = [];
const Pourcentage_rejet_03018 = [];
const vote_gene_macron_03018 = [];
const vote_gene_lepen_03018 = [];
const vote_gene_rejet_03018 = [];

async function chartIt03018(){
    await GraphDATA03018();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03018-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03018
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03018
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03018-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03018,vote_lepen_03018,vote_rejet_03018]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03018-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03018,vote_lepenpop_03018,vote_rejetpop_03018]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03018"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03018
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03018
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03018
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03019*/
/*------------------------------------------------------------------ */
async function GraphDATA03019() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03019.push(vote_macron); 
    vote_lepen_03019.push(vote_lepen);
    vote_rejet_03019.push(vote_rejet);
    vote_macronpop_03019.push(vote_macronMediane);
    vote_lepenpop_03019.push(vote_lepenMediane);
    vote_rejetpop_03019.push(vote_rejetMediane);
    name_Commune_03019.push(nameCommune);
    Pourcentage_03019.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03019.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03019.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03019.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03019.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03019 = [];
const vote_lepen_03019 = [];
const vote_rejet_03019 = [];
const vote_macronpop_03019 = [];
const vote_lepenpop_03019 = [];
const vote_rejetpop_03019 = [];
const name_Commune_03019 = [];
const Pourcentage_03019 = [];
const Pourcentage_rejet_03019 = [];
const vote_gene_macron_03019 = [];
const vote_gene_lepen_03019 = [];
const vote_gene_rejet_03019 = [];

async function chartIt03019(){
    await GraphDATA03019();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03019-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03019
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03019
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03019-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03019,vote_lepen_03019,vote_rejet_03019]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03019-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03019,vote_lepenpop_03019,vote_rejetpop_03019]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03019"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03019
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03019
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03019
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03020*/
/*------------------------------------------------------------------ */
async function GraphDATA03020() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03020.push(vote_macron); 
    vote_lepen_03020.push(vote_lepen);
    vote_rejet_03020.push(vote_rejet);
    vote_macronpop_03020.push(vote_macronMediane);
    vote_lepenpop_03020.push(vote_lepenMediane);
    vote_rejetpop_03020.push(vote_rejetMediane);
    name_Commune_03020.push(nameCommune);
    Pourcentage_03020.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03020.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03020.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03020.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03020.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03020 = [];
const vote_lepen_03020 = [];
const vote_rejet_03020 = [];
const vote_macronpop_03020 = [];
const vote_lepenpop_03020 = [];
const vote_rejetpop_03020 = [];
const name_Commune_03020 = [];
const Pourcentage_03020 = [];
const Pourcentage_rejet_03020 = [];
const vote_gene_macron_03020 = [];
const vote_gene_lepen_03020 = [];
const vote_gene_rejet_03020 = [];

async function chartIt03020(){
    await GraphDATA03020();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03020-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03020
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03020
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03020-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03020,vote_lepen_03020,vote_rejet_03020]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03020-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03020,vote_lepenpop_03020,vote_rejetpop_03020]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03020"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03020
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03020
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03020
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03021*/
/*------------------------------------------------------------------ */
async function GraphDATA03021() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03021.push(vote_macron); 
    vote_lepen_03021.push(vote_lepen);
    vote_rejet_03021.push(vote_rejet);
    vote_macronpop_03021.push(vote_macronMediane);
    vote_lepenpop_03021.push(vote_lepenMediane);
    vote_rejetpop_03021.push(vote_rejetMediane);
    name_Commune_03021.push(nameCommune);
    Pourcentage_03021.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03021.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03021.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03021.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03021.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03021 = [];
const vote_lepen_03021 = [];
const vote_rejet_03021 = [];
const vote_macronpop_03021 = [];
const vote_lepenpop_03021 = [];
const vote_rejetpop_03021 = [];
const name_Commune_03021 = [];
const Pourcentage_03021 = [];
const Pourcentage_rejet_03021 = [];
const vote_gene_macron_03021 = [];
const vote_gene_lepen_03021 = [];
const vote_gene_rejet_03021 = [];

async function chartIt03021(){
    await GraphDATA03021();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03021-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03021
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03021
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03021-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03021,vote_lepen_03021,vote_rejet_03021]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03021-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03021,vote_lepenpop_03021,vote_rejetpop_03021]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03021"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03021
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03021
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03021
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03022*/
/*------------------------------------------------------------------ */
async function GraphDATA03022() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03022.push(vote_macron); 
    vote_lepen_03022.push(vote_lepen);
    vote_rejet_03022.push(vote_rejet);
    vote_macronpop_03022.push(vote_macronMediane);
    vote_lepenpop_03022.push(vote_lepenMediane);
    vote_rejetpop_03022.push(vote_rejetMediane);
    name_Commune_03022.push(nameCommune);
    Pourcentage_03022.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03022.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03022.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03022.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03022.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03022 = [];
const vote_lepen_03022 = [];
const vote_rejet_03022 = [];
const vote_macronpop_03022 = [];
const vote_lepenpop_03022 = [];
const vote_rejetpop_03022 = [];
const name_Commune_03022 = [];
const Pourcentage_03022 = [];
const Pourcentage_rejet_03022 = [];
const vote_gene_macron_03022 = [];
const vote_gene_lepen_03022 = [];
const vote_gene_rejet_03022 = [];

async function chartIt03022(){
    await GraphDATA03022();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03022-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03022
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03022
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03022-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03022,vote_lepen_03022,vote_rejet_03022]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03022-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03022,vote_lepenpop_03022,vote_rejetpop_03022]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03022"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03022
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03022
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03022
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03023*/
/*------------------------------------------------------------------ */
async function GraphDATA03023() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03023.push(vote_macron); 
    vote_lepen_03023.push(vote_lepen);
    vote_rejet_03023.push(vote_rejet);
    vote_macronpop_03023.push(vote_macronMediane);
    vote_lepenpop_03023.push(vote_lepenMediane);
    vote_rejetpop_03023.push(vote_rejetMediane);
    name_Commune_03023.push(nameCommune);
    Pourcentage_03023.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03023.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03023.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03023.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03023.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03023 = [];
const vote_lepen_03023 = [];
const vote_rejet_03023 = [];
const vote_macronpop_03023 = [];
const vote_lepenpop_03023 = [];
const vote_rejetpop_03023 = [];
const name_Commune_03023 = [];
const Pourcentage_03023 = [];
const Pourcentage_rejet_03023 = [];
const vote_gene_macron_03023 = [];
const vote_gene_lepen_03023 = [];
const vote_gene_rejet_03023 = [];

async function chartIt03023(){
    await GraphDATA03023();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03023-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03023
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03023
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03023-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03023,vote_lepen_03023,vote_rejet_03023]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03023-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03023,vote_lepenpop_03023,vote_rejetpop_03023]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03023"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03023
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03023
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03023
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03024*/
/*------------------------------------------------------------------ */
async function GraphDATA03024() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03024.push(vote_macron); 
    vote_lepen_03024.push(vote_lepen);
    vote_rejet_03024.push(vote_rejet);
    vote_macronpop_03024.push(vote_macronMediane);
    vote_lepenpop_03024.push(vote_lepenMediane);
    vote_rejetpop_03024.push(vote_rejetMediane);
    name_Commune_03024.push(nameCommune);
    Pourcentage_03024.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03024.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03024.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03024.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03024.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03024 = [];
const vote_lepen_03024 = [];
const vote_rejet_03024 = [];
const vote_macronpop_03024 = [];
const vote_lepenpop_03024 = [];
const vote_rejetpop_03024 = [];
const name_Commune_03024 = [];
const Pourcentage_03024 = [];
const Pourcentage_rejet_03024 = [];
const vote_gene_macron_03024 = [];
const vote_gene_lepen_03024 = [];
const vote_gene_rejet_03024 = [];

async function chartIt03024(){
    await GraphDATA03024();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03024-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03024
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03024
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03024-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03024,vote_lepen_03024,vote_rejet_03024]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03024-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03024,vote_lepenpop_03024,vote_rejetpop_03024]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03024"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03024
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03024
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03024
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03025*/
/*------------------------------------------------------------------ */
async function GraphDATA03025() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03025.push(vote_macron); 
    vote_lepen_03025.push(vote_lepen);
    vote_rejet_03025.push(vote_rejet);
    vote_macronpop_03025.push(vote_macronMediane);
    vote_lepenpop_03025.push(vote_lepenMediane);
    vote_rejetpop_03025.push(vote_rejetMediane);
    name_Commune_03025.push(nameCommune);
    Pourcentage_03025.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03025.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03025.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03025.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03025.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03025 = [];
const vote_lepen_03025 = [];
const vote_rejet_03025 = [];
const vote_macronpop_03025 = [];
const vote_lepenpop_03025 = [];
const vote_rejetpop_03025 = [];
const name_Commune_03025 = [];
const Pourcentage_03025 = [];
const Pourcentage_rejet_03025 = [];
const vote_gene_macron_03025 = [];
const vote_gene_lepen_03025 = [];
const vote_gene_rejet_03025 = [];

async function chartIt03025(){
    await GraphDATA03025();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03025-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03025
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03025
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03025-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03025,vote_lepen_03025,vote_rejet_03025]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03025-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03025,vote_lepenpop_03025,vote_rejetpop_03025]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03025"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03025
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03025
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03025
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03026*/
/*------------------------------------------------------------------ */
async function GraphDATA03026() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03026.push(vote_macron); 
    vote_lepen_03026.push(vote_lepen);
    vote_rejet_03026.push(vote_rejet);
    vote_macronpop_03026.push(vote_macronMediane);
    vote_lepenpop_03026.push(vote_lepenMediane);
    vote_rejetpop_03026.push(vote_rejetMediane);
    name_Commune_03026.push(nameCommune);
    Pourcentage_03026.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03026.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03026.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03026.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03026.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03026 = [];
const vote_lepen_03026 = [];
const vote_rejet_03026 = [];
const vote_macronpop_03026 = [];
const vote_lepenpop_03026 = [];
const vote_rejetpop_03026 = [];
const name_Commune_03026 = [];
const Pourcentage_03026 = [];
const Pourcentage_rejet_03026 = [];
const vote_gene_macron_03026 = [];
const vote_gene_lepen_03026 = [];
const vote_gene_rejet_03026 = [];

async function chartIt03026(){
    await GraphDATA03026();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03026-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03026
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03026
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03026-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03026,vote_lepen_03026,vote_rejet_03026]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03026-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03026,vote_lepenpop_03026,vote_rejetpop_03026]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03026"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03026
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03026
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03026
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03027*/
/*------------------------------------------------------------------ */
async function GraphDATA03027() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03027.push(vote_macron); 
    vote_lepen_03027.push(vote_lepen);
    vote_rejet_03027.push(vote_rejet);
    vote_macronpop_03027.push(vote_macronMediane);
    vote_lepenpop_03027.push(vote_lepenMediane);
    vote_rejetpop_03027.push(vote_rejetMediane);
    name_Commune_03027.push(nameCommune);
    Pourcentage_03027.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03027.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03027.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03027.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03027.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03027 = [];
const vote_lepen_03027 = [];
const vote_rejet_03027 = [];
const vote_macronpop_03027 = [];
const vote_lepenpop_03027 = [];
const vote_rejetpop_03027 = [];
const name_Commune_03027 = [];
const Pourcentage_03027 = [];
const Pourcentage_rejet_03027 = [];
const vote_gene_macron_03027 = [];
const vote_gene_lepen_03027 = [];
const vote_gene_rejet_03027 = [];

async function chartIt03027(){
    await GraphDATA03027();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03027-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03027
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03027
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03027-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03027,vote_lepen_03027,vote_rejet_03027]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03027-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03027,vote_lepenpop_03027,vote_rejetpop_03027]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03027"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03027
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03027
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03027
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03028*/
/*------------------------------------------------------------------ */
async function GraphDATA03028() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03028.push(vote_macron); 
    vote_lepen_03028.push(vote_lepen);
    vote_rejet_03028.push(vote_rejet);
    vote_macronpop_03028.push(vote_macronMediane);
    vote_lepenpop_03028.push(vote_lepenMediane);
    vote_rejetpop_03028.push(vote_rejetMediane);
    name_Commune_03028.push(nameCommune);
    Pourcentage_03028.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03028.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03028.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03028.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03028.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03028 = [];
const vote_lepen_03028 = [];
const vote_rejet_03028 = [];
const vote_macronpop_03028 = [];
const vote_lepenpop_03028 = [];
const vote_rejetpop_03028 = [];
const name_Commune_03028 = [];
const Pourcentage_03028 = [];
const Pourcentage_rejet_03028 = [];
const vote_gene_macron_03028 = [];
const vote_gene_lepen_03028 = [];
const vote_gene_rejet_03028 = [];

async function chartIt03028(){
    await GraphDATA03028();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03028-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03028
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03028
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03028-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03028,vote_lepen_03028,vote_rejet_03028]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03028-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03028,vote_lepenpop_03028,vote_rejetpop_03028]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03028"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03028
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03028
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03028
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03029*/
/*------------------------------------------------------------------ */
async function GraphDATA03029() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03029.push(vote_macron); 
    vote_lepen_03029.push(vote_lepen);
    vote_rejet_03029.push(vote_rejet);
    vote_macronpop_03029.push(vote_macronMediane);
    vote_lepenpop_03029.push(vote_lepenMediane);
    vote_rejetpop_03029.push(vote_rejetMediane);
    name_Commune_03029.push(nameCommune);
    Pourcentage_03029.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03029.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03029.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03029.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03029.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03029 = [];
const vote_lepen_03029 = [];
const vote_rejet_03029 = [];
const vote_macronpop_03029 = [];
const vote_lepenpop_03029 = [];
const vote_rejetpop_03029 = [];
const name_Commune_03029 = [];
const Pourcentage_03029 = [];
const Pourcentage_rejet_03029 = [];
const vote_gene_macron_03029 = [];
const vote_gene_lepen_03029 = [];
const vote_gene_rejet_03029 = [];

async function chartIt03029(){
    await GraphDATA03029();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03029-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03029
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03029
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03029-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03029,vote_lepen_03029,vote_rejet_03029]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03029-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03029,vote_lepenpop_03029,vote_rejetpop_03029]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03029"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03029
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03029
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03029
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03030*/
/*------------------------------------------------------------------ */
async function GraphDATA03030() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03030.push(vote_macron); 
    vote_lepen_03030.push(vote_lepen);
    vote_rejet_03030.push(vote_rejet);
    vote_macronpop_03030.push(vote_macronMediane);
    vote_lepenpop_03030.push(vote_lepenMediane);
    vote_rejetpop_03030.push(vote_rejetMediane);
    name_Commune_03030.push(nameCommune);
    Pourcentage_03030.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03030.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03030.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03030.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03030.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03030 = [];
const vote_lepen_03030 = [];
const vote_rejet_03030 = [];
const vote_macronpop_03030 = [];
const vote_lepenpop_03030 = [];
const vote_rejetpop_03030 = [];
const name_Commune_03030 = [];
const Pourcentage_03030 = [];
const Pourcentage_rejet_03030 = [];
const vote_gene_macron_03030 = [];
const vote_gene_lepen_03030 = [];
const vote_gene_rejet_03030 = [];

async function chartIt03030(){
    await GraphDATA03030();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03030-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03030
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03030
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03030-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03030,vote_lepen_03030,vote_rejet_03030]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03030-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03030,vote_lepenpop_03030,vote_rejetpop_03030]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03030"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03030
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03030
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03030
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03031*/
/*------------------------------------------------------------------ */
async function GraphDATA03031() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03031.push(vote_macron); 
    vote_lepen_03031.push(vote_lepen);
    vote_rejet_03031.push(vote_rejet);
    vote_macronpop_03031.push(vote_macronMediane);
    vote_lepenpop_03031.push(vote_lepenMediane);
    vote_rejetpop_03031.push(vote_rejetMediane);
    name_Commune_03031.push(nameCommune);
    Pourcentage_03031.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03031.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03031.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03031.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03031.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03031 = [];
const vote_lepen_03031 = [];
const vote_rejet_03031 = [];
const vote_macronpop_03031 = [];
const vote_lepenpop_03031 = [];
const vote_rejetpop_03031 = [];
const name_Commune_03031 = [];
const Pourcentage_03031 = [];
const Pourcentage_rejet_03031 = [];
const vote_gene_macron_03031 = [];
const vote_gene_lepen_03031 = [];
const vote_gene_rejet_03031 = [];

async function chartIt03031(){
    await GraphDATA03031();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03031-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03031
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03031
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03031-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03031,vote_lepen_03031,vote_rejet_03031]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03031-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03031,vote_lepenpop_03031,vote_rejetpop_03031]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03031"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03031
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03031
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03031
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03032*/
/*------------------------------------------------------------------ */
async function GraphDATA03032() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03032.push(vote_macron); 
    vote_lepen_03032.push(vote_lepen);
    vote_rejet_03032.push(vote_rejet);
    vote_macronpop_03032.push(vote_macronMediane);
    vote_lepenpop_03032.push(vote_lepenMediane);
    vote_rejetpop_03032.push(vote_rejetMediane);
    name_Commune_03032.push(nameCommune);
    Pourcentage_03032.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03032.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03032.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03032.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03032.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03032 = [];
const vote_lepen_03032 = [];
const vote_rejet_03032 = [];
const vote_macronpop_03032 = [];
const vote_lepenpop_03032 = [];
const vote_rejetpop_03032 = [];
const name_Commune_03032 = [];
const Pourcentage_03032 = [];
const Pourcentage_rejet_03032 = [];
const vote_gene_macron_03032 = [];
const vote_gene_lepen_03032 = [];
const vote_gene_rejet_03032 = [];

async function chartIt03032(){
    await GraphDATA03032();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03032-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03032
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03032
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03032-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03032,vote_lepen_03032,vote_rejet_03032]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03032-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03032,vote_lepenpop_03032,vote_rejetpop_03032]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03032"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03032
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03032
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03032
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03033*/
/*------------------------------------------------------------------ */
async function GraphDATA03033() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03033.push(vote_macron); 
    vote_lepen_03033.push(vote_lepen);
    vote_rejet_03033.push(vote_rejet);
    vote_macronpop_03033.push(vote_macronMediane);
    vote_lepenpop_03033.push(vote_lepenMediane);
    vote_rejetpop_03033.push(vote_rejetMediane);
    name_Commune_03033.push(nameCommune);
    Pourcentage_03033.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03033.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03033.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03033.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03033.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03033 = [];
const vote_lepen_03033 = [];
const vote_rejet_03033 = [];
const vote_macronpop_03033 = [];
const vote_lepenpop_03033 = [];
const vote_rejetpop_03033 = [];
const name_Commune_03033 = [];
const Pourcentage_03033 = [];
const Pourcentage_rejet_03033 = [];
const vote_gene_macron_03033 = [];
const vote_gene_lepen_03033 = [];
const vote_gene_rejet_03033 = [];

async function chartIt03033(){
    await GraphDATA03033();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03033-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03033
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03033
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03033-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03033,vote_lepen_03033,vote_rejet_03033]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03033-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03033,vote_lepenpop_03033,vote_rejetpop_03033]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03033"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03033
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03033
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03033
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03034*/
/*------------------------------------------------------------------ */
async function GraphDATA03034() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03034.push(vote_macron); 
    vote_lepen_03034.push(vote_lepen);
    vote_rejet_03034.push(vote_rejet);
    vote_macronpop_03034.push(vote_macronMediane);
    vote_lepenpop_03034.push(vote_lepenMediane);
    vote_rejetpop_03034.push(vote_rejetMediane);
    name_Commune_03034.push(nameCommune);
    Pourcentage_03034.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03034.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03034.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03034.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03034.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03034 = [];
const vote_lepen_03034 = [];
const vote_rejet_03034 = [];
const vote_macronpop_03034 = [];
const vote_lepenpop_03034 = [];
const vote_rejetpop_03034 = [];
const name_Commune_03034 = [];
const Pourcentage_03034 = [];
const Pourcentage_rejet_03034 = [];
const vote_gene_macron_03034 = [];
const vote_gene_lepen_03034 = [];
const vote_gene_rejet_03034 = [];

async function chartIt03034(){
    await GraphDATA03034();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03034-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03034
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03034
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03034-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03034,vote_lepen_03034,vote_rejet_03034]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03034-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03034,vote_lepenpop_03034,vote_rejetpop_03034]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03034"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03034
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03034
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03034
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03035*/
/*------------------------------------------------------------------ */
async function GraphDATA03035() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03035.push(vote_macron); 
    vote_lepen_03035.push(vote_lepen);
    vote_rejet_03035.push(vote_rejet);
    vote_macronpop_03035.push(vote_macronMediane);
    vote_lepenpop_03035.push(vote_lepenMediane);
    vote_rejetpop_03035.push(vote_rejetMediane);
    name_Commune_03035.push(nameCommune);
    Pourcentage_03035.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03035.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03035.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03035.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03035.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03035 = [];
const vote_lepen_03035 = [];
const vote_rejet_03035 = [];
const vote_macronpop_03035 = [];
const vote_lepenpop_03035 = [];
const vote_rejetpop_03035 = [];
const name_Commune_03035 = [];
const Pourcentage_03035 = [];
const Pourcentage_rejet_03035 = [];
const vote_gene_macron_03035 = [];
const vote_gene_lepen_03035 = [];
const vote_gene_rejet_03035 = [];

async function chartIt03035(){
    await GraphDATA03035();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03035-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03035
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03035
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03035-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03035,vote_lepen_03035,vote_rejet_03035]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03035-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03035,vote_lepenpop_03035,vote_rejetpop_03035]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03035"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03035
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03035
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03035
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03036*/
/*------------------------------------------------------------------ */
async function GraphDATA03036() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03036.push(vote_macron); 
    vote_lepen_03036.push(vote_lepen);
    vote_rejet_03036.push(vote_rejet);
    vote_macronpop_03036.push(vote_macronMediane);
    vote_lepenpop_03036.push(vote_lepenMediane);
    vote_rejetpop_03036.push(vote_rejetMediane);
    name_Commune_03036.push(nameCommune);
    Pourcentage_03036.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03036.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03036.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03036.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03036.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03036 = [];
const vote_lepen_03036 = [];
const vote_rejet_03036 = [];
const vote_macronpop_03036 = [];
const vote_lepenpop_03036 = [];
const vote_rejetpop_03036 = [];
const name_Commune_03036 = [];
const Pourcentage_03036 = [];
const Pourcentage_rejet_03036 = [];
const vote_gene_macron_03036 = [];
const vote_gene_lepen_03036 = [];
const vote_gene_rejet_03036 = [];

async function chartIt03036(){
    await GraphDATA03036();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03036-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03036
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03036
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03036-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03036,vote_lepen_03036,vote_rejet_03036]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03036-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03036,vote_lepenpop_03036,vote_rejetpop_03036]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03036"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03036
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03036
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03036
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03037*/
/*------------------------------------------------------------------ */
async function GraphDATA03037() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03037.push(vote_macron); 
    vote_lepen_03037.push(vote_lepen);
    vote_rejet_03037.push(vote_rejet);
    vote_macronpop_03037.push(vote_macronMediane);
    vote_lepenpop_03037.push(vote_lepenMediane);
    vote_rejetpop_03037.push(vote_rejetMediane);
    name_Commune_03037.push(nameCommune);
    Pourcentage_03037.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03037.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03037.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03037.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03037.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03037 = [];
const vote_lepen_03037 = [];
const vote_rejet_03037 = [];
const vote_macronpop_03037 = [];
const vote_lepenpop_03037 = [];
const vote_rejetpop_03037 = [];
const name_Commune_03037 = [];
const Pourcentage_03037 = [];
const Pourcentage_rejet_03037 = [];
const vote_gene_macron_03037 = [];
const vote_gene_lepen_03037 = [];
const vote_gene_rejet_03037 = [];

async function chartIt03037(){
    await GraphDATA03037();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03037-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03037
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03037
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03037-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03037,vote_lepen_03037,vote_rejet_03037]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03037-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03037,vote_lepenpop_03037,vote_rejetpop_03037]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03037"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03037
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03037
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03037
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03038*/
/*------------------------------------------------------------------ */
async function GraphDATA03038() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03038.push(vote_macron); 
    vote_lepen_03038.push(vote_lepen);
    vote_rejet_03038.push(vote_rejet);
    vote_macronpop_03038.push(vote_macronMediane);
    vote_lepenpop_03038.push(vote_lepenMediane);
    vote_rejetpop_03038.push(vote_rejetMediane);
    name_Commune_03038.push(nameCommune);
    Pourcentage_03038.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03038.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03038.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03038.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03038.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03038 = [];
const vote_lepen_03038 = [];
const vote_rejet_03038 = [];
const vote_macronpop_03038 = [];
const vote_lepenpop_03038 = [];
const vote_rejetpop_03038 = [];
const name_Commune_03038 = [];
const Pourcentage_03038 = [];
const Pourcentage_rejet_03038 = [];
const vote_gene_macron_03038 = [];
const vote_gene_lepen_03038 = [];
const vote_gene_rejet_03038 = [];

async function chartIt03038(){
    await GraphDATA03038();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03038-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03038
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03038
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03038-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03038,vote_lepen_03038,vote_rejet_03038]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03038-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03038,vote_lepenpop_03038,vote_rejetpop_03038]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03038"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03038
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03038
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03038
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03039*/
/*------------------------------------------------------------------ */
async function GraphDATA03039() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03039.push(vote_macron); 
    vote_lepen_03039.push(vote_lepen);
    vote_rejet_03039.push(vote_rejet);
    vote_macronpop_03039.push(vote_macronMediane);
    vote_lepenpop_03039.push(vote_lepenMediane);
    vote_rejetpop_03039.push(vote_rejetMediane);
    name_Commune_03039.push(nameCommune);
    Pourcentage_03039.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03039.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03039.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03039.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03039.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03039 = [];
const vote_lepen_03039 = [];
const vote_rejet_03039 = [];
const vote_macronpop_03039 = [];
const vote_lepenpop_03039 = [];
const vote_rejetpop_03039 = [];
const name_Commune_03039 = [];
const Pourcentage_03039 = [];
const Pourcentage_rejet_03039 = [];
const vote_gene_macron_03039 = [];
const vote_gene_lepen_03039 = [];
const vote_gene_rejet_03039 = [];

async function chartIt03039(){
    await GraphDATA03039();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03039-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03039
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03039
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03039-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03039,vote_lepen_03039,vote_rejet_03039]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03039-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03039,vote_lepenpop_03039,vote_rejetpop_03039]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03039"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03039
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03039
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03039
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03040*/
/*------------------------------------------------------------------ */
async function GraphDATA03040() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03040.push(vote_macron); 
    vote_lepen_03040.push(vote_lepen);
    vote_rejet_03040.push(vote_rejet);
    vote_macronpop_03040.push(vote_macronMediane);
    vote_lepenpop_03040.push(vote_lepenMediane);
    vote_rejetpop_03040.push(vote_rejetMediane);
    name_Commune_03040.push(nameCommune);
    Pourcentage_03040.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03040.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03040.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03040.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03040.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03040 = [];
const vote_lepen_03040 = [];
const vote_rejet_03040 = [];
const vote_macronpop_03040 = [];
const vote_lepenpop_03040 = [];
const vote_rejetpop_03040 = [];
const name_Commune_03040 = [];
const Pourcentage_03040 = [];
const Pourcentage_rejet_03040 = [];
const vote_gene_macron_03040 = [];
const vote_gene_lepen_03040 = [];
const vote_gene_rejet_03040 = [];

async function chartIt03040(){
    await GraphDATA03040();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03040-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03040
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03040
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03040-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03040,vote_lepen_03040,vote_rejet_03040]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03040-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03040,vote_lepenpop_03040,vote_rejetpop_03040]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03040"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03040
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03040
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03040
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03041*/
/*------------------------------------------------------------------ */
async function GraphDATA03041() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03041.push(vote_macron); 
    vote_lepen_03041.push(vote_lepen);
    vote_rejet_03041.push(vote_rejet);
    vote_macronpop_03041.push(vote_macronMediane);
    vote_lepenpop_03041.push(vote_lepenMediane);
    vote_rejetpop_03041.push(vote_rejetMediane);
    name_Commune_03041.push(nameCommune);
    Pourcentage_03041.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03041.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03041.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03041.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03041.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03041 = [];
const vote_lepen_03041 = [];
const vote_rejet_03041 = [];
const vote_macronpop_03041 = [];
const vote_lepenpop_03041 = [];
const vote_rejetpop_03041 = [];
const name_Commune_03041 = [];
const Pourcentage_03041 = [];
const Pourcentage_rejet_03041 = [];
const vote_gene_macron_03041 = [];
const vote_gene_lepen_03041 = [];
const vote_gene_rejet_03041 = [];

async function chartIt03041(){
    await GraphDATA03041();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03041-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03041
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03041
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03041-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03041,vote_lepen_03041,vote_rejet_03041]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03041-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03041,vote_lepenpop_03041,vote_rejetpop_03041]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03041"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03041
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03041
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03041
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03042*/
/*------------------------------------------------------------------ */
async function GraphDATA03042() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03042.push(vote_macron); 
    vote_lepen_03042.push(vote_lepen);
    vote_rejet_03042.push(vote_rejet);
    vote_macronpop_03042.push(vote_macronMediane);
    vote_lepenpop_03042.push(vote_lepenMediane);
    vote_rejetpop_03042.push(vote_rejetMediane);
    name_Commune_03042.push(nameCommune);
    Pourcentage_03042.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03042.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03042.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03042.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03042.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03042 = [];
const vote_lepen_03042 = [];
const vote_rejet_03042 = [];
const vote_macronpop_03042 = [];
const vote_lepenpop_03042 = [];
const vote_rejetpop_03042 = [];
const name_Commune_03042 = [];
const Pourcentage_03042 = [];
const Pourcentage_rejet_03042 = [];
const vote_gene_macron_03042 = [];
const vote_gene_lepen_03042 = [];
const vote_gene_rejet_03042 = [];

async function chartIt03042(){
    await GraphDATA03042();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03042-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03042
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03042
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03042-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03042,vote_lepen_03042,vote_rejet_03042]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03042-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03042,vote_lepenpop_03042,vote_rejetpop_03042]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03042"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03042
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03042
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03042
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03043*/
/*------------------------------------------------------------------ */
async function GraphDATA03043() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03043.push(vote_macron); 
    vote_lepen_03043.push(vote_lepen);
    vote_rejet_03043.push(vote_rejet);
    vote_macronpop_03043.push(vote_macronMediane);
    vote_lepenpop_03043.push(vote_lepenMediane);
    vote_rejetpop_03043.push(vote_rejetMediane);
    name_Commune_03043.push(nameCommune);
    Pourcentage_03043.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03043.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03043.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03043.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03043.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03043 = [];
const vote_lepen_03043 = [];
const vote_rejet_03043 = [];
const vote_macronpop_03043 = [];
const vote_lepenpop_03043 = [];
const vote_rejetpop_03043 = [];
const name_Commune_03043 = [];
const Pourcentage_03043 = [];
const Pourcentage_rejet_03043 = [];
const vote_gene_macron_03043 = [];
const vote_gene_lepen_03043 = [];
const vote_gene_rejet_03043 = [];

async function chartIt03043(){
    await GraphDATA03043();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03043-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03043
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03043
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03043-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03043,vote_lepen_03043,vote_rejet_03043]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03043-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03043,vote_lepenpop_03043,vote_rejetpop_03043]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03043"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03043
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03043
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03043
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03044*/
/*------------------------------------------------------------------ */
async function GraphDATA03044() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03044.push(vote_macron); 
    vote_lepen_03044.push(vote_lepen);
    vote_rejet_03044.push(vote_rejet);
    vote_macronpop_03044.push(vote_macronMediane);
    vote_lepenpop_03044.push(vote_lepenMediane);
    vote_rejetpop_03044.push(vote_rejetMediane);
    name_Commune_03044.push(nameCommune);
    Pourcentage_03044.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03044.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03044.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03044.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03044.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03044 = [];
const vote_lepen_03044 = [];
const vote_rejet_03044 = [];
const vote_macronpop_03044 = [];
const vote_lepenpop_03044 = [];
const vote_rejetpop_03044 = [];
const name_Commune_03044 = [];
const Pourcentage_03044 = [];
const Pourcentage_rejet_03044 = [];
const vote_gene_macron_03044 = [];
const vote_gene_lepen_03044 = [];
const vote_gene_rejet_03044 = [];

async function chartIt03044(){
    await GraphDATA03044();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03044-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03044
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03044
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03044-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03044,vote_lepen_03044,vote_rejet_03044]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03044-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03044,vote_lepenpop_03044,vote_rejetpop_03044]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03044"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03044
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03044
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03044
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03045*/
/*------------------------------------------------------------------ */
async function GraphDATA03045() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03045.push(vote_macron); 
    vote_lepen_03045.push(vote_lepen);
    vote_rejet_03045.push(vote_rejet);
    vote_macronpop_03045.push(vote_macronMediane);
    vote_lepenpop_03045.push(vote_lepenMediane);
    vote_rejetpop_03045.push(vote_rejetMediane);
    name_Commune_03045.push(nameCommune);
    Pourcentage_03045.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03045.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03045.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03045.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03045.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03045 = [];
const vote_lepen_03045 = [];
const vote_rejet_03045 = [];
const vote_macronpop_03045 = [];
const vote_lepenpop_03045 = [];
const vote_rejetpop_03045 = [];
const name_Commune_03045 = [];
const Pourcentage_03045 = [];
const Pourcentage_rejet_03045 = [];
const vote_gene_macron_03045 = [];
const vote_gene_lepen_03045 = [];
const vote_gene_rejet_03045 = [];

async function chartIt03045(){
    await GraphDATA03045();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03045-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03045
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03045
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03045-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03045,vote_lepen_03045,vote_rejet_03045]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03045-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03045,vote_lepenpop_03045,vote_rejetpop_03045]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03045"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03045
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03045
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03045
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03046*/
/*------------------------------------------------------------------ */
async function GraphDATA03046() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03046.push(vote_macron); 
    vote_lepen_03046.push(vote_lepen);
    vote_rejet_03046.push(vote_rejet);
    vote_macronpop_03046.push(vote_macronMediane);
    vote_lepenpop_03046.push(vote_lepenMediane);
    vote_rejetpop_03046.push(vote_rejetMediane);
    name_Commune_03046.push(nameCommune);
    Pourcentage_03046.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03046.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03046.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03046.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03046.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03046 = [];
const vote_lepen_03046 = [];
const vote_rejet_03046 = [];
const vote_macronpop_03046 = [];
const vote_lepenpop_03046 = [];
const vote_rejetpop_03046 = [];
const name_Commune_03046 = [];
const Pourcentage_03046 = [];
const Pourcentage_rejet_03046 = [];
const vote_gene_macron_03046 = [];
const vote_gene_lepen_03046 = [];
const vote_gene_rejet_03046 = [];

async function chartIt03046(){
    await GraphDATA03046();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03046-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03046
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03046
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03046-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03046,vote_lepen_03046,vote_rejet_03046]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03046-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03046,vote_lepenpop_03046,vote_rejetpop_03046]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03046"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03046
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03046
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03046
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03047*/
/*------------------------------------------------------------------ */
async function GraphDATA03047() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03047.push(vote_macron); 
    vote_lepen_03047.push(vote_lepen);
    vote_rejet_03047.push(vote_rejet);
    vote_macronpop_03047.push(vote_macronMediane);
    vote_lepenpop_03047.push(vote_lepenMediane);
    vote_rejetpop_03047.push(vote_rejetMediane);
    name_Commune_03047.push(nameCommune);
    Pourcentage_03047.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03047.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03047.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03047.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03047.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03047 = [];
const vote_lepen_03047 = [];
const vote_rejet_03047 = [];
const vote_macronpop_03047 = [];
const vote_lepenpop_03047 = [];
const vote_rejetpop_03047 = [];
const name_Commune_03047 = [];
const Pourcentage_03047 = [];
const Pourcentage_rejet_03047 = [];
const vote_gene_macron_03047 = [];
const vote_gene_lepen_03047 = [];
const vote_gene_rejet_03047 = [];

async function chartIt03047(){
    await GraphDATA03047();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03047-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03047
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03047
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03047-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03047,vote_lepen_03047,vote_rejet_03047]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03047-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03047,vote_lepenpop_03047,vote_rejetpop_03047]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03047"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03047
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03047
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03047
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03048*/
/*------------------------------------------------------------------ */
async function GraphDATA03048() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03048.push(vote_macron); 
    vote_lepen_03048.push(vote_lepen);
    vote_rejet_03048.push(vote_rejet);
    vote_macronpop_03048.push(vote_macronMediane);
    vote_lepenpop_03048.push(vote_lepenMediane);
    vote_rejetpop_03048.push(vote_rejetMediane);
    name_Commune_03048.push(nameCommune);
    Pourcentage_03048.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03048.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03048.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03048.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03048.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03048 = [];
const vote_lepen_03048 = [];
const vote_rejet_03048 = [];
const vote_macronpop_03048 = [];
const vote_lepenpop_03048 = [];
const vote_rejetpop_03048 = [];
const name_Commune_03048 = [];
const Pourcentage_03048 = [];
const Pourcentage_rejet_03048 = [];
const vote_gene_macron_03048 = [];
const vote_gene_lepen_03048 = [];
const vote_gene_rejet_03048 = [];

async function chartIt03048(){
    await GraphDATA03048();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03048-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03048
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03048
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03048-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03048,vote_lepen_03048,vote_rejet_03048]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03048-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03048,vote_lepenpop_03048,vote_rejetpop_03048]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03048"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03048
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03048
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03048
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03049*/
/*------------------------------------------------------------------ */
async function GraphDATA03049() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03049.push(vote_macron); 
    vote_lepen_03049.push(vote_lepen);
    vote_rejet_03049.push(vote_rejet);
    vote_macronpop_03049.push(vote_macronMediane);
    vote_lepenpop_03049.push(vote_lepenMediane);
    vote_rejetpop_03049.push(vote_rejetMediane);
    name_Commune_03049.push(nameCommune);
    Pourcentage_03049.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03049.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03049.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03049.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03049.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03049 = [];
const vote_lepen_03049 = [];
const vote_rejet_03049 = [];
const vote_macronpop_03049 = [];
const vote_lepenpop_03049 = [];
const vote_rejetpop_03049 = [];
const name_Commune_03049 = [];
const Pourcentage_03049 = [];
const Pourcentage_rejet_03049 = [];
const vote_gene_macron_03049 = [];
const vote_gene_lepen_03049 = [];
const vote_gene_rejet_03049 = [];

async function chartIt03049(){
    await GraphDATA03049();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03049-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03049
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03049
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03049-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03049,vote_lepen_03049,vote_rejet_03049]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03049-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03049,vote_lepenpop_03049,vote_rejetpop_03049]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03049"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03049
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03049
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03049
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03050*/
/*------------------------------------------------------------------ */
async function GraphDATA03050() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03050.push(vote_macron); 
    vote_lepen_03050.push(vote_lepen);
    vote_rejet_03050.push(vote_rejet);
    vote_macronpop_03050.push(vote_macronMediane);
    vote_lepenpop_03050.push(vote_lepenMediane);
    vote_rejetpop_03050.push(vote_rejetMediane);
    name_Commune_03050.push(nameCommune);
    Pourcentage_03050.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03050.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03050.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03050.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03050.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03050 = [];
const vote_lepen_03050 = [];
const vote_rejet_03050 = [];
const vote_macronpop_03050 = [];
const vote_lepenpop_03050 = [];
const vote_rejetpop_03050 = [];
const name_Commune_03050 = [];
const Pourcentage_03050 = [];
const Pourcentage_rejet_03050 = [];
const vote_gene_macron_03050 = [];
const vote_gene_lepen_03050 = [];
const vote_gene_rejet_03050 = [];

async function chartIt03050(){
    await GraphDATA03050();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03050-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03050
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03050
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03050-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03050,vote_lepen_03050,vote_rejet_03050]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03050-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03050,vote_lepenpop_03050,vote_rejetpop_03050]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03050"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03050
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03050
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03050
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03051*/
/*------------------------------------------------------------------ */
async function GraphDATA03051() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03051.push(vote_macron); 
    vote_lepen_03051.push(vote_lepen);
    vote_rejet_03051.push(vote_rejet);
    vote_macronpop_03051.push(vote_macronMediane);
    vote_lepenpop_03051.push(vote_lepenMediane);
    vote_rejetpop_03051.push(vote_rejetMediane);
    name_Commune_03051.push(nameCommune);
    Pourcentage_03051.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03051.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03051.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03051.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03051.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03051 = [];
const vote_lepen_03051 = [];
const vote_rejet_03051 = [];
const vote_macronpop_03051 = [];
const vote_lepenpop_03051 = [];
const vote_rejetpop_03051 = [];
const name_Commune_03051 = [];
const Pourcentage_03051 = [];
const Pourcentage_rejet_03051 = [];
const vote_gene_macron_03051 = [];
const vote_gene_lepen_03051 = [];
const vote_gene_rejet_03051 = [];

async function chartIt03051(){
    await GraphDATA03051();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03051-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03051
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03051
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03051-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03051,vote_lepen_03051,vote_rejet_03051]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03051-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03051,vote_lepenpop_03051,vote_rejetpop_03051]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03051"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03051
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03051
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03051
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03052*/
/*------------------------------------------------------------------ */
async function GraphDATA03052() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03052.push(vote_macron); 
    vote_lepen_03052.push(vote_lepen);
    vote_rejet_03052.push(vote_rejet);
    vote_macronpop_03052.push(vote_macronMediane);
    vote_lepenpop_03052.push(vote_lepenMediane);
    vote_rejetpop_03052.push(vote_rejetMediane);
    name_Commune_03052.push(nameCommune);
    Pourcentage_03052.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03052.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03052.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03052.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03052.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03052 = [];
const vote_lepen_03052 = [];
const vote_rejet_03052 = [];
const vote_macronpop_03052 = [];
const vote_lepenpop_03052 = [];
const vote_rejetpop_03052 = [];
const name_Commune_03052 = [];
const Pourcentage_03052 = [];
const Pourcentage_rejet_03052 = [];
const vote_gene_macron_03052 = [];
const vote_gene_lepen_03052 = [];
const vote_gene_rejet_03052 = [];

async function chartIt03052(){
    await GraphDATA03052();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03052-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03052
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03052
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03052-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03052,vote_lepen_03052,vote_rejet_03052]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03052-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03052,vote_lepenpop_03052,vote_rejetpop_03052]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03052"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03052
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03052
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03052
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03053*/
/*------------------------------------------------------------------ */
async function GraphDATA03053() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03053.push(vote_macron); 
    vote_lepen_03053.push(vote_lepen);
    vote_rejet_03053.push(vote_rejet);
    vote_macronpop_03053.push(vote_macronMediane);
    vote_lepenpop_03053.push(vote_lepenMediane);
    vote_rejetpop_03053.push(vote_rejetMediane);
    name_Commune_03053.push(nameCommune);
    Pourcentage_03053.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03053.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03053.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03053.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03053.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03053 = [];
const vote_lepen_03053 = [];
const vote_rejet_03053 = [];
const vote_macronpop_03053 = [];
const vote_lepenpop_03053 = [];
const vote_rejetpop_03053 = [];
const name_Commune_03053 = [];
const Pourcentage_03053 = [];
const Pourcentage_rejet_03053 = [];
const vote_gene_macron_03053 = [];
const vote_gene_lepen_03053 = [];
const vote_gene_rejet_03053 = [];

async function chartIt03053(){
    await GraphDATA03053();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03053-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03053
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03053
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03053-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03053,vote_lepen_03053,vote_rejet_03053]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03053-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03053,vote_lepenpop_03053,vote_rejetpop_03053]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03053"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03053
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03053
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03053
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03054*/
/*------------------------------------------------------------------ */
async function GraphDATA03054() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03054.push(vote_macron); 
    vote_lepen_03054.push(vote_lepen);
    vote_rejet_03054.push(vote_rejet);
    vote_macronpop_03054.push(vote_macronMediane);
    vote_lepenpop_03054.push(vote_lepenMediane);
    vote_rejetpop_03054.push(vote_rejetMediane);
    name_Commune_03054.push(nameCommune);
    Pourcentage_03054.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03054.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03054.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03054.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03054.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03054 = [];
const vote_lepen_03054 = [];
const vote_rejet_03054 = [];
const vote_macronpop_03054 = [];
const vote_lepenpop_03054 = [];
const vote_rejetpop_03054 = [];
const name_Commune_03054 = [];
const Pourcentage_03054 = [];
const Pourcentage_rejet_03054 = [];
const vote_gene_macron_03054 = [];
const vote_gene_lepen_03054 = [];
const vote_gene_rejet_03054 = [];

async function chartIt03054(){
    await GraphDATA03054();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03054-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03054
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03054
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03054-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03054,vote_lepen_03054,vote_rejet_03054]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03054-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03054,vote_lepenpop_03054,vote_rejetpop_03054]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03054"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03054
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03054
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03054
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03055*/
/*------------------------------------------------------------------ */
async function GraphDATA03055() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03055.push(vote_macron); 
    vote_lepen_03055.push(vote_lepen);
    vote_rejet_03055.push(vote_rejet);
    vote_macronpop_03055.push(vote_macronMediane);
    vote_lepenpop_03055.push(vote_lepenMediane);
    vote_rejetpop_03055.push(vote_rejetMediane);
    name_Commune_03055.push(nameCommune);
    Pourcentage_03055.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03055.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03055.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03055.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03055.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03055 = [];
const vote_lepen_03055 = [];
const vote_rejet_03055 = [];
const vote_macronpop_03055 = [];
const vote_lepenpop_03055 = [];
const vote_rejetpop_03055 = [];
const name_Commune_03055 = [];
const Pourcentage_03055 = [];
const Pourcentage_rejet_03055 = [];
const vote_gene_macron_03055 = [];
const vote_gene_lepen_03055 = [];
const vote_gene_rejet_03055 = [];

async function chartIt03055(){
    await GraphDATA03055();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03055-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03055
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03055
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03055-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03055,vote_lepen_03055,vote_rejet_03055]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03055-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03055,vote_lepenpop_03055,vote_rejetpop_03055]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03055"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03055
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03055
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03055
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03056*/
/*------------------------------------------------------------------ */
async function GraphDATA03056() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03056.push(vote_macron); 
    vote_lepen_03056.push(vote_lepen);
    vote_rejet_03056.push(vote_rejet);
    vote_macronpop_03056.push(vote_macronMediane);
    vote_lepenpop_03056.push(vote_lepenMediane);
    vote_rejetpop_03056.push(vote_rejetMediane);
    name_Commune_03056.push(nameCommune);
    Pourcentage_03056.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03056.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03056.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03056.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03056.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03056 = [];
const vote_lepen_03056 = [];
const vote_rejet_03056 = [];
const vote_macronpop_03056 = [];
const vote_lepenpop_03056 = [];
const vote_rejetpop_03056 = [];
const name_Commune_03056 = [];
const Pourcentage_03056 = [];
const Pourcentage_rejet_03056 = [];
const vote_gene_macron_03056 = [];
const vote_gene_lepen_03056 = [];
const vote_gene_rejet_03056 = [];

async function chartIt03056(){
    await GraphDATA03056();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03056-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03056
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03056
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03056-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03056,vote_lepen_03056,vote_rejet_03056]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03056-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03056,vote_lepenpop_03056,vote_rejetpop_03056]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03056"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03056
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03056
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03056
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03057*/
/*------------------------------------------------------------------ */
async function GraphDATA03057() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03057.push(vote_macron); 
    vote_lepen_03057.push(vote_lepen);
    vote_rejet_03057.push(vote_rejet);
    vote_macronpop_03057.push(vote_macronMediane);
    vote_lepenpop_03057.push(vote_lepenMediane);
    vote_rejetpop_03057.push(vote_rejetMediane);
    name_Commune_03057.push(nameCommune);
    Pourcentage_03057.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03057.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03057.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03057.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03057.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03057 = [];
const vote_lepen_03057 = [];
const vote_rejet_03057 = [];
const vote_macronpop_03057 = [];
const vote_lepenpop_03057 = [];
const vote_rejetpop_03057 = [];
const name_Commune_03057 = [];
const Pourcentage_03057 = [];
const Pourcentage_rejet_03057 = [];
const vote_gene_macron_03057 = [];
const vote_gene_lepen_03057 = [];
const vote_gene_rejet_03057 = [];

async function chartIt03057(){
    await GraphDATA03057();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03057-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03057
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03057
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03057-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03057,vote_lepen_03057,vote_rejet_03057]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03057-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03057,vote_lepenpop_03057,vote_rejetpop_03057]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03057"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03057
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03057
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03057
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03058*/
/*------------------------------------------------------------------ */
async function GraphDATA03058() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03058.push(vote_macron); 
    vote_lepen_03058.push(vote_lepen);
    vote_rejet_03058.push(vote_rejet);
    vote_macronpop_03058.push(vote_macronMediane);
    vote_lepenpop_03058.push(vote_lepenMediane);
    vote_rejetpop_03058.push(vote_rejetMediane);
    name_Commune_03058.push(nameCommune);
    Pourcentage_03058.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03058.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03058.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03058.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03058.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03058 = [];
const vote_lepen_03058 = [];
const vote_rejet_03058 = [];
const vote_macronpop_03058 = [];
const vote_lepenpop_03058 = [];
const vote_rejetpop_03058 = [];
const name_Commune_03058 = [];
const Pourcentage_03058 = [];
const Pourcentage_rejet_03058 = [];
const vote_gene_macron_03058 = [];
const vote_gene_lepen_03058 = [];
const vote_gene_rejet_03058 = [];

async function chartIt03058(){
    await GraphDATA03058();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03058-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03058
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03058
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03058-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03058,vote_lepen_03058,vote_rejet_03058]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03058-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03058,vote_lepenpop_03058,vote_rejetpop_03058]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03058"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03058
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03058
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03058
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03059*/
/*------------------------------------------------------------------ */
async function GraphDATA03059() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03059.push(vote_macron); 
    vote_lepen_03059.push(vote_lepen);
    vote_rejet_03059.push(vote_rejet);
    vote_macronpop_03059.push(vote_macronMediane);
    vote_lepenpop_03059.push(vote_lepenMediane);
    vote_rejetpop_03059.push(vote_rejetMediane);
    name_Commune_03059.push(nameCommune);
    Pourcentage_03059.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03059.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03059.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03059.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03059.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03059 = [];
const vote_lepen_03059 = [];
const vote_rejet_03059 = [];
const vote_macronpop_03059 = [];
const vote_lepenpop_03059 = [];
const vote_rejetpop_03059 = [];
const name_Commune_03059 = [];
const Pourcentage_03059 = [];
const Pourcentage_rejet_03059 = [];
const vote_gene_macron_03059 = [];
const vote_gene_lepen_03059 = [];
const vote_gene_rejet_03059 = [];

async function chartIt03059(){
    await GraphDATA03059();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03059-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03059
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03059
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03059-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03059,vote_lepen_03059,vote_rejet_03059]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03059-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03059,vote_lepenpop_03059,vote_rejetpop_03059]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03059"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03059
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03059
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03059
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03060*/
/*------------------------------------------------------------------ */
async function GraphDATA03060() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03060.push(vote_macron); 
    vote_lepen_03060.push(vote_lepen);
    vote_rejet_03060.push(vote_rejet);
    vote_macronpop_03060.push(vote_macronMediane);
    vote_lepenpop_03060.push(vote_lepenMediane);
    vote_rejetpop_03060.push(vote_rejetMediane);
    name_Commune_03060.push(nameCommune);
    Pourcentage_03060.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03060.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03060.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03060.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03060.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03060 = [];
const vote_lepen_03060 = [];
const vote_rejet_03060 = [];
const vote_macronpop_03060 = [];
const vote_lepenpop_03060 = [];
const vote_rejetpop_03060 = [];
const name_Commune_03060 = [];
const Pourcentage_03060 = [];
const Pourcentage_rejet_03060 = [];
const vote_gene_macron_03060 = [];
const vote_gene_lepen_03060 = [];
const vote_gene_rejet_03060 = [];

async function chartIt03060(){
    await GraphDATA03060();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03060-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03060
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03060
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03060-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03060,vote_lepen_03060,vote_rejet_03060]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03060-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03060,vote_lepenpop_03060,vote_rejetpop_03060]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03060"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03060
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03060
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03060
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03061*/
/*------------------------------------------------------------------ */
async function GraphDATA03061() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03061.push(vote_macron); 
    vote_lepen_03061.push(vote_lepen);
    vote_rejet_03061.push(vote_rejet);
    vote_macronpop_03061.push(vote_macronMediane);
    vote_lepenpop_03061.push(vote_lepenMediane);
    vote_rejetpop_03061.push(vote_rejetMediane);
    name_Commune_03061.push(nameCommune);
    Pourcentage_03061.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03061.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03061.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03061.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03061.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03061 = [];
const vote_lepen_03061 = [];
const vote_rejet_03061 = [];
const vote_macronpop_03061 = [];
const vote_lepenpop_03061 = [];
const vote_rejetpop_03061 = [];
const name_Commune_03061 = [];
const Pourcentage_03061 = [];
const Pourcentage_rejet_03061 = [];
const vote_gene_macron_03061 = [];
const vote_gene_lepen_03061 = [];
const vote_gene_rejet_03061 = [];

async function chartIt03061(){
    await GraphDATA03061();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03061-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03061
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03061
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03061-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03061,vote_lepen_03061,vote_rejet_03061]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03061-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03061,vote_lepenpop_03061,vote_rejetpop_03061]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03061"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03061
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03061
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03061
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03062*/
/*------------------------------------------------------------------ */
async function GraphDATA03062() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03062.push(vote_macron); 
    vote_lepen_03062.push(vote_lepen);
    vote_rejet_03062.push(vote_rejet);
    vote_macronpop_03062.push(vote_macronMediane);
    vote_lepenpop_03062.push(vote_lepenMediane);
    vote_rejetpop_03062.push(vote_rejetMediane);
    name_Commune_03062.push(nameCommune);
    Pourcentage_03062.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03062.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03062.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03062.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03062.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03062 = [];
const vote_lepen_03062 = [];
const vote_rejet_03062 = [];
const vote_macronpop_03062 = [];
const vote_lepenpop_03062 = [];
const vote_rejetpop_03062 = [];
const name_Commune_03062 = [];
const Pourcentage_03062 = [];
const Pourcentage_rejet_03062 = [];
const vote_gene_macron_03062 = [];
const vote_gene_lepen_03062 = [];
const vote_gene_rejet_03062 = [];

async function chartIt03062(){
    await GraphDATA03062();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03062-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03062
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03062
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03062-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03062,vote_lepen_03062,vote_rejet_03062]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03062-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03062,vote_lepenpop_03062,vote_rejetpop_03062]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03062"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03062
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03062
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03062
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03063*/
/*------------------------------------------------------------------ */
async function GraphDATA03063() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03063.push(vote_macron); 
    vote_lepen_03063.push(vote_lepen);
    vote_rejet_03063.push(vote_rejet);
    vote_macronpop_03063.push(vote_macronMediane);
    vote_lepenpop_03063.push(vote_lepenMediane);
    vote_rejetpop_03063.push(vote_rejetMediane);
    name_Commune_03063.push(nameCommune);
    Pourcentage_03063.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03063.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03063.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03063.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03063.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03063 = [];
const vote_lepen_03063 = [];
const vote_rejet_03063 = [];
const vote_macronpop_03063 = [];
const vote_lepenpop_03063 = [];
const vote_rejetpop_03063 = [];
const name_Commune_03063 = [];
const Pourcentage_03063 = [];
const Pourcentage_rejet_03063 = [];
const vote_gene_macron_03063 = [];
const vote_gene_lepen_03063 = [];
const vote_gene_rejet_03063 = [];

async function chartIt03063(){
    await GraphDATA03063();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03063-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03063
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03063
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03063-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03063,vote_lepen_03063,vote_rejet_03063]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03063-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03063,vote_lepenpop_03063,vote_rejetpop_03063]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03063"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03063
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03063
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03063
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03064*/
/*------------------------------------------------------------------ */
async function GraphDATA03064() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03064.push(vote_macron); 
    vote_lepen_03064.push(vote_lepen);
    vote_rejet_03064.push(vote_rejet);
    vote_macronpop_03064.push(vote_macronMediane);
    vote_lepenpop_03064.push(vote_lepenMediane);
    vote_rejetpop_03064.push(vote_rejetMediane);
    name_Commune_03064.push(nameCommune);
    Pourcentage_03064.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03064.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03064.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03064.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03064.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03064 = [];
const vote_lepen_03064 = [];
const vote_rejet_03064 = [];
const vote_macronpop_03064 = [];
const vote_lepenpop_03064 = [];
const vote_rejetpop_03064 = [];
const name_Commune_03064 = [];
const Pourcentage_03064 = [];
const Pourcentage_rejet_03064 = [];
const vote_gene_macron_03064 = [];
const vote_gene_lepen_03064 = [];
const vote_gene_rejet_03064 = [];

async function chartIt03064(){
    await GraphDATA03064();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03064-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03064
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03064
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03064-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03064,vote_lepen_03064,vote_rejet_03064]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03064-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03064,vote_lepenpop_03064,vote_rejetpop_03064]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03064"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03064
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03064
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03064
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03065*/
/*------------------------------------------------------------------ */
async function GraphDATA03065() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03065.push(vote_macron); 
    vote_lepen_03065.push(vote_lepen);
    vote_rejet_03065.push(vote_rejet);
    vote_macronpop_03065.push(vote_macronMediane);
    vote_lepenpop_03065.push(vote_lepenMediane);
    vote_rejetpop_03065.push(vote_rejetMediane);
    name_Commune_03065.push(nameCommune);
    Pourcentage_03065.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03065.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03065.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03065.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03065.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03065 = [];
const vote_lepen_03065 = [];
const vote_rejet_03065 = [];
const vote_macronpop_03065 = [];
const vote_lepenpop_03065 = [];
const vote_rejetpop_03065 = [];
const name_Commune_03065 = [];
const Pourcentage_03065 = [];
const Pourcentage_rejet_03065 = [];
const vote_gene_macron_03065 = [];
const vote_gene_lepen_03065 = [];
const vote_gene_rejet_03065 = [];

async function chartIt03065(){
    await GraphDATA03065();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03065-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03065
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03065
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03065-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03065,vote_lepen_03065,vote_rejet_03065]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03065-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03065,vote_lepenpop_03065,vote_rejetpop_03065]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03065"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03065
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03065
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03065
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03066*/
/*------------------------------------------------------------------ */
async function GraphDATA03066() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03066.push(vote_macron); 
    vote_lepen_03066.push(vote_lepen);
    vote_rejet_03066.push(vote_rejet);
    vote_macronpop_03066.push(vote_macronMediane);
    vote_lepenpop_03066.push(vote_lepenMediane);
    vote_rejetpop_03066.push(vote_rejetMediane);
    name_Commune_03066.push(nameCommune);
    Pourcentage_03066.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03066.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03066.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03066.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03066.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03066 = [];
const vote_lepen_03066 = [];
const vote_rejet_03066 = [];
const vote_macronpop_03066 = [];
const vote_lepenpop_03066 = [];
const vote_rejetpop_03066 = [];
const name_Commune_03066 = [];
const Pourcentage_03066 = [];
const Pourcentage_rejet_03066 = [];
const vote_gene_macron_03066 = [];
const vote_gene_lepen_03066 = [];
const vote_gene_rejet_03066 = [];

async function chartIt03066(){
    await GraphDATA03066();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03066-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03066
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03066
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03066-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03066,vote_lepen_03066,vote_rejet_03066]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03066-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03066,vote_lepenpop_03066,vote_rejetpop_03066]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03066"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03066
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03066
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03066
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03067*/
/*------------------------------------------------------------------ */
async function GraphDATA03067() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03067.push(vote_macron); 
    vote_lepen_03067.push(vote_lepen);
    vote_rejet_03067.push(vote_rejet);
    vote_macronpop_03067.push(vote_macronMediane);
    vote_lepenpop_03067.push(vote_lepenMediane);
    vote_rejetpop_03067.push(vote_rejetMediane);
    name_Commune_03067.push(nameCommune);
    Pourcentage_03067.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03067.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03067.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03067.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03067.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03067 = [];
const vote_lepen_03067 = [];
const vote_rejet_03067 = [];
const vote_macronpop_03067 = [];
const vote_lepenpop_03067 = [];
const vote_rejetpop_03067 = [];
const name_Commune_03067 = [];
const Pourcentage_03067 = [];
const Pourcentage_rejet_03067 = [];
const vote_gene_macron_03067 = [];
const vote_gene_lepen_03067 = [];
const vote_gene_rejet_03067 = [];

async function chartIt03067(){
    await GraphDATA03067();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03067-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03067
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03067
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03067-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03067,vote_lepen_03067,vote_rejet_03067]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03067-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03067,vote_lepenpop_03067,vote_rejetpop_03067]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03067"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03067
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03067
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03067
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03068*/
/*------------------------------------------------------------------ */
async function GraphDATA03068() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03068.push(vote_macron); 
    vote_lepen_03068.push(vote_lepen);
    vote_rejet_03068.push(vote_rejet);
    vote_macronpop_03068.push(vote_macronMediane);
    vote_lepenpop_03068.push(vote_lepenMediane);
    vote_rejetpop_03068.push(vote_rejetMediane);
    name_Commune_03068.push(nameCommune);
    Pourcentage_03068.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03068.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03068.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03068.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03068.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03068 = [];
const vote_lepen_03068 = [];
const vote_rejet_03068 = [];
const vote_macronpop_03068 = [];
const vote_lepenpop_03068 = [];
const vote_rejetpop_03068 = [];
const name_Commune_03068 = [];
const Pourcentage_03068 = [];
const Pourcentage_rejet_03068 = [];
const vote_gene_macron_03068 = [];
const vote_gene_lepen_03068 = [];
const vote_gene_rejet_03068 = [];

async function chartIt03068(){
    await GraphDATA03068();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03068-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03068
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03068
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03068-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03068,vote_lepen_03068,vote_rejet_03068]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03068-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03068,vote_lepenpop_03068,vote_rejetpop_03068]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03068"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03068
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03068
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03068
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03069*/
/*------------------------------------------------------------------ */
async function GraphDATA03069() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03069.push(vote_macron); 
    vote_lepen_03069.push(vote_lepen);
    vote_rejet_03069.push(vote_rejet);
    vote_macronpop_03069.push(vote_macronMediane);
    vote_lepenpop_03069.push(vote_lepenMediane);
    vote_rejetpop_03069.push(vote_rejetMediane);
    name_Commune_03069.push(nameCommune);
    Pourcentage_03069.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03069.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03069.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03069.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03069.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03069 = [];
const vote_lepen_03069 = [];
const vote_rejet_03069 = [];
const vote_macronpop_03069 = [];
const vote_lepenpop_03069 = [];
const vote_rejetpop_03069 = [];
const name_Commune_03069 = [];
const Pourcentage_03069 = [];
const Pourcentage_rejet_03069 = [];
const vote_gene_macron_03069 = [];
const vote_gene_lepen_03069 = [];
const vote_gene_rejet_03069 = [];

async function chartIt03069(){
    await GraphDATA03069();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03069-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03069
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03069
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03069-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03069,vote_lepen_03069,vote_rejet_03069]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03069-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03069,vote_lepenpop_03069,vote_rejetpop_03069]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03069"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03069
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03069
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03069
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03070*/
/*------------------------------------------------------------------ */
async function GraphDATA03070() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03070.push(vote_macron); 
    vote_lepen_03070.push(vote_lepen);
    vote_rejet_03070.push(vote_rejet);
    vote_macronpop_03070.push(vote_macronMediane);
    vote_lepenpop_03070.push(vote_lepenMediane);
    vote_rejetpop_03070.push(vote_rejetMediane);
    name_Commune_03070.push(nameCommune);
    Pourcentage_03070.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03070.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03070.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03070.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03070.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03070 = [];
const vote_lepen_03070 = [];
const vote_rejet_03070 = [];
const vote_macronpop_03070 = [];
const vote_lepenpop_03070 = [];
const vote_rejetpop_03070 = [];
const name_Commune_03070 = [];
const Pourcentage_03070 = [];
const Pourcentage_rejet_03070 = [];
const vote_gene_macron_03070 = [];
const vote_gene_lepen_03070 = [];
const vote_gene_rejet_03070 = [];

async function chartIt03070(){
    await GraphDATA03070();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03070-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03070
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03070
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03070-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03070,vote_lepen_03070,vote_rejet_03070]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03070-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03070,vote_lepenpop_03070,vote_rejetpop_03070]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03070"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03070
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03070
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03070
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03071*/
/*------------------------------------------------------------------ */
async function GraphDATA03071() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03071.push(vote_macron); 
    vote_lepen_03071.push(vote_lepen);
    vote_rejet_03071.push(vote_rejet);
    vote_macronpop_03071.push(vote_macronMediane);
    vote_lepenpop_03071.push(vote_lepenMediane);
    vote_rejetpop_03071.push(vote_rejetMediane);
    name_Commune_03071.push(nameCommune);
    Pourcentage_03071.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03071.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03071.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03071.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03071.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03071 = [];
const vote_lepen_03071 = [];
const vote_rejet_03071 = [];
const vote_macronpop_03071 = [];
const vote_lepenpop_03071 = [];
const vote_rejetpop_03071 = [];
const name_Commune_03071 = [];
const Pourcentage_03071 = [];
const Pourcentage_rejet_03071 = [];
const vote_gene_macron_03071 = [];
const vote_gene_lepen_03071 = [];
const vote_gene_rejet_03071 = [];

async function chartIt03071(){
    await GraphDATA03071();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03071-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03071
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03071
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03071-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03071,vote_lepen_03071,vote_rejet_03071]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03071-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03071,vote_lepenpop_03071,vote_rejetpop_03071]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03071"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03071
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03071
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03071
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03072*/
/*------------------------------------------------------------------ */
async function GraphDATA03072() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03072.push(vote_macron); 
    vote_lepen_03072.push(vote_lepen);
    vote_rejet_03072.push(vote_rejet);
    vote_macronpop_03072.push(vote_macronMediane);
    vote_lepenpop_03072.push(vote_lepenMediane);
    vote_rejetpop_03072.push(vote_rejetMediane);
    name_Commune_03072.push(nameCommune);
    Pourcentage_03072.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03072.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03072.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03072.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03072.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03072 = [];
const vote_lepen_03072 = [];
const vote_rejet_03072 = [];
const vote_macronpop_03072 = [];
const vote_lepenpop_03072 = [];
const vote_rejetpop_03072 = [];
const name_Commune_03072 = [];
const Pourcentage_03072 = [];
const Pourcentage_rejet_03072 = [];
const vote_gene_macron_03072 = [];
const vote_gene_lepen_03072 = [];
const vote_gene_rejet_03072 = [];

async function chartIt03072(){
    await GraphDATA03072();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03072-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03072
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03072
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03072-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03072,vote_lepen_03072,vote_rejet_03072]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03072-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03072,vote_lepenpop_03072,vote_rejetpop_03072]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03072"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03072
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03072
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03072
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03073*/
/*------------------------------------------------------------------ */
async function GraphDATA03073() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03073.push(vote_macron); 
    vote_lepen_03073.push(vote_lepen);
    vote_rejet_03073.push(vote_rejet);
    vote_macronpop_03073.push(vote_macronMediane);
    vote_lepenpop_03073.push(vote_lepenMediane);
    vote_rejetpop_03073.push(vote_rejetMediane);
    name_Commune_03073.push(nameCommune);
    Pourcentage_03073.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03073.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03073.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03073.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03073.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03073 = [];
const vote_lepen_03073 = [];
const vote_rejet_03073 = [];
const vote_macronpop_03073 = [];
const vote_lepenpop_03073 = [];
const vote_rejetpop_03073 = [];
const name_Commune_03073 = [];
const Pourcentage_03073 = [];
const Pourcentage_rejet_03073 = [];
const vote_gene_macron_03073 = [];
const vote_gene_lepen_03073 = [];
const vote_gene_rejet_03073 = [];

async function chartIt03073(){
    await GraphDATA03073();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03073-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03073
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03073
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03073-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03073,vote_lepen_03073,vote_rejet_03073]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03073-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03073,vote_lepenpop_03073,vote_rejetpop_03073]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03073"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03073
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03073
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03073
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03074*/
/*------------------------------------------------------------------ */
async function GraphDATA03074() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03074.push(vote_macron); 
    vote_lepen_03074.push(vote_lepen);
    vote_rejet_03074.push(vote_rejet);
    vote_macronpop_03074.push(vote_macronMediane);
    vote_lepenpop_03074.push(vote_lepenMediane);
    vote_rejetpop_03074.push(vote_rejetMediane);
    name_Commune_03074.push(nameCommune);
    Pourcentage_03074.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03074.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03074.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03074.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03074.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03074 = [];
const vote_lepen_03074 = [];
const vote_rejet_03074 = [];
const vote_macronpop_03074 = [];
const vote_lepenpop_03074 = [];
const vote_rejetpop_03074 = [];
const name_Commune_03074 = [];
const Pourcentage_03074 = [];
const Pourcentage_rejet_03074 = [];
const vote_gene_macron_03074 = [];
const vote_gene_lepen_03074 = [];
const vote_gene_rejet_03074 = [];

async function chartIt03074(){
    await GraphDATA03074();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03074-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03074
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03074
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03074-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03074,vote_lepen_03074,vote_rejet_03074]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03074-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03074,vote_lepenpop_03074,vote_rejetpop_03074]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03074"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03074
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03074
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03074
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03075*/
/*------------------------------------------------------------------ */
async function GraphDATA03075() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03075.push(vote_macron); 
    vote_lepen_03075.push(vote_lepen);
    vote_rejet_03075.push(vote_rejet);
    vote_macronpop_03075.push(vote_macronMediane);
    vote_lepenpop_03075.push(vote_lepenMediane);
    vote_rejetpop_03075.push(vote_rejetMediane);
    name_Commune_03075.push(nameCommune);
    Pourcentage_03075.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03075.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03075.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03075.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03075.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03075 = [];
const vote_lepen_03075 = [];
const vote_rejet_03075 = [];
const vote_macronpop_03075 = [];
const vote_lepenpop_03075 = [];
const vote_rejetpop_03075 = [];
const name_Commune_03075 = [];
const Pourcentage_03075 = [];
const Pourcentage_rejet_03075 = [];
const vote_gene_macron_03075 = [];
const vote_gene_lepen_03075 = [];
const vote_gene_rejet_03075 = [];

async function chartIt03075(){
    await GraphDATA03075();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03075-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03075
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03075
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03075-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03075,vote_lepen_03075,vote_rejet_03075]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03075-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03075,vote_lepenpop_03075,vote_rejetpop_03075]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03075"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03075
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03075
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03075
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03076*/
/*------------------------------------------------------------------ */
async function GraphDATA03076() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03076.push(vote_macron); 
    vote_lepen_03076.push(vote_lepen);
    vote_rejet_03076.push(vote_rejet);
    vote_macronpop_03076.push(vote_macronMediane);
    vote_lepenpop_03076.push(vote_lepenMediane);
    vote_rejetpop_03076.push(vote_rejetMediane);
    name_Commune_03076.push(nameCommune);
    Pourcentage_03076.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03076.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03076.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03076.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03076.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03076 = [];
const vote_lepen_03076 = [];
const vote_rejet_03076 = [];
const vote_macronpop_03076 = [];
const vote_lepenpop_03076 = [];
const vote_rejetpop_03076 = [];
const name_Commune_03076 = [];
const Pourcentage_03076 = [];
const Pourcentage_rejet_03076 = [];
const vote_gene_macron_03076 = [];
const vote_gene_lepen_03076 = [];
const vote_gene_rejet_03076 = [];

async function chartIt03076(){
    await GraphDATA03076();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03076-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03076
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03076
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03076-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03076,vote_lepen_03076,vote_rejet_03076]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03076-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03076,vote_lepenpop_03076,vote_rejetpop_03076]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03076"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03076
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03076
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03076
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03077*/
/*------------------------------------------------------------------ */
async function GraphDATA03077() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03077.push(vote_macron); 
    vote_lepen_03077.push(vote_lepen);
    vote_rejet_03077.push(vote_rejet);
    vote_macronpop_03077.push(vote_macronMediane);
    vote_lepenpop_03077.push(vote_lepenMediane);
    vote_rejetpop_03077.push(vote_rejetMediane);
    name_Commune_03077.push(nameCommune);
    Pourcentage_03077.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03077.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03077.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03077.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03077.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03077 = [];
const vote_lepen_03077 = [];
const vote_rejet_03077 = [];
const vote_macronpop_03077 = [];
const vote_lepenpop_03077 = [];
const vote_rejetpop_03077 = [];
const name_Commune_03077 = [];
const Pourcentage_03077 = [];
const Pourcentage_rejet_03077 = [];
const vote_gene_macron_03077 = [];
const vote_gene_lepen_03077 = [];
const vote_gene_rejet_03077 = [];

async function chartIt03077(){
    await GraphDATA03077();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03077-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03077
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03077
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03077-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03077,vote_lepen_03077,vote_rejet_03077]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03077-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03077,vote_lepenpop_03077,vote_rejetpop_03077]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03077"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03077
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03077
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03077
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03078*/
/*------------------------------------------------------------------ */
async function GraphDATA03078() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03078.push(vote_macron); 
    vote_lepen_03078.push(vote_lepen);
    vote_rejet_03078.push(vote_rejet);
    vote_macronpop_03078.push(vote_macronMediane);
    vote_lepenpop_03078.push(vote_lepenMediane);
    vote_rejetpop_03078.push(vote_rejetMediane);
    name_Commune_03078.push(nameCommune);
    Pourcentage_03078.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03078.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03078.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03078.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03078.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03078 = [];
const vote_lepen_03078 = [];
const vote_rejet_03078 = [];
const vote_macronpop_03078 = [];
const vote_lepenpop_03078 = [];
const vote_rejetpop_03078 = [];
const name_Commune_03078 = [];
const Pourcentage_03078 = [];
const Pourcentage_rejet_03078 = [];
const vote_gene_macron_03078 = [];
const vote_gene_lepen_03078 = [];
const vote_gene_rejet_03078 = [];

async function chartIt03078(){
    await GraphDATA03078();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03078-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03078
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03078
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03078-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03078,vote_lepen_03078,vote_rejet_03078]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03078-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03078,vote_lepenpop_03078,vote_rejetpop_03078]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03078"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03078
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03078
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03078
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03079*/
/*------------------------------------------------------------------ */
async function GraphDATA03079() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03079.push(vote_macron); 
    vote_lepen_03079.push(vote_lepen);
    vote_rejet_03079.push(vote_rejet);
    vote_macronpop_03079.push(vote_macronMediane);
    vote_lepenpop_03079.push(vote_lepenMediane);
    vote_rejetpop_03079.push(vote_rejetMediane);
    name_Commune_03079.push(nameCommune);
    Pourcentage_03079.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03079.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03079.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03079.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03079.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03079 = [];
const vote_lepen_03079 = [];
const vote_rejet_03079 = [];
const vote_macronpop_03079 = [];
const vote_lepenpop_03079 = [];
const vote_rejetpop_03079 = [];
const name_Commune_03079 = [];
const Pourcentage_03079 = [];
const Pourcentage_rejet_03079 = [];
const vote_gene_macron_03079 = [];
const vote_gene_lepen_03079 = [];
const vote_gene_rejet_03079 = [];

async function chartIt03079(){
    await GraphDATA03079();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03079-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03079
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03079
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03079-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03079,vote_lepen_03079,vote_rejet_03079]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03079-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03079,vote_lepenpop_03079,vote_rejetpop_03079]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03079"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03079
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03079
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03079
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03080*/
/*------------------------------------------------------------------ */
async function GraphDATA03080() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03080.push(vote_macron); 
    vote_lepen_03080.push(vote_lepen);
    vote_rejet_03080.push(vote_rejet);
    vote_macronpop_03080.push(vote_macronMediane);
    vote_lepenpop_03080.push(vote_lepenMediane);
    vote_rejetpop_03080.push(vote_rejetMediane);
    name_Commune_03080.push(nameCommune);
    Pourcentage_03080.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03080.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03080.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03080.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03080.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03080 = [];
const vote_lepen_03080 = [];
const vote_rejet_03080 = [];
const vote_macronpop_03080 = [];
const vote_lepenpop_03080 = [];
const vote_rejetpop_03080 = [];
const name_Commune_03080 = [];
const Pourcentage_03080 = [];
const Pourcentage_rejet_03080 = [];
const vote_gene_macron_03080 = [];
const vote_gene_lepen_03080 = [];
const vote_gene_rejet_03080 = [];

async function chartIt03080(){
    await GraphDATA03080();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03080-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03080
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03080
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03080-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03080,vote_lepen_03080,vote_rejet_03080]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03080-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03080,vote_lepenpop_03080,vote_rejetpop_03080]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03080"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03080
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03080
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03080
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03081*/
/*------------------------------------------------------------------ */
async function GraphDATA03081() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03081.push(vote_macron); 
    vote_lepen_03081.push(vote_lepen);
    vote_rejet_03081.push(vote_rejet);
    vote_macronpop_03081.push(vote_macronMediane);
    vote_lepenpop_03081.push(vote_lepenMediane);
    vote_rejetpop_03081.push(vote_rejetMediane);
    name_Commune_03081.push(nameCommune);
    Pourcentage_03081.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03081.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03081.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03081.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03081.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03081 = [];
const vote_lepen_03081 = [];
const vote_rejet_03081 = [];
const vote_macronpop_03081 = [];
const vote_lepenpop_03081 = [];
const vote_rejetpop_03081 = [];
const name_Commune_03081 = [];
const Pourcentage_03081 = [];
const Pourcentage_rejet_03081 = [];
const vote_gene_macron_03081 = [];
const vote_gene_lepen_03081 = [];
const vote_gene_rejet_03081 = [];

async function chartIt03081(){
    await GraphDATA03081();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03081-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03081
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03081
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03081-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03081,vote_lepen_03081,vote_rejet_03081]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03081-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03081,vote_lepenpop_03081,vote_rejetpop_03081]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03081"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03081
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03081
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03081
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03082*/
/*------------------------------------------------------------------ */
async function GraphDATA03082() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03082.push(vote_macron); 
    vote_lepen_03082.push(vote_lepen);
    vote_rejet_03082.push(vote_rejet);
    vote_macronpop_03082.push(vote_macronMediane);
    vote_lepenpop_03082.push(vote_lepenMediane);
    vote_rejetpop_03082.push(vote_rejetMediane);
    name_Commune_03082.push(nameCommune);
    Pourcentage_03082.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03082.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03082.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03082.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03082.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03082 = [];
const vote_lepen_03082 = [];
const vote_rejet_03082 = [];
const vote_macronpop_03082 = [];
const vote_lepenpop_03082 = [];
const vote_rejetpop_03082 = [];
const name_Commune_03082 = [];
const Pourcentage_03082 = [];
const Pourcentage_rejet_03082 = [];
const vote_gene_macron_03082 = [];
const vote_gene_lepen_03082 = [];
const vote_gene_rejet_03082 = [];

async function chartIt03082(){
    await GraphDATA03082();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03082-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03082
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03082
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03082-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03082,vote_lepen_03082,vote_rejet_03082]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03082-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03082,vote_lepenpop_03082,vote_rejetpop_03082]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03082"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03082
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03082
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03082
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03083*/
/*------------------------------------------------------------------ */
async function GraphDATA03083() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03083.push(vote_macron); 
    vote_lepen_03083.push(vote_lepen);
    vote_rejet_03083.push(vote_rejet);
    vote_macronpop_03083.push(vote_macronMediane);
    vote_lepenpop_03083.push(vote_lepenMediane);
    vote_rejetpop_03083.push(vote_rejetMediane);
    name_Commune_03083.push(nameCommune);
    Pourcentage_03083.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03083.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03083.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03083.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03083.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03083 = [];
const vote_lepen_03083 = [];
const vote_rejet_03083 = [];
const vote_macronpop_03083 = [];
const vote_lepenpop_03083 = [];
const vote_rejetpop_03083 = [];
const name_Commune_03083 = [];
const Pourcentage_03083 = [];
const Pourcentage_rejet_03083 = [];
const vote_gene_macron_03083 = [];
const vote_gene_lepen_03083 = [];
const vote_gene_rejet_03083 = [];

async function chartIt03083(){
    await GraphDATA03083();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03083-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03083
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03083
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03083-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03083,vote_lepen_03083,vote_rejet_03083]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03083-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03083,vote_lepenpop_03083,vote_rejetpop_03083]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03083"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03083
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03083
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03083
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03084*/
/*------------------------------------------------------------------ */
async function GraphDATA03084() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03084.push(vote_macron); 
    vote_lepen_03084.push(vote_lepen);
    vote_rejet_03084.push(vote_rejet);
    vote_macronpop_03084.push(vote_macronMediane);
    vote_lepenpop_03084.push(vote_lepenMediane);
    vote_rejetpop_03084.push(vote_rejetMediane);
    name_Commune_03084.push(nameCommune);
    Pourcentage_03084.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03084.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03084.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03084.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03084.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03084 = [];
const vote_lepen_03084 = [];
const vote_rejet_03084 = [];
const vote_macronpop_03084 = [];
const vote_lepenpop_03084 = [];
const vote_rejetpop_03084 = [];
const name_Commune_03084 = [];
const Pourcentage_03084 = [];
const Pourcentage_rejet_03084 = [];
const vote_gene_macron_03084 = [];
const vote_gene_lepen_03084 = [];
const vote_gene_rejet_03084 = [];

async function chartIt03084(){
    await GraphDATA03084();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03084-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03084
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03084
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03084-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03084,vote_lepen_03084,vote_rejet_03084]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03084-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03084,vote_lepenpop_03084,vote_rejetpop_03084]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03084"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03084
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03084
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03084
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03085*/
/*------------------------------------------------------------------ */
async function GraphDATA03085() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03085.push(vote_macron); 
    vote_lepen_03085.push(vote_lepen);
    vote_rejet_03085.push(vote_rejet);
    vote_macronpop_03085.push(vote_macronMediane);
    vote_lepenpop_03085.push(vote_lepenMediane);
    vote_rejetpop_03085.push(vote_rejetMediane);
    name_Commune_03085.push(nameCommune);
    Pourcentage_03085.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03085.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03085.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03085.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03085.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03085 = [];
const vote_lepen_03085 = [];
const vote_rejet_03085 = [];
const vote_macronpop_03085 = [];
const vote_lepenpop_03085 = [];
const vote_rejetpop_03085 = [];
const name_Commune_03085 = [];
const Pourcentage_03085 = [];
const Pourcentage_rejet_03085 = [];
const vote_gene_macron_03085 = [];
const vote_gene_lepen_03085 = [];
const vote_gene_rejet_03085 = [];

async function chartIt03085(){
    await GraphDATA03085();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03085-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03085
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03085
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03085-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03085,vote_lepen_03085,vote_rejet_03085]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03085-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03085,vote_lepenpop_03085,vote_rejetpop_03085]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03085"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03085
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03085
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03085
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03086*/
/*------------------------------------------------------------------ */
async function GraphDATA03086() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03086.push(vote_macron); 
    vote_lepen_03086.push(vote_lepen);
    vote_rejet_03086.push(vote_rejet);
    vote_macronpop_03086.push(vote_macronMediane);
    vote_lepenpop_03086.push(vote_lepenMediane);
    vote_rejetpop_03086.push(vote_rejetMediane);
    name_Commune_03086.push(nameCommune);
    Pourcentage_03086.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03086.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03086.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03086.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03086.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03086 = [];
const vote_lepen_03086 = [];
const vote_rejet_03086 = [];
const vote_macronpop_03086 = [];
const vote_lepenpop_03086 = [];
const vote_rejetpop_03086 = [];
const name_Commune_03086 = [];
const Pourcentage_03086 = [];
const Pourcentage_rejet_03086 = [];
const vote_gene_macron_03086 = [];
const vote_gene_lepen_03086 = [];
const vote_gene_rejet_03086 = [];

async function chartIt03086(){
    await GraphDATA03086();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03086-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03086
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03086
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03086-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03086,vote_lepen_03086,vote_rejet_03086]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03086-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03086,vote_lepenpop_03086,vote_rejetpop_03086]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03086"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03086
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03086
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03086
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03087*/
/*------------------------------------------------------------------ */
async function GraphDATA03087() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03087.push(vote_macron); 
    vote_lepen_03087.push(vote_lepen);
    vote_rejet_03087.push(vote_rejet);
    vote_macronpop_03087.push(vote_macronMediane);
    vote_lepenpop_03087.push(vote_lepenMediane);
    vote_rejetpop_03087.push(vote_rejetMediane);
    name_Commune_03087.push(nameCommune);
    Pourcentage_03087.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03087.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03087.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03087.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03087.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03087 = [];
const vote_lepen_03087 = [];
const vote_rejet_03087 = [];
const vote_macronpop_03087 = [];
const vote_lepenpop_03087 = [];
const vote_rejetpop_03087 = [];
const name_Commune_03087 = [];
const Pourcentage_03087 = [];
const Pourcentage_rejet_03087 = [];
const vote_gene_macron_03087 = [];
const vote_gene_lepen_03087 = [];
const vote_gene_rejet_03087 = [];

async function chartIt03087(){
    await GraphDATA03087();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03087-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03087
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03087
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03087-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03087,vote_lepen_03087,vote_rejet_03087]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03087-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03087,vote_lepenpop_03087,vote_rejetpop_03087]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03087"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03087
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03087
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03087
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03088*/
/*------------------------------------------------------------------ */
async function GraphDATA03088() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03088.push(vote_macron); 
    vote_lepen_03088.push(vote_lepen);
    vote_rejet_03088.push(vote_rejet);
    vote_macronpop_03088.push(vote_macronMediane);
    vote_lepenpop_03088.push(vote_lepenMediane);
    vote_rejetpop_03088.push(vote_rejetMediane);
    name_Commune_03088.push(nameCommune);
    Pourcentage_03088.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03088.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03088.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03088.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03088.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03088 = [];
const vote_lepen_03088 = [];
const vote_rejet_03088 = [];
const vote_macronpop_03088 = [];
const vote_lepenpop_03088 = [];
const vote_rejetpop_03088 = [];
const name_Commune_03088 = [];
const Pourcentage_03088 = [];
const Pourcentage_rejet_03088 = [];
const vote_gene_macron_03088 = [];
const vote_gene_lepen_03088 = [];
const vote_gene_rejet_03088 = [];

async function chartIt03088(){
    await GraphDATA03088();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03088-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03088
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03088
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03088-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03088,vote_lepen_03088,vote_rejet_03088]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03088-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03088,vote_lepenpop_03088,vote_rejetpop_03088]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03088"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03088
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03088
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03088
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03089*/
/*------------------------------------------------------------------ */
async function GraphDATA03089() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03089.push(vote_macron); 
    vote_lepen_03089.push(vote_lepen);
    vote_rejet_03089.push(vote_rejet);
    vote_macronpop_03089.push(vote_macronMediane);
    vote_lepenpop_03089.push(vote_lepenMediane);
    vote_rejetpop_03089.push(vote_rejetMediane);
    name_Commune_03089.push(nameCommune);
    Pourcentage_03089.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03089.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03089.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03089.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03089.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03089 = [];
const vote_lepen_03089 = [];
const vote_rejet_03089 = [];
const vote_macronpop_03089 = [];
const vote_lepenpop_03089 = [];
const vote_rejetpop_03089 = [];
const name_Commune_03089 = [];
const Pourcentage_03089 = [];
const Pourcentage_rejet_03089 = [];
const vote_gene_macron_03089 = [];
const vote_gene_lepen_03089 = [];
const vote_gene_rejet_03089 = [];

async function chartIt03089(){
    await GraphDATA03089();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03089-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03089
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03089
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03089-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03089,vote_lepen_03089,vote_rejet_03089]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03089-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03089,vote_lepenpop_03089,vote_rejetpop_03089]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03089"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03089
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03089
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03089
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03090*/
/*------------------------------------------------------------------ */
async function GraphDATA03090() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03090.push(vote_macron); 
    vote_lepen_03090.push(vote_lepen);
    vote_rejet_03090.push(vote_rejet);
    vote_macronpop_03090.push(vote_macronMediane);
    vote_lepenpop_03090.push(vote_lepenMediane);
    vote_rejetpop_03090.push(vote_rejetMediane);
    name_Commune_03090.push(nameCommune);
    Pourcentage_03090.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03090.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03090.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03090.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03090.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03090 = [];
const vote_lepen_03090 = [];
const vote_rejet_03090 = [];
const vote_macronpop_03090 = [];
const vote_lepenpop_03090 = [];
const vote_rejetpop_03090 = [];
const name_Commune_03090 = [];
const Pourcentage_03090 = [];
const Pourcentage_rejet_03090 = [];
const vote_gene_macron_03090 = [];
const vote_gene_lepen_03090 = [];
const vote_gene_rejet_03090 = [];

async function chartIt03090(){
    await GraphDATA03090();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03090-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03090
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03090
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03090-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03090,vote_lepen_03090,vote_rejet_03090]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03090-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03090,vote_lepenpop_03090,vote_rejetpop_03090]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03090"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03090
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03090
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03090
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03091*/
/*------------------------------------------------------------------ */
async function GraphDATA03091() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03091.push(vote_macron); 
    vote_lepen_03091.push(vote_lepen);
    vote_rejet_03091.push(vote_rejet);
    vote_macronpop_03091.push(vote_macronMediane);
    vote_lepenpop_03091.push(vote_lepenMediane);
    vote_rejetpop_03091.push(vote_rejetMediane);
    name_Commune_03091.push(nameCommune);
    Pourcentage_03091.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03091.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03091.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03091.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03091.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03091 = [];
const vote_lepen_03091 = [];
const vote_rejet_03091 = [];
const vote_macronpop_03091 = [];
const vote_lepenpop_03091 = [];
const vote_rejetpop_03091 = [];
const name_Commune_03091 = [];
const Pourcentage_03091 = [];
const Pourcentage_rejet_03091 = [];
const vote_gene_macron_03091 = [];
const vote_gene_lepen_03091 = [];
const vote_gene_rejet_03091 = [];

async function chartIt03091(){
    await GraphDATA03091();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03091-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03091
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03091
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03091-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03091,vote_lepen_03091,vote_rejet_03091]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03091-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03091,vote_lepenpop_03091,vote_rejetpop_03091]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03091"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03091
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03091
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03091
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03092*/
/*------------------------------------------------------------------ */
async function GraphDATA03092() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03092.push(vote_macron); 
    vote_lepen_03092.push(vote_lepen);
    vote_rejet_03092.push(vote_rejet);
    vote_macronpop_03092.push(vote_macronMediane);
    vote_lepenpop_03092.push(vote_lepenMediane);
    vote_rejetpop_03092.push(vote_rejetMediane);
    name_Commune_03092.push(nameCommune);
    Pourcentage_03092.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03092.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03092.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03092.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03092.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03092 = [];
const vote_lepen_03092 = [];
const vote_rejet_03092 = [];
const vote_macronpop_03092 = [];
const vote_lepenpop_03092 = [];
const vote_rejetpop_03092 = [];
const name_Commune_03092 = [];
const Pourcentage_03092 = [];
const Pourcentage_rejet_03092 = [];
const vote_gene_macron_03092 = [];
const vote_gene_lepen_03092 = [];
const vote_gene_rejet_03092 = [];

async function chartIt03092(){
    await GraphDATA03092();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03092-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03092
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03092
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03092-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03092,vote_lepen_03092,vote_rejet_03092]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03092-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03092,vote_lepenpop_03092,vote_rejetpop_03092]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03092"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03092
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03092
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03092
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03093*/
/*------------------------------------------------------------------ */
async function GraphDATA03093() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03093.push(vote_macron); 
    vote_lepen_03093.push(vote_lepen);
    vote_rejet_03093.push(vote_rejet);
    vote_macronpop_03093.push(vote_macronMediane);
    vote_lepenpop_03093.push(vote_lepenMediane);
    vote_rejetpop_03093.push(vote_rejetMediane);
    name_Commune_03093.push(nameCommune);
    Pourcentage_03093.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03093.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03093.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03093.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03093.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03093 = [];
const vote_lepen_03093 = [];
const vote_rejet_03093 = [];
const vote_macronpop_03093 = [];
const vote_lepenpop_03093 = [];
const vote_rejetpop_03093 = [];
const name_Commune_03093 = [];
const Pourcentage_03093 = [];
const Pourcentage_rejet_03093 = [];
const vote_gene_macron_03093 = [];
const vote_gene_lepen_03093 = [];
const vote_gene_rejet_03093 = [];

async function chartIt03093(){
    await GraphDATA03093();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03093-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03093
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03093
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03093-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03093,vote_lepen_03093,vote_rejet_03093]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03093-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03093,vote_lepenpop_03093,vote_rejetpop_03093]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03093"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03093
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03093
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03093
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03094*/
/*------------------------------------------------------------------ */
async function GraphDATA03094() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03094.push(vote_macron); 
    vote_lepen_03094.push(vote_lepen);
    vote_rejet_03094.push(vote_rejet);
    vote_macronpop_03094.push(vote_macronMediane);
    vote_lepenpop_03094.push(vote_lepenMediane);
    vote_rejetpop_03094.push(vote_rejetMediane);
    name_Commune_03094.push(nameCommune);
    Pourcentage_03094.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03094.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03094.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03094.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03094.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03094 = [];
const vote_lepen_03094 = [];
const vote_rejet_03094 = [];
const vote_macronpop_03094 = [];
const vote_lepenpop_03094 = [];
const vote_rejetpop_03094 = [];
const name_Commune_03094 = [];
const Pourcentage_03094 = [];
const Pourcentage_rejet_03094 = [];
const vote_gene_macron_03094 = [];
const vote_gene_lepen_03094 = [];
const vote_gene_rejet_03094 = [];

async function chartIt03094(){
    await GraphDATA03094();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03094-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03094
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03094
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03094-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03094,vote_lepen_03094,vote_rejet_03094]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03094-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03094,vote_lepenpop_03094,vote_rejetpop_03094]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03094"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03094
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03094
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03094
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03095*/
/*------------------------------------------------------------------ */
async function GraphDATA03095() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03095.push(vote_macron); 
    vote_lepen_03095.push(vote_lepen);
    vote_rejet_03095.push(vote_rejet);
    vote_macronpop_03095.push(vote_macronMediane);
    vote_lepenpop_03095.push(vote_lepenMediane);
    vote_rejetpop_03095.push(vote_rejetMediane);
    name_Commune_03095.push(nameCommune);
    Pourcentage_03095.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03095.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03095.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03095.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03095.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03095 = [];
const vote_lepen_03095 = [];
const vote_rejet_03095 = [];
const vote_macronpop_03095 = [];
const vote_lepenpop_03095 = [];
const vote_rejetpop_03095 = [];
const name_Commune_03095 = [];
const Pourcentage_03095 = [];
const Pourcentage_rejet_03095 = [];
const vote_gene_macron_03095 = [];
const vote_gene_lepen_03095 = [];
const vote_gene_rejet_03095 = [];

async function chartIt03095(){
    await GraphDATA03095();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03095-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03095
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03095
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03095-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03095,vote_lepen_03095,vote_rejet_03095]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03095-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03095,vote_lepenpop_03095,vote_rejetpop_03095]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03095"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03095
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03095
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03095
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03096*/
/*------------------------------------------------------------------ */
async function GraphDATA03096() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03096.push(vote_macron); 
    vote_lepen_03096.push(vote_lepen);
    vote_rejet_03096.push(vote_rejet);
    vote_macronpop_03096.push(vote_macronMediane);
    vote_lepenpop_03096.push(vote_lepenMediane);
    vote_rejetpop_03096.push(vote_rejetMediane);
    name_Commune_03096.push(nameCommune);
    Pourcentage_03096.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03096.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03096.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03096.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03096.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03096 = [];
const vote_lepen_03096 = [];
const vote_rejet_03096 = [];
const vote_macronpop_03096 = [];
const vote_lepenpop_03096 = [];
const vote_rejetpop_03096 = [];
const name_Commune_03096 = [];
const Pourcentage_03096 = [];
const Pourcentage_rejet_03096 = [];
const vote_gene_macron_03096 = [];
const vote_gene_lepen_03096 = [];
const vote_gene_rejet_03096 = [];

async function chartIt03096(){
    await GraphDATA03096();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03096-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03096
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03096
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03096-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03096,vote_lepen_03096,vote_rejet_03096]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03096-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03096,vote_lepenpop_03096,vote_rejetpop_03096]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03096"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03096
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03096
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03096
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03097*/
/*------------------------------------------------------------------ */
async function GraphDATA03097() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03097.push(vote_macron); 
    vote_lepen_03097.push(vote_lepen);
    vote_rejet_03097.push(vote_rejet);
    vote_macronpop_03097.push(vote_macronMediane);
    vote_lepenpop_03097.push(vote_lepenMediane);
    vote_rejetpop_03097.push(vote_rejetMediane);
    name_Commune_03097.push(nameCommune);
    Pourcentage_03097.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03097.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03097.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03097.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03097.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03097 = [];
const vote_lepen_03097 = [];
const vote_rejet_03097 = [];
const vote_macronpop_03097 = [];
const vote_lepenpop_03097 = [];
const vote_rejetpop_03097 = [];
const name_Commune_03097 = [];
const Pourcentage_03097 = [];
const Pourcentage_rejet_03097 = [];
const vote_gene_macron_03097 = [];
const vote_gene_lepen_03097 = [];
const vote_gene_rejet_03097 = [];

async function chartIt03097(){
    await GraphDATA03097();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03097-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03097
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03097
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03097-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03097,vote_lepen_03097,vote_rejet_03097]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03097-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03097,vote_lepenpop_03097,vote_rejetpop_03097]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03097"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03097
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03097
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03097
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03098*/
/*------------------------------------------------------------------ */
async function GraphDATA03098() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03098.push(vote_macron); 
    vote_lepen_03098.push(vote_lepen);
    vote_rejet_03098.push(vote_rejet);
    vote_macronpop_03098.push(vote_macronMediane);
    vote_lepenpop_03098.push(vote_lepenMediane);
    vote_rejetpop_03098.push(vote_rejetMediane);
    name_Commune_03098.push(nameCommune);
    Pourcentage_03098.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03098.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03098.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03098.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03098.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03098 = [];
const vote_lepen_03098 = [];
const vote_rejet_03098 = [];
const vote_macronpop_03098 = [];
const vote_lepenpop_03098 = [];
const vote_rejetpop_03098 = [];
const name_Commune_03098 = [];
const Pourcentage_03098 = [];
const Pourcentage_rejet_03098 = [];
const vote_gene_macron_03098 = [];
const vote_gene_lepen_03098 = [];
const vote_gene_rejet_03098 = [];

async function chartIt03098(){
    await GraphDATA03098();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03098-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03098
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03098
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03098-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03098,vote_lepen_03098,vote_rejet_03098]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03098-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03098,vote_lepenpop_03098,vote_rejetpop_03098]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03098"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03098
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03098
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03098
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03099*/
/*------------------------------------------------------------------ */
async function GraphDATA03099() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03099.push(vote_macron); 
    vote_lepen_03099.push(vote_lepen);
    vote_rejet_03099.push(vote_rejet);
    vote_macronpop_03099.push(vote_macronMediane);
    vote_lepenpop_03099.push(vote_lepenMediane);
    vote_rejetpop_03099.push(vote_rejetMediane);
    name_Commune_03099.push(nameCommune);
    Pourcentage_03099.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03099.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03099.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03099.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03099.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03099 = [];
const vote_lepen_03099 = [];
const vote_rejet_03099 = [];
const vote_macronpop_03099 = [];
const vote_lepenpop_03099 = [];
const vote_rejetpop_03099 = [];
const name_Commune_03099 = [];
const Pourcentage_03099 = [];
const Pourcentage_rejet_03099 = [];
const vote_gene_macron_03099 = [];
const vote_gene_lepen_03099 = [];
const vote_gene_rejet_03099 = [];

async function chartIt03099(){
    await GraphDATA03099();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03099-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03099
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03099
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03099-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03099,vote_lepen_03099,vote_rejet_03099]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03099-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03099,vote_lepenpop_03099,vote_rejetpop_03099]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03099"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03099
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03099
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03099
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}