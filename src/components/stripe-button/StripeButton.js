import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    //stipe requires price in cents:
    const priceForStripe = price * 100; 
    const publishableKey = 'pk_test_51HQThhH3ZixGsdhWcHG5nkL4f3rZiPD5DawI0Uh0hSADHZaAkyZSQTZwPN7RGRLAVsyXd9iGgXxFIEbjNRV5GNrE00BObukBG6';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    }

    return (
        <div>
            <StripeCheckout 
                label="Pay Now"
                name="CRWN Clothing Ltd."
                billingAddress
                shippingAddress
                image='http://svgshare.com/i/CUz.svg'
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel="Pay Now"
                token={onToken}
                stripeKey={publishableKey}
            />
        </div>
    );
};

export default StripeCheckoutButton;