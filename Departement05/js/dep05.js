async function DataJSON() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[0];
    /*Récupere les données que je veut de la Commune */
    name_05001 = rows.Libellé_géographique;
    Pop_05001 = rows.Population_en_2017;
    Pop_017_05001 = rows.Pop_017_ans_2017;
    Pop_mediane_vote_05001 = rows.Popu_possible_voté;
    nbr_inscrit_05001 = rows.Inscrits;
    /*Pose dans le Menu*/
    document.querySelector('#list_05001').textContent = name_05001;
/*--------------------------------------------------------------------------*/
    var body = document.querySelector('#body')
    var path = document.querySelector('#map01')
    /******************************************************************** */
    let com_05001 = document.getElementById("f-path-05001");
    let list_05001 = document.getElementById("list_05001");
    function togg05001() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05001-01').classList.remove('visible')
        document.querySelector('#polar-chart_05001-01').classList.remove('visible')
        document.querySelector('#polar-chart_05001-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05001').classList.remove('visible')
        document.querySelector('#f-path-05001').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05001
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05001
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05001
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05001
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05001
    }
    com_05001.onclick = togg05001;
    list_05001.onclick = togg05001;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05002 = data[1];
    /*Récupere les données que je veut de la Commune */
    name_05002 = rows05002.Libellé_géographique;
    Pop_05002 = rows05002.Population_en_2017;
    Pop_017_05002 = rows05002.Pop_017_ans_2017;
    Pop_mediane_vote_05002 = rows05002.Popu_possible_voté;
    nbr_inscrit_05002 = rows05002.Inscrits;  
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05002').textContent = name_05002;
/*--------------------------------------------------------------------------*/
    let com_05002 = document.getElementById("f-path-05002");
    let list_05002 = document.getElementById("list_05002");
    /******************************************************************** */
    function togg05002() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05002-01').classList.remove('visible')
        document.querySelector('#polar-chart_05002-01').classList.remove('visible')
        document.querySelector('#polar-chart_05002-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05002').classList.remove('visible')
        document.querySelector('#f-path-05002').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05002;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05002
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05002
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05002
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05002
    }
    com_05002.onclick = togg05002;
    list_05002.onclick = togg05002;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05003 = data[2];
    /*Récupere les données que je veut de la Commune */
    name_05003 = rows05003.Libellé_géographique;
    Pop_05003 = rows05003.Population_en_2017;
    Pop_017_05003 = rows05003.Pop_017_ans_2017;
    Pop_mediane_vote_05003 = rows05003.Popu_possible_voté;
    nbr_inscrit_05003 = rows05003.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05003').textContent = name_05003;
    let com_05003 = document.getElementById("f-path-05003");
    let list_05003 = document.getElementById("list_05003");
    function togg05003() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05003-01').classList.remove('visible')
        document.querySelector('#polar-chart_05003-01').classList.remove('visible')
        document.querySelector('#polar-chart_05003-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05003').classList.remove('visible')
        document.querySelector('#f-path-05003').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05003;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05003
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05003
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05003
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05003
    }
    com_05003.onclick = togg05003;
    list_05003.onclick = togg05003;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05004 = data[3];
    /*Récupere les données que je veut de la Commune */
    name_05004 = rows05004.Libellé_géographique;
    Pop_05004 = rows05004.Population_en_2017;
    Pop_017_05004 = rows05004.Pop_017_ans_2017;
    Pop_mediane_vote_05004 = rows05004.Popu_possible_voté;
    nbr_inscrit_05004 = rows05004.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05004').textContent = name_05004;
    let com_05004 = document.getElementById("f-path-05004");
    let list_05004 = document.getElementById("list_05004");
    function togg05004() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05004-01').classList.remove('visible')
        document.querySelector('#polar-chart_05004-01').classList.remove('visible')
        document.querySelector('#polar-chart_05004-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05004').classList.remove('visible')
        document.querySelector('#f-path-05004').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05004;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05004
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05004
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05004
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05004
    }
    com_05004.onclick = togg05004;
    list_05004.onclick = togg05004;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05005 = data[4];
    /*Récupere les données que je veut de la Commune */
    name_05005 = rows05005.Libellé_géographique;
    Pop_05005 = rows05005.Population_en_2017;
    Pop_017_05005 = rows05005.Pop_017_ans_2017;
    Pop_mediane_vote_05005 = rows05005.Popu_possible_voté;
    nbr_inscrit_05005 = rows05005.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05005').textContent = name_05005;
    let com_05005 = document.getElementById("f-path-05005");
    let list_05005 = document.getElementById("list_05005");
    function togg05005() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05005-01').classList.remove('visible')
        document.querySelector('#polar-chart_05005-01').classList.remove('visible')
        document.querySelector('#polar-chart_05005-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05005').classList.remove('visible')
        document.querySelector('#f-path-05005').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05005
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05005
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05005
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05005
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05005
    }
    com_05005.onclick = togg05005;
    list_05005.onclick = togg05005;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05006 = data[5];
    /*Récupere les données que je veut de la Commune */
    name_05006 = rows05006.Libellé_géographique;
    Pop_05006 = rows05006.Population_en_2017;
    Pop_017_05006 = rows05006.Pop_017_ans_2017;
    Pop_mediane_vote_05006 = rows05006.Popu_possible_voté;
    nbr_inscrit_05006 = rows05006.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05006').textContent = name_05006;
    let com_05006 = document.getElementById("f-path-05006");
    let list_05006 = document.getElementById("list_05006");
    function togg05006() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05006-01').classList.remove('visible')
        document.querySelector('#polar-chart_05006-01').classList.remove('visible')
        document.querySelector('#polar-chart_05006-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05006').classList.remove('visible')
        document.querySelector('#f-path-05006').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05006
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05006
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05006
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05006
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05006
    }
    com_05006.onclick = togg05006;
    list_05006.onclick = togg05006;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05007 = data[6];
    /*Récupere les données que je veut de la Commune */
    name_05007 = rows05007.Libellé_géographique;
    Pop_05007 = rows05007.Population_en_2017;
    Pop_017_05007 = rows05007.Pop_017_ans_2017;
    Pop_mediane_vote_05007 = rows05007.Popu_possible_voté;
    nbr_inscrit_05007 = rows05007.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05007').textContent = name_05007; 
    let com_05007 = document.getElementById("f-path-05007");
    let list_05007 = document.getElementById("list_05007");
    function togg05007() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05007-01').classList.remove('visible')
        document.querySelector('#polar-chart_05007-01').classList.remove('visible')
        document.querySelector('#polar-chart_05007-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05007').classList.remove('visible')
        document.querySelector('#f-path-05007').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05007
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05007
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05007
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05007
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05007
    }
    com_05007.onclick = togg05007;
    list_05007.onclick = togg05007;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05008 = data[7];
    
    /*Récupere les données que je veut de la Commune */
    name_05008 = rows05008.Libellé_géographique;
    Pop_05008 = rows05008.Population_en_2017;
    Pop_017_05008 = rows05008.Pop_017_ans_2017;
    Pop_mediane_vote_05008 = rows05008.Popu_possible_voté;
    nbr_inscrit_05008 = rows05008.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05008').textContent = name_05008;
   
    let com_05008 = document.getElementById("f-path-05008");
    let list_05008 = document.getElementById("list_05008");


    function togg05008() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05008-01').classList.remove('visible')
        document.querySelector('#polar-chart_05008-01').classList.remove('visible')
        document.querySelector('#polar-chart_05008-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05008').classList.remove('visible')
        document.querySelector('#f-path-05008').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05008
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05008
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05008
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05008
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05008
    }
    com_05008.onclick = togg05008;
    list_05008.onclick = togg05008;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05009 = data[8];
    
    /*Récupere les données que je veut de la Commune */
    name_05009 = rows05009.Libellé_géographique;
    Pop_05009 = rows05009.Population_en_2017;
    Pop_017_05009 = rows05009.Pop_017_ans_2017;
    Pop_mediane_vote_05009 = rows05009.Popu_possible_voté;
    nbr_inscrit_05009 = rows05009.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05009').textContent = name_05009;

    let com_05009 = document.getElementById("f-path-05009");
    let list_05009 = document.getElementById("list_05009");


    function togg05009() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05009-01').classList.remove('visible')
        document.querySelector('#polar-chart_05009-01').classList.remove('visible')
        document.querySelector('#polar-chart_05009-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05009').classList.remove('visible')
        document.querySelector('#f-path-05009').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05009
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05009
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05009
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05009
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05009
    }
    com_05009.onclick = togg05009;
    list_05009.onclick = togg05009;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05010 = data[9];
 
    /*Récupere les données que je veut de la Commune */
    name_05010 = rows05010.Libellé_géographique;
    Pop_05010 = rows05010.Population_en_2017;
    Pop_017_05010 = rows05010.Pop_017_ans_2017;
    Pop_mediane_vote_05010 = rows05010.Popu_possible_voté;
    nbr_inscrit_05010 = rows05010.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05010').textContent = name_05010;

    let com_05010 = document.getElementById("f-path-05010");
    let list_05010 = document.getElementById("list_05010");


    function togg05010() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05010-01').classList.remove('visible')
        document.querySelector('#polar-chart_05010-01').classList.remove('visible')
        document.querySelector('#polar-chart_05010-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05010').classList.remove('visible')
        document.querySelector('#f-path-05010').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05010
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05010
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05010
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05010
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05010
    }
    com_05010.onclick = togg05010;
    list_05010.onclick = togg05010;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05011 = data[10];

    /*Récupere les données que je veut de la Commune */
    name_05011 = rows05011.Libellé_géographique;
    Pop_05011 = rows05011.Population_en_2017;
    Pop_017_05011 = rows05011.Pop_017_ans_2017;
    Pop_mediane_vote_05011 = rows05011.Popu_possible_voté;
    nbr_inscrit_05011 = rows05011.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05011').textContent = name_05011;
   
    let com_05011 = document.getElementById("f-path-05011");
    let list_05011 = document.getElementById("list_05011");


    function togg05011() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05011-01').classList.remove('visible')
        document.querySelector('#polar-chart_05011-01').classList.remove('visible')
        document.querySelector('#polar-chart_05011-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05011').classList.remove('visible')
        document.querySelector('#f-path-05011').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05011
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05011
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05011
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05011
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05011
    }
    com_05011.onclick = togg05011;
    list_05011.onclick = togg05011;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05012 = data[11];

    /*Récupere les données que je veut de la Commune */
    name_05012 = rows05012.Libellé_géographique;
    Pop_05012 = rows05012.Population_en_2017;
    Pop_017_05012 = rows05012.Pop_017_ans_2017;
    Pop_mediane_vote_05012 = rows05012.Popu_possible_voté;
    nbr_inscrit_05012 = rows05012.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05012').textContent = name_05012;
   
    let com_05012 = document.getElementById("f-path-05012");
    let list_05012 = document.getElementById("list_05012");


    function togg05012() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05012-01').classList.remove('visible')
        document.querySelector('#polar-chart_05012-01').classList.remove('visible')
        document.querySelector('#polar-chart_05012-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05012').classList.remove('visible')
        document.querySelector('#f-path-05012').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05012
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05012
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05012
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05012
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05012
    }
    com_05012.onclick = togg05012;
    list_05012.onclick = togg05012;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05013 = data[12];

    /*Récupere les données que je veut de la Commune */
    name_05013 = rows05013.Libellé_géographique;
    Pop_05013 = rows05013.Population_en_2017;
    Pop_017_05013 = rows05013.Pop_017_ans_2017;
    Pop_mediane_vote_05013 = rows05013.Popu_possible_voté;
    nbr_inscrit_05013 = rows05013.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05013').textContent = name_05013;
   
    let com_05013 = document.getElementById("f-path-05013");
    let list_05013 = document.getElementById("list_05013");


    function togg05013() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05013-01').classList.remove('visible')
        document.querySelector('#polar-chart_05013-01').classList.remove('visible')
        document.querySelector('#polar-chart_05013-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05013').classList.remove('visible')
        document.querySelector('#f-path-05013').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05013
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05013
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05013
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05013
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05013
    }
    com_05013.onclick = togg05013;
    list_05013.onclick = togg05013;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05014 = data[13];

    /*Récupere les données que je veut de la Commune */
    name_05014 = rows05014.Libellé_géographique;
    Pop_05014 = rows05014.Population_en_2017;
    Pop_017_05014 = rows05014.Pop_017_ans_2017;
    Pop_mediane_vote_05014 = rows05014.Popu_possible_voté;
    nbr_inscrit_05014 = rows05014.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05014').textContent = name_05014;
   
    let com_05014 = document.getElementById("f-path-05014");
    let list_05014 = document.getElementById("list_05014");


    function togg05014() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05014-01').classList.remove('visible')
        document.querySelector('#polar-chart_05014-01').classList.remove('visible')
        document.querySelector('#polar-chart_05014-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05014').classList.remove('visible')
        document.querySelector('#f-path-05014').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05014
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05014
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05014
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05014
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05014
    }
    com_05014.onclick = togg05014;
    list_05014.onclick = togg05014;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05015 = data[14];

    /*Récupere les données que je veut de la Commune */
    name_05015 = rows05015.Libellé_géographique;
    Pop_05015 = rows05015.Population_en_2017;
    Pop_017_05015 = rows05015.Pop_017_ans_2017;
    Pop_mediane_vote_05015 = rows05015.Popu_possible_voté;
    nbr_inscrit_05015 = rows05015.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05015').textContent = name_05015;
   
    let com_05015 = document.getElementById("f-path-05015");
    let list_05015 = document.getElementById("list_05015");


    function togg05015() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05015-01').classList.remove('visible')
        document.querySelector('#polar-chart_05015-01').classList.remove('visible')
        document.querySelector('#polar-chart_05015-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05015').classList.remove('visible')
        document.querySelector('#f-path-05015').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05015
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05015
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05015
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05015
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05015
    }
    com_05015.onclick = togg05015;
    list_05015.onclick = togg05015;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05016 = data[15];

    /*Récupere les données que je veut de la Commune */
    name_05016 = rows05016.Libellé_géographique;
    Pop_05016 = rows05016.Population_en_2017;
    Pop_017_05016 = rows05016.Pop_017_ans_2017;
    Pop_mediane_vote_05016 = rows05016.Popu_possible_voté;
    nbr_inscrit_05016 = rows05016.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05016').textContent = name_05016;
   
    let com_05016 = document.getElementById("f-path-05016");
    let list_05016 = document.getElementById("list_05016");


    function togg05016() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05016-01').classList.remove('visible')
        document.querySelector('#polar-chart_05016-01').classList.remove('visible')
        document.querySelector('#polar-chart_05016-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05016').classList.remove('visible')
        document.querySelector('#f-path-05016').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05016
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05016
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05016
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05016
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05016
    }
    com_05016.onclick = togg05016;
    list_05016.onclick = togg05016;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05017 = data[16];

    /*Récupere les données que je veut de la Commune */
    name_05017 = rows05017.Libellé_géographique;
    Pop_05017 = rows05017.Population_en_2017;
    Pop_017_05017 = rows05017.Pop_017_ans_2017;
    Pop_mediane_vote_05017 = rows05017.Popu_possible_voté;
    nbr_inscrit_05017 = rows05017.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05017').textContent = name_05017;
   
    let com_05017 = document.getElementById("f-path-05017");
    let list_05017 = document.getElementById("list_05017");


    function togg05017() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05017-01').classList.remove('visible')
        document.querySelector('#polar-chart_05017-01').classList.remove('visible')
        document.querySelector('#polar-chart_05017-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05017').classList.remove('visible')
        document.querySelector('#f-path-05017').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05017
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05017
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05017
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05017
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05017
    }
    com_05017.onclick = togg05017;
    list_05017.onclick = togg05017;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05018 = data[17];

    /*Récupere les données que je veut de la Commune */
    name_05018 = rows05018.Libellé_géographique;
    Pop_05018 = rows05018.Population_en_2017;
    Pop_017_05018 = rows05018.Pop_017_ans_2017;
    Pop_mediane_vote_05018 = rows05017.Popu_possible_voté;
    nbr_inscrit_05018 = rows05018.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05018').textContent = name_05018;
   
    let com_05018 = document.getElementById("f-path-05018");
    let list_05018 = document.getElementById("list_05018");


    function togg05018() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05018-01').classList.remove('visible')
        document.querySelector('#polar-chart_05018-01').classList.remove('visible')
        document.querySelector('#polar-chart_05018-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05018').classList.remove('visible')
        document.querySelector('#f-path-05018').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05018
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05018
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05018
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05018
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05018
    }
    com_05018.onclick = togg05018;
    list_05018.onclick = togg05018;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05019 = data[18];

    /*Récupere les données que je veut de la Commune */
    name_05019 = rows05019.Libellé_géographique;
    Pop_05019 = rows05019.Population_en_2017;
    Pop_017_05019 = rows05019.Pop_017_ans_2017;
    Pop_mediane_vote_05019 = rows05019.Popu_possible_voté;
    nbr_inscrit_05019 = rows05019.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05019').textContent = name_05019;
   
    let com_05019 = document.getElementById("f-path-05019");
    let list_05019 = document.getElementById("list_05019");


    function togg05019() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05019-01').classList.remove('visible')
        document.querySelector('#polar-chart_05019-01').classList.remove('visible')
        document.querySelector('#polar-chart_05019-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05019').classList.remove('visible')
        document.querySelector('#f-path-05019').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05019
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05019
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05019
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05019
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05019
    }
    com_05019.onclick = togg05019;
    list_05019.onclick = togg05019;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05020 = data[19];

    /*Récupere les données que je veut de la Commune */
    name_05020 = rows05020.Libellé_géographique;
    Pop_05020 = rows05020.Population_en_2017;
    Pop_017_05020 = rows05020.Pop_017_ans_2017;
    Pop_mediane_vote_05020 = rows05020.Popu_possible_voté;
    nbr_inscrit_05020 = rows05020.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05020').textContent = name_05020;
   
    let com_05020 = document.getElementById("f-path-05020");
    let list_05020 = document.getElementById("list_05020");


    function togg05020() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05020-01').classList.remove('visible')
        document.querySelector('#polar-chart_05020-01').classList.remove('visible')
        document.querySelector('#polar-chart_05020-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05020').classList.remove('visible')
        document.querySelector('#f-path-05020').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05020
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05020
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05020
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05020
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05020
    }
    com_05020.onclick = togg05020;
    list_05020.onclick = togg05020;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05021 = data[20];

    /*Récupere les données que je veut de la Commune */
    name_05021 = rows05021.Libellé_géographique;
    Pop_05021 = rows05021.Population_en_2017;
    Pop_017_05021 = rows05021.Pop_017_ans_2017;
    Pop_mediane_vote_05021 = rows05021.Popu_possible_voté;
    nbr_inscrit_05021 = rows05021.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05021').textContent = name_05021;
   
    let com_05021 = document.getElementById("f-path-05021");
    let list_05021 = document.getElementById("list_05021");


    function togg05021() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05021-01').classList.remove('visible')
        document.querySelector('#polar-chart_05021-01').classList.remove('visible')
        document.querySelector('#polar-chart_05021-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05021').classList.remove('visible')
        document.querySelector('#f-path-05021').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05021
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05021
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05021
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05021
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05021
    }
    com_05021.onclick = togg05021;
    list_05021.onclick = togg05021;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05022 = data[21];

    /*Récupere les données que je veut de la Commune */
    name_05022 = rows05022.Libellé_géographique;
    Pop_05022 = rows05022.Population_en_2017;
    Pop_017_05022 = rows05022.Pop_017_ans_2017;
    Pop_mediane_vote_05022 = rows05022.Popu_possible_voté;
    nbr_inscrit_05022 = rows05022.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05022').textContent = name_05022;
   
    let com_05022 = document.getElementById("f-path-05022");
    let list_05022 = document.getElementById("list_05022");


    function togg05022() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05022-01').classList.remove('visible')
        document.querySelector('#polar-chart_05022-01').classList.remove('visible')
        document.querySelector('#polar-chart_05022-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05022').classList.remove('visible')
        document.querySelector('#f-path-05022').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05022
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05022
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05022
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05022
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05022
    }
    com_05022.onclick = togg05022;
    list_05022.onclick = togg05022;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05023 = data[22];

    /*Récupere les données que je veut de la Commune */
    name_05023 = rows05023.Libellé_géographique;
    Pop_05023 = rows05023.Population_en_2017;
    Pop_017_05023 = rows05023.Pop_017_ans_2017;
    Pop_mediane_vote_05023 = rows05023.Popu_possible_voté;
    nbr_inscrit_05023 = rows05023.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05023').textContent = name_05023;
   
    let com_05023 = document.getElementById("f-path-05023");
    let list_05023 = document.getElementById("list_05023");


    function togg05023() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05023-01').classList.remove('visible')
        document.querySelector('#polar-chart_05023-01').classList.remove('visible')
        document.querySelector('#polar-chart_05023-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05023').classList.remove('visible')
        document.querySelector('#f-path-05023').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05023
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05023
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05023
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05023
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05023
    }
    com_05023.onclick = togg05023;
    list_05023.onclick = togg05023;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05024 = data[23];

    /*Récupere les données que je veut de la Commune */
    name_05024 = rows05024.Libellé_géographique;
    Pop_05024 = rows05024.Population_en_2017;
    Pop_017_05024 = rows05024.Pop_017_ans_2017;
    Pop_mediane_vote_05024 = rows05024.Popu_possible_voté;
    nbr_inscrit_05024 = rows05024.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05024').textContent = name_05024;
   
    let com_05024 = document.getElementById("f-path-05024");
    let list_05024 = document.getElementById("list_05024");


    function togg05024() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05024-01').classList.remove('visible')
        document.querySelector('#polar-chart_05024-01').classList.remove('visible')
        document.querySelector('#polar-chart_05024-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05024').classList.remove('visible')
        document.querySelector('#f-path-05024').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05024
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05024
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05024
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05024
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05024
    }
    com_05024.onclick = togg05024;
    list_05024.onclick = togg05024;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05025 = data[24];

    /*Récupere les données que je veut de la Commune */
    name_05025 = rows05025.Libellé_géographique;
    Pop_05025 = rows05025.Population_en_2017;
    Pop_017_05025 = rows05025.Pop_017_ans_2017;
    Pop_mediane_vote_05025 = rows05025.Popu_possible_voté;
    nbr_inscrit_05025 = rows05025.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05025').textContent = name_05025;
   
    let com_05025 = document.getElementById("f-path-05025");
    let list_05025 = document.getElementById("list_05025");


    function togg05025() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05025-01').classList.remove('visible')
        document.querySelector('#polar-chart_05025-01').classList.remove('visible')
        document.querySelector('#polar-chart_05025-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05025').classList.remove('visible')
        document.querySelector('#f-path-05025').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05025
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05025
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05025
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05025
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05025
    }
    com_05025.onclick = togg05025;
    list_05025.onclick = togg05025;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05026 = data[25];

    /*Récupere les données que je veut de la Commune */
    name_05026 = rows05026.Libellé_géographique;
    Pop_05026 = rows05026.Population_en_2017;
    Pop_017_05026 = rows05026.Pop_017_ans_2017;
    Pop_mediane_vote_05026 = rows05026.Popu_possible_voté;
    nbr_inscrit_05026 = rows05026.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05026').textContent = name_05026;
   
    let com_05026 = document.getElementById("f-path-05026");
    let list_05026 = document.getElementById("list_05026");


    function togg05026() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05026-01').classList.remove('visible')
        document.querySelector('#polar-chart_05026-01').classList.remove('visible')
        document.querySelector('#polar-chart_05026-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05026').classList.remove('visible')
        document.querySelector('#f-path-05026').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05026
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05026
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05026
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05026
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05026
    }
    com_05026.onclick = togg05026;
    list_05026.onclick = togg05026;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05027 = data[26];

    /*Récupere les données que je veut de la Commune */
    name_05027 = rows05027.Libellé_géographique;
    Pop_05027 = rows05027.Population_en_2017;
    Pop_017_05027 = rows05027.Pop_017_ans_2017;
    Pop_mediane_vote_05027 = rows05027.Popu_possible_voté;
    nbr_inscrit_05027 = rows05027.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05027').textContent = name_05027;
   
    let com_05027 = document.getElementById("f-path-05027");
    let list_05027 = document.getElementById("list_05027");


    function togg05027() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05027-01').classList.remove('visible')
        document.querySelector('#polar-chart_05027-01').classList.remove('visible')
        document.querySelector('#polar-chart_05027-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05027').classList.remove('visible')
        document.querySelector('#f-path-05027').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05027
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05027
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05027
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05027
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05027
    }
    com_05027.onclick = togg05027;
    list_05027.onclick = togg05027;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05028 = data[27];

    /*Récupere les données que je veut de la Commune */
    name_05028 = rows05028.Libellé_géographique;
    Pop_05028 = rows05028.Population_en_2017;
    Pop_017_05028 = rows05028.Pop_017_ans_2017;
    Pop_mediane_vote_05028 = rows05028.Popu_possible_voté;
    nbr_inscrit_05028 = rows05028.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05028').textContent = name_05028;
   
    let com_05028 = document.getElementById("f-path-05028");
    let list_05028 = document.getElementById("list_05028");


    function togg05028() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05028-01').classList.remove('visible')
        document.querySelector('#polar-chart_05028-01').classList.remove('visible')
        document.querySelector('#polar-chart_05028-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05028').classList.remove('visible')
        document.querySelector('#f-path-05028').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05028
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05028
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05028
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05028
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05028
    }
    com_05028.onclick = togg05028;
    list_05028.onclick = togg05028;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05029 = data[28];

    /*Récupere les données que je veut de la Commune */
    name_05029 = rows05029.Libellé_géographique;
    Pop_05029 = rows05029.Population_en_2017;
    Pop_017_05029 = rows05029.Pop_017_ans_2017;
    Pop_mediane_vote_05029 = rows05029.Popu_possible_voté;
    nbr_inscrit_05029 = rows05029.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05029').textContent = name_05029;
   
    let com_05029 = document.getElementById("f-path-05029");
    let list_05029 = document.getElementById("list_05029");


    function togg05029() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05029-01').classList.remove('visible')
        document.querySelector('#polar-chart_05029-01').classList.remove('visible')
        document.querySelector('#polar-chart_05029-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05029').classList.remove('visible')
        document.querySelector('#f-path-05029').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05029
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05029
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05029
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05029
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05029
    }
    com_05029.onclick = togg05029;
    list_05029.onclick = togg05029;
     /************************************************************************************* */
    /************************************************************************************* */
    const rows05030 = data[29];

    /*Récupere les données que je veut de la Commune */
    name_05030 = rows05030.Libellé_géographique;
    Pop_05030 = rows05030.Population_en_2017;
    Pop_017_05030 = rows05030.Pop_017_ans_2017;
    Pop_mediane_vote_05030 = rows05030.Popu_possible_voté;
    nbr_inscrit_05030 = rows05030.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05030').textContent = name_05030;
   
    let com_05030 = document.getElementById("f-path-05030");
    let list_05030 = document.getElementById("list_05030");


    function togg05030() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05030-01').classList.remove('visible')
        document.querySelector('#polar-chart_05030-01').classList.remove('visible')
        document.querySelector('#polar-chart_05030-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05030').classList.remove('visible')
        document.querySelector('#f-path-05030').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05030
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05030
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05030
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05030
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05030
    }
    com_05030.onclick = togg05030;
    list_05030.onclick = togg05030;
     /************************************************************************************* */
    /************************************************************************************* */
    const rows05031 = data[30];

    /*Récupere les données que je veut de la Commune */
    name_05031 = rows05031.Libellé_géographique;
    Pop_05031 = rows05031.Population_en_2017;
    Pop_017_05031 = rows05031.Pop_017_ans_2017;
    Pop_mediane_vote_05031 = rows05031.Popu_possible_voté;
    nbr_inscrit_05031 = rows05031.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05031').textContent = name_05031;
   
    let com_05031 = document.getElementById("f-path-05031");
    let list_05031 = document.getElementById("list_05031");


    function togg05031() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05031-01').classList.remove('visible')
        document.querySelector('#polar-chart_05031-01').classList.remove('visible')
        document.querySelector('#polar-chart_05031-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05031').classList.remove('visible')
        document.querySelector('#f-path-05031').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05031
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05031
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05031
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05031
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05031
    }
    com_05031.onclick = togg05031;
    list_05031.onclick = togg05031;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05032 = data[31];

    /*Récupere les données que je veut de la Commune */
    name_05032 = rows05032.Libellé_géographique;
    Pop_05032 = rows05032.Population_en_2017;
    Pop_017_05032 = rows05032.Pop_017_ans_2017;
    Pop_mediane_vote_05032 = rows05032.Popu_possible_voté;
    nbr_inscrit_05032 = rows05032.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05032').textContent = name_05032;
   
    let com_05032 = document.getElementById("f-path-05032");
    let list_05032 = document.getElementById("list_05032");


    function togg05032() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05032-01').classList.remove('visible')
        document.querySelector('#polar-chart_05032-01').classList.remove('visible')
        document.querySelector('#polar-chart_05032-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05032').classList.remove('visible')
        document.querySelector('#f-path-05032').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05032
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05032
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05032
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05032
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05032
    }
    com_05032.onclick = togg05032;
    list_05032.onclick = togg05032;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05033 = data[32];

    /*Récupere les données que je veut de la Commune */
    name_05033 = rows05033.Libellé_géographique;
    Pop_05033 = rows05033.Population_en_2017;
    Pop_017_05033 = rows05033.Pop_017_ans_2017;
    Pop_mediane_vote_05033 = rows05033.Popu_possible_voté;
    nbr_inscrit_05033 = rows05033.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05033').textContent = name_05033;
   
    let com_05033 = document.getElementById("f-path-05033");
    let list_05033 = document.getElementById("list_05033");


    function togg05033() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05033-01').classList.remove('visible')
        document.querySelector('#polar-chart_05033-01').classList.remove('visible')
        document.querySelector('#polar-chart_05033-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05033').classList.remove('visible')
        document.querySelector('#f-path-05033').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05033
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05033
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05033
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05033
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05033
    }
    com_05033.onclick = togg05033;
    list_05033.onclick = togg05033;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05034 = data[33];

    /*Récupere les données que je veut de la Commune */
    name_05034 = rows05034.Libellé_géographique;
    Pop_05034 = rows05034.Population_en_2017;
    Pop_017_05034 = rows05034.Pop_017_ans_2017;
    Pop_mediane_vote_05034 = rows05034.Popu_possible_voté;
    nbr_inscrit_05034 = rows05034.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05034').textContent = name_05034;
   
    let com_05034 = document.getElementById("f-path-05034");
    let list_05034 = document.getElementById("list_05034");


    function togg05034() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05034-01').classList.remove('visible')
        document.querySelector('#polar-chart_05034-01').classList.remove('visible')
        document.querySelector('#polar-chart_05034-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05034').classList.remove('visible')
        document.querySelector('#f-path-05034').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05034
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05034
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05034
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05034
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05034
    }
    com_05034.onclick = togg05034;
    list_05034.onclick = togg05034;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05035 = data[34];

    /*Récupere les données que je veut de la Commune */
    name_05035 = rows05035.Libellé_géographique;
    Pop_05035 = rows05035.Population_en_2017;
    Pop_017_05035 = rows05035.Pop_017_ans_2017;
    Pop_mediane_vote_05035 = rows05035.Popu_possible_voté;
    nbr_inscrit_05035 = rows05035.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05035').textContent = name_05035;
   
    let com_05035 = document.getElementById("f-path-05035");
    let list_05035 = document.getElementById("list_05035");


    function togg05035() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05035-01').classList.remove('visible')
        document.querySelector('#polar-chart_05035-01').classList.remove('visible')
        document.querySelector('#polar-chart_05035-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05035').classList.remove('visible')
        document.querySelector('#f-path-05035').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05035
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05035
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05035
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05035
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05035
    }
    com_05035.onclick = togg05035;
    list_05035.onclick = togg05035;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05036 = data[35];

    /*Récupere les données que je veut de la Commune */
    name_05036 = rows05036.Libellé_géographique;
    Pop_05036 = rows05036.Population_en_2017;
    Pop_017_05036 = rows05036.Pop_017_ans_2017;
    Pop_mediane_vote_05036 = rows05036.Popu_possible_voté;
    nbr_inscrit_05036 = rows05036.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05036').textContent = name_05036;
   
    let com_05036 = document.getElementById("f-path-05036");
    let list_05036 = document.getElementById("list_05036");


    function togg05036() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05036-01').classList.remove('visible')
        document.querySelector('#polar-chart_05036-01').classList.remove('visible')
        document.querySelector('#polar-chart_05036-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05036').classList.remove('visible')
        document.querySelector('#f-path-05036').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05036
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05036
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05036
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05036
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05036
    }
    com_05036.onclick = togg05036;
    list_05036.onclick = togg05036;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05037 = data[36];

    /*Récupere les données que je veut de la Commune */
    name_05037 = rows05037.Libellé_géographique;
    Pop_05037 = rows05037.Population_en_2017;
    Pop_017_05037 = rows05037.Pop_017_ans_2017;
    Pop_mediane_vote_05037 = rows05037.Popu_possible_voté;
    nbr_inscrit_05037 = rows05037.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05037').textContent = name_05037;
   
    let com_05037 = document.getElementById("f-path-05037");
    let list_05037 = document.getElementById("list_05037");


    function togg05037() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05037-01').classList.remove('visible')
        document.querySelector('#polar-chart_05037-01').classList.remove('visible')
        document.querySelector('#polar-chart_05067-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05037').classList.remove('visible')
        document.querySelector('#f-path-05037').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05037
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05037
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05037
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05037
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05037
    }
    com_05037.onclick = togg05037;
    list_05037.onclick = togg05037;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05038 = data[37];

    /*Récupere les données que je veut de la Commune */
    name_05038 = rows05038.Libellé_géographique;
    Pop_05038 = rows05038.Population_en_2017;
    Pop_017_05038 = rows05038.Pop_017_ans_2017;
    Pop_mediane_vote_05038 = rows05038.Popu_possible_voté;
    nbr_inscrit_05038 = rows05038.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05038').textContent = name_05038;
   
    let com_05038 = document.getElementById("f-path-05038");
    let list_05038 = document.getElementById("list_05038");


    function togg05038() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05038-01').classList.remove('visible')
        document.querySelector('#polar-chart_05038-01').classList.remove('visible')
        document.querySelector('#polar-chart_05068-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05038').classList.remove('visible')
        document.querySelector('#f-path-05038').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05038
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05038
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05038
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05038
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05038
    }
    com_05038.onclick = togg05038;
    list_05038.onclick = togg05038;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05039 = data[38];

    /*Récupere les données que je veut de la Commune */
    name_05039 = rows05039.Libellé_géographique;
    Pop_05039 = rows05039.Population_en_2017;
    Pop_017_05039 = rows05039.Pop_017_ans_2017;
    Pop_mediane_vote_05039 = rows05039.Popu_possible_voté;
    nbr_inscrit_05039 = rows05039.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05039').textContent = name_05039;
   
    let com_05039 = document.getElementById("f-path-05039");
    let list_05039 = document.getElementById("list_05039");


    function togg05039() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05039-01').classList.remove('visible')
        document.querySelector('#polar-chart_05039-01').classList.remove('visible')
        document.querySelector('#polar-chart_05069-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05039').classList.remove('visible')
        document.querySelector('#f-path-05039').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05039
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05039
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05039
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05039
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05039
    }
    com_05039.onclick = togg05039;
    list_05039.onclick = togg05039;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05040 = data[39];

    /*Récupere les données que je veut de la Commune */
    name_05040 = rows05040.Libellé_géographique;
    Pop_05040 = rows05040.Population_en_2017;
    Pop_017_05040 = rows05040.Pop_017_ans_2017;
    Pop_mediane_vote_05040 = rows05040.Popu_possible_voté;
    nbr_inscrit_05040 = rows05040.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05040').textContent = name_05040;
   
    let com_05040 = document.getElementById("f-path-05040");
    let list_05040 = document.getElementById("list_05040");


    function togg05040() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05040-01').classList.remove('visible')
        document.querySelector('#polar-chart_05040-01').classList.remove('visible')
        document.querySelector('#polar-chart_05040-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05040').classList.remove('visible')
        document.querySelector('#f-path-05040').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05040
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05040
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05040
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05040
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05040
    }
    com_05040.onclick = togg05040;
    list_05040.onclick = togg05040;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05041 = data[40];

    /*Récupere les données que je veut de la Commune */
    name_05041 = rows05041.Libellé_géographique;
    Pop_05041 = rows05041.Population_en_2017;
    Pop_017_05041 = rows05041.Pop_017_ans_2017;
    Pop_mediane_vote_05041 = rows05041.Popu_possible_voté;
    nbr_inscrit_05041 = rows05041.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05041').textContent = name_05041;
   
    let com_05041 = document.getElementById("f-path-05041");
    let list_05041 = document.getElementById("list_05041");


    function togg05041() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05041-01').classList.remove('visible')
        document.querySelector('#polar-chart_05041-01').classList.remove('visible')
        document.querySelector('#polar-chart_05041-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05041').classList.remove('visible')
        document.querySelector('#f-path-05041').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05041
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05041
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05041
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05041
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05041
    }
    com_05041.onclick = togg05041;
    list_05041.onclick = togg05041;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05042 = data[41];

    /*Récupere les données que je veut de la Commune */
    name_05042 = rows05042.Libellé_géographique;
    Pop_05042 = rows05042.Population_en_2017;
    Pop_017_05042 = rows05042.Pop_017_ans_2017;
    Pop_mediane_vote_05042 = rows05042.Popu_possible_voté;
    nbr_inscrit_05042 = rows05042.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05042').textContent = name_05042;
   
    let com_05042 = document.getElementById("f-path-05042");
    let list_05042 = document.getElementById("list_05042");


    function togg05042() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05042-01').classList.remove('visible')
        document.querySelector('#polar-chart_05042-01').classList.remove('visible')
        document.querySelector('#polar-chart_05042-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05042').classList.remove('visible')
        document.querySelector('#f-path-05042').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05042
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05042
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05042
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05042
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05042
    }
    com_05042.onclick = togg05042;
    list_05042.onclick = togg05042;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05043 = data[42];

    /*Récupere les données que je veut de la Commune */
    name_05043 = rows05043.Libellé_géographique;
    Pop_05043 = rows05043.Population_en_2017;
    Pop_017_05043 = rows05043.Pop_017_ans_2017;
    Pop_mediane_vote_05043 = rows05043.Popu_possible_voté;
    nbr_inscrit_05043 = rows05043.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05043').textContent = name_05043;
   
    let com_05043 = document.getElementById("f-path-05043");
    let list_05043 = document.getElementById("list_05043");


    function togg05043() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05043-01').classList.remove('visible')
        document.querySelector('#polar-chart_05043-01').classList.remove('visible')
        document.querySelector('#polar-chart_05043-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05043').classList.remove('visible')
        document.querySelector('#f-path-05043').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05043
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05043
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05043
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05043
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05043
    }
    com_05043.onclick = togg05043;
    list_05043.onclick = togg05043;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05044 = data[43];

    /*Récupere les données que je veut de la Commune */
    name_05044 = rows05044.Libellé_géographique;
    Pop_05044 = rows05044.Population_en_2017;
    Pop_017_05044 = rows05044.Pop_017_ans_2017;
    Pop_mediane_vote_05044 = rows05044.Popu_possible_voté;
    nbr_inscrit_05044 = rows05044.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05044').textContent = name_05044;
   
    let com_05044 = document.getElementById("f-path-05044");
    let list_05044 = document.getElementById("list_05044");


    function togg05044() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05044-01').classList.remove('visible')
        document.querySelector('#polar-chart_05044-01').classList.remove('visible')
        document.querySelector('#polar-chart_05044-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05044').classList.remove('visible')
        document.querySelector('#f-path-05044').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05044
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05044
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05044
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05044
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05044
    }
    com_05044.onclick = togg05044;
    list_05044.onclick = togg05044;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05045 = data[44];

    /*Récupere les données que je veut de la Commune */
    name_05045 = rows05045.Libellé_géographique;
    Pop_05045 = rows05045.Population_en_2017;
    Pop_017_05045 = rows05045.Pop_017_ans_2017;
    Pop_mediane_vote_05045 = rows05045.Popu_possible_voté;
    nbr_inscrit_05045 = rows05045.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05045').textContent = name_05045;
   
    let com_05045 = document.getElementById("f-path-05045");
    let list_05045 = document.getElementById("list_05045");


    function togg05045() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05045-01').classList.remove('visible')
        document.querySelector('#polar-chart_05045-01').classList.remove('visible')
        document.querySelector('#polar-chart_05045-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05045').classList.remove('visible')
        document.querySelector('#f-path-05045').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05045
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05045
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05045
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05045
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05045
    }
    com_05045.onclick = togg05045;
    list_05045.onclick = togg05045;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05046 = data[45];

    /*Récupere les données que je veut de la Commune */
    name_05046 = rows05046.Libellé_géographique;
    Pop_05046 = rows05046.Population_en_2017;
    Pop_017_05046 = rows05046.Pop_017_ans_2017;
    Pop_mediane_vote_05046 = rows05046.Popu_possible_voté;
    nbr_inscrit_05046 = rows05046.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05046').textContent = name_05046;
   
    let com_05046 = document.getElementById("f-path-05046");
    let list_05046 = document.getElementById("list_05046");


    function togg05046() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05046-01').classList.remove('visible')
        document.querySelector('#polar-chart_05046-01').classList.remove('visible')
        document.querySelector('#polar-chart_05046-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05046').classList.remove('visible')
        document.querySelector('#f-path-05046').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05046
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05046
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05046
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05046
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05046
    }
    com_05046.onclick = togg05046;
    list_05046.onclick = togg05046;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05047 = data[46];

    /*Récupere les données que je veut de la Commune */
    name_05047 = rows05047.Libellé_géographique;
    Pop_05047 = rows05047.Population_en_2017;
    Pop_017_05047 = rows05047.Pop_017_ans_2017;
    Pop_mediane_vote_05047 = rows05047.Popu_possible_voté;
    nbr_inscrit_05047 = rows05047.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05047').textContent = name_05047;
   
    let com_05047 = document.getElementById("f-path-05047");
    let list_05047 = document.getElementById("list_05047");


    function togg05047() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05047-01').classList.remove('visible')
        document.querySelector('#polar-chart_05047-01').classList.remove('visible')
        document.querySelector('#polar-chart_05047-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05047').classList.remove('visible')
        document.querySelector('#f-path-05047').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05047
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05047
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05047
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05047
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05047
    }
    com_05047.onclick = togg05047;
    list_05047.onclick = togg05047;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05048 = data[47];

    /*Récupere les données que je veut de la Commune */
    name_05048 = rows05048.Libellé_géographique;
    Pop_05048 = rows05048.Population_en_2017;
    Pop_017_05048 = rows05048.Pop_017_ans_2017;
    Pop_mediane_vote_05048 = rows05048.Popu_possible_voté;
    nbr_inscrit_05048 = rows05048.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05048').textContent = name_05048;
   
    let com_05048 = document.getElementById("f-path-05048");
    let list_05048 = document.getElementById("list_05048");


    function togg05048() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05048-01').classList.remove('visible')
        document.querySelector('#polar-chart_05048-01').classList.remove('visible')
        document.querySelector('#polar-chart_05048-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05048').classList.remove('visible')
        document.querySelector('#f-path-05048').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05048
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05048
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05048
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05048
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05048
    }
    com_05048.onclick = togg05048;
    list_05048.onclick = togg05048;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05049 = data[48];

    /*Récupere les données que je veut de la Commune */
    name_05049 = rows05049.Libellé_géographique;
    Pop_05049 = rows05049.Population_en_2017;
    Pop_017_05049 = rows05049.Pop_017_ans_2017;
    Pop_mediane_vote_05049 = rows05049.Popu_possible_voté;
    nbr_inscrit_05049 = rows05049.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05049').textContent = name_05049;
   
    let com_05049 = document.getElementById("f-path-05049");
    let list_05049 = document.getElementById("list_05049");


    function togg05049() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05049-01').classList.remove('visible')
        document.querySelector('#polar-chart_05049-01').classList.remove('visible')
        document.querySelector('#polar-chart_05049-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05049').classList.remove('visible')
        document.querySelector('#f-path-05049').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05049
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05049
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05049
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05049
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05049
    }
    com_05049.onclick = togg05049;
    list_05049.onclick = togg05049;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05050 = data[49];

    /*Récupere les données que je veut de la Commune */
    name_05050 = rows05050.Libellé_géographique;
    Pop_05050 = rows05050.Population_en_2017;
    Pop_017_05050 = rows05050.Pop_017_ans_2017;
    Pop_mediane_vote_05050 = rows05050.Popu_possible_voté;
    nbr_inscrit_05050 = rows05050.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05050').textContent = name_05050;
   
    let com_05050 = document.getElementById("f-path-05050");
    let list_05050 = document.getElementById("list_05050");


    function togg05050() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05050-01').classList.remove('visible')
        document.querySelector('#polar-chart_05050-01').classList.remove('visible')
        document.querySelector('#polar-chart_05050-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05050').classList.remove('visible')
        document.querySelector('#f-path-05050').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05050
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05050
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05050
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05050
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05050
    }
    com_05050.onclick = togg05050;
    list_05050.onclick = togg05050;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05051 = data[50];

    /*Récupere les données que je veut de la Commune */
    name_05051 = rows05051.Libellé_géographique;
    Pop_05051 = rows05051.Population_en_2017;
    Pop_017_05051 = rows05051.Pop_017_ans_2017;
    Pop_mediane_vote_05051 = rows05051.Popu_possible_voté;
    nbr_inscrit_05051 = rows05051.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05051').textContent = name_05051;
   
    let com_05051 = document.getElementById("f-path-05051");
    let list_05051 = document.getElementById("list_05051");


    function togg05051() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05051-01').classList.remove('visible')
        document.querySelector('#polar-chart_05051-01').classList.remove('visible')
        document.querySelector('#polar-chart_05051-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05051').classList.remove('visible')
        document.querySelector('#f-path-05051').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05051
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05051
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05051
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05051
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05051
    }
    com_05051.onclick = togg05051;
    list_05051.onclick = togg05051;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05052 = data[51];

    /*Récupere les données que je veut de la Commune */
    name_05052 = rows05052.Libellé_géographique;
    Pop_05052 = rows05052.Population_en_2017;
    Pop_017_05052 = rows05052.Pop_017_ans_2017;
    Pop_mediane_vote_05052 = rows05052.Popu_possible_voté;
    nbr_inscrit_05052 = rows05052.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05052').textContent = name_05052;
   
    let com_05052 = document.getElementById("f-path-05052");
    let list_05052 = document.getElementById("list_05052");


    function togg05052() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05052-01').classList.remove('visible')
        document.querySelector('#polar-chart_05052-01').classList.remove('visible')
        document.querySelector('#polar-chart_05052-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05052').classList.remove('visible')
        document.querySelector('#f-path-05052').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05052
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05052
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05052
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05052
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05052
    }
    com_05052.onclick = togg05052;
    list_05052.onclick = togg05052;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05053 = data[52];

    /*Récupere les données que je veut de la Commune */
    name_05053 = rows05053.Libellé_géographique;
    Pop_05053 = rows05053.Population_en_2017;
    Pop_017_05053 = rows05053.Pop_017_ans_2017;
    Pop_mediane_vote_05053 = rows05053.Popu_possible_voté;
    nbr_inscrit_05053 = rows05053.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05053').textContent = name_05053;
   
    let com_05053 = document.getElementById("f-path-05053");
    let list_05053 = document.getElementById("list_05053");


    function togg05053() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05053-01').classList.remove('visible')
        document.querySelector('#polar-chart_05053-01').classList.remove('visible')
        document.querySelector('#polar-chart_05053-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05053').classList.remove('visible')
        document.querySelector('#f-path-05053').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05053
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05053
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05053
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05053
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05053
    }
    com_05053.onclick = togg05053;
    list_05053.onclick = togg05053;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05054 = data[53];

    /*Récupere les données que je veut de la Commune */
    name_05054 = rows05054.Libellé_géographique;
    Pop_05054 = rows05054.Population_en_2017;
    Pop_017_05054 = rows05054.Pop_017_ans_2017;
    Pop_mediane_vote_05054 = rows05054.Popu_possible_voté;
    nbr_inscrit_05054 = rows05054.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05054').textContent = name_05054;
   
    let com_05054 = document.getElementById("f-path-05054");
    let list_05054 = document.getElementById("list_05054");


    function togg05054() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05054-01').classList.remove('visible')
        document.querySelector('#polar-chart_05054-01').classList.remove('visible')
        document.querySelector('#polar-chart_05054-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05054').classList.remove('visible')
        document.querySelector('#f-path-05054').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05054
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05054
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05054
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05054
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05054
    }
    com_05054.onclick = togg05054;
    list_05054.onclick = togg05054;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05055 = data[54];

    /*Récupere les données que je veut de la Commune */
    name_05055 = rows05055.Libellé_géographique;
    Pop_05055 = rows05055.Population_en_2017;
    Pop_017_05055 = rows05055.Pop_017_ans_2017;
    Pop_mediane_vote_05055 = rows05055.Popu_possible_voté;
    nbr_inscrit_05055 = rows05055.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05055').textContent = name_05055;
   
    let com_05055 = document.getElementById("f-path-05055");
    let list_05055 = document.getElementById("list_05055");


    function togg05055() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05055-01').classList.remove('visible')
        document.querySelector('#polar-chart_05055-01').classList.remove('visible')
        document.querySelector('#polar-chart_05055-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05055').classList.remove('visible')
        document.querySelector('#f-path-05055').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05055
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05055
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05055
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05055
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05055
    }
    com_05055.onclick = togg05055;
    list_05055.onclick = togg05055;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05056 = data[55];

    /*Récupere les données que je veut de la Commune */
    name_05056 = rows05056.Libellé_géographique;
    Pop_05056 = rows05056.Population_en_2017;
    Pop_017_05056 = rows05056.Pop_017_ans_2017;
    Pop_mediane_vote_05056 = rows05056.Popu_possible_voté;
    nbr_inscrit_05056 = rows05056.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05056').textContent = name_05056;
   
    let com_05056 = document.getElementById("f-path-05056");
    let list_05056 = document.getElementById("list_05056");


    function togg05056() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05056-01').classList.remove('visible')
        document.querySelector('#polar-chart_05056-01').classList.remove('visible')
        document.querySelector('#polar-chart_05056-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05056').classList.remove('visible')
        document.querySelector('#f-path-05056').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05056
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05056
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05056
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05056
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05056
    }
    com_05056.onclick = togg05056;
    list_05056.onclick = togg05056;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05057 = data[56];

    /*Récupere les données que je veut de la Commune */
    name_05057 = rows05057.Libellé_géographique;
    Pop_05057 = rows05057.Population_en_2017;
    Pop_017_05057 = rows05057.Pop_017_ans_2017;
    Pop_mediane_vote_05057 = rows05057.Popu_possible_voté;
    nbr_inscrit_05057 = rows05057.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05057').textContent = name_05057;
   
    let com_05057 = document.getElementById("f-path-05057");
    let list_05057 = document.getElementById("list_05057");


    function togg05057() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05057-01').classList.remove('visible')
        document.querySelector('#polar-chart_05057-01').classList.remove('visible')
        document.querySelector('#polar-chart_05057-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05057').classList.remove('visible')
        document.querySelector('#f-path-05057').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05057
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05057
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05057
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05057
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05057
    }
    com_05057.onclick = togg05057;
    list_05057.onclick = togg05057;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05058 = data[57];

    /*Récupere les données que je veut de la Commune */
    name_05058 = rows05058.Libellé_géographique;
    Pop_05058 = rows05058.Population_en_2017;
    Pop_017_05058 = rows05058.Pop_017_ans_2017;
    Pop_mediane_vote_05058 = rows05058.Popu_possible_voté;
    nbr_inscrit_05058 = rows05058.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05058').textContent = name_05058;
   
    let com_05058 = document.getElementById("f-path-05058");
    let list_05058 = document.getElementById("list_05058");


    function togg05058() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05058-01').classList.remove('visible')
        document.querySelector('#polar-chart_05058-01').classList.remove('visible')
        document.querySelector('#polar-chart_05058-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05058').classList.remove('visible')
        document.querySelector('#f-path-05058').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05058
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05058
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05058
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05058
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05058
    }
    com_05058.onclick = togg05058;
    list_05058.onclick = togg05058;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05059 = data[58];

    /*Récupere les données que je veut de la Commune */
    name_05059 = rows05059.Libellé_géographique;
    Pop_05059 = rows05059.Population_en_2017;
    Pop_017_05059 = rows05059.Pop_017_ans_2017;
    Pop_mediane_vote_05059 = rows05059.Popu_possible_voté;
    nbr_inscrit_05059 = rows05059.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05059').textContent = name_05059;
   
    let com_05059 = document.getElementById("f-path-05059");
    let list_05059 = document.getElementById("list_05059");


    function togg05059() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05059-01').classList.remove('visible')
        document.querySelector('#polar-chart_05059-01').classList.remove('visible')
        document.querySelector('#polar-chart_05059-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05059').classList.remove('visible')
        document.querySelector('#f-path-05059').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05059
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05059
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05059
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05059
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05059
    }
    com_05059.onclick = togg05059;
    list_05059.onclick = togg05059;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05060 = data[59];

    /*Récupere les données que je veut de la Commune */
    name_05060 = rows05060.Libellé_géographique;
    Pop_05060 = rows05060.Population_en_2017;
    Pop_017_05060 = rows05060.Pop_017_ans_2017;
    Pop_mediane_vote_05060 = rows05060.Popu_possible_voté;
    nbr_inscrit_05060 = rows05060.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05060').textContent = name_05060;
   
    let com_05060 = document.getElementById("f-path-05060");
    let list_05060 = document.getElementById("list_05060");


    function togg05060() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05060-01').classList.remove('visible')
        document.querySelector('#polar-chart_05060-01').classList.remove('visible')
        document.querySelector('#polar-chart_05060-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05060').classList.remove('visible')
        document.querySelector('#f-path-05060').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05060
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05060
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05060
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05060
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05060
    }
    com_05060.onclick = togg05060;
    list_05060.onclick = togg05060;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05061 = data[60];

    /*Récupere les données que je veut de la Commune */
    name_05061 = rows05061.Libellé_géographique;
    Pop_05061 = rows05061.Population_en_2017;
    Pop_017_05061 = rows05061.Pop_017_ans_2017;
    Pop_mediane_vote_05061 = rows05061.Popu_possible_voté;
    nbr_inscrit_05061 = rows05061.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05061').textContent = name_05061;
   
    let com_05061 = document.getElementById("f-path-05061");
    let list_05061 = document.getElementById("list_05061");


    function togg05061() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05061-01').classList.remove('visible')
        document.querySelector('#polar-chart_05061-01').classList.remove('visible')
        document.querySelector('#polar-chart_05061-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05061').classList.remove('visible')
        document.querySelector('#f-path-05061').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05061
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05061
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05061
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05061
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05061
    }
    com_05061.onclick = togg05061;
    list_05061.onclick = togg05061;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05062 = data[61];

    /*Récupere les données que je veut de la Commune */
    name_05062 = rows05062.Libellé_géographique;
    Pop_05062 = rows05062.Population_en_2017;
    Pop_017_05062 = rows05062.Pop_017_ans_2017;
    Pop_mediane_vote_05062 = rows05062.Popu_possible_voté;
    nbr_inscrit_05062 = rows05062.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05062').textContent = name_05062;
   
    let com_05062 = document.getElementById("f-path-05062");
    let list_05062 = document.getElementById("list_05062");


    function togg05062() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05062-01').classList.remove('visible')
        document.querySelector('#polar-chart_05062-01').classList.remove('visible')
        document.querySelector('#polar-chart_05062-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05062').classList.remove('visible')
        document.querySelector('#f-path-05062').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05062
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05062
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05062
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05062
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05062
    }
    com_05062.onclick = togg05062;
    list_05062.onclick = togg05062;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05063 = data[62];

    /*Récupere les données que je veut de la Commune */
    name_05063 = rows05063.Libellé_géographique;
    Pop_05063 = rows05063.Population_en_2017;
    Pop_017_05063 = rows05063.Pop_017_ans_2017;
    Pop_mediane_vote_05063 = rows05063.Popu_possible_voté;
    nbr_inscrit_05063 = rows05063.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05063').textContent = name_05063;
   
    let com_05063 = document.getElementById("f-path-05063");
    let list_05063 = document.getElementById("list_05063");


    function togg05063() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05063-01').classList.remove('visible')
        document.querySelector('#polar-chart_05063-01').classList.remove('visible')
        document.querySelector('#polar-chart_05063-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05063').classList.remove('visible')
        document.querySelector('#f-path-05063').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05063
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05063
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05063
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05063
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05063
    }
    com_05063.onclick = togg05063;
    list_05063.onclick = togg05063;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05064 = data[63];

    /*Récupere les données que je veut de la Commune */
    name_05064 = rows05064.Libellé_géographique;
    Pop_05064 = rows05064.Population_en_2017;
    Pop_017_05064 = rows05064.Pop_017_ans_2017;
    Pop_mediane_vote_05064 = rows05064.Popu_possible_voté;
    nbr_inscrit_05064 = rows05064.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05064').textContent = name_05064;
   
    let com_05064 = document.getElementById("f-path-05064");
    let list_05064 = document.getElementById("list_05064");


    function togg05064() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05064-01').classList.remove('visible')
        document.querySelector('#polar-chart_05064-01').classList.remove('visible')
        document.querySelector('#polar-chart_05064-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05064').classList.remove('visible')
        document.querySelector('#f-path-05064').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05064
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05064
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05064
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05064
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05064
    }
    com_05064.onclick = togg05064;
    list_05064.onclick = togg05064;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05065 = data[64];

    /*Récupere les données que je veut de la Commune */
    name_05065 = rows05065.Libellé_géographique;
    Pop_05065 = rows05065.Population_en_2017;
    Pop_017_05065 = rows05065.Pop_017_ans_2017;
    Pop_mediane_vote_05065 = rows05065.Popu_possible_voté;
    nbr_inscrit_05065 = rows05065.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05065').textContent = name_05065;
   
    let com_05065 = document.getElementById("f-path-05065");
    let list_05065 = document.getElementById("list_05065");


    function togg05065() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05065-01').classList.remove('visible')
        document.querySelector('#polar-chart_05065-01').classList.remove('visible')
        document.querySelector('#polar-chart_05065-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05065').classList.remove('visible')
        document.querySelector('#f-path-05065').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05065
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05065
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05065
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05065
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05065
    }
    com_05065.onclick = togg05065;
    list_05065.onclick = togg05065;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05066 = data[65];

    /*Récupere les données que je veut de la Commune */
    name_05066 = rows05066.Libellé_géographique;
    Pop_05066 = rows05066.Population_en_2017;
    Pop_017_05066 = rows05066.Pop_017_ans_2017;
    Pop_mediane_vote_05066 = rows05066.Popu_possible_voté;
    nbr_inscrit_05066 = rows05066.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05066').textContent = name_05066;
   
    let com_05066 = document.getElementById("f-path-05066");
    let list_05066 = document.getElementById("list_05066");


    function togg05066() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05066-01').classList.remove('visible')
        document.querySelector('#polar-chart_05066-01').classList.remove('visible')
        document.querySelector('#polar-chart_05066-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05066').classList.remove('visible')
        document.querySelector('#f-path-05066').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05066
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05066
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05066
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05066
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05066
    }
    com_05066.onclick = togg05066;
    list_05066.onclick = togg05066;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05067 = data[66];

    /*Récupere les données que je veut de la Commune */
    name_05067 = rows05067.Libellé_géographique;
    Pop_05067 = rows05067.Population_en_2017;
    Pop_017_05067 = rows05067.Pop_017_ans_2017;
    Pop_mediane_vote_05067 = rows05067.Popu_possible_voté;
    nbr_inscrit_05067 = rows05067.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05067').textContent = name_05067;
   
    let com_05067 = document.getElementById("f-path-05067");
    let list_05067 = document.getElementById("list_05067");


    function togg05067() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05067-01').classList.remove('visible')
        document.querySelector('#polar-chart_05067-01').classList.remove('visible')
        document.querySelector('#polar-chart_05067-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05067').classList.remove('visible')
        document.querySelector('#f-path-05067').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05067
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05067
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05067
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05067
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05067
    }
    com_05067.onclick = togg05067;
    list_05067.onclick = togg05067;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05068 = data[67];

    /*Récupere les données que je veut de la Commune */
    name_05068 = rows05068.Libellé_géographique;
    Pop_05068 = rows05068.Population_en_2017;
    Pop_017_05068 = rows05068.Pop_017_ans_2017;
    Pop_mediane_vote_05068 = rows05068.Popu_possible_voté;
    nbr_inscrit_05068 = rows05068.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05068').textContent = name_05068;
   
    let com_05068 = document.getElementById("f-path-05068");
    let list_05068 = document.getElementById("list_05068");


    function togg05068() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05068-01').classList.remove('visible')
        document.querySelector('#polar-chart_05068-01').classList.remove('visible')
        document.querySelector('#polar-chart_05068-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05068').classList.remove('visible')
        document.querySelector('#f-path-05068').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05068
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05068
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05068
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05068
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05068
    }
    com_05068.onclick = togg05068;
    list_05068.onclick = togg05068;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05069 = data[68];

    /*Récupere les données que je veut de la Commune */
    name_05069 = rows05069.Libellé_géographique;
    Pop_05069 = rows05069.Population_en_2017;
    Pop_017_05069 = rows05069.Pop_017_ans_2017;
    Pop_mediane_vote_05069 = rows05069.Popu_possible_voté;
    nbr_inscrit_05069 = rows05069.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05069').textContent = name_05069;
   
    let com_05069 = document.getElementById("f-path-05069");
    let list_05069 = document.getElementById("list_05069");


    function togg05069() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05069-01').classList.remove('visible')
        document.querySelector('#polar-chart_05069-01').classList.remove('visible')
        document.querySelector('#polar-chart_05069-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05069').classList.remove('visible')
        document.querySelector('#f-path-05069').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05069
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05069
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05069
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05069
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05069
    }
    com_05069.onclick = togg05069;
    list_05069.onclick = togg05069;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05070 = data[69];

    /*Récupere les données que je veut de la Commune */
    name_05070 = rows05070.Libellé_géographique;
    Pop_05070 = rows05070.Population_en_2017;
    Pop_017_05070 = rows05070.Pop_017_ans_2017;
    Pop_mediane_vote_05070 = rows05070.Popu_possible_voté;
    nbr_inscrit_05070 = rows05070.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05070').textContent = name_05070;
   
    let com_05070 = document.getElementById("f-path-05070");
    let list_05070 = document.getElementById("list_05070");


    function togg05070() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05070-01').classList.remove('visible')
        document.querySelector('#polar-chart_05070-01').classList.remove('visible')
        document.querySelector('#polar-chart_05070-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05070').classList.remove('visible')
        document.querySelector('#f-path-05070').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05070
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05070
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05070
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05070
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05070
    }
    com_05070.onclick = togg05070;
    list_05070.onclick = togg05070;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05071 = data[70];

    /*Récupere les données que je veut de la Commune */
    name_05071 = rows05071.Libellé_géographique;
    Pop_05071 = rows05071.Population_en_2017;
    Pop_017_05071 = rows05071.Pop_017_ans_2017;
    Pop_mediane_vote_05071 = rows05071.Popu_possible_voté;
    nbr_inscrit_05071 = rows05071.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05071').textContent = name_05071;
   
    let com_05071 = document.getElementById("f-path-05071");
    let list_05071 = document.getElementById("list_05071");


    function togg05071() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05071-01').classList.remove('visible')
        document.querySelector('#polar-chart_05071-01').classList.remove('visible')
        document.querySelector('#polar-chart_05071-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05071').classList.remove('visible')
        document.querySelector('#f-path-05071').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05071
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05071
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05071
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05071
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05071
    }
    com_05071.onclick = togg05071;
    list_05071.onclick = togg05071;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05072 = data[71];

    /*Récupere les données que je veut de la Commune */
    name_05072 = rows05072.Libellé_géographique;
    Pop_05072 = rows05072.Population_en_2017;
    Pop_017_05072 = rows05072.Pop_017_ans_2017;
    Pop_mediane_vote_05072 = rows05072.Popu_possible_voté;
    nbr_inscrit_05072 = rows05072.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05072').textContent = name_05072;
   
    let com_05072 = document.getElementById("f-path-05072");
    let list_05072 = document.getElementById("list_05072");


    function togg05072() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05072-01').classList.remove('visible')
        document.querySelector('#polar-chart_05072-01').classList.remove('visible')
        document.querySelector('#polar-chart_05072-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05072').classList.remove('visible')
        document.querySelector('#f-path-05072').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05072
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05072
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05072
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05072
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05072
    }
    com_05072.onclick = togg05072;
    list_05072.onclick = togg05072;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05073 = data[72];

    /*Récupere les données que je veut de la Commune */
    name_05073 = rows05073.Libellé_géographique;
    Pop_05073 = rows05073.Population_en_2017;
    Pop_017_05073 = rows05073.Pop_017_ans_2017;
    Pop_mediane_vote_05073 = rows05073.Popu_possible_voté;
    nbr_inscrit_05073 = rows05073.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05073').textContent = name_05073;
   
    let com_05073 = document.getElementById("f-path-05073");
    let list_05073 = document.getElementById("list_05073");


    function togg05073() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05073-01').classList.remove('visible')
        document.querySelector('#polar-chart_05073-01').classList.remove('visible')
        document.querySelector('#polar-chart_05073-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05073').classList.remove('visible')
        document.querySelector('#f-path-05073').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05073
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05073
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05073
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05073
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05073
    }
    com_05073.onclick = togg05073;
    list_05073.onclick = togg05073;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05074 = data[73];

    /*Récupere les données que je veut de la Commune */
    name_05074 = rows05074.Libellé_géographique;
    Pop_05074 = rows05074.Population_en_2017;
    Pop_017_05074 = rows05074.Pop_017_ans_2017;
    Pop_mediane_vote_05074 = rows05074.Popu_possible_voté;
    nbr_inscrit_05074 = rows05074.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05074').textContent = name_05074;
   
    let com_05074 = document.getElementById("f-path-05074");
    let list_05074 = document.getElementById("list_05074");


    function togg05074() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05074-01').classList.remove('visible')
        document.querySelector('#polar-chart_05074-01').classList.remove('visible')
        document.querySelector('#polar-chart_05074-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05074').classList.remove('visible')
        document.querySelector('#f-path-05074').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05074
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05074
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05074
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05074
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05074
    }
    com_05074.onclick = togg05074;
    list_05074.onclick = togg05074;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05075 = data[74];

    /*Récupere les données que je veut de la Commune */
    name_05075 = rows05075.Libellé_géographique;
    Pop_05075 = rows05075.Population_en_2017;
    Pop_017_05075 = rows05075.Pop_017_ans_2017;
    Pop_mediane_vote_05075 = rows05075.Popu_possible_voté;
    nbr_inscrit_05075 = rows05075.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05075').textContent = name_05075;
   
    let com_05075 = document.getElementById("f-path-05075");
    let list_05075 = document.getElementById("list_05075");


    function togg05075() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05075-01').classList.remove('visible')
        document.querySelector('#polar-chart_05075-01').classList.remove('visible')
        document.querySelector('#polar-chart_05075-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05075').classList.remove('visible')
        document.querySelector('#f-path-05075').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05075
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05075
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05075
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05075
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05075
    }
    com_05075.onclick = togg05075;
    list_05075.onclick = togg05075;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05076 = data[75];

    /*Récupere les données que je veut de la Commune */
    name_05076 = rows05076.Libellé_géographique;
    Pop_05076 = rows05076.Population_en_2017;
    Pop_017_05076 = rows05076.Pop_017_ans_2017;
    Pop_mediane_vote_05076 = rows05076.Popu_possible_voté;
    nbr_inscrit_05076 = rows05076.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05076').textContent = name_05076;
   
    let com_05076 = document.getElementById("f-path-05076");
    let list_05076 = document.getElementById("list_05076");


    function togg05076() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05076-01').classList.remove('visible')
        document.querySelector('#polar-chart_05076-01').classList.remove('visible')
        document.querySelector('#polar-chart_05076-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05076').classList.remove('visible')
        document.querySelector('#f-path-05076').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05076
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05076
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05076
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05076
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05076
    }
    com_05076.onclick = togg05076;
    list_05076.onclick = togg05076;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05077 = data[76];

    /*Récupere les données que je veut de la Commune */
    name_05077 = rows05077.Libellé_géographique;
    Pop_05077 = rows05077.Population_en_2017;
    Pop_017_05077 = rows05077.Pop_017_ans_2017;
    Pop_mediane_vote_05077 = rows05077.Popu_possible_voté;
    nbr_inscrit_05077 = rows05077.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05077').textContent = name_05077;
   
    let com_05077 = document.getElementById("f-path-05077");
    let list_05077 = document.getElementById("list_05077");


    function togg05077() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05077-01').classList.remove('visible')
        document.querySelector('#polar-chart_05077-01').classList.remove('visible')
        document.querySelector('#polar-chart_05077-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05077').classList.remove('visible')
        document.querySelector('#f-path-05077').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05077
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05077
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05077
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05077
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05077
    }
    com_05077.onclick = togg05077;
    list_05077.onclick = togg05077;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05078 = data[77];

    /*Récupere les données que je veut de la Commune */
    name_05078 = rows05078.Libellé_géographique;
    Pop_05078 = rows05078.Population_en_2017;
    Pop_017_05078 = rows05078.Pop_017_ans_2017;
    Pop_mediane_vote_05078 = rows05078.Popu_possible_voté;
    nbr_inscrit_05078 = rows05078.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05078').textContent = name_05078;
   
    let com_05078 = document.getElementById("f-path-05078");
    let list_05078 = document.getElementById("list_05078");


    function togg05078() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05078-01').classList.remove('visible')
        document.querySelector('#polar-chart_05078-01').classList.remove('visible')
        document.querySelector('#polar-chart_05078-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05078').classList.remove('visible')
        document.querySelector('#f-path-05078').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05078
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05078
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05078
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05078
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05078
    }
    com_05078.onclick = togg05078;
    list_05078.onclick = togg05078;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05079 = data[78];

    /*Récupere les données que je veut de la Commune */
    name_05079 = rows05079.Libellé_géographique;
    Pop_05079 = rows05079.Population_en_2017;
    Pop_017_05079 = rows05079.Pop_017_ans_2017;
    Pop_mediane_vote_05079 = rows05079.Popu_possible_voté;
    nbr_inscrit_05079 = rows05079.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05079').textContent = name_05079;
   
    let com_05079 = document.getElementById("f-path-05079");
    let list_05079 = document.getElementById("list_05079");


    function togg05079() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05079-01').classList.remove('visible')
        document.querySelector('#polar-chart_05079-01').classList.remove('visible')
        document.querySelector('#polar-chart_05079-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05079').classList.remove('visible')
        document.querySelector('#f-path-05079').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05079
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05079
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05079
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05079
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05079
    }
    com_05079.onclick = togg05079;
    list_05079.onclick = togg05079;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05080 = data[79];

    /*Récupere les données que je veut de la Commune */
    name_05080 = rows05080.Libellé_géographique;
    Pop_05080 = rows05080.Population_en_2017;
    Pop_017_05080 = rows05080.Pop_017_ans_2017;
    Pop_mediane_vote_05080 = rows05080.Popu_possible_voté;
    nbr_inscrit_05080 = rows05080.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05080').textContent = name_05080;
   
    let com_05080 = document.getElementById("f-path-05080");
    let list_05080 = document.getElementById("list_05080");


    function togg05080() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05080-01').classList.remove('visible')
        document.querySelector('#polar-chart_05080-01').classList.remove('visible')
        document.querySelector('#polar-chart_05080-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05080').classList.remove('visible')
        document.querySelector('#f-path-05080').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05080
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05080
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05080
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05080
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05080
    }
    com_05080.onclick = togg05080;
    list_05080.onclick = togg05080;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05081 = data[80];

    /*Récupere les données que je veut de la Commune */
    name_05081 = rows05081.Libellé_géographique;
    Pop_05081 = rows05081.Population_en_2017;
    Pop_017_05081 = rows05081.Pop_017_ans_2017;
    Pop_mediane_vote_05081 = rows05081.Popu_possible_voté;
    nbr_inscrit_05081 = rows05081.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05081').textContent = name_05081;
   
    let com_05081 = document.getElementById("f-path-05081");
    let list_05081 = document.getElementById("list_05081");


    function togg05081() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05081-01').classList.remove('visible')
        document.querySelector('#polar-chart_05081-01').classList.remove('visible')
        document.querySelector('#polar-chart_05081-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05081').classList.remove('visible')
        document.querySelector('#f-path-05081').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05081
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05081
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05081
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05081
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05081
    }
    com_05081.onclick = togg05081;
    list_05081.onclick = togg05081;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05082 = data[81];

    /*Récupere les données que je veut de la Commune */
    name_05082 = rows05082.Libellé_géographique;
    Pop_05082 = rows05082.Population_en_2017;
    Pop_017_05082 = rows05082.Pop_017_ans_2017;
    Pop_mediane_vote_05082 = rows05082.Popu_possible_voté;
    nbr_inscrit_05082 = rows05082.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05082').textContent = name_05082;
   
    let com_05082 = document.getElementById("f-path-05082");
    let list_05082 = document.getElementById("list_05082");


    function togg05082() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05082-01').classList.remove('visible')
        document.querySelector('#polar-chart_05082-01').classList.remove('visible')
        document.querySelector('#polar-chart_05082-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05082').classList.remove('visible')
        document.querySelector('#f-path-05082').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05082
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05082
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05082
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05082
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05082
    }
    com_05082.onclick = togg05082;
    list_05082.onclick = togg05082;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05083 = data[82];

    /*Récupere les données que je veut de la Commune */
    name_05083 = rows05083.Libellé_géographique;
    Pop_05083 = rows05083.Population_en_2017;
    Pop_017_05083 = rows05083.Pop_017_ans_2017;
    Pop_mediane_vote_05083 = rows05083.Popu_possible_voté;
    nbr_inscrit_05083 = rows05083.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05083').textContent = name_05083;
   
    let com_05083 = document.getElementById("f-path-05083");
    let list_05083 = document.getElementById("list_05083");


    function togg05083() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05083-01').classList.remove('visible')
        document.querySelector('#polar-chart_05083-01').classList.remove('visible')
        document.querySelector('#polar-chart_05083-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05083').classList.remove('visible')
        document.querySelector('#f-path-05083').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05083
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05083
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05083
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05083
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05083
    }
    com_05083.onclick = togg05083;
    list_05083.onclick = togg05083;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05084 = data[83];

    /*Récupere les données que je veut de la Commune */
    name_05084 = rows05084.Libellé_géographique;
    Pop_05084 = rows05084.Population_en_2017;
    Pop_017_05084 = rows05084.Pop_017_ans_2017;
    Pop_mediane_vote_05084 = rows05084.Popu_possible_voté;
    nbr_inscrit_05084 = rows05084.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05084').textContent = name_05084;
   
    let com_05084 = document.getElementById("f-path-05084");
    let list_05084 = document.getElementById("list_05084");


    function togg05084() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05084-01').classList.remove('visible')
        document.querySelector('#polar-chart_05084-01').classList.remove('visible')
        document.querySelector('#polar-chart_05084-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05084').classList.remove('visible')
        document.querySelector('#f-path-05084').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05084
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05084
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05084
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05084
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05084
    }
    com_05084.onclick = togg05084;
    list_05084.onclick = togg05084;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05085 = data[84];

    /*Récupere les données que je veut de la Commune */
    name_05085 = rows05085.Libellé_géographique;
    Pop_05085 = rows05085.Population_en_2017;
    Pop_017_05085 = rows05085.Pop_017_ans_2017;
    Pop_mediane_vote_05085 = rows05085.Popu_possible_voté;
    nbr_inscrit_05085 = rows05085.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05085').textContent = name_05085;
   
    let com_05085 = document.getElementById("f-path-05085");
    let list_05085 = document.getElementById("list_05085");


    function togg05085() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05085-01').classList.remove('visible')
        document.querySelector('#polar-chart_05085-01').classList.remove('visible')
        document.querySelector('#polar-chart_05085-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05085').classList.remove('visible')
        document.querySelector('#f-path-05085').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05085
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05085
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05085
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05085
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05085
    }
    com_05085.onclick = togg05085;
    list_05085.onclick = togg05085;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05086 = data[85];

    /*Récupere les données que je veut de la Commune */
    name_05086 = rows05086.Libellé_géographique;
    Pop_05086 = rows05086.Population_en_2017;
    Pop_017_05086 = rows05086.Pop_017_ans_2017;
    Pop_mediane_vote_05086 = rows05086.Popu_possible_voté;
    nbr_inscrit_05086 = rows05086.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05086').textContent = name_05086;
   
    let com_05086 = document.getElementById("f-path-05086");
    let list_05086 = document.getElementById("list_05086");


    function togg05086() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05086-01').classList.remove('visible')
        document.querySelector('#polar-chart_05086-01').classList.remove('visible')
        document.querySelector('#polar-chart_05086-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05086').classList.remove('visible')
        document.querySelector('#f-path-05086').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05086
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05086
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05086
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05086
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05086
    }
    com_05086.onclick = togg05086;
    list_05086.onclick = togg05086;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05087 = data[86];

    /*Récupere les données que je veut de la Commune */
    name_05087 = rows05087.Libellé_géographique;
    Pop_05087 = rows05087.Population_en_2017;
    Pop_017_05087 = rows05087.Pop_017_ans_2017;
    Pop_mediane_vote_05087 = rows05087.Popu_possible_voté;
    nbr_inscrit_05087 = rows05087.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05087').textContent = name_05087;
   
    let com_05087 = document.getElementById("f-path-05087");
    let list_05087 = document.getElementById("list_05087");


    function togg05087() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05087-01').classList.remove('visible')
        document.querySelector('#polar-chart_05087-01').classList.remove('visible')
        document.querySelector('#polar-chart_05087-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05087').classList.remove('visible')
        document.querySelector('#f-path-05087').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05087
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05087
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05087
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05087
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05087
    }
    com_05087.onclick = togg05087;
    list_05087.onclick = togg05087;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05088 = data[87];

    /*Récupere les données que je veut de la Commune */
    name_05088 = rows05088.Libellé_géographique;
    Pop_05088 = rows05088.Population_en_2017;
    Pop_017_05088 = rows05088.Pop_017_ans_2017;
    Pop_mediane_vote_05088 = rows05088.Popu_possible_voté;
    nbr_inscrit_05088 = rows05088.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05088').textContent = name_05088;
   
    let com_05088 = document.getElementById("f-path-05088");
    let list_05088 = document.getElementById("list_05088");


    function togg05088() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05088-01').classList.remove('visible')
        document.querySelector('#polar-chart_05088-01').classList.remove('visible')
        document.querySelector('#polar-chart_05088-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05088').classList.remove('visible')
        document.querySelector('#f-path-05088').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05088
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05088
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05088
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05088
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05088
    }
    com_05088.onclick = togg05088;
    list_05088.onclick = togg05088;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05089 = data[88];

    /*Récupere les données que je veut de la Commune */
    name_05089 = rows05089.Libellé_géographique;
    Pop_05089 = rows05089.Population_en_2017;
    Pop_017_05089 = rows05089.Pop_017_ans_2017;
    Pop_mediane_vote_05089 = rows05089.Popu_possible_voté;
    nbr_inscrit_05089 = rows05089.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05089').textContent = name_05089;
   
    let com_05089 = document.getElementById("f-path-05089");
    let list_05089 = document.getElementById("list_05089");


    function togg05089() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05089-01').classList.remove('visible')
        document.querySelector('#polar-chart_05089-01').classList.remove('visible')
        document.querySelector('#polar-chart_05089-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05089').classList.remove('visible')
        document.querySelector('#f-path-05089').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05089
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05089
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05089
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05089
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05089
    }
    com_05089.onclick = togg05089;
    list_05089.onclick = togg05089;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05090 = data[89];

    /*Récupere les données que je veut de la Commune */
    name_05090 = rows05090.Libellé_géographique;
    Pop_05090 = rows05090.Population_en_2017;
    Pop_017_05090 = rows05090.Pop_017_ans_2017;
    Pop_mediane_vote_05090 = rows05090.Popu_possible_voté;
    nbr_inscrit_05090 = rows05090.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05090').textContent = name_05090;
   
    let com_05090 = document.getElementById("f-path-05090");
    let list_05090 = document.getElementById("list_05090");


    function togg05090() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05090-01').classList.remove('visible')
        document.querySelector('#polar-chart_05090-01').classList.remove('visible')
        document.querySelector('#polar-chart_05090-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05090').classList.remove('visible')
        document.querySelector('#f-path-05090').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05090
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05090
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05090
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05090
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05090
    }
    com_05090.onclick = togg05090;
    list_05090.onclick = togg05090;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05091 = data[90];

    /*Récupere les données que je veut de la Commune */
    name_05091 = rows05091.Libellé_géographique;
    Pop_05091 = rows05091.Population_en_2017;
    Pop_017_05091 = rows05091.Pop_017_ans_2017;
    Pop_mediane_vote_05091 = rows05091.Popu_possible_voté;
    nbr_inscrit_05091 = rows05091.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05091').textContent = name_05091;
   
    let com_05091 = document.getElementById("f-path-05091");
    let list_05091 = document.getElementById("list_05091");


    function togg05091() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05091-01').classList.remove('visible')
        document.querySelector('#polar-chart_05091-01').classList.remove('visible')
        document.querySelector('#polar-chart_05091-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05091').classList.remove('visible')
        document.querySelector('#f-path-05091').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05091
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05091
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05091
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05091
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05091
    }
    com_05091.onclick = togg05091;
    list_05091.onclick = togg05091;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05092 = data[91];

    /*Récupere les données que je veut de la Commune */
    name_05092 = rows05092.Libellé_géographique;
    Pop_05092 = rows05092.Population_en_2017;
    Pop_017_05092 = rows05092.Pop_017_ans_2017;
    Pop_mediane_vote_05092 = rows05092.Popu_possible_voté;
    nbr_inscrit_05092 = rows05092.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05092').textContent = name_05092;
   
    let com_05092 = document.getElementById("f-path-05092");
    let list_05092 = document.getElementById("list_05092");


    function togg05092() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05092-01').classList.remove('visible')
        document.querySelector('#polar-chart_05092-01').classList.remove('visible')
        document.querySelector('#polar-chart_05092-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05092').classList.remove('visible')
        document.querySelector('#f-path-05092').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05092
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05092
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05092
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05092
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05092
    }
    com_05092.onclick = togg05092;
    list_05092.onclick = togg05092;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05093 = data[92];

    /*Récupere les données que je veut de la Commune */
    name_05093 = rows05093.Libellé_géographique;
    Pop_05093 = rows05093.Population_en_2017;
    Pop_017_05093 = rows05093.Pop_017_ans_2017;
    Pop_mediane_vote_05093 = rows05093.Popu_possible_voté;
    nbr_inscrit_05093 = rows05093.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05093').textContent = name_05093;
   
    let com_05093 = document.getElementById("f-path-05093");
    let list_05093 = document.getElementById("list_05093");


    function togg05093() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05093-01').classList.remove('visible')
        document.querySelector('#polar-chart_05093-01').classList.remove('visible')
        document.querySelector('#polar-chart_05093-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05093').classList.remove('visible')
        document.querySelector('#f-path-05093').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05093
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05093
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05093
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05093
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05093
    }
    com_05093.onclick = togg05093;
    list_05093.onclick = togg05093;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05094 = data[93];

    /*Récupere les données que je veut de la Commune */
    name_05094 = rows05094.Libellé_géographique;
    Pop_05094 = rows05094.Population_en_2017;
    Pop_017_05094 = rows05094.Pop_017_ans_2017;
    Pop_mediane_vote_05094 = rows05094.Popu_possible_voté;
    nbr_inscrit_05094 = rows05094.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05094').textContent = name_05094;
   
    let com_05094 = document.getElementById("f-path-05094");
    let list_05094 = document.getElementById("list_05094");


    function togg05094() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05094-01').classList.remove('visible')
        document.querySelector('#polar-chart_05094-01').classList.remove('visible')
        document.querySelector('#polar-chart_05094-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05094').classList.remove('visible')
        document.querySelector('#f-path-05094').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05094
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05094
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05094
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05094
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05094
    }
    com_05094.onclick = togg05094;
    list_05094.onclick = togg05094;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05095 = data[94];

    /*Récupere les données que je veut de la Commune */
    name_05095 = rows05095.Libellé_géographique;
    Pop_05095 = rows05095.Population_en_2017;
    Pop_017_05095 = rows05095.Pop_017_ans_2017;
    Pop_mediane_vote_05095 = rows05095.Popu_possible_voté;
    nbr_inscrit_05095 = rows05095.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05095').textContent = name_05095;
   
    let com_05095 = document.getElementById("f-path-05095");
    let list_05095 = document.getElementById("list_05095");


    function togg05095() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05095-01').classList.remove('visible')
        document.querySelector('#polar-chart_05095-01').classList.remove('visible')
        document.querySelector('#polar-chart_05095-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05095').classList.remove('visible')
        document.querySelector('#f-path-05095').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05095
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05095
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05095
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05095
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05095
    }
    com_05095.onclick = togg05095;
    list_05095.onclick = togg05095;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05096 = data[95];

    /*Récupere les données que je veut de la Commune */
    name_05096 = rows05096.Libellé_géographique;
    Pop_05096 = rows05096.Population_en_2017;
    Pop_017_05096 = rows05096.Pop_017_ans_2017;
    Pop_mediane_vote_05096 = rows05096.Popu_possible_voté;
    nbr_inscrit_05096 = rows05096.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05096').textContent = name_05096;
   
    let com_05096 = document.getElementById("f-path-05096");
    let list_05096 = document.getElementById("list_05096");


    function togg05096() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05096-01').classList.remove('visible')
        document.querySelector('#polar-chart_05096-01').classList.remove('visible')
        document.querySelector('#polar-chart_05096-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05096').classList.remove('visible')
        document.querySelector('#f-path-05096').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05096
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05096
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05096
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05096
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05096
    }
    com_05096.onclick = togg05096;
    list_05096.onclick = togg05096;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05097 = data[96];

    /*Récupere les données que je veut de la Commune */
    name_05097 = rows05097.Libellé_géographique;
    Pop_05097 = rows05097.Population_en_2017;
    Pop_017_05097 = rows05097.Pop_017_ans_2017;
    Pop_mediane_vote_05097 = rows05097.Popu_possible_voté;
    nbr_inscrit_05097 = rows05097.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05097').textContent = name_05097;
   
    let com_05097 = document.getElementById("f-path-05097");
    let list_05097 = document.getElementById("list_05097");


    function togg05097() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05097-01').classList.remove('visible')
        document.querySelector('#polar-chart_05097-01').classList.remove('visible')
        document.querySelector('#polar-chart_05097-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05097').classList.remove('visible')
        document.querySelector('#f-path-05097').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05097
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05097
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05097
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05097
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05097
    }
    com_05097.onclick = togg05097;
    list_05097.onclick = togg05097;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05098 = data[97];

    /*Récupere les données que je veut de la Commune */
    name_05098 = rows05098.Libellé_géographique;
    Pop_05098 = rows05098.Population_en_2017;
    Pop_017_05098 = rows05098.Pop_017_ans_2017;
    Pop_mediane_vote_05098 = rows05098.Popu_possible_voté;
    nbr_inscrit_05098 = rows05098.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05098').textContent = name_05098;
   
    let com_05098 = document.getElementById("f-path-05098");
    let list_05098 = document.getElementById("list_05098");


    function togg05098() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05098-01').classList.remove('visible')
        document.querySelector('#polar-chart_05098-01').classList.remove('visible')
        document.querySelector('#polar-chart_05098-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05098').classList.remove('visible')
        document.querySelector('#f-path-05098').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05098
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05098
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05098
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05098
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05098
    }
    com_05098.onclick = togg05098;
    list_05098.onclick = togg05098;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05099 = data[98];

    /*Récupere les données que je veut de la Commune */
    name_05099 = rows05099.Libellé_géographique;
    Pop_05099 = rows05099.Population_en_2017;
    Pop_017_05099 = rows05099.Pop_017_ans_2017;
    Pop_mediane_vote_05099 = rows05099.Popu_possible_voté;
    nbr_inscrit_05099 = rows05099.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05099').textContent = name_05099;
   
    let com_05099 = document.getElementById("f-path-05099");
    let list_05099 = document.getElementById("list_05099");


    function togg05099() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05099-01').classList.remove('visible')
        document.querySelector('#polar-chart_05099-01').classList.remove('visible')
        document.querySelector('#polar-chart_05099-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05099').classList.remove('visible')
        document.querySelector('#f-path-05099').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05099
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05099
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05099
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05099
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05099
    }
    com_05099.onclick = togg05099;
    list_05099.onclick = togg05099;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05100 = data[99];

    /*Récupere les données que je veut de la Commune */
    name_05100 = rows05100.Libellé_géographique;
    Pop_05100 = rows05100.Population_en_2017;
    Pop_017_05100 = rows05100.Pop_017_ans_2017;
    Pop_mediane_vote_05100 = rows05100.Popu_possible_voté;
    nbr_inscrit_05100 = rows05100.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05100').textContent = name_05100;
   
    let com_05100 = document.getElementById("f-path-05100");
    let list_05100 = document.getElementById("list_05100");


    function togg05100() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05100-01').classList.remove('visible')
        document.querySelector('#polar-chart_05100-01').classList.remove('visible')
        document.querySelector('#polar-chart_05100-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05100').classList.remove('visible')
        document.querySelector('#f-path-05100').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05100
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05100
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05100
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05100
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05100
    }
    com_05100.onclick = togg05100;
    list_05100.onclick = togg05100;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05101 = data[100];
    /*Récupere les données que je veut de la Commune */
    name_05101 = rows05101.Libellé_géographique;
    Pop_05101 = rows05101.Population_en_2017;
    Pop_017_05101 = rows05101.Pop_017_ans_2017;
    Pop_mediane_vote_05101 = rows05101.Popu_possible_voté;
    nbr_inscrit_05101 = rows05101.Inscrits;
    /*Pose dans le Menu*/
    document.querySelector('#list_05101').textContent = name_05101;
