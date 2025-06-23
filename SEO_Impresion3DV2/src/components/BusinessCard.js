// src/components/BusinessCard.js
import React from 'react';
import styles from '../styles/BusinessCard.module.css';

const BusinessCard = ({ title, description, stats }) => {
  return (
    <div className={styles.businessCard}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.stats}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.stat}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessCard;
