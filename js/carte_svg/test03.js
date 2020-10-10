/************************************************************************************* */
    /************************************************************************************* */
    const rows02700 = data[699];

    /*Récupere les données que je veut de la Commune */
    name_02700 = rows02700.Libellé_géographique;
    Pop_02700 = rows02700.Population_en_2017;
    Pop_017_02700 = rows02700.Pop_017_ans_2017;
    Pop_mediane_vote_02700 = rows02700.Popu_possible_voté;
    nbr_inscrit_02700 = rows02700.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02700').textContent = name_02700;
   
    let com_02700 = document.getElementById("f-path-02700");
    let list_02700 = document.getElementById("list_02700");


    function togg02700() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02700-01').classList.remove('visible')
        document.querySelector('#polar-chart_02700-01').classList.remove('visible')
        document.querySelector('#polar-chart_02700-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02700').classList.remove('visible')
        document.querySelector('#f-path-02700').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02700
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02700
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02700
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02700
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02700
    }
    com_02700.onclick = togg02700;
    list_02700.onclick = togg02700;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02701 = data[700];
    /*Récupere les données que je veut de la Commune */
    name_02701 = rows02701.Libellé_géographique;
    Pop_02701 = rows02701.Population_en_2017;
    Pop_017_02701 = rows02702.Pop_017_ans_2017;
    Pop_mediane_vote_02701 = rows02701.Popu_possible_voté;
    nbr_inscrit_02701 = rows02701.Inscrits;
    /*Pose dans le Menu*/
    document.querySelector('#list_02701').textContent = name_02701;
