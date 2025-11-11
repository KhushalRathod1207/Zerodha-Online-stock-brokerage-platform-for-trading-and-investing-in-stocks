import React from "react";

function DematAMC() {
    return (
        <div className="max-w-6xl mx-auto py-16">
            <h5 className="text-xl font-semibold mb-4 text-gray-800">
                Demat AMC (Annual Maintenance Charge)
            </h5>

            <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-sm text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 border">Value of holdings</th>
                            <th className="p-3 border">AMC</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3 border">Up to ₹4 lakh</td>
                            <td className="p-3 border">
                                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
                                    FREE
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 border">₹4 lakh – ₹10 lakh</td>
                            <td className="p-3 border">₹ 100 per year, charged quarterly*</td>
                        </tr>
                        <tr>
                            <td className="p-3 border">Above ₹10 lakh</td>
                            <td className="p-3 border">₹ 300 per year, charged quarterly</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="text-gray-500 text-sm mt-3">
                * Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA).
                <a href="#" className="text-blue-600 ml-1">click here</a>.
            </p>
        </div>
    );
}

export default DematAMC;
