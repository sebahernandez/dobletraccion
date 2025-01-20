/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_NKnZPRJC.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C5LbgAmO.mjs';
import 'clsx';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Timeline = createComponent(($$result, $$props, $$slots) => {
  const timelineItems = [
    {
      number: "1",
      title: "Los Comienzos",
      subtitle: "Un sue\xF1o que se hace realidad",
      date: "Junio 2017",
      description: "Nuestro Fundador y CEO lanza el ecommerce dobletracccion.cl, con el objetivo de proveer accesorios 4x4 originales en Chile"
    },
    {
      number: "2",
      title: "Primeras Oficinas",
      subtitle: "Hacia la expansi\xF3n",
      date: "Octubre 2017",
      description: "4 meses despu\xE9s, conf\xEDa en el proyecto y arrienda una peque\xF1a oficina, donde trabaja solo para atender a sus clientes como Instalador y revendedor."
    },
    {
      number: "3",
      title: "Nueva casa matriz",
      subtitle: "Crecimiento y consolidaci\xF3n",
      date: "Octubre 2018",
      description: "Decidimos mudarnos a una oficina de mayor tama\xF1o, lo que nos permiti\xF3 ampliar nuestras operaciones y continuar con el crecimiento sostenido."
    },
    {
      number: "4",
      title: "Apertura primer taller",
      subtitle: "Expansi\xF3n de servicios",
      date: "Enero 2022",
      description: "Apertura de taller mec\xE1nico. Con esta expansi\xF3n, el equipo creci\xF3 y nos permiti\xF3 ofrecer un servicio integral, mejorando la experiencia 4x4."
    },
    {
      number: "5",
      title: "Inauguraci\xF3n",
      subtitle: "Doble tracci\xF3n automotriz",
      description: "Somos una automotora especializada en veh\xEDculos 4x4, nos posicionamos como la primera en Chile en comercializar Camionetas 4x4 y Carrozados tanto est\xE1ndar como modificados."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="timeline-section" data-astro-cid-zhxkjw2l> <div class="container" data-astro-cid-zhxkjw2l> <p class="text-center text-xl" data-astro-cid-zhxkjw2l>Desde una tienda online a un Taller y Automotora 4×4 líder</p> <h2 class="text-2xl font-bold py-5" data-astro-cid-zhxkjw2l>Nuestra historia</h2> <div class="timeline" data-astro-cid-zhxkjw2l> ${timelineItems.map((item) => renderTemplate`<div class="timeline-item" data-astro-cid-zhxkjw2l> <div class="timeline-number" data-astro-cid-zhxkjw2l>${item.number}</div> <div class="timeline-content" data-astro-cid-zhxkjw2l> <div class="bg-black p-3" data-astro-cid-zhxkjw2l> <h3 data-astro-cid-zhxkjw2l>${item.title}</h3> <span class="text-stone-400" data-astro-cid-zhxkjw2l>${item.subtitle}</span> </div> ${item.date && renderTemplate`<span class="date py-2" data-astro-cid-zhxkjw2l>${item.date}</span>`} <p data-astro-cid-zhxkjw2l>${item.description}</p> </div> </div>`)} </div> </div> </section> `;
}, "/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/components/Timeline.astro", void 0);

const $$Arrow = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="button" data-astro-cid-2cst7eec> <div class="arrow" data-astro-cid-2cst7eec>→</div> </div> `;
}, "/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/components/buttons/arrow.astro", void 0);

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nosotros - Doble Tracci\xF3n" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full h-[500px] overflow-hidden"> <img src="images/banners/nosotros-banner.jpg" alt="nosotros" class="w-full h-full object-cover"> </div> ${renderComponent($$result2, "Timeline", $$Timeline, {})} <div class="w-full h-96 bg-cover bg-center flex justify-center items-center flex-col" style="background-image: url('images/banners/nosotros-oficina.jpg');"> <div class="flex justify-center items-center gap-2 flex-col md:flex-row "> <img src="/images/logo/icon-logo.png" alt="logo" class="w-24"> <h2 class="text-4xl text-yellow-400 font-bold">VER STOCK COMPLETO</h2> <div> ${renderComponent($$result2, "Arrow", $$Arrow, {})} </div> </div> <p class="text-center text-white py-2">
Comprometidos con ofrecer soluciones automotrices integrales, basadas en experiencia, innovación y pasión por la excelencia.
</p> </div> ` })}`;
}, "/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/pages/nosotros.astro", void 0);

const $$file = "/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/pages/nosotros.astro";
const $$url = "/nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Nosotros,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
