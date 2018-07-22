function cariModus(arr) {
  var deretAngka = []
  var jumlahAngka = []
    
  for (var i=0;i<arr.length;i++) {
    if(deretAngka.indexOf(arr[i]) === -1) {
      deretAngka.push(arr[i])
      jumlahAngka.push(1)
    } else {
      jumlahAngka[deretAngka.indexOf(arr[i])] += 1
    }
  }

  var result = -1
  for(var j=0;j<jumlahAngka.length-1;j++){
    if(jumlahAngka.length>1 && jumlahAngka.indexOf(2) != -1  && jumlahAngka[j] > result){
      result = jumlahAngka[j]        
    } 
  }

  if (result != -1) return deretAngka[jumlahAngka.indexOf(result)]
  return result
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5,])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1

  //latihan
  function cariModus(arr) {
    var deretAngka = []
    var jumlahAngka = []
  
    for (var i=0;i<arr.length; i++){
      if(deretAngka.indexOf(arr[i]) === -1 ){
        deretAngka.push(arr[i])
        jumlahAngka.push(1)
      } else {
        jumlahAngka[deretAngka.indexOf(arr[i])]++
      } 
    }
  
    var result = 0
    for(var j=0;j<jumlahAngka.length; j++){
      if(jumlahAngka[j] > result){
        result = jumlahAngka[j]
      }
    }
    
    if(jumlahAngka.length>1 && jumlahAngka.indexOf(2) != -1){
      return deretAngka[jumlahAngka.indexOf(result)]
    } else {
      return -1
    }
  
  }