/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    path: "/assets/images",
    domains: [
      "d1ojs48v3n42tp.cloudfront.net",
      "www.citypng.com",
      "upload.wikimedia.org",
      "kenzawellness.com",
      "wwsthemes.com",
    ],
    // loader: "imgix",
  },
  async rewrites() {
    return [
      {
        source: "/api/:any*",
        destination: "/api/:any*",
      },
      {
        source: "/:any*",
        destination: "/",
      },
    ];
  },
  env: {
    NEXT_PUBLIC_GQL_ENDPOINT: "http://130.211.24.239/graphql",
    NEXT_PUBLIC_GUEST_USERNAME: "patient_portal_guest",
    NEXT_PUBLIC_GUEST_PASSWORD: "myhcpass",
    NEXT_PUBLIC_CLIENT_ID: "default",
    NEXT_PUBLIC_CLIENT_SECRET: "901564A5-E7FE-42CB-B10D-61EF6A8F3654",
    NEXT_PUBLIC_TENANT_ID: "MYHC",
    NEXT_PUBLIC_PATIENT_ARCHETYPE_ID: "835cea41-7b87-4f1b-8e1b-f54a0449ebee",
    NEXT_PUBLIC_SPECIALITY_ARCHETYPE_ID: "a6e58ca1-9d1d-4c0d-b76c-dd6249b06a50",
    NEXT_PUBLIC_PATIENT_ROLE_ID: "2be66e6a-7d9a-4612-958f-9260d168bba2",
  },
};

module.exports = nextConfig;
