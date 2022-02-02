import dynamic from "next/dynamic";
import Link from "next/link";

const SpaceX = dynamic(() => import("../../public/spacex.svg"));

const Header = () => {
	return (
		<div className="w-full h-[80px] px-5 flex items-center justify-between ">
			<SpaceX />
			<div className="flex space-x-8">
				<Link href="/">
					<h1 className="cursor-pointer font-roboto font-bold uppercase">
						{" "}
						Ships
					</h1>
				</Link>
				<Link href="/rockets">
					<h1 className="cursor-pointer font-roboto font-bold uppercase">
						Rockets
					</h1>
				</Link>
			</div>
			<div>
				<h1 className="text-lg font-poppins cursor-pointer">Shop</h1>
			</div>
		</div>
	);
};
export default Header;
