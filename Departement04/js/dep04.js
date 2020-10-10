async function DataJSON() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[0];
    /*Récupere les données que je veut de la Commune */
    name_04001 = rows.Libellé_géographique;
    Pop_04001 = rows.Population_en_2017;
    Pop_017_04001 = rows.Pop_017_ans_2017;
    Pop_mediane_vote_04001 = rows.Popu_possible_voté;
    nbr_inscrit_04001 = rows.Inscrits;
    /*Pose dans le Menu*/
    document.querySelector('#list_04001').textContent = name_04001;
/*--------------------------------------------------------------------------*/
    var body = document.querySelector('#body')
    var path = document.querySelector('#map01')
    /******************************************************************** */
    let com_04001 = document.getElementById("f-path-04001");
    let list_04001 = document.getElementById("list_04001");
    function togg04001() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04001-01').classList.remove('visible')
        document.querySelector('#polar-chart_04001-01').classList.remove('visible')
        document.querySelector('#polar-chart_04001-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04001').classList.remove('visible')
        document.querySelector('#f-path-04001').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04001
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04001
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04001
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04001
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04001
    }
    com_04001.onclick = togg04001;
    list_04001.onclick = togg04001;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04002 = data[1];
    /*Récupere les données que je veut de la Commune */
    name_04002 = rows04002.Libellé_géographique;
    Pop_04002 = rows04002.Population_en_2017;
    Pop_017_04002 = rows04002.Pop_017_ans_2017;
    Pop_mediane_vote_04002 = rows04002.Popu_possible_voté;
    nbr_inscrit_04002 = rows04002.Inscrits;  
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04002').textContent = name_04002;
/*--------------------------------------------------------------------------*/
    let com_04002 = document.getElementById("f-path-04002");
    let list_04002 = document.getElementById("list_04002");
    /******************************************************************** */
    function togg04002() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04002-01').classList.remove('visible')
        document.querySelector('#polar-chart_04002-01').classList.remove('visible')
        document.querySelector('#polar-chart_04002-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04002').classList.remove('visible')
        document.querySelector('#f-path-04002').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04002;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04002
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04002
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04002
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04002
    }
    com_04002.onclick = togg04002;
    list_04002.onclick = togg04002;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04003 = data[2];
    /*Récupere les données que je veut de la Commune */
    name_04003 = rows04003.Libellé_géographique;
    Pop_04003 = rows04003.Population_en_2017;
    Pop_017_04003 = rows04003.Pop_017_ans_2017;
    Pop_mediane_vote_04003 = rows04003.Popu_possible_voté;
    nbr_inscrit_04003 = rows04003.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04003').textContent = name_04003;
    let com_04003 = document.getElementById("f-path-04003");
    let list_04003 = document.getElementById("list_04003");
    function togg04003() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04003-01').classList.remove('visible')
        document.querySelector('#polar-chart_04003-01').classList.remove('visible')
        document.querySelector('#polar-chart_04003-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04003').classList.remove('visible')
        document.querySelector('#f-path-04003').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04003;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04003
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04003
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04003
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04003
    }
    com_04003.onclick = togg04003;
    list_04003.onclick = togg04003;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04004 = data[3];
    /*Récupere les données que je veut de la Commune */
    name_04004 = rows04004.Libellé_géographique;
    Pop_04004 = rows04004.Population_en_2017;
    Pop_017_04004 = rows04004.Pop_017_ans_2017;
    Pop_mediane_vote_04004 = rows04004.Popu_possible_voté;
    nbr_inscrit_04004 = rows04004.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04004').textContent = name_04004;
    let com_04004 = document.getElementById("f-path-04004");
    let list_04004 = document.getElementById("list_04004");
    function togg04004() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04004-01').classList.remove('visible')
        document.querySelector('#polar-chart_04004-01').classList.remove('visible')
        document.querySelector('#polar-chart_04004-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04004').classList.remove('visible')
        document.querySelector('#f-path-04004').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04004;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04004
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04004
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04004
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04004
    }
    com_04004.onclick = togg04004;
    list_04004.onclick = togg04004;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04005 = data[4];
    /*Récupere les données que je veut de la Commune */
    name_04005 = rows04005.Libellé_géographique;
    Pop_04005 = rows04005.Population_en_2017;
    Pop_017_04005 = rows04005.Pop_017_ans_2017;
    Pop_mediane_vote_04005 = rows04005.Popu_possible_voté;
    nbr_inscrit_04005 = rows04005.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04005').textContent = name_04005;
    let com_04005 = document.getElementById("f-path-04005");
    let list_04005 = document.getElementById("list_04005");
    function togg04005() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04005-01').classList.remove('visible')
        document.querySelector('#polar-chart_04005-01').classList.remove('visible')
        document.querySelector('#polar-chart_04005-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04005').classList.remove('visible')
        document.querySelector('#f-path-04005').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04005
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04005
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04005
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04005
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04005
    }
    com_04005.onclick = togg04005;
    list_04005.onclick = togg04005;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04006 = data[5];
    /*Récupere les données que je veut de la Commune */
    name_04006 = rows04006.Libellé_géographique;
    Pop_04006 = rows04006.Population_en_2017;
    Pop_017_04006 = rows04006.Pop_017_ans_2017;
    Pop_mediane_vote_04006 = rows04006.Popu_possible_voté;
    nbr_inscrit_04006 = rows04006.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04006').textContent = name_04006;
    let com_04006 = document.getElementById("f-path-04006");
    let list_04006 = document.getElementById("list_04006");
    function togg04006() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04006-01').classList.remove('visible')
        document.querySelector('#polar-chart_04006-01').classList.remove('visible')
        document.querySelector('#polar-chart_04006-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04006').classList.remove('visible')
        document.querySelector('#f-path-04006').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04006
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04006
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04006
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04006
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04006
    }
    com_04006.onclick = togg04006;
    list_04006.onclick = togg04006;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04007 = data[6];
    /*Récupere les données que je veut de la Commune */
    name_04007 = rows04007.Libellé_géographique;
    Pop_04007 = rows04007.Population_en_2017;
    Pop_017_04007 = rows04007.Pop_017_ans_2017;
    Pop_mediane_vote_04007 = rows04007.Popu_possible_voté;
    nbr_inscrit_04007 = rows04007.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04007').textContent = name_04007; 
    let com_04007 = document.getElementById("f-path-04007");
    let list_04007 = document.getElementById("list_04007");
    function togg04007() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04007-01').classList.remove('visible')
        document.querySelector('#polar-chart_04007-01').classList.remove('visible')
        document.querySelector('#polar-chart_04007-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04007').classList.remove('visible')
        document.querySelector('#f-path-04007').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04007
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04007
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04007
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04007
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04007
    }
    com_04007.onclick = togg04007;
    list_04007.onclick = togg04007;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04008 = data[7];
    
    /*Récupere les données que je veut de la Commune */
    name_04008 = rows04008.Libellé_géographique;
    Pop_04008 = rows04008.Population_en_2017;
    Pop_017_04008 = rows04008.Pop_017_ans_2017;
    Pop_mediane_vote_04008 = rows04008.Popu_possible_voté;
    nbr_inscrit_04008 = rows04008.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04008').textContent = name_04008;
   
    let com_04008 = document.getElementById("f-path-04008");
    let list_04008 = document.getElementById("list_04008");


    function togg04008() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04008-01').classList.remove('visible')
        document.querySelector('#polar-chart_04008-01').classList.remove('visible')
        document.querySelector('#polar-chart_04008-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04008').classList.remove('visible')
        document.querySelector('#f-path-04008').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04008
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04008
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04008
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04008
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04008
    }
    com_04008.onclick = togg04008;
    list_04008.onclick = togg04008;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04009 = data[8];
    
    /*Récupere les données que je veut de la Commune */
    name_04009 = rows04009.Libellé_géographique;
    Pop_04009 = rows04009.Population_en_2017;
    Pop_017_04009 = rows04009.Pop_017_ans_2017;
    Pop_mediane_vote_04009 = rows04009.Popu_possible_voté;
    nbr_inscrit_04009 = rows04009.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04009').textContent = name_04009;

    let com_04009 = document.getElementById("f-path-04009");
    let list_04009 = document.getElementById("list_04009");


    function togg04009() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04009-01').classList.remove('visible')
        document.querySelector('#polar-chart_04009-01').classList.remove('visible')
        document.querySelector('#polar-chart_04009-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04009').classList.remove('visible')
        document.querySelector('#f-path-04009').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04009
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04009
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04009
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04009
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04009
    }
    com_04009.onclick = togg04009;
    list_04009.onclick = togg04009;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04010 = data[9];
 
    /*Récupere les données que je veut de la Commune */
    name_04010 = rows04010.Libellé_géographique;
    Pop_04010 = rows04010.Population_en_2017;
    Pop_017_04010 = rows04010.Pop_017_ans_2017;
    Pop_mediane_vote_04010 = rows04010.Popu_possible_voté;
    nbr_inscrit_04010 = rows04010.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04010').textContent = name_04010;

    let com_04010 = document.getElementById("f-path-04010");
    let list_04010 = document.getElementById("list_04010");


    function togg04010() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04010-01').classList.remove('visible')
        document.querySelector('#polar-chart_04010-01').classList.remove('visible')
        document.querySelector('#polar-chart_04010-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04010').classList.remove('visible')
        document.querySelector('#f-path-04010').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04010
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04010
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04010
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04010
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04010
    }
    com_04010.onclick = togg04010;
    list_04010.onclick = togg04010;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04011 = data[10];

    /*Récupere les données que je veut de la Commune */
    name_04011 = rows04011.Libellé_géographique;
    Pop_04011 = rows04011.Population_en_2017;
    Pop_017_04011 = rows04011.Pop_017_ans_2017;
    Pop_mediane_vote_04011 = rows04011.Popu_possible_voté;
    nbr_inscrit_04011 = rows04011.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04011').textContent = name_04011;
   
    let com_04011 = document.getElementById("f-path-04011");
    let list_04011 = document.getElementById("list_04011");


    function togg04011() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04011-01').classList.remove('visible')
        document.querySelector('#polar-chart_04011-01').classList.remove('visible')
        document.querySelector('#polar-chart_04011-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04011').classList.remove('visible')
        document.querySelector('#f-path-04011').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04011
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04011
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04011
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04011
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04011
    }
    com_04011.onclick = togg04011;
    list_04011.onclick = togg04011;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04012 = data[11];

    /*Récupere les données que je veut de la Commune */
    name_04012 = rows04012.Libellé_géographique;
    Pop_04012 = rows04012.Population_en_2017;
    Pop_017_04012 = rows04012.Pop_017_ans_2017;
    Pop_mediane_vote_04012 = rows04012.Popu_possible_voté;
    nbr_inscrit_04012 = rows04012.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04012').textContent = name_04012;
   
    let com_04012 = document.getElementById("f-path-04012");
    let list_04012 = document.getElementById("list_04012");


    function togg04012() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04012-01').classList.remove('visible')
        document.querySelector('#polar-chart_04012-01').classList.remove('visible')
        document.querySelector('#polar-chart_04012-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04012').classList.remove('visible')
        document.querySelector('#f-path-04012').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04012
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04012
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04012
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04012
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04012
    }
    com_04012.onclick = togg04012;
    list_04012.onclick = togg04012;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04013 = data[12];

    /*Récupere les données que je veut de la Commune */
    name_04013 = rows04013.Libellé_géographique;
    Pop_04013 = rows04013.Population_en_2017;
    Pop_017_04013 = rows04013.Pop_017_ans_2017;
    Pop_mediane_vote_04013 = rows04013.Popu_possible_voté;
    nbr_inscrit_04013 = rows04013.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04013').textContent = name_04013;
   
    let com_04013 = document.getElementById("f-path-04013");
    let list_04013 = document.getElementById("list_04013");


    function togg04013() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04013-01').classList.remove('visible')
        document.querySelector('#polar-chart_04013-01').classList.remove('visible')
        document.querySelector('#polar-chart_04013-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04013').classList.remove('visible')
        document.querySelector('#f-path-04013').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04013
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04013
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04013
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04013
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04013
    }
    com_04013.onclick = togg04013;
    list_04013.onclick = togg04013;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04014 = data[13];

    /*Récupere les données que je veut de la Commune */
    name_04014 = rows04014.Libellé_géographique;
    Pop_04014 = rows04014.Population_en_2017;
    Pop_017_04014 = rows04014.Pop_017_ans_2017;
    Pop_mediane_vote_04014 = rows04014.Popu_possible_voté;
    nbr_inscrit_04014 = rows04014.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04014').textContent = name_04014;
   
    let com_04014 = document.getElementById("f-path-04014");
    let list_04014 = document.getElementById("list_04014");


    function togg04014() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04014-01').classList.remove('visible')
        document.querySelector('#polar-chart_04014-01').classList.remove('visible')
        document.querySelector('#polar-chart_04014-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04014').classList.remove('visible')
        document.querySelector('#f-path-04014').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04014
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04014
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04014
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04014
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04014
    }
    com_04014.onclick = togg04014;
    list_04014.onclick = togg04014;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04015 = data[14];

    /*Récupere les données que je veut de la Commune */
    name_04015 = rows04015.Libellé_géographique;
    Pop_04015 = rows04015.Population_en_2017;
    Pop_017_04015 = rows04015.Pop_017_ans_2017;
    Pop_mediane_vote_04015 = rows04015.Popu_possible_voté;
    nbr_inscrit_04015 = rows04015.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04015').textContent = name_04015;
   
    let com_04015 = document.getElementById("f-path-04015");
    let list_04015 = document.getElementById("list_04015");


    function togg04015() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04015-01').classList.remove('visible')
        document.querySelector('#polar-chart_04015-01').classList.remove('visible')
        document.querySelector('#polar-chart_04015-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04015').classList.remove('visible')
        document.querySelector('#f-path-04015').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04015
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04015
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04015
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04015
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04015
    }
    com_04015.onclick = togg04015;
    list_04015.onclick = togg04015;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04016 = data[15];

    /*Récupere les données que je veut de la Commune */
    name_04016 = rows04016.Libellé_géographique;
    Pop_04016 = rows04016.Population_en_2017;
    Pop_017_04016 = rows04016.Pop_017_ans_2017;
    Pop_mediane_vote_04016 = rows04016.Popu_possible_voté;
    nbr_inscrit_04016 = rows04016.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04016').textContent = name_04016;
   
    let com_04016 = document.getElementById("f-path-04016");
    let list_04016 = document.getElementById("list_04016");


    function togg04016() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04016-01').classList.remove('visible')
        document.querySelector('#polar-chart_04016-01').classList.remove('visible')
        document.querySelector('#polar-chart_04016-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04016').classList.remove('visible')
        document.querySelector('#f-path-04016').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04016
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04016
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04016
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04016
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04016
    }
    com_04016.onclick = togg04016;
    list_04016.onclick = togg04016;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04017 = data[16];

    /*Récupere les données que je veut de la Commune */
    name_04017 = rows04017.Libellé_géographique;
    Pop_04017 = rows04017.Population_en_2017;
    Pop_017_04017 = rows04017.Pop_017_ans_2017;
    Pop_mediane_vote_04017 = rows04017.Popu_possible_voté;
    nbr_inscrit_04017 = rows04017.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04017').textContent = name_04017;
   
    let com_04017 = document.getElementById("f-path-04017");
    let list_04017 = document.getElementById("list_04017");


    function togg04017() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04017-01').classList.remove('visible')
        document.querySelector('#polar-chart_04017-01').classList.remove('visible')
        document.querySelector('#polar-chart_04017-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04017').classList.remove('visible')
        document.querySelector('#f-path-04017').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04017
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04017
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04017
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04017
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04017
    }
    com_04017.onclick = togg04017;
    list_04017.onclick = togg04017;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04018 = data[17];

    /*Récupere les données que je veut de la Commune */
    name_04018 = rows04018.Libellé_géographique;
    Pop_04018 = rows04018.Population_en_2017;
    Pop_017_04018 = rows04018.Pop_017_ans_2017;
    Pop_mediane_vote_04018 = rows04017.Popu_possible_voté;
    nbr_inscrit_04018 = rows04018.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04018').textContent = name_04018;
   
    let com_04018 = document.getElementById("f-path-04018");
    let list_04018 = document.getElementById("list_04018");


    function togg04018() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04018-01').classList.remove('visible')
        document.querySelector('#polar-chart_04018-01').classList.remove('visible')
        document.querySelector('#polar-chart_04018-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04018').classList.remove('visible')
        document.querySelector('#f-path-04018').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04018
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04018
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04018
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04018
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04018
    }
    com_04018.onclick = togg04018;
    list_04018.onclick = togg04018;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04019 = data[18];

    /*Récupere les données que je veut de la Commune */
    name_04019 = rows04019.Libellé_géographique;
    Pop_04019 = rows04019.Population_en_2017;
    Pop_017_04019 = rows04019.Pop_017_ans_2017;
    Pop_mediane_vote_04019 = rows04019.Popu_possible_voté;
    nbr_inscrit_04019 = rows04019.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04019').textContent = name_04019;
   
    let com_04019 = document.getElementById("f-path-04019");
    let list_04019 = document.getElementById("list_04019");


    function togg04019() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04019-01').classList.remove('visible')
        document.querySelector('#polar-chart_04019-01').classList.remove('visible')
        document.querySelector('#polar-chart_04019-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04019').classList.remove('visible')
        document.querySelector('#f-path-04019').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04019
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04019
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04019
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04019
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04019
    }
    com_04019.onclick = togg04019;
    list_04019.onclick = togg04019;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04020 = data[19];

    /*Récupere les données que je veut de la Commune */
    name_04020 = rows04020.Libellé_géographique;
    Pop_04020 = rows04020.Population_en_2017;
    Pop_017_04020 = rows04020.Pop_017_ans_2017;
    Pop_mediane_vote_04020 = rows04020.Popu_possible_voté;
    nbr_inscrit_04020 = rows04020.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04020').textContent = name_04020;
   
    let com_04020 = document.getElementById("f-path-04020");
    let list_04020 = document.getElementById("list_04020");


    function togg04020() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04020-01').classList.remove('visible')
        document.querySelector('#polar-chart_04020-01').classList.remove('visible')
        document.querySelector('#polar-chart_04020-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04020').classList.remove('visible')
        document.querySelector('#f-path-04020').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04020
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04020
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04020
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04020
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04020
    }
    com_04020.onclick = togg04020;
    list_04020.onclick = togg04020;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04021 = data[20];

    /*Récupere les données que je veut de la Commune */
    name_04021 = rows04021.Libellé_géographique;
    Pop_04021 = rows04021.Population_en_2017;
    Pop_017_04021 = rows04021.Pop_017_ans_2017;
    Pop_mediane_vote_04021 = rows04021.Popu_possible_voté;
    nbr_inscrit_04021 = rows04021.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04021').textContent = name_04021;
   
    let com_04021 = document.getElementById("f-path-04021");
    let list_04021 = document.getElementById("list_04021");


    function togg04021() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04021-01').classList.remove('visible')
        document.querySelector('#polar-chart_04021-01').classList.remove('visible')
        document.querySelector('#polar-chart_04021-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04021').classList.remove('visible')
        document.querySelector('#f-path-04021').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04021
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04021
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04021
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04021
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04021
    }
    com_04021.onclick = togg04021;
    list_04021.onclick = togg04021;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04022 = data[21];

    /*Récupere les données que je veut de la Commune */
    name_04022 = rows04022.Libellé_géographique;
    Pop_04022 = rows04022.Population_en_2017;
    Pop_017_04022 = rows04022.Pop_017_ans_2017;
    Pop_mediane_vote_04022 = rows04022.Popu_possible_voté;
    nbr_inscrit_04022 = rows04022.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04022').textContent = name_04022;
   
    let com_04022 = document.getElementById("f-path-04022");
    let list_04022 = document.getElementById("list_04022");


    function togg04022() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04022-01').classList.remove('visible')
        document.querySelector('#polar-chart_04022-01').classList.remove('visible')
        document.querySelector('#polar-chart_04022-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04022').classList.remove('visible')
        document.querySelector('#f-path-04022').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04022
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04022
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04022
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04022
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04022
    }
    com_04022.onclick = togg04022;
    list_04022.onclick = togg04022;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04023 = data[22];

    /*Récupere les données que je veut de la Commune */
    name_04023 = rows04023.Libellé_géographique;
    Pop_04023 = rows04023.Population_en_2017;
    Pop_017_04023 = rows04023.Pop_017_ans_2017;
    Pop_mediane_vote_04023 = rows04023.Popu_possible_voté;
    nbr_inscrit_04023 = rows04023.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04023').textContent = name_04023;
   
    let com_04023 = document.getElementById("f-path-04023");
    let list_04023 = document.getElementById("list_04023");


    function togg04023() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04023-01').classList.remove('visible')
        document.querySelector('#polar-chart_04023-01').classList.remove('visible')
        document.querySelector('#polar-chart_04023-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04023').classList.remove('visible')
        document.querySelector('#f-path-04023').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04023
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04023
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04023
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04023
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04023
    }
    com_04023.onclick = togg04023;
    list_04023.onclick = togg04023;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04024 = data[23];

    /*Récupere les données que je veut de la Commune */
    name_04024 = rows04024.Libellé_géographique;
    Pop_04024 = rows04024.Population_en_2017;
    Pop_017_04024 = rows04024.Pop_017_ans_2017;
    Pop_mediane_vote_04024 = rows04024.Popu_possible_voté;
    nbr_inscrit_04024 = rows04024.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04024').textContent = name_04024;
   
    let com_04024 = document.getElementById("f-path-04024");
    let list_04024 = document.getElementById("list_04024");


    function togg04024() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04024-01').classList.remove('visible')
        document.querySelector('#polar-chart_04024-01').classList.remove('visible')
        document.querySelector('#polar-chart_04024-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04024').classList.remove('visible')
        document.querySelector('#f-path-04024').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04024
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04024
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04024
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04024
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04024
    }
    com_04024.onclick = togg04024;
    list_04024.onclick = togg04024;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04025 = data[24];

    /*Récupere les données que je veut de la Commune */
    name_04025 = rows04025.Libellé_géographique;
    Pop_04025 = rows04025.Population_en_2017;
    Pop_017_04025 = rows04025.Pop_017_ans_2017;
    Pop_mediane_vote_04025 = rows04025.Popu_possible_voté;
    nbr_inscrit_04025 = rows04025.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04025').textContent = name_04025;
   
    let com_04025 = document.getElementById("f-path-04025");
    let list_04025 = document.getElementById("list_04025");


    function togg04025() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04025-01').classList.remove('visible')
        document.querySelector('#polar-chart_04025-01').classList.remove('visible')
        document.querySelector('#polar-chart_04025-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04025').classList.remove('visible')
        document.querySelector('#f-path-04025').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04025
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04025
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04025
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04025
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04025
    }
    com_04025.onclick = togg04025;
    list_04025.onclick = togg04025;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04026 = data[25];

    /*Récupere les données que je veut de la Commune */
    name_04026 = rows04026.Libellé_géographique;
    Pop_04026 = rows04026.Population_en_2017;
    Pop_017_04026 = rows04026.Pop_017_ans_2017;
    Pop_mediane_vote_04026 = rows04026.Popu_possible_voté;
    nbr_inscrit_04026 = rows04026.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04026').textContent = name_04026;
   
    let com_04026 = document.getElementById("f-path-04026");
    let list_04026 = document.getElementById("list_04026");


    function togg04026() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04026-01').classList.remove('visible')
        document.querySelector('#polar-chart_04026-01').classList.remove('visible')
        document.querySelector('#polar-chart_04026-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04026').classList.remove('visible')
        document.querySelector('#f-path-04026').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04026
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04026
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04026
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04026
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04026
    }
    com_04026.onclick = togg04026;
    list_04026.onclick = togg04026;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04027 = data[26];

    /*Récupere les données que je veut de la Commune */
    name_04027 = rows04027.Libellé_géographique;
    Pop_04027 = rows04027.Population_en_2017;
    Pop_017_04027 = rows04027.Pop_017_ans_2017;
    Pop_mediane_vote_04027 = rows04027.Popu_possible_voté;
    nbr_inscrit_04027 = rows04027.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04027').textContent = name_04027;
   
    let com_04027 = document.getElementById("f-path-04027");
    let list_04027 = document.getElementById("list_04027");


    function togg04027() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04027-01').classList.remove('visible')
        document.querySelector('#polar-chart_04027-01').classList.remove('visible')
        document.querySelector('#polar-chart_04027-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04027').classList.remove('visible')
        document.querySelector('#f-path-04027').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04027
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04027
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04027
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04027
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04027
    }
    com_04027.onclick = togg04027;
    list_04027.onclick = togg04027;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04028 = data[27];

    /*Récupere les données que je veut de la Commune */
    name_04028 = rows04028.Libellé_géographique;
    Pop_04028 = rows04028.Population_en_2017;
    Pop_017_04028 = rows04028.Pop_017_ans_2017;
    Pop_mediane_vote_04028 = rows04028.Popu_possible_voté;
    nbr_inscrit_04028 = rows04028.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04028').textContent = name_04028;
   
    let com_04028 = document.getElementById("f-path-04028");
    let list_04028 = document.getElementById("list_04028");


    function togg04028() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04028-01').classList.remove('visible')
        document.querySelector('#polar-chart_04028-01').classList.remove('visible')
        document.querySelector('#polar-chart_04028-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04028').classList.remove('visible')
        document.querySelector('#f-path-04028').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04028
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04028
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04028
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04028
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04028
    }
    com_04028.onclick = togg04028;
    list_04028.onclick = togg04028;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04029 = data[28];

    /*Récupere les données que je veut de la Commune */
    name_04029 = rows04029.Libellé_géographique;
    Pop_04029 = rows04029.Population_en_2017;
    Pop_017_04029 = rows04029.Pop_017_ans_2017;
    Pop_mediane_vote_04029 = rows04029.Popu_possible_voté;
    nbr_inscrit_04029 = rows04029.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04029').textContent = name_04029;
   
    let com_04029 = document.getElementById("f-path-04029");
    let list_04029 = document.getElementById("list_04029");


    function togg04029() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04029-01').classList.remove('visible')
        document.querySelector('#polar-chart_04029-01').classList.remove('visible')
        document.querySelector('#polar-chart_04029-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04029').classList.remove('visible')
        document.querySelector('#f-path-04029').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04029
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04029
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04029
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04029
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04029
    }
    com_04029.onclick = togg04029;
    list_04029.onclick = togg04029;
     /************************************************************************************* */
    /************************************************************************************* */
    const rows04030 = data[29];

    /*Récupere les données que je veut de la Commune */
    name_04030 = rows04030.Libellé_géographique;
    Pop_04030 = rows04030.Population_en_2017;
    Pop_017_04030 = rows04030.Pop_017_ans_2017;
    Pop_mediane_vote_04030 = rows04030.Popu_possible_voté;
    nbr_inscrit_04030 = rows04030.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04030').textContent = name_04030;
   
    let com_04030 = document.getElementById("f-path-04030");
    let list_04030 = document.getElementById("list_04030");


    function togg04030() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04030-01').classList.remove('visible')
        document.querySelector('#polar-chart_04030-01').classList.remove('visible')
        document.querySelector('#polar-chart_04030-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04030').classList.remove('visible')
        document.querySelector('#f-path-04030').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04030
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04030
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04030
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04030
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04030
    }
    com_04030.onclick = togg04030;
    list_04030.onclick = togg04030;
     /************************************************************************************* */
    /************************************************************************************* */
    const rows04031 = data[30];

    /*Récupere les données que je veut de la Commune */
    name_04031 = rows04031.Libellé_géographique;
    Pop_04031 = rows04031.Population_en_2017;
    Pop_017_04031 = rows04031.Pop_017_ans_2017;
    Pop_mediane_vote_04031 = rows04031.Popu_possible_voté;
    nbr_inscrit_04031 = rows04031.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04031').textContent = name_04031;
   
    let com_04031 = document.getElementById("f-path-04031");
    let list_04031 = document.getElementById("list_04031");


    function togg04031() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04031-01').classList.remove('visible')
        document.querySelector('#polar-chart_04031-01').classList.remove('visible')
        document.querySelector('#polar-chart_04031-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04031').classList.remove('visible')
        document.querySelector('#f-path-04031').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04031
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04031
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04031
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04031
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04031
    }
    com_04031.onclick = togg04031;
    list_04031.onclick = togg04031;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04032 = data[31];

    /*Récupere les données que je veut de la Commune */
    name_04032 = rows04032.Libellé_géographique;
    Pop_04032 = rows04032.Population_en_2017;
    Pop_017_04032 = rows04032.Pop_017_ans_2017;
    Pop_mediane_vote_04032 = rows04032.Popu_possible_voté;
    nbr_inscrit_04032 = rows04032.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04032').textContent = name_04032;
   
    let com_04032 = document.getElementById("f-path-04032");
    let list_04032 = document.getElementById("list_04032");


    function togg04032() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04032-01').classList.remove('visible')
        document.querySelector('#polar-chart_04032-01').classList.remove('visible')
        document.querySelector('#polar-chart_04032-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04032').classList.remove('visible')
        document.querySelector('#f-path-04032').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04032
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04032
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04032
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04032
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04032
    }
    com_04032.onclick = togg04032;
    list_04032.onclick = togg04032;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04033 = data[32];

    /*Récupere les données que je veut de la Commune */
    name_04033 = rows04033.Libellé_géographique;
    Pop_04033 = rows04033.Population_en_2017;
    Pop_017_04033 = rows04033.Pop_017_ans_2017;
    Pop_mediane_vote_04033 = rows04033.Popu_possible_voté;
    nbr_inscrit_04033 = rows04033.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04033').textContent = name_04033;
   
    let com_04033 = document.getElementById("f-path-04033");
    let list_04033 = document.getElementById("list_04033");


    function togg04033() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04033-01').classList.remove('visible')
        document.querySelector('#polar-chart_04033-01').classList.remove('visible')
        document.querySelector('#polar-chart_04033-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04033').classList.remove('visible')
        document.querySelector('#f-path-04033').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04033
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04033
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04033
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04033
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04033
    }
    com_04033.onclick = togg04033;
    list_04033.onclick = togg04033;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04034 = data[33];

    /*Récupere les données que je veut de la Commune */
    name_04034 = rows04034.Libellé_géographique;
    Pop_04034 = rows04034.Population_en_2017;
    Pop_017_04034 = rows04034.Pop_017_ans_2017;
    Pop_mediane_vote_04034 = rows04034.Popu_possible_voté;
    nbr_inscrit_04034 = rows04034.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04034').textContent = name_04034;
   
    let com_04034 = document.getElementById("f-path-04034");
    let list_04034 = document.getElementById("list_04034");


    function togg04034() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04034-01').classList.remove('visible')
        document.querySelector('#polar-chart_04034-01').classList.remove('visible')
        document.querySelector('#polar-chart_04034-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04034').classList.remove('visible')
        document.querySelector('#f-path-04034').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04034
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04034
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04034
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04034
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04034
    }
    com_04034.onclick = togg04034;
    list_04034.onclick = togg04034;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04035 = data[34];

    /*Récupere les données que je veut de la Commune */
    name_04035 = rows04035.Libellé_géographique;
    Pop_04035 = rows04035.Population_en_2017;
    Pop_017_04035 = rows04035.Pop_017_ans_2017;
    Pop_mediane_vote_04035 = rows04035.Popu_possible_voté;
    nbr_inscrit_04035 = rows04035.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04035').textContent = name_04035;
   
    let com_04035 = document.getElementById("f-path-04035");
    let list_04035 = document.getElementById("list_04035");


    function togg04035() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04035-01').classList.remove('visible')
        document.querySelector('#polar-chart_04035-01').classList.remove('visible')
        document.querySelector('#polar-chart_04035-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04035').classList.remove('visible')
        document.querySelector('#f-path-04035').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04035
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04035
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04035
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04035
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04035
    }
    com_04035.onclick = togg04035;
    list_04035.onclick = togg04035;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04036 = data[35];

    /*Récupere les données que je veut de la Commune */
    name_04036 = rows04036.Libellé_géographique;
    Pop_04036 = rows04036.Population_en_2017;
    Pop_017_04036 = rows04036.Pop_017_ans_2017;
    Pop_mediane_vote_04036 = rows04036.Popu_possible_voté;
    nbr_inscrit_04036 = rows04036.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04036').textContent = name_04036;
   
    let com_04036 = document.getElementById("f-path-04036");
    let list_04036 = document.getElementById("list_04036");


    function togg04036() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04036-01').classList.remove('visible')
        document.querySelector('#polar-chart_04036-01').classList.remove('visible')
        document.querySelector('#polar-chart_04036-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04036').classList.remove('visible')
        document.querySelector('#f-path-04036').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04036
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04036
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04036
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04036
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04036
    }
    com_04036.onclick = togg04036;
    list_04036.onclick = togg04036;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04037 = data[36];

    /*Récupere les données que je veut de la Commune */
    name_04037 = rows04037.Libellé_géographique;
    Pop_04037 = rows04037.Population_en_2017;
    Pop_017_04037 = rows04037.Pop_017_ans_2017;
    Pop_mediane_vote_04037 = rows04037.Popu_possible_voté;
    nbr_inscrit_04037 = rows04037.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04037').textContent = name_04037;
   
    let com_04037 = document.getElementById("f-path-04037");
    let list_04037 = document.getElementById("list_04037");


    function togg04037() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04037-01').classList.remove('visible')
        document.querySelector('#polar-chart_04037-01').classList.remove('visible')
        document.querySelector('#polar-chart_04067-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04037').classList.remove('visible')
        document.querySelector('#f-path-04037').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04037
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04037
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04037
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04037
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04037
    }
    com_04037.onclick = togg04037;
    list_04037.onclick = togg04037;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04038 = data[37];

    /*Récupere les données que je veut de la Commune */
    name_04038 = rows04038.Libellé_géographique;
    Pop_04038 = rows04038.Population_en_2017;
    Pop_017_04038 = rows04038.Pop_017_ans_2017;
    Pop_mediane_vote_04038 = rows04038.Popu_possible_voté;
    nbr_inscrit_04038 = rows04038.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04038').textContent = name_04038;
   
    let com_04038 = document.getElementById("f-path-04038");
    let list_04038 = document.getElementById("list_04038");


    function togg04038() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04038-01').classList.remove('visible')
        document.querySelector('#polar-chart_04038-01').classList.remove('visible')
        document.querySelector('#polar-chart_04068-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04038').classList.remove('visible')
        document.querySelector('#f-path-04038').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04038
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04038
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04038
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04038
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04038
    }
    com_04038.onclick = togg04038;
    list_04038.onclick = togg04038;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04039 = data[38];

    /*Récupere les données que je veut de la Commune */
    name_04039 = rows04039.Libellé_géographique;
    Pop_04039 = rows04039.Population_en_2017;
    Pop_017_04039 = rows04039.Pop_017_ans_2017;
    Pop_mediane_vote_04039 = rows04039.Popu_possible_voté;
    nbr_inscrit_04039 = rows04039.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04039').textContent = name_04039;
   
    let com_04039 = document.getElementById("f-path-04039");
    let list_04039 = document.getElementById("list_04039");


    function togg04039() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04039-01').classList.remove('visible')
        document.querySelector('#polar-chart_04039-01').classList.remove('visible')
        document.querySelector('#polar-chart_04069-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04039').classList.remove('visible')
        document.querySelector('#f-path-04039').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04039
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04039
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04039
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04039
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04039
    }
    com_04039.onclick = togg04039;
    list_04039.onclick = togg04039;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04040 = data[39];

    /*Récupere les données que je veut de la Commune */
    name_04040 = rows04040.Libellé_géographique;
    Pop_04040 = rows04040.Population_en_2017;
    Pop_017_04040 = rows04040.Pop_017_ans_2017;
    Pop_mediane_vote_04040 = rows04040.Popu_possible_voté;
    nbr_inscrit_04040 = rows04040.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04040').textContent = name_04040;
   
    let com_04040 = document.getElementById("f-path-04040");
    let list_04040 = document.getElementById("list_04040");


    function togg04040() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04040-01').classList.remove('visible')
        document.querySelector('#polar-chart_04040-01').classList.remove('visible')
        document.querySelector('#polar-chart_04040-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04040').classList.remove('visible')
        document.querySelector('#f-path-04040').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04040
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04040
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04040
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04040
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04040
    }
    com_04040.onclick = togg04040;
    list_04040.onclick = togg04040;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04041 = data[40];

    /*Récupere les données que je veut de la Commune */
    name_04041 = rows04041.Libellé_géographique;
    Pop_04041 = rows04041.Population_en_2017;
    Pop_017_04041 = rows04041.Pop_017_ans_2017;
    Pop_mediane_vote_04041 = rows04041.Popu_possible_voté;
    nbr_inscrit_04041 = rows04041.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04041').textContent = name_04041;
   
    let com_04041 = document.getElementById("f-path-04041");
    let list_04041 = document.getElementById("list_04041");


    function togg04041() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04041-01').classList.remove('visible')
        document.querySelector('#polar-chart_04041-01').classList.remove('visible')
        document.querySelector('#polar-chart_04041-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04041').classList.remove('visible')
        document.querySelector('#f-path-04041').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04041
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04041
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04041
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04041
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04041
    }
    com_04041.onclick = togg04041;
    list_04041.onclick = togg04041;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04042 = data[41];

    /*Récupere les données que je veut de la Commune */
    name_04042 = rows04042.Libellé_géographique;
    Pop_04042 = rows04042.Population_en_2017;
    Pop_017_04042 = rows04042.Pop_017_ans_2017;
    Pop_mediane_vote_04042 = rows04042.Popu_possible_voté;
    nbr_inscrit_04042 = rows04042.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04042').textContent = name_04042;
   
    let com_04042 = document.getElementById("f-path-04042");
    let list_04042 = document.getElementById("list_04042");


    function togg04042() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04042-01').classList.remove('visible')
        document.querySelector('#polar-chart_04042-01').classList.remove('visible')
        document.querySelector('#polar-chart_04042-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04042').classList.remove('visible')
        document.querySelector('#f-path-04042').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04042
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04042
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04042
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04042
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04042
    }
    com_04042.onclick = togg04042;
    list_04042.onclick = togg04042;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04043 = data[42];

    /*Récupere les données que je veut de la Commune */
    name_04043 = rows04043.Libellé_géographique;
    Pop_04043 = rows04043.Population_en_2017;
    Pop_017_04043 = rows04043.Pop_017_ans_2017;
    Pop_mediane_vote_04043 = rows04043.Popu_possible_voté;
    nbr_inscrit_04043 = rows04043.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04043').textContent = name_04043;
   
    let com_04043 = document.getElementById("f-path-04043");
    let list_04043 = document.getElementById("list_04043");


    function togg04043() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04043-01').classList.remove('visible')
        document.querySelector('#polar-chart_04043-01').classList.remove('visible')
        document.querySelector('#polar-chart_04043-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04043').classList.remove('visible')
        document.querySelector('#f-path-04043').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04043
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04043
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04043
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04043
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04043
    }
    com_04043.onclick = togg04043;
    list_04043.onclick = togg04043;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04044 = data[43];

    /*Récupere les données que je veut de la Commune */
    name_04044 = rows04044.Libellé_géographique;
    Pop_04044 = rows04044.Population_en_2017;
    Pop_017_04044 = rows04044.Pop_017_ans_2017;
    Pop_mediane_vote_04044 = rows04044.Popu_possible_voté;
    nbr_inscrit_04044 = rows04044.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04044').textContent = name_04044;
   
    let com_04044 = document.getElementById("f-path-04044");
    let list_04044 = document.getElementById("list_04044");


    function togg04044() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04044-01').classList.remove('visible')
        document.querySelector('#polar-chart_04044-01').classList.remove('visible')
        document.querySelector('#polar-chart_04044-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04044').classList.remove('visible')
        document.querySelector('#f-path-04044').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04044
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04044
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04044
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04044
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04044
    }
    com_04044.onclick = togg04044;
    list_04044.onclick = togg04044;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04045 = data[44];

    /*Récupere les données que je veut de la Commune */
    name_04045 = rows04045.Libellé_géographique;
    Pop_04045 = rows04045.Population_en_2017;
    Pop_017_04045 = rows04045.Pop_017_ans_2017;
    Pop_mediane_vote_04045 = rows04045.Popu_possible_voté;
    nbr_inscrit_04045 = rows04045.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04045').textContent = name_04045;
   
    let com_04045 = document.getElementById("f-path-04045");
    let list_04045 = document.getElementById("list_04045");


    function togg04045() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04045-01').classList.remove('visible')
        document.querySelector('#polar-chart_04045-01').classList.remove('visible')
        document.querySelector('#polar-chart_04045-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04045').classList.remove('visible')
        document.querySelector('#f-path-04045').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04045
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04045
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04045
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04045
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04045
    }
    com_04045.onclick = togg04045;
    list_04045.onclick = togg04045;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04046 = data[45];

    /*Récupere les données que je veut de la Commune */
    name_04046 = rows04046.Libellé_géographique;
    Pop_04046 = rows04046.Population_en_2017;
    Pop_017_04046 = rows04046.Pop_017_ans_2017;
    Pop_mediane_vote_04046 = rows04046.Popu_possible_voté;
    nbr_inscrit_04046 = rows04046.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04046').textContent = name_04046;
   
    let com_04046 = document.getElementById("f-path-04046");
    let list_04046 = document.getElementById("list_04046");


    function togg04046() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04046-01').classList.remove('visible')
        document.querySelector('#polar-chart_04046-01').classList.remove('visible')
        document.querySelector('#polar-chart_04046-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04046').classList.remove('visible')
        document.querySelector('#f-path-04046').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04046
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04046
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04046
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04046
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04046
    }
    com_04046.onclick = togg04046;
    list_04046.onclick = togg04046;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04047 = data[46];

    /*Récupere les données que je veut de la Commune */
    name_04047 = rows04047.Libellé_géographique;
    Pop_04047 = rows04047.Population_en_2017;
    Pop_017_04047 = rows04047.Pop_017_ans_2017;
    Pop_mediane_vote_04047 = rows04047.Popu_possible_voté;
    nbr_inscrit_04047 = rows04047.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04047').textContent = name_04047;
   
    let com_04047 = document.getElementById("f-path-04047");
    let list_04047 = document.getElementById("list_04047");


    function togg04047() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04047-01').classList.remove('visible')
        document.querySelector('#polar-chart_04047-01').classList.remove('visible')
        document.querySelector('#polar-chart_04047-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04047').classList.remove('visible')
        document.querySelector('#f-path-04047').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04047
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04047
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04047
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04047
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04047
    }
    com_04047.onclick = togg04047;
    list_04047.onclick = togg04047;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04048 = data[47];

    /*Récupere les données que je veut de la Commune */
    name_04048 = rows04048.Libellé_géographique;
    Pop_04048 = rows04048.Population_en_2017;
    Pop_017_04048 = rows04048.Pop_017_ans_2017;
    Pop_mediane_vote_04048 = rows04048.Popu_possible_voté;
    nbr_inscrit_04048 = rows04048.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04048').textContent = name_04048;
   
    let com_04048 = document.getElementById("f-path-04048");
    let list_04048 = document.getElementById("list_04048");


    function togg04048() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04048-01').classList.remove('visible')
        document.querySelector('#polar-chart_04048-01').classList.remove('visible')
        document.querySelector('#polar-chart_04048-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04048').classList.remove('visible')
        document.querySelector('#f-path-04048').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04048
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04048
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04048
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04048
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04048
    }
    com_04048.onclick = togg04048;
    list_04048.onclick = togg04048;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04049 = data[48];

    /*Récupere les données que je veut de la Commune */
    name_04049 = rows04049.Libellé_géographique;
    Pop_04049 = rows04049.Population_en_2017;
    Pop_017_04049 = rows04049.Pop_017_ans_2017;
    Pop_mediane_vote_04049 = rows04049.Popu_possible_voté;
    nbr_inscrit_04049 = rows04049.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04049').textContent = name_04049;
   
    let com_04049 = document.getElementById("f-path-04049");
    let list_04049 = document.getElementById("list_04049");


    function togg04049() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04049-01').classList.remove('visible')
        document.querySelector('#polar-chart_04049-01').classList.remove('visible')
        document.querySelector('#polar-chart_04049-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04049').classList.remove('visible')
        document.querySelector('#f-path-04049').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04049
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04049
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04049
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04049
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04049
    }
    com_04049.onclick = togg04049;
    list_04049.onclick = togg04049;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04050 = data[49];

    /*Récupere les données que je veut de la Commune */
    name_04050 = rows04050.Libellé_géographique;
    Pop_04050 = rows04050.Population_en_2017;
    Pop_017_04050 = rows04050.Pop_017_ans_2017;
    Pop_mediane_vote_04050 = rows04050.Popu_possible_voté;
    nbr_inscrit_04050 = rows04050.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04050').textContent = name_04050;
   
    let com_04050 = document.getElementById("f-path-04050");
    let list_04050 = document.getElementById("list_04050");


    function togg04050() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04050-01').classList.remove('visible')
        document.querySelector('#polar-chart_04050-01').classList.remove('visible')
        document.querySelector('#polar-chart_04050-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04050').classList.remove('visible')
        document.querySelector('#f-path-04050').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04050
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04050
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04050
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04050
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04050
    }
    com_04050.onclick = togg04050;
    list_04050.onclick = togg04050;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04051 = data[50];

    /*Récupere les données que je veut de la Commune */
    name_04051 = rows04051.Libellé_géographique;
    Pop_04051 = rows04051.Population_en_2017;
    Pop_017_04051 = rows04051.Pop_017_ans_2017;
    Pop_mediane_vote_04051 = rows04051.Popu_possible_voté;
    nbr_inscrit_04051 = rows04051.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04051').textContent = name_04051;
   
    let com_04051 = document.getElementById("f-path-04051");
    let list_04051 = document.getElementById("list_04051");


    function togg04051() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04051-01').classList.remove('visible')
        document.querySelector('#polar-chart_04051-01').classList.remove('visible')
        document.querySelector('#polar-chart_04051-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04051').classList.remove('visible')
        document.querySelector('#f-path-04051').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04051
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04051
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04051
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04051
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04051
    }
    com_04051.onclick = togg04051;
    list_04051.onclick = togg04051;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04052 = data[51];

    /*Récupere les données que je veut de la Commune */
    name_04052 = rows04052.Libellé_géographique;
    Pop_04052 = rows04052.Population_en_2017;
    Pop_017_04052 = rows04052.Pop_017_ans_2017;
    Pop_mediane_vote_04052 = rows04052.Popu_possible_voté;
    nbr_inscrit_04052 = rows04052.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04052').textContent = name_04052;
   
    let com_04052 = document.getElementById("f-path-04052");
    let list_04052 = document.getElementById("list_04052");


    function togg04052() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04052-01').classList.remove('visible')
        document.querySelector('#polar-chart_04052-01').classList.remove('visible')
        document.querySelector('#polar-chart_04052-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04052').classList.remove('visible')
        document.querySelector('#f-path-04052').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04052
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04052
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04052
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04052
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04052
    }
    com_04052.onclick = togg04052;
    list_04052.onclick = togg04052;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04053 = data[52];

    /*Récupere les données que je veut de la Commune */
    name_04053 = rows04053.Libellé_géographique;
    Pop_04053 = rows04053.Population_en_2017;
    Pop_017_04053 = rows04053.Pop_017_ans_2017;
    Pop_mediane_vote_04053 = rows04053.Popu_possible_voté;
    nbr_inscrit_04053 = rows04053.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04053').textContent = name_04053;
   
    let com_04053 = document.getElementById("f-path-04053");
    let list_04053 = document.getElementById("list_04053");


    function togg04053() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04053-01').classList.remove('visible')
        document.querySelector('#polar-chart_04053-01').classList.remove('visible')
        document.querySelector('#polar-chart_04053-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04053').classList.remove('visible')
        document.querySelector('#f-path-04053').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04053
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04053
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04053
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04053
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04053
    }
    com_04053.onclick = togg04053;
    list_04053.onclick = togg04053;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04054 = data[53];

    /*Récupere les données que je veut de la Commune */
    name_04054 = rows04054.Libellé_géographique;
    Pop_04054 = rows04054.Population_en_2017;
    Pop_017_04054 = rows04054.Pop_017_ans_2017;
    Pop_mediane_vote_04054 = rows04054.Popu_possible_voté;
    nbr_inscrit_04054 = rows04054.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04054').textContent = name_04054;
   
    let com_04054 = document.getElementById("f-path-04054");
    let list_04054 = document.getElementById("list_04054");


    function togg04054() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04054-01').classList.remove('visible')
        document.querySelector('#polar-chart_04054-01').classList.remove('visible')
        document.querySelector('#polar-chart_04054-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04054').classList.remove('visible')
        document.querySelector('#f-path-04054').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04054
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04054
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04054
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04054
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04054
    }
    com_04054.onclick = togg04054;
    list_04054.onclick = togg04054;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04055 = data[54];

    /*Récupere les données que je veut de la Commune */
    name_04055 = rows04055.Libellé_géographique;
    Pop_04055 = rows04055.Population_en_2017;
    Pop_017_04055 = rows04055.Pop_017_ans_2017;
    Pop_mediane_vote_04055 = rows04055.Popu_possible_voté;
    nbr_inscrit_04055 = rows04055.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04055').textContent = name_04055;
   
    let com_04055 = document.getElementById("f-path-04055");
    let list_04055 = document.getElementById("list_04055");


    function togg04055() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04055-01').classList.remove('visible')
        document.querySelector('#polar-chart_04055-01').classList.remove('visible')
        document.querySelector('#polar-chart_04055-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04055').classList.remove('visible')
        document.querySelector('#f-path-04055').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04055
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04055
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04055
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04055
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04055
    }
    com_04055.onclick = togg04055;
    list_04055.onclick = togg04055;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04056 = data[55];

    /*Récupere les données que je veut de la Commune */
    name_04056 = rows04056.Libellé_géographique;
    Pop_04056 = rows04056.Population_en_2017;
    Pop_017_04056 = rows04056.Pop_017_ans_2017;
    Pop_mediane_vote_04056 = rows04056.Popu_possible_voté;
    nbr_inscrit_04056 = rows04056.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04056').textContent = name_04056;
   
    let com_04056 = document.getElementById("f-path-04056");
    let list_04056 = document.getElementById("list_04056");


    function togg04056() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04056-01').classList.remove('visible')
        document.querySelector('#polar-chart_04056-01').classList.remove('visible')
        document.querySelector('#polar-chart_04056-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04056').classList.remove('visible')
        document.querySelector('#f-path-04056').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04056
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04056
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04056
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04056
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04056
    }
    com_04056.onclick = togg04056;
    list_04056.onclick = togg04056;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04057 = data[56];

    /*Récupere les données que je veut de la Commune */
    name_04057 = rows04057.Libellé_géographique;
    Pop_04057 = rows04057.Population_en_2017;
    Pop_017_04057 = rows04057.Pop_017_ans_2017;
    Pop_mediane_vote_04057 = rows04057.Popu_possible_voté;
    nbr_inscrit_04057 = rows04057.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04057').textContent = name_04057;
   
    let com_04057 = document.getElementById("f-path-04057");
    let list_04057 = document.getElementById("list_04057");


    function togg04057() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04057-01').classList.remove('visible')
        document.querySelector('#polar-chart_04057-01').classList.remove('visible')
        document.querySelector('#polar-chart_04057-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04057').classList.remove('visible')
        document.querySelector('#f-path-04057').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04057
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04057
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04057
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04057
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04057
    }
    com_04057.onclick = togg04057;
    list_04057.onclick = togg04057;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04058 = data[57];

    /*Récupere les données que je veut de la Commune */
    name_04058 = rows04058.Libellé_géographique;
    Pop_04058 = rows04058.Population_en_2017;
    Pop_017_04058 = rows04058.Pop_017_ans_2017;
    Pop_mediane_vote_04058 = rows04058.Popu_possible_voté;
    nbr_inscrit_04058 = rows04058.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04058').textContent = name_04058;
   
    let com_04058 = document.getElementById("f-path-04058");
    let list_04058 = document.getElementById("list_04058");


    function togg04058() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04058-01').classList.remove('visible')
        document.querySelector('#polar-chart_04058-01').classList.remove('visible')
        document.querySelector('#polar-chart_04058-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04058').classList.remove('visible')
        document.querySelector('#f-path-04058').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04058
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04058
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04058
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04058
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04058
    }
    com_04058.onclick = togg04058;
    list_04058.onclick = togg04058;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04059 = data[58];

    /*Récupere les données que je veut de la Commune */
    name_04059 = rows04059.Libellé_géographique;
    Pop_04059 = rows04059.Population_en_2017;
    Pop_017_04059 = rows04059.Pop_017_ans_2017;
    Pop_mediane_vote_04059 = rows04059.Popu_possible_voté;
    nbr_inscrit_04059 = rows04059.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04059').textContent = name_04059;
   
    let com_04059 = document.getElementById("f-path-04059");
    let list_04059 = document.getElementById("list_04059");


    function togg04059() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04059-01').classList.remove('visible')
        document.querySelector('#polar-chart_04059-01').classList.remove('visible')
        document.querySelector('#polar-chart_04059-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04059').classList.remove('visible')
        document.querySelector('#f-path-04059').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04059
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04059
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04059
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04059
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04059
    }
    com_04059.onclick = togg04059;
    list_04059.onclick = togg04059;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04060 = data[59];

    /*Récupere les données que je veut de la Commune */
    name_04060 = rows04060.Libellé_géographique;
    Pop_04060 = rows04060.Population_en_2017;
    Pop_017_04060 = rows04060.Pop_017_ans_2017;
    Pop_mediane_vote_04060 = rows04060.Popu_possible_voté;
    nbr_inscrit_04060 = rows04060.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04060').textContent = name_04060;
   
    let com_04060 = document.getElementById("f-path-04060");
    let list_04060 = document.getElementById("list_04060");


    function togg04060() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04060-01').classList.remove('visible')
        document.querySelector('#polar-chart_04060-01').classList.remove('visible')
        document.querySelector('#polar-chart_04060-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04060').classList.remove('visible')
        document.querySelector('#f-path-04060').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04060
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04060
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04060
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04060
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04060
    }
    com_04060.onclick = togg04060;
    list_04060.onclick = togg04060;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04061 = data[60];

    /*Récupere les données que je veut de la Commune */
    name_04061 = rows04061.Libellé_géographique;
    Pop_04061 = rows04061.Population_en_2017;
    Pop_017_04061 = rows04061.Pop_017_ans_2017;
    Pop_mediane_vote_04061 = rows04061.Popu_possible_voté;
    nbr_inscrit_04061 = rows04061.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04061').textContent = name_04061;
   
    let com_04061 = document.getElementById("f-path-04061");
    let list_04061 = document.getElementById("list_04061");


    function togg04061() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04061-01').classList.remove('visible')
        document.querySelector('#polar-chart_04061-01').classList.remove('visible')
        document.querySelector('#polar-chart_04061-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04061').classList.remove('visible')
        document.querySelector('#f-path-04061').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04061
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04061
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04061
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04061
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04061
    }
    com_04061.onclick = togg04061;
    list_04061.onclick = togg04061;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04062 = data[61];

    /*Récupere les données que je veut de la Commune */
    name_04062 = rows04062.Libellé_géographique;
    Pop_04062 = rows04062.Population_en_2017;
    Pop_017_04062 = rows04062.Pop_017_ans_2017;
    Pop_mediane_vote_04062 = rows04062.Popu_possible_voté;
    nbr_inscrit_04062 = rows04062.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04062').textContent = name_04062;
   
    let com_04062 = document.getElementById("f-path-04062");
    let list_04062 = document.getElementById("list_04062");


    function togg04062() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04062-01').classList.remove('visible')
        document.querySelector('#polar-chart_04062-01').classList.remove('visible')
        document.querySelector('#polar-chart_04062-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04062').classList.remove('visible')
        document.querySelector('#f-path-04062').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04062
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04062
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04062
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04062
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04062
    }
    com_04062.onclick = togg04062;
    list_04062.onclick = togg04062;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04063 = data[62];

    /*Récupere les données que je veut de la Commune */
    name_04063 = rows04063.Libellé_géographique;
    Pop_04063 = rows04063.Population_en_2017;
    Pop_017_04063 = rows04063.Pop_017_ans_2017;
    Pop_mediane_vote_04063 = rows04063.Popu_possible_voté;
    nbr_inscrit_04063 = rows04063.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04063').textContent = name_04063;
   
    let com_04063 = document.getElementById("f-path-04063");
    let list_04063 = document.getElementById("list_04063");


    function togg04063() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04063-01').classList.remove('visible')
        document.querySelector('#polar-chart_04063-01').classList.remove('visible')
        document.querySelector('#polar-chart_04063-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04063').classList.remove('visible')
        document.querySelector('#f-path-04063').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04063
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04063
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04063
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04063
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04063
    }
    com_04063.onclick = togg04063;
    list_04063.onclick = togg04063;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04064 = data[63];

    /*Récupere les données que je veut de la Commune */
    name_04064 = rows04064.Libellé_géographique;
    Pop_04064 = rows04064.Population_en_2017;
    Pop_017_04064 = rows04064.Pop_017_ans_2017;
    Pop_mediane_vote_04064 = rows04064.Popu_possible_voté;
    nbr_inscrit_04064 = rows04064.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04064').textContent = name_04064;
   
    let com_04064 = document.getElementById("f-path-04064");
    let list_04064 = document.getElementById("list_04064");


    function togg04064() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04064-01').classList.remove('visible')
        document.querySelector('#polar-chart_04064-01').classList.remove('visible')
        document.querySelector('#polar-chart_04064-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04064').classList.remove('visible')
        document.querySelector('#f-path-04064').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04064
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04064
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04064
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04064
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04064
    }
    com_04064.onclick = togg04064;
    list_04064.onclick = togg04064;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04065 = data[64];

    /*Récupere les données que je veut de la Commune */
    name_04065 = rows04065.Libellé_géographique;
    Pop_04065 = rows04065.Population_en_2017;
    Pop_017_04065 = rows04065.Pop_017_ans_2017;
    Pop_mediane_vote_04065 = rows04065.Popu_possible_voté;
    nbr_inscrit_04065 = rows04065.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04065').textContent = name_04065;
   
    let com_04065 = document.getElementById("f-path-04065");
    let list_04065 = document.getElementById("list_04065");


    function togg04065() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04065-01').classList.remove('visible')
        document.querySelector('#polar-chart_04065-01').classList.remove('visible')
        document.querySelector('#polar-chart_04065-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04065').classList.remove('visible')
        document.querySelector('#f-path-04065').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04065
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04065
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04065
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04065
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04065
    }
    com_04065.onclick = togg04065;
    list_04065.onclick = togg04065;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04066 = data[65];

    /*Récupere les données que je veut de la Commune */
    name_04066 = rows04066.Libellé_géographique;
    Pop_04066 = rows04066.Population_en_2017;
    Pop_017_04066 = rows04066.Pop_017_ans_2017;
    Pop_mediane_vote_04066 = rows04066.Popu_possible_voté;
    nbr_inscrit_04066 = rows04066.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04066').textContent = name_04066;
   
    let com_04066 = document.getElementById("f-path-04066");
    let list_04066 = document.getElementById("list_04066");


    function togg04066() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04066-01').classList.remove('visible')
        document.querySelector('#polar-chart_04066-01').classList.remove('visible')
        document.querySelector('#polar-chart_04066-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04066').classList.remove('visible')
        document.querySelector('#f-path-04066').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04066
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04066
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04066
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04066
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04066
    }
    com_04066.onclick = togg04066;
    list_04066.onclick = togg04066;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04067 = data[66];

    /*Récupere les données que je veut de la Commune */
    name_04067 = rows04067.Libellé_géographique;
    Pop_04067 = rows04067.Population_en_2017;
    Pop_017_04067 = rows04067.Pop_017_ans_2017;
    Pop_mediane_vote_04067 = rows04067.Popu_possible_voté;
    nbr_inscrit_04067 = rows04067.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04067').textContent = name_04067;
   
    let com_04067 = document.getElementById("f-path-04067");
    let list_04067 = document.getElementById("list_04067");


    function togg04067() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04067-01').classList.remove('visible')
        document.querySelector('#polar-chart_04067-01').classList.remove('visible')
        document.querySelector('#polar-chart_04067-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04067').classList.remove('visible')
        document.querySelector('#f-path-04067').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04067
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04067
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04067
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04067
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04067
    }
    com_04067.onclick = togg04067;
    list_04067.onclick = togg04067;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04068 = data[67];

    /*Récupere les données que je veut de la Commune */
    name_04068 = rows04068.Libellé_géographique;
    Pop_04068 = rows04068.Population_en_2017;
    Pop_017_04068 = rows04068.Pop_017_ans_2017;
    Pop_mediane_vote_04068 = rows04068.Popu_possible_voté;
    nbr_inscrit_04068 = rows04068.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04068').textContent = name_04068;
   
    let com_04068 = document.getElementById("f-path-04068");
    let list_04068 = document.getElementById("list_04068");


    function togg04068() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04068-01').classList.remove('visible')
        document.querySelector('#polar-chart_04068-01').classList.remove('visible')
        document.querySelector('#polar-chart_04068-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04068').classList.remove('visible')
        document.querySelector('#f-path-04068').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04068
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04068
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04068
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04068
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04068
    }
    com_04068.onclick = togg04068;
    list_04068.onclick = togg04068;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04069 = data[68];

    /*Récupere les données que je veut de la Commune */
    name_04069 = rows04069.Libellé_géographique;
    Pop_04069 = rows04069.Population_en_2017;
    Pop_017_04069 = rows04069.Pop_017_ans_2017;
    Pop_mediane_vote_04069 = rows04069.Popu_possible_voté;
    nbr_inscrit_04069 = rows04069.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04069').textContent = name_04069;
   
    let com_04069 = document.getElementById("f-path-04069");
    let list_04069 = document.getElementById("list_04069");


    function togg04069() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04069-01').classList.remove('visible')
        document.querySelector('#polar-chart_04069-01').classList.remove('visible')
        document.querySelector('#polar-chart_04069-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04069').classList.remove('visible')
        document.querySelector('#f-path-04069').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04069
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04069
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04069
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04069
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04069
    }
    com_04069.onclick = togg04069;
    list_04069.onclick = togg04069;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04070 = data[69];

    /*Récupere les données que je veut de la Commune */
    name_04070 = rows04070.Libellé_géographique;
    Pop_04070 = rows04070.Population_en_2017;
    Pop_017_04070 = rows04070.Pop_017_ans_2017;
    Pop_mediane_vote_04070 = rows04070.Popu_possible_voté;
    nbr_inscrit_04070 = rows04070.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04070').textContent = name_04070;
   
    let com_04070 = document.getElementById("f-path-04070");
    let list_04070 = document.getElementById("list_04070");


    function togg04070() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04070-01').classList.remove('visible')
        document.querySelector('#polar-chart_04070-01').classList.remove('visible')
        document.querySelector('#polar-chart_04070-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04070').classList.remove('visible')
        document.querySelector('#f-path-04070').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04070
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04070
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04070
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04070
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04070
    }
    com_04070.onclick = togg04070;
    list_04070.onclick = togg04070;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04071 = data[70];

    /*Récupere les données que je veut de la Commune */
    name_04071 = rows04071.Libellé_géographique;
    Pop_04071 = rows04071.Population_en_2017;
    Pop_017_04071 = rows04071.Pop_017_ans_2017;
    Pop_mediane_vote_04071 = rows04071.Popu_possible_voté;
    nbr_inscrit_04071 = rows04071.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04071').textContent = name_04071;
   
    let com_04071 = document.getElementById("f-path-04071");
    let list_04071 = document.getElementById("list_04071");


    function togg04071() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04071-01').classList.remove('visible')
        document.querySelector('#polar-chart_04071-01').classList.remove('visible')
        document.querySelector('#polar-chart_04071-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04071').classList.remove('visible')
        document.querySelector('#f-path-04071').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04071
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04071
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04071
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04071
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04071
    }
    com_04071.onclick = togg04071;
    list_04071.onclick = togg04071;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04072 = data[71];

    /*Récupere les données que je veut de la Commune */
    name_04072 = rows04072.Libellé_géographique;
    Pop_04072 = rows04072.Population_en_2017;
    Pop_017_04072 = rows04072.Pop_017_ans_2017;
    Pop_mediane_vote_04072 = rows04072.Popu_possible_voté;
    nbr_inscrit_04072 = rows04072.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04072').textContent = name_04072;
   
    let com_04072 = document.getElementById("f-path-04072");
    let list_04072 = document.getElementById("list_04072");


    function togg04072() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04072-01').classList.remove('visible')
        document.querySelector('#polar-chart_04072-01').classList.remove('visible')
        document.querySelector('#polar-chart_04072-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04072').classList.remove('visible')
        document.querySelector('#f-path-04072').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04072
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04072
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04072
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04072
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04072
    }
    com_04072.onclick = togg04072;
    list_04072.onclick = togg04072;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04073 = data[72];

    /*Récupere les données que je veut de la Commune */
    name_04073 = rows04073.Libellé_géographique;
    Pop_04073 = rows04073.Population_en_2017;
    Pop_017_04073 = rows04073.Pop_017_ans_2017;
    Pop_mediane_vote_04073 = rows04073.Popu_possible_voté;
    nbr_inscrit_04073 = rows04073.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04073').textContent = name_04073;
   
    let com_04073 = document.getElementById("f-path-04073");
    let list_04073 = document.getElementById("list_04073");


    function togg04073() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04073-01').classList.remove('visible')
        document.querySelector('#polar-chart_04073-01').classList.remove('visible')
        document.querySelector('#polar-chart_04073-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04073').classList.remove('visible')
        document.querySelector('#f-path-04073').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04073
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04073
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04073
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04073
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04073
    }
    com_04073.onclick = togg04073;
    list_04073.onclick = togg04073;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04074 = data[73];

    /*Récupere les données que je veut de la Commune */
    name_04074 = rows04074.Libellé_géographique;
    Pop_04074 = rows04074.Population_en_2017;
    Pop_017_04074 = rows04074.Pop_017_ans_2017;
    Pop_mediane_vote_04074 = rows04074.Popu_possible_voté;
    nbr_inscrit_04074 = rows04074.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04074').textContent = name_04074;
   
    let com_04074 = document.getElementById("f-path-04074");
    let list_04074 = document.getElementById("list_04074");


    function togg04074() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04074-01').classList.remove('visible')
        document.querySelector('#polar-chart_04074-01').classList.remove('visible')
        document.querySelector('#polar-chart_04074-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04074').classList.remove('visible')
        document.querySelector('#f-path-04074').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04074
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04074
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04074
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04074
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04074
    }
    com_04074.onclick = togg04074;
    list_04074.onclick = togg04074;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04075 = data[74];

    /*Récupere les données que je veut de la Commune */
    name_04075 = rows04075.Libellé_géographique;
    Pop_04075 = rows04075.Population_en_2017;
    Pop_017_04075 = rows04075.Pop_017_ans_2017;
    Pop_mediane_vote_04075 = rows04075.Popu_possible_voté;
    nbr_inscrit_04075 = rows04075.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04075').textContent = name_04075;
   
    let com_04075 = document.getElementById("f-path-04075");
    let list_04075 = document.getElementById("list_04075");


    function togg04075() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04075-01').classList.remove('visible')
        document.querySelector('#polar-chart_04075-01').classList.remove('visible')
        document.querySelector('#polar-chart_04075-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04075').classList.remove('visible')
        document.querySelector('#f-path-04075').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04075
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04075
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04075
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04075
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04075
    }
    com_04075.onclick = togg04075;
    list_04075.onclick = togg04075;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04076 = data[75];

    /*Récupere les données que je veut de la Commune */
    name_04076 = rows04076.Libellé_géographique;
    Pop_04076 = rows04076.Population_en_2017;
    Pop_017_04076 = rows04076.Pop_017_ans_2017;
    Pop_mediane_vote_04076 = rows04076.Popu_possible_voté;
    nbr_inscrit_04076 = rows04076.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04076').textContent = name_04076;
   
    let com_04076 = document.getElementById("f-path-04076");
    let list_04076 = document.getElementById("list_04076");


    function togg04076() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04076-01').classList.remove('visible')
        document.querySelector('#polar-chart_04076-01').classList.remove('visible')
        document.querySelector('#polar-chart_04076-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04076').classList.remove('visible')
        document.querySelector('#f-path-04076').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04076
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04076
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04076
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04076
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04076
    }
    com_04076.onclick = togg04076;
    list_04076.onclick = togg04076;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04077 = data[76];

    /*Récupere les données que je veut de la Commune */
    name_04077 = rows04077.Libellé_géographique;
    Pop_04077 = rows04077.Population_en_2017;
    Pop_017_04077 = rows04077.Pop_017_ans_2017;
    Pop_mediane_vote_04077 = rows04077.Popu_possible_voté;
    nbr_inscrit_04077 = rows04077.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04077').textContent = name_04077;
   
    let com_04077 = document.getElementById("f-path-04077");
    let list_04077 = document.getElementById("list_04077");


    function togg04077() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04077-01').classList.remove('visible')
        document.querySelector('#polar-chart_04077-01').classList.remove('visible')
        document.querySelector('#polar-chart_04077-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04077').classList.remove('visible')
        document.querySelector('#f-path-04077').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04077
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04077
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04077
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04077
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04077
    }
    com_04077.onclick = togg04077;
    list_04077.onclick = togg04077;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04078 = data[77];

    /*Récupere les données que je veut de la Commune */
    name_04078 = rows04078.Libellé_géographique;
    Pop_04078 = rows04078.Population_en_2017;
    Pop_017_04078 = rows04078.Pop_017_ans_2017;
    Pop_mediane_vote_04078 = rows04078.Popu_possible_voté;
    nbr_inscrit_04078 = rows04078.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04078').textContent = name_04078;
   
    let com_04078 = document.getElementById("f-path-04078");
    let list_04078 = document.getElementById("list_04078");


    function togg04078() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04078-01').classList.remove('visible')
        document.querySelector('#polar-chart_04078-01').classList.remove('visible')
        document.querySelector('#polar-chart_04078-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04078').classList.remove('visible')
        document.querySelector('#f-path-04078').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04078
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04078
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04078
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04078
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04078
    }
    com_04078.onclick = togg04078;
    list_04078.onclick = togg04078;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04079 = data[78];

    /*Récupere les données que je veut de la Commune */
    name_04079 = rows04079.Libellé_géographique;
    Pop_04079 = rows04079.Population_en_2017;
    Pop_017_04079 = rows04079.Pop_017_ans_2017;
    Pop_mediane_vote_04079 = rows04079.Popu_possible_voté;
    nbr_inscrit_04079 = rows04079.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04079').textContent = name_04079;
   
    let com_04079 = document.getElementById("f-path-04079");
    let list_04079 = document.getElementById("list_04079");


    function togg04079() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04079-01').classList.remove('visible')
        document.querySelector('#polar-chart_04079-01').classList.remove('visible')
        document.querySelector('#polar-chart_04079-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04079').classList.remove('visible')
        document.querySelector('#f-path-04079').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04079
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04079
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04079
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04079
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04079
    }
    com_04079.onclick = togg04079;
    list_04079.onclick = togg04079;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04080 = data[79];

    /*Récupere les données que je veut de la Commune */
    name_04080 = rows04080.Libellé_géographique;
    Pop_04080 = rows04080.Population_en_2017;
    Pop_017_04080 = rows04080.Pop_017_ans_2017;
    Pop_mediane_vote_04080 = rows04080.Popu_possible_voté;
    nbr_inscrit_04080 = rows04080.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04080').textContent = name_04080;
   
    let com_04080 = document.getElementById("f-path-04080");
    let list_04080 = document.getElementById("list_04080");


    function togg04080() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04080-01').classList.remove('visible')
        document.querySelector('#polar-chart_04080-01').classList.remove('visible')
        document.querySelector('#polar-chart_04080-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04080').classList.remove('visible')
        document.querySelector('#f-path-04080').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04080
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04080
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04080
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04080
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04080
    }
    com_04080.onclick = togg04080;
    list_04080.onclick = togg04080;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04081 = data[80];

    /*Récupere les données que je veut de la Commune */
    name_04081 = rows04081.Libellé_géographique;
    Pop_04081 = rows04081.Population_en_2017;
    Pop_017_04081 = rows04081.Pop_017_ans_2017;
    Pop_mediane_vote_04081 = rows04081.Popu_possible_voté;
    nbr_inscrit_04081 = rows04081.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04081').textContent = name_04081;
   
    let com_04081 = document.getElementById("f-path-04081");
    let list_04081 = document.getElementById("list_04081");


    function togg04081() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04081-01').classList.remove('visible')
        document.querySelector('#polar-chart_04081-01').classList.remove('visible')
        document.querySelector('#polar-chart_04081-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04081').classList.remove('visible')
        document.querySelector('#f-path-04081').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04081
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04081
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04081
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04081
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04081
    }
    com_04081.onclick = togg04081;
    list_04081.onclick = togg04081;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04082 = data[81];

    /*Récupere les données que je veut de la Commune */
    name_04082 = rows04082.Libellé_géographique;
    Pop_04082 = rows04082.Population_en_2017;
    Pop_017_04082 = rows04082.Pop_017_ans_2017;
    Pop_mediane_vote_04082 = rows04082.Popu_possible_voté;
    nbr_inscrit_04082 = rows04082.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04082').textContent = name_04082;
   
    let com_04082 = document.getElementById("f-path-04082");
    let list_04082 = document.getElementById("list_04082");


    function togg04082() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04082-01').classList.remove('visible')
        document.querySelector('#polar-chart_04082-01').classList.remove('visible')
        document.querySelector('#polar-chart_04082-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04082').classList.remove('visible')
        document.querySelector('#f-path-04082').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04082
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04082
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04082
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04082
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04082
    }
    com_04082.onclick = togg04082;
    list_04082.onclick = togg04082;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04083 = data[82];

    /*Récupere les données que je veut de la Commune */
    name_04083 = rows04083.Libellé_géographique;
    Pop_04083 = rows04083.Population_en_2017;
    Pop_017_04083 = rows04083.Pop_017_ans_2017;
    Pop_mediane_vote_04083 = rows04083.Popu_possible_voté;
    nbr_inscrit_04083 = rows04083.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04083').textContent = name_04083;
   
    let com_04083 = document.getElementById("f-path-04083");
    let list_04083 = document.getElementById("list_04083");


    function togg04083() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04083-01').classList.remove('visible')
        document.querySelector('#polar-chart_04083-01').classList.remove('visible')
        document.querySelector('#polar-chart_04083-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04083').classList.remove('visible')
        document.querySelector('#f-path-04083').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04083
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04083
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04083
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04083
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04083
    }
    com_04083.onclick = togg04083;
    list_04083.onclick = togg04083;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04084 = data[83];

    /*Récupere les données que je veut de la Commune */
    name_04084 = rows04084.Libellé_géographique;
    Pop_04084 = rows04084.Population_en_2017;
    Pop_017_04084 = rows04084.Pop_017_ans_2017;
    Pop_mediane_vote_04084 = rows04084.Popu_possible_voté;
    nbr_inscrit_04084 = rows04084.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04084').textContent = name_04084;
   
    let com_04084 = document.getElementById("f-path-04084");
    let list_04084 = document.getElementById("list_04084");


    function togg04084() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04084-01').classList.remove('visible')
        document.querySelector('#polar-chart_04084-01').classList.remove('visible')
        document.querySelector('#polar-chart_04084-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04084').classList.remove('visible')
        document.querySelector('#f-path-04084').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04084
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04084
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04084
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04084
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04084
    }
    com_04084.onclick = togg04084;
    list_04084.onclick = togg04084;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04085 = data[84];

    /*Récupere les données que je veut de la Commune */
    name_04085 = rows04085.Libellé_géographique;
    Pop_04085 = rows04085.Population_en_2017;
    Pop_017_04085 = rows04085.Pop_017_ans_2017;
    Pop_mediane_vote_04085 = rows04085.Popu_possible_voté;
    nbr_inscrit_04085 = rows04085.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04085').textContent = name_04085;
   
    let com_04085 = document.getElementById("f-path-04085");
    let list_04085 = document.getElementById("list_04085");


    function togg04085() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04085-01').classList.remove('visible')
        document.querySelector('#polar-chart_04085-01').classList.remove('visible')
        document.querySelector('#polar-chart_04085-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04085').classList.remove('visible')
        document.querySelector('#f-path-04085').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04085
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04085
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04085
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04085
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04085
    }
    com_04085.onclick = togg04085;
    list_04085.onclick = togg04085;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04086 = data[85];

    /*Récupere les données que je veut de la Commune */
    name_04086 = rows04086.Libellé_géographique;
    Pop_04086 = rows04086.Population_en_2017;
    Pop_017_04086 = rows04086.Pop_017_ans_2017;
    Pop_mediane_vote_04086 = rows04086.Popu_possible_voté;
    nbr_inscrit_04086 = rows04086.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04086').textContent = name_04086;
   
    let com_04086 = document.getElementById("f-path-04086");
    let list_04086 = document.getElementById("list_04086");


    function togg04086() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04086-01').classList.remove('visible')
        document.querySelector('#polar-chart_04086-01').classList.remove('visible')
        document.querySelector('#polar-chart_04086-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04086').classList.remove('visible')
        document.querySelector('#f-path-04086').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04086
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04086
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04086
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04086
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04086
    }
    com_04086.onclick = togg04086;
    list_04086.onclick = togg04086;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04087 = data[86];

    /*Récupere les données que je veut de la Commune */
    name_04087 = rows04087.Libellé_géographique;
    Pop_04087 = rows04087.Population_en_2017;
    Pop_017_04087 = rows04087.Pop_017_ans_2017;
    Pop_mediane_vote_04087 = rows04087.Popu_possible_voté;
    nbr_inscrit_04087 = rows04087.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04087').textContent = name_04087;
   
    let com_04087 = document.getElementById("f-path-04087");
    let list_04087 = document.getElementById("list_04087");


    function togg04087() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04087-01').classList.remove('visible')
        document.querySelector('#polar-chart_04087-01').classList.remove('visible')
        document.querySelector('#polar-chart_04087-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04087').classList.remove('visible')
        document.querySelector('#f-path-04087').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04087
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04087
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04087
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04087
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04087
    }
    com_04087.onclick = togg04087;
    list_04087.onclick = togg04087;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04088 = data[87];

    /*Récupere les données que je veut de la Commune */
    name_04088 = rows04088.Libellé_géographique;
    Pop_04088 = rows04088.Population_en_2017;
    Pop_017_04088 = rows04088.Pop_017_ans_2017;
    Pop_mediane_vote_04088 = rows04088.Popu_possible_voté;
    nbr_inscrit_04088 = rows04088.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04088').textContent = name_04088;
   
    let com_04088 = document.getElementById("f-path-04088");
    let list_04088 = document.getElementById("list_04088");


    function togg04088() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04088-01').classList.remove('visible')
        document.querySelector('#polar-chart_04088-01').classList.remove('visible')
        document.querySelector('#polar-chart_04088-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04088').classList.remove('visible')
        document.querySelector('#f-path-04088').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04088
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04088
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04088
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04088
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04088
    }
    com_04088.onclick = togg04088;
    list_04088.onclick = togg04088;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04089 = data[88];

    /*Récupere les données que je veut de la Commune */
    name_04089 = rows04089.Libellé_géographique;
    Pop_04089 = rows04089.Population_en_2017;
    Pop_017_04089 = rows04089.Pop_017_ans_2017;
    Pop_mediane_vote_04089 = rows04089.Popu_possible_voté;
    nbr_inscrit_04089 = rows04089.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04089').textContent = name_04089;
   
    let com_04089 = document.getElementById("f-path-04089");
    let list_04089 = document.getElementById("list_04089");


    function togg04089() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04089-01').classList.remove('visible')
        document.querySelector('#polar-chart_04089-01').classList.remove('visible')
        document.querySelector('#polar-chart_04089-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04089').classList.remove('visible')
        document.querySelector('#f-path-04089').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04089
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04089
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04089
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04089
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04089
    }
    com_04089.onclick = togg04089;
    list_04089.onclick = togg04089;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04090 = data[89];

    /*Récupere les données que je veut de la Commune */
    name_04090 = rows04090.Libellé_géographique;
    Pop_04090 = rows04090.Population_en_2017;
    Pop_017_04090 = rows04090.Pop_017_ans_2017;
    Pop_mediane_vote_04090 = rows04090.Popu_possible_voté;
    nbr_inscrit_04090 = rows04090.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04090').textContent = name_04090;
   
    let com_04090 = document.getElementById("f-path-04090");
    let list_04090 = document.getElementById("list_04090");


    function togg04090() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04090-01').classList.remove('visible')
        document.querySelector('#polar-chart_04090-01').classList.remove('visible')
        document.querySelector('#polar-chart_04090-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04090').classList.remove('visible')
        document.querySelector('#f-path-04090').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04090
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04090
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04090
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04090
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04090
    }
    com_04090.onclick = togg04090;
    list_04090.onclick = togg04090;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04091 = data[90];

    /*Récupere les données que je veut de la Commune */
    name_04091 = rows04091.Libellé_géographique;
    Pop_04091 = rows04091.Population_en_2017;
    Pop_017_04091 = rows04091.Pop_017_ans_2017;
    Pop_mediane_vote_04091 = rows04091.Popu_possible_voté;
    nbr_inscrit_04091 = rows04091.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04091').textContent = name_04091;
   
    let com_04091 = document.getElementById("f-path-04091");
    let list_04091 = document.getElementById("list_04091");


    function togg04091() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04091-01').classList.remove('visible')
        document.querySelector('#polar-chart_04091-01').classList.remove('visible')
        document.querySelector('#polar-chart_04091-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04091').classList.remove('visible')
        document.querySelector('#f-path-04091').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04091
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04091
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04091
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04091
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04091
    }
    com_04091.onclick = togg04091;
    list_04091.onclick = togg04091;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04092 = data[91];

    /*Récupere les données que je veut de la Commune */
    name_04092 = rows04092.Libellé_géographique;
    Pop_04092 = rows04092.Population_en_2017;
    Pop_017_04092 = rows04092.Pop_017_ans_2017;
    Pop_mediane_vote_04092 = rows04092.Popu_possible_voté;
    nbr_inscrit_04092 = rows04092.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04092').textContent = name_04092;
   
    let com_04092 = document.getElementById("f-path-04092");
    let list_04092 = document.getElementById("list_04092");


    function togg04092() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04092-01').classList.remove('visible')
        document.querySelector('#polar-chart_04092-01').classList.remove('visible')
        document.querySelector('#polar-chart_04092-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04092').classList.remove('visible')
        document.querySelector('#f-path-04092').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04092
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04092
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04092
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04092
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04092
    }
    com_04092.onclick = togg04092;
    list_04092.onclick = togg04092;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04093 = data[92];

    /*Récupere les données que je veut de la Commune */
    name_04093 = rows04093.Libellé_géographique;
    Pop_04093 = rows04093.Population_en_2017;
    Pop_017_04093 = rows04093.Pop_017_ans_2017;
    Pop_mediane_vote_04093 = rows04093.Popu_possible_voté;
    nbr_inscrit_04093 = rows04093.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04093').textContent = name_04093;
   
    let com_04093 = document.getElementById("f-path-04093");
    let list_04093 = document.getElementById("list_04093");


    function togg04093() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04093-01').classList.remove('visible')
        document.querySelector('#polar-chart_04093-01').classList.remove('visible')
        document.querySelector('#polar-chart_04093-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04093').classList.remove('visible')
        document.querySelector('#f-path-04093').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04093
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04093
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04093
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04093
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04093
    }
    com_04093.onclick = togg04093;
    list_04093.onclick = togg04093;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04094 = data[93];

    /*Récupere les données que je veut de la Commune */
    name_04094 = rows04094.Libellé_géographique;
    Pop_04094 = rows04094.Population_en_2017;
    Pop_017_04094 = rows04094.Pop_017_ans_2017;
    Pop_mediane_vote_04094 = rows04094.Popu_possible_voté;
    nbr_inscrit_04094 = rows04094.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04094').textContent = name_04094;
   
    let com_04094 = document.getElementById("f-path-04094");
    let list_04094 = document.getElementById("list_04094");


    function togg04094() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04094-01').classList.remove('visible')
        document.querySelector('#polar-chart_04094-01').classList.remove('visible')
        document.querySelector('#polar-chart_04094-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04094').classList.remove('visible')
        document.querySelector('#f-path-04094').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04094
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04094
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04094
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04094
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04094
    }
    com_04094.onclick = togg04094;
    list_04094.onclick = togg04094;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04095 = data[94];

    /*Récupere les données que je veut de la Commune */
    name_04095 = rows04095.Libellé_géographique;
    Pop_04095 = rows04095.Population_en_2017;
    Pop_017_04095 = rows04095.Pop_017_ans_2017;
    Pop_mediane_vote_04095 = rows04095.Popu_possible_voté;
    nbr_inscrit_04095 = rows04095.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04095').textContent = name_04095;
   
    let com_04095 = document.getElementById("f-path-04095");
    let list_04095 = document.getElementById("list_04095");


    function togg04095() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04095-01').classList.remove('visible')
        document.querySelector('#polar-chart_04095-01').classList.remove('visible')
        document.querySelector('#polar-chart_04095-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04095').classList.remove('visible')
        document.querySelector('#f-path-04095').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04095
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04095
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04095
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04095
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04095
    }
    com_04095.onclick = togg04095;
    list_04095.onclick = togg04095;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04096 = data[95];

    /*Récupere les données que je veut de la Commune */
    name_04096 = rows04096.Libellé_géographique;
    Pop_04096 = rows04096.Population_en_2017;
    Pop_017_04096 = rows04096.Pop_017_ans_2017;
    Pop_mediane_vote_04096 = rows04096.Popu_possible_voté;
    nbr_inscrit_04096 = rows04096.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04096').textContent = name_04096;
   
    let com_04096 = document.getElementById("f-path-04096");
    let list_04096 = document.getElementById("list_04096");


    function togg04096() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04096-01').classList.remove('visible')
        document.querySelector('#polar-chart_04096-01').classList.remove('visible')
        document.querySelector('#polar-chart_04096-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04096').classList.remove('visible')
        document.querySelector('#f-path-04096').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04096
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04096
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04096
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04096
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04096
    }
    com_04096.onclick = togg04096;
    list_04096.onclick = togg04096;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04097 = data[96];

    /*Récupere les données que je veut de la Commune */
    name_04097 = rows04097.Libellé_géographique;
    Pop_04097 = rows04097.Population_en_2017;
    Pop_017_04097 = rows04097.Pop_017_ans_2017;
    Pop_mediane_vote_04097 = rows04097.Popu_possible_voté;
    nbr_inscrit_04097 = rows04097.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04097').textContent = name_04097;
   
    let com_04097 = document.getElementById("f-path-04097");
    let list_04097 = document.getElementById("list_04097");


    function togg04097() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04097-01').classList.remove('visible')
        document.querySelector('#polar-chart_04097-01').classList.remove('visible')
        document.querySelector('#polar-chart_04097-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04097').classList.remove('visible')
        document.querySelector('#f-path-04097').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04097
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04097
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04097
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04097
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04097
    }
    com_04097.onclick = togg04097;
    list_04097.onclick = togg04097;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04098 = data[97];

    /*Récupere les données que je veut de la Commune */
    name_04098 = rows04098.Libellé_géographique;
    Pop_04098 = rows04098.Population_en_2017;
    Pop_017_04098 = rows04098.Pop_017_ans_2017;
    Pop_mediane_vote_04098 = rows04098.Popu_possible_voté;
    nbr_inscrit_04098 = rows04098.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04098').textContent = name_04098;
   
    let com_04098 = document.getElementById("f-path-04098");
    let list_04098 = document.getElementById("list_04098");


    function togg04098() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04098-01').classList.remove('visible')
        document.querySelector('#polar-chart_04098-01').classList.remove('visible')
        document.querySelector('#polar-chart_04098-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04098').classList.remove('visible')
        document.querySelector('#f-path-04098').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04098
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04098
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04098
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04098
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04098
    }
    com_04098.onclick = togg04098;
    list_04098.onclick = togg04098;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04099 = data[98];

    /*Récupere les données que je veut de la Commune */
    name_04099 = rows04099.Libellé_géographique;
    Pop_04099 = rows04099.Population_en_2017;
    Pop_017_04099 = rows04099.Pop_017_ans_2017;
    Pop_mediane_vote_04099 = rows04099.Popu_possible_voté;
    nbr_inscrit_04099 = rows04099.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04099').textContent = name_04099;
   
    let com_04099 = document.getElementById("f-path-04099");
    let list_04099 = document.getElementById("list_04099");


    function togg04099() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04099-01').classList.remove('visible')
        document.querySelector('#polar-chart_04099-01').classList.remove('visible')
        document.querySelector('#polar-chart_04099-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04099').classList.remove('visible')
        document.querySelector('#f-path-04099').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04099
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04099
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04099
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04099
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04099
    }
    com_04099.onclick = togg04099;
    list_04099.onclick = togg04099;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04100 = data[99];

    /*Récupere les données que je veut de la Commune */
    name_04100 = rows04100.Libellé_géographique;
    Pop_04100 = rows04100.Population_en_2017;
    Pop_017_04100 = rows04100.Pop_017_ans_2017;
    Pop_mediane_vote_04100 = rows04100.Popu_possible_voté;
    nbr_inscrit_04100 = rows04100.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04100').textContent = name_04100;
   
    let com_04100 = document.getElementById("f-path-04100");
    let list_04100 = document.getElementById("list_04100");


    function togg04100() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04100-01').classList.remove('visible')
        document.querySelector('#polar-chart_04100-01').classList.remove('visible')
        document.querySelector('#polar-chart_04100-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04100').classList.remove('visible')
        document.querySelector('#f-path-04100').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04100
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04100
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04100
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04100
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04100
    }
    com_04100.onclick = togg04100;
    list_04100.onclick = togg04100;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04101 = data[100];
    /*Récupere les données que je veut de la Commune */
    name_04101 = rows04101.Libellé_géographique;
    Pop_04101 = rows04101.Population_en_2017;
    Pop_017_04101 = rows04101.Pop_017_ans_2017;
    Pop_mediane_vote_04101 = rows04101.Popu_possible_voté;
    nbr_inscrit_04101 = rows04101.Inscrits;
    /*Pose dans le Menu*/
    document.querySelector('#list_04101').textContent = name_04101;
