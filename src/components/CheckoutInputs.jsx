import FormInputCheckout from "./FormInputCheckout";

export default function CheckoutInputs() {
  return (
    <div className="bg-white max-w-[730px] p-12 shadow-sm rounded-xl">
      <h1 className="text-3xl font-bold tracking-wide">CHECKOUT</h1>
      <h2 className="text-orang text-[13px] font-semibold mt-[41px]">
        BILLING DETAILS
      </h2>
      <div className="flex flex-wrap gap-4">
        <FormInputCheckout
          label="name"
          defaultValue="Alexei Ward"
          type="text"
          size="min-w-[309px]"
        />
        <FormInputCheckout
          label="Email Address"
          defaultValue="alexei@mail.com"
          type="e-mail"
          size="min-w-[309px]"
        />
        <FormInputCheckout
          label="Phone Number"
          defaultValue="+1 202-555-0136"
          type="phone"
          size="min-w-[309px]"
        />
      </div>
      <h2 className="text-orang text-[13px] font-semibold mt-[53px]">
        SHIPPING INFO
      </h2>
      <div className="flex flex-wrap gap-4">
        <FormInputCheckout
          label="Address"
          defaultValue="1137 Williams Avenue"
          type="text"
          size="min-w-[634px]"
        />
        <FormInputCheckout
          label="ZIP Code"
          defaultValue="10001"
          type="e-mail"
          size="min-w-[309px]"
        />
        <FormInputCheckout
          label="City"
          defaultValue="New York"
          type="text"
          size="min-w-[309px]"
        />
        <FormInputCheckout
          label="Country"
          defaultValue="United States"
          type="text"
          size="min-w-[309px]"
        />
      </div>
      <h2 className="text-orang text-[13px] font-semibold mt-[53px]">
        PAYMENT DETAILS
      </h2>
      <div className="flex justify-between mt-4">
        <p className="label-text font-semibold  capitalize">Payment Method</p>
        <div>

        <div className="input input-bordered w-full input-lg max-h-[56px] min-w-[309px] flex justify-start gap-4 mb-4 items-center">
          <input
            type="radio"
            name="radio-6"
            className="radio radio-warning " 
            checked
            />
          <h1 className="font-semibold">e-Money</h1>
          <p></p>
        </div>
        <div className="input input-bordered w-full input-lg max-h-[56px] min-w-[309px] flex justify-start gap-4 items-center">
          <input type="radio" name="radio-6" className="radio radio-warning" />
          <h1 className="font-semibold">Cash on Delivery</h1>
          <p></p>
        </div>
        </div>
      </div>
        <div className="flex flex-wrap gap-4 mt-6">
        <FormInputCheckout
          label="e-Money Number"
          defaultValue="238521993"
          type="text"
          size="min-w-[309px]"
        />
        <FormInputCheckout
          label="e-Money PIN"
          defaultValue="6891"
          type="password"
          size="min-w-[309px]"
        />
      </div>
    </div>
  );
}
