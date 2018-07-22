function digitPerkalianMinimum(InputAngka) {
    angkaArr = []
    for (var i=1; i<=InputAngka; i++){
      if(InputAngka%i === 0){
        angkaArr.push((i+''+InputAngka/i).length)
      }
    }
  return Math.min.apply(null, angkaArr)
  }
  
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2