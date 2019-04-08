// var items = document.querySelector('.items');
// var userItem = items.value;
// var shapes = document.querySelector('.shapes ');
//
//  var userDesign = shapes.value;
// var dimensionsBlock = document.querySelector('.dimensions');
// var units = document.querySelector('.Units');
// var simulate = document.querySelector('.Simulate');
// var
// length,breadth,height,asklength,lengthInput,breadthInput,heightInput,askbreadth,askheight,upperRadiusInput,lowerRadiusInput,objectonScreen = 0;
// var acurateLength,acurateBreadth,acurateHeight;
// var factors;
// var askDimension = document.createElement('h4');
//
// /*Checking for Items*/
// items.addEventListener('change',function(){
//   userItem = items.value;
// })
//
// /*Checking For Shapes*/
// shapes.addEventListener('change',function(){
//   userDesign = shapes.value;
//   dimensionsBlock.innerHTML = "";
//
//   if(userDesign == "CUBE"){
//    askCubeDimension();
//   }
//  else if(userDesign == "CUBOID"){
//     askCuboidDimension();
//   }
//   else if(userDesign == "CYLINDER"){
//
//     askCylinderDimension();
//   }
//   else{
//   }
//
// });
//
// /*On Clicking Simulate Button*/
// simulate.addEventListener("click",function(){
//
//   if((userItem == "Fragile")||(userItem == "Less Damagable")){
// if(userDesign == "CUBE"){
// acurateLength = lengthInput.value;
//   if(!Number.isInteger(lengthInput)){
//     acurateLength = Math.round(lengthInput.value);
//   }
//  cubes();
//
// }
//  }
//
//   if((userItem == "Fragile")||(userItem == "Less Damagable")){
//    if(userDesign == "CUBOID"){
//      acurateLength = lengthInput.value;
//      acurateBreadth= breadthInput.value;
//      acurateHeight = heightInput.value;
//
//      if(!Number.isInteger(lengthInput)){
//        acurateLength = Math.round(lengthInput.value);
//      }
//
//      if(!Number.isInteger(breadthInput)){
//        acurateBreadth = Math.round(breadthInput.value);
//
//      }
//
//      if(!Number.isInteger(lengthInput)){
//        acurateHeight = Math.round(heightInput.value);
//      }
//
// // console.log(acurateLength,acurateBreadth,acurateHeight);
//
//       var factors = fragile(units.value);
//       // console.log(factors);
//      factors.sort();
//
//      cuboid();
//    }
//  }
//
//    // if(userItem == "Super Fragile"){
//    //   console.log("hello");
//    //   var factors = SuperFragile(units.value);
//    //  console.log(factors);
//    //  cuboid(lengthInput.value,heightInput.value,breadthInput.value,factors);
//    // }
//    //
//    // if(userItem == "Less Damagable"){
//    //    var factors = fragile(units.value);
//    //   console.log(factors);
//    //   cuboid(lengthInput.value,heightInput.value,breadthInput.value,factors);
//    // }
//
//    if((userItem == "Fragile")||(userItem == "Less Damagable")){
//     if(userDesign == "CYLINDER"){
//
//       factors = fragile(units.value);
//       var upper_radius = upperRadiusInput.value;
//       if(!Number.isInteger(upperRadiusInput)){
//         upper_radius = Math.round(upperRadiusInput.value);
//       }
//       var lower_radius = lowerRadiusInput.value;
//       if(!Number.isInteger(lowerRadiusInput)){
//         lower_radius = Math.round(lowerRadiusInput.value);
//       }
//       var acurateHeight = lengthInput.value;
//       if(!Number.isInteger(lengthInput)){
//         acurateHeight = Math.round(lengthInput.value);
//       }
//
//        cylinder(upper_radius,lower_radius,acurateHeight,factors[1],factors[0],factors[2],0);
//        cylinder(upper_radius,lower_radius,acurateHeight,factors[1],factors[2],factors[0],1);
//        cylinder(upper_radius,lower_radius,acurateHeight,factors[2],factors[0],factors[1],2);
//        cylinder(upper_radius,lower_radius,acurateHeight,factors[2],factors[1],factors[0],3);
//        cylinder(upper_radius,lower_radius,acurateHeight,factors[0],factors[1],factors[2],4);
//        cylinder(upper_radius,lower_radius,acurateHeight,factors[0],factors[2],factors[1],5);
//     }
//   }
//
//   if(userItem == "Super Fragile"){
//
//     if(userDesign == "CYLINDER"){
//       factors = SuperFragile(units.value);
//       var upper_radius = upperRadiusInput.value;
//
//       if(!Number.isInteger(upperRadiusInput)){
//         upper_radius = Math.round(upperRadiusInput.value);
//       }
//       var lower_radius = lowerRadiusInput.value;
//       if(!Number.isInteger(lowerRadiusInput)){
//         lower_radius = Math.round(lowerRadiusInput.value);
//       }
//       var acurateHeight2 = lengthInput.value;
//       if(!Number.isInteger(lengthInput)){
//         acurateHeight2 = Math.round(lengthInput.value);
//       }
// console.log(upper_radius,lower_radius,acurateHeight2);
//       supercylinder(upper_radius,lower_radius,acurateHeight2,factors[0],factors[1],factors[2]);
//
//     }
//   }
//
//     //
//     // var cannon_org= document.createElement('script');
//     // cannon_org.src = "schteppe-cannon.js-569730f/build/cannon.js";
//     // document.body.appendChild(cannon_org);
//     //
//     // var cannon_demo = document.createElement('script');
//     // cannon_demo.src = "schteppe-cannon.js-569730f/build/cannon.demo.js";
//     // document.body.appendChild(cannon_demo);
//     //
//     //
//     //
//     // var cannon_dat = document.createElement('script');
//     // cannon_dat.src = "schteppe-cannon.js-569730f/libs/dat.gui.js";
//     // document.body.appendChild(cannon_dat);
//     //
//     // var cannon_Track = document.createElement('script');
//     // cannon_Track.src = "schteppe-cannon.js-569730f/libs/TrackballControls.js";
//     // document.body.appendChild(cannon_Track);
//     //
//     // var cannon_stats = document.createElement('script');
//     // cannon_stats.src = "schteppe-cannon.js-569730f/libs/Stats.js";
//     // document.body.appendChild(cannon_stats);
//     //
//     // var cannon_smoothie = document.createElement('script');
//     // cannon_smoothie.src = "schteppe-cannon.js-569730f/libs/smoothie.js";
//     // document.body.appendChild(cannon_smoothie);
//     //
//     // var cannon_detector = document.createElement('script');
//     // cannon_detector.src = "schteppe-cannon.js-569730f/libs/Detector.js";
//     // document.body.appendChild(cannon_detector);
//     //
//     // var dropping_box = document.createElement('script');
//     // dropping_box.src = "droping_box.js";
//     // document.body.appendChild(dropping_box);
//
// });
//
// function askCubeDimension(){
//   askDimension.innerHTML= "Enter the length";
//   askDimension.style.fontFamily ="'Lobster', cursive;";
//
//   lengthInput = document.createElement('input');
//   lengthInput.classList.add('form-control');
//   lengthInput.classList.add('add');
//
//   console.log(lengthInput.value);
//   dimensionsBlock.appendChild(askDimension);
//   dimensionsBlock.appendChild(lengthInput);
// }
//
// function askCuboidDimension(){
//   askDimension.innerHTML = "Enter the length,breadth,height in order";
//   askDimension.fontFamily = "'Lobster', cursive;";
//   askDimension.style.color = "#adff2f";
//   lengthInput = document.createElement('input');
//   lengthInput.classList.add('form-control');
//   lengthInput.classList.add('add');
//
//   breadthInput = document.createElement('input');
//   breadthInput.classList.add('form-control');
//   breadthInput.classList.add('add');
//
//   heightInput = document.createElement('input');
//   heightInput.classList.add('form-control');
//   heightInput.classList.add('add');
//
//   dimensionsBlock.appendChild(askDimension);
//   dimensionsBlock.appendChild(lengthInput);
//   dimensionsBlock.appendChild(breadthInput);
//   dimensionsBlock.appendChild(heightInput);
//
//
// return lengthInput,breadthInput,heightInput;
// }
//
// function askCylinderDimension(){
//
//       askDimension.innerHTML= "Enter the upper,bottom radius and length in order";
//       askDimension.style.fontFamily ="'Lobster', cursive;";
//
//
//       lengthInput = document.createElement('input');
//       lengthInput.classList.add('form-control');
//       lengthInput.classList.add('add');
//
//       upperRadiusInput = document.createElement('input');
//       upperRadiusInput.classList.add('form-control');
//       upperRadiusInput.classList.add('add');
//
//       lowerRadiusInput = document.createElement('input');
//       lowerRadiusInput.classList.add('form-control');
//       lowerRadiusInput.classList.add('add');
//
//
// dimensionsBlock.appendChild(askDimension);
//       dimensionsBlock.appendChild(upperRadiusInput);
//       dimensionsBlock.appendChild(lowerRadiusInput);
//       dimensionsBlock.appendChild(lengthInput);
//
// }






























