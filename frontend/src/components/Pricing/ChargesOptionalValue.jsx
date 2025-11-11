import React from "react";

function ChargesOptionalValue() {
    return (
        <div className="max-w-6xl mx-auto py-16">
            <h5 className="text-xl font-semibold mb-4 text-gray-800">
                Charges for optional value-added services
            </h5>

            <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-sm text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 border">Service</th>
                            <th className="p-3 border">Billing Frequency</th>
                            <th className="p-3 border">Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3 border">TickerTape</td>
                            <td className="p-3 border">Monthly / Annual</td>
                            <td className="p-3 border">Free: 0 | Pro: 249/2399</td>
                        </tr>
                        <tr>
                            <td className="p-3 border">Smallcase</td>
                            <td className="p-3 border">Per transaction</td>
                            <td className="p-3 border">Buy & Invest More: 100 | SIP: 10</td>
                        </tr>
                        <tr>
                            <td className="p-3 border">Kite Connect</td>
                            <td className="p-3 border">Monthly</td>
                            <td className="p-3 border">Connect: 500 | Historical: 500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ChargesOptionalValue;
