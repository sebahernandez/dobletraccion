import { jsxs, jsx } from 'react/jsx-runtime';
import { f as formatPrice } from './formatHelpers_CprHYxuW.mjs';
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { FaRoad } from 'react-icons/fa6';
import { TbManualGearboxFilled } from 'react-icons/tb';

function formatNameForURL(name) {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
}

function VehicleCard({ vehicle }) {
  const formattedPrice = formatPrice(vehicle.price);
  return /* @__PURE__ */ jsxs("div", { className: "bg-gray-900 rounded-lg shadow-lg overflow-hidden h-full border border-gray-800", children: [
    /* @__PURE__ */ jsx("a", { href: `/vehiculos/${formatNameForURL(vehicle.name)}/${vehicle.id}`, children: /* @__PURE__ */ jsx(
      "img",
      {
        src: vehicle.imageUrl,
        alt: vehicle.name,
        className: "w-full h-52 object-cover"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "p-2", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-bold text-[16px] mb-2 text-white", children: /* @__PURE__ */ jsx("div", { className: "h-16", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: `/vehiculos/${formatNameForURL(vehicle.name)}/${vehicle.id}`,
          children: vehicle.name
        }
      ) }) }),
      /* @__PURE__ */ jsx("p", { className: "text-xl font-bold text-yellow-400 mb-4", children: formattedPrice }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 my-3", children: [
        /* @__PURE__ */ jsx("span", { className: "relative px-2 py-1 w-fit text-center bg-white font-bold text-[9px] text-[#1C3328] rounded-full uppercase inline-flex justify-center items-center mt-3.5 gap-2", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(FaRoad, {}),
          " ",
          vehicle.miles,
          " KM"
        ] }) }),
        /* @__PURE__ */ jsx("span", { className: "relative px-2 py-1 w-fit text-center bg-white font-bold text-[9px] text-[#1C3328] rounded-full uppercase inline-flex justify-center  items-center mt-3.5", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(BsFillFuelPumpFill, {}),
          " ",
          vehicle.fuelType
        ] }) }),
        /* @__PURE__ */ jsx("span", { className: "relative px-2 py-1 w-fit text-center bg-white font-bold text-[9px] text-[#1C3328] rounded-full uppercase inline-flex justify-center  items-center mt-3.5", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(TbManualGearboxFilled, {}),
          " ",
          vehicle.transmission
        ] }) })
      ] })
    ] })
  ] });
}

export { VehicleCard as V };
