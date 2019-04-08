// var camera ,scene ,renderer,axis,cube;
// var i,j,k;
// var arrCubes = [];
// var diffaxis = [];
// var kashish = 0;
// var speed = 0.01;
// scene= new THREE.Scene();
//
//
//
// //create a group and add the two cubes
// //These cubes can now be rotated / scaled etc as a group
//
// // group.add( cubeA );
// // group.add( cubeB );
// //
// // scene.add( group );
//    scene= new THREE.Scene();
//
//     camera= new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
//    renderer =new THREE.WebGLRenderer();
//    renderer.setSize(window.innerWidth/1.07,window.innerHeight);
//    document.body.appendChild(renderer.domElement);
//     // var control=new THREE.OrbitControls(camera,renderer.domElement);
//     // control.update();
//
//     function cubes(){
//
//       var cube_lbh = llloptimiser()
//        var length=cube_lbh[0];
//        var breath=cube_lbh[1];
//        var height=cube_lbh[2];
//        var l = lengthInput.value;
//        var b = lengthInput.value;
//        var h = lengthInput.value;
//   lr=length;
//   br=breath;
//   hr=height;
//      var count = 0;
//    scene.remove(cube);
//    var geometry = new THREE.BoxGeometry( length,breath, height);
//
//        var material = new THREE.MeshBasicMaterial( { color: 0xffffff ,wireframe:true} );
//         cube = new THREE.Mesh( geometry, material );
//
//    scene.add(cube);
//     for(var i=-((length/2)-l/2); i<(length-((length/2)-l/2));i+=parseInt(l)){
//        for(var j=-((breath/2)-b/2);j<(breath-((breath/2)-b/2));j+=parseInt(b)){
//            for(var k=-((height/2)-h/2);k<(height-((height/2)-h/2));k+=parseInt(h)){
//
//
//            var geometry1 = new THREE.BoxGeometry(l,b,h);
//            var material1 = new THREE.MeshBasicMaterial( { color:getRandomColor()} );
//            var cube1 = new THREE.Mesh( geometry1, material1 );
//
//            cube1.position.x = i;
//            cube1.position.y =j;
//            cube1.position.z=k;
//
//            scene.add(cube1);
//            cube.add(cube1);
//           count+= 1;
//
//        }
//    }
//    }
//    if(length <= 10){
//      camera.position.z=(length)*3.6;
//    }
//    else if( (length > 10) && ( length <=30) ){
//      camera.position.z=length*5.4;
//    }
//    else if( (length > 30) && ( length<=60) ){
//      camera.position.z=length*6.6;
//    }
//    else{
//    camera.position.z=length*1.5;
//    }
//    return length;
//
//    }
//
//
//  function cuboid(){
//    var cuboid_lbh = lbhoptimiser();
//     var length=cuboid_lbh[0];
//     var breath=cuboid_lbh[1];
//     var height=cuboid_lbh[2];
//     var l = lengthInput.value;
//     var b = breadthInput.value;
//     var h = heightInput.value;
//
//   var count = 0;
// scene.remove(cube);
// var geometry = new THREE.BoxGeometry( length,breath, height);
//
//     var material = new THREE.MeshBasicMaterial( { color: 0xffffff ,wireframe:true} );
//      cube = new THREE.Mesh( geometry, material );
//
// scene.add(cube);
//  for(var i=-((length/2)-l/2); i<(length-((length/2)-l/2));i+=parseInt(l)){
//     for(var j=-((breath/2)-b/2);j<(breath-((breath/2)-b/2));j+=parseInt(b)){
//         for(var k=-((height/2)-h/2);k<(height-((height/2)-h/2));k+=parseInt(h)){
//         var geometry1 = new THREE.BoxGeometry(l,b,h);
//         var material1 = new THREE.MeshBasicMaterial( { color:getRandomColor()} );
//         var cube1 = new THREE.Mesh( geometry1, material1 );
//
//         cube1.position.x = i;
//         cube1.position.y =j;
//         cube1.position.z=k;
//
//         scene.add(cube1);
//         cube.add(cube1);
//        count+= 1;
//
//     }
// }
// }
//
//
// }
//
// function cylinder(l,b,h,a3,b3,c3,flag){
//   var r;
//   var length=l*a3;
//   var breath=b*c3;
//   var height=h*b3;
//
//
// var count = 0;
//
// var geometry = new THREE.BoxGeometry(length,breath, height);
//
//   var material = new THREE.MeshBasicMaterial( { color: 0xffffff ,wireframe:true} );
//    cube = new THREE.Mesh( geometry, material );
//
// if(kashish % 6 == 0){
//
// for(i = 0;i<arrCubes.length;i++){
//   scene.remove(arrCubes[i]);
// }
// }
//
// if(flag==0){
// arrCubes.push(cube);
// scene.add(cube);
// kashish += 1;
// cube.position.x = -40;
// cube.position.y = 10;
// // cube.rotation.y += 0.01;
//  axis = new THREE.Vector3(0,-10,0).normalize();
//  diffaxis.push(axis);
// }
//
// if(flag==1){
// kashish += 1;
//
// arrCubes.push(cube);
//
// cube.position.x = 0;
//   cube.position.y = 10;
//
// scene.add(cube);
// // cube.rotation.y += 0.01;
// var axis = new THREE.Vector3(0,1,0).normalize();
// diffaxis.push(axis);
// }
//
// if(flag==2){
// kashish += 1;
//
// arrCubes.push(cube);
// cube.position.x = 40;
//   cube.position.y = 10;
// scene.add(cube);
// // cube.rotation.y += 0.01;
//  axis = new THREE.Vector3(0,10,0).normalize();
//  diffaxis.push(axis);
// }
//
// if(flag==3){
// kashish += 1;
//
// arrCubes.push(cube);
// cube.position.x = -30;
// cube.position.y = -15;
//
// scene.add(cube);
// // cube.rotation.y += 0.01;
//  axis = new THREE.Vector3(0,10,0).normalize();
//  diffaxis.push(axis);
// }
//
// if(flag==4){
// kashish += 1;
//
// arrCubes.push(cube);
// cube.position.x = 0;
// cube.position.y = -15;
// scene.add(cube);
// // cube.rotation.y += 0.01;
//  axis = new THREE.Vector3(0,10,0).normalize();
//  diffaxis.push(axis);
// }
//
// if(flag==5){
// kashish += 1;
//
// arrCubes.push(cube);
// cube.position.x = 30;
// cube.position.y = -15;
// scene.add(cube);
// // cube.rotation.y += 0.01;
//  axis = new THREE.Vector3(0,10,0).normalize();
//  diffaxis.push(axis);
// }
// var p = 0,q = 0,r = 0;
//      for(p=-((length/2)-l/2); p<(length-((length/2)-l/2));p+=parseInt(l)){
//         for(q=-((breath/2)-b/2);q<(breath-((breath/2)-b/2));q+=parseInt(b)){
//           for(r=-((height/2)-h/2);r<(height-((height/2)-h/2));r+=parseInt(h)){
//
//
//       var geometry1 = new THREE.CylinderGeometry(l/2,b/2,h,10);
//       var material1 = new THREE.MeshBasicMaterial( { color:getRandomColor()} );
//       var cube1 = new THREE.Mesh( geometry1, material1 );
//
//       cube1.position.x = p;
//       cube1.position.y =q;
//       cube1.position.z=r;
//       scene.add(cube1);
//       cube.add(cube1);
//      count+= 1;
//
//   }
// }
//
// }
//
// }
//
//
// function supercylinder(l,b,h,a3,b3,c3){
// console.log(l,b,h);
//   var length=l*a3;
//   var breath=b*c3;
//   var height=h*b3;
//
// var count = 0;
//
// var geometry = new THREE.BoxGeometry(length ,breath, height);
//
//   var material = new THREE.MeshBasicMaterial( { color: 0xffffff ,wireframe:true} );
//    cube = new THREE.Mesh( geometry, material );
//
// if(kashish % 6 == 0){
// for(i = 0;i<arrCubes.length;i++){
//   scene.remove(arrCubes[i]);
// }
// }
// kashish+= 6;
// scene.add(cube);
//
// for(var i=-((length/2)-l/2); i<(length-((length/2)-l/2));i+=l){
//   for(var j=-((breath/2)-b/2);j<(breath-((breath/2)-b/2));j+=b){
//       for(var k=-((height/2)-h/2);k<(height-((height/2)-h/2));k+=h){
//
//
//       var geometry1 = new THREE.CylinderGeometry(l/2,b/2,h,8);
//       console.log(l,b,h);
//       var material1 = new THREE.MeshBasicMaterial( { color:getRandomColor()} );
//       var cube1 = new THREE.Mesh( geometry1, material1 );
//
//       cube1.position.x = i;
//       cube1.position.y =j;
//       cube1.position.z=k;
//
//       scene.add(cube1);
//       cube.add(cube1);
//      count+= 1;
//
//   }
// }
// }
//
// }
//
//
//
//     function getRandomColor() {
//         var letters = '0123456789ABCDEF';
//         var color = '#';
//         for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//      }
//
//
//
//
//  var render =fun+ction(){
//     renderer.render(scene,camera);
// };
//
// var GameLoop=function(){
//   // cube.rotation.x+=0.02;
//     requestAnimationFrame(GameLoop);
//
//     //
//     // control.update();
//     render();
// };
// GameLoop();
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var camera ,scene ,renderer,axis,cube;
var i,j,k;
var arrCubes = [];
var diffaxis = [];
var kashish = 0;
var speed = 0.01;
var lr,br,hr,s;

