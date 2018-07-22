function changeMe(arr) {
    var arrObj = {}
  
    for (var i=0;i<arr.length;i++){
      arrObj.firstName = arr[i][0]
      arrObj.lastName = arr[i][1]
      arrObj.gender = arr[i][2]
      if(arr[i].length > 3 && arr[i][3] < 2018) {
        arrObj.age = 2018 - arr[i][3]
      } else {
        arrObj.age = 'Invalid Birth Year'
      }
      console.log(i+1 +` ${arr[0][0]} ${arr[0][1]}: ` , arrObj)
    }
  
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""