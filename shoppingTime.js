function shoppingTime(memberId, money) {
    if(!memberId  || !money ) return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    if(money<50000) return 'Mohon maaf, uang tidak cukup'
  
    var shoppingObj = {
      memberId: memberId,
      money: money,
      
    }
    var saleObj = {
      'Sepatu Stacattu' :1500000,
      'Baju Zoro' :500000,
      'Baju H&N' : 250000,
      'Sweater Uniklooh' : 175000,
      'Casing Handphone' : 50000,
    }
    var saleKey = Object.keys(saleObj)
    var saleValue = Object.values(saleObj)
    
    var changeMoney = money
    var listPurchased = []
    for(var i=0;i<saleKey.length;i++){  
      if(changeMoney - saleValue[i] >= 0) {
        listPurchased.push(saleKey[i])
        changeMoney -= saleValue[i]
      } 
    }
    shoppingObj.listPurchased = listPurchased
    shoppingObj.changeMoney = changeMoney
  
    return shoppingObj
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  
  
  console.log(shoppingTime('82Ku8Ma742', 170000));
  // //{ memberId: '82Ku8Ma742',
  // // money: 170000,
  // // listPurchased:
  // //  [ 'Casing Handphone' ],
  // // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
  
  