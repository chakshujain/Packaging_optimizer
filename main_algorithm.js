function sum(l){
  var total = 0;
  for(var i=0;i<l.length;i++){
    total = total + l[i];
  }
return total;
}
function find_factors(num ){
  var l = [];
  for(i = 1;i<num+1;i++){
    if(num % i == 0)
    l.push(i);
  }
  return l;
}

function SuperFragile(no_of_boxes){
  var n = find_factors(no_of_boxes);
// console.log(n);
  var comb = combRep(n,2);
  var filtered = [];
  var temp = [];
  var final = [];
  var bottle_dimensions = [];
  for(i = 0;i<comb.length;i++){
    if(comb[i][0]*comb[i][1] == no_of_boxes)
         filtered.push(comb[i]);
  }

  for(i = 0;i<filtered.length;i++){
    // console.log(Math.max.apply(null,filtered[i]));
    temp.push(Math.max.apply(null,filtered[i])-Math.min.apply(null,filtered[i]));
  }
  for(i = 0;i<filtered.length;i++){
    if(Math.min.apply(null,temp)==(Math.max.apply(null,filtered[i])-Math.min.apply(null,filtered[i]))){
         final.push(filtered[i]);
       }
  }
  for(i = 0;i<final.length;i++){
      bottle_dimensions.push(final[0][0]);
      bottle_dimensions.push(final[0][1]);
  }
  // console.log(bottle_dimensions);
    bottle_dimensions.push(1);
    return bottle_dimensions;
}
// console.log(bottles());

   function fragile(no_of_boxes){
     var ck;
      var  n = find_factors(no_of_boxes);
      var comb = combRep(n, 3);
      var   filtered = []
      var temp = []
      var temp1 = []
      var superfinal = []
      var index = -1

      comb.forEach((i)=>{
        if (i[0]*i[1]*i[2]==no_of_boxes){
        filtered.push(i);
      }
      })

      filtered.forEach((i)=>{

          // i.sort(sortNumber());
          var a =Math.abs(i[0]-i[1]);
          var b = Math.abs(i[0]-i[2]);
          var c = Math.abs(i[1]-i[2]);
          temp.push([a,b,c]);
        });

      temp.forEach((i)=>{
          temp1.push(sum(i));
      })

      temp.forEach((i)=>{
         index = index + 1;
           if(Math.min.apply(null,temp1) == sum(i)){

              ck = filtered[index];
           }

      })
      return ck;

}


function combRep(arr, l) {
  if(l === void 0) l = arr.length; // Length of the combinations
  var data = Array(l),             // Used to store state
      results = [];                // Array of results
  (function f(pos, start) {        // Recursive function
    if(pos === l) {                // End reached
      results.push(data.slice());  // Add a copy of data to results
      return;
    }
    for(var i=start; i<arr.length; ++i) {
      data[pos] = arr[i];          // Update data
      f(pos+1, i);                 // Call f recursively
    }
  })(0, 0);                        // Start at index 0
  return results;                  // Return results
}

function sortNumber(a,b) {
       return a - b;
   }

function lbhoptimiser()
{
  factors = fragile(units.value);
  var l = acurateLength;
  var b =acurateBreadth;
  var h= acurateHeight;
  var ck;
  var temp = []
  var temp1 = []
  var index = -1
  var dimensionsarray = [
  [l*factors[1],b*factors[0],h*factors[2]],
  [l*factors[1],b*factors[2],h*factors[0]],
  [l*factors[2],b*factors[1],h*factors[0]],
  [l*factors[2],b*factors[0],h*factors[1]],
  [l*factors[0],b*factors[2],h*factors[1]],
  [l*factors[0],b*factors[1],h*factors[2]]]

  dimensionsarray.forEach((i)=>{
      var a = Math.abs(i[0]-i[1]);
      var b = Math.abs(i[0]-i[2]);
      var c = Math.abs(i[1]-i[2]);
      temp.push([a,b,c]);
  })
  temp.forEach((i)=>{
    temp1.push(sum(i))
  })

  temp.forEach((i)=>{
     index = index + 1;
       if(Math.min.apply(null,temp1) == sum(i)){
         ck = dimensionsarray[index]
       }
     })
return ck;
}


