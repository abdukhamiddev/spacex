import Ship from "./Ship";
import { IShips } from "../interfaces/Ships";

type ShipsProps = {
	ships: IShips[];
};
const Ships = ({ ships }: ShipsProps) => {
	return (
		<div>
			<h1 className="pb-6 text-2xl font-bold font-roboto">Ships</h1>
			<div className="grid items-center justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{ships?.map((ship) => (
					<div key={ship.id} className="">
						<Ship ship={ship} key={ship.id} />
					</div>
				))}
			</div>
		</div>
	);
};
export default Ships;
