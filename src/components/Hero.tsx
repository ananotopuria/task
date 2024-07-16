import backgroundImg from "../assets/hero.png";

function Hero() {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center p-3 mb-2 bg-light text-dark mt-10">
        <div
          style={{
            backgroundImage: `url(${backgroundImg})`,
            width: "90%",
            height: "500px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "2rem",
          }}
        >
          <div className="text-white bg-[#145e2a97] absolute w-[20rem] right-20 bottom-60 p-4 rounded-lg">
            <h2>Urban Planning</h2>
            <p>Lörem ipsum europlande krohiskap panstik, förväntis.</p>
            <p>
              Lörem ipsum europlande krohiskap panstik, förväntis. Klicktivism
              plada. Ekrofiling hedår, medan al, monoktig härgjord.
              Supranylingar kask. Geologi byligt dikapobelt.
            </p>
            <button className="rounded-lg bg-slate-300 text-gray-700 px-4 py-1 mt-2">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
