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
                }
            ]
        },
        {
            title: 'cap'
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