var items = document.querySelector('.items');
var userItem = items.value;
var shapes = document.querySelector('.shapes ');
var option0 = shapes.options[0];
var option1 = shapes.options[1];
var option2 = shapes.options[2];
var option3 = shapes.options[3];

 var userDesign = shapes.value;
var dimensionsBlock = document.querySelector('.dimensions');
var units = document.querySelector('.Units');
var simulate = document.querySelector('.Simulate');
var
length,breadth,height,asklength,lengthInput,breadthInput,heightInput,askbreadth,askheight,upperRadiusInput,lowerRadiusInput,objectonScreen = 0;
var acurateLength,acurateBreadth,acurateHeight;
var factors;
var upper_radius,lower_radius,acurateHeight2;
var askDimension = document.createElement('h4');
var mass = document.querySelector('.mass');
var strength = document.querySelector('.strength');
var jump = document.querySelector('.jump');

jump.addEventListener('click',function(){
window.scrollTo(0, 1600);

})
simulate.addEventListener('click',function(){
  window.scrollTo(0, 800);
  m = mass.value;
  s = strength.value;

})
/*Checking for Items*/
items.addEventListener('change',function(){
  userItem = items.value;
  // if(userItem == "Super Fragile"){
  //   shapes.remove(shapes.options[0]);
  //    shapes.remove(shapes.options[1]);
  //     shapes.remove(shapes.options[2]);
  //     shapes.remove(shapes.options[3]);
  //     shapes.add(option3);
  //   // askCylinderDimension();
  //   if(userDesign== option3){
  //     askCylinderDimension();
  //   }
  // }
  //
  // if(userItem == "Fragile"){
  //   shapes.add(option0);
  //   shapes.add(option1);
  //   shapes.add(option2);
  //   shapes.add(option3);
  //
  // }

})

