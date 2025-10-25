import image1 from "../assets/food1.jpg";
const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="left">
          <h1></h1>
          <p></p>
          <button>Share Your Recipe</button>
        </div>
        <div className="right">
          <img src={image1} alt="pizza image" />
        </div>
      </section>
      <div className="bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ff9560"
            fill-opacity="1"
            d="M0,224L30,197.3C60,171,120,117,180,128C240,139,300,213,360,213.3C420,213,480,139,540,133.3C600,128,660,192,720,186.7C780,181,840,107,900,112C960,117,1020,203,1080,218.7C1140,235,1200,181,1260,160C1320,139,1380,149,1410,154.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Home;
