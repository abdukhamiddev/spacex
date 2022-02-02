import { IRockets } from "../src/interfaces/Rockets";
import { GET_ROCKETS } from "../src/graphql/queries/rockets";
import { GetStaticProps } from "next";
import client from "../services/apollo-client";
import { IShips } from "../src/interfaces/Ships";
import { GET_SHIPS } from "../src/graphql/queries/ships";

import Ships from "../src/components/Ships";

interface IndexProps {
	ships: IShips[];
}

const Home = ({ ships }: IndexProps) => {
	console.log(ships);

	return (
		<>
			<div className="px-5">
				<Ships ships={ships} />
			</div>
		</>
	);
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const shipsRes = await client.query({
		query: GET_SHIPS,
	});

	const ships = shipsRes.data.ships.slice(0, 14);

	return {
		props: {
			ships,
		},
	};
};
