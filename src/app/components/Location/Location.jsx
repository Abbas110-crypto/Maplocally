// components/Location.js
"use client";
import { Row, Col, Card, Button } from 'antd';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { EnvironmentOutlined } from '@ant-design/icons';
import 'leaflet/dist/leaflet.css';
import styles from './Location.module.css';

const Location = ({ location, recommendations }) => {
    const position = [location.latitude, location.longitude]; // Example: [43.0962, -79.0377]

    return (
        <Row className={styles.mainsection} justify="center">
            {/* Left side: Image */}
            <Col className={styles.leftsection} xs={24} md={10}>
                <Card
                    cover={<img src="https://i.ibb.co/NWv3fLg/image-4.png" alt="Location" style={{ borderRadius: '8px', objectFit: 'cover', width: '100%', maxHeight: '400px' }} />}
                    bordered={false}
                />
            </Col>

            {/* Right side: Map and recommendations */}
            <Col className={styles.rightsection} xs={24} md={10}>
                {/* Map Container wrapped in a div with custom CSS */}
                <div className={styles.mapContainer} style={{ marginBottom: 16 }}>
                    <MapContainer
                        className={styles.custommap}
                        center={position}
                        zoom={13}
                        style={{ height: '300px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
                        />
                        <Marker position={position}>
                            <Popup>{location.name}</Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <Button
                    type="primary"
                    icon={<EnvironmentOutlined />}
                    style={{ marginTop: 8, width: '100%' }}
                    onClick={() => window.open(`https://maps.google.com/?q=${position[0]},${position[1]}`, '_blank')}
                >
                    Open in Google Maps
                </Button>

                {/* Recommendations Section */}
                <h4 style={{ fontSize: '16px', margin: '12px 0' }}>More in {location.city}</h4>
                <Row>
                    {recommendations.map((item) => (
                        <Col key={item.id} xs={8}>
                            <Card
                                cover={<img src={item.imageUrl} alt={item.title} style={{ height: 80, objectFit: 'cover', borderRadius: '8px' }} />}
                                bordered={false}
                                bodyStyle={{ padding: '8px' }}
                            >
                                <p style={{ margin: 0, fontSize: 12, textAlign: 'center' }}>{item.title}</p>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    );
};

export default Location;
