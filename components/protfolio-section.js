function PortfolioSection({children}) {
  return (
    <div className="my-28 portfolio-section flex flex-col md:flex-row justify-between">
      {children}
    </div>
  )
}

function PortfolioSectionContent({children}) {
  return <div className="md:w-1/2 text-lg">{children}</div>
}

function PortfolioSectionTitle({children}) {
  return <h2 className="text-2xl font-semibold mb-4">{children}</h2>
}

function PortfolioSectionImage({src, alt}) {
  return (
    <div className="w-80 mx-auto md:ml-0 mb-10 md:mb-0 md:w-72 lg:w-1/3 mr-10">
      <img src={src} alt={alt} className="rounded-lg shadow-lg" />
    </div>
  )
}

export {
  PortfolioSection,
  PortfolioSectionContent,
  PortfolioSectionTitle,
  PortfolioSectionImage,
}
