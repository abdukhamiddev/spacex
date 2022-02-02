import { IRockets } from "../interfaces/Rockets";

type RocketProps = {
	rocket: IRockets;
};
const Rocket = ({ rocket }: RocketProps) => {
	return (
		<div className="w-[300px] h-[200px] shadow-lg px-6">
			<h1 className="font-poppins">{rocket.company}</h1>
			<h1 className="font-roboto pt-4 pb-2 text-base">
				Country:{rocket.country}
			</h1>
			<div className="flex justify-between">
				<p className="font-semibold"> Feet:{rocket.diameter.feet}</p>
				<p className="font-semibold"> Meters:{rocket.diameter.meters}</p>
			</div>
		</div>
	);
};

export default Rocket;
