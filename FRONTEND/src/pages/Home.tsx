import { Budget } from "../components/Budget";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

export const Home = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-col justify-center w-full">
                <Hero />
                <Budget />
                {/* Container for the button */}
                <div className="flex justify-end w-full px-4 mb-6"> {/* Added padding for better spacing */}
                    <button
                        className="px-6 py-2 border-2 border-[#8c62e4] w-64 rounded-lg hover:bg-[#8c62e4]
                        hover:text-white transition-colors duration-300"
                        onClick={() => { console.log("Add Transaction") }}
                    >
                        Add transaction
                    </button>
                </div>
            </div>
        </div>
    );
};