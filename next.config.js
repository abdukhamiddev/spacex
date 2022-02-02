const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},

	images: {
		domains: ["i.imgur.com", "photos.marinetraffic.com"],
	},
};

module.exports = nextConfig;
