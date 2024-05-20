import { products } from "@/assets/data";
import CardProduct from "@/components/CardProduct";
import Category from "@/components/Category";


export default function Home() {
  return (
    <main className="">
      <Category />
      <ul className="grid md:grid-cols-2 gap-5 mt-8">
        {products.map((product) =>(
          <li key={product.name}> 
            <CardProduct product={product}/>
          </li>
        ))}
      </ul>
    </main>
  );
}
