export default function sitemap() {
  const baseUrl = "https://www.honeybunnytherapy.com";

  const urls = [
    "",          // halaman utama
    "Layanan",
    "Fasilitas",
  ];

  return urls.map((url) => ({
    url: `${baseUrl}/${url}`,
    lastModified: new Date().toISOString(),
  }));
}
