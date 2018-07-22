function angkaPrima(angka) {
    result = true
    for (var i=2 ;i<angka-1;i++) {
      if(angka%i == 0) {
        result = false
      }
    }
    return result
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false
  console.log(angkaPrima(17));


  //inprove
  function angkaPrima(angka) {
    for (var i=2;i<angka;i++){
        if(angka%i === 0){
          return false
        }
    }
    return true
  }