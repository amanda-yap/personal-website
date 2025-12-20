import { Gallery } from "./components/gallery";

export default function Page() {
  return (
    <section>
      <h1 className="mb-10 text-3xl font-semibold tracking-wide">
        Amanda Yap
      </h1>
      <h2 className="mb-10 text-xl">
        Computer Science and Music Student
      </h2>

      <p className="mb-4">
        Welcome to my website! Here you will find a collection of my photos, thoughts, and projects - a digital curation of things I enjoy.
      </p>
      <Gallery />
    </section>
  )
}