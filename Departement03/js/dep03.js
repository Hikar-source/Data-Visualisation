async function DataJSON() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[0];
    /*Récupere les données que je veut de la Commune */
    name_03001 = rows.Libellé_géographique;
    Pop_03001 = rows.Population_en_2017;
    Pop_017_03001 = rows.Pop_017_ans_2017;
    Pop_mediane_vote_03001 = rows.Popu_possible_voté;
    nbr_inscrit_03001 = rows.Inscrits;
    /*Pose dans le Menu*/
    document.querySelector('#list_03001').textContent = name_03001;
/*--------------------------------------------------------------------------*/
    var body = document.querySelector('#body')
    var path = document.querySelector('#map01')
    /******************************************************************** */
    let com_03001 = document.getElementById("f-path-03001");
    let list_03001 = document.getElementById("list_03001");
    function togg03001() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03001-01').classList.remove('visible')
        document.querySelector('#polar-chart_03001-01').classList.remove('visible')
        document.querySelector('#polar-chart_03001-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03001').classList.remove('visible')
        document.querySelector('#f-path-03001').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03001
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03001
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03001
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03001
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03001
    }
    com_03001.onclick = togg03001;
    list_03001.onclick = togg03001;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03002 = data[1];
    /*Récupere les données que je veut de la Commune */
    name_03002 = rows03002.Libellé_géographique;
    Pop_03002 = rows03002.Population_en_2017;
    Pop_017_03002 = rows03002.Pop_017_ans_2017;
    Pop_mediane_vote_03002 = rows03002.Popu_possible_voté;
    nbr_inscrit_03002 = rows03002.Inscrits;  
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03002').textContent = name_03002;
/*--------------------------------------------------------------------------*/
    let com_03002 = document.getElementById("f-path-03002");
    let list_03002 = document.getElementById("list_03002");
    /******************************************************************** */
    function togg03002() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03002-01').classList.remove('visible')
        document.querySelector('#polar-chart_03002-01').classList.remove('visible')
        document.querySelector('#polar-chart_03002-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03002').classList.remove('visible')
        document.querySelector('#f-path-03002').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03002;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03002
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03002
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03002
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03002
    }
    com_03002.onclick = togg03002;
    list_03002.onclick = togg03002;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03003 = data[2];
    /*Récupere les données que je veut de la Commune */
    name_03003 = rows03003.Libellé_géographique;
    Pop_03003 = rows03003.Population_en_2017;
    Pop_017_03003 = rows03003.Pop_017_ans_2017;
    Pop_mediane_vote_03003 = rows03003.Popu_possible_voté;
    nbr_inscrit_03003 = rows03003.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03003').textContent = name_03003;
    let com_03003 = document.getElementById("f-path-03003");
    let list_03003 = document.getElementById("list_03003");
    function togg03003() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03003-01').classList.remove('visible')
        document.querySelector('#polar-chart_03003-01').classList.remove('visible')
        document.querySelector('#polar-chart_03003-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03003').classList.remove('visible')
        document.querySelector('#f-path-03003').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03003;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03003
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03003
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03003
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03003
    }
    com_03003.onclick = togg03003;
    list_03003.onclick = togg03003;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03004 = data[3];
    /*Récupere les données que je veut de la Commune */
    name_03004 = rows03004.Libellé_géographique;
    Pop_03004 = rows03004.Population_en_2017;
    Pop_017_03004 = rows03004.Pop_017_ans_2017;
    Pop_mediane_vote_03004 = rows03004.Popu_possible_voté;
    nbr_inscrit_03004 = rows03004.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03004').textContent = name_03004;
    let com_03004 = document.getElementById("f-path-03004");
    let list_03004 = document.getElementById("list_03004");
    function togg03004() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03004-01').classList.remove('visible')
        document.querySelector('#polar-chart_03004-01').classList.remove('visible')
        document.querySelector('#polar-chart_03004-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03004').classList.remove('visible')
        document.querySelector('#f-path-03004').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03004;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03004
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03004
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03004
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03004
    }
    com_03004.onclick = togg03004;
    list_03004.onclick = togg03004;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03005 = data[4];
    /*Récupere les données que je veut de la Commune */
    name_03005 = rows03005.Libellé_géographique;
    Pop_03005 = rows03005.Population_en_2017;
    Pop_017_03005 = rows03005.Pop_017_ans_2017;
    Pop_mediane_vote_03005 = rows03005.Popu_possible_voté;
    nbr_inscrit_03005 = rows03005.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03005').textContent = name_03005;
    let com_03005 = document.getElementById("f-path-03005");
    let list_03005 = document.getElementById("list_03005");
    function togg03005() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03005-01').classList.remove('visible')
        document.querySelector('#polar-chart_03005-01').classList.remove('visible')
        document.querySelector('#polar-chart_03005-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03005').classList.remove('visible')
        document.querySelector('#f-path-03005').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03005
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03005
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03005
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03005
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03005
    }
    com_03005.onclick = togg03005;
    list_03005.onclick = togg03005;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03006 = data[5];
    /*Récupere les données que je veut de la Commune */
    name_03006 = rows03006.Libellé_géographique;
    Pop_03006 = rows03006.Population_en_2017;
    Pop_017_03006 = rows03006.Pop_017_ans_2017;
    Pop_mediane_vote_03006 = rows03006.Popu_possible_voté;
    nbr_inscrit_03006 = rows03006.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03006').textContent = name_03006;
    let com_03006 = document.getElementById("f-path-03006");
    let list_03006 = document.getElementById("list_03006");
    function togg03006() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03006-01').classList.remove('visible')
        document.querySelector('#polar-chart_03006-01').classList.remove('visible')
        document.querySelector('#polar-chart_03006-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03006').classList.remove('visible')
        document.querySelector('#f-path-03006').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03006
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03006
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03006
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03006
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03006
    }
    com_03006.onclick = togg03006;
    list_03006.onclick = togg03006;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03007 = data[6];
    /*Récupere les données que je veut de la Commune */
    name_03007 = rows03007.Libellé_géographique;
    Pop_03007 = rows03007.Population_en_2017;
    Pop_017_03007 = rows03007.Pop_017_ans_2017;
    Pop_mediane_vote_03007 = rows03007.Popu_possible_voté;
    nbr_inscrit_03007 = rows03007.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03007').textContent = name_03007; 
    let com_03007 = document.getElementById("f-path-03007");
    let list_03007 = document.getElementById("list_03007");
    function togg03007() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03007-01').classList.remove('visible')
        document.querySelector('#polar-chart_03007-01').classList.remove('visible')
        document.querySelector('#polar-chart_03007-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03007').classList.remove('visible')
        document.querySelector('#f-path-03007').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03007
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03007
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03007
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03007
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03007
    }
    com_03007.onclick = togg03007;
    list_03007.onclick = togg03007;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03008 = data[7];
    
    /*Récupere les données que je veut de la Commune */
    name_03008 = rows03008.Libellé_géographique;
    Pop_03008 = rows03008.Population_en_2017;
    Pop_017_03008 = rows03008.Pop_017_ans_2017;
    Pop_mediane_vote_03008 = rows03008.Popu_possible_voté;
    nbr_inscrit_03008 = rows03008.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03008').textContent = name_03008;
   
    let com_03008 = document.getElementById("f-path-03008");
    let list_03008 = document.getElementById("list_03008");


    function togg03008() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03008-01').classList.remove('visible')
        document.querySelector('#polar-chart_03008-01').classList.remove('visible')
        document.querySelector('#polar-chart_03008-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03008').classList.remove('visible')
        document.querySelector('#f-path-03008').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03008
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03008
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03008
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03008
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03008
    }
    com_03008.onclick = togg03008;
    list_03008.onclick = togg03008;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03009 = data[8];
    
    /*Récupere les données que je veut de la Commune */
    name_03009 = rows03009.Libellé_géographique;
    Pop_03009 = rows03009.Population_en_2017;
    Pop_017_03009 = rows03009.Pop_017_ans_2017;
    Pop_mediane_vote_03009 = rows03009.Popu_possible_voté;
    nbr_inscrit_03009 = rows03009.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03009').textContent = name_03009;

    let com_03009 = document.getElementById("f-path-03009");
    let list_03009 = document.getElementById("list_03009");


    function togg03009() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03009-01').classList.remove('visible')
        document.querySelector('#polar-chart_03009-01').classList.remove('visible')
        document.querySelector('#polar-chart_03009-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03009').classList.remove('visible')
        document.querySelector('#f-path-03009').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03009
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03009
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03009
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03009
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03009
    }
    com_03009.onclick = togg03009;
    list_03009.onclick = togg03009;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03010 = data[9];
 
    /*Récupere les données que je veut de la Commune */
    name_03010 = rows03010.Libellé_géographique;
    Pop_03010 = rows03010.Population_en_2017;
    Pop_017_03010 = rows03010.Pop_017_ans_2017;
    Pop_mediane_vote_03010 = rows03010.Popu_possible_voté;
    nbr_inscrit_03010 = rows03010.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03010').textContent = name_03010;

    let com_03010 = document.getElementById("f-path-03010");
    let list_03010 = document.getElementById("list_03010");


    function togg03010() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03010-01').classList.remove('visible')
        document.querySelector('#polar-chart_03010-01').classList.remove('visible')
        document.querySelector('#polar-chart_03010-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03010').classList.remove('visible')
        document.querySelector('#f-path-03010').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03010
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03010
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03010
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03010
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03010
    }
    com_03010.onclick = togg03010;
    list_03010.onclick = togg03010;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03011 = data[10];

    /*Récupere les données que je veut de la Commune */
    name_03011 = rows03011.Libellé_géographique;
    Pop_03011 = rows03011.Population_en_2017;
    Pop_017_03011 = rows03011.Pop_017_ans_2017;
    Pop_mediane_vote_03011 = rows03011.Popu_possible_voté;
    nbr_inscrit_03011 = rows03011.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03011').textContent = name_03011;
   
    let com_03011 = document.getElementById("f-path-03011");
    let list_03011 = document.getElementById("list_03011");


    function togg03011() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03011-01').classList.remove('visible')
        document.querySelector('#polar-chart_03011-01').classList.remove('visible')
        document.querySelector('#polar-chart_03011-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03011').classList.remove('visible')
        document.querySelector('#f-path-03011').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03011
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03011
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03011
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03011
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03011
    }
    com_03011.onclick = togg03011;
    list_03011.onclick = togg03011;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03012 = data[11];

    /*Récupere les données que je veut de la Commune */
    name_03012 = rows03012.Libellé_géographique;
    Pop_03012 = rows03012.Population_en_2017;
    Pop_017_03012 = rows03012.Pop_017_ans_2017;
    Pop_mediane_vote_03012 = rows03012.Popu_possible_voté;
    nbr_inscrit_03012 = rows03012.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03012').textContent = name_03012;
   
    let com_03012 = document.getElementById("f-path-03012");
    let list_03012 = document.getElementById("list_03012");


    function togg03012() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03012-01').classList.remove('visible')
        document.querySelector('#polar-chart_03012-01').classList.remove('visible')
        document.querySelector('#polar-chart_03012-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03012').classList.remove('visible')
        document.querySelector('#f-path-03012').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03012
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03012
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03012
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03012
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03012
    }
    com_03012.onclick = togg03012;
    list_03012.onclick = togg03012;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03013 = data[12];

    /*Récupere les données que je veut de la Commune */
    name_03013 = rows03013.Libellé_géographique;
    Pop_03013 = rows03013.Population_en_2017;
    Pop_017_03013 = rows03013.Pop_017_ans_2017;
    Pop_mediane_vote_03013 = rows03013.Popu_possible_voté;
    nbr_inscrit_03013 = rows03013.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03013').textContent = name_03013;
   
    let com_03013 = document.getElementById("f-path-03013");
    let list_03013 = document.getElementById("list_03013");


    function togg03013() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03013-01').classList.remove('visible')
        document.querySelector('#polar-chart_03013-01').classList.remove('visible')
        document.querySelector('#polar-chart_03013-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03013').classList.remove('visible')
        document.querySelector('#f-path-03013').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03013
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03013
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03013
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03013
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03013
    }
    com_03013.onclick = togg03013;
    list_03013.onclick = togg03013;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03014 = data[13];

    /*Récupere les données que je veut de la Commune */
    name_03014 = rows03014.Libellé_géographique;
    Pop_03014 = rows03014.Population_en_2017;
    Pop_017_03014 = rows03014.Pop_017_ans_2017;
    Pop_mediane_vote_03014 = rows03014.Popu_possible_voté;
    nbr_inscrit_03014 = rows03014.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03014').textContent = name_03014;
   
    let com_03014 = document.getElementById("f-path-03014");
    let list_03014 = document.getElementById("list_03014");


    function togg03014() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03014-01').classList.remove('visible')
        document.querySelector('#polar-chart_03014-01').classList.remove('visible')
        document.querySelector('#polar-chart_03014-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03014').classList.remove('visible')
        document.querySelector('#f-path-03014').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03014
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03014
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03014
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03014
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03014
    }
    com_03014.onclick = togg03014;
    list_03014.onclick = togg03014;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03015 = data[14];

    /*Récupere les données que je veut de la Commune */
    name_03015 = rows03015.Libellé_géographique;
    Pop_03015 = rows03015.Population_en_2017;
    Pop_017_03015 = rows03015.Pop_017_ans_2017;
    Pop_mediane_vote_03015 = rows03015.Popu_possible_voté;
    nbr_inscrit_03015 = rows03015.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03015').textContent = name_03015;
   
    let com_03015 = document.getElementById("f-path-03015");
    let list_03015 = document.getElementById("list_03015");


    function togg03015() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03015-01').classList.remove('visible')
        document.querySelector('#polar-chart_03015-01').classList.remove('visible')
        document.querySelector('#polar-chart_03015-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03015').classList.remove('visible')
        document.querySelector('#f-path-03015').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03015
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03015
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03015
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03015
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03015
    }
    com_03015.onclick = togg03015;
    list_03015.onclick = togg03015;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03016 = data[15];

    /*Récupere les données que je veut de la Commune */
    name_03016 = rows03016.Libellé_géographique;
    Pop_03016 = rows03016.Population_en_2017;
    Pop_017_03016 = rows03016.Pop_017_ans_2017;
    Pop_mediane_vote_03016 = rows03016.Popu_possible_voté;
    nbr_inscrit_03016 = rows03016.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03016').textContent = name_03016;
   
    let com_03016 = document.getElementById("f-path-03016");
    let list_03016 = document.getElementById("list_03016");


    function togg03016() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03016-01').classList.remove('visible')
        document.querySelector('#polar-chart_03016-01').classList.remove('visible')
        document.querySelector('#polar-chart_03016-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03016').classList.remove('visible')
        document.querySelector('#f-path-03016').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03016
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03016
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03016
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03016
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03016
    }
    com_03016.onclick = togg03016;
    list_03016.onclick = togg03016;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03017 = data[16];

    /*Récupere les données que je veut de la Commune */
    name_03017 = rows03017.Libellé_géographique;
    Pop_03017 = rows03017.Population_en_2017;
    Pop_017_03017 = rows03017.Pop_017_ans_2017;
    Pop_mediane_vote_03017 = rows03017.Popu_possible_voté;
    nbr_inscrit_03017 = rows03017.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03017').textContent = name_03017;
   
    let com_03017 = document.getElementById("f-path-03017");
    let list_03017 = document.getElementById("list_03017");


    function togg03017() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03017-01').classList.remove('visible')
        document.querySelector('#polar-chart_03017-01').classList.remove('visible')
        document.querySelector('#polar-chart_03017-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03017').classList.remove('visible')
        document.querySelector('#f-path-03017').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03017
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03017
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03017
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03017
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03017
    }
    com_03017.onclick = togg03017;
    list_03017.onclick = togg03017;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03018 = data[17];

    /*Récupere les données que je veut de la Commune */
    name_03018 = rows03018.Libellé_géographique;
    Pop_03018 = rows03018.Population_en_2017;
    Pop_017_03018 = rows03018.Pop_017_ans_2017;
    Pop_mediane_vote_03018 = rows03017.Popu_possible_voté;
    nbr_inscrit_03018 = rows03018.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03018').textContent = name_03018;
   
    let com_03018 = document.getElementById("f-path-03018");
    let list_03018 = document.getElementById("list_03018");


    function togg03018() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03018-01').classList.remove('visible')
        document.querySelector('#polar-chart_03018-01').classList.remove('visible')
        document.querySelector('#polar-chart_03018-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03018').classList.remove('visible')
        document.querySelector('#f-path-03018').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03018
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03018
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03018
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03018
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03018
    }
    com_03018.onclick = togg03018;
    list_03018.onclick = togg03018;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03019 = data[18];

    /*Récupere les données que je veut de la Commune */
    name_03019 = rows03019.Libellé_géographique;
    Pop_03019 = rows03019.Population_en_2017;
    Pop_017_03019 = rows03019.Pop_017_ans_2017;
    Pop_mediane_vote_03019 = rows03019.Popu_possible_voté;
    nbr_inscrit_03019 = rows03019.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03019').textContent = name_03019;
   
    let com_03019 = document.getElementById("f-path-03019");
    let list_03019 = document.getElementById("list_03019");


    function togg03019() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03019-01').classList.remove('visible')
        document.querySelector('#polar-chart_03019-01').classList.remove('visible')
        document.querySelector('#polar-chart_03019-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03019').classList.remove('visible')
        document.querySelector('#f-path-03019').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03019
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03019
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03019
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03019
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03019
    }
    com_03019.onclick = togg03019;
    list_03019.onclick = togg03019;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03020 = data[19];

    /*Récupere les données que je veut de la Commune */
    name_03020 = rows03020.Libellé_géographique;
    Pop_03020 = rows03020.Population_en_2017;
    Pop_017_03020 = rows03020.Pop_017_ans_2017;
    Pop_mediane_vote_03020 = rows03020.Popu_possible_voté;
    nbr_inscrit_03020 = rows03020.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03020').textContent = name_03020;
   
    let com_03020 = document.getElementById("f-path-03020");
    let list_03020 = document.getElementById("list_03020");


    function togg03020() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03020-01').classList.remove('visible')
        document.querySelector('#polar-chart_03020-01').classList.remove('visible')
        document.querySelector('#polar-chart_03020-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03020').classList.remove('visible')
        document.querySelector('#f-path-03020').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03020
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03020
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03020
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03020
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03020
    }
    com_03020.onclick = togg03020;
    list_03020.onclick = togg03020;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03021 = data[20];

    /*Récupere les données que je veut de la Commune */
    name_03021 = rows03021.Libellé_géographique;
    Pop_03021 = rows03021.Population_en_2017;
    Pop_017_03021 = rows03021.Pop_017_ans_2017;
    Pop_mediane_vote_03021 = rows03021.Popu_possible_voté;
    nbr_inscrit_03021 = rows03021.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03021').textContent = name_03021;
   
    let com_03021 = document.getElementById("f-path-03021");
    let list_03021 = document.getElementById("list_03021");


    function togg03021() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03021-01').classList.remove('visible')
        document.querySelector('#polar-chart_03021-01').classList.remove('visible')
        document.querySelector('#polar-chart_03021-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03021').classList.remove('visible')
        document.querySelector('#f-path-03021').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03021
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03021
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03021
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03021
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03021
    }
    com_03021.onclick = togg03021;
    list_03021.onclick = togg03021;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03022 = data[21];

    /*Récupere les données que je veut de la Commune */
    name_03022 = rows03022.Libellé_géographique;
    Pop_03022 = rows03022.Population_en_2017;
    Pop_017_03022 = rows03022.Pop_017_ans_2017;
    Pop_mediane_vote_03022 = rows03022.Popu_possible_voté;
    nbr_inscrit_03022 = rows03022.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03022').textContent = name_03022;
   
    let com_03022 = document.getElementById("f-path-03022");
    let list_03022 = document.getElementById("list_03022");


    function togg03022() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03022-01').classList.remove('visible')
        document.querySelector('#polar-chart_03022-01').classList.remove('visible')
        document.querySelector('#polar-chart_03022-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03022').classList.remove('visible')
        document.querySelector('#f-path-03022').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03022
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03022
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03022
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03022
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03022
    }
    com_03022.onclick = togg03022;
    list_03022.onclick = togg03022;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03023 = data[22];

    /*Récupere les données que je veut de la Commune */
    name_03023 = rows03023.Libellé_géographique;
    Pop_03023 = rows03023.Population_en_2017;
    Pop_017_03023 = rows03023.Pop_017_ans_2017;
    Pop_mediane_vote_03023 = rows03023.Popu_possible_voté;
    nbr_inscrit_03023 = rows03023.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03023').textContent = name_03023;
   
    let com_03023 = document.getElementById("f-path-03023");
    let list_03023 = document.getElementById("list_03023");


    function togg03023() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03023-01').classList.remove('visible')
        document.querySelector('#polar-chart_03023-01').classList.remove('visible')
        document.querySelector('#polar-chart_03023-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03023').classList.remove('visible')
        document.querySelector('#f-path-03023').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03023
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03023
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03023
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03023
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03023
    }
    com_03023.onclick = togg03023;
    list_03023.onclick = togg03023;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03024 = data[23];

    /*Récupere les données que je veut de la Commune */
    name_03024 = rows03024.Libellé_géographique;
    Pop_03024 = rows03024.Population_en_2017;
    Pop_017_03024 = rows03024.Pop_017_ans_2017;
    Pop_mediane_vote_03024 = rows03024.Popu_possible_voté;
    nbr_inscrit_03024 = rows03024.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03024').textContent = name_03024;
   
    let com_03024 = document.getElementById("f-path-03024");
    let list_03024 = document.getElementById("list_03024");


    function togg03024() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03024-01').classList.remove('visible')
        document.querySelector('#polar-chart_03024-01').classList.remove('visible')
        document.querySelector('#polar-chart_03024-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03024').classList.remove('visible')
        document.querySelector('#f-path-03024').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03024
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03024
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03024
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03024
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03024
    }
    com_03024.onclick = togg03024;
    list_03024.onclick = togg03024;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03025 = data[24];

    /*Récupere les données que je veut de la Commune */
    name_03025 = rows03025.Libellé_géographique;
    Pop_03025 = rows03025.Population_en_2017;
    Pop_017_03025 = rows03025.Pop_017_ans_2017;
    Pop_mediane_vote_03025 = rows03025.Popu_possible_voté;
    nbr_inscrit_03025 = rows03025.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03025').textContent = name_03025;
   
    let com_03025 = document.getElementById("f-path-03025");
    let list_03025 = document.getElementById("list_03025");


    function togg03025() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03025-01').classList.remove('visible')
        document.querySelector('#polar-chart_03025-01').classList.remove('visible')
        document.querySelector('#polar-chart_03025-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03025').classList.remove('visible')
        document.querySelector('#f-path-03025').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03025
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03025
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03025
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03025
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03025
    }
    com_03025.onclick = togg03025;
    list_03025.onclick = togg03025;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03026 = data[25];

    /*Récupere les données que je veut de la Commune */
    name_03026 = rows03026.Libellé_géographique;
    Pop_03026 = rows03026.Population_en_2017;
    Pop_017_03026 = rows03026.Pop_017_ans_2017;
    Pop_mediane_vote_03026 = rows03026.Popu_possible_voté;
    nbr_inscrit_03026 = rows03026.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03026').textContent = name_03026;
   
    let com_03026 = document.getElementById("f-path-03026");
    let list_03026 = document.getElementById("list_03026");


    function togg03026() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03026-01').classList.remove('visible')
        document.querySelector('#polar-chart_03026-01').classList.remove('visible')
        document.querySelector('#polar-chart_03026-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03026').classList.remove('visible')
        document.querySelector('#f-path-03026').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03026
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03026
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03026
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03026
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03026
    }
    com_03026.onclick = togg03026;
    list_03026.onclick = togg03026;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03027 = data[26];

    /*Récupere les données que je veut de la Commune */
    name_03027 = rows03027.Libellé_géographique;
    Pop_03027 = rows03027.Population_en_2017;
    Pop_017_03027 = rows03027.Pop_017_ans_2017;
    Pop_mediane_vote_03027 = rows03027.Popu_possible_voté;
    nbr_inscrit_03027 = rows03027.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03027').textContent = name_03027;
   
    let com_03027 = document.getElementById("f-path-03027");
    let list_03027 = document.getElementById("list_03027");


    function togg03027() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03027-01').classList.remove('visible')
        document.querySelector('#polar-chart_03027-01').classList.remove('visible')
        document.querySelector('#polar-chart_03027-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03027').classList.remove('visible')
        document.querySelector('#f-path-03027').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03027
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03027
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03027
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03027
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03027
    }
    com_03027.onclick = togg03027;
    list_03027.onclick = togg03027;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03028 = data[27];

    /*Récupere les données que je veut de la Commune */
    name_03028 = rows03028.Libellé_géographique;
    Pop_03028 = rows03028.Population_en_2017;
    Pop_017_03028 = rows03028.Pop_017_ans_2017;
    Pop_mediane_vote_03028 = rows03028.Popu_possible_voté;
    nbr_inscrit_03028 = rows03028.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03028').textContent = name_03028;
   
    let com_03028 = document.getElementById("f-path-03028");
    let list_03028 = document.getElementById("list_03028");


    function togg03028() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03028-01').classList.remove('visible')
        document.querySelector('#polar-chart_03028-01').classList.remove('visible')
        document.querySelector('#polar-chart_03028-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03028').classList.remove('visible')
        document.querySelector('#f-path-03028').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03028
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03028
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03028
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03028
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03028
    }
    com_03028.onclick = togg03028;
    list_03028.onclick = togg03028;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03029 = data[28];

    /*Récupere les données que je veut de la Commune */
    name_03029 = rows03029.Libellé_géographique;
    Pop_03029 = rows03029.Population_en_2017;
    Pop_017_03029 = rows03029.Pop_017_ans_2017;
    Pop_mediane_vote_03029 = rows03029.Popu_possible_voté;
    nbr_inscrit_03029 = rows03029.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03029').textContent = name_03029;
   
    let com_03029 = document.getElementById("f-path-03029");
    let list_03029 = document.getElementById("list_03029");


    function togg03029() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03029-01').classList.remove('visible')
        document.querySelector('#polar-chart_03029-01').classList.remove('visible')
        document.querySelector('#polar-chart_03029-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03029').classList.remove('visible')
        document.querySelector('#f-path-03029').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03029
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03029
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03029
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03029
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03029
    }
    com_03029.onclick = togg03029;
    list_03029.onclick = togg03029;
     /************************************************************************************* */
    /************************************************************************************* */
    const rows03030 = data[29];

    /*Récupere les données que je veut de la Commune */
    name_03030 = rows03030.Libellé_géographique;
    Pop_03030 = rows03030.Population_en_2017;
    Pop_017_03030 = rows03030.Pop_017_ans_2017;
    Pop_mediane_vote_03030 = rows03030.Popu_possible_voté;
    nbr_inscrit_03030 = rows03030.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03030').textContent = name_03030;
   
    let com_03030 = document.getElementById("f-path-03030");
    let list_03030 = document.getElementById("list_03030");


    function togg03030() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03030-01').classList.remove('visible')
        document.querySelector('#polar-chart_03030-01').classList.remove('visible')
        document.querySelector('#polar-chart_03030-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03030').classList.remove('visible')
        document.querySelector('#f-path-03030').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03030
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03030
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03030
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03030
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03030
    }
    com_03030.onclick = togg03030;
    list_03030.onclick = togg03030;
     /************************************************************************************* */
    /************************************************************************************* */
    const rows03031 = data[30];

    /*Récupere les données que je veut de la Commune */
    name_03031 = rows03031.Libellé_géographique;
    Pop_03031 = rows03031.Population_en_2017;
    Pop_017_03031 = rows03031.Pop_017_ans_2017;
    Pop_mediane_vote_03031 = rows03031.Popu_possible_voté;
    nbr_inscrit_03031 = rows03031.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03031').textContent = name_03031;
   
    let com_03031 = document.getElementById("f-path-03031");
    let list_03031 = document.getElementById("list_03031");


    function togg03031() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03031-01').classList.remove('visible')
        document.querySelector('#polar-chart_03031-01').classList.remove('visible')
        document.querySelector('#polar-chart_03031-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03031').classList.remove('visible')
        document.querySelector('#f-path-03031').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03031
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03031
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03031
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03031
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03031
    }
    com_03031.onclick = togg03031;
    list_03031.onclick = togg03031;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03032 = data[31];

    /*Récupere les données que je veut de la Commune */
    name_03032 = rows03032.Libellé_géographique;
    Pop_03032 = rows03032.Population_en_2017;
    Pop_017_03032 = rows03032.Pop_017_ans_2017;
    Pop_mediane_vote_03032 = rows03032.Popu_possible_voté;
    nbr_inscrit_03032 = rows03032.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03032').textContent = name_03032;
   
    let com_03032 = document.getElementById("f-path-03032");
    let list_03032 = document.getElementById("list_03032");


    function togg03032() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03032-01').classList.remove('visible')
        document.querySelector('#polar-chart_03032-01').classList.remove('visible')
        document.querySelector('#polar-chart_03032-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03032').classList.remove('visible')
        document.querySelector('#f-path-03032').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03032
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03032
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03032
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03032
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03032
    }
    com_03032.onclick = togg03032;
    list_03032.onclick = togg03032;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03033 = data[32];

    /*Récupere les données que je veut de la Commune */
    name_03033 = rows03033.Libellé_géographique;
    Pop_03033 = rows03033.Population_en_2017;
    Pop_017_03033 = rows03033.Pop_017_ans_2017;
    Pop_mediane_vote_03033 = rows03033.Popu_possible_voté;
    nbr_inscrit_03033 = rows03033.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03033').textContent = name_03033;
   
    let com_03033 = document.getElementById("f-path-03033");
    let list_03033 = document.getElementById("list_03033");


    function togg03033() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03033-01').classList.remove('visible')
        document.querySelector('#polar-chart_03033-01').classList.remove('visible')
        document.querySelector('#polar-chart_03033-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03033').classList.remove('visible')
        document.querySelector('#f-path-03033').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03033
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03033
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03033
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03033
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03033
    }
    com_03033.onclick = togg03033;
    list_03033.onclick = togg03033;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03034 = data[33];

    /*Récupere les données que je veut de la Commune */
    name_03034 = rows03034.Libellé_géographique;
    Pop_03034 = rows03034.Population_en_2017;
    Pop_017_03034 = rows03034.Pop_017_ans_2017;
    Pop_mediane_vote_03034 = rows03034.Popu_possible_voté;
    nbr_inscrit_03034 = rows03034.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03034').textContent = name_03034;
   
    let com_03034 = document.getElementById("f-path-03034");
    let list_03034 = document.getElementById("list_03034");


    function togg03034() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03034-01').classList.remove('visible')
        document.querySelector('#polar-chart_03034-01').classList.remove('visible')
        document.querySelector('#polar-chart_03034-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03034').classList.remove('visible')
        document.querySelector('#f-path-03034').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03034
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03034
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03034
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03034
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03034
    }
    com_03034.onclick = togg03034;
    list_03034.onclick = togg03034;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03035 = data[34];

    /*Récupere les données que je veut de la Commune */
    name_03035 = rows03035.Libellé_géographique;
    Pop_03035 = rows03035.Population_en_2017;
    Pop_017_03035 = rows03035.Pop_017_ans_2017;
    Pop_mediane_vote_03035 = rows03035.Popu_possible_voté;
    nbr_inscrit_03035 = rows03035.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03035').textContent = name_03035;
   
    let com_03035 = document.getElementById("f-path-03035");
    let list_03035 = document.getElementById("list_03035");


    function togg03035() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03035-01').classList.remove('visible')
        document.querySelector('#polar-chart_03035-01').classList.remove('visible')
        document.querySelector('#polar-chart_03035-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03035').classList.remove('visible')
        document.querySelector('#f-path-03035').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03035
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03035
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03035
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03035
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03035
    }
    com_03035.onclick = togg03035;
    list_03035.onclick = togg03035;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03036 = data[35];

    /*Récupere les données que je veut de la Commune */
    name_03036 = rows03036.Libellé_géographique;
    Pop_03036 = rows03036.Population_en_2017;
    Pop_017_03036 = rows03036.Pop_017_ans_2017;
    Pop_mediane_vote_03036 = rows03036.Popu_possible_voté;
    nbr_inscrit_03036 = rows03036.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03036').textContent = name_03036;
   
    let com_03036 = document.getElementById("f-path-03036");
    let list_03036 = document.getElementById("list_03036");


    function togg03036() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03036-01').classList.remove('visible')
        document.querySelector('#polar-chart_03036-01').classList.remove('visible')
        document.querySelector('#polar-chart_03036-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03036').classList.remove('visible')
        document.querySelector('#f-path-03036').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03036
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03036
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03036
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03036
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03036
    }
    com_03036.onclick = togg03036;
    list_03036.onclick = togg03036;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03037 = data[36];

    /*Récupere les données que je veut de la Commune */
    name_03037 = rows03037.Libellé_géographique;
    Pop_03037 = rows03037.Population_en_2017;
    Pop_017_03037 = rows03037.Pop_017_ans_2017;
    Pop_mediane_vote_03037 = rows03037.Popu_possible_voté;
    nbr_inscrit_03037 = rows03037.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03037').textContent = name_03037;
   
    let com_03037 = document.getElementById("f-path-03037");
    let list_03037 = document.getElementById("list_03037");


    function togg03037() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03037-01').classList.remove('visible')
        document.querySelector('#polar-chart_03037-01').classList.remove('visible')
        document.querySelector('#polar-chart_03067-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03037').classList.remove('visible')
        document.querySelector('#f-path-03037').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03037
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03037
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03037
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03037
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03037
    }
    com_03037.onclick = togg03037;
    list_03037.onclick = togg03037;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03038 = data[37];

    /*Récupere les données que je veut de la Commune */
    name_03038 = rows03038.Libellé_géographique;
    Pop_03038 = rows03038.Population_en_2017;
    Pop_017_03038 = rows03038.Pop_017_ans_2017;
    Pop_mediane_vote_03038 = rows03038.Popu_possible_voté;
    nbr_inscrit_03038 = rows03038.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03038').textContent = name_03038;
   
    let com_03038 = document.getElementById("f-path-03038");
    let list_03038 = document.getElementById("list_03038");


    function togg03038() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03038-01').classList.remove('visible')
        document.querySelector('#polar-chart_03038-01').classList.remove('visible')
        document.querySelector('#polar-chart_03068-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03038').classList.remove('visible')
        document.querySelector('#f-path-03038').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03038
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03038
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03038
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03038
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03038
    }
    com_03038.onclick = togg03038;
    list_03038.onclick = togg03038;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03039 = data[38];

    /*Récupere les données que je veut de la Commune */
    name_03039 = rows03039.Libellé_géographique;
    Pop_03039 = rows03039.Population_en_2017;
    Pop_017_03039 = rows03039.Pop_017_ans_2017;
    Pop_mediane_vote_03039 = rows03039.Popu_possible_voté;
    nbr_inscrit_03039 = rows03039.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03039').textContent = name_03039;
   
    let com_03039 = document.getElementById("f-path-03039");
    let list_03039 = document.getElementById("list_03039");


    function togg03039() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03039-01').classList.remove('visible')
        document.querySelector('#polar-chart_03039-01').classList.remove('visible')
        document.querySelector('#polar-chart_03069-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03039').classList.remove('visible')
        document.querySelector('#f-path-03039').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03039
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03039
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03039
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03039
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03039
    }
    com_03039.onclick = togg03039;
    list_03039.onclick = togg03039;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03040 = data[39];

    /*Récupere les données que je veut de la Commune */
    name_03040 = rows03040.Libellé_géographique;
    Pop_03040 = rows03040.Population_en_2017;
    Pop_017_03040 = rows03040.Pop_017_ans_2017;
    Pop_mediane_vote_03040 = rows03040.Popu_possible_voté;
    nbr_inscrit_03040 = rows03040.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03040').textContent = name_03040;
   
    let com_03040 = document.getElementById("f-path-03040");
    let list_03040 = document.getElementById("list_03040");


    function togg03040() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03040-01').classList.remove('visible')
        document.querySelector('#polar-chart_03040-01').classList.remove('visible')
        document.querySelector('#polar-chart_03040-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03040').classList.remove('visible')
        document.querySelector('#f-path-03040').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03040
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03040
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03040
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03040
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03040
    }
    com_03040.onclick = togg03040;
    list_03040.onclick = togg03040;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03041 = data[40];

    /*Récupere les données que je veut de la Commune */
    name_03041 = rows03041.Libellé_géographique;
    Pop_03041 = rows03041.Population_en_2017;
    Pop_017_03041 = rows03041.Pop_017_ans_2017;
    Pop_mediane_vote_03041 = rows03041.Popu_possible_voté;
    nbr_inscrit_03041 = rows03041.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03041').textContent = name_03041;
   
    let com_03041 = document.getElementById("f-path-03041");
    let list_03041 = document.getElementById("list_03041");


    function togg03041() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03041-01').classList.remove('visible')
        document.querySelector('#polar-chart_03041-01').classList.remove('visible')
        document.querySelector('#polar-chart_03041-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03041').classList.remove('visible')
        document.querySelector('#f-path-03041').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03041
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03041
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03041
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03041
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03041
    }
    com_03041.onclick = togg03041;
    list_03041.onclick = togg03041;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03042 = data[41];

    /*Récupere les données que je veut de la Commune */
    name_03042 = rows03042.Libellé_géographique;
    Pop_03042 = rows03042.Population_en_2017;
    Pop_017_03042 = rows03042.Pop_017_ans_2017;
    Pop_mediane_vote_03042 = rows03042.Popu_possible_voté;
    nbr_inscrit_03042 = rows03042.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03042').textContent = name_03042;
   
    let com_03042 = document.getElementById("f-path-03042");
    let list_03042 = document.getElementById("list_03042");


    function togg03042() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03042-01').classList.remove('visible')
        document.querySelector('#polar-chart_03042-01').classList.remove('visible')
        document.querySelector('#polar-chart_03042-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03042').classList.remove('visible')
        document.querySelector('#f-path-03042').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03042
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03042
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03042
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03042
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03042
    }
    com_03042.onclick = togg03042;
    list_03042.onclick = togg03042;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03043 = data[42];

    /*Récupere les données que je veut de la Commune */
    name_03043 = rows03043.Libellé_géographique;
    Pop_03043 = rows03043.Population_en_2017;
    Pop_017_03043 = rows03043.Pop_017_ans_2017;
    Pop_mediane_vote_03043 = rows03043.Popu_possible_voté;
    nbr_inscrit_03043 = rows03043.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03043').textContent = name_03043;
   
    let com_03043 = document.getElementById("f-path-03043");
    let list_03043 = document.getElementById("list_03043");


    function togg03043() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03043-01').classList.remove('visible')
        document.querySelector('#polar-chart_03043-01').classList.remove('visible')
        document.querySelector('#polar-chart_03043-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03043').classList.remove('visible')
        document.querySelector('#f-path-03043').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03043
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03043
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03043
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03043
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03043
    }
    com_03043.onclick = togg03043;
    list_03043.onclick = togg03043;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03044 = data[43];

    /*Récupere les données que je veut de la Commune */
    name_03044 = rows03044.Libellé_géographique;
    Pop_03044 = rows03044.Population_en_2017;
    Pop_017_03044 = rows03044.Pop_017_ans_2017;
    Pop_mediane_vote_03044 = rows03044.Popu_possible_voté;
    nbr_inscrit_03044 = rows03044.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03044').textContent = name_03044;
   
    let com_03044 = document.getElementById("f-path-03044");
    let list_03044 = document.getElementById("list_03044");


    function togg03044() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03044-01').classList.remove('visible')
        document.querySelector('#polar-chart_03044-01').classList.remove('visible')
        document.querySelector('#polar-chart_03044-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03044').classList.remove('visible')
        document.querySelector('#f-path-03044').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03044
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03044
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03044
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03044
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03044
    }
    com_03044.onclick = togg03044;
    list_03044.onclick = togg03044;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03045 = data[44];

    /*Récupere les données que je veut de la Commune */
    name_03045 = rows03045.Libellé_géographique;
    Pop_03045 = rows03045.Population_en_2017;
    Pop_017_03045 = rows03045.Pop_017_ans_2017;
    Pop_mediane_vote_03045 = rows03045.Popu_possible_voté;
    nbr_inscrit_03045 = rows03045.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03045').textContent = name_03045;
   
    let com_03045 = document.getElementById("f-path-03045");
    let list_03045 = document.getElementById("list_03045");


    function togg03045() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03045-01').classList.remove('visible')
        document.querySelector('#polar-chart_03045-01').classList.remove('visible')
        document.querySelector('#polar-chart_03045-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03045').classList.remove('visible')
        document.querySelector('#f-path-03045').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03045
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03045
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03045
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03045
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03045
    }
    com_03045.onclick = togg03045;
    list_03045.onclick = togg03045;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03046 = data[45];

    /*Récupere les données que je veut de la Commune */
    name_03046 = rows03046.Libellé_géographique;
    Pop_03046 = rows03046.Population_en_2017;
    Pop_017_03046 = rows03046.Pop_017_ans_2017;
    Pop_mediane_vote_03046 = rows03046.Popu_possible_voté;
    nbr_inscrit_03046 = rows03046.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03046').textContent = name_03046;
   
    let com_03046 = document.getElementById("f-path-03046");
    let list_03046 = document.getElementById("list_03046");


    function togg03046() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03046-01').classList.remove('visible')
        document.querySelector('#polar-chart_03046-01').classList.remove('visible')
        document.querySelector('#polar-chart_03046-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03046').classList.remove('visible')
        document.querySelector('#f-path-03046').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03046
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03046
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03046
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03046
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03046
    }
    com_03046.onclick = togg03046;
    list_03046.onclick = togg03046;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03047 = data[46];

    /*Récupere les données que je veut de la Commune */
    name_03047 = rows03047.Libellé_géographique;
    Pop_03047 = rows03047.Population_en_2017;
    Pop_017_03047 = rows03047.Pop_017_ans_2017;
    Pop_mediane_vote_03047 = rows03047.Popu_possible_voté;
    nbr_inscrit_03047 = rows03047.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03047').textContent = name_03047;
   
    let com_03047 = document.getElementById("f-path-03047");
    let list_03047 = document.getElementById("list_03047");


    function togg03047() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03047-01').classList.remove('visible')
        document.querySelector('#polar-chart_03047-01').classList.remove('visible')
        document.querySelector('#polar-chart_03047-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03047').classList.remove('visible')
        document.querySelector('#f-path-03047').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03047
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03047
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03047
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03047
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03047
    }
    com_03047.onclick = togg03047;
    list_03047.onclick = togg03047;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03048 = data[47];

    /*Récupere les données que je veut de la Commune */
    name_03048 = rows03048.Libellé_géographique;
    Pop_03048 = rows03048.Population_en_2017;
    Pop_017_03048 = rows03048.Pop_017_ans_2017;
    Pop_mediane_vote_03048 = rows03048.Popu_possible_voté;
    nbr_inscrit_03048 = rows03048.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03048').textContent = name_03048;
   
    let com_03048 = document.getElementById("f-path-03048");
    let list_03048 = document.getElementById("list_03048");


    function togg03048() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03048-01').classList.remove('visible')
        document.querySelector('#polar-chart_03048-01').classList.remove('visible')
        document.querySelector('#polar-chart_03048-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03048').classList.remove('visible')
        document.querySelector('#f-path-03048').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03048
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03048
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03048
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03048
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03048
    }
    com_03048.onclick = togg03048;
    list_03048.onclick = togg03048;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03049 = data[48];

    /*Récupere les données que je veut de la Commune */
    name_03049 = rows03049.Libellé_géographique;
    Pop_03049 = rows03049.Population_en_2017;
    Pop_017_03049 = rows03049.Pop_017_ans_2017;
    Pop_mediane_vote_03049 = rows03049.Popu_possible_voté;
    nbr_inscrit_03049 = rows03049.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03049').textContent = name_03049;
   
    let com_03049 = document.getElementById("f-path-03049");
    let list_03049 = document.getElementById("list_03049");


    function togg03049() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03049-01').classList.remove('visible')
        document.querySelector('#polar-chart_03049-01').classList.remove('visible')
        document.querySelector('#polar-chart_03049-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03049').classList.remove('visible')
        document.querySelector('#f-path-03049').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03049
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03049
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03049
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03049
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03049
    }
    com_03049.onclick = togg03049;
    list_03049.onclick = togg03049;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03050 = data[49];

    /*Récupere les données que je veut de la Commune */
    name_03050 = rows03050.Libellé_géographique;
    Pop_03050 = rows03050.Population_en_2017;
    Pop_017_03050 = rows03050.Pop_017_ans_2017;
    Pop_mediane_vote_03050 = rows03050.Popu_possible_voté;
    nbr_inscrit_03050 = rows03050.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03050').textContent = name_03050;
   
    let com_03050 = document.getElementById("f-path-03050");
    let list_03050 = document.getElementById("list_03050");


    function togg03050() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03050-01').classList.remove('visible')
        document.querySelector('#polar-chart_03050-01').classList.remove('visible')
        document.querySelector('#polar-chart_03050-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03050').classList.remove('visible')
        document.querySelector('#f-path-03050').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03050
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03050
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03050
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03050
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03050
    }
    com_03050.onclick = togg03050;
    list_03050.onclick = togg03050;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03051 = data[50];

    /*Récupere les données que je veut de la Commune */
    name_03051 = rows03051.Libellé_géographique;
    Pop_03051 = rows03051.Population_en_2017;
    Pop_017_03051 = rows03051.Pop_017_ans_2017;
    Pop_mediane_vote_03051 = rows03051.Popu_possible_voté;
    nbr_inscrit_03051 = rows03051.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03051').textContent = name_03051;
   
    let com_03051 = document.getElementById("f-path-03051");
    let list_03051 = document.getElementById("list_03051");


    function togg03051() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03051-01').classList.remove('visible')
        document.querySelector('#polar-chart_03051-01').classList.remove('visible')
        document.querySelector('#polar-chart_03051-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03051').classList.remove('visible')
        document.querySelector('#f-path-03051').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03051
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03051
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03051
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03051
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03051
    }
    com_03051.onclick = togg03051;
    list_03051.onclick = togg03051;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03052 = data[51];

    /*Récupere les données que je veut de la Commune */
    name_03052 = rows03052.Libellé_géographique;
    Pop_03052 = rows03052.Population_en_2017;
    Pop_017_03052 = rows03052.Pop_017_ans_2017;
    Pop_mediane_vote_03052 = rows03052.Popu_possible_voté;
    nbr_inscrit_03052 = rows03052.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03052').textContent = name_03052;
   
    let com_03052 = document.getElementById("f-path-03052");
    let list_03052 = document.getElementById("list_03052");


    function togg03052() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03052-01').classList.remove('visible')
        document.querySelector('#polar-chart_03052-01').classList.remove('visible')
        document.querySelector('#polar-chart_03052-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03052').classList.remove('visible')
        document.querySelector('#f-path-03052').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03052
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03052
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03052
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03052
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03052
    }
    com_03052.onclick = togg03052;
    list_03052.onclick = togg03052;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03053 = data[52];

    /*Récupere les données que je veut de la Commune */
    name_03053 = rows03053.Libellé_géographique;
    Pop_03053 = rows03053.Population_en_2017;
    Pop_017_03053 = rows03053.Pop_017_ans_2017;
    Pop_mediane_vote_03053 = rows03053.Popu_possible_voté;
    nbr_inscrit_03053 = rows03053.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03053').textContent = name_03053;
   
    let com_03053 = document.getElementById("f-path-03053");
    let list_03053 = document.getElementById("list_03053");


    function togg03053() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03053-01').classList.remove('visible')
        document.querySelector('#polar-chart_03053-01').classList.remove('visible')
        document.querySelector('#polar-chart_03053-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03053').classList.remove('visible')
        document.querySelector('#f-path-03053').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03053
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03053
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03053
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03053
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03053
    }
    com_03053.onclick = togg03053;
    list_03053.onclick = togg03053;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03054 = data[53];

    /*Récupere les données que je veut de la Commune */
    name_03054 = rows03054.Libellé_géographique;
    Pop_03054 = rows03054.Population_en_2017;
    Pop_017_03054 = rows03054.Pop_017_ans_2017;
    Pop_mediane_vote_03054 = rows03054.Popu_possible_voté;
    nbr_inscrit_03054 = rows03054.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03054').textContent = name_03054;
   
    let com_03054 = document.getElementById("f-path-03054");
    let list_03054 = document.getElementById("list_03054");


    function togg03054() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03054-01').classList.remove('visible')
        document.querySelector('#polar-chart_03054-01').classList.remove('visible')
        document.querySelector('#polar-chart_03054-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03054').classList.remove('visible')
        document.querySelector('#f-path-03054').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03054
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03054
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03054
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03054
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03054
    }
    com_03054.onclick = togg03054;
    list_03054.onclick = togg03054;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03055 = data[54];

    /*Récupere les données que je veut de la Commune */
    name_03055 = rows03055.Libellé_géographique;
    Pop_03055 = rows03055.Population_en_2017;
    Pop_017_03055 = rows03055.Pop_017_ans_2017;
    Pop_mediane_vote_03055 = rows03055.Popu_possible_voté;
    nbr_inscrit_03055 = rows03055.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03055').textContent = name_03055;
   
    let com_03055 = document.getElementById("f-path-03055");
    let list_03055 = document.getElementById("list_03055");


    function togg03055() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03055-01').classList.remove('visible')
        document.querySelector('#polar-chart_03055-01').classList.remove('visible')
        document.querySelector('#polar-chart_03055-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03055').classList.remove('visible')
        document.querySelector('#f-path-03055').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03055
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03055
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03055
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03055
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03055
    }
    com_03055.onclick = togg03055;
    list_03055.onclick = togg03055;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03056 = data[55];

    /*Récupere les données que je veut de la Commune */
    name_03056 = rows03056.Libellé_géographique;
    Pop_03056 = rows03056.Population_en_2017;
    Pop_017_03056 = rows03056.Pop_017_ans_2017;
    Pop_mediane_vote_03056 = rows03056.Popu_possible_voté;
    nbr_inscrit_03056 = rows03056.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03056').textContent = name_03056;
   
    let com_03056 = document.getElementById("f-path-03056");
    let list_03056 = document.getElementById("list_03056");


    function togg03056() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03056-01').classList.remove('visible')
        document.querySelector('#polar-chart_03056-01').classList.remove('visible')
        document.querySelector('#polar-chart_03056-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03056').classList.remove('visible')
        document.querySelector('#f-path-03056').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03056
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03056
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03056
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03056
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03056
    }
    com_03056.onclick = togg03056;
    list_03056.onclick = togg03056;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03057 = data[56];

    /*Récupere les données que je veut de la Commune */
    name_03057 = rows03057.Libellé_géographique;
    Pop_03057 = rows03057.Population_en_2017;
    Pop_017_03057 = rows03057.Pop_017_ans_2017;
    Pop_mediane_vote_03057 = rows03057.Popu_possible_voté;
    nbr_inscrit_03057 = rows03057.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03057').textContent = name_03057;
   
    let com_03057 = document.getElementById("f-path-03057");
    let list_03057 = document.getElementById("list_03057");


    function togg03057() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03057-01').classList.remove('visible')
        document.querySelector('#polar-chart_03057-01').classList.remove('visible')
        document.querySelector('#polar-chart_03057-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03057').classList.remove('visible')
        document.querySelector('#f-path-03057').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03057
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03057
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03057
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03057
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03057
    }
    com_03057.onclick = togg03057;
    list_03057.onclick = togg03057;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03058 = data[57];

    /*Récupere les données que je veut de la Commune */
    name_03058 = rows03058.Libellé_géographique;
    Pop_03058 = rows03058.Population_en_2017;
    Pop_017_03058 = rows03058.Pop_017_ans_2017;
    Pop_mediane_vote_03058 = rows03058.Popu_possible_voté;
    nbr_inscrit_03058 = rows03058.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03058').textContent = name_03058;
   
    let com_03058 = document.getElementById("f-path-03058");
    let list_03058 = document.getElementById("list_03058");


    function togg03058() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03058-01').classList.remove('visible')
        document.querySelector('#polar-chart_03058-01').classList.remove('visible')
        document.querySelector('#polar-chart_03058-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03058').classList.remove('visible')
        document.querySelector('#f-path-03058').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03058
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03058
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03058
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03058
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03058
    }
    com_03058.onclick = togg03058;
    list_03058.onclick = togg03058;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03059 = data[58];

    /*Récupere les données que je veut de la Commune */
    name_03059 = rows03059.Libellé_géographique;
    Pop_03059 = rows03059.Population_en_2017;
    Pop_017_03059 = rows03059.Pop_017_ans_2017;
    Pop_mediane_vote_03059 = rows03059.Popu_possible_voté;
    nbr_inscrit_03059 = rows03059.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03059').textContent = name_03059;
   
    let com_03059 = document.getElementById("f-path-03059");
    let list_03059 = document.getElementById("list_03059");


    function togg03059() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03059-01').classList.remove('visible')
        document.querySelector('#polar-chart_03059-01').classList.remove('visible')
        document.querySelector('#polar-chart_03059-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03059').classList.remove('visible')
        document.querySelector('#f-path-03059').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03059
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03059
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03059
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03059
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03059
    }
    com_03059.onclick = togg03059;
    list_03059.onclick = togg03059;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03060 = data[59];

    /*Récupere les données que je veut de la Commune */
    name_03060 = rows03060.Libellé_géographique;
    Pop_03060 = rows03060.Population_en_2017;
    Pop_017_03060 = rows03060.Pop_017_ans_2017;
    Pop_mediane_vote_03060 = rows03060.Popu_possible_voté;
    nbr_inscrit_03060 = rows03060.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03060').textContent = name_03060;
   
    let com_03060 = document.getElementById("f-path-03060");
    let list_03060 = document.getElementById("list_03060");


    function togg03060() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03060-01').classList.remove('visible')
        document.querySelector('#polar-chart_03060-01').classList.remove('visible')
        document.querySelector('#polar-chart_03060-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03060').classList.remove('visible')
        document.querySelector('#f-path-03060').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03060
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03060
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03060
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03060
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03060
    }
    com_03060.onclick = togg03060;
    list_03060.onclick = togg03060;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03061 = data[60];

    /*Récupere les données que je veut de la Commune */
    name_03061 = rows03061.Libellé_géographique;
    Pop_03061 = rows03061.Population_en_2017;
    Pop_017_03061 = rows03061.Pop_017_ans_2017;
    Pop_mediane_vote_03061 = rows03061.Popu_possible_voté;
    nbr_inscrit_03061 = rows03061.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03061').textContent = name_03061;
   
    let com_03061 = document.getElementById("f-path-03061");
    let list_03061 = document.getElementById("list_03061");


    function togg03061() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03061-01').classList.remove('visible')
        document.querySelector('#polar-chart_03061-01').classList.remove('visible')
        document.querySelector('#polar-chart_03061-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03061').classList.remove('visible')
        document.querySelector('#f-path-03061').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03061
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03061
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03061
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03061
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03061
    }
    com_03061.onclick = togg03061;
    list_03061.onclick = togg03061;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03062 = data[61];

    /*Récupere les données que je veut de la Commune */
    name_03062 = rows03062.Libellé_géographique;
    Pop_03062 = rows03062.Population_en_2017;
    Pop_017_03062 = rows03062.Pop_017_ans_2017;
    Pop_mediane_vote_03062 = rows03062.Popu_possible_voté;
    nbr_inscrit_03062 = rows03062.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03062').textContent = name_03062;
   
    let com_03062 = document.getElementById("f-path-03062");
    let list_03062 = document.getElementById("list_03062");


    function togg03062() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03062-01').classList.remove('visible')
        document.querySelector('#polar-chart_03062-01').classList.remove('visible')
        document.querySelector('#polar-chart_03062-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03062').classList.remove('visible')
        document.querySelector('#f-path-03062').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03062
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03062
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03062
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03062
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03062
    }
    com_03062.onclick = togg03062;
    list_03062.onclick = togg03062;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03063 = data[62];

    /*Récupere les données que je veut de la Commune */
    name_03063 = rows03063.Libellé_géographique;
    Pop_03063 = rows03063.Population_en_2017;
    Pop_017_03063 = rows03063.Pop_017_ans_2017;
    Pop_mediane_vote_03063 = rows03063.Popu_possible_voté;
    nbr_inscrit_03063 = rows03063.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03063').textContent = name_03063;
   
    let com_03063 = document.getElementById("f-path-03063");
    let list_03063 = document.getElementById("list_03063");


    function togg03063() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03063-01').classList.remove('visible')
        document.querySelector('#polar-chart_03063-01').classList.remove('visible')
        document.querySelector('#polar-chart_03063-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03063').classList.remove('visible')
        document.querySelector('#f-path-03063').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03063
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03063
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03063
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03063
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03063
    }
    com_03063.onclick = togg03063;
    list_03063.onclick = togg03063;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03064 = data[63];

    /*Récupere les données que je veut de la Commune */
    name_03064 = rows03064.Libellé_géographique;
    Pop_03064 = rows03064.Population_en_2017;
    Pop_017_03064 = rows03064.Pop_017_ans_2017;
    Pop_mediane_vote_03064 = rows03064.Popu_possible_voté;
    nbr_inscrit_03064 = rows03064.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03064').textContent = name_03064;
   
    let com_03064 = document.getElementById("f-path-03064");
    let list_03064 = document.getElementById("list_03064");


    function togg03064() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03064-01').classList.remove('visible')
        document.querySelector('#polar-chart_03064-01').classList.remove('visible')
        document.querySelector('#polar-chart_03064-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03064').classList.remove('visible')
        document.querySelector('#f-path-03064').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03064
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03064
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03064
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03064
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03064
    }
    com_03064.onclick = togg03064;
    list_03064.onclick = togg03064;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03065 = data[64];

    /*Récupere les données que je veut de la Commune */
    name_03065 = rows03065.Libellé_géographique;
    Pop_03065 = rows03065.Population_en_2017;
    Pop_017_03065 = rows03065.Pop_017_ans_2017;
    Pop_mediane_vote_03065 = rows03065.Popu_possible_voté;
    nbr_inscrit_03065 = rows03065.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03065').textContent = name_03065;
   
    let com_03065 = document.getElementById("f-path-03065");
    let list_03065 = document.getElementById("list_03065");


    function togg03065() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03065-01').classList.remove('visible')
        document.querySelector('#polar-chart_03065-01').classList.remove('visible')
        document.querySelector('#polar-chart_03065-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03065').classList.remove('visible')
        document.querySelector('#f-path-03065').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03065
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03065
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03065
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03065
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03065
    }
    com_03065.onclick = togg03065;
    list_03065.onclick = togg03065;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03066 = data[65];

    /*Récupere les données que je veut de la Commune */
    name_03066 = rows03066.Libellé_géographique;
    Pop_03066 = rows03066.Population_en_2017;
    Pop_017_03066 = rows03066.Pop_017_ans_2017;
    Pop_mediane_vote_03066 = rows03066.Popu_possible_voté;
    nbr_inscrit_03066 = rows03066.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03066').textContent = name_03066;
   
    let com_03066 = document.getElementById("f-path-03066");
    let list_03066 = document.getElementById("list_03066");


    function togg03066() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03066-01').classList.remove('visible')
        document.querySelector('#polar-chart_03066-01').classList.remove('visible')
        document.querySelector('#polar-chart_03066-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03066').classList.remove('visible')
        document.querySelector('#f-path-03066').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03066
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03066
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03066
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03066
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03066
    }
    com_03066.onclick = togg03066;
    list_03066.onclick = togg03066;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03067 = data[66];

    /*Récupere les données que je veut de la Commune */
    name_03067 = rows03067.Libellé_géographique;
    Pop_03067 = rows03067.Population_en_2017;
    Pop_017_03067 = rows03067.Pop_017_ans_2017;
    Pop_mediane_vote_03067 = rows03067.Popu_possible_voté;
    nbr_inscrit_03067 = rows03067.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03067').textContent = name_03067;
   
    let com_03067 = document.getElementById("f-path-03067");
    let list_03067 = document.getElementById("list_03067");


    function togg03067() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03067-01').classList.remove('visible')
        document.querySelector('#polar-chart_03067-01').classList.remove('visible')
        document.querySelector('#polar-chart_03067-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03067').classList.remove('visible')
        document.querySelector('#f-path-03067').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03067
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03067
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03067
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03067
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03067
    }
    com_03067.onclick = togg03067;
    list_03067.onclick = togg03067;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03068 = data[67];

    /*Récupere les données que je veut de la Commune */
    name_03068 = rows03068.Libellé_géographique;
    Pop_03068 = rows03068.Population_en_2017;
    Pop_017_03068 = rows03068.Pop_017_ans_2017;
    Pop_mediane_vote_03068 = rows03068.Popu_possible_voté;
    nbr_inscrit_03068 = rows03068.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03068').textContent = name_03068;
   
    let com_03068 = document.getElementById("f-path-03068");
    let list_03068 = document.getElementById("list_03068");


    function togg03068() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03068-01').classList.remove('visible')
        document.querySelector('#polar-chart_03068-01').classList.remove('visible')
        document.querySelector('#polar-chart_03068-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03068').classList.remove('visible')
        document.querySelector('#f-path-03068').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03068
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03068
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03068
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03068
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03068
    }
    com_03068.onclick = togg03068;
    list_03068.onclick = togg03068;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03069 = data[68];

    /*Récupere les données que je veut de la Commune */
    name_03069 = rows03069.Libellé_géographique;
    Pop_03069 = rows03069.Population_en_2017;
    Pop_017_03069 = rows03069.Pop_017_ans_2017;
    Pop_mediane_vote_03069 = rows03069.Popu_possible_voté;
    nbr_inscrit_03069 = rows03069.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03069').textContent = name_03069;
   
    let com_03069 = document.getElementById("f-path-03069");
    let list_03069 = document.getElementById("list_03069");


    function togg03069() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03069-01').classList.remove('visible')
        document.querySelector('#polar-chart_03069-01').classList.remove('visible')
        document.querySelector('#polar-chart_03069-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03069').classList.remove('visible')
        document.querySelector('#f-path-03069').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03069
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03069
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03069
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03069
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03069
    }
    com_03069.onclick = togg03069;
    list_03069.onclick = togg03069;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03070 = data[69];

    /*Récupere les données que je veut de la Commune */
    name_03070 = rows03070.Libellé_géographique;
    Pop_03070 = rows03070.Population_en_2017;
    Pop_017_03070 = rows03070.Pop_017_ans_2017;
    Pop_mediane_vote_03070 = rows03070.Popu_possible_voté;
    nbr_inscrit_03070 = rows03070.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03070').textContent = name_03070;
   
    let com_03070 = document.getElementById("f-path-03070");
    let list_03070 = document.getElementById("list_03070");


    function togg03070() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03070-01').classList.remove('visible')
        document.querySelector('#polar-chart_03070-01').classList.remove('visible')
        document.querySelector('#polar-chart_03070-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03070').classList.remove('visible')
        document.querySelector('#f-path-03070').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03070
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03070
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03070
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03070
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03070
    }
    com_03070.onclick = togg03070;
    list_03070.onclick = togg03070;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03071 = data[70];

    /*Récupere les données que je veut de la Commune */
    name_03071 = rows03071.Libellé_géographique;
    Pop_03071 = rows03071.Population_en_2017;
    Pop_017_03071 = rows03071.Pop_017_ans_2017;
    Pop_mediane_vote_03071 = rows03071.Popu_possible_voté;
    nbr_inscrit_03071 = rows03071.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03071').textContent = name_03071;
   
    let com_03071 = document.getElementById("f-path-03071");
    let list_03071 = document.getElementById("list_03071");


    function togg03071() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03071-01').classList.remove('visible')
        document.querySelector('#polar-chart_03071-01').classList.remove('visible')
        document.querySelector('#polar-chart_03071-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03071').classList.remove('visible')
        document.querySelector('#f-path-03071').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03071
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03071
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03071
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03071
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03071
    }
    com_03071.onclick = togg03071;
    list_03071.onclick = togg03071;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03072 = data[71];

    /*Récupere les données que je veut de la Commune */
    name_03072 = rows03072.Libellé_géographique;
    Pop_03072 = rows03072.Population_en_2017;
    Pop_017_03072 = rows03072.Pop_017_ans_2017;
    Pop_mediane_vote_03072 = rows03072.Popu_possible_voté;
    nbr_inscrit_03072 = rows03072.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03072').textContent = name_03072;
   
    let com_03072 = document.getElementById("f-path-03072");
    let list_03072 = document.getElementById("list_03072");


    function togg03072() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03072-01').classList.remove('visible')
        document.querySelector('#polar-chart_03072-01').classList.remove('visible')
        document.querySelector('#polar-chart_03072-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03072').classList.remove('visible')
        document.querySelector('#f-path-03072').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03072
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03072
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03072
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03072
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03072
    }
    com_03072.onclick = togg03072;
    list_03072.onclick = togg03072;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03073 = data[72];

    /*Récupere les données que je veut de la Commune */
    name_03073 = rows03073.Libellé_géographique;
    Pop_03073 = rows03073.Population_en_2017;
    Pop_017_03073 = rows03073.Pop_017_ans_2017;
    Pop_mediane_vote_03073 = rows03073.Popu_possible_voté;
    nbr_inscrit_03073 = rows03073.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03073').textContent = name_03073;
   
    let com_03073 = document.getElementById("f-path-03073");
    let list_03073 = document.getElementById("list_03073");


    function togg03073() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03073-01').classList.remove('visible')
        document.querySelector('#polar-chart_03073-01').classList.remove('visible')
        document.querySelector('#polar-chart_03073-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03073').classList.remove('visible')
        document.querySelector('#f-path-03073').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03073
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03073
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03073
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03073
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03073
    }
    com_03073.onclick = togg03073;
    list_03073.onclick = togg03073;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03074 = data[73];

    /*Récupere les données que je veut de la Commune */
    name_03074 = rows03074.Libellé_géographique;
    Pop_03074 = rows03074.Population_en_2017;
    Pop_017_03074 = rows03074.Pop_017_ans_2017;
    Pop_mediane_vote_03074 = rows03074.Popu_possible_voté;
    nbr_inscrit_03074 = rows03074.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03074').textContent = name_03074;
   
    let com_03074 = document.getElementById("f-path-03074");
    let list_03074 = document.getElementById("list_03074");


    function togg03074() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03074-01').classList.remove('visible')
        document.querySelector('#polar-chart_03074-01').classList.remove('visible')
        document.querySelector('#polar-chart_03074-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03074').classList.remove('visible')
        document.querySelector('#f-path-03074').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03074
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03074
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03074
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03074
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03074
    }
    com_03074.onclick = togg03074;
    list_03074.onclick = togg03074;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03075 = data[74];

    /*Récupere les données que je veut de la Commune */
    name_03075 = rows03075.Libellé_géographique;
    Pop_03075 = rows03075.Population_en_2017;
    Pop_017_03075 = rows03075.Pop_017_ans_2017;
    Pop_mediane_vote_03075 = rows03075.Popu_possible_voté;
    nbr_inscrit_03075 = rows03075.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03075').textContent = name_03075;
   
    let com_03075 = document.getElementById("f-path-03075");
    let list_03075 = document.getElementById("list_03075");


    function togg03075() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03075-01').classList.remove('visible')
        document.querySelector('#polar-chart_03075-01').classList.remove('visible')
        document.querySelector('#polar-chart_03075-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03075').classList.remove('visible')
        document.querySelector('#f-path-03075').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03075
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03075
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03075
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03075
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03075
    }
    com_03075.onclick = togg03075;
    list_03075.onclick = togg03075;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03076 = data[75];

    /*Récupere les données que je veut de la Commune */
    name_03076 = rows03076.Libellé_géographique;
    Pop_03076 = rows03076.Population_en_2017;
    Pop_017_03076 = rows03076.Pop_017_ans_2017;
    Pop_mediane_vote_03076 = rows03076.Popu_possible_voté;
    nbr_inscrit_03076 = rows03076.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03076').textContent = name_03076;
   
    let com_03076 = document.getElementById("f-path-03076");
    let list_03076 = document.getElementById("list_03076");


    function togg03076() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03076-01').classList.remove('visible')
        document.querySelector('#polar-chart_03076-01').classList.remove('visible')
        document.querySelector('#polar-chart_03076-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03076').classList.remove('visible')
        document.querySelector('#f-path-03076').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03076
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03076
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03076
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03076
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03076
    }
    com_03076.onclick = togg03076;
    list_03076.onclick = togg03076;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03077 = data[76];

    /*Récupere les données que je veut de la Commune */
    name_03077 = rows03077.Libellé_géographique;
    Pop_03077 = rows03077.Population_en_2017;
    Pop_017_03077 = rows03077.Pop_017_ans_2017;
    Pop_mediane_vote_03077 = rows03077.Popu_possible_voté;
    nbr_inscrit_03077 = rows03077.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03077').textContent = name_03077;
   
    let com_03077 = document.getElementById("f-path-03077");
    let list_03077 = document.getElementById("list_03077");


    function togg03077() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03077-01').classList.remove('visible')
        document.querySelector('#polar-chart_03077-01').classList.remove('visible')
        document.querySelector('#polar-chart_03077-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03077').classList.remove('visible')
        document.querySelector('#f-path-03077').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03077
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03077
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03077
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03077
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03077
    }
    com_03077.onclick = togg03077;
    list_03077.onclick = togg03077;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03078 = data[77];

    /*Récupere les données que je veut de la Commune */
    name_03078 = rows03078.Libellé_géographique;
    Pop_03078 = rows03078.Population_en_2017;
    Pop_017_03078 = rows03078.Pop_017_ans_2017;
    Pop_mediane_vote_03078 = rows03078.Popu_possible_voté;
    nbr_inscrit_03078 = rows03078.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03078').textContent = name_03078;
   
    let com_03078 = document.getElementById("f-path-03078");
    let list_03078 = document.getElementById("list_03078");


    function togg03078() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03078-01').classList.remove('visible')
        document.querySelector('#polar-chart_03078-01').classList.remove('visible')
        document.querySelector('#polar-chart_03078-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03078').classList.remove('visible')
        document.querySelector('#f-path-03078').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03078
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03078
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03078
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03078
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03078
    }
    com_03078.onclick = togg03078;
    list_03078.onclick = togg03078;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03079 = data[78];

    /*Récupere les données que je veut de la Commune */
    name_03079 = rows03079.Libellé_géographique;
    Pop_03079 = rows03079.Population_en_2017;
    Pop_017_03079 = rows03079.Pop_017_ans_2017;
    Pop_mediane_vote_03079 = rows03079.Popu_possible_voté;
    nbr_inscrit_03079 = rows03079.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03079').textContent = name_03079;
   
    let com_03079 = document.getElementById("f-path-03079");
    let list_03079 = document.getElementById("list_03079");


    function togg03079() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03079-01').classList.remove('visible')
        document.querySelector('#polar-chart_03079-01').classList.remove('visible')
        document.querySelector('#polar-chart_03079-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03079').classList.remove('visible')
        document.querySelector('#f-path-03079').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03079
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03079
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03079
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03079
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03079
    }
    com_03079.onclick = togg03079;
    list_03079.onclick = togg03079;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03080 = data[79];

    /*Récupere les données que je veut de la Commune */
    name_03080 = rows03080.Libellé_géographique;
    Pop_03080 = rows03080.Population_en_2017;
    Pop_017_03080 = rows03080.Pop_017_ans_2017;
    Pop_mediane_vote_03080 = rows03080.Popu_possible_voté;
    nbr_inscrit_03080 = rows03080.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03080').textContent = name_03080;
   
    let com_03080 = document.getElementById("f-path-03080");
    let list_03080 = document.getElementById("list_03080");


    function togg03080() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03080-01').classList.remove('visible')
        document.querySelector('#polar-chart_03080-01').classList.remove('visible')
        document.querySelector('#polar-chart_03080-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03080').classList.remove('visible')
        document.querySelector('#f-path-03080').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03080
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03080
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03080
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03080
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03080
    }
    com_03080.onclick = togg03080;
    list_03080.onclick = togg03080;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03081 = data[80];

    /*Récupere les données que je veut de la Commune */
    name_03081 = rows03081.Libellé_géographique;
    Pop_03081 = rows03081.Population_en_2017;
    Pop_017_03081 = rows03081.Pop_017_ans_2017;
    Pop_mediane_vote_03081 = rows03081.Popu_possible_voté;
    nbr_inscrit_03081 = rows03081.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03081').textContent = name_03081;
   
    let com_03081 = document.getElementById("f-path-03081");
    let list_03081 = document.getElementById("list_03081");


    function togg03081() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03081-01').classList.remove('visible')
        document.querySelector('#polar-chart_03081-01').classList.remove('visible')
        document.querySelector('#polar-chart_03081-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03081').classList.remove('visible')
        document.querySelector('#f-path-03081').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03081
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03081
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03081
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03081
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03081
    }
    com_03081.onclick = togg03081;
    list_03081.onclick = togg03081;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03082 = data[81];

    /*Récupere les données que je veut de la Commune */
    name_03082 = rows03082.Libellé_géographique;
    Pop_03082 = rows03082.Population_en_2017;
    Pop_017_03082 = rows03082.Pop_017_ans_2017;
    Pop_mediane_vote_03082 = rows03082.Popu_possible_voté;
    nbr_inscrit_03082 = rows03082.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03082').textContent = name_03082;
   
    let com_03082 = document.getElementById("f-path-03082");
    let list_03082 = document.getElementById("list_03082");


    function togg03082() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03082-01').classList.remove('visible')
        document.querySelector('#polar-chart_03082-01').classList.remove('visible')
        document.querySelector('#polar-chart_03082-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03082').classList.remove('visible')
        document.querySelector('#f-path-03082').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03082
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03082
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03082
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03082
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03082
    }
    com_03082.onclick = togg03082;
    list_03082.onclick = togg03082;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03083 = data[82];

    /*Récupere les données que je veut de la Commune */
    name_03083 = rows03083.Libellé_géographique;
    Pop_03083 = rows03083.Population_en_2017;
    Pop_017_03083 = rows03083.Pop_017_ans_2017;
    Pop_mediane_vote_03083 = rows03083.Popu_possible_voté;
    nbr_inscrit_03083 = rows03083.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03083').textContent = name_03083;
   
    let com_03083 = document.getElementById("f-path-03083");
    let list_03083 = document.getElementById("list_03083");


    function togg03083() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03083-01').classList.remove('visible')
        document.querySelector('#polar-chart_03083-01').classList.remove('visible')
        document.querySelector('#polar-chart_03083-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03083').classList.remove('visible')
        document.querySelector('#f-path-03083').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03083
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03083
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03083
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03083
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03083
    }
    com_03083.onclick = togg03083;
    list_03083.onclick = togg03083;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03084 = data[83];

    /*Récupere les données que je veut de la Commune */
    name_03084 = rows03084.Libellé_géographique;
    Pop_03084 = rows03084.Population_en_2017;
    Pop_017_03084 = rows03084.Pop_017_ans_2017;
    Pop_mediane_vote_03084 = rows03084.Popu_possible_voté;
    nbr_inscrit_03084 = rows03084.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03084').textContent = name_03084;
   
    let com_03084 = document.getElementById("f-path-03084");
    let list_03084 = document.getElementById("list_03084");


    function togg03084() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03084-01').classList.remove('visible')
        document.querySelector('#polar-chart_03084-01').classList.remove('visible')
        document.querySelector('#polar-chart_03084-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03084').classList.remove('visible')
        document.querySelector('#f-path-03084').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03084
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03084
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03084
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03084
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03084
    }
    com_03084.onclick = togg03084;
    list_03084.onclick = togg03084;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03085 = data[84];

    /*Récupere les données que je veut de la Commune */
    name_03085 = rows03085.Libellé_géographique;
    Pop_03085 = rows03085.Population_en_2017;
    Pop_017_03085 = rows03085.Pop_017_ans_2017;
    Pop_mediane_vote_03085 = rows03085.Popu_possible_voté;
    nbr_inscrit_03085 = rows03085.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03085').textContent = name_03085;
   
    let com_03085 = document.getElementById("f-path-03085");
    let list_03085 = document.getElementById("list_03085");


    function togg03085() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03085-01').classList.remove('visible')
        document.querySelector('#polar-chart_03085-01').classList.remove('visible')
        document.querySelector('#polar-chart_03085-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03085').classList.remove('visible')
        document.querySelector('#f-path-03085').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03085
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03085
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03085
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03085
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03085
    }
    com_03085.onclick = togg03085;
    list_03085.onclick = togg03085;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03086 = data[85];

    /*Récupere les données que je veut de la Commune */
    name_03086 = rows03086.Libellé_géographique;
    Pop_03086 = rows03086.Population_en_2017;
    Pop_017_03086 = rows03086.Pop_017_ans_2017;
    Pop_mediane_vote_03086 = rows03086.Popu_possible_voté;
    nbr_inscrit_03086 = rows03086.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03086').textContent = name_03086;
   
    let com_03086 = document.getElementById("f-path-03086");
    let list_03086 = document.getElementById("list_03086");


    function togg03086() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03086-01').classList.remove('visible')
        document.querySelector('#polar-chart_03086-01').classList.remove('visible')
        document.querySelector('#polar-chart_03086-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03086').classList.remove('visible')
        document.querySelector('#f-path-03086').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03086
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03086
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03086
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03086
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03086
    }
    com_03086.onclick = togg03086;
    list_03086.onclick = togg03086;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03087 = data[86];

    /*Récupere les données que je veut de la Commune */
    name_03087 = rows03087.Libellé_géographique;
    Pop_03087 = rows03087.Population_en_2017;
    Pop_017_03087 = rows03087.Pop_017_ans_2017;
    Pop_mediane_vote_03087 = rows03087.Popu_possible_voté;
    nbr_inscrit_03087 = rows03087.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03087').textContent = name_03087;
   
    let com_03087 = document.getElementById("f-path-03087");
    let list_03087 = document.getElementById("list_03087");


    function togg03087() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03087-01').classList.remove('visible')
        document.querySelector('#polar-chart_03087-01').classList.remove('visible')
        document.querySelector('#polar-chart_03087-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03087').classList.remove('visible')
        document.querySelector('#f-path-03087').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03087
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03087
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03087
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03087
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03087
    }
    com_03087.onclick = togg03087;
    list_03087.onclick = togg03087;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03088 = data[87];

    /*Récupere les données que je veut de la Commune */
    name_03088 = rows03088.Libellé_géographique;
    Pop_03088 = rows03088.Population_en_2017;
    Pop_017_03088 = rows03088.Pop_017_ans_2017;
    Pop_mediane_vote_03088 = rows03088.Popu_possible_voté;
    nbr_inscrit_03088 = rows03088.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03088').textContent = name_03088;
   
    let com_03088 = document.getElementById("f-path-03088");
    let list_03088 = document.getElementById("list_03088");


    function togg03088() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03088-01').classList.remove('visible')
        document.querySelector('#polar-chart_03088-01').classList.remove('visible')
        document.querySelector('#polar-chart_03088-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03088').classList.remove('visible')
        document.querySelector('#f-path-03088').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03088
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03088
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03088
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03088
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03088
    }
    com_03088.onclick = togg03088;
    list_03088.onclick = togg03088;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03089 = data[88];

    /*Récupere les données que je veut de la Commune */
    name_03089 = rows03089.Libellé_géographique;
    Pop_03089 = rows03089.Population_en_2017;
    Pop_017_03089 = rows03089.Pop_017_ans_2017;
    Pop_mediane_vote_03089 = rows03089.Popu_possible_voté;
    nbr_inscrit_03089 = rows03089.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03089').textContent = name_03089;
   
    let com_03089 = document.getElementById("f-path-03089");
    let list_03089 = document.getElementById("list_03089");


    function togg03089() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03089-01').classList.remove('visible')
        document.querySelector('#polar-chart_03089-01').classList.remove('visible')
        document.querySelector('#polar-chart_03089-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03089').classList.remove('visible')
        document.querySelector('#f-path-03089').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03089
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03089
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03089
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03089
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03089
    }
    com_03089.onclick = togg03089;
    list_03089.onclick = togg03089;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03090 = data[89];

    /*Récupere les données que je veut de la Commune */
    name_03090 = rows03090.Libellé_géographique;
    Pop_03090 = rows03090.Population_en_2017;
    Pop_017_03090 = rows03090.Pop_017_ans_2017;
    Pop_mediane_vote_03090 = rows03090.Popu_possible_voté;
    nbr_inscrit_03090 = rows03090.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03090').textContent = name_03090;
   
    let com_03090 = document.getElementById("f-path-03090");
    let list_03090 = document.getElementById("list_03090");


    function togg03090() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03090-01').classList.remove('visible')
        document.querySelector('#polar-chart_03090-01').classList.remove('visible')
        document.querySelector('#polar-chart_03090-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03090').classList.remove('visible')
        document.querySelector('#f-path-03090').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03090
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03090
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03090
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03090
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03090
    }
    com_03090.onclick = togg03090;
    list_03090.onclick = togg03090;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03091 = data[90];

    /*Récupere les données que je veut de la Commune */
    name_03091 = rows03091.Libellé_géographique;
    Pop_03091 = rows03091.Population_en_2017;
    Pop_017_03091 = rows03091.Pop_017_ans_2017;
    Pop_mediane_vote_03091 = rows03091.Popu_possible_voté;
    nbr_inscrit_03091 = rows03091.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03091').textContent = name_03091;
   
    let com_03091 = document.getElementById("f-path-03091");
    let list_03091 = document.getElementById("list_03091");


    function togg03091() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03091-01').classList.remove('visible')
        document.querySelector('#polar-chart_03091-01').classList.remove('visible')
        document.querySelector('#polar-chart_03091-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03091').classList.remove('visible')
        document.querySelector('#f-path-03091').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03091
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03091
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03091
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03091
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03091
    }
    com_03091.onclick = togg03091;
    list_03091.onclick = togg03091;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03092 = data[91];

    /*Récupere les données que je veut de la Commune */
    name_03092 = rows03092.Libellé_géographique;
    Pop_03092 = rows03092.Population_en_2017;
    Pop_017_03092 = rows03092.Pop_017_ans_2017;
    Pop_mediane_vote_03092 = rows03092.Popu_possible_voté;
    nbr_inscrit_03092 = rows03092.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03092').textContent = name_03092;
   
    let com_03092 = document.getElementById("f-path-03092");
    let list_03092 = document.getElementById("list_03092");


    function togg03092() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03092-01').classList.remove('visible')
        document.querySelector('#polar-chart_03092-01').classList.remove('visible')
        document.querySelector('#polar-chart_03092-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03092').classList.remove('visible')
        document.querySelector('#f-path-03092').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03092
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03092
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03092
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03092
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03092
    }
    com_03092.onclick = togg03092;
    list_03092.onclick = togg03092;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03093 = data[92];

    /*Récupere les données que je veut de la Commune */
    name_03093 = rows03093.Libellé_géographique;
    Pop_03093 = rows03093.Population_en_2017;
    Pop_017_03093 = rows03093.Pop_017_ans_2017;
    Pop_mediane_vote_03093 = rows03093.Popu_possible_voté;
    nbr_inscrit_03093 = rows03093.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03093').textContent = name_03093;
   
    let com_03093 = document.getElementById("f-path-03093");
    let list_03093 = document.getElementById("list_03093");


    function togg03093() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03093-01').classList.remove('visible')
        document.querySelector('#polar-chart_03093-01').classList.remove('visible')
        document.querySelector('#polar-chart_03093-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03093').classList.remove('visible')
        document.querySelector('#f-path-03093').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03093
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03093
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03093
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03093
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03093
    }
    com_03093.onclick = togg03093;
    list_03093.onclick = togg03093;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03094 = data[93];

    /*Récupere les données que je veut de la Commune */
    name_03094 = rows03094.Libellé_géographique;
    Pop_03094 = rows03094.Population_en_2017;
    Pop_017_03094 = rows03094.Pop_017_ans_2017;
    Pop_mediane_vote_03094 = rows03094.Popu_possible_voté;
    nbr_inscrit_03094 = rows03094.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03094').textContent = name_03094;
   
    let com_03094 = document.getElementById("f-path-03094");
    let list_03094 = document.getElementById("list_03094");


    function togg03094() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03094-01').classList.remove('visible')
        document.querySelector('#polar-chart_03094-01').classList.remove('visible')
        document.querySelector('#polar-chart_03094-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03094').classList.remove('visible')
        document.querySelector('#f-path-03094').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03094
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03094
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03094
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03094
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03094
    }
    com_03094.onclick = togg03094;
    list_03094.onclick = togg03094;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03095 = data[94];

    /*Récupere les données que je veut de la Commune */
    name_03095 = rows03095.Libellé_géographique;
    Pop_03095 = rows03095.Population_en_2017;
    Pop_017_03095 = rows03095.Pop_017_ans_2017;
    Pop_mediane_vote_03095 = rows03095.Popu_possible_voté;
    nbr_inscrit_03095 = rows03095.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03095').textContent = name_03095;
   
    let com_03095 = document.getElementById("f-path-03095");
    let list_03095 = document.getElementById("list_03095");


    function togg03095() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03095-01').classList.remove('visible')
        document.querySelector('#polar-chart_03095-01').classList.remove('visible')
        document.querySelector('#polar-chart_03095-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03095').classList.remove('visible')
        document.querySelector('#f-path-03095').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03095
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03095
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03095
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03095
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03095
    }
    com_03095.onclick = togg03095;
    list_03095.onclick = togg03095;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03096 = data[95];

    /*Récupere les données que je veut de la Commune */
    name_03096 = rows03096.Libellé_géographique;
    Pop_03096 = rows03096.Population_en_2017;
    Pop_017_03096 = rows03096.Pop_017_ans_2017;
    Pop_mediane_vote_03096 = rows03096.Popu_possible_voté;
    nbr_inscrit_03096 = rows03096.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03096').textContent = name_03096;
   
    let com_03096 = document.getElementById("f-path-03096");
    let list_03096 = document.getElementById("list_03096");


    function togg03096() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03096-01').classList.remove('visible')
        document.querySelector('#polar-chart_03096-01').classList.remove('visible')
        document.querySelector('#polar-chart_03096-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03096').classList.remove('visible')
        document.querySelector('#f-path-03096').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03096
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03096
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03096
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03096
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03096
    }
    com_03096.onclick = togg03096;
    list_03096.onclick = togg03096;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03097 = data[96];

    /*Récupere les données que je veut de la Commune */
    name_03097 = rows03097.Libellé_géographique;
    Pop_03097 = rows03097.Population_en_2017;
    Pop_017_03097 = rows03097.Pop_017_ans_2017;
    Pop_mediane_vote_03097 = rows03097.Popu_possible_voté;
    nbr_inscrit_03097 = rows03097.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03097').textContent = name_03097;
   
    let com_03097 = document.getElementById("f-path-03097");
    let list_03097 = document.getElementById("list_03097");


    function togg03097() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03097-01').classList.remove('visible')
        document.querySelector('#polar-chart_03097-01').classList.remove('visible')
        document.querySelector('#polar-chart_03097-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03097').classList.remove('visible')
        document.querySelector('#f-path-03097').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03097
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03097
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03097
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03097
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03097
    }
    com_03097.onclick = togg03097;
    list_03097.onclick = togg03097;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03098 = data[97];

    /*Récupere les données que je veut de la Commune */
    name_03098 = rows03098.Libellé_géographique;
    Pop_03098 = rows03098.Population_en_2017;
    Pop_017_03098 = rows03098.Pop_017_ans_2017;
    Pop_mediane_vote_03098 = rows03098.Popu_possible_voté;
    nbr_inscrit_03098 = rows03098.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03098').textContent = name_03098;
   
    let com_03098 = document.getElementById("f-path-03098");
    let list_03098 = document.getElementById("list_03098");


    function togg03098() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03098-01').classList.remove('visible')
        document.querySelector('#polar-chart_03098-01').classList.remove('visible')
        document.querySelector('#polar-chart_03098-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03098').classList.remove('visible')
        document.querySelector('#f-path-03098').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03098
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03098
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03098
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03098
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03098
    }
    com_03098.onclick = togg03098;
    list_03098.onclick = togg03098;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03099 = data[98];

    /*Récupere les données que je veut de la Commune */
    name_03099 = rows03099.Libellé_géographique;
    Pop_03099 = rows03099.Population_en_2017;
    Pop_017_03099 = rows03099.Pop_017_ans_2017;
    Pop_mediane_vote_03099 = rows03099.Popu_possible_voté;
    nbr_inscrit_03099 = rows03099.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03099').textContent = name_03099;
   
    let com_03099 = document.getElementById("f-path-03099");
    let list_03099 = document.getElementById("list_03099");


    function togg03099() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03099-01').classList.remove('visible')
        document.querySelector('#polar-chart_03099-01').classList.remove('visible')
        document.querySelector('#polar-chart_03099-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03099').classList.remove('visible')
        document.querySelector('#f-path-03099').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03099
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03099
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03099
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03099
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03099
    }
    com_03099.onclick = togg03099;
    list_03099.onclick = togg03099;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03100 = data[99];

    /*Récupere les données que je veut de la Commune */
    name_03100 = rows03100.Libellé_géographique;
    Pop_03100 = rows03100.Population_en_2017;
    Pop_017_03100 = rows03100.Pop_017_ans_2017;
    Pop_mediane_vote_03100 = rows03100.Popu_possible_voté;
    nbr_inscrit_03100 = rows03100.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03100').textContent = name_03100;
   
    let com_03100 = document.getElementById("f-path-03100");
    let list_03100 = document.getElementById("list_03100");


    function togg03100() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03100-01').classList.remove('visible')
        document.querySelector('#polar-chart_03100-01').classList.remove('visible')
        document.querySelector('#polar-chart_03100-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03100').classList.remove('visible')
        document.querySelector('#f-path-03100').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03100
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03100
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03100
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03100
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03100
    }
    com_03100.onclick = togg03100;
    list_03100.onclick = togg03100;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03101 = data[100];
    /*Récupere les données que je veut de la Commune */
    name_03101 = rows03101.Libellé_géographique;
    Pop_03101 = rows03101.Population_en_2017;
    Pop_017_03101 = rows03101.Pop_017_ans_2017;
    Pop_mediane_vote_03101 = rows03101.Popu_possible_voté;
    nbr_inscrit_03101 = rows03101.Inscrits;
    /*Pose dans le Menu*/
    document.querySelector('#list_03101').textContent = name_03101;
