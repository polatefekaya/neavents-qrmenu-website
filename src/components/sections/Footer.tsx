function Footer() {
  return (
    <footer className="bg-neon-lime-400 text-black">
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-black">Neavents</h3>
            <p className="mt-4 text-sm">
              Mekanların dijital dönüşümünü hızlandırıyoruz.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-black">Ürün</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-neon-lime-900">
                  Özellikler
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-neon-lime-900">
                  S.S.S.
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-lime-900">
                  Giriş Yap
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black">Şirket</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-neon-lime-900">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-lime-900">
                  İletişim
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-lime-900">
                  Kariyer
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black">Yasal</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-neon-lime-900">
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-lime-900">
                  Kullanım Koşulları
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; 2025 Neavents. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
