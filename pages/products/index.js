import Head from "next/head";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch(
    "https://fakestoreapi.com/products"
  );
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};
export default function Products({ products }) {
  return (
    <div className="h-full">
      <Head>
        <title>Products</title>
      </Head>
      <h1 className="text-center uppercase font-semibold tracking-widest py-4">
        Products Data
      </h1>
      {products.map((product) => (
        <Link
        
          key={product.id}
          href={'/products/'+product.id}
        >
          <h1   className="py-2 px-4 border-[1px] mb-1 mx-4  border-l-green-400 border-l-4 hover:bg-green-200 transition-all">{product.title}</h1>
        </Link>
      ))}
      {/* <p>{pathnamehome}</p>
      <p>{pathnameabout}</p> */}
    </div>
  );
}
// export function getStaticProps() {
//   const pathnamehome = path.join(__dirname, "/home");
//   const pathnameabout = path.join(__dirname, "/about");
//   return {
//     props: {
//       pathnamehome,pathnameabout
//     }
//   };
// }
