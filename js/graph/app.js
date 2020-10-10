/********************************************************************** */
/*Manipulation FICHIER CSV DATA */
/********************************************************************** */

/*les Variable Utilisé dans les Graphiques*/ 
const macron =[];
const lepen =[];
const abs =[];
const blc =[];
const nul = [];
const Pourcentage = [];
const Pourcentage_rejet = [];
const Pourcentage_Bas = [];
const Pourcentage_Mediane = [];
const Pourcentage_Haut = [];
const nameCommune = [];
const vote_macron = [];
const vote_lepen = [];
const vote_abs = [];
const vote_blc = [];
const vote_nul = [];
const name_rejeter = ["rejet"];
const vote_gene_macron = [];
const vote_gene_lepen = [];
const vote_gene_rejet = [];

/*Récuperation du Fichier CSV*/

async function getData00 () {
    const response = await fetch('Data_ref.csv');
    const data = await response.text();
    
/* Change en Liste chaque Commune*/
    const rows = data.split(/\n/);
    
/*Choisie une commune dans la liste*/   
    const bob = rows[0];
/*Change le commune choisie en Liste*/   
    const toto = bob.split(/\n/);
/* Recherche dans la Liste les élément voulu*/
    toto.forEach(elt => {
        const row = elt.split(',');
        const name_abs = row[19];
        const name_blc = row[23]; 
        const name_nul = row[25]; 
        abs.push(name_abs);
        blc.push(name_blc);
        nul.push(name_nul);
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01001*/
/*------------------------------------------------------------------ */

/*Récuperation du Fichier CSV*/

async function getData01 () {
    const response = await fetch('Data_ref.csv');
    const data = await response.text();
    
/* Change en Liste chaque Commune*/
    const rows = data.split(/\n/).slice(1);
    
/*Choisie une commune dans la liste*/   
    const bob = rows[0];
/*Change le commune choisie en Liste*/   
    const toto = bob.split(/\n/);
/* Recherche dans la Liste les élément voulu*/
    toto.forEach(elt => {
        const row = elt.split(',');
        const commune = row[13];
        const Nom01 = row[29]; 
        const Nom02 = row[32];
        const vote01 = row[31];
        const vote02 = row[32];
        const nbr_abstention = row[20];
        const nbr_blanc = row[24];
        const nbr_nul = row[26];
        const bas_vote01 = row[41];
        const vote_rejet =row[62];
        const bas_vote02 = row[43];
        const bas_rejet = row[63];
        const med_vote01 = row[50];
        const med_vote02 = row[52];
        const med_rejet = row[64];
        const haut_vote01 = row[59];
        const haut_vote02 = row[61];
        const haut_rejet = row[65];
        nameCommune.push(commune);
        console.log(nameCommune);
        macron.push(Nom01);
        lepen.push(Nom02);
        Pourcentage.push(vote01, vote02, nbr_abstention, nbr_blanc, nbr_nul);
        Pourcentage_rejet.push(vote01, vote02, vote_rejet);
        Pourcentage_Bas.push(bas_vote01, bas_vote02, bas_rejet);
        Pourcentage_Mediane.push(med_vote01, med_vote02, med_rejet);
        Pourcentage_Haut.push(haut_vote01, haut_vote02,haut_rejet);
        vote_abs.push(nbr_abstention);
        vote_blc.push(nbr_blanc);
        vote_nul.push(nbr_nul);
        vote_macron.push(vote01);
        vote_lepen.push(vote02);
        vote_gene_macron.push(vote01, bas_vote01, med_vote01, haut_vote01);
        vote_gene_lepen.push(vote02, bas_vote02, med_vote02, haut_vote02);
        vote_gene_rejet.push(vote_rejet, bas_rejet, med_rejet, haut_rejet);
    });
}


/******************************************************************* */
/*GRAPHIQUE BAR SIMPLE */
/******************************************************************* */

/*Function du Graphique */
chartIt01001();
chartIt01002();
chartIt01003();

async function chartIt01001(){
    await getData00();
    await getData01();

// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01001-01"), {  
        type: 'bar',
        data: {
        labels: [macron, lepen, abs, blc, nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage
            }
         ]
        },
        options: {
        legend: { display: false },
        title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + nameCommune
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01001-01"), {
        type: 'doughnut',
        data: {
          labels: [macron, lepen, name_rejeter],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: Pourcentage_Bas
            }
          ]
        },
    });
    const myChart03 = new Chart(document.getElementById("polar-chart_01001-02"), {
        type: 'doughnut',
        data: {
          labels: [macron, lepen, name_rejeter],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: Pourcentage_Mediane
            }
          ]
        },
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01001-03"), {
        type: 'doughnut',
        data: {
          labels: [macron, lepen, name_rejeter],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: Pourcentage_Haut
            }
          ]
        },
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01001"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Basse", "Moyenne Médiane", "Moyenne Haute"],
            datasets: [
            {
                label: macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron
            }, {
                label: lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen
            },{
                label: name_rejeter,
                backgroundColor: "#c45850",
                data: vote_gene_rejet
                }
            ]
        },
        options: {
            title: {
            display: true,
            text: 'Population growth (millions)'
            }
        }
    });
}

