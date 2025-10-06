import React from 'react';
import { useFirebaseImage } from '../hooks/useFirebaseImages';

const FirebaseImage = ({ 
  path, 
  alt, 
  className = '', 
  style = {}, 
  fallbackSrc = null,
  loadingComponent = null,
  errorComponent = null,
  ...props 
}) => {
  const { imageUrl, loading, error } = useFirebaseImage(path);

  // Jeśli jest błąd i mamy fallback, użyj fallback
  if (error && fallbackSrc) {
    return (
      <img 
        src={fallbackSrc} 
        alt={alt} 
        className={className} 
        style={style} 
        {...props} 
      />
    );
  }

  // Jeśli jest błąd i nie ma fallback, pokaż komponent błędu lub nic
  if (error) {
    if (errorComponent) {
      return errorComponent;
    }
    return (
      <div 
        className={`${className} firebase-image-error`} 
        style={{ 
          ...style, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',
          color: '#999',
          fontSize: '0.8rem'
        }}
      >
        Błąd ładowania obrazu
      </div>
    );
  }

  // Jeśli ładuje się
  if (loading) {
    if (loadingComponent) {
      return loadingComponent;
    }
    return (
      <div 
        className={`${className} firebase-image-loading`} 
        style={{ 
          ...style, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          backgroundColor: '#f8f8f8',
          color: '#999'
        }}
      >
        <div style={{ fontSize: '0.8rem' }}>Ładowanie...</div>
      </div>
    );
  }

  // Jeśli obraz jest gotowy
  return (
    <img 
      src={imageUrl} 
      alt={alt} 
      className={className} 
      style={style} 
      {...props} 
    />
  );
};

export default FirebaseImage;