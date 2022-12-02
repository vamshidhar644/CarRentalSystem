import React from 'react';
import styles from '../styles/services.module.css';
import { client } from '../lib/client';
import { urlFor } from '../lib/client';
import Product from '../components/Product';

const services = ({ IntroData }) => {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.Header}>
        <h1>Our Services</h1>
      </div>
      <div className={styles.ServicesBody}>
        <div className={styles.ServicesCards}>
          {IntroData?.map((services) => (
            <Product key={services._id} services={services} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const IntroQuery = `*[_type == "cars"]`;
  const IntroData = await client.fetch(IntroQuery);

  return {
    props: {
      IntroData,
    },
  };
};

export default services;
