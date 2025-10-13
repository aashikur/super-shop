"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Container from "@/app/components/Container";

const ProductPage = () => {
  const { data: session } = useSession();
  const productAddedBy = session?.user?.email || "";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/api/get-products");
        setProducts(res.data);
        console.log(res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container className="p-4">
      <h2 className="text-xl font-semibold mb-2">Products</h2>
      <ul>
        {products.map((p, i) => (
          <li key={i}>{p.name || "Unnamed product"}</li>
        ))}
      </ul>
    </Container>
  );
};

export default ProductPage;
