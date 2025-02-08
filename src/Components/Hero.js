import hero7 from "../images/male-doctor.jpg"

export default function Hero() {
  return (
    <section id="hero">
      <div className="container mx-auto px-6 space-x-6 flex flex-col md:flex-row">
        <div className="md:w-1/2 flex flex-col justify-center space-y-5 py-8 text-center md:text-left text-slate-900">
          <h1 className="font-bold text-3xl md:text-5xl">
            Empowering Healthcare through Artificial Intelligence
          </h1>
          <p>
            Detect. Connect Heal. Seamlessly schedule doctor meetings after
            disease detection, unlocking your path to optimal health.
          </p>
          <a
            href="#Trynow"
            className="py-0.5 px-6 rounded-full self-center md:self-start text-white bg-cyan-600 hover:bg-cyan-800"
          >
            Try now
          </a>
        </div>
        <div className="md:w-1/2">
          <img src={hero7} alt="Hero" />
        </div>
      </div>
    </section>
  );
}
