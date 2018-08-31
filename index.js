// Code your solution here:
function driversWithRevenueOver(driver, revenue){
  return driver.filter((driver)=> {return driver.revenue > revenue});
}

// Code your solution here:
function driverNamesWithRevenueOver(driver, revenue){
  x += driver.filter((driver)=> {
     if (driver.revenue > revenue)
  {return  driver.name}
    
  });
  return x;
  
}