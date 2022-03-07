import { Handler } from '@netlify/functions'
import cookie from 'cookie'

const handler: Handler = async (event, context) => {

    return {
        statusCode: 200,
        headers: {
            'X-Execution-Date': new Date().toISOString(),
            'Set-Cookie': cookie.serialize('Sample', 'Sample value')
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