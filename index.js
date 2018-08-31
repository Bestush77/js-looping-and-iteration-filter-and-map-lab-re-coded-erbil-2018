// Code your solution here:
function driversWithRevenueOver(driver, revenue){
  return driver.filter((driver)=> {return driver.revenue > revenue});
}

// Code your solution here:
function driverNamesWithRevenueOver(driver, revenue){
  return driverNamesWithRevenueOver(driver,revenue).map(function (d) {return d.name})
  
}

// return driversWithRevenueOver(drivers, revenue)
//     .map(function (driver) {
//       return driver.name;
//     });