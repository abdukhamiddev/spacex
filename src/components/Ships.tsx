import Ship from "./Ship";
const Ships = ({ ships }) => {
	return (
		<div>
			<h1 className="text-2xl font-bold font-roboto pb-6">Ships</h1>
			<div className="grid  gap-8 items-center justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
