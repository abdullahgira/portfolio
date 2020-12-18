export default function PortfolioHero() {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-between">
      <div className="order-2 md:order-1 text-center md:text-left mt-10 md:mt-0">
        <h3 className="text-lg mb-2 text-blue-700">Hello 👋️</h3>
        <h1 className="text-4xl font-bold mb-2">I'm Abdullah Osama</h1>
        <h2 className="text-2xl mb-5">
          I create full stack applications using React and Node.js
        </h2>
        <button className="py-2 px-3 rounded-xl bg-black hover:bg-gray-700 text-white font-semibold">
          Contact me
        </button>
      </div>

      <div className="order-1 md:order-2 ml-5">
        <div className="h-72 w-56 bg-yellow-400 shadow-lg rounded-lg"></div>
      </div>
    </div>
  )
}
