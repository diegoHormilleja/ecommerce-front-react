import logo from './logo.svg';
import './App.css';
import StoreNavigation from './components/StoreNavigation';
import ProductList from './components/ProductList';
import Home from './components/Home';
import Product from './components/Product';
import PageWrapper from './components/PageWrapper';
import Pagination from './components/Pagination';
import { useState } from 'react';

function App() {

  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);
  
  const TOTAL_POR_PAGINA = 5;

  let products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    }, {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    }
    // More products...
  ]

  const buscarProducts = async () => {
    let url = '';
    
    let respuesta = await fetch(url, {
      "method": 'GET',
      "headers": {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
      }
    });
    let json = await respuesta.json();
    console.log(json);
  }

  const cargarProducts = () => {
    products = products.slice(
      (paginaActual - 1) * TOTAL_POR_PAGINA,
      paginaActual * TOTAL_POR_PAGINA
    );
  }

  const getTotalPaginas = () => {
    let cantidadTotalDeProducts = products.length;
    return Math.ceil(cantidadTotalDeProducts / TOTAL_POR_PAGINA);
  }

  cargarProducts();

  return (
    <div className="bg-black text-white text-3xl">
      Code bless you*!""
      <PageWrapper>

        {products.map(producto => {
          return <Product id={producto.id} name={producto.name} href={producto.href} imageSrc={producto.imageSrc} imageAlt={producto.imageAlt} price={producto.price} color={producto.color} />
        })}

        <Pagination pagina={paginaActual} total={4} onChange={pagina => {
          // cuando llamamo a setP.. se tiene qe renderizar a parte de cambiar de valor
          setPaginaActual(pagina)
        }} />


      </PageWrapper>


    </div>


  );
}

export default App;
