export default function Support() {
    return (
        <div className="p-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Codeship Support Page</h1>
            <h2 className="text-xl font-semibold text-gray-700 mb-6">Managed by Rohit</h2>

            <p className="text-gray-600">
                If you have any issues or need assistance, you can reach out here.
            </p>

            <div className="flex w-auto justify-center mt-2">
                <div className="border-5 border-blue-800 rounded-md">
                    <img
                        src="https://www.cohesiveglobal.com/images/services/support-0.jpg"
                        alt="SUPPORT"
                    />
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Our Users Say</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div className="border p-4 rounded-md shadow-sm bg-gray-50">
                        <p className="text-gray-700 italic">
                            “Great support team! They helped me solve an issue in no time.”
                        </p>
                        <h4 className="mt-3 font-semibold text-blue-700">— Prince Kumar</h4>
                    </div>
                    <div className="border p-4 rounded-md shadow-sm bg-gray-50">
                        <p className="text-gray-700 italic">
                            “Very professional and quick responses. Highly recommended.”
                        </p>
                        <h4 className="mt-3 font-semibold text-blue-700">— Shashank</h4>
                    </div>
                    <div className="border p-4 rounded-md shadow-sm bg-gray-50">
                        <p className="text-gray-700 italic">
                            “The best support I’ve ever experienced for a tech service.”
                        </p>
                        <h4 className="mt-3 font-semibold text-blue-700">— Raunak Kumar</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
