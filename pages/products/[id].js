import Image from "next/image";
import React from "react";

const Details = ({ product }) => {
  const { id, title, price, description, category, image, rating } = product;
  return (
    <div className="h-full flex flex-col items-center justify-items-start gap-4  font-bold my-8">
      {/* <h1>Product Details</h1> */}
      <h2>{title}</h2>
      <Image 
    //   loader={() => image}
       src={image} width={200} height={200} unoptimized={true}></Image>
      <ul className="flex flex-col px-24 gap-6 font-light">
        <li>
          <h3 className="text-md tracking-wider mb-1 font-semibold">
            Product id :
          </h3>
          <p>{id}</p>
        </li>
        <li>
          <h3 className="text-md tracking-wider mb-1 font-semibold">
            Product price :
          </h3>
          <p>${price}</p>
        </li>
        <li>
          <h3 className="text-md tracking-wider mb-1 font-semibold">
            description:
          </h3>
          <p>{description}</p>
        </li>
        <li><h3 className="text-md tracking-wider mb-1 font-semibold">
            Rating :
          </h3>
          <p>{rating.rate}</p></li>
        <li>
        <h3 className="text-md tracking-wider mb-1 font-semibold">
            Rating Count:
          </h3>
          <p>{rating.count}</p>
        </li>
      </ul>
    </div>
  );
};

export default Details;

export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  const paths = data.map((p) => {
    return {
      params: {
        id: p.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const res = await fetch("https://fakestoreapi.com/products/" + id);
  const data = await res.json();
  return { props: { product: data } };
};

// this function fetched data mainly ids
// then return those ids to next
// so that it create static html page for prerendering for each fetched id
