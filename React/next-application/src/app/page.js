import { menProducts, womenProducts } from "./APIServices/services";
import Home from "./Components/Home";

export default async function page() {

  const mensProducts = await menProducts();
  const womensProducts = await womenProducts();

  return (
    <>
      <Home mensProducts={mensProducts} womenProducts={womensProducts}/>
    </>
  );
}