/*--------------------------------------------------------------------------*/
    var body = document.querySelector('#body')
    var path = document.querySelector('#map01')
    /******************************************************************** */
    let com_03101 = document.getElementById("f-path-03101");
    let list_03101 = document.getElementById("list_03101");
    function togg03101() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03101-01').classList.remove('visible')
        document.querySelector('#polar-chart_03101-01').classList.remove('visible')
        document.querySelector('#polar-chart_03101-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03101').classList.remove('visible')
        document.querySelector('#f-path-03101').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03101
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03101
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03101
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03101
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03101
    }
    com_03101.onclick = togg03101;
    list_03101.onclick = togg03101;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03102 = data[101];
    /*Récupere les données que je veut de la Commune */
    name_03102 = rows03102.Libellé_géographique;
    Pop_03102 = rows03102.Population_en_2017;
    Pop_017_03102 = rows03102.Pop_017_ans_2017;
    Pop_mediane_vote_03102 = rows03102.Popu_possible_voté;
    nbr_inscrit_03102 = rows03102.Inscrits;  
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03102').textContent = name_03102;
/*--------------------------------------------------------------------------*/
    let com_03102 = document.getElementById("f-path-03102");
    let list_03102 = document.getElementById("list_03102");
    /******************************************************************** */
    function togg03102() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03102-01').classList.remove('visible')
        document.querySelector('#polar-chart_03102-01').classList.remove('visible')
        document.querySelector('#polar-chart_03102-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03102').classList.remove('visible')
        document.querySelector('#f-path-03102').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03102;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03102
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03102
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03102
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03102
    }
    com_03102.onclick = togg03102;
    list_03102.onclick = togg03102;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03103 = data[102];
    /*Récupere les données que je veut de la Commune */
    name_03103 = rows03103.Libellé_géographique;
    Pop_03103 = rows03103.Population_en_2017;
    Pop_017_03103 = rows03103.Pop_017_ans_2017;
    Pop_mediane_vote_03103 = rows03103.Popu_possible_voté;
    nbr_inscrit_03103 = rows03103.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03103').textContent = name_03103;
    let com_03103 = document.getElementById("f-path-03103");
    let list_03103 = document.getElementById("list_03103");
    function togg03103() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03103-01').classList.remove('visible')
        document.querySelector('#polar-chart_03103-01').classList.remove('visible')
        document.querySelector('#polar-chart_03103-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03103').classList.remove('visible')
        document.querySelector('#f-path-03103').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03103;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03103
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03103
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03103
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03103
    }
    com_03103.onclick = togg03103;
    list_03103.onclick = togg03103;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03104 = data[103];
    /*Récupere les données que je veut de la Commune */
    name_03104 = rows03104.Libellé_géographique;
    Pop_03104 = rows03104.Population_en_2017;
    Pop_017_03104 = rows03104.Pop_017_ans_2017;
    Pop_mediane_vote_03104 = rows03104.Popu_possible_voté;
    nbr_inscrit_03104 = rows03104.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03104').textContent = name_03104;
    let com_03104 = document.getElementById("f-path-03104");
    let list_03104 = document.getElementById("list_03104");
    function togg03104() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03104-01').classList.remove('visible')
        document.querySelector('#polar-chart_03104-01').classList.remove('visible')
        document.querySelector('#polar-chart_03104-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03104').classList.remove('visible')
        document.querySelector('#f-path-03104').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03104;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03104
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03104
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03104
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03104
    }
    com_03104.onclick = togg03104;
    list_03104.onclick = togg03104;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03105 = data[104];
    /*Récupere les données que je veut de la Commune */
    name_03105 = rows03105.Libellé_géographique;
    Pop_03105 = rows03105.Population_en_2017;
    Pop_017_03105 = rows03105.Pop_017_ans_2017;
    Pop_mediane_vote_03105 = rows03105.Popu_possible_voté;
    nbr_inscrit_03105 = rows03105.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03105').textContent = name_03105;
    let com_03105 = document.getElementById("f-path-03105");
    let list_03105 = document.getElementById("list_03105");
    function togg03105() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03105-01').classList.remove('visible')
        document.querySelector('#polar-chart_03105-01').classList.remove('visible')
        document.querySelector('#polar-chart_03105-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03105').classList.remove('visible')
        document.querySelector('#f-path-03105').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03105
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03105
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03105
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03105
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03105
    }
    com_03105.onclick = togg03105;
    list_03105.onclick = togg03105;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03106 = data[105];
    /*Récupere les données que je veut de la Commune */
    name_03106 = rows03106.Libellé_géographique;
    Pop_03106 = rows03106.Population_en_2017;
    Pop_017_03106 = rows03106.Pop_017_ans_2017;
    Pop_mediane_vote_03106 = rows03106.Popu_possible_voté;
    nbr_inscrit_03106 = rows03106.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03106').textContent = name_03106;
    let com_03106 = document.getElementById("f-path-03106");
    let list_03106 = document.getElementById("list_03106");
    function togg03106() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03106-01').classList.remove('visible')
        document.querySelector('#polar-chart_03106-01').classList.remove('visible')
        document.querySelector('#polar-chart_03106-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03106').classList.remove('visible')
        document.querySelector('#f-path-03106').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03106
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03106
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03106
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03106
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03106
    }
    com_03106.onclick = togg03106;
    list_03106.onclick = togg03106;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03107 = data[106];
    /*Récupere les données que je veut de la Commune */
    name_03107 = rows03107.Libellé_géographique;
    Pop_03107 = rows03107.Population_en_2017;
    Pop_017_03107 = rows03107.Pop_017_ans_2017;
    Pop_mediane_vote_03107 = rows03107.Popu_possible_voté;
    nbr_inscrit_03107 = rows03107.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03107').textContent = name_03107; 
    let com_03107 = document.getElementById("f-path-03107");
    let list_03107 = document.getElementById("list_03107");
    function togg03107() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03107-01').classList.remove('visible')
        document.querySelector('#polar-chart_03107-01').classList.remove('visible')
        document.querySelector('#polar-chart_03107-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03107').classList.remove('visible')
        document.querySelector('#f-path-03107').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03107
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03107
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03107
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03107
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03107
    }
    com_03107.onclick = togg03107;
    list_03107.onclick = togg03107;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03108 = data[107];
    
    /*Récupere les données que je veut de la Commune */
    name_03108 = rows03108.Libellé_géographique;
    Pop_03108 = rows03108.Population_en_2017;
    Pop_017_03108 = rows03108.Pop_017_ans_2017;
    Pop_mediane_vote_03108 = rows03108.Popu_possible_voté;
    nbr_inscrit_03108 = rows03108.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03108').textContent = name_03108;
   
    let com_03108 = document.getElementById("f-path-03108");
    let list_03108 = document.getElementById("list_03108");


    function togg03108() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03108-01').classList.remove('visible')
        document.querySelector('#polar-chart_03108-01').classList.remove('visible')
        document.querySelector('#polar-chart_03108-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03108').classList.remove('visible')
        document.querySelector('#f-path-03108').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03108
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03108
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03108
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03108
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03108
    }
    com_03108.onclick = togg03108;
    list_03108.onclick = togg03108;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03109 = data[108];
    
    /*Récupere les données que je veut de la Commune */
    name_03109 = rows03109.Libellé_géographique;
    Pop_03109 = rows03109.Population_en_2017;
    Pop_017_03109 = rows03109.Pop_017_ans_2017;
    Pop_mediane_vote_03109 = rows03109.Popu_possible_voté;
    nbr_inscrit_03109 = rows03109.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03109').textContent = name_03109;

    let com_03109 = document.getElementById("f-path-03109");
    let list_03109 = document.getElementById("list_03109");


    function togg03109() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03109-01').classList.remove('visible')
        document.querySelector('#polar-chart_03109-01').classList.remove('visible')
        document.querySelector('#polar-chart_03109-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03109').classList.remove('visible')
        document.querySelector('#f-path-03109').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03109
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03109
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03109
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03109
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03109
    }
    com_03109.onclick = togg03109;
    list_03109.onclick = togg03109;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03110 = data[109];
 
    /*Récupere les données que je veut de la Commune */
    name_03110 = rows03110.Libellé_géographique;
    Pop_03110 = rows03110.Population_en_2017;
    Pop_017_03110 = rows03110.Pop_017_ans_2017;
    Pop_mediane_vote_03110 = rows03110.Popu_possible_voté;
    nbr_inscrit_03110 = rows03110.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03110').textContent = name_03110;

    let com_03110 = document.getElementById("f-path-03110");
    let list_03110 = document.getElementById("list_03110");


    function togg03110() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03110-01').classList.remove('visible')
        document.querySelector('#polar-chart_03110-01').classList.remove('visible')
        document.querySelector('#polar-chart_03110-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03110').classList.remove('visible')
        document.querySelector('#f-path-03110').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03110
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03110
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03110
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03110
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03110
    }
    com_03110.onclick = togg03110;
    list_03110.onclick = togg03110;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03111 = data[110];

    /*Récupere les données que je veut de la Commune */
    name_03111 = rows03111.Libellé_géographique;
    Pop_03111 = rows03111.Population_en_2017;
    Pop_017_03111 = rows03111.Pop_017_ans_2017;
    Pop_mediane_vote_03111 = rows03111.Popu_possible_voté;
    nbr_inscrit_03111 = rows03111.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03111').textContent = name_03111;
   
    let com_03111 = document.getElementById("f-path-03111");
    let list_03111 = document.getElementById("list_03111");


    function togg03111() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03111-01').classList.remove('visible')
        document.querySelector('#polar-chart_03111-01').classList.remove('visible')
        document.querySelector('#polar-chart_03111-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03111').classList.remove('visible')
        document.querySelector('#f-path-03111').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03111
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03111
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03111
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03111
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03111
    }
    com_03111.onclick = togg03111;
    list_03111.onclick = togg03111;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03112 = data[111];

    /*Récupere les données que je veut de la Commune */
    name_03112 = rows03112.Libellé_géographique;
    Pop_03112 = rows03112.Population_en_2017;
    Pop_017_03112 = rows03112.Pop_017_ans_2017;
    Pop_mediane_vote_03112 = rows03112.Popu_possible_voté;
    nbr_inscrit_03112 = rows03112.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03112').textContent = name_03112;
   
    let com_03112 = document.getElementById("f-path-03112");
    let list_03112 = document.getElementById("list_03112");


    function togg03112() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03112-01').classList.remove('visible')
        document.querySelector('#polar-chart_03112-01').classList.remove('visible')
        document.querySelector('#polar-chart_03112-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03112').classList.remove('visible')
        document.querySelector('#f-path-03112').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03112
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03112
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03112
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03112
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03112
    }
    com_03112.onclick = togg03112;
    list_03112.onclick = togg03112;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03113 = data[112];

    /*Récupere les données que je veut de la Commune */
    name_03113 = rows03113.Libellé_géographique;
    Pop_03113 = rows03113.Population_en_2017;
    Pop_017_03113 = rows03113.Pop_017_ans_2017;
    Pop_mediane_vote_03113 = rows03113.Popu_possible_voté;
    nbr_inscrit_03113 = rows03113.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03113').textContent = name_03113;
   
    let com_03113 = document.getElementById("f-path-03113");
    let list_03113 = document.getElementById("list_03113");


    function togg03113() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03113-01').classList.remove('visible')
        document.querySelector('#polar-chart_03113-01').classList.remove('visible')
        document.querySelector('#polar-chart_03113-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03113').classList.remove('visible')
        document.querySelector('#f-path-03113').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03113
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03113
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03113
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03113
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03113
    }
    com_03113.onclick = togg03113;
    list_03113.onclick = togg03113;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03114 = data[113];

    /*Récupere les données que je veut de la Commune */
    name_03114 = rows03114.Libellé_géographique;
    Pop_03114 = rows03114.Population_en_2017;
    Pop_017_03114 = rows03114.Pop_017_ans_2017;
    Pop_mediane_vote_03114 = rows03114.Popu_possible_voté;
    nbr_inscrit_03114 = rows03114.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03114').textContent = name_03114;
   
    let com_03114 = document.getElementById("f-path-03114");
    let list_03114 = document.getElementById("list_03114");


    function togg03114() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03114-01').classList.remove('visible')
        document.querySelector('#polar-chart_03114-01').classList.remove('visible')
        document.querySelector('#polar-chart_03114-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03114').classList.remove('visible')
        document.querySelector('#f-path-03114').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03114
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03114
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03114
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03114
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03114
    }
    com_03114.onclick = togg03114;
    list_03114.onclick = togg03114;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03115 = data[114];

    /*Récupere les données que je veut de la Commune */
    name_03115 = rows03115.Libellé_géographique;
    Pop_03115 = rows03115.Population_en_2017;
    Pop_017_03115 = rows03115.Pop_017_ans_2017;
    Pop_mediane_vote_03115 = rows03115.Popu_possible_voté;
    nbr_inscrit_03115 = rows03115.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03115').textContent = name_03115;
   
    let com_03115 = document.getElementById("f-path-03115");
    let list_03115 = document.getElementById("list_03115");


    function togg03115() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03115-01').classList.remove('visible')
        document.querySelector('#polar-chart_03115-01').classList.remove('visible')
        document.querySelector('#polar-chart_03115-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03115').classList.remove('visible')
        document.querySelector('#f-path-03115').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03115
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03115
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03115
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03115
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03115
    }
    com_03115.onclick = togg03115;
    list_03115.onclick = togg03115;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03116 = data[115];

    /*Récupere les données que je veut de la Commune */
    name_03116 = rows03116.Libellé_géographique;
    Pop_03116 = rows03116.Population_en_2017;
    Pop_017_03116 = rows03116.Pop_017_ans_2017;
    Pop_mediane_vote_03116 = rows03116.Popu_possible_voté;
    nbr_inscrit_03116 = rows03116.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03116').textContent = name_03116;
   
    let com_03116 = document.getElementById("f-path-03116");
    let list_03116 = document.getElementById("list_03116");


    function togg03116() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03116-01').classList.remove('visible')
        document.querySelector('#polar-chart_03116-01').classList.remove('visible')
        document.querySelector('#polar-chart_03116-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03116').classList.remove('visible')
        document.querySelector('#f-path-03116').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03116
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03116
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03116
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03116
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03116
    }
    com_03116.onclick = togg03116;
    list_03116.onclick = togg03116;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03117 = data[116];

    /*Récupere les données que je veut de la Commune */
    name_03117 = rows03117.Libellé_géographique;
    Pop_03117 = rows03117.Population_en_2017;
    Pop_017_03117 = rows03117.Pop_017_ans_2017;
    Pop_mediane_vote_03117 = rows03117.Popu_possible_voté;
    nbr_inscrit_03117 = rows03117.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03117').textContent = name_03117;
   
    let com_03117 = document.getElementById("f-path-03117");
    let list_03117 = document.getElementById("list_03117");


    function togg03117() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03117-01').classList.remove('visible')
        document.querySelector('#polar-chart_03117-01').classList.remove('visible')
        document.querySelector('#polar-chart_03117-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03117').classList.remove('visible')
        document.querySelector('#f-path-03117').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03117
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03117
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03117
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03117
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03117
    }
    com_03117.onclick = togg03117;
    list_03117.onclick = togg03117;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03118 = data[117];

    /*Récupere les données que je veut de la Commune */
    name_03118 = rows03118.Libellé_géographique;
    Pop_03118 = rows03118.Population_en_2017;
    Pop_017_03118 = rows03118.Pop_017_ans_2017;
    Pop_mediane_vote_03118 = rows03117.Popu_possible_voté;
    nbr_inscrit_03118 = rows03118.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03118').textContent = name_03118;
   
    let com_03118 = document.getElementById("f-path-03118");
    let list_03118 = document.getElementById("list_03118");


    function togg03118() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03118-01').classList.remove('visible')
        document.querySelector('#polar-chart_03118-01').classList.remove('visible')
        document.querySelector('#polar-chart_03118-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03118').classList.remove('visible')
        document.querySelector('#f-path-03118').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03118
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03118
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03118
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03118
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03118
    }
    com_03118.onclick = togg03118;
    list_03118.onclick = togg03118;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03119 = data[118];

    /*Récupere les données que je veut de la Commune */
    name_03119 = rows03119.Libellé_géographique;
    Pop_03119 = rows03119.Population_en_2017;
    Pop_017_03119 = rows03119.Pop_017_ans_2017;
    Pop_mediane_vote_03119 = rows03119.Popu_possible_voté;
    nbr_inscrit_03119 = rows03119.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03119').textContent = name_03119;
   
    let com_03119 = document.getElementById("f-path-03119");
    let list_03119 = document.getElementById("list_03119");


    function togg03119() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03119-01').classList.remove('visible')
        document.querySelector('#polar-chart_03119-01').classList.remove('visible')
        document.querySelector('#polar-chart_03119-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03119').classList.remove('visible')
        document.querySelector('#f-path-03119').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03119
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03119
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03119
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03119
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03119
    }
    com_03119.onclick = togg03119;
    list_03119.onclick = togg03119;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03120 = data[119];

    /*Récupere les données que je veut de la Commune */
    name_03120 = rows03120.Libellé_géographique;
    Pop_03120 = rows03120.Population_en_2017;
    Pop_017_03120 = rows03120.Pop_017_ans_2017;
    Pop_mediane_vote_03120 = rows03120.Popu_possible_voté;
    nbr_inscrit_03120 = rows03120.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03120').textContent = name_03120;
   
    let com_03120 = document.getElementById("f-path-03120");
    let list_03120 = document.getElementById("list_03120");


    function togg03120() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03120-01').classList.remove('visible')
        document.querySelector('#polar-chart_03120-01').classList.remove('visible')
        document.querySelector('#polar-chart_03120-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03120').classList.remove('visible')
        document.querySelector('#f-path-03120').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03120
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03120
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03120
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03120
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03120
    }
    com_03120.onclick = togg03120;
    list_03120.onclick = togg03120;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03121 = data[120];

    /*Récupere les données que je veut de la Commune */
    name_03121 = rows03121.Libellé_géographique;
    Pop_03121 = rows03121.Population_en_2017;
    Pop_017_03121 = rows03121.Pop_017_ans_2017;
    Pop_mediane_vote_03121 = rows03121.Popu_possible_voté;
    nbr_inscrit_03121 = rows03121.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03121').textContent = name_03121;
   
    let com_03121 = document.getElementById("f-path-03121");
    let list_03121 = document.getElementById("list_03121");


    function togg03121() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03121-01').classList.remove('visible')
        document.querySelector('#polar-chart_03121-01').classList.remove('visible')
        document.querySelector('#polar-chart_03121-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03121').classList.remove('visible')
        document.querySelector('#f-path-03121').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03121
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03121
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03121
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03121
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03121
    }
    com_03121.onclick = togg03121;
    list_03121.onclick = togg03121;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03122 = data[121];

    /*Récupere les données que je veut de la Commune */
    name_03122 = rows03122.Libellé_géographique;
    Pop_03122 = rows03122.Population_en_2017;
    Pop_017_03122 = rows03122.Pop_017_ans_2017;
    Pop_mediane_vote_03122 = rows03122.Popu_possible_voté;
    nbr_inscrit_03122 = rows03122.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03122').textContent = name_03122;
   
    let com_03122 = document.getElementById("f-path-03122");
    let list_03122 = document.getElementById("list_03122");


    function togg03122() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03122-01').classList.remove('visible')
        document.querySelector('#polar-chart_03122-01').classList.remove('visible')
        document.querySelector('#polar-chart_03122-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03122').classList.remove('visible')
        document.querySelector('#f-path-03122').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03122
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03122
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03122
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03122
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03122
    }
    com_03122.onclick = togg03122;
    list_03122.onclick = togg03122;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03123 = data[122];

    /*Récupere les données que je veut de la Commune */
    name_03123 = rows03123.Libellé_géographique;
    Pop_03123 = rows03123.Population_en_2017;
    Pop_017_03123 = rows03123.Pop_017_ans_2017;
    Pop_mediane_vote_03123 = rows03123.Popu_possible_voté;
    nbr_inscrit_03123 = rows03123.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03123').textContent = name_03123;
   
    let com_03123 = document.getElementById("f-path-03123");
    let list_03123 = document.getElementById("list_03123");


    function togg03123() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03123-01').classList.remove('visible')
        document.querySelector('#polar-chart_03123-01').classList.remove('visible')
        document.querySelector('#polar-chart_03123-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03123').classList.remove('visible')
        document.querySelector('#f-path-03123').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03123
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03123
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03123
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03123
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03123
    }
    com_03123.onclick = togg03123;
    list_03123.onclick = togg03123;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03124 = data[123];

    /*Récupere les données que je veut de la Commune */
    name_03124 = rows03124.Libellé_géographique;
    Pop_03124 = rows03124.Population_en_2017;
    Pop_017_03124 = rows03124.Pop_017_ans_2017;
    Pop_mediane_vote_03124 = rows03124.Popu_possible_voté;
    nbr_inscrit_03124 = rows03124.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03124').textContent = name_03124;
   
    let com_03124 = document.getElementById("f-path-03124");
    let list_03124 = document.getElementById("list_03124");


    function togg03124() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03124-01').classList.remove('visible')
        document.querySelector('#polar-chart_03124-01').classList.remove('visible')
        document.querySelector('#polar-chart_03124-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03124').classList.remove('visible')
        document.querySelector('#f-path-03124').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03124
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03124
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03124
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03124
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03124
    }
    com_03124.onclick = togg03124;
    list_03124.onclick = togg03124;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03125 = data[124];

    /*Récupere les données que je veut de la Commune */
    name_03125 = rows03125.Libellé_géographique;
    Pop_03125 = rows03125.Population_en_2017;
    Pop_017_03125 = rows03125.Pop_017_ans_2017;
    Pop_mediane_vote_03125 = rows03125.Popu_possible_voté;
    nbr_inscrit_03125 = rows03125.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03125').textContent = name_03125;
   
    let com_03125 = document.getElementById("f-path-03125");
    let list_03125 = document.getElementById("list_03125");


    function togg03125() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03125-01').classList.remove('visible')
        document.querySelector('#polar-chart_03125-01').classList.remove('visible')
        document.querySelector('#polar-chart_03125-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03125').classList.remove('visible')
        document.querySelector('#f-path-03125').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03125
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03125
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03125
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03125
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03125
    }
    com_03125.onclick = togg03125;
    list_03125.onclick = togg03125;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03126 = data[125];

    /*Récupere les données que je veut de la Commune */
    name_03126 = rows03126.Libellé_géographique;
    Pop_03126 = rows03126.Population_en_2017;
    Pop_017_03126 = rows03126.Pop_017_ans_2017;
    Pop_mediane_vote_03126 = rows03126.Popu_possible_voté;
    nbr_inscrit_03126 = rows03126.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03126').textContent = name_03126;
   
    let com_03126 = document.getElementById("f-path-03126");
    let list_03126 = document.getElementById("list_03126");


    function togg03126() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03126-01').classList.remove('visible')
        document.querySelector('#polar-chart_03126-01').classList.remove('visible')
        document.querySelector('#polar-chart_03126-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03126').classList.remove('visible')
        document.querySelector('#f-path-03126').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03126
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03126
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03126
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03126
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03126
    }
    com_03126.onclick = togg03126;
    list_03126.onclick = togg03126;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03127 = data[126];

    /*Récupere les données que je veut de la Commune */
    name_03127 = rows03127.Libellé_géographique;
    Pop_03127 = rows03127.Population_en_2017;
    Pop_017_03127 = rows03127.Pop_017_ans_2017;
    Pop_mediane_vote_03127 = rows03127.Popu_possible_voté;
    nbr_inscrit_03127 = rows03127.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03127').textContent = name_03127;
   
    let com_03127 = document.getElementById("f-path-03127");
    let list_03127 = document.getElementById("list_03127");


    function togg03127() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03127-01').classList.remove('visible')
        document.querySelector('#polar-chart_03127-01').classList.remove('visible')
        document.querySelector('#polar-chart_03127-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03127').classList.remove('visible')
        document.querySelector('#f-path-03127').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03127
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03127
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03127
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03127
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03127
    }
    com_03127.onclick = togg03127;
    list_03127.onclick = togg03127;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03128 = data[127];

    /*Récupere les données que je veut de la Commune */
    name_03128 = rows03128.Libellé_géographique;
    Pop_03128 = rows03128.Population_en_2017;
    Pop_017_03128 = rows03128.Pop_017_ans_2017;
    Pop_mediane_vote_03128 = rows03128.Popu_possible_voté;
    nbr_inscrit_03128 = rows03128.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03128').textContent = name_03128;
   
    let com_03128 = document.getElementById("f-path-03128");
    let list_03128 = document.getElementById("list_03128");


    function togg03128() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03128-01').classList.remove('visible')
        document.querySelector('#polar-chart_03128-01').classList.remove('visible')
        document.querySelector('#polar-chart_03128-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03128').classList.remove('visible')
        document.querySelector('#f-path-03128').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03128
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03128
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03128
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03128
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03128
    }
    com_03128.onclick = togg03128;
    list_03128.onclick = togg03128;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03129 = data[128];

    /*Récupere les données que je veut de la Commune */
    name_03129 = rows03129.Libellé_géographique;
    Pop_03129 = rows03129.Population_en_2017;
    Pop_017_03129 = rows03129.Pop_017_ans_2017;
    Pop_mediane_vote_03129 = rows03129.Popu_possible_voté;
    nbr_inscrit_03129 = rows03129.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03129').textContent = name_03129;
   
    let com_03129 = document.getElementById("f-path-03129");
    let list_03129 = document.getElementById("list_03129");


    function togg03129() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03129-01').classList.remove('visible')
        document.querySelector('#polar-chart_03129-01').classList.remove('visible')
        document.querySelector('#polar-chart_03129-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03129').classList.remove('visible')
        document.querySelector('#f-path-03129').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03129
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03129
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03129
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03129
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03129
    }
    com_03129.onclick = togg03129;
    list_03129.onclick = togg03129;
     /************************************************************************************* */
    /************************************************************************************* */
    const rows03130 = data[129];

    /*Récupere les données que je veut de la Commune */
    name_03130 = rows03130.Libellé_géographique;
    Pop_03130 = rows03130.Population_en_2017;
    Pop_017_03130 = rows03130.Pop_017_ans_2017;
    Pop_mediane_vote_03130 = rows03130.Popu_possible_voté;
    nbr_inscrit_03130 = rows03130.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03130').textContent = name_03130;
   
    let com_03130 = document.getElementById("f-path-03130");
    let list_03130 = document.getElementById("list_03130");


    function togg03130() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03130-01').classList.remove('visible')
        document.querySelector('#polar-chart_03130-01').classList.remove('visible')
        document.querySelector('#polar-chart_03130-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03130').classList.remove('visible')
        document.querySelector('#f-path-03130').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03130
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03130
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03130
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03130
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03130
    }
    com_03130.onclick = togg03130;
    list_03130.onclick = togg03130;
     /************************************************************************************* */
    /************************************************************************************* */
    const rows03131 = data[130];

    /*Récupere les données que je veut de la Commune */
    name_03131 = rows03131.Libellé_géographique;
    Pop_03131 = rows03131.Population_en_2017;
    Pop_017_03131 = rows03131.Pop_017_ans_2017;
    Pop_mediane_vote_03131 = rows03131.Popu_possible_voté;
    nbr_inscrit_03131 = rows03131.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03131').textContent = name_03131;
   
    let com_03131 = document.getElementById("f-path-03131");
    let list_03131 = document.getElementById("list_03131");


    function togg03131() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03131-01').classList.remove('visible')
        document.querySelector('#polar-chart_03131-01').classList.remove('visible')
        document.querySelector('#polar-chart_03131-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03131').classList.remove('visible')
        document.querySelector('#f-path-03131').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03131
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03131
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03131
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03131
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03131
    }
    com_03131.onclick = togg03131;
    list_03131.onclick = togg03131;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03132 = data[131];

    /*Récupere les données que je veut de la Commune */
    name_03132 = rows03132.Libellé_géographique;
    Pop_03132 = rows03132.Population_en_2017;
    Pop_017_03132 = rows03132.Pop_017_ans_2017;
    Pop_mediane_vote_03132 = rows03132.Popu_possible_voté;
    nbr_inscrit_03132 = rows03132.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03132').textContent = name_03132;
   
    let com_03132 = document.getElementById("f-path-03132");
    let list_03132 = document.getElementById("list_03132");


    function togg03132() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03132-01').classList.remove('visible')
        document.querySelector('#polar-chart_03132-01').classList.remove('visible')
        document.querySelector('#polar-chart_03132-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03132').classList.remove('visible')
        document.querySelector('#f-path-03132').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03132
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03132
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03132
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03132
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03132
    }
    com_03132.onclick = togg03132;
    list_03132.onclick = togg03132;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03133 = data[132];

    /*Récupere les données que je veut de la Commune */
    name_03133 = rows03133.Libellé_géographique;
    Pop_03133 = rows03133.Population_en_2017;
    Pop_017_03133 = rows03133.Pop_017_ans_2017;
    Pop_mediane_vote_03133 = rows03133.Popu_possible_voté;
    nbr_inscrit_03133 = rows03133.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03133').textContent = name_03133;
   
    let com_03133 = document.getElementById("f-path-03133");
    let list_03133 = document.getElementById("list_03133");


    function togg03133() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03133-01').classList.remove('visible')
        document.querySelector('#polar-chart_03133-01').classList.remove('visible')
        document.querySelector('#polar-chart_03133-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03133').classList.remove('visible')
        document.querySelector('#f-path-03133').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03133
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03133
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03133
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03133
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03133
    }
    com_03133.onclick = togg03133;
    list_03133.onclick = togg03133;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03134 = data[133];

    /*Récupere les données que je veut de la Commune */
    name_03134 = rows03134.Libellé_géographique;
    Pop_03134 = rows03134.Population_en_2017;
    Pop_017_03134 = rows03134.Pop_017_ans_2017;
    Pop_mediane_vote_03134 = rows03134.Popu_possible_voté;
    nbr_inscrit_03134 = rows03134.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03134').textContent = name_03134;
   
    let com_03134 = document.getElementById("f-path-03134");
    let list_03134 = document.getElementById("list_03134");


    function togg03134() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03134-01').classList.remove('visible')
        document.querySelector('#polar-chart_03134-01').classList.remove('visible')
        document.querySelector('#polar-chart_03134-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03134').classList.remove('visible')
        document.querySelector('#f-path-03134').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03134
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03134
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03134
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03134
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03134
    }
    com_03134.onclick = togg03134;
    list_03134.onclick = togg03134;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03135 = data[134];

    /*Récupere les données que je veut de la Commune */
    name_03135 = rows03135.Libellé_géographique;
    Pop_03135 = rows03135.Population_en_2017;
    Pop_017_03135 = rows03135.Pop_017_ans_2017;
    Pop_mediane_vote_03135 = rows03135.Popu_possible_voté;
    nbr_inscrit_03135 = rows03135.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03135').textContent = name_03135;
   
    let com_03135 = document.getElementById("f-path-03135");
    let list_03135 = document.getElementById("list_03135");


    function togg03135() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03135-01').classList.remove('visible')
        document.querySelector('#polar-chart_03135-01').classList.remove('visible')
        document.querySelector('#polar-chart_03135-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03135').classList.remove('visible')
        document.querySelector('#f-path-03135').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03135
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03135
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03135
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03135
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03135
    }
    com_03135.onclick = togg03135;
    list_03135.onclick = togg03135;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03136 = data[135];

    /*Récupere les données que je veut de la Commune */
    name_03136 = rows03136.Libellé_géographique;
    Pop_03136 = rows03136.Population_en_2017;
    Pop_017_03136 = rows03136.Pop_017_ans_2017;
    Pop_mediane_vote_03136 = rows03136.Popu_possible_voté;
    nbr_inscrit_03136 = rows03136.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03136').textContent = name_03136;
   
    let com_03136 = document.getElementById("f-path-03136");
    let list_03136 = document.getElementById("list_03136");


    function togg03136() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03136-01').classList.remove('visible')
        document.querySelector('#polar-chart_03136-01').classList.remove('visible')
        document.querySelector('#polar-chart_03136-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03136').classList.remove('visible')
        document.querySelector('#f-path-03136').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03136
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03136
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03136
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03136
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03136
    }
    com_03136.onclick = togg03136;
    list_03136.onclick = togg03136;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03137 = data[136];

    /*Récupere les données que je veut de la Commune */
    name_03137 = rows03137.Libellé_géographique;
    Pop_03137 = rows03137.Population_en_2017;
    Pop_017_03137 = rows03137.Pop_017_ans_2017;
    Pop_mediane_vote_03137 = rows03137.Popu_possible_voté;
    nbr_inscrit_03137 = rows03137.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03137').textContent = name_03137;
   
    let com_03137 = document.getElementById("f-path-03137");
    let list_03137 = document.getElementById("list_03137");


    function togg03137() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03137-01').classList.remove('visible')
        document.querySelector('#polar-chart_03137-01').classList.remove('visible')
        document.querySelector('#polar-chart_03167-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03137').classList.remove('visible')
        document.querySelector('#f-path-03137').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03137
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03137
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03137
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03137
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03137
    }
    com_03137.onclick = togg03137;
    list_03137.onclick = togg03137;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03138 = data[137];

    /*Récupere les données que je veut de la Commune */
    name_03138 = rows03138.Libellé_géographique;
    Pop_03138 = rows03138.Population_en_2017;
    Pop_017_03138 = rows03138.Pop_017_ans_2017;
    Pop_mediane_vote_03138 = rows03138.Popu_possible_voté;
    nbr_inscrit_03138 = rows03138.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03138').textContent = name_03138;
   
    let com_03138 = document.getElementById("f-path-03138");
    let list_03138 = document.getElementById("list_03138");


    function togg03138() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03138-01').classList.remove('visible')
        document.querySelector('#polar-chart_03138-01').classList.remove('visible')
        document.querySelector('#polar-chart_03168-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03138').classList.remove('visible')
        document.querySelector('#f-path-03138').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03138
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03138
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03138
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03138
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03138
    }
    com_03138.onclick = togg03138;
    list_03138.onclick = togg03138;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03139 = data[138];

    /*Récupere les données que je veut de la Commune */
    name_03139 = rows03139.Libellé_géographique;
    Pop_03139 = rows03139.Population_en_2017;
    Pop_017_03139 = rows03139.Pop_017_ans_2017;
    Pop_mediane_vote_03139 = rows03139.Popu_possible_voté;
    nbr_inscrit_03139 = rows03139.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03139').textContent = name_03139;
   
    let com_03139 = document.getElementById("f-path-03139");
    let list_03139 = document.getElementById("list_03139");


    function togg03139() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03139-01').classList.remove('visible')
        document.querySelector('#polar-chart_03139-01').classList.remove('visible')
        document.querySelector('#polar-chart_03169-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03139').classList.remove('visible')
        document.querySelector('#f-path-03139').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03139
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03139
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03139
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03139
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03139
    }
    com_03139.onclick = togg03139;
    list_03139.onclick = togg03139;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03140 = data[139];

    /*Récupere les données que je veut de la Commune */
    name_03140 = rows03140.Libellé_géographique;
    Pop_03140 = rows03140.Population_en_2017;
    Pop_017_03140 = rows03140.Pop_017_ans_2017;
    Pop_mediane_vote_03140 = rows03140.Popu_possible_voté;
    nbr_inscrit_03140 = rows03140.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03140').textContent = name_03140;
   
    let com_03140 = document.getElementById("f-path-03140");
    let list_03140 = document.getElementById("list_03140");


    function togg03140() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03140-01').classList.remove('visible')
        document.querySelector('#polar-chart_03140-01').classList.remove('visible')
        document.querySelector('#polar-chart_03140-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03140').classList.remove('visible')
        document.querySelector('#f-path-03140').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03140
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03140
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03140
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03140
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03140
    }
    com_03140.onclick = togg03140;
    list_03140.onclick = togg03140;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03141 = data[140];

    /*Récupere les données que je veut de la Commune */
    name_03141 = rows03141.Libellé_géographique;
    Pop_03141 = rows03141.Population_en_2017;
    Pop_017_03141 = rows03141.Pop_017_ans_2017;
    Pop_mediane_vote_03141 = rows03141.Popu_possible_voté;
    nbr_inscrit_03141 = rows03141.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03141').textContent = name_03141;
   
    let com_03141 = document.getElementById("f-path-03141");
    let list_03141 = document.getElementById("list_03141");


    function togg03141() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03141-01').classList.remove('visible')
        document.querySelector('#polar-chart_03141-01').classList.remove('visible')
        document.querySelector('#polar-chart_03141-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03141').classList.remove('visible')
        document.querySelector('#f-path-03141').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03141
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03141
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03141
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03141
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03141
    }
    com_03141.onclick = togg03141;
    list_03141.onclick = togg03141;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03142 = data[141];

    /*Récupere les données que je veut de la Commune */
    name_03142 = rows03142.Libellé_géographique;
    Pop_03142 = rows03142.Population_en_2017;
    Pop_017_03142 = rows03142.Pop_017_ans_2017;
    Pop_mediane_vote_03142 = rows03142.Popu_possible_voté;
    nbr_inscrit_03142 = rows03142.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03142').textContent = name_03142;
   
    let com_03142 = document.getElementById("f-path-03142");
    let list_03142 = document.getElementById("list_03142");


    function togg03142() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03142-01').classList.remove('visible')
        document.querySelector('#polar-chart_03142-01').classList.remove('visible')
        document.querySelector('#polar-chart_03142-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03142').classList.remove('visible')
        document.querySelector('#f-path-03142').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03142
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03142
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03142
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03142
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03142
    }
    com_03142.onclick = togg03142;
    list_03142.onclick = togg03142;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03143 = data[142];

    /*Récupere les données que je veut de la Commune */
    name_03143 = rows03143.Libellé_géographique;
    Pop_03143 = rows03143.Population_en_2017;
    Pop_017_03143 = rows03143.Pop_017_ans_2017;
    Pop_mediane_vote_03143 = rows03143.Popu_possible_voté;
    nbr_inscrit_03143 = rows03143.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03143').textContent = name_03143;
   
    let com_03143 = document.getElementById("f-path-03143");
    let list_03143 = document.getElementById("list_03143");


    function togg03143() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03143-01').classList.remove('visible')
        document.querySelector('#polar-chart_03143-01').classList.remove('visible')
        document.querySelector('#polar-chart_03143-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03143').classList.remove('visible')
        document.querySelector('#f-path-03143').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03143
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03143
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03143
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03143
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03143
    }
    com_03143.onclick = togg03143;
    list_03143.onclick = togg03143;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03144 = data[143];

    /*Récupere les données que je veut de la Commune */
    name_03144 = rows03144.Libellé_géographique;
    Pop_03144 = rows03144.Population_en_2017;
    Pop_017_03144 = rows03144.Pop_017_ans_2017;
    Pop_mediane_vote_03144 = rows03144.Popu_possible_voté;
    nbr_inscrit_03144 = rows03144.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03144').textContent = name_03144;
   
    let com_03144 = document.getElementById("f-path-03144");
    let list_03144 = document.getElementById("list_03144");


    function togg03144() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03144-01').classList.remove('visible')
        document.querySelector('#polar-chart_03144-01').classList.remove('visible')
        document.querySelector('#polar-chart_03144-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03144').classList.remove('visible')
        document.querySelector('#f-path-03144').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03144
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03144
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03144
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03144
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03144
    }
    com_03144.onclick = togg03144;
    list_03144.onclick = togg03144;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03145 = data[144];

    /*Récupere les données que je veut de la Commune */
    name_03145 = rows03145.Libellé_géographique;
    Pop_03145 = rows03145.Population_en_2017;
    Pop_017_03145 = rows03145.Pop_017_ans_2017;
    Pop_mediane_vote_03145 = rows03145.Popu_possible_voté;
    nbr_inscrit_03145 = rows03145.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03145').textContent = name_03145;
   
    let com_03145 = document.getElementById("f-path-03145");
    let list_03145 = document.getElementById("list_03145");


    function togg03145() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03145-01').classList.remove('visible')
        document.querySelector('#polar-chart_03145-01').classList.remove('visible')
        document.querySelector('#polar-chart_03145-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03145').classList.remove('visible')
        document.querySelector('#f-path-03145').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03145
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03145
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03145
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03145
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03145
    }
    com_03145.onclick = togg03145;
    list_03145.onclick = togg03145;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03146 = data[145];

    /*Récupere les données que je veut de la Commune */
    name_03146 = rows03146.Libellé_géographique;
    Pop_03146 = rows03146.Population_en_2017;
    Pop_017_03146 = rows03146.Pop_017_ans_2017;
    Pop_mediane_vote_03146 = rows03146.Popu_possible_voté;
    nbr_inscrit_03146 = rows03146.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03146').textContent = name_03146;
   
    let com_03146 = document.getElementById("f-path-03146");
    let list_03146 = document.getElementById("list_03146");


    function togg03146() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03146-01').classList.remove('visible')
        document.querySelector('#polar-chart_03146-01').classList.remove('visible')
        document.querySelector('#polar-chart_03146-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03146').classList.remove('visible')
        document.querySelector('#f-path-03146').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03146
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03146
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03146
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03146
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03146
    }
    com_03146.onclick = togg03146;
    list_03146.onclick = togg03146;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03147 = data[146];

    /*Récupere les données que je veut de la Commune */
    name_03147 = rows03147.Libellé_géographique;
    Pop_03147 = rows03147.Population_en_2017;
    Pop_017_03147 = rows03147.Pop_017_ans_2017;
    Pop_mediane_vote_03147 = rows03147.Popu_possible_voté;
    nbr_inscrit_03147 = rows03147.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03147').textContent = name_03147;
   
    let com_03147 = document.getElementById("f-path-03147");
    let list_03147 = document.getElementById("list_03147");


    function togg03147() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03147-01').classList.remove('visible')
        document.querySelector('#polar-chart_03147-01').classList.remove('visible')
        document.querySelector('#polar-chart_03147-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03147').classList.remove('visible')
        document.querySelector('#f-path-03147').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03147
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03147
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03147
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03147
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03147
    }
    com_03147.onclick = togg03147;
    list_03147.onclick = togg03147;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03148 = data[147];

    /*Récupere les données que je veut de la Commune */
    name_03148 = rows03148.Libellé_géographique;
    Pop_03148 = rows03148.Population_en_2017;
    Pop_017_03148 = rows03148.Pop_017_ans_2017;
    Pop_mediane_vote_03148 = rows03148.Popu_possible_voté;
    nbr_inscrit_03148 = rows03148.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03148').textContent = name_03148;
   
    let com_03148 = document.getElementById("f-path-03148");
    let list_03148 = document.getElementById("list_03148");


    function togg03148() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03148-01').classList.remove('visible')
        document.querySelector('#polar-chart_03148-01').classList.remove('visible')
        document.querySelector('#polar-chart_03148-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03148').classList.remove('visible')
        document.querySelector('#f-path-03148').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03148
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03148
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03148
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03148
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03148
    }
    com_03148.onclick = togg03148;
    list_03148.onclick = togg03148;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03149 = data[148];

    /*Récupere les données que je veut de la Commune */
    name_03149 = rows03149.Libellé_géographique;
    Pop_03149 = rows03149.Population_en_2017;
    Pop_017_03149 = rows03149.Pop_017_ans_2017;
    Pop_mediane_vote_03149 = rows03149.Popu_possible_voté;
    nbr_inscrit_03149 = rows03149.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03149').textContent = name_03149;
   
    let com_03149 = document.getElementById("f-path-03149");
    let list_03149 = document.getElementById("list_03149");


    function togg03149() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03149-01').classList.remove('visible')
        document.querySelector('#polar-chart_03149-01').classList.remove('visible')
        document.querySelector('#polar-chart_03149-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03149').classList.remove('visible')
        document.querySelector('#f-path-03149').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03149
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03149
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03149
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03149
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03149
    }
    com_03149.onclick = togg03149;
    list_03149.onclick = togg03149;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03150 = data[149];

    /*Récupere les données que je veut de la Commune */
    name_03150 = rows03150.Libellé_géographique;
    Pop_03150 = rows03150.Population_en_2017;
    Pop_017_03150 = rows03150.Pop_017_ans_2017;
    Pop_mediane_vote_03150 = rows03150.Popu_possible_voté;
    nbr_inscrit_03150 = rows03150.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03150').textContent = name_03150;
   
    let com_03150 = document.getElementById("f-path-03150");
    let list_03150 = document.getElementById("list_03150");


    function togg03150() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03150-01').classList.remove('visible')
        document.querySelector('#polar-chart_03150-01').classList.remove('visible')
        document.querySelector('#polar-chart_03150-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03150').classList.remove('visible')
        document.querySelector('#f-path-03150').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03150
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03150
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03150
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03150
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03150
    }
    com_03150.onclick = togg03150;
    list_03150.onclick = togg03150;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03151 = data[150];

    /*Récupere les données que je veut de la Commune */
    name_03151 = rows03151.Libellé_géographique;
    Pop_03151 = rows03151.Population_en_2017;
    Pop_017_03151 = rows03151.Pop_017_ans_2017;
    Pop_mediane_vote_03151 = rows03151.Popu_possible_voté;
    nbr_inscrit_03151 = rows03151.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03151').textContent = name_03151;
   
    let com_03151 = document.getElementById("f-path-03151");
    let list_03151 = document.getElementById("list_03151");


    function togg03151() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03151-01').classList.remove('visible')
        document.querySelector('#polar-chart_03151-01').classList.remove('visible')
        document.querySelector('#polar-chart_03151-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03151').classList.remove('visible')
        document.querySelector('#f-path-03151').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03151
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03151
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03151
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03151
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03151
    }
    com_03151.onclick = togg03151;
    list_03151.onclick = togg03151;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03152 = data[151];

    /*Récupere les données que je veut de la Commune */
    name_03152 = rows03152.Libellé_géographique;
    Pop_03152 = rows03152.Population_en_2017;
    Pop_017_03152 = rows03152.Pop_017_ans_2017;
    Pop_mediane_vote_03152 = rows03152.Popu_possible_voté;
    nbr_inscrit_03152 = rows03152.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03152').textContent = name_03152;
   
    let com_03152 = document.getElementById("f-path-03152");
    let list_03152 = document.getElementById("list_03152");


    function togg03152() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03152-01').classList.remove('visible')
        document.querySelector('#polar-chart_03152-01').classList.remove('visible')
        document.querySelector('#polar-chart_03152-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03152').classList.remove('visible')
        document.querySelector('#f-path-03152').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03152
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03152
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03152
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03152
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03152
    }
    com_03152.onclick = togg03152;
    list_03152.onclick = togg03152;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03153 = data[152];

    /*Récupere les données que je veut de la Commune */
    name_03153 = rows03153.Libellé_géographique;
    Pop_03153 = rows03153.Population_en_2017;
    Pop_017_03153 = rows03153.Pop_017_ans_2017;
    Pop_mediane_vote_03153 = rows03153.Popu_possible_voté;
    nbr_inscrit_03153 = rows03153.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03153').textContent = name_03153;
   
    let com_03153 = document.getElementById("f-path-03153");
    let list_03153 = document.getElementById("list_03153");


    function togg03153() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03153-01').classList.remove('visible')
        document.querySelector('#polar-chart_03153-01').classList.remove('visible')
        document.querySelector('#polar-chart_03153-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03153').classList.remove('visible')
        document.querySelector('#f-path-03153').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03153
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03153
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03153
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03153
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03153
    }
    com_03153.onclick = togg03153;
    list_03153.onclick = togg03153;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03154 = data[153];

    /*Récupere les données que je veut de la Commune */
    name_03154 = rows03154.Libellé_géographique;
    Pop_03154 = rows03154.Population_en_2017;
    Pop_017_03154 = rows03154.Pop_017_ans_2017;
    Pop_mediane_vote_03154 = rows03154.Popu_possible_voté;
    nbr_inscrit_03154 = rows03154.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03154').textContent = name_03154;
   
    let com_03154 = document.getElementById("f-path-03154");
    let list_03154 = document.getElementById("list_03154");


    function togg03154() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03154-01').classList.remove('visible')
        document.querySelector('#polar-chart_03154-01').classList.remove('visible')
        document.querySelector('#polar-chart_03154-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03154').classList.remove('visible')
        document.querySelector('#f-path-03154').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03154
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03154
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03154
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03154
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03154
    }
    com_03154.onclick = togg03154;
    list_03154.onclick = togg03154;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03155 = data[154];

    /*Récupere les données que je veut de la Commune */
    name_03155 = rows03155.Libellé_géographique;
    Pop_03155 = rows03155.Population_en_2017;
    Pop_017_03155 = rows03155.Pop_017_ans_2017;
    Pop_mediane_vote_03155 = rows03155.Popu_possible_voté;
    nbr_inscrit_03155 = rows03155.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03155').textContent = name_03155;
   
    let com_03155 = document.getElementById("f-path-03155");
    let list_03155 = document.getElementById("list_03155");


    function togg03155() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03155-01').classList.remove('visible')
        document.querySelector('#polar-chart_03155-01').classList.remove('visible')
        document.querySelector('#polar-chart_03155-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03155').classList.remove('visible')
        document.querySelector('#f-path-03155').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03155
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03155
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03155
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03155
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03155
    }
    com_03155.onclick = togg03155;
    list_03155.onclick = togg03155;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03156 = data[155];

    /*Récupere les données que je veut de la Commune */
    name_03156 = rows03156.Libellé_géographique;
    Pop_03156 = rows03156.Population_en_2017;
    Pop_017_03156 = rows03156.Pop_017_ans_2017;
    Pop_mediane_vote_03156 = rows03156.Popu_possible_voté;
    nbr_inscrit_03156 = rows03156.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03156').textContent = name_03156;
   
    let com_03156 = document.getElementById("f-path-03156");
    let list_03156 = document.getElementById("list_03156");


    function togg03156() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03156-01').classList.remove('visible')
        document.querySelector('#polar-chart_03156-01').classList.remove('visible')
        document.querySelector('#polar-chart_03156-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03156').classList.remove('visible')
        document.querySelector('#f-path-03156').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03156
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03156
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03156
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03156
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03156
    }
    com_03156.onclick = togg03156;
    list_03156.onclick = togg03156;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03157 = data[156];

    /*Récupere les données que je veut de la Commune */
    name_03157 = rows03157.Libellé_géographique;
    Pop_03157 = rows03157.Population_en_2017;
    Pop_017_03157 = rows03157.Pop_017_ans_2017;
    Pop_mediane_vote_03157 = rows03157.Popu_possible_voté;
    nbr_inscrit_03157 = rows03157.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03157').textContent = name_03157;
   
    let com_03157 = document.getElementById("f-path-03157");
    let list_03157 = document.getElementById("list_03157");


    function togg03157() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03157-01').classList.remove('visible')
        document.querySelector('#polar-chart_03157-01').classList.remove('visible')
        document.querySelector('#polar-chart_03157-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03157').classList.remove('visible')
        document.querySelector('#f-path-03157').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03157
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03157
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03157
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03157
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03157
    }
    com_03157.onclick = togg03157;
    list_03157.onclick = togg03157;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03158 = data[157];

    /*Récupere les données que je veut de la Commune */
    name_03158 = rows03158.Libellé_géographique;
    Pop_03158 = rows03158.Population_en_2017;
    Pop_017_03158 = rows03158.Pop_017_ans_2017;
    Pop_mediane_vote_03158 = rows03158.Popu_possible_voté;
    nbr_inscrit_03158 = rows03158.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03158').textContent = name_03158;
   
    let com_03158 = document.getElementById("f-path-03158");
    let list_03158 = document.getElementById("list_03158");


    function togg03158() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03158-01').classList.remove('visible')
        document.querySelector('#polar-chart_03158-01').classList.remove('visible')
        document.querySelector('#polar-chart_03158-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03158').classList.remove('visible')
        document.querySelector('#f-path-03158').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03158
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03158
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03158
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03158
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03158
    }
    com_03158.onclick = togg03158;
    list_03158.onclick = togg03158;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03159 = data[158];

    /*Récupere les données que je veut de la Commune */
    name_03159 = rows03159.Libellé_géographique;
    Pop_03159 = rows03159.Population_en_2017;
    Pop_017_03159 = rows03159.Pop_017_ans_2017;
    Pop_mediane_vote_03159 = rows03159.Popu_possible_voté;
    nbr_inscrit_03159 = rows03159.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03159').textContent = name_03159;
   
    let com_03159 = document.getElementById("f-path-03159");
    let list_03159 = document.getElementById("list_03159");


    function togg03159() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03159-01').classList.remove('visible')
        document.querySelector('#polar-chart_03159-01').classList.remove('visible')
        document.querySelector('#polar-chart_03159-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03159').classList.remove('visible')
        document.querySelector('#f-path-03159').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03159
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03159
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03159
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03159
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03159
    }
    com_03159.onclick = togg03159;
    list_03159.onclick = togg03159;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03160 = data[159];

    /*Récupere les données que je veut de la Commune */
    name_03160 = rows03160.Libellé_géographique;
    Pop_03160 = rows03160.Population_en_2017;
    Pop_017_03160 = rows03160.Pop_017_ans_2017;
    Pop_mediane_vote_03160 = rows03160.Popu_possible_voté;
    nbr_inscrit_03160 = rows03160.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03160').textContent = name_03160;
   
    let com_03160 = document.getElementById("f-path-03160");
    let list_03160 = document.getElementById("list_03160");


    function togg03160() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03160-01').classList.remove('visible')
        document.querySelector('#polar-chart_03160-01').classList.remove('visible')
        document.querySelector('#polar-chart_03160-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03160').classList.remove('visible')
        document.querySelector('#f-path-03160').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03160
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03160
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03160
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03160
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03160
    }
    com_03160.onclick = togg03160;
    list_03160.onclick = togg03160;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03161 = data[160];

    /*Récupere les données que je veut de la Commune */
    name_03161 = rows03161.Libellé_géographique;
    Pop_03161 = rows03161.Population_en_2017;
    Pop_017_03161 = rows03161.Pop_017_ans_2017;
    Pop_mediane_vote_03161 = rows03161.Popu_possible_voté;
    nbr_inscrit_03161 = rows03161.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03161').textContent = name_03161;
   
    let com_03161 = document.getElementById("f-path-03161");
    let list_03161 = document.getElementById("list_03161");


    function togg03161() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03161-01').classList.remove('visible')
        document.querySelector('#polar-chart_03161-01').classList.remove('visible')
        document.querySelector('#polar-chart_03161-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03161').classList.remove('visible')
        document.querySelector('#f-path-03161').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03161
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03161
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03161
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03161
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03161
    }
    com_03161.onclick = togg03161;
    list_03161.onclick = togg03161;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03162 = data[161];

    /*Récupere les données que je veut de la Commune */
    name_03162 = rows03162.Libellé_géographique;
    Pop_03162 = rows03162.Population_en_2017;
    Pop_017_03162 = rows03162.Pop_017_ans_2017;
    Pop_mediane_vote_03162 = rows03162.Popu_possible_voté;
    nbr_inscrit_03162 = rows03162.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03162').textContent = name_03162;
   
    let com_03162 = document.getElementById("f-path-03162");
    let list_03162 = document.getElementById("list_03162");


    function togg03162() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03162-01').classList.remove('visible')
        document.querySelector('#polar-chart_03162-01').classList.remove('visible')
        document.querySelector('#polar-chart_03162-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03162').classList.remove('visible')
        document.querySelector('#f-path-03162').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03162
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03162
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03162
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03162
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03162
    }
    com_03162.onclick = togg03162;
    list_03162.onclick = togg03162;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03163 = data[162];

    /*Récupere les données que je veut de la Commune */
    name_03163 = rows03163.Libellé_géographique;
    Pop_03163 = rows03163.Population_en_2017;
    Pop_017_03163 = rows03163.Pop_017_ans_2017;
    Pop_mediane_vote_03163 = rows03163.Popu_possible_voté;
    nbr_inscrit_03163 = rows03163.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03163').textContent = name_03163;
   
    let com_03163 = document.getElementById("f-path-03163");
    let list_03163 = document.getElementById("list_03163");


    function togg03163() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03163-01').classList.remove('visible')
        document.querySelector('#polar-chart_03163-01').classList.remove('visible')
        document.querySelector('#polar-chart_03163-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03163').classList.remove('visible')
        document.querySelector('#f-path-03163').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03163
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03163
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03163
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03163
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03163
    }
    com_03163.onclick = togg03163;
    list_03163.onclick = togg03163;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03164 = data[163];

    /*Récupere les données que je veut de la Commune */
    name_03164 = rows03164.Libellé_géographique;
    Pop_03164 = rows03164.Population_en_2017;
    Pop_017_03164 = rows03164.Pop_017_ans_2017;
    Pop_mediane_vote_03164 = rows03164.Popu_possible_voté;
    nbr_inscrit_03164 = rows03164.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03164').textContent = name_03164;
   
    let com_03164 = document.getElementById("f-path-03164");
    let list_03164 = document.getElementById("list_03164");


    function togg03164() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03164-01').classList.remove('visible')
        document.querySelector('#polar-chart_03164-01').classList.remove('visible')
        document.querySelector('#polar-chart_03164-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03164').classList.remove('visible')
        document.querySelector('#f-path-03164').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03164
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03164
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03164
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03164
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03164
    }
    com_03164.onclick = togg03164;
    list_03164.onclick = togg03164;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03165 = data[164];

    /*Récupere les données que je veut de la Commune */
    name_03165 = rows03165.Libellé_géographique;
    Pop_03165 = rows03165.Population_en_2017;
    Pop_017_03165 = rows03165.Pop_017_ans_2017;
    Pop_mediane_vote_03165 = rows03165.Popu_possible_voté;
    nbr_inscrit_03165 = rows03165.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03165').textContent = name_03165;
   
    let com_03165 = document.getElementById("f-path-03165");
    let list_03165 = document.getElementById("list_03165");


    function togg03165() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03165-01').classList.remove('visible')
        document.querySelector('#polar-chart_03165-01').classList.remove('visible')
        document.querySelector('#polar-chart_03165-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03165').classList.remove('visible')
        document.querySelector('#f-path-03165').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03165
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03165
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03165
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03165
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03165
    }
    com_03165.onclick = togg03165;
    list_03165.onclick = togg03165;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03166 = data[165];

    /*Récupere les données que je veut de la Commune */
    name_03166 = rows03166.Libellé_géographique;
    Pop_03166 = rows03166.Population_en_2017;
    Pop_017_03166 = rows03166.Pop_017_ans_2017;
    Pop_mediane_vote_03166 = rows03166.Popu_possible_voté;
    nbr_inscrit_03166 = rows03166.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03166').textContent = name_03166;
   
    let com_03166 = document.getElementById("f-path-03166");
    let list_03166 = document.getElementById("list_03166");


    function togg03166() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03166-01').classList.remove('visible')
        document.querySelector('#polar-chart_03166-01').classList.remove('visible')
        document.querySelector('#polar-chart_03166-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03166').classList.remove('visible')
        document.querySelector('#f-path-03166').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03166
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03166
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03166
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03166
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03166
    }
    com_03166.onclick = togg03166;
    list_03166.onclick = togg03166;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03167 = data[166];

    /*Récupere les données que je veut de la Commune */
    name_03167 = rows03167.Libellé_géographique;
    Pop_03167 = rows03167.Population_en_2017;
    Pop_017_03167 = rows03167.Pop_017_ans_2017;
    Pop_mediane_vote_03167 = rows03167.Popu_possible_voté;
    nbr_inscrit_03167 = rows03167.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03167').textContent = name_03167;
   
    let com_03167 = document.getElementById("f-path-03167");
    let list_03167 = document.getElementById("list_03167");


    function togg03167() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03167-01').classList.remove('visible')
        document.querySelector('#polar-chart_03167-01').classList.remove('visible')
        document.querySelector('#polar-chart_03167-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03167').classList.remove('visible')
        document.querySelector('#f-path-03167').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03167
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03167
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03167
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03167
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03167
    }
    com_03167.onclick = togg03167;
    list_03167.onclick = togg03167;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03168 = data[167];

    /*Récupere les données que je veut de la Commune */
    name_03168 = rows03168.Libellé_géographique;
    Pop_03168 = rows03168.Population_en_2017;
    Pop_017_03168 = rows03168.Pop_017_ans_2017;
    Pop_mediane_vote_03168 = rows03168.Popu_possible_voté;
    nbr_inscrit_03168 = rows03168.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03168').textContent = name_03168;
   
    let com_03168 = document.getElementById("f-path-03168");
    let list_03168 = document.getElementById("list_03168");


    function togg03168() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03168-01').classList.remove('visible')
        document.querySelector('#polar-chart_03168-01').classList.remove('visible')
        document.querySelector('#polar-chart_03168-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03168').classList.remove('visible')
        document.querySelector('#f-path-03168').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03168
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03168
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03168
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03168
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03168
    }
    com_03168.onclick = togg03168;
    list_03168.onclick = togg03168;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03169 = data[168];

    /*Récupere les données que je veut de la Commune */
    name_03169 = rows03169.Libellé_géographique;
    Pop_03169 = rows03169.Population_en_2017;
    Pop_017_03169 = rows03169.Pop_017_ans_2017;
    Pop_mediane_vote_03169 = rows03169.Popu_possible_voté;
    nbr_inscrit_03169 = rows03169.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03169').textContent = name_03169;
   
    let com_03169 = document.getElementById("f-path-03169");
    let list_03169 = document.getElementById("list_03169");


    function togg03169() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03169-01').classList.remove('visible')
        document.querySelector('#polar-chart_03169-01').classList.remove('visible')
        document.querySelector('#polar-chart_03169-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03169').classList.remove('visible')
        document.querySelector('#f-path-03169').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03169
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03169
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03169
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03169
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03169
    }
    com_03169.onclick = togg03169;
    list_03169.onclick = togg03169;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03170 = data[169];

    /*Récupere les données que je veut de la Commune */
    name_03170 = rows03170.Libellé_géographique;
    Pop_03170 = rows03170.Population_en_2017;
    Pop_017_03170 = rows03170.Pop_017_ans_2017;
    Pop_mediane_vote_03170 = rows03170.Popu_possible_voté;
    nbr_inscrit_03170 = rows03170.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03170').textContent = name_03170;
   
    let com_03170 = document.getElementById("f-path-03170");
    let list_03170 = document.getElementById("list_03170");


    function togg03170() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03170-01').classList.remove('visible')
        document.querySelector('#polar-chart_03170-01').classList.remove('visible')
        document.querySelector('#polar-chart_03170-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03170').classList.remove('visible')
        document.querySelector('#f-path-03170').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03170
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03170
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03170
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03170
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03170
    }
    com_03170.onclick = togg03170;
    list_03170.onclick = togg03170;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03171 = data[170];

    /*Récupere les données que je veut de la Commune */
    name_03171 = rows03171.Libellé_géographique;
    Pop_03171 = rows03171.Population_en_2017;
    Pop_017_03171 = rows03171.Pop_017_ans_2017;
    Pop_mediane_vote_03171 = rows03171.Popu_possible_voté;
    nbr_inscrit_03171 = rows03171.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03171').textContent = name_03171;
   
    let com_03171 = document.getElementById("f-path-03171");
    let list_03171 = document.getElementById("list_03171");


    function togg03171() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03171-01').classList.remove('visible')
        document.querySelector('#polar-chart_03171-01').classList.remove('visible')
        document.querySelector('#polar-chart_03171-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03171').classList.remove('visible')
        document.querySelector('#f-path-03171').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03171
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03171
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03171
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03171
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03171
    }
    com_03171.onclick = togg03171;
    list_03171.onclick = togg03171;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03172 = data[171];

    /*Récupere les données que je veut de la Commune */
    name_03172 = rows03172.Libellé_géographique;
    Pop_03172 = rows03172.Population_en_2017;
    Pop_017_03172 = rows03172.Pop_017_ans_2017;
    Pop_mediane_vote_03172 = rows03172.Popu_possible_voté;
    nbr_inscrit_03172 = rows03172.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03172').textContent = name_03172;
   
    let com_03172 = document.getElementById("f-path-03172");
    let list_03172 = document.getElementById("list_03172");


    function togg03172() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03172-01').classList.remove('visible')
        document.querySelector('#polar-chart_03172-01').classList.remove('visible')
        document.querySelector('#polar-chart_03172-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03172').classList.remove('visible')
        document.querySelector('#f-path-03172').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03172
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03172
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03172
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03172
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03172
    }
    com_03172.onclick = togg03172;
    list_03172.onclick = togg03172;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03173 = data[172];

    /*Récupere les données que je veut de la Commune */
    name_03173 = rows03173.Libellé_géographique;
    Pop_03173 = rows03173.Population_en_2017;
    Pop_017_03173 = rows03173.Pop_017_ans_2017;
    Pop_mediane_vote_03173 = rows03173.Popu_possible_voté;
    nbr_inscrit_03173 = rows03173.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03173').textContent = name_03173;
   
    let com_03173 = document.getElementById("f-path-03173");
    let list_03173 = document.getElementById("list_03173");


    function togg03173() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03173-01').classList.remove('visible')
        document.querySelector('#polar-chart_03173-01').classList.remove('visible')
        document.querySelector('#polar-chart_03173-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03173').classList.remove('visible')
        document.querySelector('#f-path-03173').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03173
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03173
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03173
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03173
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03173
    }
    com_03173.onclick = togg03173;
    list_03173.onclick = togg03173;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03174 = data[173];

    /*Récupere les données que je veut de la Commune */
    name_03174 = rows03174.Libellé_géographique;
    Pop_03174 = rows03174.Population_en_2017;
    Pop_017_03174 = rows03174.Pop_017_ans_2017;
    Pop_mediane_vote_03174 = rows03174.Popu_possible_voté;
    nbr_inscrit_03174 = rows03174.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03174').textContent = name_03174;
   
    let com_03174 = document.getElementById("f-path-03174");
    let list_03174 = document.getElementById("list_03174");


    function togg03174() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03174-01').classList.remove('visible')
        document.querySelector('#polar-chart_03174-01').classList.remove('visible')
        document.querySelector('#polar-chart_03174-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03174').classList.remove('visible')
        document.querySelector('#f-path-03174').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03174
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03174
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03174
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03174
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03174
    }
    com_03174.onclick = togg03174;
    list_03174.onclick = togg03174;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03175 = data[174];

    /*Récupere les données que je veut de la Commune */
    name_03175 = rows03175.Libellé_géographique;
    Pop_03175 = rows03175.Population_en_2017;
    Pop_017_03175 = rows03175.Pop_017_ans_2017;
    Pop_mediane_vote_03175 = rows03175.Popu_possible_voté;
    nbr_inscrit_03175 = rows03175.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03175').textContent = name_03175;
   
    let com_03175 = document.getElementById("f-path-03175");
    let list_03175 = document.getElementById("list_03175");


    function togg03175() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03175-01').classList.remove('visible')
        document.querySelector('#polar-chart_03175-01').classList.remove('visible')
        document.querySelector('#polar-chart_03175-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03175').classList.remove('visible')
        document.querySelector('#f-path-03175').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03175
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03175
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03175
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03175
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03175
    }
    com_03175.onclick = togg03175;
    list_03175.onclick = togg03175;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03176 = data[175];

    /*Récupere les données que je veut de la Commune */
    name_03176 = rows03176.Libellé_géographique;
    Pop_03176 = rows03176.Population_en_2017;
    Pop_017_03176 = rows03176.Pop_017_ans_2017;
    Pop_mediane_vote_03176 = rows03176.Popu_possible_voté;
    nbr_inscrit_03176 = rows03176.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03176').textContent = name_03176;
   
    let com_03176 = document.getElementById("f-path-03176");
    let list_03176 = document.getElementById("list_03176");


    function togg03176() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03176-01').classList.remove('visible')
        document.querySelector('#polar-chart_03176-01').classList.remove('visible')
        document.querySelector('#polar-chart_03176-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03176').classList.remove('visible')
        document.querySelector('#f-path-03176').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03176
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03176
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03176
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03176
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03176
    }
    com_03176.onclick = togg03176;
    list_03176.onclick = togg03176;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03177 = data[176];

    /*Récupere les données que je veut de la Commune */
    name_03177 = rows03177.Libellé_géographique;
    Pop_03177 = rows03177.Population_en_2017;
    Pop_017_03177 = rows03177.Pop_017_ans_2017;
    Pop_mediane_vote_03177 = rows03177.Popu_possible_voté;
    nbr_inscrit_03177 = rows03177.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03177').textContent = name_03177;
   
    let com_03177 = document.getElementById("f-path-03177");
    let list_03177 = document.getElementById("list_03177");


    function togg03177() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03177-01').classList.remove('visible')
        document.querySelector('#polar-chart_03177-01').classList.remove('visible')
        document.querySelector('#polar-chart_03177-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03177').classList.remove('visible')
        document.querySelector('#f-path-03177').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03177
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03177
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03177
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03177
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03177
    }
    com_03177.onclick = togg03177;
    list_03177.onclick = togg03177;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03178 = data[177];

    /*Récupere les données que je veut de la Commune */
    name_03178 = rows03178.Libellé_géographique;
    Pop_03178 = rows03178.Population_en_2017;
    Pop_017_03178 = rows03178.Pop_017_ans_2017;
    Pop_mediane_vote_03178 = rows03178.Popu_possible_voté;
    nbr_inscrit_03178 = rows03178.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03178').textContent = name_03178;
   
    let com_03178 = document.getElementById("f-path-03178");
    let list_03178 = document.getElementById("list_03178");


    function togg03178() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03178-01').classList.remove('visible')
        document.querySelector('#polar-chart_03178-01').classList.remove('visible')
        document.querySelector('#polar-chart_03178-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03178').classList.remove('visible')
        document.querySelector('#f-path-03178').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03178
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03178
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03178
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03178
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03178
    }
    com_03178.onclick = togg03178;
    list_03178.onclick = togg03178;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03179 = data[178];

    /*Récupere les données que je veut de la Commune */
    name_03179 = rows03179.Libellé_géographique;
    Pop_03179 = rows03179.Population_en_2017;
    Pop_017_03179 = rows03179.Pop_017_ans_2017;
    Pop_mediane_vote_03179 = rows03179.Popu_possible_voté;
    nbr_inscrit_03179 = rows03179.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03179').textContent = name_03179;
   
    let com_03179 = document.getElementById("f-path-03179");
    let list_03179 = document.getElementById("list_03179");


    function togg03179() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03179-01').classList.remove('visible')
        document.querySelector('#polar-chart_03179-01').classList.remove('visible')
        document.querySelector('#polar-chart_03179-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03179').classList.remove('visible')
        document.querySelector('#f-path-03179').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03179
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03179
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03179
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03179
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03179
    }
    com_03179.onclick = togg03179;
    list_03179.onclick = togg03179;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03180 = data[179];

    /*Récupere les données que je veut de la Commune */
    name_03180 = rows03180.Libellé_géographique;
    Pop_03180 = rows03180.Population_en_2017;
    Pop_017_03180 = rows03180.Pop_017_ans_2017;
    Pop_mediane_vote_03180 = rows03180.Popu_possible_voté;
    nbr_inscrit_03180 = rows03180.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03180').textContent = name_03180;
   
    let com_03180 = document.getElementById("f-path-03180");
    let list_03180 = document.getElementById("list_03180");


    function togg03180() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03180-01').classList.remove('visible')
        document.querySelector('#polar-chart_03180-01').classList.remove('visible')
        document.querySelector('#polar-chart_03180-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03180').classList.remove('visible')
        document.querySelector('#f-path-03180').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03180
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03180
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03180
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03180
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03180
    }
    com_03180.onclick = togg03180;
    list_03180.onclick = togg03180;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03181 = data[180];

    /*Récupere les données que je veut de la Commune */
    name_03181 = rows03181.Libellé_géographique;
    Pop_03181 = rows03181.Population_en_2017;
    Pop_017_03181 = rows03181.Pop_017_ans_2017;
    Pop_mediane_vote_03181 = rows03181.Popu_possible_voté;
    nbr_inscrit_03181 = rows03181.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03181').textContent = name_03181;
   
    let com_03181 = document.getElementById("f-path-03181");
    let list_03181 = document.getElementById("list_03181");


    function togg03181() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03181-01').classList.remove('visible')
        document.querySelector('#polar-chart_03181-01').classList.remove('visible')
        document.querySelector('#polar-chart_03181-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03181').classList.remove('visible')
        document.querySelector('#f-path-03181').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03181
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03181
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03181
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03181
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03181
    }
    com_03181.onclick = togg03181;
    list_03181.onclick = togg03181;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03182 = data[181];

    /*Récupere les données que je veut de la Commune */
    name_03182 = rows03182.Libellé_géographique;
    Pop_03182 = rows03182.Population_en_2017;
    Pop_017_03182 = rows03182.Pop_017_ans_2017;
    Pop_mediane_vote_03182 = rows03182.Popu_possible_voté;
    nbr_inscrit_03182 = rows03182.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03182').textContent = name_03182;
   
    let com_03182 = document.getElementById("f-path-03182");
    let list_03182 = document.getElementById("list_03182");


    function togg03182() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03182-01').classList.remove('visible')
        document.querySelector('#polar-chart_03182-01').classList.remove('visible')
        document.querySelector('#polar-chart_03182-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03182').classList.remove('visible')
        document.querySelector('#f-path-03182').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03182
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03182
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03182
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03182
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03182
    }
    com_03182.onclick = togg03182;
    list_03182.onclick = togg03182;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03183 = data[182];

    /*Récupere les données que je veut de la Commune */
    name_03183 = rows03183.Libellé_géographique;
    Pop_03183 = rows03183.Population_en_2017;
    Pop_017_03183 = rows03183.Pop_017_ans_2017;
    Pop_mediane_vote_03183 = rows03183.Popu_possible_voté;
    nbr_inscrit_03183 = rows03183.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03183').textContent = name_03183;
   
    let com_03183 = document.getElementById("f-path-03183");
    let list_03183 = document.getElementById("list_03183");


    function togg03183() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03183-01').classList.remove('visible')
        document.querySelector('#polar-chart_03183-01').classList.remove('visible')
        document.querySelector('#polar-chart_03183-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03183').classList.remove('visible')
        document.querySelector('#f-path-03183').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03183
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03183
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03183
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03183
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03183
    }
    com_03183.onclick = togg03183;
    list_03183.onclick = togg03183;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03184 = data[183];

    /*Récupere les données que je veut de la Commune */
    name_03184 = rows03184.Libellé_géographique;
    Pop_03184 = rows03184.Population_en_2017;
    Pop_017_03184 = rows03184.Pop_017_ans_2017;
    Pop_mediane_vote_03184 = rows03184.Popu_possible_voté;
    nbr_inscrit_03184 = rows03184.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03184').textContent = name_03184;
   
    let com_03184 = document.getElementById("f-path-03184");
    let list_03184 = document.getElementById("list_03184");


    function togg03184() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03184-01').classList.remove('visible')
        document.querySelector('#polar-chart_03184-01').classList.remove('visible')
        document.querySelector('#polar-chart_03184-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03184').classList.remove('visible')
        document.querySelector('#f-path-03184').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03184
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03184
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03184
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03184
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03184
    }
    com_03184.onclick = togg03184;
    list_03184.onclick = togg03184;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03185 = data[184];

    /*Récupere les données que je veut de la Commune */
    name_03185 = rows03185.Libellé_géographique;
    Pop_03185 = rows03185.Population_en_2017;
    Pop_017_03185 = rows03185.Pop_017_ans_2017;
    Pop_mediane_vote_03185 = rows03185.Popu_possible_voté;
    nbr_inscrit_03185 = rows03185.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03185').textContent = name_03185;
   
    let com_03185 = document.getElementById("f-path-03185");
    let list_03185 = document.getElementById("list_03185");


    function togg03185() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03185-01').classList.remove('visible')
        document.querySelector('#polar-chart_03185-01').classList.remove('visible')
        document.querySelector('#polar-chart_03185-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03185').classList.remove('visible')
        document.querySelector('#f-path-03185').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03185
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03185
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03185
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03185
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03185
    }
    com_03185.onclick = togg03185;
    list_03185.onclick = togg03185;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03186 = data[185];

    /*Récupere les données que je veut de la Commune */
    name_03186 = rows03186.Libellé_géographique;
    Pop_03186 = rows03186.Population_en_2017;
    Pop_017_03186 = rows03186.Pop_017_ans_2017;
    Pop_mediane_vote_03186 = rows03186.Popu_possible_voté;
    nbr_inscrit_03186 = rows03186.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03186').textContent = name_03186;
   
    let com_03186 = document.getElementById("f-path-03186");
    let list_03186 = document.getElementById("list_03186");


    function togg03186() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03186-01').classList.remove('visible')
        document.querySelector('#polar-chart_03186-01').classList.remove('visible')
        document.querySelector('#polar-chart_03186-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03186').classList.remove('visible')
        document.querySelector('#f-path-03186').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03186
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03186
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03186
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03186
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03186
    }
    com_03186.onclick = togg03186;
    list_03186.onclick = togg03186;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03187 = data[186];

    /*Récupere les données que je veut de la Commune */
    name_03187 = rows03187.Libellé_géographique;
    Pop_03187 = rows03187.Population_en_2017;
    Pop_017_03187 = rows03187.Pop_017_ans_2017;
    Pop_mediane_vote_03187 = rows03187.Popu_possible_voté;
    nbr_inscrit_03187 = rows03187.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03187').textContent = name_03187;
   
    let com_03187 = document.getElementById("f-path-03187");
    let list_03187 = document.getElementById("list_03187");


    function togg03187() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03187-01').classList.remove('visible')
        document.querySelector('#polar-chart_03187-01').classList.remove('visible')
        document.querySelector('#polar-chart_03187-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03187').classList.remove('visible')
        document.querySelector('#f-path-03187').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03187
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03187
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03187
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03187
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03187
    }
    com_03187.onclick = togg03187;
    list_03187.onclick = togg03187;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03188 = data[187];

    /*Récupere les données que je veut de la Commune */
    name_03188 = rows03188.Libellé_géographique;
    Pop_03188 = rows03188.Population_en_2017;
    Pop_017_03188 = rows03188.Pop_017_ans_2017;
    Pop_mediane_vote_03188 = rows03188.Popu_possible_voté;
    nbr_inscrit_03188 = rows03188.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03188').textContent = name_03188;
   
    let com_03188 = document.getElementById("f-path-03188");
    let list_03188 = document.getElementById("list_03188");


    function togg03188() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03188-01').classList.remove('visible')
        document.querySelector('#polar-chart_03188-01').classList.remove('visible')
        document.querySelector('#polar-chart_03188-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03188').classList.remove('visible')
        document.querySelector('#f-path-03188').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03188
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03188
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03188
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03188
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03188
    }
    com_03188.onclick = togg03188;
    list_03188.onclick = togg03188;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03189 = data[188];

    /*Récupere les données que je veut de la Commune */
    name_03189 = rows03189.Libellé_géographique;
    Pop_03189 = rows03189.Population_en_2017;
    Pop_017_03189 = rows03189.Pop_017_ans_2017;
    Pop_mediane_vote_03189 = rows03189.Popu_possible_voté;
    nbr_inscrit_03189 = rows03189.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03189').textContent = name_03189;
   
    let com_03189 = document.getElementById("f-path-03189");
    let list_03189 = document.getElementById("list_03189");


    function togg03189() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03189-01').classList.remove('visible')
        document.querySelector('#polar-chart_03189-01').classList.remove('visible')
        document.querySelector('#polar-chart_03189-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03189').classList.remove('visible')
        document.querySelector('#f-path-03189').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03189
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03189
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03189
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03189
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03189
    }
    com_03189.onclick = togg03189;
    list_03189.onclick = togg03189;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03190 = data[189];

    /*Récupere les données que je veut de la Commune */
    name_03190 = rows03190.Libellé_géographique;
    Pop_03190 = rows03190.Population_en_2017;
    Pop_017_03190 = rows03190.Pop_017_ans_2017;
    Pop_mediane_vote_03190 = rows03190.Popu_possible_voté;
    nbr_inscrit_03190 = rows03190.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03190').textContent = name_03190;
   
    let com_03190 = document.getElementById("f-path-03190");
    let list_03190 = document.getElementById("list_03190");


    function togg03190() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03190-01').classList.remove('visible')
        document.querySelector('#polar-chart_03190-01').classList.remove('visible')
        document.querySelector('#polar-chart_03190-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03190').classList.remove('visible')
        document.querySelector('#f-path-03190').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03190
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03190
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03190
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03190
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03190
    }
    com_03190.onclick = togg03190;
    list_03190.onclick = togg03190;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03191 = data[190];

    /*Récupere les données que je veut de la Commune */
    name_03191 = rows03191.Libellé_géographique;
    Pop_03191 = rows03191.Population_en_2017;
    Pop_017_03191 = rows03191.Pop_017_ans_2017;
    Pop_mediane_vote_03191 = rows03191.Popu_possible_voté;
    nbr_inscrit_03191 = rows03191.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03191').textContent = name_03191;
   
    let com_03191 = document.getElementById("f-path-03191");
    let list_03191 = document.getElementById("list_03191");


    function togg03191() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03191-01').classList.remove('visible')
        document.querySelector('#polar-chart_03191-01').classList.remove('visible')
        document.querySelector('#polar-chart_03191-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03191').classList.remove('visible')
        document.querySelector('#f-path-03191').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03191
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03191
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03191
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03191
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03191
    }
    com_03191.onclick = togg03191;
    list_03191.onclick = togg03191;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03192 = data[191];

    /*Récupere les données que je veut de la Commune */
    name_03192 = rows03192.Libellé_géographique;
    Pop_03192 = rows03192.Population_en_2017;
    Pop_017_03192 = rows03192.Pop_017_ans_2017;
    Pop_mediane_vote_03192 = rows03192.Popu_possible_voté;
    nbr_inscrit_03192 = rows03192.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03192').textContent = name_03192;
   
    let com_03192 = document.getElementById("f-path-03192");
    let list_03192 = document.getElementById("list_03192");


    function togg03192() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03192-01').classList.remove('visible')
        document.querySelector('#polar-chart_03192-01').classList.remove('visible')
        document.querySelector('#polar-chart_03192-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03192').classList.remove('visible')
        document.querySelector('#f-path-03192').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03192
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03192
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03192
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03192
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03192
    }
    com_03192.onclick = togg03192;
    list_03192.onclick = togg03192;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03193 = data[192];

    /*Récupere les données que je veut de la Commune */
    name_03193 = rows03193.Libellé_géographique;
    Pop_03193 = rows03193.Population_en_2017;
    Pop_017_03193 = rows03193.Pop_017_ans_2017;
    Pop_mediane_vote_03193 = rows03193.Popu_possible_voté;
    nbr_inscrit_03193 = rows03193.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03193').textContent = name_03193;
   
    let com_03193 = document.getElementById("f-path-03193");
    let list_03193 = document.getElementById("list_03193");


    function togg03193() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03193-01').classList.remove('visible')
        document.querySelector('#polar-chart_03193-01').classList.remove('visible')
        document.querySelector('#polar-chart_03193-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03193').classList.remove('visible')
        document.querySelector('#f-path-03193').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03193
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03193
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03193
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03193
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03193
    }
    com_03193.onclick = togg03193;
    list_03193.onclick = togg03193;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03194 = data[193];

    /*Récupere les données que je veut de la Commune */
    name_03194 = rows03194.Libellé_géographique;
    Pop_03194 = rows03194.Population_en_2017;
    Pop_017_03194 = rows03194.Pop_017_ans_2017;
    Pop_mediane_vote_03194 = rows03194.Popu_possible_voté;
    nbr_inscrit_03194 = rows03194.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03194').textContent = name_03194;
   
    let com_03194 = document.getElementById("f-path-03194");
    let list_03194 = document.getElementById("list_03194");


    function togg03194() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03194-01').classList.remove('visible')
        document.querySelector('#polar-chart_03194-01').classList.remove('visible')
        document.querySelector('#polar-chart_03194-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03194').classList.remove('visible')
        document.querySelector('#f-path-03194').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03194
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03194
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03194
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03194
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03194
    }
    com_03194.onclick = togg03194;
    list_03194.onclick = togg03194;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03195 = data[194];

    /*Récupere les données que je veut de la Commune */
    name_03195 = rows03195.Libellé_géographique;
    Pop_03195 = rows03195.Population_en_2017;
    Pop_017_03195 = rows03195.Pop_017_ans_2017;
    Pop_mediane_vote_03195 = rows03195.Popu_possible_voté;
    nbr_inscrit_03195 = rows03195.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03195').textContent = name_03195;
   
    let com_03195 = document.getElementById("f-path-03195");
    let list_03195 = document.getElementById("list_03195");


    function togg03195() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03195-01').classList.remove('visible')
        document.querySelector('#polar-chart_03195-01').classList.remove('visible')
        document.querySelector('#polar-chart_03195-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03195').classList.remove('visible')
        document.querySelector('#f-path-03195').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03195
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03195
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03195
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03195
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03195
    }
    com_03195.onclick = togg03195;
    list_03195.onclick = togg03195;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03196 = data[195];

    /*Récupere les données que je veut de la Commune */
    name_03196 = rows03196.Libellé_géographique;
    Pop_03196 = rows03196.Population_en_2017;
    Pop_017_03196 = rows03196.Pop_017_ans_2017;
    Pop_mediane_vote_03196 = rows03196.Popu_possible_voté;
    nbr_inscrit_03196 = rows03196.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03196').textContent = name_03196;
   
    let com_03196 = document.getElementById("f-path-03196");
    let list_03196 = document.getElementById("list_03196");


    function togg03196() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03196-01').classList.remove('visible')
        document.querySelector('#polar-chart_03196-01').classList.remove('visible')
        document.querySelector('#polar-chart_03196-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03196').classList.remove('visible')
        document.querySelector('#f-path-03196').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03196
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03196
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03196
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03196
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03196
    }
    com_03196.onclick = togg03196;
    list_03196.onclick = togg03196;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03197 = data[196];

    /*Récupere les données que je veut de la Commune */
    name_03197 = rows03197.Libellé_géographique;
    Pop_03197 = rows03197.Population_en_2017;
    Pop_017_03197 = rows03197.Pop_017_ans_2017;
    Pop_mediane_vote_03197 = rows03197.Popu_possible_voté;
    nbr_inscrit_03197 = rows03197.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03197').textContent = name_03197;
   
    let com_03197 = document.getElementById("f-path-03197");
    let list_03197 = document.getElementById("list_03197");


    function togg03197() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03197-01').classList.remove('visible')
        document.querySelector('#polar-chart_03197-01').classList.remove('visible')
        document.querySelector('#polar-chart_03197-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03197').classList.remove('visible')
        document.querySelector('#f-path-03197').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03197
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03197
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03197
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03197
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03197
    }
    com_03197.onclick = togg03197;
    list_03197.onclick = togg03197;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03198 = data[197];

    /*Récupere les données que je veut de la Commune */
    name_03198 = rows03198.Libellé_géographique;
    Pop_03198 = rows03198.Population_en_2017;
    Pop_017_03198 = rows03198.Pop_017_ans_2017;
    Pop_mediane_vote_03198 = rows03198.Popu_possible_voté;
    nbr_inscrit_03198 = rows03198.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03198').textContent = name_03198;
   
    let com_03198 = document.getElementById("f-path-03198");
    let list_03198 = document.getElementById("list_03198");


    function togg03198() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03198-01').classList.remove('visible')
        document.querySelector('#polar-chart_03198-01').classList.remove('visible')
        document.querySelector('#polar-chart_03198-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03198').classList.remove('visible')
        document.querySelector('#f-path-03198').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03198
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03198
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03198
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03198
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03198
    }
    com_03198.onclick = togg03198;
    list_03198.onclick = togg03198;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03199 = data[198];

    /*Récupere les données que je veut de la Commune */
    name_03199 = rows03199.Libellé_géographique;
    Pop_03199 = rows03199.Population_en_2017;
    Pop_017_03199 = rows03199.Pop_017_ans_2017;
    Pop_mediane_vote_03199 = rows03199.Popu_possible_voté;
    nbr_inscrit_03199 = rows03199.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03199').textContent = name_03199;
   
    let com_03199 = document.getElementById("f-path-03199");
    let list_03199 = document.getElementById("list_03199");


    function togg03199() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03199-01').classList.remove('visible')
        document.querySelector('#polar-chart_03199-01').classList.remove('visible')
        document.querySelector('#polar-chart_03199-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03199').classList.remove('visible')
        document.querySelector('#f-path-03199').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03199
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03199
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03199
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03199
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03199
    }
    com_03199.onclick = togg03199;
    list_03199.onclick = togg03199;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03200 = data[199];

    /*Récupere les données que je veut de la Commune */
    name_03200 = rows03200.Libellé_géographique;
    Pop_03200 = rows03200.Population_en_2017;
    Pop_017_03200 = rows03200.Pop_017_ans_2017;
    Pop_mediane_vote_03200 = rows03200.Popu_possible_voté;
    nbr_inscrit_03200 = rows03200.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03200').textContent = name_03200;
   
    let com_03200 = document.getElementById("f-path-03200");
    let list_03200 = document.getElementById("list_03200");


    function togg03200() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03200-01').classList.remove('visible')
        document.querySelector('#polar-chart_03200-01').classList.remove('visible')
        document.querySelector('#polar-chart_03200-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03200').classList.remove('visible')
        document.querySelector('#f-path-03200').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03200
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03200
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03200
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03200
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03200
    }
    com_03200.onclick = togg03200;
    list_03200.onclick = togg03200;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03201 = data[200];
    /*Récupere les données que je veut de la Commune */
    name_03201 = rows03201.Libellé_géographique;
    Pop_03201 = rows03201.Population_en_2017;
    Pop_017_03201 = rows03201.Pop_017_ans_2017;
    Pop_mediane_vote_03201 = rows03201.Popu_possible_voté;
    nbr_inscrit_03201 = rows03201.Inscrits;
    /*Pose dans le Menu*/
    document.querySelector('#list_03201').textContent = name_03201;
