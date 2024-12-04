"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Aboutplace from "../components/Aboutplace/Aboutplace";
import Tourinfo from "../components/Tourinfo/Tourinfo";
import Experience from "../components/Experience/Experience";
import Review from "../components/ReviewSection/Review";
import Feedback from "../components/Feedback/Feedback";
import FaqSection from "../components/FAQ's/faq";
import Gallery from "../components/Gallery/Gallery";
import TravelSignup from "../components/TravelSignin/TravelSignup";
import MightAlsoLike from "../components/MightAlsoLike/MightAlsoLike";
import styles from "./page.module.css";
const PostDetail = ({ searchParams }) => {
    const id = searchParams?.id; // Get the `id` from searchParams if available
    const [fetchedProduct, setFetchedProduct] = useState(null);
    const [fetchError, setFetchError] = useState(null);

    const [details, setDetails] = useState([
        {
            image: "https://i.ibb.co/555Rvxy/Group-48101161.png", // Duration image URL
            title: "Duration",
            description: "Check availability", // Placeholder, will be updated dynamically
        },
        {
            image: "https://i.ibb.co/8z1SrhM/Group-48101165.png", // Live tour image URL
            title: "Language",
            description: "French", // Placeholder, will be updated dynamically
        },
        {
            image: "https://i.ibb.co/VL0rbqd/Group-48101160.png", // Pickup optional image URL
            title: "Pickup optional",
            description: "Pickup details will be updated dynamically", // Placeholder
        },
        {
            image: "https://i.ibb.co/x5LYGrY/Group-48101166.png", // Small group image URL
            title: "Small group",
            description: "Limited to participants", // Placeholder
        },
    ]);

    useEffect(() => {
        if (!id) return;

        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3002/api/get-product/${id}`);
                if (response.data.success) {
                    const productData = response.data.data; // Extract the product data
                    console.log('Fetched Product:', productData); // Log the entire product
                    setFetchedProduct(productData); // Update state with fetched product

                    // Update details array based on fetched product data
                    setDetails((prevDetails) => [
                        {
                            ...prevDetails[0],
                            description: productData.tourDuration || "Check availability", // Tour duration
                        },
                        {
                            ...prevDetails[1],
                            description: productData.tourLanguage || "French", // Tour language
                        },
                        {
                            ...prevDetails[2],
                            description: productData.pickupOption || "Pickup details not available", // Pickup option
                        },
                        {
                            ...prevDetails[3],
                            description: `Limited to ${productData.groupSize || "participants"}`, // Small group size
                        },
                    ]);
                } else {
                    console.error('API returned success=false:', response.data);
                    setFetchError('Failed to fetch product data.');
                }
            } catch (err) {
                console.error('Error fetching product:', err.message);
                setFetchError(err.message);
            }
        };

        fetchProduct();
    }, [id]);

    if (!fetchedProduct) {
        return <div>Loading...</div>; // Show loading message until product data is available
    }

    return (
        <div>
            <Gallery id={fetchedProduct?._id || ""} />;

            <Aboutplace
                title="Brief about the place"
                sections={[fetchedProduct.briefDescription]}
            />
            <h2 className={styles.hd}>Tour Information</h2>
            <Tourinfo details={details} />
            <Experience
                fullDescription={fetchedProduct?.fullDescription || ""}
                highlights={fetchedProduct?.highlights || []}
                includes={fetchedProduct?.includes || []}
                meetingPoint={fetchedProduct?.meetingPoint || ""}
            />
            <MightAlsoLike />
            <Review />
            <TravelSignup />
            <Feedback />
            <FaqSection />
            {fetchError && <p className={styles.error}>Error fetching product: {fetchError}</p>}
        </div>
    );
};

export default PostDetail;
