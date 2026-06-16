import EmberShader from './EmberShader'

export default function Hero() {
  return (
    <header className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-primary-container">
      {/* Animated ember background */}
      <div className="absolute inset-0 opacity-60">
        <EmberShader />
      </div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-margin max-w-4xl mx-auto">
        <h1 className="font-serif font-bold text-display text-white mb-md drop-shadow-lg">
          Ideas forged into{' '}
          <span className="text-ember">products.</span>
        </h1>
        <p className="font-sans text-body-lg text-white/80 max-w-2xl mx-auto mb-lg">
          Technology shaped by hand and intention. We don't just write code — we forge digital
          infrastructure built for the weight of tomorrow.
        </p>
        <a href="#cta" className="btn-ember">
          Enlist Now
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <span className="material-symbols-outlined">expand_more</span>
      </div>
    </header>
  )
}
