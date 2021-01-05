function PortfolioSection({children}) {
  return (
    <div className="my-28 portfolio-section flex flex-col lg:flex-row justify-between">
      {children}
    </div>
  )
}

function PortfolioSectionContent({children}) {
  return <div className="lg:w-1/2 text-lg">{children}</div>
}

function PortfolioSectionTitle({children}) {
  return <h2 className="text-2xl font-semibold mb-4">{children}</h2>
}

function PortfolioSectionImage({src, alt}) {
  return (
    <div className="sm:min-w-max mx-auto lg:ml-0 mb-10 lg:mb-0 xl:w-1/3 lg:mr-10">
      <img src={src} alt={alt} />
    </div>
  )
}

function AboutSection() {
  return (
    <div className="my-10">
      <div className="relative mb-28">
        <img
          src="portfolio/triangle.svg"
          alt="decorating triangle"
          className="absolute w-40 -top-20 left-1/2 -ml-8 -z-10"
        />
        <img
          src="portfolio/fewer-circles.svg"
          alt="decorating small circles"
          className="absolute w-16 -top-3 left-1/2 ml-10 -z-10"
        />
        <div className="w-20 h-1 bg-blue-700 absolute -bottom-3 right-1/2 -mr-2"></div>
        <h2 className="text-3xl text-center font-bold">About Me</h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-between">
        <PortfolioSectionImage
          src="/portfolio/about.svg"
          alt="developer looking at code"
        />
        <PortfolioSectionContent>
          <p className="text-lg mb-2 text-blue-700">Who am I?</p>
          <h3 className="text-3xl mb-10 font-bold">
            I create full stack applications using the MERN Stack
          </h3>
          <p>
            I graduated from college with a BSc in computer science. I started
            programming in Node.js 3+ years ago and then jumped to React 2+
            years ago to help me create user interfaces for my projects. I
            usually do my projects using the MERN stack (MongoDB, Express,
            React, Node.js).
          </p>
        </PortfolioSectionContent>
      </div>
    </div>
  )
}

export {
  AboutSection,
  PortfolioSection,
  PortfolioSectionContent,
  PortfolioSectionTitle,
  PortfolioSectionImage,
}
