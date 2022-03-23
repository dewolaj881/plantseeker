export default function getImageUrl(image) {
  const name = image?.img_name;

  if (!name) {
    return 'https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg'; // default
  }

  if (name.startsWith('http://') || name.startsWith('https://')) {
    return name;
  }

  return `http://codeforgreen.zspwrzesnia.pl/plants/database_img/${name}`;
}
