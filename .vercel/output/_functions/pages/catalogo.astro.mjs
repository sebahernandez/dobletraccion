/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_NKnZPRJC.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C5LbgAmO.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect, useMemo } from 'react';
import { b as fetchAllVehicles } from '../chunks/formatHelpers_CprHYxuW.mjs';
import { V as VehicleCard } from '../chunks/VehiculeCard_BTlBpgRl.mjs';
import { SpinnerCircular } from 'spinners-react/lib/esm/SpinnerCircular.js';
export { renderers } from '../renderers.mjs';

function SearchFilters({
  brands,
  selectedBrand,
  searchQuery,
  sortOrder,
  onBrandChange,
  onSearchChange,
  onSortChange
}) {
  const handleSearchChange = (e) => {
    onSearchChange(e.target.value);
  };
  const handleBrandChange = (e) => {
    onBrandChange(e.target.value);
  };
  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-8", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        placeholder: "Buscar vehículos...",
        value: searchQuery,
        onChange: handleSearchChange,
        className: "p-2 rounded-md border border-gray-700 bg-gray-800 text-white"
      }
    ),
    /* @__PURE__ */ jsxs(
      "select",
      {
        value: selectedBrand,
        onChange: handleBrandChange,
        className: "p-2 rounded-md border border-gray-700 bg-gray-800 text-white",
        children: [
          /* @__PURE__ */ jsx("option", { value: "", children: "Todas las marcas" }),
          brands.map((brand) => /* @__PURE__ */ jsx("option", { value: brand, children: brand }, brand))
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "select",
      {
        value: sortOrder,
        onChange: handleSortChange,
        className: "p-2 rounded-md border border-gray-700 bg-gray-800 text-white",
        children: [
          /* @__PURE__ */ jsx("option", { value: "desc", children: "Mayor precio" }),
          /* @__PURE__ */ jsx("option", { value: "asc", children: "Menor precio" })
        ]
      }
    )
  ] });
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-2 mt-8", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => onPageChange(currentPage - 1),
        disabled: currentPage === 1,
        className: "px-4 py-2 rounded-md bg-gray-800 text-white disabled:opacity-50",
        children: "Anterior"
      }
    ),
    /* @__PURE__ */ jsxs("span", { className: "px-4 py-2 text-white", children: [
      "Página ",
      currentPage,
      " de ",
      totalPages
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => onPageChange(currentPage + 1),
        disabled: currentPage === totalPages,
        className: "px-4 py-2 rounded-md bg-gray-800 text-white disabled:opacity-50",
        children: "Siguiente"
      }
    )
  ] });
}

const ITEMS_PER_PAGE = 12;
function VehicleCatalog() {
  const [vehicles, setVehicles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const autos = await fetchAllVehicles();
      setVehicles(autos);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const brands = useMemo(() => {
    const brandSet = new Set(vehicles.map((v) => v.brand));
    return [...brandSet].sort((a, b) => a.localeCompare(b));
  }, [vehicles]);
  const filteredVehicles = useMemo(() => {
    let filtered = [...vehicles];
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (v) => v.name.toLowerCase().includes(query) || v.brand.toLowerCase().includes(query)
      );
    }
    if (selectedBrand) {
      filtered = filtered.filter((v) => v.brand === selectedBrand);
    }
    filtered.sort((a, b) => {
      const priceA = Number(a.price);
      const priceB = Number(b.price);
      return sortOrder === "desc" ? priceB - priceA : priceA - priceB;
    });
    return filtered;
  }, [vehicles, searchQuery, selectedBrand, sortOrder]);
  const totalPages = Math.ceil(filteredVehicles.length / ITEMS_PER_PAGE);
  const paginatedVehicles = filteredVehicles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      SearchFilters,
      {
        brands,
        selectedBrand,
        searchQuery,
        sortOrder,
        onBrandChange: setSelectedBrand,
        onSearchChange: setSearchQuery,
        onSortChange: setSortOrder
      }
    ),
    loading ? /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsx(
      SpinnerCircular,
      {
        size: 69,
        thickness: 136,
        speed: 114,
        color: "rgba(172, 134, 57, 1)",
        secondaryColor: "rgba(172, 127, 57, 0.44)"
      }
    ) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: paginatedVehicles.map((vehicle) => /* @__PURE__ */ jsx(VehicleCard, { vehicle }, vehicle.id)) }),
      filteredVehicles.length > ITEMS_PER_PAGE && /* @__PURE__ */ jsx(
        Pagination,
        {
          currentPage,
          totalPages,
          onPageChange: handlePageChange
        }
      )
    ] })
  ] });
}

const $$Catalogo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cat\xE1logo - Doble Tracci\xF3n" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-black min-h-screen py-36"> <div class="container mx-auto px-4"> <h1 class="text-4xl font-bold text-white mb-8">Catálogo de Vehículos</h1> ${renderComponent($$result2, "VehicleCatalog", VehicleCatalog, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/components/catalog/VehiculeCatalog", "client:component-export": "VehicleCatalog" })} </div> </main> ` })}`;
}, "/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/pages/catalogo.astro", void 0);

const $$file = "/Users/sebaprogrammer/Desktop/proyectos/dobletraccion/src/pages/catalogo.astro";
const $$url = "/catalogo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Catalogo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
