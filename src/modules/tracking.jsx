export function HeaderTracking(props) {
  const statusColor =
    props.status === 1
      ? "completed"
      : props.status === 2
      ? "in-transit"
      : props.status === 3
      ? "assigned"
      : null;
  return (
    <>
      <div className="icons">
        <span className="icon "></span>
        <p className="texte-type">{props.type}</p>
      </div>
      <div className="status-tracking">
        <span className={`status-color ${statusColor}`}></span>
        <p className="status-text">{props.statusText}</p>
      </div>
    </>
  );
}
export function IconsTracking() {
  return (
    <p></p>
  );
}

export function TrackingInfo({recoleccion, entrega, startDate}) {
  console.log(startDate);
  const recoleccionAddress = recoleccion.split(","),
    entregaAddress = entrega.split(",");
    console.log(recoleccionAddress, entregaAddress)
  // const city = address
  return (
    <div className="where-to">
      <article className="pickup">
        <p>  <sub>PICKUP</sub></p>
        <section className="destination">
          <p className="city">{`${recoleccionAddress[4]}`}</p>
          <p className="street">{`${recoleccionAddress[0]}, ${recoleccionAddress[1]}`}</p>
        </section>
        <p>  <sub>DROPOFF</sub></p>
        <section className="entrega">
          <p className="city">{`${entregaAddress[4]}`}</p>
          <p className="street">{`${entregaAddress[0]}, ${entregaAddress[1]}`}</p>
        </section>
      </article>
      <article className="dropof"></article>
    </div>
  );
}
