import React from "react";

function Charges() {
  const pricingData = [
    {
      img: "src/assets/images/pricing0.svg",
      title: "Free equity delivery",
      desc: "All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.",
    },
    {
      img: "src/assets/images/intradayTrades.svg",
      title: "Intraday and F&O trades",
      desc: "Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity. Flat ₹20 on all option trades.",
    },
    {
      img: "src/assets/images/pricingEquity.svg",
      title: "Free direct MF",
      desc: "All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto text-center py-16">
      <h5 className="text-gray-800 font-semibold text-xl mb-2">Charges</h5>
      <p className="text-gray-500">List of all charges and taxes</p>

      <div className="grid md:grid-cols-3 gap-10 mt-10">
        {pricingData.map((item, index) => (
          <div key={index} className="p-4">
            <img
              src={item.img}
              alt={item.title}
              className="h-20 mx-auto mb-4"
            />
            <h6 className="text-gray-800 font-semibold mb-2">{item.title}</h6>
            <p className="text-gray-500 text-sm max-w-xs mx-auto">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Charges;
