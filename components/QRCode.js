export default function QRCode({size = 128, url}) {
  return <img src={`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}`} alt={url}/>
}
