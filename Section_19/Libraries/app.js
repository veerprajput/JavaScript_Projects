const customers = ['Max', 'Manuel', 'David', 'Fedra', 'Bob', "Robin"]
const activeCustomers = ['Max', 'Manuel', 'Fedra']
const inactiveCustomers = _.difference(customers, activeCustomers)
console.log(inactiveCustomers);