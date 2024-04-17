export const CarItem = ({ car }) => {
  const {
    _id,
    name,
    price,
    rating,
    location,
    adults,
    children,
    engine,
    transmission,
    description,
    details,
    gallery,
  } = car;

  return (
    <>
      <img src={gallery[0]} alt={name} />
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{rating}</p>
      <p>{location}</p>
      <p>{description}</p>
      <ul key={_id}>
        <li>{adults}</li>
        <li>{children}</li>
        <li>{engine}</li>
        <li>{transmission}</li>
        <li>{details.kitchen}</li>
        <li>{details.bads}</li>
        <li>{details.freezer}</li>
      </ul>
    </>
  );
};
