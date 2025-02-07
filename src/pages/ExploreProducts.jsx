import { useEffect, useState } from "react";
import ProductCard from "../component/explore/ProductCard";
import productsData from "../utils/productsData"  // Importamos los datos locales
import SelectCategory from "../component/explore/SelectCategory";
import PriceFilter from "../component/explore/PriceFilter";
import "./ExploreProducts.css";
import { useParams } from "react-router-dom";
import Shimmer from "../component/shimmer/Shimmer";

function ExploreProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [priceFlter, setPriceFilter] = useState("default");
  const [checkBoxState, setCheckBoxState] = useState({
    men: false,
    women: false,
  });
  let { category } = useParams();

  useEffect(() => {
    let resetCheckBoxState = {
      men: false,
      women: false,
    };
    if (category === "all") {
      setCheckBoxState(resetCheckBoxState);
      return;
    }
    setCheckBoxState({ ...resetCheckBoxState, [category]: true });
  }, [category]);

  useEffect(() => {
    setLoading(true);  // Activamos el estado de carga

    // Filtramos los productos según el estado del checkbox
    const filteredData = getFilteredData(productsData);
    setProducts(filteredData);
    setLoading(false);  // Terminamos la carga
  }, [checkBoxState]);  // Re-carga cuando cambia el filtro de categorías

  function getFilteredData(data) {
    // Si no se ha seleccionado ninguna categoría, cargamos tanto productos de hombres como de mujeres
    if (!checkBoxState.men && !checkBoxState.women) {
      return data.filter(
        (product) => product.category === "men's clothing" || product.category === "women's clothing"
      );
    }

    // Filtramos los productos según el estado del checkbox
    return data.filter((product) => {
      if (checkBoxState.men && product.category === "men's clothing") {
        return true;
      } else if (checkBoxState.women && product.category === "women's clothing") {
        return true;
      }
      return false;
    });
  }

  // Función para manejar el filtro por precio
  function handlePriceFilter(e) {
    let filter = e.target.value;
    let priceFilteredData = [...products];

    if (filter === "low-to-high") {
      priceFilteredData.sort((a, b) => a.price - b.price);
    } else if (filter === "high-to-low") {
      priceFilteredData.sort((a, b) => b.price - a.price);
    }

    setProducts(priceFilteredData);
    setPriceFilter(filter);
  }

  // Función para manejar los checkbox de categorías
  function handleCategoryCheckBox(e) {
    let { name, checked } = e.target;
    setCheckBoxState({ ...checkBoxState, [name]: checked });
  }

  return (
    <main className="product-main">
      <PriceFilter
        priceFlter={priceFlter}
        handlePriceFilter={handlePriceFilter}
      />
      <SelectCategory
        checkBoxState={checkBoxState}
        handleCheckBox={handleCategoryCheckBox}
      />
      <div className="products-container">
        {loading ? <Skeleton /> : <AllProducts products={products} />}
      </div>
    </main>
  );
}

function AllProducts({ products }) {
  let productCards = products.length ? (
    products?.map((product) => {
      return <ProductCard product={product} key={product.id} />;
    })
  ) : (
    <Skeleton />
  );

  return productCards;
}

function Skeleton() {
  return [...Array(4)].map((_, i) => <Shimmer key={i} />);
}

export default ExploreProduct;

