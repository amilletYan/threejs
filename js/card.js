var table = [
    "爱", "哥林多前书", "13:4", "爱是恒久忍耐，又有恩慈;  爱是不嫉妒，爱是不自夸，不张狂",
    "恨", "利未记", "19:17", "不可心里恨你的弟兄；  总要指摘你的邻舍，免得因他担罪。",
    "情", "箴言", "21:28", "作假见证的必灭亡；   惟有听真情而言的，其言长存。",
    "愁", "箴言", "15:13", "心中喜乐，面带笑容；  心里忧愁，灵被损伤。",
    "喜", "箴言", "12:20", "图谋恶事的，心存诡诈；  劝人和睦的，便得喜乐。",
    "怒", "箴言", "14:17", "轻易发怒的，行事愚妄；  设立诡计的，被人恨恶。",
    "哀", "马太福音", "5:4 ", "哀恸的人有福了！  因为他们必得安慰。",
    "乐", "雅歌", "7:6", "我所爱的，你何其美好！  何其可悦，使人欢畅喜乐！",
    "悲", "诗篇", "77:3", "我想念　神，就烦燥不安；  我沉吟悲伤，心便发昏。",
    "欢", "箴言", "15:15 ", " 困苦人的日子都是愁苦；  心中欢畅的，常享丰筵。  ",
    "离", "彼得前书", "3:11 ", "也要离恶行善，  寻求和睦，一心追赶。",
    "合", "马可福音", "10:7 ", "因此，人要离开父母，与妻子连合，二人成为一体。  ",
    "日", "创世记", "1:5 ", "神称光为昼，称暗为夜。有晚上，有早晨，这是头一日。",
    "夜", "　创世记", " 1:16 ", "于是　神造了两个大光，大的管昼，小的管夜，又造众星",
    "星", "哥林多前书", "15:41 ", "日有日的荣光，月有月的荣光，星有星的荣光；这星和那星的荣光也有分别。",
    "辰", "启示录", "6:13 ", "天上的星辰坠落于地，如同无花果树被大风摇动，落下未熟的果子一样。",
    "生", "诗篇", "22:10 ", "我自出母胎就被交在你手里；  从我母亲生我，你就是我的　神。",
    "老", "箴言", "22:6 ", "教养孩童，使他走当行的道，  就是到老他也不偏离。",
    "病", "出埃及记", "23:25 ", "你们要侍奉耶和华你们的　神，他必赐福与你的粮与你的水，也必从你们中间除去疾病。",
    "死", "诗篇", "49:17 ", "因为，他死的时候什么也不能带去；  他的荣耀不能随他下去。",
    "油", "诗篇", "55:21 ", "他的口如奶油光滑，  他的心却怀着争战；  他的话比油柔和，  其实是拔出来的刀。",
    "盐", "马太福音", "5:13 ", "你们是世上的盐。盐若失了味，怎能叫它再咸呢？以后无用，不过丢在外面，被人践踏了。 ",
    "醋", "箴言", " 10:26 ", "懒惰人叫差他的人  如醋倒牙，如烟薰目。",
    "风", "诗篇", "78:39 ", "他想到他们不过是血气，  是一阵去而不返的风。 ",
    "花", "雅歌", "2:1 ", "我是沙仑的玫瑰花（或作“水仙花”），  是谷中的百合花。",
    "雪", "箴言", "25:13 ", "忠信的使者叫差他的人心里舒畅，  就如在收割时有冰雪的凉气。",
    "霜", "约伯记", " 38:29 ", "冰出于谁的胎？  天上的霜是谁生的呢？",
    "雨", "箴言", "25:23 ", "北风生雨，  谗谤人的舌头也生怒容。",
    "草", "雅歌", "1:16 ", "我的良人哪，你甚美丽可爱！  我们以青草为床榻  ",
    "树", "诗篇", "1:3 ", "他要像一棵树栽在溪水旁，  按时候结果子，  叶子也不枯干。  凡他所做的尽都顺利。",
    "木", "路加福音", "6:41 ", "为什么看见你弟兄眼中有刺，却不想自己眼中有梁木呢？",
    "笑", "哥林多前书", "7:30", "哀哭的，要像不哀哭；快乐的，要像不快乐；置买的，要像无有所得；",
    "哭", "箴言", "31:25", "能力和威仪是她的衣服；  她想到日后的景况就喜笑。",
    "跑", "箴言", "4:12 ", "你行走，脚步必不致狭窄；  你奔跑，也不致跌倒。",
    "跳", "诗篇", " 30:11", "你已将我的哀哭变为跳舞，  将我的麻衣脱去，给我披上喜乐，",
    "睡", "箴言", "3:24", "你躺下，必不惧怕；  你躺卧，睡得香甜。",
    "忧", "箴言", "12:25 ", "人心忧虑，屈而不伸；  一句良言，使心欢乐。",
    "福", "诗篇", "24:5", "他必蒙耶和华赐福，  又蒙救他的　神使他成义。",
    "惨", "以赛亚书", "21:2 ", "令人凄惨的异象已默示于我。  诡诈的行诡诈，毁灭的行毁灭。",
    "未", "传道书", "12:1", "你趁着年幼、衰败的日子尚未来到，就是你所说，我毫无喜乐的那些年日未曾临近之先，当记念造你的主。",
    "现", "箴言", "8:32", "众子啊，现在要听从我，  因为谨守我道的，便为有福。",
    "过", "诗篇", "144:4", "人好像一口气；  他的年日如同影儿快快过去。",
    "活", "诗篇","49:8 ", "叫他长远活着，不见朽坏；  因为赎他生命的价值极贵，  只可永远罢休。 ",
    "命", "诗篇", "25:20 ", "求你保护我的性命，搭救我，  使我不致羞愧，因为我投靠你。",
    "说", "箴言", "12:17 ", "说出真话的，显明公义；  作假见证的，显出诡诈。",
    "喊", "诗篇", "47:1", "万民哪，你们都要拍掌！  要用夸胜的声音向　神呼喊！",
    "惊", "诗篇", "64:1 ", "神啊，我哀叹的时候，求你听我的声音！  求你保护我的性命，不受仇敌的惊恐！",
    "恐", "诗篇", "34:4 ", "我曾寻求耶和华，他就应允我，  救我脱离了一切的恐惧。 ",
    "烦", "传道书", "2:23", " 因为他日日忧虑，他的劳苦成为愁烦，连夜间心也不安。这也是虚空。",
    "恼", "传道书", "7:9", "你不要心里急躁恼怒，  因为恼怒存在愚昧人的怀中。",
    "怒", "箴言", "14:29", "不轻易发怒的，大有聪明；  性情暴躁的，大显愚妄。",
    "寂", "诗篇", "94:17", "若不是耶和华帮助我，  我就住在寂静之中了。",
    "酸", "耶利米书", "31:30", "但各人必因自己的罪死亡；凡吃酸葡萄的，自己的牙必酸倒。",
    "甜", "雅歌", " 2:3 ", "我的良人在男子中，  如同苹果树在树林中。  我欢欢喜喜坐在他的荫下，  尝他果子的滋味，觉得甘甜。",
    "苦", "马太福音", "11:28 ", "凡劳苦担重担的人可以到我这里来，我就使你们得安息。",
    "咸", "马可福音", "9:50", "盐本是好的，若失了味，可用什么叫它再咸呢？你们里头应当有盐，彼此和睦。",
    "晴", "撒母耳记下", "23:4 ", "他必像日出的晨光，  如无云的清晨，  雨后的晴光，  使地发生嫩草。",
    "慌", "传道书", "12:5 ", "人怕高处，路上有惊慌，杏树开花，蚱蜢成为重担，人所愿的也都废掉；因为人归他永远的家，吊丧的在街上往来。  ",
    "伤", "箴言", "17:22", "喜乐的心乃是良药；  忧伤的灵使骨枯干。",
    "幼", "诗篇", "71:17 ", "神啊，自我年幼时，你就教训我；  直到如今，我传扬你奇妙的作为。"
];