/*--------------------------------------------------------------------------*/
    var body = document.querySelector('#body')
    var path = document.querySelector('#map01')
    /******************************************************************** */
    let com_03201 = document.getElementById("f-path-03201");
    let list_03201 = document.getElementById("list_03201");
    function togg03201() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03201-01').classList.remove('visible')
        document.querySelector('#polar-chart_03201-01').classList.remove('visible')
        document.querySelector('#polar-chart_03201-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03201').classList.remove('visible')
        document.querySelector('#f-path-03201').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03201
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03201
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03201
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03201
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03201
    }
    com_03201.onclick = togg03201;
    list_03201.onclick = togg03201;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03202 = data[201];
    /*Récupere les données que je veut de la Commune */
    name_03202 = rows03202.Libellé_géographique;
    Pop_03202 = rows03202.Population_en_2017;
    Pop_017_03202 = rows03202.Pop_017_ans_2017;
    Pop_mediane_vote_03202 = rows03202.Popu_possible_voté;
    nbr_inscrit_03202 = rows03202.Inscrits;  
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03202').textContent = name_03202;
/*--------------------------------------------------------------------------*/
    let com_03202 = document.getElementById("f-path-03202");
    let list_03202 = document.getElementById("list_03202");
    /******************************************************************** */
    function togg03202() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03202-01').classList.remove('visible')
        document.querySelector('#polar-chart_03202-01').classList.remove('visible')
        document.querySelector('#polar-chart_03202-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03202').classList.remove('visible')
        document.querySelector('#f-path-03202').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03202;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03202
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03202
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03202
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03202
    }
    com_03202.onclick = togg03202;
    list_03202.onclick = togg03202;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03203 = data[202];
    /*Récupere les données que je veut de la Commune */
    name_03203 = rows03203.Libellé_géographique;
    Pop_03203 = rows03203.Population_en_2017;
    Pop_017_03203 = rows03203.Pop_017_ans_2017;
    Pop_mediane_vote_03203 = rows03203.Popu_possible_voté;
    nbr_inscrit_03203 = rows03203.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03203').textContent = name_03203;
    let com_03203 = document.getElementById("f-path-03203");
    let list_03203 = document.getElementById("list_03203");
    function togg03203() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03203-01').classList.remove('visible')
        document.querySelector('#polar-chart_03203-01').classList.remove('visible')
        document.querySelector('#polar-chart_03203-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03203').classList.remove('visible')
        document.querySelector('#f-path-03203').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03203;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03203
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03203
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03203
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03203
    }
    com_03203.onclick = togg03203;
    list_03203.onclick = togg03203;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03204 = data[203];
    /*Récupere les données que je veut de la Commune */
    name_03204 = rows03204.Libellé_géographique;
    Pop_03204 = rows03204.Population_en_2017;
    Pop_017_03204 = rows03204.Pop_017_ans_2017;
    Pop_mediane_vote_03204 = rows03204.Popu_possible_voté;
    nbr_inscrit_03204 = rows03204.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03204').textContent = name_03204;
    let com_03204 = document.getElementById("f-path-03204");
    let list_03204 = document.getElementById("list_03204");
    function togg03204() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03204-01').classList.remove('visible')
        document.querySelector('#polar-chart_03204-01').classList.remove('visible')
        document.querySelector('#polar-chart_03204-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03204').classList.remove('visible')
        document.querySelector('#f-path-03204').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03204;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03204
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03204
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03204
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03204
    }
    com_03204.onclick = togg03204;
    list_03204.onclick = togg03204;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03205 = data[204];
    /*Récupere les données que je veut de la Commune */
    name_03205 = rows03205.Libellé_géographique;
    Pop_03205 = rows03205.Population_en_2017;
    Pop_017_03205 = rows03205.Pop_017_ans_2017;
    Pop_mediane_vote_03205 = rows03205.Popu_possible_voté;
    nbr_inscrit_03205 = rows03205.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03205').textContent = name_03205;
    let com_03205 = document.getElementById("f-path-03205");
    let list_03205 = document.getElementById("list_03205");
    function togg03205() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03205-01').classList.remove('visible')
        document.querySelector('#polar-chart_03205-01').classList.remove('visible')
        document.querySelector('#polar-chart_03205-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03205').classList.remove('visible')
        document.querySelector('#f-path-03205').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03205
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03205
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03205
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03205
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03205
    }
    com_03205.onclick = togg03205;
    list_03205.onclick = togg03205;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03206 = data[205];
    /*Récupere les données que je veut de la Commune */
    name_03206 = rows03206.Libellé_géographique;
    Pop_03206 = rows03206.Population_en_2017;
    Pop_017_03206 = rows03206.Pop_017_ans_2017;
    Pop_mediane_vote_03206 = rows03206.Popu_possible_voté;
    nbr_inscrit_03206 = rows03206.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03206').textContent = name_03206;
    let com_03206 = document.getElementById("f-path-03206");
    let list_03206 = document.getElementById("list_03206");
    function togg03206() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03206-01').classList.remove('visible')
        document.querySelector('#polar-chart_03206-01').classList.remove('visible')
        document.querySelector('#polar-chart_03206-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03206').classList.remove('visible')
        document.querySelector('#f-path-03206').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03206
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03206
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03206
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03206
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03206
    }
    com_03206.onclick = togg03206;
    list_03206.onclick = togg03206;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03207 = data[206];
    /*Récupere les données que je veut de la Commune */
    name_03207 = rows03207.Libellé_géographique;
    Pop_03207 = rows03207.Population_en_2017;
    Pop_017_03207 = rows03207.Pop_017_ans_2017;
    Pop_mediane_vote_03207 = rows03207.Popu_possible_voté;
    nbr_inscrit_03207 = rows03207.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03207').textContent = name_03207; 
    let com_03207 = document.getElementById("f-path-03207");
    let list_03207 = document.getElementById("list_03207");
    function togg03207() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03207-01').classList.remove('visible')
        document.querySelector('#polar-chart_03207-01').classList.remove('visible')
        document.querySelector('#polar-chart_03207-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03207').classList.remove('visible')
        document.querySelector('#f-path-03207').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03207
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03207
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03207
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03207
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03207
    }
    com_03207.onclick = togg03207;
    list_03207.onclick = togg03207;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03208 = data[207];
    
    /*Récupere les données que je veut de la Commune */
    name_03208 = rows03208.Libellé_géographique;
    Pop_03208 = rows03208.Population_en_2017;
    Pop_017_03208 = rows03208.Pop_017_ans_2017;
    Pop_mediane_vote_03208 = rows03208.Popu_possible_voté;
    nbr_inscrit_03208 = rows03208.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03208').textContent = name_03208;
   
    let com_03208 = document.getElementById("f-path-03208");
    let list_03208 = document.getElementById("list_03208");


    function togg03208() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03208-01').classList.remove('visible')
        document.querySelector('#polar-chart_03208-01').classList.remove('visible')
        document.querySelector('#polar-chart_03208-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03208').classList.remove('visible')
        document.querySelector('#f-path-03208').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03208
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03208
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03208
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03208
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03208
    }
    com_03208.onclick = togg03208;
    list_03208.onclick = togg03208;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03209 = data[208];
    
    /*Récupere les données que je veut de la Commune */
    name_03209 = rows03209.Libellé_géographique;
    Pop_03209 = rows03209.Population_en_2017;
    Pop_017_03209 = rows03209.Pop_017_ans_2017;
    Pop_mediane_vote_03209 = rows03209.Popu_possible_voté;
    nbr_inscrit_03209 = rows03209.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03209').textContent = name_03209;

    let com_03209 = document.getElementById("f-path-03209");
    let list_03209 = document.getElementById("list_03209");


    function togg03209() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03209-01').classList.remove('visible')
        document.querySelector('#polar-chart_03209-01').classList.remove('visible')
        document.querySelector('#polar-chart_03209-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03209').classList.remove('visible')
        document.querySelector('#f-path-03209').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03209
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03209
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03209
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03209
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03209
    }
    com_03209.onclick = togg03209;
    list_03209.onclick = togg03209;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03210 = data[209];
 
    /*Récupere les données que je veut de la Commune */
    name_03210 = rows03210.Libellé_géographique;
    Pop_03210 = rows03210.Population_en_2017;
    Pop_017_03210 = rows03210.Pop_017_ans_2017;
    Pop_mediane_vote_03210 = rows03210.Popu_possible_voté;
    nbr_inscrit_03210 = rows03210.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03210').textContent = name_03210;

    let com_03210 = document.getElementById("f-path-03210");
    let list_03210 = document.getElementById("list_03210");


    function togg03210() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03210-01').classList.remove('visible')
        document.querySelector('#polar-chart_03210-01').classList.remove('visible')
        document.querySelector('#polar-chart_03210-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03210').classList.remove('visible')
        document.querySelector('#f-path-03210').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03210
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03210
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03210
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03210
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03210
    }
    com_03210.onclick = togg03210;
    list_03210.onclick = togg03210;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03211 = data[210];

    /*Récupere les données que je veut de la Commune */
    name_03211 = rows03211.Libellé_géographique;
    Pop_03211 = rows03211.Population_en_2017;
    Pop_017_03211 = rows03211.Pop_017_ans_2017;
    Pop_mediane_vote_03211 = rows03211.Popu_possible_voté;
    nbr_inscrit_03211 = rows03211.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03211').textContent = name_03211;
   
    let com_03211 = document.getElementById("f-path-03211");
    let list_03211 = document.getElementById("list_03211");


    function togg03211() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03211-01').classList.remove('visible')
        document.querySelector('#polar-chart_03211-01').classList.remove('visible')
        document.querySelector('#polar-chart_03211-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03211').classList.remove('visible')
        document.querySelector('#f-path-03211').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03211
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03211
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03211
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03211
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03211
    }
    com_03211.onclick = togg03211;
    list_03211.onclick = togg03211;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03212 = data[211];

    /*Récupere les données que je veut de la Commune */
    name_03212 = rows03212.Libellé_géographique;
    Pop_03212 = rows03212.Population_en_2017;
    Pop_017_03212 = rows03212.Pop_017_ans_2017;
    Pop_mediane_vote_03212 = rows03212.Popu_possible_voté;
    nbr_inscrit_03212 = rows03212.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03212').textContent = name_03212;
   
    let com_03212 = document.getElementById("f-path-03212");
    let list_03212 = document.getElementById("list_03212");


    function togg03212() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03212-01').classList.remove('visible')
        document.querySelector('#polar-chart_03212-01').classList.remove('visible')
        document.querySelector('#polar-chart_03212-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03212').classList.remove('visible')
        document.querySelector('#f-path-03212').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03212
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03212
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03212
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03212
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03212
    }
    com_03212.onclick = togg03212;
    list_03212.onclick = togg03212;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03213 = data[212];

    /*Récupere les données que je veut de la Commune */
    name_03213 = rows03213.Libellé_géographique;
    Pop_03213 = rows03213.Population_en_2017;
    Pop_017_03213 = rows03213.Pop_017_ans_2017;
    Pop_mediane_vote_03213 = rows03213.Popu_possible_voté;
    nbr_inscrit_03213 = rows03213.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03213').textContent = name_03213;
   
    let com_03213 = document.getElementById("f-path-03213");
    let list_03213 = document.getElementById("list_03213");


    function togg03213() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03213-01').classList.remove('visible')
        document.querySelector('#polar-chart_03213-01').classList.remove('visible')
        document.querySelector('#polar-chart_03213-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03213').classList.remove('visible')
        document.querySelector('#f-path-03213').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03213
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03213
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03213
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03213
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03213
    }
    com_03213.onclick = togg03213;
    list_03213.onclick = togg03213;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03214 = data[213];

    /*Récupere les données que je veut de la Commune */
    name_03214 = rows03214.Libellé_géographique;
    Pop_03214 = rows03214.Population_en_2017;
    Pop_017_03214 = rows03214.Pop_017_ans_2017;
    Pop_mediane_vote_03214 = rows03214.Popu_possible_voté;
    nbr_inscrit_03214 = rows03214.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03214').textContent = name_03214;
   
    let com_03214 = document.getElementById("f-path-03214");
    let list_03214 = document.getElementById("list_03214");


    function togg03214() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03214-01').classList.remove('visible')
        document.querySelector('#polar-chart_03214-01').classList.remove('visible')
        document.querySelector('#polar-chart_03214-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03214').classList.remove('visible')
        document.querySelector('#f-path-03214').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03214
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03214
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03214
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03214
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03214
    }
    com_03214.onclick = togg03214;
    list_03214.onclick = togg03214;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03215 = data[214];

    /*Récupere les données que je veut de la Commune */
    name_03215 = rows03215.Libellé_géographique;
    Pop_03215 = rows03215.Population_en_2017;
    Pop_017_03215 = rows03215.Pop_017_ans_2017;
    Pop_mediane_vote_03215 = rows03215.Popu_possible_voté;
    nbr_inscrit_03215 = rows03215.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03215').textContent = name_03215;
   
    let com_03215 = document.getElementById("f-path-03215");
    let list_03215 = document.getElementById("list_03215");


    function togg03215() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03215-01').classList.remove('visible')
        document.querySelector('#polar-chart_03215-01').classList.remove('visible')
        document.querySelector('#polar-chart_03215-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03215').classList.remove('visible')
        document.querySelector('#f-path-03215').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03215
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03215
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03215
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03215
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03215
    }
    com_03215.onclick = togg03215;
    list_03215.onclick = togg03215;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03216 = data[215];

    /*Récupere les données que je veut de la Commune */
    name_03216 = rows03216.Libellé_géographique;
    Pop_03216 = rows03216.Population_en_2017;
    Pop_017_03216 = rows03216.Pop_017_ans_2017;
    Pop_mediane_vote_03216 = rows03216.Popu_possible_voté;
    nbr_inscrit_03216 = rows03216.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03216').textContent = name_03216;
   
    let com_03216 = document.getElementById("f-path-03216");
    let list_03216 = document.getElementById("list_03216");


    function togg03216() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03216-01').classList.remove('visible')
        document.querySelector('#polar-chart_03216-01').classList.remove('visible')
        document.querySelector('#polar-chart_03216-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03216').classList.remove('visible')
        document.querySelector('#f-path-03216').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03216
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03216
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03216
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03216
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03216
    }
    com_03216.onclick = togg03216;
    list_03216.onclick = togg03216;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03217 = data[216];

    /*Récupere les données que je veut de la Commune */
    name_03217 = rows03217.Libellé_géographique;
    Pop_03217 = rows03217.Population_en_2017;
    Pop_017_03217 = rows03217.Pop_017_ans_2017;
    Pop_mediane_vote_03217 = rows03217.Popu_possible_voté;
    nbr_inscrit_03217 = rows03217.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03217').textContent = name_03217;
   
    let com_03217 = document.getElementById("f-path-03217");
    let list_03217 = document.getElementById("list_03217");


    function togg03217() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03217-01').classList.remove('visible')
        document.querySelector('#polar-chart_03217-01').classList.remove('visible')
        document.querySelector('#polar-chart_03217-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03217').classList.remove('visible')
        document.querySelector('#f-path-03217').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03217
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03217
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03217
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03217
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03217
    }
    com_03217.onclick = togg03217;
    list_03217.onclick = togg03217;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03218 = data[217];

    /*Récupere les données que je veut de la Commune */
    name_03218 = rows03218.Libellé_géographique;
    Pop_03218 = rows03218.Population_en_2017;
    Pop_017_03218 = rows03218.Pop_017_ans_2017;
    Pop_mediane_vote_03218 = rows03217.Popu_possible_voté;
    nbr_inscrit_03218 = rows03218.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03218').textContent = name_03218;
   
    let com_03218 = document.getElementById("f-path-03218");
    let list_03218 = document.getElementById("list_03218");


    function togg03218() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03218-01').classList.remove('visible')
        document.querySelector('#polar-chart_03218-01').classList.remove('visible')
        document.querySelector('#polar-chart_03218-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03218').classList.remove('visible')
        document.querySelector('#f-path-03218').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03218
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03218
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03218
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03218
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03218
    }
    com_03218.onclick = togg03218;
    list_03218.onclick = togg03218;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03219 = data[218];

    /*Récupere les données que je veut de la Commune */
    name_03219 = rows03219.Libellé_géographique;
    Pop_03219 = rows03219.Population_en_2017;
    Pop_017_03219 = rows03219.Pop_017_ans_2017;
    Pop_mediane_vote_03219 = rows03219.Popu_possible_voté;
    nbr_inscrit_03219 = rows03219.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03219').textContent = name_03219;
   
    let com_03219 = document.getElementById("f-path-03219");
    let list_03219 = document.getElementById("list_03219");


    function togg03219() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03219-01').classList.remove('visible')
        document.querySelector('#polar-chart_03219-01').classList.remove('visible')
        document.querySelector('#polar-chart_03219-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03219').classList.remove('visible')
        document.querySelector('#f-path-03219').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03219
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03219
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03219
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03219
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03219
    }
    com_03219.onclick = togg03219;
    list_03219.onclick = togg03219;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03220 = data[219];

    /*Récupere les données que je veut de la Commune */
    name_03220 = rows03220.Libellé_géographique;
    Pop_03220 = rows03220.Population_en_2017;
    Pop_017_03220 = rows03220.Pop_017_ans_2017;
    Pop_mediane_vote_03220 = rows03220.Popu_possible_voté;
    nbr_inscrit_03220 = rows03220.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03220').textContent = name_03220;
   
    let com_03220 = document.getElementById("f-path-03220");
    let list_03220 = document.getElementById("list_03220");


    function togg03220() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03220-01').classList.remove('visible')
        document.querySelector('#polar-chart_03220-01').classList.remove('visible')
        document.querySelector('#polar-chart_03220-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03220').classList.remove('visible')
        document.querySelector('#f-path-03220').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03220
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03220
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03220
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03220
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03220
    }
    com_03220.onclick = togg03220;
    list_03220.onclick = togg03220;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03221 = data[220];

    /*Récupere les données que je veut de la Commune */
    name_03221 = rows03221.Libellé_géographique;
    Pop_03221 = rows03221.Population_en_2017;
    Pop_017_03221 = rows03221.Pop_017_ans_2017;
    Pop_mediane_vote_03221 = rows03221.Popu_possible_voté;
    nbr_inscrit_03221 = rows03221.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03221').textContent = name_03221;
   
    let com_03221 = document.getElementById("f-path-03221");
    let list_03221 = document.getElementById("list_03221");


    function togg03221() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03221-01').classList.remove('visible')
        document.querySelector('#polar-chart_03221-01').classList.remove('visible')
        document.querySelector('#polar-chart_03221-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03221').classList.remove('visible')
        document.querySelector('#f-path-03221').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03221
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03221
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03221
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03221
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03221
    }
    com_03221.onclick = togg03221;
    list_03221.onclick = togg03221;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03222 = data[221];

    /*Récupere les données que je veut de la Commune */
    name_03222 = rows03222.Libellé_géographique;
    Pop_03222 = rows03222.Population_en_2017;
    Pop_017_03222 = rows03222.Pop_017_ans_2017;
    Pop_mediane_vote_03222 = rows03222.Popu_possible_voté;
    nbr_inscrit_03222 = rows03222.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03222').textContent = name_03222;
   
    let com_03222 = document.getElementById("f-path-03222");
    let list_03222 = document.getElementById("list_03222");


    function togg03222() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03222-01').classList.remove('visible')
        document.querySelector('#polar-chart_03222-01').classList.remove('visible')
        document.querySelector('#polar-chart_03222-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03222').classList.remove('visible')
        document.querySelector('#f-path-03222').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03222
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03222
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03222
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03222
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03222
    }
    com_03222.onclick = togg03222;
    list_03222.onclick = togg03222;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03223 = data[222];

    /*Récupere les données que je veut de la Commune */
    name_03223 = rows03223.Libellé_géographique;
    Pop_03223 = rows03223.Population_en_2017;
    Pop_017_03223 = rows03223.Pop_017_ans_2017;
    Pop_mediane_vote_03223 = rows03223.Popu_possible_voté;
    nbr_inscrit_03223 = rows03223.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03223').textContent = name_03223;
   
    let com_03223 = document.getElementById("f-path-03223");
    let list_03223 = document.getElementById("list_03223");


    function togg03223() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03223-01').classList.remove('visible')
        document.querySelector('#polar-chart_03223-01').classList.remove('visible')
        document.querySelector('#polar-chart_03223-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03223').classList.remove('visible')
        document.querySelector('#f-path-03223').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03223
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03223
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03223
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03223
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03223
    }
    com_03223.onclick = togg03223;
    list_03223.onclick = togg03223;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03224 = data[223];

    /*Récupere les données que je veut de la Commune */
    name_03224 = rows03224.Libellé_géographique;
    Pop_03224 = rows03224.Population_en_2017;
    Pop_017_03224 = rows03224.Pop_017_ans_2017;
    Pop_mediane_vote_03224 = rows03224.Popu_possible_voté;
    nbr_inscrit_03224 = rows03224.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03224').textContent = name_03224;
   
    let com_03224 = document.getElementById("f-path-03224");
    let list_03224 = document.getElementById("list_03224");


    function togg03224() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03224-01').classList.remove('visible')
        document.querySelector('#polar-chart_03224-01').classList.remove('visible')
        document.querySelector('#polar-chart_03224-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03224').classList.remove('visible')
        document.querySelector('#f-path-03224').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03224
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03224
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03224
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03224
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03224
    }
    com_03224.onclick = togg03224;
    list_03224.onclick = togg03224;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03225 = data[224];

    /*Récupere les données que je veut de la Commune */
    name_03225 = rows03225.Libellé_géographique;
    Pop_03225 = rows03225.Population_en_2017;
    Pop_017_03225 = rows03225.Pop_017_ans_2017;
    Pop_mediane_vote_03225 = rows03225.Popu_possible_voté;
    nbr_inscrit_03225 = rows03225.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03225').textContent = name_03225;
   
    let com_03225 = document.getElementById("f-path-03225");
    let list_03225 = document.getElementById("list_03225");


    function togg03225() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03225-01').classList.remove('visible')
        document.querySelector('#polar-chart_03225-01').classList.remove('visible')
        document.querySelector('#polar-chart_03225-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03225').classList.remove('visible')
        document.querySelector('#f-path-03225').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03225
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03225
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03225
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03225
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03225
    }
    com_03225.onclick = togg03225;
    list_03225.onclick = togg03225;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03226 = data[225];

    /*Récupere les données que je veut de la Commune */
    name_03226 = rows03226.Libellé_géographique;
    Pop_03226 = rows03226.Population_en_2017;
    Pop_017_03226 = rows03226.Pop_017_ans_2017;
    Pop_mediane_vote_03226 = rows03226.Popu_possible_voté;
    nbr_inscrit_03226 = rows03226.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03226').textContent = name_03226;
   
    let com_03226 = document.getElementById("f-path-03226");
    let list_03226 = document.getElementById("list_03226");


    function togg03226() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03226-01').classList.remove('visible')
        document.querySelector('#polar-chart_03226-01').classList.remove('visible')
        document.querySelector('#polar-chart_03226-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03226').classList.remove('visible')
        document.querySelector('#f-path-03226').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03226
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03226
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03226
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03226
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03226
    }
    com_03226.onclick = togg03226;
    list_03226.onclick = togg03226;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03227 = data[226];

    /*Récupere les données que je veut de la Commune */
    name_03227 = rows03227.Libellé_géographique;
    Pop_03227 = rows03227.Population_en_2017;
    Pop_017_03227 = rows03227.Pop_017_ans_2017;
    Pop_mediane_vote_03227 = rows03227.Popu_possible_voté;
    nbr_inscrit_03227 = rows03227.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03227').textContent = name_03227;
   
    let com_03227 = document.getElementById("f-path-03227");
    let list_03227 = document.getElementById("list_03227");


    function togg03227() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03227-01').classList.remove('visible')
        document.querySelector('#polar-chart_03227-01').classList.remove('visible')
        document.querySelector('#polar-chart_03227-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03227').classList.remove('visible')
        document.querySelector('#f-path-03227').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03227
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03227
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03227
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03227
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03227
    }
    com_03227.onclick = togg03227;
    list_03227.onclick = togg03227;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03228 = data[227];

    /*Récupere les données que je veut de la Commune */
    name_03228 = rows03228.Libellé_géographique;
    Pop_03228 = rows03228.Population_en_2017;
    Pop_017_03228 = rows03228.Pop_017_ans_2017;
    Pop_mediane_vote_03228 = rows03228.Popu_possible_voté;
    nbr_inscrit_03228 = rows03228.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03228').textContent = name_03228;
   
    let com_03228 = document.getElementById("f-path-03228");
    let list_03228 = document.getElementById("list_03228");


    function togg03228() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03228-01').classList.remove('visible')
        document.querySelector('#polar-chart_03228-01').classList.remove('visible')
        document.querySelector('#polar-chart_03228-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03228').classList.remove('visible')
        document.querySelector('#f-path-03228').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03228
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03228
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03228
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03228
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03228
    }
    com_03228.onclick = togg03228;
    list_03228.onclick = togg03228;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03229 = data[228];

    /*Récupere les données que je veut de la Commune */
    name_03229 = rows03229.Libellé_géographique;
    Pop_03229 = rows03229.Population_en_2017;
    Pop_017_03229 = rows03229.Pop_017_ans_2017;
    Pop_mediane_vote_03229 = rows03229.Popu_possible_voté;
    nbr_inscrit_03229 = rows03229.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03229').textContent = name_03229;
   
    let com_03229 = document.getElementById("f-path-03229");
    let list_03229 = document.getElementById("list_03229");


    function togg03229() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03229-01').classList.remove('visible')
        document.querySelector('#polar-chart_03229-01').classList.remove('visible')
        document.querySelector('#polar-chart_03229-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03229').classList.remove('visible')
        document.querySelector('#f-path-03229').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03229
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03229
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03229
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03229
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03229
    }
    com_03229.onclick = togg03229;
    list_03229.onclick = togg03229;
     /************************************************************************************* */
    /************************************************************************************* */
    const rows03230 = data[229];

    /*Récupere les données que je veut de la Commune */
    name_03230 = rows03230.Libellé_géographique;
    Pop_03230 = rows03230.Population_en_2017;
    Pop_017_03230 = rows03230.Pop_017_ans_2017;
    Pop_mediane_vote_03230 = rows03230.Popu_possible_voté;
    nbr_inscrit_03230 = rows03230.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03230').textContent = name_03230;
   
    let com_03230 = document.getElementById("f-path-03230");
    let list_03230 = document.getElementById("list_03230");


    function togg03230() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03230-01').classList.remove('visible')
        document.querySelector('#polar-chart_03230-01').classList.remove('visible')
        document.querySelector('#polar-chart_03230-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03230').classList.remove('visible')
        document.querySelector('#f-path-03230').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03230
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03230
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03230
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03230
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03230
    }
    com_03230.onclick = togg03230;
    list_03230.onclick = togg03230;
     /************************************************************************************* */
    /************************************************************************************* */
    const rows03231 = data[230];

    /*Récupere les données que je veut de la Commune */
    name_03231 = rows03231.Libellé_géographique;
    Pop_03231 = rows03231.Population_en_2017;
    Pop_017_03231 = rows03231.Pop_017_ans_2017;
    Pop_mediane_vote_03231 = rows03231.Popu_possible_voté;
    nbr_inscrit_03231 = rows03231.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03231').textContent = name_03231;
   
    let com_03231 = document.getElementById("f-path-03231");
    let list_03231 = document.getElementById("list_03231");


    function togg03231() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03231-01').classList.remove('visible')
        document.querySelector('#polar-chart_03231-01').classList.remove('visible')
        document.querySelector('#polar-chart_03231-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03231').classList.remove('visible')
        document.querySelector('#f-path-03231').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03231
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03231
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03231
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03231
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03231
    }
    com_03231.onclick = togg03231;
    list_03231.onclick = togg03231;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03232 = data[231];

    /*Récupere les données que je veut de la Commune */
    name_03232 = rows03232.Libellé_géographique;
    Pop_03232 = rows03232.Population_en_2017;
    Pop_017_03232 = rows03232.Pop_017_ans_2017;
    Pop_mediane_vote_03232 = rows03232.Popu_possible_voté;
    nbr_inscrit_03232 = rows03232.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03232').textContent = name_03232;
   
    let com_03232 = document.getElementById("f-path-03232");
    let list_03232 = document.getElementById("list_03232");


    function togg03232() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03232-01').classList.remove('visible')
        document.querySelector('#polar-chart_03232-01').classList.remove('visible')
        document.querySelector('#polar-chart_03232-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03232').classList.remove('visible')
        document.querySelector('#f-path-03232').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03232
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03232
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03232
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03232
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03232
    }
    com_03232.onclick = togg03232;
    list_03232.onclick = togg03232;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03233 = data[232];

    /*Récupere les données que je veut de la Commune */
    name_03233 = rows03233.Libellé_géographique;
    Pop_03233 = rows03233.Population_en_2017;
    Pop_017_03233 = rows03233.Pop_017_ans_2017;
    Pop_mediane_vote_03233 = rows03233.Popu_possible_voté;
    nbr_inscrit_03233 = rows03233.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03233').textContent = name_03233;
   
    let com_03233 = document.getElementById("f-path-03233");
    let list_03233 = document.getElementById("list_03233");


    function togg03233() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03233-01').classList.remove('visible')
        document.querySelector('#polar-chart_03233-01').classList.remove('visible')
        document.querySelector('#polar-chart_03233-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03233').classList.remove('visible')
        document.querySelector('#f-path-03233').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03233
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03233
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03233
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03233
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03233
    }
    com_03233.onclick = togg03233;
    list_03233.onclick = togg03233;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03234 = data[233];

    /*Récupere les données que je veut de la Commune */
    name_03234 = rows03234.Libellé_géographique;
    Pop_03234 = rows03234.Population_en_2017;
    Pop_017_03234 = rows03234.Pop_017_ans_2017;
    Pop_mediane_vote_03234 = rows03234.Popu_possible_voté;
    nbr_inscrit_03234 = rows03234.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03234').textContent = name_03234;
   
    let com_03234 = document.getElementById("f-path-03234");
    let list_03234 = document.getElementById("list_03234");


    function togg03234() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03234-01').classList.remove('visible')
        document.querySelector('#polar-chart_03234-01').classList.remove('visible')
        document.querySelector('#polar-chart_03234-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03234').classList.remove('visible')
        document.querySelector('#f-path-03234').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03234
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03234
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03234
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03234
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03234
    }
    com_03234.onclick = togg03234;
    list_03234.onclick = togg03234;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03235 = data[234];

    /*Récupere les données que je veut de la Commune */
    name_03235 = rows03235.Libellé_géographique;
    Pop_03235 = rows03235.Population_en_2017;
    Pop_017_03235 = rows03235.Pop_017_ans_2017;
    Pop_mediane_vote_03235 = rows03235.Popu_possible_voté;
    nbr_inscrit_03235 = rows03235.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03235').textContent = name_03235;
   
    let com_03235 = document.getElementById("f-path-03235");
    let list_03235 = document.getElementById("list_03235");


    function togg03235() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03235-01').classList.remove('visible')
        document.querySelector('#polar-chart_03235-01').classList.remove('visible')
        document.querySelector('#polar-chart_03235-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03235').classList.remove('visible')
        document.querySelector('#f-path-03235').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03235
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03235
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03235
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03235
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03235
    }
    com_03235.onclick = togg03235;
    list_03235.onclick = togg03235;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03236 = data[235];

    /*Récupere les données que je veut de la Commune */
    name_03236 = rows03236.Libellé_géographique;
    Pop_03236 = rows03236.Population_en_2017;
    Pop_017_03236 = rows03236.Pop_017_ans_2017;
    Pop_mediane_vote_03236 = rows03236.Popu_possible_voté;
    nbr_inscrit_03236 = rows03236.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03236').textContent = name_03236;
   
    let com_03236 = document.getElementById("f-path-03236");
    let list_03236 = document.getElementById("list_03236");


    function togg03236() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03236-01').classList.remove('visible')
        document.querySelector('#polar-chart_03236-01').classList.remove('visible')
        document.querySelector('#polar-chart_03236-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03236').classList.remove('visible')
        document.querySelector('#f-path-03236').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03236
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03236
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03236
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03236
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03236
    }
    com_03236.onclick = togg03236;
    list_03236.onclick = togg03236;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03237 = data[236];

    /*Récupere les données que je veut de la Commune */
    name_03237 = rows03237.Libellé_géographique;
    Pop_03237 = rows03237.Population_en_2017;
    Pop_017_03237 = rows03237.Pop_017_ans_2017;
    Pop_mediane_vote_03237 = rows03237.Popu_possible_voté;
    nbr_inscrit_03237 = rows03237.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03237').textContent = name_03237;
   
    let com_03237 = document.getElementById("f-path-03237");
    let list_03237 = document.getElementById("list_03237");


    function togg03237() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03237-01').classList.remove('visible')
        document.querySelector('#polar-chart_03237-01').classList.remove('visible')
        document.querySelector('#polar-chart_03267-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03237').classList.remove('visible')
        document.querySelector('#f-path-03237').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03237
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03237
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03237
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03237
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03237
    }
    com_03237.onclick = togg03237;
    list_03237.onclick = togg03237;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03238 = data[237];

    /*Récupere les données que je veut de la Commune */
    name_03238 = rows03238.Libellé_géographique;
    Pop_03238 = rows03238.Population_en_2017;
    Pop_017_03238 = rows03238.Pop_017_ans_2017;
    Pop_mediane_vote_03238 = rows03238.Popu_possible_voté;
    nbr_inscrit_03238 = rows03238.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03238').textContent = name_03238;
   
    let com_03238 = document.getElementById("f-path-03238");
    let list_03238 = document.getElementById("list_03238");


    function togg03238() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03238-01').classList.remove('visible')
        document.querySelector('#polar-chart_03238-01').classList.remove('visible')
        document.querySelector('#polar-chart_03268-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03238').classList.remove('visible')
        document.querySelector('#f-path-03238').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03238
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03238
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03238
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03238
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03238
    }
    com_03238.onclick = togg03238;
    list_03238.onclick = togg03238;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03239 = data[238];

    /*Récupere les données que je veut de la Commune */
    name_03239 = rows03239.Libellé_géographique;
    Pop_03239 = rows03239.Population_en_2017;
    Pop_017_03239 = rows03239.Pop_017_ans_2017;
    Pop_mediane_vote_03239 = rows03239.Popu_possible_voté;
    nbr_inscrit_03239 = rows03239.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03239').textContent = name_03239;
   
    let com_03239 = document.getElementById("f-path-03239");
    let list_03239 = document.getElementById("list_03239");


    function togg03239() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03239-01').classList.remove('visible')
        document.querySelector('#polar-chart_03239-01').classList.remove('visible')
        document.querySelector('#polar-chart_03269-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03239').classList.remove('visible')
        document.querySelector('#f-path-03239').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03239
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03239
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03239
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03239
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03239
    }
    com_03239.onclick = togg03239;
    list_03239.onclick = togg03239;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03240 = data[239];

    /*Récupere les données que je veut de la Commune */
    name_03240 = rows03240.Libellé_géographique;
    Pop_03240 = rows03240.Population_en_2017;
    Pop_017_03240 = rows03240.Pop_017_ans_2017;
    Pop_mediane_vote_03240 = rows03240.Popu_possible_voté;
    nbr_inscrit_03240 = rows03240.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03240').textContent = name_03240;
   
    let com_03240 = document.getElementById("f-path-03240");
    let list_03240 = document.getElementById("list_03240");


    function togg03240() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03240-01').classList.remove('visible')
        document.querySelector('#polar-chart_03240-01').classList.remove('visible')
        document.querySelector('#polar-chart_03240-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03240').classList.remove('visible')
        document.querySelector('#f-path-03240').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03240
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03240
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03240
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03240
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03240
    }
    com_03240.onclick = togg03240;
    list_03240.onclick = togg03240;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03241 = data[240];

    /*Récupere les données que je veut de la Commune */
    name_03241 = rows03241.Libellé_géographique;
    Pop_03241 = rows03241.Population_en_2017;
    Pop_017_03241 = rows03241.Pop_017_ans_2017;
    Pop_mediane_vote_03241 = rows03241.Popu_possible_voté;
    nbr_inscrit_03241 = rows03241.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03241').textContent = name_03241;
   
    let com_03241 = document.getElementById("f-path-03241");
    let list_03241 = document.getElementById("list_03241");


    function togg03241() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03241-01').classList.remove('visible')
        document.querySelector('#polar-chart_03241-01').classList.remove('visible')
        document.querySelector('#polar-chart_03241-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03241').classList.remove('visible')
        document.querySelector('#f-path-03241').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03241
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03241
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03241
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03241
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03241
    }
    com_03241.onclick = togg03241;
    list_03241.onclick = togg03241;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03242 = data[241];

    /*Récupere les données que je veut de la Commune */
    name_03242 = rows03242.Libellé_géographique;
    Pop_03242 = rows03242.Population_en_2017;
    Pop_017_03242 = rows03242.Pop_017_ans_2017;
    Pop_mediane_vote_03242 = rows03242.Popu_possible_voté;
    nbr_inscrit_03242 = rows03242.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03242').textContent = name_03242;
   
    let com_03242 = document.getElementById("f-path-03242");
    let list_03242 = document.getElementById("list_03242");


    function togg03242() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03242-01').classList.remove('visible')
        document.querySelector('#polar-chart_03242-01').classList.remove('visible')
        document.querySelector('#polar-chart_03242-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03242').classList.remove('visible')
        document.querySelector('#f-path-03242').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03242
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03242
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03242
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03242
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03242
    }
    com_03242.onclick = togg03242;
    list_03242.onclick = togg03242;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03243 = data[242];

    /*Récupere les données que je veut de la Commune */
    name_03243 = rows03243.Libellé_géographique;
    Pop_03243 = rows03243.Population_en_2017;
    Pop_017_03243 = rows03243.Pop_017_ans_2017;
    Pop_mediane_vote_03243 = rows03243.Popu_possible_voté;
    nbr_inscrit_03243 = rows03243.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03243').textContent = name_03243;
   
    let com_03243 = document.getElementById("f-path-03243");
    let list_03243 = document.getElementById("list_03243");


    function togg03243() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03243-01').classList.remove('visible')
        document.querySelector('#polar-chart_03243-01').classList.remove('visible')
        document.querySelector('#polar-chart_03243-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03243').classList.remove('visible')
        document.querySelector('#f-path-03243').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03243
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03243
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03243
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03243
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03243
    }
    com_03243.onclick = togg03243;
    list_03243.onclick = togg03243;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03244 = data[243];

    /*Récupere les données que je veut de la Commune */
    name_03244 = rows03244.Libellé_géographique;
    Pop_03244 = rows03244.Population_en_2017;
    Pop_017_03244 = rows03244.Pop_017_ans_2017;
    Pop_mediane_vote_03244 = rows03244.Popu_possible_voté;
    nbr_inscrit_03244 = rows03244.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03244').textContent = name_03244;
   
    let com_03244 = document.getElementById("f-path-03244");
    let list_03244 = document.getElementById("list_03244");


    function togg03244() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03244-01').classList.remove('visible')
        document.querySelector('#polar-chart_03244-01').classList.remove('visible')
        document.querySelector('#polar-chart_03244-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03244').classList.remove('visible')
        document.querySelector('#f-path-03244').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03244
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03244
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03244
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03244
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03244
    }
    com_03244.onclick = togg03244;
    list_03244.onclick = togg03244;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03245 = data[244];

    /*Récupere les données que je veut de la Commune */
    name_03245 = rows03245.Libellé_géographique;
    Pop_03245 = rows03245.Population_en_2017;
    Pop_017_03245 = rows03245.Pop_017_ans_2017;
    Pop_mediane_vote_03245 = rows03245.Popu_possible_voté;
    nbr_inscrit_03245 = rows03245.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03245').textContent = name_03245;
   
    let com_03245 = document.getElementById("f-path-03245");
    let list_03245 = document.getElementById("list_03245");


    function togg03245() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03245-01').classList.remove('visible')
        document.querySelector('#polar-chart_03245-01').classList.remove('visible')
        document.querySelector('#polar-chart_03245-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03245').classList.remove('visible')
        document.querySelector('#f-path-03245').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03245
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03245
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03245
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03245
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03245
    }
    com_03245.onclick = togg03245;
    list_03245.onclick = togg03245;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03246 = data[245];

    /*Récupere les données que je veut de la Commune */
    name_03246 = rows03246.Libellé_géographique;
    Pop_03246 = rows03246.Population_en_2017;
    Pop_017_03246 = rows03246.Pop_017_ans_2017;
    Pop_mediane_vote_03246 = rows03246.Popu_possible_voté;
    nbr_inscrit_03246 = rows03246.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03246').textContent = name_03246;
   
    let com_03246 = document.getElementById("f-path-03246");
    let list_03246 = document.getElementById("list_03246");


    function togg03246() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03246-01').classList.remove('visible')
        document.querySelector('#polar-chart_03246-01').classList.remove('visible')
        document.querySelector('#polar-chart_03246-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03246').classList.remove('visible')
        document.querySelector('#f-path-03246').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03246
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03246
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03246
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03246
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03246
    }
    com_03246.onclick = togg03246;
    list_03246.onclick = togg03246;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03247 = data[246];

    /*Récupere les données que je veut de la Commune */
    name_03247 = rows03247.Libellé_géographique;
    Pop_03247 = rows03247.Population_en_2017;
    Pop_017_03247 = rows03247.Pop_017_ans_2017;
    Pop_mediane_vote_03247 = rows03247.Popu_possible_voté;
    nbr_inscrit_03247 = rows03247.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03247').textContent = name_03247;
   
    let com_03247 = document.getElementById("f-path-03247");
    let list_03247 = document.getElementById("list_03247");


    function togg03247() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03247-01').classList.remove('visible')
        document.querySelector('#polar-chart_03247-01').classList.remove('visible')
        document.querySelector('#polar-chart_03247-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03247').classList.remove('visible')
        document.querySelector('#f-path-03247').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03247
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03247
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03247
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03247
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03247
    }
    com_03247.onclick = togg03247;
    list_03247.onclick = togg03247;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03248 = data[247];

    /*Récupere les données que je veut de la Commune */
    name_03248 = rows03248.Libellé_géographique;
    Pop_03248 = rows03248.Population_en_2017;
    Pop_017_03248 = rows03248.Pop_017_ans_2017;
    Pop_mediane_vote_03248 = rows03248.Popu_possible_voté;
    nbr_inscrit_03248 = rows03248.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03248').textContent = name_03248;
   
    let com_03248 = document.getElementById("f-path-03248");
    let list_03248 = document.getElementById("list_03248");


    function togg03248() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03248-01').classList.remove('visible')
        document.querySelector('#polar-chart_03248-01').classList.remove('visible')
        document.querySelector('#polar-chart_03248-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03248').classList.remove('visible')
        document.querySelector('#f-path-03248').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03248
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03248
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03248
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03248
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03248
    }
    com_03248.onclick = togg03248;
    list_03248.onclick = togg03248;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03249 = data[248];

    /*Récupere les données que je veut de la Commune */
    name_03249 = rows03249.Libellé_géographique;
    Pop_03249 = rows03249.Population_en_2017;
    Pop_017_03249 = rows03249.Pop_017_ans_2017;
    Pop_mediane_vote_03249 = rows03249.Popu_possible_voté;
    nbr_inscrit_03249 = rows03249.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03249').textContent = name_03249;
   
    let com_03249 = document.getElementById("f-path-03249");
    let list_03249 = document.getElementById("list_03249");


    function togg03249() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03249-01').classList.remove('visible')
        document.querySelector('#polar-chart_03249-01').classList.remove('visible')
        document.querySelector('#polar-chart_03249-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03249').classList.remove('visible')
        document.querySelector('#f-path-03249').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03249
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03249
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03249
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03249
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03249
    }
    com_03249.onclick = togg03249;
    list_03249.onclick = togg03249;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03250 = data[249];

    /*Récupere les données que je veut de la Commune */
    name_03250 = rows03250.Libellé_géographique;
    Pop_03250 = rows03250.Population_en_2017;
    Pop_017_03250 = rows03250.Pop_017_ans_2017;
    Pop_mediane_vote_03250 = rows03250.Popu_possible_voté;
    nbr_inscrit_03250 = rows03250.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03250').textContent = name_03250;
   
    let com_03250 = document.getElementById("f-path-03250");
    let list_03250 = document.getElementById("list_03250");


    function togg03250() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03250-01').classList.remove('visible')
        document.querySelector('#polar-chart_03250-01').classList.remove('visible')
        document.querySelector('#polar-chart_03250-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03250').classList.remove('visible')
        document.querySelector('#f-path-03250').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03250
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03250
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03250
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03250
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03250
    }
    com_03250.onclick = togg03250;
    list_03250.onclick = togg03250;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03251 = data[250];

    /*Récupere les données que je veut de la Commune */
    name_03251 = rows03251.Libellé_géographique;
    Pop_03251 = rows03251.Population_en_2017;
    Pop_017_03251 = rows03251.Pop_017_ans_2017;
    Pop_mediane_vote_03251 = rows03251.Popu_possible_voté;
    nbr_inscrit_03251 = rows03251.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03251').textContent = name_03251;
   
    let com_03251 = document.getElementById("f-path-03251");
    let list_03251 = document.getElementById("list_03251");


    function togg03251() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03251-01').classList.remove('visible')
        document.querySelector('#polar-chart_03251-01').classList.remove('visible')
        document.querySelector('#polar-chart_03251-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03251').classList.remove('visible')
        document.querySelector('#f-path-03251').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03251
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03251
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03251
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03251
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03251
    }
    com_03251.onclick = togg03251;
    list_03251.onclick = togg03251;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03252 = data[251];

    /*Récupere les données que je veut de la Commune */
    name_03252 = rows03252.Libellé_géographique;
    Pop_03252 = rows03252.Population_en_2017;
    Pop_017_03252 = rows03252.Pop_017_ans_2017;
    Pop_mediane_vote_03252 = rows03252.Popu_possible_voté;
    nbr_inscrit_03252 = rows03252.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03252').textContent = name_03252;
   
    let com_03252 = document.getElementById("f-path-03252");
    let list_03252 = document.getElementById("list_03252");


    function togg03252() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03252-01').classList.remove('visible')
        document.querySelector('#polar-chart_03252-01').classList.remove('visible')
        document.querySelector('#polar-chart_03252-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03252').classList.remove('visible')
        document.querySelector('#f-path-03252').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03252
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03252
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03252
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03252
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03252
    }
    com_03252.onclick = togg03252;
    list_03252.onclick = togg03252;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03253 = data[252];

    /*Récupere les données que je veut de la Commune */
    name_03253 = rows03253.Libellé_géographique;
    Pop_03253 = rows03253.Population_en_2017;
    Pop_017_03253 = rows03253.Pop_017_ans_2017;
    Pop_mediane_vote_03253 = rows03253.Popu_possible_voté;
    nbr_inscrit_03253 = rows03253.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03253').textContent = name_03253;
   
    let com_03253 = document.getElementById("f-path-03253");
    let list_03253 = document.getElementById("list_03253");


    function togg03253() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03253-01').classList.remove('visible')
        document.querySelector('#polar-chart_03253-01').classList.remove('visible')
        document.querySelector('#polar-chart_03253-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03253').classList.remove('visible')
        document.querySelector('#f-path-03253').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03253
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03253
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03253
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03253
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03253
    }
    com_03253.onclick = togg03253;
    list_03253.onclick = togg03253;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03254 = data[253];

    /*Récupere les données que je veut de la Commune */
    name_03254 = rows03254.Libellé_géographique;
    Pop_03254 = rows03254.Population_en_2017;
    Pop_017_03254 = rows03254.Pop_017_ans_2017;
    Pop_mediane_vote_03254 = rows03254.Popu_possible_voté;
    nbr_inscrit_03254 = rows03254.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03254').textContent = name_03254;
   
    let com_03254 = document.getElementById("f-path-03254");
    let list_03254 = document.getElementById("list_03254");


    function togg03254() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03254-01').classList.remove('visible')
        document.querySelector('#polar-chart_03254-01').classList.remove('visible')
        document.querySelector('#polar-chart_03254-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03254').classList.remove('visible')
        document.querySelector('#f-path-03254').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03254
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03254
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03254
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03254
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03254
    }
    com_03254.onclick = togg03254;
    list_03254.onclick = togg03254;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03255 = data[254];

    /*Récupere les données que je veut de la Commune */
    name_03255 = rows03255.Libellé_géographique;
    Pop_03255 = rows03255.Population_en_2017;
    Pop_017_03255 = rows03255.Pop_017_ans_2017;
    Pop_mediane_vote_03255 = rows03255.Popu_possible_voté;
    nbr_inscrit_03255 = rows03255.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03255').textContent = name_03255;
   
    let com_03255 = document.getElementById("f-path-03255");
    let list_03255 = document.getElementById("list_03255");


    function togg03255() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03255-01').classList.remove('visible')
        document.querySelector('#polar-chart_03255-01').classList.remove('visible')
        document.querySelector('#polar-chart_03255-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03255').classList.remove('visible')
        document.querySelector('#f-path-03255').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03255
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03255
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03255
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03255
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03255
    }
    com_03255.onclick = togg03255;
    list_03255.onclick = togg03255;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03256 = data[255];

    /*Récupere les données que je veut de la Commune */
    name_03256 = rows03256.Libellé_géographique;
    Pop_03256 = rows03256.Population_en_2017;
    Pop_017_03256 = rows03256.Pop_017_ans_2017;
    Pop_mediane_vote_03256 = rows03256.Popu_possible_voté;
    nbr_inscrit_03256 = rows03256.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03256').textContent = name_03256;
   
    let com_03256 = document.getElementById("f-path-03256");
    let list_03256 = document.getElementById("list_03256");


    function togg03256() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03256-01').classList.remove('visible')
        document.querySelector('#polar-chart_03256-01').classList.remove('visible')
        document.querySelector('#polar-chart_03256-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03256').classList.remove('visible')
        document.querySelector('#f-path-03256').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03256
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03256
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03256
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03256
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03256
    }
    com_03256.onclick = togg03256;
    list_03256.onclick = togg03256;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03257 = data[256];

    /*Récupere les données que je veut de la Commune */
    name_03257 = rows03257.Libellé_géographique;
    Pop_03257 = rows03257.Population_en_2017;
    Pop_017_03257 = rows03257.Pop_017_ans_2017;
    Pop_mediane_vote_03257 = rows03257.Popu_possible_voté;
    nbr_inscrit_03257 = rows03257.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03257').textContent = name_03257;
   
    let com_03257 = document.getElementById("f-path-03257");
    let list_03257 = document.getElementById("list_03257");


    function togg03257() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03257-01').classList.remove('visible')
        document.querySelector('#polar-chart_03257-01').classList.remove('visible')
        document.querySelector('#polar-chart_03257-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03257').classList.remove('visible')
        document.querySelector('#f-path-03257').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03257
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03257
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03257
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03257
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03257
    }
    com_03257.onclick = togg03257;
    list_03257.onclick = togg03257;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03258 = data[257];

    /*Récupere les données que je veut de la Commune */
    name_03258 = rows03258.Libellé_géographique;
    Pop_03258 = rows03258.Population_en_2017;
    Pop_017_03258 = rows03258.Pop_017_ans_2017;
    Pop_mediane_vote_03258 = rows03258.Popu_possible_voté;
    nbr_inscrit_03258 = rows03258.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03258').textContent = name_03258;
   
    let com_03258 = document.getElementById("f-path-03258");
    let list_03258 = document.getElementById("list_03258");


    function togg03258() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03258-01').classList.remove('visible')
        document.querySelector('#polar-chart_03258-01').classList.remove('visible')
        document.querySelector('#polar-chart_03258-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03258').classList.remove('visible')
        document.querySelector('#f-path-03258').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03258
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03258
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03258
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03258
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03258
    }
    com_03258.onclick = togg03258;
    list_03258.onclick = togg03258;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03259 = data[258];

    /*Récupere les données que je veut de la Commune */
    name_03259 = rows03259.Libellé_géographique;
    Pop_03259 = rows03259.Population_en_2017;
    Pop_017_03259 = rows03259.Pop_017_ans_2017;
    Pop_mediane_vote_03259 = rows03259.Popu_possible_voté;
    nbr_inscrit_03259 = rows03259.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03259').textContent = name_03259;
   
    let com_03259 = document.getElementById("f-path-03259");
    let list_03259 = document.getElementById("list_03259");


    function togg03259() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03259-01').classList.remove('visible')
        document.querySelector('#polar-chart_03259-01').classList.remove('visible')
        document.querySelector('#polar-chart_03259-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03259').classList.remove('visible')
        document.querySelector('#f-path-03259').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03259
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03259
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03259
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03259
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03259
    }
    com_03259.onclick = togg03259;
    list_03259.onclick = togg03259;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03260 = data[259];

    /*Récupere les données que je veut de la Commune */
    name_03260 = rows03260.Libellé_géographique;
    Pop_03260 = rows03260.Population_en_2017;
    Pop_017_03260 = rows03260.Pop_017_ans_2017;
    Pop_mediane_vote_03260 = rows03260.Popu_possible_voté;
    nbr_inscrit_03260 = rows03260.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03260').textContent = name_03260;
   
    let com_03260 = document.getElementById("f-path-03260");
    let list_03260 = document.getElementById("list_03260");


    function togg03260() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03260-01').classList.remove('visible')
        document.querySelector('#polar-chart_03260-01').classList.remove('visible')
        document.querySelector('#polar-chart_03260-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03260').classList.remove('visible')
        document.querySelector('#f-path-03260').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03260
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03260
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03260
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03260
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03260
    }
    com_03260.onclick = togg03260;
    list_03260.onclick = togg03260;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03261 = data[260];

    /*Récupere les données que je veut de la Commune */
    name_03261 = rows03261.Libellé_géographique;
    Pop_03261 = rows03261.Population_en_2017;
    Pop_017_03261 = rows03261.Pop_017_ans_2017;
    Pop_mediane_vote_03261 = rows03261.Popu_possible_voté;
    nbr_inscrit_03261 = rows03261.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03261').textContent = name_03261;
   
    let com_03261 = document.getElementById("f-path-03261");
    let list_03261 = document.getElementById("list_03261");


    function togg03261() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03261-01').classList.remove('visible')
        document.querySelector('#polar-chart_03261-01').classList.remove('visible')
        document.querySelector('#polar-chart_03261-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03261').classList.remove('visible')
        document.querySelector('#f-path-03261').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03261
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03261
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03261
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03261
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03261
    }
    com_03261.onclick = togg03261;
    list_03261.onclick = togg03261;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03262 = data[261];

    /*Récupere les données que je veut de la Commune */
    name_03262 = rows03262.Libellé_géographique;
    Pop_03262 = rows03262.Population_en_2017;
    Pop_017_03262 = rows03262.Pop_017_ans_2017;
    Pop_mediane_vote_03262 = rows03262.Popu_possible_voté;
    nbr_inscrit_03262 = rows03262.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03262').textContent = name_03262;
   
    let com_03262 = document.getElementById("f-path-03262");
    let list_03262 = document.getElementById("list_03262");


    function togg03262() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03262-01').classList.remove('visible')
        document.querySelector('#polar-chart_03262-01').classList.remove('visible')
        document.querySelector('#polar-chart_03262-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03262').classList.remove('visible')
        document.querySelector('#f-path-03262').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03262
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03262
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03262
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03262
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03262
    }
    com_03262.onclick = togg03262;
    list_03262.onclick = togg03262;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03263 = data[262];

    /*Récupere les données que je veut de la Commune */
    name_03263 = rows03263.Libellé_géographique;
    Pop_03263 = rows03263.Population_en_2017;
    Pop_017_03263 = rows03263.Pop_017_ans_2017;
    Pop_mediane_vote_03263 = rows03263.Popu_possible_voté;
    nbr_inscrit_03263 = rows03263.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03263').textContent = name_03263;
   
    let com_03263 = document.getElementById("f-path-03263");
    let list_03263 = document.getElementById("list_03263");


    function togg03263() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03263-01').classList.remove('visible')
        document.querySelector('#polar-chart_03263-01').classList.remove('visible')
        document.querySelector('#polar-chart_03263-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03263').classList.remove('visible')
        document.querySelector('#f-path-03263').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03263
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03263
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03263
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03263
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03263
    }
    com_03263.onclick = togg03263;
    list_03263.onclick = togg03263;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03264 = data[263];

    /*Récupere les données que je veut de la Commune */
    name_03264 = rows03264.Libellé_géographique;
    Pop_03264 = rows03264.Population_en_2017;
    Pop_017_03264 = rows03264.Pop_017_ans_2017;
    Pop_mediane_vote_03264 = rows03264.Popu_possible_voté;
    nbr_inscrit_03264 = rows03264.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03264').textContent = name_03264;
   
    let com_03264 = document.getElementById("f-path-03264");
    let list_03264 = document.getElementById("list_03264");


    function togg03264() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03264-01').classList.remove('visible')
        document.querySelector('#polar-chart_03264-01').classList.remove('visible')
        document.querySelector('#polar-chart_03264-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03264').classList.remove('visible')
        document.querySelector('#f-path-03264').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03264
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03264
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03264
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03264
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03264
    }
    com_03264.onclick = togg03264;
    list_03264.onclick = togg03264;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03265 = data[264];

    /*Récupere les données que je veut de la Commune */
    name_03265 = rows03265.Libellé_géographique;
    Pop_03265 = rows03265.Population_en_2017;
    Pop_017_03265 = rows03265.Pop_017_ans_2017;
    Pop_mediane_vote_03265 = rows03265.Popu_possible_voté;
    nbr_inscrit_03265 = rows03265.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03265').textContent = name_03265;
   
    let com_03265 = document.getElementById("f-path-03265");
    let list_03265 = document.getElementById("list_03265");


    function togg03265() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03265-01').classList.remove('visible')
        document.querySelector('#polar-chart_03265-01').classList.remove('visible')
        document.querySelector('#polar-chart_03265-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03265').classList.remove('visible')
        document.querySelector('#f-path-03265').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03265
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03265
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03265
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03265
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03265
    }
    com_03265.onclick = togg03265;
    list_03265.onclick = togg03265;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03266 = data[265];

    /*Récupere les données que je veut de la Commune */
    name_03266 = rows03266.Libellé_géographique;
    Pop_03266 = rows03266.Population_en_2017;
    Pop_017_03266 = rows03266.Pop_017_ans_2017;
    Pop_mediane_vote_03266 = rows03266.Popu_possible_voté;
    nbr_inscrit_03266 = rows03266.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03266').textContent = name_03266;
   
    let com_03266 = document.getElementById("f-path-03266");
    let list_03266 = document.getElementById("list_03266");


    function togg03266() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03266-01').classList.remove('visible')
        document.querySelector('#polar-chart_03266-01').classList.remove('visible')
        document.querySelector('#polar-chart_03266-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03266').classList.remove('visible')
        document.querySelector('#f-path-03266').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03266
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03266
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03266
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03266
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03266
    }
    com_03266.onclick = togg03266;
    list_03266.onclick = togg03266;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03267 = data[266];

    /*Récupere les données que je veut de la Commune */
    name_03267 = rows03267.Libellé_géographique;
    Pop_03267 = rows03267.Population_en_2017;
    Pop_017_03267 = rows03267.Pop_017_ans_2017;
    Pop_mediane_vote_03267 = rows03267.Popu_possible_voté;
    nbr_inscrit_03267 = rows03267.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03267').textContent = name_03267;
   
    let com_03267 = document.getElementById("f-path-03267");
    let list_03267 = document.getElementById("list_03267");


    function togg03267() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03267-01').classList.remove('visible')
        document.querySelector('#polar-chart_03267-01').classList.remove('visible')
        document.querySelector('#polar-chart_03267-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03267').classList.remove('visible')
        document.querySelector('#f-path-03267').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03267
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03267
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03267
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03267
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03267
    }
    com_03267.onclick = togg03267;
    list_03267.onclick = togg03267;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03268 = data[267];

    /*Récupere les données que je veut de la Commune */
    name_03268 = rows03268.Libellé_géographique;
    Pop_03268 = rows03268.Population_en_2017;
    Pop_017_03268 = rows03268.Pop_017_ans_2017;
    Pop_mediane_vote_03268 = rows03268.Popu_possible_voté;
    nbr_inscrit_03268 = rows03268.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03268').textContent = name_03268;
   
    let com_03268 = document.getElementById("f-path-03268");
    let list_03268 = document.getElementById("list_03268");


    function togg03268() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03268-01').classList.remove('visible')
        document.querySelector('#polar-chart_03268-01').classList.remove('visible')
        document.querySelector('#polar-chart_03268-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03268').classList.remove('visible')
        document.querySelector('#f-path-03268').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03268
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03268
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03268
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03268
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03268
    }
    com_03268.onclick = togg03268;
    list_03268.onclick = togg03268;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03269 = data[268];

    /*Récupere les données que je veut de la Commune */
    name_03269 = rows03269.Libellé_géographique;
    Pop_03269 = rows03269.Population_en_2017;
    Pop_017_03269 = rows03269.Pop_017_ans_2017;
    Pop_mediane_vote_03269 = rows03269.Popu_possible_voté;
    nbr_inscrit_03269 = rows03269.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03269').textContent = name_03269;
   
    let com_03269 = document.getElementById("f-path-03269");
    let list_03269 = document.getElementById("list_03269");


    function togg03269() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03269-01').classList.remove('visible')
        document.querySelector('#polar-chart_03269-01').classList.remove('visible')
        document.querySelector('#polar-chart_03269-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03269').classList.remove('visible')
        document.querySelector('#f-path-03269').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03269
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03269
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03269
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03269
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03269
    }
    com_03269.onclick = togg03269;
    list_03269.onclick = togg03269;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03270 = data[269];

    /*Récupere les données que je veut de la Commune */
    name_03270 = rows03270.Libellé_géographique;
    Pop_03270 = rows03270.Population_en_2017;
    Pop_017_03270 = rows03270.Pop_017_ans_2017;
    Pop_mediane_vote_03270 = rows03270.Popu_possible_voté;
    nbr_inscrit_03270 = rows03270.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03270').textContent = name_03270;
   
    let com_03270 = document.getElementById("f-path-03270");
    let list_03270 = document.getElementById("list_03270");


    function togg03270() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03270-01').classList.remove('visible')
        document.querySelector('#polar-chart_03270-01').classList.remove('visible')
        document.querySelector('#polar-chart_03270-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03270').classList.remove('visible')
        document.querySelector('#f-path-03270').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03270
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03270
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03270
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03270
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03270
    }
    com_03270.onclick = togg03270;
    list_03270.onclick = togg03270;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03271 = data[270];

    /*Récupere les données que je veut de la Commune */
    name_03271 = rows03271.Libellé_géographique;
    Pop_03271 = rows03271.Population_en_2017;
    Pop_017_03271 = rows03271.Pop_017_ans_2017;
    Pop_mediane_vote_03271 = rows03271.Popu_possible_voté;
    nbr_inscrit_03271 = rows03271.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03271').textContent = name_03271;
   
    let com_03271 = document.getElementById("f-path-03271");
    let list_03271 = document.getElementById("list_03271");


    function togg03271() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03271-01').classList.remove('visible')
        document.querySelector('#polar-chart_03271-01').classList.remove('visible')
        document.querySelector('#polar-chart_03271-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03271').classList.remove('visible')
        document.querySelector('#f-path-03271').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03271
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03271
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03271
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03271
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03271
    }
    com_03271.onclick = togg03271;
    list_03271.onclick = togg03271;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03272 = data[271];

    /*Récupere les données que je veut de la Commune */
    name_03272 = rows03272.Libellé_géographique;
    Pop_03272 = rows03272.Population_en_2017;
    Pop_017_03272 = rows03272.Pop_017_ans_2017;
    Pop_mediane_vote_03272 = rows03272.Popu_possible_voté;
    nbr_inscrit_03272 = rows03272.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03272').textContent = name_03272;
   
    let com_03272 = document.getElementById("f-path-03272");
    let list_03272 = document.getElementById("list_03272");


    function togg03272() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03272-01').classList.remove('visible')
        document.querySelector('#polar-chart_03272-01').classList.remove('visible')
        document.querySelector('#polar-chart_03272-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03272').classList.remove('visible')
        document.querySelector('#f-path-03272').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03272
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03272
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03272
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03272
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03272
    }
    com_03272.onclick = togg03272;
    list_03272.onclick = togg03272;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03273 = data[272];

    /*Récupere les données que je veut de la Commune */
    name_03273 = rows03273.Libellé_géographique;
    Pop_03273 = rows03273.Population_en_2017;
    Pop_017_03273 = rows03273.Pop_017_ans_2017;
    Pop_mediane_vote_03273 = rows03273.Popu_possible_voté;
    nbr_inscrit_03273 = rows03273.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03273').textContent = name_03273;
   
    let com_03273 = document.getElementById("f-path-03273");
    let list_03273 = document.getElementById("list_03273");


    function togg03273() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03273-01').classList.remove('visible')
        document.querySelector('#polar-chart_03273-01').classList.remove('visible')
        document.querySelector('#polar-chart_03273-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03273').classList.remove('visible')
        document.querySelector('#f-path-03273').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03273
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03273
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03273
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03273
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03273
    }
    com_03273.onclick = togg03273;
    list_03273.onclick = togg03273;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03274 = data[273];

    /*Récupere les données que je veut de la Commune */
    name_03274 = rows03274.Libellé_géographique;
    Pop_03274 = rows03274.Population_en_2017;
    Pop_017_03274 = rows03274.Pop_017_ans_2017;
    Pop_mediane_vote_03274 = rows03274.Popu_possible_voté;
    nbr_inscrit_03274 = rows03274.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03274').textContent = name_03274;
   
    let com_03274 = document.getElementById("f-path-03274");
    let list_03274 = document.getElementById("list_03274");


    function togg03274() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03274-01').classList.remove('visible')
        document.querySelector('#polar-chart_03274-01').classList.remove('visible')
        document.querySelector('#polar-chart_03274-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03274').classList.remove('visible')
        document.querySelector('#f-path-03274').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03274
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03274
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03274
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03274
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03274
    }
    com_03274.onclick = togg03274;
    list_03274.onclick = togg03274;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03275 = data[274];

    /*Récupere les données que je veut de la Commune */
    name_03275 = rows03275.Libellé_géographique;
    Pop_03275 = rows03275.Population_en_2017;
    Pop_017_03275 = rows03275.Pop_017_ans_2017;
    Pop_mediane_vote_03275 = rows03275.Popu_possible_voté;
    nbr_inscrit_03275 = rows03275.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03275').textContent = name_03275;
   
    let com_03275 = document.getElementById("f-path-03275");
    let list_03275 = document.getElementById("list_03275");


    function togg03275() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03275-01').classList.remove('visible')
        document.querySelector('#polar-chart_03275-01').classList.remove('visible')
        document.querySelector('#polar-chart_03275-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03275').classList.remove('visible')
        document.querySelector('#f-path-03275').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03275
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03275
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03275
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03275
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03275
    }
    com_03275.onclick = togg03275;
    list_03275.onclick = togg03275;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03276 = data[275];

    /*Récupere les données que je veut de la Commune */
    name_03276 = rows03276.Libellé_géographique;
    Pop_03276 = rows03276.Population_en_2017;
    Pop_017_03276 = rows03276.Pop_017_ans_2017;
    Pop_mediane_vote_03276 = rows03276.Popu_possible_voté;
    nbr_inscrit_03276 = rows03276.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03276').textContent = name_03276;
   
    let com_03276 = document.getElementById("f-path-03276");
    let list_03276 = document.getElementById("list_03276");


    function togg03276() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03276-01').classList.remove('visible')
        document.querySelector('#polar-chart_03276-01').classList.remove('visible')
        document.querySelector('#polar-chart_03276-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03276').classList.remove('visible')
        document.querySelector('#f-path-03276').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03276
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03276
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03276
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03276
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03276
    }
    com_03276.onclick = togg03276;
    list_03276.onclick = togg03276;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03277 = data[276];

    /*Récupere les données que je veut de la Commune */
    name_03277 = rows03277.Libellé_géographique;
    Pop_03277 = rows03277.Population_en_2017;
    Pop_017_03277 = rows03277.Pop_017_ans_2017;
    Pop_mediane_vote_03277 = rows03277.Popu_possible_voté;
    nbr_inscrit_03277 = rows03277.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03277').textContent = name_03277;
   
    let com_03277 = document.getElementById("f-path-03277");
    let list_03277 = document.getElementById("list_03277");


    function togg03277() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03277-01').classList.remove('visible')
        document.querySelector('#polar-chart_03277-01').classList.remove('visible')
        document.querySelector('#polar-chart_03277-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03277').classList.remove('visible')
        document.querySelector('#f-path-03277').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03277
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03277
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03277
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03277
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03277
    }
    com_03277.onclick = togg03277;
    list_03277.onclick = togg03277;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03278 = data[277];

    /*Récupere les données que je veut de la Commune */
    name_03278 = rows03278.Libellé_géographique;
    Pop_03278 = rows03278.Population_en_2017;
    Pop_017_03278 = rows03278.Pop_017_ans_2017;
    Pop_mediane_vote_03278 = rows03278.Popu_possible_voté;
    nbr_inscrit_03278 = rows03278.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03278').textContent = name_03278;
   
    let com_03278 = document.getElementById("f-path-03278");
    let list_03278 = document.getElementById("list_03278");


    function togg03278() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03278-01').classList.remove('visible')
        document.querySelector('#polar-chart_03278-01').classList.remove('visible')
        document.querySelector('#polar-chart_03278-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03278').classList.remove('visible')
        document.querySelector('#f-path-03278').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03278
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03278
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03278
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03278
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03278
    }
    com_03278.onclick = togg03278;
    list_03278.onclick = togg03278;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03279 = data[278];

    /*Récupere les données que je veut de la Commune */
    name_03279 = rows03279.Libellé_géographique;
    Pop_03279 = rows03279.Population_en_2017;
    Pop_017_03279 = rows03279.Pop_017_ans_2017;
    Pop_mediane_vote_03279 = rows03279.Popu_possible_voté;
    nbr_inscrit_03279 = rows03279.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03279').textContent = name_03279;
   
    let com_03279 = document.getElementById("f-path-03279");
    let list_03279 = document.getElementById("list_03279");


    function togg03279() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03279-01').classList.remove('visible')
        document.querySelector('#polar-chart_03279-01').classList.remove('visible')
        document.querySelector('#polar-chart_03279-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03279').classList.remove('visible')
        document.querySelector('#f-path-03279').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03279
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03279
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03279
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03279
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03279
    }
    com_03279.onclick = togg03279;
    list_03279.onclick = togg03279;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03280 = data[279];

    /*Récupere les données que je veut de la Commune */
    name_03280 = rows03280.Libellé_géographique;
    Pop_03280 = rows03280.Population_en_2017;
    Pop_017_03280 = rows03280.Pop_017_ans_2017;
    Pop_mediane_vote_03280 = rows03280.Popu_possible_voté;
    nbr_inscrit_03280 = rows03280.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03280').textContent = name_03280;
   
    let com_03280 = document.getElementById("f-path-03280");
    let list_03280 = document.getElementById("list_03280");


    function togg03280() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03280-01').classList.remove('visible')
        document.querySelector('#polar-chart_03280-01').classList.remove('visible')
        document.querySelector('#polar-chart_03280-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03280').classList.remove('visible')
        document.querySelector('#f-path-03280').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03280
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03280
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03280
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03280
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03280
    }
    com_03280.onclick = togg03280;
    list_03280.onclick = togg03280;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03281 = data[280];

    /*Récupere les données que je veut de la Commune */
    name_03281 = rows03281.Libellé_géographique;
    Pop_03281 = rows03281.Population_en_2017;
    Pop_017_03281 = rows03281.Pop_017_ans_2017;
    Pop_mediane_vote_03281 = rows03281.Popu_possible_voté;
    nbr_inscrit_03281 = rows03281.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03281').textContent = name_03281;
   
    let com_03281 = document.getElementById("f-path-03281");
    let list_03281 = document.getElementById("list_03281");


    function togg03281() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03281-01').classList.remove('visible')
        document.querySelector('#polar-chart_03281-01').classList.remove('visible')
        document.querySelector('#polar-chart_03281-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03281').classList.remove('visible')
        document.querySelector('#f-path-03281').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03281
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03281
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03281
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03281
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03281
    }
    com_03281.onclick = togg03281;
    list_03281.onclick = togg03281;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03282 = data[281];

    /*Récupere les données que je veut de la Commune */
    name_03282 = rows03282.Libellé_géographique;
    Pop_03282 = rows03282.Population_en_2017;
    Pop_017_03282 = rows03282.Pop_017_ans_2017;
    Pop_mediane_vote_03282 = rows03282.Popu_possible_voté;
    nbr_inscrit_03282 = rows03282.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03282').textContent = name_03282;
   
    let com_03282 = document.getElementById("f-path-03282");
    let list_03282 = document.getElementById("list_03282");


    function togg03282() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03282-01').classList.remove('visible')
        document.querySelector('#polar-chart_03282-01').classList.remove('visible')
        document.querySelector('#polar-chart_03282-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03282').classList.remove('visible')
        document.querySelector('#f-path-03282').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03282
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03282
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03282
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03282
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03282
    }
    com_03282.onclick = togg03282;
    list_03282.onclick = togg03282;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03283 = data[282];

    /*Récupere les données que je veut de la Commune */
    name_03283 = rows03283.Libellé_géographique;
    Pop_03283 = rows03283.Population_en_2017;
    Pop_017_03283 = rows03283.Pop_017_ans_2017;
    Pop_mediane_vote_03283 = rows03283.Popu_possible_voté;
    nbr_inscrit_03283 = rows03283.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03283').textContent = name_03283;
   
    let com_03283 = document.getElementById("f-path-03283");
    let list_03283 = document.getElementById("list_03283");


    function togg03283() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03283-01').classList.remove('visible')
        document.querySelector('#polar-chart_03283-01').classList.remove('visible')
        document.querySelector('#polar-chart_03283-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03283').classList.remove('visible')
        document.querySelector('#f-path-03283').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03283
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03283
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03283
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03283
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03283
    }
    com_03283.onclick = togg03283;
    list_03283.onclick = togg03283;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03284 = data[283];

    /*Récupere les données que je veut de la Commune */
    name_03284 = rows03284.Libellé_géographique;
    Pop_03284 = rows03284.Population_en_2017;
    Pop_017_03284 = rows03284.Pop_017_ans_2017;
    Pop_mediane_vote_03284 = rows03284.Popu_possible_voté;
    nbr_inscrit_03284 = rows03284.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03284').textContent = name_03284;
   
    let com_03284 = document.getElementById("f-path-03284");
    let list_03284 = document.getElementById("list_03284");


    function togg03284() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03284-01').classList.remove('visible')
        document.querySelector('#polar-chart_03284-01').classList.remove('visible')
        document.querySelector('#polar-chart_03284-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03284').classList.remove('visible')
        document.querySelector('#f-path-03284').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03284
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03284
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03284
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03284
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03284
    }
    com_03284.onclick = togg03284;
    list_03284.onclick = togg03284;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03285 = data[284];

    /*Récupere les données que je veut de la Commune */
    name_03285 = rows03285.Libellé_géographique;
    Pop_03285 = rows03285.Population_en_2017;
    Pop_017_03285 = rows03285.Pop_017_ans_2017;
    Pop_mediane_vote_03285 = rows03285.Popu_possible_voté;
    nbr_inscrit_03285 = rows03285.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03285').textContent = name_03285;
   
    let com_03285 = document.getElementById("f-path-03285");
    let list_03285 = document.getElementById("list_03285");


    function togg03285() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03285-01').classList.remove('visible')
        document.querySelector('#polar-chart_03285-01').classList.remove('visible')
        document.querySelector('#polar-chart_03285-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03285').classList.remove('visible')
        document.querySelector('#f-path-03285').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03285
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03285
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03285
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03285
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03285
    }
    com_03285.onclick = togg03285;
    list_03285.onclick = togg03285;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03286 = data[285];

    /*Récupere les données que je veut de la Commune */
    name_03286 = rows03286.Libellé_géographique;
    Pop_03286 = rows03286.Population_en_2017;
    Pop_017_03286 = rows03286.Pop_017_ans_2017;
    Pop_mediane_vote_03286 = rows03286.Popu_possible_voté;
    nbr_inscrit_03286 = rows03286.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03286').textContent = name_03286;
   
    let com_03286 = document.getElementById("f-path-03286");
    let list_03286 = document.getElementById("list_03286");


    function togg03286() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03286-01').classList.remove('visible')
        document.querySelector('#polar-chart_03286-01').classList.remove('visible')
        document.querySelector('#polar-chart_03286-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03286').classList.remove('visible')
        document.querySelector('#f-path-03286').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03286
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03286
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03286
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03286
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03286
    }
    com_03286.onclick = togg03286;
    list_03286.onclick = togg03286;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03287 = data[286];

    /*Récupere les données que je veut de la Commune */
    name_03287 = rows03287.Libellé_géographique;
    Pop_03287 = rows03287.Population_en_2017;
    Pop_017_03287 = rows03287.Pop_017_ans_2017;
    Pop_mediane_vote_03287 = rows03287.Popu_possible_voté;
    nbr_inscrit_03287 = rows03287.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03287').textContent = name_03287;
   
    let com_03287 = document.getElementById("f-path-03287");
    let list_03287 = document.getElementById("list_03287");


    function togg03287() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03287-01').classList.remove('visible')
        document.querySelector('#polar-chart_03287-01').classList.remove('visible')
        document.querySelector('#polar-chart_03287-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03287').classList.remove('visible')
        document.querySelector('#f-path-03287').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03287
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03287
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03287
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03287
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03287
    }
    com_03287.onclick = togg03287;
    list_03287.onclick = togg03287;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03288 = data[287];

    /*Récupere les données que je veut de la Commune */
    name_03288 = rows03288.Libellé_géographique;
    Pop_03288 = rows03288.Population_en_2017;
    Pop_017_03288 = rows03288.Pop_017_ans_2017;
    Pop_mediane_vote_03288 = rows03288.Popu_possible_voté;
    nbr_inscrit_03288 = rows03288.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03288').textContent = name_03288;
   
    let com_03288 = document.getElementById("f-path-03288");
    let list_03288 = document.getElementById("list_03288");


    function togg03288() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03288-01').classList.remove('visible')
        document.querySelector('#polar-chart_03288-01').classList.remove('visible')
        document.querySelector('#polar-chart_03288-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03288').classList.remove('visible')
        document.querySelector('#f-path-03288').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03288
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03288
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03288
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03288
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03288
    }
    com_03288.onclick = togg03288;
    list_03288.onclick = togg03288;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03289 = data[288];

    /*Récupere les données que je veut de la Commune */
    name_03289 = rows03289.Libellé_géographique;
    Pop_03289 = rows03289.Population_en_2017;
    Pop_017_03289 = rows03289.Pop_017_ans_2017;
    Pop_mediane_vote_03289 = rows03289.Popu_possible_voté;
    nbr_inscrit_03289 = rows03289.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03289').textContent = name_03289;
   
    let com_03289 = document.getElementById("f-path-03289");
    let list_03289 = document.getElementById("list_03289");


    function togg03289() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03289-01').classList.remove('visible')
        document.querySelector('#polar-chart_03289-01').classList.remove('visible')
        document.querySelector('#polar-chart_03289-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03289').classList.remove('visible')
        document.querySelector('#f-path-03289').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03289
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03289
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03289
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03289
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03289
    }
    com_03289.onclick = togg03289;
    list_03289.onclick = togg03289;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03290 = data[289];

    /*Récupere les données que je veut de la Commune */
    name_03290 = rows03290.Libellé_géographique;
    Pop_03290 = rows03290.Population_en_2017;
    Pop_017_03290 = rows03290.Pop_017_ans_2017;
    Pop_mediane_vote_03290 = rows03290.Popu_possible_voté;
    nbr_inscrit_03290 = rows03290.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03290').textContent = name_03290;
   
    let com_03290 = document.getElementById("f-path-03290");
    let list_03290 = document.getElementById("list_03290");


    function togg03290() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03290-01').classList.remove('visible')
        document.querySelector('#polar-chart_03290-01').classList.remove('visible')
        document.querySelector('#polar-chart_03290-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03290').classList.remove('visible')
        document.querySelector('#f-path-03290').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03290
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03290
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03290
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03290
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03290
    }
    com_03290.onclick = togg03290;
    list_03290.onclick = togg03290;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03291 = data[290];

    /*Récupere les données que je veut de la Commune */
    name_03291 = rows03291.Libellé_géographique;
    Pop_03291 = rows03291.Population_en_2017;
    Pop_017_03291 = rows03291.Pop_017_ans_2017;
    Pop_mediane_vote_03291 = rows03291.Popu_possible_voté;
    nbr_inscrit_03291 = rows03291.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03291').textContent = name_03291;
   
    let com_03291 = document.getElementById("f-path-03291");
    let list_03291 = document.getElementById("list_03291");


    function togg03291() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03291-01').classList.remove('visible')
        document.querySelector('#polar-chart_03291-01').classList.remove('visible')
        document.querySelector('#polar-chart_03291-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03291').classList.remove('visible')
        document.querySelector('#f-path-03291').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03291
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03291
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03291
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03291
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03291
    }
    com_03291.onclick = togg03291;
    list_03291.onclick = togg03291;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03292 = data[291];

    /*Récupere les données que je veut de la Commune */
    name_03292 = rows03292.Libellé_géographique;
    Pop_03292 = rows03292.Population_en_2017;
    Pop_017_03292 = rows03292.Pop_017_ans_2017;
    Pop_mediane_vote_03292 = rows03292.Popu_possible_voté;
    nbr_inscrit_03292 = rows03292.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03292').textContent = name_03292;
   
    let com_03292 = document.getElementById("f-path-03292");
    let list_03292 = document.getElementById("list_03292");


    function togg03292() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03292-01').classList.remove('visible')
        document.querySelector('#polar-chart_03292-01').classList.remove('visible')
        document.querySelector('#polar-chart_03292-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03292').classList.remove('visible')
        document.querySelector('#f-path-03292').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03292
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03292
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03292
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03292
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03292
    }
    com_03292.onclick = togg03292;
    list_03292.onclick = togg03292;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03293 = data[292];

    /*Récupere les données que je veut de la Commune */
    name_03293 = rows03293.Libellé_géographique;
    Pop_03293 = rows03293.Population_en_2017;
    Pop_017_03293 = rows03293.Pop_017_ans_2017;
    Pop_mediane_vote_03293 = rows03293.Popu_possible_voté;
    nbr_inscrit_03293 = rows03293.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03293').textContent = name_03293;
   
    let com_03293 = document.getElementById("f-path-03293");
    let list_03293 = document.getElementById("list_03293");


    function togg03293() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03293-01').classList.remove('visible')
        document.querySelector('#polar-chart_03293-01').classList.remove('visible')
        document.querySelector('#polar-chart_03293-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03293').classList.remove('visible')
        document.querySelector('#f-path-03293').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03293
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03293
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03293
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03293
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03293
    }
    com_03293.onclick = togg03293;
    list_03293.onclick = togg03293;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03294 = data[293];

    /*Récupere les données que je veut de la Commune */
    name_03294 = rows03294.Libellé_géographique;
    Pop_03294 = rows03294.Population_en_2017;
    Pop_017_03294 = rows03294.Pop_017_ans_2017;
    Pop_mediane_vote_03294 = rows03294.Popu_possible_voté;
    nbr_inscrit_03294 = rows03294.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03294').textContent = name_03294;
   
    let com_03294 = document.getElementById("f-path-03294");
    let list_03294 = document.getElementById("list_03294");


    function togg03294() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03294-01').classList.remove('visible')
        document.querySelector('#polar-chart_03294-01').classList.remove('visible')
        document.querySelector('#polar-chart_03294-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03294').classList.remove('visible')
        document.querySelector('#f-path-03294').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03294
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03294
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03294
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03294
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03294
    }
    com_03294.onclick = togg03294;
    list_03294.onclick = togg03294;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03295 = data[294];

    /*Récupere les données que je veut de la Commune */
    name_03295 = rows03295.Libellé_géographique;
    Pop_03295 = rows03295.Population_en_2017;
    Pop_017_03295 = rows03295.Pop_017_ans_2017;
    Pop_mediane_vote_03295 = rows03295.Popu_possible_voté;
    nbr_inscrit_03295 = rows03295.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03295').textContent = name_03295;
   
    let com_03295 = document.getElementById("f-path-03295");
    let list_03295 = document.getElementById("list_03295");


    function togg03295() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03295-01').classList.remove('visible')
        document.querySelector('#polar-chart_03295-01').classList.remove('visible')
        document.querySelector('#polar-chart_03295-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03295').classList.remove('visible')
        document.querySelector('#f-path-03295').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03295
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03295
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03295
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03295
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03295
    }
    com_03295.onclick = togg03295;
    list_03295.onclick = togg03295;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03296 = data[295];

    /*Récupere les données que je veut de la Commune */
    name_03296 = rows03296.Libellé_géographique;
    Pop_03296 = rows03296.Population_en_2017;
    Pop_017_03296 = rows03296.Pop_017_ans_2017;
    Pop_mediane_vote_03296 = rows03296.Popu_possible_voté;
    nbr_inscrit_03296 = rows03296.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03296').textContent = name_03296;
   
    let com_03296 = document.getElementById("f-path-03296");
    let list_03296 = document.getElementById("list_03296");


    function togg03296() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03296-01').classList.remove('visible')
        document.querySelector('#polar-chart_03296-01').classList.remove('visible')
        document.querySelector('#polar-chart_03296-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03296').classList.remove('visible')
        document.querySelector('#f-path-03296').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03296
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03296
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03296
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03296
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03296
    }
    com_03296.onclick = togg03296;
    list_03296.onclick = togg03296;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03297 = data[296];

    /*Récupere les données que je veut de la Commune */
    name_03297 = rows03297.Libellé_géographique;
    Pop_03297 = rows03297.Population_en_2017;
    Pop_017_03297 = rows03297.Pop_017_ans_2017;
    Pop_mediane_vote_03297 = rows03297.Popu_possible_voté;
    nbr_inscrit_03297 = rows03297.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03297').textContent = name_03297;
   
    let com_03297 = document.getElementById("f-path-03297");
    let list_03297 = document.getElementById("list_03297");


    function togg03297() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03297-01').classList.remove('visible')
        document.querySelector('#polar-chart_03297-01').classList.remove('visible')
        document.querySelector('#polar-chart_03297-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03297').classList.remove('visible')
        document.querySelector('#f-path-03297').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03297
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03297
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03297
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03297
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03297
    }
    com_03297.onclick = togg03297;
    list_03297.onclick = togg03297;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03298 = data[297];

    /*Récupere les données que je veut de la Commune */
    name_03298 = rows03298.Libellé_géographique;
    Pop_03298 = rows03298.Population_en_2017;
    Pop_017_03298 = rows03298.Pop_017_ans_2017;
    Pop_mediane_vote_03298 = rows03298.Popu_possible_voté;
    nbr_inscrit_03298 = rows03298.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03298').textContent = name_03298;
   
    let com_03298 = document.getElementById("f-path-03298");
    let list_03298 = document.getElementById("list_03298");


    function togg03298() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03298-01').classList.remove('visible')
        document.querySelector('#polar-chart_03298-01').classList.remove('visible')
        document.querySelector('#polar-chart_03298-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03298').classList.remove('visible')
        document.querySelector('#f-path-03298').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03298
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03298
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03298
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03298
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03298
    }
    com_03298.onclick = togg03298;
    list_03298.onclick = togg03298;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03299 = data[298];

    /*Récupere les données que je veut de la Commune */
    name_03299 = rows03299.Libellé_géographique;
    Pop_03299 = rows03299.Population_en_2017;
    Pop_017_03299 = rows03299.Pop_017_ans_2017;
    Pop_mediane_vote_03299 = rows03299.Popu_possible_voté;
    nbr_inscrit_03299 = rows03299.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03299').textContent = name_03299;
   
    let com_03299 = document.getElementById("f-path-03299");
    let list_03299 = document.getElementById("list_03299");


    function togg03299() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03299-01').classList.remove('visible')
        document.querySelector('#polar-chart_03299-01').classList.remove('visible')
        document.querySelector('#polar-chart_03299-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03299').classList.remove('visible')
        document.querySelector('#f-path-03299').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03299
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03299
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03299
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03299
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03299
    }
    com_03299.onclick = togg03299;
    list_03299.onclick = togg03299;
