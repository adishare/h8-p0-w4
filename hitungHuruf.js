function hitungHuruf(kata) {
  
    function perulangan (satuKata) {
      var tampung = []
      var banyakPerulangan = 0
      for (var i=0; i<satuKata.length;i++){
        if(tampung.indexOf(satuKata[i]) === -1){
          tampung.push(satuKata[i])
        } else {
          banyakPerulangan++
        }
      }
      if(tampung.length == satuKata.length) return 0
      return banyakPerulangan
    }
  
    var kataArr = kata.split(' ')
    var kataPerulanganArr = []
    var result = 0
    for(var j=0;j<kataArr.length;j++){
      kataPerulanganArr.push(perulangan(kataArr[j]))
      if(kataPerulanganArr[j] > result){
        result = kataPerulanganArr[j]
      }
    }  
  
    // console.log(kataArr)
    // console.log(kataPerulanganArr)
    // console.log(result)
    // console.log(kataPerulanganArr.indexOf(result))
    
    if(result>0){
      return kataArr[kataPerulanganArr.indexOf(result)]
    } else {
      return -1
    }
  }
  
  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau