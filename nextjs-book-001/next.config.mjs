/** @type {import('next').NextConfig} */
const nextConfig = {
  //   crossOrigin: "anonymous",
  async rewrites() {
    //CORS 문제 해결을 위한 설정(proxy 설정)
    return [
      {
        source: "/:path*",
        destination: `http://localhost:3000/:path*`,
      },
    ];
  },
};

export default nextConfig;
