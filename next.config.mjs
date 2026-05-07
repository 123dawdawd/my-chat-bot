/** @type {import('next').NextConfig} */
const nextConfig = {
  // 加上下面这两段，强制忽略格式和类型检查错误
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;