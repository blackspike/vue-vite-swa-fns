import { app } from "@azure/functions"
import Mux from '@mux/mux-node'

app.http('test-function', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async () => {

        return { jsonBody: { test: "name" } }
    }
})