function superlbhoptimiser()
{
  factors = SuperFragile(units.value);
  var l = acurateLength;
  var b =acurateBreadth;
  var h= acurateHeight;
  var ck;
  var temp = []
  var temp1 = []
  var index = -1
  var dimensionsarray = [
  [l*factors[1],b*1,h*factors[0]],
  [l*factors[1],b*1,h*factors[0]],
  [l*factors[1],b*1,h*factors[0]],
  [l*factors[0],b*1,h*factors[1]],
  [l*factors[0],b*1,h*factors[1]],
  [l*factors[0],b*1,h*factors[1]]]

  dimensionsarray.forEach((i)=>{
      var a = Math.abs(i[0]-i[1]);
      var b = Math.abs(i[0]-i[2]);
      var c = Math.abs(i[1]-i[2]);
      temp.push([a,b,c]);
  })
  temp.forEach((i)=>{
    temp1.push(sum(i))
  })

  temp.forEach((i)=>{
     index = index + 1;
       if(Math.min.apply(null,temp1) == sum(i)){
         ck = dimensionsarray[index]
       }
     })
return ck;
}
function llloptimiser()
{
  factors = fragile(units.value);
  var l = acurateLength;
  var ck;
  var temp = []
  var temp1 = []
  var index = -1
  var dimensionsarray = [
  [l*factors[1],l*factors[0],l*factors[2]],
  [l*factors[1],l*factors[2],l*factors[0]],
  [l*factors[2],l*factors[1],l*factors[0]],
  [l*factors[2],l*factors[0],l*factors[1]],
  [l*factors[0],l*factors[2],l*factors[1]],
  [l*factors[0],l*factors[1],l*factors[2]]]

  dimensionsarray.forEach((i)=>{
      var a = Math.abs(i[0]-i[1]);
      var b = Math.abs(i[0]-i[2]);
      var c = Math.abs(i[1]-i[2]);
      temp.push([a,b,c]);
  })
  temp.forEach((i)=>{
    temp1.push(sum(i))
  })

  temp.forEach((i)=>{
     index = index + 1;
       if(Math.min.apply(null,temp1) == sum(i)){
         ck = dimensionsarray[index]
       }
     })
return ck;
}
function cylinderlbhoptimiser()
{
  factors = fragile(units.value);
  console.log(factors);
  var l = upper_radius;
  var b = lower_radius;
  var h= acurateHeight;
  var big=Math.max(l,b);
  var ck;
  var temp = []
  var temp1 = []
  var index = -1
  var dimensionsarray = [
  [2*big*factors[1],h*factors[0],2*big*factors[2]],
  [2*big*factors[1],h*factors[2],2*big*factors[0]],
  [2*big*factors[2],h*factors[1],2*big*factors[0]],
  [2*big*factors[2],h*factors[0],2*big*factors[1]],
  [2*big*factors[0],h*factors[2],2*big*factors[1]],
  [2*big*factors[0],h*factors[1],2*big*factors[2]]]
  console.log(dimensionsarray);

  dimensionsarray.forEach((i)=>{
      var a = Math.abs(i[0]-i[1]);
      var b = Math.abs(i[0]-i[2]);
      var c = Math.abs(i[1]-i[2]);
      temp.push([a,b,c]);
  })
  temp.forEach((i)=>{
    temp1.push(sum(i))
  })

  temp.forEach((i)=>{
     index = index + 1;
       if(Math.min.apply(null,temp1) == sum(i)){
         ck = dimensionsarray[index];

       }
     })
return ck;
}
function supercylinderoptimiser()
{
  factors = SuperFragile(units.value);
  console.log(factors);
  var l = upper_radius;

  var b = lower_radius;
  var h= acurateHeight2;
  var big=Math.max(l,b);
  var ck;
  var temp = []
  var temp1 = []
  var index = -1
  console.log(l,b,h);


  var dimensionsarray = [
  [2*big*factors[1],h*1,2*big*factors[0]],
  [2*big*factors[1],h*1,2*big*factors[0]],
  [2*big*factors[1],h*1,2*big*factors[0]],
  [2*big*factors[0],h*1,2*big*factors[1]],
  [2*big*factors[0],h*1,2*big*factors[1]],
  [2*big*factors[0],h*1,2*big*factors[1]]
]
  console.log(dimensionsarray);

  dimensionsarray.forEach((i)=>{
      var a = Math.abs(i[0]-i[1]);
      var b = Math.abs(i[0]-i[2]);
      var c = Math.abs(i[1]-i[2]);
      temp.push([a,b,c]);
  })
  temp.forEach((i)=>{
    temp1.push(sum(i))
  })

  temp.forEach((i)=>{
     index = index + 1;
       if(Math.min.apply(null,temp1) == sum(i)){
         ck = dimensionsarray[index];

       }
     })
     console.log(ck);
return ck;
}
function superllloptimiser()
{
  factors = SuperFragile(units.value);
  var l = acurateLength;
  var ck;
  var temp = []
  var temp1 = []
  var index = -1
  var dimensionsarray = [
  [l*factors[1],l*1,l*factors[0]],
  [l*factors[1],l*1,l*factors[0]],
  [l*factors[1],l*1,l*factors[0]],
  [l*factors[0],l*1,l*factors[1]],
  [l*factors[0],l*1,l*factors[1]],
  [l*factors[0],l*1,l*factors[1]]]

  dimensionsarray.forEach((i)=>{
      var a = Math.abs(i[0]-i[1]);
      var b = Math.abs(i[0]-i[2]);
      var c = Math.abs(i[1]-i[2]);
      temp.push([a,b,c]);
  })
  temp.forEach((i)=>{
    temp1.push(sum(i))
  })

  temp.forEach((i)=>{
     index = index + 1;
       if(Math.min.apply(null,temp1) == sum(i)){
         ck = dimensionsarray[index]
       }

     })
     console.log(ck);
return ck;
}
