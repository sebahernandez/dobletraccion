import type { Datum } from "../../types/vehicule";
import { formatNameForURL } from "../../helpers/stringHelpers";
import { formatPrice } from "../../helpers/formatHelpers";

interface VehicleCardProps {
  readonly vehicle: Datum;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  const formattedPrice = formatPrice(vehicle.price);

  return (
    <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden h-full border border-gray-800">
      <img
        src={vehicle.imageUrl}
        alt={vehicle.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        {/* <span className="text-sm text-gray-400">{vehicle.year}</span> */}
        <h3 className="font-bold text-xl mb-2 text-white">
          <a
            href={`/vehiculos/${formatNameForURL(vehicle.name)}/${vehicle.id}`}
          >
            {vehicle.name}
          </a>
        </h3>
        <p className="text-2xl font-bold text-yellow-400 mb-4">
          {formattedPrice}
        </p>
        <div className="flex flex-wrap gap-5">
          <span className="relative px-2 py-1 w-fit text-center bg-white text-xs text-[#1C3328] rounded-full uppercase inline-flex justify-center items-center mt-3.5">
            {vehicle.miles} km
          </span>
          <span className="relative px-2 py-1 w-fit text-center bg-white text-xs text-[#1C3328] rounded-full uppercase inline-flex justify-center  items-center mt-3.5">
            {vehicle.fuelType}
          </span>
          <span className="relative px-2 py-1 w-fit text-center bg-white text-xs text-[#1C3328] rounded-full uppercase inline-flex justify-center  items-center mt-3.5">
            {vehicle.transmission}
          </span>
        </div>
      </div>
    </div>
  );
}
