/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.nsit.in" },
      { protocol: "https", hostname: "cdn.academist.app" },
      { protocol: "https", hostname: "cdn.dotplus.in" },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    return [
      // Institution
      { source: '/institution/about-us', destination: '/about-us', permanent: true },
      { source: '/institution/message/member-secretary', destination: '/seceretary-desk', permanent: true },
      { source: '/institution/message/director-message', destination: '/director', permanent: true },
      { source: '/institution/message/principal-message', destination: '/principal', permanent: true },
      { source: '/institution/message/dean-administration', destination: '/dean-administration', permanent: true },
      { source: '/institution/vision-mission', destination: '/vision-mission', permanent: true },
      { source: '/institution/approval', destination: '/approval/aicte_approval', permanent: true },
      { source: '/institution/online-students-grivance-redressal', destination: '/onlinesgrs', permanent: true },
      // Academics
      { source: '/academics/examination', destination: '/examination', permanent: true },
      { source: '/academics/academic-calender', destination: '/academic_calender', permanent: true },
      { source: '/academics/course-outcomes', destination: '/courseoutcomes', permanent: true },
      { source: '/academics/activity-reports', destination: '/activity-reports', permanent: true },
      { source: '/academics/naac', destination: '/naac', permanent: true },
      { source: '/academics/dvv', destination: '/dvv', permanent: true },
      { source: '/academics/aqar', destination: '/aqar', permanent: true },
      // Alumni
      { source: '/alumni/vision-mission', destination: '/alumini_vision_mission', permanent: true },
      // Admission
      { source: '/admission/why-choose', destination: '/why-Choose-us', permanent: true },
      { source: '/admission/fee-structure', destination: '/feestructure', permanent: true },
      { source: '/admission/eligibility', destination: '/eligibilitycriteria', permanent: true },
      { source: '/admission/virtual-tour', destination: '/tour', permanent: true },
      { source: '/admission/contact-details', destination: '/contactdetails', permanent: true },
      // Placement
      { source: '/placement/about', destination: '/about-traing-placement', permanent: true },
      { source: '/placement/statistics', destination: '/placement-statistics', permanent: true },
      { source: '/placement/recruiters', destination: '/our-recruiters', permanent: true },
      // Infrastructure
      { source: '/infrastructure/library', destination: '/library-details', permanent: true },
      // Contact
      { source: '/contact', destination: '/contact-us', permanent: true },
    ];
  },
};

module.exports = nextConfig;
