var demo = new CANNON.Demo(), size = 0.5;
var a,b,c;
demo.addScene("Fall by bottom",function(){
  console.log(units.value);
  console.log(mass.value);
  var lbh;
  if(userItem=="Fragile"){
    if(userDesign=="CUBOID"){
      lbh = lbhoptimiser();
    }
    else if(userDesign=="CUBE"){
      lbh = llloptimiser();
    }
    else{
      lbh = cylinderlbhoptimiser();
    }
  }
  else if(userItem=="Super Fragile")
  {
    if(userDesign=="CYLINDER"){
      lbh = supercylinderoptimiser();
    }
  }
  else{
    if(userDesign=="CUBOID"){
      lbh = lbhoptimiser();
    }
    else if(userDesign=="CUBE"){
      lbh = llloptimiser();
    }
    else{
      lbh = cylinderlbhoptimiser();
    }
  }
  if(lbh[0]+lbh[1]+lbh[2]>10 && lbh[0]+lbh[1]+lbh[2]<=20){
    lbh[0]= lbh[0]/10;
    lbh[1]= lbh[1]/10;
    lbh[2]= lbh[2]/10;
  }
  else if(lbh[0]+lbh[1]+lbh[2]>20 && lbh[0]+lbh[1]+lbh[2]<=40){
    lbh[0]= lbh[0]/20;
    lbh[1]= lbh[1]/20;
    lbh[2]= lbh[2]/20;
  }
  else{
    lbh[0]= lbh[0]/30;
    lbh[1]= lbh[1]/30;
    lbh[2]= lbh[2]/30;
  }

  var world = demo.getWorld();
  world.broadphase = new CANNON.NaiveBroadphase();
  world.iterations = 10;
  var groundShape = new CANNON.Plane();
  var groundMaterial = new CANNON.Material("groundMaterial");
  // var ground_ground_cm = new CANNON.ContactMaterial(groundMaterial, groundMaterial, {
  //     friction: 0.4,
  //     restitution: 0,
  //     contactEquationStiffness: 1e8,
  //     contactEquationRelaxation: 3,
  //     frictionEquationStiffness: 1e8,
  //     frictionEquationRegularizationTime: 3,
  // });
  // world.addContactMaterial(ground_ground_cm);
  var groundBody = new CANNON.Body({ mass: 0, material: groundMaterial });
  groundBody.addShape(groundShape);
  world.addBody(groundBody);
  demo.addVisual(groundBody);

  var boxBody1 = new CANNON.Body({mass: units.value*mass.value, material: groundMaterial});
  var boxShape1 = new CANNON.Box(new CANNON.Vec3(lbh[0],lbh[1],lbh[2]));
  boxBody1.addShape(boxShape1);
  boxBody1.position.set(3,0,10);
   world.gravity.set(0,0,-9.28);
  world.addBody(boxBody1);
  demo.addVisual(boxBody1);
  if(userItem=="Fragile"){
    if(userDesign=="CUBOID"){
      lbh = lbhoptimiser();
    }
    else if(userDesign=="CUBE"){
      lbh = llloptimiser();
    }
    else{
      lbh = cylinderlbhoptimiser();
    }
  }
  else if(userItem=="Super Fragile")
  {
    if(userDesign=="CYLINDER"){
      lbh = supercylinderoptimiser();
    }
  }
  else{
    if(userDesign=="CUBOID"){
      lbh = lbhoptimiser();
    }
    else if(userDesign=="CUBE"){
      lbh = llloptimiser();
    }
    else{
      lbh = cylinderlbhoptimiser();
    }
  }


  if(((mass.value)*1000)*(units.value)>=(lbh[0]*lbh[1]*strength.value)){
    var p = new CANNON.Body({ mass: 1 });
         p.addShape(new CANNON.Particle());
         p.position.set(-3,0,20);
         world.addBody(p);
         demo.addVisual(p);


  }
  else{

      a = lbh[0];
      b = lbh[1];
      c = lbh[2]

  }

 });
 demo.addScene("Fall by left",function(){
   var lbh;
   if(userItem=="Fragile"){
     if(userDesign=="CUBOID"){
       lbh = lbhoptimiser();
     }
     else if(userDesign=="CUBE"){
       lbh = llloptimiser();
     }
     else{
       lbh = cylinderlbhoptimiser();
     }
   }
   else if(userItem=="Super Fragile")
   {
     if(userDesign=="CYLINDER"){
       lbh = supercylinderoptimiser();
     }
   }
   else{
     if(userDesign=="CUBOID"){
       lbh = lbhoptimiser();
     }
     else if(userDesign=="CUBE"){
       lbh = llloptimiser();
     }
     else{
       lbh = cylinderlbhoptimiser();
     }
   }
   if(lbh[0]+lbh[1]+lbh[2]>10 && lbh[0]+lbh[1]+lbh[2]<=20){
     lbh[0]= lbh[0]/10;
     lbh[1]= lbh[1]/10;
     lbh[2]= lbh[2]/10;
   }
   else if(lbh[0]+lbh[1]+lbh[2]>20 && lbh[0]+lbh[1]+lbh[2]<=40){
     lbh[0]= lbh[0]/20;
     lbh[1]= lbh[1]/20;
     lbh[2]= lbh[2]/20;
   }
   else{
     lbh[0]= lbh[0]/30;
     lbh[1]= lbh[1]/30;
     lbh[2]= lbh[2]/30;
   }

   var world = demo.getWorld();
   world.broadphase = new CANNON.NaiveBroadphase();
   world.iterations = 10;
   var groundShape = new CANNON.Plane();
   var groundMaterial = new CANNON.Material("groundMaterial");
   // var ground_ground_cm = new CANNON.ContactMaterial(groundMaterial, groundMaterial, {
   //     // friction: 0.4,
   //     // restitution: 0,
   //     // contactEquationStiffness: 1e8,
   //     // contactEquationRelaxation: 3,
   //     // frictionEquationStiffness: 1e8,
   //     // frictionEquationRegularizationTime: 3,
   // });
   // world.addContactMaterial(ground_ground_cm);
   var groundBody = new CANNON.Body({ mass: 0, material: groundMaterial });
   groundBody.addShape(groundShape);
   world.addBody(groundBody);
   demo.addVisual(groundBody);

   var boxBody1 = new CANNON.Body({mass: 1, material: groundMaterial});
   var boxShape1 = new CANNON.Box(new CANNON.Vec3(lbh[2],lbh[1],lbh[0]));
   boxBody1.addShape(boxShape1);
   boxBody1.position.set(3,0,10);
    world.gravity.set(0,0,-9);
   world.addBody(boxBody1);
   demo.addVisual(boxBody1);
   if(userItem=="Fragile"){
     if(userDesign=="CUBOID"){
       lbh = lbhoptimiser();
     }
     else if(userDesign=="CUBE"){
       lbh = llloptimiser();
     }
     else{
       lbh = cylinderlbhoptimiser();
     }
   }
   else if(userItem=="Super Fragile")
   {
     if(userDesign=="CYLINDER"){
       lbh = supercylinderoptimiser();
     }
   }
   else{
     if(userDesign=="CUBOID"){
       lbh = lbhoptimiser();
     }
     else if(userDesign=="CUBE"){
       lbh = llloptimiser();
     }
     else{
       lbh = cylinderlbhoptimiser();
     }
   }

   if(((mass.value)*1000)*(units.value)>=(lbh[1]*lbh[2]*strength.value)){
     var p = new CANNON.Body({ mass: 1 });
          p.addShape(new CANNON.Particle());
          p.position.set(-3,0,20);
          world.addBody(p);
          demo.addVisual(p);
   }
   else {
     a = lbh[2];
     b = lbh[1];
     c = lbh[0]
   }
  });
  demo.addScene("Fall by right",function(){
    var lbh;
    if(userItem=="Fragile"){
      if(userDesign=="CUBOID"){
        lbh = lbhoptimiser();
      }
      else if(userDesign=="CUBE"){
        lbh = llloptimiser();
      }
      else{
        lbh = cylinderlbhoptimiser();
      }
    }
    else if(userItem=="Super Fragile")
    {
      if(userDesign=="CYLINDER"){
        lbh = supercylinderoptimiser();
      }
    }
    else{
      if(userDesign=="CUBOID"){
        lbh = lbhoptimiser();
      }
      else if(userDesign=="CUBE"){
        lbh = llloptimiser();
      }
      else{
        lbh = cylinderlbhoptimiser();
      }
    }

    if(lbh[0]+lbh[1]+lbh[2]>10 && lbh[0]+lbh[1]+lbh[2]<=20){
      lbh[0]= lbh[0]/10;
      lbh[1]= lbh[1]/10;
      lbh[2]= lbh[2]/10;
    }
    else if(lbh[0]+lbh[1]+lbh[2]>20 && lbh[0]+lbh[1]+lbh[2]<=40){
      lbh[0]= lbh[0]/20;
      lbh[1]= lbh[1]/20;
      lbh[2]= lbh[2]/20;
    }
    else{
      lbh[0]= lbh[0]/30;
      lbh[1]= lbh[1]/30;
      lbh[2]= lbh[2]/30;
    }

    var world = demo.getWorld();
    world.broadphase = new CANNON.NaiveBroadphase();
    world.iterations = 10;
    var groundShape = new CANNON.Plane();
    var groundMaterial = new CANNON.Material("groundMaterial");

    // var ground_ground_cm = new CANNON.ContactMaterial(groundMaterial, groundMaterial, {
    //     friction: 0.4,
    //     restitution: 0,
    //     contactEquationStiffness: 1e8,
    //     contactEquationRelaxation: 3,
    //     frictionEquationStiffness: 1e8,
    //     frictionEquationRegularizationTime: 3,
    // });
    // world.addContactMaterial(ground_ground_cm);
    var groundBody = new CANNON.Body({ mass: 0, material: groundMaterial });
    groundBody.addShape(groundShape);
    world.addBody(groundBody);
    demo.addVisual(groundBody);

    var boxBody1 = new CANNON.Body({mass: 1, material: groundMaterial});
    var boxShape1 = new CANNON.Box(new CANNON.Vec3(lbh[0],lbh[2],lbh[1]));
    boxBody1.addShape(boxShape1);
    boxBody1.position.set(3,0,10);
     world.gravity.set(0,0,-9);
    world.addBody(boxBody1);
    demo.addVisual(boxBody1);
    if(userItem=="Fragile"){
      if(userDesign=="CUBOID"){
        lbh = lbhoptimiser();
      }
      else if(userDesign=="CUBE"){
        lbh = llloptimiser();
      }
      else{
        lbh = cylinderlbhoptimiser();
      }
    }
    else if(userItem=="Super Fragile")
    {
      if(userDesign=="CYLINDER"){
        lbh = supercylinderoptimiser();
      }
    }
    else{
      if(userDesign=="CUBOID"){
        lbh = lbhoptimiser();
      }
      else if(userDesign=="CUBE"){
        lbh = llloptimiser();
      }
      else{
        lbh = cylinderlbhoptimiser();
      }
    }

    if(((mass.value)*1000)*(units.value)>=(lbh[0]*lbh[2]*strength.value)){
      var p = new CANNON.Body({ mass: 1 });
           p.addShape(new CANNON.Particle());
           p.position.set(-3,0,20);
           world.addBody(p);
           demo.addVisual(p);
    }
    else {
      a = lbh[0];
      b = lbh[2];
      c = lbh[1];
    }
   });
   demo.addScene("BOXES OVER BOXES",function(){
     var lbh;
     var x = a;
     var y = b;
     var z = c;
     if(a+b+c>10 && a+b+c<=20){
       a= a/10;
       b= b/10;
       c= c/10;
     }
     else if(a+b+c>20 && a+b+c<=40){
       a=a/20;
       b= b/20;
       c= c/20;
     }
     else{
       a= a/30;
       b= b/30;
       c= c/30;
     }

     var world = demo.getWorld();
     world.broadphase = new CANNON.NaiveBroadphase();
     // world.iterations = 10;
     var groundShape = new CANNON.Plane();
     var ballMat = new CANNON.Material("ballMat");
     var pillowMat = new CANNON.Material("pillowMat");
     var groundMaterial = new CANNON.Material("ballMat");


     var ground_ground_cm = new CANNON.ContactMaterial(ballMat, pillowMat, {
         friction:0.3 ,
         restitution: 0.3,
         contactEquationStiffness: 1e8,
         contactEquationRelaxation: 3,
         frictionEquationStiffness: 1e8,
         frictionEquationRegularizationTime: 3,
     });
     world.addContactMaterial(ground_ground_cm);
     var groundBody = new CANNON.Body({ mass: 0, material: pillowMat });
     groundBody.addShape(groundShape);
     world.addBody(groundBody);
     demo.addVisual(groundBody);
     k0= Math.round(c*100)/100
     var k1 = Math.round(3*c*100)/100
     var k2 = Math.round(5*c*100)/100
     var k3 = Math.round(7*c*100)/100
     var k4 = Math.round(9*c*100)/100
     var k5 = Math.round(11*c*100)/100
     var k6 = Math.round(13*c*100)/100
     var k7 = Math.round(15*c*100)/100
     var k8 = Math.round(17*c*100)/100
     var k9 = Math.round(19*c*100)/100


     console.log(c);

     var boxBody1 = new CANNON.Body({mass: 0, material: pillowMat});
     var boxBody2 = new CANNON.Body({mass: 0, material: pillowMat});
      var boxBody3 = new CANNON.Body({mass: 0, material: pillowMat});
     var boxBody4 = new CANNON.Body({mass: 0, material: pillowMat});
     var boxBody5 = new CANNON.Body({mass: 0, material: pillowMat});
     var boxBody6 = new CANNON.Body({mass: 0, material: pillowMat});
     var boxBody7 = new CANNON.Body({mass: 0, material: pillowMat});
      var boxBody8 = new CANNON.Body({mass: 0, material: pillowMat});
     var boxBody9 = new CANNON.Body({mass: 0, material: pillowMat});
     var boxBody10 = new CANNON.Body({mass: 0, material: pillowMat});
      var boxShape = new CANNON.Box(new CANNON.Vec3(a,b,c));
     boxBody1.addShape(boxShape);
     boxBody2.addShape(boxShape);
      boxBody3.addShape(boxShape);
     boxBody4.addShape(boxShape);
     boxBody5.addShape(boxShape);
     boxBody6.addShape(boxShape);
     boxBody7.addShape(boxShape);
      boxBody8.addShape(boxShape);
     boxBody9.addShape(boxShape);
     boxBody10.addShape(boxShape);
      boxBody1.position.set(0,0,c);
     console.log(c);
     boxBody2.position.set(0,0,k1);
     console.log(k1);
       boxBody3.position.set(0,0,k2);
       console.log(k2);
      boxBody4.position.set(0,0,k3);
      boxBody5.position.set(0,0,k4);
      boxBody6.position.set(0,0,k5);
      boxBody7.position.set(0,0,k6);
      boxBody8.position.set(0,0,k7);
      boxBody9.position.set(0,0,k8);
      boxBody10.position.set(0,0,k9);
     // world.gravity.set(0,0,-10)

     world.addBody(boxBody1);
      world.addBody(boxBody2);
     world.addBody(boxBody3);
     world.addBody(boxBody4);
     world.addBody(boxBody5);
     world.addBody(boxBody6);
      world.addBody(boxBody7);
     world.addBody(boxBody8);
     world.addBody(boxBody9);
     world.addBody(boxBody10);
      demo.addVisual(boxBody1);
      demo.addVisual(boxBody2);
     demo.addVisual(boxBody3);
     demo.addVisual(boxBody4);
     demo.addVisual(boxBody5);

     demo.addVisual(boxBody6);
     demo.addVisual(boxBody7);
    demo.addVisual(boxBody8);
    demo.addVisual(boxBody9);
    demo.addVisual(boxBody10);

     var counter = 1;
     for(var i=9;i>1;i--){
     if(i*((mass.value)*1000)*(units.value)>=x*y*strength.value){
       console.log(i*((mass.value)*1000)*(units.value));
       console.log(x*y*strength.value);
       counter = counter+1
     }
   }
for(i=1;i<counter;i++){
  console.log("hello");
  var p = new CANNON.Body({ mass: 1 });
       p.addShape(new CANNON.Particle());
       p.position.set(2*i,0,20);
       world.addBody(p);
       demo.addVisual(p);
       world.gravity.set(0,0,-10)
       console.log("hello");

}
    });
