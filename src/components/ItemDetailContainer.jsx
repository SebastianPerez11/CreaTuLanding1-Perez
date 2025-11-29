import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { app } from "../firebase/config";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore(app);
    const ref = doc(db, "productos", id);

    getDoc(ref)
      .then((snap) => {
        if (snap.exists()) {
          setProduct({ id: snap.id, ...snap.data() });
        } else {
          setProduct(null);
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <h2 className="p-10">Cargando producto...</h2>;
  if (!product) return <h2 className="p-10">Producto no encontrado</h2>;

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
