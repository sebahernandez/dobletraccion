import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_B9s9wHvk.mjs';
import 'es-module-lexer';
import { e as decodeKey } from './chunks/astro/server_NKnZPRJC.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/sebaprogrammer/Desktop/proyectos/dobletraccion/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CPvyyiTs.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CPvyyiTs.js"}],"styles":[{"type":"external","src":"/_astro/catalogo.pTeOx103.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CPvyyiTs.js"}],"styles":[{"type":"external","src":"/_astro/catalogo.pTeOx103.css"}],"routeData":{"route":"/catalogo","isIndex":false,"type":"page","pattern":"^\\/catalogo\\/?$","segments":[[{"content":"catalogo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/catalogo.astro","pathname":"/catalogo","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CPvyyiTs.js"}],"styles":[{"type":"external","src":"/_astro/catalogo.pTeOx103.css"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CPvyyiTs.js"}],"styles":[{"type":"external","src":"/_astro/catalogo.pTeOx103.css"},{"type":"inline","content":".timeline-section[data-astro-cid-zhxkjw2l]{background-color:#ffd34d;padding:4rem 0;color:#000}.container[data-astro-cid-zhxkjw2l]{max-width:1200px;margin:0 auto;padding:0 1rem}h2[data-astro-cid-zhxkjw2l]{text-align:center;font-size:2.5rem;margin-bottom:3rem}.timeline[data-astro-cid-zhxkjw2l]{position:relative;max-width:800px;margin:0 auto}.timeline[data-astro-cid-zhxkjw2l]:before{content:\"\";position:absolute;left:50%;transform:translate(-50%);width:2px;height:100%;background-color:#000}.timeline-item[data-astro-cid-zhxkjw2l]{display:flex;justify-content:center;align-items:flex-start;margin-bottom:3rem;position:relative}.timeline-number[data-astro-cid-zhxkjw2l]{width:60px;height:60px;background-color:#fff;color:#000;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1.5rem;position:absolute;left:50%;transform:translate(-50%);z-index:2;border:7px solid black}.timeline-content[data-astro-cid-zhxkjw2l]{width:calc(50% - 50px);padding:20px;background-color:#fff;border-radius:8px;box-shadow:0 2px 4px #0000001a}.timeline-item[data-astro-cid-zhxkjw2l]:nth-child(odd) .timeline-content[data-astro-cid-zhxkjw2l]{margin-right:50%;margin-left:10px}.timeline-item[data-astro-cid-zhxkjw2l]:nth-child(2n) .timeline-content[data-astro-cid-zhxkjw2l]{margin-left:50%;margin-right:10px}h3[data-astro-cid-zhxkjw2l]{margin:2px;font-size:1.2rem;color:#f0f8ff;font-weight:700}.date[data-astro-cid-zhxkjw2l]{display:block;font-size:.9rem;color:#666;margin-bottom:.5rem}p[data-astro-cid-zhxkjw2l]{margin:0;font-size:.95rem;line-height:1.4}@media (max-width: 768px){.timeline[data-astro-cid-zhxkjw2l]:before{left:30px}.timeline-number[data-astro-cid-zhxkjw2l]{left:30px}.timeline-content[data-astro-cid-zhxkjw2l]{width:calc(100% - 80px)}.timeline-item[data-astro-cid-zhxkjw2l]:nth-child(odd) .timeline-content[data-astro-cid-zhxkjw2l],.timeline-item[data-astro-cid-zhxkjw2l]:nth-child(2n) .timeline-content[data-astro-cid-zhxkjw2l]{margin-left:60px;margin-right:0}}.button[data-astro-cid-2cst7eec]{display:inline-flex;align-items:center;justify-content:center;width:100px;height:50px;border:2px solid #FFC107;border-radius:25px;background-color:transparent;position:relative}.button[data-astro-cid-2cst7eec]:before{content:\"\";position:absolute;inset:0;border:2px solid #FFC107;border-radius:25px;transform:scale(.85)}.button[data-astro-cid-2cst7eec] .arrow[data-astro-cid-2cst7eec]{color:#ffc107;font-size:24px}\n"}],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros\\/?$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CPvyyiTs.js"}],"styles":[{"type":"external","src":"/_astro/catalogo.pTeOx103.css"},{"type":"external","src":"/_astro/_id_.B_l4pjL9.css"}],"routeData":{"route":"/vehiculos/[name]/[id]","isIndex":false,"type":"page","pattern":"^\\/vehiculos\\/([^/]+?)\\/([^/]+?)\\/?$","segments":[[{"content":"vehiculos","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["name","id"],"component":"src/pages/vehiculos/[name]/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CPvyyiTs.js"}],"styles":[{"type":"external","src":"/_astro/catalogo.pTeOx103.css"},{"type":"inline","content":".swiper-button-prev,.swiper-button-next{display:none;color:#fff}@media (min-width: 768px){.swiper-button-prev,.swiper-button-next{display:block}}\n"},{"type":"external","src":"/_astro/_id_.B_l4pjL9.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/pages/catalogo.astro",{"propagation":"none","containsHead":true}],["/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/pages/nosotros.astro",{"propagation":"none","containsHead":true}],["/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/pages/vehiculos/[name]/[id].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/vehiculos/[name]/[id]@_@astro":"pages/vehiculos/_name_/_id_.astro.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"pages/nosotros.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/catalogo@_@astro":"pages/catalogo.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_hh1IggVD.mjs","\u0000@astrojs-manifest":"manifest_YI71HgKc.mjs","/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/components/catalog/VehiculeCatalog":"_astro/VehiculeCatalog.gLbkUgiS.js","/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/components/car-view/CarWiew":"_astro/CarWiew.BKCE8b9m.js","/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/components/featured-car/FeaturedCars":"_astro/FeaturedCars.BXBUJk_I.js","@astrojs/react/client.js":"_astro/client.BSOY9D2A.js","/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.BOel_0Ki.js","/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/components/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.BKR9dsb8.js","astro:scripts/page.js":"_astro/page.CPvyyiTs.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/components/Navbar.astro?astro&type=script&index=0&lang.ts","console.log(\"Hola mundo\");const e=document.querySelector(\".mobile-menu-button\"),o=document.querySelector(\"#mobile-menu\");e&&o&&e.addEventListener(\"click\",()=>{console.log(\"click\"),o.classList.toggle(\"hidden\")});"]],"assets":["/_astro/_id_.B_l4pjL9.css","/_astro/catalogo.pTeOx103.css","/favicon.svg","/_astro/CarWiew.BKCE8b9m.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.BOel_0Ki.js","/_astro/FeaturedCars.BXBUJk_I.js","/_astro/SpinnerCircular.By9sOT0_.js","/_astro/VehiculeCatalog.gLbkUgiS.js","/_astro/_id_.fe7d4371.l0sNRNKZ.js","/_astro/autoplay.CLPvAmu4.js","/_astro/client.BSOY9D2A.js","/_astro/index.DHQ29l5n.js","/_astro/index.U3IA9L3b.js","/_astro/jsx-runtime.BqEXxvvU.js","/_astro/page.CPvyyiTs.js","/images/consignacion.webp","/images/banners/banner-bg.webp","/images/banners/banner-sucursal.webp","/images/banners/nosotros-banner.jpg","/images/banners/nosotros-oficina.jpg","/images/logo/icon-logo.png","/images/logo/logo.webp","/images/team/benjamin.png","/images/team/diego.png","/images/team/fabiola.png","/images/team/gabriel.png","/images/team/hector.png","/images/team/javier.png","/images/team/jean.png","/images/team/william.png","/_astro/page.CPvyyiTs.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"x8v91XlZ6+Opy971a3211+eMonsb00zyEQTTuSiTBko="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
