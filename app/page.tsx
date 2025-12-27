import { Gallery } from "./components/gallery";

export default function Page() {
return (
	<section>
		<h1 className="mb-10 text-4xl font-semibold tracking-wide">
		amanda
		</h1>
		<p className="mb-4">
			Welcome to my website! Here you will find my random musings and various sorts of works.
		</p>
		<Gallery />
	</section>
)
}