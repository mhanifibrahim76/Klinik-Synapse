export default function sitemap() {
  const baseUrl = "https://www.synapschild.com";

  const urls = [
    "",           // halaman utama
    "Layanan",    // halaman layanan
    "Fasilitas",  // halaman fasilitas
  ];

  return urls.map((url) => ({
    url: `${baseUrl}/${url}`,
    lastModified: new Date().toISOString(),
  }));
}
