require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.json());
const DOMAIN = process.env.DOMAIN || 'http://localhost:3001';

app.post('/create-checkout-session', async (req, res) => {
    try {
        const cartItemsStripe = req.body.cartItemsStripe;
        console.log('Dati del carrello ricevuti:', cartItemsStripe);
        if (!cartItemsStripe || cartItemsStripe.length === 0) {
            return res.status(400).json({ error: 'Carrello vuoto o dati del carrello non validi.' });
        }

        const lineItems = cartItemsStripe.map(item => ({
            price: item.priceId,
            quantity:item.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url: `${DOMAIN}?success=true`,
            cancel_url: `${DOMAIN}?canceled=true`,
        });
        console.log('Sessione di pagamento avviata: ', session.url);
        res.json({ url: session.url }); //restituisce oggetto json con l'url
    } catch (error) {
        console.error('Errore durante la creazione della sessione di pagamento: ', error);
        res.status(500).json({ error: 'Errore interno del server' });
    }
});

app.listen(3002, () => console.log('Running on port 3001'));