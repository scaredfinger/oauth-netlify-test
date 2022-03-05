exports.handler = async (event, context) => {

    return {
        statusCode: 200,
        headers: {
            'X-Execution-Date': new Date().toISOString()
        },
        body: 'Hello world'
    }

}