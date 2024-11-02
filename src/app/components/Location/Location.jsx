"use client"; 
import { Row, Col, Button } from 'antd';
import { MapContainer, TileLayer } from 'react-leaflet';
import { EnvironmentOutlined } from '@ant-design/icons';
import 'leaflet/dist/leaflet.css';
import styles from './Location.module.css';
import { useEffect, useState } from 'react';

const Location = ({ location, recommendations = [] }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Validate location
    const position = location && location.latitude && location.longitude
        ? [location.latitude, location.longitude]
        : [0, 0]; // Default position or handle loading state

    const handleOpenMap = () => {
        if (isClient) {
            // window.open(`https://maps.google.com/?q=${position[0]},${position[1]}`, '_blank');
            console.log("running handleopenmap")
        }
    };

    return (
        <Row className={styles.mainsection} justify="center">
            <Col className={styles.leftsection} xs={24} md={10}>
                <div className={styles.customCard}>
                    <img
                        className={styles.img}
                        src="https://i.ibb.co/NWv3fLg/image-4.png"
                        alt="Location"
                        style={{ objectFit: 'cover', width: '100%', maxHeight: '420px' }}
                    />
                </div>
            </Col>
            <Col className={styles.rightsection} xs={24} md={10}>
                <div className={styles.mapContainer} style={{ marginBottom: 16 }}>
                    <MapContainer
                        className={styles.custommap}
                        center={position}
                        zoom={13}
                        style={{ height: '300px', width: '100%', overflow: 'hidden' }}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
                        />
                    </MapContainer>
                </div>
                <Button
                    className={styles.btn}
                    icon={<EnvironmentOutlined />}
                    onClick={handleOpenMap}
                >
                    Open in Google Maps
                </Button>
                <div className={styles.recommendationContainer}>
                    <h4 className={styles.hd}>More in New York</h4>
                    <div className={styles.cardContainer}>
                        {recommendations.length > 0 ? (
                            recommendations.map((item) => (
                                <div key={item.id} className={styles.recommendationCard}>
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                    />
                                    <p className={styles.recommendationText}>{item.title}</p>
                                </div>
                            ))
                        ) : (
                            <p>No recommendations available.</p>
                        )}
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Location;
