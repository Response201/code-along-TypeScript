import { useState } from "react";
import "./App.css";
import { ProductCard } from "./components/productCard";
//npm create vite@latest frontend -- --template react
//npm install -D typescript @types/react @types/react-dom



function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Dator", price: 8000, sold: true },
    { id: 2, name: "Mus", price: 300, sold: true },
    { id: 3, name: "Tangentbord", price: 500, sold: false }
  ]);

  const name = "Molly";
  const age = 25;


  const toggleAvailability = (productName) => {
    setProducts(
      products.map((product) =>
        product.name === productName
          ? { ...product, sold: !product.sold }
          : product
      )
    );
  };



  return (
    <main>
      <h1>{name}, {age} år</h1>
      <h2>Produkter</h2>

      <ul>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            toggleAvailability={toggleAvailability}
          />
        ))}
      </ul>

     
    </main>
  );
}

export default App;
