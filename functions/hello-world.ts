import { Handler } from '@netlify/functions'

const handler: Handler = async (event, context) => {

    return {
        statusCode: 200,
        headers: {
            'X-Execution-Date': new Date().toISOString()
        },
        body: 'Hello world'
    }

}

export { handler }