export default function getImageUrl(image) {
  const name = image?.img_name;
  return name
    ? `http://codeforgreen.zspwrzesnia.pl/plants/database_img/${name}`
    : 'https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg';
}
