async function DataJSON() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[0];
    /*Récupere les données que je veut de la Commune */
    name_06001 = rows.Libellé_géographique;
    Pop_06001 = rows.Population_en_2017;
    Pop_017_06001 = rows.Pop_017_ans_2017;
    Pop_mediane_vote_06001 = rows.Popu_possible_voté;
    nbr_inscrit_06001 = rows.Inscrits;
    /*Pose dans le Menu*/
    document.querySelector('#list_06001').textContent = name_06001;
/*--------------------------------------------------------------------------*/
    var body = document.querySelector('#body')
    var path = document.querySelector('#map01')
    /******************************************************************** */
    let com_06001 = document.getElementById("f-path-06001");
    let list_06001 = document.getElementById("list_06001");
    function togg06001() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06001-01').classList.remove('visible')
        document.querySelector('#polar-chart_06001-01').classList.remove('visible')
        document.querySelector('#polar-chart_06001-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06001').classList.remove('visible')
        document.querySelector('#f-path-06001').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06001
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06001
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06001
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06001
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06001
    }
    com_06001.onclick = togg06001;
    list_06001.onclick = togg06001;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06002 = data[1];
    /*Récupere les données que je veut de la Commune */
    name_06002 = rows06002.Libellé_géographique;
    Pop_06002 = rows06002.Population_en_2017;
    Pop_017_06002 = rows06002.Pop_017_ans_2017;
    Pop_mediane_vote_06002 = rows06002.Popu_possible_voté;
    nbr_inscrit_06002 = rows06002.Inscrits;  
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06002').textContent = name_06002;
/*--------------------------------------------------------------------------*/
    let com_06002 = document.getElementById("f-path-06002");
    let list_06002 = document.getElementById("list_06002");
    /******************************************************************** */
    function togg06002() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06002-01').classList.remove('visible')
        document.querySelector('#polar-chart_06002-01').classList.remove('visible')
        document.querySelector('#polar-chart_06002-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06002').classList.remove('visible')
        document.querySelector('#f-path-06002').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06002;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06002
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06002
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06002
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06002
    }
    com_06002.onclick = togg06002;
    list_06002.onclick = togg06002;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06003 = data[2];
    /*Récupere les données que je veut de la Commune */
    name_06003 = rows06003.Libellé_géographique;
    Pop_06003 = rows06003.Population_en_2017;
    Pop_017_06003 = rows06003.Pop_017_ans_2017;
    Pop_mediane_vote_06003 = rows06003.Popu_possible_voté;
    nbr_inscrit_06003 = rows06003.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06003').textContent = name_06003;
    let com_06003 = document.getElementById("f-path-06003");
    let list_06003 = document.getElementById("list_06003");
    function togg06003() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06003-01').classList.remove('visible')
        document.querySelector('#polar-chart_06003-01').classList.remove('visible')
        document.querySelector('#polar-chart_06003-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06003').classList.remove('visible')
        document.querySelector('#f-path-06003').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06003;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06003
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06003
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06003
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06003
    }
    com_06003.onclick = togg06003;
    list_06003.onclick = togg06003;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06004 = data[3];
    /*Récupere les données que je veut de la Commune */
    name_06004 = rows06004.Libellé_géographique;
    Pop_06004 = rows06004.Population_en_2017;
    Pop_017_06004 = rows06004.Pop_017_ans_2017;
    Pop_mediane_vote_06004 = rows06004.Popu_possible_voté;
    nbr_inscrit_06004 = rows06004.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06004').textContent = name_06004;
    let com_06004 = document.getElementById("f-path-06004");
    let list_06004 = document.getElementById("list_06004");
    function togg06004() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06004-01').classList.remove('visible')
        document.querySelector('#polar-chart_06004-01').classList.remove('visible')
        document.querySelector('#polar-chart_06004-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06004').classList.remove('visible')
        document.querySelector('#f-path-06004').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06004;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06004
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06004
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06004
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06004
    }
    com_06004.onclick = togg06004;
    list_06004.onclick = togg06004;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06005 = data[4];
    /*Récupere les données que je veut de la Commune */
    name_06005 = rows06005.Libellé_géographique;
    Pop_06005 = rows06005.Population_en_2017;
    Pop_017_06005 = rows06005.Pop_017_ans_2017;
    Pop_mediane_vote_06005 = rows06005.Popu_possible_voté;
    nbr_inscrit_06005 = rows06005.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06005').textContent = name_06005;
    let com_06005 = document.getElementById("f-path-06005");
    let list_06005 = document.getElementById("list_06005");
    function togg06005() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06005-01').classList.remove('visible')
        document.querySelector('#polar-chart_06005-01').classList.remove('visible')
        document.querySelector('#polar-chart_06005-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06005').classList.remove('visible')
        document.querySelector('#f-path-06005').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06005
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06005
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06005
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06005
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06005
    }
    com_06005.onclick = togg06005;
    list_06005.onclick = togg06005;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06006 = data[5];
    /*Récupere les données que je veut de la Commune */
    name_06006 = rows06006.Libellé_géographique;
    Pop_06006 = rows06006.Population_en_2017;
    Pop_017_06006 = rows06006.Pop_017_ans_2017;
    Pop_mediane_vote_06006 = rows06006.Popu_possible_voté;
    nbr_inscrit_06006 = rows06006.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06006').textContent = name_06006;
    let com_06006 = document.getElementById("f-path-06006");
    let list_06006 = document.getElementById("list_06006");
    function togg06006() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06006-01').classList.remove('visible')
        document.querySelector('#polar-chart_06006-01').classList.remove('visible')
        document.querySelector('#polar-chart_06006-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06006').classList.remove('visible')
        document.querySelector('#f-path-06006').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06006
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06006
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06006
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06006
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06006
    }
    com_06006.onclick = togg06006;
    list_06006.onclick = togg06006;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06007 = data[6];
    /*Récupere les données que je veut de la Commune */
    name_06007 = rows06007.Libellé_géographique;
    Pop_06007 = rows06007.Population_en_2017;
    Pop_017_06007 = rows06007.Pop_017_ans_2017;
    Pop_mediane_vote_06007 = rows06007.Popu_possible_voté;
    nbr_inscrit_06007 = rows06007.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06007').textContent = name_06007; 
    let com_06007 = document.getElementById("f-path-06007");
    let list_06007 = document.getElementById("list_06007");
    function togg06007() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06007-01').classList.remove('visible')
        document.querySelector('#polar-chart_06007-01').classList.remove('visible')
        document.querySelector('#polar-chart_06007-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06007').classList.remove('visible')
        document.querySelector('#f-path-06007').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06007
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06007
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06007
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06007
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06007
    }
    com_06007.onclick = togg06007;
    list_06007.onclick = togg06007;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06008 = data[7];
    
    /*Récupere les données que je veut de la Commune */
    name_06008 = rows06008.Libellé_géographique;
    Pop_06008 = rows06008.Population_en_2017;
    Pop_017_06008 = rows06008.Pop_017_ans_2017;
    Pop_mediane_vote_06008 = rows06008.Popu_possible_voté;
    nbr_inscrit_06008 = rows06008.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06008').textContent = name_06008;
   
    let com_06008 = document.getElementById("f-path-06008");
    let list_06008 = document.getElementById("list_06008");


    function togg06008() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06008-01').classList.remove('visible')
        document.querySelector('#polar-chart_06008-01').classList.remove('visible')
        document.querySelector('#polar-chart_06008-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06008').classList.remove('visible')
        document.querySelector('#f-path-06008').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06008
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06008
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06008
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06008
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06008
    }
    com_06008.onclick = togg06008;
    list_06008.onclick = togg06008;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06009 = data[8];
    
    /*Récupere les données que je veut de la Commune */
    name_06009 = rows06009.Libellé_géographique;
    Pop_06009 = rows06009.Population_en_2017;
    Pop_017_06009 = rows06009.Pop_017_ans_2017;
    Pop_mediane_vote_06009 = rows06009.Popu_possible_voté;
    nbr_inscrit_06009 = rows06009.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06009').textContent = name_06009;

    let com_06009 = document.getElementById("f-path-06009");
    let list_06009 = document.getElementById("list_06009");


    function togg06009() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06009-01').classList.remove('visible')
        document.querySelector('#polar-chart_06009-01').classList.remove('visible')
        document.querySelector('#polar-chart_06009-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06009').classList.remove('visible')
        document.querySelector('#f-path-06009').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06009
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06009
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06009
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06009
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06009
    }
    com_06009.onclick = togg06009;
    list_06009.onclick = togg06009;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06010 = data[9];
 
    /*Récupere les données que je veut de la Commune */
    name_06010 = rows06010.Libellé_géographique;
    Pop_06010 = rows06010.Population_en_2017;
    Pop_017_06010 = rows06010.Pop_017_ans_2017;
    Pop_mediane_vote_06010 = rows06010.Popu_possible_voté;
    nbr_inscrit_06010 = rows06010.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06010').textContent = name_06010;

    let com_06010 = document.getElementById("f-path-06010");
    let list_06010 = document.getElementById("list_06010");


    function togg06010() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06010-01').classList.remove('visible')
        document.querySelector('#polar-chart_06010-01').classList.remove('visible')
        document.querySelector('#polar-chart_06010-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06010').classList.remove('visible')
        document.querySelector('#f-path-06010').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06010
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06010
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06010
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06010
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06010
    }
    com_06010.onclick = togg06010;
    list_06010.onclick = togg06010;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06011 = data[10];

    /*Récupere les données que je veut de la Commune */
    name_06011 = rows06011.Libellé_géographique;
    Pop_06011 = rows06011.Population_en_2017;
    Pop_017_06011 = rows06011.Pop_017_ans_2017;
    Pop_mediane_vote_06011 = rows06011.Popu_possible_voté;
    nbr_inscrit_06011 = rows06011.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06011').textContent = name_06011;
   
    let com_06011 = document.getElementById("f-path-06011");
    let list_06011 = document.getElementById("list_06011");


    function togg06011() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06011-01').classList.remove('visible')
        document.querySelector('#polar-chart_06011-01').classList.remove('visible')
        document.querySelector('#polar-chart_06011-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06011').classList.remove('visible')
        document.querySelector('#f-path-06011').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06011
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06011
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06011
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06011
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06011
    }
    com_06011.onclick = togg06011;
    list_06011.onclick = togg06011;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06012 = data[11];

    /*Récupere les données que je veut de la Commune */
    name_06012 = rows06012.Libellé_géographique;
    Pop_06012 = rows06012.Population_en_2017;
    Pop_017_06012 = rows06012.Pop_017_ans_2017;
    Pop_mediane_vote_06012 = rows06012.Popu_possible_voté;
    nbr_inscrit_06012 = rows06012.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06012').textContent = name_06012;
   
    let com_06012 = document.getElementById("f-path-06012");
    let list_06012 = document.getElementById("list_06012");


    function togg06012() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06012-01').classList.remove('visible')
        document.querySelector('#polar-chart_06012-01').classList.remove('visible')
        document.querySelector('#polar-chart_06012-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06012').classList.remove('visible')
        document.querySelector('#f-path-06012').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06012
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06012
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06012
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06012
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06012
    }
    com_06012.onclick = togg06012;
    list_06012.onclick = togg06012;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06013 = data[12];

    /*Récupere les données que je veut de la Commune */
    name_06013 = rows06013.Libellé_géographique;
    Pop_06013 = rows06013.Population_en_2017;
    Pop_017_06013 = rows06013.Pop_017_ans_2017;
    Pop_mediane_vote_06013 = rows06013.Popu_possible_voté;
    nbr_inscrit_06013 = rows06013.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06013').textContent = name_06013;
   
    let com_06013 = document.getElementById("f-path-06013");
    let list_06013 = document.getElementById("list_06013");


    function togg06013() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06013-01').classList.remove('visible')
        document.querySelector('#polar-chart_06013-01').classList.remove('visible')
        document.querySelector('#polar-chart_06013-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06013').classList.remove('visible')
        document.querySelector('#f-path-06013').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06013
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06013
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06013
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06013
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06013
    }
    com_06013.onclick = togg06013;
    list_06013.onclick = togg06013;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06014 = data[13];

    /*Récupere les données que je veut de la Commune */
    name_06014 = rows06014.Libellé_géographique;
    Pop_06014 = rows06014.Population_en_2017;
    Pop_017_06014 = rows06014.Pop_017_ans_2017;
    Pop_mediane_vote_06014 = rows06014.Popu_possible_voté;
    nbr_inscrit_06014 = rows06014.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06014').textContent = name_06014;
   
    let com_06014 = document.getElementById("f-path-06014");
    let list_06014 = document.getElementById("list_06014");


    function togg06014() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06014-01').classList.remove('visible')
        document.querySelector('#polar-chart_06014-01').classList.remove('visible')
        document.querySelector('#polar-chart_06014-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06014').classList.remove('visible')
        document.querySelector('#f-path-06014').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06014
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06014
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06014
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06014
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06014
    }
    com_06014.onclick = togg06014;
    list_06014.onclick = togg06014;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06015 = data[14];

    /*Récupere les données que je veut de la Commune */
    name_06015 = rows06015.Libellé_géographique;
    Pop_06015 = rows06015.Population_en_2017;
    Pop_017_06015 = rows06015.Pop_017_ans_2017;
    Pop_mediane_vote_06015 = rows06015.Popu_possible_voté;
    nbr_inscrit_06015 = rows06015.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06015').textContent = name_06015;
   
    let com_06015 = document.getElementById("f-path-06015");
    let list_06015 = document.getElementById("list_06015");


    function togg06015() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06015-01').classList.remove('visible')
        document.querySelector('#polar-chart_06015-01').classList.remove('visible')
        document.querySelector('#polar-chart_06015-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06015').classList.remove('visible')
        document.querySelector('#f-path-06015').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06015
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06015
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06015
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06015
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06015
    }
    com_06015.onclick = togg06015;
    list_06015.onclick = togg06015;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06016 = data[15];

    /*Récupere les données que je veut de la Commune */
    name_06016 = rows06016.Libellé_géographique;
    Pop_06016 = rows06016.Population_en_2017;
    Pop_017_06016 = rows06016.Pop_017_ans_2017;
    Pop_mediane_vote_06016 = rows06016.Popu_possible_voté;
    nbr_inscrit_06016 = rows06016.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06016').textContent = name_06016;
   
    let com_06016 = document.getElementById("f-path-06016");
    let list_06016 = document.getElementById("list_06016");


    function togg06016() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06016-01').classList.remove('visible')
        document.querySelector('#polar-chart_06016-01').classList.remove('visible')
        document.querySelector('#polar-chart_06016-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06016').classList.remove('visible')
        document.querySelector('#f-path-06016').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06016
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06016
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06016
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06016
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06016
    }
    com_06016.onclick = togg06016;
    list_06016.onclick = togg06016;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06017 = data[16];

    /*Récupere les données que je veut de la Commune */
    name_06017 = rows06017.Libellé_géographique;
    Pop_06017 = rows06017.Population_en_2017;
    Pop_017_06017 = rows06017.Pop_017_ans_2017;
    Pop_mediane_vote_06017 = rows06017.Popu_possible_voté;
    nbr_inscrit_06017 = rows06017.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06017').textContent = name_06017;
   
    let com_06017 = document.getElementById("f-path-06017");
    let list_06017 = document.getElementById("list_06017");


    function togg06017() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06017-01').classList.remove('visible')
        document.querySelector('#polar-chart_06017-01').classList.remove('visible')
        document.querySelector('#polar-chart_06017-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06017').classList.remove('visible')
        document.querySelector('#f-path-06017').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06017
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06017
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06017
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06017
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06017
    }
    com_06017.onclick = togg06017;
    list_06017.onclick = togg06017;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06018 = data[17];

    /*Récupere les données que je veut de la Commune */
    name_06018 = rows06018.Libellé_géographique;
    Pop_06018 = rows06018.Population_en_2017;
    Pop_017_06018 = rows06018.Pop_017_ans_2017;
    Pop_mediane_vote_06018 = rows06017.Popu_possible_voté;
    nbr_inscrit_06018 = rows06018.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06018').textContent = name_06018;
   
    let com_06018 = document.getElementById("f-path-06018");
    let list_06018 = document.getElementById("list_06018");


    function togg06018() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06018-01').classList.remove('visible')
        document.querySelector('#polar-chart_06018-01').classList.remove('visible')
        document.querySelector('#polar-chart_06018-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06018').classList.remove('visible')
        document.querySelector('#f-path-06018').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06018
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06018
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06018
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06018
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06018
    }
    com_06018.onclick = togg06018;
    list_06018.onclick = togg06018;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06019 = data[18];

    /*Récupere les données que je veut de la Commune */
    name_06019 = rows06019.Libellé_géographique;
    Pop_06019 = rows06019.Population_en_2017;
    Pop_017_06019 = rows06019.Pop_017_ans_2017;
    Pop_mediane_vote_06019 = rows06019.Popu_possible_voté;
    nbr_inscrit_06019 = rows06019.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06019').textContent = name_06019;
   
    let com_06019 = document.getElementById("f-path-06019");
    let list_06019 = document.getElementById("list_06019");


    function togg06019() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06019-01').classList.remove('visible')
        document.querySelector('#polar-chart_06019-01').classList.remove('visible')
        document.querySelector('#polar-chart_06019-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06019').classList.remove('visible')
        document.querySelector('#f-path-06019').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06019
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06019
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06019
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06019
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06019
    }
    com_06019.onclick = togg06019;
    list_06019.onclick = togg06019;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06020 = data[19];

    /*Récupere les données que je veut de la Commune */
    name_06020 = rows06020.Libellé_géographique;
    Pop_06020 = rows06020.Population_en_2017;
    Pop_017_06020 = rows06020.Pop_017_ans_2017;
    Pop_mediane_vote_06020 = rows06020.Popu_possible_voté;
    nbr_inscrit_06020 = rows06020.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06020').textContent = name_06020;
   
    let com_06020 = document.getElementById("f-path-06020");
    let list_06020 = document.getElementById("list_06020");


    function togg06020() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06020-01').classList.remove('visible')
        document.querySelector('#polar-chart_06020-01').classList.remove('visible')
        document.querySelector('#polar-chart_06020-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06020').classList.remove('visible')
        document.querySelector('#f-path-06020').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06020
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06020
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06020
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06020
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06020
    }
    com_06020.onclick = togg06020;
    list_06020.onclick = togg06020;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06021 = data[20];

    /*Récupere les données que je veut de la Commune */
    name_06021 = rows06021.Libellé_géographique;
    Pop_06021 = rows06021.Population_en_2017;
    Pop_017_06021 = rows06021.Pop_017_ans_2017;
    Pop_mediane_vote_06021 = rows06021.Popu_possible_voté;
    nbr_inscrit_06021 = rows06021.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06021').textContent = name_06021;
   
    let com_06021 = document.getElementById("f-path-06021");
    let list_06021 = document.getElementById("list_06021");


    function togg06021() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06021-01').classList.remove('visible')
        document.querySelector('#polar-chart_06021-01').classList.remove('visible')
        document.querySelector('#polar-chart_06021-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06021').classList.remove('visible')
        document.querySelector('#f-path-06021').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06021
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06021
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06021
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06021
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06021
    }
    com_06021.onclick = togg06021;
    list_06021.onclick = togg06021;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06022 = data[21];

    /*Récupere les données que je veut de la Commune */
    name_06022 = rows06022.Libellé_géographique;
    Pop_06022 = rows06022.Population_en_2017;
    Pop_017_06022 = rows06022.Pop_017_ans_2017;
    Pop_mediane_vote_06022 = rows06022.Popu_possible_voté;
    nbr_inscrit_06022 = rows06022.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06022').textContent = name_06022;
   
    let com_06022 = document.getElementById("f-path-06022");
    let list_06022 = document.getElementById("list_06022");


    function togg06022() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06022-01').classList.remove('visible')
        document.querySelector('#polar-chart_06022-01').classList.remove('visible')
        document.querySelector('#polar-chart_06022-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06022').classList.remove('visible')
        document.querySelector('#f-path-06022').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06022
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06022
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06022
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06022
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06022
    }
    com_06022.onclick = togg06022;
    list_06022.onclick = togg06022;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06023 = data[22];

    /*Récupere les données que je veut de la Commune */
    name_06023 = rows06023.Libellé_géographique;
    Pop_06023 = rows06023.Population_en_2017;
    Pop_017_06023 = rows06023.Pop_017_ans_2017;
    Pop_mediane_vote_06023 = rows06023.Popu_possible_voté;
    nbr_inscrit_06023 = rows06023.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06023').textContent = name_06023;
   
    let com_06023 = document.getElementById("f-path-06023");
    let list_06023 = document.getElementById("list_06023");


    function togg06023() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06023-01').classList.remove('visible')
        document.querySelector('#polar-chart_06023-01').classList.remove('visible')
        document.querySelector('#polar-chart_06023-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06023').classList.remove('visible')
        document.querySelector('#f-path-06023').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06023
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06023
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06023
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06023
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06023
    }
    com_06023.onclick = togg06023;
    list_06023.onclick = togg06023;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06024 = data[23];

    /*Récupere les données que je veut de la Commune */
    name_06024 = rows06024.Libellé_géographique;
    Pop_06024 = rows06024.Population_en_2017;
    Pop_017_06024 = rows06024.Pop_017_ans_2017;
    Pop_mediane_vote_06024 = rows06024.Popu_possible_voté;
    nbr_inscrit_06024 = rows06024.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06024').textContent = name_06024;
   
    let com_06024 = document.getElementById("f-path-06024");
    let list_06024 = document.getElementById("list_06024");


    function togg06024() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06024-01').classList.remove('visible')
        document.querySelector('#polar-chart_06024-01').classList.remove('visible')
        document.querySelector('#polar-chart_06024-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06024').classList.remove('visible')
        document.querySelector('#f-path-06024').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06024
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06024
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06024
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06024
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06024
    }
    com_06024.onclick = togg06024;
    list_06024.onclick = togg06024;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06025 = data[24];

    /*Récupere les données que je veut de la Commune */
    name_06025 = rows06025.Libellé_géographique;
    Pop_06025 = rows06025.Population_en_2017;
    Pop_017_06025 = rows06025.Pop_017_ans_2017;
    Pop_mediane_vote_06025 = rows06025.Popu_possible_voté;
    nbr_inscrit_06025 = rows06025.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06025').textContent = name_06025;
   
    let com_06025 = document.getElementById("f-path-06025");
    let list_06025 = document.getElementById("list_06025");


    function togg06025() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06025-01').classList.remove('visible')
        document.querySelector('#polar-chart_06025-01').classList.remove('visible')
        document.querySelector('#polar-chart_06025-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06025').classList.remove('visible')
        document.querySelector('#f-path-06025').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06025
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06025
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06025
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06025
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06025
    }
    com_06025.onclick = togg06025;
    list_06025.onclick = togg06025;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06026 = data[25];

    /*Récupere les données que je veut de la Commune */
    name_06026 = rows06026.Libellé_géographique;
    Pop_06026 = rows06026.Population_en_2017;
    Pop_017_06026 = rows06026.Pop_017_ans_2017;
    Pop_mediane_vote_06026 = rows06026.Popu_possible_voté;
    nbr_inscrit_06026 = rows06026.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06026').textContent = name_06026;
   
    let com_06026 = document.getElementById("f-path-06026");
    let list_06026 = document.getElementById("list_06026");


    function togg06026() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06026-01').classList.remove('visible')
        document.querySelector('#polar-chart_06026-01').classList.remove('visible')
        document.querySelector('#polar-chart_06026-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06026').classList.remove('visible')
        document.querySelector('#f-path-06026').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06026
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06026
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06026
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06026
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06026
    }
    com_06026.onclick = togg06026;
    list_06026.onclick = togg06026;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06027 = data[26];

    /*Récupere les données que je veut de la Commune */
    name_06027 = rows06027.Libellé_géographique;
    Pop_06027 = rows06027.Population_en_2017;
    Pop_017_06027 = rows06027.Pop_017_ans_2017;
    Pop_mediane_vote_06027 = rows06027.Popu_possible_voté;
    nbr_inscrit_06027 = rows06027.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06027').textContent = name_06027;
   
    let com_06027 = document.getElementById("f-path-06027");
    let list_06027 = document.getElementById("list_06027");


    function togg06027() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06027-01').classList.remove('visible')
        document.querySelector('#polar-chart_06027-01').classList.remove('visible')
        document.querySelector('#polar-chart_06027-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06027').classList.remove('visible')
        document.querySelector('#f-path-06027').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06027
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06027
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06027
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06027
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06027
    }
    com_06027.onclick = togg06027;
    list_06027.onclick = togg06027;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06028 = data[27];

    /*Récupere les données que je veut de la Commune */
    name_06028 = rows06028.Libellé_géographique;
    Pop_06028 = rows06028.Population_en_2017;
    Pop_017_06028 = rows06028.Pop_017_ans_2017;
    Pop_mediane_vote_06028 = rows06028.Popu_possible_voté;
    nbr_inscrit_06028 = rows06028.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06028').textContent = name_06028;
   
    let com_06028 = document.getElementById("f-path-06028");
    let list_06028 = document.getElementById("list_06028");


    function togg06028() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06028-01').classList.remove('visible')
        document.querySelector('#polar-chart_06028-01').classList.remove('visible')
        document.querySelector('#polar-chart_06028-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06028').classList.remove('visible')
        document.querySelector('#f-path-06028').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06028
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06028
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06028
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06028
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06028
    }
    com_06028.onclick = togg06028;
    list_06028.onclick = togg06028;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06029 = data[28];

    /*Récupere les données que je veut de la Commune */
    name_06029 = rows06029.Libellé_géographique;
    Pop_06029 = rows06029.Population_en_2017;
    Pop_017_06029 = rows06029.Pop_017_ans_2017;
    Pop_mediane_vote_06029 = rows06029.Popu_possible_voté;
    nbr_inscrit_06029 = rows06029.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06029').textContent = name_06029;
   
    let com_06029 = document.getElementById("f-path-06029");
    let list_06029 = document.getElementById("list_06029");


    function togg06029() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06029-01').classList.remove('visible')
        document.querySelector('#polar-chart_06029-01').classList.remove('visible')
        document.querySelector('#polar-chart_06029-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06029').classList.remove('visible')
        document.querySelector('#f-path-06029').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06029
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06029
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06029
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06029
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06029
    }
    com_06029.onclick = togg06029;
    list_06029.onclick = togg06029;
     /************************************************************************************* */
    /************************************************************************************* */
    const rows06030 = data[29];

    /*Récupere les données que je veut de la Commune */
    name_06030 = rows06030.Libellé_géographique;
    Pop_06030 = rows06030.Population_en_2017;
    Pop_017_06030 = rows06030.Pop_017_ans_2017;
    Pop_mediane_vote_06030 = rows06030.Popu_possible_voté;
    nbr_inscrit_06030 = rows06030.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06030').textContent = name_06030;
   
    let com_06030 = document.getElementById("f-path-06030");
    let list_06030 = document.getElementById("list_06030");


    function togg06030() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06030-01').classList.remove('visible')
        document.querySelector('#polar-chart_06030-01').classList.remove('visible')
        document.querySelector('#polar-chart_06030-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06030').classList.remove('visible')
        document.querySelector('#f-path-06030').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06030
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06030
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06030
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06030
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06030
    }
    com_06030.onclick = togg06030;
    list_06030.onclick = togg06030;
     /************************************************************************************* */
    /************************************************************************************* */
    const rows06031 = data[30];

    /*Récupere les données que je veut de la Commune */
    name_06031 = rows06031.Libellé_géographique;
    Pop_06031 = rows06031.Population_en_2017;
    Pop_017_06031 = rows06031.Pop_017_ans_2017;
    Pop_mediane_vote_06031 = rows06031.Popu_possible_voté;
    nbr_inscrit_06031 = rows06031.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06031').textContent = name_06031;
   
    let com_06031 = document.getElementById("f-path-06031");
    let list_06031 = document.getElementById("list_06031");


    function togg06031() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06031-01').classList.remove('visible')
        document.querySelector('#polar-chart_06031-01').classList.remove('visible')
        document.querySelector('#polar-chart_06031-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06031').classList.remove('visible')
        document.querySelector('#f-path-06031').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06031
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06031
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06031
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06031
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06031
    }
    com_06031.onclick = togg06031;
    list_06031.onclick = togg06031;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06032 = data[31];

    /*Récupere les données que je veut de la Commune */
    name_06032 = rows06032.Libellé_géographique;
    Pop_06032 = rows06032.Population_en_2017;
    Pop_017_06032 = rows06032.Pop_017_ans_2017;
    Pop_mediane_vote_06032 = rows06032.Popu_possible_voté;
    nbr_inscrit_06032 = rows06032.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06032').textContent = name_06032;
   
    let com_06032 = document.getElementById("f-path-06032");
    let list_06032 = document.getElementById("list_06032");


    function togg06032() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06032-01').classList.remove('visible')
        document.querySelector('#polar-chart_06032-01').classList.remove('visible')
        document.querySelector('#polar-chart_06032-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06032').classList.remove('visible')
        document.querySelector('#f-path-06032').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06032
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06032
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06032
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06032
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06032
    }
    com_06032.onclick = togg06032;
    list_06032.onclick = togg06032;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06033 = data[32];

    /*Récupere les données que je veut de la Commune */
    name_06033 = rows06033.Libellé_géographique;
    Pop_06033 = rows06033.Population_en_2017;
    Pop_017_06033 = rows06033.Pop_017_ans_2017;
    Pop_mediane_vote_06033 = rows06033.Popu_possible_voté;
    nbr_inscrit_06033 = rows06033.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06033').textContent = name_06033;
   
    let com_06033 = document.getElementById("f-path-06033");
    let list_06033 = document.getElementById("list_06033");


    function togg06033() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06033-01').classList.remove('visible')
        document.querySelector('#polar-chart_06033-01').classList.remove('visible')
        document.querySelector('#polar-chart_06033-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06033').classList.remove('visible')
        document.querySelector('#f-path-06033').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06033
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06033
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06033
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06033
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06033
    }
    com_06033.onclick = togg06033;
    list_06033.onclick = togg06033;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06034 = data[33];

    /*Récupere les données que je veut de la Commune */
    name_06034 = rows06034.Libellé_géographique;
    Pop_06034 = rows06034.Population_en_2017;
    Pop_017_06034 = rows06034.Pop_017_ans_2017;
    Pop_mediane_vote_06034 = rows06034.Popu_possible_voté;
    nbr_inscrit_06034 = rows06034.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06034').textContent = name_06034;
   
    let com_06034 = document.getElementById("f-path-06034");
    let list_06034 = document.getElementById("list_06034");


    function togg06034() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06034-01').classList.remove('visible')
        document.querySelector('#polar-chart_06034-01').classList.remove('visible')
        document.querySelector('#polar-chart_06034-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06034').classList.remove('visible')
        document.querySelector('#f-path-06034').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06034
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06034
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06034
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06034
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06034
    }
    com_06034.onclick = togg06034;
    list_06034.onclick = togg06034;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06035 = data[34];

    /*Récupere les données que je veut de la Commune */
    name_06035 = rows06035.Libellé_géographique;
    Pop_06035 = rows06035.Population_en_2017;
    Pop_017_06035 = rows06035.Pop_017_ans_2017;
    Pop_mediane_vote_06035 = rows06035.Popu_possible_voté;
    nbr_inscrit_06035 = rows06035.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06035').textContent = name_06035;
   
    let com_06035 = document.getElementById("f-path-06035");
    let list_06035 = document.getElementById("list_06035");


    function togg06035() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06035-01').classList.remove('visible')
        document.querySelector('#polar-chart_06035-01').classList.remove('visible')
        document.querySelector('#polar-chart_06035-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06035').classList.remove('visible')
        document.querySelector('#f-path-06035').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06035
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06035
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06035
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06035
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06035
    }
    com_06035.onclick = togg06035;
    list_06035.onclick = togg06035;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06036 = data[35];

    /*Récupere les données que je veut de la Commune */
    name_06036 = rows06036.Libellé_géographique;
    Pop_06036 = rows06036.Population_en_2017;
    Pop_017_06036 = rows06036.Pop_017_ans_2017;
    Pop_mediane_vote_06036 = rows06036.Popu_possible_voté;
    nbr_inscrit_06036 = rows06036.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06036').textContent = name_06036;
   
    let com_06036 = document.getElementById("f-path-06036");
    let list_06036 = document.getElementById("list_06036");


    function togg06036() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06036-01').classList.remove('visible')
        document.querySelector('#polar-chart_06036-01').classList.remove('visible')
        document.querySelector('#polar-chart_06036-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06036').classList.remove('visible')
        document.querySelector('#f-path-06036').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06036
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06036
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06036
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06036
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06036
    }
    com_06036.onclick = togg06036;
    list_06036.onclick = togg06036;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06037 = data[36];

    /*Récupere les données que je veut de la Commune */
    name_06037 = rows06037.Libellé_géographique;
    Pop_06037 = rows06037.Population_en_2017;
    Pop_017_06037 = rows06037.Pop_017_ans_2017;
    Pop_mediane_vote_06037 = rows06037.Popu_possible_voté;
    nbr_inscrit_06037 = rows06037.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06037').textContent = name_06037;
   
    let com_06037 = document.getElementById("f-path-06037");
    let list_06037 = document.getElementById("list_06037");


    function togg06037() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06037-01').classList.remove('visible')
        document.querySelector('#polar-chart_06037-01').classList.remove('visible')
        document.querySelector('#polar-chart_06067-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06037').classList.remove('visible')
        document.querySelector('#f-path-06037').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06037
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06037
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06037
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06037
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06037
    }
    com_06037.onclick = togg06037;
    list_06037.onclick = togg06037;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06038 = data[37];

    /*Récupere les données que je veut de la Commune */
    name_06038 = rows06038.Libellé_géographique;
    Pop_06038 = rows06038.Population_en_2017;
    Pop_017_06038 = rows06038.Pop_017_ans_2017;
    Pop_mediane_vote_06038 = rows06038.Popu_possible_voté;
    nbr_inscrit_06038 = rows06038.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06038').textContent = name_06038;
   
    let com_06038 = document.getElementById("f-path-06038");
    let list_06038 = document.getElementById("list_06038");


    function togg06038() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06038-01').classList.remove('visible')
        document.querySelector('#polar-chart_06038-01').classList.remove('visible')
        document.querySelector('#polar-chart_06068-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06038').classList.remove('visible')
        document.querySelector('#f-path-06038').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06038
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06038
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06038
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06038
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06038
    }
    com_06038.onclick = togg06038;
    list_06038.onclick = togg06038;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06039 = data[38];

    /*Récupere les données que je veut de la Commune */
    name_06039 = rows06039.Libellé_géographique;
    Pop_06039 = rows06039.Population_en_2017;
    Pop_017_06039 = rows06039.Pop_017_ans_2017;
    Pop_mediane_vote_06039 = rows06039.Popu_possible_voté;
    nbr_inscrit_06039 = rows06039.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06039').textContent = name_06039;
   
    let com_06039 = document.getElementById("f-path-06039");
    let list_06039 = document.getElementById("list_06039");


    function togg06039() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06039-01').classList.remove('visible')
        document.querySelector('#polar-chart_06039-01').classList.remove('visible')
        document.querySelector('#polar-chart_06069-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06039').classList.remove('visible')
        document.querySelector('#f-path-06039').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06039
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06039
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06039
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06039
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06039
    }
    com_06039.onclick = togg06039;
    list_06039.onclick = togg06039;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06040 = data[39];

    /*Récupere les données que je veut de la Commune */
    name_06040 = rows06040.Libellé_géographique;
    Pop_06040 = rows06040.Population_en_2017;
    Pop_017_06040 = rows06040.Pop_017_ans_2017;
    Pop_mediane_vote_06040 = rows06040.Popu_possible_voté;
    nbr_inscrit_06040 = rows06040.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06040').textContent = name_06040;
   
    let com_06040 = document.getElementById("f-path-06040");
    let list_06040 = document.getElementById("list_06040");


    function togg06040() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06040-01').classList.remove('visible')
        document.querySelector('#polar-chart_06040-01').classList.remove('visible')
        document.querySelector('#polar-chart_06040-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06040').classList.remove('visible')
        document.querySelector('#f-path-06040').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06040
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06040
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06040
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06040
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06040
    }
    com_06040.onclick = togg06040;
    list_06040.onclick = togg06040;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06041 = data[40];

    /*Récupere les données que je veut de la Commune */
    name_06041 = rows06041.Libellé_géographique;
    Pop_06041 = rows06041.Population_en_2017;
    Pop_017_06041 = rows06041.Pop_017_ans_2017;
    Pop_mediane_vote_06041 = rows06041.Popu_possible_voté;
    nbr_inscrit_06041 = rows06041.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06041').textContent = name_06041;
   
    let com_06041 = document.getElementById("f-path-06041");
    let list_06041 = document.getElementById("list_06041");


    function togg06041() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06041-01').classList.remove('visible')
        document.querySelector('#polar-chart_06041-01').classList.remove('visible')
        document.querySelector('#polar-chart_06041-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06041').classList.remove('visible')
        document.querySelector('#f-path-06041').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06041
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06041
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06041
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06041
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06041
    }
    com_06041.onclick = togg06041;
    list_06041.onclick = togg06041;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06042 = data[41];

    /*Récupere les données que je veut de la Commune */
    name_06042 = rows06042.Libellé_géographique;
    Pop_06042 = rows06042.Population_en_2017;
    Pop_017_06042 = rows06042.Pop_017_ans_2017;
    Pop_mediane_vote_06042 = rows06042.Popu_possible_voté;
    nbr_inscrit_06042 = rows06042.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06042').textContent = name_06042;
   
    let com_06042 = document.getElementById("f-path-06042");
    let list_06042 = document.getElementById("list_06042");


    function togg06042() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06042-01').classList.remove('visible')
        document.querySelector('#polar-chart_06042-01').classList.remove('visible')
        document.querySelector('#polar-chart_06042-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06042').classList.remove('visible')
        document.querySelector('#f-path-06042').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06042
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06042
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06042
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06042
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06042
    }
    com_06042.onclick = togg06042;
    list_06042.onclick = togg06042;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06043 = data[42];

    /*Récupere les données que je veut de la Commune */
    name_06043 = rows06043.Libellé_géographique;
    Pop_06043 = rows06043.Population_en_2017;
    Pop_017_06043 = rows06043.Pop_017_ans_2017;
    Pop_mediane_vote_06043 = rows06043.Popu_possible_voté;
    nbr_inscrit_06043 = rows06043.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06043').textContent = name_06043;
   
    let com_06043 = document.getElementById("f-path-06043");
    let list_06043 = document.getElementById("list_06043");


    function togg06043() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06043-01').classList.remove('visible')
        document.querySelector('#polar-chart_06043-01').classList.remove('visible')
        document.querySelector('#polar-chart_06043-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06043').classList.remove('visible')
        document.querySelector('#f-path-06043').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06043
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06043
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06043
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06043
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06043
    }
    com_06043.onclick = togg06043;
    list_06043.onclick = togg06043;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06044 = data[43];

    /*Récupere les données que je veut de la Commune */
    name_06044 = rows06044.Libellé_géographique;
    Pop_06044 = rows06044.Population_en_2017;
    Pop_017_06044 = rows06044.Pop_017_ans_2017;
    Pop_mediane_vote_06044 = rows06044.Popu_possible_voté;
    nbr_inscrit_06044 = rows06044.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06044').textContent = name_06044;
   
    let com_06044 = document.getElementById("f-path-06044");
    let list_06044 = document.getElementById("list_06044");


    function togg06044() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06044-01').classList.remove('visible')
        document.querySelector('#polar-chart_06044-01').classList.remove('visible')
        document.querySelector('#polar-chart_06044-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06044').classList.remove('visible')
        document.querySelector('#f-path-06044').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06044
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06044
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06044
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06044
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06044
    }
    com_06044.onclick = togg06044;
    list_06044.onclick = togg06044;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06045 = data[44];

    /*Récupere les données que je veut de la Commune */
    name_06045 = rows06045.Libellé_géographique;
    Pop_06045 = rows06045.Population_en_2017;
    Pop_017_06045 = rows06045.Pop_017_ans_2017;
    Pop_mediane_vote_06045 = rows06045.Popu_possible_voté;
    nbr_inscrit_06045 = rows06045.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06045').textContent = name_06045;
   
    let com_06045 = document.getElementById("f-path-06045");
    let list_06045 = document.getElementById("list_06045");


    function togg06045() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06045-01').classList.remove('visible')
        document.querySelector('#polar-chart_06045-01').classList.remove('visible')
        document.querySelector('#polar-chart_06045-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06045').classList.remove('visible')
        document.querySelector('#f-path-06045').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06045
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06045
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06045
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06045
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06045
    }
    com_06045.onclick = togg06045;
    list_06045.onclick = togg06045;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06046 = data[45];

    /*Récupere les données que je veut de la Commune */
    name_06046 = rows06046.Libellé_géographique;
    Pop_06046 = rows06046.Population_en_2017;
    Pop_017_06046 = rows06046.Pop_017_ans_2017;
    Pop_mediane_vote_06046 = rows06046.Popu_possible_voté;
    nbr_inscrit_06046 = rows06046.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06046').textContent = name_06046;
   
    let com_06046 = document.getElementById("f-path-06046");
    let list_06046 = document.getElementById("list_06046");


    function togg06046() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06046-01').classList.remove('visible')
        document.querySelector('#polar-chart_06046-01').classList.remove('visible')
        document.querySelector('#polar-chart_06046-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06046').classList.remove('visible')
        document.querySelector('#f-path-06046').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06046
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06046
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06046
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06046
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06046
    }
    com_06046.onclick = togg06046;
    list_06046.onclick = togg06046;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06047 = data[46];

    /*Récupere les données que je veut de la Commune */
    name_06047 = rows06047.Libellé_géographique;
    Pop_06047 = rows06047.Population_en_2017;
    Pop_017_06047 = rows06047.Pop_017_ans_2017;
    Pop_mediane_vote_06047 = rows06047.Popu_possible_voté;
    nbr_inscrit_06047 = rows06047.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06047').textContent = name_06047;
   
    let com_06047 = document.getElementById("f-path-06047");
    let list_06047 = document.getElementById("list_06047");


    function togg06047() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06047-01').classList.remove('visible')
        document.querySelector('#polar-chart_06047-01').classList.remove('visible')
        document.querySelector('#polar-chart_06047-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06047').classList.remove('visible')
        document.querySelector('#f-path-06047').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06047
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06047
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06047
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06047
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06047
    }
    com_06047.onclick = togg06047;
    list_06047.onclick = togg06047;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06048 = data[47];

    /*Récupere les données que je veut de la Commune */
    name_06048 = rows06048.Libellé_géographique;
    Pop_06048 = rows06048.Population_en_2017;
    Pop_017_06048 = rows06048.Pop_017_ans_2017;
    Pop_mediane_vote_06048 = rows06048.Popu_possible_voté;
    nbr_inscrit_06048 = rows06048.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06048').textContent = name_06048;
   
    let com_06048 = document.getElementById("f-path-06048");
    let list_06048 = document.getElementById("list_06048");


    function togg06048() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06048-01').classList.remove('visible')
        document.querySelector('#polar-chart_06048-01').classList.remove('visible')
        document.querySelector('#polar-chart_06048-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06048').classList.remove('visible')
        document.querySelector('#f-path-06048').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06048
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06048
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06048
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06048
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06048
    }
    com_06048.onclick = togg06048;
    list_06048.onclick = togg06048;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06049 = data[48];

    /*Récupere les données que je veut de la Commune */
    name_06049 = rows06049.Libellé_géographique;
    Pop_06049 = rows06049.Population_en_2017;
    Pop_017_06049 = rows06049.Pop_017_ans_2017;
    Pop_mediane_vote_06049 = rows06049.Popu_possible_voté;
    nbr_inscrit_06049 = rows06049.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06049').textContent = name_06049;
   
    let com_06049 = document.getElementById("f-path-06049");
    let list_06049 = document.getElementById("list_06049");


    function togg06049() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06049-01').classList.remove('visible')
        document.querySelector('#polar-chart_06049-01').classList.remove('visible')
        document.querySelector('#polar-chart_06049-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06049').classList.remove('visible')
        document.querySelector('#f-path-06049').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06049
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06049
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06049
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06049
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06049
    }
    com_06049.onclick = togg06049;
    list_06049.onclick = togg06049;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06050 = data[49];

    /*Récupere les données que je veut de la Commune */
    name_06050 = rows06050.Libellé_géographique;
    Pop_06050 = rows06050.Population_en_2017;
    Pop_017_06050 = rows06050.Pop_017_ans_2017;
    Pop_mediane_vote_06050 = rows06050.Popu_possible_voté;
    nbr_inscrit_06050 = rows06050.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06050').textContent = name_06050;
   
    let com_06050 = document.getElementById("f-path-06050");
    let list_06050 = document.getElementById("list_06050");


    function togg06050() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06050-01').classList.remove('visible')
        document.querySelector('#polar-chart_06050-01').classList.remove('visible')
        document.querySelector('#polar-chart_06050-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06050').classList.remove('visible')
        document.querySelector('#f-path-06050').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06050
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06050
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06050
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06050
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06050
    }
    com_06050.onclick = togg06050;
    list_06050.onclick = togg06050;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06051 = data[50];

    /*Récupere les données que je veut de la Commune */
    name_06051 = rows06051.Libellé_géographique;
    Pop_06051 = rows06051.Population_en_2017;
    Pop_017_06051 = rows06051.Pop_017_ans_2017;
    Pop_mediane_vote_06051 = rows06051.Popu_possible_voté;
    nbr_inscrit_06051 = rows06051.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06051').textContent = name_06051;
   
    let com_06051 = document.getElementById("f-path-06051");
    let list_06051 = document.getElementById("list_06051");


    function togg06051() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06051-01').classList.remove('visible')
        document.querySelector('#polar-chart_06051-01').classList.remove('visible')
        document.querySelector('#polar-chart_06051-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06051').classList.remove('visible')
        document.querySelector('#f-path-06051').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06051
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06051
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06051
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06051
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06051
    }
    com_06051.onclick = togg06051;
    list_06051.onclick = togg06051;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06052 = data[51];

    /*Récupere les données que je veut de la Commune */
    name_06052 = rows06052.Libellé_géographique;
    Pop_06052 = rows06052.Population_en_2017;
    Pop_017_06052 = rows06052.Pop_017_ans_2017;
    Pop_mediane_vote_06052 = rows06052.Popu_possible_voté;
    nbr_inscrit_06052 = rows06052.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06052').textContent = name_06052;
   
    let com_06052 = document.getElementById("f-path-06052");
    let list_06052 = document.getElementById("list_06052");


    function togg06052() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06052-01').classList.remove('visible')
        document.querySelector('#polar-chart_06052-01').classList.remove('visible')
        document.querySelector('#polar-chart_06052-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06052').classList.remove('visible')
        document.querySelector('#f-path-06052').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06052
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06052
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06052
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06052
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06052
    }
    com_06052.onclick = togg06052;
    list_06052.onclick = togg06052;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06053 = data[52];

    /*Récupere les données que je veut de la Commune */
    name_06053 = rows06053.Libellé_géographique;
    Pop_06053 = rows06053.Population_en_2017;
    Pop_017_06053 = rows06053.Pop_017_ans_2017;
    Pop_mediane_vote_06053 = rows06053.Popu_possible_voté;
    nbr_inscrit_06053 = rows06053.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06053').textContent = name_06053;
   
    let com_06053 = document.getElementById("f-path-06053");
    let list_06053 = document.getElementById("list_06053");


    function togg06053() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06053-01').classList.remove('visible')
        document.querySelector('#polar-chart_06053-01').classList.remove('visible')
        document.querySelector('#polar-chart_06053-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06053').classList.remove('visible')
        document.querySelector('#f-path-06053').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06053
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06053
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06053
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06053
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06053
    }
    com_06053.onclick = togg06053;
    list_06053.onclick = togg06053;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06054 = data[53];

    /*Récupere les données que je veut de la Commune */
    name_06054 = rows06054.Libellé_géographique;
    Pop_06054 = rows06054.Population_en_2017;
    Pop_017_06054 = rows06054.Pop_017_ans_2017;
    Pop_mediane_vote_06054 = rows06054.Popu_possible_voté;
    nbr_inscrit_06054 = rows06054.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06054').textContent = name_06054;
   
    let com_06054 = document.getElementById("f-path-06054");
    let list_06054 = document.getElementById("list_06054");


    function togg06054() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06054-01').classList.remove('visible')
        document.querySelector('#polar-chart_06054-01').classList.remove('visible')
        document.querySelector('#polar-chart_06054-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06054').classList.remove('visible')
        document.querySelector('#f-path-06054').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06054
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06054
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06054
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06054
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06054
    }
    com_06054.onclick = togg06054;
    list_06054.onclick = togg06054;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06055 = data[54];

    /*Récupere les données que je veut de la Commune */
    name_06055 = rows06055.Libellé_géographique;
    Pop_06055 = rows06055.Population_en_2017;
    Pop_017_06055 = rows06055.Pop_017_ans_2017;
    Pop_mediane_vote_06055 = rows06055.Popu_possible_voté;
    nbr_inscrit_06055 = rows06055.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06055').textContent = name_06055;
   
    let com_06055 = document.getElementById("f-path-06055");
    let list_06055 = document.getElementById("list_06055");


    function togg06055() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06055-01').classList.remove('visible')
        document.querySelector('#polar-chart_06055-01').classList.remove('visible')
        document.querySelector('#polar-chart_06055-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06055').classList.remove('visible')
        document.querySelector('#f-path-06055').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06055
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06055
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06055
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06055
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06055
    }
    com_06055.onclick = togg06055;
    list_06055.onclick = togg06055;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06056 = data[55];

    /*Récupere les données que je veut de la Commune */
    name_06056 = rows06056.Libellé_géographique;
    Pop_06056 = rows06056.Population_en_2017;
    Pop_017_06056 = rows06056.Pop_017_ans_2017;
    Pop_mediane_vote_06056 = rows06056.Popu_possible_voté;
    nbr_inscrit_06056 = rows06056.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06056').textContent = name_06056;
   
    let com_06056 = document.getElementById("f-path-06056");
    let list_06056 = document.getElementById("list_06056");


    function togg06056() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06056-01').classList.remove('visible')
        document.querySelector('#polar-chart_06056-01').classList.remove('visible')
        document.querySelector('#polar-chart_06056-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06056').classList.remove('visible')
        document.querySelector('#f-path-06056').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06056
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06056
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06056
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06056
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06056
    }
    com_06056.onclick = togg06056;
    list_06056.onclick = togg06056;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06057 = data[56];

    /*Récupere les données que je veut de la Commune */
    name_06057 = rows06057.Libellé_géographique;
    Pop_06057 = rows06057.Population_en_2017;
    Pop_017_06057 = rows06057.Pop_017_ans_2017;
    Pop_mediane_vote_06057 = rows06057.Popu_possible_voté;
    nbr_inscrit_06057 = rows06057.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06057').textContent = name_06057;
   
    let com_06057 = document.getElementById("f-path-06057");
    let list_06057 = document.getElementById("list_06057");


    function togg06057() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06057-01').classList.remove('visible')
        document.querySelector('#polar-chart_06057-01').classList.remove('visible')
        document.querySelector('#polar-chart_06057-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06057').classList.remove('visible')
        document.querySelector('#f-path-06057').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06057
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06057
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06057
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06057
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06057
    }
    com_06057.onclick = togg06057;
    list_06057.onclick = togg06057;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06058 = data[57];

    /*Récupere les données que je veut de la Commune */
    name_06058 = rows06058.Libellé_géographique;
    Pop_06058 = rows06058.Population_en_2017;
    Pop_017_06058 = rows06058.Pop_017_ans_2017;
    Pop_mediane_vote_06058 = rows06058.Popu_possible_voté;
    nbr_inscrit_06058 = rows06058.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06058').textContent = name_06058;
   
    let com_06058 = document.getElementById("f-path-06058");
    let list_06058 = document.getElementById("list_06058");


    function togg06058() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06058-01').classList.remove('visible')
        document.querySelector('#polar-chart_06058-01').classList.remove('visible')
        document.querySelector('#polar-chart_06058-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06058').classList.remove('visible')
        document.querySelector('#f-path-06058').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06058
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06058
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06058
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06058
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06058
    }
    com_06058.onclick = togg06058;
    list_06058.onclick = togg06058;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06059 = data[58];

    /*Récupere les données que je veut de la Commune */
    name_06059 = rows06059.Libellé_géographique;
    Pop_06059 = rows06059.Population_en_2017;
    Pop_017_06059 = rows06059.Pop_017_ans_2017;
    Pop_mediane_vote_06059 = rows06059.Popu_possible_voté;
    nbr_inscrit_06059 = rows06059.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06059').textContent = name_06059;
   
    let com_06059 = document.getElementById("f-path-06059");
    let list_06059 = document.getElementById("list_06059");


    function togg06059() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06059-01').classList.remove('visible')
        document.querySelector('#polar-chart_06059-01').classList.remove('visible')
        document.querySelector('#polar-chart_06059-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06059').classList.remove('visible')
        document.querySelector('#f-path-06059').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06059
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06059
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06059
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06059
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06059
    }
    com_06059.onclick = togg06059;
    list_06059.onclick = togg06059;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06060 = data[59];

    /*Récupere les données que je veut de la Commune */
    name_06060 = rows06060.Libellé_géographique;
    Pop_06060 = rows06060.Population_en_2017;
    Pop_017_06060 = rows06060.Pop_017_ans_2017;
    Pop_mediane_vote_06060 = rows06060.Popu_possible_voté;
    nbr_inscrit_06060 = rows06060.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06060').textContent = name_06060;
   
    let com_06060 = document.getElementById("f-path-06060");
    let list_06060 = document.getElementById("list_06060");


    function togg06060() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06060-01').classList.remove('visible')
        document.querySelector('#polar-chart_06060-01').classList.remove('visible')
        document.querySelector('#polar-chart_06060-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06060').classList.remove('visible')
        document.querySelector('#f-path-06060').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06060
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06060
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06060
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06060
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06060
    }
    com_06060.onclick = togg06060;
    list_06060.onclick = togg06060;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06061 = data[60];

    /*Récupere les données que je veut de la Commune */
    name_06061 = rows06061.Libellé_géographique;
    Pop_06061 = rows06061.Population_en_2017;
    Pop_017_06061 = rows06061.Pop_017_ans_2017;
    Pop_mediane_vote_06061 = rows06061.Popu_possible_voté;
    nbr_inscrit_06061 = rows06061.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06061').textContent = name_06061;
   
    let com_06061 = document.getElementById("f-path-06061");
    let list_06061 = document.getElementById("list_06061");


    function togg06061() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06061-01').classList.remove('visible')
        document.querySelector('#polar-chart_06061-01').classList.remove('visible')
        document.querySelector('#polar-chart_06061-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06061').classList.remove('visible')
        document.querySelector('#f-path-06061').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06061
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06061
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06061
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06061
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06061
    }
    com_06061.onclick = togg06061;
    list_06061.onclick = togg06061;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06062 = data[61];

    /*Récupere les données que je veut de la Commune */
    name_06062 = rows06062.Libellé_géographique;
    Pop_06062 = rows06062.Population_en_2017;
    Pop_017_06062 = rows06062.Pop_017_ans_2017;
    Pop_mediane_vote_06062 = rows06062.Popu_possible_voté;
    nbr_inscrit_06062 = rows06062.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06062').textContent = name_06062;
   
    let com_06062 = document.getElementById("f-path-06062");
    let list_06062 = document.getElementById("list_06062");


    function togg06062() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06062-01').classList.remove('visible')
        document.querySelector('#polar-chart_06062-01').classList.remove('visible')
        document.querySelector('#polar-chart_06062-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06062').classList.remove('visible')
        document.querySelector('#f-path-06062').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06062
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06062
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06062
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06062
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06062
    }
    com_06062.onclick = togg06062;
    list_06062.onclick = togg06062;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06063 = data[62];

    /*Récupere les données que je veut de la Commune */
    name_06063 = rows06063.Libellé_géographique;
    Pop_06063 = rows06063.Population_en_2017;
    Pop_017_06063 = rows06063.Pop_017_ans_2017;
    Pop_mediane_vote_06063 = rows06063.Popu_possible_voté;
    nbr_inscrit_06063 = rows06063.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06063').textContent = name_06063;
   
    let com_06063 = document.getElementById("f-path-06063");
    let list_06063 = document.getElementById("list_06063");


    function togg06063() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06063-01').classList.remove('visible')
        document.querySelector('#polar-chart_06063-01').classList.remove('visible')
        document.querySelector('#polar-chart_06063-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06063').classList.remove('visible')
        document.querySelector('#f-path-06063').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06063
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06063
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06063
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06063
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06063
    }
    com_06063.onclick = togg06063;
    list_06063.onclick = togg06063;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06064 = data[63];

    /*Récupere les données que je veut de la Commune */
    name_06064 = rows06064.Libellé_géographique;
    Pop_06064 = rows06064.Population_en_2017;
    Pop_017_06064 = rows06064.Pop_017_ans_2017;
    Pop_mediane_vote_06064 = rows06064.Popu_possible_voté;
    nbr_inscrit_06064 = rows06064.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06064').textContent = name_06064;
   
    let com_06064 = document.getElementById("f-path-06064");
    let list_06064 = document.getElementById("list_06064");


    function togg06064() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06064-01').classList.remove('visible')
        document.querySelector('#polar-chart_06064-01').classList.remove('visible')
        document.querySelector('#polar-chart_06064-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06064').classList.remove('visible')
        document.querySelector('#f-path-06064').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06064
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06064
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06064
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06064
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06064
    }
    com_06064.onclick = togg06064;
    list_06064.onclick = togg06064;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06065 = data[64];

    /*Récupere les données que je veut de la Commune */
    name_06065 = rows06065.Libellé_géographique;
    Pop_06065 = rows06065.Population_en_2017;
    Pop_017_06065 = rows06065.Pop_017_ans_2017;
    Pop_mediane_vote_06065 = rows06065.Popu_possible_voté;
    nbr_inscrit_06065 = rows06065.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06065').textContent = name_06065;
   
    let com_06065 = document.getElementById("f-path-06065");
    let list_06065 = document.getElementById("list_06065");


    function togg06065() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06065-01').classList.remove('visible')
        document.querySelector('#polar-chart_06065-01').classList.remove('visible')
        document.querySelector('#polar-chart_06065-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06065').classList.remove('visible')
        document.querySelector('#f-path-06065').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06065
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06065
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06065
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06065
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06065
    }
    com_06065.onclick = togg06065;
    list_06065.onclick = togg06065;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06066 = data[65];

    /*Récupere les données que je veut de la Commune */
    name_06066 = rows06066.Libellé_géographique;
    Pop_06066 = rows06066.Population_en_2017;
    Pop_017_06066 = rows06066.Pop_017_ans_2017;
    Pop_mediane_vote_06066 = rows06066.Popu_possible_voté;
    nbr_inscrit_06066 = rows06066.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06066').textContent = name_06066;
   
    let com_06066 = document.getElementById("f-path-06066");
    let list_06066 = document.getElementById("list_06066");


    function togg06066() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06066-01').classList.remove('visible')
        document.querySelector('#polar-chart_06066-01').classList.remove('visible')
        document.querySelector('#polar-chart_06066-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06066').classList.remove('visible')
        document.querySelector('#f-path-06066').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06066
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06066
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06066
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06066
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06066
    }
    com_06066.onclick = togg06066;
    list_06066.onclick = togg06066;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06067 = data[66];

    /*Récupere les données que je veut de la Commune */
    name_06067 = rows06067.Libellé_géographique;
    Pop_06067 = rows06067.Population_en_2017;
    Pop_017_06067 = rows06067.Pop_017_ans_2017;
    Pop_mediane_vote_06067 = rows06067.Popu_possible_voté;
    nbr_inscrit_06067 = rows06067.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06067').textContent = name_06067;
   
    let com_06067 = document.getElementById("f-path-06067");
    let list_06067 = document.getElementById("list_06067");


    function togg06067() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06067-01').classList.remove('visible')
        document.querySelector('#polar-chart_06067-01').classList.remove('visible')
        document.querySelector('#polar-chart_06067-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06067').classList.remove('visible')
        document.querySelector('#f-path-06067').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06067
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06067
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06067
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06067
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06067
    }
    com_06067.onclick = togg06067;
    list_06067.onclick = togg06067;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06068 = data[67];

    /*Récupere les données que je veut de la Commune */
    name_06068 = rows06068.Libellé_géographique;
    Pop_06068 = rows06068.Population_en_2017;
    Pop_017_06068 = rows06068.Pop_017_ans_2017;
    Pop_mediane_vote_06068 = rows06068.Popu_possible_voté;
    nbr_inscrit_06068 = rows06068.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06068').textContent = name_06068;
   
    let com_06068 = document.getElementById("f-path-06068");
    let list_06068 = document.getElementById("list_06068");


    function togg06068() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06068-01').classList.remove('visible')
        document.querySelector('#polar-chart_06068-01').classList.remove('visible')
        document.querySelector('#polar-chart_06068-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06068').classList.remove('visible')
        document.querySelector('#f-path-06068').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06068
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06068
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06068
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06068
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06068
    }
    com_06068.onclick = togg06068;
    list_06068.onclick = togg06068;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06069 = data[68];

    /*Récupere les données que je veut de la Commune */
    name_06069 = rows06069.Libellé_géographique;
    Pop_06069 = rows06069.Population_en_2017;
    Pop_017_06069 = rows06069.Pop_017_ans_2017;
    Pop_mediane_vote_06069 = rows06069.Popu_possible_voté;
    nbr_inscrit_06069 = rows06069.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06069').textContent = name_06069;
   
    let com_06069 = document.getElementById("f-path-06069");
    let list_06069 = document.getElementById("list_06069");


    function togg06069() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06069-01').classList.remove('visible')
        document.querySelector('#polar-chart_06069-01').classList.remove('visible')
        document.querySelector('#polar-chart_06069-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06069').classList.remove('visible')
        document.querySelector('#f-path-06069').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06069
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06069
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06069
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06069
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06069
    }
    com_06069.onclick = togg06069;
    list_06069.onclick = togg06069;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06070 = data[69];

    /*Récupere les données que je veut de la Commune */
    name_06070 = rows06070.Libellé_géographique;
    Pop_06070 = rows06070.Population_en_2017;
    Pop_017_06070 = rows06070.Pop_017_ans_2017;
    Pop_mediane_vote_06070 = rows06070.Popu_possible_voté;
    nbr_inscrit_06070 = rows06070.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06070').textContent = name_06070;
   
    let com_06070 = document.getElementById("f-path-06070");
    let list_06070 = document.getElementById("list_06070");


    function togg06070() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06070-01').classList.remove('visible')
        document.querySelector('#polar-chart_06070-01').classList.remove('visible')
        document.querySelector('#polar-chart_06070-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06070').classList.remove('visible')
        document.querySelector('#f-path-06070').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06070
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06070
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06070
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06070
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06070
    }
    com_06070.onclick = togg06070;
    list_06070.onclick = togg06070;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06071 = data[70];

    /*Récupere les données que je veut de la Commune */
    name_06071 = rows06071.Libellé_géographique;
    Pop_06071 = rows06071.Population_en_2017;
    Pop_017_06071 = rows06071.Pop_017_ans_2017;
    Pop_mediane_vote_06071 = rows06071.Popu_possible_voté;
    nbr_inscrit_06071 = rows06071.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06071').textContent = name_06071;
   
    let com_06071 = document.getElementById("f-path-06071");
    let list_06071 = document.getElementById("list_06071");


    function togg06071() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06071-01').classList.remove('visible')
        document.querySelector('#polar-chart_06071-01').classList.remove('visible')
        document.querySelector('#polar-chart_06071-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06071').classList.remove('visible')
        document.querySelector('#f-path-06071').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06071
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06071
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06071
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06071
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06071
    }
    com_06071.onclick = togg06071;
    list_06071.onclick = togg06071;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06072 = data[71];

    /*Récupere les données que je veut de la Commune */
    name_06072 = rows06072.Libellé_géographique;
    Pop_06072 = rows06072.Population_en_2017;
    Pop_017_06072 = rows06072.Pop_017_ans_2017;
    Pop_mediane_vote_06072 = rows06072.Popu_possible_voté;
    nbr_inscrit_06072 = rows06072.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06072').textContent = name_06072;
   
    let com_06072 = document.getElementById("f-path-06072");
    let list_06072 = document.getElementById("list_06072");


    function togg06072() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06072-01').classList.remove('visible')
        document.querySelector('#polar-chart_06072-01').classList.remove('visible')
        document.querySelector('#polar-chart_06072-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06072').classList.remove('visible')
        document.querySelector('#f-path-06072').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06072
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06072
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06072
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06072
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06072
    }
    com_06072.onclick = togg06072;
    list_06072.onclick = togg06072;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06073 = data[72];

    /*Récupere les données que je veut de la Commune */
    name_06073 = rows06073.Libellé_géographique;
    Pop_06073 = rows06073.Population_en_2017;
    Pop_017_06073 = rows06073.Pop_017_ans_2017;
    Pop_mediane_vote_06073 = rows06073.Popu_possible_voté;
    nbr_inscrit_06073 = rows06073.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06073').textContent = name_06073;
   
    let com_06073 = document.getElementById("f-path-06073");
    let list_06073 = document.getElementById("list_06073");


    function togg06073() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06073-01').classList.remove('visible')
        document.querySelector('#polar-chart_06073-01').classList.remove('visible')
        document.querySelector('#polar-chart_06073-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06073').classList.remove('visible')
        document.querySelector('#f-path-06073').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06073
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06073
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06073
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06073
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06073
    }
    com_06073.onclick = togg06073;
    list_06073.onclick = togg06073;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06074 = data[73];

    /*Récupere les données que je veut de la Commune */
    name_06074 = rows06074.Libellé_géographique;
    Pop_06074 = rows06074.Population_en_2017;
    Pop_017_06074 = rows06074.Pop_017_ans_2017;
    Pop_mediane_vote_06074 = rows06074.Popu_possible_voté;
    nbr_inscrit_06074 = rows06074.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06074').textContent = name_06074;
   
    let com_06074 = document.getElementById("f-path-06074");
    let list_06074 = document.getElementById("list_06074");


    function togg06074() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06074-01').classList.remove('visible')
        document.querySelector('#polar-chart_06074-01').classList.remove('visible')
        document.querySelector('#polar-chart_06074-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06074').classList.remove('visible')
        document.querySelector('#f-path-06074').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06074
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06074
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06074
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06074
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06074
    }
    com_06074.onclick = togg06074;
    list_06074.onclick = togg06074;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06075 = data[74];

    /*Récupere les données que je veut de la Commune */
    name_06075 = rows06075.Libellé_géographique;
    Pop_06075 = rows06075.Population_en_2017;
    Pop_017_06075 = rows06075.Pop_017_ans_2017;
    Pop_mediane_vote_06075 = rows06075.Popu_possible_voté;
    nbr_inscrit_06075 = rows06075.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06075').textContent = name_06075;
   
    let com_06075 = document.getElementById("f-path-06075");
    let list_06075 = document.getElementById("list_06075");


    function togg06075() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06075-01').classList.remove('visible')
        document.querySelector('#polar-chart_06075-01').classList.remove('visible')
        document.querySelector('#polar-chart_06075-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06075').classList.remove('visible')
        document.querySelector('#f-path-06075').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06075
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06075
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06075
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06075
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06075
    }
    com_06075.onclick = togg06075;
    list_06075.onclick = togg06075;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06076 = data[75];

    /*Récupere les données que je veut de la Commune */
    name_06076 = rows06076.Libellé_géographique;
    Pop_06076 = rows06076.Population_en_2017;
    Pop_017_06076 = rows06076.Pop_017_ans_2017;
    Pop_mediane_vote_06076 = rows06076.Popu_possible_voté;
    nbr_inscrit_06076 = rows06076.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06076').textContent = name_06076;
   
    let com_06076 = document.getElementById("f-path-06076");
    let list_06076 = document.getElementById("list_06076");


    function togg06076() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06076-01').classList.remove('visible')
        document.querySelector('#polar-chart_06076-01').classList.remove('visible')
        document.querySelector('#polar-chart_06076-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06076').classList.remove('visible')
        document.querySelector('#f-path-06076').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06076
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06076
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06076
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06076
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06076
    }
    com_06076.onclick = togg06076;
    list_06076.onclick = togg06076;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06077 = data[76];

    /*Récupere les données que je veut de la Commune */
    name_06077 = rows06077.Libellé_géographique;
    Pop_06077 = rows06077.Population_en_2017;
    Pop_017_06077 = rows06077.Pop_017_ans_2017;
    Pop_mediane_vote_06077 = rows06077.Popu_possible_voté;
    nbr_inscrit_06077 = rows06077.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06077').textContent = name_06077;
   
    let com_06077 = document.getElementById("f-path-06077");
    let list_06077 = document.getElementById("list_06077");


    function togg06077() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06077-01').classList.remove('visible')
        document.querySelector('#polar-chart_06077-01').classList.remove('visible')
        document.querySelector('#polar-chart_06077-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06077').classList.remove('visible')
        document.querySelector('#f-path-06077').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06077
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06077
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06077
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06077
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06077
    }
    com_06077.onclick = togg06077;
    list_06077.onclick = togg06077;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06078 = data[77];

    /*Récupere les données que je veut de la Commune */
    name_06078 = rows06078.Libellé_géographique;
    Pop_06078 = rows06078.Population_en_2017;
    Pop_017_06078 = rows06078.Pop_017_ans_2017;
    Pop_mediane_vote_06078 = rows06078.Popu_possible_voté;
    nbr_inscrit_06078 = rows06078.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06078').textContent = name_06078;
   
    let com_06078 = document.getElementById("f-path-06078");
    let list_06078 = document.getElementById("list_06078");


    function togg06078() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06078-01').classList.remove('visible')
        document.querySelector('#polar-chart_06078-01').classList.remove('visible')
        document.querySelector('#polar-chart_06078-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06078').classList.remove('visible')
        document.querySelector('#f-path-06078').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06078
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06078
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06078
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06078
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06078
    }
    com_06078.onclick = togg06078;
    list_06078.onclick = togg06078;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06079 = data[78];

    /*Récupere les données que je veut de la Commune */
    name_06079 = rows06079.Libellé_géographique;
    Pop_06079 = rows06079.Population_en_2017;
    Pop_017_06079 = rows06079.Pop_017_ans_2017;
    Pop_mediane_vote_06079 = rows06079.Popu_possible_voté;
    nbr_inscrit_06079 = rows06079.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06079').textContent = name_06079;
   
    let com_06079 = document.getElementById("f-path-06079");
    let list_06079 = document.getElementById("list_06079");


    function togg06079() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06079-01').classList.remove('visible')
        document.querySelector('#polar-chart_06079-01').classList.remove('visible')
        document.querySelector('#polar-chart_06079-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06079').classList.remove('visible')
        document.querySelector('#f-path-06079').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06079
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06079
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06079
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06079
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06079
    }
    com_06079.onclick = togg06079;
    list_06079.onclick = togg06079;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06080 = data[79];

    /*Récupere les données que je veut de la Commune */
    name_06080 = rows06080.Libellé_géographique;
    Pop_06080 = rows06080.Population_en_2017;
    Pop_017_06080 = rows06080.Pop_017_ans_2017;
    Pop_mediane_vote_06080 = rows06080.Popu_possible_voté;
    nbr_inscrit_06080 = rows06080.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06080').textContent = name_06080;
   
    let com_06080 = document.getElementById("f-path-06080");
    let list_06080 = document.getElementById("list_06080");


    function togg06080() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06080-01').classList.remove('visible')
        document.querySelector('#polar-chart_06080-01').classList.remove('visible')
        document.querySelector('#polar-chart_06080-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06080').classList.remove('visible')
        document.querySelector('#f-path-06080').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06080
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06080
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06080
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06080
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06080
    }
    com_06080.onclick = togg06080;
    list_06080.onclick = togg06080;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06081 = data[80];

    /*Récupere les données que je veut de la Commune */
    name_06081 = rows06081.Libellé_géographique;
    Pop_06081 = rows06081.Population_en_2017;
    Pop_017_06081 = rows06081.Pop_017_ans_2017;
    Pop_mediane_vote_06081 = rows06081.Popu_possible_voté;
    nbr_inscrit_06081 = rows06081.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06081').textContent = name_06081;
   
    let com_06081 = document.getElementById("f-path-06081");
    let list_06081 = document.getElementById("list_06081");


    function togg06081() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06081-01').classList.remove('visible')
        document.querySelector('#polar-chart_06081-01').classList.remove('visible')
        document.querySelector('#polar-chart_06081-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06081').classList.remove('visible')
        document.querySelector('#f-path-06081').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06081
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06081
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06081
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06081
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06081
    }
    com_06081.onclick = togg06081;
    list_06081.onclick = togg06081;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06082 = data[81];

    /*Récupere les données que je veut de la Commune */
    name_06082 = rows06082.Libellé_géographique;
    Pop_06082 = rows06082.Population_en_2017;
    Pop_017_06082 = rows06082.Pop_017_ans_2017;
    Pop_mediane_vote_06082 = rows06082.Popu_possible_voté;
    nbr_inscrit_06082 = rows06082.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06082').textContent = name_06082;
   
    let com_06082 = document.getElementById("f-path-06082");
    let list_06082 = document.getElementById("list_06082");


    function togg06082() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06082-01').classList.remove('visible')
        document.querySelector('#polar-chart_06082-01').classList.remove('visible')
        document.querySelector('#polar-chart_06082-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06082').classList.remove('visible')
        document.querySelector('#f-path-06082').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06082
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06082
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06082
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06082
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06082
    }
    com_06082.onclick = togg06082;
    list_06082.onclick = togg06082;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06083 = data[82];

    /*Récupere les données que je veut de la Commune */
    name_06083 = rows06083.Libellé_géographique;
    Pop_06083 = rows06083.Population_en_2017;
    Pop_017_06083 = rows06083.Pop_017_ans_2017;
    Pop_mediane_vote_06083 = rows06083.Popu_possible_voté;
    nbr_inscrit_06083 = rows06083.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06083').textContent = name_06083;
   
    let com_06083 = document.getElementById("f-path-06083");
    let list_06083 = document.getElementById("list_06083");


    function togg06083() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06083-01').classList.remove('visible')
        document.querySelector('#polar-chart_06083-01').classList.remove('visible')
        document.querySelector('#polar-chart_06083-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06083').classList.remove('visible')
        document.querySelector('#f-path-06083').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06083
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06083
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06083
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06083
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06083
    }
    com_06083.onclick = togg06083;
    list_06083.onclick = togg06083;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06084 = data[83];

    /*Récupere les données que je veut de la Commune */
    name_06084 = rows06084.Libellé_géographique;
    Pop_06084 = rows06084.Population_en_2017;
    Pop_017_06084 = rows06084.Pop_017_ans_2017;
    Pop_mediane_vote_06084 = rows06084.Popu_possible_voté;
    nbr_inscrit_06084 = rows06084.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06084').textContent = name_06084;
   
    let com_06084 = document.getElementById("f-path-06084");
    let list_06084 = document.getElementById("list_06084");


    function togg06084() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06084-01').classList.remove('visible')
        document.querySelector('#polar-chart_06084-01').classList.remove('visible')
        document.querySelector('#polar-chart_06084-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06084').classList.remove('visible')
        document.querySelector('#f-path-06084').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06084
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06084
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06084
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06084
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06084
    }
    com_06084.onclick = togg06084;
    list_06084.onclick = togg06084;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06085 = data[84];

    /*Récupere les données que je veut de la Commune */
    name_06085 = rows06085.Libellé_géographique;
    Pop_06085 = rows06085.Population_en_2017;
    Pop_017_06085 = rows06085.Pop_017_ans_2017;
    Pop_mediane_vote_06085 = rows06085.Popu_possible_voté;
    nbr_inscrit_06085 = rows06085.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06085').textContent = name_06085;
   
    let com_06085 = document.getElementById("f-path-06085");
    let list_06085 = document.getElementById("list_06085");


    function togg06085() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06085-01').classList.remove('visible')
        document.querySelector('#polar-chart_06085-01').classList.remove('visible')
        document.querySelector('#polar-chart_06085-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06085').classList.remove('visible')
        document.querySelector('#f-path-06085').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06085
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06085
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06085
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06085
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06085
    }
    com_06085.onclick = togg06085;
    list_06085.onclick = togg06085;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06086 = data[85];

    /*Récupere les données que je veut de la Commune */
    name_06086 = rows06086.Libellé_géographique;
    Pop_06086 = rows06086.Population_en_2017;
    Pop_017_06086 = rows06086.Pop_017_ans_2017;
    Pop_mediane_vote_06086 = rows06086.Popu_possible_voté;
    nbr_inscrit_06086 = rows06086.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06086').textContent = name_06086;
   
    let com_06086 = document.getElementById("f-path-06086");
    let list_06086 = document.getElementById("list_06086");


    function togg06086() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06086-01').classList.remove('visible')
        document.querySelector('#polar-chart_06086-01').classList.remove('visible')
        document.querySelector('#polar-chart_06086-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06086').classList.remove('visible')
        document.querySelector('#f-path-06086').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06086
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06086
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06086
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06086
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06086
    }
    com_06086.onclick = togg06086;
    list_06086.onclick = togg06086;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06087 = data[86];

    /*Récupere les données que je veut de la Commune */
    name_06087 = rows06087.Libellé_géographique;
    Pop_06087 = rows06087.Population_en_2017;
    Pop_017_06087 = rows06087.Pop_017_ans_2017;
    Pop_mediane_vote_06087 = rows06087.Popu_possible_voté;
    nbr_inscrit_06087 = rows06087.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06087').textContent = name_06087;
   
    let com_06087 = document.getElementById("f-path-06087");
    let list_06087 = document.getElementById("list_06087");


    function togg06087() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06087-01').classList.remove('visible')
        document.querySelector('#polar-chart_06087-01').classList.remove('visible')
        document.querySelector('#polar-chart_06087-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06087').classList.remove('visible')
        document.querySelector('#f-path-06087').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06087
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06087
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06087
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06087
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06087
    }
    com_06087.onclick = togg06087;
    list_06087.onclick = togg06087;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06088 = data[87];

    /*Récupere les données que je veut de la Commune */
    name_06088 = rows06088.Libellé_géographique;
    Pop_06088 = rows06088.Population_en_2017;
    Pop_017_06088 = rows06088.Pop_017_ans_2017;
    Pop_mediane_vote_06088 = rows06088.Popu_possible_voté;
    nbr_inscrit_06088 = rows06088.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06088').textContent = name_06088;
   
    let com_06088 = document.getElementById("f-path-06088");
    let list_06088 = document.getElementById("list_06088");


    function togg06088() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06088-01').classList.remove('visible')
        document.querySelector('#polar-chart_06088-01').classList.remove('visible')
        document.querySelector('#polar-chart_06088-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06088').classList.remove('visible')
        document.querySelector('#f-path-06088').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06088
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06088
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06088
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06088
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06088
    }
    com_06088.onclick = togg06088;
    list_06088.onclick = togg06088;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06089 = data[88];

    /*Récupere les données que je veut de la Commune */
    name_06089 = rows06089.Libellé_géographique;
    Pop_06089 = rows06089.Population_en_2017;
    Pop_017_06089 = rows06089.Pop_017_ans_2017;
    Pop_mediane_vote_06089 = rows06089.Popu_possible_voté;
    nbr_inscrit_06089 = rows06089.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06089').textContent = name_06089;
   
    let com_06089 = document.getElementById("f-path-06089");
    let list_06089 = document.getElementById("list_06089");


    function togg06089() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06089-01').classList.remove('visible')
        document.querySelector('#polar-chart_06089-01').classList.remove('visible')
        document.querySelector('#polar-chart_06089-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06089').classList.remove('visible')
        document.querySelector('#f-path-06089').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06089
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06089
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06089
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06089
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06089
    }
    com_06089.onclick = togg06089;
    list_06089.onclick = togg06089;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06090 = data[89];

    /*Récupere les données que je veut de la Commune */
    name_06090 = rows06090.Libellé_géographique;
    Pop_06090 = rows06090.Population_en_2017;
    Pop_017_06090 = rows06090.Pop_017_ans_2017;
    Pop_mediane_vote_06090 = rows06090.Popu_possible_voté;
    nbr_inscrit_06090 = rows06090.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06090').textContent = name_06090;
   
    let com_06090 = document.getElementById("f-path-06090");
    let list_06090 = document.getElementById("list_06090");


    function togg06090() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06090-01').classList.remove('visible')
        document.querySelector('#polar-chart_06090-01').classList.remove('visible')
        document.querySelector('#polar-chart_06090-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06090').classList.remove('visible')
        document.querySelector('#f-path-06090').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06090
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06090
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06090
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06090
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06090
    }
    com_06090.onclick = togg06090;
    list_06090.onclick = togg06090;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06091 = data[90];

    /*Récupere les données que je veut de la Commune */
    name_06091 = rows06091.Libellé_géographique;
    Pop_06091 = rows06091.Population_en_2017;
    Pop_017_06091 = rows06091.Pop_017_ans_2017;
    Pop_mediane_vote_06091 = rows06091.Popu_possible_voté;
    nbr_inscrit_06091 = rows06091.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06091').textContent = name_06091;
   
    let com_06091 = document.getElementById("f-path-06091");
    let list_06091 = document.getElementById("list_06091");


    function togg06091() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06091-01').classList.remove('visible')
        document.querySelector('#polar-chart_06091-01').classList.remove('visible')
        document.querySelector('#polar-chart_06091-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06091').classList.remove('visible')
        document.querySelector('#f-path-06091').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06091
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06091
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06091
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06091
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06091
    }
    com_06091.onclick = togg06091;
    list_06091.onclick = togg06091;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06092 = data[91];

    /*Récupere les données que je veut de la Commune */
    name_06092 = rows06092.Libellé_géographique;
    Pop_06092 = rows06092.Population_en_2017;
    Pop_017_06092 = rows06092.Pop_017_ans_2017;
    Pop_mediane_vote_06092 = rows06092.Popu_possible_voté;
    nbr_inscrit_06092 = rows06092.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06092').textContent = name_06092;
   
    let com_06092 = document.getElementById("f-path-06092");
    let list_06092 = document.getElementById("list_06092");


    function togg06092() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06092-01').classList.remove('visible')
        document.querySelector('#polar-chart_06092-01').classList.remove('visible')
        document.querySelector('#polar-chart_06092-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06092').classList.remove('visible')
        document.querySelector('#f-path-06092').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06092
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06092
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06092
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06092
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06092
    }
    com_06092.onclick = togg06092;
    list_06092.onclick = togg06092;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06093 = data[92];

    /*Récupere les données que je veut de la Commune */
    name_06093 = rows06093.Libellé_géographique;
    Pop_06093 = rows06093.Population_en_2017;
    Pop_017_06093 = rows06093.Pop_017_ans_2017;
    Pop_mediane_vote_06093 = rows06093.Popu_possible_voté;
    nbr_inscrit_06093 = rows06093.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06093').textContent = name_06093;
   
    let com_06093 = document.getElementById("f-path-06093");
    let list_06093 = document.getElementById("list_06093");


    function togg06093() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06093-01').classList.remove('visible')
        document.querySelector('#polar-chart_06093-01').classList.remove('visible')
        document.querySelector('#polar-chart_06093-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06093').classList.remove('visible')
        document.querySelector('#f-path-06093').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06093
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06093
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06093
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06093
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06093
    }
    com_06093.onclick = togg06093;
    list_06093.onclick = togg06093;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06094 = data[93];

    /*Récupere les données que je veut de la Commune */
    name_06094 = rows06094.Libellé_géographique;
    Pop_06094 = rows06094.Population_en_2017;
    Pop_017_06094 = rows06094.Pop_017_ans_2017;
    Pop_mediane_vote_06094 = rows06094.Popu_possible_voté;
    nbr_inscrit_06094 = rows06094.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06094').textContent = name_06094;
   
    let com_06094 = document.getElementById("f-path-06094");
    let list_06094 = document.getElementById("list_06094");


    function togg06094() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06094-01').classList.remove('visible')
        document.querySelector('#polar-chart_06094-01').classList.remove('visible')
        document.querySelector('#polar-chart_06094-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06094').classList.remove('visible')
        document.querySelector('#f-path-06094').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06094
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06094
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06094
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06094
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06094
    }
    com_06094.onclick = togg06094;
    list_06094.onclick = togg06094;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06095 = data[94];

    /*Récupere les données que je veut de la Commune */
    name_06095 = rows06095.Libellé_géographique;
    Pop_06095 = rows06095.Population_en_2017;
    Pop_017_06095 = rows06095.Pop_017_ans_2017;
    Pop_mediane_vote_06095 = rows06095.Popu_possible_voté;
    nbr_inscrit_06095 = rows06095.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06095').textContent = name_06095;
   
    let com_06095 = document.getElementById("f-path-06095");
    let list_06095 = document.getElementById("list_06095");


    function togg06095() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06095-01').classList.remove('visible')
        document.querySelector('#polar-chart_06095-01').classList.remove('visible')
        document.querySelector('#polar-chart_06095-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06095').classList.remove('visible')
        document.querySelector('#f-path-06095').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06095
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06095
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06095
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06095
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06095
    }
    com_06095.onclick = togg06095;
    list_06095.onclick = togg06095;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06096 = data[95];

    /*Récupere les données que je veut de la Commune */
    name_06096 = rows06096.Libellé_géographique;
    Pop_06096 = rows06096.Population_en_2017;
    Pop_017_06096 = rows06096.Pop_017_ans_2017;
    Pop_mediane_vote_06096 = rows06096.Popu_possible_voté;
    nbr_inscrit_06096 = rows06096.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06096').textContent = name_06096;
   
    let com_06096 = document.getElementById("f-path-06096");
    let list_06096 = document.getElementById("list_06096");


    function togg06096() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06096-01').classList.remove('visible')
        document.querySelector('#polar-chart_06096-01').classList.remove('visible')
        document.querySelector('#polar-chart_06096-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06096').classList.remove('visible')
        document.querySelector('#f-path-06096').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06096
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06096
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06096
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06096
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06096
    }
    com_06096.onclick = togg06096;
    list_06096.onclick = togg06096;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06097 = data[96];

    /*Récupere les données que je veut de la Commune */
    name_06097 = rows06097.Libellé_géographique;
    Pop_06097 = rows06097.Population_en_2017;
    Pop_017_06097 = rows06097.Pop_017_ans_2017;
    Pop_mediane_vote_06097 = rows06097.Popu_possible_voté;
    nbr_inscrit_06097 = rows06097.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06097').textContent = name_06097;
   
    let com_06097 = document.getElementById("f-path-06097");
    let list_06097 = document.getElementById("list_06097");


    function togg06097() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06097-01').classList.remove('visible')
        document.querySelector('#polar-chart_06097-01').classList.remove('visible')
        document.querySelector('#polar-chart_06097-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06097').classList.remove('visible')
        document.querySelector('#f-path-06097').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06097
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06097
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06097
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06097
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06097
    }
    com_06097.onclick = togg06097;
    list_06097.onclick = togg06097;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06098 = data[97];

    /*Récupere les données que je veut de la Commune */
    name_06098 = rows06098.Libellé_géographique;
    Pop_06098 = rows06098.Population_en_2017;
    Pop_017_06098 = rows06098.Pop_017_ans_2017;
    Pop_mediane_vote_06098 = rows06098.Popu_possible_voté;
    nbr_inscrit_06098 = rows06098.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06098').textContent = name_06098;
   
    let com_06098 = document.getElementById("f-path-06098");
    let list_06098 = document.getElementById("list_06098");


    function togg06098() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06098-01').classList.remove('visible')
        document.querySelector('#polar-chart_06098-01').classList.remove('visible')
        document.querySelector('#polar-chart_06098-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06098').classList.remove('visible')
        document.querySelector('#f-path-06098').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06098
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06098
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06098
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06098
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06098
    }
    com_06098.onclick = togg06098;
    list_06098.onclick = togg06098;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06099 = data[98];

    /*Récupere les données que je veut de la Commune */
    name_06099 = rows06099.Libellé_géographique;
    Pop_06099 = rows06099.Population_en_2017;
    Pop_017_06099 = rows06099.Pop_017_ans_2017;
    Pop_mediane_vote_06099 = rows06099.Popu_possible_voté;
    nbr_inscrit_06099 = rows06099.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06099').textContent = name_06099;
   
    let com_06099 = document.getElementById("f-path-06099");
    let list_06099 = document.getElementById("list_06099");


    function togg06099() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06099-01').classList.remove('visible')
        document.querySelector('#polar-chart_06099-01').classList.remove('visible')
        document.querySelector('#polar-chart_06099-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06099').classList.remove('visible')
        document.querySelector('#f-path-06099').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06099
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06099
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06099
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06099
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06099
    }
    com_06099.onclick = togg06099;
    list_06099.onclick = togg06099;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06100 = data[99];

    /*Récupere les données que je veut de la Commune */
    name_06100 = rows06100.Libellé_géographique;
    Pop_06100 = rows06100.Population_en_2017;
    Pop_017_06100 = rows06100.Pop_017_ans_2017;
    Pop_mediane_vote_06100 = rows06100.Popu_possible_voté;
    nbr_inscrit_06100 = rows06100.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06100').textContent = name_06100;
   
    let com_06100 = document.getElementById("f-path-06100");
    let list_06100 = document.getElementById("list_06100");


    function togg06100() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06100-01').classList.remove('visible')
        document.querySelector('#polar-chart_06100-01').classList.remove('visible')
        document.querySelector('#polar-chart_06100-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06100').classList.remove('visible')
        document.querySelector('#f-path-06100').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06100
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06100
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06100
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06100
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06100
    }
    com_06100.onclick = togg06100;
    list_06100.onclick = togg06100;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06101 = data[100];
    /*Récupere les données que je veut de la Commune */
    name_06101 = rows06101.Libellé_géographique;
    Pop_06101 = rows06101.Population_en_2017;
    Pop_017_06101 = rows06101.Pop_017_ans_2017;
    Pop_mediane_vote_06101 = rows06101.Popu_possible_voté;
    nbr_inscrit_06101 = rows06101.Inscrits;
    /*Pose dans le Menu*/
    document.querySelector('#list_06101').textContent = name_06101;