var camera, scene, renderer;
var controls;
var objects = [];
var targets = { table: [], sphere: [], helix: [], grid: [] };

function card() {
    this.initCard = init;
    this.animate = animate;
}

function init() {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 5500;

    scene = new THREE.Scene();
    for (var i = 0; i < table.length; i += 4) {

        var element = document.createElement('div');
        element.className = 'element';
        element.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')';
        element.addEventListener("click", onElementClick);
        document.getElementById("bigelement").addEventListener("click", onBigelementClick);

        //序号
        var number = document.createElement('div');
        number.className = 'number';
        number.textContent = (i / 4) + 1;
        element.appendChild(number);

        //名
        var symbol = document.createElement('div');
        symbol.className = 'symbol';
        symbol.textContent = table[i];
        element.appendChild(symbol);

        //经文位置
        var details = document.createElement('div');
        details.className = 'details';
        details.innerHTML = table[i + 1] + '<br>' + table[i + 2];
        element.appendChild(details);

        var object = new THREE.CSS3DObject(element);
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;
        scene.add(object);

        objects.push(object);

    }

    // sphere

    var vector = new THREE.Vector3();
    var spherical = new THREE.Spherical();

    for (var i = 0, l = objects.length; i < l; i++) {

        var phi = Math.acos(-1 + (2 * i) / l);
        var theta = Math.sqrt(l * Math.PI) * phi;

        var object = new THREE.Object3D();

        spherical.set(1200, phi, theta);

        object.position.setFromSpherical(spherical);

        vector.copy(object.position).multiplyScalar(2);

        object.lookAt(vector);

        targets.sphere.push(object);

    }

    // helix

    var vector = new THREE.Vector3();
    var cylindrical = new THREE.Cylindrical();

    for (var i = 0, l = objects.length; i < l; i++) {

        var theta = i * 0.5 + Math.PI;
        var y = - (i * 55) + 1650;//位置

        var object = new THREE.Object3D();

        cylindrical.set(900, theta, y);

        object.position.setFromCylindrical(cylindrical);

        vector.x = object.position.x * 2;
        vector.y = object.position.y;
        vector.z = object.position.z * 2;

        object.lookAt(vector);

        targets.helix.push(object);

    }

    // grid

    for (var i = 0; i < objects.length; i++) {

        var object = new THREE.Object3D();

        object.position.x = ((i % 4) * 400) - 600;
        object.position.y = (- (Math.floor(i / 4) % 5) * 700) + 1400;
        object.position.z = (Math.floor(i / 20)) * 400 ;

        targets.grid.push(object);

    }

    //

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);

    //

    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.8;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);

    var button = document.getElementById('sphere');
    button.addEventListener('click', function (event) {

        transform(targets.sphere, 2000);

    }, false);

    var button = document.getElementById('helix');
    button.addEventListener('click', function (event) {

        transform(targets.helix, 2000);

    }, false);

    var button = document.getElementById('grid');
    button.addEventListener('click', function (event) {

        transform(targets.grid, 2000);

    }, false);

    transform(targets.sphere, 2000);

    //
    window.addEventListener('resize', onWindowResize, false);
}

