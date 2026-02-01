import React from 'react';
import { Phone, MapPin, Clock, Wrench, CheckCircle, Car, Shield } from 'lucide-react';

function App() {
  return (
    <div className="font-sans text-gray-900">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2"><Phone size={14} className="text-red-500" /> 123 654 789</span>
            <span className="flex items-center gap-2"><MapPin size={14} className="text-red-500" /> Ostrava Nerudova 249/27</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-red-500" />
            <span>Nonstop (kromě neděle 8-17)</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="bg-red-600 p-2 rounded-lg">
                <Car className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-slate-900">Autoservis <span className="text-red-600">Pod Hůrkou</span></span>
            </div>
            <div className="hidden md:flex space-x-8 font-medium">
              <a href="#sluzby" className="hover:text-red-600 transition-colors">Služby</a>
              <a href="#o-nas" className="hover:text-red-600 transition-colors">O nás</a>
              <a href="#kontakt" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                Objednat servis
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-slate-900 py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
            alt="Autoservis background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Spolehlivý servis <br/>
            <span className="text-red-500">pro vaše auto</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Zpravení plechů, lakování a okamžitý pneuservis v Ostravě. 
            S lehkou opravou přijedeme až za vámi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:123654789" className="px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2">
              <Phone size={20} />
              Zavolat 123 654 789
            </a>
            <a href="#sluzby" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 transition-all border border-white/20">
              Naše služby
            </a>
          </div>
        </div>
      </div>

      {/* Services */}
      <section id="sluzby" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Co pro vás uděláme?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Profesionální péče o váš vůz s důrazem na kvalitu a rychlost.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="text-red-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Klempířské práce</h3>
              <p className="text-gray-600">Profesionální oprava karoserií, rovnání plechů a odstraňování deformací po nehodách.</p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-blue-600">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Car className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Autolakýrnictví</h3>
              <p className="text-gray-600">Špičkové lakování dílů i celých vozů. Používáme kvalitní barvy s dlouhou životností.</p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-slate-800">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-slate-800 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Pneuservis</h3>
              <p className="text-gray-600">Okamžité přezutí, vyvážení kol a opravy defektů. Skladem máme běžné rozměry pneu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Why Us */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Proč svěřit auto právě nám?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Mobilní servis</h4>
                    <p className="text-gray-400">S lehkou opravou přijedeme za vámi. Nemusíte volat odtahovku kvůli drobnosti.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Rychlost opravy</h4>
                    <p className="text-gray-400">Víme, že auto potřebujete. Běžné opravy řešíme v řádu hodin, ne týdnů.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Férové jednání</h4>
                    <p className="text-gray-400">Žádné skryté poplatky. Cenu znáte předem a každou změnu konzultujeme.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-red-600 rounded-xl blur-lg opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2344&q=80" 
                alt="Mechanic working" 
                className="relative rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Kde nás najdete?</h2>
              <p className="text-gray-600 mb-8">Zastavte se za námi v dílně nebo nám zavolejte a domluvte si termín.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-600">
                    <MapPin />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Adresa</div>
                    <div className="font-bold text-lg">Ostrava Nerudova 249/27</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-600">
                    <Phone />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Telefon</div>
                    <a href="tel:123654789" className="font-bold text-lg hover:text-red-600">123 654 789</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-600">
                    <Clock />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Otevírací doba</div>
                    <div className="font-bold text-lg">Nonstop (Po-So)</div>
                    <div className="text-gray-600">Neděle: 8:00 - 17:00</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-[400px] bg-gray-200 rounded-xl overflow-hidden shadow-lg relative">
              {/* Placeholder for map - in production use Google Maps iframe */}
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.123456789!2d18.2625!3d49.8175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTmVydWRvdmEgMjQ5LzI3LCBPc3RyYXZh!5e0!3m2!1scs!2scz!4v1600000000000!5m2!1scs!2scz" 
                   width="100%" 
                   height="100%" 
                   style={{border:0}} 
                   allowFullScreen 
                   loading="lazy"
                   title="Mapa"
                 ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-slate-800 pb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Autoservis Pod Hůrkou</h3>
              <p>Spolehlivý partner pro vaše auto v Ostravě.</p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Kontakt</h3>
              <p>pistenamars@gmail.com</p>
              <p>+420 123 654 789</p>
            </div>
            <div>
               <h3 className="text-white font-bold text-lg mb-4">Rychlé odkazy</h3>
               <ul className="space-y-2">
                 <li><a href="#sluzby" className="hover:text-white">Služby</a></li>
                 <li><a href="#kontakt" className="hover:text-white">Kontakt</a></li>
               </ul>
            </div>
          </div>
          <div className="text-center text-sm">
            &copy; {new Date().getFullYear()} Autoservis Pod Hůrkou. Vytvořeno s ❤️.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