var openRotate = document.querySelector('.openRotate');
var closeRotate = document.querySelector('.StopRotate');
var applyPic = document.querySelector('.packimage');

openRotate.addEventListener('click',function(){
  s = setInterval(open,10);

})

closeRotate.addEventListener('click',function(){
clearInterval(s);
})

applyPic.addEventListener('click',function(){
apply();
})

   scene= new THREE.Scene();

    camera= new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
   renderer =new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth,window.innerHeight);
   document.body.appendChild(renderer.domElement);


    function cubes(l){

      var cube_lbh = llloptimiser()
       var length = cube_lbh[0];
       var breath = cube_lbh[1];
       var height = cube_lbh[2];
       var l = l;
       var b = l;
       var h = l;
       lr=length;
       br=breath;
       hr=height;

     var count = 0;
   scene.remove(cube)
   var geometry = new THREE.BoxGeometry( length,breath, height);

       var material = new THREE.MeshBasicMaterial( { color: 0xffffff ,wireframe:true} );
        cube = new THREE.Mesh( geometry, material );

   scene.add(cube);
    for(var i=-((length/2)-l/2); i<(length-((length/2)-l/2));i+=parseInt(l)){
       for(var j=-((breath/2)-b/2);j<(breath-((breath/2)-b/2));j+=parseInt(b)){
           for(var k=-((height/2)-h/2);k<(height-((height/2)-h/2));k+=parseInt(h)){


           var geometry1 = new THREE.BoxGeometry(l,b,h);
           var material1 = new THREE.MeshBasicMaterial( { color:getRandomColor()} );
           var cube1 = new THREE.Mesh( geometry1, material1 );

           cube1.position.x = i;
           cube1.position.y =j;
           cube1.position.z=k;

           scene.add(cube1);
           cube.add(cube1);
          count+= 1;

       }
   }
   }

   if((length+breath+height) <= 10){
     camera.position.z=(length+breath+height)*1;
   }
   else if( ( (length+breath+height) > 10) && ( (length+breath+height)<=30) ){
     camera.position.z=(length+breath+height)*1.8;
   }
   else if( ( (length+breath+height) > 30) && ( (length+breath+height)<=60) ){
     camera.position.z=(length+breath+height)*0.5;
   }
   else if( ( (length+breath+height) > 100) && ( (length+breath+height)<=200) ){
     camera.position.z=(length+breath+height)*1;
   }
   else{
   camera.position.z=(length+breath+height)*0.5;
   }
}

