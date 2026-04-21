import { Header } from "../../components/Header";
import { ProductsGrid } from  "./ProductsGrid";
import "./HomePage.css";
export function HomePage({cart, loadCart}) {
  return (  
    <>
      <title>E-Commerce Project</title>

      <Header cart={cart} />

      <div className="home-page">
        <div className="products-grid">

          <ProductsGrid loadCart={loadCart} />

        </div>
      </div>
    </>
  );
}
