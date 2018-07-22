function changeVocals (str) {
    var vocalArr = 'aiueoAIUEO'
    var hurufVocal = 'bjvfpBJVFP'
    var changedVocal = ''
    for(var i=0;i<str.length;i++){
      if(vocalArr.indexOf(str[i]) != -1){
        for(var j=0;j<vocalArr.length;j++){
          if(str[i] === vocalArr[j]){
            changedVocal += hurufVocal[j]
          } 
        }
      } else {
        changedVocal += str[i]
      } 
    }
    return changedVocal
  }
  
  function reverseWord (str) {
    return str.split('').reverse().join('')
  }
  
  function setLowerUpperCase (str) {
    var resultCase = ''
      for(var j=0;j<str.length;j++){
        if(str[j].toUpperCase() === str[j]){
          resultCase += str[j].toLowerCase()
        } else {
          resultCase += str[j].toUpperCase()
        }
      }
    return resultCase
  }
  
  function removeSpaces (str) {
    return str.split(' ').join('')
  }
  
  function passwordGenerator (name) {
    if(name.length>=5){
      return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
    } else return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'