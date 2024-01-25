import Image from "next/image";
import { HiMenuAlt2 } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi2";

export default function Home() {
  return (
    <main className="container mx-auto pl-8 pt-24">
        <h1 className="text-5xl font-bold pb-6">
            Component List
        </h1>
        <p>
            Here a list of my attempted components to play with Tailwind.
        </p>

        <section className="pt-10">
            <h2 className="text-3xl font-bold pb-6">
                Buttons
            </h2>
            <div className="pb-6">
                <h3 className="font-bold pb-3">
                    Primary
                </h3>
                <div className="flex flex-row items-center gap-6">
                    <button>Confirm</button>
                    <button disabled>Confirm</button>
                </div>
            </div>
            <div className="pb-6">
                <h3 className="font-bold pb-3">
                    Outlined
                </h3>
                <div className="flex flex-row items-center gap-6">
                    <button className="btn-outlined">Confirm</button>
                    <button className="btn-outlined" disabled>Confirm</button>
                </div>
            </div>
            <div className="pb-6">
                <h3 className="font-bold pb-3">
                    Primary
                </h3>
                <div className="flex flex-row items-center gap-6">
                    <button>
                        <span>Confirm</span>
                        <HiArrowRight className="btn-icon" />
                    </button>
                    <button disabled>
                        <span>Confirm</span>
                        <HiArrowRight className="btn-icon" />
                    </button>
                </div>
            </div>
        </section>

        <section className="pt-10">
            <h2 className="text-3xl font-bold pb-6">
                Navigation
            </h2>
            <nav>
                <button className="btn-sleek leading-4 -ml-8">
                    <HiMenuAlt2 className="btn-icon" />
                    <span>Menu</span>
                </button>
                <img src="./logoipsum-214.svg" alt=""/>
            </nav>
        </section>
    </main>
  );
}
