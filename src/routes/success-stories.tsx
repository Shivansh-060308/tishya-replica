import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — Tishya Consultancy Pvt. Ltd." },
      { name: "description", content: "Real success stories of students and professionals we've helped move, study and thrive abroad." },
      { property: "og:title", content: "Success Stories — Tishya Consultancy Pvt. Ltd." },
      { property: "og:description", content: "Real success stories from Tishya Consultancy clients." },
    ],
  }),
  component: SuccessStories,
});

const images = [
  "https://static.wixstatic.com/media/3941bc_c1f2a40b0a0f443883ad95d3dbf6fd8b~mv2.jpg/v1/fill/w_400,h_700,al_c,lg_1,q_80,enc_avif,quality_auto/3941bc_c1f2a40b0a0f443883ad95d3dbf6fd8b~mv2.jpg",
  "https://static.wixstatic.com/media/3941bc_bdbb5a9c403445aca0dca83f5cfb497b~mv2.jpg/v1/fill/w_400,h_700,fp_0.57_0.18,q_89,enc_avif,quality_auto/3941bc_bdbb5a9c403445aca0dca83f5cfb497b~mv2.jpg",
  "https://static.wixstatic.com/media/3941bc_8a10446f05314304880048aa2892d973~mv2.jpg/v1/fill/w_400,h_700,fp_0.49_0.18,q_89,enc_avif,quality_auto/3941bc_8a10446f05314304880048aa2892d973~mv2.jpg",
  "https://static.wixstatic.com/media/3941bc_254e493ad7314b4f8f94eb95c4fd2d99~mv2.jpg/v1/fill/w_400,h_700,fp_0.54_0.18,q_89,enc_avif,quality_auto/3941bc_254e493ad7314b4f8f94eb95c4fd2d99~mv2.jpg",
  "https://static.wixstatic.com/media/3941bc_8ccdf073192347f783ed665fbbc73ddc~mv2.jpg/v1/fill/w_400,h_700,fp_0.51_0.14,q_89,enc_avif,quality_auto/3941bc_8ccdf073192347f783ed665fbbc73ddc~mv2.jpg",
  "https://static.wixstatic.com/media/3941bc_88141b387a0242eebdc6b02fcb7d495f~mv2.jpg/v1/fill/w_400,h_700,fp_0.49_0.17,q_89,enc_avif,quality_auto/3941bc_88141b387a0242eebdc6b02fcb7d495f~mv2.jpg",
  "https://static.wixstatic.com/media/3941bc_28f144020c5d4088b49c6aeb166fb300~mv2.jpg/v1/fill/w_400,h_700,fp_0.52_0.16,q_89,enc_avif,quality_auto/3941bc_28f144020c5d4088b49c6aeb166fb300~mv2.jpg",
];

function SuccessStories() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-navy text-center">Success Stories</h1>
      <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
        Celebrating the achievements of our clients who turned their dreams into reality.
      </p>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Success story ${i + 1}`} className="w-full aspect-[9/16] object-cover rounded-md shadow-sm hover:shadow-lg transition" loading="lazy" />
        ))}
      </div>
    </section>
  );
}
