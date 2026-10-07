export default function Home() {
  const whatsapp =
    "https://wa.me/628126550507?text=Halo%20saya%20tertarik%20dengan%20Graha%20Kencana";

  const maps =
    "https://maps.app.goo.gl/qztvZ6aqSPmF2oNo7?g_st=ac";

  const photos = [
    {
      src: "/rumah-depan.jpeg",
      title: "Rumah Subsidi Tipe 27/60",
      description: "Rumah desain minimalis lokasi strategis 100 meter dari jalan raya provinsi",
    },
    {
      src: "/masjid.jpeg",
      title: "Masjid Al-Mi'raj",
      description: "Fasilitas ibadah di lingkungan perumahan",
    },
    {
      src: "/kegiatan-warga.jpeg",
      title: "Kegiatan Warga",
      description: "Kegiatan warga di lingkungan Graha Kencana",
    },
    {
      src: "/proses-akad.jpeg",
      title: "Proses Akad",
      description: "Proses akad pembelian rumah Graha Kencana",
    },
    {
      src: "/syukuran.jpeg",
      title: "Syukuran",
      description: "Kegiatan syukuran warga Graha Kencana",
    },
    {
      src: "/taman-mengaji-anak.jpeg",
      title: "Taman Mengaji Anak",
      description: "Kegiatan mengaji anak-anak di lingkungan perumahan",
    },
    {
      src: "/akad.jpeg",
      title: "Akad Pembelian Rumah",
      description: "Momen akad pembelian rumah Graha Kencana",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">

          <div className="flex items-center gap-3">
  <img
    src="/logo-1.jpeg"
    alt="Logo Graha Kencana"
    className="absolute left-0 top-1/2 h-[65px] w-[65px] -translate-y-1/2 object-contain"
  />

  <div className="ml-[90px]">
    <h1 className="text-xl font-bold">
      Graha Kencana
    </h1>

    <p className="text-xs text-gray-500">
      Rumah Subsidi Paling Nyaman
    </p>
  </div>
</div>

          <div className="hidden gap-6 text-sm font-medium md:flex">
            <a
              href="#home"
              className="hover:text-green-700"
            >
              Home
            </a>

            <a
              href="#promo"
              className="hover:text-green-700"
            >
              Promo
            </a>

            <a
              href="#rumah"
              className="hover:text-green-700"
            >
              Rumah
            </a>

            <a
              href="#lokasi"
              className="hover:text-green-700"
            >
              Lokasi
            </a>
          </div>

        </div>
      </nav>


      {/* HERO */}
      <section
        id="home"
        className="bg-gray-50"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:py-20">

          <div>

            <p className="mb-3 font-semibold text-green-700">
              PERUMAHAN GRAHA KENCANA
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Rumah Nyaman untuk

              <span className="block text-green-700">
                Masa Depan Keluarga
              </span>
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Hunian strategis dengan lingkungan nyaman dan berbagai
              kemudahan untuk keluarga Anda.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">

              <a
                href="#rumah"
                className="rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
              >
                Lihat Rumah
              </a>

              <a
                href={maps}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 transition hover:bg-gray-100"
              >
                Lihat Lokasi
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600"
              >
                Chat WhatsApp
              </a>

            </div>

          </div>


          <div className="overflow-hidden rounded-3xl shadow-xl">

            <img
              src="/rumah-depan.jpeg"
              alt="Rumah Graha Kencana"
              className="h-[320px] w-full object-cover md:h-[430px]"
            />

          </div>

        </div>
      </section>


      {/* HIGHLIGHT PROMO */}
      <section
        id="promo"
        className="mx-auto max-w-6xl px-5 py-16"
      >

        <div className="mb-7">

          <p className="font-semibold text-green-700">
            PROMO TERBARU
          </p>

          <h2 className="mt-1 text-3xl font-bold">
            🔥 Highlight Promo
          </h2>

          <p className="mt-2 text-gray-600">
            Lihat berbagai promo dan penawaran menarik Graha Kencana.
          </p>

        </div>


        {/* SCROLL PROMO */}
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5">

          <div className="min-w-[85%] snap-center overflow-hidden rounded-2xl bg-gray-100 shadow-md sm:min-w-[55%] md:min-w-[38%]">
            <img
              src="/promo-1.jpeg"
              alt="Promo Graha Kencana 1"
              className="h-[430px] w-full object-cover"
            />
          </div>

          <div className="min-w-[85%] snap-center overflow-hidden rounded-2xl bg-gray-100 shadow-md sm:min-w-[55%] md:min-w-[38%]">
            <img
              src="/promo-2.jpeg"
              alt="Promo Graha Kencana 2"
              className="h-[430px] w-full object-cover"
            />
          </div>

          <div className="min-w-[85%] snap-center overflow-hidden rounded-2xl bg-gray-100 shadow-md sm:min-w-[55%] md:min-w-[38%]">
            <img
              src="/promo-3.jpeg"
              alt="Promo Graha Kencana 3"
              className="h-[430px] w-full object-cover"
            />
          </div>

        </div>


        <div className="mt-3 text-center text-sm text-gray-400">
          ← Geser untuk melihat promo lainnya →
        </div>

      </section>


      {/* TENTANG */}
      <section className="bg-gray-50">

        <div className="mx-auto max-w-6xl px-5 py-16">

          <div className="max-w-3xl">

            <p className="font-semibold text-green-700">
              TENTANG KAMI
            </p>

            <h2 className="mt-1 text-3xl font-bold">
              Graha Kencana
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-gray-700">
              Graha Kencana hadir sebagai pilihan hunian bagi keluarga
              yang menginginkan rumah nyaman dengan lokasi yang strategis.
              Lingkungan perumahan dirancang untuk memberikan suasana
              tempat tinggal yang aman dan nyaman.
            </p>

          </div>

        </div>

      </section>


      {/* FOTO PERUMAHAN */}
      <section
        id="rumah"
        className="mx-auto max-w-6xl px-5 py-16"
      >

        <div className="mb-7">

          <p className="font-semibold text-green-700">
            GALERI
          </p>

          <h2 className="mt-1 text-3xl font-bold">
            📸 Foto Perumahan
          </h2>

          <p className="mt-2 text-gray-600">
            Lihat suasana rumah dan lingkungan Graha Kencana.
          </p>

        </div>


        {/* SCROLL FOTO */}
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5">

          {photos.map((photo, index) => (

            <div
              key={index}
              className="min-w-[85%] snap-center overflow-hidden rounded-2xl shadow-md sm:min-w-[55%] md:min-w-[38%]"
            >

              <img
                src={photo.src}
                alt={photo.title}
                className="h-[350px] w-full object-cover"
              />

              <div className="bg-white p-4">

                <h3 className="font-bold">
                  {photo.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {photo.description}
                </p>

              </div>

            </div>

          ))}

        </div>


        <div className="mt-3 text-center text-sm text-gray-400">
          ← Geser untuk melihat foto lainnya →
        </div>

      </section>


      {/* LOKASI */}
      <section
        id="lokasi"
        className="bg-gray-50"
      >

        <div className="mx-auto max-w-6xl px-5 py-16 text-center">

          <p className="font-semibold text-green-700">
            LOKASI
          </p>

          <h2 className="mt-1 text-3xl font-bold">
            Temukan Graha Kencana
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-medium text-gray-700">
            Lokasi strategis dengan akses yang mudah menuju berbagai
            fasilitas dan kebutuhan sehari-hari.
          </p>

          <a
            href={maps}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block rounded-xl bg-green-700 px-7 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            📍 Buka Google Maps
          </a>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-green-700">

        <div className="mx-auto max-w-6xl px-5 py-16 text-center text-white">

          <h2 className="text-3xl font-bold">
            Tertarik dengan Graha Kencana?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-green-50">
            Hubungi kami untuk mendapatkan informasi harga,
            promo pricelist dan ketersediaan unit.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block rounded-xl bg-white px-7 py-3 font-bold text-green-700 transition hover:bg-gray-100"
          >
            💬 Hubungi via WhatsApp
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="bg-gray-900 px-5 py-8 text-center text-sm text-gray-400">

        <p className="font-semibold text-white">
          Graha Kencana
        </p>

        <p className="mt-1">
          Hunian Nyaman untuk Masa Depan Keluarga
        </p>

        <p className="mt-4">
          © 2026 Graha Kencana. All rights reserved.
        </p>

      </footer>

    </main>
  );
}