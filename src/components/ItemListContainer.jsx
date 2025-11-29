import { Link, useParams } from "react-router-dom";
import { app } from "../firebase/config";
import { useEffect, useState } from "react";
import { getDocs, getFirestore, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams(); // Hombre, Mujer, Unisex, etc.

  useEffect(() => {
    const db = getFirestore(app);
    const itemRef = collection(db, "productos");

    const fetchItems = async () => {
      try {
        let q;

        if (categoryId) {
          // filtramos según el campo REAL que usas: gender
          q = query(itemRef, where("gender", "==", categoryId));
        } else {
          q = itemRef;
        }

        const querySnap = await getDocs(q);
        const products = querySnap.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setProducts(products);
      } catch (err) {
        console.error("Error", err);
        setProducts([]);
      }
    };

    fetchItems();
  }, [categoryId]);

  return (
    <>
      <div className="p-10 font-bold text-3xl">
        <h2>{greeting}</h2>

        {categoryId && (
          <h3 className="text-xl mt-2">
            Mostrando productos de la categoría: <b>{categoryId}</b>
          </h3>
        )}
      </div>

      <div className="grid grid-cols-5 px-10 gap-5">
        {products?.map((prod) => (
          <div
            className="w-full flex flex-col bg-[#1a1a1a] text-white py-6 px-6"
            key={prod.id}
          >
            <header className="grow flex flex-col">
              <Link to={`/producto/${prod.id}`} className="cursor-pointer">
                <img
                  className="w-full object-cover mb-4"
                  src={prod.imageUrl}
                  alt={prod.name}
                />
                <h1 className="text-xl font-bold mb-4 grow">{prod.name}</h1>
                <p className="mb-6 text-base font-bold bg-white text-black inline-block px-4 rounded-full w-max">
                  {prod.size}
                </p>
              </Link>
            </header>

            <footer className="flex justify-between items-center">
              <span className="text-2xl font-bold">${prod.price}</span>
              <button className="bg-white text-black font-bold px-4 py-1.5 rounded-sm cursor-pointer">
                Agregar al Carrito
              </button>
            </footer>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemListContainer;
