import React from "react";
import './app.css';
import ProductForm from "./components/product-form";
import ProductList from "./components/product-list";


const App= () => {
    return  <main className="Namecontainer">        
        <ProductForm />
        <ProductList />        
    </main>    
}
export default App;