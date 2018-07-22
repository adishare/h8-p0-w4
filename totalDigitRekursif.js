function totalDigitRekursif(angka) {
    var angkaStr = String(angka)
    var result = 0
    if(angkaStr.length == 1) return Number(angkaStr[0])
    result += Number(angkaStr[0])
    return Number(result) + totalDigitRekursif(angkaStr.slice(1))
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5