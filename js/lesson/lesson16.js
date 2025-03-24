// 2  Порахувати загальну кількість товарів в кошику
const cart = [
    { label: 'Apples', price: 100, quantity: 2 },
    { label: 'Bananas', price: 120, quantity: 3 },
    { label: 'Lemons', price: 70, quantity: 4 },
  ];
  // console.log(totalAmount);


  const totalAmount = cart.reduce((acc, element) => {
    return acc + element.quantity;
  }, 0);
  
  // console.log(totalAmount);
  
  const totalPrice = cart.reduce((acc, element) => {
    return acc + element.price * element.quantity;
  }, 0);
  
  console.log(totalPrice);


  