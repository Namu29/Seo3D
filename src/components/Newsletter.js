import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setMessage(data.message);
        setIsSuccess(true);
        setEmail('');
      } else {
        setMessage(data.error || 'Error al suscribirse');
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage('Error de conexión');
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
      
      // Resetear mensaje después de 5 segundos
      setTimeout(() => setMessage(''), 5000);
    }
  };

  return (
    <section className="newsletter">
      <div className="container">
        <h2>Únete a Nuestra Comunidad 3D</h2>
        <p>Recibe las últimas guías, comparativas, tutoriales y ofertas exclusivas directamente en tu correo</p>
        
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
          <button 
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Enviando...' : 'Suscribirse'}
          </button>
        </form>
        
        {message && (
          <p style={{ 
            marginTop: '15px', 
            fontSize: '0.9rem', 
            color: isSuccess ? '#4ade80' : '#f87171',
            textAlign: 'center'
          }}>
            {message}
          </p>
        )}
        
        <p style={{ marginTop: '15px', fontSize: '0.9rem', opacity: '0.8', textAlign: 'center' }}>
          Respetamos tu privacidad. Nunca compartiremos tu email.
        </p>
      </div>
    </section>
  );
}