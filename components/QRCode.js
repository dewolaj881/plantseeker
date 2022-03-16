import PlantImage from './PlantImage.js';

export default function QRCode({size = 128, url}) {
  return (
    <PlantImage src={`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}`}
         alt="Kod QR"/>
  );
}
