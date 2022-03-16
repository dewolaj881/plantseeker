import Text from './Text';

export default function Tab({backgroundColor, img, alt, h1, p}) {
  return (
    <div className={'tab w-24 ' + backgroundColor}>
      <img height="150px" width="150px" className="p-8" src={img} alt={alt}/>
      <Text h1={h1} p={p}></Text>
    </div>
  );
}