/************************************************************************************* */
    /************************************************************************************* */
    const rows03300 = data[299];

    /*Récupere les données que je veut de la Commune */
    name_03300 = rows03300.Libellé_géographique;
    Pop_03300 = rows03300.Population_en_2017;
    Pop_017_03300 = rows03300.Pop_017_ans_2017;
    Pop_mediane_vote_03300 = rows03300.Popu_possible_voté;
    nbr_inscrit_03300 = rows03300.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03300').textContent = name_03300;
   
    let com_03300 = document.getElementById("f-path-03300");
    let list_03300 = document.getElementById("list_03300");


    function togg03300() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03300-01').classList.remove('visible')
        document.querySelector('#polar-chart_03300-01').classList.remove('visible')
        document.querySelector('#polar-chart_03300-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03300').classList.remove('visible')
        document.querySelector('#f-path-03300').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03300
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03300
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03300
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03300
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03300
    }
    com_03300.onclick = togg03300;
    list_03300.onclick = togg03300;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03301 = data[300];
    /*Récupere les données que je veut de la Commune */
    name_03301 = rows03301.Libellé_géographique;
    Pop_03301 = rows03301.Population_en_2017;
    Pop_017_03301 = rows03301.Pop_017_ans_2017;
    Pop_mediane_vote_03301 = rows03301.Popu_possible_voté;
    nbr_inscrit_03301 = rows03301.Inscrits;
    /*Pose dans le Menu*/
    document.querySelector('#list_03301').textContent = name_03301;
