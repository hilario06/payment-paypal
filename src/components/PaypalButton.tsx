import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { CreateOrderActions } from '@paypal/paypal-js/types/components/buttons';


interface PaypalButtonProps {
  price: number;
  description: string;
}

const PaypalButton: React.FC<PaypalButtonProps> = ({ price, description }) => {
  console.log('key',import.meta.env.VITE_PAYPAL_CLIENT )
  const initialOptions = {
    clientId: import.meta.env.VITE_PAYPAL_CLIENT, // Reemplaza con tu client ID de PayPal
    currency: "USD",
    intent: "capture"
  };

  // const createOrder = (data: any, actions: any) => {
  //   return actions.order.create({
  //     purchase_units: [{
  //       amount: {
  //         description: 'polo',
  //         value: "100.00" // El monto que deseas cobrar
  //       }
  //     }]
  //   });
  // };

  const createOrder = (data: Record<string, unknown>, actions: CreateOrderActions) => {
    return actions.order.create({
      intent: "CAPTURE",
      purchase_units: [{
        amount: {
          currency_code: "USD",
          value: price.toFixed(2) // El monto que deseas cobrar
        },
        description: description
      }]
    });
  };

  const onApprove = (data: Record<string, unknown>, actions: any) => {
    // actions.order.capture();
    return actions.order.capture().then((details: any) => {
      alert(`Transaction completed by ${details.payer.name.given_name}`);
    });
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        style={{ color: 'blue', layout: 'vertical' }}
        createOrder={createOrder}
        onCancel={() => {}}
        onApprove={onApprove}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalButton;