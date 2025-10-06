const ItemListContainer = ({ greeting }) => {
  return (
    <div className="p-10 font-semibold text-2xl flex justify-center">
      <h2>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
