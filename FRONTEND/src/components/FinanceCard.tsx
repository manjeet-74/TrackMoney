

interface FinanceCardProps {
    amt: number;
    type: string
}

export const FinanceCard: React.FC<FinanceCardProps> = ({ amt, type }) => {
    return (
        <div className="border-2 border-gray-200 p-4 w-full max-w-4xl rounded-lg shadow-lg">
            <h1>{type}</h1>
            <div className="text-center my-4">
                <h1 className="text-4xl">{amt}</h1>
            </div>
        </div>
    );
};