function supercubes(l){

  var cube_lbh = superllloptimiser();
   var length = cube_lbh[0];
   var breath = cube_lbh[1];
   var height = cube_lbh[2];
   var l = l;
   var b = l;
   var h = l;
   lr=length;
   br=breath;
   hr=height;

 var count = 0;
scene.remove(cube)
var geometry = new THREE.BoxGeometry( length,breath, height);

   var material = new THREE.MeshBasicMaterial( { color: 0xffffff ,wireframe:true} );
    cube = new THREE.Mesh( geometry, material );

scene.add(cube);
for(var i=-((length/2)-l/2); i<(length-((length/2)-l/2));i+=parseInt(l)){
   for(var j=-((breath/2)-b/2);j<(breath-((breath/2)-b/2));j+=parseInt(b)){
       for(var k=-((height/2)-h/2);k<(height-((height/2)-h/2));k+=parseInt(h)){


       var geometry1 = new THREE.BoxGeometry(l,b,h);
       var material1 = new THREE.MeshBasicMaterial( { color:getRandomColor()} );
       var cube1 = new THREE.Mesh( geometry1, material1 );

       cube1.position.x = i;
       cube1.position.y =j;
       cube1.position.z=k;

       scene.add(cube1);
       cube.add(cube1);
      count+= 1;

   }
}
}

if((length+breath+height) <= 10){
 camera.position.z=(length+breath+height)*1;
}
else if( ( (length+breath+height) > 10) && ( (length+breath+height)<=30) ){
 camera.position.z=(length+breath+height)*1.8;
}
else if( ( (length+breath+height) > 30) && ( (length+breath+height)<=60) ){
 camera.position.z=(length+breath+height)*0.5;
}
else if( ( (length+breath+height) > 100) && ( (length+breath+height)<=200) ){
 camera.position.z=(length+breath+height)*1;
}
else{
camera.position.z=(length+breath+height)*0.5;
}
}


 function cuboid(l,b,h){
   var cuboid_lbh = lbhoptimiser()
    var length= cuboid_lbh[0];
    var breath= cuboid_lbh[1];
    var height= cuboid_lbh[2];
    // var l = lengthInput.value;
    // var b = breadthInput.value;
    // var h = heightInput.value;

    lr=length;
    br=breath;
    hr=height;

  var count = 0;
scene.remove(cube)
var geometry = new THREE.BoxGeometry( length,breath, height);

    var material = new THREE.MeshBasicMaterial( { color: 0xffffff ,wireframe:true} );
     cube = new THREE.Mesh( geometry, material )

scene.add(cube);
 for(var i=-((length/2)-l/2); i<(length-((length/2)-l/2));i+=parseInt(l)){
    for(var j=-((breath/2)-b/2);j<(breath-((breath/2)-b/2));j+=parseInt(b)){
        for(var k=-((height/2)-h/2);k<(height-((height/2)-h/2));k+=parseInt(h)){


        var geometry1 = new THREE.BoxGeometry(l,b,h);
        var material1 = new THREE.MeshBasicMaterial( { color:getRandomColor()} );
        var cube1 = new THREE.Mesh( geometry1, material1 );

        cube1.position.x = i;
        cube1.position.y =j;
        cube1.position.z=k;

        scene.add(cube1);
        cube.add(cube1);
       count+= 1;

    }
}
}

if((length+breath+height) <= 10){
  camera.position.z=(length+breath+height)*1;
}
else if( ( (length+breath+height) > 10) && ( (length+breath+height)<=30) ){
  camera.position.z=(length+breath+height)*1.8;
}
else if( ( (length+breath+height) > 30) && ( (length+breath+height)<=60) ){
  camera.position.z=(length+breath+height)*0.5;
}
else if( ( (length+breath+height) > 100) && ( (length+breath+height)<=200) ){
  camera.position.z=(length+breath+height)*1;
}
else{
camera.position.z=(length+breath+height)*0.5;
}

}

