function kaliTerusRekursif(angka) {
  var angkaStr = String(angka)
  var result = 1
  var tampung = 0
  if(angkaStr.length == 1) return Number(angkaStr[0])
  
  result *= Number(angkaStr[0])
  tampung = Number(result) * kaliTerusRekursif(angkaStr.slice(1))
  
  if(String(tampung).length > 1) return kaliTerusRekursif(tampung)
  return tampung
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
