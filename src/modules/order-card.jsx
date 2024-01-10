import { useState, useEffect } from "react";
import { HeaderTracking, IconsTracking, TrackingInfo } from "./tracking";

function HeaderOrder() {
  return (
    <div className="type-order-container">
      <span className="type-logo"></span>
      <p className="type">FTL</p>
    </div>
  );
}
function TrackingContainer({ recoleccion, entrega }) {
  // const destino = address[0];
  console.log("Datos: " + recoleccion.address);
  return (
    <div className="tracking-container">
      <IconsTracking />
      <TrackingInfo
        recoleccion={recoleccion.address}
        entrega={entrega.address}
      />
    </div>
  );
}
function Order({ type, status_string, status, destinations }) {
  // const recoleccion = destinations[0],
  //   entrega = destinations[1];
  console.log(destinations[0].start_date);
  return (
    <article className="tracking">
      <HeaderTracking type={type} statusText={status_string} status={status} />
      <TrackingContainer
        recoleccion={destinations[0]}
        entrega={destinations[1]}
        startDate={destinations[0].start_date}
      />
    </article>
  );
}
function Card() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const trackingData = async () => {
      try {
        const res = await fetch(
            "https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders/upcoming"
          ),
          data = await res.json();
        const d = document;
        let text = null,
          orderNumber = [],
          dataFilter = null;
        d.addEventListener("DOMContentLoade", () => {});

        d.addEventListener("input", (e) => {
          e.preventDefault();
          if (e.target.matches(".search")) {
            text = e.target.value.toUpperCase();
            let number = data.result;
            dataFilter = number.filter((el) => {
              return el.order_number.includes(text);
            });

            setOrders(dataFilter);
          }
        });

        setOrders([...data.result]);
      } catch (err) {
        console.log(err);
      }
    };
    trackingData();
  }, []);

  if (orders.length === 0) {
    return;
    <>
      <h1>Cargando Productos</h1>
    </>;
  }
  return (
    // console.log(orders)
    orders.map((el, i) => {
      return (
        <div className="card" key={i}>
          <p className="text-order">
            Orders
            <b> #{`${el.order_number}`}</b>
          </p>
          <Order {...el} />
        </div>
      );
    })
  );
}

export default function OrderCard() {
  return (
    <div className="order-card-container">
      <Card />
    </div>
  );
}
