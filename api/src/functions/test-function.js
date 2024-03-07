const { app } = require('@azure/functions');

app.http('test-function', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {

        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('test')

        return { body: JSON.stringify({ fish: name }) };
    }
});

