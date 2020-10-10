
async function DataJSON() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[0];
    /*Récupere les données que je veut de la Commune */
    name_01001 = rows.Libellé_géographique;
    Pop_01001 = rows.Population_en_2017;
    Pop_017_01001 = rows.Pop_017_ans_2017;
    Pop_mediane_vote_01001 = rows.Popu_possible_voté;
    nbr_inscrit_01001 = rows.Inscrits;
    /*Pose dans le Menu*/
    document.querySelector('#list_01001').textContent = name_01001;
/*--------------------------------------------------------------------------*/
    var body = document.querySelector('#body')
    var path = document.querySelector('#map01')
    /******************************************************************** */
    let com_01001 = document.getElementById("f-path-01001");
    let list_01001 = document.getElementById("list_01001");
    function togg01001() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01001-01').classList.remove('visible')
        document.querySelector('#polar-chart_01001-01').classList.remove('visible')
        document.querySelector('#polar-chart_01001-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01001').classList.remove('visible')
        document.querySelector('#f-path-01001').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01001
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01001
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01001
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01001
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01001
    }
    com_01001.onclick = togg01001;
    list_01001.onclick = togg01001;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01002 = data[1];
    /*Récupere les données que je veut de la Commune */
    name_01002 = rows01002.Libellé_géographique;
    Pop_01002 = rows01002.Population_en_2017;
    Pop_017_01002 = rows01002.Pop_017_ans_2017;
    Pop_mediane_vote_01002 = rows01002.Popu_possible_voté;
    nbr_inscrit_01002 = rows01002.Inscrits;  
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01002').textContent = name_01002;
/*--------------------------------------------------------------------------*/
    let com_01002 = document.getElementById("f-path-01002");
    let list_01002 = document.getElementById("list_01002");
    /******************************************************************** */
    function togg01002() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01002-01').classList.remove('visible')
        document.querySelector('#polar-chart_01002-01').classList.remove('visible')
        document.querySelector('#polar-chart_01002-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01002').classList.remove('visible')
        document.querySelector('#f-path-01002').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01002;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01002
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01002
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01002
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01002
    }
    com_01002.onclick = togg01002;
    list_01002.onclick = togg01002;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01003 = data[2];
    /*Récupere les données que je veut de la Commune */
    name_01003 = rows01003.Libellé_géographique;
    Pop_01003 = rows01003.Population_en_2017;
    Pop_017_01003 = rows01003.Pop_017_ans_2017;
    Pop_mediane_vote_01003 = rows01003.Popu_possible_voté;
    nbr_inscrit_01003 = rows01003.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01003').textContent = name_01003;
    let com_01003 = document.getElementById("f-path-01004");
    let list_01003 = document.getElementById("list_01003");
    function togg01003() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01003-01').classList.remove('visible')
        document.querySelector('#polar-chart_01003-01').classList.remove('visible')
        document.querySelector('#polar-chart_01003-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01003').classList.remove('visible')
        document.querySelector('#f-path-01004').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01003;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01003
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01003
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01003
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01003
    }
    com_01003.onclick = togg01003;
    list_01003.onclick = togg01003;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01004 = data[3];
    /*Récupere les données que je veut de la Commune */
    name_01004 = rows01004.Libellé_géographique;
    Pop_01004 = rows01004.Population_en_2017;
    Pop_017_01004 = rows01004.Pop_017_ans_2017;
    Pop_mediane_vote_01004 = rows01004.Popu_possible_voté;
    nbr_inscrit_01004 = rows01004.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01004').textContent = name_01004;
    let com_01004 = document.getElementById("f-path-01005");
    let list_01004 = document.getElementById("list_01004");
    function togg01004() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01004-01').classList.remove('visible')
        document.querySelector('#polar-chart_01004-01').classList.remove('visible')
        document.querySelector('#polar-chart_01004-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01004').classList.remove('visible')
        document.querySelector('#f-path-01005').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01004;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01004
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01004
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01004
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01004
    }
    com_01004.onclick = togg01004;
    list_01004.onclick = togg01004;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01005 = data[4];
    /*Récupere les données que je veut de la Commune */
    name_01005 = rows01005.Libellé_géographique;
    Pop_01005 = rows01005.Population_en_2017;
    Pop_017_01005 = rows01005.Pop_017_ans_2017;
    Pop_mediane_vote_01005 = rows01005.Popu_possible_voté;
    nbr_inscrit_01005 = rows01005.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01005').textContent = name_01005;
    let com_01005 = document.getElementById("f-path-01006");
    let list_01005 = document.getElementById("list_01005");
    function togg01005() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01005-01').classList.remove('visible')
        document.querySelector('#polar-chart_01005-01').classList.remove('visible')
        document.querySelector('#polar-chart_01005-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01005').classList.remove('visible')
        document.querySelector('#f-path-01006').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01005
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01005
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01005
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01005
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01005
    }
    com_01005.onclick = togg01005;
    list_01005.onclick = togg01005;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01006 = data[5];
    /*Récupere les données que je veut de la Commune */
    name_01006 = rows01006.Libellé_géographique;
    Pop_01006 = rows01006.Population_en_2017;
    Pop_017_01006 = rows01006.Pop_017_ans_2017;
    Pop_mediane_vote_01006 = rows01006.Popu_possible_voté;
    nbr_inscrit_01006 = rows01006.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01006').textContent = name_01006;
    let com_01006 = document.getElementById("f-path-01007");
    let list_01006 = document.getElementById("list_01006");
    function togg01006() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01006-01').classList.remove('visible')
        document.querySelector('#polar-chart_01006-01').classList.remove('visible')
        document.querySelector('#polar-chart_01006-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01006').classList.remove('visible')
        document.querySelector('#f-path-01007').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01006
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01006
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01006
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01006
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01006
    }
    com_01006.onclick = togg01006;
    list_01006.onclick = togg01006;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01007 = data[6];
    /*Récupere les données que je veut de la Commune */
    name_01007 = rows01007.Libellé_géographique;
    Pop_01007 = rows01007.Population_en_2017;
    Pop_017_01007 = rows01007.Pop_017_ans_2017;
    Pop_mediane_vote_01007 = rows01007.Popu_possible_voté;
    nbr_inscrit_01007 = rows01007.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01007').textContent = name_01007; 
    let com_01007 = document.getElementById("f-path-01008");
    let list_01007 = document.getElementById("list_01007");
    function togg01007() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01007-01').classList.remove('visible')
        document.querySelector('#polar-chart_01007-01').classList.remove('visible')
        document.querySelector('#polar-chart_01007-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01007').classList.remove('visible')
        document.querySelector('#f-path-01008').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01007
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01007
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01007
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01007
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01007
    }
    com_01007.onclick = togg01007;
    list_01007.onclick = togg01007;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01008 = data[7];
    
    /*Récupere les données que je veut de la Commune */
    name_01008 = rows01008.Libellé_géographique;
    Pop_01008 = rows01008.Population_en_2017;
    Pop_017_01008 = rows01008.Pop_017_ans_2017;
    Pop_mediane_vote_01008 = rows01008.Popu_possible_voté;
    nbr_inscrit_01008 = rows01008.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01008').textContent = name_01008;
   
    let com_01008 = document.getElementById("f-path-01009");
    let list_01008 = document.getElementById("list_01008");


    function togg01008() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01008-01').classList.remove('visible')
        document.querySelector('#polar-chart_01008-01').classList.remove('visible')
        document.querySelector('#polar-chart_01008-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01008').classList.remove('visible')
        document.querySelector('#f-path-01009').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01008
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01008
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01008
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01008
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01008
    }
    com_01008.onclick = togg01008;
    list_01008.onclick = togg01008;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01009 = data[8];
    
    /*Récupere les données que je veut de la Commune */
    name_01009 = rows01009.Libellé_géographique;
    Pop_01009 = rows01009.Population_en_2017;
    Pop_017_01009 = rows01009.Pop_017_ans_2017;
    Pop_mediane_vote_01009 = rows01009.Popu_possible_voté;
    nbr_inscrit_01009 = rows01009.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01009').textContent = name_01009;

    let com_01009 = document.getElementById("f-path-01010");
    let list_01009 = document.getElementById("list_01009");


    function togg01009() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01009-01').classList.remove('visible')
        document.querySelector('#polar-chart_01009-01').classList.remove('visible')
        document.querySelector('#polar-chart_01009-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01009').classList.remove('visible')
        document.querySelector('#f-path-01010').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01009
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01009
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01009
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01009
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01009
    }
    com_01009.onclick = togg01009;
    list_01009.onclick = togg01009;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01010 = data[9];
 
    /*Récupere les données que je veut de la Commune */
    name_01010 = rows01010.Libellé_géographique;
    Pop_01010 = rows01010.Population_en_2017;
    Pop_017_01010 = rows01010.Pop_017_ans_2017;
    Pop_mediane_vote_01010 = rows01010.Popu_possible_voté;
    nbr_inscrit_01010 = rows01010.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01010').textContent = name_01010;

    let com_01010 = document.getElementById("f-path-01010");
    let list_01010 = document.getElementById("list_01010");


    function togg01010() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01010-01').classList.remove('visible')
        document.querySelector('#polar-chart_01010-01').classList.remove('visible')
        document.querySelector('#polar-chart_01010-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01010').classList.remove('visible')
        document.querySelector('#f-path-01011').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01010
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01010
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01010
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01010
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01010
    }
    com_01010.onclick = togg01010;
    list_01010.onclick = togg01010;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01011 = data[10];

    /*Récupere les données que je veut de la Commune */
    name_01011 = rows01011.Libellé_géographique;
    Pop_01011 = rows01011.Population_en_2017;
    Pop_017_01011 = rows01011.Pop_017_ans_2017;
    Pop_mediane_vote_01011 = rows01011.Popu_possible_voté;
    nbr_inscrit_01011 = rows01011.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01011').textContent = name_01011;
   
    let com_01011 = document.getElementById("f-path-01012");
    let list_01011 = document.getElementById("list_01011");


    function togg01011() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01011-01').classList.remove('visible')
        document.querySelector('#polar-chart_01011-01').classList.remove('visible')
        document.querySelector('#polar-chart_01011-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01011').classList.remove('visible')
        document.querySelector('#f-path-01012').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01011
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01011
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01011
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01011
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01011
    }
    com_01011.onclick = togg01011;
    list_01011.onclick = togg01011;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01012 = data[11];

    /*Récupere les données que je veut de la Commune */
    name_01012 = rows01012.Libellé_géographique;
    Pop_01012 = rows01012.Population_en_2017;
    Pop_017_01012 = rows01012.Pop_017_ans_2017;
    Pop_mediane_vote_01012 = rows01012.Popu_possible_voté;
    nbr_inscrit_01012 = rows01012.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01012').textContent = name_01012;
   
    let com_01012 = document.getElementById("f-path-01013");
    let list_01012 = document.getElementById("list_01012");


    function togg01012() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01012-01').classList.remove('visible')
        document.querySelector('#polar-chart_01012-01').classList.remove('visible')
        document.querySelector('#polar-chart_01012-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01012').classList.remove('visible')
        document.querySelector('#f-path-01013').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01012
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01012
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01012
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01012
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01012
    }
    com_01012.onclick = togg01012;
    list_01012.onclick = togg01012;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01013 = data[12];

    /*Récupere les données que je veut de la Commune */
    name_01013 = rows01013.Libellé_géographique;
    Pop_01013 = rows01013.Population_en_2017;
    Pop_017_01013 = rows01013.Pop_017_ans_2017;
    Pop_mediane_vote_01013 = rows01013.Popu_possible_voté;
    nbr_inscrit_01013 = rows01013.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01013').textContent = name_01013;
   
    let com_01013 = document.getElementById("f-path-01014");
    let list_01013 = document.getElementById("list_01013");


    function togg01013() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01013-01').classList.remove('visible')
        document.querySelector('#polar-chart_01013-01').classList.remove('visible')
        document.querySelector('#polar-chart_01013-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01013').classList.remove('visible')
        document.querySelector('#f-path-01014').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01013
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01013
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01013
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01013
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01013
    }
    com_01013.onclick = togg01013;
    list_01013.onclick = togg01013;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01014 = data[13];

    /*Récupere les données que je veut de la Commune */
    name_01014 = rows01014.Libellé_géographique;
    Pop_01014 = rows01014.Population_en_2017;
    Pop_017_01014 = rows01014.Pop_017_ans_2017;
    Pop_mediane_vote_01014 = rows01014.Popu_possible_voté;
    nbr_inscrit_01014 = rows01014.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01014').textContent = name_01014;
   
    let com_01014 = document.getElementById("f-path-01015");
    let list_01014 = document.getElementById("list_01014");


    function togg01014() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01014-01').classList.remove('visible')
        document.querySelector('#polar-chart_01014-01').classList.remove('visible')
        document.querySelector('#polar-chart_01014-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01014').classList.remove('visible')
        document.querySelector('#f-path-01015').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01014
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01014
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01014
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01014
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01014
    }
    com_01014.onclick = togg01014;
    list_01014.onclick = togg01014;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01015 = data[14];

    /*Récupere les données que je veut de la Commune */
    name_01015 = rows01015.Libellé_géographique;
    Pop_01015 = rows01015.Population_en_2017;
    Pop_017_01015 = rows01015.Pop_017_ans_2017;
    Pop_mediane_vote_01015 = rows01015.Popu_possible_voté;
    nbr_inscrit_01015 = rows01015.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01015').textContent = name_01015;
   
    let com_01015 = document.getElementById("f-path-01016");
    let list_01015 = document.getElementById("list_01015");


    function togg01015() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01015-01').classList.remove('visible')
        document.querySelector('#polar-chart_01015-01').classList.remove('visible')
        document.querySelector('#polar-chart_01015-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01015').classList.remove('visible')
        document.querySelector('#f-path-01016').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01015
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01015
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01015
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01015
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01015
    }
    com_01015.onclick = togg01015;
    list_01015.onclick = togg01015;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01016 = data[15];

    /*Récupere les données que je veut de la Commune */
    name_01016 = rows01016.Libellé_géographique;
    Pop_01016 = rows01016.Population_en_2017;
    Pop_017_01016 = rows01016.Pop_017_ans_2017;
    Pop_mediane_vote_01016 = rows01016.Popu_possible_voté;
    nbr_inscrit_01016 = rows01016.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01016').textContent = name_01016;
   
    let com_01016 = document.getElementById("f-path-01017");
    let list_01016 = document.getElementById("list_01016");


    function togg01016() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01016-01').classList.remove('visible')
        document.querySelector('#polar-chart_01016-01').classList.remove('visible')
        document.querySelector('#polar-chart_01016-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01016').classList.remove('visible')
        document.querySelector('#f-path-01017').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01016
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01016
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01016
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01016
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01016
    }
    com_01016.onclick = togg01016;
    list_01016.onclick = togg01016;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01017 = data[16];

    /*Récupere les données que je veut de la Commune */
    name_01017 = rows01017.Libellé_géographique;
    Pop_01017 = rows01017.Population_en_2017;
    Pop_017_01017 = rows01017.Pop_017_ans_2017;
    Pop_mediane_vote_01017 = rows01017.Popu_possible_voté;
    nbr_inscrit_01017 = rows01017.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01017').textContent = name_01017;
   
    let com_01017 = document.getElementById("f-path-01019");
    let list_01017 = document.getElementById("list_01017");


    function togg01017() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01017-01').classList.remove('visible')
        document.querySelector('#polar-chart_01017-01').classList.remove('visible')
        document.querySelector('#polar-chart_01017-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01017').classList.remove('visible')
        document.querySelector('#f-path-01019').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01017
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01017
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01017
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01017
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01017
    }
    com_01017.onclick = togg01017;
    list_01017.onclick = togg01017;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01018 = data[17];

    /*Récupere les données que je veut de la Commune */
    name_01018 = rows01018.Libellé_géographique;
    Pop_01018 = rows01018.Population_en_2017;
    Pop_017_01018 = rows01018.Pop_017_ans_2017;
    Pop_mediane_vote_01018 = rows01017.Popu_possible_voté;
    nbr_inscrit_01018 = rows01018.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01018').textContent = name_01018;
   
    let com_01018 = document.getElementById("f-path-01021");
    let list_01018 = document.getElementById("list_01018");


    function togg01018() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01018-01').classList.remove('visible')
        document.querySelector('#polar-chart_01018-01').classList.remove('visible')
        document.querySelector('#polar-chart_01018-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01018').classList.remove('visible')
        document.querySelector('#f-path-01021').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01018
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01018
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01018
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01018
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01018
    }
    com_01018.onclick = togg01018;
    list_01018.onclick = togg01018;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01019 = data[18];

    /*Récupere les données que je veut de la Commune */
    name_01019 = rows01019.Libellé_géographique;
    Pop_01019 = rows01019.Population_en_2017;
    Pop_017_01019 = rows01019.Pop_017_ans_2017;
    Pop_mediane_vote_01019 = rows01019.Popu_possible_voté;
    nbr_inscrit_01019 = rows01019.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01019').textContent = name_01019;
   
    let com_01019 = document.getElementById("f-path-01022");
    let list_01019 = document.getElementById("list_01019");


    function togg01019() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01019-01').classList.remove('visible')
        document.querySelector('#polar-chart_01019-01').classList.remove('visible')
        document.querySelector('#polar-chart_01019-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01019').classList.remove('visible')
        document.querySelector('#f-path-01022').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01019
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01019
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01019
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01019
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01019
    }
    com_01019.onclick = togg01019;
    list_01019.onclick = togg01019;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01020 = data[19];

    /*Récupere les données que je veut de la Commune */
    name_01020 = rows01020.Libellé_géographique;
    Pop_01020 = rows01020.Population_en_2017;
    Pop_017_01020 = rows01020.Pop_017_ans_2017;
    Pop_mediane_vote_01020 = rows01020.Popu_possible_voté;
    nbr_inscrit_01020 = rows01020.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01020').textContent = name_01020;
   
    let com_01020 = document.getElementById("f-path-01023");
    let list_01020 = document.getElementById("list_01020");


    function togg01020() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01020-01').classList.remove('visible')
        document.querySelector('#polar-chart_01020-01').classList.remove('visible')
        document.querySelector('#polar-chart_01020-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01020').classList.remove('visible')
        document.querySelector('#f-path-01023').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01020
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01020
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01020
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01020
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01020
    }
    com_01020.onclick = togg01020;
    list_01020.onclick = togg01020;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01021 = data[20];

    /*Récupere les données que je veut de la Commune */
    name_01021 = rows01021.Libellé_géographique;
    Pop_01021 = rows01021.Population_en_2017;
    Pop_017_01021 = rows01021.Pop_017_ans_2017;
    Pop_mediane_vote_01021 = rows01021.Popu_possible_voté;
    nbr_inscrit_01021 = rows01021.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01021').textContent = name_01021;
   
    let com_01021 = document.getElementById("f-path-01024");
    let list_01021 = document.getElementById("list_01021");


    function togg01021() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01021-01').classList.remove('visible')
        document.querySelector('#polar-chart_01021-01').classList.remove('visible')
        document.querySelector('#polar-chart_01021-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01021').classList.remove('visible')
        document.querySelector('#f-path-01024').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01021
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01021
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01021
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01021
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01021
    }
    com_01021.onclick = togg01021;
    list_01021.onclick = togg01021;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01022 = data[21];

    /*Récupere les données que je veut de la Commune */
    name_01022 = rows01022.Libellé_géographique;
    Pop_01022 = rows01022.Population_en_2017;
    Pop_017_01022 = rows01022.Pop_017_ans_2017;
    Pop_mediane_vote_01022 = rows01022.Popu_possible_voté;
    nbr_inscrit_01022 = rows01022.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01022').textContent = name_01022;
   
    let com_01022 = document.getElementById("f-path-01025");
    let list_01022 = document.getElementById("list_01022");


    function togg01022() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01022-01').classList.remove('visible')
        document.querySelector('#polar-chart_01022-01').classList.remove('visible')
        document.querySelector('#polar-chart_01022-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01022').classList.remove('visible')
        document.querySelector('#f-path-01025').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01022
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01022
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01022
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01022
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01022
    }
    com_01022.onclick = togg01022;
    list_01022.onclick = togg01022;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01023 = data[22];

    /*Récupere les données que je veut de la Commune */
    name_01023 = rows01023.Libellé_géographique;
    Pop_01023 = rows01023.Population_en_2017;
    Pop_017_01023 = rows01023.Pop_017_ans_2017;
    Pop_mediane_vote_01023 = rows01023.Popu_possible_voté;
    nbr_inscrit_01023 = rows01023.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01023').textContent = name_01023;
   
    let com_01023 = document.getElementById("f-path-01026");
    let list_01023 = document.getElementById("list_01023");


    function togg01023() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01023-01').classList.remove('visible')
        document.querySelector('#polar-chart_01023-01').classList.remove('visible')
        document.querySelector('#polar-chart_01023-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01023').classList.remove('visible')
        document.querySelector('#f-path-01026').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01023
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01023
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01023
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01023
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01023
    }
    com_01023.onclick = togg01023;
    list_01023.onclick = togg01023;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01024 = data[23];

    /*Récupere les données que je veut de la Commune */
    name_01024 = rows01024.Libellé_géographique;
    Pop_01024 = rows01024.Population_en_2017;
    Pop_017_01024 = rows01024.Pop_017_ans_2017;
    Pop_mediane_vote_01024 = rows01024.Popu_possible_voté;
    nbr_inscrit_01024 = rows01024.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01024').textContent = name_01024;
   
    let com_01024 = document.getElementById("f-path-01027");
    let list_01024 = document.getElementById("list_01024");


    function togg01024() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01024-01').classList.remove('visible')
        document.querySelector('#polar-chart_01024-01').classList.remove('visible')
        document.querySelector('#polar-chart_01024-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01024').classList.remove('visible')
        document.querySelector('#f-path-01027').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01024
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01024
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01024
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01024
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01024
    }
    com_01024.onclick = togg01024;
    list_01024.onclick = togg01024;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01025 = data[24];

    /*Récupere les données que je veut de la Commune */
    name_01025 = rows01025.Libellé_géographique;
    Pop_01025 = rows01025.Population_en_2017;
    Pop_017_01025 = rows01025.Pop_017_ans_2017;
    Pop_mediane_vote_01025 = rows01025.Popu_possible_voté;
    nbr_inscrit_01025 = rows01025.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01025').textContent = name_01025;
   
    let com_01025 = document.getElementById("f-path-01028");
    let list_01025 = document.getElementById("list_01025");


    function togg01025() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01025-01').classList.remove('visible')
        document.querySelector('#polar-chart_01025-01').classList.remove('visible')
        document.querySelector('#polar-chart_01025-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01025').classList.remove('visible')
        document.querySelector('#f-path-01028').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01025
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01025
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01025
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01025
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01025
    }
    com_01025.onclick = togg01025;
    list_01025.onclick = togg01025;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01026 = data[25];

    /*Récupere les données que je veut de la Commune */
    name_01026 = rows01026.Libellé_géographique;
    Pop_01026 = rows01026.Population_en_2017;
    Pop_017_01026 = rows01026.Pop_017_ans_2017;
    Pop_mediane_vote_01026 = rows01026.Popu_possible_voté;
    nbr_inscrit_01026 = rows01026.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01026').textContent = name_01026;
   
    let com_01026 = document.getElementById("f-path-01029");
    let list_01026 = document.getElementById("list_01026");


    function togg01026() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01026-01').classList.remove('visible')
        document.querySelector('#polar-chart_01026-01').classList.remove('visible')
        document.querySelector('#polar-chart_01026-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01026').classList.remove('visible')
        document.querySelector('#f-path-01029').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01026
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01026
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01026
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01026
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01026
    }
    com_01026.onclick = togg01026;
    list_01026.onclick = togg01026;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01027 = data[26];

    /*Récupere les données que je veut de la Commune */
    name_01027 = rows01027.Libellé_géographique;
    Pop_01027 = rows01027.Population_en_2017;
    Pop_017_01027 = rows01027.Pop_017_ans_2017;
    Pop_mediane_vote_01027 = rows01027.Popu_possible_voté;
    nbr_inscrit_01027 = rows01027.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01027').textContent = name_01027;
   
    let com_01027 = document.getElementById("f-path-01030");
    let list_01027 = document.getElementById("list_01027");


    function togg01027() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01027-01').classList.remove('visible')
        document.querySelector('#polar-chart_01027-01').classList.remove('visible')
        document.querySelector('#polar-chart_01027-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01027').classList.remove('visible')
        document.querySelector('#f-path-01030').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01027
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01027
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01027
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01027
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01027
    }
    com_01027.onclick = togg01027;
    list_01027.onclick = togg01027;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01028 = data[27];

    /*Récupere les données que je veut de la Commune */
    name_01028 = rows01028.Libellé_géographique;
    Pop_01028 = rows01028.Population_en_2017;
    Pop_017_01028 = rows01028.Pop_017_ans_2017;
    Pop_mediane_vote_01028 = rows01028.Popu_possible_voté;
    nbr_inscrit_01028 = rows01028.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01028').textContent = name_01028;
   
    let com_01028 = document.getElementById("f-path-01031");
    let list_01028 = document.getElementById("list_01028");


    function togg01028() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01028-01').classList.remove('visible')
        document.querySelector('#polar-chart_01028-01').classList.remove('visible')
        document.querySelector('#polar-chart_01028-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01028').classList.remove('visible')
        document.querySelector('#f-path-01031').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01028
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01028
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01028
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01028
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01028
    }
    com_01028.onclick = togg01028;
    list_01028.onclick = togg01028;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01029 = data[28];

    /*Récupere les données que je veut de la Commune */
    name_01029 = rows01029.Libellé_géographique;
    Pop_01029 = rows01029.Population_en_2017;
    Pop_017_01029 = rows01029.Pop_017_ans_2017;
    Pop_mediane_vote_01029 = rows01029.Popu_possible_voté;
    nbr_inscrit_01029 = rows01029.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01029').textContent = name_01029;
   
    let com_01029 = document.getElementById("f-path-01032");
    let list_01029 = document.getElementById("list_01029");


    function togg01029() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01029-01').classList.remove('visible')
        document.querySelector('#polar-chart_01029-01').classList.remove('visible')
        document.querySelector('#polar-chart_01029-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01029').classList.remove('visible')
        document.querySelector('#f-path-01032').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01029
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01029
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01029
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01029
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01029
    }
    com_01029.onclick = togg01029;
    list_01029.onclick = togg01029;
     /************************************************************************************* */
    /************************************************************************************* */
    const rows01030 = data[29];

    /*Récupere les données que je veut de la Commune */
    name_01030 = rows01030.Libellé_géographique;
    Pop_01030 = rows01030.Population_en_2017;
    Pop_017_01030 = rows01030.Pop_017_ans_2017;
    Pop_mediane_vote_01030 = rows01030.Popu_possible_voté;
    nbr_inscrit_01030 = rows01030.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01030').textContent = name_01030;
   
    let com_01030 = document.getElementById("f-path-01033");
    let list_01030 = document.getElementById("list_01030");


    function togg01030() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01030-01').classList.remove('visible')
        document.querySelector('#polar-chart_01030-01').classList.remove('visible')
        document.querySelector('#polar-chart_01030-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01030').classList.remove('visible')
        document.querySelector('#f-path-01033').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01030
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01030
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01030
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01030
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01030
    }
    com_01030.onclick = togg01030;
    list_01030.onclick = togg01030;
     /************************************************************************************* */
    /************************************************************************************* */
    const rows01031 = data[30];

    /*Récupere les données que je veut de la Commune */
    name_01031 = rows01031.Libellé_géographique;
    Pop_01031 = rows01031.Population_en_2017;
    Pop_017_01031 = rows01031.Pop_017_ans_2017;
    Pop_mediane_vote_01031 = rows01031.Popu_possible_voté;
    nbr_inscrit_01031 = rows01031.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01031').textContent = name_01031;
   
    let com_01031 = document.getElementById("f-path-01034");
    let list_01031 = document.getElementById("list_01031");


    function togg01031() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01031-01').classList.remove('visible')
        document.querySelector('#polar-chart_01031-01').classList.remove('visible')
        document.querySelector('#polar-chart_01031-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01031').classList.remove('visible')
        document.querySelector('#f-path-01034').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01031
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01031
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01031
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01031
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01031
    }
    com_01031.onclick = togg01031;
    list_01031.onclick = togg01031;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01032 = data[31];

    /*Récupere les données que je veut de la Commune */
    name_01032 = rows01032.Libellé_géographique;
    Pop_01032 = rows01032.Population_en_2017;
    Pop_017_01032 = rows01032.Pop_017_ans_2017;
    Pop_mediane_vote_01032 = rows01032.Popu_possible_voté;
    nbr_inscrit_01032 = rows01032.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01032').textContent = name_01032;
   
    let com_01032 = document.getElementById("f-path-01035");
    let list_01032 = document.getElementById("list_01032");


    function togg01032() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01032-01').classList.remove('visible')
        document.querySelector('#polar-chart_01032-01').classList.remove('visible')
        document.querySelector('#polar-chart_01032-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01032').classList.remove('visible')
        document.querySelector('#f-path-01035').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01032
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01032
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01032
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01032
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01032
    }
    com_01032.onclick = togg01032;
    list_01032.onclick = togg01032;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01033 = data[32];

    /*Récupere les données que je veut de la Commune */
    name_01033 = rows01033.Libellé_géographique;
    Pop_01033 = rows01033.Population_en_2017;
    Pop_017_01033 = rows01033.Pop_017_ans_2017;
    Pop_mediane_vote_01033 = rows01033.Popu_possible_voté;
    nbr_inscrit_01033 = rows01033.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01033').textContent = name_01033;
   
    let com_01033 = document.getElementById("f-path-01036");
    let list_01033 = document.getElementById("list_01033");


    function togg01033() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01033-01').classList.remove('visible')
        document.querySelector('#polar-chart_01033-01').classList.remove('visible')
        document.querySelector('#polar-chart_01033-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01033').classList.remove('visible')
        document.querySelector('#f-path-01036').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01033
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01033
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01033
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01033
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01033
    }
    com_01033.onclick = togg01033;
    list_01033.onclick = togg01033;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01034 = data[33];

    /*Récupere les données que je veut de la Commune */
    name_01034 = rows01034.Libellé_géographique;
    Pop_01034 = rows01034.Population_en_2017;
    Pop_017_01034 = rows01034.Pop_017_ans_2017;
    Pop_mediane_vote_01034 = rows01034.Popu_possible_voté;
    nbr_inscrit_01034 = rows01034.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01034').textContent = name_01034;
   
    let com_01034 = document.getElementById("f-path-01037");
    let list_01034 = document.getElementById("list_01034");


    function togg01034() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01034-01').classList.remove('visible')
        document.querySelector('#polar-chart_01034-01').classList.remove('visible')
        document.querySelector('#polar-chart_01034-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01034').classList.remove('visible')
        document.querySelector('#f-path-01036').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01034
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01034
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01034
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01034
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01034
    }
    com_01034.onclick = togg01034;
    list_01034.onclick = togg01034;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01035 = data[34];

    /*Récupere les données que je veut de la Commune */
    name_01035 = rows01035.Libellé_géographique;
    Pop_01035 = rows01035.Population_en_2017;
    Pop_017_01035 = rows01035.Pop_017_ans_2017;
    Pop_mediane_vote_01035 = rows01035.Popu_possible_voté;
    nbr_inscrit_01035 = rows01035.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01035').textContent = name_01035;
   
    let com_01035 = document.getElementById("f-path-01038");
    let list_01035 = document.getElementById("list_01035");


    function togg01035() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01035-01').classList.remove('visible')
        document.querySelector('#polar-chart_01035-01').classList.remove('visible')
        document.querySelector('#polar-chart_01035-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01035').classList.remove('visible')
        document.querySelector('#f-path-01037').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01035
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01035
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01035
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01035
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01035
    }
    com_01035.onclick = togg01035;
    list_01035.onclick = togg01035;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01036 = data[35];

    /*Récupere les données que je veut de la Commune */
    name_01036 = rows01036.Libellé_géographique;
    Pop_01036 = rows01036.Population_en_2017;
    Pop_017_01036 = rows01036.Pop_017_ans_2017;
    Pop_mediane_vote_01036 = rows01036.Popu_possible_voté;
    nbr_inscrit_01036 = rows01036.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01036').textContent = name_01036;
   
    let com_01036 = document.getElementById("f-path-01039");
    let list_01036 = document.getElementById("list_01036");


    function togg01036() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01036-01').classList.remove('visible')
        document.querySelector('#polar-chart_01036-01').classList.remove('visible')
        document.querySelector('#polar-chart_01036-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01036').classList.remove('visible')
        document.querySelector('#f-path-01039').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01036
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01036
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01036
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01036
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01036
    }
    com_01036.onclick = togg01036;
    list_01036.onclick = togg01036;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01037 = data[36];

    /*Récupere les données que je veut de la Commune */
    name_01037 = rows01037.Libellé_géographique;
    Pop_01037 = rows01037.Population_en_2017;
    Pop_017_01037 = rows01037.Pop_017_ans_2017;
    Pop_mediane_vote_01037 = rows01037.Popu_possible_voté;
    nbr_inscrit_01037 = rows01037.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01037').textContent = name_01037;
   
    let com_01037 = document.getElementById("f-path-01040");
    let list_01037 = document.getElementById("list_01037");


    function togg01037() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01037-01').classList.remove('visible')
        document.querySelector('#polar-chart_01037-01').classList.remove('visible')
        document.querySelector('#polar-chart_01067-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01037').classList.remove('visible')
        document.querySelector('#f-path-01040').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01037
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01037
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01037
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01037
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01037
    }
    com_01037.onclick = togg01037;
    list_01037.onclick = togg01037;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01038 = data[37];

    /*Récupere les données que je veut de la Commune */
    name_01038 = rows01038.Libellé_géographique;
    Pop_01038 = rows01038.Population_en_2017;
    Pop_017_01038 = rows01038.Pop_017_ans_2017;
    Pop_mediane_vote_01038 = rows01038.Popu_possible_voté;
    nbr_inscrit_01038 = rows01038.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01038').textContent = name_01038;
   
    let com_01038 = document.getElementById("f-path-01041");
    let list_01038 = document.getElementById("list_01038");


    function togg01038() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01038-01').classList.remove('visible')
        document.querySelector('#polar-chart_01038-01').classList.remove('visible')
        document.querySelector('#polar-chart_01068-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01038').classList.remove('visible')
        document.querySelector('#f-path-01041').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01038
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01038
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01038
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01038
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01038
    }
    com_01038.onclick = togg01038;
    list_01038.onclick = togg01038;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01039 = data[38];

    /*Récupere les données que je veut de la Commune */
    name_01039 = rows01039.Libellé_géographique;
    Pop_01039 = rows01039.Population_en_2017;
    Pop_017_01039 = rows01039.Pop_017_ans_2017;
    Pop_mediane_vote_01039 = rows01039.Popu_possible_voté;
    nbr_inscrit_01039 = rows01039.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01039').textContent = name_01039;
   
    let com_01039 = document.getElementById("f-path-01042");
    let list_01039 = document.getElementById("list_01039");


    function togg01039() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01039-01').classList.remove('visible')
        document.querySelector('#polar-chart_01039-01').classList.remove('visible')
        document.querySelector('#polar-chart_01069-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01039').classList.remove('visible')
        document.querySelector('#f-path-01042').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01039
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01039
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01039
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01039
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01039
    }
    com_01039.onclick = togg01039;
    list_01039.onclick = togg01039;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01040 = data[39];

    /*Récupere les données que je veut de la Commune */
    name_01040 = rows01040.Libellé_géographique;
    Pop_01040 = rows01040.Population_en_2017;
    Pop_017_01040 = rows01040.Pop_017_ans_2017;
    Pop_mediane_vote_01040 = rows01040.Popu_possible_voté;
    nbr_inscrit_01040 = rows01040.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01040').textContent = name_01040;
   
    let com_01040 = document.getElementById("f-path-01043");
    let list_01040 = document.getElementById("list_01040");


    function togg01040() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01040-01').classList.remove('visible')
        document.querySelector('#polar-chart_01040-01').classList.remove('visible')
        document.querySelector('#polar-chart_01040-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01040').classList.remove('visible')
        document.querySelector('#f-path-01043').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01040
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01040
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01040
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01040
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01040
    }
    com_01040.onclick = togg01040;
    list_01040.onclick = togg01040;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01041 = data[40];

    /*Récupere les données que je veut de la Commune */
    name_01041 = rows01041.Libellé_géographique;
    Pop_01041 = rows01041.Population_en_2017;
    Pop_017_01041 = rows01041.Pop_017_ans_2017;
    Pop_mediane_vote_01041 = rows01041.Popu_possible_voté;
    nbr_inscrit_01041 = rows01041.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01041').textContent = name_01041;
   
    let com_01041 = document.getElementById("f-path-01044");
    let list_01041 = document.getElementById("list_01041");


    function togg01041() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01041-01').classList.remove('visible')
        document.querySelector('#polar-chart_01041-01').classList.remove('visible')
        document.querySelector('#polar-chart_01041-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01041').classList.remove('visible')
        document.querySelector('#f-path-01044').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01041
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01041
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01041
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01041
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01041
    }
    com_01041.onclick = togg01041;
    list_01041.onclick = togg01041;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01042 = data[41];

    /*Récupere les données que je veut de la Commune */
    name_01042 = rows01042.Libellé_géographique;
    Pop_01042 = rows01042.Population_en_2017;
    Pop_017_01042 = rows01042.Pop_017_ans_2017;
    Pop_mediane_vote_01042 = rows01042.Popu_possible_voté;
    nbr_inscrit_01042 = rows01042.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01042').textContent = name_01042;
   
    let com_01042 = document.getElementById("f-path-01045");
    let list_01042 = document.getElementById("list_01042");


    function togg01042() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01042-01').classList.remove('visible')
        document.querySelector('#polar-chart_01042-01').classList.remove('visible')
        document.querySelector('#polar-chart_01042-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01042').classList.remove('visible')
        document.querySelector('#f-path-01045').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01042
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01042
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01042
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01042
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01042
    }
    com_01042.onclick = togg01042;
    list_01042.onclick = togg01042;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01043 = data[42];

    /*Récupere les données que je veut de la Commune */
    name_01043 = rows01043.Libellé_géographique;
    Pop_01043 = rows01043.Population_en_2017;
    Pop_017_01043 = rows01043.Pop_017_ans_2017;
    Pop_mediane_vote_01043 = rows01043.Popu_possible_voté;
    nbr_inscrit_01043 = rows01043.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01043').textContent = name_01043;
   
    let com_01043 = document.getElementById("f-path-01046");
    let list_01043 = document.getElementById("list_01043");


    function togg01043() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01043-01').classList.remove('visible')
        document.querySelector('#polar-chart_01043-01').classList.remove('visible')
        document.querySelector('#polar-chart_01043-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01043').classList.remove('visible')
        document.querySelector('#f-path-01046').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01043
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01043
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01043
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01043
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01043
    }
    com_01043.onclick = togg01043;
    list_01043.onclick = togg01043;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01044 = data[43];

    /*Récupere les données que je veut de la Commune */
    name_01044 = rows01044.Libellé_géographique;
    Pop_01044 = rows01044.Population_en_2017;
    Pop_017_01044 = rows01044.Pop_017_ans_2017;
    Pop_mediane_vote_01044 = rows01044.Popu_possible_voté;
    nbr_inscrit_01044 = rows01044.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01044').textContent = name_01044;
   
    let com_01044 = document.getElementById("f-path-01047");
    let list_01044 = document.getElementById("list_01044");


    function togg01044() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01044-01').classList.remove('visible')
        document.querySelector('#polar-chart_01044-01').classList.remove('visible')
        document.querySelector('#polar-chart_01044-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01044').classList.remove('visible')
        document.querySelector('#f-path-01047').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01044
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01044
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01044
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01044
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01044
    }
    com_01044.onclick = togg01044;
    list_01044.onclick = togg01044;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01045 = data[44];

    /*Récupere les données que je veut de la Commune */
    name_01045 = rows01045.Libellé_géographique;
    Pop_01045 = rows01045.Population_en_2017;
    Pop_017_01045 = rows01045.Pop_017_ans_2017;
    Pop_mediane_vote_01045 = rows01045.Popu_possible_voté;
    nbr_inscrit_01045 = rows01045.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01045').textContent = name_01045;
   
    let com_01045 = document.getElementById("f-path-01049");
    let list_01045 = document.getElementById("list_01045");


    function togg01045() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01045-01').classList.remove('visible')
        document.querySelector('#polar-chart_01045-01').classList.remove('visible')
        document.querySelector('#polar-chart_01045-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01045').classList.remove('visible')
        document.querySelector('#f-path-01049').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01045
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01045
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01045
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01045
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01045
    }
    com_01045.onclick = togg01045;
    list_01045.onclick = togg01045;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01046 = data[45];

    /*Récupere les données que je veut de la Commune */
    name_01046 = rows01046.Libellé_géographique;
    Pop_01046 = rows01046.Population_en_2017;
    Pop_017_01046 = rows01046.Pop_017_ans_2017;
    Pop_mediane_vote_01046 = rows01046.Popu_possible_voté;
    nbr_inscrit_01046 = rows01046.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01046').textContent = name_01046;
   
    let com_01046 = document.getElementById("f-path-01050");
    let list_01046 = document.getElementById("list_01046");


    function togg01046() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01046-01').classList.remove('visible')
        document.querySelector('#polar-chart_01046-01').classList.remove('visible')
        document.querySelector('#polar-chart_01046-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01046').classList.remove('visible')
        document.querySelector('#f-path-01050').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01046
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01046
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01046
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01046
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01046
    }
    com_01046.onclick = togg01046;
    list_01046.onclick = togg01046;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01047 = data[46];

    /*Récupere les données que je veut de la Commune */
    name_01047 = rows01047.Libellé_géographique;
    Pop_01047 = rows01047.Population_en_2017;
    Pop_017_01047 = rows01047.Pop_017_ans_2017;
    Pop_mediane_vote_01047 = rows01047.Popu_possible_voté;
    nbr_inscrit_01047 = rows01047.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01047').textContent = name_01047;
   
    let com_01047 = document.getElementById("f-path-01051");
    let list_01047 = document.getElementById("list_01047");


    function togg01047() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01047-01').classList.remove('visible')
        document.querySelector('#polar-chart_01047-01').classList.remove('visible')
        document.querySelector('#polar-chart_01047-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01047').classList.remove('visible')
        document.querySelector('#f-path-01051').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01047
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01047
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01047
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01047
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01047
    }
    com_01047.onclick = togg01047;
    list_01047.onclick = togg01047;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01048 = data[47];

    /*Récupere les données que je veut de la Commune */
    name_01048 = rows01048.Libellé_géographique;
    Pop_01048 = rows01048.Population_en_2017;
    Pop_017_01048 = rows01048.Pop_017_ans_2017;
    Pop_mediane_vote_01048 = rows01048.Popu_possible_voté;
    nbr_inscrit_01048 = rows01048.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01048').textContent = name_01048;
   
    let com_01048 = document.getElementById("f-path-01052");
    let list_01048 = document.getElementById("list_01048");


    function togg01048() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01048-01').classList.remove('visible')
        document.querySelector('#polar-chart_01048-01').classList.remove('visible')
        document.querySelector('#polar-chart_01048-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01048').classList.remove('visible')
        document.querySelector('#f-path-01052').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01048
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01048
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01048
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01048
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01048
    }
    com_01048.onclick = togg01048;
    list_01048.onclick = togg01048;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01049 = data[48];

    /*Récupere les données que je veut de la Commune */
    name_01049 = rows01049.Libellé_géographique;
    Pop_01049 = rows01049.Population_en_2017;
    Pop_017_01049 = rows01049.Pop_017_ans_2017;
    Pop_mediane_vote_01049 = rows01049.Popu_possible_voté;
    nbr_inscrit_01049 = rows01049.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01049').textContent = name_01049;
   
    let com_01049 = document.getElementById("f-path-01053");
    let list_01049 = document.getElementById("list_01049");


    function togg01049() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01049-01').classList.remove('visible')
        document.querySelector('#polar-chart_01049-01').classList.remove('visible')
        document.querySelector('#polar-chart_01049-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01049').classList.remove('visible')
        document.querySelector('#f-path-01053').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01049
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01049
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01049
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01049
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01049
    }
    com_01049.onclick = togg01049;
    list_01049.onclick = togg01049;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01050 = data[49];

    /*Récupere les données que je veut de la Commune */
    name_01050 = rows01050.Libellé_géographique;
    Pop_01050 = rows01050.Population_en_2017;
    Pop_017_01050 = rows01050.Pop_017_ans_2017;
    Pop_mediane_vote_01050 = rows01050.Popu_possible_voté;
    nbr_inscrit_01050 = rows01050.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01050').textContent = name_01050;
   
    let com_01050 = document.getElementById("f-path-01054");
    let list_01050 = document.getElementById("list_01050");


    function togg01050() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01050-01').classList.remove('visible')
        document.querySelector('#polar-chart_01050-01').classList.remove('visible')
        document.querySelector('#polar-chart_01050-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01050').classList.remove('visible')
        document.querySelector('#f-path-01054').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01050
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01050
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01050
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01050
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01050
    }
    com_01050.onclick = togg01050;
    list_01050.onclick = togg01050;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01051 = data[50];

    /*Récupere les données que je veut de la Commune */
    name_01051 = rows01051.Libellé_géographique;
    Pop_01051 = rows01051.Population_en_2017;
    Pop_017_01051 = rows01051.Pop_017_ans_2017;
    Pop_mediane_vote_01051 = rows01051.Popu_possible_voté;
    nbr_inscrit_01051 = rows01051.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01051').textContent = name_01051;
   
    let com_01051 = document.getElementById("f-path-01056");
    let list_01051 = document.getElementById("list_01051");


    function togg01051() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01051-01').classList.remove('visible')
        document.querySelector('#polar-chart_01051-01').classList.remove('visible')
        document.querySelector('#polar-chart_01051-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01051').classList.remove('visible')
        document.querySelector('#f-path-01056').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01051
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01051
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01051
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01051
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01051
    }
    com_01051.onclick = togg01051;
    list_01051.onclick = togg01051;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01052 = data[51];

    /*Récupere les données que je veut de la Commune */
    name_01052 = rows01052.Libellé_géographique;
    Pop_01052 = rows01052.Population_en_2017;
    Pop_017_01052 = rows01052.Pop_017_ans_2017;
    Pop_mediane_vote_01052 = rows01052.Popu_possible_voté;
    nbr_inscrit_01052 = rows01052.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01052').textContent = name_01052;
   
    let com_01052 = document.getElementById("f-path-01057");
    let list_01052 = document.getElementById("list_01052");


    function togg01052() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01052-01').classList.remove('visible')
        document.querySelector('#polar-chart_01052-01').classList.remove('visible')
        document.querySelector('#polar-chart_01052-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01052').classList.remove('visible')
        document.querySelector('#f-path-01057').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01052
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01052
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01052
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01052
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01052
    }
    com_01052.onclick = togg01052;
    list_01052.onclick = togg01052;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01053 = data[52];

    /*Récupere les données que je veut de la Commune */
    name_01053 = rows01053.Libellé_géographique;
    Pop_01053 = rows01053.Population_en_2017;
    Pop_017_01053 = rows01053.Pop_017_ans_2017;
    Pop_mediane_vote_01053 = rows01053.Popu_possible_voté;
    nbr_inscrit_01053 = rows01053.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01053').textContent = name_01053;
   
    let com_01053 = document.getElementById("f-path-01058");
    let list_01053 = document.getElementById("list_01053");


    function togg01053() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01053-01').classList.remove('visible')
        document.querySelector('#polar-chart_01053-01').classList.remove('visible')
        document.querySelector('#polar-chart_01053-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01053').classList.remove('visible')
        document.querySelector('#f-path-01058').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01053
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01053
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01053
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01053
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01053
    }
    com_01053.onclick = togg01053;
    list_01053.onclick = togg01053;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01054 = data[53];

    /*Récupere les données que je veut de la Commune */
    name_01054 = rows01054.Libellé_géographique;
    Pop_01054 = rows01054.Population_en_2017;
    Pop_017_01054 = rows01054.Pop_017_ans_2017;
    Pop_mediane_vote_01054 = rows01054.Popu_possible_voté;
    nbr_inscrit_01054 = rows01054.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01054').textContent = name_01054;
   
    let com_01054 = document.getElementById("f-path-01060");
    let list_01054 = document.getElementById("list_01054");


    function togg01054() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01054-01').classList.remove('visible')
        document.querySelector('#polar-chart_01054-01').classList.remove('visible')
        document.querySelector('#polar-chart_01054-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01054').classList.remove('visible')
        document.querySelector('#f-path-01060').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01054
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01054
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01054
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01054
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01054
    }
    com_01054.onclick = togg01054;
    list_01054.onclick = togg01054;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01055 = data[54];

    /*Récupere les données que je veut de la Commune */
    name_01055 = rows01055.Libellé_géographique;
    Pop_01055 = rows01055.Population_en_2017;
    Pop_017_01055 = rows01055.Pop_017_ans_2017;
    Pop_mediane_vote_01055 = rows01055.Popu_possible_voté;
    nbr_inscrit_01055 = rows01055.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01055').textContent = name_01055;
   
    let com_01055 = document.getElementById("f-path-01061");
    let list_01055 = document.getElementById("list_01055");


    function togg01055() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01055-01').classList.remove('visible')
        document.querySelector('#polar-chart_01055-01').classList.remove('visible')
        document.querySelector('#polar-chart_01055-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01055').classList.remove('visible')
        document.querySelector('#f-path-01061').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01055
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01055
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01055
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01055
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01055
    }
    com_01055.onclick = togg01055;
    list_01055.onclick = togg01055;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01056 = data[55];

    /*Récupere les données que je veut de la Commune */
    name_01056 = rows01056.Libellé_géographique;
    Pop_01056 = rows01056.Population_en_2017;
    Pop_017_01056 = rows01056.Pop_017_ans_2017;
    Pop_mediane_vote_01056 = rows01056.Popu_possible_voté;
    nbr_inscrit_01056 = rows01056.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01056').textContent = name_01056;
   
    let com_01056 = document.getElementById("f-path-01062");
    let list_01056 = document.getElementById("list_01056");


    function togg01056() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01056-01').classList.remove('visible')
        document.querySelector('#polar-chart_01056-01').classList.remove('visible')
        document.querySelector('#polar-chart_01056-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01056').classList.remove('visible')
        document.querySelector('#f-path-01062').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01056
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01056
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01056
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01056
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01056
    }
    com_01056.onclick = togg01056;
    list_01056.onclick = togg01056;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01057 = data[56];

    /*Récupere les données que je veut de la Commune */
    name_01057 = rows01057.Libellé_géographique;
    Pop_01057 = rows01057.Population_en_2017;
    Pop_017_01057 = rows01057.Pop_017_ans_2017;
    Pop_mediane_vote_01057 = rows01057.Popu_possible_voté;
    nbr_inscrit_01057 = rows01057.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01057').textContent = name_01057;
   
    let com_01057 = document.getElementById("f-path-01063");
    let list_01057 = document.getElementById("list_01057");


    function togg01057() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01057-01').classList.remove('visible')
        document.querySelector('#polar-chart_01057-01').classList.remove('visible')
        document.querySelector('#polar-chart_01057-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01057').classList.remove('visible')
        document.querySelector('#f-path-01063').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01057
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01057
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01057
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01057
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01057
    }
    com_01057.onclick = togg01057;
    list_01057.onclick = togg01057;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01058 = data[57];

    /*Récupere les données que je veut de la Commune */
    name_01058 = rows01058.Libellé_géographique;
    Pop_01058 = rows01058.Population_en_2017;
    Pop_017_01058 = rows01058.Pop_017_ans_2017;
    Pop_mediane_vote_01058 = rows01058.Popu_possible_voté;
    nbr_inscrit_01058 = rows01058.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01058').textContent = name_01058;
   
    let com_01058 = document.getElementById("f-path-01064");
    let list_01058 = document.getElementById("list_01058");


    function togg01058() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01058-01').classList.remove('visible')
        document.querySelector('#polar-chart_01058-01').classList.remove('visible')
        document.querySelector('#polar-chart_01058-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01058').classList.remove('visible')
        document.querySelector('#f-path-01064').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01058
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01058
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01058
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01058
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01058
    }
    com_01058.onclick = togg01058;
    list_01058.onclick = togg01058;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01059 = data[58];

    /*Récupere les données que je veut de la Commune */
    name_01059 = rows01059.Libellé_géographique;
    Pop_01059 = rows01059.Population_en_2017;
    Pop_017_01059 = rows01059.Pop_017_ans_2017;
    Pop_mediane_vote_01059 = rows01059.Popu_possible_voté;
    nbr_inscrit_01059 = rows01059.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01059').textContent = name_01059;
   
    let com_01059 = document.getElementById("f-path-01065");
    let list_01059 = document.getElementById("list_01059");


    function togg01059() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01059-01').classList.remove('visible')
        document.querySelector('#polar-chart_01059-01').classList.remove('visible')
        document.querySelector('#polar-chart_01059-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01059').classList.remove('visible')
        document.querySelector('#f-path-01065').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01059
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01059
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01059
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01059
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01059
    }
    com_01059.onclick = togg01059;
    list_01059.onclick = togg01059;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01060 = data[59];

    /*Récupere les données que je veut de la Commune */
    name_01060 = rows01060.Libellé_géographique;
    Pop_01060 = rows01060.Population_en_2017;
    Pop_017_01060 = rows01060.Pop_017_ans_2017;
    Pop_mediane_vote_01060 = rows01060.Popu_possible_voté;
    nbr_inscrit_01060 = rows01060.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01060').textContent = name_01060;
   
    let com_01060 = document.getElementById("f-path-01066");
    let list_01060 = document.getElementById("list_01060");


    function togg01060() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01060-01').classList.remove('visible')
        document.querySelector('#polar-chart_01060-01').classList.remove('visible')
        document.querySelector('#polar-chart_01060-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01060').classList.remove('visible')
        document.querySelector('#f-path-01066').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01060
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01060
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01060
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01060
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01060
    }
    com_01060.onclick = togg01060;
    list_01060.onclick = togg01060;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01061 = data[60];

    /*Récupere les données que je veut de la Commune */
    name_01061 = rows01061.Libellé_géographique;
    Pop_01061 = rows01061.Population_en_2017;
    Pop_017_01061 = rows01061.Pop_017_ans_2017;
    Pop_mediane_vote_01061 = rows01061.Popu_possible_voté;
    nbr_inscrit_01061 = rows01061.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01061').textContent = name_01061;
   
    let com_01061 = document.getElementById("f-path-01067");
    let list_01061 = document.getElementById("list_01061");


    function togg01061() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01061-01').classList.remove('visible')
        document.querySelector('#polar-chart_01061-01').classList.remove('visible')
        document.querySelector('#polar-chart_01061-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01061').classList.remove('visible')
        document.querySelector('#f-path-01067').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01061
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01061
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01061
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01061
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01061
    }
    com_01061.onclick = togg01061;
    list_01061.onclick = togg01061;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01062 = data[61];

    /*Récupere les données que je veut de la Commune */
    name_01062 = rows01062.Libellé_géographique;
    Pop_01062 = rows01062.Population_en_2017;
    Pop_017_01062 = rows01062.Pop_017_ans_2017;
    Pop_mediane_vote_01062 = rows01062.Popu_possible_voté;
    nbr_inscrit_01062 = rows01062.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01062').textContent = name_01062;
   
    let com_01062 = document.getElementById("f-path-01068");
    let list_01062 = document.getElementById("list_01062");


    function togg01062() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01062-01').classList.remove('visible')
        document.querySelector('#polar-chart_01062-01').classList.remove('visible')
        document.querySelector('#polar-chart_01062-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01062').classList.remove('visible')
        document.querySelector('#f-path-01068').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01062
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01062
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01062
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01062
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01062
    }
    com_01062.onclick = togg01062;
    list_01062.onclick = togg01062;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01063 = data[62];

    /*Récupere les données que je veut de la Commune */
    name_01063 = rows01063.Libellé_géographique;
    Pop_01063 = rows01063.Population_en_2017;
    Pop_017_01063 = rows01063.Pop_017_ans_2017;
    Pop_mediane_vote_01063 = rows01063.Popu_possible_voté;
    nbr_inscrit_01063 = rows01063.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01063').textContent = name_01063;
   
    let com_01063 = document.getElementById("f-path-01069");
    let list_01063 = document.getElementById("list_01063");


    function togg01063() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01063-01').classList.remove('visible')
        document.querySelector('#polar-chart_01063-01').classList.remove('visible')
        document.querySelector('#polar-chart_01063-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01063').classList.remove('visible')
        document.querySelector('#f-path-01069').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01063
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01063
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01063
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01063
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01063
    }
    com_01063.onclick = togg01063;
    list_01063.onclick = togg01063;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01064 = data[63];

    /*Récupere les données que je veut de la Commune */
    name_01064 = rows01064.Libellé_géographique;
    Pop_01064 = rows01064.Population_en_2017;
    Pop_017_01064 = rows01064.Pop_017_ans_2017;
    Pop_mediane_vote_01064 = rows01064.Popu_possible_voté;
    nbr_inscrit_01064 = rows01064.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01064').textContent = name_01064;
   
    let com_01064 = document.getElementById("f-path-01071");
    let list_01064 = document.getElementById("list_01064");


    function togg01064() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01064-01').classList.remove('visible')
        document.querySelector('#polar-chart_01064-01').classList.remove('visible')
        document.querySelector('#polar-chart_01064-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01064').classList.remove('visible')
        document.querySelector('#f-path-01071').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01064
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01064
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01064
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01064
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01064
    }
    com_01064.onclick = togg01064;
    list_01064.onclick = togg01064;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01065 = data[64];

    /*Récupere les données que je veut de la Commune */
    name_01065 = rows01065.Libellé_géographique;
    Pop_01065 = rows01065.Population_en_2017;
    Pop_017_01065 = rows01065.Pop_017_ans_2017;
    Pop_mediane_vote_01065 = rows01065.Popu_possible_voté;
    nbr_inscrit_01065 = rows01065.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01065').textContent = name_01065;
   
    let com_01065 = document.getElementById("f-path-01072");
    let list_01065 = document.getElementById("list_01065");


    function togg01065() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01065-01').classList.remove('visible')
        document.querySelector('#polar-chart_01065-01').classList.remove('visible')
        document.querySelector('#polar-chart_01065-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01065').classList.remove('visible')
        document.querySelector('#f-path-01072').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01065
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01065
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01065
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01065
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01065
    }
    com_01065.onclick = togg01065;
    list_01065.onclick = togg01065;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01066 = data[65];

    /*Récupere les données que je veut de la Commune */
    name_01066 = rows01066.Libellé_géographique;
    Pop_01066 = rows01066.Population_en_2017;
    Pop_017_01066 = rows01066.Pop_017_ans_2017;
    Pop_mediane_vote_01066 = rows01066.Popu_possible_voté;
    nbr_inscrit_01066 = rows01066.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01066').textContent = name_01066;
   
    let com_01066 = document.getElementById("f-path-01073");
    let list_01066 = document.getElementById("list_01066");


    function togg01066() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01066-01').classList.remove('visible')
        document.querySelector('#polar-chart_01066-01').classList.remove('visible')
        document.querySelector('#polar-chart_01066-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01066').classList.remove('visible')
        document.querySelector('#f-path-01073').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01066
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01066
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01066
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01066
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01066
    }
    com_01066.onclick = togg01066;
    list_01066.onclick = togg01066;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01067 = data[66];

    /*Récupere les données que je veut de la Commune */
    name_01067 = rows01067.Libellé_géographique;
    Pop_01067 = rows01067.Population_en_2017;
    Pop_017_01067 = rows01067.Pop_017_ans_2017;
    Pop_mediane_vote_01067 = rows01067.Popu_possible_voté;
    nbr_inscrit_01067 = rows01067.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01067').textContent = name_01067;
   
    let com_01067 = document.getElementById("f-path-01074");
    let list_01067 = document.getElementById("list_01067");


    function togg01067() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01067-01').classList.remove('visible')
        document.querySelector('#polar-chart_01067-01').classList.remove('visible')
        document.querySelector('#polar-chart_01067-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01067').classList.remove('visible')
        document.querySelector('#f-path-01074').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01067
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01067
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01067
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01067
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01067
    }
    com_01067.onclick = togg01067;
    list_01067.onclick = togg01067;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01068 = data[67];

    /*Récupere les données que je veut de la Commune */
    name_01068 = rows01068.Libellé_géographique;
    Pop_01068 = rows01068.Population_en_2017;
    Pop_017_01068 = rows01068.Pop_017_ans_2017;
    Pop_mediane_vote_01068 = rows01068.Popu_possible_voté;
    nbr_inscrit_01068 = rows01068.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01068').textContent = name_01068;
   
    let com_01068 = document.getElementById("f-path-01075");
    let list_01068 = document.getElementById("list_01068");


    function togg01068() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01068-01').classList.remove('visible')
        document.querySelector('#polar-chart_01068-01').classList.remove('visible')
        document.querySelector('#polar-chart_01068-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01068').classList.remove('visible')
        document.querySelector('#f-path-01075').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01068
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01068
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01068
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01068
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01068
    }
    com_01068.onclick = togg01068;
    list_01068.onclick = togg01068;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01069 = data[68];

    /*Récupere les données que je veut de la Commune */
    name_01069 = rows01069.Libellé_géographique;
    Pop_01069 = rows01069.Population_en_2017;
    Pop_017_01069 = rows01069.Pop_017_ans_2017;
    Pop_mediane_vote_01069 = rows01069.Popu_possible_voté;
    nbr_inscrit_01069 = rows01069.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01069').textContent = name_01069;
   
    let com_01069 = document.getElementById("f-path-01076");
    let list_01069 = document.getElementById("list_01069");


    function togg01069() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01069-01').classList.remove('visible')
        document.querySelector('#polar-chart_01069-01').classList.remove('visible')
        document.querySelector('#polar-chart_01069-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01069').classList.remove('visible')
        document.querySelector('#f-path-01076').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01069
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01069
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01069
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01069
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01069
    }
    com_01069.onclick = togg01069;
    list_01069.onclick = togg01069;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01070 = data[69];

    /*Récupere les données que je veut de la Commune */
    name_01070 = rows01070.Libellé_géographique;
    Pop_01070 = rows01070.Population_en_2017;
    Pop_017_01070 = rows01070.Pop_017_ans_2017;
    Pop_mediane_vote_01070 = rows01070.Popu_possible_voté;
    nbr_inscrit_01070 = rows01070.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01070').textContent = name_01070;
   
    let com_01070 = document.getElementById("f-path-01077");
    let list_01070 = document.getElementById("list_01070");


    function togg01070() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01070-01').classList.remove('visible')
        document.querySelector('#polar-chart_01070-01').classList.remove('visible')
        document.querySelector('#polar-chart_01070-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01070').classList.remove('visible')
        document.querySelector('#f-path-01077').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01070
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01070
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01070
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01070
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01070
    }
    com_01070.onclick = togg01070;
    list_01070.onclick = togg01070;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01071 = data[70];

    /*Récupere les données que je veut de la Commune */
    name_01071 = rows01071.Libellé_géographique;
    Pop_01071 = rows01071.Population_en_2017;
    Pop_017_01071 = rows01071.Pop_017_ans_2017;
    Pop_mediane_vote_01071 = rows01071.Popu_possible_voté;
    nbr_inscrit_01071 = rows01071.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01071').textContent = name_01071;
   
    let com_01071 = document.getElementById("f-path-01078");
    let list_01071 = document.getElementById("list_01071");


    function togg01071() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01071-01').classList.remove('visible')
        document.querySelector('#polar-chart_01071-01').classList.remove('visible')
        document.querySelector('#polar-chart_01071-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01071').classList.remove('visible')
        document.querySelector('#f-path-01078').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01071
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01071
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01071
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01071
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01071
    }
    com_01071.onclick = togg01071;
    list_01071.onclick = togg01071;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01072 = data[71];

    /*Récupere les données que je veut de la Commune */
    name_01072 = rows01072.Libellé_géographique;
    Pop_01072 = rows01072.Population_en_2017;
    Pop_017_01072 = rows01072.Pop_017_ans_2017;
    Pop_mediane_vote_01072 = rows01072.Popu_possible_voté;
    nbr_inscrit_01072 = rows01072.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01072').textContent = name_01072;
   
    let com_01072 = document.getElementById("f-path-01079");
    let list_01072 = document.getElementById("list_01072");


    function togg01072() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01072-01').classList.remove('visible')
        document.querySelector('#polar-chart_01072-01').classList.remove('visible')
        document.querySelector('#polar-chart_01072-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01072').classList.remove('visible')
        document.querySelector('#f-path-01079').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01072
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01072
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01072
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01072
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01072
    }
    com_01072.onclick = togg01072;
    list_01072.onclick = togg01072;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01073 = data[72];

    /*Récupere les données que je veut de la Commune */
    name_01073 = rows01073.Libellé_géographique;
    Pop_01073 = rows01073.Population_en_2017;
    Pop_017_01073 = rows01073.Pop_017_ans_2017;
    Pop_mediane_vote_01073 = rows01073.Popu_possible_voté;
    nbr_inscrit_01073 = rows01073.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01073').textContent = name_01073;
   
    let com_01073 = document.getElementById("f-path-01080");
    let list_01073 = document.getElementById("list_01073");


    function togg01073() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01073-01').classList.remove('visible')
        document.querySelector('#polar-chart_01073-01').classList.remove('visible')
        document.querySelector('#polar-chart_01073-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01073').classList.remove('visible')
        document.querySelector('#f-path-01080').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01073
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01073
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01073
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01073
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01073
    }
    com_01073.onclick = togg01073;
    list_01073.onclick = togg01073;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01074 = data[73];

    /*Récupere les données que je veut de la Commune */
    name_01074 = rows01074.Libellé_géographique;
    Pop_01074 = rows01074.Population_en_2017;
    Pop_017_01074 = rows01074.Pop_017_ans_2017;
    Pop_mediane_vote_01074 = rows01074.Popu_possible_voté;
    nbr_inscrit_01074 = rows01074.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01074').textContent = name_01074;
   
    let com_01074 = document.getElementById("f-path-01081");
    let list_01074 = document.getElementById("list_01074");


    function togg01074() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01074-01').classList.remove('visible')
        document.querySelector('#polar-chart_01074-01').classList.remove('visible')
        document.querySelector('#polar-chart_01074-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01074').classList.remove('visible')
        document.querySelector('#f-path-01081').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01074
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01074
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01074
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01074
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01074
    }
    com_01074.onclick = togg01074;
    list_01074.onclick = togg01074;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01075 = data[74];

    /*Récupere les données que je veut de la Commune */
    name_01075 = rows01075.Libellé_géographique;
    Pop_01075 = rows01075.Population_en_2017;
    Pop_017_01075 = rows01075.Pop_017_ans_2017;
    Pop_mediane_vote_01075 = rows01075.Popu_possible_voté;
    nbr_inscrit_01075 = rows01075.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01075').textContent = name_01075;
   
    let com_01075 = document.getElementById("f-path-01082");
    let list_01075 = document.getElementById("list_01075");


    function togg01075() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01075-01').classList.remove('visible')
        document.querySelector('#polar-chart_01075-01').classList.remove('visible')
        document.querySelector('#polar-chart_01075-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01075').classList.remove('visible')
        document.querySelector('#f-path-01082').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01075
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01075
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01075
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01075
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01075
    }
    com_01075.onclick = togg01075;
    list_01075.onclick = togg01075;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01076 = data[75];

    /*Récupere les données que je veut de la Commune */
    name_01076 = rows01076.Libellé_géographique;
    Pop_01076 = rows01076.Population_en_2017;
    Pop_017_01076 = rows01076.Pop_017_ans_2017;
    Pop_mediane_vote_01076 = rows01076.Popu_possible_voté;
    nbr_inscrit_01076 = rows01076.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01076').textContent = name_01076;
   
    let com_01076 = document.getElementById("f-path-01083");
    let list_01076 = document.getElementById("list_01076");


    function togg01076() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01076-01').classList.remove('visible')
        document.querySelector('#polar-chart_01076-01').classList.remove('visible')
        document.querySelector('#polar-chart_01076-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01076').classList.remove('visible')
        document.querySelector('#f-path-01083').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01076
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01076
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01076
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01076
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01076
    }
    com_01076.onclick = togg01076;
    list_01076.onclick = togg01076;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01077 = data[76];

    /*Récupere les données que je veut de la Commune */
    name_01077 = rows01077.Libellé_géographique;
    Pop_01077 = rows01077.Population_en_2017;
    Pop_017_01077 = rows01077.Pop_017_ans_2017;
    Pop_mediane_vote_01077 = rows01077.Popu_possible_voté;
    nbr_inscrit_01077 = rows01077.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01077').textContent = name_01077;
   
    let com_01077 = document.getElementById("f-path-01084");
    let list_01077 = document.getElementById("list_01077");


    function togg01077() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01077-01').classList.remove('visible')
        document.querySelector('#polar-chart_01077-01').classList.remove('visible')
        document.querySelector('#polar-chart_01077-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01077').classList.remove('visible')
        document.querySelector('#f-path-01084').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01077
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01077
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01077
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01077
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01077
    }
    com_01077.onclick = togg01077;
    list_01077.onclick = togg01077;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01078 = data[77];

    /*Récupere les données que je veut de la Commune */
    name_01078 = rows01078.Libellé_géographique;
    Pop_01078 = rows01078.Population_en_2017;
    Pop_017_01078 = rows01078.Pop_017_ans_2017;
    Pop_mediane_vote_01078 = rows01078.Popu_possible_voté;
    nbr_inscrit_01078 = rows01078.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01078').textContent = name_01078;
   
    let com_01078 = document.getElementById("f-path-01085");
    let list_01078 = document.getElementById("list_01078");


    function togg01078() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01078-01').classList.remove('visible')
        document.querySelector('#polar-chart_01078-01').classList.remove('visible')
        document.querySelector('#polar-chart_01078-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01078').classList.remove('visible')
        document.querySelector('#f-path-01085').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01078
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01078
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01078
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01078
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01078
    }
    com_01078.onclick = togg01078;
    list_01078.onclick = togg01078;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01079 = data[78];

    /*Récupere les données que je veut de la Commune */
    name_01079 = rows01079.Libellé_géographique;
    Pop_01079 = rows01079.Population_en_2017;
    Pop_017_01079 = rows01079.Pop_017_ans_2017;
    Pop_mediane_vote_01079 = rows01079.Popu_possible_voté;
    nbr_inscrit_01079 = rows01079.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01079').textContent = name_01079;
   
    let com_01079 = document.getElementById("f-path-01087");
    let list_01079 = document.getElementById("list_01079");


    function togg01079() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01079-01').classList.remove('visible')
        document.querySelector('#polar-chart_01079-01').classList.remove('visible')
        document.querySelector('#polar-chart_01079-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01079').classList.remove('visible')
        document.querySelector('#f-path-01087').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01079
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01079
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01079
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01079
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01079
    }
    com_01079.onclick = togg01079;
    list_01079.onclick = togg01079;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01080 = data[79];

    /*Récupere les données que je veut de la Commune */
    name_01080 = rows01080.Libellé_géographique;
    Pop_01080 = rows01080.Population_en_2017;
    Pop_017_01080 = rows01080.Pop_017_ans_2017;
    Pop_mediane_vote_01080 = rows01080.Popu_possible_voté;
    nbr_inscrit_01080 = rows01080.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01080').textContent = name_01080;
   
    let com_01080 = document.getElementById("f-path-01088");
    let list_01080 = document.getElementById("list_01080");


    function togg01080() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01080-01').classList.remove('visible')
        document.querySelector('#polar-chart_01080-01').classList.remove('visible')
        document.querySelector('#polar-chart_01080-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01080').classList.remove('visible')
        document.querySelector('#f-path-01088').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01080
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01080
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01080
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01080
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01080
    }
    com_01080.onclick = togg01080;
    list_01080.onclick = togg01080;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01081 = data[80];

    /*Récupere les données que je veut de la Commune */
    name_01081 = rows01081.Libellé_géographique;
    Pop_01081 = rows01081.Population_en_2017;
    Pop_017_01081 = rows01081.Pop_017_ans_2017;
    Pop_mediane_vote_01081 = rows01081.Popu_possible_voté;
    nbr_inscrit_01081 = rows01081.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01081').textContent = name_01081;
   
    let com_01081 = document.getElementById("f-path-01089");
    let list_01081 = document.getElementById("list_01081");


    function togg01081() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01081-01').classList.remove('visible')
        document.querySelector('#polar-chart_01081-01').classList.remove('visible')
        document.querySelector('#polar-chart_01081-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01081').classList.remove('visible')
        document.querySelector('#f-path-01089').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01081
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01081
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01081
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01081
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01081
    }
    com_01081.onclick = togg01081;
    list_01081.onclick = togg01081;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01082 = data[81];

    /*Récupere les données que je veut de la Commune */
    name_01082 = rows01082.Libellé_géographique;
    Pop_01082 = rows01082.Population_en_2017;
    Pop_017_01082 = rows01082.Pop_017_ans_2017;
    Pop_mediane_vote_01082 = rows01082.Popu_possible_voté;
    nbr_inscrit_01082 = rows01082.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01082').textContent = name_01082;
   
    let com_01082 = document.getElementById("f-path-01090");
    let list_01082 = document.getElementById("list_01082");


    function togg01082() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01082-01').classList.remove('visible')
        document.querySelector('#polar-chart_01082-01').classList.remove('visible')
        document.querySelector('#polar-chart_01082-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01082').classList.remove('visible')
        document.querySelector('#f-path-01090').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01082
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01082
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01082
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01082
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01082
    }
    com_01082.onclick = togg01082;
    list_01082.onclick = togg01082;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01083 = data[82];

    /*Récupere les données que je veut de la Commune */
    name_01083 = rows01083.Libellé_géographique;
    Pop_01083 = rows01083.Population_en_2017;
    Pop_017_01083 = rows01083.Pop_017_ans_2017;
    Pop_mediane_vote_01083 = rows01083.Popu_possible_voté;
    nbr_inscrit_01083 = rows01083.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01083').textContent = name_01083;
   
    let com_01083 = document.getElementById("f-path-01092");
    let list_01083 = document.getElementById("list_01083");


    function togg01083() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01083-01').classList.remove('visible')
        document.querySelector('#polar-chart_01083-01').classList.remove('visible')
        document.querySelector('#polar-chart_01083-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01083').classList.remove('visible')
        document.querySelector('#f-path-01092').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01083
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01083
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01083
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01083
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01083
    }
    com_01083.onclick = togg01083;
    list_01083.onclick = togg01083;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01084 = data[83];

    /*Récupere les données que je veut de la Commune */
    name_01084 = rows01084.Libellé_géographique;
    Pop_01084 = rows01084.Population_en_2017;
    Pop_017_01084 = rows01084.Pop_017_ans_2017;
    Pop_mediane_vote_01084 = rows01084.Popu_possible_voté;
    nbr_inscrit_01084 = rows01084.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01084').textContent = name_01084;
   
    let com_01084 = document.getElementById("f-path-01093");
    let list_01084 = document.getElementById("list_01084");


    function togg01084() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01084-01').classList.remove('visible')
        document.querySelector('#polar-chart_01084-01').classList.remove('visible')
        document.querySelector('#polar-chart_01084-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01084').classList.remove('visible')
        document.querySelector('#f-path-01093').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01084
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01084
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01084
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01084
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01084
    }
    com_01084.onclick = togg01084;
    list_01084.onclick = togg01084;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01085 = data[84];

    /*Récupere les données que je veut de la Commune */
    name_01085 = rows01085.Libellé_géographique;
    Pop_01085 = rows01085.Population_en_2017;
    Pop_017_01085 = rows01085.Pop_017_ans_2017;
    Pop_mediane_vote_01085 = rows01085.Popu_possible_voté;
    nbr_inscrit_01085 = rows01085.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01085').textContent = name_01085;
   
    let com_01085 = document.getElementById("f-path-01094");
    let list_01085 = document.getElementById("list_01085");


    function togg01085() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01085-01').classList.remove('visible')
        document.querySelector('#polar-chart_01085-01').classList.remove('visible')
        document.querySelector('#polar-chart_01085-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01085').classList.remove('visible')
        document.querySelector('#f-path-01094').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01085
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01085
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01085
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01085
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01085
    }
    com_01085.onclick = togg01085;
    list_01085.onclick = togg01085;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01086 = data[85];

    /*Récupere les données que je veut de la Commune */
    name_01086 = rows01086.Libellé_géographique;
    Pop_01086 = rows01086.Population_en_2017;
    Pop_017_01086 = rows01086.Pop_017_ans_2017;
    Pop_mediane_vote_01086 = rows01086.Popu_possible_voté;
    nbr_inscrit_01086 = rows01086.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01086').textContent = name_01086;
   
    let com_01086 = document.getElementById("f-path-01095");
    let list_01086 = document.getElementById("list_01086");


    function togg01086() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01086-01').classList.remove('visible')
        document.querySelector('#polar-chart_01086-01').classList.remove('visible')
        document.querySelector('#polar-chart_01086-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01086').classList.remove('visible')
        document.querySelector('#f-path-01095').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01086
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01086
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01086
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01086
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01086
    }
    com_01086.onclick = togg01086;
    list_01086.onclick = togg01086;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01087 = data[86];

    /*Récupere les données que je veut de la Commune */
    name_01087 = rows01087.Libellé_géographique;
    Pop_01087 = rows01087.Population_en_2017;
    Pop_017_01087 = rows01087.Pop_017_ans_2017;
    Pop_mediane_vote_01087 = rows01087.Popu_possible_voté;
    nbr_inscrit_01087 = rows01087.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01087').textContent = name_01087;
   
    let com_01087 = document.getElementById("f-path-01096");
    let list_01087 = document.getElementById("list_01087");


    function togg01087() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01087-01').classList.remove('visible')
        document.querySelector('#polar-chart_01087-01').classList.remove('visible')
        document.querySelector('#polar-chart_01087-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01087').classList.remove('visible')
        document.querySelector('#f-path-01096').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01087
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01087
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01087
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01087
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01087
    }
    com_01087.onclick = togg01087;
    list_01087.onclick = togg01087;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01088 = data[87];

    /*Récupere les données que je veut de la Commune */
    name_01088 = rows01088.Libellé_géographique;
    Pop_01088 = rows01088.Population_en_2017;
    Pop_017_01088 = rows01088.Pop_017_ans_2017;
    Pop_mediane_vote_01088 = rows01088.Popu_possible_voté;
    nbr_inscrit_01088 = rows01088.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01088').textContent = name_01088;
   
    let com_01088 = document.getElementById("f-path-01098");
    let list_01088 = document.getElementById("list_01088");


    function togg01088() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01088-01').classList.remove('visible')
        document.querySelector('#polar-chart_01088-01').classList.remove('visible')
        document.querySelector('#polar-chart_01088-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01088').classList.remove('visible')
        document.querySelector('#f-path-01098').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01088
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01088
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01088
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01088
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01088
    }
    com_01088.onclick = togg01088;
    list_01088.onclick = togg01088;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01089 = data[88];

    /*Récupere les données que je veut de la Commune */
    name_01089 = rows01089.Libellé_géographique;
    Pop_01089 = rows01089.Population_en_2017;
    Pop_017_01089 = rows01089.Pop_017_ans_2017;
    Pop_mediane_vote_01089 = rows01089.Popu_possible_voté;
    nbr_inscrit_01089 = rows01089.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01089').textContent = name_01089;
   
    let com_01089 = document.getElementById("f-path-01099");
    let list_01089 = document.getElementById("list_01089");


    function togg01089() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01089-01').classList.remove('visible')
        document.querySelector('#polar-chart_01089-01').classList.remove('visible')
        document.querySelector('#polar-chart_01089-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01089').classList.remove('visible')
        document.querySelector('#f-path-01099').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01089
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01089
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01089
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01089
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01089
    }
    com_01089.onclick = togg01089;
    list_01089.onclick = togg01089;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01090 = data[89];

    /*Récupere les données que je veut de la Commune */
    name_01090 = rows01090.Libellé_géographique;
    Pop_01090 = rows01090.Population_en_2017;
    Pop_017_01090 = rows01090.Pop_017_ans_2017;
    Pop_mediane_vote_01090 = rows01090.Popu_possible_voté;
    nbr_inscrit_01090 = rows01090.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01090').textContent = name_01090;
   
    let com_01090 = document.getElementById("f-path-01100");
    let list_01090 = document.getElementById("list_01090");


    function togg01090() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01090-01').classList.remove('visible')
        document.querySelector('#polar-chart_01090-01').classList.remove('visible')
        document.querySelector('#polar-chart_01090-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01090').classList.remove('visible')
        document.querySelector('#f-path-01100').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01090
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01090
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01090
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01090
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01090
    }
    com_01090.onclick = togg01090;
    list_01090.onclick = togg01090;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01091 = data[90];

    /*Récupere les données que je veut de la Commune */
    name_01091 = rows01091.Libellé_géographique;
    Pop_01091 = rows01091.Population_en_2017;
    Pop_017_01091 = rows01091.Pop_017_ans_2017;
    Pop_mediane_vote_01091 = rows01091.Popu_possible_voté;
    nbr_inscrit_01091 = rows01091.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01091').textContent = name_01091;
   
    let com_01091 = document.getElementById("f-path-01101");
    let list_01091 = document.getElementById("list_01091");


    function togg01091() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01091-01').classList.remove('visible')
        document.querySelector('#polar-chart_01091-01').classList.remove('visible')
        document.querySelector('#polar-chart_01091-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01091').classList.remove('visible')
        document.querySelector('#f-path-01101').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01091
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01091
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01091
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01091
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01091
    }
    com_01091.onclick = togg01091;
    list_01091.onclick = togg01091;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01092 = data[91];

    /*Récupere les données que je veut de la Commune */
    name_01092 = rows01092.Libellé_géographique;
    Pop_01092 = rows01092.Population_en_2017;
    Pop_017_01092 = rows01092.Pop_017_ans_2017;
    Pop_mediane_vote_01092 = rows01092.Popu_possible_voté;
    nbr_inscrit_01092 = rows01092.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01092').textContent = name_01092;
   
    let com_01092 = document.getElementById("f-path-01102");
    let list_01092 = document.getElementById("list_01092");


    function togg01092() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01092-01').classList.remove('visible')
        document.querySelector('#polar-chart_01092-01').classList.remove('visible')
        document.querySelector('#polar-chart_01092-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01092').classList.remove('visible')
        document.querySelector('#f-path-01102').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01092
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01092
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01092
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01092
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01092
    }
    com_01092.onclick = togg01092;
    list_01092.onclick = togg01092;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01093 = data[92];

    /*Récupere les données que je veut de la Commune */
    name_01093 = rows01093.Libellé_géographique;
    Pop_01093 = rows01093.Population_en_2017;
    Pop_017_01093 = rows01093.Pop_017_ans_2017;
    Pop_mediane_vote_01093 = rows01093.Popu_possible_voté;
    nbr_inscrit_01093 = rows01093.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01093').textContent = name_01093;
   
    let com_01093 = document.getElementById("f-path-01103");
    let list_01093 = document.getElementById("list_01093");


    function togg01093() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01093-01').classList.remove('visible')
        document.querySelector('#polar-chart_01093-01').classList.remove('visible')
        document.querySelector('#polar-chart_01093-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01093').classList.remove('visible')
        document.querySelector('#f-path-01103').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01093
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01093
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01093
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01093
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01093
    }
    com_01093.onclick = togg01093;
    list_01093.onclick = togg01093;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01094 = data[93];

    /*Récupere les données que je veut de la Commune */
    name_01094 = rows01094.Libellé_géographique;
    Pop_01094 = rows01094.Population_en_2017;
    Pop_017_01094 = rows01094.Pop_017_ans_2017;
    Pop_mediane_vote_01094 = rows01094.Popu_possible_voté;
    nbr_inscrit_01094 = rows01094.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01094').textContent = name_01094;
   
    let com_01094 = document.getElementById("f-path-01104");
    let list_01094 = document.getElementById("list_01094");


    function togg01094() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01094-01').classList.remove('visible')
        document.querySelector('#polar-chart_01094-01').classList.remove('visible')
        document.querySelector('#polar-chart_01094-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01094').classList.remove('visible')
        document.querySelector('#f-path-01104').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01094
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01094
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01094
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01094
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01094
    }
    com_01094.onclick = togg01094;
    list_01094.onclick = togg01094;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01095 = data[94];

    /*Récupere les données que je veut de la Commune */
    name_01095 = rows01095.Libellé_géographique;
    Pop_01095 = rows01095.Population_en_2017;
    Pop_017_01095 = rows01095.Pop_017_ans_2017;
    Pop_mediane_vote_01095 = rows01095.Popu_possible_voté;
    nbr_inscrit_01095 = rows01095.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01095').textContent = name_01095;
   
    let com_01095 = document.getElementById("f-path-01105");
    let list_01095 = document.getElementById("list_01095");


    function togg01095() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01095-01').classList.remove('visible')
        document.querySelector('#polar-chart_01095-01').classList.remove('visible')
        document.querySelector('#polar-chart_01095-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01095').classList.remove('visible')
        document.querySelector('#f-path-01105').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01095
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01095
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01095
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01095
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01095
    }
    com_01095.onclick = togg01095;
    list_01095.onclick = togg01095;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01096 = data[95];

    /*Récupere les données que je veut de la Commune */
    name_01096 = rows01096.Libellé_géographique;
    Pop_01096 = rows01096.Population_en_2017;
    Pop_017_01096 = rows01096.Pop_017_ans_2017;
    Pop_mediane_vote_01096 = rows01096.Popu_possible_voté;
    nbr_inscrit_01096 = rows01096.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01096').textContent = name_01096;
   
    let com_01096 = document.getElementById("f-path-01106");
    let list_01096 = document.getElementById("list_01096");


    function togg01096() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01096-01').classList.remove('visible')
        document.querySelector('#polar-chart_01096-01').classList.remove('visible')
        document.querySelector('#polar-chart_01096-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01096').classList.remove('visible')
        document.querySelector('#f-path-01106').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01096
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01096
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01096
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01096
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01096
    }
    com_01096.onclick = togg01096;
    list_01096.onclick = togg01096;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01097 = data[96];

    /*Récupere les données que je veut de la Commune */
    name_01097 = rows01097.Libellé_géographique;
    Pop_01097 = rows01097.Population_en_2017;
    Pop_017_01097 = rows01097.Pop_017_ans_2017;
    Pop_mediane_vote_01097 = rows01097.Popu_possible_voté;
    nbr_inscrit_01097 = rows01097.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01097').textContent = name_01097;
   
    let com_01097 = document.getElementById("f-path-01107");
    let list_01097 = document.getElementById("list_01097");


    function togg01097() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01097-01').classList.remove('visible')
        document.querySelector('#polar-chart_01097-01').classList.remove('visible')
        document.querySelector('#polar-chart_01097-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01097').classList.remove('visible')
        document.querySelector('#f-path-01107').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01097
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01097
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01097
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01097
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01097
    }
    com_01097.onclick = togg01097;
    list_01097.onclick = togg01097;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01098 = data[97];

    /*Récupere les données que je veut de la Commune */
    name_01098 = rows01098.Libellé_géographique;
    Pop_01098 = rows01098.Population_en_2017;
    Pop_017_01098 = rows01098.Pop_017_ans_2017;
    Pop_mediane_vote_01098 = rows01098.Popu_possible_voté;
    nbr_inscrit_01098 = rows01098.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01098').textContent = name_01098;
   
    let com_01098 = document.getElementById("f-path-01108");
    let list_01098 = document.getElementById("list_01098");


    function togg01098() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01098-01').classList.remove('visible')
        document.querySelector('#polar-chart_01098-01').classList.remove('visible')
        document.querySelector('#polar-chart_01098-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01098').classList.remove('visible')
        document.querySelector('#f-path-01108').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01098
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01098
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01098
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01098
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01098
    }
    com_01098.onclick = togg01098;
    list_01098.onclick = togg01098;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01099 = data[98];

    /*Récupere les données que je veut de la Commune */
    name_01099 = rows01099.Libellé_géographique;
    Pop_01099 = rows01099.Population_en_2017;
    Pop_017_01099 = rows01099.Pop_017_ans_2017;
    Pop_mediane_vote_01099 = rows01099.Popu_possible_voté;
    nbr_inscrit_01099 = rows01099.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01099').textContent = name_01099;
   
    let com_01099 = document.getElementById("f-path-01109");
    let list_01099 = document.getElementById("list_01099");


    function togg01099() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01099-01').classList.remove('visible')
        document.querySelector('#polar-chart_01099-01').classList.remove('visible')
        document.querySelector('#polar-chart_01099-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01099').classList.remove('visible')
        document.querySelector('#f-path-01109').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01099
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01099
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01099
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01099
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01099
    }
    com_01099.onclick = togg01099;
    list_01099.onclick = togg01099;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01100 = data[99];

    /*Récupere les données que je veut de la Commune */
    name_01100 = rows01100.Libellé_géographique;
    Pop_01100 = rows01100.Population_en_2017;
    Pop_017_01100 = rows01100.Pop_017_ans_2017;
    Pop_mediane_vote_01100 = rows01100.Popu_possible_voté;
    nbr_inscrit_01100 = rows01100.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01100').textContent = name_01100;
   
    let com_01100 = document.getElementById("f-path-01110");
    let list_01100 = document.getElementById("list_01100");


    function togg01100() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01100-01').classList.remove('visible')
        document.querySelector('#polar-chart_01100-01').classList.remove('visible')
        document.querySelector('#polar-chart_01100-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01100').classList.remove('visible')
        document.querySelector('#f-path-01110').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01100
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01100
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01100
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01100
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01100
    }
    com_01100.onclick = togg01100;
    list_01100.onclick = togg01100;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01101 = data[100];

    /*Récupere les données que je veut de la Commune */
    name_01101 = rows01101.Libellé_géographique;
    Pop_01101 = rows01101.Population_en_2017;
    Pop_017_01101 = rows01101.Pop_017_ans_2017;
    Pop_mediane_vote_01101 = rows01101.Popu_possible_voté;
    nbr_inscrit_01101 = rows01101.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01101').textContent = name_01101;
   
    let com_01101 = document.getElementById("f-path-01111");
    let list_01101 = document.getElementById("list_01101");


    function togg01101() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01101-01').classList.remove('visible')
        document.querySelector('#polar-chart_01101-01').classList.remove('visible')
        document.querySelector('#polar-chart_01101-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01101').classList.remove('visible')
        document.querySelector('#f-path-01111').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01101
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01101
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01101
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01101
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01101
    }
    com_01101.onclick = togg01101;
    list_01101.onclick = togg01101;  
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01102 = data[101];

    /*Récupere les données que je veut de la Commune */
    name_01102 = rows01102.Libellé_géographique;
    Pop_01102 = rows01102.Population_en_2017;
    Pop_017_01102 = rows01102.Pop_017_ans_2017;
    Pop_mediane_vote_01102 = rows01102.Popu_possible_voté;
    nbr_inscrit_01102 = rows01102.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01102').textContent = name_01102;
/*--------------------------------------------------------------------------*/
    let com_01102 = document.getElementById("f-path-01112");
    let list_01102 = document.getElementById("list_01102");
    /******************************************************************** */

    function togg01102() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01102-01').classList.remove('visible')
        document.querySelector('#polar-chart_01102-01').classList.remove('visible')
        document.querySelector('#polar-chart_01102-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01102').classList.remove('visible')
        document.querySelector('#f-path-01112').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01102;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01102
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01102
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01102
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01102
    }
    com_01102.onclick = togg01102;
    list_01102.onclick = togg01102;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01103 = data[102];
    
    /*Récupere les données que je veut de la Commune */
    name_01103 = rows01103.Libellé_géographique;
    Pop_01103 = rows01103.Population_en_2017;
    Pop_017_01103 = rows01103.Pop_017_ans_2017;
    Pop_mediane_vote_01103 = rows01103.Popu_possible_voté;
    nbr_inscrit_01103 = rows01103.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01103').textContent = name_01103;

    let com_01103 = document.getElementById("f-path-01113");
    let list_01103 = document.getElementById("list_01103");


    function togg01103() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01103-01').classList.remove('visible')
        document.querySelector('#polar-chart_01103-01').classList.remove('visible')
        document.querySelector('#polar-chart_01103-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01103').classList.remove('visible')
        document.querySelector('#f-path-01113').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01103;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01103
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01103
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01103
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01103
    }
    com_01103.onclick = togg01103;
    list_01103.onclick = togg01103;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01104 = data[103];
    
    /*Récupere les données que je veut de la Commune */
    name_01104 = rows01104.Libellé_géographique;
    Pop_01104 = rows01104.Population_en_2017;
    Pop_017_01104 = rows01104.Pop_017_ans_2017;
    Pop_mediane_vote_01104 = rows01104.Popu_possible_voté;
    nbr_inscrit_01104 = rows01104.Inscrits;

    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01104').textContent = name_01104;
    
    let com_01104 = document.getElementById("f-path-01113");
    let list_01104 = document.getElementById("list_01104");


    function togg01104() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01104-01').classList.remove('visible')
        document.querySelector('#polar-chart_01104-01').classList.remove('visible')
        document.querySelector('#polar-chart_01104-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01104').classList.remove('visible')
        document.querySelector('#f-path-01113').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01104;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01104
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01104
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01104
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01104
    }
    com_01104.onclick = togg01104;
    list_01104.onclick = togg01104;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01105 = data[104];
    
    /*Récupere les données que je veut de la Commune */
    name_01105 = rows01105.Libellé_géographique;
    Pop_01105 = rows01105.Population_en_2017;
    Pop_017_01105 = rows01105.Pop_017_ans_2017;
    Pop_mediane_vote_01105 = rows01105.Popu_possible_voté;
    nbr_inscrit_01105 = rows01105.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01105').textContent = name_01105;

    let com_01105 = document.getElementById("f-path-01114");
    let list_01105 = document.getElementById("list_01105");


    function togg01105() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01105-01').classList.remove('visible')
        document.querySelector('#polar-chart_01105-01').classList.remove('visible')
        document.querySelector('#polar-chart_01105-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01105').classList.remove('visible')
        document.querySelector('#f-path-01114').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01105
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01105
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01105
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01105
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01105
    }
    com_01105.onclick = togg01105;
    list_01105.onclick = togg01105;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01106 = data[105];
    
    /*Récupere les données que je veut de la Commune */
    name_01106 = rows01106.Libellé_géographique;
    Pop_01106 = rows01106.Population_en_2017;
    Pop_017_01106 = rows01106.Pop_017_ans_2017;
    Pop_mediane_vote_01106 = rows01106.Popu_possible_voté;
    nbr_inscrit_01106 = rows01106.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01106').textContent = name_01106;
    
    let com_01106 = document.getElementById("f-path-01115");
    let list_01106 = document.getElementById("list_01106");


    function togg01106() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01106-01').classList.remove('visible')
        document.querySelector('#polar-chart_01106-01').classList.remove('visible')
        document.querySelector('#polar-chart_01106-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01106').classList.remove('visible')
        document.querySelector('#f-path-01115').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01106
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01106
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01106
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01106
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01106
    }
    com_01106.onclick = togg01106;
    list_01106.onclick = togg01106;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01107 = data[106];
    
    /*Récupere les données que je veut de la Commune */
    name_01107 = rows01107.Libellé_géographique;
    Pop_01107 = rows01107.Population_en_2017;
    Pop_017_01107 = rows01107.Pop_017_ans_2017;
    Pop_mediane_vote_01107 = rows01107.Popu_possible_voté;
    nbr_inscrit_01107 = rows01107.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01107').textContent = name_01107;
    
    let com_01107 = document.getElementById("f-path-01116");
    let list_01107 = document.getElementById("list_01107");


    function togg01107() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01107-01').classList.remove('visible')
        document.querySelector('#polar-chart_01107-01').classList.remove('visible')
        document.querySelector('#polar-chart_01107-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01107').classList.remove('visible')
        document.querySelector('#f-path-01116').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01107
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01107
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01107
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01107
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01107
    }
    com_01107.onclick = togg01107;
    list_01107.onclick = togg01107;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01108 = data[107];
    
    /*Récupere les données que je veut de la Commune */
    name_01108 = rows01108.Libellé_géographique;
    Pop_01108 = rows01108.Population_en_2017;
    Pop_017_01108 = rows01108.Pop_017_ans_2017;
    Pop_mediane_vote_01108 = rows01108.Popu_possible_voté;
    nbr_inscrit_01108 = rows01108.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01108').textContent = name_01108;
    
    let com_01108 = document.getElementById("f-path-01117");
    let list_01108 = document.getElementById("list_01108");


    function togg01108() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01108-01').classList.remove('visible')
        document.querySelector('#polar-chart_01108-01').classList.remove('visible')
        document.querySelector('#polar-chart_01108-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01108').classList.remove('visible')
        document.querySelector('#f-path-01117').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01108
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01108
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01108
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01108
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01108
    }
    com_01108.onclick = togg01108;
    list_01108.onclick = togg01108;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01109 = data[108];
    
    /*Récupere les données que je veut de la Commune */
    name_01109 = rows01109.Libellé_géographique;
    Pop_01109 = rows01109.Population_en_2017;
    Pop_017_01109 = rows01109.Pop_017_ans_2017;
    Pop_mediane_vote_01109 = rows01109.Popu_possible_voté;
    nbr_inscrit_01109 = rows01109.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01109').textContent = name_01109;
    
    let com_01109 = document.getElementById("f-path-01118");
    let list_01109 = document.getElementById("list_01109");


    function togg01109() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01109-01').classList.remove('visible')
        document.querySelector('#polar-chart_01109-01').classList.remove('visible')
        document.querySelector('#polar-chart_01109-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01109').classList.remove('visible')
        document.querySelector('#f-path-01118').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01109
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01109
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01109
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01109
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01109
    }
    com_01109.onclick = togg01109;
    list_01109.onclick = togg01109;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01110 = data[109];
    
    /*Récupere les données que je veut de la Commune */
    name_01110 = rows01110.Libellé_géographique;
    Pop_01110 = rows01110.Population_en_2017;
    Pop_017_01110 = rows01110.Pop_017_ans_2017;
    Pop_mediane_vote_01110 = rows01110.Popu_possible_voté;
    nbr_inscrit_01110 = rows01110.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01110').textContent = name_01110;
    
    let com_01110 = document.getElementById("f-path-01121");
    let list_01110 = document.getElementById("list_01110");


    function togg01110() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01110-01').classList.remove('visible')
        document.querySelector('#polar-chart_01110-01').classList.remove('visible')
        document.querySelector('#polar-chart_01110-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01110').classList.remove('visible')
        document.querySelector('#f-path-01121').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01110
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01110
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01110
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01110
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01110
    }
    com_01110.onclick = togg01110;
    list_01110.onclick = togg01110;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01111 = data[110];
    
    /*Récupere les données que je veut de la Commune */
    name_01111 = rows01111.Libellé_géographique;
    Pop_01111 = rows01111.Population_en_2017;
    Pop_017_01111 = rows01111.Pop_017_ans_2017;
    Pop_mediane_vote_01111 = rows01111.Popu_possible_voté;
    nbr_inscrit_01111 = rows01111.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01111').textContent = name_01111;
    
    let com_01111 = document.getElementById("f-path-01123");
    let list_01111 = document.getElementById("list_01111");


    function togg01111() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01111-01').classList.remove('visible')
        document.querySelector('#polar-chart_01111-01').classList.remove('visible')
        document.querySelector('#polar-chart_01111-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01111').classList.remove('visible')
        document.querySelector('#f-path-01123').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01111
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01111
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01111
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01111
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01111
    }
    com_01111.onclick = togg01111;
    list_01111.onclick = togg01111;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01112 = data[111];
    
    /*Récupere les données que je veut de la Commune */
    name_01112 = rows01112.Libellé_géographique;
    Pop_01112 = rows01112.Population_en_2017;
    Pop_017_01112 = rows01112.Pop_017_ans_2017;
    Pop_mediane_vote_01112 = rows01112.Popu_possible_voté;
    nbr_inscrit_01112 = rows01112.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01112').textContent = name_01112;
    
    let com_01112 = document.getElementById("f-path-01124");
    let list_01112 = document.getElementById("list_01112");


    function togg01112() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01112-01').classList.remove('visible')
        document.querySelector('#polar-chart_01112-01').classList.remove('visible')
        document.querySelector('#polar-chart_01112-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01112').classList.remove('visible')
        document.querySelector('#f-path-01124').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01112
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01112
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01112
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01112
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01112
    }
    com_01112.onclick = togg01112;
    list_01112.onclick = togg01112;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01113 = data[112];
    
    /*Récupere les données que je veut de la Commune */
    name_01113 = rows01113.Libellé_géographique;
    Pop_01113 = rows01113.Population_en_2017;
    Pop_017_01113 = rows01113.Pop_017_ans_2017;
    Pop_mediane_vote_01113 = rows01113.Popu_possible_voté;
    nbr_inscrit_01113 = rows01113.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01113').textContent = name_01113;
    
    let com_01113 = document.getElementById("f-path-01125");
    let list_01113 = document.getElementById("list_01113");


    function togg01113() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01113-01').classList.remove('visible')
        document.querySelector('#polar-chart_01113-01').classList.remove('visible')
        document.querySelector('#polar-chart_01113-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01113').classList.remove('visible')
        document.querySelector('#f-path-01125').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01113
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01113
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01113
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01113
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01113
    }
    com_01113.onclick = togg01113;
    list_01113.onclick = togg01113;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01114 = data[113];
    
    /*Récupere les données que je veut de la Commune */
    name_01114 = rows01114.Libellé_géographique;
    Pop_01114 = rows01114.Population_en_2017;
    Pop_017_01114 = rows01114.Pop_017_ans_2017;
    Pop_mediane_vote_01114 = rows01114.Popu_possible_voté;
    nbr_inscrit_01114 = rows01114.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01114').textContent = name_01114;
    
    let com_01114 = document.getElementById("f-path-01127");
    let list_01114 = document.getElementById("list_01114");


    function togg01114() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01114-01').classList.remove('visible')
        document.querySelector('#polar-chart_01114-01').classList.remove('visible')
        document.querySelector('#polar-chart_01114-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01114').classList.remove('visible')
        document.querySelector('#f-path-01127').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01114
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01114
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01114
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01114
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01114
    }
    com_01114.onclick = togg01114;
    list_01114.onclick = togg01114;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01115 = data[114];
    
    /*Récupere les données que je veut de la Commune */
    name_01115 = rows01115.Libellé_géographique;
    Pop_01115 = rows01115.Population_en_2017;
    Pop_017_01115 = rows01115.Pop_017_ans_2017;
    Pop_mediane_vote_01115 = rows01115.Popu_possible_voté;
    nbr_inscrit_01115 = rows01115.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01115').textContent = name_01115;
    
    let com_01115 = document.getElementById("f-path-01128");
    let list_01115 = document.getElementById("list_01115");


    function togg01115() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01115-01').classList.remove('visible')
        document.querySelector('#polar-chart_01115-01').classList.remove('visible')
        document.querySelector('#polar-chart_01115-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01115').classList.remove('visible')
        document.querySelector('#f-path-01128').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01115
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01115
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01115
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01115
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01115
    }
    com_01115.onclick = togg01115;
    list_01115.onclick = togg01115;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01116 = data[115];
    
    /*Récupere les données que je veut de la Commune */
    name_01116 = rows01116.Libellé_géographique;
    Pop_01116 = rows01116.Population_en_2017;
    Pop_017_01116 = rows01116.Pop_017_ans_2017;
    Pop_mediane_vote_01116 = rows01116.Popu_possible_voté;
    nbr_inscrit_01116 = rows01116.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01116').textContent = name_01116;
    
    let com_01116 = document.getElementById("f-path-01129");
    let list_01116 = document.getElementById("list_01116");


    function togg01116() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01116-01').classList.remove('visible')
        document.querySelector('#polar-chart_01116-01').classList.remove('visible')
        document.querySelector('#polar-chart_01116-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01116').classList.remove('visible')
        document.querySelector('#f-path-01129').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01116
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01116
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01116
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01116
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01116
    }
    com_01116.onclick = togg01116;
    list_01116.onclick = togg01116;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01117 = data[116];
    
    /*Récupere les données que je veut de la Commune */
    name_01117 = rows01117.Libellé_géographique;
    Pop_01117 = rows01117.Population_en_2017;
    Pop_017_01117 = rows01117.Pop_017_ans_2017;
    Pop_mediane_vote_01117 = rows01117.Popu_possible_voté;
    nbr_inscrit_01117 = rows01117.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01117').textContent = name_01117;
    
    let com_01117 = document.getElementById("f-path-01130");
    let list_01117 = document.getElementById("list_01117");


    function togg01117() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01117-01').classList.remove('visible')
        document.querySelector('#polar-chart_01117-01').classList.remove('visible')
        document.querySelector('#polar-chart_01117-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01117').classList.remove('visible')
        document.querySelector('#f-path-01130').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01117
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01117
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01117
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01117
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01117
    }
    com_01117.onclick = togg01117;
    list_01117.onclick = togg01117;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01118 = data[117];
    
    /*Récupere les données que je veut de la Commune */
    name_01118 = rows01118.Libellé_géographique;
    Pop_01118 = rows01118.Population_en_2017;
    Pop_017_01118 = rows01118.Pop_017_ans_2017;
    Pop_mediane_vote_01118 = rows01118.Popu_possible_voté;
    nbr_inscrit_01118 = rows01118.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01118').textContent = name_01118;
    
    let com_01118 = document.getElementById("f-path-01133");
    let list_01118 = document.getElementById("list_01118");


    function togg01118() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01118-01').classList.remove('visible')
        document.querySelector('#polar-chart_01118-01').classList.remove('visible')
        document.querySelector('#polar-chart_01118-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01118').classList.remove('visible')
        document.querySelector('#f-path-01133').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01118
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01118
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01118
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01118
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01118
    }
    com_01118.onclick = togg01118;
    list_01118.onclick = togg01118;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01119 = data[118];
    
    /*Récupere les données que je veut de la Commune */
    name_01119 = rows01119.Libellé_géographique;
    Pop_01119 = rows01119.Population_en_2017;
    Pop_017_01119 = rows01119.Pop_017_ans_2017;
    Pop_mediane_vote_01119 = rows01119.Popu_possible_voté;
    nbr_inscrit_01119 = rows01119.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01119').textContent = name_01119;
    
    let com_01119 = document.getElementById("f-path-01134");
    let list_01119 = document.getElementById("list_01119");


    function togg01119() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01119-01').classList.remove('visible')
        document.querySelector('#polar-chart_01119-01').classList.remove('visible')
        document.querySelector('#polar-chart_01119-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01119').classList.remove('visible')
        document.querySelector('#f-path-01134').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01119
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01119
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01119
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01119
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01119
    }
    com_01119.onclick = togg01119;
    list_01119.onclick = togg01119;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01120 = data[119];
    
    /*Récupere les données que je veut de la Commune */
    name_01120 = rows01120.Libellé_géographique;
    Pop_01120 = rows01120.Population_en_2017;
    Pop_017_01120 = rows01120.Pop_017_ans_2017;
    Pop_mediane_vote_01120 = rows01120.Popu_possible_voté;
    nbr_inscrit_01120 = rows01120.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01120').textContent = name_01120;
    
    let com_01120 = document.getElementById("f-path-01135");
    let list_01120 = document.getElementById("list_01120");


    function togg01120() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01120-01').classList.remove('visible')
        document.querySelector('#polar-chart_01120-01').classList.remove('visible')
        document.querySelector('#polar-chart_01120-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01120').classList.remove('visible')
        document.querySelector('#f-path-01135').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01120
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01120
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01120
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01120
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01120
    }
    com_01120.onclick = togg01120;
    list_01120.onclick = togg01120;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01121 = data[120];
    
    /*Récupere les données que je veut de la Commune */
    name_01121 = rows01121.Libellé_géographique;
    Pop_01121 = rows01121.Population_en_2017;
    Pop_017_01121 = rows01121.Pop_017_ans_2017;
    Pop_mediane_vote_01121 = rows01121.Popu_possible_voté;
    nbr_inscrit_01121 = rows01121.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01121').textContent = name_01121;
    
    let com_01121 = document.getElementById("f-path-01136");
    let list_01121 = document.getElementById("list_01121");


    function togg01121() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01121-01').classList.remove('visible')
        document.querySelector('#polar-chart_01121-01').classList.remove('visible')
        document.querySelector('#polar-chart_01121-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01121').classList.remove('visible')
        document.querySelector('#f-path-01136').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01121
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01121
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01121
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01121
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01121
    }
    com_01121.onclick = togg01121;
    list_01121.onclick = togg01121;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01122 = data[121];
    
    /*Récupere les données que je veut de la Commune */
    name_01122 = rows01122.Libellé_géographique;
    Pop_01122 = rows01122.Population_en_2017;
    Pop_017_01122 = rows01122.Pop_017_ans_2017;
    Pop_mediane_vote_01122 = rows01122.Popu_possible_voté;
    nbr_inscrit_01122 = rows01122.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01122').textContent = name_01122;
    
    let com_01122 = document.getElementById("f-path-01138");
    let list_01122 = document.getElementById("list_01122");


    function togg01122() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01122-01').classList.remove('visible')
        document.querySelector('#polar-chart_01122-01').classList.remove('visible')
        document.querySelector('#polar-chart_01122-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01122').classList.remove('visible')
        document.querySelector('#f-path-01138').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01122
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01122
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01122
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01122
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01122
    }
    com_01122.onclick = togg01122;
    list_01122.onclick = togg01122;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01123 = data[122];
    
    /*Récupere les données que je veut de la Commune */
    name_01123 = rows01123.Libellé_géographique;
    Pop_01123 = rows01123.Population_en_2017;
    Pop_017_01123 = rows01123.Pop_017_ans_2017;
    Pop_mediane_vote_01123 = rows01123.Popu_possible_voté;
    nbr_inscrit_01123 = rows01123.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01123').textContent = name_01123;
    
    let com_01123 = document.getElementById("f-path-01139");
    let list_01123 = document.getElementById("list_01123");


    function togg01123() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01123-01').classList.remove('visible')
        document.querySelector('#polar-chart_01123-01').classList.remove('visible')
        document.querySelector('#polar-chart_01123-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01123').classList.remove('visible')
        document.querySelector('#f-path-01139').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01123
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01123
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01123
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01123
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01123
    }
    com_01123.onclick = togg01123;
    list_01123.onclick = togg01123;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01124 = data[123];
    
    /*Récupere les données que je veut de la Commune */
    name_01124 = rows01124.Libellé_géographique;
    Pop_01124 = rows01124.Population_en_2017;
    Pop_017_01124 = rows01124.Pop_017_ans_2017;
    Pop_mediane_vote_01124 = rows01124.Popu_possible_voté;
    nbr_inscrit_01124 = rows01124.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01124').textContent = name_01124;
    
    let com_01124 = document.getElementById("f-path-01140");
    let list_01124 = document.getElementById("list_01124");


    function togg01124() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01124-01').classList.remove('visible')
        document.querySelector('#polar-chart_01124-01').classList.remove('visible')
        document.querySelector('#polar-chart_01124-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01124').classList.remove('visible')
        document.querySelector('#f-path-01140').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01124
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01124
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01124
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01124
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01124
    }
    com_01124.onclick = togg01124;
    list_01124.onclick = togg01124;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01125 = data[124];
    
    /*Récupere les données que je veut de la Commune */
    name_01125 = rows01125.Libellé_géographique;
    Pop_01125 = rows01125.Population_en_2017;
    Pop_017_01125 = rows01125.Pop_017_ans_2017;
    Pop_mediane_vote_01125 = rows01125.Popu_possible_voté;
    nbr_inscrit_01125 = rows01125.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01125').textContent = name_01125;
    
    let com_01125 = document.getElementById("f-path-01141");
    let list_01125 = document.getElementById("list_01125");


    function togg01125() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01125-01').classList.remove('visible')
        document.querySelector('#polar-chart_01125-01').classList.remove('visible')
        document.querySelector('#polar-chart_01125-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01125').classList.remove('visible')
        document.querySelector('#f-path-01141').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01125
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01125
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01125
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01125
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01125
    }
    com_01125.onclick = togg01125;
    list_01125.onclick = togg01125;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01126 = data[125];
    
    /*Récupere les données que je veut de la Commune */
    name_01126 = rows01126.Libellé_géographique;
    Pop_01126 = rows01126.Population_en_2017;
    Pop_017_01126 = rows01126.Pop_017_ans_2017;
    Pop_mediane_vote_01126 = rows01126.Popu_possible_voté;
    nbr_inscrit_01126 = rows01126.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01126').textContent = name_01126;
    
    let com_01126 = document.getElementById("f-path-01142");
    let list_01126 = document.getElementById("list_01126");


    function togg01126() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01126-01').classList.remove('visible')
        document.querySelector('#polar-chart_01126-01').classList.remove('visible')
        document.querySelector('#polar-chart_01126-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01126').classList.remove('visible')
        document.querySelector('#f-path-01142').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01126
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01126
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01126
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01126
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01126
    }
    com_01126.onclick = togg01126;
    list_01126.onclick = togg01126;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01127 = data[126];
    
    /*Récupere les données que je veut de la Commune */
    name_01127 = rows01127.Libellé_géographique;
    Pop_01127 = rows01127.Population_en_2017;
    Pop_017_01127 = rows01127.Pop_017_ans_2017;
    Pop_mediane_vote_01127 = rows01127.Popu_possible_voté;
    nbr_inscrit_01127 = rows01127.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01127').textContent = name_01127;
    
    let com_01127 = document.getElementById("f-path-01143");
    let list_01127 = document.getElementById("list_01127");


    function togg01127() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01127-01').classList.remove('visible')
        document.querySelector('#polar-chart_01127-01').classList.remove('visible')
        document.querySelector('#polar-chart_01127-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01127').classList.remove('visible')
        document.querySelector('#f-path-01143').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01127
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01127
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01127
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01127
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01127
    }
    com_01127.onclick = togg01127;
    list_01127.onclick = togg01127;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01128 = data[127];
    
    /*Récupere les données que je veut de la Commune */
    name_01128 = rows01128.Libellé_géographique;
    Pop_01128 = rows01128.Population_en_2017;
    Pop_017_01128 = rows01128.Pop_017_ans_2017;
    Pop_mediane_vote_01128 = rows01128.Popu_possible_voté;
    nbr_inscrit_01128 = rows01128.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01128').textContent = name_01128;
    
    let com_01128 = document.getElementById("f-path-01145");
    let list_01128 = document.getElementById("list_01128");


    function togg01128() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01128-01').classList.remove('visible')
        document.querySelector('#polar-chart_01128-01').classList.remove('visible')
        document.querySelector('#polar-chart_01128-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01128').classList.remove('visible')
        document.querySelector('#f-path-01145').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01128
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01128
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01128
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01128
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01128
    }
    com_01128.onclick = togg01128;
    list_01128.onclick = togg01128;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01129 = data[128];
    
    /*Récupere les données que je veut de la Commune */
    name_01129 = rows01129.Libellé_géographique;
    Pop_01129 = rows01129.Population_en_2017;
    Pop_017_01129 = rows01129.Pop_017_ans_2017;
    Pop_mediane_vote_01129 = rows01129.Popu_possible_voté;
    nbr_inscrit_01129 = rows01129.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01129').textContent = name_01129;
    
    let com_01129 = document.getElementById("f-path-01146");
    let list_01129 = document.getElementById("list_01129");


    function togg01129() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01129-01').classList.remove('visible')
        document.querySelector('#polar-chart_01129-01').classList.remove('visible')
        document.querySelector('#polar-chart_01129-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01129').classList.remove('visible')
        document.querySelector('#f-path-01146').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01129
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01129
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01129
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01129
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01129
    }
    com_01129.onclick = togg01129;
    list_01129.onclick = togg01129;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01130 = data[129];
    
    /*Récupere les données que je veut de la Commune */
    name_01130 = rows01130.Libellé_géographique;
    Pop_01130 = rows01130.Population_en_2017;
    Pop_017_01130 = rows01130.Pop_017_ans_2017;
    Pop_mediane_vote_01130 = rows01130.Popu_possible_voté;
    nbr_inscrit_01130 = rows01130.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01130').textContent = name_01130;
    
    let com_01130 = document.getElementById("f-path-01147");
    let list_01130 = document.getElementById("list_01130");


    function togg01130() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01130-01').classList.remove('visible')
        document.querySelector('#polar-chart_01130-01').classList.remove('visible')
        document.querySelector('#polar-chart_01130-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01130').classList.remove('visible')
        document.querySelector('#f-path-01147').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01130
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01130
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01130
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01130
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01130
    }
    com_01130.onclick = togg01130;
    list_01130.onclick = togg01130;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01131 = data[130];
    
    /*Récupere les données que je veut de la Commune */
    name_01131 = rows01131.Libellé_géographique;
    Pop_01131 = rows01131.Population_en_2017;
    Pop_017_01131 = rows01131.Pop_017_ans_2017;
    Pop_mediane_vote_01131 = rows01131.Popu_possible_voté;
    nbr_inscrit_01131 = rows01131.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01131').textContent = name_01131;
    
    let com_01131 = document.getElementById("f-path-01148");
    let list_01131 = document.getElementById("list_01131");


    function togg01131() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01131-01').classList.remove('visible')
        document.querySelector('#polar-chart_01131-01').classList.remove('visible')
        document.querySelector('#polar-chart_01131-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01131').classList.remove('visible')
        document.querySelector('#f-path-01148').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01131
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01131
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01131
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01131
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01131
    }
    com_01131.onclick = togg01131;
    list_01131.onclick = togg01131;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01132 = data[131];
    
    /*Récupere les données que je veut de la Commune */
    name_01132 = rows01132.Libellé_géographique;
    Pop_01132 = rows01132.Population_en_2017;
    Pop_017_01132 = rows01132.Pop_017_ans_2017;
    Pop_mediane_vote_01132 = rows01132.Popu_possible_voté;
    nbr_inscrit_01132 = rows01132.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01132').textContent = name_01132;
    
    let com_01132 = document.getElementById("f-path-01149");
    let list_01132 = document.getElementById("list_01132");


    function togg01132() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01132-01').classList.remove('visible')
        document.querySelector('#polar-chart_01132-01').classList.remove('visible')
        document.querySelector('#polar-chart_01132-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01132').classList.remove('visible')
        document.querySelector('#f-path-01149').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01132
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01132
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01132
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01132
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01132
    }
    com_01132.onclick = togg01132;
    list_01132.onclick = togg01132;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01133 = data[132];
    
    /*Récupere les données que je veut de la Commune */
    name_01133 = rows01133.Libellé_géographique;
    Pop_01133 = rows01133.Population_en_2017;
    Pop_017_01133 = rows01133.Pop_017_ans_2017;
    Pop_mediane_vote_01133 = rows01133.Popu_possible_voté;
    nbr_inscrit_01133 = rows01133.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01133').textContent = name_01133;
    
    let com_01133 = document.getElementById("f-path-01150");
    let list_01133 = document.getElementById("list_01133");


    function togg01133() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01133-01').classList.remove('visible')
        document.querySelector('#polar-chart_01133-01').classList.remove('visible')
        document.querySelector('#polar-chart_01133-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01133').classList.remove('visible')
        document.querySelector('#f-path-01150').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01133
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01133
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01133
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01133
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01133
    }
    com_01133.onclick = togg01133;
    list_01133.onclick = togg01133;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01134 = data[133];
    
    /*Récupere les données que je veut de la Commune */
    name_01134 = rows01134.Libellé_géographique;
    Pop_01134 = rows01134.Population_en_2017;
    Pop_017_01134 = rows01134.Pop_017_ans_2017;
    Pop_mediane_vote_01134 = rows01134.Popu_possible_voté;
    nbr_inscrit_01134 = rows01134.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01134').textContent = name_01134;
    
    let com_01134 = document.getElementById("f-path-01151");
    let list_01134 = document.getElementById("list_01134");


    function togg01134() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01134-01').classList.remove('visible')
        document.querySelector('#polar-chart_01134-01').classList.remove('visible')
        document.querySelector('#polar-chart_01134-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01134').classList.remove('visible')
        document.querySelector('#f-path-01151').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01134
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01134
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01134
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01134
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01134
    }
    com_01134.onclick = togg01134;
    list_01134.onclick = togg01134;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01135 = data[134];
    
    /*Récupere les données que je veut de la Commune */
    name_01135 = rows01135.Libellé_géographique;
    Pop_01135 = rows01135.Population_en_2017;
    Pop_017_01135 = rows01135.Pop_017_ans_2017;
    Pop_mediane_vote_01135 = rows01135.Popu_possible_voté;
    nbr_inscrit_01135 = rows01135.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01135').textContent = name_01135;
    
    let com_01135 = document.getElementById("f-path-01152");
    let list_01135 = document.getElementById("list_01135");


    function togg01135() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01135-01').classList.remove('visible')
        document.querySelector('#polar-chart_01135-01').classList.remove('visible')
        document.querySelector('#polar-chart_01135-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01135').classList.remove('visible')
        document.querySelector('#f-path-01152').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01135
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01135
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01135
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01135
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01135
    }
    com_01135.onclick = togg01135;
    list_01135.onclick = togg01135;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01136 = data[135];
    
    /*Récupere les données que je veut de la Commune */
    name_01136 = rows01136.Libellé_géographique;
    Pop_01136 = rows01136.Population_en_2017;
    Pop_017_01136 = rows01136.Pop_017_ans_2017;
    Pop_mediane_vote_01136 = rows01136.Popu_possible_voté;
    nbr_inscrit_01136 = rows01136.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01136').textContent = name_01136;
    
    let com_01136 = document.getElementById("f-path-01153");
    let list_01136 = document.getElementById("list_01136");


    function togg01136() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01136-01').classList.remove('visible')
        document.querySelector('#polar-chart_01136-01').classList.remove('visible')
        document.querySelector('#polar-chart_01136-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01136').classList.remove('visible')
        document.querySelector('#f-path-01153').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01136
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01136
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01136
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01136
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01136
    }
    com_01136.onclick = togg01136;
    list_01136.onclick = togg01136;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01137 = data[136];
    
    /*Récupere les données que je veut de la Commune */
    name_01137 = rows01137.Libellé_géographique;
    Pop_01137 = rows01137.Population_en_2017;
    Pop_017_01137 = rows01137.Pop_017_ans_2017;
    Pop_mediane_vote_01137 = rows01137.Popu_possible_voté;
    nbr_inscrit_01137 = rows01137.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01137').textContent = name_01137;
    
    let com_01137 = document.getElementById("f-path-01155");
    let list_01137 = document.getElementById("list_01137");


    function togg01137() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01137-01').classList.remove('visible')
        document.querySelector('#polar-chart_01137-01').classList.remove('visible')
        document.querySelector('#polar-chart_01137-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01137').classList.remove('visible')
        document.querySelector('#f-path-01155').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01137
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01137
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01137
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01137
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01137
    }
    com_01137.onclick = togg01137;
    list_01137.onclick = togg01137;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01138 = data[137];
    
    /*Récupere les données que je veut de la Commune */
    name_01138 = rows01138.Libellé_géographique;
    Pop_01138 = rows01138.Population_en_2017;
    Pop_017_01138 = rows01138.Pop_017_ans_2017;
    Pop_mediane_vote_01138 = rows01138.Popu_possible_voté;
    nbr_inscrit_01138 = rows01138.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01138').textContent = name_01138;
    
    let com_01138 = document.getElementById("f-path-01156");
    let list_01138 = document.getElementById("list_01138");


    function togg01138() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01138-01').classList.remove('visible')
        document.querySelector('#polar-chart_01138-01').classList.remove('visible')
        document.querySelector('#polar-chart_01138-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01138').classList.remove('visible')
        document.querySelector('#f-path-01156').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01138
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01138
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01138
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01138
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01138
    }
    com_01138.onclick = togg01138;
    list_01138.onclick = togg01138;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01139 = data[138];
    
    /*Récupere les données que je veut de la Commune */
    name_01139 = rows01139.Libellé_géographique;
    Pop_01139 = rows01139.Population_en_2017;
    Pop_017_01139 = rows01139.Pop_017_ans_2017;
    Pop_mediane_vote_01139 = rows01139.Popu_possible_voté;
    nbr_inscrit_01139 = rows01139.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01139').textContent = name_01139;
    
    let com_01139 = document.getElementById("f-path-01157");
    let list_01139 = document.getElementById("list_01139");


    function togg01139() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01139-01').classList.remove('visible')
        document.querySelector('#polar-chart_01139-01').classList.remove('visible')
        document.querySelector('#polar-chart_01139-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01139').classList.remove('visible')
        document.querySelector('#f-path-01157').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01139
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01139
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01139
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01139
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01139
    }
    com_01139.onclick = togg01139;
    list_01139.onclick = togg01139;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01140 = data[139];
    
    /*Récupere les données que je veut de la Commune */
    name_01140 = rows01140.Libellé_géographique;
    Pop_01140 = rows01140.Population_en_2017;
    Pop_017_01140 = rows01140.Pop_017_ans_2017;
    Pop_mediane_vote_01140 = rows01140.Popu_possible_voté;
    nbr_inscrit_01140 = rows01140.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01140').textContent = name_01140;
    
    let com_01140 = document.getElementById("f-path-01158");
    let list_01140 = document.getElementById("list_01140");


    function togg01140() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01140-01').classList.remove('visible')
        document.querySelector('#polar-chart_01140-01').classList.remove('visible')
        document.querySelector('#polar-chart_01140-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01140').classList.remove('visible')
        document.querySelector('#f-path-01158').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01140
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01140
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01140
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01140
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01140
    }
    com_01140.onclick = togg01140;
    list_01140.onclick = togg01140;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01141 = data[140];
    
    /*Récupere les données que je veut de la Commune */
    name_01141 = rows01141.Libellé_géographique;
    Pop_01141 = rows01141.Population_en_2017;
    Pop_017_01141 = rows01141.Pop_017_ans_2017;
    Pop_mediane_vote_01141 = rows01141.Popu_possible_voté;
    nbr_inscrit_01141 = rows01141.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01141').textContent = name_01141;
    
    let com_01141 = document.getElementById("f-path-01159");
    let list_01141 = document.getElementById("list_01141");


    function togg01141() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01141-01').classList.remove('visible')
        document.querySelector('#polar-chart_01141-01').classList.remove('visible')
        document.querySelector('#polar-chart_01141-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01141').classList.remove('visible')
        document.querySelector('#f-path-01159').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01141
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01141
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01141
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01141
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01141
    }
    com_01141.onclick = togg01141;
    list_01141.onclick = togg01141;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01142 = data[141];
    
    /*Récupere les données que je veut de la Commune */
    name_01142 = rows01142.Libellé_géographique;
    Pop_01142 = rows01142.Population_en_2017;
    Pop_017_01142 = rows01142.Pop_017_ans_2017;
    Pop_mediane_vote_01142 = rows01142.Popu_possible_voté;
    nbr_inscrit_01142 = rows01142.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01142').textContent = name_01142;
    
    let com_01142 = document.getElementById("f-path-01160");
    let list_01142 = document.getElementById("list_01142");


    function togg01142() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01142-01').classList.remove('visible')
        document.querySelector('#polar-chart_01142-01').classList.remove('visible')
        document.querySelector('#polar-chart_01142-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01142').classList.remove('visible')
        document.querySelector('#f-path-01160').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01142
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01142
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01142
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01142
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01142
    }
    com_01142.onclick = togg01142;
    list_01142.onclick = togg01142;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01143 = data[142];
    
    /*Récupere les données que je veut de la Commune */
    name_01143 = rows01143.Libellé_géographique;
    Pop_01143 = rows01143.Population_en_2017;
    Pop_017_01143 = rows01143.Pop_017_ans_2017;
    Pop_mediane_vote_01143 = rows01143.Popu_possible_voté;
    nbr_inscrit_01143 = rows01143.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01143').textContent = name_01143;
    
    let com_01143 = document.getElementById("f-path-01162");
    let list_01143 = document.getElementById("list_01143");


    function togg01143() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01143-01').classList.remove('visible')
        document.querySelector('#polar-chart_01143-01').classList.remove('visible')
        document.querySelector('#polar-chart_01143-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01143').classList.remove('visible')
        document.querySelector('#f-path-01162').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01143
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01143
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01143
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01143
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01143
    }
    com_01143.onclick = togg01143;
    list_01143.onclick = togg01143;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01144 = data[143];
    
    /*Récupere les données que je veut de la Commune */
    name_01144 = rows01144.Libellé_géographique;
    Pop_01144 = rows01144.Population_en_2017;
    Pop_017_01144 = rows01144.Pop_017_ans_2017;
    Pop_mediane_vote_01144 = rows01144.Popu_possible_voté;
    nbr_inscrit_01144 = rows01144.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01144').textContent = name_01144;
    
    let com_01144 = document.getElementById("f-path-01163");
    let list_01144 = document.getElementById("list_01144");


    function togg01144() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01144-01').classList.remove('visible')
        document.querySelector('#polar-chart_01144-01').classList.remove('visible')
        document.querySelector('#polar-chart_01144-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01144').classList.remove('visible')
        document.querySelector('#f-path-01163').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01144
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01144
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01144
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01144
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01144
    }
    com_01144.onclick = togg01144;
    list_01144.onclick = togg01144;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01145 = data[144];
    
    /*Récupere les données que je veut de la Commune */
    name_01145 = rows01145.Libellé_géographique;
    Pop_01145 = rows01145.Population_en_2017;
    Pop_017_01145 = rows01145.Pop_017_ans_2017;
    Pop_mediane_vote_01145 = rows01145.Popu_possible_voté;
    nbr_inscrit_01145 = rows01145.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01145').textContent = name_01145;
    
    let com_01145 = document.getElementById("f-path-01165");
    let list_01145 = document.getElementById("list_01145");


    function togg01145() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01145-01').classList.remove('visible')
        document.querySelector('#polar-chart_01145-01').classList.remove('visible')
        document.querySelector('#polar-chart_01145-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01145').classList.remove('visible')
        document.querySelector('#f-path-01165').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01145
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01145
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01145
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01145
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01145
    }
    com_01145.onclick = togg01145;
    list_01145.onclick = togg01145;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01146 = data[145];
    
    /*Récupere les données que je veut de la Commune */
    name_01146 = rows01146.Libellé_géographique;
    Pop_01146 = rows01146.Population_en_2017;
    Pop_017_01146 = rows01146.Pop_017_ans_2017;
    Pop_mediane_vote_01146 = rows01146.Popu_possible_voté;
    nbr_inscrit_01146 = rows01146.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01146').textContent = name_01146;
    
    let com_01146 = document.getElementById("f-path-01166");
    let list_01146 = document.getElementById("list_01146");


    function togg01146() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01146-01').classList.remove('visible')
        document.querySelector('#polar-chart_01146-01').classList.remove('visible')
        document.querySelector('#polar-chart_01146-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01146').classList.remove('visible')
        document.querySelector('#f-path-01166').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01146
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01146
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01146
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01146
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01146
    }
    com_01146.onclick = togg01146;
    list_01146.onclick = togg01146;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01147 = data[146];
    
    /*Récupere les données que je veut de la Commune */
    name_01147 = rows01147.Libellé_géographique;
    Pop_01147 = rows01147.Population_en_2017;
    Pop_017_01147 = rows01147.Pop_017_ans_2017;
    Pop_mediane_vote_01147 = rows01147.Popu_possible_voté;
    nbr_inscrit_01147 = rows01147.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01147').textContent = name_01147;
    
    let com_01147 = document.getElementById("f-path-01167");
    let list_01147 = document.getElementById("list_01147");


    function togg01147() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01147-01').classList.remove('visible')
        document.querySelector('#polar-chart_01147-01').classList.remove('visible')
        document.querySelector('#polar-chart_01147-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01147').classList.remove('visible')
        document.querySelector('#f-path-01167').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01147
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01147
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01147
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01147
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01147
    }
    com_01147.onclick = togg01147;
    list_01147.onclick = togg01147;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01148 = data[147];
    
    /*Récupere les données que je veut de la Commune */
    name_01148 = rows01148.Libellé_géographique;
    Pop_01148 = rows01148.Population_en_2017;
    Pop_017_01148 = rows01148.Pop_017_ans_2017;
    Pop_mediane_vote_01148 = rows01148.Popu_possible_voté;
    nbr_inscrit_01148 = rows01148.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01148').textContent = name_01148;
    
    let com_01148 = document.getElementById("f-path-01169");
    let list_01148 = document.getElementById("list_01148");


    function togg01148() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01148-01').classList.remove('visible')
        document.querySelector('#polar-chart_01148-01').classList.remove('visible')
        document.querySelector('#polar-chart_01148-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01148').classList.remove('visible')
        document.querySelector('#f-path-01169').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01148
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01148
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01148
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01148
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01148
    }
    com_01148.onclick = togg01148;
    list_01148.onclick = togg01148;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01149 = data[148];
    
    /*Récupere les données que je veut de la Commune */
    name_01149 = rows01149.Libellé_géographique;
    Pop_01149 = rows01149.Population_en_2017;
    Pop_017_01149 = rows01149.Pop_017_ans_2017;
    Pop_mediane_vote_01149 = rows01149.Popu_possible_voté;
    nbr_inscrit_01149 = rows01149.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01149').textContent = name_01149;
    
    let com_01149 = document.getElementById("f-path-01170");
    let list_01149 = document.getElementById("list_01149");


    function togg01149() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01149-01').classList.remove('visible')
        document.querySelector('#polar-chart_01149-01').classList.remove('visible')
        document.querySelector('#polar-chart_01149-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01149').classList.remove('visible')
        document.querySelector('#f-path-01170').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01149
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01149
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01149
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01149
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01149
    }
    com_01149.onclick = togg01149;
    list_01149.onclick = togg01149;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01150 = data[149];
    
    /*Récupere les données que je veut de la Commune */
    name_01150 = rows01150.Libellé_géographique;
    Pop_01150 = rows01150.Population_en_2017;
    Pop_017_01150 = rows01150.Pop_017_ans_2017;
    Pop_mediane_vote_01150 = rows01150.Popu_possible_voté;
    nbr_inscrit_01150 = rows01150.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01150').textContent = name_01150;
    
    let com_01150 = document.getElementById("f-path-01171");
    let list_01150 = document.getElementById("list_01150");


    function togg01150() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01150-01').classList.remove('visible')
        document.querySelector('#polar-chart_01150-01').classList.remove('visible')
        document.querySelector('#polar-chart_01150-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01150').classList.remove('visible')
        document.querySelector('#f-path-01171').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01150
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01150
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01150
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01150
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01150
    }
    com_01150.onclick = togg01150;
    list_01150.onclick = togg01150;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01151 = data[150];
    
    /*Récupere les données que je veut de la Commune */
    name_01151 = rows01151.Libellé_géographique;
    Pop_01151 = rows01151.Population_en_2017;
    Pop_017_01151 = rows01151.Pop_017_ans_2017;
    Pop_mediane_vote_01151 = rows01151.Popu_possible_voté;
    nbr_inscrit_01151 = rows01151.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01151').textContent = name_01151;
    
    let com_01151 = document.getElementById("f-path-01173");
    let list_01151 = document.getElementById("list_01151");


    function togg01151() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01151-01').classList.remove('visible')
        document.querySelector('#polar-chart_01151-01').classList.remove('visible')
        document.querySelector('#polar-chart_01151-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01151').classList.remove('visible')
        document.querySelector('#f-path-01173').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01151
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01151
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01151
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01151
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01151
    }
    com_01151.onclick = togg01151;
    list_01151.onclick = togg01151;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01152 = data[151];
    
    /*Récupere les données que je veut de la Commune */
    name_01152 = rows01152.Libellé_géographique;
    Pop_01152 = rows01152.Population_en_2017;
    Pop_017_01152 = rows01152.Pop_017_ans_2017;
    Pop_mediane_vote_01152 = rows01152.Popu_possible_voté;
    nbr_inscrit_01152 = rows01152.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01152').textContent = name_01152;
    
    let com_01152 = document.getElementById("f-path-01174");
    let list_01152 = document.getElementById("list_01152");


    function togg01152() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01152-01').classList.remove('visible')
        document.querySelector('#polar-chart_01152-01').classList.remove('visible')
        document.querySelector('#polar-chart_01152-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01152').classList.remove('visible')
        document.querySelector('#f-path-01174').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01152
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01152
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01152
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01152
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01152
    }
    com_01152.onclick = togg01152;
    list_01152.onclick = togg01152;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01153 = data[152];
    
    /*Récupere les données que je veut de la Commune */
    name_01153 = rows01153.Libellé_géographique;
    Pop_01153 = rows01153.Population_en_2017;
    Pop_017_01153 = rows01153.Pop_017_ans_2017;
    Pop_mediane_vote_01153 = rows01153.Popu_possible_voté;
    nbr_inscrit_01153 = rows01153.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01153').textContent = name_01153;
    
    let com_01153 = document.getElementById("f-path-01175");
    let list_01153 = document.getElementById("list_01153");


    function togg01153() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01153-01').classList.remove('visible')
        document.querySelector('#polar-chart_01153-01').classList.remove('visible')
        document.querySelector('#polar-chart_01153-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01153').classList.remove('visible')
        document.querySelector('#f-path-01175').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01153
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01153
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01153
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01153
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01153
    }
    com_01153.onclick = togg01153;
    list_01153.onclick = togg01153;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01154 = data[153];
    
    /*Récupere les données que je veut de la Commune */
    name_01154 = rows01154.Libellé_géographique;
    Pop_01154 = rows01154.Population_en_2017;
    Pop_017_01154 = rows01154.Pop_017_ans_2017;
    Pop_mediane_vote_01154 = rows01154.Popu_possible_voté;
    nbr_inscrit_01154 = rows01154.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01154').textContent = name_01154;
    
    let com_01154 = document.getElementById("f-path-01177");
    let list_01154 = document.getElementById("list_01154");


    function togg01154() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01154-01').classList.remove('visible')
        document.querySelector('#polar-chart_01154-01').classList.remove('visible')
        document.querySelector('#polar-chart_01154-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01154').classList.remove('visible')
        document.querySelector('#f-path-01177').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01154
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01154
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01154
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01154
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01154
    }
    com_01154.onclick = togg01154;
    list_01154.onclick = togg01154;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01155 = data[154];
    
    /*Récupere les données que je veut de la Commune */
    name_01155 = rows01155.Libellé_géographique;
    Pop_01155 = rows01155.Population_en_2017;
    Pop_017_01155 = rows01155.Pop_017_ans_2017;
    Pop_mediane_vote_01155 = rows01155.Popu_possible_voté;
    nbr_inscrit_01155 = rows01155.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01155').textContent = name_01155;
    
    let com_01155 = document.getElementById("f-path-01179");
    let list_01155 = document.getElementById("list_01155");


    function togg01155() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01155-01').classList.remove('visible')
        document.querySelector('#polar-chart_01155-01').classList.remove('visible')
        document.querySelector('#polar-chart_01155-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01155').classList.remove('visible')
        document.querySelector('#f-path-01179').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01155
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01155
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01155
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01155
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01155
    }
    com_01155.onclick = togg01155;
    list_01155.onclick = togg01155;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01156 = data[155];
    
    /*Récupere les données que je veut de la Commune */
    name_01156 = rows01156.Libellé_géographique;
    Pop_01156 = rows01156.Population_en_2017;
    Pop_017_01156 = rows01156.Pop_017_ans_2017;
    Pop_mediane_vote_01156 = rows01156.Popu_possible_voté;
    nbr_inscrit_01156 = rows01156.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01156').textContent = name_01156;
    
    let com_01156 = document.getElementById("f-path-01180");
    let list_01156 = document.getElementById("list_01156");


    function togg01156() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01156-01').classList.remove('visible')
        document.querySelector('#polar-chart_01156-01').classList.remove('visible')
        document.querySelector('#polar-chart_01156-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01156').classList.remove('visible')
        document.querySelector('#f-path-01180').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01156
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01156
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01156
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01156
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01156
    }
    com_01156.onclick = togg01156;
    list_01156.onclick = togg01156;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01157 = data[156];
    
    /*Récupere les données que je veut de la Commune */
    name_01157 = rows01157.Libellé_géographique;
    Pop_01157 = rows01157.Population_en_2017;
    Pop_017_01157 = rows01157.Pop_017_ans_2017;
    Pop_mediane_vote_01157 = rows01157.Popu_possible_voté;
    nbr_inscrit_01157 = rows01157.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01157').textContent = name_01157;
    
    let com_01157 = document.getElementById("f-path-01181");
    let list_01157 = document.getElementById("list_01157");


    function togg01157() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01157-01').classList.remove('visible')
        document.querySelector('#polar-chart_01157-01').classList.remove('visible')
        document.querySelector('#polar-chart_01157-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01157').classList.remove('visible')
        document.querySelector('#f-path-01181').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01157
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01157
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01157
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01157
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01157
    }
    com_01157.onclick = togg01157;
    list_01157.onclick = togg01157;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01158 = data[157];
    
    /*Récupere les données que je veut de la Commune */
    name_01158 = rows01158.Libellé_géographique;
    Pop_01158 = rows01158.Population_en_2017;
    Pop_017_01158 = rows01158.Pop_017_ans_2017;
    Pop_mediane_vote_01158 = rows01158.Popu_possible_voté;
    nbr_inscrit_01158 = rows01158.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01158').textContent = name_01158;
    
    let com_01158 = document.getElementById("f-path-01183");
    let list_01158 = document.getElementById("list_01158");


    function togg01158() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01158-01').classList.remove('visible')
        document.querySelector('#polar-chart_01158-01').classList.remove('visible')
        document.querySelector('#polar-chart_01158-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01158').classList.remove('visible')
        document.querySelector('#f-path-01183').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01158
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01158
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01158
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01158
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01158
    }
    com_01158.onclick = togg01158;
    list_01158.onclick = togg01158;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01159 = data[158];
    
    /*Récupere les données que je veut de la Commune */
    name_01159 = rows01159.Libellé_géographique;
    Pop_01159 = rows01159.Population_en_2017;
    Pop_017_01159 = rows01159.Pop_017_ans_2017;
    Pop_mediane_vote_01159 = rows01159.Popu_possible_voté;
    nbr_inscrit_01159 = rows01159.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01159').textContent = name_01159;
    
    let com_01159 = document.getElementById("f-path-01184");
    let list_01159 = document.getElementById("list_01159");


    function togg01159() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01159-01').classList.remove('visible')
        document.querySelector('#polar-chart_01159-01').classList.remove('visible')
        document.querySelector('#polar-chart_01159-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01159').classList.remove('visible')
        document.querySelector('#f-path-01184').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01159
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01159
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01159
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01159
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01159
    }
    com_01159.onclick = togg01159;
    list_01159.onclick = togg01159;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01160 = data[159];
    
    /*Récupere les données que je veut de la Commune */
    name_01160 = rows01160.Libellé_géographique;
    Pop_01160 = rows01160.Population_en_2017;
    Pop_017_01160 = rows01160.Pop_017_ans_2017;
    Pop_mediane_vote_01160 = rows01160.Popu_possible_voté;
    nbr_inscrit_01160 = rows01160.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01160').textContent = name_01160;
    
    let com_01160 = document.getElementById("f-path-01185");
    let list_01160 = document.getElementById("list_01160");


    function togg01160() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01160-01').classList.remove('visible')
        document.querySelector('#polar-chart_01160-01').classList.remove('visible')
        document.querySelector('#polar-chart_01160-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01160').classList.remove('visible')
        document.querySelector('#f-path-01185').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01160
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01160
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01160
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01160
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01160
    }
    com_01160.onclick = togg01160;
    list_01160.onclick = togg01160;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01161 = data[160];
    
    /*Récupere les données que je veut de la Commune */
    name_01161 = rows01161.Libellé_géographique;
    Pop_01161 = rows01161.Population_en_2017;
    Pop_017_01161 = rows01161.Pop_017_ans_2017;
    Pop_mediane_vote_01161 = rows01161.Popu_possible_voté;
    nbr_inscrit_01161 = rows01161.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01161').textContent = name_01161;
    
    let com_01161 = document.getElementById("f-path-01187");
    let list_01161 = document.getElementById("list_01161");


    function togg01161() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01161-01').classList.remove('visible')
        document.querySelector('#polar-chart_01161-01').classList.remove('visible')
        document.querySelector('#polar-chart_01161-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01161').classList.remove('visible')
        document.querySelector('#f-path-01187').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01161
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01161
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01161
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01161
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01161
    }
    com_01161.onclick = togg01161;
    list_01161.onclick = togg01161;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01162 = data[161];
    
    /*Récupere les données que je veut de la Commune */
    name_01162 = rows01162.Libellé_géographique;
    Pop_01162 = rows01162.Population_en_2017;
    Pop_017_01162 = rows01162.Pop_017_ans_2017;
    Pop_mediane_vote_01162 = rows01162.Popu_possible_voté;
    nbr_inscrit_01162 = rows01162.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01162').textContent = name_01162;
    
    let com_01162 = document.getElementById("f-path-01188");
    let list_01162 = document.getElementById("list_01162");


    function togg01162() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01162-01').classList.remove('visible')
        document.querySelector('#polar-chart_01162-01').classList.remove('visible')
        document.querySelector('#polar-chart_01162-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01162').classList.remove('visible')
        document.querySelector('#f-path-01188').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01162
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01162
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01162
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01162
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01162
    }
    com_01162.onclick = togg01162;
    list_01162.onclick = togg01162;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01163 = data[162];
    
    /*Récupere les données que je veut de la Commune */
    name_01163 = rows01163.Libellé_géographique;
    Pop_01163 = rows01163.Population_en_2017;
    Pop_017_01163 = rows01163.Pop_017_ans_2017;
    Pop_mediane_vote_01163 = rows01163.Popu_possible_voté;
    nbr_inscrit_01163 = rows01163.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01163').textContent = name_01163;
    
    let com_01163 = document.getElementById("f-path-01189");
    let list_01163 = document.getElementById("list_01163");


    function togg01163() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01163-01').classList.remove('visible')
        document.querySelector('#polar-chart_01163-01').classList.remove('visible')
        document.querySelector('#polar-chart_01163-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01163').classList.remove('visible')
        document.querySelector('#f-path-01189').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01163
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01163
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01163
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01163
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01163
    }
    com_01163.onclick = togg01163;
    list_01163.onclick = togg01163;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01164 = data[163];
    
    /*Récupere les données que je veut de la Commune */
    name_01164 = rows01164.Libellé_géographique;
    Pop_01164 = rows01164.Population_en_2017;
    Pop_017_01164 = rows01164.Pop_017_ans_2017;
    Pop_mediane_vote_01164 = rows01164.Popu_possible_voté;
    nbr_inscrit_01164 = rows01164.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01164').textContent = name_01164;
    
    let com_01164 = document.getElementById("f-path-01190");
    let list_01164 = document.getElementById("list_01164");


    function togg01164() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01164-01').classList.remove('visible')
        document.querySelector('#polar-chart_01164-01').classList.remove('visible')
        document.querySelector('#polar-chart_01164-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01164').classList.remove('visible')
        document.querySelector('#f-path-01190').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01164
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01164
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01164
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01164
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01164
    }
    com_01164.onclick = togg01164;
    list_01164.onclick = togg01164;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01165 = data[164];
    
    /*Récupere les données que je veut de la Commune */
    name_01165 = rows01165.Libellé_géographique;
    Pop_01165 = rows01165.Population_en_2017;
    Pop_017_01165 = rows01165.Pop_017_ans_2017;
    Pop_mediane_vote_01165 = rows01165.Popu_possible_voté;
    nbr_inscrit_01165 = rows01165.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01165').textContent = name_01165;
    
    let com_01165 = document.getElementById("f-path-01191");
    let list_01165 = document.getElementById("list_01165");


    function togg01165() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01165-01').classList.remove('visible')
        document.querySelector('#polar-chart_01165-01').classList.remove('visible')
        document.querySelector('#polar-chart_01165-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01165').classList.remove('visible')
        document.querySelector('#f-path-01191').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01165
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01165
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01165
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01165
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01165
    }
    com_01165.onclick = togg01165;
    list_01165.onclick = togg01165;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01166 = data[165];
    
    /*Récupere les données que je veut de la Commune */
    name_01166 = rows01166.Libellé_géographique;
    Pop_01166 = rows01166.Population_en_2017;
    Pop_017_01166 = rows01166.Pop_017_ans_2017;
    Pop_mediane_vote_01166 = rows01166.Popu_possible_voté;
    nbr_inscrit_01166 = rows01166.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01166').textContent = name_01166;
    
    let com_01166 = document.getElementById("f-path-01192");
    let list_01166 = document.getElementById("list_01166");


    function togg01166() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01166-01').classList.remove('visible')
        document.querySelector('#polar-chart_01166-01').classList.remove('visible')
        document.querySelector('#polar-chart_01166-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01166').classList.remove('visible')
        document.querySelector('#f-path-01192').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01166
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01166
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01166
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01166
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01166
    }
    com_01166.onclick = togg01166;
    list_01166.onclick = togg01166;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01167 = data[166];
    
    /*Récupere les données que je veut de la Commune */
    name_01167 = rows01167.Libellé_géographique;
    Pop_01167 = rows01167.Population_en_2017;
    Pop_017_01167 = rows01167.Pop_017_ans_2017;
    Pop_mediane_vote_01167 = rows01167.Popu_possible_voté;
    nbr_inscrit_01167 = rows01167.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01167').textContent = name_01167;
    
    let com_01167 = document.getElementById("f-path-01193");
    let list_01167 = document.getElementById("list_01167");


    function togg01167() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01167-01').classList.remove('visible')
        document.querySelector('#polar-chart_01167-01').classList.remove('visible')
        document.querySelector('#polar-chart_01167-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01167').classList.remove('visible')
        document.querySelector('#f-path-01193').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01167
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01167
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01167
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01167
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01167
    }
    com_01167.onclick = togg01167;
    list_01167.onclick = togg01167;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01168 = data[167];
    
    /*Récupere les données que je veut de la Commune */
    name_01168 = rows01168.Libellé_géographique;
    Pop_01168 = rows01168.Population_en_2017;
    Pop_017_01168 = rows01168.Pop_017_ans_2017;
    Pop_mediane_vote_01168 = rows01168.Popu_possible_voté;
    nbr_inscrit_01168 = rows01168.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01168').textContent = name_01168;
    
    let com_01168 = document.getElementById("f-path-01194");
    let list_01168 = document.getElementById("list_01168");


    function togg01168() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01168-01').classList.remove('visible')
        document.querySelector('#polar-chart_01168-01').classList.remove('visible')
        document.querySelector('#polar-chart_01168-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01168').classList.remove('visible')
        document.querySelector('#f-path-01194').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01168
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01168
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01168
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01168
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01168
    }
    com_01168.onclick = togg01168;
    list_01168.onclick = togg01168;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01169 = data[168];
    
    /*Récupere les données que je veut de la Commune */
    name_01169 = rows01169.Libellé_géographique;
    Pop_01169 = rows01169.Population_en_2017;
    Pop_017_01169 = rows01169.Pop_017_ans_2017;
    Pop_mediane_vote_01169 = rows01169.Popu_possible_voté;
    nbr_inscrit_01169 = rows01169.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01169').textContent = name_01169;
    
    let com_01169 = document.getElementById("f-path-01195");
    let list_01169 = document.getElementById("list_01169");


    function togg01169() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01169-01').classList.remove('visible')
        document.querySelector('#polar-chart_01169-01').classList.remove('visible')
        document.querySelector('#polar-chart_01169-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01169').classList.remove('visible')
        document.querySelector('#f-path-01195').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01169
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01169
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01169
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01169
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01169
    }
    com_01169.onclick = togg01169;
    list_01169.onclick = togg01169;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01170 = data[169];
    
    /*Récupere les données que je veut de la Commune */
    name_01170 = rows01170.Libellé_géographique;
    Pop_01170 = rows01170.Population_en_2017;
    Pop_017_01170 = rows01170.Pop_017_ans_2017;
    Pop_mediane_vote_01170 = rows01170.Popu_possible_voté;
    nbr_inscrit_01170 = rows01170.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01170').textContent = name_01170;
    
    let com_01170 = document.getElementById("f-path-01196");
    let list_01170 = document.getElementById("list_01170");


    function togg01170() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01170-01').classList.remove('visible')
        document.querySelector('#polar-chart_01170-01').classList.remove('visible')
        document.querySelector('#polar-chart_01170-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01170').classList.remove('visible')
        document.querySelector('#f-path-01196').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01170
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01170
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01170
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01170
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01170
    }
    com_01170.onclick = togg01170;
    list_01170.onclick = togg01170;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01171 = data[170];
    
    /*Récupere les données que je veut de la Commune */
    name_01171 = rows01171.Libellé_géographique;
    Pop_01171 = rows01171.Population_en_2017;
    Pop_017_01171 = rows01171.Pop_017_ans_2017;
    Pop_mediane_vote_01171 = rows01171.Popu_possible_voté;
    nbr_inscrit_01171 = rows01171.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01171').textContent = name_01171;
    
    let com_01171 = document.getElementById("f-path-01197");
    let list_01171 = document.getElementById("list_01171");


    function togg01171() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01171-01').classList.remove('visible')
        document.querySelector('#polar-chart_01171-01').classList.remove('visible')
        document.querySelector('#polar-chart_01171-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01171').classList.remove('visible')
        document.querySelector('#f-path-01197').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01171
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01171
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01171
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01171
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01171
    }
    com_01171.onclick = togg01171;
    list_01171.onclick = togg01171;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01172 = data[171];
    
    /*Récupere les données que je veut de la Commune */
    name_01172 = rows01172.Libellé_géographique;
    Pop_01172 = rows01172.Population_en_2017;
    Pop_017_01172 = rows01172.Pop_017_ans_2017;
    Pop_mediane_vote_01172 = rows01172.Popu_possible_voté;
    nbr_inscrit_01172 = rows01172.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01172').textContent = name_01172;
    
    let com_01172 = document.getElementById("f-path-01198");
    let list_01172 = document.getElementById("list_01172");


    function togg01172() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01172-01').classList.remove('visible')
        document.querySelector('#polar-chart_01172-01').classList.remove('visible')
        document.querySelector('#polar-chart_01172-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01172').classList.remove('visible')
        document.querySelector('#f-path-01198').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01172
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01172
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01172
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01172
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01172
    }
    com_01172.onclick = togg01172;
    list_01172.onclick = togg01172;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01173 = data[172];
    
    /*Récupere les données que je veut de la Commune */
    name_01173 = rows01173.Libellé_géographique;
    Pop_01173 = rows01173.Population_en_2017;
    Pop_017_01173 = rows01173.Pop_017_ans_2017;
    Pop_mediane_vote_01173 = rows01173.Popu_possible_voté;
    nbr_inscrit_01173 = rows01173.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01173').textContent = name_01173;
    
    let com_01173 = document.getElementById("f-path-01199");
    let list_01173 = document.getElementById("list_01173");


    function togg01173() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01173-01').classList.remove('visible')
        document.querySelector('#polar-chart_01173-01').classList.remove('visible')
        document.querySelector('#polar-chart_01173-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01173').classList.remove('visible')
        document.querySelector('#f-path-01199').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01173
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01173
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01173
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01173
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01173
    }
    com_01173.onclick = togg01173;
    list_01173.onclick = togg01173;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01174 = data[173];
    
    /*Récupere les données que je veut de la Commune */
    name_01174 = rows01174.Libellé_géographique;
    Pop_01174 = rows01174.Population_en_2017;
    Pop_017_01174 = rows01174.Pop_017_ans_2017;
    Pop_mediane_vote_01174 = rows01174.Popu_possible_voté;
    nbr_inscrit_01174 = rows01174.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01174').textContent = name_01174;
    
    let com_01174 = document.getElementById("f-path-01200");
    let list_01174 = document.getElementById("list_01174");


    function togg01174() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01174-01').classList.remove('visible')
        document.querySelector('#polar-chart_01174-01').classList.remove('visible')
        document.querySelector('#polar-chart_01174-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01174').classList.remove('visible')
        document.querySelector('#f-path-01200').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01174
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01174
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01174
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01174
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01174
    }
    com_01174.onclick = togg01174;
    list_01174.onclick = togg01174;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01175 = data[174];
    
    /*Récupere les données que je veut de la Commune */
    name_01175 = rows01175.Libellé_géographique;
    Pop_01175 = rows01175.Population_en_2017;
    Pop_017_01175 = rows01175.Pop_017_ans_2017;
    Pop_mediane_vote_01175 = rows01175.Popu_possible_voté;
    nbr_inscrit_01175 = rows01175.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01175').textContent = name_01175;
    
    let com_01175 = document.getElementById("f-path-01202");
    let list_01175 = document.getElementById("list_01175");


    function togg01175() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01175-01').classList.remove('visible')
        document.querySelector('#polar-chart_01175-01').classList.remove('visible')
        document.querySelector('#polar-chart_01175-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01175').classList.remove('visible')
        document.querySelector('#f-path-01202').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01175
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01175
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01175
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01175
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01175
    }
    com_01175.onclick = togg01175;
    list_01175.onclick = togg01175;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01176 = data[175];
    
    /*Récupere les données que je veut de la Commune */
    name_01176 = rows01176.Libellé_géographique;
    Pop_01176 = rows01176.Population_en_2017;
    Pop_017_01176 = rows01176.Pop_017_ans_2017;
    Pop_mediane_vote_01176 = rows01176.Popu_possible_voté;
    nbr_inscrit_01176 = rows01176.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01176').textContent = name_01176;
    
    let com_01176 = document.getElementById("f-path-01203");
    let list_01176 = document.getElementById("list_01176");


    function togg01176() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01176-01').classList.remove('visible')
        document.querySelector('#polar-chart_01176-01').classList.remove('visible')
        document.querySelector('#polar-chart_01176-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01176').classList.remove('visible')
        document.querySelector('#f-path-01203').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01176
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01176
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01176
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01176
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01176
    }
    com_01176.onclick = togg01176;
    list_01176.onclick = togg01176;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01177 = data[176];
    
    /*Récupere les données que je veut de la Commune */
    name_01177 = rows01177.Libellé_géographique;
    Pop_01177 = rows01177.Population_en_2017;
    Pop_017_01177 = rows01177.Pop_017_ans_2017;
    Pop_mediane_vote_01177 = rows01177.Popu_possible_voté;
    nbr_inscrit_01177 = rows01177.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01177').textContent = name_01177;
    
    let com_01177 = document.getElementById("f-path-01204");
    let list_01177 = document.getElementById("list_01177");


    function togg01177() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01177-01').classList.remove('visible')
        document.querySelector('#polar-chart_01177-01').classList.remove('visible')
        document.querySelector('#polar-chart_01177-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01177').classList.remove('visible')
        document.querySelector('#f-path-01204').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01177
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01177
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01177
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01177
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01177
    }
    com_01177.onclick = togg01177;
    list_01177.onclick = togg01177;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01178 = data[177];
    
    /*Récupere les données que je veut de la Commune */
    name_01178 = rows01178.Libellé_géographique;
    Pop_01178 = rows01178.Population_en_2017;
    Pop_017_01178 = rows01178.Pop_017_ans_2017;
    Pop_mediane_vote_01178 = rows01178.Popu_possible_voté;
    nbr_inscrit_01178 = rows01178.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01178').textContent = name_01178;
    
    let com_01178 = document.getElementById("f-path-01206");
    let list_01178 = document.getElementById("list_01178");


    function togg01178() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01178-01').classList.remove('visible')
        document.querySelector('#polar-chart_01178-01').classList.remove('visible')
        document.querySelector('#polar-chart_01178-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01178').classList.remove('visible')
        document.querySelector('#f-path-01206').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01178
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01178
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01178
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01178
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01178
    }
    com_01178.onclick = togg01178;
    list_01178.onclick = togg01178;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01179 = data[178];
    
    /*Récupere les données que je veut de la Commune */
    name_01179 = rows01179.Libellé_géographique;
    Pop_01179 = rows01179.Population_en_2017;
    Pop_017_01179 = rows01179.Pop_017_ans_2017;
    Pop_mediane_vote_01179 = rows01179.Popu_possible_voté;
    nbr_inscrit_01179 = rows01179.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01179').textContent = name_01179;
    
    let com_01179 = document.getElementById("f-path-01207");
    let list_01179 = document.getElementById("list_01179");


    function togg01179() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01179-01').classList.remove('visible')
        document.querySelector('#polar-chart_01179-01').classList.remove('visible')
        document.querySelector('#polar-chart_01179-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01179').classList.remove('visible')
        document.querySelector('#f-path-01207').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01179
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01179
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01179
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01179
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01179
    }
    com_01179.onclick = togg01179;
    list_01179.onclick = togg01179;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01180 = data[179];
    
    /*Récupere les données que je veut de la Commune */
    name_01180 = rows01180.Libellé_géographique;
    Pop_01180 = rows01180.Population_en_2017;
    Pop_017_01180 = rows01180.Pop_017_ans_2017;
    Pop_mediane_vote_01180 = rows01180.Popu_possible_voté;
    nbr_inscrit_01180 = rows01180.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01180').textContent = name_01180;
    
    let com_01180 = document.getElementById("f-path-01208");
    let list_01180 = document.getElementById("list_01180");


    function togg01180() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01180-01').classList.remove('visible')
        document.querySelector('#polar-chart_01180-01').classList.remove('visible')
        document.querySelector('#polar-chart_01180-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01180').classList.remove('visible')
        document.querySelector('#f-path-01208').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01180
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01180
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01180
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01180
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01180
    }
    com_01180.onclick = togg01180;
    list_01180.onclick = togg01180;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01181 = data[180];
    
    /*Récupere les données que je veut de la Commune */
    name_01181 = rows01181.Libellé_géographique;
    Pop_01181 = rows01181.Population_en_2017;
    Pop_017_01181 = rows01181.Pop_017_ans_2017;
    Pop_mediane_vote_01181 = rows01181.Popu_possible_voté;
    nbr_inscrit_01181 = rows01181.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01181').textContent = name_01181;
    
    let com_01181 = document.getElementById("f-path-01209");
    let list_01181 = document.getElementById("list_01181");


    function togg01181() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01181-01').classList.remove('visible')
        document.querySelector('#polar-chart_01181-01').classList.remove('visible')
        document.querySelector('#polar-chart_01181-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01181').classList.remove('visible')
        document.querySelector('#f-path-01209').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01181
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01181
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01181
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01181
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01181
    }
    com_01181.onclick = togg01181;
    list_01181.onclick = togg01181;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01182 = data[181];
    
    /*Récupere les données que je veut de la Commune */
    name_01182 = rows01182.Libellé_géographique;
    Pop_01182 = rows01182.Population_en_2017;
    Pop_017_01182 = rows01182.Pop_017_ans_2017;
    Pop_mediane_vote_01182 = rows01182.Popu_possible_voté;
    nbr_inscrit_01182 = rows01182.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01182').textContent = name_01182;
    
    let com_01182 = document.getElementById("f-path-01210");
    let list_01182 = document.getElementById("list_01182");


    function togg01182() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01182-01').classList.remove('visible')
        document.querySelector('#polar-chart_01182-01').classList.remove('visible')
        document.querySelector('#polar-chart_01182-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01182').classList.remove('visible')
        document.querySelector('#f-path-01210').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01182
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01182
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01182
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01182
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01182
    }
    com_01182.onclick = togg01182;
    list_01182.onclick = togg01182;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01183 = data[182];
    
    /*Récupere les données que je veut de la Commune */
    name_01183 = rows01183.Libellé_géographique;
    Pop_01183 = rows01183.Population_en_2017;
    Pop_017_01183 = rows01183.Pop_017_ans_2017;
    Pop_mediane_vote_01183 = rows01183.Popu_possible_voté;
    nbr_inscrit_01183 = rows01183.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01183').textContent = name_01183;
    
    let com_01183 = document.getElementById("f-path-01211");
    let list_01183 = document.getElementById("list_01183");


    function togg01183() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01183-01').classList.remove('visible')
        document.querySelector('#polar-chart_01183-01').classList.remove('visible')
        document.querySelector('#polar-chart_01183-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01183').classList.remove('visible')
        document.querySelector('#f-path-01211').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01183
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01183
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01183
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01183
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01183
    }
    com_01183.onclick = togg01183;
    list_01183.onclick = togg01183;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01184 = data[183];
    
    /*Récupere les données que je veut de la Commune */
    name_01184 = rows01184.Libellé_géographique;
    Pop_01184 = rows01184.Population_en_2017;
    Pop_017_01184 = rows01184.Pop_017_ans_2017;
    Pop_mediane_vote_01184 = rows01184.Popu_possible_voté;
    nbr_inscrit_01184 = rows01184.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01184').textContent = name_01184;
    
    let com_01184 = document.getElementById("f-path-01212");
    let list_01184 = document.getElementById("list_01184");


    function togg01184() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01184-01').classList.remove('visible')
        document.querySelector('#polar-chart_01184-01').classList.remove('visible')
        document.querySelector('#polar-chart_01184-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01184').classList.remove('visible')
        document.querySelector('#f-path-01212').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01184
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01184
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01184
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01184
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01184
    }
    com_01184.onclick = togg01184;
    list_01184.onclick = togg01184;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01185 = data[184];
    
    /*Récupere les données que je veut de la Commune */
    name_01185 = rows01185.Libellé_géographique;
    Pop_01185 = rows01185.Population_en_2017;
    Pop_017_01185 = rows01185.Pop_017_ans_2017;
    Pop_mediane_vote_01185 = rows01185.Popu_possible_voté;
    nbr_inscrit_01185 = rows01185.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01185').textContent = name_01185;
    
    let com_01185 = document.getElementById("f-path-01213");
    let list_01185 = document.getElementById("list_01185");


    function togg01185() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01185-01').classList.remove('visible')
        document.querySelector('#polar-chart_01185-01').classList.remove('visible')
        document.querySelector('#polar-chart_01185-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01185').classList.remove('visible')
        document.querySelector('#f-path-01213').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01185
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01185
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01185
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01185
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01185
    }
    com_01185.onclick = togg01185;
    list_01185.onclick = togg01185;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01186 = data[185];
    
    /*Récupere les données que je veut de la Commune */
    name_01186 = rows01186.Libellé_géographique;
    Pop_01186 = rows01186.Population_en_2017;
    Pop_017_01186 = rows01186.Pop_017_ans_2017;
    Pop_mediane_vote_01186 = rows01186.Popu_possible_voté;
    nbr_inscrit_01186 = rows01186.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01186').textContent = name_01186;
    
    let com_01186 = document.getElementById("f-path-01214");
    let list_01186 = document.getElementById("list_01186");


    function togg01186() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01186-01').classList.remove('visible')
        document.querySelector('#polar-chart_01186-01').classList.remove('visible')
        document.querySelector('#polar-chart_01186-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01186').classList.remove('visible')
        document.querySelector('#f-path-01214').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01186
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01186
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01186
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01186
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01186
    }
    com_01186.onclick = togg01186;
    list_01186.onclick = togg01186;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01187 = data[186];
    
    /*Récupere les données que je veut de la Commune */
    name_01187 = rows01187.Libellé_géographique;
    Pop_01187 = rows01187.Population_en_2017;
    Pop_017_01187 = rows01187.Pop_017_ans_2017;
    Pop_mediane_vote_01187 = rows01187.Popu_possible_voté;
    nbr_inscrit_01187 = rows01187.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01187').textContent = name_01187;
    
    let com_01187 = document.getElementById("f-path-01215");
    let list_01187 = document.getElementById("list_01187");


    function togg01187() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01187-01').classList.remove('visible')
        document.querySelector('#polar-chart_01187-01').classList.remove('visible')
        document.querySelector('#polar-chart_01187-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01187').classList.remove('visible')
        document.querySelector('#f-path-01215').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01187
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01187
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01187
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01187
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01187
    }
    com_01187.onclick = togg01187;
    list_01187.onclick = togg01187;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01188 = data[187];
    
    /*Récupere les données que je veut de la Commune */
    name_01188 = rows01188.Libellé_géographique;
    Pop_01188 = rows01188.Population_en_2017;
    Pop_017_01188 = rows01188.Pop_017_ans_2017;
    Pop_mediane_vote_01188 = rows01188.Popu_possible_voté;
    nbr_inscrit_01188 = rows01188.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01188').textContent = name_01188;
    
    let com_01188 = document.getElementById("f-path-01216");
    let list_01188 = document.getElementById("list_01188");


    function togg01188() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01188-01').classList.remove('visible')
        document.querySelector('#polar-chart_01188-01').classList.remove('visible')
        document.querySelector('#polar-chart_01188-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01188').classList.remove('visible')
        document.querySelector('#f-path-01216').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01188
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01188
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01188
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01188
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01188
    }
    com_01188.onclick = togg01188;
    list_01188.onclick = togg01188;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01189 = data[188];
    
    /*Récupere les données que je veut de la Commune */
    name_01189 = rows01189.Libellé_géographique;
    Pop_01189 = rows01189.Population_en_2017;
    Pop_017_01189 = rows01189.Pop_017_ans_2017;
    Pop_mediane_vote_01189 = rows01189.Popu_possible_voté;
    nbr_inscrit_01189 = rows01189.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01189').textContent = name_01189;
    
    let com_01189 = document.getElementById("f-path-01219");
    let list_01189 = document.getElementById("list_01189");


    function togg01189() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01189-01').classList.remove('visible')
        document.querySelector('#polar-chart_01189-01').classList.remove('visible')
        document.querySelector('#polar-chart_01189-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01189').classList.remove('visible')
        document.querySelector('#f-path-01219').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01189
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01189
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01189
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01189
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01189
    }
    com_01189.onclick = togg01189;
    list_01189.onclick = togg01189;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01190 = data[189];
    
    /*Récupere les données que je veut de la Commune */
    name_01190 = rows01190.Libellé_géographique;
    Pop_01190 = rows01190.Population_en_2017;
    Pop_017_01190 = rows01190.Pop_017_ans_2017;
    Pop_mediane_vote_01190 = rows01190.Popu_possible_voté;
    nbr_inscrit_01190 = rows01190.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01190').textContent = name_01190;
    
    let com_01190 = document.getElementById("f-path-01224");
    let list_01190 = document.getElementById("list_01190");


    function togg01190() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01190-01').classList.remove('visible')
        document.querySelector('#polar-chart_01190-01').classList.remove('visible')
        document.querySelector('#polar-chart_01190-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01190').classList.remove('visible')
        document.querySelector('#f-path-01224').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01190
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01190
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01190
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01190
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01190
    }
    com_01190.onclick = togg01190;
    list_01190.onclick = togg01190;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01191 = data[190];
    
    /*Récupere les données que je veut de la Commune */
    name_01191 = rows01191.Libellé_géographique;
    Pop_01191 = rows01191.Population_en_2017;
    Pop_017_01191 = rows01191.Pop_017_ans_2017;
    Pop_mediane_vote_01191 = rows01191.Popu_possible_voté;
    nbr_inscrit_01191 = rows01191.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01191').textContent = name_01191;
    
    let com_01191 = document.getElementById("f-path-01225");
    let list_01191 = document.getElementById("list_01191");


    function togg01191() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01191-01').classList.remove('visible')
        document.querySelector('#polar-chart_01191-01').classList.remove('visible')
        document.querySelector('#polar-chart_01191-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01191').classList.remove('visible')
        document.querySelector('#f-path-01225').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01191
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01191
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01191
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01191
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01191
    }
    com_01191.onclick = togg01191;
    list_01191.onclick = togg01191;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01192 = data[191];
    
    /*Récupere les données que je veut de la Commune */
    name_01192 = rows01192.Libellé_géographique;
    Pop_01192 = rows01192.Population_en_2017;
    Pop_017_01192 = rows01192.Pop_017_ans_2017;
    Pop_mediane_vote_01192 = rows01192.Popu_possible_voté;
    nbr_inscrit_01192 = rows01192.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01192').textContent = name_01192;
    
    let com_01192 = document.getElementById("f-path-01227");
    let list_01192 = document.getElementById("list_01192");


    function togg01192() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01192-01').classList.remove('visible')
        document.querySelector('#polar-chart_01192-01').classList.remove('visible')
        document.querySelector('#polar-chart_01192-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01192').classList.remove('visible')
        document.querySelector('#f-path-01227').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01192
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01192
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01192
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01192
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01192
    }
    com_01192.onclick = togg01192;
    list_01192.onclick = togg01192;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01193 = data[192];
    
    /*Récupere les données que je veut de la Commune */
    name_01193 = rows01193.Libellé_géographique;
    Pop_01193 = rows01193.Population_en_2017;
    Pop_017_01193 = rows01193.Pop_017_ans_2017;
    Pop_mediane_vote_01193 = rows01193.Popu_possible_voté;
    nbr_inscrit_01193 = rows01193.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01193').textContent = name_01193;
    
    let com_01193 = document.getElementById("f-path-01228");
    let list_01193 = document.getElementById("list_01193");


    function togg01193() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01193-01').classList.remove('visible')
        document.querySelector('#polar-chart_01193-01').classList.remove('visible')
        document.querySelector('#polar-chart_01193-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01193').classList.remove('visible')
        document.querySelector('#f-path-01228').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01193
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01193
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01193
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01193
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01193
    }
    com_01193.onclick = togg01193;
    list_01193.onclick = togg01193;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01194 = data[193];
    
    /*Récupere les données que je veut de la Commune */
    name_01194 = rows01194.Libellé_géographique;
    Pop_01194 = rows01194.Population_en_2017;
    Pop_017_01194 = rows01194.Pop_017_ans_2017;
    Pop_mediane_vote_01194 = rows01194.Popu_possible_voté;
    nbr_inscrit_01194 = rows01194.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01194').textContent = name_01194;
    
    let com_01194 = document.getElementById("f-path-01229");
    let list_01194 = document.getElementById("list_01194");


    function togg01194() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01194-01').classList.remove('visible')
        document.querySelector('#polar-chart_01194-01').classList.remove('visible')
        document.querySelector('#polar-chart_01194-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01194').classList.remove('visible')
        document.querySelector('#f-path-01229').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01194
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01194
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01194
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01194
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01194
    }
    com_01194.onclick = togg01194;
    list_01194.onclick = togg01194;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01195 = data[194];
    
    /*Récupere les données que je veut de la Commune */
    name_01195 = rows01195.Libellé_géographique;
    Pop_01195 = rows01195.Population_en_2017;
    Pop_017_01195 = rows01195.Pop_017_ans_2017;
    Pop_mediane_vote_01195 = rows01195.Popu_possible_voté;
    nbr_inscrit_01195 = rows01195.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01195').textContent = name_01195;
    
    let com_01195 = document.getElementById("f-path-01230");
    let list_01195 = document.getElementById("list_01195");


    function togg01195() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01195-01').classList.remove('visible')
        document.querySelector('#polar-chart_01195-01').classList.remove('visible')
        document.querySelector('#polar-chart_01195-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01195').classList.remove('visible')
        document.querySelector('#f-path-01230').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01195
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01195
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01195
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01195
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01195
    }
    com_01195.onclick = togg01195;
    list_01195.onclick = togg01195;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01196 = data[195];
    
    /*Récupere les données que je veut de la Commune */
    name_01196 = rows01196.Libellé_géographique;
    Pop_01196 = rows01196.Population_en_2017;
    Pop_017_01196 = rows01196.Pop_017_ans_2017;
    Pop_mediane_vote_01196 = rows01196.Popu_possible_voté;
    nbr_inscrit_01196 = rows01196.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01196').textContent = name_01196;
    
    let com_01196 = document.getElementById("f-path-01231");
    let list_01196 = document.getElementById("list_01196");


    function togg01196() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01196-01').classList.remove('visible')
        document.querySelector('#polar-chart_01196-01').classList.remove('visible')
        document.querySelector('#polar-chart_01196-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01196').classList.remove('visible')
        document.querySelector('#f-path-01231').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01196
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01196
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01196
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01196
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01196
    }
    com_01196.onclick = togg01196;
    list_01196.onclick = togg01196;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01197 = data[196];
    
    /*Récupere les données que je veut de la Commune */
    name_01197 = rows01197.Libellé_géographique;
    Pop_01197 = rows01197.Population_en_2017;
    Pop_017_01197 = rows01197.Pop_017_ans_2017;
    Pop_mediane_vote_01197 = rows01197.Popu_possible_voté;
    nbr_inscrit_01197 = rows01197.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01197').textContent = name_01197;
    
    let com_01197 = document.getElementById("f-path-01232");
    let list_01197 = document.getElementById("list_01197");


    function togg01197() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01197-01').classList.remove('visible')
        document.querySelector('#polar-chart_01197-01').classList.remove('visible')
        document.querySelector('#polar-chart_01197-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01197').classList.remove('visible')
        document.querySelector('#f-path-01232').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01197
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01197
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01197
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01197
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01197
    }
    com_01197.onclick = togg01197;
    list_01197.onclick = togg01197;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01198 = data[197];
    
    /*Récupere les données que je veut de la Commune */
    name_01198 = rows01198.Libellé_géographique;
    Pop_01198 = rows01198.Population_en_2017;
    Pop_017_01198 = rows01198.Pop_017_ans_2017;
    Pop_mediane_vote_01198 = rows01198.Popu_possible_voté;
    nbr_inscrit_01198 = rows01198.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01198').textContent = name_01198;
    
    let com_01198 = document.getElementById("f-path-01233");
    let list_01198 = document.getElementById("list_01198");


    function togg01198() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01198-01').classList.remove('visible')
        document.querySelector('#polar-chart_01198-01').classList.remove('visible')
        document.querySelector('#polar-chart_01198-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01198').classList.remove('visible')
        document.querySelector('#f-path-01233').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01198
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01198
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01198
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01198
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01198
    }
    com_01198.onclick = togg01198;
    list_01198.onclick = togg01198;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01199 = data[198];
    
    /*Récupere les données que je veut de la Commune */
    name_01199 = rows01199.Libellé_géographique;
    Pop_01199 = rows01199.Population_en_2017;
    Pop_017_01199 = rows01199.Pop_017_ans_2017;
    Pop_mediane_vote_01199 = rows01199.Popu_possible_voté;
    nbr_inscrit_01199 = rows01199.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01199').textContent = name_01199;
    
    let com_01199 = document.getElementById("f-path-01234");
    let list_01199 = document.getElementById("list_01199");


    function togg01199() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01199-01').classList.remove('visible')
        document.querySelector('#polar-chart_01199-01').classList.remove('visible')
        document.querySelector('#polar-chart_01199-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01199').classList.remove('visible')
        document.querySelector('#f-path-01234').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01199
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01199
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01199
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01199
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01199
    }
    com_01199.onclick = togg01199;
    list_01199.onclick = togg01199;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01200 = data[199];
    
    /*Récupere les données que je veut de la Commune */
    name_01200 = rows01200.Libellé_géographique;
    Pop_01200 = rows01200.Population_en_2017;
    Pop_017_01200 = rows01200.Pop_017_ans_2017;
    Pop_mediane_vote_01200 = rows01200.Popu_possible_voté;
    nbr_inscrit_01200 = rows01200.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01200').textContent = name_01200;
    
    let com_01200 = document.getElementById("f-path-01235");
    let list_01200 = document.getElementById("list_01200");


    function togg01200() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01200-01').classList.remove('visible')
        document.querySelector('#polar-chart_01200-01').classList.remove('visible')
        document.querySelector('#polar-chart_01200-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01200').classList.remove('visible')
        document.querySelector('#f-path-01235').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01200
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01200
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01200
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01200
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01200
    }
    com_01200.onclick = togg01200;
    list_01200.onclick = togg01200;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01201 = data[200];

    /*Récupere les données que je veut de la Commune */
    name_01201 = rows01201.Libellé_géographique;
    Pop_01201 = rows01201.Population_en_2017;
    Pop_017_01201 = rows01201.Pop_017_ans_2017;
    Pop_mediane_vote_01201 = rows01201.Popu_possible_voté;
    nbr_inscrit_01201 = rows01201.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01201').textContent = name_01201;
   
    let com_01201 = document.getElementById("f-path-01237");
    let list_01201 = document.getElementById("list_01201");


    function togg01201() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01201-01').classList.remove('visible')
        document.querySelector('#polar-chart_01201-01').classList.remove('visible')
        document.querySelector('#polar-chart_01201-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01201').classList.remove('visible')
        document.querySelector('#f-path-01237').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01201
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01201
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01201
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01201
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01201
    }
    com_01201.onclick = togg01201;
    list_01201.onclick = togg01201;  
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01202 = data[201];

    /*Récupere les données que je veut de la Commune */
    name_01202 = rows01202.Libellé_géographique;
    Pop_01202 = rows01202.Population_en_2017;
    Pop_017_01202 = rows01202.Pop_017_ans_2017;
    Pop_mediane_vote_01202 = rows01202.Popu_possible_voté;
    nbr_inscrit_01202 = rows01202.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01202').textContent = name_01202;
/*--------------------------------------------------------------------------*/
    let com_01202 = document.getElementById("f-path-01238");
    let list_01202 = document.getElementById("list_01202");
    /******************************************************************** */

    function togg01202() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01202-01').classList.remove('visible')
        document.querySelector('#polar-chart_01202-01').classList.remove('visible')
        document.querySelector('#polar-chart_01202-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01202').classList.remove('visible')
        document.querySelector('#f-path-01238').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01202;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01202
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01202
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01202
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01202
    }
    com_01202.onclick = togg01202;
    list_01202.onclick = togg01202;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01203 = data[202];
    
    /*Récupere les données que je veut de la Commune */
    name_01203 = rows01203.Libellé_géographique;
    Pop_01203 = rows01203.Population_en_2017;
    Pop_017_01203 = rows01203.Pop_017_ans_2017;
    Pop_mediane_vote_01203 = rows01203.Popu_possible_voté;
    nbr_inscrit_01203 = rows01203.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01203').textContent = name_01203;

    let com_01203 = document.getElementById("f-path-01239");
    let list_01203 = document.getElementById("list_01203");


    function togg01203() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01203-01').classList.remove('visible')
        document.querySelector('#polar-chart_01203-01').classList.remove('visible')
        document.querySelector('#polar-chart_01203-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01203').classList.remove('visible')
        document.querySelector('#f-path-01239').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01203;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01203
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01203
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01203
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01203
    }
    com_01203.onclick = togg01203;
    list_01203.onclick = togg01203;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01204 = data[203];
    
    /*Récupere les données que je veut de la Commune */
    name_01204 = rows01204.Libellé_géographique;
    Pop_01204 = rows01204.Population_en_2017;
    Pop_017_01204 = rows01204.Pop_017_ans_2017;
    Pop_mediane_vote_01204 = rows01204.Popu_possible_voté;
    nbr_inscrit_01204 = rows01204.Inscrits;

    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01204').textContent = name_01204;
    
    let com_01204 = document.getElementById("f-path-01240");
    let list_01204 = document.getElementById("list_01204");


    function togg01204() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01204-01').classList.remove('visible')
        document.querySelector('#polar-chart_01204-01').classList.remove('visible')
        document.querySelector('#polar-chart_01204-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01204').classList.remove('visible')
        document.querySelector('#f-path-01240').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01204;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01204
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01204
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01204
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01204
    }
    com_01204.onclick = togg01204;
    list_01204.onclick = togg01204;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01205 = data[204];
    
    /*Récupere les données que je veut de la Commune */
    name_01205 = rows01205.Libellé_géographique;
    Pop_01205 = rows01205.Population_en_2017;
    Pop_017_01205 = rows01205.Pop_017_ans_2017;
    Pop_mediane_vote_01205 = rows01205.Popu_possible_voté;
    nbr_inscrit_01205 = rows01205.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01205').textContent = name_01205;

    let com_01205 = document.getElementById("f-path-01241");
    let list_01205 = document.getElementById("list_01205");


    function togg01205() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01205-01').classList.remove('visible')
        document.querySelector('#polar-chart_01205-01').classList.remove('visible')
        document.querySelector('#polar-chart_01205-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01205').classList.remove('visible')
        document.querySelector('#f-path-01241').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01205
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01205
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01205
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01205
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01205
    }
    com_01205.onclick = togg01205;
    list_01205.onclick = togg01205;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01206 = data[205];
    
    /*Récupere les données que je veut de la Commune */
    name_01206 = rows01206.Libellé_géographique;
    Pop_01206 = rows01206.Population_en_2017;
    Pop_017_01206 = rows01206.Pop_017_ans_2017;
    Pop_mediane_vote_01206 = rows01206.Popu_possible_voté;
    nbr_inscrit_01206 = rows01206.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01206').textContent = name_01206;
    
    let com_01206 = document.getElementById("f-path-01242");
    let list_01206 = document.getElementById("list_01206");


    function togg01206() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01206-01').classList.remove('visible')
        document.querySelector('#polar-chart_01206-01').classList.remove('visible')
        document.querySelector('#polar-chart_01206-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01206').classList.remove('visible')
        document.querySelector('#f-path-01242').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01206
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01206
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01206
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01206
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01206
    }
    com_01206.onclick = togg01206;
    list_01206.onclick = togg01206;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01207 = data[206];
    
    /*Récupere les données que je veut de la Commune */
    name_01207 = rows01207.Libellé_géographique;
    Pop_01207 = rows01207.Population_en_2017;
    Pop_017_01207 = rows01207.Pop_017_ans_2017;
    Pop_mediane_vote_01207 = rows01207.Popu_possible_voté;
    nbr_inscrit_01207 = rows01207.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01207').textContent = name_01207;
    
    let com_01207 = document.getElementById("f-path-01243");
    let list_01207 = document.getElementById("list_01207");


    function togg01207() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01207-01').classList.remove('visible')
        document.querySelector('#polar-chart_01207-01').classList.remove('visible')
        document.querySelector('#polar-chart_01207-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01207').classList.remove('visible')
        document.querySelector('#f-path-01243').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01207
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01207
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01207
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01207
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01207
    }
    com_01207.onclick = togg01207;
    list_01207.onclick = togg01207;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01208 = data[207];
    
    /*Récupere les données que je veut de la Commune */
    name_01208 = rows01208.Libellé_géographique;
    Pop_01208 = rows01208.Population_en_2017;
    Pop_017_01208 = rows01208.Pop_017_ans_2017;
    Pop_mediane_vote_01208 = rows01208.Popu_possible_voté;
    nbr_inscrit_01208 = rows01208.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01208').textContent = name_01208;
    
    let com_01208 = document.getElementById("f-path-01244");
    let list_01208 = document.getElementById("list_01208");


    function togg01208() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01208-01').classList.remove('visible')
        document.querySelector('#polar-chart_01208-01').classList.remove('visible')
        document.querySelector('#polar-chart_01208-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01208').classList.remove('visible')
        document.querySelector('#f-path-01244').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01208
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01208
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01208
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01208
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01208
    }
    com_01208.onclick = togg01208;
    list_01208.onclick = togg01208;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01209 = data[208];
    
    /*Récupere les données que je veut de la Commune */
    name_01209 = rows01209.Libellé_géographique;
    Pop_01209 = rows01209.Population_en_2017;
    Pop_017_01209 = rows01209.Pop_017_ans_2017;
    Pop_mediane_vote_01209 = rows01209.Popu_possible_voté;
    nbr_inscrit_01209 = rows01209.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01209').textContent = name_01209;
    
    let com_01209 = document.getElementById("f-path-01245");
    let list_01209 = document.getElementById("list_01209");


    function togg01209() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01209-01').classList.remove('visible')
        document.querySelector('#polar-chart_01209-01').classList.remove('visible')
        document.querySelector('#polar-chart_01209-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01209').classList.remove('visible')
        document.querySelector('#f-path-01245').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01209
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01209
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01209
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01209
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01209
    }
    com_01209.onclick = togg01209;
    list_01209.onclick = togg01209;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01210 = data[209];
    
    /*Récupere les données que je veut de la Commune */
    name_01210 = rows01210.Libellé_géographique;
    Pop_01210 = rows01210.Population_en_2017;
    Pop_017_01210 = rows01210.Pop_017_ans_2017;
    Pop_mediane_vote_01210 = rows01210.Popu_possible_voté;
    nbr_inscrit_01210 = rows01210.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01210').textContent = name_01210;
    
    let com_01210 = document.getElementById("f-path-01246");
    let list_01210 = document.getElementById("list_01210");


    function togg01210() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01210-01').classList.remove('visible')
        document.querySelector('#polar-chart_01210-01').classList.remove('visible')
        document.querySelector('#polar-chart_01210-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01210').classList.remove('visible')
        document.querySelector('#f-path-01246').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01210
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01210
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01210
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01210
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01210
    }
    com_01210.onclick = togg01210;
    list_01210.onclick = togg01210;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01211 = data[210];
    
    /*Récupere les données que je veut de la Commune */
    name_01211 = rows01211.Libellé_géographique;
    Pop_01211 = rows01211.Population_en_2017;
    Pop_017_01211 = rows01211.Pop_017_ans_2017;
    Pop_mediane_vote_01211 = rows01211.Popu_possible_voté;
    nbr_inscrit_01211 = rows01211.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01211').textContent = name_01211;
    
    let com_01211 = document.getElementById("f-path-01247");
    let list_01211 = document.getElementById("list_01211");


    function togg01211() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01211-01').classList.remove('visible')
        document.querySelector('#polar-chart_01211-01').classList.remove('visible')
        document.querySelector('#polar-chart_01211-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01211').classList.remove('visible')
        document.querySelector('#f-path-01247').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01211
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01211
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01211
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01211
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01211
    }
    com_01211.onclick = togg01211;
    list_01211.onclick = togg01211;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01212 = data[211];
    
    /*Récupere les données que je veut de la Commune */
    name_01212 = rows01212.Libellé_géographique;
    Pop_01212 = rows01212.Population_en_2017;
    Pop_017_01212 = rows01212.Pop_017_ans_2017;
    Pop_mediane_vote_01212 = rows01212.Popu_possible_voté;
    nbr_inscrit_01212 = rows01212.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01212').textContent = name_01212;
    
    let com_01212 = document.getElementById("f-path-01248");
    let list_01212 = document.getElementById("list_01212");


    function togg01212() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01212-01').classList.remove('visible')
        document.querySelector('#polar-chart_01212-01').classList.remove('visible')
        document.querySelector('#polar-chart_01212-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01212').classList.remove('visible')
        document.querySelector('#f-path-01248').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01212
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01212
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01212
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01212
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01212
    }
    com_01212.onclick = togg01212;
    list_01212.onclick = togg01212;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01213 = data[212];
    
    /*Récupere les données que je veut de la Commune */
    name_01213 = rows01213.Libellé_géographique;
    Pop_01213 = rows01213.Population_en_2017;
    Pop_017_01213 = rows01213.Pop_017_ans_2017;
    Pop_mediane_vote_01213 = rows01213.Popu_possible_voté;
    nbr_inscrit_01213 = rows01213.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01213').textContent = name_01213;
    
    let com_01213 = document.getElementById("f-path-01249");
    let list_01213 = document.getElementById("list_01213");


    function togg01213() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01213-01').classList.remove('visible')
        document.querySelector('#polar-chart_01213-01').classList.remove('visible')
        document.querySelector('#polar-chart_01213-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01213').classList.remove('visible')
        document.querySelector('#f-path-01249').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01213
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01213
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01213
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01213
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01213
    }
    com_01213.onclick = togg01213;
    list_01213.onclick = togg01213;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01214 = data[213];
    
    /*Récupere les données que je veut de la Commune */
    name_01214 = rows01214.Libellé_géographique;
    Pop_01214 = rows01214.Population_en_2017;
    Pop_017_01214 = rows01214.Pop_017_ans_2017;
    Pop_mediane_vote_01214 = rows01214.Popu_possible_voté;
    nbr_inscrit_01214 = rows01214.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01214').textContent = name_01214;
    
    let com_01214 = document.getElementById("f-path-01250");
    let list_01214 = document.getElementById("list_01214");


    function togg01214() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01214-01').classList.remove('visible')
        document.querySelector('#polar-chart_01214-01').classList.remove('visible')
        document.querySelector('#polar-chart_01214-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01214').classList.remove('visible')
        document.querySelector('#f-path-01250').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01214
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01214
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01214
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01214
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01214
    }
    com_01214.onclick = togg01214;
    list_01214.onclick = togg01214;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01215 = data[214];
    
    /*Récupere les données que je veut de la Commune */
    name_01215 = rows01215.Libellé_géographique;
    Pop_01215 = rows01215.Population_en_2017;
    Pop_017_01215 = rows01215.Pop_017_ans_2017;
    Pop_mediane_vote_01215 = rows01215.Popu_possible_voté;
    nbr_inscrit_01215 = rows01215.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01215').textContent = name_01215;
    
    let com_01215 = document.getElementById("f-path-01252");
    let list_01215 = document.getElementById("list_01215");


    function togg01215() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01215-01').classList.remove('visible')
        document.querySelector('#polar-chart_01215-01').classList.remove('visible')
        document.querySelector('#polar-chart_01215-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01215').classList.remove('visible')
        document.querySelector('#f-path-01252').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01215
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01215
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01215
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01215
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01215
    }
    com_01215.onclick = togg01215;
    list_01215.onclick = togg01215;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01216 = data[215];
    
    /*Récupere les données que je veut de la Commune */
    name_01216 = rows01216.Libellé_géographique;
    Pop_01216 = rows01216.Population_en_2017;
    Pop_017_01216 = rows01216.Pop_017_ans_2017;
    Pop_mediane_vote_01216 = rows01216.Popu_possible_voté;
    nbr_inscrit_01216 = rows01216.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01216').textContent = name_01216;
    
    let com_01216 = document.getElementById("f-path-01254");
    let list_01216 = document.getElementById("list_01216");


    function togg01216() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01216-01').classList.remove('visible')
        document.querySelector('#polar-chart_01216-01').classList.remove('visible')
        document.querySelector('#polar-chart_01216-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01216').classList.remove('visible')
        document.querySelector('#f-path-01254').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01216
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01216
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01216
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01216
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01216
    }
    com_01216.onclick = togg01216;
    list_01216.onclick = togg01216;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01217 = data[216];
    
    /*Récupere les données que je veut de la Commune */
    name_01217 = rows01217.Libellé_géographique;
    Pop_01217 = rows01217.Population_en_2017;
    Pop_017_01217 = rows01217.Pop_017_ans_2017;
    Pop_mediane_vote_01217 = rows01217.Popu_possible_voté;
    nbr_inscrit_01217 = rows01217.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01217').textContent = name_01217;
    
    let com_01217 = document.getElementById("f-path-01255");
    let list_01217 = document.getElementById("list_01217");


    function togg01217() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01217-01').classList.remove('visible')
        document.querySelector('#polar-chart_01217-01').classList.remove('visible')
        document.querySelector('#polar-chart_01217-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01217').classList.remove('visible')
        document.querySelector('#f-path-01255').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01217
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01217
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01217
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01217
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01217
    }
    com_01217.onclick = togg01217;
    list_01217.onclick = togg01217;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01218 = data[217];
    
    /*Récupere les données que je veut de la Commune */
    name_01218 = rows01218.Libellé_géographique;
    Pop_01218 = rows01218.Population_en_2017;
    Pop_017_01218 = rows01218.Pop_017_ans_2017;
    Pop_mediane_vote_01218 = rows01218.Popu_possible_voté;
    nbr_inscrit_01218 = rows01218.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01218').textContent = name_01218;
    
    let com_01218 = document.getElementById("f-path-01257");
    let list_01218 = document.getElementById("list_01218");


    function togg01218() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01218-01').classList.remove('visible')
        document.querySelector('#polar-chart_01218-01').classList.remove('visible')
        document.querySelector('#polar-chart_01218-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01218').classList.remove('visible')
        document.querySelector('#f-path-01257').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01218
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01218
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01218
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01218
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01218
    }
    com_01218.onclick = togg01218;
    list_01218.onclick = togg01218;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01219 = data[218];
    
    /*Récupere les données que je veut de la Commune */
    name_01219 = rows01219.Libellé_géographique;
    Pop_01219 = rows01219.Population_en_2017;
    Pop_017_01219 = rows01219.Pop_017_ans_2017;
    Pop_mediane_vote_01219 = rows01219.Popu_possible_voté;
    nbr_inscrit_01219 = rows01219.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01219').textContent = name_01219;
    
    let com_01219 = document.getElementById("f-path-01258");
    let list_01219 = document.getElementById("list_01219");


    function togg01219() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01219-01').classList.remove('visible')
        document.querySelector('#polar-chart_01219-01').classList.remove('visible')
        document.querySelector('#polar-chart_01219-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01219').classList.remove('visible')
        document.querySelector('#f-path-01258').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01219
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01219
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01219
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01219
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01219
    }
    com_01219.onclick = togg01219;
    list_01219.onclick = togg01219;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01220 = data[219];
    
    /*Récupere les données que je veut de la Commune */
    name_01220 = rows01220.Libellé_géographique;
    Pop_01220 = rows01220.Population_en_2017;
    Pop_017_01220 = rows01220.Pop_017_ans_2017;
    Pop_mediane_vote_01220 = rows01220.Popu_possible_voté;
    nbr_inscrit_01220 = rows01220.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01220').textContent = name_01220;
    
    let com_01220 = document.getElementById("f-path-01259");
    let list_01220 = document.getElementById("list_01220");


    function togg01220() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01220-01').classList.remove('visible')
        document.querySelector('#polar-chart_01220-01').classList.remove('visible')
        document.querySelector('#polar-chart_01220-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01220').classList.remove('visible')
        document.querySelector('#f-path-01259').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01220
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01220
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01220
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01220
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01220
    }
    com_01220.onclick = togg01220;
    list_01220.onclick = togg01220;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01221 = data[220];
    
    /*Récupere les données que je veut de la Commune */
    name_01221 = rows01221.Libellé_géographique;
    Pop_01221 = rows01221.Population_en_2017;
    Pop_017_01221 = rows01221.Pop_017_ans_2017;
    Pop_mediane_vote_01221 = rows01221.Popu_possible_voté;
    nbr_inscrit_01221 = rows01221.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01221').textContent = name_01221;
    
    let com_01221 = document.getElementById("f-path-01260");
    let list_01221 = document.getElementById("list_01221");


    function togg01221() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01221-01').classList.remove('visible')
        document.querySelector('#polar-chart_01221-01').classList.remove('visible')
        document.querySelector('#polar-chart_01221-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01221').classList.remove('visible')
        document.querySelector('#f-path-01260').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01221
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01221
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01221
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01221
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01221
    }
    com_01221.onclick = togg01221;
    list_01221.onclick = togg01221;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01222 = data[221];
    
    /*Récupere les données que je veut de la Commune */
    name_01222 = rows01222.Libellé_géographique;
    Pop_01222 = rows01222.Population_en_2017;
    Pop_017_01222 = rows01222.Pop_017_ans_2017;
    Pop_mediane_vote_01222 = rows01222.Popu_possible_voté;
    nbr_inscrit_01222 = rows01222.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01222').textContent = name_01222;
    
    let com_01222 = document.getElementById("f-path-01261");
    let list_01222 = document.getElementById("list_01222");


    function togg01222() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01222-01').classList.remove('visible')
        document.querySelector('#polar-chart_01222-01').classList.remove('visible')
        document.querySelector('#polar-chart_01222-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01222').classList.remove('visible')
        document.querySelector('#f-path-01261').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01222
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01222
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01222
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01222
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01222
    }
    com_01222.onclick = togg01222;
    list_01222.onclick = togg01222;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01223 = data[222];
    
    /*Récupere les données que je veut de la Commune */
    name_01223 = rows01223.Libellé_géographique;
    Pop_01223 = rows01223.Population_en_2017;
    Pop_017_01223 = rows01223.Pop_017_ans_2017;
    Pop_mediane_vote_01223 = rows01223.Popu_possible_voté;
    nbr_inscrit_01223 = rows01223.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01223').textContent = name_01223;
    
    let com_01223 = document.getElementById("f-path-01262");
    let list_01223 = document.getElementById("list_01223");


    function togg01223() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01223-01').classList.remove('visible')
        document.querySelector('#polar-chart_01223-01').classList.remove('visible')
        document.querySelector('#polar-chart_01223-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01223').classList.remove('visible')
        document.querySelector('#f-path-01262').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01223
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01223
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01223
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01223
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01223
    }
    com_01223.onclick = togg01223;
    list_01223.onclick = togg01223;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01224 = data[223];
    
    /*Récupere les données que je veut de la Commune */
    name_01224 = rows01224.Libellé_géographique;
    Pop_01224 = rows01224.Population_en_2017;
    Pop_017_01224 = rows01224.Pop_017_ans_2017;
    Pop_mediane_vote_01224 = rows01224.Popu_possible_voté;
    nbr_inscrit_01224 = rows01224.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01224').textContent = name_01224;
    
    let com_01224 = document.getElementById("f-path-01263");
    let list_01224 = document.getElementById("list_01224");


    function togg01224() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01224-01').classList.remove('visible')
        document.querySelector('#polar-chart_01224-01').classList.remove('visible')
        document.querySelector('#polar-chart_01224-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01224').classList.remove('visible')
        document.querySelector('#f-path-01263').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01224
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01224
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01224
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01224
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01224
    }
    com_01224.onclick = togg01224;
    list_01224.onclick = togg01224;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01225 = data[224];
    
    /*Récupere les données que je veut de la Commune */
    name_01225 = rows01225.Libellé_géographique;
    Pop_01225 = rows01225.Population_en_2017;
    Pop_017_01225 = rows01225.Pop_017_ans_2017;
    Pop_mediane_vote_01225 = rows01225.Popu_possible_voté;
    nbr_inscrit_01225 = rows01225.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01225').textContent = name_01225;
    
    let com_01225 = document.getElementById("f-path-01264");
    let list_01225 = document.getElementById("list_01225");


    function togg01225() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01225-01').classList.remove('visible')
        document.querySelector('#polar-chart_01225-01').classList.remove('visible')
        document.querySelector('#polar-chart_01225-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01225').classList.remove('visible')
        document.querySelector('#f-path-01264').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01225
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01225
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01225
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01225
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01225
    }
    com_01225.onclick = togg01225;
    list_01225.onclick = togg01225;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01226 = data[225];
    
    /*Récupere les données que je veut de la Commune */
    name_01226 = rows01226.Libellé_géographique;
    Pop_01226 = rows01226.Population_en_2017;
    Pop_017_01226 = rows01226.Pop_017_ans_2017;
    Pop_mediane_vote_01226 = rows01226.Popu_possible_voté;
    nbr_inscrit_01226 = rows01226.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01226').textContent = name_01226;
    
    let com_01226 = document.getElementById("f-path-01265");
    let list_01226 = document.getElementById("list_01226");


    function togg01226() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01226-01').classList.remove('visible')
        document.querySelector('#polar-chart_01226-01').classList.remove('visible')
        document.querySelector('#polar-chart_01226-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01226').classList.remove('visible')
        document.querySelector('#f-path-01265').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01226
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01226
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01226
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01226
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01226
    }
    com_01226.onclick = togg01226;
    list_01226.onclick = togg01226;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01227 = data[226];
    
    /*Récupere les données que je veut de la Commune */
    name_01227 = rows01227.Libellé_géographique;
    Pop_01227 = rows01227.Population_en_2017;
    Pop_017_01227 = rows01227.Pop_017_ans_2017;
    Pop_mediane_vote_01227 = rows01227.Popu_possible_voté;
    nbr_inscrit_01227 = rows01227.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01227').textContent = name_01227;
    
    let com_01227 = document.getElementById("f-path-01266");
    let list_01227 = document.getElementById("list_01227");


    function togg01227() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01227-01').classList.remove('visible')
        document.querySelector('#polar-chart_01227-01').classList.remove('visible')
        document.querySelector('#polar-chart_01227-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01227').classList.remove('visible')
        document.querySelector('#f-path-01266').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01227
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01227
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01227
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01227
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01227
    }
    com_01227.onclick = togg01227;
    list_01227.onclick = togg01227;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01228 = data[227];
    
    /*Récupere les données que je veut de la Commune */
    name_01228 = rows01228.Libellé_géographique;
    Pop_01228 = rows01228.Population_en_2017;
    Pop_017_01228 = rows01228.Pop_017_ans_2017;
    Pop_mediane_vote_01228 = rows01228.Popu_possible_voté;
    nbr_inscrit_01228 = rows01228.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01228').textContent = name_01228;
    
    let com_01228 = document.getElementById("f-path-01267");
    let list_01228 = document.getElementById("list_01228");


    function togg01228() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01228-01').classList.remove('visible')
        document.querySelector('#polar-chart_01228-01').classList.remove('visible')
        document.querySelector('#polar-chart_01228-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01228').classList.remove('visible')
        document.querySelector('#f-path-01267').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01228
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01228
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01228
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01228
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01228
    }
    com_01228.onclick = togg01228;
    list_01228.onclick = togg01228;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01229 = data[228];
    
    /*Récupere les données que je veut de la Commune */
    name_01229 = rows01229.Libellé_géographique;
    Pop_01229 = rows01229.Population_en_2017;
    Pop_017_01229 = rows01229.Pop_017_ans_2017;
    Pop_mediane_vote_01229 = rows01229.Popu_possible_voté;
    nbr_inscrit_01229 = rows01229.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01229').textContent = name_01229;
    
    let com_01229 = document.getElementById("f-path-01268");
    let list_01229 = document.getElementById("list_01229");


    function togg01229() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01229-01').classList.remove('visible')
        document.querySelector('#polar-chart_01229-01').classList.remove('visible')
        document.querySelector('#polar-chart_01229-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01229').classList.remove('visible')
        document.querySelector('#f-path-01268').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01229
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01229
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01229
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01229
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01229
    }
    com_01229.onclick = togg01229;
    list_01229.onclick = togg01229;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01230 = data[229];
    
    /*Récupere les données que je veut de la Commune */
    name_01230 = rows01230.Libellé_géographique;
    Pop_01230 = rows01230.Population_en_2017;
    Pop_017_01230 = rows01230.Pop_017_ans_2017;
    Pop_mediane_vote_01230 = rows01230.Popu_possible_voté;
    nbr_inscrit_01230 = rows01230.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01230').textContent = name_01230;
    
    let com_01230 = document.getElementById("f-path-01269");
    let list_01230 = document.getElementById("list_01230");


    function togg01230() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01230-01').classList.remove('visible')
        document.querySelector('#polar-chart_01230-01').classList.remove('visible')
        document.querySelector('#polar-chart_01230-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01230').classList.remove('visible')
        document.querySelector('#f-path-01269').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01230
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01230
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01230
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01230
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01230
    }
    com_01230.onclick = togg01230;
    list_01230.onclick = togg01230;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01231 = data[230];
    
    /*Récupere les données que je veut de la Commune */
    name_01231 = rows01231.Libellé_géographique;
    Pop_01231 = rows01231.Population_en_2017;
    Pop_017_01231 = rows01231.Pop_017_ans_2017;
    Pop_mediane_vote_01231 = rows01231.Popu_possible_voté;
    nbr_inscrit_01231 = rows01231.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01231').textContent = name_01231;
    
    let com_01231 = document.getElementById("f-path-01272");
    let list_01231 = document.getElementById("list_01231");


    function togg01231() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01231-01').classList.remove('visible')
        document.querySelector('#polar-chart_01231-01').classList.remove('visible')
        document.querySelector('#polar-chart_01231-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01231').classList.remove('visible')
        document.querySelector('#f-path-01272').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01231
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01231
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01231
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01231
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01231
    }
    com_01231.onclick = togg01231;
    list_01231.onclick = togg01231;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01232 = data[231];
    
    /*Récupere les données que je veut de la Commune */
    name_01232 = rows01232.Libellé_géographique;
    Pop_01232 = rows01232.Population_en_2017;
    Pop_017_01232 = rows01232.Pop_017_ans_2017;
    Pop_mediane_vote_01232 = rows01232.Popu_possible_voté;
    nbr_inscrit_01232 = rows01232.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01232').textContent = name_01232;
    
    let com_01232 = document.getElementById("f-path-01273");
    let list_01232 = document.getElementById("list_01232");


    function togg01232() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01232-01').classList.remove('visible')
        document.querySelector('#polar-chart_01232-01').classList.remove('visible')
        document.querySelector('#polar-chart_01232-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01232').classList.remove('visible')
        document.querySelector('#f-path-01273').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01232
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01232
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01232
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01232
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01232
    }
    com_01232.onclick = togg01232;
    list_01232.onclick = togg01232;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01233 = data[232];
    
    /*Récupere les données que je veut de la Commune */
    name_01233 = rows01233.Libellé_géographique;
    Pop_01233 = rows01233.Population_en_2017;
    Pop_017_01233 = rows01233.Pop_017_ans_2017;
    Pop_mediane_vote_01233 = rows01233.Popu_possible_voté;
    nbr_inscrit_01233 = rows01233.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01233').textContent = name_01233;
    
    let com_01233 = document.getElementById("f-path-01274");
    let list_01233 = document.getElementById("list_01233");


    function togg01233() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01233-01').classList.remove('visible')
        document.querySelector('#polar-chart_01233-01').classList.remove('visible')
        document.querySelector('#polar-chart_01233-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01233').classList.remove('visible')
        document.querySelector('#f-path-01274').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01233
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01233
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01233
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01233
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01233
    }
    com_01233.onclick = togg01233;
    list_01233.onclick = togg01233;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01234 = data[233];
    
    /*Récupere les données que je veut de la Commune */
    name_01234 = rows01234.Libellé_géographique;
    Pop_01234 = rows01234.Population_en_2017;
    Pop_017_01234 = rows01234.Pop_017_ans_2017;
    Pop_mediane_vote_01234 = rows01234.Popu_possible_voté;
    nbr_inscrit_01234 = rows01234.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01234').textContent = name_01234;
    
    let com_01234 = document.getElementById("f-path-01275");
    let list_01234 = document.getElementById("list_01234");


    function togg01234() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01234-01').classList.remove('visible')
        document.querySelector('#polar-chart_01234-01').classList.remove('visible')
        document.querySelector('#polar-chart_01234-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01234').classList.remove('visible')
        document.querySelector('#f-path-01275').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01234
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01234
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01234
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01234
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01234
    }
    com_01234.onclick = togg01234;
    list_01234.onclick = togg01234;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01235 = data[234];
    
    /*Récupere les données que je veut de la Commune */
    name_01235 = rows01235.Libellé_géographique;
    Pop_01235 = rows01235.Population_en_2017;
    Pop_017_01235 = rows01235.Pop_017_ans_2017;
    Pop_mediane_vote_01235 = rows01235.Popu_possible_voté;
    nbr_inscrit_01235 = rows01235.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01235').textContent = name_01235;
    
    let com_01235 = document.getElementById("f-path-01276");
    let list_01235 = document.getElementById("list_01235");


    function togg01235() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01235-01').classList.remove('visible')
        document.querySelector('#polar-chart_01235-01').classList.remove('visible')
        document.querySelector('#polar-chart_01235-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01235').classList.remove('visible')
        document.querySelector('#f-path-01276').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01235
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01235
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01235
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01235
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01235
    }
    com_01235.onclick = togg01235;
    list_01235.onclick = togg01235;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01236 = data[235];
    
    /*Récupere les données que je veut de la Commune */
    name_01236 = rows01236.Libellé_géographique;
    Pop_01236 = rows01236.Population_en_2017;
    Pop_017_01236 = rows01236.Pop_017_ans_2017;
    Pop_mediane_vote_01236 = rows01236.Popu_possible_voté;
    nbr_inscrit_01236 = rows01236.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01236').textContent = name_01236;
    
    let com_01236 = document.getElementById("f-path-01277");
    let list_01236 = document.getElementById("list_01236");


    function togg01236() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01236-01').classList.remove('visible')
        document.querySelector('#polar-chart_01236-01').classList.remove('visible')
        document.querySelector('#polar-chart_01236-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01236').classList.remove('visible')
        document.querySelector('#f-path-01277').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01236
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01236
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01236
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01236
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01236
    }
    com_01236.onclick = togg01236;
    list_01236.onclick = togg01236;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01237 = data[236];
    
    /*Récupere les données que je veut de la Commune */
    name_01237 = rows01237.Libellé_géographique;
    Pop_01237 = rows01237.Population_en_2017;
    Pop_017_01237 = rows01237.Pop_017_ans_2017;
    Pop_mediane_vote_01237 = rows01237.Popu_possible_voté;
    nbr_inscrit_01237 = rows01237.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01237').textContent = name_01237;
    
    let com_01237 = document.getElementById("f-path-01279");
    let list_01237 = document.getElementById("list_01237");


    function togg01237() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01237-01').classList.remove('visible')
        document.querySelector('#polar-chart_01237-01').classList.remove('visible')
        document.querySelector('#polar-chart_01237-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01237').classList.remove('visible')
        document.querySelector('#f-path-01279').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01237
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01237
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01237
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01237
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01237
    }
    com_01237.onclick = togg01237;
    list_01237.onclick = togg01237;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01238 = data[237];
    
    /*Récupere les données que je veut de la Commune */
    name_01238 = rows01238.Libellé_géographique;
    Pop_01238 = rows01238.Population_en_2017;
    Pop_017_01238 = rows01238.Pop_017_ans_2017;
    Pop_mediane_vote_01238 = rows01238.Popu_possible_voté;
    nbr_inscrit_01238 = rows01238.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01238').textContent = name_01238;
    
    let com_01238 = document.getElementById("f-path-01280");
    let list_01238 = document.getElementById("list_01238");


    function togg01238() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01238-01').classList.remove('visible')
        document.querySelector('#polar-chart_01238-01').classList.remove('visible')
        document.querySelector('#polar-chart_01238-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01238').classList.remove('visible')
        document.querySelector('#f-path-01280').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01238
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01238
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01238
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01238
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01238
    }
    com_01238.onclick = togg01238;
    list_01238.onclick = togg01238;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01239 = data[238];
    
    /*Récupere les données que je veut de la Commune */
    name_01239 = rows01239.Libellé_géographique;
    Pop_01239 = rows01239.Population_en_2017;
    Pop_017_01239 = rows01239.Pop_017_ans_2017;
    Pop_mediane_vote_01239 = rows01239.Popu_possible_voté;
    nbr_inscrit_01239 = rows01239.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01239').textContent = name_01239;
    
    let com_01239 = document.getElementById("f-path-01281");
    let list_01239 = document.getElementById("list_01239");


    function togg01239() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01239-01').classList.remove('visible')
        document.querySelector('#polar-chart_01239-01').classList.remove('visible')
        document.querySelector('#polar-chart_01239-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01239').classList.remove('visible')
        document.querySelector('#f-path-01281').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01239
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01239
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01239
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01239
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01239
    }
    com_01239.onclick = togg01239;
    list_01239.onclick = togg01239;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01240 = data[239];
    
    /*Récupere les données que je veut de la Commune */
    name_01240 = rows01240.Libellé_géographique;
    Pop_01240 = rows01240.Population_en_2017;
    Pop_017_01240 = rows01240.Pop_017_ans_2017;
    Pop_mediane_vote_01240 = rows01240.Popu_possible_voté;
    nbr_inscrit_01240 = rows01240.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01240').textContent = name_01240;
    
    let com_01240 = document.getElementById("f-path-01282");
    let list_01240 = document.getElementById("list_01240");


    function togg01240() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01240-01').classList.remove('visible')
        document.querySelector('#polar-chart_01240-01').classList.remove('visible')
        document.querySelector('#polar-chart_01240-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01240').classList.remove('visible')
        document.querySelector('#f-path-01282').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01240
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01240
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01240
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01240
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01240
    }
    com_01240.onclick = togg01240;
    list_01240.onclick = togg01240;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01241 = data[240];
    
    /*Récupere les données que je veut de la Commune */
    name_01241 = rows01241.Libellé_géographique;
    Pop_01241 = rows01241.Population_en_2017;
    Pop_017_01241 = rows01241.Pop_017_ans_2017;
    Pop_mediane_vote_01241 = rows01241.Popu_possible_voté;
    nbr_inscrit_01241 = rows01241.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01241').textContent = name_01241;
    
    let com_01241 = document.getElementById("f-path-01283");
    let list_01241 = document.getElementById("list_01241");


    function togg01241() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01241-01').classList.remove('visible')
        document.querySelector('#polar-chart_01241-01').classList.remove('visible')
        document.querySelector('#polar-chart_01241-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01241').classList.remove('visible')
        document.querySelector('#f-path-01283').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01241
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01241
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01241
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01241
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01241
    }
    com_01241.onclick = togg01241;
    list_01241.onclick = togg01241;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01242 = data[241];
    
    /*Récupere les données que je veut de la Commune */
    name_01242 = rows01242.Libellé_géographique;
    Pop_01242 = rows01242.Population_en_2017;
    Pop_017_01242 = rows01242.Pop_017_ans_2017;
    Pop_mediane_vote_01242 = rows01242.Popu_possible_voté;
    nbr_inscrit_01242 = rows01242.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01242').textContent = name_01242;
    
    let com_01242 = document.getElementById("f-path-01284");
    let list_01242 = document.getElementById("list_01242");


    function togg01242() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01242-01').classList.remove('visible')
        document.querySelector('#polar-chart_01242-01').classList.remove('visible')
        document.querySelector('#polar-chart_01242-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01242').classList.remove('visible')
        document.querySelector('#f-path-01284').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01242
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01242
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01242
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01242
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01242
    }
    com_01242.onclick = togg01242;
    list_01242.onclick = togg01242;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01243 = data[242];
    
    /*Récupere les données que je veut de la Commune */
    name_01243 = rows01243.Libellé_géographique;
    Pop_01243 = rows01243.Population_en_2017;
    Pop_017_01243 = rows01243.Pop_017_ans_2017;
    Pop_mediane_vote_01243 = rows01243.Popu_possible_voté;
    nbr_inscrit_01243 = rows01243.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01243').textContent = name_01243;
    
    let com_01243 = document.getElementById("f-path-01285");
    let list_01243 = document.getElementById("list_01243");


    function togg01243() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01243-01').classList.remove('visible')
        document.querySelector('#polar-chart_01243-01').classList.remove('visible')
        document.querySelector('#polar-chart_01243-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01243').classList.remove('visible')
        document.querySelector('#f-path-01285').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01243
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01243
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01243
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01243
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01243
    }
    com_01243.onclick = togg01243;
    list_01243.onclick = togg01243;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01244 = data[243];
    
    /*Récupere les données que je veut de la Commune */
    name_01244 = rows01244.Libellé_géographique;
    Pop_01244 = rows01244.Population_en_2017;
    Pop_017_01244 = rows01244.Pop_017_ans_2017;
    Pop_mediane_vote_01244 = rows01244.Popu_possible_voté;
    nbr_inscrit_01244 = rows01244.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01244').textContent = name_01244;
    
    let com_01244 = document.getElementById("f-path-01286");
    let list_01244 = document.getElementById("list_01244");


    function togg01244() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01244-01').classList.remove('visible')
        document.querySelector('#polar-chart_01244-01').classList.remove('visible')
        document.querySelector('#polar-chart_01244-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01244').classList.remove('visible')
        document.querySelector('#f-path-01286').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01244
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01244
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01244
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01244
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01244
    }
    com_01244.onclick = togg01244;
    list_01244.onclick = togg01244;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01245 = data[244];
    
    /*Récupere les données que je veut de la Commune */
    name_01245 = rows01245.Libellé_géographique;
    Pop_01245 = rows01245.Population_en_2017;
    Pop_017_01245 = rows01245.Pop_017_ans_2017;
    Pop_mediane_vote_01245 = rows01245.Popu_possible_voté;
    nbr_inscrit_01245 = rows01245.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01245').textContent = name_01245;
    
    let com_01245 = document.getElementById("f-path-01288");
    let list_01245 = document.getElementById("list_01245");


    function togg01245() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01245-01').classList.remove('visible')
        document.querySelector('#polar-chart_01245-01').classList.remove('visible')
        document.querySelector('#polar-chart_01245-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01245').classList.remove('visible')
        document.querySelector('#f-path-01288').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01245
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01245
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01245
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01245
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01245
    }
    com_01245.onclick = togg01245;
    list_01245.onclick = togg01245;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01246 = data[245];
    
    /*Récupere les données que je veut de la Commune */
    name_01246 = rows01246.Libellé_géographique;
    Pop_01246 = rows01246.Population_en_2017;
    Pop_017_01246 = rows01246.Pop_017_ans_2017;
    Pop_mediane_vote_01246 = rows01246.Popu_possible_voté;
    nbr_inscrit_01246 = rows01246.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01246').textContent = name_01246;
    
    let com_01246 = document.getElementById("f-path-01289");
    let list_01246 = document.getElementById("list_01246");


    function togg01246() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01246-01').classList.remove('visible')
        document.querySelector('#polar-chart_01246-01').classList.remove('visible')
        document.querySelector('#polar-chart_01246-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01246').classList.remove('visible')
        document.querySelector('#f-path-01289').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01246
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01246
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01246
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01246
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01246
    }
    com_01246.onclick = togg01246;
    list_01246.onclick = togg01246;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01247 = data[246];
    
    /*Récupere les données que je veut de la Commune */
    name_01247 = rows01247.Libellé_géographique;
    Pop_01247 = rows01247.Population_en_2017;
    Pop_017_01247 = rows01247.Pop_017_ans_2017;
    Pop_mediane_vote_01247 = rows01247.Popu_possible_voté;
    nbr_inscrit_01247 = rows01247.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01247').textContent = name_01247;
    
    let com_01247 = document.getElementById("f-path-01290");
    let list_01247 = document.getElementById("list_01247");


    function togg01247() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01247-01').classList.remove('visible')
        document.querySelector('#polar-chart_01247-01').classList.remove('visible')
        document.querySelector('#polar-chart_01247-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01247').classList.remove('visible')
        document.querySelector('#f-path-01290').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01247
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01247
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01247
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01247
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01247
    }
    com_01247.onclick = togg01247;
    list_01247.onclick = togg01247;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01248 = data[247];
    
    /*Récupere les données que je veut de la Commune */
    name_01248 = rows01248.Libellé_géographique;
    Pop_01248 = rows01248.Population_en_2017;
    Pop_017_01248 = rows01248.Pop_017_ans_2017;
    Pop_mediane_vote_01248 = rows01248.Popu_possible_voté;
    nbr_inscrit_01248 = rows01248.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01248').textContent = name_01248;
    
    let com_01248 = document.getElementById("f-path-01291");
    let list_01248 = document.getElementById("list_01248");


    function togg01248() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01248-01').classList.remove('visible')
        document.querySelector('#polar-chart_01248-01').classList.remove('visible')
        document.querySelector('#polar-chart_01248-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01248').classList.remove('visible')
        document.querySelector('#f-path-01291').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01248
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01248
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01248
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01248
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01248
    }
    com_01248.onclick = togg01248;
    list_01248.onclick = togg01248;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01249 = data[248];
    
    /*Récupere les données que je veut de la Commune */
    name_01249 = rows01249.Libellé_géographique;
    Pop_01249 = rows01249.Population_en_2017;
    Pop_017_01249 = rows01249.Pop_017_ans_2017;
    Pop_mediane_vote_01249 = rows01249.Popu_possible_voté;
    nbr_inscrit_01249 = rows01249.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01249').textContent = name_01249;
    
    let com_01249 = document.getElementById("f-path-01293");
    let list_01249 = document.getElementById("list_01249");


    function togg01249() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01249-01').classList.remove('visible')
        document.querySelector('#polar-chart_01249-01').classList.remove('visible')
        document.querySelector('#polar-chart_01249-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01249').classList.remove('visible')
        document.querySelector('#f-path-01293').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01249
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01249
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01249
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01249
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01249
    }
    com_01249.onclick = togg01249;
    list_01249.onclick = togg01249;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01250 = data[249];
    
    /*Récupere les données que je veut de la Commune */
    name_01250 = rows01250.Libellé_géographique;
    Pop_01250 = rows01250.Population_en_2017;
    Pop_017_01250 = rows01250.Pop_017_ans_2017;
    Pop_mediane_vote_01250 = rows01250.Popu_possible_voté;
    nbr_inscrit_01250 = rows01250.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01250').textContent = name_01250;
    
    let com_01250 = document.getElementById("f-path-01294");
    let list_01250 = document.getElementById("list_01250");


    function togg01250() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01250-01').classList.remove('visible')
        document.querySelector('#polar-chart_01250-01').classList.remove('visible')
        document.querySelector('#polar-chart_01250-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01250').classList.remove('visible')
        document.querySelector('#f-path-01294').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01250
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01250
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01250
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01250
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01250
    }
    com_01250.onclick = togg01250;
    list_01250.onclick = togg01250;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01251 = data[250];
    
    /*Récupere les données que je veut de la Commune */
    name_01251 = rows01251.Libellé_géographique;
    Pop_01251 = rows01251.Population_en_2017;
    Pop_017_01251 = rows01251.Pop_017_ans_2017;
    Pop_mediane_vote_01251 = rows01251.Popu_possible_voté;
    nbr_inscrit_01251 = rows01251.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01251').textContent = name_01251;
    
    let com_01251 = document.getElementById("f-path-01296");
    let list_01251 = document.getElementById("list_01251");


    function togg01251() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01251-01').classList.remove('visible')
        document.querySelector('#polar-chart_01251-01').classList.remove('visible')
        document.querySelector('#polar-chart_01251-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01251').classList.remove('visible')
        document.querySelector('#f-path-01296').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01251
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01251
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01251
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01251
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01251
    }
    com_01251.onclick = togg01251;
    list_01251.onclick = togg01251;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01252 = data[251];
    
    /*Récupere les données que je veut de la Commune */
    name_01252 = rows01252.Libellé_géographique;
    Pop_01252 = rows01252.Population_en_2017;
    Pop_017_01252 = rows01252.Pop_017_ans_2017;
    Pop_mediane_vote_01252 = rows01252.Popu_possible_voté;
    nbr_inscrit_01252 = rows01252.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01252').textContent = name_01252;
    
    let com_01252 = document.getElementById("f-path-01297");
    let list_01252 = document.getElementById("list_01252");


    function togg01252() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01252-01').classList.remove('visible')
        document.querySelector('#polar-chart_01252-01').classList.remove('visible')
        document.querySelector('#polar-chart_01252-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01252').classList.remove('visible')
        document.querySelector('#f-path-01297').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01252
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01252
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01252
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01252
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01252
    }
    com_01252.onclick = togg01252;
    list_01252.onclick = togg01252;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01253 = data[252];
    
    /*Récupere les données que je veut de la Commune */
    name_01253 = rows01253.Libellé_géographique;
    Pop_01253 = rows01253.Population_en_2017;
    Pop_017_01253 = rows01253.Pop_017_ans_2017;
    Pop_mediane_vote_01253 = rows01253.Popu_possible_voté;
    nbr_inscrit_01253 = rows01253.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01253').textContent = name_01253;
    
    let com_01253 = document.getElementById("f-path-01298");
    let list_01253 = document.getElementById("list_01253");


    function togg01253() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01253-01').classList.remove('visible')
        document.querySelector('#polar-chart_01253-01').classList.remove('visible')
        document.querySelector('#polar-chart_01253-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01253').classList.remove('visible')
        document.querySelector('#f-path-01298').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01253
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01253
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01253
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01253
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01253
    }
    com_01253.onclick = togg01253;
    list_01253.onclick = togg01253;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01254 = data[253];
    
    /*Récupere les données que je veut de la Commune */
    name_01254 = rows01254.Libellé_géographique;
    Pop_01254 = rows01254.Population_en_2017;
    Pop_017_01254 = rows01254.Pop_017_ans_2017;
    Pop_mediane_vote_01254 = rows01254.Popu_possible_voté;
    nbr_inscrit_01254 = rows01254.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01254').textContent = name_01254;
    
    let com_01254 = document.getElementById("f-path-01299");
    let list_01254 = document.getElementById("list_01254");


    function togg01254() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01254-01').classList.remove('visible')
        document.querySelector('#polar-chart_01254-01').classList.remove('visible')
        document.querySelector('#polar-chart_01254-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01254').classList.remove('visible')
        document.querySelector('#f-path-01299').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01254
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01254
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01254
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01254
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01254
    }
    com_01254.onclick = togg01254;
    list_01254.onclick = togg01254;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01255 = data[254];
    
    /*Récupere les données que je veut de la Commune */
    name_01255 = rows01255.Libellé_géographique;
    Pop_01255 = rows01255.Population_en_2017;
    Pop_017_01255 = rows01255.Pop_017_ans_2017;
    Pop_mediane_vote_01255 = rows01255.Popu_possible_voté;
    nbr_inscrit_01255 = rows01255.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01255').textContent = name_01255;
    
    let com_01255 = document.getElementById("f-path-01301");
    let list_01255 = document.getElementById("list_01255");


    function togg01255() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01255-01').classList.remove('visible')
        document.querySelector('#polar-chart_01255-01').classList.remove('visible')
        document.querySelector('#polar-chart_01255-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01255').classList.remove('visible')
        document.querySelector('#f-path-01301').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01255
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01255
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01255
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01255
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01255
    }
    com_01255.onclick = togg01255;
    list_01255.onclick = togg01255;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01256 = data[255];
    
    /*Récupere les données que je veut de la Commune */
    name_01256 = rows01256.Libellé_géographique;
    Pop_01256 = rows01256.Population_en_2017;
    Pop_017_01256 = rows01256.Pop_017_ans_2017;
    Pop_mediane_vote_01256 = rows01256.Popu_possible_voté;
    nbr_inscrit_01256 = rows01256.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01256').textContent = name_01256;
    
    let com_01256 = document.getElementById("f-path-01302");
    let list_01256 = document.getElementById("list_01256");


    function togg01256() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01256-01').classList.remove('visible')
        document.querySelector('#polar-chart_01256-01').classList.remove('visible')
        document.querySelector('#polar-chart_01256-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01256').classList.remove('visible')
        document.querySelector('#f-path-01302').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01256
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01256
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01256
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01256
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01256
    }
    com_01256.onclick = togg01256;
    list_01256.onclick = togg01256;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01257 = data[256];
    
    /*Récupere les données que je veut de la Commune */
    name_01257 = rows01257.Libellé_géographique;
    Pop_01257 = rows01257.Population_en_2017;
    Pop_017_01257 = rows01257.Pop_017_ans_2017;
    Pop_mediane_vote_01257 = rows01257.Popu_possible_voté;
    nbr_inscrit_01257 = rows01257.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01257').textContent = name_01257;
    
    let com_01257 = document.getElementById("f-path-01303");
    let list_01257 = document.getElementById("list_01257");


    function togg01257() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01257-01').classList.remove('visible')
        document.querySelector('#polar-chart_01257-01').classList.remove('visible')
        document.querySelector('#polar-chart_01257-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01257').classList.remove('visible')
        document.querySelector('#f-path-01303').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01257
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01257
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01257
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01257
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01257
    }
    com_01257.onclick = togg01257;
    list_01257.onclick = togg01257;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01258 = data[257];
    
    /*Récupere les données que je veut de la Commune */
    name_01258 = rows01258.Libellé_géographique;
    Pop_01258 = rows01258.Population_en_2017;
    Pop_017_01258 = rows01258.Pop_017_ans_2017;
    Pop_mediane_vote_01258 = rows01258.Popu_possible_voté;
    nbr_inscrit_01258 = rows01258.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01258').textContent = name_01258;
    
    let com_01258 = document.getElementById("f-path-01304");
    let list_01258 = document.getElementById("list_01258");


    function togg01258() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01258-01').classList.remove('visible')
        document.querySelector('#polar-chart_01258-01').classList.remove('visible')
        document.querySelector('#polar-chart_01258-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01258').classList.remove('visible')
        document.querySelector('#f-path-01304').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01258
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01258
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01258
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01258
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01258
    }
    com_01258.onclick = togg01258;
    list_01258.onclick = togg01258;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01259 = data[258];
    
    /*Récupere les données que je veut de la Commune */
    name_01259 = rows01259.Libellé_géographique;
    Pop_01259 = rows01259.Population_en_2017;
    Pop_017_01259 = rows01259.Pop_017_ans_2017;
    Pop_mediane_vote_01259 = rows01259.Popu_possible_voté;
    nbr_inscrit_01259 = rows01259.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01259').textContent = name_01259;
    
    let com_01259 = document.getElementById("f-path-01305");
    let list_01259 = document.getElementById("list_01259");


    function togg01259() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01259-01').classList.remove('visible')
        document.querySelector('#polar-chart_01259-01').classList.remove('visible')
        document.querySelector('#polar-chart_01259-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01259').classList.remove('visible')
        document.querySelector('#f-path-01305').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01259
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01259
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01259
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01259
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01259
    }
    com_01259.onclick = togg01259;
    list_01259.onclick = togg01259;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01260 = data[259];
    
    /*Récupere les données que je veut de la Commune */
    name_01260 = rows01260.Libellé_géographique;
    Pop_01260 = rows01260.Population_en_2017;
    Pop_017_01260 = rows01260.Pop_017_ans_2017;
    Pop_mediane_vote_01260 = rows01260.Popu_possible_voté;
    nbr_inscrit_01260 = rows01260.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01260').textContent = name_01260;
    
    let com_01260 = document.getElementById("f-path-01306");
    let list_01260 = document.getElementById("list_01260");


    function togg01260() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01260-01').classList.remove('visible')
        document.querySelector('#polar-chart_01260-01').classList.remove('visible')
        document.querySelector('#polar-chart_01260-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01260').classList.remove('visible')
        document.querySelector('#f-path-01306').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01260
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01260
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01260
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01260
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01260
    }
    com_01260.onclick = togg01260;
    list_01260.onclick = togg01260;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01261 = data[260];
    
    /*Récupere les données que je veut de la Commune */
    name_01261 = rows01261.Libellé_géographique;
    Pop_01261 = rows01261.Population_en_2017;
    Pop_017_01261 = rows01261.Pop_017_ans_2017;
    Pop_mediane_vote_01261 = rows01261.Popu_possible_voté;
    nbr_inscrit_01261 = rows01261.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01261').textContent = name_01261;
    
    let com_01261 = document.getElementById("f-path-01307");
    let list_01261 = document.getElementById("list_01261");


    function togg01261() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01261-01').classList.remove('visible')
        document.querySelector('#polar-chart_01261-01').classList.remove('visible')
        document.querySelector('#polar-chart_01261-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01261').classList.remove('visible')
        document.querySelector('#f-path-01307').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01261
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01261
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01261
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01261
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01261
    }
    com_01261.onclick = togg01261;
    list_01261.onclick = togg01261;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01262 = data[261];
    
    /*Récupere les données que je veut de la Commune */
    name_01262 = rows01262.Libellé_géographique;
    Pop_01262 = rows01262.Population_en_2017;
    Pop_017_01262 = rows01262.Pop_017_ans_2017;
    Pop_mediane_vote_01262 = rows01262.Popu_possible_voté;
    nbr_inscrit_01262 = rows01262.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01262').textContent = name_01262;
    
    let com_01262 = document.getElementById("f-path-01308");
    let list_01262 = document.getElementById("list_01262");


    function togg01262() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01262-01').classList.remove('visible')
        document.querySelector('#polar-chart_01262-01').classList.remove('visible')
        document.querySelector('#polar-chart_01262-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01262').classList.remove('visible')
        document.querySelector('#f-path-01308').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01262
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01262
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01262
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01262
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01262
    }
    com_01262.onclick = togg01262;
    list_01262.onclick = togg01262;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01263 = data[262];
    
    /*Récupere les données que je veut de la Commune */
    name_01263 = rows01263.Libellé_géographique;
    Pop_01263 = rows01263.Population_en_2017;
    Pop_017_01263 = rows01263.Pop_017_ans_2017;
    Pop_mediane_vote_01263 = rows01263.Popu_possible_voté;
    nbr_inscrit_01263 = rows01263.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01263').textContent = name_01263;
    
    let com_01263 = document.getElementById("f-path-01309");
    let list_01263 = document.getElementById("list_01263");


    function togg01263() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01263-01').classList.remove('visible')
        document.querySelector('#polar-chart_01263-01').classList.remove('visible')
        document.querySelector('#polar-chart_01263-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01263').classList.remove('visible')
        document.querySelector('#f-path-01309').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01263
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01263
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01263
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01263
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01263
    }
    com_01263.onclick = togg01263;
    list_01263.onclick = togg01263;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01264 = data[263];
    
    /*Récupere les données que je veut de la Commune */
    name_01264 = rows01264.Libellé_géographique;
    Pop_01264 = rows01264.Population_en_2017;
    Pop_017_01264 = rows01264.Pop_017_ans_2017;
    Pop_mediane_vote_01264 = rows01264.Popu_possible_voté;
    nbr_inscrit_01264 = rows01264.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01264').textContent = name_01264;
    
    let com_01264 = document.getElementById("f-path-01310");
    let list_01264 = document.getElementById("list_01264");


    function togg01264() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01264-01').classList.remove('visible')
        document.querySelector('#polar-chart_01264-01').classList.remove('visible')
        document.querySelector('#polar-chart_01264-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01264').classList.remove('visible')
        document.querySelector('#f-path-01310').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01264
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01264
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01264
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01264
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01264
    }
    com_01264.onclick = togg01264;
    list_01264.onclick = togg01264;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01265 = data[264];
    
    /*Récupere les données que je veut de la Commune */
    name_01265 = rows01265.Libellé_géographique;
    Pop_01265 = rows01265.Population_en_2017;
    Pop_017_01265 = rows01265.Pop_017_ans_2017;
    Pop_mediane_vote_01265 = rows01265.Popu_possible_voté;
    nbr_inscrit_01265 = rows01265.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01265').textContent = name_01265;
    
    let com_01265 = document.getElementById("f-path-01311");
    let list_01265 = document.getElementById("list_01265");


    function togg01265() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01265-01').classList.remove('visible')
        document.querySelector('#polar-chart_01265-01').classList.remove('visible')
        document.querySelector('#polar-chart_01265-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01265').classList.remove('visible')
        document.querySelector('#f-path-01311').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01265
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01265
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01265
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01265
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01265
    }
    com_01265.onclick = togg01265;
    list_01265.onclick = togg01265;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01266 = data[265];
    
    /*Récupere les données que je veut de la Commune */
    name_01266 = rows01266.Libellé_géographique;
    Pop_01266 = rows01266.Population_en_2017;
    Pop_017_01266 = rows01266.Pop_017_ans_2017;
    Pop_mediane_vote_01266 = rows01266.Popu_possible_voté;
    nbr_inscrit_01266 = rows01266.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01266').textContent = name_01266;
    
    let com_01266 = document.getElementById("f-path-01313");
    let list_01266 = document.getElementById("list_01266");


    function togg01266() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01266-01').classList.remove('visible')
        document.querySelector('#polar-chart_01266-01').classList.remove('visible')
        document.querySelector('#polar-chart_01266-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01266').classList.remove('visible')
        document.querySelector('#f-path-01313').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01266
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01266
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01266
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01266
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01266
    }
    com_01266.onclick = togg01266;
    list_01266.onclick = togg01266;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01267 = data[266];
    
    /*Récupere les données que je veut de la Commune */
    name_01267 = rows01267.Libellé_géographique;
    Pop_01267 = rows01267.Population_en_2017;
    Pop_017_01267 = rows01267.Pop_017_ans_2017;
    Pop_mediane_vote_01267 = rows01267.Popu_possible_voté;
    nbr_inscrit_01267 = rows01267.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01267').textContent = name_01267;
    
    let com_01267 = document.getElementById("f-path-01314");
    let list_01267 = document.getElementById("list_01267");


    function togg01267() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01267-01').classList.remove('visible')
        document.querySelector('#polar-chart_01267-01').classList.remove('visible')
        document.querySelector('#polar-chart_01267-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01267').classList.remove('visible')
        document.querySelector('#f-path-01314').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01267
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01267
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01267
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01267
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01267
    }
    com_01267.onclick = togg01267;
    list_01267.onclick = togg01267;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01268 = data[267];
    
    /*Récupere les données que je veut de la Commune */
    name_01268 = rows01268.Libellé_géographique;
    Pop_01268 = rows01268.Population_en_2017;
    Pop_017_01268 = rows01268.Pop_017_ans_2017;
    Pop_mediane_vote_01268 = rows01268.Popu_possible_voté;
    nbr_inscrit_01268 = rows01268.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01268').textContent = name_01268;
    
    let com_01268 = document.getElementById("f-path-01317");
    let list_01268 = document.getElementById("list_01268");


    function togg01268() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01268-01').classList.remove('visible')
        document.querySelector('#polar-chart_01268-01').classList.remove('visible')
        document.querySelector('#polar-chart_01268-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01268').classList.remove('visible')
        document.querySelector('#f-path-01317').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01268
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01268
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01268
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01268
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01268
    }
    com_01268.onclick = togg01268;
    list_01268.onclick = togg01268;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01269 = data[268];
    
    /*Récupere les données que je veut de la Commune */
    name_01269 = rows01269.Libellé_géographique;
    Pop_01269 = rows01269.Population_en_2017;
    Pop_017_01269 = rows01269.Pop_017_ans_2017;
    Pop_mediane_vote_01269 = rows01269.Popu_possible_voté;
    nbr_inscrit_01269 = rows01269.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01269').textContent = name_01269;
    
    let com_01269 = document.getElementById("f-path-01318");
    let list_01269 = document.getElementById("list_01269");


    function togg01269() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01269-01').classList.remove('visible')
        document.querySelector('#polar-chart_01269-01').classList.remove('visible')
        document.querySelector('#polar-chart_01269-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01269').classList.remove('visible')
        document.querySelector('#f-path-01318').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01269
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01269
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01269
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01269
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01269
    }
    com_01269.onclick = togg01269;
    list_01269.onclick = togg01269;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01270 = data[269];
    
    /*Récupere les données que je veut de la Commune */
    name_01270 = rows01270.Libellé_géographique;
    Pop_01270 = rows01270.Population_en_2017;
    Pop_017_01270 = rows01270.Pop_017_ans_2017;
    Pop_mediane_vote_01270 = rows01270.Popu_possible_voté;
    nbr_inscrit_01270 = rows01270.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01270').textContent = name_01270;
    
    let com_01270 = document.getElementById("f-path-01319");
    let list_01270 = document.getElementById("list_01270");


    function togg01270() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01270-01').classList.remove('visible')
        document.querySelector('#polar-chart_01270-01').classList.remove('visible')
        document.querySelector('#polar-chart_01270-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01270').classList.remove('visible')
        document.querySelector('#f-path-01319').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01270
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01270
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01270
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01270
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01270
    }
    com_01270.onclick = togg01270;
    list_01270.onclick = togg01270;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01271 = data[270];
    
    /*Récupere les données que je veut de la Commune */
    name_01271 = rows01271.Libellé_géographique;
    Pop_01271 = rows01271.Population_en_2017;
    Pop_017_01271 = rows01271.Pop_017_ans_2017;
    Pop_mediane_vote_01271 = rows01271.Popu_possible_voté;
    nbr_inscrit_01271 = rows01271.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01271').textContent = name_01271;
    
    let com_01271 = document.getElementById("f-path-01320");
    let list_01271 = document.getElementById("list_01271");


    function togg01271() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01271-01').classList.remove('visible')
        document.querySelector('#polar-chart_01271-01').classList.remove('visible')
        document.querySelector('#polar-chart_01271-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01271').classList.remove('visible')
        document.querySelector('#f-path-01320').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01271
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01271
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01271
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01271
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01271
    }
    com_01271.onclick = togg01271;
    list_01271.onclick = togg01271;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01272 = data[271];
    
    /*Récupere les données que je veut de la Commune */
    name_01272 = rows01272.Libellé_géographique;
    Pop_01272 = rows01272.Population_en_2017;
    Pop_017_01272 = rows01272.Pop_017_ans_2017;
    Pop_mediane_vote_01272 = rows01272.Popu_possible_voté;
    nbr_inscrit_01272 = rows01272.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01272').textContent = name_01272;
    
    let com_01272 = document.getElementById("f-path-01321");
    let list_01272 = document.getElementById("list_01272");


    function togg01272() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01272-01').classList.remove('visible')
        document.querySelector('#polar-chart_01272-01').classList.remove('visible')
        document.querySelector('#polar-chart_01272-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01272').classList.remove('visible')
        document.querySelector('#f-path-01321').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01272
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01272
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01272
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01272
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01272
    }
    com_01272.onclick = togg01272;
    list_01272.onclick = togg01272;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01273 = data[272];
    
    /*Récupere les données que je veut de la Commune */
    name_01273 = rows01273.Libellé_géographique;
    Pop_01273 = rows01273.Population_en_2017;
    Pop_017_01273 = rows01273.Pop_017_ans_2017;
    Pop_mediane_vote_01273 = rows01273.Popu_possible_voté;
    nbr_inscrit_01273 = rows01273.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01273').textContent = name_01273;
    
    let com_01273 = document.getElementById("f-path-01322");
    let list_01273 = document.getElementById("list_01273");


    function togg01273() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01273-01').classList.remove('visible')
        document.querySelector('#polar-chart_01273-01').classList.remove('visible')
        document.querySelector('#polar-chart_01273-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01273').classList.remove('visible')
        document.querySelector('#f-path-01322').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01273
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01273
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01273
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01273
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01273
    }
    com_01273.onclick = togg01273;
    list_01273.onclick = togg01273;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01274 = data[273];
    
    /*Récupere les données que je veut de la Commune */
    name_01274 = rows01274.Libellé_géographique;
    Pop_01274 = rows01274.Population_en_2017;
    Pop_017_01274 = rows01274.Pop_017_ans_2017;
    Pop_mediane_vote_01274 = rows01274.Popu_possible_voté;
    nbr_inscrit_01274 = rows01274.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01274').textContent = name_01274;
    
    let com_01274 = document.getElementById("f-path-01323");
    let list_01274 = document.getElementById("list_01274");


    function togg01274() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01274-01').classList.remove('visible')
        document.querySelector('#polar-chart_01274-01').classList.remove('visible')
        document.querySelector('#polar-chart_01274-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01274').classList.remove('visible')
        document.querySelector('#f-path-01323').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01274
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01274
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01274
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01274
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01274
    }
    com_01274.onclick = togg01274;
    list_01274.onclick = togg01274;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01275 = data[274];
    
    /*Récupere les données que je veut de la Commune */
    name_01275 = rows01275.Libellé_géographique;
    Pop_01275 = rows01275.Population_en_2017;
    Pop_017_01275 = rows01275.Pop_017_ans_2017;
    Pop_mediane_vote_01275 = rows01275.Popu_possible_voté;
    nbr_inscrit_01275 = rows01275.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01275').textContent = name_01275;
    
    let com_01275 = document.getElementById("f-path-01325");
    let list_01275 = document.getElementById("list_01275");


    function togg01275() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01275-01').classList.remove('visible')
        document.querySelector('#polar-chart_01275-01').classList.remove('visible')
        document.querySelector('#polar-chart_01275-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01275').classList.remove('visible')
        document.querySelector('#f-path-01325').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01275
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01275
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01275
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01275
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01275
    }
    com_01275.onclick = togg01275;
    list_01275.onclick = togg01275;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01276 = data[275];
    
    /*Récupere les données que je veut de la Commune */
    name_01276 = rows01276.Libellé_géographique;
    Pop_01276 = rows01276.Population_en_2017;
    Pop_017_01276 = rows01276.Pop_017_ans_2017;
    Pop_mediane_vote_01276 = rows01276.Popu_possible_voté;
    nbr_inscrit_01276 = rows01276.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01276').textContent = name_01276;
    
    let com_01276 = document.getElementById("f-path-01328");
    let list_01276 = document.getElementById("list_01276");


    function togg01276() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01276-01').classList.remove('visible')
        document.querySelector('#polar-chart_01276-01').classList.remove('visible')
        document.querySelector('#polar-chart_01276-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01276').classList.remove('visible')
        document.querySelector('#f-path-01328').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01276
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01276
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01276
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01276
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01276
    }
    com_01276.onclick = togg01276;
    list_01276.onclick = togg01276;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01277 = data[276];
    
    /*Récupere les données que je veut de la Commune */
    name_01277 = rows01277.Libellé_géographique;
    Pop_01277 = rows01277.Population_en_2017;
    Pop_017_01277 = rows01277.Pop_017_ans_2017;
    Pop_mediane_vote_01277 = rows01277.Popu_possible_voté;
    nbr_inscrit_01277 = rows01277.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01277').textContent = name_01277;
    
    let com_01277 = document.getElementById("f-path-01329");
    let list_01277 = document.getElementById("list_01277");


    function togg01277() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01277-01').classList.remove('visible')
        document.querySelector('#polar-chart_01277-01').classList.remove('visible')
        document.querySelector('#polar-chart_01277-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01277').classList.remove('visible')
        document.querySelector('#f-path-01329').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01277
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01277
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01277
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01277
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01277
    }
    com_01277.onclick = togg01277;
    list_01277.onclick = togg01277;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01278 = data[277];
    
    /*Récupere les données que je veut de la Commune */
    name_01278 = rows01278.Libellé_géographique;
    Pop_01278 = rows01278.Population_en_2017;
    Pop_017_01278 = rows01278.Pop_017_ans_2017;
    Pop_mediane_vote_01278 = rows01278.Popu_possible_voté;
    nbr_inscrit_01278 = rows01278.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01278').textContent = name_01278;
    
    let com_01278 = document.getElementById("f-path-01330");
    let list_01278 = document.getElementById("list_01278");


    function togg01278() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01278-01').classList.remove('visible')
        document.querySelector('#polar-chart_01278-01').classList.remove('visible')
        document.querySelector('#polar-chart_01278-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01278').classList.remove('visible')
        document.querySelector('#f-path-01330').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01278
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01278
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01278
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01278
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01278
    }
    com_01278.onclick = togg01278;
    list_01278.onclick = togg01278;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01279 = data[278];
    
    /*Récupere les données que je veut de la Commune */
    name_01279 = rows01279.Libellé_géographique;
    Pop_01279 = rows01279.Population_en_2017;
    Pop_017_01279 = rows01279.Pop_017_ans_2017;
    Pop_mediane_vote_01279 = rows01279.Popu_possible_voté;
    nbr_inscrit_01279 = rows01279.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01279').textContent = name_01279;
    
    let com_01279 = document.getElementById("f-path-01331");
    let list_01279 = document.getElementById("list_01279");


    function togg01279() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01279-01').classList.remove('visible')
        document.querySelector('#polar-chart_01279-01').classList.remove('visible')
        document.querySelector('#polar-chart_01279-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01279').classList.remove('visible')
        document.querySelector('#f-path-01331').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01279
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01279
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01279
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01279
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01279
    }
    com_01279.onclick = togg01279;
    list_01279.onclick = togg01279;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01280 = data[279];
    
    /*Récupere les données que je veut de la Commune */
    name_01280 = rows01280.Libellé_géographique;
    Pop_01280 = rows01280.Population_en_2017;
    Pop_017_01280 = rows01280.Pop_017_ans_2017;
    Pop_mediane_vote_01280 = rows01280.Popu_possible_voté;
    nbr_inscrit_01280 = rows01280.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01280').textContent = name_01280;
    
    let com_01280 = document.getElementById("f-path-01332");
    let list_01280 = document.getElementById("list_01280");


    function togg01280() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01280-01').classList.remove('visible')
        document.querySelector('#polar-chart_01280-01').classList.remove('visible')
        document.querySelector('#polar-chart_01280-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01280').classList.remove('visible')
        document.querySelector('#f-path-01332').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01280
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01280
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01280
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01280
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01280
    }
    com_01280.onclick = togg01280;
    list_01280.onclick = togg01280;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01281 = data[280];
    
    /*Récupere les données que je veut de la Commune */
    name_01281 = rows01281.Libellé_géographique;
    Pop_01281 = rows01281.Population_en_2017;
    Pop_017_01281 = rows01281.Pop_017_ans_2017;
    Pop_mediane_vote_01281 = rows01281.Popu_possible_voté;
    nbr_inscrit_01281 = rows01281.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01281').textContent = name_01281;
    
    let com_01281 = document.getElementById("f-path-01333");
    let list_01281 = document.getElementById("list_01281");


    function togg01281() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01281-01').classList.remove('visible')
        document.querySelector('#polar-chart_01281-01').classList.remove('visible')
        document.querySelector('#polar-chart_01281-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01281').classList.remove('visible')
        document.querySelector('#f-path-01333').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01281
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01281
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01281
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01281
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01281
    }
    com_01281.onclick = togg01281;
    list_01281.onclick = togg01281;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01282 = data[281];
    
    /*Récupere les données que je veut de la Commune */
    name_01282 = rows01282.Libellé_géographique;
    Pop_01282 = rows01282.Population_en_2017;
    Pop_017_01282 = rows01282.Pop_017_ans_2017;
    Pop_mediane_vote_01282 = rows01282.Popu_possible_voté;
    nbr_inscrit_01282 = rows01282.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01282').textContent = name_01282;
    
    let com_01282 = document.getElementById("f-path-01334");
    let list_01282 = document.getElementById("list_01282");


    function togg01282() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01282-01').classList.remove('visible')
        document.querySelector('#polar-chart_01282-01').classList.remove('visible')
        document.querySelector('#polar-chart_01282-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01282').classList.remove('visible')
        document.querySelector('#f-path-01334').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01282
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01282
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01282
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01282
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01282
    }
    com_01282.onclick = togg01282;
    list_01282.onclick = togg01282;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01283 = data[282];
    
    /*Récupere les données que je veut de la Commune */
    name_01283 = rows01283.Libellé_géographique;
    Pop_01283 = rows01283.Population_en_2017;
    Pop_017_01283 = rows01283.Pop_017_ans_2017;
    Pop_mediane_vote_01283 = rows01283.Popu_possible_voté;
    nbr_inscrit_01283 = rows01283.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01283').textContent = name_01283;
    
    let com_01283 = document.getElementById("f-path-01335");
    let list_01283 = document.getElementById("list_01283");


    function togg01283() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01283-01').classList.remove('visible')
        document.querySelector('#polar-chart_01283-01').classList.remove('visible')
        document.querySelector('#polar-chart_01283-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01283').classList.remove('visible')
        document.querySelector('#f-path-01335').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01283
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01283
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01283
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01283
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01283
    }
    com_01283.onclick = togg01283;
    list_01283.onclick = togg01283;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01284 = data[283];
    
    /*Récupere les données que je veut de la Commune */
    name_01284 = rows01284.Libellé_géographique;
    Pop_01284 = rows01284.Population_en_2017;
    Pop_017_01284 = rows01284.Pop_017_ans_2017;
    Pop_mediane_vote_01284 = rows01284.Popu_possible_voté;
    nbr_inscrit_01284 = rows01284.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01284').textContent = name_01284;
    
    let com_01284 = document.getElementById("f-path-01336");
    let list_01284 = document.getElementById("list_01284");


    function togg01284() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01284-01').classList.remove('visible')
        document.querySelector('#polar-chart_01284-01').classList.remove('visible')
        document.querySelector('#polar-chart_01284-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01284').classList.remove('visible')
        document.querySelector('#f-path-01336').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01284
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01284
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01284
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01284
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01284
    }
    com_01284.onclick = togg01284;
    list_01284.onclick = togg01284;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01285 = data[284];
    
    /*Récupere les données que je veut de la Commune */
    name_01285 = rows01285.Libellé_géographique;
    Pop_01285 = rows01285.Population_en_2017;
    Pop_017_01285 = rows01285.Pop_017_ans_2017;
    Pop_mediane_vote_01285 = rows01285.Popu_possible_voté;
    nbr_inscrit_01285 = rows01285.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01285').textContent = name_01285;
    
    let com_01285 = document.getElementById("f-path-01337");
    let list_01285 = document.getElementById("list_01285");


    function togg01285() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01285-01').classList.remove('visible')
        document.querySelector('#polar-chart_01285-01').classList.remove('visible')
        document.querySelector('#polar-chart_01285-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01285').classList.remove('visible')
        document.querySelector('#f-path-01337').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01285
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01285
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01285
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01285
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01285
    }
    com_01285.onclick = togg01285;
    list_01285.onclick = togg01285;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01286 = data[285];
    
    /*Récupere les données que je veut de la Commune */
    name_01286 = rows01286.Libellé_géographique;
    Pop_01286 = rows01286.Population_en_2017;
    Pop_017_01286 = rows01286.Pop_017_ans_2017;
    Pop_mediane_vote_01286 = rows01286.Popu_possible_voté;
    nbr_inscrit_01286 = rows01286.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01286').textContent = name_01286;
    
    let com_01286 = document.getElementById("f-path-01338");
    let list_01286 = document.getElementById("list_01286");


    function togg01286() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01286-01').classList.remove('visible')
        document.querySelector('#polar-chart_01286-01').classList.remove('visible')
        document.querySelector('#polar-chart_01286-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01286').classList.remove('visible')
        document.querySelector('#f-path-01338').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01286
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01286
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01286
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01286
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01286
    }
    com_01286.onclick = togg01286;
    list_01286.onclick = togg01286;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01287 = data[286];
    
    /*Récupere les données que je veut de la Commune */
    name_01287 = rows01287.Libellé_géographique;
    Pop_01287 = rows01287.Population_en_2017;
    Pop_017_01287 = rows01287.Pop_017_ans_2017;
    Pop_mediane_vote_01287 = rows01287.Popu_possible_voté;
    nbr_inscrit_01287 = rows01287.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01287').textContent = name_01287;
    
    let com_01287 = document.getElementById("f-path-01339");
    let list_01287 = document.getElementById("list_01287");


    function togg01287() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01287-01').classList.remove('visible')
        document.querySelector('#polar-chart_01287-01').classList.remove('visible')
        document.querySelector('#polar-chart_01287-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01287').classList.remove('visible')
        document.querySelector('#f-path-01339').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01287
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01287
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01287
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01287
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01287
    }
    com_01287.onclick = togg01287;
    list_01287.onclick = togg01287;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01288 = data[287];
    
    /*Récupere les données que je veut de la Commune */
    name_01288 = rows01288.Libellé_géographique;
    Pop_01288 = rows01288.Population_en_2017;
    Pop_017_01288 = rows01288.Pop_017_ans_2017;
    Pop_mediane_vote_01288 = rows01288.Popu_possible_voté;
    nbr_inscrit_01288 = rows01288.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01288').textContent = name_01288;
    
    let com_01288 = document.getElementById("f-path-01342");
    let list_01288 = document.getElementById("list_01288");


    function togg01288() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01288-01').classList.remove('visible')
        document.querySelector('#polar-chart_01288-01').classList.remove('visible')
        document.querySelector('#polar-chart_01288-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01288').classList.remove('visible')
        document.querySelector('#f-path-01342').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01288
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01288
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01288
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01288
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01288
    }
    com_01288.onclick = togg01288;
    list_01288.onclick = togg01288;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01289 = data[288];
    
    /*Récupere les données que je veut de la Commune */
    name_01289 = rows01289.Libellé_géographique;
    Pop_01289 = rows01289.Population_en_2017;
    Pop_017_01289 = rows01289.Pop_017_ans_2017;
    Pop_mediane_vote_01289 = rows01289.Popu_possible_voté;
    nbr_inscrit_01289 = rows01289.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01289').textContent = name_01289;
    
    let com_01289 = document.getElementById("f-path-01343");
    let list_01289 = document.getElementById("list_01289");


    function togg01289() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01289-01').classList.remove('visible')
        document.querySelector('#polar-chart_01289-01').classList.remove('visible')
        document.querySelector('#polar-chart_01289-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01289').classList.remove('visible')
        document.querySelector('#f-path-01343').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01289
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01289
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01289
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01289
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01289
    }
    com_01289.onclick = togg01289;
    list_01289.onclick = togg01289;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01290 = data[289];
    
    /*Récupere les données que je veut de la Commune */
    name_01290 = rows01290.Libellé_géographique;
    Pop_01290 = rows01290.Population_en_2017;
    Pop_017_01290 = rows01290.Pop_017_ans_2017;
    Pop_mediane_vote_01290 = rows01290.Popu_possible_voté;
    nbr_inscrit_01290 = rows01290.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01290').textContent = name_01290;
    
    let com_01290 = document.getElementById("f-path-01344");
    let list_01290 = document.getElementById("list_01290");


    function togg01290() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01290-01').classList.remove('visible')
        document.querySelector('#polar-chart_01290-01').classList.remove('visible')
        document.querySelector('#polar-chart_01290-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01290').classList.remove('visible')
        document.querySelector('#f-path-01344').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01290
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01290
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01290
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01290
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01290
    }
    com_01290.onclick = togg01290;
    list_01290.onclick = togg01290;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01291 = data[290];
    
    /*Récupere les données que je veut de la Commune */
    name_01291 = rows01291.Libellé_géographique;
    Pop_01291 = rows01291.Population_en_2017;
    Pop_017_01291 = rows01291.Pop_017_ans_2017;
    Pop_mediane_vote_01291 = rows01291.Popu_possible_voté;
    nbr_inscrit_01291 = rows01291.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01291').textContent = name_01291;
    
    let com_01291 = document.getElementById("f-path-01345");
    let list_01291 = document.getElementById("list_01291");


    function togg01291() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01291-01').classList.remove('visible')
        document.querySelector('#polar-chart_01291-01').classList.remove('visible')
        document.querySelector('#polar-chart_01291-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01291').classList.remove('visible')
        document.querySelector('#f-path-01345').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01291
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01291
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01291
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01291
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01291
    }
    com_01291.onclick = togg01291;
    list_01291.onclick = togg01291;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01292 = data[291];
    
    /*Récupere les données que je veut de la Commune */
    name_01292 = rows01292.Libellé_géographique;
    Pop_01292 = rows01292.Population_en_2017;
    Pop_017_01292 = rows01292.Pop_017_ans_2017;
    Pop_mediane_vote_01292 = rows01292.Popu_possible_voté;
    nbr_inscrit_01292 = rows01292.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01292').textContent = name_01292;
    
    let com_01292 = document.getElementById("f-path-01346");
    let list_01292 = document.getElementById("list_01292");


    function togg01292() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01292-01').classList.remove('visible')
        document.querySelector('#polar-chart_01292-01').classList.remove('visible')
        document.querySelector('#polar-chart_01292-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01292').classList.remove('visible')
        document.querySelector('#f-path-01346').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01292
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01292
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01292
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01292
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01292
    }
    com_01292.onclick = togg01292;
    list_01292.onclick = togg01292;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01293 = data[292];
    
    /*Récupere les données que je veut de la Commune */
    name_01293 = rows01293.Libellé_géographique;
    Pop_01293 = rows01293.Population_en_2017;
    Pop_017_01293 = rows01293.Pop_017_ans_2017;
    Pop_mediane_vote_01293 = rows01293.Popu_possible_voté;
    nbr_inscrit_01293 = rows01293.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01293').textContent = name_01293;
    
    let com_01293 = document.getElementById("f-path-01347");
    let list_01293 = document.getElementById("list_01293");


    function togg01293() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01293-01').classList.remove('visible')
        document.querySelector('#polar-chart_01293-01').classList.remove('visible')
        document.querySelector('#polar-chart_01293-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01293').classList.remove('visible')
        document.querySelector('#f-path-01347').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01293
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01293
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01293
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01293
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01293
    }
    com_01293.onclick = togg01293;
    list_01293.onclick = togg01293;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01294 = data[293];
    
    /*Récupere les données que je veut de la Commune */
    name_01294 = rows01294.Libellé_géographique;
    Pop_01294 = rows01294.Population_en_2017;
    Pop_017_01294 = rows01294.Pop_017_ans_2017;
    Pop_mediane_vote_01294 = rows01294.Popu_possible_voté;
    nbr_inscrit_01294 = rows01294.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01294').textContent = name_01294;
    
    let com_01294 = document.getElementById("f-path-01348");
    let list_01294 = document.getElementById("list_01294");


    function togg01294() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01294-01').classList.remove('visible')
        document.querySelector('#polar-chart_01294-01').classList.remove('visible')
        document.querySelector('#polar-chart_01294-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01294').classList.remove('visible')
        document.querySelector('#f-path-01348').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01294
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01294
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01294
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01294
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01294
    }
    com_01294.onclick = togg01294;
    list_01294.onclick = togg01294;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01295 = data[294];
    
    /*Récupere les données que je veut de la Commune */
    name_01295 = rows01295.Libellé_géographique;
    Pop_01295 = rows01295.Population_en_2017;
    Pop_017_01295 = rows01295.Pop_017_ans_2017;
    Pop_mediane_vote_01295 = rows01295.Popu_possible_voté;
    nbr_inscrit_01295 = rows01295.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01295').textContent = name_01295;
    
    let com_01295 = document.getElementById("f-path-01349");
    let list_01295 = document.getElementById("list_01295");


    function togg01295() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01295-01').classList.remove('visible')
        document.querySelector('#polar-chart_01295-01').classList.remove('visible')
        document.querySelector('#polar-chart_01295-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01295').classList.remove('visible')
        document.querySelector('#f-path-01349').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01295
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01295
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01295
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01295
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01295
    }
    com_01295.onclick = togg01295;
    list_01295.onclick = togg01295;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01296 = data[295];
    
    /*Récupere les données que je veut de la Commune */
    name_01296 = rows01296.Libellé_géographique;
    Pop_01296 = rows01296.Population_en_2017;
    Pop_017_01296 = rows01296.Pop_017_ans_2017;
    Pop_mediane_vote_01296 = rows01296.Popu_possible_voté;
    nbr_inscrit_01296 = rows01296.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01296').textContent = name_01296;
    
    let com_01296 = document.getElementById("f-path-01350");
    let list_01296 = document.getElementById("list_01296");


    function togg01296() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01296-01').classList.remove('visible')
        document.querySelector('#polar-chart_01296-01').classList.remove('visible')
        document.querySelector('#polar-chart_01296-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01296').classList.remove('visible')
        document.querySelector('#f-path-01350').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01296
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01296
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01296
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01296
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01296
    }
    com_01296.onclick = togg01296;
    list_01296.onclick = togg01296;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01297 = data[296];
    
    /*Récupere les données que je veut de la Commune */
    name_01297 = rows01297.Libellé_géographique;
    Pop_01297 = rows01297.Population_en_2017;
    Pop_017_01297 = rows01297.Pop_017_ans_2017;
    Pop_mediane_vote_01297 = rows01297.Popu_possible_voté;
    nbr_inscrit_01297 = rows01297.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01297').textContent = name_01297;
    
    let com_01297 = document.getElementById("f-path-01351");
    let list_01297 = document.getElementById("list_01297");


    function togg01297() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01297-01').classList.remove('visible')
        document.querySelector('#polar-chart_01297-01').classList.remove('visible')
        document.querySelector('#polar-chart_01297-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01297').classList.remove('visible')
        document.querySelector('#f-path-01351').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01297
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01297
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01297
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01297
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01297
    }
    com_01297.onclick = togg01297;
    list_01297.onclick = togg01297;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01298 = data[297];
    
    /*Récupere les données que je veut de la Commune */
    name_01298 = rows01298.Libellé_géographique;
    Pop_01298 = rows01298.Population_en_2017;
    Pop_017_01298 = rows01298.Pop_017_ans_2017;
    Pop_mediane_vote_01298 = rows01298.Popu_possible_voté;
    nbr_inscrit_01298 = rows01298.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01298').textContent = name_01298;
    
    let com_01298 = document.getElementById("f-path-01352");
    let list_01298 = document.getElementById("list_01298");


    function togg01298() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01298-01').classList.remove('visible')
        document.querySelector('#polar-chart_01298-01').classList.remove('visible')
        document.querySelector('#polar-chart_01298-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01298').classList.remove('visible')
        document.querySelector('#f-path-01352').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01298
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01298
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01298
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01298
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01298
    }
    com_01298.onclick = togg01298;
    list_01298.onclick = togg01298;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01299 = data[298];
    
    /*Récupere les données que je veut de la Commune */
    name_01299 = rows01299.Libellé_géographique;
    Pop_01299 = rows01299.Population_en_2017;
    Pop_017_01299 = rows01299.Pop_017_ans_2017;
    Pop_mediane_vote_01299 = rows01299.Popu_possible_voté;
    nbr_inscrit_01299 = rows01299.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01299').textContent = name_01299;
    
    let com_01299 = document.getElementById("f-path-01353");
    let list_01299 = document.getElementById("list_01299");


    function togg01299() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01299-01').classList.remove('visible')
        document.querySelector('#polar-chart_01299-01').classList.remove('visible')
        document.querySelector('#polar-chart_01299-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01299').classList.remove('visible')
        document.querySelector('#f-path-01353').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01299
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01299
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01299
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01299
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01299
    }
    com_01299.onclick = togg01299;
    list_01299.onclick = togg01299;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01300 = data[299];

    /*Récupere les données que je veut de la Commune */
    name_01300 = rows01300.Libellé_géographique;
    Pop_01300 = rows01300.Population_en_2017;
    Pop_017_01300 = rows01300.Pop_017_ans_2017;
    Pop_mediane_vote_01300 = rows01300.Popu_possible_voté;
    nbr_inscrit_01300 = rows01300.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01300').textContent = name_01300;
   
    let com_01300 = document.getElementById("f-path-01354");
    let list_01300 = document.getElementById("list_01300");


    function togg01300() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01300-01').classList.remove('visible')
        document.querySelector('#polar-chart_01300-01').classList.remove('visible')
        document.querySelector('#polar-chart_01300-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01300').classList.remove('visible')
        document.querySelector('#f-path-01354').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01300
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01300
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01300
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01300
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01300
    }
    com_01300.onclick = togg01300;
    list_01300.onclick = togg01300;  
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01301 = data[300];

    /*Récupere les données que je veut de la Commune */
    name_01301 = rows01301.Libellé_géographique;
    Pop_01301 = rows01301.Population_en_2017;
    Pop_017_01301 = rows01301.Pop_017_ans_2017;
    Pop_mediane_vote_01301 = rows01301.Popu_possible_voté;
    nbr_inscrit_01301 = rows01301.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01301').textContent = name_01301;
   
    let com_01301 = document.getElementById("f-path-01355");
    let list_01301 = document.getElementById("list_01301");


    function togg01301() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01301-01').classList.remove('visible')
        document.querySelector('#polar-chart_01301-01').classList.remove('visible')
        document.querySelector('#polar-chart_01301-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01301').classList.remove('visible')
        document.querySelector('#f-path-01355').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01301
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01301
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01301
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01301
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01301
    }
    com_01301.onclick = togg01301;
    list_01301.onclick = togg01301;  
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01302 = data[301];

    /*Récupere les données que je veut de la Commune */
    name_01302 = rows01302.Libellé_géographique;
    Pop_01302 = rows01302.Population_en_2017;
    Pop_017_01302 = rows01302.Pop_017_ans_2017;
    Pop_mediane_vote_01302 = rows01302.Popu_possible_voté;
    nbr_inscrit_01302 = rows01302.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01302').textContent = name_01302;
/*--------------------------------------------------------------------------*/
    let com_01302 = document.getElementById("f-path-01356");
    let list_01302 = document.getElementById("list_01302");
    /******************************************************************** */

    function togg01302() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01302-01').classList.remove('visible')
        document.querySelector('#polar-chart_01302-01').classList.remove('visible')
        document.querySelector('#polar-chart_01302-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01302').classList.remove('visible')
        document.querySelector('#f-path-01356').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01302;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01302
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01302
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01302
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01302
    }
    com_01302.onclick = togg01302;
    list_01302.onclick = togg01302;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01303 = data[302];
    
    /*Récupere les données que je veut de la Commune */
    name_01303 = rows01303.Libellé_géographique;
    Pop_01303 = rows01303.Population_en_2017;
    Pop_017_01303 = rows01303.Pop_017_ans_2017;
    Pop_mediane_vote_01303 = rows01303.Popu_possible_voté;
    nbr_inscrit_01303 = rows01303.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01303').textContent = name_01303;

    let com_01303 = document.getElementById("f-path-01357");
    let list_01303 = document.getElementById("list_01303");


    function togg01303() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01303-01').classList.remove('visible')
        document.querySelector('#polar-chart_01303-01').classList.remove('visible')
        document.querySelector('#polar-chart_01303-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01303').classList.remove('visible')
        document.querySelector('#f-path-01357').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01303;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01303
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01303
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01303
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01303
    }
    com_01303.onclick = togg01303;
    list_01303.onclick = togg01303;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01304 = data[303];
    
    /*Récupere les données que je veut de la Commune */
    name_01304 = rows01304.Libellé_géographique;
    Pop_01304 = rows01304.Population_en_2017;
    Pop_017_01304 = rows01304.Pop_017_ans_2017;
    Pop_mediane_vote_01304 = rows01304.Popu_possible_voté;
    nbr_inscrit_01304 = rows01304.Inscrits;

    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01304').textContent = name_01304;
    
    let com_01304 = document.getElementById("f-path-01358");
    let list_01304 = document.getElementById("list_01304");


    function togg01304() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01304-01').classList.remove('visible')
        document.querySelector('#polar-chart_01304-01').classList.remove('visible')
        document.querySelector('#polar-chart_01304-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01304').classList.remove('visible')
        document.querySelector('#f-path-01358').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01304;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01304
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01304
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01304
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01304
    }
    com_01304.onclick = togg01304;
    list_01304.onclick = togg01304;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01305 = data[304];
    
    /*Récupere les données que je veut de la Commune */
    name_01305 = rows01305.Libellé_géographique;
    Pop_01305 = rows01305.Population_en_2017;
    Pop_017_01305 = rows01305.Pop_017_ans_2017;
    Pop_mediane_vote_01305 = rows01305.Popu_possible_voté;
    nbr_inscrit_01305 = rows01305.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01305').textContent = name_01305;

    let com_01305 = document.getElementById("f-path-01359");
    let list_01305 = document.getElementById("list_01305");


    function togg01305() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01305-01').classList.remove('visible')
        document.querySelector('#polar-chart_01305-01').classList.remove('visible')
        document.querySelector('#polar-chart_01305-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01305').classList.remove('visible')
        document.querySelector('#f-path-01359').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01305
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01305
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01305
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01305
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01305
    }
    com_01305.onclick = togg01305;
    list_01305.onclick = togg01305;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01306 = data[305];
    
    /*Récupere les données que je veut de la Commune */
    name_01306 = rows01306.Libellé_géographique;
    Pop_01306 = rows01306.Population_en_2017;
    Pop_017_01306 = rows01306.Pop_017_ans_2017;
    Pop_mediane_vote_01306 = rows01306.Popu_possible_voté;
    nbr_inscrit_01306 = rows01306.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01306').textContent = name_01306;
    
    let com_01306 = document.getElementById("f-path-01360");
    let list_01306 = document.getElementById("list_01306");


    function togg01306() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01306-01').classList.remove('visible')
        document.querySelector('#polar-chart_01306-01').classList.remove('visible')
        document.querySelector('#polar-chart_01306-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01306').classList.remove('visible')
        document.querySelector('#f-path-01360').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01306
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01306
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01306
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01306
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01306
    }
    com_01306.onclick = togg01306;
    list_01306.onclick = togg01306;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01307 = data[306];
    
    /*Récupere les données que je veut de la Commune */
    name_01307 = rows01307.Libellé_géographique;
    Pop_01307 = rows01307.Population_en_2017;
    Pop_017_01307 = rows01307.Pop_017_ans_2017;
    Pop_mediane_vote_01307 = rows01307.Popu_possible_voté;
    nbr_inscrit_01307 = rows01307.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01307').textContent = name_01307;
    
    let com_01307 = document.getElementById("f-path-01361");
    let list_01307 = document.getElementById("list_01307");


    function togg01307() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01307-01').classList.remove('visible')
        document.querySelector('#polar-chart_01307-01').classList.remove('visible')
        document.querySelector('#polar-chart_01307-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01307').classList.remove('visible')
        document.querySelector('#f-path-01361').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01307
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01307
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01307
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01307
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01307
    }
    com_01307.onclick = togg01307;
    list_01307.onclick = togg01307;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01308 = data[307];
    
    /*Récupere les données que je veut de la Commune */
    name_01308 = rows01308.Libellé_géographique;
    Pop_01308 = rows01308.Population_en_2017;
    Pop_017_01308 = rows01308.Pop_017_ans_2017;
    Pop_mediane_vote_01308 = rows01308.Popu_possible_voté;
    nbr_inscrit_01308 = rows01308.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01308').textContent = name_01308;
    
    let com_01308 = document.getElementById("f-path-01362");
    let list_01308 = document.getElementById("list_01308");


    function togg01308() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01308-01').classList.remove('visible')
        document.querySelector('#polar-chart_01308-01').classList.remove('visible')
        document.querySelector('#polar-chart_01308-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01308').classList.remove('visible')
        document.querySelector('#f-path-01362').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01308
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01308
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01308
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01308
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01308
    }
    com_01308.onclick = togg01308;
    list_01308.onclick = togg01308;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01309 = data[308];
    
    /*Récupere les données que je veut de la Commune */
    name_01309 = rows01309.Libellé_géographique;
    Pop_01309 = rows01309.Population_en_2017;
    Pop_017_01309 = rows01309.Pop_017_ans_2017;
    Pop_mediane_vote_01309 = rows01309.Popu_possible_voté;
    nbr_inscrit_01309 = rows01309.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01309').textContent = name_01309;
    
    let com_01309 = document.getElementById("f-path-01363");
    let list_01309 = document.getElementById("list_01309");


    function togg01309() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01309-01').classList.remove('visible')
        document.querySelector('#polar-chart_01309-01').classList.remove('visible')
        document.querySelector('#polar-chart_01309-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01309').classList.remove('visible')
        document.querySelector('#f-path-01363').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01309
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01309
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01309
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01309
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01309
    }
    com_01309.onclick = togg01309;
    list_01309.onclick = togg01309;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01310 = data[309];
    
    /*Récupere les données que je veut de la Commune */
    name_01310 = rows01310.Libellé_géographique;
    Pop_01310 = rows01310.Population_en_2017;
    Pop_017_01310 = rows01310.Pop_017_ans_2017;
    Pop_mediane_vote_01310 = rows01310.Popu_possible_voté;
    nbr_inscrit_01310 = rows01310.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01310').textContent = name_01310;
    
    let com_01310 = document.getElementById("f-path-01364");
    let list_01310 = document.getElementById("list_01310");


    function togg01310() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01310-01').classList.remove('visible')
        document.querySelector('#polar-chart_01310-01').classList.remove('visible')
        document.querySelector('#polar-chart_01310-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01310').classList.remove('visible')
        document.querySelector('#f-path-01364').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01310
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01310
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01310
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01310
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01310
    }
    com_01310.onclick = togg01310;
    list_01310.onclick = togg01310;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01311 = data[310];
    
    /*Récupere les données que je veut de la Commune */
    name_01311 = rows01311.Libellé_géographique;
    Pop_01311 = rows01311.Population_en_2017;
    Pop_017_01311 = rows01311.Pop_017_ans_2017;
    Pop_mediane_vote_01311 = rows01311.Popu_possible_voté;
    nbr_inscrit_01311 = rows01311.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01311').textContent = name_01311;
    
    let com_01311 = document.getElementById("f-path-01365");
    let list_01311 = document.getElementById("list_01311");


    function togg01311() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01311-01').classList.remove('visible')
        document.querySelector('#polar-chart_01311-01').classList.remove('visible')
        document.querySelector('#polar-chart_01311-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01311').classList.remove('visible')
        document.querySelector('#f-path-01365').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01311
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01311
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01311
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01311
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01311
    }
    com_01311.onclick = togg01311;
    list_01311.onclick = togg01311;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01312 = data[311];
    
    /*Récupere les données que je veut de la Commune */
    name_01312 = rows01312.Libellé_géographique;
    Pop_01312 = rows01312.Population_en_2017;
    Pop_017_01312 = rows01312.Pop_017_ans_2017;
    Pop_mediane_vote_01312 = rows01312.Popu_possible_voté;
    nbr_inscrit_01312 = rows01312.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01312').textContent = name_01312;
    
    let com_01312 = document.getElementById("f-path-01366");
    let list_01312 = document.getElementById("list_01312");


    function togg01312() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01312-01').classList.remove('visible')
        document.querySelector('#polar-chart_01312-01').classList.remove('visible')
        document.querySelector('#polar-chart_01312-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01312').classList.remove('visible')
        document.querySelector('#f-path-01366').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01312
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01312
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01312
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01312
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01312
    }
    com_01312.onclick = togg01312;
    list_01312.onclick = togg01312;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01313 = data[312];
    
    /*Récupere les données que je veut de la Commune */
    name_01313 = rows01313.Libellé_géographique;
    Pop_01313 = rows01313.Population_en_2017;
    Pop_017_01313 = rows01313.Pop_017_ans_2017;
    Pop_mediane_vote_01313 = rows01313.Popu_possible_voté;
    nbr_inscrit_01313 = rows01313.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01313').textContent = name_01313;
    
    let com_01313 = document.getElementById("f-path-01367");
    let list_01313 = document.getElementById("list_01313");


    function togg01313() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01313-01').classList.remove('visible')
        document.querySelector('#polar-chart_01313-01').classList.remove('visible')
        document.querySelector('#polar-chart_01313-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01313').classList.remove('visible')
        document.querySelector('#f-path-01367').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01313
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01313
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01313
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01313
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01313
    }
    com_01313.onclick = togg01313;
    list_01313.onclick = togg01313;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01314 = data[313];
    
    /*Récupere les données que je veut de la Commune */
    name_01314 = rows01314.Libellé_géographique;
    Pop_01314 = rows01314.Population_en_2017;
    Pop_017_01314 = rows01314.Pop_017_ans_2017;
    Pop_mediane_vote_01314 = rows01314.Popu_possible_voté;
    nbr_inscrit_01314 = rows01314.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01314').textContent = name_01314;
    
    let com_01314 = document.getElementById("f-path-01368");
    let list_01314 = document.getElementById("list_01314");


    function togg01314() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01314-01').classList.remove('visible')
        document.querySelector('#polar-chart_01314-01').classList.remove('visible')
        document.querySelector('#polar-chart_01314-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01314').classList.remove('visible')
        document.querySelector('#f-path-01368').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01314
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01314
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01314
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01314
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01314
    }
    com_01314.onclick = togg01314;
    list_01314.onclick = togg01314;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01315 = data[314];
    
    /*Récupere les données que je veut de la Commune */
    name_01315 = rows01315.Libellé_géographique;
    Pop_01315 = rows01315.Population_en_2017;
    Pop_017_01315 = rows01315.Pop_017_ans_2017;
    Pop_mediane_vote_01315 = rows01315.Popu_possible_voté;
    nbr_inscrit_01315 = rows01315.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01315').textContent = name_01315;
    
    let com_01315 = document.getElementById("f-path-01369");
    let list_01315 = document.getElementById("list_01315");


    function togg01315() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01315-01').classList.remove('visible')
        document.querySelector('#polar-chart_01315-01').classList.remove('visible')
        document.querySelector('#polar-chart_01315-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01315').classList.remove('visible')
        document.querySelector('#f-path-01369').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01315
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01315
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01315
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01315
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01315
    }
    com_01315.onclick = togg01315;
    list_01315.onclick = togg01315;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01316 = data[315];
    
    /*Récupere les données que je veut de la Commune */
    name_01316 = rows01316.Libellé_géographique;
    Pop_01316 = rows01316.Population_en_2017;
    Pop_017_01316 = rows01316.Pop_017_ans_2017;
    Pop_mediane_vote_01316 = rows01316.Popu_possible_voté;
    nbr_inscrit_01316 = rows01316.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01316').textContent = name_01316;
    
    let com_01316 = document.getElementById("f-path-01370");
    let list_01316 = document.getElementById("list_01316");


    function togg01316() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01316-01').classList.remove('visible')
        document.querySelector('#polar-chart_01316-01').classList.remove('visible')
        document.querySelector('#polar-chart_01316-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01316').classList.remove('visible')
        document.querySelector('#f-path-01370').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01316
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01316
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01316
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01316
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01316
    }
    com_01316.onclick = togg01316;
    list_01316.onclick = togg01316;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01317 = data[316];
    
    /*Récupere les données que je veut de la Commune */
    name_01317 = rows01317.Libellé_géographique;
    Pop_01317 = rows01317.Population_en_2017;
    Pop_017_01317 = rows01317.Pop_017_ans_2017;
    Pop_mediane_vote_01317 = rows01317.Popu_possible_voté;
    nbr_inscrit_01317 = rows01317.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01317').textContent = name_01317;
    
    let com_01317 = document.getElementById("f-path-01371");
    let list_01317 = document.getElementById("list_01317");


    function togg01317() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01317-01').classList.remove('visible')
        document.querySelector('#polar-chart_01317-01').classList.remove('visible')
        document.querySelector('#polar-chart_01317-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01317').classList.remove('visible')
        document.querySelector('#f-path-01371').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01317
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01317
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01317
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01317
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01317
    }
    com_01317.onclick = togg01317;
    list_01317.onclick = togg01317;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01318 = data[317];
    
    /*Récupere les données que je veut de la Commune */
    name_01318 = rows01318.Libellé_géographique;
    Pop_01318 = rows01318.Population_en_2017;
    Pop_017_01318 = rows01318.Pop_017_ans_2017;
    Pop_mediane_vote_01318 = rows01318.Popu_possible_voté;
    nbr_inscrit_01318 = rows01318.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01318').textContent = name_01318;
    
    let com_01318 = document.getElementById("f-path-01372");
    let list_01318 = document.getElementById("list_01318");


    function togg01318() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01318-01').classList.remove('visible')
        document.querySelector('#polar-chart_01318-01').classList.remove('visible')
        document.querySelector('#polar-chart_01318-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01318').classList.remove('visible')
        document.querySelector('#f-path-01372').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01318
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01318
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01318
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01318
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01318
    }
    com_01318.onclick = togg01318;
    list_01318.onclick = togg01318;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01319 = data[318];
    
    /*Récupere les données que je veut de la Commune */
    name_01319 = rows01319.Libellé_géographique;
    Pop_01319 = rows01319.Population_en_2017;
    Pop_017_01319 = rows01319.Pop_017_ans_2017;
    Pop_mediane_vote_01319 = rows01319.Popu_possible_voté;
    nbr_inscrit_01319 = rows01319.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01319').textContent = name_01319;
    
    let com_01319 = document.getElementById("f-path-01373");
    let list_01319 = document.getElementById("list_01319");


    function togg01319() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01319-01').classList.remove('visible')
        document.querySelector('#polar-chart_01319-01').classList.remove('visible')
        document.querySelector('#polar-chart_01319-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01319').classList.remove('visible')
        document.querySelector('#f-path-01373').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01319
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01319
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01319
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01319
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01319
    }
    com_01319.onclick = togg01319;
    list_01319.onclick = togg01319;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01320 = data[319];
    
    /*Récupere les données que je veut de la Commune */
    name_01320 = rows01320.Libellé_géographique;
    Pop_01320 = rows01320.Population_en_2017;
    Pop_017_01320 = rows01320.Pop_017_ans_2017;
    Pop_mediane_vote_01320 = rows01320.Popu_possible_voté;
    nbr_inscrit_01320 = rows01320.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01320').textContent = name_01320;
    
    let com_01320 = document.getElementById("f-path-01374");
    let list_01320 = document.getElementById("list_01320");


    function togg01320() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01320-01').classList.remove('visible')
        document.querySelector('#polar-chart_01320-01').classList.remove('visible')
        document.querySelector('#polar-chart_01320-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01320').classList.remove('visible')
        document.querySelector('#f-path-01374').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01320
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01320
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01320
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01320
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01320
    }
    com_01320.onclick = togg01320;
    list_01320.onclick = togg01320;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01321 = data[320];
    
    /*Récupere les données que je veut de la Commune */
    name_01321 = rows01321.Libellé_géographique;
    Pop_01321 = rows01321.Population_en_2017;
    Pop_017_01321 = rows01321.Pop_017_ans_2017;
    Pop_mediane_vote_01321 = rows01321.Popu_possible_voté;
    nbr_inscrit_01321 = rows01321.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01321').textContent = name_01321;
    
    let com_01321 = document.getElementById("f-path-01375");
    let list_01321 = document.getElementById("list_01321");


    function togg01321() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01321-01').classList.remove('visible')
        document.querySelector('#polar-chart_01321-01').classList.remove('visible')
        document.querySelector('#polar-chart_01321-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01321').classList.remove('visible')
        document.querySelector('#f-path-01375').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01321
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01321
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01321
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01321
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01321
    }
    com_01321.onclick = togg01321;
    list_01321.onclick = togg01321;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01322 = data[321];
    
    /*Récupere les données que je veut de la Commune */
    name_01322 = rows01322.Libellé_géographique;
    Pop_01322 = rows01322.Population_en_2017;
    Pop_017_01322 = rows01322.Pop_017_ans_2017;
    Pop_mediane_vote_01322 = rows01322.Popu_possible_voté;
    nbr_inscrit_01322 = rows01322.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01322').textContent = name_01322;
    
    let com_01322 = document.getElementById("f-path-01376");
    let list_01322 = document.getElementById("list_01322");


    function togg01322() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01322-01').classList.remove('visible')
        document.querySelector('#polar-chart_01322-01').classList.remove('visible')
        document.querySelector('#polar-chart_01322-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01322').classList.remove('visible')
        document.querySelector('#f-path-01376').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01322
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01322
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01322
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01322
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01322
    }
    com_01322.onclick = togg01322;
    list_01322.onclick = togg01322;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01323 = data[322];
    
    /*Récupere les données que je veut de la Commune */
    name_01323 = rows01323.Libellé_géographique;
    Pop_01323 = rows01323.Population_en_2017;
    Pop_017_01323 = rows01323.Pop_017_ans_2017;
    Pop_mediane_vote_01323 = rows01323.Popu_possible_voté;
    nbr_inscrit_01323 = rows01323.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01323').textContent = name_01323;
    
    let com_01323 = document.getElementById("f-path-01378");
    let list_01323 = document.getElementById("list_01323");


    function togg01323() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01323-01').classList.remove('visible')
        document.querySelector('#polar-chart_01323-01').classList.remove('visible')
        document.querySelector('#polar-chart_01323-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01323').classList.remove('visible')
        document.querySelector('#f-path-01378').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01323
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01323
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01323
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01323
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01323
    }
    com_01323.onclick = togg01323;
    list_01323.onclick = togg01323;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01324 = data[323];
    
    /*Récupere les données que je veut de la Commune */
    name_01324 = rows01324.Libellé_géographique;
    Pop_01324 = rows01324.Population_en_2017;
    Pop_017_01324 = rows01324.Pop_017_ans_2017;
    Pop_mediane_vote_01324 = rows01324.Popu_possible_voté;
    nbr_inscrit_01324 = rows01324.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01324').textContent = name_01324;
    
    let com_01324 = document.getElementById("f-path-01379");
    let list_01324 = document.getElementById("list_01324");


    function togg01324() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01324-01').classList.remove('visible')
        document.querySelector('#polar-chart_01324-01').classList.remove('visible')
        document.querySelector('#polar-chart_01324-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01324').classList.remove('visible')
        document.querySelector('#f-path-01379').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01324
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01324
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01324
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01324
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01324
    }
    com_01324.onclick = togg01324;
    list_01324.onclick = togg01324;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01325 = data[324];
    
    /*Récupere les données que je veut de la Commune */
    name_01325 = rows01325.Libellé_géographique;
    Pop_01325 = rows01325.Population_en_2017;
    Pop_017_01325 = rows01325.Pop_017_ans_2017;
    Pop_mediane_vote_01325 = rows01325.Popu_possible_voté;
    nbr_inscrit_01325 = rows01325.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01325').textContent = name_01325;
    
    let com_01325 = document.getElementById("f-path-01380");
    let list_01325 = document.getElementById("list_01325");


    function togg01325() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01325-01').classList.remove('visible')
        document.querySelector('#polar-chart_01325-01').classList.remove('visible')
        document.querySelector('#polar-chart_01325-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01325').classList.remove('visible')
        document.querySelector('#f-path-01380').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01325
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01325
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01325
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01325
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01325
    }
    com_01325.onclick = togg01325;
    list_01325.onclick = togg01325;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01326 = data[325];
    
    /*Récupere les données que je veut de la Commune */
    name_01326 = rows01326.Libellé_géographique;
    Pop_01326 = rows01326.Population_en_2017;
    Pop_017_01326 = rows01326.Pop_017_ans_2017;
    Pop_mediane_vote_01326 = rows01326.Popu_possible_voté;
    nbr_inscrit_01326 = rows01326.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01326').textContent = name_01326;
    
    let com_01326 = document.getElementById("f-path-01381");
    let list_01326 = document.getElementById("list_01326");


    function togg01326() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01326-01').classList.remove('visible')
        document.querySelector('#polar-chart_01326-01').classList.remove('visible')
        document.querySelector('#polar-chart_01326-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01326').classList.remove('visible')
        document.querySelector('#f-path-01381').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01326
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01326
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01326
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01326
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01326
    }
    com_01326.onclick = togg01326;
    list_01326.onclick = togg01326;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01327 = data[326];
    
    /*Récupere les données que je veut de la Commune */
    name_01327 = rows01327.Libellé_géographique;
    Pop_01327 = rows01327.Population_en_2017;
    Pop_017_01327 = rows01327.Pop_017_ans_2017;
    Pop_mediane_vote_01327 = rows01327.Popu_possible_voté;
    nbr_inscrit_01327 = rows01327.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01327').textContent = name_01327;
    
    let com_01327 = document.getElementById("f-path-01382");
    let list_01327 = document.getElementById("list_01327");


    function togg01327() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01327-01').classList.remove('visible')
        document.querySelector('#polar-chart_01327-01').classList.remove('visible')
        document.querySelector('#polar-chart_01327-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01327').classList.remove('visible')
        document.querySelector('#f-path-01382').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01327
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01327
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01327
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01327
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01327
    }
    com_01327.onclick = togg01327;
    list_01327.onclick = togg01327;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01328 = data[327];
    
    /*Récupere les données que je veut de la Commune */
    name_01328 = rows01328.Libellé_géographique;
    Pop_01328 = rows01328.Population_en_2017;
    Pop_017_01328 = rows01328.Pop_017_ans_2017;
    Pop_mediane_vote_01328 = rows01328.Popu_possible_voté;
    nbr_inscrit_01328 = rows01328.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01328').textContent = name_01328;
    
    let com_01328 = document.getElementById("f-path-01383");
    let list_01328 = document.getElementById("list_01328");


    function togg01328() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01328-01').classList.remove('visible')
        document.querySelector('#polar-chart_01328-01').classList.remove('visible')
        document.querySelector('#polar-chart_01328-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01328').classList.remove('visible')
        document.querySelector('#f-path-01383').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01328
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01328
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01328
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01328
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01328
    }
    com_01328.onclick = togg01328;
    list_01328.onclick = togg01328;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01329 = data[328];
    
    /*Récupere les données que je veut de la Commune */
    name_01329 = rows01329.Libellé_géographique;
    Pop_01329 = rows01329.Population_en_2017;
    Pop_017_01329 = rows01329.Pop_017_ans_2017;
    Pop_mediane_vote_01329 = rows01329.Popu_possible_voté;
    nbr_inscrit_01329 = rows01329.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01329').textContent = name_01329;
    
    let com_01329 = document.getElementById("f-path-01384");
    let list_01329 = document.getElementById("list_01329");


    function togg01329() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01329-01').classList.remove('visible')
        document.querySelector('#polar-chart_01329-01').classList.remove('visible')
        document.querySelector('#polar-chart_01329-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01329').classList.remove('visible')
        document.querySelector('#f-path-01384').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01329
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01329
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01329
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01329
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01329
    }
    com_01329.onclick = togg01329;
    list_01329.onclick = togg01329;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01330 = data[329];
    
    /*Récupere les données que je veut de la Commune */
    name_01330 = rows01330.Libellé_géographique;
    Pop_01330 = rows01330.Population_en_2017;
    Pop_017_01330 = rows01330.Pop_017_ans_2017;
    Pop_mediane_vote_01330 = rows01330.Popu_possible_voté;
    nbr_inscrit_01330 = rows01330.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01330').textContent = name_01330;
    
    let com_01330 = document.getElementById("f-path-01385");
    let list_01330 = document.getElementById("list_01330");


    function togg01330() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01330-01').classList.remove('visible')
        document.querySelector('#polar-chart_01330-01').classList.remove('visible')
        document.querySelector('#polar-chart_01330-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01330').classList.remove('visible')
        document.querySelector('#f-path-01385').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01330
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01330
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01330
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01330
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01330
    }
    com_01330.onclick = togg01330;
    list_01330.onclick = togg01330;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01331 = data[330];
    
    /*Récupere les données que je veut de la Commune */
    name_01331 = rows01331.Libellé_géographique;
    Pop_01331 = rows01331.Population_en_2017;
    Pop_017_01331 = rows01331.Pop_017_ans_2017;
    Pop_mediane_vote_01331 = rows01331.Popu_possible_voté;
    nbr_inscrit_01331 = rows01331.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01331').textContent = name_01331;
    
    let com_01331 = document.getElementById("f-path-01386");
    let list_01331 = document.getElementById("list_01331");


    function togg01331() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01331-01').classList.remove('visible')
        document.querySelector('#polar-chart_01331-01').classList.remove('visible')
        document.querySelector('#polar-chart_01331-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01331').classList.remove('visible')
        document.querySelector('#f-path-01386').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01331
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01331
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01331
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01331
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01331
    }
    com_01331.onclick = togg01331;
    list_01331.onclick = togg01331;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01332 = data[331];
    
    /*Récupere les données que je veut de la Commune */
    name_01332 = rows01332.Libellé_géographique;
    Pop_01332 = rows01332.Population_en_2017;
    Pop_017_01332 = rows01332.Pop_017_ans_2017;
    Pop_mediane_vote_01332 = rows01332.Popu_possible_voté;
    nbr_inscrit_01332 = rows01332.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01332').textContent = name_01332;
    
    let com_01332 = document.getElementById("f-path-01387");
    let list_01332 = document.getElementById("list_01332");


    function togg01332() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01332-01').classList.remove('visible')
        document.querySelector('#polar-chart_01332-01').classList.remove('visible')
        document.querySelector('#polar-chart_01332-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01332').classList.remove('visible')
        document.querySelector('#f-path-01387').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01332
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01332
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01332
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01332
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01332
    }
    com_01332.onclick = togg01332;
    list_01332.onclick = togg01332;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01333 = data[332];
    
    /*Récupere les données que je veut de la Commune */
    name_01333 = rows01333.Libellé_géographique;
    Pop_01333 = rows01333.Population_en_2017;
    Pop_017_01333 = rows01333.Pop_017_ans_2017;
    Pop_mediane_vote_01333 = rows01333.Popu_possible_voté;
    nbr_inscrit_01333 = rows01333.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01333').textContent = name_01333;
    
    let com_01333 = document.getElementById("f-path-01388");
    let list_01333 = document.getElementById("list_01333");


    function togg01333() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01333-01').classList.remove('visible')
        document.querySelector('#polar-chart_01333-01').classList.remove('visible')
        document.querySelector('#polar-chart_01333-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01333').classList.remove('visible')
        document.querySelector('#f-path-01388').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01333
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01333
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01333
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01333
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01333
    }
    com_01333.onclick = togg01333;
    list_01333.onclick = togg01333;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01334 = data[333];
    
    /*Récupere les données que je veut de la Commune */
    name_01334 = rows01334.Libellé_géographique;
    Pop_01334 = rows01334.Population_en_2017;
    Pop_017_01334 = rows01334.Pop_017_ans_2017;
    Pop_mediane_vote_01334 = rows01334.Popu_possible_voté;
    nbr_inscrit_01334 = rows01334.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01334').textContent = name_01334;
    
    let com_01334 = document.getElementById("f-path-01389");
    let list_01334 = document.getElementById("list_01334");


    function togg01334() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01334-01').classList.remove('visible')
        document.querySelector('#polar-chart_01334-01').classList.remove('visible')
        document.querySelector('#polar-chart_01334-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01334').classList.remove('visible')
        document.querySelector('#f-path-01389').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01334
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01334
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01334
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01334
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01334
    }
    com_01334.onclick = togg01334;
    list_01334.onclick = togg01334;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01335 = data[334];
    
    /*Récupere les données que je veut de la Commune */
    name_01335 = rows01335.Libellé_géographique;
    Pop_01335 = rows01335.Population_en_2017;
    Pop_017_01335 = rows01335.Pop_017_ans_2017;
    Pop_mediane_vote_01335 = rows01335.Popu_possible_voté;
    nbr_inscrit_01335 = rows01335.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01335').textContent = name_01335;
    
    let com_01335 = document.getElementById("f-path-01390");
    let list_01335 = document.getElementById("list_01335");


    function togg01335() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01335-01').classList.remove('visible')
        document.querySelector('#polar-chart_01335-01').classList.remove('visible')
        document.querySelector('#polar-chart_01335-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01335').classList.remove('visible')
        document.querySelector('#f-path-01390').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01335
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01335
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01335
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01335
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01335
    }
    com_01335.onclick = togg01335;
    list_01335.onclick = togg01335;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01336 = data[335];
    
    /*Récupere les données que je veut de la Commune */
    name_01336 = rows01336.Libellé_géographique;
    Pop_01336 = rows01336.Population_en_2017;
    Pop_017_01336 = rows01336.Pop_017_ans_2017;
    Pop_mediane_vote_01336 = rows01336.Popu_possible_voté;
    nbr_inscrit_01336 = rows01336.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01336').textContent = name_01336;
    
    let com_01336 = document.getElementById("f-path-01391");
    let list_01336 = document.getElementById("list_01336");


    function togg01336() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01336-01').classList.remove('visible')
        document.querySelector('#polar-chart_01336-01').classList.remove('visible')
        document.querySelector('#polar-chart_01336-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01336').classList.remove('visible')
        document.querySelector('#f-path-01391').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01336
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01336
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01336
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01336
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01336
    }
    com_01336.onclick = togg01336;
    list_01336.onclick = togg01336;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01337 = data[336];
    
    /*Récupere les données que je veut de la Commune */
    name_01337 = rows01337.Libellé_géographique;
    Pop_01337 = rows01337.Population_en_2017;
    Pop_017_01337 = rows01337.Pop_017_ans_2017;
    Pop_mediane_vote_01337 = rows01337.Popu_possible_voté;
    nbr_inscrit_01337 = rows01337.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01337').textContent = name_01337;
    
    let com_01337 = document.getElementById("f-path-01392");
    let list_01337 = document.getElementById("list_01337");


    function togg01337() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01337-01').classList.remove('visible')
        document.querySelector('#polar-chart_01337-01').classList.remove('visible')
        document.querySelector('#polar-chart_01337-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01337').classList.remove('visible')
        document.querySelector('#f-path-01392').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01337
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01337
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01337
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01337
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01337
    }
    com_01337.onclick = togg01337;
    list_01337.onclick = togg01337;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01338 = data[337];
    
    /*Récupere les données que je veut de la Commune */
    name_01338 = rows01338.Libellé_géographique;
    Pop_01338 = rows01338.Population_en_2017;
    Pop_017_01338 = rows01338.Pop_017_ans_2017;
    Pop_mediane_vote_01338 = rows01338.Popu_possible_voté;
    nbr_inscrit_01338 = rows01338.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01338').textContent = name_01338;
    
    let com_01338 = document.getElementById("f-path-01393");
    let list_01338 = document.getElementById("list_01338");


    function togg01338() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01338-01').classList.remove('visible')
        document.querySelector('#polar-chart_01338-01').classList.remove('visible')
        document.querySelector('#polar-chart_01338-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01338').classList.remove('visible')
        document.querySelector('#f-path-01393').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01338
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01338
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01338
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01338
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01338
    }
    com_01338.onclick = togg01338;
    list_01338.onclick = togg01338;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01339 = data[338];
    
    /*Récupere les données que je veut de la Commune */
    name_01339 = rows01339.Libellé_géographique;
    Pop_01339 = rows01339.Population_en_2017;
    Pop_017_01339 = rows01339.Pop_017_ans_2017;
    Pop_mediane_vote_01339 = rows01339.Popu_possible_voté;
    nbr_inscrit_01339 = rows01339.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01339').textContent = name_01339;
    
    let com_01339 = document.getElementById("f-path-01396");
    let list_01339 = document.getElementById("list_01339");


    function togg01339() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01339-01').classList.remove('visible')
        document.querySelector('#polar-chart_01339-01').classList.remove('visible')
        document.querySelector('#polar-chart_01339-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01339').classList.remove('visible')
        document.querySelector('#f-path-01396').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01339
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01339
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01339
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01339
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01339
    }
    com_01339.onclick = togg01339;
    list_01339.onclick = togg01339;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01340 = data[339];
    
    /*Récupere les données que je veut de la Commune */
    name_01340 = rows01340.Libellé_géographique;
    Pop_01340 = rows01340.Population_en_2017;
    Pop_017_01340 = rows01340.Pop_017_ans_2017;
    Pop_mediane_vote_01340 = rows01340.Popu_possible_voté;
    nbr_inscrit_01340 = rows01340.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01340').textContent = name_01340;
    
    let com_01340 = document.getElementById("f-path-01397");
    let list_01340 = document.getElementById("list_01340");


    function togg01340() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01340-01').classList.remove('visible')
        document.querySelector('#polar-chart_01340-01').classList.remove('visible')
        document.querySelector('#polar-chart_01340-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01340').classList.remove('visible')
        document.querySelector('#f-path-01397').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01340
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01340
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01340
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01340
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01340
    }
    com_01340.onclick = togg01340;
    list_01340.onclick = togg01340;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01341 = data[340];
    
    /*Récupere les données que je veut de la Commune */
    name_01341 = rows01341.Libellé_géographique;
    Pop_01341 = rows01341.Population_en_2017;
    Pop_017_01341 = rows01341.Pop_017_ans_2017;
    Pop_mediane_vote_01341 = rows01341.Popu_possible_voté;
    nbr_inscrit_01341 = rows01341.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01341').textContent = name_01341;
    
    let com_01341 = document.getElementById("f-path-01398");
    let list_01341 = document.getElementById("list_01341");


    function togg01341() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01341-01').classList.remove('visible')
        document.querySelector('#polar-chart_01341-01').classList.remove('visible')
        document.querySelector('#polar-chart_01341-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01341').classList.remove('visible')
        document.querySelector('#f-path-01398').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01341
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01341
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01341
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01341
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01341
    }
    com_01341.onclick = togg01341;
    list_01341.onclick = togg01341;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01342 = data[341];
    
    /*Récupere les données que je veut de la Commune */
    name_01342 = rows01342.Libellé_géographique;
    Pop_01342 = rows01342.Population_en_2017;
    Pop_017_01342 = rows01342.Pop_017_ans_2017;
    Pop_mediane_vote_01342 = rows01342.Popu_possible_voté;
    nbr_inscrit_01342 = rows01342.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01342').textContent = name_01342;
    
    let com_01342 = document.getElementById("f-path-01399");
    let list_01342 = document.getElementById("list_01342");


    function togg01342() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01342-01').classList.remove('visible')
        document.querySelector('#polar-chart_01342-01').classList.remove('visible')
        document.querySelector('#polar-chart_01342-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01342').classList.remove('visible')
        document.querySelector('#f-path-01399').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01342
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01342
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01342
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01342
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01342
    }
    com_01342.onclick = togg01342;
    list_01342.onclick = togg01342;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01343 = data[342];
    
    /*Récupere les données que je veut de la Commune */
    name_01343 = rows01343.Libellé_géographique;
    Pop_01343 = rows01343.Population_en_2017;
    Pop_017_01343 = rows01343.Pop_017_ans_2017;
    Pop_mediane_vote_01343 = rows01343.Popu_possible_voté;
    nbr_inscrit_01343 = rows01343.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01343').textContent = name_01343;
    
    let com_01343 = document.getElementById("f-path-01400");
    let list_01343 = document.getElementById("list_01343");


    function togg01343() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01343-01').classList.remove('visible')
        document.querySelector('#polar-chart_01343-01').classList.remove('visible')
        document.querySelector('#polar-chart_01343-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01343').classList.remove('visible')
        document.querySelector('#f-path-01400').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01343
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01343
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01343
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01343
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01343
    }
    com_01343.onclick = togg01343;
    list_01343.onclick = togg01343;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01344 = data[343];
    
    /*Récupere les données que je veut de la Commune */
    name_01344 = rows01344.Libellé_géographique;
    Pop_01344 = rows01344.Population_en_2017;
    Pop_017_01344 = rows01344.Pop_017_ans_2017;
    Pop_mediane_vote_01344 = rows01344.Popu_possible_voté;
    nbr_inscrit_01344 = rows01344.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01344').textContent = name_01344;
    
    let com_01344 = document.getElementById("f-path-01401");
    let list_01344 = document.getElementById("list_01344");


    function togg01344() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01344-01').classList.remove('visible')
        document.querySelector('#polar-chart_01344-01').classList.remove('visible')
        document.querySelector('#polar-chart_01344-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01344').classList.remove('visible')
        document.querySelector('#f-path-01401').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01344
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01344
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01344
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01344
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01344
    }
    com_01344.onclick = togg01344;
    list_01344.onclick = togg01344;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01345 = data[344];
    
    /*Récupere les données que je veut de la Commune */
    name_01345 = rows01345.Libellé_géographique;
    Pop_01345 = rows01345.Population_en_2017;
    Pop_017_01345 = rows01345.Pop_017_ans_2017;
    Pop_mediane_vote_01345 = rows01345.Popu_possible_voté;
    nbr_inscrit_01345 = rows01345.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01345').textContent = name_01345;
    
    let com_01345 = document.getElementById("f-path-01402");
    let list_01345 = document.getElementById("list_01345");


    function togg01345() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01345-01').classList.remove('visible')
        document.querySelector('#polar-chart_01345-01').classList.remove('visible')
        document.querySelector('#polar-chart_01345-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01345').classList.remove('visible')
        document.querySelector('#f-path-01402').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01345
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01345
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01345
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01345
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01345
    }
    com_01345.onclick = togg01345;
    list_01345.onclick = togg01345;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01346 = data[345];
    
    /*Récupere les données que je veut de la Commune */
    name_01346 = rows01346.Libellé_géographique;
    Pop_01346 = rows01346.Population_en_2017;
    Pop_017_01346 = rows01346.Pop_017_ans_2017;
    Pop_mediane_vote_01346 = rows01346.Popu_possible_voté;
    nbr_inscrit_01346 = rows01346.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01346').textContent = name_01346;
    
    let com_01346 = document.getElementById("f-path-01403");
    let list_01346 = document.getElementById("list_01346");


    function togg01346() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01346-01').classList.remove('visible')
        document.querySelector('#polar-chart_01346-01').classList.remove('visible')
        document.querySelector('#polar-chart_01346-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01346').classList.remove('visible')
        document.querySelector('#f-path-01403').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01346
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01346
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01346
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01346
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01346
    }
    com_01346.onclick = togg01346;
    list_01346.onclick = togg01346;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01347 = data[346];
    
    /*Récupere les données que je veut de la Commune */
    name_01347 = rows01347.Libellé_géographique;
    Pop_01347 = rows01347.Population_en_2017;
    Pop_017_01347 = rows01347.Pop_017_ans_2017;
    Pop_mediane_vote_01347 = rows01347.Popu_possible_voté;
    nbr_inscrit_01347 = rows01347.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01347').textContent = name_01347;
    
    let com_01347 = document.getElementById("f-path-01404");
    let list_01347 = document.getElementById("list_01347");


    function togg01347() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01347-01').classList.remove('visible')
        document.querySelector('#polar-chart_01347-01').classList.remove('visible')
        document.querySelector('#polar-chart_01347-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01347').classList.remove('visible')
        document.querySelector('#f-path-01404').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01347
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01347
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01347
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01347
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01347
    }
    com_01347.onclick = togg01347;
    list_01347.onclick = togg01347;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01348 = data[347];
    
    /*Récupere les données que je veut de la Commune */
    name_01348 = rows01348.Libellé_géographique;
    Pop_01348 = rows01348.Population_en_2017;
    Pop_017_01348 = rows01348.Pop_017_ans_2017;
    Pop_mediane_vote_01348 = rows01348.Popu_possible_voté;
    nbr_inscrit_01348 = rows01348.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01348').textContent = name_01348;
    
    let com_01348 = document.getElementById("f-path-01405");
    let list_01348 = document.getElementById("list_01348");


    function togg01348() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01348-01').classList.remove('visible')
        document.querySelector('#polar-chart_01348-01').classList.remove('visible')
        document.querySelector('#polar-chart_01348-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01348').classList.remove('visible')
        document.querySelector('#f-path-01405').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01348
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01348
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01348
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01348
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01348
    }
    com_01348.onclick = togg01348;
    list_01348.onclick = togg01348;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01349 = data[348];
    
    /*Récupere les données que je veut de la Commune */
    name_01349 = rows01349.Libellé_géographique;
    Pop_01349 = rows01349.Population_en_2017;
    Pop_017_01349 = rows01349.Pop_017_ans_2017;
    Pop_mediane_vote_01349 = rows01349.Popu_possible_voté;
    nbr_inscrit_01349 = rows01349.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01349').textContent = name_01349;
    
    let com_01349 = document.getElementById("f-path-01406");
    let list_01349 = document.getElementById("list_01349");


    function togg01349() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01349-01').classList.remove('visible')
        document.querySelector('#polar-chart_01349-01').classList.remove('visible')
        document.querySelector('#polar-chart_01349-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01349').classList.remove('visible')
        document.querySelector('#f-path-01406').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01349
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01349
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01349
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01349
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01349
    }
    com_01349.onclick = togg01349;
    list_01349.onclick = togg01349;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01350 = data[349];
    
    /*Récupere les données que je veut de la Commune */
    name_01350 = rows01350.Libellé_géographique;
    Pop_01350 = rows01350.Population_en_2017;
    Pop_017_01350 = rows01350.Pop_017_ans_2017;
    Pop_mediane_vote_01350 = rows01350.Popu_possible_voté;
    nbr_inscrit_01350 = rows01350.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01350').textContent = name_01350;
    
    let com_01350 = document.getElementById("f-path-01407");
    let list_01350 = document.getElementById("list_01350");


    function togg01350() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01350-01').classList.remove('visible')
        document.querySelector('#polar-chart_01350-01').classList.remove('visible')
        document.querySelector('#polar-chart_01350-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01350').classList.remove('visible')
        document.querySelector('#f-path-01407').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01350
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01350
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01350
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01350
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01350
    }
    com_01350.onclick = togg01350;
    list_01350.onclick = togg01350;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01351 = data[350];
    
    /*Récupere les données que je veut de la Commune */
    name_01351 = rows01351.Libellé_géographique;
    Pop_01351 = rows01351.Population_en_2017;
    Pop_017_01351 = rows01351.Pop_017_ans_2017;
    Pop_mediane_vote_01351 = rows01351.Popu_possible_voté;
    nbr_inscrit_01351 = rows01351.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01351').textContent = name_01351;
    
    let com_01351 = document.getElementById("f-path-01408");
    let list_01351 = document.getElementById("list_01351");


    function togg01351() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01351-01').classList.remove('visible')
        document.querySelector('#polar-chart_01351-01').classList.remove('visible')
        document.querySelector('#polar-chart_01351-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01351').classList.remove('visible')
        document.querySelector('#f-path-01408').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01351
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01351
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01351
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01351
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01351
    }
    com_01351.onclick = togg01351;
    list_01351.onclick = togg01351;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01352 = data[351];
    
    /*Récupere les données que je veut de la Commune */
    name_01352 = rows01352.Libellé_géographique;
    Pop_01352 = rows01352.Population_en_2017;
    Pop_017_01352 = rows01352.Pop_017_ans_2017;
    Pop_mediane_vote_01352 = rows01352.Popu_possible_voté;
    nbr_inscrit_01352 = rows01352.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01352').textContent = name_01352;
    
    let com_01352 = document.getElementById("f-path-01410");
    let list_01352 = document.getElementById("list_01352");


    function togg01352() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01352-01').classList.remove('visible')
        document.querySelector('#polar-chart_01352-01').classList.remove('visible')
        document.querySelector('#polar-chart_01352-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01352').classList.remove('visible')
        document.querySelector('#f-path-01410').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01352
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01352
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01352
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01352
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01352
    }
    com_01352.onclick = togg01352;
    list_01352.onclick = togg01352;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01353 = data[352];
    
    /*Récupere les données que je veut de la Commune */
    name_01353 = rows01353.Libellé_géographique;
    Pop_01353 = rows01353.Population_en_2017;
    Pop_017_01353 = rows01353.Pop_017_ans_2017;
    Pop_mediane_vote_01353 = rows01353.Popu_possible_voté;
    nbr_inscrit_01353 = rows01353.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01353').textContent = name_01353;
    
    let com_01353 = document.getElementById("f-path-01411");
    let list_01353 = document.getElementById("list_01353");


    function togg01353() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01353-01').classList.remove('visible')
        document.querySelector('#polar-chart_01353-01').classList.remove('visible')
        document.querySelector('#polar-chart_01353-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01353').classList.remove('visible')
        document.querySelector('#f-path-01411').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01353
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01353
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01353
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01353
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01353
    }
    com_01353.onclick = togg01353;
    list_01353.onclick = togg01353;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01354 = data[353];
    
    /*Récupere les données que je veut de la Commune */
    name_01354 = rows01354.Libellé_géographique;
    Pop_01354 = rows01354.Population_en_2017;
    Pop_017_01354 = rows01354.Pop_017_ans_2017;
    Pop_mediane_vote_01354 = rows01354.Popu_possible_voté;
    nbr_inscrit_01354 = rows01354.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01354').textContent = name_01354;
    
    let com_01354 = document.getElementById("f-path-01412");
    let list_01354 = document.getElementById("list_01354");


    function togg01354() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01354-01').classList.remove('visible')
        document.querySelector('#polar-chart_01354-01').classList.remove('visible')
        document.querySelector('#polar-chart_01354-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01354').classList.remove('visible')
        document.querySelector('#f-path-01412').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01354
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01354
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01354
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01354
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01354
    }
    com_01354.onclick = togg01354;
    list_01354.onclick = togg01354;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01355 = data[354];
    
    /*Récupere les données que je veut de la Commune */
    name_01355 = rows01355.Libellé_géographique;
    Pop_01355 = rows01355.Population_en_2017;
    Pop_017_01355 = rows01355.Pop_017_ans_2017;
    Pop_mediane_vote_01355 = rows01355.Popu_possible_voté;
    nbr_inscrit_01355 = rows01355.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01355').textContent = name_01355;
    
    let com_01355 = document.getElementById("f-path-01415");
    let list_01355 = document.getElementById("list_01355");


    function togg01355() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01355-01').classList.remove('visible')
        document.querySelector('#polar-chart_01355-01').classList.remove('visible')
        document.querySelector('#polar-chart_01355-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01355').classList.remove('visible')
        document.querySelector('#f-path-01415').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01355
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01355
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01355
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01355
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01355
    }
    com_01355.onclick = togg01355;
    list_01355.onclick = togg01355;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01356 = data[355];
    
    /*Récupere les données que je veut de la Commune */
    name_01356 = rows01356.Libellé_géographique;
    Pop_01356 = rows01356.Population_en_2017;
    Pop_017_01356 = rows01356.Pop_017_ans_2017;
    Pop_mediane_vote_01356 = rows01356.Popu_possible_voté;
    nbr_inscrit_01356 = rows01356.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01356').textContent = name_01356;
    
    let com_01356 = document.getElementById("f-path-01416");
    let list_01356 = document.getElementById("list_01356");


    function togg01356() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01356-01').classList.remove('visible')
        document.querySelector('#polar-chart_01356-01').classList.remove('visible')
        document.querySelector('#polar-chart_01356-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01356').classList.remove('visible')
        document.querySelector('#f-path-01416').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01356
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01356
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01356
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01356
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01356
    }
    com_01356.onclick = togg01356;
    list_01356.onclick = togg01356;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01357 = data[356];
    
    /*Récupere les données que je veut de la Commune */
    name_01357 = rows01357.Libellé_géographique;
    Pop_01357 = rows01357.Population_en_2017;
    Pop_017_01357 = rows01357.Pop_017_ans_2017;
    Pop_mediane_vote_01357 = rows01357.Popu_possible_voté;
    nbr_inscrit_01357 = rows01357.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01357').textContent = name_01357;
    
    let com_01357 = document.getElementById("f-path-01418");
    let list_01357 = document.getElementById("list_01357");


    function togg01357() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01357-01').classList.remove('visible')
        document.querySelector('#polar-chart_01357-01').classList.remove('visible')
        document.querySelector('#polar-chart_01357-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01357').classList.remove('visible')
        document.querySelector('#f-path-01418').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01357
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01357
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01357
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01357
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01357
    }
    com_01357.onclick = togg01357;
    list_01357.onclick = togg01357;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01358 = data[357];
    
    /*Récupere les données que je veut de la Commune */
    name_01358 = rows01358.Libellé_géographique;
    Pop_01358 = rows01358.Population_en_2017;
    Pop_017_01358 = rows01358.Pop_017_ans_2017;
    Pop_mediane_vote_01358 = rows01358.Popu_possible_voté;
    nbr_inscrit_01358 = rows01358.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01358').textContent = name_01358;
    
    let com_01358 = document.getElementById("f-path-01419");
    let list_01358 = document.getElementById("list_01358");


    function togg01358() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01358-01').classList.remove('visible')
        document.querySelector('#polar-chart_01358-01').classList.remove('visible')
        document.querySelector('#polar-chart_01358-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01358').classList.remove('visible')
        document.querySelector('#f-path-01419').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01358
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01358
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01358
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01358
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01358
    }
    com_01358.onclick = togg01358;
    list_01358.onclick = togg01358;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01359 = data[358];
    
    /*Récupere les données que je veut de la Commune */
    name_01359 = rows01359.Libellé_géographique;
    Pop_01359 = rows01359.Population_en_2017;
    Pop_017_01359 = rows01359.Pop_017_ans_2017;
    Pop_mediane_vote_01359 = rows01359.Popu_possible_voté;
    nbr_inscrit_01359 = rows01359.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01359').textContent = name_01359;
    
    let com_01359 = document.getElementById("f-path-01420");
    let list_01359 = document.getElementById("list_01359");


    function togg01359() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01359-01').classList.remove('visible')
        document.querySelector('#polar-chart_01359-01').classList.remove('visible')
        document.querySelector('#polar-chart_01359-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01359').classList.remove('visible')
        document.querySelector('#f-path-01420').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01359
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01359
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01359
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01359
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01359
    }
    com_01359.onclick = togg01359;
    list_01359.onclick = togg01359;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01360 = data[359];
    
    /*Récupere les données que je veut de la Commune */
    name_01360 = rows01360.Libellé_géographique;
    Pop_01360 = rows01360.Population_en_2017;
    Pop_017_01360 = rows01360.Pop_017_ans_2017;
    Pop_mediane_vote_01360 = rows01360.Popu_possible_voté;
    nbr_inscrit_01360 = rows01360.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01360').textContent = name_01360;
    
    let com_01360 = document.getElementById("f-path-01421");
    let list_01360 = document.getElementById("list_01360");


    function togg01360() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01360-01').classList.remove('visible')
        document.querySelector('#polar-chart_01360-01').classList.remove('visible')
        document.querySelector('#polar-chart_01360-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01360').classList.remove('visible')
        document.querySelector('#f-path-01421').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01360
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01360
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01360
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01360
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01360
    }
    com_01360.onclick = togg01360;
    list_01360.onclick = togg01360;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01361 = data[360];
    
    /*Récupere les données que je veut de la Commune */
    name_01361 = rows01361.Libellé_géographique;
    Pop_01361 = rows01361.Population_en_2017;
    Pop_017_01361 = rows01361.Pop_017_ans_2017;
    Pop_mediane_vote_01361 = rows01361.Popu_possible_voté;
    nbr_inscrit_01361 = rows01361.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01361').textContent = name_01361;
    
    let com_01361 = document.getElementById("f-path-01422");
    let list_01361 = document.getElementById("list_01361");


    function togg01361() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01361-01').classList.remove('visible')
        document.querySelector('#polar-chart_01361-01').classList.remove('visible')
        document.querySelector('#polar-chart_01361-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01361').classList.remove('visible')
        document.querySelector('#f-path-01422').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01361
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01361
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01361
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01361
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01361
    }
    com_01361.onclick = togg01361;
    list_01361.onclick = togg01361;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01362 = data[361];
    
    /*Récupere les données que je veut de la Commune */
    name_01362 = rows01362.Libellé_géographique;
    Pop_01362 = rows01362.Population_en_2017;
    Pop_017_01362 = rows01362.Pop_017_ans_2017;
    Pop_mediane_vote_01362 = rows01362.Popu_possible_voté;
    nbr_inscrit_01362 = rows01362.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01362').textContent = name_01362;
    
    let com_01362 = document.getElementById("f-path-01423");
    let list_01362 = document.getElementById("list_01362");


    function togg01362() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01362-01').classList.remove('visible')
        document.querySelector('#polar-chart_01362-01').classList.remove('visible')
        document.querySelector('#polar-chart_01362-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01362').classList.remove('visible')
        document.querySelector('#f-path-01423').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01362
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01362
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01362
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01362
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01362
    }
    com_01362.onclick = togg01362;
    list_01362.onclick = togg01362;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01363 = data[362];
    
    /*Récupere les données que je veut de la Commune */
    name_01363 = rows01363.Libellé_géographique;
    Pop_01363 = rows01363.Population_en_2017;
    Pop_017_01363 = rows01363.Pop_017_ans_2017;
    Pop_mediane_vote_01363 = rows01363.Popu_possible_voté;
    nbr_inscrit_01363 = rows01363.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01363').textContent = name_01363;
    
    let com_01363 = document.getElementById("f-path-01424");
    let list_01363 = document.getElementById("list_01363");


    function togg01363() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01363-01').classList.remove('visible')
        document.querySelector('#polar-chart_01363-01').classList.remove('visible')
        document.querySelector('#polar-chart_01363-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01363').classList.remove('visible')
        document.querySelector('#f-path-01424').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01363
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01363
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01363
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01363
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01363
    }
    com_01363.onclick = togg01363;
    list_01363.onclick = togg01363;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01364 = data[363];
    
    /*Récupere les données que je veut de la Commune */
    name_01364 = rows01364.Libellé_géographique;
    Pop_01364 = rows01364.Population_en_2017;
    Pop_017_01364 = rows01364.Pop_017_ans_2017;
    Pop_mediane_vote_01364 = rows01364.Popu_possible_voté;
    nbr_inscrit_01364 = rows01364.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01364').textContent = name_01364;
    
    let com_01364 = document.getElementById("f-path-01425");
    let list_01364 = document.getElementById("list_01364");


    function togg01364() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01364-01').classList.remove('visible')
        document.querySelector('#polar-chart_01364-01').classList.remove('visible')
        document.querySelector('#polar-chart_01364-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01364').classList.remove('visible')
        document.querySelector('#f-path-01425').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01364
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01364
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01364
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01364
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01364
    }
    com_01364.onclick = togg01364;
    list_01364.onclick = togg01364;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01365 = data[364];
    
    /*Récupere les données que je veut de la Commune */
    name_01365 = rows01365.Libellé_géographique;
    Pop_01365 = rows01365.Population_en_2017;
    Pop_017_01365 = rows01365.Pop_017_ans_2017;
    Pop_mediane_vote_01365 = rows01365.Popu_possible_voté;
    nbr_inscrit_01365 = rows01365.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01365').textContent = name_01365;
    
    let com_01365 = document.getElementById("f-path-01426");
    let list_01365 = document.getElementById("list_01365");


    function togg01365() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01365-01').classList.remove('visible')
        document.querySelector('#polar-chart_01365-01').classList.remove('visible')
        document.querySelector('#polar-chart_01365-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01365').classList.remove('visible')
        document.querySelector('#f-path-01426').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01365
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01365
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01365
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01365
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01365
    }
    com_01365.onclick = togg01365;
    list_01365.onclick = togg01365;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01366 = data[365];
    
    /*Récupere les données que je veut de la Commune */
    name_01366 = rows01366.Libellé_géographique;
    Pop_01366 = rows01366.Population_en_2017;
    Pop_017_01366 = rows01366.Pop_017_ans_2017;
    Pop_mediane_vote_01366 = rows01366.Popu_possible_voté;
    nbr_inscrit_01366 = rows01366.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01366').textContent = name_01366;
    
    let com_01366 = document.getElementById("f-path-01427");
    let list_01366 = document.getElementById("list_01366");


    function togg01366() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01366-01').classList.remove('visible')
        document.querySelector('#polar-chart_01366-01').classList.remove('visible')
        document.querySelector('#polar-chart_01366-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01366').classList.remove('visible')
        document.querySelector('#f-path-01427').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01366
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01366
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01366
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01366
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01366
    }
    com_01366.onclick = togg01366;
    list_01366.onclick = togg01366;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01367 = data[366];
    
    /*Récupere les données que je veut de la Commune */
    name_01367 = rows01367.Libellé_géographique;
    Pop_01367 = rows01367.Population_en_2017;
    Pop_017_01367 = rows01367.Pop_017_ans_2017;
    Pop_mediane_vote_01367 = rows01367.Popu_possible_voté;
    nbr_inscrit_01367 = rows01367.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01367').textContent = name_01367;
    
    let com_01367 = document.getElementById("f-path-01428");
    let list_01367 = document.getElementById("list_01367");


    function togg01367() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01367-01').classList.remove('visible')
        document.querySelector('#polar-chart_01367-01').classList.remove('visible')
        document.querySelector('#polar-chart_01367-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01367').classList.remove('visible')
        document.querySelector('#f-path-01428').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01367
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01367
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01367
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01367
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01367
    }
    com_01367.onclick = togg01367;
    list_01367.onclick = togg01367;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01368 = data[367];
    
    /*Récupere les données que je veut de la Commune */
    name_01368 = rows01368.Libellé_géographique;
    Pop_01368 = rows01368.Population_en_2017;
    Pop_017_01368 = rows01368.Pop_017_ans_2017;
    Pop_mediane_vote_01368 = rows01368.Popu_possible_voté;
    nbr_inscrit_01368 = rows01368.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01368').textContent = name_01368;
    
    let com_01368 = document.getElementById("f-path-01429");
    let list_01368 = document.getElementById("list_01368");


    function togg01368() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01368-01').classList.remove('visible')
        document.querySelector('#polar-chart_01368-01').classList.remove('visible')
        document.querySelector('#polar-chart_01368-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01368').classList.remove('visible')
        document.querySelector('#f-path-01429').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01368
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01368
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01368
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01368
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01368
    }
    com_01368.onclick = togg01368;
    list_01368.onclick = togg01368;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01369 = data[368];
    
    /*Récupere les données que je veut de la Commune */
    name_01369 = rows01369.Libellé_géographique;
    Pop_01369 = rows01369.Population_en_2017;
    Pop_017_01369 = rows01369.Pop_017_ans_2017;
    Pop_mediane_vote_01369 = rows01369.Popu_possible_voté;
    nbr_inscrit_01369 = rows01369.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01369').textContent = name_01369;
    
    let com_01369 = document.getElementById("f-path-01430");
    let list_01369 = document.getElementById("list_01369");


    function togg01369() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01369-01').classList.remove('visible')
        document.querySelector('#polar-chart_01369-01').classList.remove('visible')
        document.querySelector('#polar-chart_01369-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01369').classList.remove('visible')
        document.querySelector('#f-path-01430').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01369
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01369
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01369
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01369
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01369
    }
    com_01369.onclick = togg01369;
    list_01369.onclick = togg01369;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01370 = data[369];
    
    /*Récupere les données que je veut de la Commune */
    name_01370 = rows01370.Libellé_géographique;
    Pop_01370 = rows01370.Population_en_2017;
    Pop_017_01370 = rows01370.Pop_017_ans_2017;
    Pop_mediane_vote_01370 = rows01370.Popu_possible_voté;
    nbr_inscrit_01370 = rows01370.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01370').textContent = name_01370;
    
    let com_01370 = document.getElementById("f-path-01431");
    let list_01370 = document.getElementById("list_01370");


    function togg01370() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01370-01').classList.remove('visible')
        document.querySelector('#polar-chart_01370-01').classList.remove('visible')
        document.querySelector('#polar-chart_01370-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01370').classList.remove('visible')
        document.querySelector('#f-path-01431').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01370
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01370
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01370
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01370
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01370
    }
    com_01370.onclick = togg01370;
    list_01370.onclick = togg01370;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01371 = data[370];
    
    /*Récupere les données que je veut de la Commune */
    name_01371 = rows01371.Libellé_géographique;
    Pop_01371 = rows01371.Population_en_2017;
    Pop_017_01371 = rows01371.Pop_017_ans_2017;
    Pop_mediane_vote_01371 = rows01371.Popu_possible_voté;
    nbr_inscrit_01371 = rows01371.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01371').textContent = name_01371;
    
    let com_01371 = document.getElementById("f-path-01432");
    let list_01371 = document.getElementById("list_01371");


    function togg01371() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01371-01').classList.remove('visible')
        document.querySelector('#polar-chart_01371-01').classList.remove('visible')
        document.querySelector('#polar-chart_01371-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01371').classList.remove('visible')
        document.querySelector('#f-path-01432').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01371
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01371
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01371
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01371
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01371
    }
    com_01371.onclick = togg01371;
    list_01371.onclick = togg01371;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01372 = data[371];
    
    /*Récupere les données que je veut de la Commune */
    name_01372 = rows01372.Libellé_géographique;
    Pop_01372 = rows01372.Population_en_2017;
    Pop_017_01372 = rows01372.Pop_017_ans_2017;
    Pop_mediane_vote_01372 = rows01372.Popu_possible_voté;
    nbr_inscrit_01372 = rows01372.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01372').textContent = name_01372;
    
    let com_01372 = document.getElementById("f-path-01433");
    let list_01372 = document.getElementById("list_01372");


    function togg01372() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01372-01').classList.remove('visible')
        document.querySelector('#polar-chart_01372-01').classList.remove('visible')
        document.querySelector('#polar-chart_01372-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01372').classList.remove('visible')
        document.querySelector('#f-path-01433').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01372
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01372
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01372
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01372
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01372
    }
    com_01372.onclick = togg01372;
    list_01372.onclick = togg01372;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01373 = data[372];
    
    /*Récupere les données que je veut de la Commune */
    name_01373 = rows01373.Libellé_géographique;
    Pop_01373 = rows01373.Population_en_2017;
    Pop_017_01373 = rows01373.Pop_017_ans_2017;
    Pop_mediane_vote_01373 = rows01373.Popu_possible_voté;
    nbr_inscrit_01373 = rows01373.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01373').textContent = name_01373;
    
    let com_01373 = document.getElementById("f-path-01434");
    let list_01373 = document.getElementById("list_01373");


    function togg01373() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01373-01').classList.remove('visible')
        document.querySelector('#polar-chart_01373-01').classList.remove('visible')
        document.querySelector('#polar-chart_01373-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01373').classList.remove('visible')
        document.querySelector('#f-path-01434').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01373
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01373
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01373
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01373
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01373
    }
    com_01373.onclick = togg01373;
    list_01373.onclick = togg01373;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01374 = data[373];
    
    /*Récupere les données que je veut de la Commune */
    name_01374 = rows01374.Libellé_géographique;
    Pop_01374 = rows01374.Population_en_2017;
    Pop_017_01374 = rows01374.Pop_017_ans_2017;
    Pop_mediane_vote_01374 = rows01374.Popu_possible_voté;
    nbr_inscrit_01374 = rows01374.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01374').textContent = name_01374;
    
    let com_01374 = document.getElementById("f-path-01435");
    let list_01374 = document.getElementById("list_01374");


    function togg01374() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01374-01').classList.remove('visible')
        document.querySelector('#polar-chart_01374-01').classList.remove('visible')
        document.querySelector('#polar-chart_01374-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01374').classList.remove('visible')
        document.querySelector('#f-path-01435').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01374
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01374
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01374
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01374
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01374
    }
    com_01374.onclick = togg01374;
    list_01374.onclick = togg01374;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01375 = data[374];
    
    /*Récupere les données que je veut de la Commune */
    name_01375 = rows01375.Libellé_géographique;
    Pop_01375 = rows01375.Population_en_2017;
    Pop_017_01375 = rows01375.Pop_017_ans_2017;
    Pop_mediane_vote_01375 = rows01375.Popu_possible_voté;
    nbr_inscrit_01375 = rows01375.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01375').textContent = name_01375;
    
    let com_01375 = document.getElementById("f-path-01436");
    let list_01375 = document.getElementById("list_01375");


    function togg01375() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01375-01').classList.remove('visible')
        document.querySelector('#polar-chart_01375-01').classList.remove('visible')
        document.querySelector('#polar-chart_01375-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01375').classList.remove('visible')
        document.querySelector('#f-path-01436').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01375
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01375
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01375
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01375
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01375
    }
    com_01375.onclick = togg01375;
    list_01375.onclick = togg01375;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01376 = data[375];
    
    /*Récupere les données que je veut de la Commune */
    name_01376 = rows01376.Libellé_géographique;
    Pop_01376 = rows01376.Population_en_2017;
    Pop_017_01376 = rows01376.Pop_017_ans_2017;
    Pop_mediane_vote_01376 = rows01376.Popu_possible_voté;
    nbr_inscrit_01376 = rows01376.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01376').textContent = name_01376;
    
    let com_01376 = document.getElementById("f-path-01437");
    let list_01376 = document.getElementById("list_01376");


    function togg01376() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01376-01').classList.remove('visible')
        document.querySelector('#polar-chart_01376-01').classList.remove('visible')
        document.querySelector('#polar-chart_01376-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01376').classList.remove('visible')
        document.querySelector('#f-path-01437').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01376
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01376
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01376
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01376
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01376
    }
    com_01376.onclick = togg01376;
    list_01376.onclick = togg01376;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01377 = data[376];
    
    /*Récupere les données que je veut de la Commune */
    name_01377 = rows01377.Libellé_géographique;
    Pop_01377 = rows01377.Population_en_2017;
    Pop_017_01377 = rows01377.Pop_017_ans_2017;
    Pop_mediane_vote_01377 = rows01377.Popu_possible_voté;
    nbr_inscrit_01377 = rows01377.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01377').textContent = name_01377;
    
    let com_01377 = document.getElementById("f-path-01439");
    let list_01377 = document.getElementById("list_01377");


    function togg01377() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01377-01').classList.remove('visible')
        document.querySelector('#polar-chart_01377-01').classList.remove('visible')
        document.querySelector('#polar-chart_01377-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01377').classList.remove('visible')
        document.querySelector('#f-path-01439').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01377
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01377
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01377
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01377
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01377
    }
    com_01377.onclick = togg01377;
    list_01377.onclick = togg01377;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01378 = data[377];
    
    /*Récupere les données que je veut de la Commune */
    name_01378 = rows01378.Libellé_géographique;
    Pop_01378 = rows01378.Population_en_2017;
    Pop_017_01378 = rows01378.Pop_017_ans_2017;
    Pop_mediane_vote_01378 = rows01378.Popu_possible_voté;
    nbr_inscrit_01378 = rows01378.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01378').textContent = name_01378;
    
    let com_01378 = document.getElementById("f-path-01439");
    let list_01378 = document.getElementById("list_01378");


    function togg01378() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01378-01').classList.remove('visible')
        document.querySelector('#polar-chart_01378-01').classList.remove('visible')
        document.querySelector('#polar-chart_01378-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01378').classList.remove('visible')
        document.querySelector('#f-path-01439').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01378
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01378
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01378
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01378
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01378
    }
    com_01378.onclick = togg01378;
    list_01378.onclick = togg01378;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01379 = data[378];
    
    /*Récupere les données que je veut de la Commune */
    name_01379 = rows01379.Libellé_géographique;
    Pop_01379 = rows01379.Population_en_2017;
    Pop_017_01379 = rows01379.Pop_017_ans_2017;
    Pop_mediane_vote_01379 = rows01379.Popu_possible_voté;
    nbr_inscrit_01379 = rows01379.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01379').textContent = name_01379;
    
    let com_01379 = document.getElementById("f-path-01441");
    let list_01379 = document.getElementById("list_01379");


    function togg01379() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01379-01').classList.remove('visible')
        document.querySelector('#polar-chart_01379-01').classList.remove('visible')
        document.querySelector('#polar-chart_01379-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01379').classList.remove('visible')
        document.querySelector('#f-path-01441').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01379
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01379
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01379
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01379
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01379
    }
    com_01379.onclick = togg01379;
    list_01379.onclick = togg01379;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01380 = data[379];
    
    /*Récupere les données que je veut de la Commune */
    name_01380 = rows01380.Libellé_géographique;
    Pop_01380 = rows01380.Population_en_2017;
    Pop_017_01380 = rows01380.Pop_017_ans_2017;
    Pop_mediane_vote_01380 = rows01380.Popu_possible_voté;
    nbr_inscrit_01380 = rows01380.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01380').textContent = name_01380;
    
    let com_01380 = document.getElementById("f-path-01443");
    let list_01380 = document.getElementById("list_01380");


    function togg01380() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01380-01').classList.remove('visible')
        document.querySelector('#polar-chart_01380-01').classList.remove('visible')
        document.querySelector('#polar-chart_01380-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01380').classList.remove('visible')
        document.querySelector('#f-path-01443').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01380
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01380
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01380
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01380
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01380
    }
    com_01380.onclick = togg01380;
    list_01380.onclick = togg01380;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01381 = data[380];
    
    /*Récupere les données que je veut de la Commune */
    name_01381 = rows01381.Libellé_géographique;
    Pop_01381 = rows01381.Population_en_2017;
    Pop_017_01381 = rows01381.Pop_017_ans_2017;
    Pop_mediane_vote_01381 = rows01381.Popu_possible_voté;
    nbr_inscrit_01381 = rows01381.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01381').textContent = name_01381;
    
    let com_01381 = document.getElementById("f-path-01444");
    let list_01381 = document.getElementById("list_01381");


    function togg01381() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01381-01').classList.remove('visible')
        document.querySelector('#polar-chart_01381-01').classList.remove('visible')
        document.querySelector('#polar-chart_01381-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01381').classList.remove('visible')
        document.querySelector('#f-path-01444').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01381
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01381
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01381
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01381
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01381
    }
    com_01381.onclick = togg01381;
    list_01381.onclick = togg01381;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01382 = data[381];
    
    /*Récupere les données que je veut de la Commune */
    name_01382 = rows01382.Libellé_géographique;
    Pop_01382 = rows01382.Population_en_2017;
    Pop_017_01382 = rows01382.Pop_017_ans_2017;
    Pop_mediane_vote_01382 = rows01382.Popu_possible_voté;
    nbr_inscrit_01382 = rows01382.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01382').textContent = name_01382;
    
    let com_01382 = document.getElementById("f-path-01445");
    let list_01382 = document.getElementById("list_01382");


    function togg01382() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01382-01').classList.remove('visible')
        document.querySelector('#polar-chart_01382-01').classList.remove('visible')
        document.querySelector('#polar-chart_01382-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01382').classList.remove('visible')
        document.querySelector('#f-path-01445').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01382
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01382
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01382
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01382
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01382
    }
    com_01382.onclick = togg01382;
    list_01382.onclick = togg01382;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01383 = data[382];
    
    /*Récupere les données que je veut de la Commune */
    name_01383 = rows01383.Libellé_géographique;
    Pop_01383 = rows01383.Population_en_2017;
    Pop_017_01383 = rows01383.Pop_017_ans_2017;
    Pop_mediane_vote_01383 = rows01383.Popu_possible_voté;
    nbr_inscrit_01383 = rows01383.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01383').textContent = name_01383;
    
    let com_01383 = document.getElementById("f-path-01446");
    let list_01383 = document.getElementById("list_01383");


    function togg01383() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01383-01').classList.remove('visible')
        document.querySelector('#polar-chart_01383-01').classList.remove('visible')
        document.querySelector('#polar-chart_01383-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01383').classList.remove('visible')
        document.querySelector('#f-path-01446').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01383
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01383
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01383
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01383
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01383
    }
    com_01383.onclick = togg01383;
    list_01383.onclick = togg01383;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01384 = data[383];
    
    /*Récupere les données que je veut de la Commune */
    name_01384 = rows01384.Libellé_géographique;
    Pop_01384 = rows01384.Population_en_2017;
    Pop_017_01384 = rows01384.Pop_017_ans_2017;
    Pop_mediane_vote_01384 = rows01384.Popu_possible_voté;
    nbr_inscrit_01384 = rows01384.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01384').textContent = name_01384;
    
    let com_01384 = document.getElementById("f-path-01447");
    let list_01384 = document.getElementById("list_01384");


    function togg01384() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01384-01').classList.remove('visible')
        document.querySelector('#polar-chart_01384-01').classList.remove('visible')
        document.querySelector('#polar-chart_01384-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01384').classList.remove('visible')
        document.querySelector('#f-path-01447').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01384
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01384
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01384
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01384
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01384
    }
    com_01384.onclick = togg01384;
    list_01384.onclick = togg01384;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01385 = data[384];
    
    /*Récupere les données que je veut de la Commune */
    name_01385 = rows01385.Libellé_géographique;
    Pop_01385 = rows01385.Population_en_2017;
    Pop_017_01385 = rows01385.Pop_017_ans_2017;
    Pop_mediane_vote_01385 = rows01385.Popu_possible_voté;
    nbr_inscrit_01385 = rows01385.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01385').textContent = name_01385;
    
    let com_01385 = document.getElementById("f-path-01448");
    let list_01385 = document.getElementById("list_01385");


    function togg01385() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01385-01').classList.remove('visible')
        document.querySelector('#polar-chart_01385-01').classList.remove('visible')
        document.querySelector('#polar-chart_01385-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01385').classList.remove('visible')
        document.querySelector('#f-path-01448').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01385
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01385
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01385
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01385
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01385
    }
    com_01385.onclick = togg01385;
    list_01385.onclick = togg01385;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01386 = data[385];
    
    /*Récupere les données que je veut de la Commune */
    name_01386 = rows01386.Libellé_géographique;
    Pop_01386 = rows01386.Population_en_2017;
    Pop_017_01386 = rows01386.Pop_017_ans_2017;
    Pop_mediane_vote_01386 = rows01386.Popu_possible_voté;
    nbr_inscrit_01386 = rows01386.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01386').textContent = name_01386;
    
    let com_01386 = document.getElementById("f-path-01449");
    let list_01386 = document.getElementById("list_01386");


    function togg01386() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01386-01').classList.remove('visible')
        document.querySelector('#polar-chart_01386-01').classList.remove('visible')
        document.querySelector('#polar-chart_01386-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01386').classList.remove('visible')
        document.querySelector('#f-path-01449').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01386
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01386
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01386
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01386
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01386
    }
    com_01386.onclick = togg01386;
    list_01386.onclick = togg01386;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01387 = data[386];
    
    /*Récupere les données que je veut de la Commune */
    name_01387 = rows01387.Libellé_géographique;
    Pop_01387 = rows01387.Population_en_2017;
    Pop_017_01387 = rows01387.Pop_017_ans_2017;
    Pop_mediane_vote_01387 = rows01387.Popu_possible_voté;
    nbr_inscrit_01387 = rows01387.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01387').textContent = name_01387;
    
    let com_01387 = document.getElementById("f-path-01450");
    let list_01387 = document.getElementById("list_01387");


    function togg01387() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01387-01').classList.remove('visible')
        document.querySelector('#polar-chart_01387-01').classList.remove('visible')
        document.querySelector('#polar-chart_01387-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01387').classList.remove('visible')
        document.querySelector('#f-path-01450').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01387
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01387
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01387
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01387
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01387
    }
    com_01387.onclick = togg01387;
    list_01387.onclick = togg01387;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01388 = data[387];
    
    /*Récupere les données que je veut de la Commune */
    name_01388 = rows01388.Libellé_géographique;
    Pop_01388 = rows01388.Population_en_2017;
    Pop_017_01388 = rows01388.Pop_017_ans_2017;
    Pop_mediane_vote_01388 = rows01388.Popu_possible_voté;
    nbr_inscrit_01388 = rows01388.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01388').textContent = name_01388;
    
    let com_01388 = document.getElementById("f-path-01451");
    let list_01388 = document.getElementById("list_01388");


    function togg01388() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01388-01').classList.remove('visible')
        document.querySelector('#polar-chart_01388-01').classList.remove('visible')
        document.querySelector('#polar-chart_01388-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01388').classList.remove('visible')
        document.querySelector('#f-path-01451').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01388
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01388
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01388
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01388
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01388
    }
    com_01388.onclick = togg01388;
    list_01388.onclick = togg01388;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01389 = data[388];
    
    /*Récupere les données que je veut de la Commune */
    name_01389 = rows01389.Libellé_géographique;
    Pop_01389 = rows01389.Population_en_2017;
    Pop_017_01389 = rows01389.Pop_017_ans_2017;
    Pop_mediane_vote_01389 = rows01389.Popu_possible_voté;
    nbr_inscrit_01389 = rows01389.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01389').textContent = name_01389;
    
    let com_01389 = document.getElementById("f-path-01452");
    let list_01389 = document.getElementById("list_01389");


    function togg01389() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01389-01').classList.remove('visible')
        document.querySelector('#polar-chart_01389-01').classList.remove('visible')
        document.querySelector('#polar-chart_01389-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01389').classList.remove('visible')
        document.querySelector('#f-path-01452').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01389
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01389
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01389
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01389
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01389
    }
    com_01389.onclick = togg01389;
    list_01389.onclick = togg01389;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01390 = data[389];
    
    /*Récupere les données que je veut de la Commune */
    name_01390 = rows01390.Libellé_géographique;
    Pop_01390 = rows01390.Population_en_2017;
    Pop_017_01390 = rows01390.Pop_017_ans_2017;
    Pop_mediane_vote_01390 = rows01390.Popu_possible_voté;
    nbr_inscrit_01390 = rows01390.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01390').textContent = name_01390;
    
    let com_01390 = document.getElementById("f-path-01453");
    let list_01390 = document.getElementById("list_01390");


    function togg01390() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01390-01').classList.remove('visible')
        document.querySelector('#polar-chart_01390-01').classList.remove('visible')
        document.querySelector('#polar-chart_01390-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01390').classList.remove('visible')
        document.querySelector('#f-path-01453').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01390
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01390
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01390
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01390
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01390
    }
    com_01390.onclick = togg01390;
    list_01390.onclick = togg01390;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01391 = data[390];
    
    /*Récupere les données que je veut de la Commune */
    name_01391 = rows01391.Libellé_géographique;
    Pop_01391 = rows01391.Population_en_2017;
    Pop_017_01391 = rows01391.Pop_017_ans_2017;
    Pop_mediane_vote_01391 = rows01391.Popu_possible_voté;
    nbr_inscrit_01391 = rows01391.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01391').textContent = name_01391;
    
    let com_01391 = document.getElementById("f-path-01454");
    let list_01391 = document.getElementById("list_01391");


    function togg01391() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01391-01').classList.remove('visible')
        document.querySelector('#polar-chart_01391-01').classList.remove('visible')
        document.querySelector('#polar-chart_01391-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01391').classList.remove('visible')
        document.querySelector('#f-path-01454').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01391
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01391
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01391
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01391
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01391
    }
    com_01391.onclick = togg01391;
    list_01391.onclick = togg01391;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01392 = data[391];
    
    /*Récupere les données que je veut de la Commune */
    name_01392 = rows01392.Libellé_géographique;
    Pop_01392 = rows01392.Population_en_2017;
    Pop_017_01392 = rows01392.Pop_017_ans_2017;
    Pop_mediane_vote_01392 = rows01392.Popu_possible_voté;
    nbr_inscrit_01392 = rows01392.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01392').textContent = name_01392;
    
    let com_01392 = document.getElementById("f-path-01456");
    let list_01392 = document.getElementById("list_01392");


    function togg01392() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01392-01').classList.remove('visible')
        document.querySelector('#polar-chart_01392-01').classList.remove('visible')
        document.querySelector('#polar-chart_01392-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01392').classList.remove('visible')
        document.querySelector('#f-path-01456').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01392
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01392
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01392
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01392
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01392
    }
    com_01392.onclick = togg01392;
    list_01392.onclick = togg01392;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows01393 = data[392];
    
    /*Récupere les données que je veut de la Commune */
    name_01393 = rows01393.Libellé_géographique;
    Pop_01393 = rows01393.Population_en_2017;
    Pop_017_01393 = rows01393.Pop_017_ans_2017;
    Pop_mediane_vote_01393 = rows01393.Popu_possible_voté;
    nbr_inscrit_01393 = rows01393.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_01393').textContent = name_01393;
    
    let com_01393 = document.getElementById("f-path-01457");
    let list_01393 = document.getElementById("list_01393");


    function togg01393() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_01393-01').classList.remove('visible')
        document.querySelector('#polar-chart_01393-01').classList.remove('visible')
        document.querySelector('#polar-chart_01393-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_01393').classList.remove('visible')
        document.querySelector('#f-path-01457').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_01393
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_01393
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_01393
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_01393
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_01393
    }
    com_01393.onclick = togg01393;
    list_01393.onclick = togg01393;


}
DataJSON();

