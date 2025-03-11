export const Hero = () => {
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="flex justify-center items-center h-1/4 p-4">
            <div className="bg-[#8c62e4] text-white p-8 w-full max-w-4xl rounded-lg shadow-lg">
                <h2 className="text-sm font-light opacity-80 mb-6">{currentDate}</h2>
                <div className="mt-4">
                    <h1 className="text-4xl font-bold">Welcome back, John!</h1>
                    <p className="mt-2 text-lg font-light opacity-90">
                        I know life is hard, but you're doing great! Keep going!
                    </p>
                </div>
            </div>
        </div>
    );
};