/*--------------------------------------------------------------------------*/
    var body = document.querySelector('#body')
    var path = document.querySelector('#map01')
    /******************************************************************** */
    let com_06101 = document.getElementById("f-path-06101");
    let list_06101 = document.getElementById("list_06101");
    function togg06101() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06101-01').classList.remove('visible')
        document.querySelector('#polar-chart_06101-01').classList.remove('visible')
        document.querySelector('#polar-chart_06101-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06101').classList.remove('visible')
        document.querySelector('#f-path-06101').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06101
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06101
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06101
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06101
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06101
    }
    com_06101.onclick = togg06101;
    list_06101.onclick = togg06101;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06102 = data[101];
    /*Récupere les données que je veut de la Commune */
    name_06102 = rows06102.Libellé_géographique;
    Pop_06102 = rows06102.Population_en_2017;
    Pop_017_06102 = rows06102.Pop_017_ans_2017;
    Pop_mediane_vote_06102 = rows06102.Popu_possible_voté;
    nbr_inscrit_06102 = rows06102.Inscrits;  
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06102').textContent = name_06102;
/*--------------------------------------------------------------------------*/
    let com_06102 = document.getElementById("f-path-06102");
    let list_06102 = document.getElementById("list_06102");
    /******************************************************************** */
    function togg06102() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06102-01').classList.remove('visible')
        document.querySelector('#polar-chart_06102-01').classList.remove('visible')
        document.querySelector('#polar-chart_06102-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06102').classList.remove('visible')
        document.querySelector('#f-path-06102').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06102;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06102
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06102
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06102
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06102
    }
    com_06102.onclick = togg06102;
    list_06102.onclick = togg06102;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06103 = data[102];
    /*Récupere les données que je veut de la Commune */
    name_06103 = rows06103.Libellé_géographique;
    Pop_06103 = rows06103.Population_en_2017;
    Pop_017_06103 = rows06103.Pop_017_ans_2017;
    Pop_mediane_vote_06103 = rows06103.Popu_possible_voté;
    nbr_inscrit_06103 = rows06103.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06103').textContent = name_06103;
    let com_06103 = document.getElementById("f-path-06103");
    let list_06103 = document.getElementById("list_06103");
    function togg06103() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06103-01').classList.remove('visible')
        document.querySelector('#polar-chart_06103-01').classList.remove('visible')
        document.querySelector('#polar-chart_06103-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06103').classList.remove('visible')
        document.querySelector('#f-path-06103').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06103;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06103
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06103
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06103
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06103
    }
    com_06103.onclick = togg06103;
    list_06103.onclick = togg06103;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06104 = data[103];
    /*Récupere les données que je veut de la Commune */
    name_06104 = rows06104.Libellé_géographique;
    Pop_06104 = rows06104.Population_en_2017;
    Pop_017_06104 = rows06104.Pop_017_ans_2017;
    Pop_mediane_vote_06104 = rows06104.Popu_possible_voté;
    nbr_inscrit_06104 = rows06104.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06104').textContent = name_06104;
    let com_06104 = document.getElementById("f-path-06104");
    let list_06104 = document.getElementById("list_06104");
    function togg06104() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06104-01').classList.remove('visible')
        document.querySelector('#polar-chart_06104-01').classList.remove('visible')
        document.querySelector('#polar-chart_06104-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06104').classList.remove('visible')
        document.querySelector('#f-path-06104').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06104;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06104
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06104
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06104
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06104
    }
    com_06104.onclick = togg06104;
    list_06104.onclick = togg06104;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06105 = data[104];
    /*Récupere les données que je veut de la Commune */
    name_06105 = rows06105.Libellé_géographique;
    Pop_06105 = rows06105.Population_en_2017;
    Pop_017_06105 = rows06105.Pop_017_ans_2017;
    Pop_mediane_vote_06105 = rows06105.Popu_possible_voté;
    nbr_inscrit_06105 = rows06105.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06105').textContent = name_06105;
    let com_06105 = document.getElementById("f-path-06105");
    let list_06105 = document.getElementById("list_06105");
    function togg06105() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06105-01').classList.remove('visible')
        document.querySelector('#polar-chart_06105-01').classList.remove('visible')
        document.querySelector('#polar-chart_06105-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06105').classList.remove('visible')
        document.querySelector('#f-path-06105').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06105
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06105
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06105
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06105
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06105
    }
    com_06105.onclick = togg06105;
    list_06105.onclick = togg06105;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06106 = data[105];
    /*Récupere les données que je veut de la Commune */
    name_06106 = rows06106.Libellé_géographique;
    Pop_06106 = rows06106.Population_en_2017;
    Pop_017_06106 = rows06106.Pop_017_ans_2017;
    Pop_mediane_vote_06106 = rows06106.Popu_possible_voté;
    nbr_inscrit_06106 = rows06106.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06106').textContent = name_06106;
    let com_06106 = document.getElementById("f-path-06106");
    let list_06106 = document.getElementById("list_06106");
    function togg06106() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06106-01').classList.remove('visible')
        document.querySelector('#polar-chart_06106-01').classList.remove('visible')
        document.querySelector('#polar-chart_06106-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06106').classList.remove('visible')
        document.querySelector('#f-path-06106').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06106
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06106
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06106
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06106
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06106
    }
    com_06106.onclick = togg06106;
    list_06106.onclick = togg06106;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06107 = data[106];
    /*Récupere les données que je veut de la Commune */
    name_06107 = rows06107.Libellé_géographique;
    Pop_06107 = rows06107.Population_en_2017;
    Pop_017_06107 = rows06107.Pop_017_ans_2017;
    Pop_mediane_vote_06107 = rows06107.Popu_possible_voté;
    nbr_inscrit_06107 = rows06107.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06107').textContent = name_06107; 
    let com_06107 = document.getElementById("f-path-06107");
    let list_06107 = document.getElementById("list_06107");
    function togg06107() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06107-01').classList.remove('visible')
        document.querySelector('#polar-chart_06107-01').classList.remove('visible')
        document.querySelector('#polar-chart_06107-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06107').classList.remove('visible')
        document.querySelector('#f-path-06107').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06107
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06107
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06107
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06107
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06107
    }
    com_06107.onclick = togg06107;
    list_06107.onclick = togg06107;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06108 = data[107];
    
    /*Récupere les données que je veut de la Commune */
    name_06108 = rows06108.Libellé_géographique;
    Pop_06108 = rows06108.Population_en_2017;
    Pop_017_06108 = rows06108.Pop_017_ans_2017;
    Pop_mediane_vote_06108 = rows06108.Popu_possible_voté;
    nbr_inscrit_06108 = rows06108.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06108').textContent = name_06108;
   
    let com_06108 = document.getElementById("f-path-06108");
    let list_06108 = document.getElementById("list_06108");


    function togg06108() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06108-01').classList.remove('visible')
        document.querySelector('#polar-chart_06108-01').classList.remove('visible')
        document.querySelector('#polar-chart_06108-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06108').classList.remove('visible')
        document.querySelector('#f-path-06108').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06108
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06108
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06108
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06108
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06108
    }
    com_06108.onclick = togg06108;
    list_06108.onclick = togg06108;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06109 = data[108];
    
    /*Récupere les données que je veut de la Commune */
    name_06109 = rows06109.Libellé_géographique;
    Pop_06109 = rows06109.Population_en_2017;
    Pop_017_06109 = rows06109.Pop_017_ans_2017;
    Pop_mediane_vote_06109 = rows06109.Popu_possible_voté;
    nbr_inscrit_06109 = rows06109.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06109').textContent = name_06109;

    let com_06109 = document.getElementById("f-path-06109");
    let list_06109 = document.getElementById("list_06109");


    function togg06109() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06109-01').classList.remove('visible')
        document.querySelector('#polar-chart_06109-01').classList.remove('visible')
        document.querySelector('#polar-chart_06109-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06109').classList.remove('visible')
        document.querySelector('#f-path-06109').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06109
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06109
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06109
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06109
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06109
    }
    com_06109.onclick = togg06109;
    list_06109.onclick = togg06109;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06110 = data[109];
 
    /*Récupere les données que je veut de la Commune */
    name_06110 = rows06110.Libellé_géographique;
    Pop_06110 = rows06110.Population_en_2017;
    Pop_017_06110 = rows06110.Pop_017_ans_2017;
    Pop_mediane_vote_06110 = rows06110.Popu_possible_voté;
    nbr_inscrit_06110 = rows06110.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06110').textContent = name_06110;

    let com_06110 = document.getElementById("f-path-06110");
    let list_06110 = document.getElementById("list_06110");


    function togg06110() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06110-01').classList.remove('visible')
        document.querySelector('#polar-chart_06110-01').classList.remove('visible')
        document.querySelector('#polar-chart_06110-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06110').classList.remove('visible')
        document.querySelector('#f-path-06110').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06110
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06110
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06110
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06110
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06110
    }
    com_06110.onclick = togg06110;
    list_06110.onclick = togg06110;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06111 = data[110];

    /*Récupere les données que je veut de la Commune */
    name_06111 = rows06111.Libellé_géographique;
    Pop_06111 = rows06111.Population_en_2017;
    Pop_017_06111 = rows06111.Pop_017_ans_2017;
    Pop_mediane_vote_06111 = rows06111.Popu_possible_voté;
    nbr_inscrit_06111 = rows06111.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06111').textContent = name_06111;
   
    let com_06111 = document.getElementById("f-path-06111");
    let list_06111 = document.getElementById("list_06111");


    function togg06111() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06111-01').classList.remove('visible')
        document.querySelector('#polar-chart_06111-01').classList.remove('visible')
        document.querySelector('#polar-chart_06111-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06111').classList.remove('visible')
        document.querySelector('#f-path-06111').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06111
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06111
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06111
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06111
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06111
    }
    com_06111.onclick = togg06111;
    list_06111.onclick = togg06111;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06112 = data[111];

    /*Récupere les données que je veut de la Commune */
    name_06112 = rows06112.Libellé_géographique;
    Pop_06112 = rows06112.Population_en_2017;
    Pop_017_06112 = rows06112.Pop_017_ans_2017;
    Pop_mediane_vote_06112 = rows06112.Popu_possible_voté;
    nbr_inscrit_06112 = rows06112.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06112').textContent = name_06112;
   
    let com_06112 = document.getElementById("f-path-06112");
    let list_06112 = document.getElementById("list_06112");


    function togg06112() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06112-01').classList.remove('visible')
        document.querySelector('#polar-chart_06112-01').classList.remove('visible')
        document.querySelector('#polar-chart_06112-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06112').classList.remove('visible')
        document.querySelector('#f-path-06112').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06112
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06112
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06112
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06112
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06112
    }
    com_06112.onclick = togg06112;
    list_06112.onclick = togg06112;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06113 = data[112];

    /*Récupere les données que je veut de la Commune */
    name_06113 = rows06113.Libellé_géographique;
    Pop_06113 = rows06113.Population_en_2017;
    Pop_017_06113 = rows06113.Pop_017_ans_2017;
    Pop_mediane_vote_06113 = rows06113.Popu_possible_voté;
    nbr_inscrit_06113 = rows06113.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06113').textContent = name_06113;
   
    let com_06113 = document.getElementById("f-path-06113");
    let list_06113 = document.getElementById("list_06113");


    function togg06113() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06113-01').classList.remove('visible')
        document.querySelector('#polar-chart_06113-01').classList.remove('visible')
        document.querySelector('#polar-chart_06113-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06113').classList.remove('visible')
        document.querySelector('#f-path-06113').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06113
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06113
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06113
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06113
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06113
    }
    com_06113.onclick = togg06113;
    list_06113.onclick = togg06113;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06114 = data[113];

    /*Récupere les données que je veut de la Commune */
    name_06114 = rows06114.Libellé_géographique;
    Pop_06114 = rows06114.Population_en_2017;
    Pop_017_06114 = rows06114.Pop_017_ans_2017;
    Pop_mediane_vote_06114 = rows06114.Popu_possible_voté;
    nbr_inscrit_06114 = rows06114.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06114').textContent = name_06114;
   
    let com_06114 = document.getElementById("f-path-06114");
    let list_06114 = document.getElementById("list_06114");


    function togg06114() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06114-01').classList.remove('visible')
        document.querySelector('#polar-chart_06114-01').classList.remove('visible')
        document.querySelector('#polar-chart_06114-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06114').classList.remove('visible')
        document.querySelector('#f-path-06114').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06114
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06114
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06114
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06114
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06114
    }
    com_06114.onclick = togg06114;
    list_06114.onclick = togg06114;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06115 = data[114];

    /*Récupere les données que je veut de la Commune */
    name_06115 = rows06115.Libellé_géographique;
    Pop_06115 = rows06115.Population_en_2017;
    Pop_017_06115 = rows06115.Pop_017_ans_2017;
    Pop_mediane_vote_06115 = rows06115.Popu_possible_voté;
    nbr_inscrit_06115 = rows06115.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06115').textContent = name_06115;
   
    let com_06115 = document.getElementById("f-path-06115");
    let list_06115 = document.getElementById("list_06115");


    function togg06115() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06115-01').classList.remove('visible')
        document.querySelector('#polar-chart_06115-01').classList.remove('visible')
        document.querySelector('#polar-chart_06115-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06115').classList.remove('visible')
        document.querySelector('#f-path-06115').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06115
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06115
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06115
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06115
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06115
    }
    com_06115.onclick = togg06115;
    list_06115.onclick = togg06115;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06116 = data[115];

    /*Récupere les données que je veut de la Commune */
    name_06116 = rows06116.Libellé_géographique;
    Pop_06116 = rows06116.Population_en_2017;
    Pop_017_06116 = rows06116.Pop_017_ans_2017;
    Pop_mediane_vote_06116 = rows06116.Popu_possible_voté;
    nbr_inscrit_06116 = rows06116.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06116').textContent = name_06116;
   
    let com_06116 = document.getElementById("f-path-06116");
    let list_06116 = document.getElementById("list_06116");


    function togg06116() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06116-01').classList.remove('visible')
        document.querySelector('#polar-chart_06116-01').classList.remove('visible')
        document.querySelector('#polar-chart_06116-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06116').classList.remove('visible')
        document.querySelector('#f-path-06116').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06116
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06116
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06116
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06116
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06116
    }
    com_06116.onclick = togg06116;
    list_06116.onclick = togg06116;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06117 = data[116];

    /*Récupere les données que je veut de la Commune */
    name_06117 = rows06117.Libellé_géographique;
    Pop_06117 = rows06117.Population_en_2017;
    Pop_017_06117 = rows06117.Pop_017_ans_2017;
    Pop_mediane_vote_06117 = rows06117.Popu_possible_voté;
    nbr_inscrit_06117 = rows06117.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06117').textContent = name_06117;
   
    let com_06117 = document.getElementById("f-path-06117");
    let list_06117 = document.getElementById("list_06117");


    function togg06117() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06117-01').classList.remove('visible')
        document.querySelector('#polar-chart_06117-01').classList.remove('visible')
        document.querySelector('#polar-chart_06117-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06117').classList.remove('visible')
        document.querySelector('#f-path-06117').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06117
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06117
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06117
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06117
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06117
    }
    com_06117.onclick = togg06117;
    list_06117.onclick = togg06117;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06118 = data[117];

    /*Récupere les données que je veut de la Commune */
    name_06118 = rows06118.Libellé_géographique;
    Pop_06118 = rows06118.Population_en_2017;
    Pop_017_06118 = rows06118.Pop_017_ans_2017;
    Pop_mediane_vote_06118 = rows06117.Popu_possible_voté;
    nbr_inscrit_06118 = rows06118.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06118').textContent = name_06118;
   
    let com_06118 = document.getElementById("f-path-06118");
    let list_06118 = document.getElementById("list_06118");


    function togg06118() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06118-01').classList.remove('visible')
        document.querySelector('#polar-chart_06118-01').classList.remove('visible')
        document.querySelector('#polar-chart_06118-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06118').classList.remove('visible')
        document.querySelector('#f-path-06118').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06118
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06118
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06118
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06118
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06118
    }
    com_06118.onclick = togg06118;
    list_06118.onclick = togg06118;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06119 = data[118];

    /*Récupere les données que je veut de la Commune */
    name_06119 = rows06119.Libellé_géographique;
    Pop_06119 = rows06119.Population_en_2017;
    Pop_017_06119 = rows06119.Pop_017_ans_2017;
    Pop_mediane_vote_06119 = rows06119.Popu_possible_voté;
    nbr_inscrit_06119 = rows06119.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06119').textContent = name_06119;
   
    let com_06119 = document.getElementById("f-path-06119");
    let list_06119 = document.getElementById("list_06119");


    function togg06119() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06119-01').classList.remove('visible')
        document.querySelector('#polar-chart_06119-01').classList.remove('visible')
        document.querySelector('#polar-chart_06119-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06119').classList.remove('visible')
        document.querySelector('#f-path-06119').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06119
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06119
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06119
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06119
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06119
    }
    com_06119.onclick = togg06119;
    list_06119.onclick = togg06119;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06120 = data[119];

    /*Récupere les données que je veut de la Commune */
    name_06120 = rows06120.Libellé_géographique;
    Pop_06120 = rows06120.Population_en_2017;
    Pop_017_06120 = rows06120.Pop_017_ans_2017;
    Pop_mediane_vote_06120 = rows06120.Popu_possible_voté;
    nbr_inscrit_06120 = rows06120.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06120').textContent = name_06120;
   
    let com_06120 = document.getElementById("f-path-06120");
    let list_06120 = document.getElementById("list_06120");


    function togg06120() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06120-01').classList.remove('visible')
        document.querySelector('#polar-chart_06120-01').classList.remove('visible')
        document.querySelector('#polar-chart_06120-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06120').classList.remove('visible')
        document.querySelector('#f-path-06120').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06120
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06120
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06120
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06120
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06120
    }
    com_06120.onclick = togg06120;
    list_06120.onclick = togg06120;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06121 = data[120];

    /*Récupere les données que je veut de la Commune */
    name_06121 = rows06121.Libellé_géographique;
    Pop_06121 = rows06121.Population_en_2017;
    Pop_017_06121 = rows06121.Pop_017_ans_2017;
    Pop_mediane_vote_06121 = rows06121.Popu_possible_voté;
    nbr_inscrit_06121 = rows06121.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06121').textContent = name_06121;
   
    let com_06121 = document.getElementById("f-path-06121");
    let list_06121 = document.getElementById("list_06121");


    function togg06121() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06121-01').classList.remove('visible')
        document.querySelector('#polar-chart_06121-01').classList.remove('visible')
        document.querySelector('#polar-chart_06121-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06121').classList.remove('visible')
        document.querySelector('#f-path-06121').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06121
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06121
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06121
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06121
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06121
    }
    com_06121.onclick = togg06121;
    list_06121.onclick = togg06121;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06122 = data[121];

    /*Récupere les données que je veut de la Commune */
    name_06122 = rows06122.Libellé_géographique;
    Pop_06122 = rows06122.Population_en_2017;
    Pop_017_06122 = rows06122.Pop_017_ans_2017;
    Pop_mediane_vote_06122 = rows06122.Popu_possible_voté;
    nbr_inscrit_06122 = rows06122.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06122').textContent = name_06122;
   
    let com_06122 = document.getElementById("f-path-06122");
    let list_06122 = document.getElementById("list_06122");


    function togg06122() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06122-01').classList.remove('visible')
        document.querySelector('#polar-chart_06122-01').classList.remove('visible')
        document.querySelector('#polar-chart_06122-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06122').classList.remove('visible')
        document.querySelector('#f-path-06122').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06122
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06122
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06122
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06122
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06122
    }
    com_06122.onclick = togg06122;
    list_06122.onclick = togg06122;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06123 = data[122];

    /*Récupere les données que je veut de la Commune */
    name_06123 = rows06123.Libellé_géographique;
    Pop_06123 = rows06123.Population_en_2017;
    Pop_017_06123 = rows06123.Pop_017_ans_2017;
    Pop_mediane_vote_06123 = rows06123.Popu_possible_voté;
    nbr_inscrit_06123 = rows06123.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06123').textContent = name_06123;
   
    let com_06123 = document.getElementById("f-path-06123");
    let list_06123 = document.getElementById("list_06123");


    function togg06123() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06123-01').classList.remove('visible')
        document.querySelector('#polar-chart_06123-01').classList.remove('visible')
        document.querySelector('#polar-chart_06123-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06123').classList.remove('visible')
        document.querySelector('#f-path-06123').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06123
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06123
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06123
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06123
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06123
    }
    com_06123.onclick = togg06123;
    list_06123.onclick = togg06123;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06124 = data[123];

    /*Récupere les données que je veut de la Commune */
    name_06124 = rows06124.Libellé_géographique;
    Pop_06124 = rows06124.Population_en_2017;
    Pop_017_06124 = rows06124.Pop_017_ans_2017;
    Pop_mediane_vote_06124 = rows06124.Popu_possible_voté;
    nbr_inscrit_06124 = rows06124.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06124').textContent = name_06124;
   
    let com_06124 = document.getElementById("f-path-06124");
    let list_06124 = document.getElementById("list_06124");


    function togg06124() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06124-01').classList.remove('visible')
        document.querySelector('#polar-chart_06124-01').classList.remove('visible')
        document.querySelector('#polar-chart_06124-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06124').classList.remove('visible')
        document.querySelector('#f-path-06124').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06124
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06124
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06124
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06124
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06124
    }
    com_06124.onclick = togg06124;
    list_06124.onclick = togg06124;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06125 = data[124];

    /*Récupere les données que je veut de la Commune */
    name_06125 = rows06125.Libellé_géographique;
    Pop_06125 = rows06125.Population_en_2017;
    Pop_017_06125 = rows06125.Pop_017_ans_2017;
    Pop_mediane_vote_06125 = rows06125.Popu_possible_voté;
    nbr_inscrit_06125 = rows06125.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06125').textContent = name_06125;
   
    let com_06125 = document.getElementById("f-path-06125");
    let list_06125 = document.getElementById("list_06125");


    function togg06125() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06125-01').classList.remove('visible')
        document.querySelector('#polar-chart_06125-01').classList.remove('visible')
        document.querySelector('#polar-chart_06125-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06125').classList.remove('visible')
        document.querySelector('#f-path-06125').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06125
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06125
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06125
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06125
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06125
    }
    com_06125.onclick = togg06125;
    list_06125.onclick = togg06125;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06126 = data[125];

    /*Récupere les données que je veut de la Commune */
    name_06126 = rows06126.Libellé_géographique;
    Pop_06126 = rows06126.Population_en_2017;
    Pop_017_06126 = rows06126.Pop_017_ans_2017;
    Pop_mediane_vote_06126 = rows06126.Popu_possible_voté;
    nbr_inscrit_06126 = rows06126.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06126').textContent = name_06126;
   
    let com_06126 = document.getElementById("f-path-06126");
    let list_06126 = document.getElementById("list_06126");


    function togg06126() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06126-01').classList.remove('visible')
        document.querySelector('#polar-chart_06126-01').classList.remove('visible')
        document.querySelector('#polar-chart_06126-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06126').classList.remove('visible')
        document.querySelector('#f-path-06126').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06126
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06126
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06126
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06126
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06126
    }
    com_06126.onclick = togg06126;
    list_06126.onclick = togg06126;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06127 = data[126];

    /*Récupere les données que je veut de la Commune */
    name_06127 = rows06127.Libellé_géographique;
    Pop_06127 = rows06127.Population_en_2017;
    Pop_017_06127 = rows06127.Pop_017_ans_2017;
    Pop_mediane_vote_06127 = rows06127.Popu_possible_voté;
    nbr_inscrit_06127 = rows06127.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06127').textContent = name_06127;
   
    let com_06127 = document.getElementById("f-path-06127");
    let list_06127 = document.getElementById("list_06127");


    function togg06127() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06127-01').classList.remove('visible')
        document.querySelector('#polar-chart_06127-01').classList.remove('visible')
        document.querySelector('#polar-chart_06127-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06127').classList.remove('visible')
        document.querySelector('#f-path-06127').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06127
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06127
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06127
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06127
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06127
    }
    com_06127.onclick = togg06127;
    list_06127.onclick = togg06127;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06128 = data[127];

    /*Récupere les données que je veut de la Commune */
    name_06128 = rows06128.Libellé_géographique;
    Pop_06128 = rows06128.Population_en_2017;
    Pop_017_06128 = rows06128.Pop_017_ans_2017;
    Pop_mediane_vote_06128 = rows06128.Popu_possible_voté;
    nbr_inscrit_06128 = rows06128.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06128').textContent = name_06128;
   
    let com_06128 = document.getElementById("f-path-06128");
    let list_06128 = document.getElementById("list_06128");


    function togg06128() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06128-01').classList.remove('visible')
        document.querySelector('#polar-chart_06128-01').classList.remove('visible')
        document.querySelector('#polar-chart_06128-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06128').classList.remove('visible')
        document.querySelector('#f-path-06128').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06128
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06128
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06128
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06128
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06128
    }
    com_06128.onclick = togg06128;
    list_06128.onclick = togg06128;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06129 = data[128];

    /*Récupere les données que je veut de la Commune */
    name_06129 = rows06129.Libellé_géographique;
    Pop_06129 = rows06129.Population_en_2017;
    Pop_017_06129 = rows06129.Pop_017_ans_2017;
    Pop_mediane_vote_06129 = rows06129.Popu_possible_voté;
    nbr_inscrit_06129 = rows06129.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06129').textContent = name_06129;
   
    let com_06129 = document.getElementById("f-path-06129");
    let list_06129 = document.getElementById("list_06129");


    function togg06129() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06129-01').classList.remove('visible')
        document.querySelector('#polar-chart_06129-01').classList.remove('visible')
        document.querySelector('#polar-chart_06129-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06129').classList.remove('visible')
        document.querySelector('#f-path-06129').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06129
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06129
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06129
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06129
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06129
    }
    com_06129.onclick = togg06129;
    list_06129.onclick = togg06129;
     /************************************************************************************* */
    /************************************************************************************* */
    const rows06130 = data[129];

    /*Récupere les données que je veut de la Commune */
    name_06130 = rows06130.Libellé_géographique;
    Pop_06130 = rows06130.Population_en_2017;
    Pop_017_06130 = rows06130.Pop_017_ans_2017;
    Pop_mediane_vote_06130 = rows06130.Popu_possible_voté;
    nbr_inscrit_06130 = rows06130.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06130').textContent = name_06130;
   
    let com_06130 = document.getElementById("f-path-06130");
    let list_06130 = document.getElementById("list_06130");


    function togg06130() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06130-01').classList.remove('visible')
        document.querySelector('#polar-chart_06130-01').classList.remove('visible')
        document.querySelector('#polar-chart_06130-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06130').classList.remove('visible')
        document.querySelector('#f-path-06130').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06130
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06130
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06130
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06130
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06130
    }
    com_06130.onclick = togg06130;
    list_06130.onclick = togg06130;
     /************************************************************************************* */
    /************************************************************************************* */
    const rows06131 = data[130];

    /*Récupere les données que je veut de la Commune */
    name_06131 = rows06131.Libellé_géographique;
    Pop_06131 = rows06131.Population_en_2017;
    Pop_017_06131 = rows06131.Pop_017_ans_2017;
    Pop_mediane_vote_06131 = rows06131.Popu_possible_voté;
    nbr_inscrit_06131 = rows06131.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06131').textContent = name_06131;
   
    let com_06131 = document.getElementById("f-path-06131");
    let list_06131 = document.getElementById("list_06131");


    function togg06131() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06131-01').classList.remove('visible')
        document.querySelector('#polar-chart_06131-01').classList.remove('visible')
        document.querySelector('#polar-chart_06131-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06131').classList.remove('visible')
        document.querySelector('#f-path-06131').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06131
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06131
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06131
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06131
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06131
    }
    com_06131.onclick = togg06131;
    list_06131.onclick = togg06131;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06132 = data[131];

    /*Récupere les données que je veut de la Commune */
    name_06132 = rows06132.Libellé_géographique;
    Pop_06132 = rows06132.Population_en_2017;
    Pop_017_06132 = rows06132.Pop_017_ans_2017;
    Pop_mediane_vote_06132 = rows06132.Popu_possible_voté;
    nbr_inscrit_06132 = rows06132.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06132').textContent = name_06132;
   
    let com_06132 = document.getElementById("f-path-06132");
    let list_06132 = document.getElementById("list_06132");


    function togg06132() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06132-01').classList.remove('visible')
        document.querySelector('#polar-chart_06132-01').classList.remove('visible')
        document.querySelector('#polar-chart_06132-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06132').classList.remove('visible')
        document.querySelector('#f-path-06132').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06132
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06132
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06132
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06132
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06132
    }
    com_06132.onclick = togg06132;
    list_06132.onclick = togg06132;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06133 = data[132];

    /*Récupere les données que je veut de la Commune */
    name_06133 = rows06133.Libellé_géographique;
    Pop_06133 = rows06133.Population_en_2017;
    Pop_017_06133 = rows06133.Pop_017_ans_2017;
    Pop_mediane_vote_06133 = rows06133.Popu_possible_voté;
    nbr_inscrit_06133 = rows06133.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06133').textContent = name_06133;
   
    let com_06133 = document.getElementById("f-path-06133");
    let list_06133 = document.getElementById("list_06133");


    function togg06133() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06133-01').classList.remove('visible')
        document.querySelector('#polar-chart_06133-01').classList.remove('visible')
        document.querySelector('#polar-chart_06133-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06133').classList.remove('visible')
        document.querySelector('#f-path-06133').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06133
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06133
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06133
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06133
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06133
    }
    com_06133.onclick = togg06133;
    list_06133.onclick = togg06133;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06134 = data[133];

    /*Récupere les données que je veut de la Commune */
    name_06134 = rows06134.Libellé_géographique;
    Pop_06134 = rows06134.Population_en_2017;
    Pop_017_06134 = rows06134.Pop_017_ans_2017;
    Pop_mediane_vote_06134 = rows06134.Popu_possible_voté;
    nbr_inscrit_06134 = rows06134.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06134').textContent = name_06134;
   
    let com_06134 = document.getElementById("f-path-06134");
    let list_06134 = document.getElementById("list_06134");


    function togg06134() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06134-01').classList.remove('visible')
        document.querySelector('#polar-chart_06134-01').classList.remove('visible')
        document.querySelector('#polar-chart_06134-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06134').classList.remove('visible')
        document.querySelector('#f-path-06134').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06134
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06134
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06134
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06134
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06134
    }
    com_06134.onclick = togg06134;
    list_06134.onclick = togg06134;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06135 = data[134];

    /*Récupere les données que je veut de la Commune */
    name_06135 = rows06135.Libellé_géographique;
    Pop_06135 = rows06135.Population_en_2017;
    Pop_017_06135 = rows06135.Pop_017_ans_2017;
    Pop_mediane_vote_06135 = rows06135.Popu_possible_voté;
    nbr_inscrit_06135 = rows06135.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06135').textContent = name_06135;
   
    let com_06135 = document.getElementById("f-path-06135");
    let list_06135 = document.getElementById("list_06135");


    function togg06135() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06135-01').classList.remove('visible')
        document.querySelector('#polar-chart_06135-01').classList.remove('visible')
        document.querySelector('#polar-chart_06135-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06135').classList.remove('visible')
        document.querySelector('#f-path-06135').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06135
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06135
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06135
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06135
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06135
    }
    com_06135.onclick = togg06135;
    list_06135.onclick = togg06135;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06136 = data[135];

    /*Récupere les données que je veut de la Commune */
    name_06136 = rows06136.Libellé_géographique;
    Pop_06136 = rows06136.Population_en_2017;
    Pop_017_06136 = rows06136.Pop_017_ans_2017;
    Pop_mediane_vote_06136 = rows06136.Popu_possible_voté;
    nbr_inscrit_06136 = rows06136.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06136').textContent = name_06136;
   
    let com_06136 = document.getElementById("f-path-06136");
    let list_06136 = document.getElementById("list_06136");


    function togg06136() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06136-01').classList.remove('visible')
        document.querySelector('#polar-chart_06136-01').classList.remove('visible')
        document.querySelector('#polar-chart_06136-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06136').classList.remove('visible')
        document.querySelector('#f-path-06136').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06136
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06136
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06136
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06136
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06136
    }
    com_06136.onclick = togg06136;
    list_06136.onclick = togg06136;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06137 = data[136];

    /*Récupere les données que je veut de la Commune */
    name_06137 = rows06137.Libellé_géographique;
    Pop_06137 = rows06137.Population_en_2017;
    Pop_017_06137 = rows06137.Pop_017_ans_2017;
    Pop_mediane_vote_06137 = rows06137.Popu_possible_voté;
    nbr_inscrit_06137 = rows06137.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06137').textContent = name_06137;
   
    let com_06137 = document.getElementById("f-path-06137");
    let list_06137 = document.getElementById("list_06137");


    function togg06137() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06137-01').classList.remove('visible')
        document.querySelector('#polar-chart_06137-01').classList.remove('visible')
        document.querySelector('#polar-chart_06167-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06137').classList.remove('visible')
        document.querySelector('#f-path-06137').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06137
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06137
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06137
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06137
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06137
    }
    com_06137.onclick = togg06137;
    list_06137.onclick = togg06137;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06138 = data[137];

    /*Récupere les données que je veut de la Commune */
    name_06138 = rows06138.Libellé_géographique;
    Pop_06138 = rows06138.Population_en_2017;
    Pop_017_06138 = rows06138.Pop_017_ans_2017;
    Pop_mediane_vote_06138 = rows06138.Popu_possible_voté;
    nbr_inscrit_06138 = rows06138.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06138').textContent = name_06138;
   
    let com_06138 = document.getElementById("f-path-06138");
    let list_06138 = document.getElementById("list_06138");


    function togg06138() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06138-01').classList.remove('visible')
        document.querySelector('#polar-chart_06138-01').classList.remove('visible')
        document.querySelector('#polar-chart_06168-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06138').classList.remove('visible')
        document.querySelector('#f-path-06138').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06138
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06138
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06138
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06138
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06138
    }
    com_06138.onclick = togg06138;
    list_06138.onclick = togg06138;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06139 = data[138];

    /*Récupere les données que je veut de la Commune */
    name_06139 = rows06139.Libellé_géographique;
    Pop_06139 = rows06139.Population_en_2017;
    Pop_017_06139 = rows06139.Pop_017_ans_2017;
    Pop_mediane_vote_06139 = rows06139.Popu_possible_voté;
    nbr_inscrit_06139 = rows06139.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06139').textContent = name_06139;
   
    let com_06139 = document.getElementById("f-path-06139");
    let list_06139 = document.getElementById("list_06139");


    function togg06139() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06139-01').classList.remove('visible')
        document.querySelector('#polar-chart_06139-01').classList.remove('visible')
        document.querySelector('#polar-chart_06169-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06139').classList.remove('visible')
        document.querySelector('#f-path-06139').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06139
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06139
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06139
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06139
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06139
    }
    com_06139.onclick = togg06139;
    list_06139.onclick = togg06139;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06140 = data[139];

    /*Récupere les données que je veut de la Commune */
    name_06140 = rows06140.Libellé_géographique;
    Pop_06140 = rows06140.Population_en_2017;
    Pop_017_06140 = rows06140.Pop_017_ans_2017;
    Pop_mediane_vote_06140 = rows06140.Popu_possible_voté;
    nbr_inscrit_06140 = rows06140.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06140').textContent = name_06140;
   
    let com_06140 = document.getElementById("f-path-06140");
    let list_06140 = document.getElementById("list_06140");


    function togg06140() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06140-01').classList.remove('visible')
        document.querySelector('#polar-chart_06140-01').classList.remove('visible')
        document.querySelector('#polar-chart_06140-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06140').classList.remove('visible')
        document.querySelector('#f-path-06140').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06140
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06140
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06140
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06140
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06140
    }
    com_06140.onclick = togg06140;
    list_06140.onclick = togg06140;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06141 = data[140];

    /*Récupere les données que je veut de la Commune */
    name_06141 = rows06141.Libellé_géographique;
    Pop_06141 = rows06141.Population_en_2017;
    Pop_017_06141 = rows06141.Pop_017_ans_2017;
    Pop_mediane_vote_06141 = rows06141.Popu_possible_voté;
    nbr_inscrit_06141 = rows06141.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06141').textContent = name_06141;
   
    let com_06141 = document.getElementById("f-path-06141");
    let list_06141 = document.getElementById("list_06141");


    function togg06141() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06141-01').classList.remove('visible')
        document.querySelector('#polar-chart_06141-01').classList.remove('visible')
        document.querySelector('#polar-chart_06141-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06141').classList.remove('visible')
        document.querySelector('#f-path-06141').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06141
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06141
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06141
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06141
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06141
    }
    com_06141.onclick = togg06141;
    list_06141.onclick = togg06141;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06142 = data[141];

    /*Récupere les données que je veut de la Commune */
    name_06142 = rows06142.Libellé_géographique;
    Pop_06142 = rows06142.Population_en_2017;
    Pop_017_06142 = rows06142.Pop_017_ans_2017;
    Pop_mediane_vote_06142 = rows06142.Popu_possible_voté;
    nbr_inscrit_06142 = rows06142.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06142').textContent = name_06142;
   
    let com_06142 = document.getElementById("f-path-06142");
    let list_06142 = document.getElementById("list_06142");


    function togg06142() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06142-01').classList.remove('visible')
        document.querySelector('#polar-chart_06142-01').classList.remove('visible')
        document.querySelector('#polar-chart_06142-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06142').classList.remove('visible')
        document.querySelector('#f-path-06142').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06142
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06142
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06142
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06142
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06142
    }
    com_06142.onclick = togg06142;
    list_06142.onclick = togg06142;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06143 = data[142];

    /*Récupere les données que je veut de la Commune */
    name_06143 = rows06143.Libellé_géographique;
    Pop_06143 = rows06143.Population_en_2017;
    Pop_017_06143 = rows06143.Pop_017_ans_2017;
    Pop_mediane_vote_06143 = rows06143.Popu_possible_voté;
    nbr_inscrit_06143 = rows06143.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06143').textContent = name_06143;
   
    let com_06143 = document.getElementById("f-path-06143");
    let list_06143 = document.getElementById("list_06143");


    function togg06143() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06143-01').classList.remove('visible')
        document.querySelector('#polar-chart_06143-01').classList.remove('visible')
        document.querySelector('#polar-chart_06143-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06143').classList.remove('visible')
        document.querySelector('#f-path-06143').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06143
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06143
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06143
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06143
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06143
    }
    com_06143.onclick = togg06143;
    list_06143.onclick = togg06143;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06144 = data[143];

    /*Récupere les données que je veut de la Commune */
    name_06144 = rows06144.Libellé_géographique;
    Pop_06144 = rows06144.Population_en_2017;
    Pop_017_06144 = rows06144.Pop_017_ans_2017;
    Pop_mediane_vote_06144 = rows06144.Popu_possible_voté;
    nbr_inscrit_06144 = rows06144.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06144').textContent = name_06144;
   
    let com_06144 = document.getElementById("f-path-06144");
    let list_06144 = document.getElementById("list_06144");


    function togg06144() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06144-01').classList.remove('visible')
        document.querySelector('#polar-chart_06144-01').classList.remove('visible')
        document.querySelector('#polar-chart_06144-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06144').classList.remove('visible')
        document.querySelector('#f-path-06144').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06144
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06144
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06144
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06144
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06144
    }
    com_06144.onclick = togg06144;
    list_06144.onclick = togg06144;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06145 = data[144];

    /*Récupere les données que je veut de la Commune */
    name_06145 = rows06145.Libellé_géographique;
    Pop_06145 = rows06145.Population_en_2017;
    Pop_017_06145 = rows06145.Pop_017_ans_2017;
    Pop_mediane_vote_06145 = rows06145.Popu_possible_voté;
    nbr_inscrit_06145 = rows06145.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06145').textContent = name_06145;
   
    let com_06145 = document.getElementById("f-path-06145");
    let list_06145 = document.getElementById("list_06145");


    function togg06145() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06145-01').classList.remove('visible')
        document.querySelector('#polar-chart_06145-01').classList.remove('visible')
        document.querySelector('#polar-chart_06145-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06145').classList.remove('visible')
        document.querySelector('#f-path-06145').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06145
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06145
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06145
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06145
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06145
    }
    com_06145.onclick = togg06145;
    list_06145.onclick = togg06145;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06146 = data[145];

    /*Récupere les données que je veut de la Commune */
    name_06146 = rows06146.Libellé_géographique;
    Pop_06146 = rows06146.Population_en_2017;
    Pop_017_06146 = rows06146.Pop_017_ans_2017;
    Pop_mediane_vote_06146 = rows06146.Popu_possible_voté;
    nbr_inscrit_06146 = rows06146.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06146').textContent = name_06146;
   
    let com_06146 = document.getElementById("f-path-06146");
    let list_06146 = document.getElementById("list_06146");


    function togg06146() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06146-01').classList.remove('visible')
        document.querySelector('#polar-chart_06146-01').classList.remove('visible')
        document.querySelector('#polar-chart_06146-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06146').classList.remove('visible')
        document.querySelector('#f-path-06146').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06146
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06146
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06146
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06146
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06146
    }
    com_06146.onclick = togg06146;
    list_06146.onclick = togg06146;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06147 = data[146];

    /*Récupere les données que je veut de la Commune */
    name_06147 = rows06147.Libellé_géographique;
    Pop_06147 = rows06147.Population_en_2017;
    Pop_017_06147 = rows06147.Pop_017_ans_2017;
    Pop_mediane_vote_06147 = rows06147.Popu_possible_voté;
    nbr_inscrit_06147 = rows06147.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06147').textContent = name_06147;
   
    let com_06147 = document.getElementById("f-path-06147");
    let list_06147 = document.getElementById("list_06147");


    function togg06147() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06147-01').classList.remove('visible')
        document.querySelector('#polar-chart_06147-01').classList.remove('visible')
        document.querySelector('#polar-chart_06147-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06147').classList.remove('visible')
        document.querySelector('#f-path-06147').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06147
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06147
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06147
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06147
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06147
    }
    com_06147.onclick = togg06147;
    list_06147.onclick = togg06147;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06148 = data[147];

    /*Récupere les données que je veut de la Commune */
    name_06148 = rows06148.Libellé_géographique;
    Pop_06148 = rows06148.Population_en_2017;
    Pop_017_06148 = rows06148.Pop_017_ans_2017;
    Pop_mediane_vote_06148 = rows06148.Popu_possible_voté;
    nbr_inscrit_06148 = rows06148.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06148').textContent = name_06148;
   
    let com_06148 = document.getElementById("f-path-06148");
    let list_06148 = document.getElementById("list_06148");


    function togg06148() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06148-01').classList.remove('visible')
        document.querySelector('#polar-chart_06148-01').classList.remove('visible')
        document.querySelector('#polar-chart_06148-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06148').classList.remove('visible')
        document.querySelector('#f-path-06148').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06148
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06148
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06148
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06148
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06148
    }
    com_06148.onclick = togg06148;
    list_06148.onclick = togg06148;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06149 = data[148];

    /*Récupere les données que je veut de la Commune */
    name_06149 = rows06149.Libellé_géographique;
    Pop_06149 = rows06149.Population_en_2017;
    Pop_017_06149 = rows06149.Pop_017_ans_2017;
    Pop_mediane_vote_06149 = rows06149.Popu_possible_voté;
    nbr_inscrit_06149 = rows06149.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06149').textContent = name_06149;
   
    let com_06149 = document.getElementById("f-path-06149");
    let list_06149 = document.getElementById("list_06149");


    function togg06149() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06149-01').classList.remove('visible')
        document.querySelector('#polar-chart_06149-01').classList.remove('visible')
        document.querySelector('#polar-chart_06149-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06149').classList.remove('visible')
        document.querySelector('#f-path-06149').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06149
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06149
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06149
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06149
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06149
    }
    com_06149.onclick = togg06149;
    list_06149.onclick = togg06149;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06150 = data[149];

    /*Récupere les données que je veut de la Commune */
    name_06150 = rows06150.Libellé_géographique;
    Pop_06150 = rows06150.Population_en_2017;
    Pop_017_06150 = rows06150.Pop_017_ans_2017;
    Pop_mediane_vote_06150 = rows06150.Popu_possible_voté;
    nbr_inscrit_06150 = rows06150.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06150').textContent = name_06150;
   
    let com_06150 = document.getElementById("f-path-06150");
    let list_06150 = document.getElementById("list_06150");


    function togg06150() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06150-01').classList.remove('visible')
        document.querySelector('#polar-chart_06150-01').classList.remove('visible')
        document.querySelector('#polar-chart_06150-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06150').classList.remove('visible')
        document.querySelector('#f-path-06150').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06150
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06150
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06150
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06150
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06150
    }
    com_06150.onclick = togg06150;
    list_06150.onclick = togg06150;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06151 = data[150];

    /*Récupere les données que je veut de la Commune */
    name_06151 = rows06151.Libellé_géographique;
    Pop_06151 = rows06151.Population_en_2017;
    Pop_017_06151 = rows06151.Pop_017_ans_2017;
    Pop_mediane_vote_06151 = rows06151.Popu_possible_voté;
    nbr_inscrit_06151 = rows06151.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06151').textContent = name_06151;
   
    let com_06151 = document.getElementById("f-path-06151");
    let list_06151 = document.getElementById("list_06151");


    function togg06151() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06151-01').classList.remove('visible')
        document.querySelector('#polar-chart_06151-01').classList.remove('visible')
        document.querySelector('#polar-chart_06151-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06151').classList.remove('visible')
        document.querySelector('#f-path-06151').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06151
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06151
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06151
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06151
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06151
    }
    com_06151.onclick = togg06151;
    list_06151.onclick = togg06151;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06152 = data[151];

    /*Récupere les données que je veut de la Commune */
    name_06152 = rows06152.Libellé_géographique;
    Pop_06152 = rows06152.Population_en_2017;
    Pop_017_06152 = rows06152.Pop_017_ans_2017;
    Pop_mediane_vote_06152 = rows06152.Popu_possible_voté;
    nbr_inscrit_06152 = rows06152.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06152').textContent = name_06152;
   
    let com_06152 = document.getElementById("f-path-06152");
    let list_06152 = document.getElementById("list_06152");


    function togg06152() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06152-01').classList.remove('visible')
        document.querySelector('#polar-chart_06152-01').classList.remove('visible')
        document.querySelector('#polar-chart_06152-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06152').classList.remove('visible')
        document.querySelector('#f-path-06152').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06152
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06152
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06152
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06152
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06152
    }
    com_06152.onclick = togg06152;
    list_06152.onclick = togg06152;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06153 = data[152];

    /*Récupere les données que je veut de la Commune */
    name_06153 = rows06153.Libellé_géographique;
    Pop_06153 = rows06153.Population_en_2017;
    Pop_017_06153 = rows06153.Pop_017_ans_2017;
    Pop_mediane_vote_06153 = rows06153.Popu_possible_voté;
    nbr_inscrit_06153 = rows06153.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06153').textContent = name_06153;
   
    let com_06153 = document.getElementById("f-path-06153");
    let list_06153 = document.getElementById("list_06153");


    function togg06153() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06153-01').classList.remove('visible')
        document.querySelector('#polar-chart_06153-01').classList.remove('visible')
        document.querySelector('#polar-chart_06153-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06153').classList.remove('visible')
        document.querySelector('#f-path-06153').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06153
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06153
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06153
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06153
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06153
    }
    com_06153.onclick = togg06153;
    list_06153.onclick = togg06153;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06154 = data[153];

    /*Récupere les données que je veut de la Commune */
    name_06154 = rows06154.Libellé_géographique;
    Pop_06154 = rows06154.Population_en_2017;
    Pop_017_06154 = rows06154.Pop_017_ans_2017;
    Pop_mediane_vote_06154 = rows06154.Popu_possible_voté;
    nbr_inscrit_06154 = rows06154.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06154').textContent = name_06154;
   
    let com_06154 = document.getElementById("f-path-06154");
    let list_06154 = document.getElementById("list_06154");


    function togg06154() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06154-01').classList.remove('visible')
        document.querySelector('#polar-chart_06154-01').classList.remove('visible')
        document.querySelector('#polar-chart_06154-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06154').classList.remove('visible')
        document.querySelector('#f-path-06154').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06154
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06154
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06154
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06154
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06154
    }
    com_06154.onclick = togg06154;
    list_06154.onclick = togg06154;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06155 = data[154];

    /*Récupere les données que je veut de la Commune */
    name_06155 = rows06155.Libellé_géographique;
    Pop_06155 = rows06155.Population_en_2017;
    Pop_017_06155 = rows06155.Pop_017_ans_2017;
    Pop_mediane_vote_06155 = rows06155.Popu_possible_voté;
    nbr_inscrit_06155 = rows06155.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06155').textContent = name_06155;
   
    let com_06155 = document.getElementById("f-path-06155");
    let list_06155 = document.getElementById("list_06155");


    function togg06155() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06155-01').classList.remove('visible')
        document.querySelector('#polar-chart_06155-01').classList.remove('visible')
        document.querySelector('#polar-chart_06155-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06155').classList.remove('visible')
        document.querySelector('#f-path-06155').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06155
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06155
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06155
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06155
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06155
    }
    com_06155.onclick = togg06155;
    list_06155.onclick = togg06155;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06156 = data[155];

    /*Récupere les données que je veut de la Commune */
    name_06156 = rows06156.Libellé_géographique;
    Pop_06156 = rows06156.Population_en_2017;
    Pop_017_06156 = rows06156.Pop_017_ans_2017;
    Pop_mediane_vote_06156 = rows06156.Popu_possible_voté;
    nbr_inscrit_06156 = rows06156.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06156').textContent = name_06156;
   
    let com_06156 = document.getElementById("f-path-06156");
    let list_06156 = document.getElementById("list_06156");


    function togg06156() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06156-01').classList.remove('visible')
        document.querySelector('#polar-chart_06156-01').classList.remove('visible')
        document.querySelector('#polar-chart_06156-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06156').classList.remove('visible')
        document.querySelector('#f-path-06156').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06156
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06156
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06156
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06156
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06156
    }
    com_06156.onclick = togg06156;
    list_06156.onclick = togg06156;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06157 = data[156];

    /*Récupere les données que je veut de la Commune */
    name_06157 = rows06157.Libellé_géographique;
    Pop_06157 = rows06157.Population_en_2017;
    Pop_017_06157 = rows06157.Pop_017_ans_2017;
    Pop_mediane_vote_06157 = rows06157.Popu_possible_voté;
    nbr_inscrit_06157 = rows06157.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06157').textContent = name_06157;
   
    let com_06157 = document.getElementById("f-path-06157");
    let list_06157 = document.getElementById("list_06157");


    function togg06157() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06157-01').classList.remove('visible')
        document.querySelector('#polar-chart_06157-01').classList.remove('visible')
        document.querySelector('#polar-chart_06157-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06157').classList.remove('visible')
        document.querySelector('#f-path-06157').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06157
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06157
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06157
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06157
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06157
    }
    com_06157.onclick = togg06157;
    list_06157.onclick = togg06157;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06158 = data[157];

    /*Récupere les données que je veut de la Commune */
    name_06158 = rows06158.Libellé_géographique;
    Pop_06158 = rows06158.Population_en_2017;
    Pop_017_06158 = rows06158.Pop_017_ans_2017;
    Pop_mediane_vote_06158 = rows06158.Popu_possible_voté;
    nbr_inscrit_06158 = rows06158.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06158').textContent = name_06158;
   
    let com_06158 = document.getElementById("f-path-06158");
    let list_06158 = document.getElementById("list_06158");


    function togg06158() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06158-01').classList.remove('visible')
        document.querySelector('#polar-chart_06158-01').classList.remove('visible')
        document.querySelector('#polar-chart_06158-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06158').classList.remove('visible')
        document.querySelector('#f-path-06158').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06158
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06158
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06158
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06158
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06158
    }
    com_06158.onclick = togg06158;
    list_06158.onclick = togg06158;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06159 = data[158];

    /*Récupere les données que je veut de la Commune */
    name_06159 = rows06159.Libellé_géographique;
    Pop_06159 = rows06159.Population_en_2017;
    Pop_017_06159 = rows06159.Pop_017_ans_2017;
    Pop_mediane_vote_06159 = rows06159.Popu_possible_voté;
    nbr_inscrit_06159 = rows06159.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06159').textContent = name_06159;
   
    let com_06159 = document.getElementById("f-path-06159");
    let list_06159 = document.getElementById("list_06159");


    function togg06159() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06159-01').classList.remove('visible')
        document.querySelector('#polar-chart_06159-01').classList.remove('visible')
        document.querySelector('#polar-chart_06159-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06159').classList.remove('visible')
        document.querySelector('#f-path-06159').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06159
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06159
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06159
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06159
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06159
    }
    com_06159.onclick = togg06159;
    list_06159.onclick = togg06159;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06160 = data[159];

    /*Récupere les données que je veut de la Commune */
    name_06160 = rows06160.Libellé_géographique;
    Pop_06160 = rows06160.Population_en_2017;
    Pop_017_06160 = rows06160.Pop_017_ans_2017;
    Pop_mediane_vote_06160 = rows06160.Popu_possible_voté;
    nbr_inscrit_06160 = rows06160.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06160').textContent = name_06160;
   
    let com_06160 = document.getElementById("f-path-06160");
    let list_06160 = document.getElementById("list_06160");


    function togg06160() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06160-01').classList.remove('visible')
        document.querySelector('#polar-chart_06160-01').classList.remove('visible')
        document.querySelector('#polar-chart_06160-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06160').classList.remove('visible')
        document.querySelector('#f-path-06160').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06160
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06160
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06160
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06160
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06160
    }
    com_06160.onclick = togg06160;
    list_06160.onclick = togg06160;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06161 = data[160];

    /*Récupere les données que je veut de la Commune */
    name_06161 = rows06161.Libellé_géographique;
    Pop_06161 = rows06161.Population_en_2017;
    Pop_017_06161 = rows06161.Pop_017_ans_2017;
    Pop_mediane_vote_06161 = rows06161.Popu_possible_voté;
    nbr_inscrit_06161 = rows06161.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06161').textContent = name_06161;
   
    let com_06161 = document.getElementById("f-path-06161");
    let list_06161 = document.getElementById("list_06161");


    function togg06161() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06161-01').classList.remove('visible')
        document.querySelector('#polar-chart_06161-01').classList.remove('visible')
        document.querySelector('#polar-chart_06161-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06161').classList.remove('visible')
        document.querySelector('#f-path-06161').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06161
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06161
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06161
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06161
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06161
    }
    com_06161.onclick = togg06161;
    list_06161.onclick = togg06161;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06162 = data[161];

    /*Récupere les données que je veut de la Commune */
    name_06162 = rows06162.Libellé_géographique;
    Pop_06162 = rows06162.Population_en_2017;
    Pop_017_06162 = rows06162.Pop_017_ans_2017;
    Pop_mediane_vote_06162 = rows06162.Popu_possible_voté;
    nbr_inscrit_06162 = rows06162.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06162').textContent = name_06162;
   
    let com_06162 = document.getElementById("f-path-06162");
    let list_06162 = document.getElementById("list_06162");


    function togg06162() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06162-01').classList.remove('visible')
        document.querySelector('#polar-chart_06162-01').classList.remove('visible')
        document.querySelector('#polar-chart_06162-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06162').classList.remove('visible')
        document.querySelector('#f-path-06162').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06162
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06162
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06162
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06162
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06162
    }
    com_06162.onclick = togg06162;
    list_06162.onclick = togg06162;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows06163 = data[162];

    /*Récupere les données que je veut de la Commune */
    name_06163 = rows06163.Libellé_géographique;
    Pop_06163 = rows06163.Population_en_2017;
    Pop_017_06163 = rows06163.Pop_017_ans_2017;
    Pop_mediane_vote_06163 = rows06163.Popu_possible_voté;
    nbr_inscrit_06163 = rows06163.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_06163').textContent = name_06163;
   
    let com_06163 = document.getElementById("f-path-06163");
    let list_06163 = document.getElementById("list_06163");


    function togg06163() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_06163-01').classList.remove('visible')
        document.querySelector('#polar-chart_06163-01').classList.remove('visible')
        document.querySelector('#polar-chart_06163-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_06163').classList.remove('visible')
        document.querySelector('#f-path-06163').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_06163
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_06163
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_06163
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_06163
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_06163
    }
    com_06163.onclick = togg06163;
    list_06163.onclick = togg06163;
    
}
DataJSON();