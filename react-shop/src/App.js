import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer"; 
import Items from "./components/items";

  

class App extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    orders: [],
    items: [
      {
        id: 1,
        title: 'Ноутбук FMNX',
        img: '/test.webp',
        desc: 'Description Description Description Description ',
        category: 'laptops',
        price: '500'
      },
      {
        id: 2,
        title: 'Зарядка FMNX',
        img: '/battarey.png',
        desc: 'Description Description Description Description ',
        category: 'laptops',
        price: '500'
      },
      {
        id: 3,
        title: 'Монитор FMNX',
        img: '/test.webp',
        desc: 'Description Description Description Description ',
        category: 'laptops',
        price: `500`
      },
      {
        id: 4,
        title: 'Клавиатура FMNX',
        img: '/test.webp',
        desc: 'Description Description Description Description ',
        category: 'laptops',
        price: `500`
      },
      {
        id: 5,
        title: 'Мышь FMNX',
        img: '/test.webp',
        desc: 'Description Description Description Description ',
        category: 'laptops',
        price: `500`
      },
    ]
  }
  this.addToOrder = this.addToOrder.bind(this) // строчка позволяет в методе addToOrder взаимодействовать с состояниями
  this.deleteOrder = this.deleteOrder.bind(this)
}

  render() {
  return (
    <div>
    <Header orders={this.state.orders} onDelete={this.deleteOrder} />
    <div className="wrapper">
      <Items items={this.state.items} onAdd={this.addToOrder} />
      <Footer />
    </div>
    </div>
  )
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el =>{
      if(el.id === item.id)
      isInArray = true
    })
    if(!isInArray)
    this.setState({orders: [...this.state.orders, item] }) // обращаемся к масиву orders, и добавляем в него item
  }
}

export default App;