// if(userItem=="Super Fragile"){
//   askCylinderDimension();
// }

/*Checking For Shapes*/
shapes.addEventListener('change',function(){
  userDesign = shapes.value;
  dimensionsBlock.innerHTML = "";

  if(userDesign == "CUBE"){
   askCubeDimension();
 }
 else if(userDesign == "CUBOID"){
    askCuboidDimension();
  }
  else if(userDesign == "CYLINDER"){
    askCylinderDimension();
  }
  else{
  }

});

/*On Clicking Simulate Button*/
simulate.addEventListener("click",function(){
  if((userItem == "Fragile")||(userItem == "Less Damagable")){
if(userDesign == "CUBE"){
acurateLength = lengthInput.value;
  if(!Number.isInteger(lengthInput)){
    acurateLength = Math.round(lengthInput.value);
  }
 cubes(acurateLength);

}
 }

  if((userItem== "Fragile")||(userItem == "Less Damagable")){
   if(userDesign == "CUBOID"){
     acurateLength = lengthInput.value;
     acurateBreadth= breadthInput.value;
     acurateHeight = heightInput.value;



     if(!Number.isInteger(lengthInput)){
       acurateLength = Math.round(lengthInput.value);

     }

     if(!Number.isInteger(breadthInput)){
       acurateBreadth = Math.round(breadthInput.value);

     }

     if(!Number.isInteger(lengthInput)){
       acurateHeight = Math.round(heightInput.value);

     }



     cuboid(acurateLength,acurateBreadth,acurateHeight);
   }
 }

   // if(userItem == "Super Fragile"){
   //   console.log("hello");
   //   var factors = SuperFragile(units.value);
   //  console.log(factors);
   //  cuboid(lengthInput.value,heightInput.value,breadthInput.value,factors);
   // }
   //
   // if(userItem == "Less Damagable"){
   //    var factors = fragile(units.value);
   //   console.log(factors);
   //   cuboid(lengthInput.value,heightInput.value,breadthInput.value,factors);
   // }

   if((userItem== "Fragile")||(userItem == "Less Damagable")){
    if(userDesign == "CYLINDER"){

      // factors = fragile(units.value);
        upper_radius = upperRadiusInput.value;
      if(!Number.isInteger(upperRadiusInput)){
        upper_radius = Math.round(upperRadiusInput.value);
      }
        lower_radius = lowerRadiusInput.value;
      if(!Number.isInteger(lowerRadiusInput)){
        lower_radius = Math.round(lowerRadiusInput.value);
      }
        acurateHeight = lengthInput.value;
      if(!Number.isInteger(lengthInput)){
        acurateHeight = Math.round(lengthInput.value);
      }

       cylinder(upper_radius,lower_radius,acurateHeight);
    }
  }

  if(userItem == "Super Fragile"){
    if(userDesign == "CYLINDER"){
      factors = SuperFragile(units.value);


      if(!Number.isInteger(upperRadiusInput)){
        upper_radius = Math.round(upperRadiusInput.value);
      }
       lower_radius = lowerRadiusInput.value;
      if(!Number.isInteger(lowerRadiusInput)){
        lower_radius = Math.round(lowerRadiusInput.value);
      }
       acurateHeight2 = lengthInput.value;
      if(!Number.isInteger(lengthInput)){
        acurateHeight2 = Math.round(lengthInput.value);
      }
console.log(upper_radius,lower_radius,acurateHeight2);
      supercylinder(upper_radius,lower_radius,acurateHeight2);

    }
  }
  // if(userItem == "Super Fragile"){
  //   if(userDesign == "CUBE"){
  //
  //     acurateLength = lengthInput.value;
  //       if(!Number.isInteger(lengthInput)){
  //         acurateLength = Math.round(lengthInput.value);
  //       }
  //       console.log(acurateLength);
  //      supercubes(acurateLength);
  // }
  // }
  // if(userItem == "Super Fragile"){
  //   if(userDesign == "CUBOID"){
  //
  //     acurateLength = lengthInput.value;
  //     acurateBreadth= breadthInput.value;
  //     acurateHeight = heightInput.value;
  //
  //
  //
  //     if(!Number.isInteger(lengthInput)){
  //       acurateLength = Math.round(lengthInput.value);
  //
  //     }
  //
  //     if(!Number.isInteger(breadthInput)){
  //       acurateBreadth = Math.round(breadthInput.value);
  //
  //     }
  //
  //     if(!Number.isInteger(lengthInput)){
  //       acurateHeight = Math.round(heightInput.value);
  //
  //     }
  //
  //
  //
  //     supercuboid(acurateLength,acurateBreadth,acurateHeight);
  //
  //   }
  // }
});

