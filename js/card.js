var table = [
"爱","哥林多前书","13:4","爱是恒久忍耐，又有恩慈;  爱是不嫉妒，爱是不自夸，不张狂",
"恨", "利未记", "19:17", "不可心里恨你的弟兄；  总要指摘你的邻舍，免得因他担罪。",
"情","箴言","21:28","作假见证的必灭亡；   惟有听真情而言的，其言长存。",
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
"夜", "　创世记", " 1:16 ","于是　神造了两个大光，大的管昼，小的管夜，又造众星",
"星","哥林多前书","15:41 ","日有日的荣光，月有月的荣光，星有星的荣光；这星和那星的荣光也有分别。",
"辰","启示录","6:13 ","天上的星辰坠落于地，如同无花果树被大风摇动，落下未熟的果子一样。",
"生","诗篇","22:10 ","我自出母胎就被交在你手里；  从我母亲生我，你就是我的　神。",
"老", "箴言", "22:6 ", "教养孩童，使他走当行的道，  就是到老他也不偏离。",
"病","出埃及记","23:25 ","你们要侍奉耶和华你们的　神，他必赐福与你的粮与你的水，也必从你们中间除去疾病。",
"死","诗篇","49:17 ","因为，他死的时候什么也不能带去；  他的荣耀不能随他下去。",
"油","诗篇","55:21 ","他的口如奶油光滑，  他的心却怀着争战；  他的话比油柔和，  其实是拔出来的刀。",
"盐","马太福音","5:13 ","你们是世上的盐。盐若失了味，怎能叫它再咸呢？以后无用，不过丢在外面，被人践踏了。 ",
"醋", "箴言", " 10:26 ", "懒惰人叫差他的人  如醋倒牙，如烟薰目。",
"风", "诗篇", "78:39 ", "他想到他们不过是血气，  是一阵去而不返的风。 ",
"花", "雅歌", "2:1 ", "我是沙仑的玫瑰花（或作“水仙花”），  是谷中的百合花。",
"雪","箴言","25:13 ","忠信的使者叫差他的人心里舒畅，  就如在收割时有冰雪的凉气。",
"霜", "约伯记", " 38:29 ", "冰出于谁的胎？  天上的霜是谁生的呢？",
"雨", "箴言", "25:23 ", "北风生雨，  谗谤人的舌头也生怒容。",
"草", "雅歌", "1:16 ", "我的良人哪，你甚美丽可爱！  我们以青草为床榻  ",
"树","诗篇","1:3 ","他要像一棵树栽在溪水旁，  按时候结果子，  叶子也不枯干。  凡他所做的尽都顺利。",
"木", "路加福音", "6:41 ", "为什么看见你弟兄眼中有刺，却不想自己眼中有梁木呢？",
];

var camera, scene, renderer;
var controls;
var objects = [];
var targets = { table: [], sphere: [], helix: [], grid: [] };

function card(){
    this.initCard=init;
    this.animate=animate;
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

        spherical.set(800, phi, theta);

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
        var y = - (i * 58) + 450;

        var object = new THREE.Object3D();

        cylindrical.set(800, theta, y);

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

        object.position.x = ((i % 5) * 400) - 800;
        object.position.y = (- (Math.floor(i / 5) % 5) * 400) + 800;
        object.position.z = (Math.floor(i / 25)) * 1000 - 2000;

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
    var bigelement=document.getElementById("bigelement");
    var length=bigelement.childNodes.length
    for(let j=length-1;j>1;j--)
    bigelement.removeChild(bigelement.childNodes[j]);
  //  bigelement.children[0].style.backgroundColor="linear-gradient(to bottom right, red , blue)"; 
  //  bigelement.children[0].style.backgroundRepeat="no-repeat"; 
   // bigelement.children[0].style.backgroundPosition="center center"; 
    bigelement.style.display = "block";

    let i=event.currentTarget.children[0].innerText-1;
     //序号
     var number = document.createElement('div');
     number.className = 'bignumber';
     number.textContent = i+1;
     bigelement.appendChild(number);

     //名
     var symbol = document.createElement('div');
     symbol.className = 'bigsymbol';
     symbol.textContent = table[i*4];
     bigelement.appendChild(symbol);
     //经文
     var symbol = document.createElement('div');
     symbol.className = 'bigcont';
     symbol.innerHTML = table[i*4+3];
     bigelement.appendChild(symbol);
     //位置
     var details = document.createElement('div');
     details.className = 'bigdetails';
     details.innerHTML = table[i*4 + 1]  + table[i*4 + 2];
     bigelement.appendChild(details);
   
}

function onBigelementClick(event) {
    event.preventDefault();
    setTimeout(()=>{ document.getElementById("bigelement").style.display = "none";},500);
   

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
    scene.rotation.y = Date.now() * 0.0005;
   
    renderer.render(scene, camera);

}
