import Image from "next/image";
import { HiMenuAlt2 } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { PiCalendarBlankLight } from "react-icons/pi";
import { PiCalendarPlusLight } from "react-icons/pi";

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
                            <button className="btn-outlined">Cancel</button>
                            <button className="btn-outlined" disabled>Cancel</button>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold pb-3">
                            Primary
                        </h3>
                        <div className="flex flex-row items-center gap-6">
                            <button>
                                <span>Continue</span>
                                <HiArrowRight className="btn-icon" />
                            </button>
                            <button disabled>
                                <span>Continue</span>
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
                <div className="border rounded p-5 flex flex-col gap-6">
                    <div>
                        <h3 className="font-bold pb-3">
                            Basic
                        </h3>
                        <p>
                            For when navigation is not often used, or too big for one bar
                        </p>
                        <nav>
                            <button className="btn-sleek leading-4 -ml-8">
                                <HiMenuAlt2 className="btn-icon" />
                                <span className="hidden md:inline">Menu</span>
                            </button>
                            <img src="./logoipsum-214.svg" alt=""/>
                        </nav>
                    </div>
                    <div>
                        <h3 className="font-bold pb-3">
                            Normal
                        </h3>
                        <p>
                            Regular navigation bar
                        </p>
                        <nav>
                            <button className="btn-sleek btn-thin leading-4 -ml-8">
                                <HiMenuAlt2 className="btn-icon" />
                                <span className="hidden sm:inline">Menu</span>
                            </button>
                            <ul className="flex flex-row gap-2 ml-auto">
                                <li>
                                    <a href="#" className="btn btn-sleek btn-thin leading-4">
                                        <RxDashboard className="btn-icon" />
                                        <span className="hidden lg:inline">Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="btn btn-sleek btn-thin leading-4">
                                        <PiCalendarBlankLight className="btn-icon" />
                                        <span className="hidden lg:inline">Publications</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="btn btn-sleek btn-thin btn-circle">
                                        <PiCalendarPlusLight className="btn-icon" />
                                        <span className="hidden lg:inline">Calendar</span>
                                    </a>
                                </li>
                            </ul>
                            <img src="./logoipsum-214.svg" alt=""/>
                        </nav>
                    </div>
                    <div>
                        <h3 className="font-bold pb-3">
                            Extended
                        </h3>
                        <p>
                            The active page should be marked with a red underline
                        </p>
                        <nav>
                            <div className="flex gap-6">
                                <a href="#" className="active:text-primary-600 transition-colors active:after:bg-primary-600 hover:after:bg-black after:w-full after:relative after:-bottom-1 after:block after:h-0.5 after:transition-all">
                                    <RxDashboard className="inline md:mr-2 align-middle" />
                                    <span className="hidden md:inline align-text-top">Home</span>
                                </a>
                                <a href="#" className="active:text-primary-600 transition-colors active:after:bg-primary-600 hover:after:bg-black after:w-full after:relative after:-bottom-1 after:block after:h-0.5 after:transition-all">
                                    <PiCalendarBlankLight className="inline md:mr-2 align-middle" />
                                    <span className="hidden md:inline align-text-top">Publications</span>
                                </a>
                                <a href="#" className="after:bg-primary-600 active:text-primary-600 transition-colors active:after:bg-primary-600 after:w-full after:relative after:-bottom-1 after:block after:h-0.5 after:transition-all">
                                    <PiCalendarPlusLight className="inline md:mr-2 align-middle" />
                                    <span className="hidden md:inline align-text-top">Active page</span>
                                </a>
                            </div>
                            <img src="./logoipsum-214.svg" alt=""/>
                        </nav>
                    </div>
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
                        <p className="pb-2">
                            A special input for search, where the search is the main feature of the page
                        </p>
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
                        <p className="pb-2">
                            Standard inputs for forms
                        </p>
                        <div className="flex gap-4">
                            <input
                                type="text"
                                className="p-2 rounded-sm border border-gray-400 focus:border-gray-600 focus:outline-none flex-1"
                                placeholder="Enter keyword"
                                defaultValue="Default value"
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
