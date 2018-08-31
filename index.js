// Code your solution here:
function driversWithRevenueOver(driver, revenue){
  return driver.filter((driver)=> {return driver.revenue > revenue});
}

// Code your solution here:
function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue)
    .map(function (driver) {
      return driver.name;
    });
  
}