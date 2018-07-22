function ubahHuruf(kata) {
    var result = ''
    var alpabet ='abcdefghijklmnopqrstuvwxyza'
    for (var i=0;i<kata.length; i++){
      for(var j=0;j<alpabet.length; j++){
        if(alpabet[j] == kata[i]){
          result += alpabet[j+1]
          break;
        }
      }
    }
  
    return result
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
  
  console.log(ubahHuruf('zwzozw')); // axapax