/*------------------------------------------------------------------ */
/*COMMUNE 01002*/
/*------------------------------------------------------------------ */
const abs02 =[];
const blc02 =[];
const nul02 = [];
const Pourcentage02 = [];
const Pourcentage_rejet02 = [];
const Pourcentage_Bas02 = [];
const Pourcentage_Mediane02 = [];
const Pourcentage_Haut02 = [];
const nameCommune02 = [];
const vote_macron02 = [];
const vote_lepen02 = [];
const vote_abs02 = [];
const vote_blc02 = [];
const vote_nul02 = [];
const vote_gene_macron02 = [];
const vote_gene_lepen02 = [];
const vote_gene_rejet02 = [];
/*Récuperation du Fichier CSV*/
async function getData02 () {
    const response = await fetch('Data_Ref.csv');
    const data = await response.text();
    
/* Change en Liste chaque Commune*/
    const rows = data.split(/\n/).slice(1);
    
/*Choisie une commune dans la liste*/   
    const bob = rows[1];
/*Change le commune choisie en Liste*/   
    const toto = bob.split(/\n/);
/* Recherche dans la Liste les élément voulu*/
    toto.forEach(elt => {
        const row = elt.split(',');
        const commune = row[11];
        const vote01 = row[29];
        const vote02 = row[32];
        const nbr_abstention = row[18];
        const nbr_blanc = row[22];
        const nbr_nul = row[24];
        const bas_vote01 = row[39];
        const vote_rejet =row[60];
        const bas_vote02 = row[41];
        const bas_rejet = row[61];
        const med_vote01 = row[48];
        const med_vote02 = row[50];
        const med_rejet = row[62];
        const haut_vote01 = row[57];
        const haut_vote02 = row[59];
        const haut_rejet = row[63];
        nameCommune02.push(commune);
        Pourcentage02.push(vote01, vote02, nbr_abstention, nbr_blanc, nbr_nul);
        Pourcentage_Bas02.push(bas_vote01, bas_vote02, bas_rejet);
        Pourcentage_Mediane02.push(med_vote01, med_vote02, med_rejet);
        Pourcentage_Haut02.push(haut_vote01, haut_vote02,haut_rejet);
        vote_abs02.push(nbr_abstention);
        vote_blc02.push(nbr_blanc);
        vote_nul02.push(nbr_nul);
        vote_macron02.push(vote01);
        vote_lepen02.push(vote02);
        vote_gene_macron02.push(vote01, bas_vote01, med_vote01, haut_vote01);
        vote_gene_lepen02.push(vote02, bas_vote02, med_vote02, haut_vote02);
        vote_gene_rejet02.push(vote_rejet, bas_rejet, med_rejet, haut_rejet);
    });
}
/*Function du Graphique */
async function chartIt01002(){
    await getData02();

// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01002-01"), {  
        type: 'bar',
        data: {
        labels: [macron, lepen, abs, blc, nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage02
            }
         ]
        },
        options: {
        legend: { display: false },
        title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + nameCommune02
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01002-01"), {
        type: 'doughnut',
        data: {
          labels: [macron, lepen, name_rejeter],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: Pourcentage_Bas02
            }
          ]
        },
    });
    const myChart03 = new Chart(document.getElementById("polar-chart_01002-02"), {
        type: 'doughnut',
        data: {
          labels: [macron, lepen, name_rejeter],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: Pourcentage_Mediane02
            }
          ]
        },
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01002-03"), {
        type: 'doughnut',
        data: {
          labels: [macron, lepen, name_rejeter],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: Pourcentage_Haut02
            }
          ]
        },
    });     
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01002"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Basse", "Moyenne Médiane", "Moyenne Haute"],
            datasets: [
            {
                label: macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron02
            }, {
                label: lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen02
            },{
                label: name_rejeter,
                backgroundColor: "#c45850",
                data: vote_gene_rejet02
                }
            ]
        },
        options: {
            title: {
            display: true,
            text: 'Population growth (millions)'
            }
        }
    });
}

