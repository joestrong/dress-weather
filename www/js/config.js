var config = {
    environment: 'debug', // 'debug' or 'release'
    cities: [
        'bournemouth',
        'cardiff',
        'los angeles',
        'new delhi',
        'tokyo',
        'london',
        'edinburgh',
        'iceland',
        'melbourne',
        'rio de janiero',
        'istanbul',
        'glasgow',
        'oslo',
        'berlin'
    ],
    clothes: [
        {
            title: 'An Umbrella',
            conditions: [
                {
                    title: 'windSpeed',
                    operator: '<',
                    value: 30
                },
                {
                    title: 'precipitation',
                    operator: '>',
                    value: 0.9
                }
            ]
        },
        {
            title: 'Sunglasses',
             conditions: [
                {
                    title: 'cloudcover',
                    operator: '<',
                    value: 15
                },
                {
                    title: 'hourOfDay',
                    operator: '>',
                    value: 7
                },
                {
                    title: 'hourOfDay',
                    operator: '<',
                    value: 21
                }

            ]
        },
        {
            title: 'Loose Cotton or Silk Clothing',
             conditions: [
                {
                    title: 'humidity',
                    operator: '>',
                    value: 120
                },
                {
                    title: 'temp_C',
                    operator: '>',
                    value: 22
                }
            ]
        },
         {
            title: 'Sandals / Flipflops',
             conditions: [
                {
                    title: 'temp_C',
                    operator: '>',
                    value: 21
                },
                {
                    title: 'precipitation',
                    operator: '<',
                    value: 0.9
                }

            ]
        },
        {
            title: 'Coat / Jacket',
             conditions: [
                {
                    title: 'temp_C',
                    operator: '<',
                    value: 11
                }
            ]
        },
        {
            title: 'Sweatshirt / Jumper',
             conditions: [
                {
                    title: 'temp_C',
                    operator: '<',
                    value: 16
                }
            ]
        },
        {
            title: 'Raincoat',
             conditions: [
                {
                    title: 'temp_C',
                    operator: '<',
                    value: 16
                },
                {
                    title: 'precipitation',
                    operator: '>',
                    value: 0.9
                }
            ]
        },
        {
            title: 'Cap / Large Hat',
             conditions: [
                {
                    title: 'temp_C',
                    operator: '>',
                    value: 23
                },
                {
                    title: 'windSpeed',
                    operator: '<',
                    value: 30
                },
                 {
                    title: 'cloudcover',
                    operator: '<',
                    value: 15
                },
            ]
        },
        {
            title: 'Skirt / Dress',
             conditions: [
                {
                    title: 'temp_C',
                    operator: '>',
                    value: 8
                },
                {
                    title: 'windSpeed',
                    operator: '<',
                    value: 30
                }
            ]
        },
        {
            title: 'Suncream',
             conditions: [
                {
                    title: 'cloudcover',
                    operator: '<',
                    value: 15
                },
                {
                    title: 'hourOfDay',
                    operator: '>',
                    value: 7
                },
                {
                    title: 'hourOfDay',
                    operator: '<',
                    value: 21
                }
            ]
        }
    ]
};

config.ajaxType = (config.environment === 'release') ? 'json' : 'jsonp';
