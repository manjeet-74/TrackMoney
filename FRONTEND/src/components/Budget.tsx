import { FinanceCard } from "./FinanceCard"

export const Budget = () => {
    return (
        <div className="flex items-center justify-center p-4">
            <div className="flex flex-col items-start border-2 border-gray-200 p-4 w-full max-w-4xl rounded-lg shadow-lg">
                <h1 className="text-2xl">Budget</h1>
                <div className="mt-4 w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <FinanceCard />
                    <FinanceCard />
                    <FinanceCard />
                    <FinanceCard />
                    <FinanceCard />
                    <FinanceCard />
                </div>
            </div>
        </div>
    )
}