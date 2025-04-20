import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { Container, Grid, Card, Button, ProductImage } from "./styles";
import Header from "../Header";

const products = [
  {
    id: 1,
    name: "Cyberpunk 2077",
    price: 59.99,
    image:
      "https://preview.redd.it/is-cyberpunk-cover-art-based-on-blade-runners-v0-p99esbve7sf81.jpg?width=640&crop=smart&auto=webp&s=6e1adcdc4e6f39339f4c3334cae9ff280211f7fa",
  },
  {
    id: 2,
    name: "Elden Ring",
    price: 49.99,
    image:
      "https://preview.redd.it/elden-ring-cover-inspirations-v0-7muosj6u7s4e1.jpg?width=3840&format=pjpg&auto=webp&s=20e0387f5abaecabb6c17def4e642cc5cee515d3",
  },
  {
    id: 3,
    name: "The Legend of Zelda: TOTK",
    price: 69.99,
    image:
      "https://preview.redd.it/tjv3z5yjcreb1.jpg?auto=webp&s=0092a7fdd9c309aa81740969196f5a60397a4453",
  },
  {
    id: 4,
    name: "Minecraft",
    price: 29.99,
    image:
      "https://preview.redd.it/jncj9eqr9bad1.jpeg?auto=webp&s=72ca987cadecc44162c7ef7ba318a1e73df52dcc",
  },
  {
    id: 5,
    name: "Grand Theft Auto V",
    price: 39.99,
    image: "https://i.blogs.es/2c9c70/gta-20v-20portada-20grande/450_1000.webp",
  },
  {
    id: 6,
    name: "The Witcher 3: Wild Hunt",
    price: 54.99,
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202211/0714/S1jCzktWD7XJSRkz4kNYNVM0.png",
  },
  {
    id: 7,
    name: "Overwatch",
    price: 44.99,
    image:
      "https://moviepostermexico.com/cdn/shop/products/unnamed_ced9d610-2888-48b0-a842-3079f24bfbba.jpg?v=1589428357",
  },
  {
    id: 10,
    name: "Call of Duty: Modern Warfare",
    price: 59.99,
    image:
      "https://image.api.playstation.com/vulcan/img/rnd/202010/2320/i5l1jLAhFSTiO7lSCNDWjJ2J.jpg",
  },
  {
    id: 11,
    name: "Red Dead Redemption 2",
    price: 49.99,
    image:
      "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png?w=440",
  },
  {
    id: 12,
    name: "Assassin's Creed Valhalla",
    price: 69.99,
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202211/1416/HXBxcRRNOpjREOW3GpBndz3u.png",
  },
  {
    id: 13,
    name: "The Elder Scrolls V: Skyrim",
    price: 29.99,
    image:
      "https://metodologic.net/wp-content/uploads/2016/11/Skyrim_SE_portada.jpg",
  },
  {
    id: 14,
    name: "Super Mario Odyssey",
    price: 39.99,
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5",
  },
  {
    id: 15,
    name: "Uncharted 4: A Thief's End",
    price: 54.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3iZ4fmU_MplWvH0teSowa0QQwEZ54G7W7zQ&s",
  },
  {
    id: 16,
    name: "The Last of Us Part II",
    price: 44.99,
    image:
      "https://image.api.playstation.com/vulcan/img/rnd/202010/2618/w48z6bzefZPrRcJHc7L8SO66.png",
  },
  {
    id: 17,
    name: "FIFA 22",
    price: 59.99,
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000038676/02b078ec6e65f597dc655c1b958bf2dd07961ea45db4d59688ca8746bf28ae6d",
  },
  {
    id: 18,
    name: "Animal Crossing: New Horizons",
    price: 44.99,
    image:
      "https://animalcrossing.nintendo.com/new-horizons/assets/img/share-tw.jpg",
  },
];

const StorePage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Container>
      <Header />
      <h2>Bienvenido a la tienda</h2>
      <Grid>
        {products.map((product) => (
          <Card key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <Button onClick={() => handleAddToCart(product)}>
              Añadir al carrito
            </Button>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default StorePage;
