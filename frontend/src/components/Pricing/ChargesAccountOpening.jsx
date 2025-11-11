import React from "react";

function ChargesAccountOpening() {
    return (
        <div className="max-w-6xl mx-auto py-16">
            <h5 className="text-xl font-semibold mb-4 text-gray-800">
                Charges for account opening
            </h5>

            <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-sm text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 border">Type of account</th>
                            <th className="p-3 border">Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3 border">Online account</td>
                            <td className="p-3 border">
                                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
                                    FREE
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 border">Offline account</td>
                            <td className="p-3 border">
                                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
                                    FREE
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 border">NRI account (offline only)</td>
                            <td className="p-3 border">₹ 500</td>
                        </tr>
                        <tr>
                            <td className="p-3 border">
                                Partnership, LLP, HUF, or Corporate accounts (offline only)
                            </td>
                            <td className="p-3 border">₹ 500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ChargesAccountOpening;
