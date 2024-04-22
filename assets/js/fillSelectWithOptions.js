function fillSelectWithOptions() {
    const currencies = [
        {code: "USD", currency: "Dollar US"},
        {code: "GBP", currency: "Sterling GB"},
        {code: "JPY", currency: "Japanese yen JP"},
        {code: "CNY", currency: "Renminbi CN"},
        {code: "AUD", currency: "Australian dollar AU"},
        {code: "BTC", currency: "Bitcoin"},
        {code: "ARS", currency: "Argentine peso AR"}
    ];

    // Fill select with options
    currencies.forEach((type) => {
        let optionFrom = document.createElement("option");
        let optionTo = document.createElement("option");
        let text = type.code + " " + type.currency;
        let value = type.code;

        optionFrom.text = text;
        optionTo.text = text;
        optionFrom.value = value;
        optionTo.value = value;

        let selectFrom = document.getElementById("from-currency-type");
        let selectTo = document.getElementById("to-currency-type");

        selectFrom.appendChild(optionFrom);
        selectTo.appendChild(optionTo);
    });

    // Output
    // let showConvertedCurrency = document.getElementById('show-converted-currency');
    // showConvertedCurrency.placeholder = "value changed";
}

fillSelectWithOptions();