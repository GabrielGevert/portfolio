const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProduction ? "/portfolio" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
