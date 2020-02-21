import React, { Component } from "react";
import "./ContactData.css";
import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    alert("You continue");
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.state.price,
      customer: {
        name: "Ilias Gravvanis",
        address: {
          street: "Pergamou",
          zipCode: "41335",
          country: "Greece"
        },
        email: "iliophanis@gmail.com"
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className="Input"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className="Input"
          type="text"
          name="email"
          placeholder="Your Mail"
        />
        <input
          className="Input"
          type="text"
          name="street"
          placeholder="Your street"
        />
        <input
          className="Input"
          type="text"
          name="postal"
          placeholder="Postal Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className="ContactData">
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
