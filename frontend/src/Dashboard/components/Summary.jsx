import React from 'react'

export default function Summary() {
    return (
        <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-2 border-b pb-1">Equity</h2>
            <div className="flex justify-between text-sm">
                <div>
                    <p className="text-gray-600">Margin available</p>
                    <p className="text-xl font-bold text-green-600">₹3.74k</p>
                </div>
                <div>
                    <p>Margins used: <span className="font-medium">0</span></p>
                    <p>Opening balance: <span className="font-medium">3.74k</span></p>
                </div>
            </div>
        </div>
    );
}
