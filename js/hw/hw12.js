const user = {
    name: "John",
    age: 30,
    hobby: "reading",
    premium: true
  };
  user.mood = "happy";
  user.hobby = "skydiving";
  user.premium = false;
  for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
  }




  const user = {
    name: "John",
    age: 30,
    hobby: "reading",
    premium: true
  };
  user.mood = "happy";
  user.hobby = "skydiving";
  user.premium = false;
  function countProps(obj) {
    return Object.keys(obj).length;
  }
  for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
  }
  console.log("Кількість властивостей у user:", countProps(user));





  function findBestEmployee(employees) {
    const bestEmployee = "";
    let maxTasks = 0;
    
    for (const [name, tasks] of Object.entries(employees)) {
      if (tasks > maxTasks) {
        maxTasks = tasks;
        bestEmployee = name;
      }
    }
    
    return bestEmployee;
  }
  const employees = {
    'Анна': 5,
    'Петро': 10,
    'Марина': 3,
    'Олексій': 8
  };
  
  console.log(findBestEmployee(employees)); 




  function findBestEmployee(employees) {
    const bestEmployee = "";
    let maxTasks = 0;
    
    for (const [name, tasks] of Object.entries(employees)) {
      if (tasks > maxTasks) {
        maxTasks = tasks;
        bestEmployee = name;
      }
    }
    
    return bestEmployee;
  }
  
  function countTotalSalary(employees) {
    return Object.values(employees).reduce((total, salary) => total + salary, 0);
  }
  
  
  const salaries = {
    'Анна': 2000,
    'Петро': 3000,
    'Марина': 2500,
    'Олексій': 4000
  };
  
  console.log(countTotalSalary(salaries))




  function getAllPropValues(arr, prop) {
    return arr.reduce((values, obj) => {
      if (obj.hasOwnProperty(prop)) {
        values.push(obj[prop]);
      }
      return values;
    }, []);
  }
  
  const products = [
    { name: "Apple", price: 100 },
    { name: "Banana", price: 50 },
    { name: "Cherry" }
  ];
  
  console.log(getAllPropValues(products, "name")); 
  console.log(getAllPropValues(products, "price"));





  function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;
    
    for (const product of allProducts) {
        if (product.name === productName) {
            totalPrice = product.price * product.quantity;
            break; 
        }
    }
    
    return totalPrice;
}


const product = [
    { name: "Apple", price: 10, quantity: 5 },
    { name: "Banana", price: 7, quantity: 3 },
    { name: "Orange", price: 12, quantity: 4 }
];

console.log(calculateTotalPrice(products, "Banana")); 

  
  
  