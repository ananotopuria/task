import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";

export const cardInfo = [
  {
    id: 1,
    image: card1,
    title: "Lörem ipsum patt karirenyst",
    info: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
  },
  {
    id: 2,
    image: card2,
    title: "Lörem ipsum patt karirenyst",
    info: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
  },
  {
    id: 3,
    image: card3,
    title: "Lörem ipsum patt karirenyst",
    info: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
  },
  {
    id: 4,
    image: card4,
    title: "Lörem ipsum patt karirenyst",
    info: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
  },
  {
    id: 5,
    image: card5,
    title: "Lörem ipsum patt karirenyst",
    info: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
  },
  {
    id: 6,
    image: card6,
    title: "Lörem ipsum patt karirenyst",
    info: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
  },
];

function Posts() {
  return (
    <article className="flex flex-wrap p-4 text-white gap-20">
      {cardInfo.map((card) => (
        <div
          key={card.id}
          className="bg-[#145E2A] shadow-lg rounded-lg overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-white">{card.info}</p>
          </div>
          <button className="rounded-lg bg-slate-300 text-gray-700 px-4 py-1 mt-2 mb-2" >
              Read More
            </button>
        </div>
      ))}
    </article>
  );
}

export default Posts;
