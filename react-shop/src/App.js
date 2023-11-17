import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer"; 
import Items from "./components/items";

  

class App extends React.Component {

constructor(props) {
  super(props)
  this.state = {
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
}

  render() {
  return (
    <div>
    <Header />
    <div className="wrapper">
      <Items items={this.state.items} />
      <Footer />
    </div>
    </div>
  )
  }
}

export default App;
