// src/components/FeatureCard.js
import Link from 'next/link';
import Image from 'next/image';

const FeatureCard = ({ badge, img, title, description, link }) => {
  return (
    <div className="feature-card">
      {badge && <div className="feature-badge">{badge}</div>}
      <div className="feature-img">
        <Image 
          src={img} 
          alt={title} 
          width={400} 
          height={220}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="feature-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={link}>
          <a className="btn">Ver más</a>
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;