"use client";

import ProductItem from "./Product Items/ProductItem.jsx";
import styles from "./Products.module.css";
import { AnimatePresence } from "framer-motion";
import LoadingIndicator from "../UI/Loading/LoadingIndicator";
import ErrorBlock from "../UI/Error/Error";

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/util/http";

function Products() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: ({ signal }) => getProducts({ signal }),
  });

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="Fetching products failed!!"
        message="Please check your connection and try again later!"
      />
    );
  }

  if (data) {
    content = (
      <ul className={styles.container_grid}>
        <AnimatePresence>
          {data.map((product) => {
            return <ProductItem key={product.id} item={product} />;
          })}
        </AnimatePresence>
      </ul>
    );
  }

  return (
    <section className={`section_spacing ${styles.margin}`}>{content}</section>
  );
}

export default Products;
