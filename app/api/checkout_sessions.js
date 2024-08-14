import { NextResponse } from "next/server";
import Stripe from "stripe";

const formatAmountForStripe = (amount, currency) => {
    return Math.round(amount * 100)
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-06-20',
})

export async function POST(req) {
    try {
        // checkout session creation 
        const params = {
            mode: 'subscription',
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Pro subscription',
                        },
                        unit_amount: formatAmountForStripe(10, 'usd'), // $10 in cents
                        recurring: {
                            interval: 'month',
                            interval_count: 1,
                        },
                    },
                    quantity: 1,
                },
            ],
            // Redirects users after payment process
            success_url: `${req.headers.get(
                'Referer',
            )}result?session_id={CHECKOUT_SESSION_ID}`,

            cancel_url: `${req.headers.get(
                'Referer',
            )}result?session_id={CHECKOUT_SESSION_ID}`,
        }

        // creates checkout session according to set params
        const checkoutSession = await stripe.checkout.sessions.create(params)

        return NextResponse.json(checkoutSession, {
            status: 200,
        })

    } catch (error) {
        console.error('Error creating checkout session:', error)
        return new NextResponse(JSON.stringify({error: {message: error.message}}), {
            status: 500,
        })
    }
}

// Route to retrieve the session details after payment
export async function GET(req) {
    // extracts session_id from the query parameters of the request
    const searchParams = req.nextUrl.searchParams
    const session_id = searchParams.get('session_id')

    try {
        if (!session_id) {
            throw new Error('Session ID is required')
        }

        // uses Stripe API to retrieve the checkout session details
        const checkoutSession = await stripe.checkout.sessions.retrieve(session_id)

        return NextResponse.json(checkoutSession)
    } catch (error) {
        console.error('Error retrieving checkout session: ', error)
        return NextResponse.json({error: {message: error.message}}, {status: 500})
    }
}