/*--------------------------------------------------------------------------*/
    var body = document.querySelector('#body')
    var path = document.querySelector('#map01')
    /******************************************************************** */
    let com_02701 = document.getElementById("f-path-02701");
    let list_02701 = document.getElementById("list_02701");
    function togg02701() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02701-01').classList.remove('visible')
        document.querySelector('#polar-chart_02701-01').classList.remove('visible')
        document.querySelector('#polar-chart_02701-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02701').classList.remove('visible')
        document.querySelector('#f-path-02701').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02701
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02701
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02701
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02701
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02701
    }
    com_02701.onclick = togg02701;
    list_02701.onclick = togg02701;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02702 = data[701];
    /*Récupere les données que je veut de la Commune */
    name_02702 = rows02702.Libellé_géographique;
    Pop_02702 = rows02702.Population_en_2017;
    Pop_017_02702 = rows02702.Pop_017_ans_2017;
    Pop_mediane_vote_02702 = rows02702.Popu_possible_voté;
    nbr_inscrit_02702 = rows02702.Inscrits;  
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02702').textContent = name_02702;
/*--------------------------------------------------------------------------*/
    let com_02702 = document.getElementById("f-path-02702");
    let list_02702 = document.getElementById("list_02702");
    /******************************************************************** */
    function togg02702() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02702-01').classList.remove('visible')
        document.querySelector('#polar-chart_02702-01').classList.remove('visible')
        document.querySelector('#polar-chart_02702-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02702').classList.remove('visible')
        document.querySelector('#f-path-02702').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02702;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02702
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02702
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02702
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02702
    }
    com_02702.onclick = togg02702;
    list_02702.onclick = togg02702;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02703 = data[702];
    /*Récupere les données que je veut de la Commune */
    name_02703 = rows02703.Libellé_géographique;
    Pop_02703 = rows02703.Population_en_2017;
    Pop_017_02703 = rows02703.Pop_017_ans_2017;
    Pop_mediane_vote_02703 = rows02703.Popu_possible_voté;
    nbr_inscrit_02703 = rows02703.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02703').textContent = name_02703;
    let com_02703 = document.getElementById("f-path-02703");
    let list_02703 = document.getElementById("list_02703");
    function togg02703() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02703-01').classList.remove('visible')
        document.querySelector('#polar-chart_02703-01').classList.remove('visible')
        document.querySelector('#polar-chart_02703-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02703').classList.remove('visible')
        document.querySelector('#f-path-02703').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02703;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02703
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02703
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02703
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02703
    }
    com_02703.onclick = togg02703;
    list_02703.onclick = togg02703;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02704 = data[703];
    /*Récupere les données que je veut de la Commune */
    name_02704 = rows02704.Libellé_géographique;
    Pop_02704 = rows02704.Population_en_2017;
    Pop_017_02704 = rows02704.Pop_017_ans_2017;
    Pop_mediane_vote_02704 = rows02704.Popu_possible_voté;
    nbr_inscrit_02704 = rows02704.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02704').textContent = name_02704;
    let com_02704 = document.getElementById("f-path-02704");
    let list_02704 = document.getElementById("list_02704");
    function togg02704() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02704-01').classList.remove('visible')
        document.querySelector('#polar-chart_02704-01').classList.remove('visible')
        document.querySelector('#polar-chart_02704-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02704').classList.remove('visible')
        document.querySelector('#f-path-02704').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02704;
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02704
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02704
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02704
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02704
    }
    com_02704.onclick = togg02704;
    list_02704.onclick = togg02704;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02705 = data[704];
    /*Récupere les données que je veut de la Commune */
    name_02705 = rows02705.Libellé_géographique;
    Pop_02705 = rows02705.Population_en_2017;
    Pop_017_02705 = rows02705.Pop_017_ans_2017;
    Pop_mediane_vote_02705 = rows02705.Popu_possible_voté;
    nbr_inscrit_02705 = rows02705.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02705').textContent = name_02705;
    let com_02705 = document.getElementById("f-path-02705");
    let list_02705 = document.getElementById("list_02705");
    function togg02705() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02705-01').classList.remove('visible')
        document.querySelector('#polar-chart_02705-01').classList.remove('visible')
        document.querySelector('#polar-chart_02705-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02705').classList.remove('visible')
        document.querySelector('#f-path-02705').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02705
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02705
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02705
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02705
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02705
    }
    com_02705.onclick = togg02705;
    list_02705.onclick = togg02705;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02706 = data[705];
    /*Récupere les données que je veut de la Commune */
    name_02706 = rows02706.Libellé_géographique;
    Pop_02706 = rows02706.Population_en_2017;
    Pop_017_02706 = rows02706.Pop_017_ans_2017;
    Pop_mediane_vote_02706 = rows02706.Popu_possible_voté;
    nbr_inscrit_02706 = rows02706.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02706').textContent = name_02706;
    let com_02706 = document.getElementById("f-path-02706");
    let list_02706 = document.getElementById("list_02706");
    function togg02706() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02706-01').classList.remove('visible')
        document.querySelector('#polar-chart_02706-01').classList.remove('visible')
        document.querySelector('#polar-chart_02706-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02706').classList.remove('visible')
        document.querySelector('#f-path-02706').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02706
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02706
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02706
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02706
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02706
    }
    com_02706.onclick = togg02706;
    list_02706.onclick = togg02706;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02707 = data[706];
    /*Récupere les données que je veut de la Commune */
    name_02707 = rows02707.Libellé_géographique;
    Pop_02707 = rows02707.Population_en_2017;
    Pop_017_02707 = rows02707.Pop_017_ans_2017;
    Pop_mediane_vote_02707 = rows02707.Popu_possible_voté;
    nbr_inscrit_02707 = rows02707.Inscrits;
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02707').textContent = name_02707; 
    let com_02707 = document.getElementById("f-path-02707");
    let list_02707 = document.getElementById("list_02707");
    function togg02707() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02707-01').classList.remove('visible')
        document.querySelector('#polar-chart_02707-01').classList.remove('visible')
        document.querySelector('#polar-chart_02707-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02707').classList.remove('visible')
        document.querySelector('#f-path-02707').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02707
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02707
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02707
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02707
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02707
    }
    com_02707.onclick = togg02707;
    list_02707.onclick = togg02707;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02708 = data[707];
    
    /*Récupere les données que je veut de la Commune */
    name_02708 = rows02708.Libellé_géographique;
    Pop_02708 = rows02708.Population_en_2017;
    Pop_017_02708 = rows02708.Pop_017_ans_2017;
    Pop_mediane_vote_02708 = rows02708.Popu_possible_voté;
    nbr_inscrit_02708 = rows02708.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02708').textContent = name_02708;
   
    let com_02708 = document.getElementById("f-path-02708");
    let list_02708 = document.getElementById("list_02708");


    function togg02708() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02708-01').classList.remove('visible')
        document.querySelector('#polar-chart_02708-01').classList.remove('visible')
        document.querySelector('#polar-chart_02708-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02708').classList.remove('visible')
        document.querySelector('#f-path-02708').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02708
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02708
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02708
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02708
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02708
    }
    com_02708.onclick = togg02708;
    list_02708.onclick = togg02708;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02709 = data[708];
    
    /*Récupere les données que je veut de la Commune */
    name_02709 = rows02709.Libellé_géographique;
    Pop_02709 = rows02709.Population_en_2017;
    Pop_017_02709 = rows02709.Pop_017_ans_2017;
    Pop_mediane_vote_02709 = rows02709.Popu_possible_voté;
    nbr_inscrit_02709 = rows02709.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02709').textContent = name_02709;

    let com_02709 = document.getElementById("f-path-02709");
    let list_02709 = document.getElementById("list_02709");


    function togg02709() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02709-01').classList.remove('visible')
        document.querySelector('#polar-chart_02709-01').classList.remove('visible')
        document.querySelector('#polar-chart_02709-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02709').classList.remove('visible')
        document.querySelector('#f-path-02709').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02709
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02709
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02709
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02709
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02709
    }
    com_02709.onclick = togg02709;
    list_02709.onclick = togg02709;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02710 = data[709];
 
    /*Récupere les données que je veut de la Commune */
    name_02710 = rows02710.Libellé_géographique;
    Pop_02710 = rows02710.Population_en_2017;
    Pop_017_02710 = rows02710.Pop_017_ans_2017;
    Pop_mediane_vote_02710 = rows02710.Popu_possible_voté;
    nbr_inscrit_02710 = rows02710.Inscrits;
    
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02710').textContent = name_02710;

    let com_02710 = document.getElementById("f-path-02710");
    let list_02710 = document.getElementById("list_02710");


    function togg02710() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02710-01').classList.remove('visible')
        document.querySelector('#polar-chart_02710-01').classList.remove('visible')
        document.querySelector('#polar-chart_02710-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02710').classList.remove('visible')
        document.querySelector('#f-path-02710').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02710
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02710
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02710
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02710
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02710
    }
    com_02710.onclick = togg02710;
    list_02710.onclick = togg02710;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02711 = data[710];

    /*Récupere les données que je veut de la Commune */
    name_02711 = rows02711.Libellé_géographique;
    Pop_02711 = rows02711.Population_en_2017;
    Pop_017_02711 = rows02711.Pop_017_ans_2017;
    Pop_mediane_vote_02711 = rows02711.Popu_possible_voté;
    nbr_inscrit_02711 = rows02711.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02711').textContent = name_02711;
   
    let com_02711 = document.getElementById("f-path-02711");
    let list_02711 = document.getElementById("list_02711");


    function togg02711() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02711-01').classList.remove('visible')
        document.querySelector('#polar-chart_02711-01').classList.remove('visible')
        document.querySelector('#polar-chart_02711-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02711').classList.remove('visible')
        document.querySelector('#f-path-02711').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02711
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02711
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02711
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02711
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02711
    }
    com_02711.onclick = togg02711;
    list_02711.onclick = togg02711;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02712 = data[711];

    /*Récupere les données que je veut de la Commune */
    name_02712 = rows02712.Libellé_géographique;
    Pop_02712 = rows02712.Population_en_2017;
    Pop_017_02712 = rows02712.Pop_017_ans_2017;
    Pop_mediane_vote_02712 = rows02712.Popu_possible_voté;
    nbr_inscrit_02712 = rows02712.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02712').textContent = name_02712;
   
    let com_02712 = document.getElementById("f-path-02712");
    let list_02712 = document.getElementById("list_02712");


    function togg02712() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02712-01').classList.remove('visible')
        document.querySelector('#polar-chart_02712-01').classList.remove('visible')
        document.querySelector('#polar-chart_02712-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02712').classList.remove('visible')
        document.querySelector('#f-path-02712').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02712
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02712
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02712
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02712
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02712
    }
    com_02712.onclick = togg02712;
    list_02712.onclick = togg02712;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02713 = data[712];

    /*Récupere les données que je veut de la Commune */
    name_02713 = rows02713.Libellé_géographique;
    Pop_02713 = rows02713.Population_en_2017;
    Pop_017_02713 = rows02713.Pop_017_ans_2017;
    Pop_mediane_vote_02713 = rows02713.Popu_possible_voté;
    nbr_inscrit_02713 = rows02713.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02713').textContent = name_02713;
   
    let com_02713 = document.getElementById("f-path-02713");
    let list_02713 = document.getElementById("list_02713");


    function togg02713() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02713-01').classList.remove('visible')
        document.querySelector('#polar-chart_02713-01').classList.remove('visible')
        document.querySelector('#polar-chart_02713-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02713').classList.remove('visible')
        document.querySelector('#f-path-02713').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02713
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02713
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02713
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02713
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02713
    }
    com_02713.onclick = togg02713;
    list_02713.onclick = togg02713;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02714 = data[713];

    /*Récupere les données que je veut de la Commune */
    name_02714 = rows02714.Libellé_géographique;
    Pop_02714 = rows02714.Population_en_2017;
    Pop_017_02714 = rows02714.Pop_017_ans_2017;
    Pop_mediane_vote_02714 = rows02714.Popu_possible_voté;
    nbr_inscrit_02714 = rows02714.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02714').textContent = name_02714;
   
    let com_02714 = document.getElementById("f-path-02714");
    let list_02714 = document.getElementById("list_02714");


    function togg02714() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02714-01').classList.remove('visible')
        document.querySelector('#polar-chart_02714-01').classList.remove('visible')
        document.querySelector('#polar-chart_02714-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02714').classList.remove('visible')
        document.querySelector('#f-path-02714').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02714
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02714
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02714
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02714
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02714
    }
    com_02714.onclick = togg02714;
    list_02714.onclick = togg02714;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02715 = data[714];

    /*Récupere les données que je veut de la Commune */
    name_02715 = rows02715.Libellé_géographique;
    Pop_02715 = rows02715.Population_en_2017;
    Pop_017_02715 = rows02715.Pop_017_ans_2017;
    Pop_mediane_vote_02715 = rows02715.Popu_possible_voté;
    nbr_inscrit_02715 = rows02715.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02715').textContent = name_02715;
   
    let com_02715 = document.getElementById("f-path-02715");
    let list_02715 = document.getElementById("list_02715");


    function togg02715() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02715-01').classList.remove('visible')
        document.querySelector('#polar-chart_02715-01').classList.remove('visible')
        document.querySelector('#polar-chart_02715-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02715').classList.remove('visible')
        document.querySelector('#f-path-02715').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02715
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02715
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02715
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02715
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02715
    }
    com_02715.onclick = togg02715;
    list_02715.onclick = togg02715;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02716 = data[715];

    /*Récupere les données que je veut de la Commune */
    name_02716 = rows02716.Libellé_géographique;
    Pop_02716 = rows02716.Population_en_2017;
    Pop_017_02716 = rows02716.Pop_017_ans_2017;
    Pop_mediane_vote_02716 = rows02716.Popu_possible_voté;
    nbr_inscrit_02716 = rows02716.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02716').textContent = name_02716;
   
    let com_02716 = document.getElementById("f-path-02716");
    let list_02716 = document.getElementById("list_02716");


    function togg02716() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02716-01').classList.remove('visible')
        document.querySelector('#polar-chart_02716-01').classList.remove('visible')
        document.querySelector('#polar-chart_02716-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02716').classList.remove('visible')
        document.querySelector('#f-path-02716').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02716
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02716
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02716
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02716
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02716
    }
    com_02716.onclick = togg02716;
    list_02716.onclick = togg02716;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02717 = data[716];

    /*Récupere les données que je veut de la Commune */
    name_02717 = rows02717.Libellé_géographique;
    Pop_02717 = rows02717.Population_en_2017;
    Pop_017_02717 = rows02717.Pop_017_ans_2017;
    Pop_mediane_vote_02717 = rows02717.Popu_possible_voté;
    nbr_inscrit_02717 = rows02717.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02717').textContent = name_02717;
   
    let com_02717 = document.getElementById("f-path-02717");
    let list_02717 = document.getElementById("list_02717");


    function togg02717() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02717-01').classList.remove('visible')
        document.querySelector('#polar-chart_02717-01').classList.remove('visible')
        document.querySelector('#polar-chart_02717-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02717').classList.remove('visible')
        document.querySelector('#f-path-02717').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02717
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02717
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02717
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02717
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02717
    }
    com_02717.onclick = togg02717;
    list_02717.onclick = togg02717;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02718 = data[717];

    /*Récupere les données que je veut de la Commune */
    name_02718 = rows02718.Libellé_géographique;
    Pop_02718 = rows02718.Population_en_2017;
    Pop_017_02718 = rows02718.Pop_017_ans_2017;
    Pop_mediane_vote_02718 = rows02717.Popu_possible_voté;
    nbr_inscrit_02718 = rows02718.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02718').textContent = name_02718;
   
    let com_02718 = document.getElementById("f-path-02718");
    let list_02718 = document.getElementById("list_02718");


    function togg02718() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02718-01').classList.remove('visible')
        document.querySelector('#polar-chart_02718-01').classList.remove('visible')
        document.querySelector('#polar-chart_02718-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02718').classList.remove('visible')
        document.querySelector('#f-path-02718').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02718
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02718
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02718
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02718
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02718
    }
    com_02718.onclick = togg02718;
    list_02718.onclick = togg02718;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02719 = data[718];

    /*Récupere les données que je veut de la Commune */
    name_02719 = rows02719.Libellé_géographique;
    Pop_02719 = rows02719.Population_en_2017;
    Pop_017_02719 = rows02719.Pop_017_ans_2017;
    Pop_mediane_vote_02719 = rows02719.Popu_possible_voté;
    nbr_inscrit_02719 = rows02719.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02719').textContent = name_02719;
   
    let com_02719 = document.getElementById("f-path-02719");
    let list_02719 = document.getElementById("list_02719");


    function togg02719() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02719-01').classList.remove('visible')
        document.querySelector('#polar-chart_02719-01').classList.remove('visible')
        document.querySelector('#polar-chart_02719-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02719').classList.remove('visible')
        document.querySelector('#f-path-02719').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02719
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02719
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02719
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02719
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02719
    }
    com_02719.onclick = togg02719;
    list_02719.onclick = togg02719;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02720 = data[719];

    /*Récupere les données que je veut de la Commune */
    name_02720 = rows02720.Libellé_géographique;
    Pop_02720 = rows02720.Population_en_2017;
    Pop_017_02720 = rows02720.Pop_017_ans_2017;
    Pop_mediane_vote_02720 = rows02720.Popu_possible_voté;
    nbr_inscrit_02720 = rows02720.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02720').textContent = name_02720;
   
    let com_02720 = document.getElementById("f-path-02720");
    let list_02720 = document.getElementById("list_02720");


    function togg02720() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02720-01').classList.remove('visible')
        document.querySelector('#polar-chart_02720-01').classList.remove('visible')
        document.querySelector('#polar-chart_02720-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02720').classList.remove('visible')
        document.querySelector('#f-path-02720').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02720
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02720
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02720
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02720
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02720
    }
    com_02720.onclick = togg02720;
    list_02720.onclick = togg02720;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02721 = data[720];

    /*Récupere les données que je veut de la Commune */
    name_02721 = rows02721.Libellé_géographique;
    Pop_02721 = rows02721.Population_en_2017;
    Pop_017_02721 = rows02721.Pop_017_ans_2017;
    Pop_mediane_vote_02721 = rows02721.Popu_possible_voté;
    nbr_inscrit_02721 = rows02721.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02721').textContent = name_02721;
   
    let com_02721 = document.getElementById("f-path-02721");
    let list_02721 = document.getElementById("list_02721");


    function togg02721() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02721-01').classList.remove('visible')
        document.querySelector('#polar-chart_02721-01').classList.remove('visible')
        document.querySelector('#polar-chart_02721-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02721').classList.remove('visible')
        document.querySelector('#f-path-02721').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02721
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02721
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02721
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02721
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02721
    }
    com_02721.onclick = togg02721;
    list_02721.onclick = togg02721;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02722 = data[721];

    /*Récupere les données que je veut de la Commune */
    name_02722 = rows02722.Libellé_géographique;
    Pop_02722 = rows02722.Population_en_2017;
    Pop_017_02722 = rows02722.Pop_017_ans_2017;
    Pop_mediane_vote_02722 = rows02722.Popu_possible_voté;
    nbr_inscrit_02722 = rows02722.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02722').textContent = name_02722;
   
    let com_02722 = document.getElementById("f-path-02722");
    let list_02722 = document.getElementById("list_02722");


    function togg02722() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02722-01').classList.remove('visible')
        document.querySelector('#polar-chart_02722-01').classList.remove('visible')
        document.querySelector('#polar-chart_02722-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02722').classList.remove('visible')
        document.querySelector('#f-path-02722').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02722
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02722
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02722
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02722
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02722
    }
    com_02722.onclick = togg02722;
    list_02722.onclick = togg02722;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02723 = data[722];

    /*Récupere les données que je veut de la Commune */
    name_02723 = rows02723.Libellé_géographique;
    Pop_02723 = rows02723.Population_en_2017;
    Pop_017_02723 = rows02723.Pop_017_ans_2017;
    Pop_mediane_vote_02723 = rows02723.Popu_possible_voté;
    nbr_inscrit_02723 = rows02723.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02723').textContent = name_02723;
   
    let com_02723 = document.getElementById("f-path-02723");
    let list_02723 = document.getElementById("list_02723");


    function togg02723() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02723-01').classList.remove('visible')
        document.querySelector('#polar-chart_02723-01').classList.remove('visible')
        document.querySelector('#polar-chart_02723-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02723').classList.remove('visible')
        document.querySelector('#f-path-02723').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02723
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02723
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02723
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02723
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02723
    }
    com_02723.onclick = togg02723;
    list_02723.onclick = togg02723;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02724 = data[723];

    /*Récupere les données que je veut de la Commune */
    name_02724 = rows02724.Libellé_géographique;
    Pop_02724 = rows02724.Population_en_2017;
    Pop_017_02724 = rows02724.Pop_017_ans_2017;
    Pop_mediane_vote_02724 = rows02724.Popu_possible_voté;
    nbr_inscrit_02724 = rows02724.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02724').textContent = name_02724;
   
    let com_02724 = document.getElementById("f-path-02724");
    let list_02724 = document.getElementById("list_02724");


    function togg02724() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02724-01').classList.remove('visible')
        document.querySelector('#polar-chart_02724-01').classList.remove('visible')
        document.querySelector('#polar-chart_02724-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02724').classList.remove('visible')
        document.querySelector('#f-path-02724').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02724
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02724
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02724
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02724
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02724
    }
    com_02724.onclick = togg02724;
    list_02724.onclick = togg02724;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02725 = data[724];

    /*Récupere les données que je veut de la Commune */
    name_02725 = rows02725.Libellé_géographique;
    Pop_02725 = rows02725.Population_en_2017;
    Pop_017_02725 = rows02725.Pop_017_ans_2017;
    Pop_mediane_vote_02725 = rows02725.Popu_possible_voté;
    nbr_inscrit_02725 = rows02725.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02725').textContent = name_02725;
   
    let com_02725 = document.getElementById("f-path-02725");
    let list_02725 = document.getElementById("list_02725");


    function togg02725() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02725-01').classList.remove('visible')
        document.querySelector('#polar-chart_02725-01').classList.remove('visible')
        document.querySelector('#polar-chart_02725-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02725').classList.remove('visible')
        document.querySelector('#f-path-02725').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02725
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02725
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02725
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02725
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02725
    }
    com_02725.onclick = togg02725;
    list_02725.onclick = togg02725;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02726 = data[725];

    /*Récupere les données que je veut de la Commune */
    name_02726 = rows02726.Libellé_géographique;
    Pop_02726 = rows02726.Population_en_2017;
    Pop_017_02726 = rows02726.Pop_017_ans_2017;
    Pop_mediane_vote_02726 = rows02726.Popu_possible_voté;
    nbr_inscrit_02726 = rows02726.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02726').textContent = name_02726;
   
    let com_02726 = document.getElementById("f-path-02726");
    let list_02726 = document.getElementById("list_02726");


    function togg02726() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02726-01').classList.remove('visible')
        document.querySelector('#polar-chart_02726-01').classList.remove('visible')
        document.querySelector('#polar-chart_02726-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02726').classList.remove('visible')
        document.querySelector('#f-path-02726').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02726
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02726
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02726
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02726
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02726
    }
    com_02726.onclick = togg02726;
    list_02726.onclick = togg02726;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02727 = data[726];

    /*Récupere les données que je veut de la Commune */
    name_02727 = rows02727.Libellé_géographique;
    Pop_02727 = rows02727.Population_en_2017;
    Pop_017_02727 = rows02727.Pop_017_ans_2017;
    Pop_mediane_vote_02727 = rows02727.Popu_possible_voté;
    nbr_inscrit_02727 = rows02727.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02727').textContent = name_02727;
   
    let com_02727 = document.getElementById("f-path-02727");
    let list_02727 = document.getElementById("list_02727");


    function togg02727() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02727-01').classList.remove('visible')
        document.querySelector('#polar-chart_02727-01').classList.remove('visible')
        document.querySelector('#polar-chart_02727-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02727').classList.remove('visible')
        document.querySelector('#f-path-02727').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02727
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02727
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02727
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02727
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02727
    }
    com_02727.onclick = togg02727;
    list_02727.onclick = togg02727;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02728 = data[727];

    /*Récupere les données que je veut de la Commune */
    name_02728 = rows02728.Libellé_géographique;
    Pop_02728 = rows02728.Population_en_2017;
    Pop_017_02728 = rows02728.Pop_017_ans_2017;
    Pop_mediane_vote_02728 = rows02728.Popu_possible_voté;
    nbr_inscrit_02728 = rows02728.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02728').textContent = name_02728;
   
    let com_02728 = document.getElementById("f-path-02728");
    let list_02728 = document.getElementById("list_02728");


    function togg02728() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02728-01').classList.remove('visible')
        document.querySelector('#polar-chart_02728-01').classList.remove('visible')
        document.querySelector('#polar-chart_02728-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02728').classList.remove('visible')
        document.querySelector('#f-path-02728').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02728
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02728
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02728
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02728
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02728
    }
    com_02728.onclick = togg02728;
    list_02728.onclick = togg02728;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02729 = data[728];

    /*Récupere les données que je veut de la Commune */
    name_02729 = rows02729.Libellé_géographique;
    Pop_02729 = rows02729.Population_en_2017;
    Pop_017_02729 = rows02729.Pop_017_ans_2017;
    Pop_mediane_vote_02729 = rows02729.Popu_possible_voté;
    nbr_inscrit_02729 = rows02729.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02729').textContent = name_02729;
   
    let com_02729 = document.getElementById("f-path-02729");
    let list_02729 = document.getElementById("list_02729");


    function togg02729() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02729-01').classList.remove('visible')
        document.querySelector('#polar-chart_02729-01').classList.remove('visible')
        document.querySelector('#polar-chart_02729-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02729').classList.remove('visible')
        document.querySelector('#f-path-02729').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02729
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02729
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02729
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02729
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02729
    }
    com_02729.onclick = togg02729;
    list_02729.onclick = togg02729;
     /************************************************************************************* */
    /************************************************************************************* */
    const rows02730 = data[729];

    /*Récupere les données que je veut de la Commune */
    name_02730 = rows02730.Libellé_géographique;
    Pop_02730 = rows02730.Population_en_2017;
    Pop_017_02730 = rows02730.Pop_017_ans_2017;
    Pop_mediane_vote_02730 = rows02730.Popu_possible_voté;
    nbr_inscrit_02730 = rows02730.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02730').textContent = name_02730;
   
    let com_02730 = document.getElementById("f-path-02730");
    let list_02730 = document.getElementById("list_02730");


    function togg02730() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02730-01').classList.remove('visible')
        document.querySelector('#polar-chart_02730-01').classList.remove('visible')
        document.querySelector('#polar-chart_02730-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02730').classList.remove('visible')
        document.querySelector('#f-path-02730').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02730
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02730
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02730
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02730
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02730
    }
    com_02730.onclick = togg02730;
    list_02730.onclick = togg02730;
     /************************************************************************************* */
    /************************************************************************************* */
    const rows02731 = data[730];

    /*Récupere les données que je veut de la Commune */
    name_02731 = rows02731.Libellé_géographique;
    Pop_02731 = rows02731.Population_en_2017;
    Pop_017_02731 = rows02731.Pop_017_ans_2017;
    Pop_mediane_vote_02731 = rows02731.Popu_possible_voté;
    nbr_inscrit_02731 = rows02731.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02731').textContent = name_02731;
   
    let com_02731 = document.getElementById("f-path-02731");
    let list_02731 = document.getElementById("list_02731");


    function togg02731() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02731-01').classList.remove('visible')
        document.querySelector('#polar-chart_02731-01').classList.remove('visible')
        document.querySelector('#polar-chart_02731-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02731').classList.remove('visible')
        document.querySelector('#f-path-02731').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02731
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02731
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02731
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02731
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02731
    }
    com_02731.onclick = togg02731;
    list_02731.onclick = togg02731;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02732 = data[731];

    /*Récupere les données que je veut de la Commune */
    name_02732 = rows02732.Libellé_géographique;
    Pop_02732 = rows02732.Population_en_2017;
    Pop_017_02732 = rows02732.Pop_017_ans_2017;
    Pop_mediane_vote_02732 = rows02732.Popu_possible_voté;
    nbr_inscrit_02732 = rows02732.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02732').textContent = name_02732;
   
    let com_02732 = document.getElementById("f-path-02732");
    let list_02732 = document.getElementById("list_02732");


    function togg02732() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02732-01').classList.remove('visible')
        document.querySelector('#polar-chart_02732-01').classList.remove('visible')
        document.querySelector('#polar-chart_02732-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02732').classList.remove('visible')
        document.querySelector('#f-path-02732').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02732
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02732
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02732
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02732
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02732
    }
    com_02732.onclick = togg02732;
    list_02732.onclick = togg02732;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02733 = data[732];

    /*Récupere les données que je veut de la Commune */
    name_02733 = rows02733.Libellé_géographique;
    Pop_02733 = rows02733.Population_en_2017;
    Pop_017_02733 = rows02733.Pop_017_ans_2017;
    Pop_mediane_vote_02733 = rows02733.Popu_possible_voté;
    nbr_inscrit_02733 = rows02733.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02733').textContent = name_02733;
   
    let com_02733 = document.getElementById("f-path-02733");
    let list_02733 = document.getElementById("list_02733");


    function togg02733() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02733-01').classList.remove('visible')
        document.querySelector('#polar-chart_02733-01').classList.remove('visible')
        document.querySelector('#polar-chart_02733-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02733').classList.remove('visible')
        document.querySelector('#f-path-02733').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02733
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02733
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02733
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02733
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02733
    }
    com_02733.onclick = togg02733;
    list_02733.onclick = togg02733;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02734 = data[733];

    /*Récupere les données que je veut de la Commune */
    name_02734 = rows02734.Libellé_géographique;
    Pop_02734 = rows02734.Population_en_2017;
    Pop_017_02734 = rows02734.Pop_017_ans_2017;
    Pop_mediane_vote_02734 = rows02734.Popu_possible_voté;
    nbr_inscrit_02734 = rows02734.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02734').textContent = name_02734;
   
    let com_02734 = document.getElementById("f-path-02734");
    let list_02734 = document.getElementById("list_02734");


    function togg02734() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02734-01').classList.remove('visible')
        document.querySelector('#polar-chart_02734-01').classList.remove('visible')
        document.querySelector('#polar-chart_02734-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02734').classList.remove('visible')
        document.querySelector('#f-path-02734').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02734
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02734
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02734
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02734
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02734
    }
    com_02734.onclick = togg02734;
    list_02734.onclick = togg02734;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02735 = data[734];

    /*Récupere les données que je veut de la Commune */
    name_02735 = rows02735.Libellé_géographique;
    Pop_02735 = rows02735.Population_en_2017;
    Pop_017_02735 = rows02735.Pop_017_ans_2017;
    Pop_mediane_vote_02735 = rows02735.Popu_possible_voté;
    nbr_inscrit_02735 = rows02735.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02735').textContent = name_02735;
   
    let com_02735 = document.getElementById("f-path-02735");
    let list_02735 = document.getElementById("list_02735");


    function togg02735() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02735-01').classList.remove('visible')
        document.querySelector('#polar-chart_02735-01').classList.remove('visible')
        document.querySelector('#polar-chart_02735-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02735').classList.remove('visible')
        document.querySelector('#f-path-02735').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02735
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02735
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02735
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02735
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02735
    }
    com_02735.onclick = togg02735;
    list_02735.onclick = togg02735;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02736 = data[735];

    /*Récupere les données que je veut de la Commune */
    name_02736 = rows02736.Libellé_géographique;
    Pop_02736 = rows02736.Population_en_2017;
    Pop_017_02736 = rows02736.Pop_017_ans_2017;
    Pop_mediane_vote_02736 = rows02736.Popu_possible_voté;
    nbr_inscrit_02736 = rows02736.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02736').textContent = name_02736;
   
    let com_02736 = document.getElementById("f-path-02736");
    let list_02736 = document.getElementById("list_02736");


    function togg02736() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02736-01').classList.remove('visible')
        document.querySelector('#polar-chart_02736-01').classList.remove('visible')
        document.querySelector('#polar-chart_02736-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02736').classList.remove('visible')
        document.querySelector('#f-path-02736').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02736
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02736
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02736
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02736
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02736
    }
    com_02736.onclick = togg02736;
    list_02736.onclick = togg02736;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02737 = data[736];

    /*Récupere les données que je veut de la Commune */
    name_02737 = rows02737.Libellé_géographique;
    Pop_02737 = rows02737.Population_en_2017;
    Pop_017_02737 = rows02737.Pop_017_ans_2017;
    Pop_mediane_vote_02737 = rows02737.Popu_possible_voté;
    nbr_inscrit_02737 = rows02737.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02737').textContent = name_02737;
   
    let com_02737 = document.getElementById("f-path-02737");
    let list_02737 = document.getElementById("list_02737");


    function togg02737() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02737-01').classList.remove('visible')
        document.querySelector('#polar-chart_02737-01').classList.remove('visible')
        document.querySelector('#polar-chart_02767-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02737').classList.remove('visible')
        document.querySelector('#f-path-02737').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02737
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02737
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02737
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02737
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02737
    }
    com_02737.onclick = togg02737;
    list_02737.onclick = togg02737;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02738 = data[737];

    /*Récupere les données que je veut de la Commune */
    name_02738 = rows02738.Libellé_géographique;
    Pop_02738 = rows02738.Population_en_2017;
    Pop_017_02738 = rows02738.Pop_017_ans_2017;
    Pop_mediane_vote_02738 = rows02738.Popu_possible_voté;
    nbr_inscrit_02738 = rows02738.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02738').textContent = name_02738;
   
    let com_02738 = document.getElementById("f-path-02738");
    let list_02738 = document.getElementById("list_02738");


    function togg02738() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02738-01').classList.remove('visible')
        document.querySelector('#polar-chart_02738-01').classList.remove('visible')
        document.querySelector('#polar-chart_02768-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02738').classList.remove('visible')
        document.querySelector('#f-path-02738').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02738
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02738
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02738
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02738
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02738
    }
    com_02738.onclick = togg02738;
    list_02738.onclick = togg02738;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02739 = data[738];

    /*Récupere les données que je veut de la Commune */
    name_02739 = rows02739.Libellé_géographique;
    Pop_02739 = rows02739.Population_en_2017;
    Pop_017_02739 = rows02739.Pop_017_ans_2017;
    Pop_mediane_vote_02739 = rows02739.Popu_possible_voté;
    nbr_inscrit_02739 = rows02739.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02739').textContent = name_02739;
   
    let com_02739 = document.getElementById("f-path-02739");
    let list_02739 = document.getElementById("list_02739");


    function togg02739() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02739-01').classList.remove('visible')
        document.querySelector('#polar-chart_02739-01').classList.remove('visible')
        document.querySelector('#polar-chart_02769-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02739').classList.remove('visible')
        document.querySelector('#f-path-02739').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02739
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02739
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02739
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02739
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02739
    }
    com_02739.onclick = togg02739;
    list_02739.onclick = togg02739;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02740 = data[739];

    /*Récupere les données que je veut de la Commune */
    name_02740 = rows02740.Libellé_géographique;
    Pop_02740 = rows02740.Population_en_2017;
    Pop_017_02740 = rows02740.Pop_017_ans_2017;
    Pop_mediane_vote_02740 = rows02740.Popu_possible_voté;
    nbr_inscrit_02740 = rows02740.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02740').textContent = name_02740;
   
    let com_02740 = document.getElementById("f-path-02740");
    let list_02740 = document.getElementById("list_02740");


    function togg02740() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02740-01').classList.remove('visible')
        document.querySelector('#polar-chart_02740-01').classList.remove('visible')
        document.querySelector('#polar-chart_02740-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02740').classList.remove('visible')
        document.querySelector('#f-path-02740').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02740
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02740
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02740
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02740
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02740
    }
    com_02740.onclick = togg02740;
    list_02740.onclick = togg02740;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02741 = data[740];

    /*Récupere les données que je veut de la Commune */
    name_02741 = rows02741.Libellé_géographique;
    Pop_02741 = rows02741.Population_en_2017;
    Pop_017_02741 = rows02741.Pop_017_ans_2017;
    Pop_mediane_vote_02741 = rows02741.Popu_possible_voté;
    nbr_inscrit_02741 = rows02741.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02741').textContent = name_02741;
   
    let com_02741 = document.getElementById("f-path-02741");
    let list_02741 = document.getElementById("list_02741");


    function togg02741() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02741-01').classList.remove('visible')
        document.querySelector('#polar-chart_02741-01').classList.remove('visible')
        document.querySelector('#polar-chart_02741-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02741').classList.remove('visible')
        document.querySelector('#f-path-02741').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02741
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02741
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02741
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02741
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02741
    }
    com_02741.onclick = togg02741;
    list_02741.onclick = togg02741;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02742 = data[741];

    /*Récupere les données que je veut de la Commune */
    name_02742 = rows02742.Libellé_géographique;
    Pop_02742 = rows02742.Population_en_2017;
    Pop_017_02742 = rows02742.Pop_017_ans_2017;
    Pop_mediane_vote_02742 = rows02742.Popu_possible_voté;
    nbr_inscrit_02742 = rows02742.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02742').textContent = name_02742;
   
    let com_02742 = document.getElementById("f-path-02742");
    let list_02742 = document.getElementById("list_02742");


    function togg02742() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02742-01').classList.remove('visible')
        document.querySelector('#polar-chart_02742-01').classList.remove('visible')
        document.querySelector('#polar-chart_02742-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02742').classList.remove('visible')
        document.querySelector('#f-path-02742').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02742
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02742
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02742
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02742
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02742
    }
    com_02742.onclick = togg02742;
    list_02742.onclick = togg02742;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02743 = data[742];

    /*Récupere les données que je veut de la Commune */
    name_02743 = rows02743.Libellé_géographique;
    Pop_02743 = rows02743.Population_en_2017;
    Pop_017_02743 = rows02743.Pop_017_ans_2017;
    Pop_mediane_vote_02743 = rows02743.Popu_possible_voté;
    nbr_inscrit_02743 = rows02743.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02743').textContent = name_02743;
   
    let com_02743 = document.getElementById("f-path-02743");
    let list_02743 = document.getElementById("list_02743");


    function togg02743() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02743-01').classList.remove('visible')
        document.querySelector('#polar-chart_02743-01').classList.remove('visible')
        document.querySelector('#polar-chart_02743-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02743').classList.remove('visible')
        document.querySelector('#f-path-02743').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02743
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02743
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02743
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02743
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02743
    }
    com_02743.onclick = togg02743;
    list_02743.onclick = togg02743;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02744 = data[743];

    /*Récupere les données que je veut de la Commune */
    name_02744 = rows02744.Libellé_géographique;
    Pop_02744 = rows02744.Population_en_2017;
    Pop_017_02744 = rows02744.Pop_017_ans_2017;
    Pop_mediane_vote_02744 = rows02744.Popu_possible_voté;
    nbr_inscrit_02744 = rows02744.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02744').textContent = name_02744;
   
    let com_02744 = document.getElementById("f-path-02744");
    let list_02744 = document.getElementById("list_02744");


    function togg02744() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02744-01').classList.remove('visible')
        document.querySelector('#polar-chart_02744-01').classList.remove('visible')
        document.querySelector('#polar-chart_02744-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02744').classList.remove('visible')
        document.querySelector('#f-path-02744').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02744
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02744
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02744
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02744
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02744
    }
    com_02744.onclick = togg02744;
    list_02744.onclick = togg02744;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02745 = data[744];

    /*Récupere les données que je veut de la Commune */
    name_02745 = rows02745.Libellé_géographique;
    Pop_02745 = rows02745.Population_en_2017;
    Pop_017_02745 = rows02745.Pop_017_ans_2017;
    Pop_mediane_vote_02745 = rows02745.Popu_possible_voté;
    nbr_inscrit_02745 = rows02745.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02745').textContent = name_02745;
   
    let com_02745 = document.getElementById("f-path-02745");
    let list_02745 = document.getElementById("list_02745");


    function togg02745() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02745-01').classList.remove('visible')
        document.querySelector('#polar-chart_02745-01').classList.remove('visible')
        document.querySelector('#polar-chart_02745-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02745').classList.remove('visible')
        document.querySelector('#f-path-02745').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02745
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02745
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02745
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02745
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02745
    }
    com_02745.onclick = togg02745;
    list_02745.onclick = togg02745;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02746 = data[745];

    /*Récupere les données que je veut de la Commune */
    name_02746 = rows02746.Libellé_géographique;
    Pop_02746 = rows02746.Population_en_2017;
    Pop_017_02746 = rows02746.Pop_017_ans_2017;
    Pop_mediane_vote_02746 = rows02746.Popu_possible_voté;
    nbr_inscrit_02746 = rows02746.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02746').textContent = name_02746;
   
    let com_02746 = document.getElementById("f-path-02746");
    let list_02746 = document.getElementById("list_02746");


    function togg02746() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02746-01').classList.remove('visible')
        document.querySelector('#polar-chart_02746-01').classList.remove('visible')
        document.querySelector('#polar-chart_02746-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02746').classList.remove('visible')
        document.querySelector('#f-path-02746').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02746
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02746
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02746
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02746
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02746
    }
    com_02746.onclick = togg02746;
    list_02746.onclick = togg02746;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02747 = data[746];

    /*Récupere les données que je veut de la Commune */
    name_02747 = rows02747.Libellé_géographique;
    Pop_02747 = rows02747.Population_en_2017;
    Pop_017_02747 = rows02747.Pop_017_ans_2017;
    Pop_mediane_vote_02747 = rows02747.Popu_possible_voté;
    nbr_inscrit_02747 = rows02747.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02747').textContent = name_02747;
   
    let com_02747 = document.getElementById("f-path-02747");
    let list_02747 = document.getElementById("list_02747");


    function togg02747() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02747-01').classList.remove('visible')
        document.querySelector('#polar-chart_02747-01').classList.remove('visible')
        document.querySelector('#polar-chart_02747-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02747').classList.remove('visible')
        document.querySelector('#f-path-02747').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02747
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02747
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02747
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02747
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02747
    }
    com_02747.onclick = togg02747;
    list_02747.onclick = togg02747;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02748 = data[747];

    /*Récupere les données que je veut de la Commune */
    name_02748 = rows02748.Libellé_géographique;
    Pop_02748 = rows02748.Population_en_2017;
    Pop_017_02748 = rows02748.Pop_017_ans_2017;
    Pop_mediane_vote_02748 = rows02748.Popu_possible_voté;
    nbr_inscrit_02748 = rows02748.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02748').textContent = name_02748;
   
    let com_02748 = document.getElementById("f-path-02748");
    let list_02748 = document.getElementById("list_02748");


    function togg02748() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02748-01').classList.remove('visible')
        document.querySelector('#polar-chart_02748-01').classList.remove('visible')
        document.querySelector('#polar-chart_02748-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02748').classList.remove('visible')
        document.querySelector('#f-path-02748').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02748
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02748
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02748
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02748
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02748
    }
    com_02748.onclick = togg02748;
    list_02748.onclick = togg02748;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02749 = data[748];

    /*Récupere les données que je veut de la Commune */
    name_02749 = rows02749.Libellé_géographique;
    Pop_02749 = rows02749.Population_en_2017;
    Pop_017_02749 = rows02749.Pop_017_ans_2017;
    Pop_mediane_vote_02749 = rows02749.Popu_possible_voté;
    nbr_inscrit_02749 = rows02749.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02749').textContent = name_02749;
   
    let com_02749 = document.getElementById("f-path-02749");
    let list_02749 = document.getElementById("list_02749");


    function togg02749() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02749-01').classList.remove('visible')
        document.querySelector('#polar-chart_02749-01').classList.remove('visible')
        document.querySelector('#polar-chart_02749-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02749').classList.remove('visible')
        document.querySelector('#f-path-02749').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02749
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02749
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02749
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02749
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02749
    }
    com_02749.onclick = togg02749;
    list_02749.onclick = togg02749;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02750 = data[749];

    /*Récupere les données que je veut de la Commune */
    name_02750 = rows02750.Libellé_géographique;
    Pop_02750 = rows02750.Population_en_2017;
    Pop_017_02750 = rows02750.Pop_017_ans_2017;
    Pop_mediane_vote_02750 = rows02750.Popu_possible_voté;
    nbr_inscrit_02750 = rows02750.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02750').textContent = name_02750;
   
    let com_02750 = document.getElementById("f-path-02750");
    let list_02750 = document.getElementById("list_02750");


    function togg02750() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02750-01').classList.remove('visible')
        document.querySelector('#polar-chart_02750-01').classList.remove('visible')
        document.querySelector('#polar-chart_02750-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02750').classList.remove('visible')
        document.querySelector('#f-path-02750').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02750
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02750
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02750
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02750
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02750
    }
    com_02750.onclick = togg02750;
    list_02750.onclick = togg02750;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02751 = data[750];

    /*Récupere les données que je veut de la Commune */
    name_02751 = rows02751.Libellé_géographique;
    Pop_02751 = rows02751.Population_en_2017;
    Pop_017_02751 = rows02751.Pop_017_ans_2017;
    Pop_mediane_vote_02751 = rows02751.Popu_possible_voté;
    nbr_inscrit_02751 = rows02751.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02751').textContent = name_02751;
   
    let com_02751 = document.getElementById("f-path-02751");
    let list_02751 = document.getElementById("list_02751");


    function togg02751() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02751-01').classList.remove('visible')
        document.querySelector('#polar-chart_02751-01').classList.remove('visible')
        document.querySelector('#polar-chart_02751-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02751').classList.remove('visible')
        document.querySelector('#f-path-02751').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02751
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02751
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02751
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02751
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02751
    }
    com_02751.onclick = togg02751;
    list_02751.onclick = togg02751;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02752 = data[751];

    /*Récupere les données que je veut de la Commune */
    name_02752 = rows02752.Libellé_géographique;
    Pop_02752 = rows02752.Population_en_2017;
    Pop_017_02752 = rows02752.Pop_017_ans_2017;
    Pop_mediane_vote_02752 = rows02752.Popu_possible_voté;
    nbr_inscrit_02752 = rows02752.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02752').textContent = name_02752;
   
    let com_02752 = document.getElementById("f-path-02752");
    let list_02752 = document.getElementById("list_02752");


    function togg02752() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02752-01').classList.remove('visible')
        document.querySelector('#polar-chart_02752-01').classList.remove('visible')
        document.querySelector('#polar-chart_02752-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02752').classList.remove('visible')
        document.querySelector('#f-path-02752').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02752
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02752
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02752
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02752
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02752
    }
    com_02752.onclick = togg02752;
    list_02752.onclick = togg02752;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02753 = data[752];

    /*Récupere les données que je veut de la Commune */
    name_02753 = rows02753.Libellé_géographique;
    Pop_02753 = rows02753.Population_en_2017;
    Pop_017_02753 = rows02753.Pop_017_ans_2017;
    Pop_mediane_vote_02753 = rows02753.Popu_possible_voté;
    nbr_inscrit_02753 = rows02753.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02753').textContent = name_02753;
   
    let com_02753 = document.getElementById("f-path-02753");
    let list_02753 = document.getElementById("list_02753");


    function togg02753() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02753-01').classList.remove('visible')
        document.querySelector('#polar-chart_02753-01').classList.remove('visible')
        document.querySelector('#polar-chart_02753-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02753').classList.remove('visible')
        document.querySelector('#f-path-02753').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02753
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02753
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02753
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02753
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02753
    }
    com_02753.onclick = togg02753;
    list_02753.onclick = togg02753;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02754 = data[753];

    /*Récupere les données que je veut de la Commune */
    name_02754 = rows02754.Libellé_géographique;
    Pop_02754 = rows02754.Population_en_2017;
    Pop_017_02754 = rows02754.Pop_017_ans_2017;
    Pop_mediane_vote_02754 = rows02754.Popu_possible_voté;
    nbr_inscrit_02754 = rows02754.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02754').textContent = name_02754;
   
    let com_02754 = document.getElementById("f-path-02754");
    let list_02754 = document.getElementById("list_02754");


    function togg02754() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02754-01').classList.remove('visible')
        document.querySelector('#polar-chart_02754-01').classList.remove('visible')
        document.querySelector('#polar-chart_02754-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02754').classList.remove('visible')
        document.querySelector('#f-path-02754').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02754
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02754
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02754
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02754
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02754
    }
    com_02754.onclick = togg02754;
    list_02754.onclick = togg02754;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02755 = data[754];

    /*Récupere les données que je veut de la Commune */
    name_02755 = rows02755.Libellé_géographique;
    Pop_02755 = rows02755.Population_en_2017;
    Pop_017_02755 = rows02755.Pop_017_ans_2017;
    Pop_mediane_vote_02755 = rows02755.Popu_possible_voté;
    nbr_inscrit_02755 = rows02755.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02755').textContent = name_02755;
   
    let com_02755 = document.getElementById("f-path-02755");
    let list_02755 = document.getElementById("list_02755");


    function togg02755() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02755-01').classList.remove('visible')
        document.querySelector('#polar-chart_02755-01').classList.remove('visible')
        document.querySelector('#polar-chart_02755-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02755').classList.remove('visible')
        document.querySelector('#f-path-02755').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02755
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02755
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02755
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02755
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02755
    }
    com_02755.onclick = togg02755;
    list_02755.onclick = togg02755;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02756 = data[755];

    /*Récupere les données que je veut de la Commune */
    name_02756 = rows02756.Libellé_géographique;
    Pop_02756 = rows02756.Population_en_2017;
    Pop_017_02756 = rows02756.Pop_017_ans_2017;
    Pop_mediane_vote_02756 = rows02756.Popu_possible_voté;
    nbr_inscrit_02756 = rows02756.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02756').textContent = name_02756;
   
    let com_02756 = document.getElementById("f-path-02756");
    let list_02756 = document.getElementById("list_02756");


    function togg02756() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02756-01').classList.remove('visible')
        document.querySelector('#polar-chart_02756-01').classList.remove('visible')
        document.querySelector('#polar-chart_02756-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02756').classList.remove('visible')
        document.querySelector('#f-path-02756').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02756
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02756
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02756
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02756
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02756
    }
    com_02756.onclick = togg02756;
    list_02756.onclick = togg02756;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02757 = data[756];

    /*Récupere les données que je veut de la Commune */
    name_02757 = rows02757.Libellé_géographique;
    Pop_02757 = rows02757.Population_en_2017;
    Pop_017_02757 = rows02757.Pop_017_ans_2017;
    Pop_mediane_vote_02757 = rows02757.Popu_possible_voté;
    nbr_inscrit_02757 = rows02757.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02757').textContent = name_02757;
   
    let com_02757 = document.getElementById("f-path-02757");
    let list_02757 = document.getElementById("list_02757");


    function togg02757() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02757-01').classList.remove('visible')
        document.querySelector('#polar-chart_02757-01').classList.remove('visible')
        document.querySelector('#polar-chart_02757-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02757').classList.remove('visible')
        document.querySelector('#f-path-02757').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02757
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02757
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02757
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02757
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02757
    }
    com_02757.onclick = togg02757;
    list_02757.onclick = togg02757;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02758 = data[757];

    /*Récupere les données que je veut de la Commune */
    name_02758 = rows02758.Libellé_géographique;
    Pop_02758 = rows02758.Population_en_2017;
    Pop_017_02758 = rows02758.Pop_017_ans_2017;
    Pop_mediane_vote_02758 = rows02758.Popu_possible_voté;
    nbr_inscrit_02758 = rows02758.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02758').textContent = name_02758;
   
    let com_02758 = document.getElementById("f-path-02758");
    let list_02758 = document.getElementById("list_02758");


    function togg02758() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02758-01').classList.remove('visible')
        document.querySelector('#polar-chart_02758-01').classList.remove('visible')
        document.querySelector('#polar-chart_02758-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02758').classList.remove('visible')
        document.querySelector('#f-path-02758').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02758
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02758
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02758
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02758
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02758
    }
    com_02758.onclick = togg02758;
    list_02758.onclick = togg02758;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02759 = data[758];

    /*Récupere les données que je veut de la Commune */
    name_02759 = rows02759.Libellé_géographique;
    Pop_02759 = rows02759.Population_en_2017;
    Pop_017_02759 = rows02759.Pop_017_ans_2017;
    Pop_mediane_vote_02759 = rows02759.Popu_possible_voté;
    nbr_inscrit_02759 = rows02759.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02759').textContent = name_02759;
   
    let com_02759 = document.getElementById("f-path-02759");
    let list_02759 = document.getElementById("list_02759");


    function togg02759() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02759-01').classList.remove('visible')
        document.querySelector('#polar-chart_02759-01').classList.remove('visible')
        document.querySelector('#polar-chart_02759-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02759').classList.remove('visible')
        document.querySelector('#f-path-02759').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02759
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02759
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02759
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02759
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02759
    }
    com_02759.onclick = togg02759;
    list_02759.onclick = togg02759;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02760 = data[759];

    /*Récupere les données que je veut de la Commune */
    name_02760 = rows02760.Libellé_géographique;
    Pop_02760 = rows02760.Population_en_2017;
    Pop_017_02760 = rows02760.Pop_017_ans_2017;
    Pop_mediane_vote_02760 = rows02760.Popu_possible_voté;
    nbr_inscrit_02760 = rows02760.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02760').textContent = name_02760;
   
    let com_02760 = document.getElementById("f-path-02760");
    let list_02760 = document.getElementById("list_02760");


    function togg02760() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02760-01').classList.remove('visible')
        document.querySelector('#polar-chart_02760-01').classList.remove('visible')
        document.querySelector('#polar-chart_02760-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02760').classList.remove('visible')
        document.querySelector('#f-path-02760').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02760
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02760
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02760
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02760
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02760
    }
    com_02760.onclick = togg02760;
    list_02760.onclick = togg02760;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02761 = data[760];

    /*Récupere les données que je veut de la Commune */
    name_02761 = rows02761.Libellé_géographique;
    Pop_02761 = rows02761.Population_en_2017;
    Pop_017_02761 = rows02761.Pop_017_ans_2017;
    Pop_mediane_vote_02761 = rows02761.Popu_possible_voté;
    nbr_inscrit_02761 = rows02761.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02761').textContent = name_02761;
   
    let com_02761 = document.getElementById("f-path-02761");
    let list_02761 = document.getElementById("list_02761");


    function togg02761() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02761-01').classList.remove('visible')
        document.querySelector('#polar-chart_02761-01').classList.remove('visible')
        document.querySelector('#polar-chart_02761-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02761').classList.remove('visible')
        document.querySelector('#f-path-02761').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02761
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02761
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02761
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02761
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02761
    }
    com_02761.onclick = togg02761;
    list_02761.onclick = togg02761;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02762 = data[761];

    /*Récupere les données que je veut de la Commune */
    name_02762 = rows02762.Libellé_géographique;
    Pop_02762 = rows02762.Population_en_2017;
    Pop_017_02762 = rows02762.Pop_017_ans_2017;
    Pop_mediane_vote_02762 = rows02762.Popu_possible_voté;
    nbr_inscrit_02762 = rows02762.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02762').textContent = name_02762;
   
    let com_02762 = document.getElementById("f-path-02762");
    let list_02762 = document.getElementById("list_02762");


    function togg02762() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02762-01').classList.remove('visible')
        document.querySelector('#polar-chart_02762-01').classList.remove('visible')
        document.querySelector('#polar-chart_02762-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02762').classList.remove('visible')
        document.querySelector('#f-path-02762').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02762
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02762
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02762
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02762
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02762
    }
    com_02762.onclick = togg02762;
    list_02762.onclick = togg02762;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02763 = data[762];

    /*Récupere les données que je veut de la Commune */
    name_02763 = rows02763.Libellé_géographique;
    Pop_02763 = rows02763.Population_en_2017;
    Pop_017_02763 = rows02763.Pop_017_ans_2017;
    Pop_mediane_vote_02763 = rows02763.Popu_possible_voté;
    nbr_inscrit_02763 = rows02763.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02763').textContent = name_02763;
   
    let com_02763 = document.getElementById("f-path-02763");
    let list_02763 = document.getElementById("list_02763");


    function togg02763() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02763-01').classList.remove('visible')
        document.querySelector('#polar-chart_02763-01').classList.remove('visible')
        document.querySelector('#polar-chart_02763-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02763').classList.remove('visible')
        document.querySelector('#f-path-02763').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02763
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02763
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02763
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02763
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02763
    }
    com_02763.onclick = togg02763;
    list_02763.onclick = togg02763;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02764 = data[763];

    /*Récupere les données que je veut de la Commune */
    name_02764 = rows02764.Libellé_géographique;
    Pop_02764 = rows02764.Population_en_2017;
    Pop_017_02764 = rows02764.Pop_017_ans_2017;
    Pop_mediane_vote_02764 = rows02764.Popu_possible_voté;
    nbr_inscrit_02764 = rows02764.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02764').textContent = name_02764;
   
    let com_02764 = document.getElementById("f-path-02764");
    let list_02764 = document.getElementById("list_02764");


    function togg02764() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02764-01').classList.remove('visible')
        document.querySelector('#polar-chart_02764-01').classList.remove('visible')
        document.querySelector('#polar-chart_02764-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02764').classList.remove('visible')
        document.querySelector('#f-path-02764').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02764
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02764
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02764
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02764
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02764
    }
    com_02764.onclick = togg02764;
    list_02764.onclick = togg02764;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02765 = data[764];

    /*Récupere les données que je veut de la Commune */
    name_02765 = rows02765.Libellé_géographique;
    Pop_02765 = rows02765.Population_en_2017;
    Pop_017_02765 = rows02765.Pop_017_ans_2017;
    Pop_mediane_vote_02765 = rows02765.Popu_possible_voté;
    nbr_inscrit_02765 = rows02765.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02765').textContent = name_02765;
   
    let com_02765 = document.getElementById("f-path-02765");
    let list_02765 = document.getElementById("list_02765");


    function togg02765() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02765-01').classList.remove('visible')
        document.querySelector('#polar-chart_02765-01').classList.remove('visible')
        document.querySelector('#polar-chart_02765-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02765').classList.remove('visible')
        document.querySelector('#f-path-02765').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02765
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02765
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02765
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02765
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02765
    }
    com_02765.onclick = togg02765;
    list_02765.onclick = togg02765;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02766 = data[765];

    /*Récupere les données que je veut de la Commune */
    name_02766 = rows02766.Libellé_géographique;
    Pop_02766 = rows02766.Population_en_2017;
    Pop_017_02766 = rows02766.Pop_017_ans_2017;
    Pop_mediane_vote_02766 = rows02766.Popu_possible_voté;
    nbr_inscrit_02766 = rows02766.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02766').textContent = name_02766;
   
    let com_02766 = document.getElementById("f-path-02766");
    let list_02766 = document.getElementById("list_02766");


    function togg02766() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02766-01').classList.remove('visible')
        document.querySelector('#polar-chart_02766-01').classList.remove('visible')
        document.querySelector('#polar-chart_02766-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02766').classList.remove('visible')
        document.querySelector('#f-path-02766').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02766
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02766
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02766
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02766
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02766
    }
    com_02766.onclick = togg02766;
    list_02766.onclick = togg02766;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02767 = data[766];

    /*Récupere les données que je veut de la Commune */
    name_02767 = rows02767.Libellé_géographique;
    Pop_02767 = rows02767.Population_en_2017;
    Pop_017_02767 = rows02767.Pop_017_ans_2017;
    Pop_mediane_vote_02767 = rows02767.Popu_possible_voté;
    nbr_inscrit_02767 = rows02767.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02767').textContent = name_02767;
   
    let com_02767 = document.getElementById("f-path-02767");
    let list_02767 = document.getElementById("list_02767");


    function togg02767() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02767-01').classList.remove('visible')
        document.querySelector('#polar-chart_02767-01').classList.remove('visible')
        document.querySelector('#polar-chart_02767-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02767').classList.remove('visible')
        document.querySelector('#f-path-02767').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02767
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02767
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02767
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02767
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02767
    }
    com_02767.onclick = togg02767;
    list_02767.onclick = togg02767;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02768 = data[767];

    /*Récupere les données que je veut de la Commune */
    name_02768 = rows02768.Libellé_géographique;
    Pop_02768 = rows02768.Population_en_2017;
    Pop_017_02768 = rows02768.Pop_017_ans_2017;
    Pop_mediane_vote_02768 = rows02768.Popu_possible_voté;
    nbr_inscrit_02768 = rows02768.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02768').textContent = name_02768;
   
    let com_02768 = document.getElementById("f-path-02768");
    let list_02768 = document.getElementById("list_02768");


    function togg02768() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02768-01').classList.remove('visible')
        document.querySelector('#polar-chart_02768-01').classList.remove('visible')
        document.querySelector('#polar-chart_02768-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02768').classList.remove('visible')
        document.querySelector('#f-path-02768').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02768
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02768
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02768
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02768
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02768
    }
    com_02768.onclick = togg02768;
    list_02768.onclick = togg02768;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02769 = data[768];

    /*Récupere les données que je veut de la Commune */
    name_02769 = rows02769.Libellé_géographique;
    Pop_02769 = rows02769.Population_en_2017;
    Pop_017_02769 = rows02769.Pop_017_ans_2017;
    Pop_mediane_vote_02769 = rows02769.Popu_possible_voté;
    nbr_inscrit_02769 = rows02769.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02769').textContent = name_02769;
   
    let com_02769 = document.getElementById("f-path-02769");
    let list_02769 = document.getElementById("list_02769");


    function togg02769() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02769-01').classList.remove('visible')
        document.querySelector('#polar-chart_02769-01').classList.remove('visible')
        document.querySelector('#polar-chart_02769-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02769').classList.remove('visible')
        document.querySelector('#f-path-02769').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02769
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02769
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02769
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02769
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02769
    }
    com_02769.onclick = togg02769;
    list_02769.onclick = togg02769;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02770 = data[769];

    /*Récupere les données que je veut de la Commune */
    name_02770 = rows02770.Libellé_géographique;
    Pop_02770 = rows02770.Population_en_2017;
    Pop_017_02770 = rows02770.Pop_017_ans_2017;
    Pop_mediane_vote_02770 = rows02770.Popu_possible_voté;
    nbr_inscrit_02770 = rows02770.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02770').textContent = name_02770;
   
    let com_02770 = document.getElementById("f-path-02770");
    let list_02770 = document.getElementById("list_02770");


    function togg02770() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02770-01').classList.remove('visible')
        document.querySelector('#polar-chart_02770-01').classList.remove('visible')
        document.querySelector('#polar-chart_02770-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02770').classList.remove('visible')
        document.querySelector('#f-path-02770').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02770
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02770
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02770
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02770
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02770
    }
    com_02770.onclick = togg02770;
    list_02770.onclick = togg02770;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02771 = data[770];

    /*Récupere les données que je veut de la Commune */
    name_02771 = rows02771.Libellé_géographique;
    Pop_02771 = rows02771.Population_en_2017;
    Pop_017_02771 = rows02771.Pop_017_ans_2017;
    Pop_mediane_vote_02771 = rows02771.Popu_possible_voté;
    nbr_inscrit_02771 = rows02771.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02771').textContent = name_02771;
   
    let com_02771 = document.getElementById("f-path-02771");
    let list_02771 = document.getElementById("list_02771");


    function togg02771() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02771-01').classList.remove('visible')
        document.querySelector('#polar-chart_02771-01').classList.remove('visible')
        document.querySelector('#polar-chart_02771-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02771').classList.remove('visible')
        document.querySelector('#f-path-02771').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02771
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02771
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02771
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02771
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02771
    }
    com_02771.onclick = togg02771;
    list_02771.onclick = togg02771;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02772 = data[771];

    /*Récupere les données que je veut de la Commune */
    name_02772 = rows02772.Libellé_géographique;
    Pop_02772 = rows02772.Population_en_2017;
    Pop_017_02772 = rows02772.Pop_017_ans_2017;
    Pop_mediane_vote_02772 = rows02772.Popu_possible_voté;
    nbr_inscrit_02772 = rows02772.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02772').textContent = name_02772;
   
    let com_02772 = document.getElementById("f-path-02772");
    let list_02772 = document.getElementById("list_02772");


    function togg02772() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02772-01').classList.remove('visible')
        document.querySelector('#polar-chart_02772-01').classList.remove('visible')
        document.querySelector('#polar-chart_02772-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02772').classList.remove('visible')
        document.querySelector('#f-path-02772').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02772
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02772
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02772
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02772
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02772
    }
    com_02772.onclick = togg02772;
    list_02772.onclick = togg02772;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02773 = data[772];

    /*Récupere les données que je veut de la Commune */
    name_02773 = rows02773.Libellé_géographique;
    Pop_02773 = rows02773.Population_en_2017;
    Pop_017_02773 = rows02773.Pop_017_ans_2017;
    Pop_mediane_vote_02773 = rows02773.Popu_possible_voté;
    nbr_inscrit_02773 = rows02773.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02773').textContent = name_02773;
   
    let com_02773 = document.getElementById("f-path-02773");
    let list_02773 = document.getElementById("list_02773");


    function togg02773() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02773-01').classList.remove('visible')
        document.querySelector('#polar-chart_02773-01').classList.remove('visible')
        document.querySelector('#polar-chart_02773-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02773').classList.remove('visible')
        document.querySelector('#f-path-02773').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02773
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02773
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02773
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02773
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02773
    }
    com_02773.onclick = togg02773;
    list_02773.onclick = togg02773;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02774 = data[773];

    /*Récupere les données que je veut de la Commune */
    name_02774 = rows02774.Libellé_géographique;
    Pop_02774 = rows02774.Population_en_2017;
    Pop_017_02774 = rows02774.Pop_017_ans_2017;
    Pop_mediane_vote_02774 = rows02774.Popu_possible_voté;
    nbr_inscrit_02774 = rows02774.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02774').textContent = name_02774;
   
    let com_02774 = document.getElementById("f-path-02774");
    let list_02774 = document.getElementById("list_02774");


    function togg02774() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02774-01').classList.remove('visible')
        document.querySelector('#polar-chart_02774-01').classList.remove('visible')
        document.querySelector('#polar-chart_02774-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02774').classList.remove('visible')
        document.querySelector('#f-path-02774').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02774
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02774
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02774
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02774
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02774
    }
    com_02774.onclick = togg02774;
    list_02774.onclick = togg02774;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02775 = data[774];

    /*Récupere les données que je veut de la Commune */
    name_02775 = rows02775.Libellé_géographique;
    Pop_02775 = rows02775.Population_en_2017;
    Pop_017_02775 = rows02775.Pop_017_ans_2017;
    Pop_mediane_vote_02775 = rows02775.Popu_possible_voté;
    nbr_inscrit_02775 = rows02775.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02775').textContent = name_02775;
   
    let com_02775 = document.getElementById("f-path-02775");
    let list_02775 = document.getElementById("list_02775");


    function togg02775() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02775-01').classList.remove('visible')
        document.querySelector('#polar-chart_02775-01').classList.remove('visible')
        document.querySelector('#polar-chart_02775-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02775').classList.remove('visible')
        document.querySelector('#f-path-02775').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02775
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02775
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02775
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02775
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02775
    }
    com_02775.onclick = togg02775;
    list_02775.onclick = togg02775;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02776 = data[775];

    /*Récupere les données que je veut de la Commune */
    name_02776 = rows02776.Libellé_géographique;
    Pop_02776 = rows02776.Population_en_2017;
    Pop_017_02776 = rows02776.Pop_017_ans_2017;
    Pop_mediane_vote_02776 = rows02776.Popu_possible_voté;
    nbr_inscrit_02776 = rows02776.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02776').textContent = name_02776;
   
    let com_02776 = document.getElementById("f-path-02776");
    let list_02776 = document.getElementById("list_02776");


    function togg02776() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02776-01').classList.remove('visible')
        document.querySelector('#polar-chart_02776-01').classList.remove('visible')
        document.querySelector('#polar-chart_02776-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02776').classList.remove('visible')
        document.querySelector('#f-path-02776').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02776
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02776
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02776
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02776
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02776
    }
    com_02776.onclick = togg02776;
    list_02776.onclick = togg02776;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02777 = data[776];

    /*Récupere les données que je veut de la Commune */
    name_02777 = rows02777.Libellé_géographique;
    Pop_02777 = rows02777.Population_en_2017;
    Pop_017_02777 = rows02777.Pop_017_ans_2017;
    Pop_mediane_vote_02777 = rows02777.Popu_possible_voté;
    nbr_inscrit_02777 = rows02777.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02777').textContent = name_02777;
   
    let com_02777 = document.getElementById("f-path-02777");
    let list_02777 = document.getElementById("list_02777");


    function togg02777() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02777-01').classList.remove('visible')
        document.querySelector('#polar-chart_02777-01').classList.remove('visible')
        document.querySelector('#polar-chart_02777-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02777').classList.remove('visible')
        document.querySelector('#f-path-02777').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02777
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02777
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02777
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02777
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02777
    }
    com_02777.onclick = togg02777;
    list_02777.onclick = togg02777;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02778 = data[777];

    /*Récupere les données que je veut de la Commune */
    name_02778 = rows02778.Libellé_géographique;
    Pop_02778 = rows02778.Population_en_2017;
    Pop_017_02778 = rows02778.Pop_017_ans_2017;
    Pop_mediane_vote_02778 = rows02778.Popu_possible_voté;
    nbr_inscrit_02778 = rows02778.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02778').textContent = name_02778;
   
    let com_02778 = document.getElementById("f-path-02778");
    let list_02778 = document.getElementById("list_02778");


    function togg02778() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02778-01').classList.remove('visible')
        document.querySelector('#polar-chart_02778-01').classList.remove('visible')
        document.querySelector('#polar-chart_02778-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02778').classList.remove('visible')
        document.querySelector('#f-path-02778').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02778
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02778
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02778
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02778
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02778
    }
    com_02778.onclick = togg02778;
    list_02778.onclick = togg02778;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02779 = data[778];

    /*Récupere les données que je veut de la Commune */
    name_02779 = rows02779.Libellé_géographique;
    Pop_02779 = rows02779.Population_en_2017;
    Pop_017_02779 = rows02779.Pop_017_ans_2017;
    Pop_mediane_vote_02779 = rows02779.Popu_possible_voté;
    nbr_inscrit_02779 = rows02779.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02779').textContent = name_02779;
   
    let com_02779 = document.getElementById("f-path-02779");
    let list_02779 = document.getElementById("list_02779");


    function togg02779() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02779-01').classList.remove('visible')
        document.querySelector('#polar-chart_02779-01').classList.remove('visible')
        document.querySelector('#polar-chart_02779-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02779').classList.remove('visible')
        document.querySelector('#f-path-02779').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02779
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02779
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02779
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02779
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02779
    }
    com_02779.onclick = togg02779;
    list_02779.onclick = togg02779;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02780 = data[779];

    /*Récupere les données que je veut de la Commune */
    name_02780 = rows02780.Libellé_géographique;
    Pop_02780 = rows02780.Population_en_2017;
    Pop_017_02780 = rows02780.Pop_017_ans_2017;
    Pop_mediane_vote_02780 = rows02780.Popu_possible_voté;
    nbr_inscrit_02780 = rows02780.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02780').textContent = name_02780;
   
    let com_02780 = document.getElementById("f-path-02780");
    let list_02780 = document.getElementById("list_02780");


    function togg02780() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02780-01').classList.remove('visible')
        document.querySelector('#polar-chart_02780-01').classList.remove('visible')
        document.querySelector('#polar-chart_02780-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02780').classList.remove('visible')
        document.querySelector('#f-path-02780').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02780
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02780
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02780
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02780
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02780
    }
    com_02780.onclick = togg02780;
    list_02780.onclick = togg02780;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02781 = data[780];

    /*Récupere les données que je veut de la Commune */
    name_02781 = rows02781.Libellé_géographique;
    Pop_02781 = rows02781.Population_en_2017;
    Pop_017_02781 = rows02781.Pop_017_ans_2017;
    Pop_mediane_vote_02781 = rows02781.Popu_possible_voté;
    nbr_inscrit_02781 = rows02781.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02781').textContent = name_02781;
   
    let com_02781 = document.getElementById("f-path-02781");
    let list_02781 = document.getElementById("list_02781");


    function togg02781() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02781-01').classList.remove('visible')
        document.querySelector('#polar-chart_02781-01').classList.remove('visible')
        document.querySelector('#polar-chart_02781-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02781').classList.remove('visible')
        document.querySelector('#f-path-02781').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02781
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02781
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02781
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02781
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02781
    }
    com_02781.onclick = togg02781;
    list_02781.onclick = togg02781;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02782 = data[781];

    /*Récupere les données que je veut de la Commune */
    name_02782 = rows02782.Libellé_géographique;
    Pop_02782 = rows02782.Population_en_2017;
    Pop_017_02782 = rows02782.Pop_017_ans_2017;
    Pop_mediane_vote_02782 = rows02782.Popu_possible_voté;
    nbr_inscrit_02782 = rows02782.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02782').textContent = name_02782;
   
    let com_02782 = document.getElementById("f-path-02782");
    let list_02782 = document.getElementById("list_02782");


    function togg02782() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02782-01').classList.remove('visible')
        document.querySelector('#polar-chart_02782-01').classList.remove('visible')
        document.querySelector('#polar-chart_02782-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02782').classList.remove('visible')
        document.querySelector('#f-path-02782').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02782
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02782
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02782
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02782
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02782
    }
    com_02782.onclick = togg02782;
    list_02782.onclick = togg02782;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02783 = data[782];

    /*Récupere les données que je veut de la Commune */
    name_02783 = rows02783.Libellé_géographique;
    Pop_02783 = rows02783.Population_en_2017;
    Pop_017_02783 = rows02783.Pop_017_ans_2017;
    Pop_mediane_vote_02783 = rows02783.Popu_possible_voté;
    nbr_inscrit_02783 = rows02783.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02783').textContent = name_02783;
   
    let com_02783 = document.getElementById("f-path-02783");
    let list_02783 = document.getElementById("list_02783");


    function togg02783() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02783-01').classList.remove('visible')
        document.querySelector('#polar-chart_02783-01').classList.remove('visible')
        document.querySelector('#polar-chart_02783-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02783').classList.remove('visible')
        document.querySelector('#f-path-02783').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02783
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02783
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02783
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02783
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02783
    }
    com_02783.onclick = togg02783;
    list_02783.onclick = togg02783;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02784 = data[783];

    /*Récupere les données que je veut de la Commune */
    name_02784 = rows02784.Libellé_géographique;
    Pop_02784 = rows02784.Population_en_2017;
    Pop_017_02784 = rows02784.Pop_017_ans_2017;
    Pop_mediane_vote_02784 = rows02784.Popu_possible_voté;
    nbr_inscrit_02784 = rows02784.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02784').textContent = name_02784;
   
    let com_02784 = document.getElementById("f-path-02784");
    let list_02784 = document.getElementById("list_02784");


    function togg02784() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02784-01').classList.remove('visible')
        document.querySelector('#polar-chart_02784-01').classList.remove('visible')
        document.querySelector('#polar-chart_02784-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02784').classList.remove('visible')
        document.querySelector('#f-path-02784').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02784
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02784
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02784
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02784
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02784
    }
    com_02784.onclick = togg02784;
    list_02784.onclick = togg02784;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02785 = data[784];

    /*Récupere les données que je veut de la Commune */
    name_02785 = rows02785.Libellé_géographique;
    Pop_02785 = rows02785.Population_en_2017;
    Pop_017_02785 = rows02785.Pop_017_ans_2017;
    Pop_mediane_vote_02785 = rows02785.Popu_possible_voté;
    nbr_inscrit_02785 = rows02785.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02785').textContent = name_02785;
   
    let com_02785 = document.getElementById("f-path-02785");
    let list_02785 = document.getElementById("list_02785");


    function togg02785() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02785-01').classList.remove('visible')
        document.querySelector('#polar-chart_02785-01').classList.remove('visible')
        document.querySelector('#polar-chart_02785-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02785').classList.remove('visible')
        document.querySelector('#f-path-02785').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02785
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02785
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02785
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02785
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02785
    }
    com_02785.onclick = togg02785;
    list_02785.onclick = togg02785;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02786 = data[785];

    /*Récupere les données que je veut de la Commune */
    name_02786 = rows02786.Libellé_géographique;
    Pop_02786 = rows02786.Population_en_2017;
    Pop_017_02786 = rows02786.Pop_017_ans_2017;
    Pop_mediane_vote_02786 = rows02786.Popu_possible_voté;
    nbr_inscrit_02786 = rows02786.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02786').textContent = name_02786;
   
    let com_02786 = document.getElementById("f-path-02786");
    let list_02786 = document.getElementById("list_02786");


    function togg02786() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02786-01').classList.remove('visible')
        document.querySelector('#polar-chart_02786-01').classList.remove('visible')
        document.querySelector('#polar-chart_02786-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02786').classList.remove('visible')
        document.querySelector('#f-path-02786').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02786
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02786
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02786
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02786
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02786
    }
    com_02786.onclick = togg02786;
    list_02786.onclick = togg02786;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02787 = data[786];

    /*Récupere les données que je veut de la Commune */
    name_02787 = rows02787.Libellé_géographique;
    Pop_02787 = rows02787.Population_en_2017;
    Pop_017_02787 = rows02787.Pop_017_ans_2017;
    Pop_mediane_vote_02787 = rows02787.Popu_possible_voté;
    nbr_inscrit_02787 = rows02787.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02787').textContent = name_02787;
   
    let com_02787 = document.getElementById("f-path-02787");
    let list_02787 = document.getElementById("list_02787");


    function togg02787() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02787-01').classList.remove('visible')
        document.querySelector('#polar-chart_02787-01').classList.remove('visible')
        document.querySelector('#polar-chart_02787-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02787').classList.remove('visible')
        document.querySelector('#f-path-02787').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02787
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02787
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02787
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02787
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02787
    }
    com_02787.onclick = togg02787;
    list_02787.onclick = togg02787;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02788 = data[787];

    /*Récupere les données que je veut de la Commune */
    name_02788 = rows02788.Libellé_géographique;
    Pop_02788 = rows02788.Population_en_2017;
    Pop_017_02788 = rows02788.Pop_017_ans_2017;
    Pop_mediane_vote_02788 = rows02788.Popu_possible_voté;
    nbr_inscrit_02788 = rows02788.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02788').textContent = name_02788;
   
    let com_02788 = document.getElementById("f-path-02788");
    let list_02788 = document.getElementById("list_02788");


    function togg02788() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02788-01').classList.remove('visible')
        document.querySelector('#polar-chart_02788-01').classList.remove('visible')
        document.querySelector('#polar-chart_02788-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02788').classList.remove('visible')
        document.querySelector('#f-path-02788').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02788
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02788
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02788
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02788
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02788
    }
    com_02788.onclick = togg02788;
    list_02788.onclick = togg02788;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02789 = data[788];

    /*Récupere les données que je veut de la Commune */
    name_02789 = rows02789.Libellé_géographique;
    Pop_02789 = rows02789.Population_en_2017;
    Pop_017_02789 = rows02789.Pop_017_ans_2017;
    Pop_mediane_vote_02789 = rows02789.Popu_possible_voté;
    nbr_inscrit_02789 = rows02789.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02789').textContent = name_02789;
   
    let com_02789 = document.getElementById("f-path-02789");
    let list_02789 = document.getElementById("list_02789");


    function togg02789() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02789-01').classList.remove('visible')
        document.querySelector('#polar-chart_02789-01').classList.remove('visible')
        document.querySelector('#polar-chart_02789-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02789').classList.remove('visible')
        document.querySelector('#f-path-02789').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02789
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02789
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02789
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02789
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02789
    }
    com_02789.onclick = togg02789;
    list_02789.onclick = togg02789;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02790 = data[789];

    /*Récupere les données que je veut de la Commune */
    name_02790 = rows02790.Libellé_géographique;
    Pop_02790 = rows02790.Population_en_2017;
    Pop_017_02790 = rows02790.Pop_017_ans_2017;
    Pop_mediane_vote_02790 = rows02790.Popu_possible_voté;
    nbr_inscrit_02790 = rows02790.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02790').textContent = name_02790;
   
    let com_02790 = document.getElementById("f-path-02790");
    let list_02790 = document.getElementById("list_02790");


    function togg02790() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02790-01').classList.remove('visible')
        document.querySelector('#polar-chart_02790-01').classList.remove('visible')
        document.querySelector('#polar-chart_02790-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02790').classList.remove('visible')
        document.querySelector('#f-path-02790').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02790
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02790
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02790
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02790
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02790
    }
    com_02790.onclick = togg02790;
    list_02790.onclick = togg02790;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02791 = data[790];

    /*Récupere les données que je veut de la Commune */
    name_02791 = rows02791.Libellé_géographique;
    Pop_02791 = rows02791.Population_en_2017;
    Pop_017_02791 = rows02791.Pop_017_ans_2017;
    Pop_mediane_vote_02791 = rows02791.Popu_possible_voté;
    nbr_inscrit_02791 = rows02791.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02791').textContent = name_02791;
   
    let com_02791 = document.getElementById("f-path-02791");
    let list_02791 = document.getElementById("list_02791");


    function togg02791() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02791-01').classList.remove('visible')
        document.querySelector('#polar-chart_02791-01').classList.remove('visible')
        document.querySelector('#polar-chart_02791-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02791').classList.remove('visible')
        document.querySelector('#f-path-02791').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02791
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02791
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02791
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02791
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02791
    }
    com_02791.onclick = togg02791;
    list_02791.onclick = togg02791;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02792 = data[791];

    /*Récupere les données que je veut de la Commune */
    name_02792 = rows02792.Libellé_géographique;
    Pop_02792 = rows02792.Population_en_2017;
    Pop_017_02792 = rows02792.Pop_017_ans_2017;
    Pop_mediane_vote_02792 = rows02792.Popu_possible_voté;
    nbr_inscrit_02792 = rows02792.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02792').textContent = name_02792;
   
    let com_02792 = document.getElementById("f-path-02792");
    let list_02792 = document.getElementById("list_02792");


    function togg02792() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02792-01').classList.remove('visible')
        document.querySelector('#polar-chart_02792-01').classList.remove('visible')
        document.querySelector('#polar-chart_02792-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02792').classList.remove('visible')
        document.querySelector('#f-path-02792').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02792
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02792
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02792
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02792
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02792
    }
    com_02792.onclick = togg02792;
    list_02792.onclick = togg02792;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02793 = data[792];

    /*Récupere les données que je veut de la Commune */
    name_02793 = rows02793.Libellé_géographique;
    Pop_02793 = rows02793.Population_en_2017;
    Pop_017_02793 = rows02793.Pop_017_ans_2017;
    Pop_mediane_vote_02793 = rows02793.Popu_possible_voté;
    nbr_inscrit_02793 = rows02793.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02793').textContent = name_02793;
   
    let com_02793 = document.getElementById("f-path-02793");
    let list_02793 = document.getElementById("list_02793");


    function togg02793() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02793-01').classList.remove('visible')
        document.querySelector('#polar-chart_02793-01').classList.remove('visible')
        document.querySelector('#polar-chart_02793-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02793').classList.remove('visible')
        document.querySelector('#f-path-02793').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02793
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02793
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02793
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02793
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02793
    }
    com_02793.onclick = togg02793;
    list_02793.onclick = togg02793;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02794 = data[793];

    /*Récupere les données que je veut de la Commune */
    name_02794 = rows02794.Libellé_géographique;
    Pop_02794 = rows02794.Population_en_2017;
    Pop_017_02794 = rows02794.Pop_017_ans_2017;
    Pop_mediane_vote_02794 = rows02794.Popu_possible_voté;
    nbr_inscrit_02794 = rows02794.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02794').textContent = name_02794;
   
    let com_02794 = document.getElementById("f-path-02794");
    let list_02794 = document.getElementById("list_02794");


    function togg02794() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02794-01').classList.remove('visible')
        document.querySelector('#polar-chart_02794-01').classList.remove('visible')
        document.querySelector('#polar-chart_02794-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02794').classList.remove('visible')
        document.querySelector('#f-path-02794').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02794
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02794
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02794
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02794
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02794
    }
    com_02794.onclick = togg02794;
    list_02794.onclick = togg02794;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02795 = data[794];

    /*Récupere les données que je veut de la Commune */
    name_02795 = rows02795.Libellé_géographique;
    Pop_02795 = rows02795.Population_en_2017;
    Pop_017_02795 = rows02795.Pop_017_ans_2017;
    Pop_mediane_vote_02795 = rows02795.Popu_possible_voté;
    nbr_inscrit_02795 = rows02795.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02795').textContent = name_02795;
   
    let com_02795 = document.getElementById("f-path-02795");
    let list_02795 = document.getElementById("list_02795");


    function togg02795() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02795-01').classList.remove('visible')
        document.querySelector('#polar-chart_02795-01').classList.remove('visible')
        document.querySelector('#polar-chart_02795-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02795').classList.remove('visible')
        document.querySelector('#f-path-02795').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02795
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02795
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02795
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02795
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02795
    }
    com_02795.onclick = togg02795;
    list_02795.onclick = togg02795;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02796 = data[795];

    /*Récupere les données que je veut de la Commune */
    name_02796 = rows02796.Libellé_géographique;
    Pop_02796 = rows02796.Population_en_2017;
    Pop_017_02796 = rows02796.Pop_017_ans_2017;
    Pop_mediane_vote_02796 = rows02796.Popu_possible_voté;
    nbr_inscrit_02796 = rows02796.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02796').textContent = name_02796;
   
    let com_02796 = document.getElementById("f-path-02796");
    let list_02796 = document.getElementById("list_02796");


    function togg02796() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02796-01').classList.remove('visible')
        document.querySelector('#polar-chart_02796-01').classList.remove('visible')
        document.querySelector('#polar-chart_02796-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02796').classList.remove('visible')
        document.querySelector('#f-path-02796').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02796
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02796
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02796
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02796
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02796
    }
    com_02796.onclick = togg02796;
    list_02796.onclick = togg02796;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02797 = data[796];

    /*Récupere les données que je veut de la Commune */
    name_02797 = rows02797.Libellé_géographique;
    Pop_02797 = rows02797.Population_en_2017;
    Pop_017_02797 = rows02797.Pop_017_ans_2017;
    Pop_mediane_vote_02797 = rows02797.Popu_possible_voté;
    nbr_inscrit_02797 = rows02797.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02797').textContent = name_02797;
   
    let com_02797 = document.getElementById("f-path-02797");
    let list_02797 = document.getElementById("list_02797");


    function togg02797() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02797-01').classList.remove('visible')
        document.querySelector('#polar-chart_02797-01').classList.remove('visible')
        document.querySelector('#polar-chart_02797-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02797').classList.remove('visible')
        document.querySelector('#f-path-02797').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02797
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02797
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02797
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02797
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02797
    }
    com_02797.onclick = togg02797;
    list_02797.onclick = togg02797;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02798 = data[797];

    /*Récupere les données que je veut de la Commune */
    name_02798 = rows02798.Libellé_géographique;
    Pop_02798 = rows02798.Population_en_2017;
    Pop_017_02798 = rows02798.Pop_017_ans_2017;
    Pop_mediane_vote_02798 = rows02798.Popu_possible_voté;
    nbr_inscrit_02798 = rows02798.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02798').textContent = name_02798;
   
    let com_02798 = document.getElementById("f-path-02798");
    let list_02798 = document.getElementById("list_02798");


    function togg02798() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02798-01').classList.remove('visible')
        document.querySelector('#polar-chart_02798-01').classList.remove('visible')
        document.querySelector('#polar-chart_02798-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02798').classList.remove('visible')
        document.querySelector('#f-path-02798').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02798
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02798
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02798
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02798
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02798
    }
    com_02798.onclick = togg02798;
    list_02798.onclick = togg02798;
    /************************************************************************************* */
    /************************************************************************************* */
    const rows02799 = data[798];

    /*Récupere les données que je veut de la Commune */
    name_02799 = rows02799.Libellé_géographique;
    Pop_02799 = rows02799.Population_en_2017;
    Pop_017_02799 = rows02799.Pop_017_ans_2017;
    Pop_mediane_vote_02799 = rows02799.Popu_possible_voté;
    nbr_inscrit_02799 = rows02799.Inscrits;
   
    /*Pose dans le Menu le Nom + Tableau*/
    document.querySelector('#list_02799').textContent = name_02799;
   
    let com_02799 = document.getElementById("f-path-02799");
    let list_02799 = document.getElementById("list_02799");


    function togg02799() {
        body.querySelectorAll('.is-actived').forEach(function (item) {
            item.classList.add('visible')
        })
        path.querySelectorAll('.fill').forEach(function (item) {
            item.classList.remove('active_fill')
        })
        document.querySelector('#bar-chart_02799-01').classList.remove('visible')
        document.querySelector('#polar-chart_02799-01').classList.remove('visible')
        document.querySelector('#polar-chart_02799-03').classList.remove('visible')
        document.querySelector('#bar-chart-grouped_02799').classList.remove('visible')
        document.querySelector('#f-path-02799').classList.add('active_fill')
        document.querySelector('#Rec_Pop_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_2017').textContent = Pop_02799
        document.querySelector('#Rec_Pop_Enfant_2017').classList.remove('visible')
        document.querySelector('#Rec_Pop_Enfant_2017').textContent = Pop_017_02799
        document.querySelector('#Pop_inscrit01').classList.remove('visible')
        document.querySelector('#Pop_inscrit01').textContent = Pop_mediane_vote_02799
        document.querySelector('#Pop_inscrit02').classList.remove('visible')
        document.querySelector('#Pop_inscrit02').textContent = nbr_inscrit_02799
        document.querySelector('#name_Dep').classList.remove('visible')
        document.querySelector('#name_Dep').textContent = name_02799
    }
    com_02799.onclick = togg02799;
    list_02799.onclick = togg02799;