/*------------------------------------------------------------------ */
/*COMMUNE 01003*/
/*------------------------------------------------------------------ */
const abs03 =[];
const blc03 =[];
const nul03 = [];
const Pourcentage03 = [];
const Pourcentage_rejet03 = [];
const Pourcentage_Bas03 = [];
const Pourcentage_Mediane03 = [];
const Pourcentage_Haut03 = [];
const nameCommune03 = [];
const vote_macron03 = [];
const vote_lepen03 = [];
const vote_abs03 = [];
const vote_blc03 = [];
const vote_nul03 = [];
const vote_gene_macron03 = [];
const vote_gene_lepen03 = [];
const vote_gene_rejet03 = [];
/*Récuperation du Fichier CSV*/
async function getData03 () {
    const response = await fetch('Data_Ref.csv');
    const data = await response.text();
    
/* Change en Liste chaque Commune*/
    const rows = data.split(/\n/).slice(1);
    
/*Choisie une commune dans la liste*/   
    const bob = rows[2];
/*Change le commune choisie en Liste*/   
    const toto = bob.split(/\n/);
/* Recherche dans la Liste les élément voulu*/
    toto.forEach(elt => {
        const row = elt.split(',');
        const commune = row[11];
        const vote01 = row[29];
        const vote03 = row[32];
        const nbr_abstention = row[18];
        const nbr_blanc = row[22];
        const nbr_nul = row[24];
        const bas_vote01 = row[39];
        const vote_rejet =row[60];
        const bas_vote03 = row[41];
        const bas_rejet = row[61];
        const med_vote01 = row[48];
        const med_vote03 = row[50];
        const med_rejet = row[62];
        const haut_vote01 = row[57];
        const haut_vote03 = row[59];
        const haut_rejet = row[63];
        nameCommune03.push(commune);
        Pourcentage03.push(vote01, vote03, nbr_abstention, nbr_blanc, nbr_nul);
        Pourcentage_Bas03.push(bas_vote01, bas_vote03, bas_rejet);
        Pourcentage_Mediane03.push(med_vote01, med_vote03, med_rejet);
        Pourcentage_Haut03.push(haut_vote01, haut_vote03,haut_rejet);
        vote_abs03.push(nbr_abstention);
        vote_blc03.push(nbr_blanc);
        vote_nul03.push(nbr_nul);
        vote_macron03.push(vote01);
        vote_lepen03.push(vote03);
        vote_gene_macron03.push(vote01, bas_vote01, med_vote01, haut_vote01);
        vote_gene_lepen03.push(vote03, bas_vote03, med_vote03, haut_vote03);
        vote_gene_rejet03.push(vote_rejet, bas_rejet, med_rejet, haut_rejet);
    });
}
/*Function du Graphique */
async function chartIt01003(){
    await getData03();

// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01003-01"), {  
        type: 'bar',
        data: {
        labels: [macron, lepen, abs, blc, nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage03
            }
         ]
        },
        options: {
        legend: { display: false },
        title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + nameCommune03
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01003-01"), {
        type: 'doughnut',
        data: {
          labels: [macron, lepen, name_rejeter],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: Pourcentage_Bas03
            }
          ]
        },
    });
    const myChart03 = new Chart(document.getElementById("polar-chart_01003-03"), {
        type: 'doughnut',
        data: {
          labels: [macron, lepen, name_rejeter],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: Pourcentage_Mediane03
            }
          ]
        },
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01003-03"), {
        type: 'doughnut',
        data: {
          labels: [macron, lepen, name_rejeter],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: Pourcentage_Haut03
            }
          ]
        },
    });     
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01003"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Basse", "Moyenne Médiane", "Moyenne Haute"],
            datasets: [
            {
                label: macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron03
            }, {
                label: lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen03
            },{
                label: name_rejeter,
                backgroundColor: "#c45850",
                data: vote_gene_rejet03
                }
            ]
        },
        options: {
            title: {
            display: true,
            text: 'Population growth (millions)'
            }
        }
    });
}