/*--------------------------------------------------------------------------*/
    var body = document.querySelector('#body')
    var path = document.querySelector('#map01')
    /******************************************************************** */
    let com_03301 = document.getElementById("f-path-03301");
    let list_03301 = document.getElementById("list_03301");
    function togg03301() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03301-01').classList.remove('visible')
        document.querySelector('#polar-chart_03301-01').classList.remove('visible')
        document.querySelector('#polar-chart_03301-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03301').classList.remove('visible')
        document.querySelector('#f-path-03301').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03301
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03301
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03301
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03301
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03301
    }
    com_03301.onclick = togg03301;
    list_03301.onclick = togg03301;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03302 = data[301];
    /*Récupere les données que je veut de la Commune */
    name_03302 = rows03302.Libellé_géographique;
    Pop_03302 = rows03302.Population_en_2017;
    Pop_017_03302 = rows03302.Pop_017_ans_2017;
    Pop_mediane_vote_03302 = rows03302.Popu_possible_voté;
    nbr_inscrit_03302 = rows03302.Inscrits;  
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03302').textContent = name_03302;
/*--------------------------------------------------------------------------*/
    let com_03302 = document.getElementById("f-path-03302");
    let list_03302 = document.getElementById("list_03302");
    /******************************************************************** */
    function togg03302() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03302-01').classList.remove('visible')
        document.querySelector('#polar-chart_03302-01').classList.remove('visible')
        document.querySelector('#polar-chart_03302-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03302').classList.remove('visible')
        document.querySelector('#f-path-03302').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03302;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03302
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03302
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03302
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03302
    }
    com_03302.onclick = togg03302;
    list_03302.onclick = togg03302;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03303 = data[302];
    /*Récupere les données que je veut de la Commune */
    name_03303 = rows03303.Libellé_géographique;
    Pop_03303 = rows03303.Population_en_2017;
    Pop_017_03303 = rows03303.Pop_017_ans_2017;
    Pop_mediane_vote_03303 = rows03303.Popu_possible_voté;
    nbr_inscrit_03303 = rows03303.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03303').textContent = name_03303;
    let com_03303 = document.getElementById("f-path-03303");
    let list_03303 = document.getElementById("list_03303");
    function togg03303() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03303-01').classList.remove('visible')
        document.querySelector('#polar-chart_03303-01').classList.remove('visible')
        document.querySelector('#polar-chart_03303-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03303').classList.remove('visible')
        document.querySelector('#f-path-03303').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03303;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03303
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03303
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03303
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03303
    }
    com_03303.onclick = togg03303;
    list_03303.onclick = togg03303;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03304 = data[303];
    /*Récupere les données que je veut de la Commune */
    name_03304 = rows03304.Libellé_géographique;
    Pop_03304 = rows03304.Population_en_2017;
    Pop_017_03304 = rows03304.Pop_017_ans_2017;
    Pop_mediane_vote_03304 = rows03304.Popu_possible_voté;
    nbr_inscrit_03304 = rows03304.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03304').textContent = name_03304;
    let com_03304 = document.getElementById("f-path-03304");
    let list_03304 = document.getElementById("list_03304");
    function togg03304() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03304-01').classList.remove('visible')
        document.querySelector('#polar-chart_03304-01').classList.remove('visible')
        document.querySelector('#polar-chart_03304-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03304').classList.remove('visible')
        document.querySelector('#f-path-03304').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03304;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03304
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03304
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03304
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03304
    }
    com_03304.onclick = togg03304;
    list_03304.onclick = togg03304;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03305 = data[304];
    /*Récupere les données que je veut de la Commune */
    name_03305 = rows03305.Libellé_géographique;
    Pop_03305 = rows03305.Population_en_2017;
    Pop_017_03305 = rows03305.Pop_017_ans_2017;
    Pop_mediane_vote_03305 = rows03305.Popu_possible_voté;
    nbr_inscrit_03305 = rows03305.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03305').textContent = name_03305;
    let com_03305 = document.getElementById("f-path-03305");
    let list_03305 = document.getElementById("list_03305");
    function togg03305() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03305-01').classList.remove('visible')
        document.querySelector('#polar-chart_03305-01').classList.remove('visible')
        document.querySelector('#polar-chart_03305-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03305').classList.remove('visible')
        document.querySelector('#f-path-03305').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03305
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03305
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03305
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03305
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03305
    }
    com_03305.onclick = togg03305;
    list_03305.onclick = togg03305;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03306 = data[305];
    /*Récupere les données que je veut de la Commune */
    name_03306 = rows03306.Libellé_géographique;
    Pop_03306 = rows03306.Population_en_2017;
    Pop_017_03306 = rows03306.Pop_017_ans_2017;
    Pop_mediane_vote_03306 = rows03306.Popu_possible_voté;
    nbr_inscrit_03306 = rows03306.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03306').textContent = name_03306;
    let com_03306 = document.getElementById("f-path-03306");
    let list_03306 = document.getElementById("list_03306");
    function togg03306() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03306-01').classList.remove('visible')
        document.querySelector('#polar-chart_03306-01').classList.remove('visible')
        document.querySelector('#polar-chart_03306-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03306').classList.remove('visible')
        document.querySelector('#f-path-03306').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03306
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03306
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03306
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03306
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03306
    }
    com_03306.onclick = togg03306;
    list_03306.onclick = togg03306;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03307 = data[306];
    /*Récupere les données que je veut de la Commune */
    name_03307 = rows03307.Libellé_géographique;
    Pop_03307 = rows03307.Population_en_2017;
    Pop_017_03307 = rows03307.Pop_017_ans_2017;
    Pop_mediane_vote_03307 = rows03307.Popu_possible_voté;
    nbr_inscrit_03307 = rows03307.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03307').textContent = name_03307; 
    let com_03307 = document.getElementById("f-path-03307");
    let list_03307 = document.getElementById("list_03307");
    function togg03307() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03307-01').classList.remove('visible')
        document.querySelector('#polar-chart_03307-01').classList.remove('visible')
        document.querySelector('#polar-chart_03307-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03307').classList.remove('visible')
        document.querySelector('#f-path-03307').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03307
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03307
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03307
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03307
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03307
    }
    com_03307.onclick = togg03307;
    list_03307.onclick = togg03307;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03308 = data[307];
    
    /*Récupere les données que je veut de la Commune */
    name_03308 = rows03308.Libellé_géographique;
    Pop_03308 = rows03308.Population_en_2017;
    Pop_017_03308 = rows03308.Pop_017_ans_2017;
    Pop_mediane_vote_03308 = rows03308.Popu_possible_voté;
    nbr_inscrit_03308 = rows03308.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03308').textContent = name_03308;
   
    let com_03308 = document.getElementById("f-path-03308");
    let list_03308 = document.getElementById("list_03308");


    function togg03308() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03308-01').classList.remove('visible')
        document.querySelector('#polar-chart_03308-01').classList.remove('visible')
        document.querySelector('#polar-chart_03308-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03308').classList.remove('visible')
        document.querySelector('#f-path-03308').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03308
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03308
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03308
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03308
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03308
    }
    com_03308.onclick = togg03308;
    list_03308.onclick = togg03308;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03309 = data[308];
    
    /*Récupere les données que je veut de la Commune */
    name_03309 = rows03309.Libellé_géographique;
    Pop_03309 = rows03309.Population_en_2017;
    Pop_017_03309 = rows03309.Pop_017_ans_2017;
    Pop_mediane_vote_03309 = rows03309.Popu_possible_voté;
    nbr_inscrit_03309 = rows03309.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03309').textContent = name_03309;

    let com_03309 = document.getElementById("f-path-03309");
    let list_03309 = document.getElementById("list_03309");


    function togg03309() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03309-01').classList.remove('visible')
        document.querySelector('#polar-chart_03309-01').classList.remove('visible')
        document.querySelector('#polar-chart_03309-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03309').classList.remove('visible')
        document.querySelector('#f-path-03309').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03309
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03309
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03309
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03309
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03309
    }
    com_03309.onclick = togg03309;
    list_03309.onclick = togg03309;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03310 = data[309];
 
    /*Récupere les données que je veut de la Commune */
    name_03310 = rows03310.Libellé_géographique;
    Pop_03310 = rows03310.Population_en_2017;
    Pop_017_03310 = rows03310.Pop_017_ans_2017;
    Pop_mediane_vote_03310 = rows03310.Popu_possible_voté;
    nbr_inscrit_03310 = rows03310.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03310').textContent = name_03310;

    let com_03310 = document.getElementById("f-path-03310");
    let list_03310 = document.getElementById("list_03310");


    function togg03310() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03310-01').classList.remove('visible')
        document.querySelector('#polar-chart_03310-01').classList.remove('visible')
        document.querySelector('#polar-chart_03310-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03310').classList.remove('visible')
        document.querySelector('#f-path-03310').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03310
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03310
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03310
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03310
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03310
    }
    com_03310.onclick = togg03310;
    list_03310.onclick = togg03310;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03311 = data[310];

    /*Récupere les données que je veut de la Commune */
    name_03311 = rows03311.Libellé_géographique;
    Pop_03311 = rows03311.Population_en_2017;
    Pop_017_03311 = rows03311.Pop_017_ans_2017;
    Pop_mediane_vote_03311 = rows03311.Popu_possible_voté;
    nbr_inscrit_03311 = rows03311.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03311').textContent = name_03311;
   
    let com_03311 = document.getElementById("f-path-03311");
    let list_03311 = document.getElementById("list_03311");


    function togg03311() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03311-01').classList.remove('visible')
        document.querySelector('#polar-chart_03311-01').classList.remove('visible')
        document.querySelector('#polar-chart_03311-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03311').classList.remove('visible')
        document.querySelector('#f-path-03311').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03311
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03311
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03311
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03311
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03311
    }
    com_03311.onclick = togg03311;
    list_03311.onclick = togg03311;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03312 = data[311];

    /*Récupere les données que je veut de la Commune */
    name_03312 = rows03312.Libellé_géographique;
    Pop_03312 = rows03312.Population_en_2017;
    Pop_017_03312 = rows03312.Pop_017_ans_2017;
    Pop_mediane_vote_03312 = rows03312.Popu_possible_voté;
    nbr_inscrit_03312 = rows03312.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03312').textContent = name_03312;
   
    let com_03312 = document.getElementById("f-path-03312");
    let list_03312 = document.getElementById("list_03312");


    function togg03312() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03312-01').classList.remove('visible')
        document.querySelector('#polar-chart_03312-01').classList.remove('visible')
        document.querySelector('#polar-chart_03312-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03312').classList.remove('visible')
        document.querySelector('#f-path-03312').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03312
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03312
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03312
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03312
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03312
    }
    com_03312.onclick = togg03312;
    list_03312.onclick = togg03312;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03313 = data[312];

    /*Récupere les données que je veut de la Commune */
    name_03313 = rows03313.Libellé_géographique;
    Pop_03313 = rows03313.Population_en_2017;
    Pop_017_03313 = rows03313.Pop_017_ans_2017;
    Pop_mediane_vote_03313 = rows03313.Popu_possible_voté;
    nbr_inscrit_03313 = rows03313.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03313').textContent = name_03313;
   
    let com_03313 = document.getElementById("f-path-03313");
    let list_03313 = document.getElementById("list_03313");


    function togg03313() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03313-01').classList.remove('visible')
        document.querySelector('#polar-chart_03313-01').classList.remove('visible')
        document.querySelector('#polar-chart_03313-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03313').classList.remove('visible')
        document.querySelector('#f-path-03313').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03313
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03313
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03313
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03313
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03313
    }
    com_03313.onclick = togg03313;
    list_03313.onclick = togg03313;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows03314 = data[313];

    /*Récupere les données que je veut de la Commune */
    name_03314 = rows03314.Libellé_géographique;
    Pop_03314 = rows03314.Population_en_2017;
    Pop_017_03314 = rows03314.Pop_017_ans_2017;
    Pop_mediane_vote_03314 = rows03314.Popu_possible_voté;
    nbr_inscrit_03314 = rows03314.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_03314').textContent = name_03314;
   
    let com_03314 = document.getElementById("f-path-03314");
    let list_03314 = document.getElementById("list_03314");


    function togg03314() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_03314-01').classList.remove('visible')
        document.querySelector('#polar-chart_03314-01').classList.remove('visible')
        document.querySelector('#polar-chart_03314-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_03314').classList.remove('visible')
        document.querySelector('#f-path-03314').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_03314
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_03314
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_03314
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_03314
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_03314
    }
    com_03314.onclick = togg03314;
    list_03314.onclick = togg03314;
}
DataJSON();