import HeroBanner from '../../assets/hero.png';

export default function Hero() {
  return (
    <section className="relative w-full h-screen max-h-190 overflow-hidden">
      <img
        src={HeroBanner}
        alt="Hero interior"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />
      <span className="absolute bottom-24 left-10 text-xs font-medium text-white/80 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
        2024 Winter Sale
      </span>
      <h1 className="font-playfair absolute bottom-8 left-10 text-4xl md:text-5xl font-semibold text-white leading-tight">
        We Craft Your <em className="italic font-medium">Dream</em> Home
      </h1>
    </section>
  );
}
