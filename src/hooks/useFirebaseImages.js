import { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { ref, getDownloadURL } from 'firebase/storage';

// Hook do pobierania URL obrazu z Firebase Storage
export const useFirebaseImage = (imagePath) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!imagePath) {
      setLoading(false);
      return;
    }

    const fetchImage = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const imageRef = ref(storage, imagePath);
        const url = await getDownloadURL(imageRef);
        
        setImageUrl(url);
      } catch (err) {
        console.error('Błąd pobierania obrazu z Firebase Storage:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [imagePath]);

  return { imageUrl, loading, error };
};

// Hook do pobierania wielu obrazów jednocześnie
export const useFirebaseImages = (imagePaths) => {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!imagePaths || imagePaths.length === 0) {
      setLoading(false);
      return;
    }

    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const imagePromises = imagePaths.map(async (path) => {
          try {
            const imageRef = ref(storage, path);
            const url = await getDownloadURL(imageRef);
            return { path, url };
          } catch (err) {
            console.error(`Błąd pobierania obrazu ${path}:`, err);
            return { path, url: null, error: err };
          }
        });

        const results = await Promise.all(imagePromises);
        
        const imageMap = results.reduce((acc, { path, url, error: imgError }) => {
          acc[path] = { url, error: imgError };
          return acc;
        }, {});

        setImages(imageMap);
      } catch (err) {
        console.error('Błąd pobierania obrazów z Firebase Storage:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [imagePaths]);

  return { images, loading, error };
};

// Funkcja pomocnicza do pobierania pojedynczego URL obrazu
export const getFirebaseImageUrl = async (imagePath) => {
  try {
    const imageRef = ref(storage, imagePath);
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error('Błąd pobierania URL obrazu:', error);
    throw error;
  }
};