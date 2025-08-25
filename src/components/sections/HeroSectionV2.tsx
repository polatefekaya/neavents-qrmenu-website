function HeroSectionV2(){
    return(
        <section className="relative pt-48 pb-32 md:pt-48 md:pb-36 flex items-center justify-center bg-white overflow-hidden">
             <div className="absolute inset-0 z-10">
                <div className="absolute top-0 left-0 w-96 h-96 md:w-[40rem] md:h-[40rem] bg-neon-lime-200/80 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 md:w-[40rem] md:h-[40rem] bg-neon-lime-200/50 rounded-full blur-3xl opacity-90 translate-x-1/2 translate-y-1/2"></div>
            </div>
            
            <div className="relative z-20 text-center px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900">
                    Işık Hızında QR Menü, <br className="hidden md:block" />
                    <span className="bg-clip-text text-neon-lime-400">Anında Cebinde.</span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-600">
                    Bedava olarak oluştur, anında kullanmaya başla. Evet, bedava, standart paketimiz gerçekten bedava, hem de süresiz. Zaten başka paketimiz de yok.
                </p>
                <div className="mt-10 pt-16 px-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a href="#" className="w-full sm:w-auto bg-neon-lime-400 text-neon-lime-950 font-semibold px-8 py-3 rounded-lg text-lg hover:bg-neon-lime-500 transition-transform hover:scale-105">
                        QR Menü Oluştur
                    </a>
                    <a href="#" className="w-full sm:w-auto bg-neon-lime-100 font-semibold px-8 py-3 rounded-lg text-lg hover:bg-slate-300 transition-transform hover:scale-105">
                        Örneği Gör
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HeroSectionV2;