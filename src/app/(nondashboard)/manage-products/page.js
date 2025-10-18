"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Container from "@/app/components/Container";
import Swal from "sweetalert2";
import Image from "next/image";
import Loading from "@/app/components/Loading";

const ManageProducts = () => {
  const { data: session } = useSession();
  const productAddedBy = session?.user?.email || "";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/api/get-products");
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Handle delete product
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the product.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        await axios.delete(`/api/delete-product?id=${id}`);
        setProducts(products.filter((p) => p._id !== id));
      } catch (err) {
        console.error("Delete failed:", err);
        Swal.fire("Error!", "Failed to delete product.", "error");
      }
    }
  };

  // if (loading) {
  //   return (
  //     <Container className="p-4 min-h-[60vh]">
  //       <h2 className="text-2xl font-semibold mb-6">Manage Products</h2>
  //       {[...Array(3)].map((_, index) => (
  //         <div key={index} className="skeleton mb-5  animate-pulse border min-h-60 border-gray-300 rounded-lg p-8 flex flex-col sm:flex-row  items-center justify-between shadow-sm hover:shadow-md transition" >
  //           <p className="text-gray-500">Loading products...</p>
  //         </div>
  //       ))
  //       }


  //     </Container>
  //   );
  // }

  if(loading) {
    return(
      
     <>
         <Container className="p-4">
      <h2 className="text-2xl font-semibold mb-6">Manage Products</h2>
      </Container>
     
      <Loading/>
     </>
    
    )
  }
  return (
    <Container className="p-4">
      <h2 className="text-2xl font-semibold mb-6">Manage Products</h2>


      {products.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid gap-4">
          {products.map((p) => (
            <div
              key={p._id}
              className="border border-gray-300 rounded-lg p-4 flex flex-col sm:flex-row  items-center justify-between shadow-sm hover:shadow-md transition"
            >
              {/* Product image */}
              <Image
                unoptimized
                width={200}
                height={200}

                src={p.image?.[0]}
                alt={p.name}
                className="w-full h-[200px] object-cover rounded-lg mb-3 max-w-[200px]"
              />

              {/* Product info */}
              <div className="space-y-1 ml-4 flex-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {p.name}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2">
                  {p.description}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-red-500 font-bold">${p.offerPrice}</span>
                  <span className="text-gray-400 line-through text-sm">
                    ${p.price}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Added by: {p.productAddedBy}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => handleDelete(p._id)}
                  className="px-4 py-1.5 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default ManageProducts;
