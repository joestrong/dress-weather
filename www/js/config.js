var config = {
    environment: 'debug', // 'debug' or 'release'
    clothes: [
        {
            title: 'umbrella',
            conditions: [
                {
                    condition: 'windspeedkmph',
                    operator: '<',
                    value: 5
                },
                {
                    condition: 'precipMM',
                    operator: '>',
                    value: 0
                }
            ]
        },
        {
            title: 'cap',
            conditions: [
                {
                    condition: 'precipMM',
                    operator: '>',
                    value: 10
                }
            ]
        },
        {
            title: 'flip-flops'
        },
        {
            title: 'coat'
        },
        {
            title: 'sunglasses'
        }
    ]
};

config.ajaxType = (config.environment === 'release') ? 'json' : 'jsonp';