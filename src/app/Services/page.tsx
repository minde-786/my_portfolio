import React from 'react'

const page = () => {
  return (
    <div>
      <section className="bg-gra-50 py-10 px-4 md:px-10 lg:px-20 ">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-amber-50 mb-12 py-3 shadow-lg hover:shadow-2xl pb-5">
      💻 Services I Offer
   </h2> 
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Next.js Website Development",
          description:
            "Fast, SEO-friendly aur scalable websites using Next.js and React. Static, SSR, aur hybrid apps for all business needs.",
        },
        {
          title: "Full Stack Web Applications",
          description:
            "Frontend se leke backend tak — REST APIs, authentication, database integration (MongoDB, PostgreSQL), aur admin dashboards.",
        },
        {
          title: "Landing Page Design & Development",
          description:
            "High-converting, responsive landing pages for startups, products, or services — using Tailwind CSS and modern UI/UX.",
        },
        {
          title: "eCommerce Solutions",
          description:
            "Fully functional eCommerce stores with cart, checkout, user auth, Stripe integration, and admin panel using Next.js.",
        },
        {
          title: "Portfolio & Blog Websites",
          description:
            "Modern, stylish aur fast-loading portfolio/blog sites using Next.js and CMS (like Sanity, Strapi, or Contentful).",
        },
        {
          title: "API Integration & Development",
          description:
            "3rd party APIs integration (payment gateways, social auth, maps) aur custom REST/GraphQL APIs ka development.",
        },
        {
          title: "Performance Optimization",
          description:
            "Core Web Vitals improve karna, image optimization, code-splitting, lazy loading — taake app blazing fast chale.",
        },
        {
          title: "Deployment & DevOps",
          description:
            "Deployment on Vercel, Netlify, DigitalOcean, or AWS. CI/CD workflows aur environment config included.",
        },
      ].map((service, index) => (
        <div
          key={index}
          className=" bg-[#040e1a] rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-amber-50 mb-3">
            {service.title}
          </h3>
          <p className="text-blue-50 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  )
}

export default page
