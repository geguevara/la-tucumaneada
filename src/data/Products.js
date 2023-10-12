import img1 from "../assets/alplato.jpeg";
import img2 from "../assets/completo.png";
import img3 from "../assets/conAji.webp";
import img4 from "../assets/EmpanadaFritaPollo.png";
import img5 from "../assets/empanadas-humita.jpg";
import img6 from "../assets/frita.webp";
import img7 from "../assets/Humitas.jpg";
import img8 from "../assets/lech-tom.jpg";
import img9 from "../assets/panchuque-.jpeg";
import img10 from "../assets/receta-de-empanadas-de-pollo-1024x683.jpg";
import img11 from "../assets/tamal.jpg";
import img12 from "../assets/z-empanadas-tucumanas-1w.jpg";

export const products= [
    {
        id:1,
        name: "Humita",
        img: img1,
        category: "Humita",
        desc:"Al plato",
        price: 2450,
    },
    {
        id:2,
        name: "Completo",
        img: img2,
        category: "Sandwiches",
        desc:"Exceso de sabor",
        price:2290,
    },
    {
        id:3,
        name: "Con Ají",
        img: img3,
        category: "Sandwiches",
        desc:"Para paladares valientes",
        price:2650,
    },
    {
        id:4,
        name: "Empanadas de pollo",
        img: img4,
        category: "Empanadas",
        desc:"fritas",
        price:450,
    },
    {
        id:5,
        name: "Empanadas de humita",
        img: img5,
        category: "Empanadas",
        desc:"Al horno de barro",
        price:450,
    },
    {
        id:6,
        name: "Empanadas de carne",
        img: img6,
        category: "Empanadas",
        desc:" fritas",
        price:450,
    },
    {
        id:7,
        name: "Humita",
        img: img7,
        category: "Humita",
        desc:"En chala",
        price:1450,
    },
    {
        id:8,
        name: "El clásico",
        img: img8,
        category: "Sandwiches",
        desc:"Lechuga y tomate",
        price:1950,
    },
    {
        id:9,
        name: "Panchuque",
        img: img9,
        category: "Panchuques",
        desc:"Pancho con masa simil panqueque",
        price:"650",
    },
    {
        id:10,
        name: "Empanadas de pollo",
        img: img10,
        category: "Empanadas",
        desc:"Al horno de barro",
        price:450,
    },
    {
        id:11,
        name: "Tamal",
        img: img11,
        category: "Humita",
        desc:"Relleno de carne",
        price:1750,
    },
    {
        id:12,
        name: "Empanadas de carne",
        img: img12,
        category: "Empanadas",
        desc:"Al horno de barro",
        price:450,
    },
];

export const Products = products.reduce((acc, prod)=>{
    if (!acc[prod.category]){
        acc[prod.category]=[]
    }
    acc[prod.category] = [...acc[prod.category], prod];
    return acc;
},{})

export const TotalProducts = products.length;