/*--------------------------------------------------------------------------*/
    var body = document.querySelector('#body')
    var path = document.querySelector('#map01')
    /******************************************************************** */
    let com_04101 = document.getElementById("f-path-04101");
    let list_04101 = document.getElementById("list_04101");
    function togg04101() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04101-01').classList.remove('visible')
        document.querySelector('#polar-chart_04101-01').classList.remove('visible')
        document.querySelector('#polar-chart_04101-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04101').classList.remove('visible')
        document.querySelector('#f-path-04101').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04101
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04101
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04101
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04101
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04101
    }
    com_04101.onclick = togg04101;
    list_04101.onclick = togg04101;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04102 = data[101];
    /*Récupere les données que je veut de la Commune */
    name_04102 = rows04102.Libellé_géographique;
    Pop_04102 = rows04102.Population_en_2017;
    Pop_017_04102 = rows04102.Pop_017_ans_2017;
    Pop_mediane_vote_04102 = rows04102.Popu_possible_voté;
    nbr_inscrit_04102 = rows04102.Inscrits;  
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04102').textContent = name_04102;
/*--------------------------------------------------------------------------*/
    let com_04102 = document.getElementById("f-path-04102");
    let list_04102 = document.getElementById("list_04102");
    /******************************************************************** */
    function togg04102() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04102-01').classList.remove('visible')
        document.querySelector('#polar-chart_04102-01').classList.remove('visible')
        document.querySelector('#polar-chart_04102-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04102').classList.remove('visible')
        document.querySelector('#f-path-04102').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04102;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04102
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04102
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04102
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04102
    }
    com_04102.onclick = togg04102;
    list_04102.onclick = togg04102;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04103 = data[102];
    /*Récupere les données que je veut de la Commune */
    name_04103 = rows04103.Libellé_géographique;
    Pop_04103 = rows04103.Population_en_2017;
    Pop_017_04103 = rows04103.Pop_017_ans_2017;
    Pop_mediane_vote_04103 = rows04103.Popu_possible_voté;
    nbr_inscrit_04103 = rows04103.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04103').textContent = name_04103;
    let com_04103 = document.getElementById("f-path-04103");
    let list_04103 = document.getElementById("list_04103");
    function togg04103() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04103-01').classList.remove('visible')
        document.querySelector('#polar-chart_04103-01').classList.remove('visible')
        document.querySelector('#polar-chart_04103-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04103').classList.remove('visible')
        document.querySelector('#f-path-04103').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04103;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04103
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04103
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04103
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04103
    }
    com_04103.onclick = togg04103;
    list_04103.onclick = togg04103;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04104 = data[103];
    /*Récupere les données que je veut de la Commune */
    name_04104 = rows04104.Libellé_géographique;
    Pop_04104 = rows04104.Population_en_2017;
    Pop_017_04104 = rows04104.Pop_017_ans_2017;
    Pop_mediane_vote_04104 = rows04104.Popu_possible_voté;
    nbr_inscrit_04104 = rows04104.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04104').textContent = name_04104;
    let com_04104 = document.getElementById("f-path-04104");
    let list_04104 = document.getElementById("list_04104");
    function togg04104() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04104-01').classList.remove('visible')
        document.querySelector('#polar-chart_04104-01').classList.remove('visible')
        document.querySelector('#polar-chart_04104-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04104').classList.remove('visible')
        document.querySelector('#f-path-04104').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04104;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04104
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04104
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04104
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04104
    }
    com_04104.onclick = togg04104;
    list_04104.onclick = togg04104;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04105 = data[104];
    /*Récupere les données que je veut de la Commune */
    name_04105 = rows04105.Libellé_géographique;
    Pop_04105 = rows04105.Population_en_2017;
    Pop_017_04105 = rows04105.Pop_017_ans_2017;
    Pop_mediane_vote_04105 = rows04105.Popu_possible_voté;
    nbr_inscrit_04105 = rows04105.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04105').textContent = name_04105;
    let com_04105 = document.getElementById("f-path-04105");
    let list_04105 = document.getElementById("list_04105");
    function togg04105() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04105-01').classList.remove('visible')
        document.querySelector('#polar-chart_04105-01').classList.remove('visible')
        document.querySelector('#polar-chart_04105-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04105').classList.remove('visible')
        document.querySelector('#f-path-04105').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04105
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04105
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04105
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04105
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04105
    }
    com_04105.onclick = togg04105;
    list_04105.onclick = togg04105;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04106 = data[105];
    /*Récupere les données que je veut de la Commune */
    name_04106 = rows04106.Libellé_géographique;
    Pop_04106 = rows04106.Population_en_2017;
    Pop_017_04106 = rows04106.Pop_017_ans_2017;
    Pop_mediane_vote_04106 = rows04106.Popu_possible_voté;
    nbr_inscrit_04106 = rows04106.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04106').textContent = name_04106;
    let com_04106 = document.getElementById("f-path-04106");
    let list_04106 = document.getElementById("list_04106");
    function togg04106() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04106-01').classList.remove('visible')
        document.querySelector('#polar-chart_04106-01').classList.remove('visible')
        document.querySelector('#polar-chart_04106-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04106').classList.remove('visible')
        document.querySelector('#f-path-04106').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04106
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04106
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04106
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04106
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04106
    }
    com_04106.onclick = togg04106;
    list_04106.onclick = togg04106;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04107 = data[106];
    /*Récupere les données que je veut de la Commune */
    name_04107 = rows04107.Libellé_géographique;
    Pop_04107 = rows04107.Population_en_2017;
    Pop_017_04107 = rows04107.Pop_017_ans_2017;
    Pop_mediane_vote_04107 = rows04107.Popu_possible_voté;
    nbr_inscrit_04107 = rows04107.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04107').textContent = name_04107; 
    let com_04107 = document.getElementById("f-path-04107");
    let list_04107 = document.getElementById("list_04107");
    function togg04107() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04107-01').classList.remove('visible')
        document.querySelector('#polar-chart_04107-01').classList.remove('visible')
        document.querySelector('#polar-chart_04107-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04107').classList.remove('visible')
        document.querySelector('#f-path-04107').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04107
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04107
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04107
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04107
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04107
    }
    com_04107.onclick = togg04107;
    list_04107.onclick = togg04107;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04108 = data[107];
    
    /*Récupere les données que je veut de la Commune */
    name_04108 = rows04108.Libellé_géographique;
    Pop_04108 = rows04108.Population_en_2017;
    Pop_017_04108 = rows04108.Pop_017_ans_2017;
    Pop_mediane_vote_04108 = rows04108.Popu_possible_voté;
    nbr_inscrit_04108 = rows04108.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04108').textContent = name_04108;
   
    let com_04108 = document.getElementById("f-path-04108");
    let list_04108 = document.getElementById("list_04108");


    function togg04108() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04108-01').classList.remove('visible')
        document.querySelector('#polar-chart_04108-01').classList.remove('visible')
        document.querySelector('#polar-chart_04108-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04108').classList.remove('visible')
        document.querySelector('#f-path-04108').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04108
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04108
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04108
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04108
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04108
    }
    com_04108.onclick = togg04108;
    list_04108.onclick = togg04108;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04109 = data[108];
    
    /*Récupere les données que je veut de la Commune */
    name_04109 = rows04109.Libellé_géographique;
    Pop_04109 = rows04109.Population_en_2017;
    Pop_017_04109 = rows04109.Pop_017_ans_2017;
    Pop_mediane_vote_04109 = rows04109.Popu_possible_voté;
    nbr_inscrit_04109 = rows04109.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04109').textContent = name_04109;

    let com_04109 = document.getElementById("f-path-04109");
    let list_04109 = document.getElementById("list_04109");


    function togg04109() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04109-01').classList.remove('visible')
        document.querySelector('#polar-chart_04109-01').classList.remove('visible')
        document.querySelector('#polar-chart_04109-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04109').classList.remove('visible')
        document.querySelector('#f-path-04109').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04109
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04109
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04109
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04109
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04109
    }
    com_04109.onclick = togg04109;
    list_04109.onclick = togg04109;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04110 = data[109];
 
    /*Récupere les données que je veut de la Commune */
    name_04110 = rows04110.Libellé_géographique;
    Pop_04110 = rows04110.Population_en_2017;
    Pop_017_04110 = rows04110.Pop_017_ans_2017;
    Pop_mediane_vote_04110 = rows04110.Popu_possible_voté;
    nbr_inscrit_04110 = rows04110.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04110').textContent = name_04110;

    let com_04110 = document.getElementById("f-path-04110");
    let list_04110 = document.getElementById("list_04110");


    function togg04110() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04110-01').classList.remove('visible')
        document.querySelector('#polar-chart_04110-01').classList.remove('visible')
        document.querySelector('#polar-chart_04110-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04110').classList.remove('visible')
        document.querySelector('#f-path-04110').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04110
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04110
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04110
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04110
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04110
    }
    com_04110.onclick = togg04110;
    list_04110.onclick = togg04110;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04111 = data[110];

    /*Récupere les données que je veut de la Commune */
    name_04111 = rows04111.Libellé_géographique;
    Pop_04111 = rows04111.Population_en_2017;
    Pop_017_04111 = rows04111.Pop_017_ans_2017;
    Pop_mediane_vote_04111 = rows04111.Popu_possible_voté;
    nbr_inscrit_04111 = rows04111.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04111').textContent = name_04111;
   
    let com_04111 = document.getElementById("f-path-04111");
    let list_04111 = document.getElementById("list_04111");


    function togg04111() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04111-01').classList.remove('visible')
        document.querySelector('#polar-chart_04111-01').classList.remove('visible')
        document.querySelector('#polar-chart_04111-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04111').classList.remove('visible')
        document.querySelector('#f-path-04111').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04111
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04111
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04111
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04111
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04111
    }
    com_04111.onclick = togg04111;
    list_04111.onclick = togg04111;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04112 = data[111];

    /*Récupere les données que je veut de la Commune */
    name_04112 = rows04112.Libellé_géographique;
    Pop_04112 = rows04112.Population_en_2017;
    Pop_017_04112 = rows04112.Pop_017_ans_2017;
    Pop_mediane_vote_04112 = rows04112.Popu_possible_voté;
    nbr_inscrit_04112 = rows04112.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04112').textContent = name_04112;
   
    let com_04112 = document.getElementById("f-path-04112");
    let list_04112 = document.getElementById("list_04112");


    function togg04112() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04112-01').classList.remove('visible')
        document.querySelector('#polar-chart_04112-01').classList.remove('visible')
        document.querySelector('#polar-chart_04112-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04112').classList.remove('visible')
        document.querySelector('#f-path-04112').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04112
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04112
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04112
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04112
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04112
    }
    com_04112.onclick = togg04112;
    list_04112.onclick = togg04112;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04113 = data[112];

    /*Récupere les données que je veut de la Commune */
    name_04113 = rows04113.Libellé_géographique;
    Pop_04113 = rows04113.Population_en_2017;
    Pop_017_04113 = rows04113.Pop_017_ans_2017;
    Pop_mediane_vote_04113 = rows04113.Popu_possible_voté;
    nbr_inscrit_04113 = rows04113.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04113').textContent = name_04113;
   
    let com_04113 = document.getElementById("f-path-04113");
    let list_04113 = document.getElementById("list_04113");


    function togg04113() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04113-01').classList.remove('visible')
        document.querySelector('#polar-chart_04113-01').classList.remove('visible')
        document.querySelector('#polar-chart_04113-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04113').classList.remove('visible')
        document.querySelector('#f-path-04113').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04113
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04113
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04113
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04113
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04113
    }
    com_04113.onclick = togg04113;
    list_04113.onclick = togg04113;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04114 = data[113];

    /*Récupere les données que je veut de la Commune */
    name_04114 = rows04114.Libellé_géographique;
    Pop_04114 = rows04114.Population_en_2017;
    Pop_017_04114 = rows04114.Pop_017_ans_2017;
    Pop_mediane_vote_04114 = rows04114.Popu_possible_voté;
    nbr_inscrit_04114 = rows04114.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04114').textContent = name_04114;
   
    let com_04114 = document.getElementById("f-path-04114");
    let list_04114 = document.getElementById("list_04114");


    function togg04114() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04114-01').classList.remove('visible')
        document.querySelector('#polar-chart_04114-01').classList.remove('visible')
        document.querySelector('#polar-chart_04114-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04114').classList.remove('visible')
        document.querySelector('#f-path-04114').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04114
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04114
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04114
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04114
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04114
    }
    com_04114.onclick = togg04114;
    list_04114.onclick = togg04114;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04115 = data[114];

    /*Récupere les données que je veut de la Commune */
    name_04115 = rows04115.Libellé_géographique;
    Pop_04115 = rows04115.Population_en_2017;
    Pop_017_04115 = rows04115.Pop_017_ans_2017;
    Pop_mediane_vote_04115 = rows04115.Popu_possible_voté;
    nbr_inscrit_04115 = rows04115.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04115').textContent = name_04115;
   
    let com_04115 = document.getElementById("f-path-04115");
    let list_04115 = document.getElementById("list_04115");


    function togg04115() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04115-01').classList.remove('visible')
        document.querySelector('#polar-chart_04115-01').classList.remove('visible')
        document.querySelector('#polar-chart_04115-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04115').classList.remove('visible')
        document.querySelector('#f-path-04115').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04115
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04115
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04115
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04115
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04115
    }
    com_04115.onclick = togg04115;
    list_04115.onclick = togg04115;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04116 = data[115];

    /*Récupere les données que je veut de la Commune */
    name_04116 = rows04116.Libellé_géographique;
    Pop_04116 = rows04116.Population_en_2017;
    Pop_017_04116 = rows04116.Pop_017_ans_2017;
    Pop_mediane_vote_04116 = rows04116.Popu_possible_voté;
    nbr_inscrit_04116 = rows04116.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04116').textContent = name_04116;
   
    let com_04116 = document.getElementById("f-path-04116");
    let list_04116 = document.getElementById("list_04116");


    function togg04116() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04116-01').classList.remove('visible')
        document.querySelector('#polar-chart_04116-01').classList.remove('visible')
        document.querySelector('#polar-chart_04116-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04116').classList.remove('visible')
        document.querySelector('#f-path-04116').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04116
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04116
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04116
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04116
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04116
    }
    com_04116.onclick = togg04116;
    list_04116.onclick = togg04116;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04117 = data[116];

    /*Récupere les données que je veut de la Commune */
    name_04117 = rows04117.Libellé_géographique;
    Pop_04117 = rows04117.Population_en_2017;
    Pop_017_04117 = rows04117.Pop_017_ans_2017;
    Pop_mediane_vote_04117 = rows04117.Popu_possible_voté;
    nbr_inscrit_04117 = rows04117.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04117').textContent = name_04117;
   
    let com_04117 = document.getElementById("f-path-04117");
    let list_04117 = document.getElementById("list_04117");


    function togg04117() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04117-01').classList.remove('visible')
        document.querySelector('#polar-chart_04117-01').classList.remove('visible')
        document.querySelector('#polar-chart_04117-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04117').classList.remove('visible')
        document.querySelector('#f-path-04117').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04117
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04117
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04117
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04117
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04117
    }
    com_04117.onclick = togg04117;
    list_04117.onclick = togg04117;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04118 = data[117];

    /*Récupere les données que je veut de la Commune */
    name_04118 = rows04118.Libellé_géographique;
    Pop_04118 = rows04118.Population_en_2017;
    Pop_017_04118 = rows04118.Pop_017_ans_2017;
    Pop_mediane_vote_04118 = rows04117.Popu_possible_voté;
    nbr_inscrit_04118 = rows04118.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04118').textContent = name_04118;
   
    let com_04118 = document.getElementById("f-path-04118");
    let list_04118 = document.getElementById("list_04118");


    function togg04118() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04118-01').classList.remove('visible')
        document.querySelector('#polar-chart_04118-01').classList.remove('visible')
        document.querySelector('#polar-chart_04118-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04118').classList.remove('visible')
        document.querySelector('#f-path-04118').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04118
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04118
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04118
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04118
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04118
    }
    com_04118.onclick = togg04118;
    list_04118.onclick = togg04118;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04119 = data[118];

    /*Récupere les données que je veut de la Commune */
    name_04119 = rows04119.Libellé_géographique;
    Pop_04119 = rows04119.Population_en_2017;
    Pop_017_04119 = rows04119.Pop_017_ans_2017;
    Pop_mediane_vote_04119 = rows04119.Popu_possible_voté;
    nbr_inscrit_04119 = rows04119.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04119').textContent = name_04119;
   
    let com_04119 = document.getElementById("f-path-04119");
    let list_04119 = document.getElementById("list_04119");


    function togg04119() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04119-01').classList.remove('visible')
        document.querySelector('#polar-chart_04119-01').classList.remove('visible')
        document.querySelector('#polar-chart_04119-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04119').classList.remove('visible')
        document.querySelector('#f-path-04119').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04119
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04119
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04119
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04119
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04119
    }
    com_04119.onclick = togg04119;
    list_04119.onclick = togg04119;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04120 = data[119];

    /*Récupere les données que je veut de la Commune */
    name_04120 = rows04120.Libellé_géographique;
    Pop_04120 = rows04120.Population_en_2017;
    Pop_017_04120 = rows04120.Pop_017_ans_2017;
    Pop_mediane_vote_04120 = rows04120.Popu_possible_voté;
    nbr_inscrit_04120 = rows04120.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04120').textContent = name_04120;
   
    let com_04120 = document.getElementById("f-path-04120");
    let list_04120 = document.getElementById("list_04120");


    function togg04120() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04120-01').classList.remove('visible')
        document.querySelector('#polar-chart_04120-01').classList.remove('visible')
        document.querySelector('#polar-chart_04120-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04120').classList.remove('visible')
        document.querySelector('#f-path-04120').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04120
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04120
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04120
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04120
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04120
    }
    com_04120.onclick = togg04120;
    list_04120.onclick = togg04120;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04121 = data[120];

    /*Récupere les données que je veut de la Commune */
    name_04121 = rows04121.Libellé_géographique;
    Pop_04121 = rows04121.Population_en_2017;
    Pop_017_04121 = rows04121.Pop_017_ans_2017;
    Pop_mediane_vote_04121 = rows04121.Popu_possible_voté;
    nbr_inscrit_04121 = rows04121.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04121').textContent = name_04121;
   
    let com_04121 = document.getElementById("f-path-04121");
    let list_04121 = document.getElementById("list_04121");


    function togg04121() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04121-01').classList.remove('visible')
        document.querySelector('#polar-chart_04121-01').classList.remove('visible')
        document.querySelector('#polar-chart_04121-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04121').classList.remove('visible')
        document.querySelector('#f-path-04121').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04121
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04121
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04121
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04121
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04121
    }
    com_04121.onclick = togg04121;
    list_04121.onclick = togg04121;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04122 = data[121];

    /*Récupere les données que je veut de la Commune */
    name_04122 = rows04122.Libellé_géographique;
    Pop_04122 = rows04122.Population_en_2017;
    Pop_017_04122 = rows04122.Pop_017_ans_2017;
    Pop_mediane_vote_04122 = rows04122.Popu_possible_voté;
    nbr_inscrit_04122 = rows04122.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04122').textContent = name_04122;
   
    let com_04122 = document.getElementById("f-path-04122");
    let list_04122 = document.getElementById("list_04122");


    function togg04122() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04122-01').classList.remove('visible')
        document.querySelector('#polar-chart_04122-01').classList.remove('visible')
        document.querySelector('#polar-chart_04122-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04122').classList.remove('visible')
        document.querySelector('#f-path-04122').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04122
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04122
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04122
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04122
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04122
    }
    com_04122.onclick = togg04122;
    list_04122.onclick = togg04122;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04123 = data[122];

    /*Récupere les données que je veut de la Commune */
    name_04123 = rows04123.Libellé_géographique;
    Pop_04123 = rows04123.Population_en_2017;
    Pop_017_04123 = rows04123.Pop_017_ans_2017;
    Pop_mediane_vote_04123 = rows04123.Popu_possible_voté;
    nbr_inscrit_04123 = rows04123.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04123').textContent = name_04123;
   
    let com_04123 = document.getElementById("f-path-04123");
    let list_04123 = document.getElementById("list_04123");


    function togg04123() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04123-01').classList.remove('visible')
        document.querySelector('#polar-chart_04123-01').classList.remove('visible')
        document.querySelector('#polar-chart_04123-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04123').classList.remove('visible')
        document.querySelector('#f-path-04123').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04123
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04123
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04123
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04123
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04123
    }
    com_04123.onclick = togg04123;
    list_04123.onclick = togg04123;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04124 = data[123];

    /*Récupere les données que je veut de la Commune */
    name_04124 = rows04124.Libellé_géographique;
    Pop_04124 = rows04124.Population_en_2017;
    Pop_017_04124 = rows04124.Pop_017_ans_2017;
    Pop_mediane_vote_04124 = rows04124.Popu_possible_voté;
    nbr_inscrit_04124 = rows04124.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04124').textContent = name_04124;
   
    let com_04124 = document.getElementById("f-path-04124");
    let list_04124 = document.getElementById("list_04124");


    function togg04124() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04124-01').classList.remove('visible')
        document.querySelector('#polar-chart_04124-01').classList.remove('visible')
        document.querySelector('#polar-chart_04124-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04124').classList.remove('visible')
        document.querySelector('#f-path-04124').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04124
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04124
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04124
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04124
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04124
    }
    com_04124.onclick = togg04124;
    list_04124.onclick = togg04124;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04125 = data[124];

    /*Récupere les données que je veut de la Commune */
    name_04125 = rows04125.Libellé_géographique;
    Pop_04125 = rows04125.Population_en_2017;
    Pop_017_04125 = rows04125.Pop_017_ans_2017;
    Pop_mediane_vote_04125 = rows04125.Popu_possible_voté;
    nbr_inscrit_04125 = rows04125.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04125').textContent = name_04125;
   
    let com_04125 = document.getElementById("f-path-04125");
    let list_04125 = document.getElementById("list_04125");


    function togg04125() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04125-01').classList.remove('visible')
        document.querySelector('#polar-chart_04125-01').classList.remove('visible')
        document.querySelector('#polar-chart_04125-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04125').classList.remove('visible')
        document.querySelector('#f-path-04125').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04125
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04125
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04125
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04125
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04125
    }
    com_04125.onclick = togg04125;
    list_04125.onclick = togg04125;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04126 = data[125];

    /*Récupere les données que je veut de la Commune */
    name_04126 = rows04126.Libellé_géographique;
    Pop_04126 = rows04126.Population_en_2017;
    Pop_017_04126 = rows04126.Pop_017_ans_2017;
    Pop_mediane_vote_04126 = rows04126.Popu_possible_voté;
    nbr_inscrit_04126 = rows04126.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04126').textContent = name_04126;
   
    let com_04126 = document.getElementById("f-path-04126");
    let list_04126 = document.getElementById("list_04126");


    function togg04126() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04126-01').classList.remove('visible')
        document.querySelector('#polar-chart_04126-01').classList.remove('visible')
        document.querySelector('#polar-chart_04126-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04126').classList.remove('visible')
        document.querySelector('#f-path-04126').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04126
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04126
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04126
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04126
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04126
    }
    com_04126.onclick = togg04126;
    list_04126.onclick = togg04126;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04127 = data[126];

    /*Récupere les données que je veut de la Commune */
    name_04127 = rows04127.Libellé_géographique;
    Pop_04127 = rows04127.Population_en_2017;
    Pop_017_04127 = rows04127.Pop_017_ans_2017;
    Pop_mediane_vote_04127 = rows04127.Popu_possible_voté;
    nbr_inscrit_04127 = rows04127.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04127').textContent = name_04127;
   
    let com_04127 = document.getElementById("f-path-04127");
    let list_04127 = document.getElementById("list_04127");


    function togg04127() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04127-01').classList.remove('visible')
        document.querySelector('#polar-chart_04127-01').classList.remove('visible')
        document.querySelector('#polar-chart_04127-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04127').classList.remove('visible')
        document.querySelector('#f-path-04127').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04127
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04127
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04127
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04127
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04127
    }
    com_04127.onclick = togg04127;
    list_04127.onclick = togg04127;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04128 = data[127];

    /*Récupere les données que je veut de la Commune */
    name_04128 = rows04128.Libellé_géographique;
    Pop_04128 = rows04128.Population_en_2017;
    Pop_017_04128 = rows04128.Pop_017_ans_2017;
    Pop_mediane_vote_04128 = rows04128.Popu_possible_voté;
    nbr_inscrit_04128 = rows04128.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04128').textContent = name_04128;
   
    let com_04128 = document.getElementById("f-path-04128");
    let list_04128 = document.getElementById("list_04128");


    function togg04128() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04128-01').classList.remove('visible')
        document.querySelector('#polar-chart_04128-01').classList.remove('visible')
        document.querySelector('#polar-chart_04128-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04128').classList.remove('visible')
        document.querySelector('#f-path-04128').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04128
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04128
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04128
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04128
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04128
    }
    com_04128.onclick = togg04128;
    list_04128.onclick = togg04128;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04129 = data[128];

    /*Récupere les données que je veut de la Commune */
    name_04129 = rows04129.Libellé_géographique;
    Pop_04129 = rows04129.Population_en_2017;
    Pop_017_04129 = rows04129.Pop_017_ans_2017;
    Pop_mediane_vote_04129 = rows04129.Popu_possible_voté;
    nbr_inscrit_04129 = rows04129.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04129').textContent = name_04129;
   
    let com_04129 = document.getElementById("f-path-04129");
    let list_04129 = document.getElementById("list_04129");


    function togg04129() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04129-01').classList.remove('visible')
        document.querySelector('#polar-chart_04129-01').classList.remove('visible')
        document.querySelector('#polar-chart_04129-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04129').classList.remove('visible')
        document.querySelector('#f-path-04129').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04129
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04129
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04129
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04129
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04129
    }
    com_04129.onclick = togg04129;
    list_04129.onclick = togg04129;
     /************************************************************************************* */
    /************************************************************************************* */
    const rows04130 = data[129];

    /*Récupere les données que je veut de la Commune */
    name_04130 = rows04130.Libellé_géographique;
    Pop_04130 = rows04130.Population_en_2017;
    Pop_017_04130 = rows04130.Pop_017_ans_2017;
    Pop_mediane_vote_04130 = rows04130.Popu_possible_voté;
    nbr_inscrit_04130 = rows04130.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04130').textContent = name_04130;
   
    let com_04130 = document.getElementById("f-path-04130");
    let list_04130 = document.getElementById("list_04130");


    function togg04130() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04130-01').classList.remove('visible')
        document.querySelector('#polar-chart_04130-01').classList.remove('visible')
        document.querySelector('#polar-chart_04130-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04130').classList.remove('visible')
        document.querySelector('#f-path-04130').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04130
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04130
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04130
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04130
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04130
    }
    com_04130.onclick = togg04130;
    list_04130.onclick = togg04130;
     /************************************************************************************* */
    /************************************************************************************* */
    const rows04131 = data[130];

    /*Récupere les données que je veut de la Commune */
    name_04131 = rows04131.Libellé_géographique;
    Pop_04131 = rows04131.Population_en_2017;
    Pop_017_04131 = rows04131.Pop_017_ans_2017;
    Pop_mediane_vote_04131 = rows04131.Popu_possible_voté;
    nbr_inscrit_04131 = rows04131.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04131').textContent = name_04131;
   
    let com_04131 = document.getElementById("f-path-04131");
    let list_04131 = document.getElementById("list_04131");


    function togg04131() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04131-01').classList.remove('visible')
        document.querySelector('#polar-chart_04131-01').classList.remove('visible')
        document.querySelector('#polar-chart_04131-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04131').classList.remove('visible')
        document.querySelector('#f-path-04131').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04131
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04131
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04131
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04131
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04131
    }
    com_04131.onclick = togg04131;
    list_04131.onclick = togg04131;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04132 = data[131];

    /*Récupere les données que je veut de la Commune */
    name_04132 = rows04132.Libellé_géographique;
    Pop_04132 = rows04132.Population_en_2017;
    Pop_017_04132 = rows04132.Pop_017_ans_2017;
    Pop_mediane_vote_04132 = rows04132.Popu_possible_voté;
    nbr_inscrit_04132 = rows04132.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04132').textContent = name_04132;
   
    let com_04132 = document.getElementById("f-path-04132");
    let list_04132 = document.getElementById("list_04132");


    function togg04132() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04132-01').classList.remove('visible')
        document.querySelector('#polar-chart_04132-01').classList.remove('visible')
        document.querySelector('#polar-chart_04132-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04132').classList.remove('visible')
        document.querySelector('#f-path-04132').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04132
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04132
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04132
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04132
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04132
    }
    com_04132.onclick = togg04132;
    list_04132.onclick = togg04132;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04133 = data[132];

    /*Récupere les données que je veut de la Commune */
    name_04133 = rows04133.Libellé_géographique;
    Pop_04133 = rows04133.Population_en_2017;
    Pop_017_04133 = rows04133.Pop_017_ans_2017;
    Pop_mediane_vote_04133 = rows04133.Popu_possible_voté;
    nbr_inscrit_04133 = rows04133.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04133').textContent = name_04133;
   
    let com_04133 = document.getElementById("f-path-04133");
    let list_04133 = document.getElementById("list_04133");


    function togg04133() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04133-01').classList.remove('visible')
        document.querySelector('#polar-chart_04133-01').classList.remove('visible')
        document.querySelector('#polar-chart_04133-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04133').classList.remove('visible')
        document.querySelector('#f-path-04133').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04133
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04133
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04133
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04133
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04133
    }
    com_04133.onclick = togg04133;
    list_04133.onclick = togg04133;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04134 = data[133];

    /*Récupere les données que je veut de la Commune */
    name_04134 = rows04134.Libellé_géographique;
    Pop_04134 = rows04134.Population_en_2017;
    Pop_017_04134 = rows04134.Pop_017_ans_2017;
    Pop_mediane_vote_04134 = rows04134.Popu_possible_voté;
    nbr_inscrit_04134 = rows04134.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04134').textContent = name_04134;
   
    let com_04134 = document.getElementById("f-path-04134");
    let list_04134 = document.getElementById("list_04134");


    function togg04134() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04134-01').classList.remove('visible')
        document.querySelector('#polar-chart_04134-01').classList.remove('visible')
        document.querySelector('#polar-chart_04134-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04134').classList.remove('visible')
        document.querySelector('#f-path-04134').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04134
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04134
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04134
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04134
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04134
    }
    com_04134.onclick = togg04134;
    list_04134.onclick = togg04134;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04135 = data[134];

    /*Récupere les données que je veut de la Commune */
    name_04135 = rows04135.Libellé_géographique;
    Pop_04135 = rows04135.Population_en_2017;
    Pop_017_04135 = rows04135.Pop_017_ans_2017;
    Pop_mediane_vote_04135 = rows04135.Popu_possible_voté;
    nbr_inscrit_04135 = rows04135.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04135').textContent = name_04135;
   
    let com_04135 = document.getElementById("f-path-04135");
    let list_04135 = document.getElementById("list_04135");


    function togg04135() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04135-01').classList.remove('visible')
        document.querySelector('#polar-chart_04135-01').classList.remove('visible')
        document.querySelector('#polar-chart_04135-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04135').classList.remove('visible')
        document.querySelector('#f-path-04135').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04135
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04135
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04135
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04135
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04135
    }
    com_04135.onclick = togg04135;
    list_04135.onclick = togg04135;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04136 = data[135];

    /*Récupere les données que je veut de la Commune */
    name_04136 = rows04136.Libellé_géographique;
    Pop_04136 = rows04136.Population_en_2017;
    Pop_017_04136 = rows04136.Pop_017_ans_2017;
    Pop_mediane_vote_04136 = rows04136.Popu_possible_voté;
    nbr_inscrit_04136 = rows04136.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04136').textContent = name_04136;
   
    let com_04136 = document.getElementById("f-path-04136");
    let list_04136 = document.getElementById("list_04136");


    function togg04136() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04136-01').classList.remove('visible')
        document.querySelector('#polar-chart_04136-01').classList.remove('visible')
        document.querySelector('#polar-chart_04136-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04136').classList.remove('visible')
        document.querySelector('#f-path-04136').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04136
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04136
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04136
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04136
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04136
    }
    com_04136.onclick = togg04136;
    list_04136.onclick = togg04136;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04137 = data[136];

    /*Récupere les données que je veut de la Commune */
    name_04137 = rows04137.Libellé_géographique;
    Pop_04137 = rows04137.Population_en_2017;
    Pop_017_04137 = rows04137.Pop_017_ans_2017;
    Pop_mediane_vote_04137 = rows04137.Popu_possible_voté;
    nbr_inscrit_04137 = rows04137.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04137').textContent = name_04137;
   
    let com_04137 = document.getElementById("f-path-04137");
    let list_04137 = document.getElementById("list_04137");


    function togg04137() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04137-01').classList.remove('visible')
        document.querySelector('#polar-chart_04137-01').classList.remove('visible')
        document.querySelector('#polar-chart_04167-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04137').classList.remove('visible')
        document.querySelector('#f-path-04137').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04137
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04137
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04137
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04137
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04137
    }
    com_04137.onclick = togg04137;
    list_04137.onclick = togg04137;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04138 = data[137];

    /*Récupere les données que je veut de la Commune */
    name_04138 = rows04138.Libellé_géographique;
    Pop_04138 = rows04138.Population_en_2017;
    Pop_017_04138 = rows04138.Pop_017_ans_2017;
    Pop_mediane_vote_04138 = rows04138.Popu_possible_voté;
    nbr_inscrit_04138 = rows04138.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04138').textContent = name_04138;
   
    let com_04138 = document.getElementById("f-path-04138");
    let list_04138 = document.getElementById("list_04138");


    function togg04138() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04138-01').classList.remove('visible')
        document.querySelector('#polar-chart_04138-01').classList.remove('visible')
        document.querySelector('#polar-chart_04168-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04138').classList.remove('visible')
        document.querySelector('#f-path-04138').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04138
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04138
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04138
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04138
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04138
    }
    com_04138.onclick = togg04138;
    list_04138.onclick = togg04138;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04139 = data[138];

    /*Récupere les données que je veut de la Commune */
    name_04139 = rows04139.Libellé_géographique;
    Pop_04139 = rows04139.Population_en_2017;
    Pop_017_04139 = rows04139.Pop_017_ans_2017;
    Pop_mediane_vote_04139 = rows04139.Popu_possible_voté;
    nbr_inscrit_04139 = rows04139.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04139').textContent = name_04139;
   
    let com_04139 = document.getElementById("f-path-04139");
    let list_04139 = document.getElementById("list_04139");


    function togg04139() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04139-01').classList.remove('visible')
        document.querySelector('#polar-chart_04139-01').classList.remove('visible')
        document.querySelector('#polar-chart_04169-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04139').classList.remove('visible')
        document.querySelector('#f-path-04139').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04139
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04139
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04139
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04139
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04139
    }
    com_04139.onclick = togg04139;
    list_04139.onclick = togg04139;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04140 = data[139];

    /*Récupere les données que je veut de la Commune */
    name_04140 = rows04140.Libellé_géographique;
    Pop_04140 = rows04140.Population_en_2017;
    Pop_017_04140 = rows04140.Pop_017_ans_2017;
    Pop_mediane_vote_04140 = rows04140.Popu_possible_voté;
    nbr_inscrit_04140 = rows04140.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04140').textContent = name_04140;
   
    let com_04140 = document.getElementById("f-path-04140");
    let list_04140 = document.getElementById("list_04140");


    function togg04140() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04140-01').classList.remove('visible')
        document.querySelector('#polar-chart_04140-01').classList.remove('visible')
        document.querySelector('#polar-chart_04140-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04140').classList.remove('visible')
        document.querySelector('#f-path-04140').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04140
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04140
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04140
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04140
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04140
    }
    com_04140.onclick = togg04140;
    list_04140.onclick = togg04140;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04141 = data[140];

    /*Récupere les données que je veut de la Commune */
    name_04141 = rows04141.Libellé_géographique;
    Pop_04141 = rows04141.Population_en_2017;
    Pop_017_04141 = rows04141.Pop_017_ans_2017;
    Pop_mediane_vote_04141 = rows04141.Popu_possible_voté;
    nbr_inscrit_04141 = rows04141.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04141').textContent = name_04141;
   
    let com_04141 = document.getElementById("f-path-04141");
    let list_04141 = document.getElementById("list_04141");


    function togg04141() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04141-01').classList.remove('visible')
        document.querySelector('#polar-chart_04141-01').classList.remove('visible')
        document.querySelector('#polar-chart_04141-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04141').classList.remove('visible')
        document.querySelector('#f-path-04141').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04141
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04141
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04141
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04141
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04141
    }
    com_04141.onclick = togg04141;
    list_04141.onclick = togg04141;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04142 = data[141];

    /*Récupere les données que je veut de la Commune */
    name_04142 = rows04142.Libellé_géographique;
    Pop_04142 = rows04142.Population_en_2017;
    Pop_017_04142 = rows04142.Pop_017_ans_2017;
    Pop_mediane_vote_04142 = rows04142.Popu_possible_voté;
    nbr_inscrit_04142 = rows04142.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04142').textContent = name_04142;
   
    let com_04142 = document.getElementById("f-path-04142");
    let list_04142 = document.getElementById("list_04142");


    function togg04142() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04142-01').classList.remove('visible')
        document.querySelector('#polar-chart_04142-01').classList.remove('visible')
        document.querySelector('#polar-chart_04142-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04142').classList.remove('visible')
        document.querySelector('#f-path-04142').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04142
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04142
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04142
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04142
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04142
    }
    com_04142.onclick = togg04142;
    list_04142.onclick = togg04142;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04143 = data[142];

    /*Récupere les données que je veut de la Commune */
    name_04143 = rows04143.Libellé_géographique;
    Pop_04143 = rows04143.Population_en_2017;
    Pop_017_04143 = rows04143.Pop_017_ans_2017;
    Pop_mediane_vote_04143 = rows04143.Popu_possible_voté;
    nbr_inscrit_04143 = rows04143.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04143').textContent = name_04143;
   
    let com_04143 = document.getElementById("f-path-04143");
    let list_04143 = document.getElementById("list_04143");


    function togg04143() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04143-01').classList.remove('visible')
        document.querySelector('#polar-chart_04143-01').classList.remove('visible')
        document.querySelector('#polar-chart_04143-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04143').classList.remove('visible')
        document.querySelector('#f-path-04143').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04143
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04143
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04143
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04143
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04143
    }
    com_04143.onclick = togg04143;
    list_04143.onclick = togg04143;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04144 = data[143];

    /*Récupere les données que je veut de la Commune */
    name_04144 = rows04144.Libellé_géographique;
    Pop_04144 = rows04144.Population_en_2017;
    Pop_017_04144 = rows04144.Pop_017_ans_2017;
    Pop_mediane_vote_04144 = rows04144.Popu_possible_voté;
    nbr_inscrit_04144 = rows04144.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04144').textContent = name_04144;
   
    let com_04144 = document.getElementById("f-path-04144");
    let list_04144 = document.getElementById("list_04144");


    function togg04144() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04144-01').classList.remove('visible')
        document.querySelector('#polar-chart_04144-01').classList.remove('visible')
        document.querySelector('#polar-chart_04144-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04144').classList.remove('visible')
        document.querySelector('#f-path-04144').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04144
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04144
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04144
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04144
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04144
    }
    com_04144.onclick = togg04144;
    list_04144.onclick = togg04144;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04145 = data[144];

    /*Récupere les données que je veut de la Commune */
    name_04145 = rows04145.Libellé_géographique;
    Pop_04145 = rows04145.Population_en_2017;
    Pop_017_04145 = rows04145.Pop_017_ans_2017;
    Pop_mediane_vote_04145 = rows04145.Popu_possible_voté;
    nbr_inscrit_04145 = rows04145.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04145').textContent = name_04145;
   
    let com_04145 = document.getElementById("f-path-04145");
    let list_04145 = document.getElementById("list_04145");


    function togg04145() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04145-01').classList.remove('visible')
        document.querySelector('#polar-chart_04145-01').classList.remove('visible')
        document.querySelector('#polar-chart_04145-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04145').classList.remove('visible')
        document.querySelector('#f-path-04145').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04145
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04145
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04145
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04145
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04145
    }
    com_04145.onclick = togg04145;
    list_04145.onclick = togg04145;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04146 = data[145];

    /*Récupere les données que je veut de la Commune */
    name_04146 = rows04146.Libellé_géographique;
    Pop_04146 = rows04146.Population_en_2017;
    Pop_017_04146 = rows04146.Pop_017_ans_2017;
    Pop_mediane_vote_04146 = rows04146.Popu_possible_voté;
    nbr_inscrit_04146 = rows04146.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04146').textContent = name_04146;
   
    let com_04146 = document.getElementById("f-path-04146");
    let list_04146 = document.getElementById("list_04146");


    function togg04146() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04146-01').classList.remove('visible')
        document.querySelector('#polar-chart_04146-01').classList.remove('visible')
        document.querySelector('#polar-chart_04146-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04146').classList.remove('visible')
        document.querySelector('#f-path-04146').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04146
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04146
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04146
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04146
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04146
    }
    com_04146.onclick = togg04146;
    list_04146.onclick = togg04146;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04147 = data[146];

    /*Récupere les données que je veut de la Commune */
    name_04147 = rows04147.Libellé_géographique;
    Pop_04147 = rows04147.Population_en_2017;
    Pop_017_04147 = rows04147.Pop_017_ans_2017;
    Pop_mediane_vote_04147 = rows04147.Popu_possible_voté;
    nbr_inscrit_04147 = rows04147.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04147').textContent = name_04147;
   
    let com_04147 = document.getElementById("f-path-04147");
    let list_04147 = document.getElementById("list_04147");


    function togg04147() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04147-01').classList.remove('visible')
        document.querySelector('#polar-chart_04147-01').classList.remove('visible')
        document.querySelector('#polar-chart_04147-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04147').classList.remove('visible')
        document.querySelector('#f-path-04147').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04147
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04147
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04147
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04147
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04147
    }
    com_04147.onclick = togg04147;
    list_04147.onclick = togg04147;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04148 = data[147];

    /*Récupere les données que je veut de la Commune */
    name_04148 = rows04148.Libellé_géographique;
    Pop_04148 = rows04148.Population_en_2017;
    Pop_017_04148 = rows04148.Pop_017_ans_2017;
    Pop_mediane_vote_04148 = rows04148.Popu_possible_voté;
    nbr_inscrit_04148 = rows04148.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04148').textContent = name_04148;
   
    let com_04148 = document.getElementById("f-path-04148");
    let list_04148 = document.getElementById("list_04148");


    function togg04148() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04148-01').classList.remove('visible')
        document.querySelector('#polar-chart_04148-01').classList.remove('visible')
        document.querySelector('#polar-chart_04148-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04148').classList.remove('visible')
        document.querySelector('#f-path-04148').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04148
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04148
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04148
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04148
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04148
    }
    com_04148.onclick = togg04148;
    list_04148.onclick = togg04148;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04149 = data[148];

    /*Récupere les données que je veut de la Commune */
    name_04149 = rows04149.Libellé_géographique;
    Pop_04149 = rows04149.Population_en_2017;
    Pop_017_04149 = rows04149.Pop_017_ans_2017;
    Pop_mediane_vote_04149 = rows04149.Popu_possible_voté;
    nbr_inscrit_04149 = rows04149.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04149').textContent = name_04149;
   
    let com_04149 = document.getElementById("f-path-04149");
    let list_04149 = document.getElementById("list_04149");


    function togg04149() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04149-01').classList.remove('visible')
        document.querySelector('#polar-chart_04149-01').classList.remove('visible')
        document.querySelector('#polar-chart_04149-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04149').classList.remove('visible')
        document.querySelector('#f-path-04149').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04149
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04149
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04149
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04149
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04149
    }
    com_04149.onclick = togg04149;
    list_04149.onclick = togg04149;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04150 = data[149];

    /*Récupere les données que je veut de la Commune */
    name_04150 = rows04150.Libellé_géographique;
    Pop_04150 = rows04150.Population_en_2017;
    Pop_017_04150 = rows04150.Pop_017_ans_2017;
    Pop_mediane_vote_04150 = rows04150.Popu_possible_voté;
    nbr_inscrit_04150 = rows04150.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04150').textContent = name_04150;
   
    let com_04150 = document.getElementById("f-path-04150");
    let list_04150 = document.getElementById("list_04150");


    function togg04150() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04150-01').classList.remove('visible')
        document.querySelector('#polar-chart_04150-01').classList.remove('visible')
        document.querySelector('#polar-chart_04150-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04150').classList.remove('visible')
        document.querySelector('#f-path-04150').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04150
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04150
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04150
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04150
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04150
    }
    com_04150.onclick = togg04150;
    list_04150.onclick = togg04150;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04151 = data[150];

    /*Récupere les données que je veut de la Commune */
    name_04151 = rows04151.Libellé_géographique;
    Pop_04151 = rows04151.Population_en_2017;
    Pop_017_04151 = rows04151.Pop_017_ans_2017;
    Pop_mediane_vote_04151 = rows04151.Popu_possible_voté;
    nbr_inscrit_04151 = rows04151.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04151').textContent = name_04151;
   
    let com_04151 = document.getElementById("f-path-04151");
    let list_04151 = document.getElementById("list_04151");


    function togg04151() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04151-01').classList.remove('visible')
        document.querySelector('#polar-chart_04151-01').classList.remove('visible')
        document.querySelector('#polar-chart_04151-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04151').classList.remove('visible')
        document.querySelector('#f-path-04151').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04151
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04151
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04151
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04151
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04151
    }
    com_04151.onclick = togg04151;
    list_04151.onclick = togg04151;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04152 = data[151];

    /*Récupere les données que je veut de la Commune */
    name_04152 = rows04152.Libellé_géographique;
    Pop_04152 = rows04152.Population_en_2017;
    Pop_017_04152 = rows04152.Pop_017_ans_2017;
    Pop_mediane_vote_04152 = rows04152.Popu_possible_voté;
    nbr_inscrit_04152 = rows04152.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04152').textContent = name_04152;
   
    let com_04152 = document.getElementById("f-path-04152");
    let list_04152 = document.getElementById("list_04152");


    function togg04152() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04152-01').classList.remove('visible')
        document.querySelector('#polar-chart_04152-01').classList.remove('visible')
        document.querySelector('#polar-chart_04152-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04152').classList.remove('visible')
        document.querySelector('#f-path-04152').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04152
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04152
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04152
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04152
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04152
    }
    com_04152.onclick = togg04152;
    list_04152.onclick = togg04152;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04153 = data[152];

    /*Récupere les données que je veut de la Commune */
    name_04153 = rows04153.Libellé_géographique;
    Pop_04153 = rows04153.Population_en_2017;
    Pop_017_04153 = rows04153.Pop_017_ans_2017;
    Pop_mediane_vote_04153 = rows04153.Popu_possible_voté;
    nbr_inscrit_04153 = rows04153.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04153').textContent = name_04153;
   
    let com_04153 = document.getElementById("f-path-04153");
    let list_04153 = document.getElementById("list_04153");


    function togg04153() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04153-01').classList.remove('visible')
        document.querySelector('#polar-chart_04153-01').classList.remove('visible')
        document.querySelector('#polar-chart_04153-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04153').classList.remove('visible')
        document.querySelector('#f-path-04153').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04153
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04153
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04153
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04153
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04153
    }
    com_04153.onclick = togg04153;
    list_04153.onclick = togg04153;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04154 = data[153];

    /*Récupere les données que je veut de la Commune */
    name_04154 = rows04154.Libellé_géographique;
    Pop_04154 = rows04154.Population_en_2017;
    Pop_017_04154 = rows04154.Pop_017_ans_2017;
    Pop_mediane_vote_04154 = rows04154.Popu_possible_voté;
    nbr_inscrit_04154 = rows04154.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04154').textContent = name_04154;
   
    let com_04154 = document.getElementById("f-path-04154");
    let list_04154 = document.getElementById("list_04154");


    function togg04154() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04154-01').classList.remove('visible')
        document.querySelector('#polar-chart_04154-01').classList.remove('visible')
        document.querySelector('#polar-chart_04154-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04154').classList.remove('visible')
        document.querySelector('#f-path-04154').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04154
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04154
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04154
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04154
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04154
    }
    com_04154.onclick = togg04154;
    list_04154.onclick = togg04154;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04155 = data[154];

    /*Récupere les données que je veut de la Commune */
    name_04155 = rows04155.Libellé_géographique;
    Pop_04155 = rows04155.Population_en_2017;
    Pop_017_04155 = rows04155.Pop_017_ans_2017;
    Pop_mediane_vote_04155 = rows04155.Popu_possible_voté;
    nbr_inscrit_04155 = rows04155.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04155').textContent = name_04155;
   
    let com_04155 = document.getElementById("f-path-04155");
    let list_04155 = document.getElementById("list_04155");


    function togg04155() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04155-01').classList.remove('visible')
        document.querySelector('#polar-chart_04155-01').classList.remove('visible')
        document.querySelector('#polar-chart_04155-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04155').classList.remove('visible')
        document.querySelector('#f-path-04155').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04155
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04155
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04155
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04155
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04155
    }
    com_04155.onclick = togg04155;
    list_04155.onclick = togg04155;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04156 = data[155];

    /*Récupere les données que je veut de la Commune */
    name_04156 = rows04156.Libellé_géographique;
    Pop_04156 = rows04156.Population_en_2017;
    Pop_017_04156 = rows04156.Pop_017_ans_2017;
    Pop_mediane_vote_04156 = rows04156.Popu_possible_voté;
    nbr_inscrit_04156 = rows04156.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04156').textContent = name_04156;
   
    let com_04156 = document.getElementById("f-path-04156");
    let list_04156 = document.getElementById("list_04156");


    function togg04156() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04156-01').classList.remove('visible')
        document.querySelector('#polar-chart_04156-01').classList.remove('visible')
        document.querySelector('#polar-chart_04156-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04156').classList.remove('visible')
        document.querySelector('#f-path-04156').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04156
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04156
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04156
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04156
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04156
    }
    com_04156.onclick = togg04156;
    list_04156.onclick = togg04156;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04157 = data[156];

    /*Récupere les données que je veut de la Commune */
    name_04157 = rows04157.Libellé_géographique;
    Pop_04157 = rows04157.Population_en_2017;
    Pop_017_04157 = rows04157.Pop_017_ans_2017;
    Pop_mediane_vote_04157 = rows04157.Popu_possible_voté;
    nbr_inscrit_04157 = rows04157.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04157').textContent = name_04157;
   
    let com_04157 = document.getElementById("f-path-04157");
    let list_04157 = document.getElementById("list_04157");


    function togg04157() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04157-01').classList.remove('visible')
        document.querySelector('#polar-chart_04157-01').classList.remove('visible')
        document.querySelector('#polar-chart_04157-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04157').classList.remove('visible')
        document.querySelector('#f-path-04157').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04157
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04157
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04157
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04157
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04157
    }
    com_04157.onclick = togg04157;
    list_04157.onclick = togg04157;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04158 = data[157];

    /*Récupere les données que je veut de la Commune */
    name_04158 = rows04158.Libellé_géographique;
    Pop_04158 = rows04158.Population_en_2017;
    Pop_017_04158 = rows04158.Pop_017_ans_2017;
    Pop_mediane_vote_04158 = rows04158.Popu_possible_voté;
    nbr_inscrit_04158 = rows04158.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04158').textContent = name_04158;
   
    let com_04158 = document.getElementById("f-path-04158");
    let list_04158 = document.getElementById("list_04158");


    function togg04158() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04158-01').classList.remove('visible')
        document.querySelector('#polar-chart_04158-01').classList.remove('visible')
        document.querySelector('#polar-chart_04158-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04158').classList.remove('visible')
        document.querySelector('#f-path-04158').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04158
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04158
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04158
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04158
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04158
    }
    com_04158.onclick = togg04158;
    list_04158.onclick = togg04158;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04159 = data[158];

    /*Récupere les données que je veut de la Commune */
    name_04159 = rows04159.Libellé_géographique;
    Pop_04159 = rows04159.Population_en_2017;
    Pop_017_04159 = rows04159.Pop_017_ans_2017;
    Pop_mediane_vote_04159 = rows04159.Popu_possible_voté;
    nbr_inscrit_04159 = rows04159.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04159').textContent = name_04159;
   
    let com_04159 = document.getElementById("f-path-04159");
    let list_04159 = document.getElementById("list_04159");


    function togg04159() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04159-01').classList.remove('visible')
        document.querySelector('#polar-chart_04159-01').classList.remove('visible')
        document.querySelector('#polar-chart_04159-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04159').classList.remove('visible')
        document.querySelector('#f-path-04159').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04159
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04159
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04159
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04159
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04159
    }
    com_04159.onclick = togg04159;
    list_04159.onclick = togg04159;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04160 = data[159];

    /*Récupere les données que je veut de la Commune */
    name_04160 = rows04160.Libellé_géographique;
    Pop_04160 = rows04160.Population_en_2017;
    Pop_017_04160 = rows04160.Pop_017_ans_2017;
    Pop_mediane_vote_04160 = rows04160.Popu_possible_voté;
    nbr_inscrit_04160 = rows04160.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04160').textContent = name_04160;
   
    let com_04160 = document.getElementById("f-path-04160");
    let list_04160 = document.getElementById("list_04160");


    function togg04160() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04160-01').classList.remove('visible')
        document.querySelector('#polar-chart_04160-01').classList.remove('visible')
        document.querySelector('#polar-chart_04160-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04160').classList.remove('visible')
        document.querySelector('#f-path-04160').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04160
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04160
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04160
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04160
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04160
    }
    com_04160.onclick = togg04160;
    list_04160.onclick = togg04160;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04161 = data[160];

    /*Récupere les données que je veut de la Commune */
    name_04161 = rows04161.Libellé_géographique;
    Pop_04161 = rows04161.Population_en_2017;
    Pop_017_04161 = rows04161.Pop_017_ans_2017;
    Pop_mediane_vote_04161 = rows04161.Popu_possible_voté;
    nbr_inscrit_04161 = rows04161.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04161').textContent = name_04161;
   
    let com_04161 = document.getElementById("f-path-04161");
    let list_04161 = document.getElementById("list_04161");


    function togg04161() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04161-01').classList.remove('visible')
        document.querySelector('#polar-chart_04161-01').classList.remove('visible')
        document.querySelector('#polar-chart_04161-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04161').classList.remove('visible')
        document.querySelector('#f-path-04161').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04161
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04161
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04161
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04161
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04161
    }
    com_04161.onclick = togg04161;
    list_04161.onclick = togg04161;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04162 = data[161];

    /*Récupere les données que je veut de la Commune */
    name_04162 = rows04162.Libellé_géographique;
    Pop_04162 = rows04162.Population_en_2017;
    Pop_017_04162 = rows04162.Pop_017_ans_2017;
    Pop_mediane_vote_04162 = rows04162.Popu_possible_voté;
    nbr_inscrit_04162 = rows04162.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04162').textContent = name_04162;
   
    let com_04162 = document.getElementById("f-path-04162");
    let list_04162 = document.getElementById("list_04162");


    function togg04162() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04162-01').classList.remove('visible')
        document.querySelector('#polar-chart_04162-01').classList.remove('visible')
        document.querySelector('#polar-chart_04162-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04162').classList.remove('visible')
        document.querySelector('#f-path-04162').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04162
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04162
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04162
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04162
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04162
    }
    com_04162.onclick = togg04162;
    list_04162.onclick = togg04162;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04163 = data[162];

    /*Récupere les données que je veut de la Commune */
    name_04163 = rows04163.Libellé_géographique;
    Pop_04163 = rows04163.Population_en_2017;
    Pop_017_04163 = rows04163.Pop_017_ans_2017;
    Pop_mediane_vote_04163 = rows04163.Popu_possible_voté;
    nbr_inscrit_04163 = rows04163.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04163').textContent = name_04163;
   
    let com_04163 = document.getElementById("f-path-04163");
    let list_04163 = document.getElementById("list_04163");


    function togg04163() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04163-01').classList.remove('visible')
        document.querySelector('#polar-chart_04163-01').classList.remove('visible')
        document.querySelector('#polar-chart_04163-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04163').classList.remove('visible')
        document.querySelector('#f-path-04163').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04163
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04163
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04163
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04163
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04163
    }
    com_04163.onclick = togg04163;
    list_04163.onclick = togg04163;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04164 = data[163];

    /*Récupere les données que je veut de la Commune */
    name_04164 = rows04164.Libellé_géographique;
    Pop_04164 = rows04164.Population_en_2017;
    Pop_017_04164 = rows04164.Pop_017_ans_2017;
    Pop_mediane_vote_04164 = rows04164.Popu_possible_voté;
    nbr_inscrit_04164 = rows04164.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04164').textContent = name_04164;
   
    let com_04164 = document.getElementById("f-path-04164");
    let list_04164 = document.getElementById("list_04164");


    function togg04164() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04164-01').classList.remove('visible')
        document.querySelector('#polar-chart_04164-01').classList.remove('visible')
        document.querySelector('#polar-chart_04164-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04164').classList.remove('visible')
        document.querySelector('#f-path-04164').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04164
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04164
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04164
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04164
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04164
    }
    com_04164.onclick = togg04164;
    list_04164.onclick = togg04164;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04165 = data[164];

    /*Récupere les données que je veut de la Commune */
    name_04165 = rows04165.Libellé_géographique;
    Pop_04165 = rows04165.Population_en_2017;
    Pop_017_04165 = rows04165.Pop_017_ans_2017;
    Pop_mediane_vote_04165 = rows04165.Popu_possible_voté;
    nbr_inscrit_04165 = rows04165.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04165').textContent = name_04165;
   
    let com_04165 = document.getElementById("f-path-04165");
    let list_04165 = document.getElementById("list_04165");


    function togg04165() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04165-01').classList.remove('visible')
        document.querySelector('#polar-chart_04165-01').classList.remove('visible')
        document.querySelector('#polar-chart_04165-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04165').classList.remove('visible')
        document.querySelector('#f-path-04165').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04165
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04165
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04165
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04165
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04165
    }
    com_04165.onclick = togg04165;
    list_04165.onclick = togg04165;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04166 = data[165];

    /*Récupere les données que je veut de la Commune */
    name_04166 = rows04166.Libellé_géographique;
    Pop_04166 = rows04166.Population_en_2017;
    Pop_017_04166 = rows04166.Pop_017_ans_2017;
    Pop_mediane_vote_04166 = rows04166.Popu_possible_voté;
    nbr_inscrit_04166 = rows04166.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04166').textContent = name_04166;
   
    let com_04166 = document.getElementById("f-path-04166");
    let list_04166 = document.getElementById("list_04166");


    function togg04166() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04166-01').classList.remove('visible')
        document.querySelector('#polar-chart_04166-01').classList.remove('visible')
        document.querySelector('#polar-chart_04166-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04166').classList.remove('visible')
        document.querySelector('#f-path-04166').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04166
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04166
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04166
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04166
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04166
    }
    com_04166.onclick = togg04166;
    list_04166.onclick = togg04166;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04167 = data[166];

    /*Récupere les données que je veut de la Commune */
    name_04167 = rows04167.Libellé_géographique;
    Pop_04167 = rows04167.Population_en_2017;
    Pop_017_04167 = rows04167.Pop_017_ans_2017;
    Pop_mediane_vote_04167 = rows04167.Popu_possible_voté;
    nbr_inscrit_04167 = rows04167.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04167').textContent = name_04167;
   
    let com_04167 = document.getElementById("f-path-04167");
    let list_04167 = document.getElementById("list_04167");


    function togg04167() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04167-01').classList.remove('visible')
        document.querySelector('#polar-chart_04167-01').classList.remove('visible')
        document.querySelector('#polar-chart_04167-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04167').classList.remove('visible')
        document.querySelector('#f-path-04167').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04167
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04167
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04167
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04167
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04167
    }
    com_04167.onclick = togg04167;
    list_04167.onclick = togg04167;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04168 = data[167];

    /*Récupere les données que je veut de la Commune */
    name_04168 = rows04168.Libellé_géographique;
    Pop_04168 = rows04168.Population_en_2017;
    Pop_017_04168 = rows04168.Pop_017_ans_2017;
    Pop_mediane_vote_04168 = rows04168.Popu_possible_voté;
    nbr_inscrit_04168 = rows04168.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04168').textContent = name_04168;
   
    let com_04168 = document.getElementById("f-path-04168");
    let list_04168 = document.getElementById("list_04168");


    function togg04168() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04168-01').classList.remove('visible')
        document.querySelector('#polar-chart_04168-01').classList.remove('visible')
        document.querySelector('#polar-chart_04168-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04168').classList.remove('visible')
        document.querySelector('#f-path-04168').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04168
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04168
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04168
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04168
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04168
    }
    com_04168.onclick = togg04168;
    list_04168.onclick = togg04168;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04169 = data[168];

    /*Récupere les données que je veut de la Commune */
    name_04169 = rows04169.Libellé_géographique;
    Pop_04169 = rows04169.Population_en_2017;
    Pop_017_04169 = rows04169.Pop_017_ans_2017;
    Pop_mediane_vote_04169 = rows04169.Popu_possible_voté;
    nbr_inscrit_04169 = rows04169.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04169').textContent = name_04169;
   
    let com_04169 = document.getElementById("f-path-04169");
    let list_04169 = document.getElementById("list_04169");


    function togg04169() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04169-01').classList.remove('visible')
        document.querySelector('#polar-chart_04169-01').classList.remove('visible')
        document.querySelector('#polar-chart_04169-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04169').classList.remove('visible')
        document.querySelector('#f-path-04169').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04169
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04169
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04169
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04169
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04169
    }
    com_04169.onclick = togg04169;
    list_04169.onclick = togg04169;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04170 = data[169];

    /*Récupere les données que je veut de la Commune */
    name_04170 = rows04170.Libellé_géographique;
    Pop_04170 = rows04170.Population_en_2017;
    Pop_017_04170 = rows04170.Pop_017_ans_2017;
    Pop_mediane_vote_04170 = rows04170.Popu_possible_voté;
    nbr_inscrit_04170 = rows04170.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04170').textContent = name_04170;
   
    let com_04170 = document.getElementById("f-path-04170");
    let list_04170 = document.getElementById("list_04170");


    function togg04170() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04170-01').classList.remove('visible')
        document.querySelector('#polar-chart_04170-01').classList.remove('visible')
        document.querySelector('#polar-chart_04170-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04170').classList.remove('visible')
        document.querySelector('#f-path-04170').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04170
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04170
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04170
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04170
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04170
    }
    com_04170.onclick = togg04170;
    list_04170.onclick = togg04170;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04171 = data[170];

    /*Récupere les données que je veut de la Commune */
    name_04171 = rows04171.Libellé_géographique;
    Pop_04171 = rows04171.Population_en_2017;
    Pop_017_04171 = rows04171.Pop_017_ans_2017;
    Pop_mediane_vote_04171 = rows04171.Popu_possible_voté;
    nbr_inscrit_04171 = rows04171.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04171').textContent = name_04171;
   
    let com_04171 = document.getElementById("f-path-04171");
    let list_04171 = document.getElementById("list_04171");


    function togg04171() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04171-01').classList.remove('visible')
        document.querySelector('#polar-chart_04171-01').classList.remove('visible')
        document.querySelector('#polar-chart_04171-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04171').classList.remove('visible')
        document.querySelector('#f-path-04171').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04171
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04171
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04171
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04171
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04171
    }
    com_04171.onclick = togg04171;
    list_04171.onclick = togg04171;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04172 = data[171];

    /*Récupere les données que je veut de la Commune */
    name_04172 = rows04172.Libellé_géographique;
    Pop_04172 = rows04172.Population_en_2017;
    Pop_017_04172 = rows04172.Pop_017_ans_2017;
    Pop_mediane_vote_04172 = rows04172.Popu_possible_voté;
    nbr_inscrit_04172 = rows04172.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04172').textContent = name_04172;
   
    let com_04172 = document.getElementById("f-path-04172");
    let list_04172 = document.getElementById("list_04172");


    function togg04172() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04172-01').classList.remove('visible')
        document.querySelector('#polar-chart_04172-01').classList.remove('visible')
        document.querySelector('#polar-chart_04172-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04172').classList.remove('visible')
        document.querySelector('#f-path-04172').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04172
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04172
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04172
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04172
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04172
    }
    com_04172.onclick = togg04172;
    list_04172.onclick = togg04172;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04173 = data[172];

    /*Récupere les données que je veut de la Commune */
    name_04173 = rows04173.Libellé_géographique;
    Pop_04173 = rows04173.Population_en_2017;
    Pop_017_04173 = rows04173.Pop_017_ans_2017;
    Pop_mediane_vote_04173 = rows04173.Popu_possible_voté;
    nbr_inscrit_04173 = rows04173.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04173').textContent = name_04173;
   
    let com_04173 = document.getElementById("f-path-04173");
    let list_04173 = document.getElementById("list_04173");


    function togg04173() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04173-01').classList.remove('visible')
        document.querySelector('#polar-chart_04173-01').classList.remove('visible')
        document.querySelector('#polar-chart_04173-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04173').classList.remove('visible')
        document.querySelector('#f-path-04173').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04173
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04173
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04173
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04173
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04173
    }
    com_04173.onclick = togg04173;
    list_04173.onclick = togg04173;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04174 = data[173];

    /*Récupere les données que je veut de la Commune */
    name_04174 = rows04174.Libellé_géographique;
    Pop_04174 = rows04174.Population_en_2017;
    Pop_017_04174 = rows04174.Pop_017_ans_2017;
    Pop_mediane_vote_04174 = rows04174.Popu_possible_voté;
    nbr_inscrit_04174 = rows04174.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04174').textContent = name_04174;
   
    let com_04174 = document.getElementById("f-path-04174");
    let list_04174 = document.getElementById("list_04174");


    function togg04174() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04174-01').classList.remove('visible')
        document.querySelector('#polar-chart_04174-01').classList.remove('visible')
        document.querySelector('#polar-chart_04174-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04174').classList.remove('visible')
        document.querySelector('#f-path-04174').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04174
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04174
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04174
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04174
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04174
    }
    com_04174.onclick = togg04174;
    list_04174.onclick = togg04174;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04175 = data[174];

    /*Récupere les données que je veut de la Commune */
    name_04175 = rows04175.Libellé_géographique;
    Pop_04175 = rows04175.Population_en_2017;
    Pop_017_04175 = rows04175.Pop_017_ans_2017;
    Pop_mediane_vote_04175 = rows04175.Popu_possible_voté;
    nbr_inscrit_04175 = rows04175.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04175').textContent = name_04175;
   
    let com_04175 = document.getElementById("f-path-04175");
    let list_04175 = document.getElementById("list_04175");


    function togg04175() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04175-01').classList.remove('visible')
        document.querySelector('#polar-chart_04175-01').classList.remove('visible')
        document.querySelector('#polar-chart_04175-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04175').classList.remove('visible')
        document.querySelector('#f-path-04175').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04175
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04175
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04175
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04175
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04175
    }
    com_04175.onclick = togg04175;
    list_04175.onclick = togg04175;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04176 = data[175];

    /*Récupere les données que je veut de la Commune */
    name_04176 = rows04176.Libellé_géographique;
    Pop_04176 = rows04176.Population_en_2017;
    Pop_017_04176 = rows04176.Pop_017_ans_2017;
    Pop_mediane_vote_04176 = rows04176.Popu_possible_voté;
    nbr_inscrit_04176 = rows04176.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04176').textContent = name_04176;
   
    let com_04176 = document.getElementById("f-path-04176");
    let list_04176 = document.getElementById("list_04176");


    function togg04176() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04176-01').classList.remove('visible')
        document.querySelector('#polar-chart_04176-01').classList.remove('visible')
        document.querySelector('#polar-chart_04176-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04176').classList.remove('visible')
        document.querySelector('#f-path-04176').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04176
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04176
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04176
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04176
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04176
    }
    com_04176.onclick = togg04176;
    list_04176.onclick = togg04176;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04177 = data[176];

    /*Récupere les données que je veut de la Commune */
    name_04177 = rows04177.Libellé_géographique;
    Pop_04177 = rows04177.Population_en_2017;
    Pop_017_04177 = rows04177.Pop_017_ans_2017;
    Pop_mediane_vote_04177 = rows04177.Popu_possible_voté;
    nbr_inscrit_04177 = rows04177.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04177').textContent = name_04177;
   
    let com_04177 = document.getElementById("f-path-04177");
    let list_04177 = document.getElementById("list_04177");


    function togg04177() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04177-01').classList.remove('visible')
        document.querySelector('#polar-chart_04177-01').classList.remove('visible')
        document.querySelector('#polar-chart_04177-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04177').classList.remove('visible')
        document.querySelector('#f-path-04177').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04177
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04177
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04177
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04177
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04177
    }
    com_04177.onclick = togg04177;
    list_04177.onclick = togg04177;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04178 = data[177];

    /*Récupere les données que je veut de la Commune */
    name_04178 = rows04178.Libellé_géographique;
    Pop_04178 = rows04178.Population_en_2017;
    Pop_017_04178 = rows04178.Pop_017_ans_2017;
    Pop_mediane_vote_04178 = rows04178.Popu_possible_voté;
    nbr_inscrit_04178 = rows04178.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04178').textContent = name_04178;
   
    let com_04178 = document.getElementById("f-path-04178");
    let list_04178 = document.getElementById("list_04178");


    function togg04178() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04178-01').classList.remove('visible')
        document.querySelector('#polar-chart_04178-01').classList.remove('visible')
        document.querySelector('#polar-chart_04178-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04178').classList.remove('visible')
        document.querySelector('#f-path-04178').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04178
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04178
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04178
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04178
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04178
    }
    com_04178.onclick = togg04178;
    list_04178.onclick = togg04178;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04179 = data[178];

    /*Récupere les données que je veut de la Commune */
    name_04179 = rows04179.Libellé_géographique;
    Pop_04179 = rows04179.Population_en_2017;
    Pop_017_04179 = rows04179.Pop_017_ans_2017;
    Pop_mediane_vote_04179 = rows04179.Popu_possible_voté;
    nbr_inscrit_04179 = rows04179.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04179').textContent = name_04179;
   
    let com_04179 = document.getElementById("f-path-04179");
    let list_04179 = document.getElementById("list_04179");


    function togg04179() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04179-01').classList.remove('visible')
        document.querySelector('#polar-chart_04179-01').classList.remove('visible')
        document.querySelector('#polar-chart_04179-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04179').classList.remove('visible')
        document.querySelector('#f-path-04179').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04179
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04179
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04179
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04179
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04179
    }
    com_04179.onclick = togg04179;
    list_04179.onclick = togg04179;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04180 = data[179];

    /*Récupere les données que je veut de la Commune */
    name_04180 = rows04180.Libellé_géographique;
    Pop_04180 = rows04180.Population_en_2017;
    Pop_017_04180 = rows04180.Pop_017_ans_2017;
    Pop_mediane_vote_04180 = rows04180.Popu_possible_voté;
    nbr_inscrit_04180 = rows04180.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04180').textContent = name_04180;
   
    let com_04180 = document.getElementById("f-path-04180");
    let list_04180 = document.getElementById("list_04180");


    function togg04180() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04180-01').classList.remove('visible')
        document.querySelector('#polar-chart_04180-01').classList.remove('visible')
        document.querySelector('#polar-chart_04180-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04180').classList.remove('visible')
        document.querySelector('#f-path-04180').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04180
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04180
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04180
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04180
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04180
    }
    com_04180.onclick = togg04180;
    list_04180.onclick = togg04180;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04181 = data[180];

    /*Récupere les données que je veut de la Commune */
    name_04181 = rows04181.Libellé_géographique;
    Pop_04181 = rows04181.Population_en_2017;
    Pop_017_04181 = rows04181.Pop_017_ans_2017;
    Pop_mediane_vote_04181 = rows04181.Popu_possible_voté;
    nbr_inscrit_04181 = rows04181.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04181').textContent = name_04181;
   
    let com_04181 = document.getElementById("f-path-04181");
    let list_04181 = document.getElementById("list_04181");


    function togg04181() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04181-01').classList.remove('visible')
        document.querySelector('#polar-chart_04181-01').classList.remove('visible')
        document.querySelector('#polar-chart_04181-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04181').classList.remove('visible')
        document.querySelector('#f-path-04181').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04181
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04181
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04181
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04181
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04181
    }
    com_04181.onclick = togg04181;
    list_04181.onclick = togg04181;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04182 = data[181];

    /*Récupere les données que je veut de la Commune */
    name_04182 = rows04182.Libellé_géographique;
    Pop_04182 = rows04182.Population_en_2017;
    Pop_017_04182 = rows04182.Pop_017_ans_2017;
    Pop_mediane_vote_04182 = rows04182.Popu_possible_voté;
    nbr_inscrit_04182 = rows04182.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04182').textContent = name_04182;
   
    let com_04182 = document.getElementById("f-path-04182");
    let list_04182 = document.getElementById("list_04182");


    function togg04182() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04182-01').classList.remove('visible')
        document.querySelector('#polar-chart_04182-01').classList.remove('visible')
        document.querySelector('#polar-chart_04182-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04182').classList.remove('visible')
        document.querySelector('#f-path-04182').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04182
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04182
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04182
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04182
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04182
    }
    com_04182.onclick = togg04182;
    list_04182.onclick = togg04182;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04183 = data[182];

    /*Récupere les données que je veut de la Commune */
    name_04183 = rows04183.Libellé_géographique;
    Pop_04183 = rows04183.Population_en_2017;
    Pop_017_04183 = rows04183.Pop_017_ans_2017;
    Pop_mediane_vote_04183 = rows04183.Popu_possible_voté;
    nbr_inscrit_04183 = rows04183.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04183').textContent = name_04183;
   
    let com_04183 = document.getElementById("f-path-04183");
    let list_04183 = document.getElementById("list_04183");


    function togg04183() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04183-01').classList.remove('visible')
        document.querySelector('#polar-chart_04183-01').classList.remove('visible')
        document.querySelector('#polar-chart_04183-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04183').classList.remove('visible')
        document.querySelector('#f-path-04183').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04183
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04183
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04183
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04183
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04183
    }
    com_04183.onclick = togg04183;
    list_04183.onclick = togg04183;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04184 = data[183];

    /*Récupere les données que je veut de la Commune */
    name_04184 = rows04184.Libellé_géographique;
    Pop_04184 = rows04184.Population_en_2017;
    Pop_017_04184 = rows04184.Pop_017_ans_2017;
    Pop_mediane_vote_04184 = rows04184.Popu_possible_voté;
    nbr_inscrit_04184 = rows04184.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04184').textContent = name_04184;
   
    let com_04184 = document.getElementById("f-path-04184");
    let list_04184 = document.getElementById("list_04184");


    function togg04184() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04184-01').classList.remove('visible')
        document.querySelector('#polar-chart_04184-01').classList.remove('visible')
        document.querySelector('#polar-chart_04184-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04184').classList.remove('visible')
        document.querySelector('#f-path-04184').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04184
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04184
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04184
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04184
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04184
    }
    com_04184.onclick = togg04184;
    list_04184.onclick = togg04184;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04185 = data[184];

    /*Récupere les données que je veut de la Commune */
    name_04185 = rows04185.Libellé_géographique;
    Pop_04185 = rows04185.Population_en_2017;
    Pop_017_04185 = rows04185.Pop_017_ans_2017;
    Pop_mediane_vote_04185 = rows04185.Popu_possible_voté;
    nbr_inscrit_04185 = rows04185.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04185').textContent = name_04185;
   
    let com_04185 = document.getElementById("f-path-04185");
    let list_04185 = document.getElementById("list_04185");


    function togg04185() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04185-01').classList.remove('visible')
        document.querySelector('#polar-chart_04185-01').classList.remove('visible')
        document.querySelector('#polar-chart_04185-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04185').classList.remove('visible')
        document.querySelector('#f-path-04185').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04185
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04185
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04185
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04185
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04185
    }
    com_04185.onclick = togg04185;
    list_04185.onclick = togg04185;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04186 = data[185];

    /*Récupere les données que je veut de la Commune */
    name_04186 = rows04186.Libellé_géographique;
    Pop_04186 = rows04186.Population_en_2017;
    Pop_017_04186 = rows04186.Pop_017_ans_2017;
    Pop_mediane_vote_04186 = rows04186.Popu_possible_voté;
    nbr_inscrit_04186 = rows04186.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04186').textContent = name_04186;
   
    let com_04186 = document.getElementById("f-path-04186");
    let list_04186 = document.getElementById("list_04186");


    function togg04186() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04186-01').classList.remove('visible')
        document.querySelector('#polar-chart_04186-01').classList.remove('visible')
        document.querySelector('#polar-chart_04186-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04186').classList.remove('visible')
        document.querySelector('#f-path-04186').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04186
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04186
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04186
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04186
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04186
    }
    com_04186.onclick = togg04186;
    list_04186.onclick = togg04186;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04187 = data[186];

    /*Récupere les données que je veut de la Commune */
    name_04187 = rows04187.Libellé_géographique;
    Pop_04187 = rows04187.Population_en_2017;
    Pop_017_04187 = rows04187.Pop_017_ans_2017;
    Pop_mediane_vote_04187 = rows04187.Popu_possible_voté;
    nbr_inscrit_04187 = rows04187.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04187').textContent = name_04187;
   
    let com_04187 = document.getElementById("f-path-04187");
    let list_04187 = document.getElementById("list_04187");


    function togg04187() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04187-01').classList.remove('visible')
        document.querySelector('#polar-chart_04187-01').classList.remove('visible')
        document.querySelector('#polar-chart_04187-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04187').classList.remove('visible')
        document.querySelector('#f-path-04187').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04187
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04187
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04187
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04187
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04187
    }
    com_04187.onclick = togg04187;
    list_04187.onclick = togg04187;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04188 = data[187];

    /*Récupere les données que je veut de la Commune */
    name_04188 = rows04188.Libellé_géographique;
    Pop_04188 = rows04188.Population_en_2017;
    Pop_017_04188 = rows04188.Pop_017_ans_2017;
    Pop_mediane_vote_04188 = rows04188.Popu_possible_voté;
    nbr_inscrit_04188 = rows04188.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04188').textContent = name_04188;
   
    let com_04188 = document.getElementById("f-path-04188");
    let list_04188 = document.getElementById("list_04188");


    function togg04188() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04188-01').classList.remove('visible')
        document.querySelector('#polar-chart_04188-01').classList.remove('visible')
        document.querySelector('#polar-chart_04188-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04188').classList.remove('visible')
        document.querySelector('#f-path-04188').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04188
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04188
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04188
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04188
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04188
    }
    com_04188.onclick = togg04188;
    list_04188.onclick = togg04188;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04189 = data[188];

    /*Récupere les données que je veut de la Commune */
    name_04189 = rows04189.Libellé_géographique;
    Pop_04189 = rows04189.Population_en_2017;
    Pop_017_04189 = rows04189.Pop_017_ans_2017;
    Pop_mediane_vote_04189 = rows04189.Popu_possible_voté;
    nbr_inscrit_04189 = rows04189.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04189').textContent = name_04189;
   
    let com_04189 = document.getElementById("f-path-04189");
    let list_04189 = document.getElementById("list_04189");


    function togg04189() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04189-01').classList.remove('visible')
        document.querySelector('#polar-chart_04189-01').classList.remove('visible')
        document.querySelector('#polar-chart_04189-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04189').classList.remove('visible')
        document.querySelector('#f-path-04189').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04189
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04189
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04189
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04189
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04189
    }
    com_04189.onclick = togg04189;
    list_04189.onclick = togg04189;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04190 = data[189];

    /*Récupere les données que je veut de la Commune */
    name_04190 = rows04190.Libellé_géographique;
    Pop_04190 = rows04190.Population_en_2017;
    Pop_017_04190 = rows04190.Pop_017_ans_2017;
    Pop_mediane_vote_04190 = rows04190.Popu_possible_voté;
    nbr_inscrit_04190 = rows04190.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04190').textContent = name_04190;
   
    let com_04190 = document.getElementById("f-path-04190");
    let list_04190 = document.getElementById("list_04190");


    function togg04190() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04190-01').classList.remove('visible')
        document.querySelector('#polar-chart_04190-01').classList.remove('visible')
        document.querySelector('#polar-chart_04190-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04190').classList.remove('visible')
        document.querySelector('#f-path-04190').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04190
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04190
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04190
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04190
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04190
    }
    com_04190.onclick = togg04190;
    list_04190.onclick = togg04190;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04191 = data[190];

    /*Récupere les données que je veut de la Commune */
    name_04191 = rows04191.Libellé_géographique;
    Pop_04191 = rows04191.Population_en_2017;
    Pop_017_04191 = rows04191.Pop_017_ans_2017;
    Pop_mediane_vote_04191 = rows04191.Popu_possible_voté;
    nbr_inscrit_04191 = rows04191.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04191').textContent = name_04191;
   
    let com_04191 = document.getElementById("f-path-04191");
    let list_04191 = document.getElementById("list_04191");


    function togg04191() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04191-01').classList.remove('visible')
        document.querySelector('#polar-chart_04191-01').classList.remove('visible')
        document.querySelector('#polar-chart_04191-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04191').classList.remove('visible')
        document.querySelector('#f-path-04191').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04191
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04191
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04191
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04191
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04191
    }
    com_04191.onclick = togg04191;
    list_04191.onclick = togg04191;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04192 = data[191];

    /*Récupere les données que je veut de la Commune */
    name_04192 = rows04192.Libellé_géographique;
    Pop_04192 = rows04192.Population_en_2017;
    Pop_017_04192 = rows04192.Pop_017_ans_2017;
    Pop_mediane_vote_04192 = rows04192.Popu_possible_voté;
    nbr_inscrit_04192 = rows04192.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04192').textContent = name_04192;
   
    let com_04192 = document.getElementById("f-path-04192");
    let list_04192 = document.getElementById("list_04192");


    function togg04192() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04192-01').classList.remove('visible')
        document.querySelector('#polar-chart_04192-01').classList.remove('visible')
        document.querySelector('#polar-chart_04192-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04192').classList.remove('visible')
        document.querySelector('#f-path-04192').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04192
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04192
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04192
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04192
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04192
    }
    com_04192.onclick = togg04192;
    list_04192.onclick = togg04192;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04193 = data[192];

    /*Récupere les données que je veut de la Commune */
    name_04193 = rows04193.Libellé_géographique;
    Pop_04193 = rows04193.Population_en_2017;
    Pop_017_04193 = rows04193.Pop_017_ans_2017;
    Pop_mediane_vote_04193 = rows04193.Popu_possible_voté;
    nbr_inscrit_04193 = rows04193.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04193').textContent = name_04193;
   
    let com_04193 = document.getElementById("f-path-04193");
    let list_04193 = document.getElementById("list_04193");


    function togg04193() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04193-01').classList.remove('visible')
        document.querySelector('#polar-chart_04193-01').classList.remove('visible')
        document.querySelector('#polar-chart_04193-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04193').classList.remove('visible')
        document.querySelector('#f-path-04193').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04193
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04193
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04193
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04193
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04193
    }
    com_04193.onclick = togg04193;
    list_04193.onclick = togg04193;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04194 = data[193];

    /*Récupere les données que je veut de la Commune */
    name_04194 = rows04194.Libellé_géographique;
    Pop_04194 = rows04194.Population_en_2017;
    Pop_017_04194 = rows04194.Pop_017_ans_2017;
    Pop_mediane_vote_04194 = rows04194.Popu_possible_voté;
    nbr_inscrit_04194 = rows04194.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04194').textContent = name_04194;
   
    let com_04194 = document.getElementById("f-path-04194");
    let list_04194 = document.getElementById("list_04194");


    function togg04194() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04194-01').classList.remove('visible')
        document.querySelector('#polar-chart_04194-01').classList.remove('visible')
        document.querySelector('#polar-chart_04194-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04194').classList.remove('visible')
        document.querySelector('#f-path-04194').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04194
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04194
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04194
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04194
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04194
    }
    com_04194.onclick = togg04194;
    list_04194.onclick = togg04194;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04195 = data[194];

    /*Récupere les données que je veut de la Commune */
    name_04195 = rows04195.Libellé_géographique;
    Pop_04195 = rows04195.Population_en_2017;
    Pop_017_04195 = rows04195.Pop_017_ans_2017;
    Pop_mediane_vote_04195 = rows04195.Popu_possible_voté;
    nbr_inscrit_04195 = rows04195.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04195').textContent = name_04195;
   
    let com_04195 = document.getElementById("f-path-04195");
    let list_04195 = document.getElementById("list_04195");


    function togg04195() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04195-01').classList.remove('visible')
        document.querySelector('#polar-chart_04195-01').classList.remove('visible')
        document.querySelector('#polar-chart_04195-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04195').classList.remove('visible')
        document.querySelector('#f-path-04195').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04195
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04195
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04195
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04195
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04195
    }
    com_04195.onclick = togg04195;
    list_04195.onclick = togg04195;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04196 = data[195];

    /*Récupere les données que je veut de la Commune */
    name_04196 = rows04196.Libellé_géographique;
    Pop_04196 = rows04196.Population_en_2017;
    Pop_017_04196 = rows04196.Pop_017_ans_2017;
    Pop_mediane_vote_04196 = rows04196.Popu_possible_voté;
    nbr_inscrit_04196 = rows04196.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04196').textContent = name_04196;
   
    let com_04196 = document.getElementById("f-path-04196");
    let list_04196 = document.getElementById("list_04196");


    function togg04196() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04196-01').classList.remove('visible')
        document.querySelector('#polar-chart_04196-01').classList.remove('visible')
        document.querySelector('#polar-chart_04196-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04196').classList.remove('visible')
        document.querySelector('#f-path-04196').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04196
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04196
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04196
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04196
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04196
    }
    com_04196.onclick = togg04196;
    list_04196.onclick = togg04196;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04197 = data[196];

    /*Récupere les données que je veut de la Commune */
    name_04197 = rows04197.Libellé_géographique;
    Pop_04197 = rows04197.Population_en_2017;
    Pop_017_04197 = rows04197.Pop_017_ans_2017;
    Pop_mediane_vote_04197 = rows04197.Popu_possible_voté;
    nbr_inscrit_04197 = rows04197.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04197').textContent = name_04197;
   
    let com_04197 = document.getElementById("f-path-04197");
    let list_04197 = document.getElementById("list_04197");


    function togg04197() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04197-01').classList.remove('visible')
        document.querySelector('#polar-chart_04197-01').classList.remove('visible')
        document.querySelector('#polar-chart_04197-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04197').classList.remove('visible')
        document.querySelector('#f-path-04197').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04197
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04197
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04197
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04197
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04197
    }
    com_04197.onclick = togg04197;
    list_04197.onclick = togg04197;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows04198 = data[197];

    /*Récupere les données que je veut de la Commune */
    name_04198 = rows04198.Libellé_géographique;
    Pop_04198 = rows04198.Population_en_2017;
    Pop_017_04198 = rows04198.Pop_017_ans_2017;
    Pop_mediane_vote_04198 = rows04198.Popu_possible_voté;
    nbr_inscrit_04198 = rows04198.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_04198').textContent = name_04198;
   
    let com_04198 = document.getElementById("f-path-04198");
    let list_04198 = document.getElementById("list_04198");


    function togg04198() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_04198-01').classList.remove('visible')
        document.querySelector('#polar-chart_04198-01').classList.remove('visible')
        document.querySelector('#polar-chart_04198-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_04198').classList.remove('visible')
        document.querySelector('#f-path-04198').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_04198
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_04198
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_04198
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_04198
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_04198
    }
    com_04198.onclick = togg04198;
    list_04198.onclick = togg04198;
}
DataJSON();