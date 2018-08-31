// Code your solution here:
function driversWithRevenueOver(driver, revenue){
  return driver.filter((driver)=> {return driver.revenue > revenue});
}

// Code your solution here:
function driverNamesWithRevenueOver(driver, revenue){
  return driversWithRevenueOver(driver,revenue).map((d)=> {return d.name})
  
}

function exactMatch (drivers, compare) {
  return drivers.filter( (driver) =>{
    key = Object.keys(compare);
    return driver[key] === compare[key];
  });
}

function exactMatchToList(){
  return exactMatch.filter((driver)=>{return driver.name})
}