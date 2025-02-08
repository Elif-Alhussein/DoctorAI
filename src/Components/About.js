export default function About() {
  return (
    <section id="aboutSection" className="py-12 bg-gray-200">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-slate-900">Who We Are..?</h2>
        <p className="text-lg text-gray-700 mt-4">
          We are a team of experts in healthcare and technology, dedicated to
          leveraging artificial intelligence to transform the medical industry.
        </p>

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {[
            {
              icon: "ri-heart-2-line",
              title: "Comprehensive Care",
              description:
                "Our platform ensures seamless care by connecting patients with top medical professionals.",
            },
            {
              icon: "ri-brain-line",
              title: "AI-Powered Diagnosis",
              description:
                "Utilize AI for faster and more accurate disease detection and treatment recommendations.",
            },
            {
              icon: "ri-calendar-check-line",
              title: "Easy Scheduling",
              description:
                "Effortlessly schedule appointments with doctors based on your diagnosis results.",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <i className={`${item.icon} text-4xl text-cyan-600`} />
              <h3 className="font-bold text-2xl mt-4">{item.title}</h3>
              <p className="mt-2">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <a
            href="#register"
            className="py-2 px-6 text-slate-900 bg-gradient-to-r from-cyan-300 to-cyan-600 hover:from-cyan-500 hover:to-orange-500 rounded-full"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
