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
        title: 'Ноутбук FMNX',
        img: '/test.webp',
        desc: 'Description Description Description Description ',
        category: 'laptops',
        price: '500'
      },
      {
        id: 3,
        title: 'Ноутбук FMNX',
        img: '/test.webp',
        desc: 'Description Description Description Description ',
        category: 'laptops',
        price: `500`
      },
      {
        id: 4,
        title: 'Ноутбук FMNX',
        img: '/test.webp',
        desc: 'Description Description Description Description ',
        category: 'laptops',
        price: `500`
      },
      {
        id: 5,
        title: 'Ноутбук FMNX',
        img: '/test.webp',
        desc: 'Description Description Description Description ',
        category: 'laptops',
        price: `500`
      },
    ]
  }
  this.addToOrder = this.addToOrder.bind(this) // строчка позволяет в методе addToOrder взаимодействовать с состояниями
}

  render() {
  return (
    <div>
    <Header orders={this.state.orders} />
    <div className="wrapper">
      <Items items={this.state.items} onAdd={this.addToOrder} />
      <Footer />
    </div>
    </div>
  )
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
