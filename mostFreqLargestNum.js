function sorting(arrNumber) {
    return arrNumber.sort()
  }
  
  function getTotal(arrNumber) {
    if(!arrNumber[0]) return '[]'
  
    var higest = Math.max.apply(Math, arrNumber)
    var counter = 0
    for(var i = 0 ; i < arrNumber.length ; i++){
      if(arrNumber[i] == higest){
        counter++
      }
    } 
    return 'angka paking besar adalah '+ higest +' dan jumlah kemunculan sebanyak '+ counter +' kali'
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''