/*--------------------------------------------------------------------------*/
    var body = document.querySelector('#body')
    var path = document.querySelector('#map01')
    /******************************************************************** */
    let com_05101 = document.getElementById("f-path-05101");
    let list_05101 = document.getElementById("list_05101");
    function togg05101() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05101-01').classList.remove('visible')
        document.querySelector('#polar-chart_05101-01').classList.remove('visible')
        document.querySelector('#polar-chart_05101-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05101').classList.remove('visible')
        document.querySelector('#f-path-05101').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05101
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05101
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05101
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05101
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05101
    }
    com_05101.onclick = togg05101;
    list_05101.onclick = togg05101;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05102 = data[101];
    /*Récupere les données que je veut de la Commune */
    name_05102 = rows05102.Libellé_géographique;
    Pop_05102 = rows05102.Population_en_2017;
    Pop_017_05102 = rows05102.Pop_017_ans_2017;
    Pop_mediane_vote_05102 = rows05102.Popu_possible_voté;
    nbr_inscrit_05102 = rows05102.Inscrits;  
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05102').textContent = name_05102;
/*--------------------------------------------------------------------------*/
    let com_05102 = document.getElementById("f-path-05102");
    let list_05102 = document.getElementById("list_05102");
    /******************************************************************** */
    function togg05102() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05102-01').classList.remove('visible')
        document.querySelector('#polar-chart_05102-01').classList.remove('visible')
        document.querySelector('#polar-chart_05102-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05102').classList.remove('visible')
        document.querySelector('#f-path-05102').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05102;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05102
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05102
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05102
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05102
    }
    com_05102.onclick = togg05102;
    list_05102.onclick = togg05102;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05103 = data[102];
    /*Récupere les données que je veut de la Commune */
    name_05103 = rows05103.Libellé_géographique;
    Pop_05103 = rows05103.Population_en_2017;
    Pop_017_05103 = rows05103.Pop_017_ans_2017;
    Pop_mediane_vote_05103 = rows05103.Popu_possible_voté;
    nbr_inscrit_05103 = rows05103.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05103').textContent = name_05103;
    let com_05103 = document.getElementById("f-path-05103");
    let list_05103 = document.getElementById("list_05103");
    function togg05103() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05103-01').classList.remove('visible')
        document.querySelector('#polar-chart_05103-01').classList.remove('visible')
        document.querySelector('#polar-chart_05103-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05103').classList.remove('visible')
        document.querySelector('#f-path-05103').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05103;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05103
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05103
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05103
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05103
    }
    com_05103.onclick = togg05103;
    list_05103.onclick = togg05103;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05104 = data[103];
    /*Récupere les données que je veut de la Commune */
    name_05104 = rows05104.Libellé_géographique;
    Pop_05104 = rows05104.Population_en_2017;
    Pop_017_05104 = rows05104.Pop_017_ans_2017;
    Pop_mediane_vote_05104 = rows05104.Popu_possible_voté;
    nbr_inscrit_05104 = rows05104.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05104').textContent = name_05104;
    let com_05104 = document.getElementById("f-path-05104");
    let list_05104 = document.getElementById("list_05104");
    function togg05104() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05104-01').classList.remove('visible')
        document.querySelector('#polar-chart_05104-01').classList.remove('visible')
        document.querySelector('#polar-chart_05104-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05104').classList.remove('visible')
        document.querySelector('#f-path-05104').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05104;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05104
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05104
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05104
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05104
    }
    com_05104.onclick = togg05104;
    list_05104.onclick = togg05104;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05105 = data[104];
    /*Récupere les données que je veut de la Commune */
    name_05105 = rows05105.Libellé_géographique;
    Pop_05105 = rows05105.Population_en_2017;
    Pop_017_05105 = rows05105.Pop_017_ans_2017;
    Pop_mediane_vote_05105 = rows05105.Popu_possible_voté;
    nbr_inscrit_05105 = rows05105.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05105').textContent = name_05105;
    let com_05105 = document.getElementById("f-path-05105");
    let list_05105 = document.getElementById("list_05105");
    function togg05105() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05105-01').classList.remove('visible')
        document.querySelector('#polar-chart_05105-01').classList.remove('visible')
        document.querySelector('#polar-chart_05105-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05105').classList.remove('visible')
        document.querySelector('#f-path-05105').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05105
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05105
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05105
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05105
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05105
    }
    com_05105.onclick = togg05105;
    list_05105.onclick = togg05105;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05106 = data[105];
    /*Récupere les données que je veut de la Commune */
    name_05106 = rows05106.Libellé_géographique;
    Pop_05106 = rows05106.Population_en_2017;
    Pop_017_05106 = rows05106.Pop_017_ans_2017;
    Pop_mediane_vote_05106 = rows05106.Popu_possible_voté;
    nbr_inscrit_05106 = rows05106.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05106').textContent = name_05106;
    let com_05106 = document.getElementById("f-path-05106");
    let list_05106 = document.getElementById("list_05106");
    function togg05106() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05106-01').classList.remove('visible')
        document.querySelector('#polar-chart_05106-01').classList.remove('visible')
        document.querySelector('#polar-chart_05106-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05106').classList.remove('visible')
        document.querySelector('#f-path-05106').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05106
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05106
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05106
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05106
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05106
    }
    com_05106.onclick = togg05106;
    list_05106.onclick = togg05106;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05107 = data[106];
    /*Récupere les données que je veut de la Commune */
    name_05107 = rows05107.Libellé_géographique;
    Pop_05107 = rows05107.Population_en_2017;
    Pop_017_05107 = rows05107.Pop_017_ans_2017;
    Pop_mediane_vote_05107 = rows05107.Popu_possible_voté;
    nbr_inscrit_05107 = rows05107.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05107').textContent = name_05107; 
    let com_05107 = document.getElementById("f-path-05107");
    let list_05107 = document.getElementById("list_05107");
    function togg05107() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05107-01').classList.remove('visible')
        document.querySelector('#polar-chart_05107-01').classList.remove('visible')
        document.querySelector('#polar-chart_05107-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05107').classList.remove('visible')
        document.querySelector('#f-path-05107').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05107
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05107
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05107
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05107
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05107
    }
    com_05107.onclick = togg05107;
    list_05107.onclick = togg05107;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05108 = data[107];
    
    /*Récupere les données que je veut de la Commune */
    name_05108 = rows05108.Libellé_géographique;
    Pop_05108 = rows05108.Population_en_2017;
    Pop_017_05108 = rows05108.Pop_017_ans_2017;
    Pop_mediane_vote_05108 = rows05108.Popu_possible_voté;
    nbr_inscrit_05108 = rows05108.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05108').textContent = name_05108;
   
    let com_05108 = document.getElementById("f-path-05108");
    let list_05108 = document.getElementById("list_05108");


    function togg05108() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05108-01').classList.remove('visible')
        document.querySelector('#polar-chart_05108-01').classList.remove('visible')
        document.querySelector('#polar-chart_05108-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05108').classList.remove('visible')
        document.querySelector('#f-path-05108').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05108
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05108
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05108
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05108
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05108
    }
    com_05108.onclick = togg05108;
    list_05108.onclick = togg05108;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05109 = data[108];
    
    /*Récupere les données que je veut de la Commune */
    name_05109 = rows05109.Libellé_géographique;
    Pop_05109 = rows05109.Population_en_2017;
    Pop_017_05109 = rows05109.Pop_017_ans_2017;
    Pop_mediane_vote_05109 = rows05109.Popu_possible_voté;
    nbr_inscrit_05109 = rows05109.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05109').textContent = name_05109;

    let com_05109 = document.getElementById("f-path-05109");
    let list_05109 = document.getElementById("list_05109");


    function togg05109() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05109-01').classList.remove('visible')
        document.querySelector('#polar-chart_05109-01').classList.remove('visible')
        document.querySelector('#polar-chart_05109-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05109').classList.remove('visible')
        document.querySelector('#f-path-05109').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05109
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05109
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05109
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05109
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05109
    }
    com_05109.onclick = togg05109;
    list_05109.onclick = togg05109;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05110 = data[109];
 
    /*Récupere les données que je veut de la Commune */
    name_05110 = rows05110.Libellé_géographique;
    Pop_05110 = rows05110.Population_en_2017;
    Pop_017_05110 = rows05110.Pop_017_ans_2017;
    Pop_mediane_vote_05110 = rows05110.Popu_possible_voté;
    nbr_inscrit_05110 = rows05110.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05110').textContent = name_05110;

    let com_05110 = document.getElementById("f-path-05110");
    let list_05110 = document.getElementById("list_05110");


    function togg05110() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05110-01').classList.remove('visible')
        document.querySelector('#polar-chart_05110-01').classList.remove('visible')
        document.querySelector('#polar-chart_05110-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05110').classList.remove('visible')
        document.querySelector('#f-path-05110').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05110
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05110
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05110
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05110
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05110
    }
    com_05110.onclick = togg05110;
    list_05110.onclick = togg05110;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05111 = data[110];

    /*Récupere les données que je veut de la Commune */
    name_05111 = rows05111.Libellé_géographique;
    Pop_05111 = rows05111.Population_en_2017;
    Pop_017_05111 = rows05111.Pop_017_ans_2017;
    Pop_mediane_vote_05111 = rows05111.Popu_possible_voté;
    nbr_inscrit_05111 = rows05111.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05111').textContent = name_05111;
   
    let com_05111 = document.getElementById("f-path-05111");
    let list_05111 = document.getElementById("list_05111");


    function togg05111() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05111-01').classList.remove('visible')
        document.querySelector('#polar-chart_05111-01').classList.remove('visible')
        document.querySelector('#polar-chart_05111-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05111').classList.remove('visible')
        document.querySelector('#f-path-05111').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05111
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05111
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05111
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05111
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05111
    }
    com_05111.onclick = togg05111;
    list_05111.onclick = togg05111;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05112 = data[111];

    /*Récupere les données que je veut de la Commune */
    name_05112 = rows05112.Libellé_géographique;
    Pop_05112 = rows05112.Population_en_2017;
    Pop_017_05112 = rows05112.Pop_017_ans_2017;
    Pop_mediane_vote_05112 = rows05112.Popu_possible_voté;
    nbr_inscrit_05112 = rows05112.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05112').textContent = name_05112;
   
    let com_05112 = document.getElementById("f-path-05112");
    let list_05112 = document.getElementById("list_05112");


    function togg05112() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05112-01').classList.remove('visible')
        document.querySelector('#polar-chart_05112-01').classList.remove('visible')
        document.querySelector('#polar-chart_05112-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05112').classList.remove('visible')
        document.querySelector('#f-path-05112').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05112
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05112
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05112
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05112
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05112
    }
    com_05112.onclick = togg05112;
    list_05112.onclick = togg05112;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05113 = data[112];

    /*Récupere les données que je veut de la Commune */
    name_05113 = rows05113.Libellé_géographique;
    Pop_05113 = rows05113.Population_en_2017;
    Pop_017_05113 = rows05113.Pop_017_ans_2017;
    Pop_mediane_vote_05113 = rows05113.Popu_possible_voté;
    nbr_inscrit_05113 = rows05113.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05113').textContent = name_05113;
   
    let com_05113 = document.getElementById("f-path-05113");
    let list_05113 = document.getElementById("list_05113");


    function togg05113() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05113-01').classList.remove('visible')
        document.querySelector('#polar-chart_05113-01').classList.remove('visible')
        document.querySelector('#polar-chart_05113-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05113').classList.remove('visible')
        document.querySelector('#f-path-05113').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05113
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05113
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05113
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05113
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05113
    }
    com_05113.onclick = togg05113;
    list_05113.onclick = togg05113;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05114 = data[113];

    /*Récupere les données que je veut de la Commune */
    name_05114 = rows05114.Libellé_géographique;
    Pop_05114 = rows05114.Population_en_2017;
    Pop_017_05114 = rows05114.Pop_017_ans_2017;
    Pop_mediane_vote_05114 = rows05114.Popu_possible_voté;
    nbr_inscrit_05114 = rows05114.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05114').textContent = name_05114;
   
    let com_05114 = document.getElementById("f-path-05114");
    let list_05114 = document.getElementById("list_05114");


    function togg05114() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05114-01').classList.remove('visible')
        document.querySelector('#polar-chart_05114-01').classList.remove('visible')
        document.querySelector('#polar-chart_05114-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05114').classList.remove('visible')
        document.querySelector('#f-path-05114').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05114
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05114
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05114
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05114
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05114
    }
    com_05114.onclick = togg05114;
    list_05114.onclick = togg05114;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05115 = data[114];

    /*Récupere les données que je veut de la Commune */
    name_05115 = rows05115.Libellé_géographique;
    Pop_05115 = rows05115.Population_en_2017;
    Pop_017_05115 = rows05115.Pop_017_ans_2017;
    Pop_mediane_vote_05115 = rows05115.Popu_possible_voté;
    nbr_inscrit_05115 = rows05115.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05115').textContent = name_05115;
   
    let com_05115 = document.getElementById("f-path-05115");
    let list_05115 = document.getElementById("list_05115");


    function togg05115() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05115-01').classList.remove('visible')
        document.querySelector('#polar-chart_05115-01').classList.remove('visible')
        document.querySelector('#polar-chart_05115-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05115').classList.remove('visible')
        document.querySelector('#f-path-05115').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05115
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05115
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05115
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05115
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05115
    }
    com_05115.onclick = togg05115;
    list_05115.onclick = togg05115;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05116 = data[115];

    /*Récupere les données que je veut de la Commune */
    name_05116 = rows05116.Libellé_géographique;
    Pop_05116 = rows05116.Population_en_2017;
    Pop_017_05116 = rows05116.Pop_017_ans_2017;
    Pop_mediane_vote_05116 = rows05116.Popu_possible_voté;
    nbr_inscrit_05116 = rows05116.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05116').textContent = name_05116;
   
    let com_05116 = document.getElementById("f-path-05116");
    let list_05116 = document.getElementById("list_05116");


    function togg05116() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05116-01').classList.remove('visible')
        document.querySelector('#polar-chart_05116-01').classList.remove('visible')
        document.querySelector('#polar-chart_05116-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05116').classList.remove('visible')
        document.querySelector('#f-path-05116').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05116
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05116
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05116
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05116
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05116
    }
    com_05116.onclick = togg05116;
    list_05116.onclick = togg05116;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05117 = data[116];

    /*Récupere les données que je veut de la Commune */
    name_05117 = rows05117.Libellé_géographique;
    Pop_05117 = rows05117.Population_en_2017;
    Pop_017_05117 = rows05117.Pop_017_ans_2017;
    Pop_mediane_vote_05117 = rows05117.Popu_possible_voté;
    nbr_inscrit_05117 = rows05117.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05117').textContent = name_05117;
   
    let com_05117 = document.getElementById("f-path-05117");
    let list_05117 = document.getElementById("list_05117");


    function togg05117() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05117-01').classList.remove('visible')
        document.querySelector('#polar-chart_05117-01').classList.remove('visible')
        document.querySelector('#polar-chart_05117-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05117').classList.remove('visible')
        document.querySelector('#f-path-05117').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05117
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05117
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05117
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05117
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05117
    }
    com_05117.onclick = togg05117;
    list_05117.onclick = togg05117;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05118 = data[117];

    /*Récupere les données que je veut de la Commune */
    name_05118 = rows05118.Libellé_géographique;
    Pop_05118 = rows05118.Population_en_2017;
    Pop_017_05118 = rows05118.Pop_017_ans_2017;
    Pop_mediane_vote_05118 = rows05117.Popu_possible_voté;
    nbr_inscrit_05118 = rows05118.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05118').textContent = name_05118;
   
    let com_05118 = document.getElementById("f-path-05118");
    let list_05118 = document.getElementById("list_05118");


    function togg05118() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05118-01').classList.remove('visible')
        document.querySelector('#polar-chart_05118-01').classList.remove('visible')
        document.querySelector('#polar-chart_05118-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05118').classList.remove('visible')
        document.querySelector('#f-path-05118').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05118
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05118
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05118
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05118
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05118
    }
    com_05118.onclick = togg05118;
    list_05118.onclick = togg05118;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05119 = data[118];

    /*Récupere les données que je veut de la Commune */
    name_05119 = rows05119.Libellé_géographique;
    Pop_05119 = rows05119.Population_en_2017;
    Pop_017_05119 = rows05119.Pop_017_ans_2017;
    Pop_mediane_vote_05119 = rows05119.Popu_possible_voté;
    nbr_inscrit_05119 = rows05119.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05119').textContent = name_05119;
   
    let com_05119 = document.getElementById("f-path-05119");
    let list_05119 = document.getElementById("list_05119");


    function togg05119() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05119-01').classList.remove('visible')
        document.querySelector('#polar-chart_05119-01').classList.remove('visible')
        document.querySelector('#polar-chart_05119-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05119').classList.remove('visible')
        document.querySelector('#f-path-05119').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05119
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05119
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05119
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05119
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05119
    }
    com_05119.onclick = togg05119;
    list_05119.onclick = togg05119;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05120 = data[119];

    /*Récupere les données que je veut de la Commune */
    name_05120 = rows05120.Libellé_géographique;
    Pop_05120 = rows05120.Population_en_2017;
    Pop_017_05120 = rows05120.Pop_017_ans_2017;
    Pop_mediane_vote_05120 = rows05120.Popu_possible_voté;
    nbr_inscrit_05120 = rows05120.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05120').textContent = name_05120;
   
    let com_05120 = document.getElementById("f-path-05120");
    let list_05120 = document.getElementById("list_05120");


    function togg05120() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05120-01').classList.remove('visible')
        document.querySelector('#polar-chart_05120-01').classList.remove('visible')
        document.querySelector('#polar-chart_05120-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05120').classList.remove('visible')
        document.querySelector('#f-path-05120').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05120
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05120
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05120
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05120
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05120
    }
    com_05120.onclick = togg05120;
    list_05120.onclick = togg05120;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05121 = data[120];

    /*Récupere les données que je veut de la Commune */
    name_05121 = rows05121.Libellé_géographique;
    Pop_05121 = rows05121.Population_en_2017;
    Pop_017_05121 = rows05121.Pop_017_ans_2017;
    Pop_mediane_vote_05121 = rows05121.Popu_possible_voté;
    nbr_inscrit_05121 = rows05121.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05121').textContent = name_05121;
   
    let com_05121 = document.getElementById("f-path-05121");
    let list_05121 = document.getElementById("list_05121");


    function togg05121() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05121-01').classList.remove('visible')
        document.querySelector('#polar-chart_05121-01').classList.remove('visible')
        document.querySelector('#polar-chart_05121-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05121').classList.remove('visible')
        document.querySelector('#f-path-05121').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05121
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05121
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05121
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05121
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05121
    }
    com_05121.onclick = togg05121;
    list_05121.onclick = togg05121;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05122 = data[121];

    /*Récupere les données que je veut de la Commune */
    name_05122 = rows05122.Libellé_géographique;
    Pop_05122 = rows05122.Population_en_2017;
    Pop_017_05122 = rows05122.Pop_017_ans_2017;
    Pop_mediane_vote_05122 = rows05122.Popu_possible_voté;
    nbr_inscrit_05122 = rows05122.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05122').textContent = name_05122;
   
    let com_05122 = document.getElementById("f-path-05122");
    let list_05122 = document.getElementById("list_05122");


    function togg05122() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05122-01').classList.remove('visible')
        document.querySelector('#polar-chart_05122-01').classList.remove('visible')
        document.querySelector('#polar-chart_05122-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05122').classList.remove('visible')
        document.querySelector('#f-path-05122').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05122
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05122
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05122
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05122
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05122
    }
    com_05122.onclick = togg05122;
    list_05122.onclick = togg05122;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05123 = data[122];

    /*Récupere les données que je veut de la Commune */
    name_05123 = rows05123.Libellé_géographique;
    Pop_05123 = rows05123.Population_en_2017;
    Pop_017_05123 = rows05123.Pop_017_ans_2017;
    Pop_mediane_vote_05123 = rows05123.Popu_possible_voté;
    nbr_inscrit_05123 = rows05123.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05123').textContent = name_05123;
   
    let com_05123 = document.getElementById("f-path-05123");
    let list_05123 = document.getElementById("list_05123");


    function togg05123() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05123-01').classList.remove('visible')
        document.querySelector('#polar-chart_05123-01').classList.remove('visible')
        document.querySelector('#polar-chart_05123-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05123').classList.remove('visible')
        document.querySelector('#f-path-05123').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05123
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05123
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05123
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05123
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05123
    }
    com_05123.onclick = togg05123;
    list_05123.onclick = togg05123;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05124 = data[123];

    /*Récupere les données que je veut de la Commune */
    name_05124 = rows05124.Libellé_géographique;
    Pop_05124 = rows05124.Population_en_2017;
    Pop_017_05124 = rows05124.Pop_017_ans_2017;
    Pop_mediane_vote_05124 = rows05124.Popu_possible_voté;
    nbr_inscrit_05124 = rows05124.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05124').textContent = name_05124;
   
    let com_05124 = document.getElementById("f-path-05124");
    let list_05124 = document.getElementById("list_05124");


    function togg05124() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05124-01').classList.remove('visible')
        document.querySelector('#polar-chart_05124-01').classList.remove('visible')
        document.querySelector('#polar-chart_05124-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05124').classList.remove('visible')
        document.querySelector('#f-path-05124').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05124
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05124
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05124
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05124
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05124
    }
    com_05124.onclick = togg05124;
    list_05124.onclick = togg05124;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05125 = data[124];

    /*Récupere les données que je veut de la Commune */
    name_05125 = rows05125.Libellé_géographique;
    Pop_05125 = rows05125.Population_en_2017;
    Pop_017_05125 = rows05125.Pop_017_ans_2017;
    Pop_mediane_vote_05125 = rows05125.Popu_possible_voté;
    nbr_inscrit_05125 = rows05125.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05125').textContent = name_05125;
   
    let com_05125 = document.getElementById("f-path-05125");
    let list_05125 = document.getElementById("list_05125");


    function togg05125() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05125-01').classList.remove('visible')
        document.querySelector('#polar-chart_05125-01').classList.remove('visible')
        document.querySelector('#polar-chart_05125-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05125').classList.remove('visible')
        document.querySelector('#f-path-05125').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05125
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05125
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05125
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05125
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05125
    }
    com_05125.onclick = togg05125;
    list_05125.onclick = togg05125;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05126 = data[125];

    /*Récupere les données que je veut de la Commune */
    name_05126 = rows05126.Libellé_géographique;
    Pop_05126 = rows05126.Population_en_2017;
    Pop_017_05126 = rows05126.Pop_017_ans_2017;
    Pop_mediane_vote_05126 = rows05126.Popu_possible_voté;
    nbr_inscrit_05126 = rows05126.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05126').textContent = name_05126;
   
    let com_05126 = document.getElementById("f-path-05126");
    let list_05126 = document.getElementById("list_05126");


    function togg05126() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05126-01').classList.remove('visible')
        document.querySelector('#polar-chart_05126-01').classList.remove('visible')
        document.querySelector('#polar-chart_05126-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05126').classList.remove('visible')
        document.querySelector('#f-path-05126').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05126
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05126
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05126
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05126
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05126
    }
    com_05126.onclick = togg05126;
    list_05126.onclick = togg05126;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05127 = data[126];

    /*Récupere les données que je veut de la Commune */
    name_05127 = rows05127.Libellé_géographique;
    Pop_05127 = rows05127.Population_en_2017;
    Pop_017_05127 = rows05127.Pop_017_ans_2017;
    Pop_mediane_vote_05127 = rows05127.Popu_possible_voté;
    nbr_inscrit_05127 = rows05127.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05127').textContent = name_05127;
   
    let com_05127 = document.getElementById("f-path-05127");
    let list_05127 = document.getElementById("list_05127");


    function togg05127() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05127-01').classList.remove('visible')
        document.querySelector('#polar-chart_05127-01').classList.remove('visible')
        document.querySelector('#polar-chart_05127-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05127').classList.remove('visible')
        document.querySelector('#f-path-05127').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05127
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05127
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05127
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05127
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05127
    }
    com_05127.onclick = togg05127;
    list_05127.onclick = togg05127;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05128 = data[127];

    /*Récupere les données que je veut de la Commune */
    name_05128 = rows05128.Libellé_géographique;
    Pop_05128 = rows05128.Population_en_2017;
    Pop_017_05128 = rows05128.Pop_017_ans_2017;
    Pop_mediane_vote_05128 = rows05128.Popu_possible_voté;
    nbr_inscrit_05128 = rows05128.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05128').textContent = name_05128;
   
    let com_05128 = document.getElementById("f-path-05128");
    let list_05128 = document.getElementById("list_05128");


    function togg05128() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05128-01').classList.remove('visible')
        document.querySelector('#polar-chart_05128-01').classList.remove('visible')
        document.querySelector('#polar-chart_05128-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05128').classList.remove('visible')
        document.querySelector('#f-path-05128').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05128
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05128
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05128
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05128
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05128
    }
    com_05128.onclick = togg05128;
    list_05128.onclick = togg05128;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05129 = data[128];

    /*Récupere les données que je veut de la Commune */
    name_05129 = rows05129.Libellé_géographique;
    Pop_05129 = rows05129.Population_en_2017;
    Pop_017_05129 = rows05129.Pop_017_ans_2017;
    Pop_mediane_vote_05129 = rows05129.Popu_possible_voté;
    nbr_inscrit_05129 = rows05129.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05129').textContent = name_05129;
   
    let com_05129 = document.getElementById("f-path-05129");
    let list_05129 = document.getElementById("list_05129");


    function togg05129() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05129-01').classList.remove('visible')
        document.querySelector('#polar-chart_05129-01').classList.remove('visible')
        document.querySelector('#polar-chart_05129-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05129').classList.remove('visible')
        document.querySelector('#f-path-05129').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05129
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05129
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05129
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05129
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05129
    }
    com_05129.onclick = togg05129;
    list_05129.onclick = togg05129;
     /************************************************************************************* */
    /************************************************************************************* */
    const rows05130 = data[129];

    /*Récupere les données que je veut de la Commune */
    name_05130 = rows05130.Libellé_géographique;
    Pop_05130 = rows05130.Population_en_2017;
    Pop_017_05130 = rows05130.Pop_017_ans_2017;
    Pop_mediane_vote_05130 = rows05130.Popu_possible_voté;
    nbr_inscrit_05130 = rows05130.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05130').textContent = name_05130;
   
    let com_05130 = document.getElementById("f-path-05130");
    let list_05130 = document.getElementById("list_05130");


    function togg05130() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05130-01').classList.remove('visible')
        document.querySelector('#polar-chart_05130-01').classList.remove('visible')
        document.querySelector('#polar-chart_05130-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05130').classList.remove('visible')
        document.querySelector('#f-path-05130').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05130
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05130
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05130
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05130
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05130
    }
    com_05130.onclick = togg05130;
    list_05130.onclick = togg05130;
     /************************************************************************************* */
    /************************************************************************************* */
    const rows05131 = data[130];

    /*Récupere les données que je veut de la Commune */
    name_05131 = rows05131.Libellé_géographique;
    Pop_05131 = rows05131.Population_en_2017;
    Pop_017_05131 = rows05131.Pop_017_ans_2017;
    Pop_mediane_vote_05131 = rows05131.Popu_possible_voté;
    nbr_inscrit_05131 = rows05131.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05131').textContent = name_05131;
   
    let com_05131 = document.getElementById("f-path-05131");
    let list_05131 = document.getElementById("list_05131");


    function togg05131() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05131-01').classList.remove('visible')
        document.querySelector('#polar-chart_05131-01').classList.remove('visible')
        document.querySelector('#polar-chart_05131-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05131').classList.remove('visible')
        document.querySelector('#f-path-05131').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05131
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05131
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05131
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05131
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05131
    }
    com_05131.onclick = togg05131;
    list_05131.onclick = togg05131;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05132 = data[131];

    /*Récupere les données que je veut de la Commune */
    name_05132 = rows05132.Libellé_géographique;
    Pop_05132 = rows05132.Population_en_2017;
    Pop_017_05132 = rows05132.Pop_017_ans_2017;
    Pop_mediane_vote_05132 = rows05132.Popu_possible_voté;
    nbr_inscrit_05132 = rows05132.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05132').textContent = name_05132;
   
    let com_05132 = document.getElementById("f-path-05132");
    let list_05132 = document.getElementById("list_05132");


    function togg05132() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05132-01').classList.remove('visible')
        document.querySelector('#polar-chart_05132-01').classList.remove('visible')
        document.querySelector('#polar-chart_05132-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05132').classList.remove('visible')
        document.querySelector('#f-path-05132').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05132
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05132
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05132
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05132
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05132
    }
    com_05132.onclick = togg05132;
    list_05132.onclick = togg05132;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05133 = data[132];

    /*Récupere les données que je veut de la Commune */
    name_05133 = rows05133.Libellé_géographique;
    Pop_05133 = rows05133.Population_en_2017;
    Pop_017_05133 = rows05133.Pop_017_ans_2017;
    Pop_mediane_vote_05133 = rows05133.Popu_possible_voté;
    nbr_inscrit_05133 = rows05133.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05133').textContent = name_05133;
   
    let com_05133 = document.getElementById("f-path-05133");
    let list_05133 = document.getElementById("list_05133");


    function togg05133() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05133-01').classList.remove('visible')
        document.querySelector('#polar-chart_05133-01').classList.remove('visible')
        document.querySelector('#polar-chart_05133-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05133').classList.remove('visible')
        document.querySelector('#f-path-05133').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05133
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05133
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05133
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05133
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05133
    }
    com_05133.onclick = togg05133;
    list_05133.onclick = togg05133;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05134 = data[133];

    /*Récupere les données que je veut de la Commune */
    name_05134 = rows05134.Libellé_géographique;
    Pop_05134 = rows05134.Population_en_2017;
    Pop_017_05134 = rows05134.Pop_017_ans_2017;
    Pop_mediane_vote_05134 = rows05134.Popu_possible_voté;
    nbr_inscrit_05134 = rows05134.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05134').textContent = name_05134;
   
    let com_05134 = document.getElementById("f-path-05134");
    let list_05134 = document.getElementById("list_05134");


    function togg05134() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05134-01').classList.remove('visible')
        document.querySelector('#polar-chart_05134-01').classList.remove('visible')
        document.querySelector('#polar-chart_05134-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05134').classList.remove('visible')
        document.querySelector('#f-path-05134').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05134
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05134
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05134
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05134
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05134
    }
    com_05134.onclick = togg05134;
    list_05134.onclick = togg05134;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05135 = data[134];

    /*Récupere les données que je veut de la Commune */
    name_05135 = rows05135.Libellé_géographique;
    Pop_05135 = rows05135.Population_en_2017;
    Pop_017_05135 = rows05135.Pop_017_ans_2017;
    Pop_mediane_vote_05135 = rows05135.Popu_possible_voté;
    nbr_inscrit_05135 = rows05135.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05135').textContent = name_05135;
   
    let com_05135 = document.getElementById("f-path-05135");
    let list_05135 = document.getElementById("list_05135");


    function togg05135() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05135-01').classList.remove('visible')
        document.querySelector('#polar-chart_05135-01').classList.remove('visible')
        document.querySelector('#polar-chart_05135-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05135').classList.remove('visible')
        document.querySelector('#f-path-05135').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05135
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05135
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05135
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05135
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05135
    }
    com_05135.onclick = togg05135;
    list_05135.onclick = togg05135;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05136 = data[135];

    /*Récupere les données que je veut de la Commune */
    name_05136 = rows05136.Libellé_géographique;
    Pop_05136 = rows05136.Population_en_2017;
    Pop_017_05136 = rows05136.Pop_017_ans_2017;
    Pop_mediane_vote_05136 = rows05136.Popu_possible_voté;
    nbr_inscrit_05136 = rows05136.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05136').textContent = name_05136;
   
    let com_05136 = document.getElementById("f-path-05136");
    let list_05136 = document.getElementById("list_05136");


    function togg05136() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05136-01').classList.remove('visible')
        document.querySelector('#polar-chart_05136-01').classList.remove('visible')
        document.querySelector('#polar-chart_05136-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05136').classList.remove('visible')
        document.querySelector('#f-path-05136').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05136
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05136
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05136
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05136
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05136
    }
    com_05136.onclick = togg05136;
    list_05136.onclick = togg05136;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05137 = data[136];

    /*Récupere les données que je veut de la Commune */
    name_05137 = rows05137.Libellé_géographique;
    Pop_05137 = rows05137.Population_en_2017;
    Pop_017_05137 = rows05137.Pop_017_ans_2017;
    Pop_mediane_vote_05137 = rows05137.Popu_possible_voté;
    nbr_inscrit_05137 = rows05137.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05137').textContent = name_05137;
   
    let com_05137 = document.getElementById("f-path-05137");
    let list_05137 = document.getElementById("list_05137");


    function togg05137() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05137-01').classList.remove('visible')
        document.querySelector('#polar-chart_05137-01').classList.remove('visible')
        document.querySelector('#polar-chart_05167-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05137').classList.remove('visible')
        document.querySelector('#f-path-05137').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05137
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05137
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05137
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05137
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05137
    }
    com_05137.onclick = togg05137;
    list_05137.onclick = togg05137;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05138 = data[137];

    /*Récupere les données que je veut de la Commune */
    name_05138 = rows05138.Libellé_géographique;
    Pop_05138 = rows05138.Population_en_2017;
    Pop_017_05138 = rows05138.Pop_017_ans_2017;
    Pop_mediane_vote_05138 = rows05138.Popu_possible_voté;
    nbr_inscrit_05138 = rows05138.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05138').textContent = name_05138;
   
    let com_05138 = document.getElementById("f-path-05138");
    let list_05138 = document.getElementById("list_05138");


    function togg05138() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05138-01').classList.remove('visible')
        document.querySelector('#polar-chart_05138-01').classList.remove('visible')
        document.querySelector('#polar-chart_05168-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05138').classList.remove('visible')
        document.querySelector('#f-path-05138').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05138
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05138
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05138
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05138
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05138
    }
    com_05138.onclick = togg05138;
    list_05138.onclick = togg05138;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05139 = data[138];

    /*Récupere les données que je veut de la Commune */
    name_05139 = rows05139.Libellé_géographique;
    Pop_05139 = rows05139.Population_en_2017;
    Pop_017_05139 = rows05139.Pop_017_ans_2017;
    Pop_mediane_vote_05139 = rows05139.Popu_possible_voté;
    nbr_inscrit_05139 = rows05139.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05139').textContent = name_05139;
   
    let com_05139 = document.getElementById("f-path-05139");
    let list_05139 = document.getElementById("list_05139");


    function togg05139() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05139-01').classList.remove('visible')
        document.querySelector('#polar-chart_05139-01').classList.remove('visible')
        document.querySelector('#polar-chart_05169-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05139').classList.remove('visible')
        document.querySelector('#f-path-05139').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05139
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05139
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05139
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05139
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05139
    }
    com_05139.onclick = togg05139;
    list_05139.onclick = togg05139;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05140 = data[139];

    /*Récupere les données que je veut de la Commune */
    name_05140 = rows05140.Libellé_géographique;
    Pop_05140 = rows05140.Population_en_2017;
    Pop_017_05140 = rows05140.Pop_017_ans_2017;
    Pop_mediane_vote_05140 = rows05140.Popu_possible_voté;
    nbr_inscrit_05140 = rows05140.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05140').textContent = name_05140;
   
    let com_05140 = document.getElementById("f-path-05140");
    let list_05140 = document.getElementById("list_05140");


    function togg05140() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05140-01').classList.remove('visible')
        document.querySelector('#polar-chart_05140-01').classList.remove('visible')
        document.querySelector('#polar-chart_05140-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05140').classList.remove('visible')
        document.querySelector('#f-path-05140').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05140
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05140
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05140
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05140
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05140
    }
    com_05140.onclick = togg05140;
    list_05140.onclick = togg05140;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05141 = data[140];

    /*Récupere les données que je veut de la Commune */
    name_05141 = rows05141.Libellé_géographique;
    Pop_05141 = rows05141.Population_en_2017;
    Pop_017_05141 = rows05141.Pop_017_ans_2017;
    Pop_mediane_vote_05141 = rows05141.Popu_possible_voté;
    nbr_inscrit_05141 = rows05141.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05141').textContent = name_05141;
   
    let com_05141 = document.getElementById("f-path-05141");
    let list_05141 = document.getElementById("list_05141");


    function togg05141() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05141-01').classList.remove('visible')
        document.querySelector('#polar-chart_05141-01').classList.remove('visible')
        document.querySelector('#polar-chart_05141-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05141').classList.remove('visible')
        document.querySelector('#f-path-05141').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05141
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05141
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05141
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05141
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05141
    }
    com_05141.onclick = togg05141;
    list_05141.onclick = togg05141;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05142 = data[141];

    /*Récupere les données que je veut de la Commune */
    name_05142 = rows05142.Libellé_géographique;
    Pop_05142 = rows05142.Population_en_2017;
    Pop_017_05142 = rows05142.Pop_017_ans_2017;
    Pop_mediane_vote_05142 = rows05142.Popu_possible_voté;
    nbr_inscrit_05142 = rows05142.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05142').textContent = name_05142;
   
    let com_05142 = document.getElementById("f-path-05142");
    let list_05142 = document.getElementById("list_05142");


    function togg05142() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05142-01').classList.remove('visible')
        document.querySelector('#polar-chart_05142-01').classList.remove('visible')
        document.querySelector('#polar-chart_05142-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05142').classList.remove('visible')
        document.querySelector('#f-path-05142').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05142
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05142
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05142
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05142
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05142
    }
    com_05142.onclick = togg05142;
    list_05142.onclick = togg05142;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05143 = data[142];

    /*Récupere les données que je veut de la Commune */
    name_05143 = rows05143.Libellé_géographique;
    Pop_05143 = rows05143.Population_en_2017;
    Pop_017_05143 = rows05143.Pop_017_ans_2017;
    Pop_mediane_vote_05143 = rows05143.Popu_possible_voté;
    nbr_inscrit_05143 = rows05143.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05143').textContent = name_05143;
   
    let com_05143 = document.getElementById("f-path-05143");
    let list_05143 = document.getElementById("list_05143");


    function togg05143() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05143-01').classList.remove('visible')
        document.querySelector('#polar-chart_05143-01').classList.remove('visible')
        document.querySelector('#polar-chart_05143-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05143').classList.remove('visible')
        document.querySelector('#f-path-05143').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05143
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05143
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05143
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05143
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05143
    }
    com_05143.onclick = togg05143;
    list_05143.onclick = togg05143;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05144 = data[143];

    /*Récupere les données que je veut de la Commune */
    name_05144 = rows05144.Libellé_géographique;
    Pop_05144 = rows05144.Population_en_2017;
    Pop_017_05144 = rows05144.Pop_017_ans_2017;
    Pop_mediane_vote_05144 = rows05144.Popu_possible_voté;
    nbr_inscrit_05144 = rows05144.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05144').textContent = name_05144;
   
    let com_05144 = document.getElementById("f-path-05144");
    let list_05144 = document.getElementById("list_05144");


    function togg05144() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05144-01').classList.remove('visible')
        document.querySelector('#polar-chart_05144-01').classList.remove('visible')
        document.querySelector('#polar-chart_05144-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05144').classList.remove('visible')
        document.querySelector('#f-path-05144').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05144
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05144
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05144
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05144
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05144
    }
    com_05144.onclick = togg05144;
    list_05144.onclick = togg05144;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05145 = data[144];

    /*Récupere les données que je veut de la Commune */
    name_05145 = rows05145.Libellé_géographique;
    Pop_05145 = rows05145.Population_en_2017;
    Pop_017_05145 = rows05145.Pop_017_ans_2017;
    Pop_mediane_vote_05145 = rows05145.Popu_possible_voté;
    nbr_inscrit_05145 = rows05145.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05145').textContent = name_05145;
   
    let com_05145 = document.getElementById("f-path-05145");
    let list_05145 = document.getElementById("list_05145");


    function togg05145() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05145-01').classList.remove('visible')
        document.querySelector('#polar-chart_05145-01').classList.remove('visible')
        document.querySelector('#polar-chart_05145-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05145').classList.remove('visible')
        document.querySelector('#f-path-05145').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05145
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05145
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05145
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05145
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05145
    }
    com_05145.onclick = togg05145;
    list_05145.onclick = togg05145;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05146 = data[145];

    /*Récupere les données que je veut de la Commune */
    name_05146 = rows05146.Libellé_géographique;
    Pop_05146 = rows05146.Population_en_2017;
    Pop_017_05146 = rows05146.Pop_017_ans_2017;
    Pop_mediane_vote_05146 = rows05146.Popu_possible_voté;
    nbr_inscrit_05146 = rows05146.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05146').textContent = name_05146;
   
    let com_05146 = document.getElementById("f-path-05146");
    let list_05146 = document.getElementById("list_05146");


    function togg05146() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05146-01').classList.remove('visible')
        document.querySelector('#polar-chart_05146-01').classList.remove('visible')
        document.querySelector('#polar-chart_05146-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05146').classList.remove('visible')
        document.querySelector('#f-path-05146').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05146
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05146
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05146
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05146
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05146
    }
    com_05146.onclick = togg05146;
    list_05146.onclick = togg05146;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05147 = data[146];

    /*Récupere les données que je veut de la Commune */
    name_05147 = rows05147.Libellé_géographique;
    Pop_05147 = rows05147.Population_en_2017;
    Pop_017_05147 = rows05147.Pop_017_ans_2017;
    Pop_mediane_vote_05147 = rows05147.Popu_possible_voté;
    nbr_inscrit_05147 = rows05147.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05147').textContent = name_05147;
   
    let com_05147 = document.getElementById("f-path-05147");
    let list_05147 = document.getElementById("list_05147");


    function togg05147() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05147-01').classList.remove('visible')
        document.querySelector('#polar-chart_05147-01').classList.remove('visible')
        document.querySelector('#polar-chart_05147-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05147').classList.remove('visible')
        document.querySelector('#f-path-05147').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05147
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05147
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05147
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05147
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05147
    }
    com_05147.onclick = togg05147;
    list_05147.onclick = togg05147;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05148 = data[147];

    /*Récupere les données que je veut de la Commune */
    name_05148 = rows05148.Libellé_géographique;
    Pop_05148 = rows05148.Population_en_2017;
    Pop_017_05148 = rows05148.Pop_017_ans_2017;
    Pop_mediane_vote_05148 = rows05148.Popu_possible_voté;
    nbr_inscrit_05148 = rows05148.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05148').textContent = name_05148;
   
    let com_05148 = document.getElementById("f-path-05148");
    let list_05148 = document.getElementById("list_05148");


    function togg05148() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05148-01').classList.remove('visible')
        document.querySelector('#polar-chart_05148-01').classList.remove('visible')
        document.querySelector('#polar-chart_05148-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05148').classList.remove('visible')
        document.querySelector('#f-path-05148').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05148
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05148
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05148
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05148
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05148
    }
    com_05148.onclick = togg05148;
    list_05148.onclick = togg05148;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05149 = data[148];

    /*Récupere les données que je veut de la Commune */
    name_05149 = rows05149.Libellé_géographique;
    Pop_05149 = rows05149.Population_en_2017;
    Pop_017_05149 = rows05149.Pop_017_ans_2017;
    Pop_mediane_vote_05149 = rows05149.Popu_possible_voté;
    nbr_inscrit_05149 = rows05149.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05149').textContent = name_05149;
   
    let com_05149 = document.getElementById("f-path-05149");
    let list_05149 = document.getElementById("list_05149");


    function togg05149() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05149-01').classList.remove('visible')
        document.querySelector('#polar-chart_05149-01').classList.remove('visible')
        document.querySelector('#polar-chart_05149-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05149').classList.remove('visible')
        document.querySelector('#f-path-05149').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05149
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05149
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05149
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05149
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05149
    }
    com_05149.onclick = togg05149;
    list_05149.onclick = togg05149;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05150 = data[149];

    /*Récupere les données que je veut de la Commune */
    name_05150 = rows05150.Libellé_géographique;
    Pop_05150 = rows05150.Population_en_2017;
    Pop_017_05150 = rows05150.Pop_017_ans_2017;
    Pop_mediane_vote_05150 = rows05150.Popu_possible_voté;
    nbr_inscrit_05150 = rows05150.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05150').textContent = name_05150;
   
    let com_05150 = document.getElementById("f-path-05150");
    let list_05150 = document.getElementById("list_05150");


    function togg05150() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05150-01').classList.remove('visible')
        document.querySelector('#polar-chart_05150-01').classList.remove('visible')
        document.querySelector('#polar-chart_05150-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05150').classList.remove('visible')
        document.querySelector('#f-path-05150').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05150
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05150
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05150
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05150
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05150
    }
    com_05150.onclick = togg05150;
    list_05150.onclick = togg05150;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05151 = data[150];

    /*Récupere les données que je veut de la Commune */
    name_05151 = rows05151.Libellé_géographique;
    Pop_05151 = rows05151.Population_en_2017;
    Pop_017_05151 = rows05151.Pop_017_ans_2017;
    Pop_mediane_vote_05151 = rows05151.Popu_possible_voté;
    nbr_inscrit_05151 = rows05151.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05151').textContent = name_05151;
   
    let com_05151 = document.getElementById("f-path-05151");
    let list_05151 = document.getElementById("list_05151");


    function togg05151() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05151-01').classList.remove('visible')
        document.querySelector('#polar-chart_05151-01').classList.remove('visible')
        document.querySelector('#polar-chart_05151-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05151').classList.remove('visible')
        document.querySelector('#f-path-05151').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05151
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05151
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05151
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05151
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05151
    }
    com_05151.onclick = togg05151;
    list_05151.onclick = togg05151;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05152 = data[151];

    /*Récupere les données que je veut de la Commune */
    name_05152 = rows05152.Libellé_géographique;
    Pop_05152 = rows05152.Population_en_2017;
    Pop_017_05152 = rows05152.Pop_017_ans_2017;
    Pop_mediane_vote_05152 = rows05152.Popu_possible_voté;
    nbr_inscrit_05152 = rows05152.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05152').textContent = name_05152;
   
    let com_05152 = document.getElementById("f-path-05152");
    let list_05152 = document.getElementById("list_05152");


    function togg05152() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05152-01').classList.remove('visible')
        document.querySelector('#polar-chart_05152-01').classList.remove('visible')
        document.querySelector('#polar-chart_05152-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05152').classList.remove('visible')
        document.querySelector('#f-path-05152').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05152
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05152
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05152
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05152
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05152
    }
    com_05152.onclick = togg05152;
    list_05152.onclick = togg05152;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05153 = data[152];

    /*Récupere les données que je veut de la Commune */
    name_05153 = rows05153.Libellé_géographique;
    Pop_05153 = rows05153.Population_en_2017;
    Pop_017_05153 = rows05153.Pop_017_ans_2017;
    Pop_mediane_vote_05153 = rows05153.Popu_possible_voté;
    nbr_inscrit_05153 = rows05153.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05153').textContent = name_05153;
   
    let com_05153 = document.getElementById("f-path-05153");
    let list_05153 = document.getElementById("list_05153");


    function togg05153() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05153-01').classList.remove('visible')
        document.querySelector('#polar-chart_05153-01').classList.remove('visible')
        document.querySelector('#polar-chart_05153-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05153').classList.remove('visible')
        document.querySelector('#f-path-05153').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05153
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05153
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05153
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05153
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05153
    }
    com_05153.onclick = togg05153;
    list_05153.onclick = togg05153;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05154 = data[153];

    /*Récupere les données que je veut de la Commune */
    name_05154 = rows05154.Libellé_géographique;
    Pop_05154 = rows05154.Population_en_2017;
    Pop_017_05154 = rows05154.Pop_017_ans_2017;
    Pop_mediane_vote_05154 = rows05154.Popu_possible_voté;
    nbr_inscrit_05154 = rows05154.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05154').textContent = name_05154;
   
    let com_05154 = document.getElementById("f-path-05154");
    let list_05154 = document.getElementById("list_05154");


    function togg05154() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05154-01').classList.remove('visible')
        document.querySelector('#polar-chart_05154-01').classList.remove('visible')
        document.querySelector('#polar-chart_05154-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05154').classList.remove('visible')
        document.querySelector('#f-path-05154').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05154
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05154
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05154
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05154
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05154
    }
    com_05154.onclick = togg05154;
    list_05154.onclick = togg05154;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05155 = data[154];

    /*Récupere les données que je veut de la Commune */
    name_05155 = rows05155.Libellé_géographique;
    Pop_05155 = rows05155.Population_en_2017;
    Pop_017_05155 = rows05155.Pop_017_ans_2017;
    Pop_mediane_vote_05155 = rows05155.Popu_possible_voté;
    nbr_inscrit_05155 = rows05155.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05155').textContent = name_05155;
   
    let com_05155 = document.getElementById("f-path-05155");
    let list_05155 = document.getElementById("list_05155");


    function togg05155() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05155-01').classList.remove('visible')
        document.querySelector('#polar-chart_05155-01').classList.remove('visible')
        document.querySelector('#polar-chart_05155-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05155').classList.remove('visible')
        document.querySelector('#f-path-05155').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05155
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05155
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05155
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05155
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05155
    }
    com_05155.onclick = togg05155;
    list_05155.onclick = togg05155;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05156 = data[155];

    /*Récupere les données que je veut de la Commune */
    name_05156 = rows05156.Libellé_géographique;
    Pop_05156 = rows05156.Population_en_2017;
    Pop_017_05156 = rows05156.Pop_017_ans_2017;
    Pop_mediane_vote_05156 = rows05156.Popu_possible_voté;
    nbr_inscrit_05156 = rows05156.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05156').textContent = name_05156;
   
    let com_05156 = document.getElementById("f-path-05156");
    let list_05156 = document.getElementById("list_05156");


    function togg05156() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05156-01').classList.remove('visible')
        document.querySelector('#polar-chart_05156-01').classList.remove('visible')
        document.querySelector('#polar-chart_05156-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05156').classList.remove('visible')
        document.querySelector('#f-path-05156').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05156
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05156
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05156
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05156
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05156
    }
    com_05156.onclick = togg05156;
    list_05156.onclick = togg05156;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05157 = data[156];

    /*Récupere les données que je veut de la Commune */
    name_05157 = rows05157.Libellé_géographique;
    Pop_05157 = rows05157.Population_en_2017;
    Pop_017_05157 = rows05157.Pop_017_ans_2017;
    Pop_mediane_vote_05157 = rows05157.Popu_possible_voté;
    nbr_inscrit_05157 = rows05157.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05157').textContent = name_05157;
   
    let com_05157 = document.getElementById("f-path-05157");
    let list_05157 = document.getElementById("list_05157");


    function togg05157() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05157-01').classList.remove('visible')
        document.querySelector('#polar-chart_05157-01').classList.remove('visible')
        document.querySelector('#polar-chart_05157-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05157').classList.remove('visible')
        document.querySelector('#f-path-05157').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05157
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05157
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05157
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05157
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05157
    }
    com_05157.onclick = togg05157;
    list_05157.onclick = togg05157;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05158 = data[157];

    /*Récupere les données que je veut de la Commune */
    name_05158 = rows05158.Libellé_géographique;
    Pop_05158 = rows05158.Population_en_2017;
    Pop_017_05158 = rows05158.Pop_017_ans_2017;
    Pop_mediane_vote_05158 = rows05158.Popu_possible_voté;
    nbr_inscrit_05158 = rows05158.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05158').textContent = name_05158;
   
    let com_05158 = document.getElementById("f-path-05158");
    let list_05158 = document.getElementById("list_05158");


    function togg05158() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05158-01').classList.remove('visible')
        document.querySelector('#polar-chart_05158-01').classList.remove('visible')
        document.querySelector('#polar-chart_05158-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05158').classList.remove('visible')
        document.querySelector('#f-path-05158').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05158
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05158
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05158
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05158
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05158
    }
    com_05158.onclick = togg05158;
    list_05158.onclick = togg05158;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05159 = data[158];

    /*Récupere les données que je veut de la Commune */
    name_05159 = rows05159.Libellé_géographique;
    Pop_05159 = rows05159.Population_en_2017;
    Pop_017_05159 = rows05159.Pop_017_ans_2017;
    Pop_mediane_vote_05159 = rows05159.Popu_possible_voté;
    nbr_inscrit_05159 = rows05159.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05159').textContent = name_05159;
   
    let com_05159 = document.getElementById("f-path-05159");
    let list_05159 = document.getElementById("list_05159");


    function togg05159() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05159-01').classList.remove('visible')
        document.querySelector('#polar-chart_05159-01').classList.remove('visible')
        document.querySelector('#polar-chart_05159-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05159').classList.remove('visible')
        document.querySelector('#f-path-05159').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05159
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05159
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05159
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05159
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05159
    }
    com_05159.onclick = togg05159;
    list_05159.onclick = togg05159;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05160 = data[159];

    /*Récupere les données que je veut de la Commune */
    name_05160 = rows05160.Libellé_géographique;
    Pop_05160 = rows05160.Population_en_2017;
    Pop_017_05160 = rows05160.Pop_017_ans_2017;
    Pop_mediane_vote_05160 = rows05160.Popu_possible_voté;
    nbr_inscrit_05160 = rows05160.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05160').textContent = name_05160;
   
    let com_05160 = document.getElementById("f-path-05160");
    let list_05160 = document.getElementById("list_05160");


    function togg05160() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05160-01').classList.remove('visible')
        document.querySelector('#polar-chart_05160-01').classList.remove('visible')
        document.querySelector('#polar-chart_05160-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05160').classList.remove('visible')
        document.querySelector('#f-path-05160').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05160
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05160
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05160
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05160
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05160
    }
    com_05160.onclick = togg05160;
    list_05160.onclick = togg05160;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05161 = data[160];

    /*Récupere les données que je veut de la Commune */
    name_05161 = rows05161.Libellé_géographique;
    Pop_05161 = rows05161.Population_en_2017;
    Pop_017_05161 = rows05161.Pop_017_ans_2017;
    Pop_mediane_vote_05161 = rows05161.Popu_possible_voté;
    nbr_inscrit_05161 = rows05161.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05161').textContent = name_05161;
   
    let com_05161 = document.getElementById("f-path-05161");
    let list_05161 = document.getElementById("list_05161");


    function togg05161() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05161-01').classList.remove('visible')
        document.querySelector('#polar-chart_05161-01').classList.remove('visible')
        document.querySelector('#polar-chart_05161-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05161').classList.remove('visible')
        document.querySelector('#f-path-05161').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05161
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05161
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05161
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05161
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05161
    }
    com_05161.onclick = togg05161;
    list_05161.onclick = togg05161;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05162 = data[161];

    /*Récupere les données que je veut de la Commune */
    name_05162 = rows05162.Libellé_géographique;
    Pop_05162 = rows05162.Population_en_2017;
    Pop_017_05162 = rows05162.Pop_017_ans_2017;
    Pop_mediane_vote_05162 = rows05162.Popu_possible_voté;
    nbr_inscrit_05162 = rows05162.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05162').textContent = name_05162;
   
    let com_05162 = document.getElementById("f-path-05162");
    let list_05162 = document.getElementById("list_05162");


    function togg05162() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05162-01').classList.remove('visible')
        document.querySelector('#polar-chart_05162-01').classList.remove('visible')
        document.querySelector('#polar-chart_05162-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05162').classList.remove('visible')
        document.querySelector('#f-path-05162').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05162
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05162
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05162
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05162
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05162
    }
    com_05162.onclick = togg05162;
    list_05162.onclick = togg05162;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows05163 = data[162];

    /*Récupere les données que je veut de la Commune */
    name_05163 = rows05163.Libellé_géographique;
    Pop_05163 = rows05163.Population_en_2017;
    Pop_017_05163 = rows05163.Pop_017_ans_2017;
    Pop_mediane_vote_05163 = rows05163.Popu_possible_voté;
    nbr_inscrit_05163 = rows05163.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_05163').textContent = name_05163;
   
    let com_05163 = document.getElementById("f-path-05163");
    let list_05163 = document.getElementById("list_05163");


    function togg05163() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_05163-01').classList.remove('visible')
        document.querySelector('#polar-chart_05163-01').classList.remove('visible')
        document.querySelector('#polar-chart_05163-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_05163').classList.remove('visible')
        document.querySelector('#f-path-05163').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_05163
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_05163
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_05163
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_05163
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_05163
    }
    com_05163.onclick = togg05163;
    list_05163.onclick = togg05163;
    
}
DataJSON();