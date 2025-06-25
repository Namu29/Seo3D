import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function EventsSection() {
  // Datos de eventos (en producción vendrían de una API)
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Formnext 2025",
      date: new Date('2025-11-18'),
      location: "Frankfurt, Alemania",
      description: "La mayor feria de fabricación aditiva",
      url: "#formnext"
    },
    {
      id: 2,
      title: "Madrid 3D Print Expo",
      date: new Date('2025-09-12'),
      location: "IFEMA Madrid",
      description: "Innovación y tendencias en impresión 3D",
      url: "#madrid-expo"
    },
    {
      id: 3,
      title: "Webinar: Postprocesado Profesional",
      date: new Date('2025-10-25'),
      location: "Online",
      description: "Técnicas avanzadas con expertos del sector",
      url: "#webinar-postprocesado"
    }
  ]);

  // Estado para el contador
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Encontrar el próximo evento
  const nextEvent = events.reduce((closest, event) => {
    const now = new Date();
    return event.date > now && (!closest || event.date < closest.date) ? event : closest;
  }, null);

  // Actualizar el contador
  useEffect(() => {
    if (!nextEvent) return;
    
    const timer = setInterval(() => {
      const now = new Date();
      const diff = nextEvent.date - now;
      
      if (diff <= 0) {
        clearInterval(timer);
        return;
      }
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setCountdown({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [nextEvent]);

  // Formatear fecha para visualización
  const formatDate = (date) => {
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <section className="events-section">
      <div className="container">
        <div className="events-container">
          <div className="events-content">
            <h2 className="section-title">Agenda 3D 2025</h2>
            <p>No te pierdas los eventos más importantes del mundo de la impresión 3D en España y a nivel internacional.</p>
            
            <div className="events-list">
              {events.map(event => (
                <div className="event-item" key={event.id}>
                  <div className="event-date">
                    <div className="event-day">{event.date.getDate()}</div>
                    <div className="event-month">
                      {event.date.toLocaleDateString('es-ES', { month: 'short' }).toUpperCase()}
                    </div>
                  </div>
                  <div className="event-info">
                    <h4>{event.title}</h4>
                    <p>{event.location} - {event.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link href="#eventos" className="btn btn-warning mt-6">
              <i className="fas fa-calendar-alt mr-2"></i> Ver Agenda Completa
            </Link>
          </div>
          
          <div className="events-countdown">
            <h3>Próximo Evento Importante</h3>
            
            {nextEvent ? (
              <>
                <div className="countdown-title">{nextEvent.title}</div>
                
                <div className="countdown-container">
                  <div className="countdown-item">
                    <div className="countdown-value">{countdown.days}</div>
                    <div className="countdown-label">Días</div>
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-value">{countdown.hours}</div>
                    <div className="countdown-label">Horas</div>
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-value">{countdown.minutes}</div>
                    <div className="countdown-label">Min</div>
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-value">{countdown.seconds}</div>
                    <div className="countdown-label">Seg</div>
                  </div>
                </div>
                
                <p>{nextEvent.location} | {formatDate(nextEvent.date)}</p>
                <Link href={nextEvent.url} className="btn mt-4">
                  <i className="fas fa-info-circle mr-2"></i> Más Información
                </Link>
              </>
            ) : (
              <p>No hay próximos eventos programados</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}