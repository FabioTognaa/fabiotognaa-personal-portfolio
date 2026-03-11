//* ICONA SOCIAL USATA NEL SITO

function SocialIcon({ item }) {
  return (
    <a href={item.href}>
      <img
        src={item.src}
        className="linear block h-auto min-w-5 cursor-pointer transition-all duration-100 ease-in-out hover:scale-90 md:min-w-9"
        alt={item.alt}
      />
    </a>
  );
}
export default SocialIcon;