function supercuboid(l,b,h){
  var cuboid_lbh = superlbhoptimiser()
   var length= cuboid_lbh[0];
   var breath= cuboid_lbh[1];
   var height= cuboid_lbh[2];
   // var l = lengthInput.value;
   // var b = breadthInput.value;
   // var h = heightInput.value;

   lr=length;
   br=breath;
   hr=height;

 var count = 0;
scene.remove(cube)
var geometry = new THREE.BoxGeometry( length,breath, height);

   var material = new THREE.MeshBasicMaterial( { color: 0xffffff ,wireframe:true} );
    cube = new THREE.Mesh( geometry, material );

scene.add(cube);
for(var i=-((length/2)-l/2); i<(length-((length/2)-l/2));i+=parseInt(l)){
   for(var j=-((breath/2)-b/2);j<(breath-((breath/2)-b/2));j+=parseInt(b)){
       for(var k=-((height/2)-h/2);k<(height-((height/2)-h/2));k+=parseInt(h)){


       var geometry1 = new THREE.BoxGeometry(l,h,b);
       var material1 = new THREE.MeshBasicMaterial( { color:getRandomColor()} );
       var cube1 = new THREE.Mesh( geometry1, material1 );

       cube1.position.x = i;
       cube1.position.y =j;
       cube1.position.z=k;

       scene.add(cube1);
       cube.add(cube1);
      count+= 1;

   }
}
}

if((length+breath+height) <= 10){
 camera.position.z=(length+breath+height)*1;
}
else if( ( (length+breath+height) > 10) && ( (length+breath+height)<=30) ){
 camera.position.z=(length+breath+height)*1.8;
}
else if( ( (length+breath+height) > 30) && ( (length+breath+height)<=60) ){
 camera.position.z=(length+breath+height)*0.5;
}
else if( ( (length+breath+height) > 100) && ( (length+breath+height)<=200) ){
 camera.position.z=(length+breath+height)*1;
}
else{
camera.position.z=(length+breath+height)*0.5;
}

}
function supercylinder(l,b,h){
      var cylinder_lbh = supercylinderoptimiser();
      var length= cylinder_lbh[0];
      var breath= cylinder_lbh[1];
      var height= cylinder_lbh[2];

      lr=length;
      br=breath;
      hr=height;

     // var l = upperRadiusInput.value;
     // var b = lowerRadiusInput.value;
     // var h = lengthInput.value;
     var big=Math.max(l,b);
     // var length = 10
     // var breath = 63;
     // var height = 20;


    // lr= length;
    //  br=breath;
    //  hr= height;
scene.remove(cube)
var geometry = new THREE.BoxGeometry( length,breath, height);

    var material = new THREE.MeshBasicMaterial( { color: 0xffffff,wireframe:true } );
     cube = new THREE.Mesh( geometry, material );
    cube.position.z=5;

scene.add( cube )
var count=0;



 for(var i=-((length/2)-big); i<(length-((length/2)-big));i+=2*big){
for(var j=-(breath/2)+h/2;j<breath -((breath/2)-h/2);j+=h){
       for(var k=-((height/2)-big);k<(height-((height/2)-big));k+=2*big){

                var geometry1 = new THREE.CylinderGeometry(l,b,h,8);

           //       var cubeMaterials=[
           //
           //  new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load("img2.jpg"),side: THREE.DoubleSide}),
           //
           //  new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load("img2.jpg"),side: THREE.DoubleSide}),
           // new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load("img2.jpg"),side: THREE.DoubleSide}),
           //  // new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load("img2.jpg"),side: THREE.DoubleSide}),
           //  // new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load("img2.jpg"),side: THREE.DoubleSide}),
           //  // new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load("img2.jpg"),side: THREE.DoubleSide}),
           //       ]

                var material1 = new THREE.MeshBasicMaterial({ color:getRandomColor()});
                var cube1= new THREE.Mesh( geometry1, material1 );


       cube1.position.x =i ;
       cube1.position.y =j;
      cube1.position.z=k;
       scene.add(cube1);
       cube.add(cube1);
       count+=1

    }
 }
  }
console.log(count);

if((length+breath+height) <= 10){
  camera.position.z=(length+breath+height)*1;
}
else if( ( (length+breath+height) > 10) && ( (length+breath+height)<=30) ){
  camera.position.z=(length+breath+height)*1.8;
}
else if( ( (length+breath+height) > 30) && ( (length+breath+height)<=60) ){
  camera.position.z=(length+breath+height)*0.5;
}
else if( ( (length+breath+height) > 100) && ( (length+breath+height)<=200) ){
  camera.position.z=(length+breath+height)*1;
}
else{
camera.position.z=(length+breath+height)*0.5;
}
}

