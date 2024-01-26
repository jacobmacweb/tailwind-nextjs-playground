import Image from "next/image";
import { HiMenuAlt2 } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";

export default function Home() {
    return (
        <main className="container mx-auto px-8 py-24">
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
                <div className="border rounded p-5 flex flex-col gap-6">
                    <div>
                        <h3 className="font-bold pb-3">
                            Primary
                        </h3>
                        <div className="flex flex-row items-center gap-6">
                            <button>Confirm</button>
                            <button disabled>Confirm</button>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold pb-3">
                            Outlined
                        </h3>
                        <div className="flex flex-row items-center gap-6">
                            <button className="btn-outlined">Confirm</button>
                            <button className="btn-outlined" disabled>Confirm</button>
                        </div>
                    </div>
                    <div>
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
                </div>
            </section>

            <section className="pt-10">
                <h2 className="text-3xl font-bold pb-6">
                    Navigation
                </h2>
                <div className="border rounded p-5">
                    <nav>
                        <button className="btn-sleek leading-4 -ml-8">
                            <HiMenuAlt2 className="btn-icon" />
                            <span className="hidden md:inline">Menu</span>
                        </button>
                        <img src="./logoipsum-214.svg" alt=""/>
                    </nav>
                </div>
            </section>

            <section className="pt-10">
                <h2 className="text-3xl font-bold pb-6">
                    Inputs
                </h2>
                <div className="border rounded-lg p-5 bg-gray-100 flex flex-col gap-6">
                    <div>
                        <h3 className="font-bold pb-3">
                            Search
                        </h3>
                        <div className="flex gap-4">
                            <input
                                type="text"
                                className="p-3 rounded-xl drop-shadow-xl border-zinc-300 focus:outline focus:outline-zinc-400 w-full"
                                placeholder="Enter keyword"
                            />
                            <button className="btn-light btn-circle">
                                <HiOutlineSearch className="text-xl" />
                            </button>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold pb-3">
                            Regular input
                        </h3>
                        <div className="flex gap-4">
                            <input
                                type="text"
                                className="p-2 rounded-sm border border-gray-400 focus:border-gray-600 focus:outline-none flex-1"
                                placeholder="Enter keyword"
                                defaultValue="Veuillez écrire ici"
                            />
                            <input
                                type="text"
                                className="p-2 rounded-sm border border-gray-400 focus:border-gray-600 focus:outline-none flex-1"
                                placeholder="Enter keyword"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
