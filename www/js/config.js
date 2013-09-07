var config = {
    environment: 'debug', // 'debug' or 'release'
    clothes: [
        {
            title: 'umbrella',
            conditions: [
                {
                    title: 'windspeedKmph',
                    operator: '<',
                    value: 30
                },
                {
                    title: 'precipMM',
                    operator: '>',
                    value: 0
                }
            ]
        },
        {
            title: 'sunglasses',
             conditions: [
                {
                    title: 'cloudcover',
                    operator: '<',
                    value: 15
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
        }
    ]
};

config.ajaxType = (config.environment === 'release') ? 'json' : 'jsonp';
