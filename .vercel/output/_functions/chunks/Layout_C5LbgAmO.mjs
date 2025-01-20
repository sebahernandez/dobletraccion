import { c as createComponent, r as renderTemplate, d as addAttribute, f as renderScript, b as createAstro, m as maybeRenderHead, a as renderComponent, g as renderHead, h as renderSlot } from './astro/server_NKnZPRJC.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */

const $$Astro$2 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$1 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const pathname = new URL(Astro2.request.url).pathname;
  const currentPath = pathname.slice(1);
  return renderTemplate`${maybeRenderHead()}<nav class="flex justify-between items-center max-w-[90rem] mx-auto" data-astro-cid-5blmo7yk> <!-- Logo --> <div class="flex items-center" data-astro-cid-5blmo7yk> <a href="/" data-astro-cid-5blmo7yk> <img src="/images/logo/logo.webp" alt="Doble Tracción" class="md:h-16 h-12" data-astro-cid-5blmo7yk> </a> </div> <!-- Menú para escritorio --> <div class="hidden md:flex space-x-6" data-astro-cid-5blmo7yk> <a${addAttribute(currentPath === "" ? "active" : "text-white font-bold", "class")} href="/" data-astro-cid-5blmo7yk>INICIO</a> <a${addAttribute(currentPath === "nosotros" ? "active" : "text-white font-bold", "class")} href="/nosotros" data-astro-cid-5blmo7yk>NOSOTROS</a> <a${addAttribute(currentPath === "catalogo" ? "active" : "text-white font-bold", "class")} href="/catalogo" data-astro-cid-5blmo7yk>CATÁLOGO</a> <a${addAttribute(currentPath === "contacto" ? "active" : "text-white font-bold", "class")} href="/contacto" data-astro-cid-5blmo7yk>CONTACTO</a> </div> <!-- Botón de menú para móvil --> <button class="mobile-menu-button md:hidden" data-astro-cid-5blmo7yk> <svg class="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" data-astro-cid-5blmo7yk></path> </svg> </button> <!-- Menú para móvil --> <div id="mobile-menu" class="hidden flex flex-col fixed top-16 left-0 w-full bg-black bg-opacity-95 text-center space-y-4 py-4 md:hidden" data-astro-cid-5blmo7yk> <a${addAttribute(currentPath === "" ? "active" : "text-white font-bold", "class")} href="/" data-astro-cid-5blmo7yk>INICIO</a> <a${addAttribute(currentPath === "nosotros" ? "active" : "text-white font-bold", "class")} href="/nosotros" data-astro-cid-5blmo7yk>NOSOTROS</a> <a${addAttribute(currentPath === "catalogo" ? "active" : "text-white font-bold", "class")} href="/catalogo" data-astro-cid-5blmo7yk>CATÁLOGO</a> <a${addAttribute(currentPath === "contacto" ? "active" : "text-white font-bold", "class")} href="/contacto" data-astro-cid-5blmo7yk>CONTACTO</a> </div> <!-- Botón CTA --> <a href="#vende" class="bg-yellow-400 text-black px-6 py-2 rounded-md font-bold hover:bg-yellow-500 hidden md:block" data-astro-cid-5blmo7yk>
VENDE TU 4X4
</a> </nav> ${renderScript($$result, "/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/components/Navbar.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="py-4 z-[999] fixed top-0 left-0 right-0 transition-colors duration-300 px-section bg-black"> ${renderComponent($$result, "Navbar", $$Navbar, {})} </header>`;
}, "/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-black text-white py-12"> <div class="container mx-auto px-4"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div> <a href="/"> <img src="/images/logo/logo.webp" alt="Doble Tracción" class="md:h-16 h-24"> </a> <p class="text-gray-400">
Dobletraccion @2024 Todos los derechos reservados
</p> </div> <div> <h3 class="font-bold text-lg mb-4">Enlaces</h3> <ul class="space-y-2"> <li><a href="#inicio" class="text-gray-400 hover:text-yellow-400">Inicio</a></li> <li><a href="#nosotros" class="text-gray-400 hover:text-yellow-400">Nosotros</a></li> <li><a href="#catalogo" class="text-gray-400 hover:text-yellow-400">Catálogo</a></li> <li><a href="#contacto" class="text-gray-400 hover:text-yellow-400">Contacto</a></li> </ul> </div> <div> <h3 class="font-bold text-lg mb-4">Contacto</h3> <ul class="space-y-2 text-gray-400"> <li> <h3 class="py-2 text-yellow-400">Llámanos:</h3> <div><a href="tel:+56940403988" class="underline">+56 9 4040 3988</a></div> <div><a href="tel:+56933806123" class="underline">+569 3380 6123</a></div> </li> <li> <h3 class="py-2 text-yellow-400">Información:</h3> <div> <a href="mailto:Automotriz@dobletraccion.cl" class="underline">
Automotriz@dobletraccion.cl
</a> </div> </li> <li>Av. Kennedy 8876, Vitacura</li> </ul> </div> </div> <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"> <p>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Diseño y desarrollo | venpu.cl</p> </div> </div> </footer>`;
}, "/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Doble Tracción - Expertos en vehículos 4x4"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
