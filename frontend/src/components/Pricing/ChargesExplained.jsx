import React from "react";

export default function ChargesExplained() {
    return (
        <section className="py-16 bg-white px-4">
            {/* Heading */}
            <h4 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-12">
                Charges explained
            </h4>

            {/* Columns */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-gray-700 text-sm leading-relaxed">
                {/* Column 1 */}
                <div>
                    <h5 className="font-semibold text-gray-900 mb-2">
                        Securities/Commodities transaction tax
                    </h5>
                    <p className="mb-3">
                        Tax by the government when transacting on the exchanges. Charged on
                        both buy and sell sides when trading equity delivery. Charged only
                        on selling side for intraday or F&O.
                    </p>
                    <p className="mb-5">
                        When trading at Zerodha, STT/CTT can be a lot more than the
                        brokerage we charge. Important to keep a tab.
                    </p>

                    <h5 className="font-semibold text-gray-900 mb-2">
                        Transaction/Turnover Charges
                    </h5>
                    <p className="mb-3">
                        Charged by exchanges (NSE, BSE, MCX) on the value of your
                        transactions.
                    </p>
                    <p className="mb-5">
                        BSE revised transaction charges in certain groups like XC, XD, XT, Z
                        to ₹10,000 per crore.
                    </p>

                    <h5 className="font-semibold text-gray-900 mb-2">Call & trade</h5>
                    <p className="mb-5">
                        Additional ₹50 per order placed through a dealer at Zerodha
                        including auto square off orders.
                    </p>

                    <h5 className="font-semibold text-gray-900 mb-2">Stamp charges</h5>
                    <p className="mb-5">
                        Stamp charges by the Government of India as per the Indian Stamp Act
                        of 1899.
                    </p>

                    <h5 className="font-semibold text-gray-900 mb-2">
                        NRI brokerage charges
                    </h5>
                    <ul className="list-disc pl-6 mb-5 space-y-1">
                        <li>₹100 per order for F&O.</li>
                        <li>
                            For non-PIS account: 0.5% or ₹100 per order (whichever is lower).
                        </li>
                        <li>
                            For PIS account: 0.5% or ₹200 per order (whichever is lower).
                        </li>
                        <li>₹500 + GST yearly AMC charges.</li>
                    </ul>

                    <h5 className="font-semibold text-gray-900 mb-2">
                        Account with debit balance
                    </h5>
                    <p className="mb-5">
                        Orders will be charged ₹40 per executed order instead of ₹20 if
                        account is in debit balance.
                    </p>

                    <h5 className="font-semibold text-gray-900 mb-2">
                        Charges for Investor's Protection Fund Trust (IPFT)
                    </h5>
                    <ul className="list-disc pl-6 mb-5 space-y-1">
                        <li>Equity/Futures - ₹10 per crore + GST.</li>
                        <li>Options - ₹50 per crore + GST.</li>
                        <li>
                            Currency Futures - ₹0.05 per lakh + GST; Options - ₹2 per lakh +
                            GST.
                        </li>
                    </ul>

                    <h5 className="font-semibold text-gray-900 mb-2">
                        Margin Trading Facility (MTF)
                    </h5>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Interest: 0.04% per day (₹40/lakh) on funded amount.</li>
                        <li>Brokerage: 0.3% or ₹20/order, whichever lower.</li>
                        <li>Pledge charge: ₹15 + GST per pledge/unpledge request per ISIN.</li>
                    </ul>
                </div>

                {/* Column 2 */}
                <div>
                    <h5 className="font-semibold text-gray-900 mb-2">GST</h5>
                    <p className="mb-5">
                        18% of (brokerage + SEBI charges + transaction charges).
                    </p>

                    <h5 className="font-semibold text-gray-900 mb-2">SEBI Charges</h5>
                    <p className="mb-5">
                        ₹10 per crore + GST by SEBI for regulating the markets.
                    </p>

                    <h5 className="font-semibold text-gray-900 mb-2">
                        DP (Depository participant) charges
                    </h5>
                    <p className="mb-1">₹15.34 per scrip on stock sale, irrespective of quantity.</p>
                    <p className="mb-5">
                        Female demat account holders get ₹0.25 discount per transaction on
                        CDSL fee.
                    </p>

                    <h5 className="font-semibold text-gray-900 mb-2">Pledging charges</h5>
                    <p className="mb-5">₹30 + GST per pledge request per ISIN.</p>

                    <h5 className="font-semibold text-gray-900 mb-2">
                        AMC (Account maintenance charges)
                    </h5>
                    <p className="mb-1">
                        BSDA demat: Zero charges if holding value &lt; ₹4,00,000.
                    </p>
                    <p className="mb-5">
                        Non-BSDA demat: ₹300/year + GST, charged quarterly.
                    </p>

                    <h5 className="font-semibold text-gray-900 mb-2">
                        Corporate action order charges
                    </h5>
                    <p className="mb-5">
                        ₹20 + GST for OFS / buyback / takeover / delisting orders via
                        Console.
                    </p>

                    <h5 className="font-semibold text-gray-900 mb-2">
                        Off-market transfer charges
                    </h5>
                    <p className="mb-5">₹25 per transaction.</p>

                    <h5 className="font-semibold text-gray-900 mb-2">
                        Physical CMR request
                    </h5>
                    <p className="mb-5">
                        First request free; subsequent ₹20 + ₹100 courier + GST.
                    </p>

                    <h5 className="font-semibold text-gray-900 mb-2">
                        Payment gateway charges
                    </h5>
                    <p className="mb-5">₹9 + GST (UPI transfers free).</p>

                    <h5 className="font-semibold text-gray-900 mb-2">
                        Delayed Payment Charges
                    </h5>
                    <p className="mb-5">
                        Interest at 18% p.a. or 0.05% per day on debit balance.
                    </p>

                    <h5 className="font-semibold text-gray-900 mb-2">
                        Trading using 3-in-1 account
                    </h5>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>
                            <b>Delivery & MTF:</b> 0.5% per order.
                        </li>
                        <li>
                            <b>Intraday:</b> 0.05% per order.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
