function initialObjectGrouping(studentsArr) {
  
    var output = {};
    for(var i = 0; i< studentsArr.length ; i++){
      if(output[studentsArr[i][0]] === undefined) {
        output[studentsArr[i][0]] = [ studentsArr[i] ];
      } else {
        output[studentsArr[i][0]].push(studentsArr[i]);
      }
    }
    return output
  }
  
  console.log(initialObjectGrouping(['Budi', 'Badu', 'Joni', 'Jono']));
  /*
  {
    B: [ 'Budi', 'Badu' ],
    J: [ 'Joni', 'Jono' ]
  }
  */
  
  console.log(initialObjectGrouping(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
  /*
  {
    M: [ 'Mickey' ],
    Y: [ 'Yusuf' ],
    D: [ 'Donald' ],
    A: [ 'Ali' ],
    G: [ 'Gong' ]
  }
  */
  
  console.log(initialObjectGrouping(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
  /*
  {
    R: [ 'Rock', 'Rocker' ],
    S: [ 'Stone', 'Sticker' ],
    B: [ 'Brick' ]
  }
  */
  



/*
hanya menggunakan for dan if
mengambil angka terkecil dari kedua parameter kemudian mereturn angka terbesar dari hasilnya
*/

function highestGlobalMinimum(firstArr, secondArr) {
    var minim1 = firstArr[0]
    var minim2 = secondArr[0]
  
    for(var i=0;i<firstArr.length;i++){
      if(firstArr[i] <= minim1) minim1 = firstArr[i]
    }
    for(var j=0;j<secondArr.length;j++){
      if(secondArr[j] <= minim2) minim2 = secondArr[j]
    }
  
    if(minim1>minim2) return minim1 
    else return minim2
  }
  
  console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
  console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
  console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
  console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5
  console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])); // 5
  


  ///----------------------
  /*
Diberikan sebuah function bernama getReport.
Function akan menerima sebuah parameter array of object dengan format:

[
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  ...
]

Data di atas merupakan campuran seluruh nilai student dari kelas manapun.

Function akan memproses array of object tersebut untuk membuat sebuah report dalam bentuk array of object dengan format:

[
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  ...
]

Data yang diharapkan merupakan akumulasi student yang lulus dan tidak dari setiap kelas.
Standard kelulusan adalah minimum 70.
*/



var grades1 = [
    { name: 'John', score: 80, classCode: 'A' },
    { name: 'Mike', score: 60, classCode: 'B' },
    { name: 'Budi', score: 70, classCode: 'C' },
    { name: 'Siti', score: 50, classCode: 'A' },
    { name: 'Aaron', score: 10, classCode: 'A' },
    { name: 'Arthur', score: 10, classCode: 'C' },
    { name: 'Osass', score: 10, classCode: 'B' },
    { name: 'Yolo', score: 90, classCode: 'C' },
  ];
  
  function getReport(studentGrades) {
    var finalResult = [] 
    var classStr = 'ABC'
  
    for(var i=0;i<classStr.length;i++){
      var result = {}
      result.classCode = classStr[i]
      result.passed = []
      result.failed = []
      for(var j=0;j<studentGrades.length;j++){
        if(studentGrades[j]['classCode'] === result.classCode){
          if(studentGrades[j]['score'] >= 70) result.passed.push(studentGrades[j].name)
          else result.failed.push(studentGrades[j].name)
        }
      }
      finalResult.push(result)
    }
    return finalResult
  }
  
  
  console.log(getReport(grades1));
  
  /*
  [
    { classCode: 'A', 
      passed: [ 'John' ], 
      failed: [ 'Siti', 'Aaron' ] },
    { classCode: 'B', passed: [], failed: [ 'Mike', 'Osass' ] },
    { classCode: 'C', passed: [ 'Budi', 'Yolo' ], failed: [ 'Arthur' ] },
  ]
  */