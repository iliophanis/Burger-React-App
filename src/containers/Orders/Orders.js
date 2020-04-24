import React, { useEffect, useState } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, SetLoading] = useState(false);
  useEffect(() => {
    async function getOrders() {
      SetLoading(true);
      await axios
        .get("/orders.json")
        .then((res) => {
          const fetchOrders = [];
          console.log(res.data);
          for (let key in res.data) {
            fetchOrders.push({ ...res.data[key], id: key });
          }
          setOrders(fetchOrders);

          SetLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getOrders();
  }, []);
  console.log("orders:" + JSON.stringify(orders));
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        orders.map((order) => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))
      )}
    </div>
  );
}

export default withErrorHandler(Orders, axios);
