"use client"
import React, { useState } from 'react';
import Container from '../../components/Container';
import { FaPlus, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { useSession } from 'next-auth/react';
const AddProductPage = () => {


    const { data: session } = useSession();
    const productAddedBy = session?.user?.email || "";
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        offerPrice: '',
        category: '',
        image: ['']
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (index, value) => {
        const newImages = [...formData.image];
        newImages[index] = value;
        setFormData(prev => ({
            ...prev,
            image: newImages
        }));
    };

    const addImageField = () => {
        setFormData(prev => ({
            ...prev,
            image: [...prev.image, '']
        }));
    };

    const removeImageField = (index) => {
        const newImages = formData.image.filter((_, i) => i !== index);
        setFormData(prev => ({
            ...prev,
            image: newImages
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        if(!productAddedBy){
            alert("You must be logged in to add a product");
            return;
        }
        formData.productAddedBy = productAddedBy;
        formData.data = Date.now();
        try {
            const response = axios.post('/api/add-product', formData); 
            console.log(response);
            alert("Product added successfully");

            
        } catch (e) {
            alert("Error adding product");
            console.log(e);
        }

    };

    return (
        <Container className='py-16'>
            <h2 className="text-3xl font-bold mb-8">Add New Product</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Product Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300  rounded-lg"
                                required
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium mb-2">Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows="4"
                                className="w-full p-3 border border-gray-300  rounded-lg"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Category</label>
                            <input
                                type="text"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300  rounded-lg"
                                required
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Price ($)</label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300  rounded-lg"
                                required
                                step="0.01"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Offer Price ($)</label>
                            <input
                                type="number"
                                name="offerPrice"
                                value={formData.offerPrice}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300  rounded-lg"
                                step="0.01"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Images
                                <button
                                    type="button"
                                    onClick={addImageField}
                                    className="ml-2 text-blue-500 hover:text-blue-700"
                                >
                                    <FaPlus className="inline" />
                                </button>
                            </label>
                            {formData.image.map((url, index) => (
                                <div key={index} className="flex gap-2 mb-2">
                                    <input
                                        type="url"
                                        value={url}
                                        onChange={(e) => handleImageChange(index, e.target.value)}
                                        placeholder="Image URL"
                                        className="w-full p-3 border border-gray-300  rounded-lg"
                                        required
                                    />
                                    {index > 0 && (
                                        <button
                                            type="button"
                                            onClick={() => removeImageField(index)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            <FaTrash />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </Container>
    );
};

export default AddProductPage;
/*
{
    "productAddedBy",
    "name": "Apple AirPods Pro 2nd gen",
    "description": "Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C) provide excellent sound, active noise cancellation, and a comfortable fit. The USB-C case ensures quick charging, and they pair seamlessly with Apple devices for an effortless audio experience.",
    "price": 499.99,
    "offerPrice": 399.99,
    "image": [
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/k4dafzhwhgcn5tnoylrw.webp",
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/j212frakb8hdrhvhajhg.webp",
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/imwuugqxsajuwqpkegb5.webp",
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/k1oqaslw5tb3ebw01vvj.webp"
    ],
    "category": "Earphone",
    "date":
    "__v": 0
  },
*/