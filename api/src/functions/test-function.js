import { app } from "@azure/functions"
// This kills the app
// import Mux from '@mux/mux-node'

app.http('test-function', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async () => {

        return { jsonBody: { test: "name" } }
    }
})

