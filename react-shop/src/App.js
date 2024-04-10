import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Ноутбук FMNX",
          img: "/test.webp",
          desc: "Description Description Description Description ",
          category: "laptops",
          price: "500",
        },
        {
          id: 2,
          title: "Зарядка FMNX",
          img: "/battarey.png",
          desc: "Description Description Description Description ",
          category: "zaryadki",
          price: "500",
        },
        {
          id: 3,
          title: "Монитор FMNX",
          img: "/monitor.webp",
          desc: "Description Description Description Description ",
          category: "laptops",
          price: `500`,
        },
        {
          id: 4,
          title: "Клавиатура FMNX",
          img: "/keyboard.webp",
          desc: "Description Description Description Description ",
          category: "laptops",
          price: `500`,
        },
        {
          id: 5,
          title: "Мышь FMNX",
          img: "/mouse.webp",
          desc: "Description Description Description Description ",
          category: "laptops",
          price: `500`,
        },
      ],
      showFullItem: false,
      fullItem: {}
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this); // строчка позволяет в методе addToOrder взаимодействовать с состояниями
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <div>
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <div className="wrapper">
          <Categories chooseCategory={this.chooseCategory} />
          <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
          {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        </div>


        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] }); // обращаемся к масиву orders, и добавляем в него item
  }
}

export default App;
