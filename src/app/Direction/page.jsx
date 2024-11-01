import React from 'react'
import Aboutplace from '../components/Aboutplace/Aboutplace';
import Tourinfo from '../components/Tourinfo/Tourinfo';
import Feedback from '../components/Feedback/Feedback';
import FaqSection from "../components/FAQ's/faq";
import Location from '../components/Location/Location';
import TravelSignup from '../components/TravelSignin/TravelSignup';
import DirectionPost from '../components/DirectionPost/DirectionPost';
import styles from "./page.module.css"
const PostDetail = () => {
    const location = {
        name: 'Hilton Hotel Niagara Falls',
        city: 'Niagara Falls',
        latitude: 43.0962,
        longitude: -79.0377,
    };

    const recommendations = [
        { id: 1, title: 'The Best Pizza in New York', imageUrl: 'https://i.ibb.co/34rRKpy/image-5.png' },
        { id: 2, title: 'Popular Burger Spot', imageUrl: 'https://i.ibb.co/34rRKpy/image-5.png' },
        { id: 3, title: 'Top Sushi Place', imageUrl: 'https://i.ibb.co/34rRKpy/image-5.png' },
    ];
    const post1 = [
        {
            id: 1,
            title: "Niagara Falls Tour",
            category: "tour",
            price: 94,
            img: 'https://i.ibb.co/XDTkpvb/images.jpg',
            tags: ['Nature', 'Waterfall'],
            description: "Tour",
            paragraph: 'White Center pizzeria Proletariat offers thin-crust pies with the occasional surprise topping (like Spam), arcade games, a photo booth, and a cheerful family vibe. Service is blindingly fast. The fact that the kids’ area is right next to a table, so diners can actually eat their food while keeping an eye on the children, is a major bonus.',
            goldentag: 'Best price guarantee' // New property for the dynamic tag
        }
    ];
    const post2 = [
        {
            id: 1,
            title: "Niagara Falls Tour",
            category: "tour",
            price: 94,
            img: 'https://i.ibb.co/XDTkpvb/images.jpg',
            tags: ['Nature', 'Waterfall'],
            description: "Tour",
            paragraph: 'White Center pizzeria Proletariat offers thin-crust pies with the occasional surprise topping (like Spam), arcade games, a photo booth, and a cheerful family vibe. Service is blindingly fast. The fact that the kids’ area is right next to a table, so diners can actually eat their food while keeping an eye on the children, is a major bonus.',
        }
    ];

    const post3 = [
        {
            id: 1,
            title: "Niagara Falls Tour",
            category: "tour",
            price: 94,
            img: 'https://i.ibb.co/XDTkpvb/images.jpg',
            tags: ['Pickup', 'Easy refund'],
            description: "Tour",
            goldentag: 'Exclusive Deal' ,
            paragraph: 'White Center pizzeria Proletariat offers thin-crust pies with the occasional surprise topping (like Spam), arcade games, a photo booth, and a cheerful family vibe. Service is blindingly fast. The fact that the kids’ area is right next to a table, so diners can actually eat their food while keeping an eye on the children, is a major bonus.',

        }
    ];
    const placeData = {
        title: "Brief about the place",
        sections: [
            // "PostDetail your journey begins, you will be greeted by your experienced guide, who will share fascinating insights about Iceland is natural wonders and cultural heritage. The adventure kicks off with a scenic drive along the iconic Ring Road, where you will witness breathtaking landscapes that range from towering glaciers to black sand beaches.",
            // "Your first stop is the mesmerizing Seljalandsfoss waterfall, where you will have the unique opportunity to walk behind the cascading water, feeling the cool mist on your face. Next, you will visit the powerful Skógafoss waterfall, one of Iceland wis largest, where rainbows often form in the mist.",
            // "After soaking in the beauty of these natural wonders, the tour continues to the majestic Sólheimajökull glacier. Here, you will embark on an unforgettable journey into a hidden ice cave, a rare and magical experience. The intricate ice formations and vibrant blue hues within the cave create a surreal atmosphere, perfect for capturing stunning photographs."

            `PostDetail your journey begins, you will be greeted by your experienced guide, who will share fascinating insights about Iceland is natural wonders and cultural heritage. The adventure kicks off with a scenic drive along the iconic Ring Road, where you will witness breathtaking landscapes that range from towering glaciers to black sand beaches.
            Your first stop is the mesmerizing Seljalandsfoss waterfall, where you will have the unique opportunity to walk behind the cascading water, feeling the cool mist on your face. Next, you will visit the powerful Skógafoss waterfall, one of Iceland wis largest, where rainbows often form in the mist.
            After soaking in the beauty of these natural wonders, the tour continues to the majestic Sólheimajökull glacier. Here, you will embark on an unforgettable journey into a hidden ice cave, a rare and magical experience. The intricate ice formations and vibrant blue hues within the cave create a surreal atmosphere, perfect for capturing stunning photographs.`
        ]
    };
    return (
        <div>
            <div style={{ padding: '20px' }}>
                <Location location={location} recommendations={recommendations} />
            </div>            
            <Aboutplace title={placeData.title} sections={placeData.sections} />
            <h2 className={styles.hd} >You may also like</h2>
            <DirectionPost posts={post1} />
            <Tourinfo />
            <DirectionPost posts={post2} />
            <Tourinfo />
            <DirectionPost posts={post3} />
            <Tourinfo />


            <TravelSignup />
            <Feedback />
            <FaqSection />
        </div>
    )
}

export default PostDetail;