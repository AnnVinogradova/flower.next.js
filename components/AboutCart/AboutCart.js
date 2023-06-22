import { useState, useEffect } from 'react';
import Rift from '../Rifts/Rift.js'

export default function AboutCart () {
  const [items, setItems] = useState([
    { id: 1, image: '/img/Catalog/VAL_8182_1200 1 (1).jpg', name: 'Большой букет розовых гортензий и роз', price: 6200, quantity: 0 },
    { id: 2, image: '/img/Catalog/VAL_8182_1200 1 (2).jpg', name: 'Белое сочувствие', price: 4300, quantity: 0 },
    { id: 3, image: '/img/Catalog/VAL_8182_1200 1 (3).jpg', name: 'Аранжировка', price: 3200, quantity: 0 },
    { id: 4, image: '/img/Catalog/VAL_8182_1200 1 (4).jpg', name: 'Анабель', price: 3700, quantity: 0 },
  ]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [items]);

  const handleIncreaseQuantity = (item) => {
    const newItems = [...items];
    const index = newItems.findIndex((i) => i.id === item.id);
    newItems[index].quantity += 1;
    setItems(newItems);
  };

  const handleDecreaseQuantity = (item) => {
    const newItems = [...items];
    const index = newItems.findIndex((i) => i.id === item.id);
    if (newItems[index].quantity > 0) {
      newItems[index].quantity -= 1;
      setItems(newItems);
    }
  };

  const calculateTotal = () => {
    const newTotal = items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(newTotal);
  };

  const handlePay = () => {
    alert('Payment successful!');
    setItems([]);
    setTotal(0);
  };

  return <>
  	<div>
			<ul class="breadcrumb">
				<li><a href="main">Главная</a></li>
				<li><a href="cart">Корзина</a></li>
			</ul>
		</div>
  <h2>Корзина</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Название</th>
            <th>Стоимость</th>
            <th>Количество</th>
            <th>Итого</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.image}
                  alt={item.name}
                  width={126}
                  height={130}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.price}RYB</td>
              <td>
                <button onClick={() => handleDecreaseQuantity(item)}>-</button>
                {item.quantity}
                <button onClick={() => handleIncreaseQuantity(item)}>+</button>
              </td>
              <td>{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form>
      <input type='text' placeholder='Введите промокод'></input>
      <button>Применить</button>
      </form>
     <div>
     <p>К оплате {total}RYB</p>
      <button onClick={handlePay}>Перейти к оформлению</button>
     </div>
     <Rift/>
    </>
};
// значения нужно будет подгружать из БД?