function askCubeDimension(){
  askDimension.innerHTML= "Enter the length";
  askDimension.style.fontFamily =" monospace";

  lengthInput = document.createElement('input');
  lengthInput.classList.add('form-control');
  lengthInput.classList.add('add');

  console.log(lengthInput.value);
  dimensionsBlock.appendChild(askDimension);
  dimensionsBlock.appendChild(lengthInput);
}

function askCuboidDimension(){
  askDimension.innerHTML = "Enter the length,breadth,height in order";
  lengthInput = document.createElement('input');
  lengthInput.classList.add('form-control');
  lengthInput.classList.add('add');

  breadthInput = document.createElement('input');
  breadthInput.classList.add('form-control');
  breadthInput.classList.add('add');

  heightInput = document.createElement('input');
  heightInput.classList.add('form-control');
  heightInput.classList.add('add');

  dimensionsBlock.appendChild(askDimension);
  dimensionsBlock.appendChild(lengthInput);
  dimensionsBlock.appendChild(breadthInput);
  dimensionsBlock.appendChild(heightInput);


return lengthInput,breadthInput,heightInput;
}

// if(userItem == "Super Fragile"){
//   if(userDesign == "CYLINDER"){
//
//   }
// }



function askCylinderDimension(){

      askDimension.innerHTML= "Enter the upper,bottom radius and length in order";
      askDimension.style.fontFamily =" monospace";

      upperRadiusInput = document.createElement('input');
      upperRadiusInput.classList.add('form-control');
      upperRadiusInput.classList.add('add');

      lowerRadiusInput = document.createElement('input');
      lowerRadiusInput.classList.add('form-control');
      lowerRadiusInput.classList.add('add');

      lengthInput = document.createElement('input');
      lengthInput.classList.add('form-control');
      lengthInput.classList.add('add');


dimensionsBlock.appendChild(askDimension);
      dimensionsBlock.appendChild(upperRadiusInput);
      dimensionsBlock.appendChild(lowerRadiusInput);
      dimensionsBlock.appendChild(lengthInput);
}
