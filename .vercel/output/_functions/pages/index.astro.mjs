/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../chunks/astro/server_NKnZPRJC.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C5LbgAmO.mjs';
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { a as getFeaturedCars } from '../chunks/formatHelpers_CprHYxuW.mjs';
import { V as VehicleCard } from '../chunks/VehiculeCard_BTlBpgRl.mjs';
import { SpinnerCircular } from 'spinners-react/lib/esm/SpinnerCircular.js';
/* empty css                                */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Team = createComponent(($$result, $$props, $$slots) => {
  const team = [
    { name: "Diego", role: "Gerente Comercial", image: "/images/team/diego.png" },
    { name: "Gabriel", role: "Jefe de Sucursal Kennedy", image: "/images/team/gabriel.png" },
    { name: "Fabiola", role: "Asesora Financiera", image: "/images/team/fabiola.png" },
    { name: "William", role: "Asesor Comercial", image: "/images/team/william.png" },
    { name: "Javier", role: "Jefe de Sucursal Vitacura", image: "/images/team/javier.png" },
    { name: "Benjam\xEDn", role: "Asesor Comercial", image: "/images/team/benjamin.png" },
    { name: "H\xE9ctor", role: "Jefe de Sucursal Concepci\xF3n", image: "/images/team/hector.png" },
    { name: "Jean", role: "Lavador/Recepcionista", image: "/images/team/jean.png" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-black text-white"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-12">Equipo</h2> <p class="text-center mb-12 max-w-3xl mx-auto text-gray-300">
Un equipo de expertos comprometidos con ofrecer soluciones automotrices integrales, 
      basadas en experiencia, innovación y pasión por la excelencia. Con nosotros, tu vehículo 
      está en las mejores manos.
</p> <div class="grid grid-cols-2 md:grid-cols-4 gap-8"> ${team.map((member) => renderTemplate`<div class="text-center"> <div class="w-32 h-32 mx-auto mb-4"> <img${addAttribute(member.image, "src")}${addAttribute(member.name, "alt")} class="w-full h-full rounded-full object-cover border-4 border-yellow-400"> </div> <h3 class="font-bold text-lg text-white">${member.name}</h3> <p class="text-gray-400 text-sm">${member.role}</p> </div>`)} </div> </div> </section>`;
}, "/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/components/Team.astro", void 0);

const FeaturedCars = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchFeaturedCars = async () => {
    try {
      const autos = await getFeaturedCars();
      setVehicles(autos.map((auto) => ({ vehicle: auto })));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchFeaturedCars();
  }, []);
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-black text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center mb-12", children: "Destacados" }),
    /* @__PURE__ */ jsx("p", { className: "text-center mb-8 text-gray-300", children: "Tenemos una amplia variedad de vehículos usados y de todas las marcas" }),
    loading ? /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center h-96", children: /* @__PURE__ */ jsx(
      SpinnerCircular,
      {
        size: 69,
        thickness: 136,
        speed: 114,
        color: "rgba(172, 134, 57, 1)",
        secondaryColor: "rgba(172, 127, 57, 0.44)"
      }
    ) }) : /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Navigation, Autoplay],
        spaceBetween: 30,
        slidesPerView: 4,
        navigation: true,
        pagination: { clickable: true },
        autoplay: {
          delay: 3e3,
          // Tiempo entre cada cambio de diapositiva (en ms)
          disableOnInteraction: false
          // Continúa el autoplay incluso si el usuario interactúa
        },
        loop: true,
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          400: {
            slidesPerView: 2
          },
          639: {
            slidesPerView: 2
          },
          865: {
            slidesPerView: 4
          },
          1e3: {
            slidesPerView: 4
          },
          1500: {
            slidesPerView: 4
          },
          1700: {
            slidesPerView: 4
          }
        },
        children: vehicles.map(({ vehicle }) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(VehicleCard, { vehicle }) }, vehicle.id))
      }
    )
  ] }) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Doble Tracci\xF3n - Expertos en 4x4" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <!-- Hero Section --> <section class="relative h-[600px] flex items-center justify-center"> <div class="absolute inset-0 z-0"> <img src="/images/banners/banner-bg.webp" alt="4x4 vehicles" class="w-full h-full object-cover brightness-50"> </div> <div class="relative z-10 text-center text-white"> <h1 class="text-5xl font-bold mb-6">
Expertos en Vehículos 4x4
</h1> <p class="text-xl mb-8 max-w-2xl mx-auto">
Encuentra tu próximo vehículo 4x4 con nosotros. 
          Amplia selección de marcas y modelos con garantía.
</p> <div class="flex gap-4 justify-center"> <a href="/catalogo" class="bg-yellow-400 text-black px-8 py-3 rounded-md font-bold hover:bg-yellow-500">
Ver Catálogo
</a> <a href="/contacto" class="bg-transparent border-2 border-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-black">
Contáctanos
</a> </div> </div> </section> ${renderComponent($$result2, "FeaturedCars", FeaturedCars, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/components/featured-car/FeaturedCars", "client:component-export": "FeaturedCars" })} <section> <div class="mx-auto"> <img src="/images/banners/banner-sucursal.webp" alt="nueva sucursal" class="w-full"> </div> </section> <!-- Consignment Section --> <section class="py-16 bg-yellow-400"> <div class="container mx-auto px-4"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> <div> <h2 class="text-3xl font-bold mb-6">Consignación de Vehículos 4X4</h2> <p class="text-lg mb-8">
Si quieres vender tu vehículo con toda tranquilidad, ¡estás en el lugar correcto! 
              Hacemos que la venta sea un proceso agradable, simple y seguro. Mientras tu vehículo 
              está en nuestras manos, nos encargamos de siempre mantenerlo lavado y activo en el mercado.
</p> <a href="#contacto" class="bg-black text-white px-8 py-3 rounded-md font-bold inline-block hover:bg-gray-800">
Consigna tu Vehículo
</a> </div> <div> <img src="/images/consignacion.webp" alt="Consignación de vehículos" class="rounded-lg shadow-xl"> </div> </div> </div> </section> ${renderComponent($$result2, "Team", $$Team, {})} <!--  <Testimonials /> --> </main> ` })} `;
}, "/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/pages/index.astro", void 0);

const $$file = "/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
