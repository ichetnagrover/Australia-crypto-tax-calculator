const taxRates = [
    {
        "$0 - $18,200" : "0%",
        "$18,201 - $45,000" :  "Nil + 19% of excess over $18,200",
        "$45,001 - $120,000" : "$5,092 + 32.5% of excess over $45,000",
        "$120,001 - $180,000" : "$29,467 + 37% of excess over $120,000",
        "$180,001+" : "$51,667 + 45% excess over $180,000"
    }
];

export default taxRates;