"use client";

import Button from "@/components/UI/Button.jsx/Button";
import Products from "../Products";
import styles from "./ProductDetail.module.css";
import { getHttpDetails } from "@/util/http.js";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "@/lib/slices/add-to-cart";
import { motion } from "framer-motion";
import LoadingIndicator from "@/components/UI/Loading/LoadingIndicator";
import ErrorBlock from "@/components/UI/Error/Error";

function ProductDetail({ id }) {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products", id],
    queryFn: ({ signal }) => getHttpDetails({ id, signal }),
  });
  const cartData = useSelector((state) => state.cart);
  const onCart = cartData.find((prod) => prod.id == id);
  const dispatch = useDispatch();

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="Fetching product info failed!"
        message="Please check your connection and try again later!"
      />
    );
  }

  if (data) {
    const price = Math.round(data.price);
    const discountedPrice = Math.round(data.price * (75 / 100));
    data.quantity = 1;

    function handleAddToCart() {
      const itemExists = cartData.filter((cartItem) => cartItem.id == data.id);
      if (itemExists.length == 0) {
        dispatch(cartActions.addToCart(data));
      }
    }

    content = (
      <main className={styles.details_container}>
        <div className={styles.details_item_1}>
          <div className={styles.details_img_container}>
            <motion.img
              initial={{ x: 220, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              src={data.image}
              alt={data.title}
            />
          </div>
        </div>
        <motion.div
          initial={{ x: -220, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className={styles.details_item_2}
        >
          <div>
            <h1 className={styles.details_title}>{data.title}</h1>
            <p className={styles.details_description}>{data.description}</p>
          </div>

          <div className={styles.products_detail_btnContainer}>
            <p className={styles.discounted_price}>${discountedPrice}</p>
            <p className={styles.price}>${price}</p>
          </div>
          <div>
            <Button
              onClick={handleAddToCart}
              noTheme
              className={`${styles.btn_spacing} 
              ${onCart ? styles.active : styles.bg_color}
              `}
              size="md"
            >
              {onCart ? "Added To Cart" : "Add To Cart"}
            </Button>
            <Button className={styles.bg_color} size="md">
              Buy Now
            </Button>
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <>
      <motion.section
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className={styles.details_section}
      >
        <div className={`section_spacing ${styles.details}`}>{content}</div>
      </motion.section>
      <Products />
    </>
  );
}

export default ProductDetail;
