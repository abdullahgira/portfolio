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
    <div className="min-w-max mx-auto lg:ml-0 mb-10 lg:mb-0 xl:w-1/3 lg:mr-10">
      <img src={src} alt={alt} />
    </div>
  )
}

function AboutSection() {
  return (
    <div className="my-48">
      <h2 className="text-3xl text-center font-semibold mb-14">About me</h2>
      <div className="flex flex-col lg:flex-row justify-between">
        <PortfolioSectionImage src="/portfolio/about-2.png" />
        <PortfolioSectionContent>
          <h3 className="text-3xl mb-5">
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
