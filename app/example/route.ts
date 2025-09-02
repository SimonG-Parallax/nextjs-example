export async function POST(request: Request) {
    try {
        const { name, email, image_url } = await request.json();

        // Validate that we have the expected fields
        if (typeof name !== 'string' || typeof email !== 'string' || typeof image_url !== 'string') {
            return Response.json(
                { error: 'Invalid data: name and email must be strings' },
                { status: 400 }
            );
        }

        //  create a new cutomer
        // createCustomer(crypto.randomUUID(), name, email, image_url);
        // return the customer
        return Response.json({ message: 'Customer created successfully' });
    } catch (error) {
        // Handle JSON parsing errors
        if (error instanceof SyntaxError) {
            return Response.json(
                { error: 'Invalid JSON format' },
                { status: 400 }
            );
        }
    
        // Handle other errors
        return Response.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}