import About_Us from "../../assets/About_Us.png";

export default function AboutSection() {
  return (
    <section className="px-10 py-8 bg-stone-50">
      <div className="relative w-full max-w-8xl mx-auto rounded-3xl overflow-hidden h-120">
        {/* Background image — no gradient overlay */}
        <img src={About_Us} alt="About Serene Spaces" className="w-full h-full object-cover"
        />

        {/* Floating dark card — bottom-left */}
        <div className="absolute bottom-10 left-10 bg-stone-950 border border-[#FFF9F1] rounded-2xl px-8 py-8 max-w-md">
          <h3 className="font-playfair text-2xl font-bold text-white mb-5">
            About Us
          </h3>
          <p className="text-white/85 text-sm leading-relaxed">
            At <span className="font-bold text-white">Serene Spaces</span>, we
            believe that your home is a reflection of your personality and
            style. Established with a passion for design and an eye for detail,
            we specialize in crafting exquisite furniture and providing bespoke
            interior solutions that transform spaces into elegant, comfortable,
            and functional homes.
          </p>
        </div>
      </div>
    </section>
  );
}
