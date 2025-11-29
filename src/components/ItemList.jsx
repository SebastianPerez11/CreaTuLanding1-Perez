import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="grid grid-cols-5 px-10 gap-5">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
