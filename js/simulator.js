let simulatorEnabled = true;
let ascensions = [
    [1021362, 42073],[1057266, 43088],[1079098, 44241],[1116070, 45274],[1138551, 46461],[1176660, 58112],[1199831, 48738],[1213921, 49482],[1225807, 40490],[1236786, 42550],[1246928, 44452],[1256296, 46210],[1264949, 47833],[1272942, 49332],[1291864, 55877],[1309343, 58725],[1325488, 59449],[1340401, 60118],[1354176, 60736],[1366900, 61307],[1378653, 56674],[1389509, 57161],[1399536, 57611],[1408799, 58026],[1417354, 58410],[1436815, 63933],[1454791, 64740],[1471396, 65485],[1486733, 66173],[1500901, 66808],[1513987, 67395],[1526074, 67938],[1537239, 63270],[1547552, 63732],[1557078, 64160],[1565878, 64555],[1574005, 64919],[1581513, 65256],[1599997, 70732],[1617070, 71498],[1632841, 72205],[1647408, 72859],[1660864, 73462],[1673292, 74020],[1684773, 74535],[1695377, 75011],[1705173, 70286],[1714220, 70691],[1722577, 71066],[1730297, 71413],[1737428, 71733],[1744014, 72028],[1750098, 72301],[1755717, 72553],[1760908, 72786],[1765703, 73001],[1770132, 73200],[1774223, 73383],[1778002, 73553],[1781492, 73709],[1805509, 83153],[1827693, 84148],[1848185, 85067],[1867113, 85916],[1884596, 86701],[1900746, 87425],[1915663, 88094],[1929441, 79414],[1953707, 85145],[1976121, 86151],[1996825, 87079],[2015949, 87937],[2033614, 88730],[2049931, 89462],[2065003, 90138],[2078925, 85602],[2091784, 86179],[2103662, 86712],[2114633, 87204],[2124768, 87659],[2134129, 88079],[2142776, 88467],[2162321, 93994],[2180375, 94804],[2197051, 95552],[2212454, 96243],[2226683, 96881],[2239825, 97471],[2251965, 98016],[2263178, 98519],[2273536, 98983],[2283103, 99413],[2291941, 99809],[2300103, 95006],[2307643, 95345],[2314608, 95657],[2321041, 95946],[2326983, 96212],[2332472, 96459],[2337542, 96686],[2342225, 96896],[2346551, 97090],[2350546, 97269],[2354237, 97435],[2357646, 97588],[2360795, 97729],[2396045, 112323],[2428606, 113784],[2458682, 115133],[2486463, 116379],[2512124, 117531],[2547365, 123754],[2579917, 110751],[2609985, 112100],[2637759, 113346],[2663413, 114497],[2687110, 115560],[2708998, 111382],[2729216, 112289],[2759450, 118295],[2787376, 119548],[2813172, 120706],[2836999, 121774],[2859008, 122762],[2879337, 123674],[2898115, 124516],[2915460, 125294],[2931482, 120844],[2978622, 135971],[3022166, 137925],[3062386, 139729],[3111076, 146556],[3156051, 148574],[3197594, 135974],[3235966, 137696],[3271411, 139286],[3304150, 140755],[3345950, 142120],[3384559, 143852],[3420223, 145452],[3453165, 146930],[3495142, 153460],[3554709, 164498],[3609730, 161797],[3660553, 164077],[3719036, 171343],[3773056, 168602],[3822954, 161542],[3869044, 163610],[3923175, 170688],[3973176, 167771],[4019361, 169843],[4062022, 171757],[4101427, 173525],[4170167, 189621],[4233661, 187301],[4303849, 195092],[4368681, 198000],[4428566, 186224],[4495439, 193874],[4557208, 196645],[4614265, 194045],[4666967, 196409],[4727197, 203758],[4782830, 206253],[4834219, 203390],[4881686, 205519],[4925530, 207486],[4966030, 209303],[5003438, 210981],[5037992, 207367],[5069910, 208799],[5099391, 210121],[5126623, 211343],[5151777, 212472],[5175012, 213514],[5196474, 214477],[5216297, 215366],[5234609, 216187],[5251523, 216946],[5267146, 217647],[5281577, 218295],[5294907, 218893],[5307219, 219445],[5318593, 219955],[5329098, 220426],[5338801, 220862],[5347765, 221264],[5356044, 221635],[5363691, 221978],[5370755, 222295],[5377280, 222588],[5383307, 222858],[5388874, 223108],[5394016, 223339],[5398766, 223552],[5403153, 223749],[5407206, 223930],[5410949, 224098],[5414407, 224254],[5417601, 224397],[5420551, 224529],[5423276, 224651],[5425793, 224764],[5428118, 224869],[5430266, 224965],[5432250, 225054],[5434082, 225136],[5435774, 225212],[5437338, 225282],[5438782, 225347],[5440116, 225407],[5441348, 225462],[5442486, 225513],[5443537, 225560],[5444508, 225604],[5445405, 225644],[5446233, 225681],[5446999, 225716],[5447706, 225747],[5448358, 225777],[5448962, 225804],[5449519, 225829],[5450033, 225852],[5450509, 225873],[5450948, 225893],[5451353, 225911],[5451728, 225928],[5452074, 225943],[5452393, 225958],[5452688, 225971],[5452961, 225983],[5453213, 225994],[5453446, 226005],[5453661, 226015],[5453859, 226023],[5454042, 226032],[5454212, 226039],[5454368, 226046],[5454513, 226053],[5454646, 226059],[5454770, 226064],[5454884, 226069],[5454989, 226074],[5455086, 226078],[5455176, 226083],[5455259, 226086],[5455336, 226090],[5455408, 226093],[5455474, 226096]
];

