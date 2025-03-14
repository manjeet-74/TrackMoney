import { useState } from "react";
import { Budget } from "../components/Budget";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

export const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [transaction, setTransaction] = useState({
        type: "expense",
        amount: ""
    })

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Transaction Type:", transaction.type);
        console.log("Amount:", transaction.amount);
        // You can also reset the form fields after submission if needed
        setTransaction({
            type: transaction.type,
            amount: transaction.amount
        });
        closeModal(); // Close the modal after submission
    };

    return (
        <div>
            <Header />
            <div className="flex flex-col justify-center w-full">
                <Hero />
                <Budget />
                {isModalOpen && (
                    <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 backdrop-blur-md z-50">
                        <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                            <form className="mb-4" onSubmit={handleSubmit}>
                                <h1 className="text-2xl font-bold text-gray-800 mb-4">Add a Transaction</h1>
                                {/* Transaction Type Dropdown */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Type of Transaction</label>
                                    <select
                                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={transaction.type}
                                        onChange={(e) => setTransaction({
                                            type: e.target.value,
                                            amount: transaction.amount
                                        })}
                                    >
                                        <option value="income">Income</option>
                                        <option value="expense">Expense</option>
                                    </select>
                                </div>

                                {/* Input Field */}
                                <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter amount"
                                    value={transaction.amount}
                                    onChange={(e) => setTransaction({
                                        type: transaction.type,
                                        amount: e.target.value
                                    })}
                                />
                                <button type="submit" className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-[#8c62e4] transition-colors">
                                    Submit
                                </button>
                            </form>

                            {/* Close Button */}
                            <button
                                className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
                {/* Container for the button */}
                <div className="flex justify-end w-full px-4 mb-6">
                    <button
                        className="px-6 py-2 border-2 border-[#8c62e4] w-64 rounded-lg hover:bg-[#8c62e4]
                        hover:text-white transition-colors duration-300"
                        onClick={openModal}
                    >
                        Add transaction
                    </button>
                </div>
            </div>
        </div>
    );
};