function cylinder(l,b,h){
      var cylinder_lbh = cylinderlbhoptimiser();
      var length= cylinder_lbh[0];
      var breath= cylinder_lbh[1];
      var height= cylinder_lbh[2];

      lr=length;
      br=breath;
      hr=height;

     // var l = upperRadiusInput.value;
     // var b = lowerRadiusInput.value;
     // var h = lengthInput.value;
     var big=Math.max(l,b);
     // var length = 10
     // var breath = 63;
     // var height = 20;


    // lr= length;
    //  br=breath;
    //  hr= height;
scene.remove(cube)
var geometry = new THREE.BoxGeometry( length,breath, height);

    var material = new THREE.MeshBasicMaterial( { color: 0xffffff,wireframe:true } );
     cube = new THREE.Mesh( geometry, material );
    cube.position.z=5;

scene.add( cube )
var count=0;



 for(var i=-((length/2)-big); i<(length-((length/2)-big));i+=2*big){
for(var j=-(breath/2)+h/2;j<breath -((breath/2)-h/2);j+=h){
       for(var k=-((height/2)-big);k<(height-((height/2)-big));k+=2*big){

                var geometry1 = new THREE.CylinderGeometry(l,b,h,8);

           //       var cubeMaterials=[
           //
           //  new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load("img2.jpg"),side: THREE.DoubleSide}),
           //
           //  new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load("img2.jpg"),side: THREE.DoubleSide}),
           // new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load("img2.jpg"),side: THREE.DoubleSide}),
           //  // new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load("img2.jpg"),side: THREE.DoubleSide}),
           //  // new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load("img2.jpg"),side: THREE.DoubleSide}),
           //  // new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load("img2.jpg"),side: THREE.DoubleSide}),
           //       ]

                var material1 = new THREE.MeshBasicMaterial({ color:getRandomColor()});
                var cube1= new THREE.Mesh( geometry1, material1 );


       cube1.position.x =i ;
       cube1.position.y =j;
      cube1.position.z=k;
       scene.add(cube1);
       cube.add(cube1);
       count+=1

    }
 }
  }
console.log(count);

if((length+breath+height) <= 10){
  camera.position.z=(length+breath+height)*1;
}
else if( ( (length+breath+height) > 10) && ( (length+breath+height)<=30) ){
  camera.position.z=(length+breath+height)*1.8;
}
else if( ( (length+breath+height) > 30) && ( (length+breath+height)<=60) ){
  camera.position.z=(length+breath+height)*0.5;
}
else if( ( (length+breath+height) > 100) && ( (length+breath+height)<=200) ){
  camera.position.z=(length+breath+height)*1;
}
else{
camera.position.z=(length+breath+height)*0.5;
}
}

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
     }

     function open(){
       cube.rotation.x += 0.02;
       cube.rotation.y += 0.02;
     }

     function close(){
       cube.rotation.x += 0;
     }

     var geometry = new THREE.BoxGeometry( lr,br, hr);
              var material = new THREE.MeshBasicMaterial( { color: 0xffffff ,wireframe:true} );
               cube = new THREE.Mesh( geometry, material );
     scene.remove(cube)



 var render =function(){
    renderer.render(scene,camera);
};

var GameLoop=function(){
  // cube.rotation.x+=0.02;
    requestAnimationFrame(GameLoop);
     // cube.rotation.x+=0.02;

    render();
};
GameLoop();