function changeSimulator() {
    $("#simulatorBox").toggle(50, function(){
        simulatorEnabled = $("#simulator").is(":checked");
    });
    if (localStorage) localStorage.setItem("simulator", $("#simulator").is(":checked"));
}

function updateTable(ancientSouls, borbLevel, newHze, buffedMPZ, newAncientSouls, singlePass) {
    $("#transcensionTable tbody").html("");
    $("#transcensionTable tbody").append(
        "<tr><td>"+ancientSouls.toLocaleString()+"</td><td>"+borbLevel+"</td><td>"+this.newHze.toLocaleString()
        +"</td><td>"+buffedMPZ.toFixed(2) + (buffedMPZ<2?" (2)":"")
        +"</td><td>"+getDuration(borbLevel,newHze)+"</td></tr>"
    );
    if (singlePass) return;
    while (newHze < 5.46e6) {
        nextTrans = refresh(false, newAncientSouls, true);
        ancientSouls = nextTrans[0];
        borbLevel = nextTrans[1];
        newHze = nextTrans[2];
        buffedMPZ = nextTrans[3];
        newAncientSouls = nextTrans[4];
        $("#transcensionTable tbody").append(
            "<tr><td>"+ancientSouls.toLocaleString()+"</td><td>"+borbLevel+"</td><td>"+this.newHze.toLocaleString()
            +"</td><td>"+buffedMPZ.toFixed(2) + (buffedMPZ<2?" (2)":"")
            +"</td><td>"+getDuration(borbLevel,newHze)+"</td></tr>"
        );
    }
    $("#transcensionTable tbody").append(
            "<tr><td>"+newAncientSouls.toLocaleString()+"</tr>"
        );
}

function getDuration(borbLevel, zone) {
    if (zone < 200000) return "";
    if (zone >= 5.46e6) return Infinity;
    let durationSeconds;
    if (zone < 1e6)
        durationSeconds = Math.floor(zone / 8050 * 3600);
    else {
        if (zone > ascensions[ascensions.length-1][0]) return Infinity;
        let borbLimit = borbLevel * 5000;
        durationSeconds = 1e6 / 8050 * 3600;
        let i = 0;
        let tableZone = 0;
        do {
            let element = ascensions[i++];
            tableZone = element[0];
            durationSeconds += element[1];
            if (tableZone > (borbLimit + 499)) {
                let n = tableZone - borbLimit;
                let zonesTraveled = n * n / 10830;
                durationSeconds += Math.ceil(zonesTraveled / 8050 * 3600);
            }
            durationSeconds += 3600;
        } while (tableZone < zone)
        
    }
    let hours = Math.floor(durationSeconds / 3600);
    if (hours < 72) {
        let minutes = Math.floor((durationSeconds - (hours * 3600)) / 60);
        let seconds = durationSeconds - hours * 3600 - minutes * 60;
        if (hours   < 10) { hours   = "0" + hours; }
        if (minutes < 10) { minutes = "0" + minutes; }
        if (seconds < 10) { seconds = "0" + seconds; }
        return hours + ":" + minutes + ":" + seconds;
    } else {
        let dl = durationSeconds;
        let years = Math.floor(dl / 31557600);
        dl -= years * 31557600;
        let days = Math.floor(dl / 86400);
        dl -= days * 86400;
        hours = dl / 3600;
        return (years > 0 ? years.toLocaleString() + "y " : "") + days + "d " + hours.toFixed(2) + "h";
    }
}

$(function() {
    if (localStorage) {
        $("#simulator").prop("checked", localStorage.getItem("simulator")!=="false");
        if (localStorage.getItem("simulator")==="false") {
            changeSimulator();
        }
    }
});