import { Handler } from '@netlify/functions'
import cookie from 'cookie'

const handler: Handler = async (event, context) => {

    return {
        statusCode: 200,
        headers: {
            'X-Execution-Date': new Date().toISOString()
        },
        body: `
            <html>
                <body>
                    <pre>
                    ${ JSON.stringify(event) }
                    </pre>
                </body>
            </html>        
        `
    }

}

export { handler }