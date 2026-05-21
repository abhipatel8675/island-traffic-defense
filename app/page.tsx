export default function IslandTrafficDefenseWebsite() {
  const phone = "631-721-0380";
  const email = "info@longislandtrafficdefense.com";

  const practiceAreas = [
    {
      title: "Speeding Tickets",
      titleEs: "Multas por Exceso de Velocidad",
      description:
        "A speeding conviction adds points to your license and drives up insurance premiums. We fight to reduce or dismiss your charge before it costs you more.",
      icon: "⚡",
    },
    {
      title: "Reckless Driving",
      titleEs: "Manejo Imprudente",
      description:
        "Reckless driving is a misdemeanor in New York. The consequences are severe — we provide aggressive defense to protect your record and license.",
      icon: "🚨",
    },
    {
      title: "Suspended License",
      titleEs: "Licencia Suspendida",
      description:
        "Driving with a suspended license carries serious criminal penalties. We work to restore your driving privileges as quickly as possible.",
      icon: "🪪",
    },
    {
      title: "CDL Violations",
      titleEs: "Infracciones CDL",
      description:
        "Commercial drivers face stricter federal standards. A single conviction can end your career. We understand CDL law and defend your livelihood.",
      icon: "🚛",
    },
    {
      title: "Cell Phone / Distracted Driving",
      titleEs: "Teléfono Celular / Manejo Distraído",
      description:
        "New York's handheld device laws carry heavy fines and 5 points per conviction. We challenge the evidence to protect your record.",
      icon: "📵",
    },
    {
      title: "All Moving Violations",
      titleEs: "Todas las Infracciones de Tránsito",
      description:
        "Red light cameras, failure to yield, illegal turns, and more — we handle every traffic matter in Nassau and Suffolk County courts.",
      icon: "🚦",
    },
  ];

  const whyChooseUs = [
    {
      stat: "Local",
      label: "Court Knowledge",
      description:
        "We know the local judges, prosecutors, and procedures that shape outcomes in your specific court.",
    },
    {
      stat: "Lower",
      label: "Insurance Premiums",
      description:
        "Reducing or dismissing charges keeps points off your license — protecting you from premium increases for years.",
    },
    {
      stat: "Bilingual",
      label: "Spanish Support",
      description:
        "We provide full Spanish language support so every client receives clear, accessible representation.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Top Contact Bar */}
      <div className="bg-blue-600 text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <span>Serving Nassau &amp; Suffolk County Courts | Se Habla Español</span>
          <a href={`tel:${phone}`} className="font-bold hover:underline">
            {phone}
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-xl font-black text-white">Island</span>
            <span className="text-xl font-black text-blue-400"> Traffic Defense</span>
          </div>
          <a
            href={`tel:${phone}`}
            className="rounded-xl bg-blue-500 hover:bg-blue-400 transition px-5 py-2.5 text-sm font-bold shadow-lg shadow-blue-500/20"
          >
            Call Now: {phone}
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 lg:w-96 lg:h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 lg:w-96 lg:h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 mb-6">
              Strategic Traffic Defense Across Nassau and Suffolk County
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
              Island
              <span className="block text-blue-400">Traffic Defense</span>
            </h1>

            <p className="mt-8 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Experienced Long Island traffic defense representation for drivers facing speeding
              tickets, reckless driving charges, suspended license violations, CDL matters, and all
              moving violations throughout Nassau and Suffolk County. We understand the local traffic
              courts, prosecutors, and procedures that can impact your case — and your insurance
              premiums. Strategic advocacy. Sophisticated legal representation. Results-driven
              defense.
            </p>

            <p className="mt-3 text-lg text-blue-300 font-medium">
              Servicio disponible en Español · Spanish language support available
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${phone}`}
                className="text-center rounded-2xl bg-blue-500 hover:bg-blue-400 transition px-8 py-4 text-lg font-bold shadow-2xl shadow-blue-500/30"
              >
                Call {phone}
              </a>
              <a
                href={`mailto:${email}`}
                className="text-center rounded-2xl border border-slate-700 hover:border-blue-400 hover:bg-blue-500/10 transition px-8 py-4 text-lg font-semibold"
              >
                Fight Your Ticket Today
              </a>
            </div>

            <p className="mt-6 text-slate-500 text-sm">
              Huntington, NY 11743 · Nassau &amp; Suffolk County Courts
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-black">
              Why Long Island Drivers Choose{" "}
              <span className="text-blue-400">Island Traffic Defense</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Local knowledge. Proven strategy. Real results — including lower insurance premiums.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div
                key={item.stat}
                className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl font-black text-blue-400 mb-1">{item.stat}</div>
                <div className="text-white font-bold text-lg mb-3">{item.label}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="bg-slate-950 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-black">
              Traffic Defense <span className="text-blue-400">Practice Areas</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              We defend Nassau and Suffolk County drivers across every category of traffic violation.{" "}
              <span className="text-slate-300 font-medium">We do not handle DWI matters.</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => (
              <div
                key={area.title}
                className="group bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all rounded-2xl p-6"
              >
                <div className="text-3xl mb-4">{area.icon}</div>
                <h3 className="text-lg font-bold text-white mb-1">{area.title}</h3>
                <p className="text-blue-400/70 text-sm italic mb-3">{area.titleEs}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Premium Focus Section */}
      <section className="bg-gradient-to-br from-blue-950 to-slate-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-6">
            A Conviction Follows You for{" "}
            <span className="text-blue-400">Years on Your Insurance</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Every point added to your New York license can trigger an insurance premium increase that
            lasts 3 to 5 years. Drivers in Nassau and Suffolk County often pay thousands of dollars
            more after a single uncontested ticket. Island Traffic Defense works to reduce or
            eliminate violations before they ever reach your record — saving you far more than the
            cost of representation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${phone}`}
              className="rounded-2xl bg-blue-500 hover:bg-blue-400 transition px-8 py-4 text-lg font-bold shadow-2xl shadow-blue-500/30 w-full sm:w-auto text-center"
            >
              Call {phone}
            </a>
            <a
              href={`mailto:${email}`}
              className="rounded-2xl border border-blue-500/40 hover:bg-blue-500/10 transition px-8 py-4 text-lg font-semibold w-full sm:w-auto text-center"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Local Court Experience */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black mb-6">
                Deep Knowledge of Nassau &amp; Suffolk County{" "}
                <span className="text-blue-400">Traffic Courts</span>
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Traffic defense outcomes depend heavily on local knowledge. We have appeared in courts throughout Nassau and Suffolk for over 20 years. We maintain a thorough understanding of the procedures, tendencies, and administrative rules that govern each courthouse. From the Nassau County Traffic and Parking Violations Agency (TPVA) and the Suffolk County TPVA, to local village courts across the Island, we know how to navigate each venue strategically. That local edge can be the difference between a conviction and a dismissal.
              </p>
            </div>

            <div />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-950 py-20 px-6" id="contact">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">
            Ready to <span className="text-blue-400">Fight Your Ticket?</span>
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            Contact Island Traffic Defense today. We serve Nassau and Suffolk County drivers and
            offer Spanish language support.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="text-2xl mb-3">📞</div>
              <div className="text-slate-400 text-sm mb-1">Phone</div>
              <a
                href={`tel:${phone}`}
                className="text-white font-bold hover:text-blue-400 transition"
              >
                {phone}
              </a>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="text-2xl mb-3">✉️</div>
              <div className="text-slate-400 text-sm mb-1">Email</div>
              <a
                href={`mailto:${email}`}
                className="text-white font-bold hover:text-blue-400 transition break-all"
              >
                {email}
              </a>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="text-2xl mb-3">📍</div>
              <div className="text-slate-400 text-sm mb-1">Location</div>
              <span className="text-white font-bold">Huntington, NY 11743</span>
            </div>
          </div>

          <a
            href={`tel:${phone}`}
            className="inline-block rounded-2xl bg-blue-500 hover:bg-blue-400 transition px-10 py-4 text-xl font-bold shadow-2xl shadow-blue-500/30"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-xl font-black text-white">Island</span>
              <span className="text-xl font-black text-blue-400"> Traffic Defense</span>
              <p className="text-slate-500 text-sm mt-1">Huntington, NY 11743</p>
            </div>
            <div className="text-sm text-slate-400 space-y-1">
              <p>
                <a href={`tel:${phone}`} className="hover:text-white transition">
                  {phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${email}`} className="hover:text-white transition">
                  {email}
                </a>
              </p>
              <p>Nassau &amp; Suffolk County, New York</p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 text-center space-y-3">
            <p className="text-slate-500 text-xs leading-relaxed max-w-3xl mx-auto">
              <strong className="text-slate-400">Attorney Advertising.</strong> Prior results do not
              guarantee a similar outcome. The information on this website is for general
              informational purposes only and does not constitute legal advice. Viewing this website
              or contacting Island Traffic Defense does not create an attorney-client relationship.
              Island Traffic Defense does not handle DWI/DUI matters.
            </p>
            <p className="text-slate-600 text-xs">
              &copy; 2026 Island Traffic Defense. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
