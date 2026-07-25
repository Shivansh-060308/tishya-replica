import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Tishya Consultancy Pvt. Ltd." },
      { name: "description", content: "Counselling, visa processing, test preparation and university selection — a full suite of immigration and education consultancy services." },
      { property: "og:title", content: "Our Services — Tishya Consultancy Pvt. Ltd." },
      { property: "og:description", content: "A comprehensive suite of immigration and education consultancy services." },
    ],
  }),
  component: Services,
});

const BANNER =
  "https://static.wixstatic.com/media/11062b_9b52a0adb0ac4756a04a9e7aeaa7ce3d~mv2.jpeg/v1/fill/w_1905,h_279,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_9b52a0adb0ac4756a04a9e7aeaa7ce3d~mv2.jpeg";

const services = [
  { title: "Counselling", icon: "https://static.wixstatic.com/media/3941bc_378398d86f2845daa9650af4d794e66a~mv2.png/v1/fill/w_81,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3941bc_378398d86f2845daa9650af4d794e66a~mv2.png", text: "Personalized one-on-one counselling to understand your goals and chart the right path for your journey abroad." },
  { title: "Visa Processing", icon: "https://static.wixstatic.com/media/3941bc_c4227c0f62e44e06843cd9afe6f32c46~mv2.png/v1/fill/w_81,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3941bc_c4227c0f62e44e06843cd9afe6f32c46~mv2.png", text: "End-to-end visa documentation and processing support to make the paperwork stress-free." },
  { title: "Test Preparation", icon: "https://static.wixstatic.com/media/3941bc_bc42a5de21ad47bfbbc07ddf5a746043~mv2.png/v1/fill/w_81,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3941bc_bc42a5de21ad47bfbbc07ddf5a746043~mv2.png", text: "Focused preparation for IELTS, PTE, TOEFL and other exams required for study abroad." },
  { title: "University Selection", icon: "https://static.wixstatic.com/media/3941bc_1400e397c23e47b78aa1316609a2ce95~mv2.png/v1/fill/w_81,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3941bc_1400e397c23e47b78aa1316609a2ce95~mv2.png", text: "Guidance on choosing the right university and program aligned with your profile and career goals." },
];

function Services() {
  return (
    <>
      <img src={BANNER} alt="" className="w-full h-48 md:h-64 object-cover" />
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h1 className="text-4xl font-bold text-navy text-center">Our Services</h1>
        <p className="mt-4 text-center max-w-2xl mx-auto italic text-muted-foreground">
          "At Tishya Consultancy pvt.ltd, we offer a comprehensive suite of services encompassing immigration and education consultancy."
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="flex gap-5 p-6 border rounded-lg hover:shadow-lg transition bg-background">
              <img src={s.icon} alt={s.title} className="h-16 w-16 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
