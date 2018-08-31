// Code your solution here:
function driversWithRevenueOver(driver, revenue){
  return driver.filter((driver)=> {return driver.revenue > revenue});
}

// Code your solution here:
function driverNamesWithRevenueOver(driver, revenue){
  driverNamesWithRevenueOver(driver,revenue).map(()=> {return driver.name})
  
}