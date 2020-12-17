import DateFormatter from "components/date-formatter"

export default function Blog() {
  return (
    <main className="container my-10 mx-auto">
      <section className="flex items-center">
        <div className="h-16 w-16 bg-green-400 rounded-full mr-5"></div>
        <div>
          <h3 className="text-md">
            Personal blog by <strong>Abdullah Osama</strong>
          </h3>
          <small>I'm hooked to react.</small>
        </div>
      </section>
      <section className="mt-10">
        <article className="rounded-md px-7 p-5 bg-white shadow-md">
          <h4 className="text-2xl font-bold mb-2">Post title</h4>
          <p className="text-gray-500 text-xs">
            <DateFormatter dateString={new Date().toISOString()} />
          </p>
        </article>
      </section>
    </main>
  )
}
