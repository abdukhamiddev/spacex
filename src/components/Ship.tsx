import Image from "next/image";
import { IShips } from "../interfaces/Ships";

type ShipProps = {
	ship: IShips;
};

const Ship = ({ ship }: ShipProps) => {
	return (
		<div className="flex justify-center items-center flex-col  pt-3 pb-2 shadow-lg rounded-[10px]">
			<div className="md:w-[340px] md:h-[250px] relative w-[400px] h-[300px] lg:w-[320px] xl:w-[370px] sm:w-[250px]">
				<Image
					src={ship.image}
					alt={ship.name}
					layout="fill"
					objectFit="cover"
					className="rounded-lg"
				/>
			</div>
			<div>
				<p className="font-poppins font-semibold mt-4">{ship.name}</p>
			</div>
		</div>
	);
};
export default Ship;
