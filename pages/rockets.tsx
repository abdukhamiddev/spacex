import { IRockets } from "../src/interfaces/Rockets";
import { GetStaticProps } from "next";
import client from "../services/apollo-client";
import { GET_ROCKETS } from "../src/graphql/queries/rockets";
import Rocket from "../src/components/Rocket";
type RocketProps = {
	rockets: IRockets[];
};
const Rockets = ({ rockets }: RocketProps) => {
	console.log(rockets);

	return (
		<div className="flex justify-center pt-9">
			<div className="px-6 grid xl:grid-cols-4  gap-10 md:grid-cols-2  lg:grid-cols-3 grid-cols-1">
				{rockets.map((rocket) => (
					<Rocket rocket={rocket} key={rocket.id} />
				))}
			</div>
		</div>
	);
};
export default Rockets;

export const getStaticProps: GetStaticProps = async () => {
	const rocketRes = await client.query({
		query: GET_ROCKETS,
	});

	const rockets = rocketRes.data.rockets;

	return {
		props: {
			rockets,
		},
	};
};