//targets装的是空object3D，它有当前模式下object该在的位置；objects装的是css3Dobject，有元素信息，scene中就是这个object，它有当前位置
function transform(targets, duration) {

    TWEEN.removeAll();

    for (var i = 0; i < objects.length; i++) {

        var object = objects[i];
        var target = targets[i];

        new TWEEN.Tween(object.position)
            .to({ x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

        new TWEEN.Tween(object.rotation)
            .to({ x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function onElementClick(event) {
    event.preventDefault();
    var bigelement = document.getElementById("bigelement");
    var length = bigelement.childNodes.length
    for (let j = length - 1; j > 1; j--)
        bigelement.removeChild(bigelement.childNodes[j]);
    //  bigelement.children[0].style.backgroundColor="linear-gradient(to bottom right, red , blue)"; 
    //  bigelement.children[0].style.backgroundRepeat="no-repeat"; 
    // bigelement.children[0].style.backgroundPosition="center center"; 
    bigelement.style.display = "block";

    let i = event.currentTarget.children[0].innerText - 1;
    //序号
    var number = document.createElement('div');
    number.className = 'bignumber';
    number.textContent = i + 1;
    bigelement.appendChild(number);

    //名
    var symbol = document.createElement('div');
    symbol.className = 'bigsymbol';
    symbol.textContent = table[i * 4];
    bigelement.appendChild(symbol);
    //经文
    var symbol = document.createElement('div');
    symbol.className = 'bigcont';
    symbol.innerHTML = table[i * 4 + 3];
    bigelement.appendChild(symbol);
    //位置
    var details = document.createElement('div');
    details.className = 'bigdetails';
    details.innerHTML = table[i * 4 + 1] + table[i * 4 + 2];
    bigelement.appendChild(details);

}

function onBigelementClick(event) {
    event.preventDefault();
    setTimeout(() => { document.getElementById("bigelement").style.display = "none"; }, 500);


}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    render();

}

function animate() {
    render();
    requestAnimationFrame(animate);

    TWEEN.update();

    controls.update();

}

function render() {
    scene.rotation.y = Date.now() * 0.0003;

    renderer.render(scene, camera);

}
