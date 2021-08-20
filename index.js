var employee = {};

var updateEmployeeWithKeyAndValue = function(object, key, value){
    var newObj = Object.assign({}, object)
    newObj[key] = value;
    return newObj
  }

var destructivelyUpdateEmployeeWithKeyAndValue = function(employee, key, value) {
    employee[key] = value;
    return employee;
}


  
 
  function deleteFromEmployeeByKey(object, key){
    var newObj =  Object.assign({},object)
    delete newObj[key]
    return newObj }
    function destructivelyDeleteFromEmployeeByKey(object, key) {
      
        delete object[key]
      
        return object
      }