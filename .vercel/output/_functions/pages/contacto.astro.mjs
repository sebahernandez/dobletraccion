/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_NKnZPRJC.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C5LbgAmO.mjs';
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cat\xE1logo - Doble Tracci\xF3n" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-black min-h-screen py-36"> <div class="container mx-auto px-4"> <h1 class="text-4xl font-bold text-white mb-8">Contacto</h1> </div> </main> ` })}`;
}, "/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/pages/contacto.astro", void 0);

const $$file = "/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contacto,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
