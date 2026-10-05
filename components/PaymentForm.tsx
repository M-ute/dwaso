import { PaymentFormInputs, paymentFormSchema } from "@/app/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShoppingCartIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";


const PaymentForm = () => {
    const {
        register, 
        handleSubmit, 
        formState : { errors }
    } = useForm<PaymentFormInputs>({
        resolver:zodResolver(paymentFormSchema)
    });

    const router = useRouter();

    const handlePaymentForm:SubmitHandler<PaymentFormInputs  > = (data) => {
        
    }

    return (
        <form className=" flex flex-col gap-4" onSubmit={handleSubmit(handlePaymentForm)}>
            {/* CARD HOLDER FIELD */}
            <div className="flex flex-col gap-1">
                <label htmlFor="cardHolder" className="text-sm text-gray-500 font-bold">Name on card</label>
                <input type="text" id="cardHolder" placeholder="John Doe" {...register("cardHolder")}
                        className="border-b border-gray-200 py-2 px-2 outline-none text-sm"/>
                {errors.cardHolder && <p className="text-xs text-red-500">{errors.cardHolder.message}</p>}
            </div>
            {/* CARD NUMBER FIELD */}
            <div className="flex flex-col gap-1">
                <label htmlFor="cardNumber" className="text-sm text-gray-500 font-bold">Card Number</label>
                <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" {...register("cardNumber")}
                        className="border-b border-gray-200 py-2 px-2 outline-none text-sm"/>
                {errors.cardNumber && <p className="text-xs text-red-500">{errors.cardNumber .message}</p>}
            </div>
            {/* EXPIRATION DATE FIELD */}
             <div className="flex flex-col gap-1">
                <label htmlFor="expirationDate" className="text-sm text-gray-500 font-bold">Expiration Date</label>
                <input type="text" id="expirationDate" placeholder="MM/YY" {...register("expirationDate")}
                        className="border-b border-gray-200 py-2 px-2 outline-none text-sm"/>
                {errors.expirationDate && <p className="text-xs text-red-500">{errors.expirationDate.message}</p>}
            </div>
            {/* CVV FIELD */}
             <div className="flex flex-col gap-1">
                <label htmlFor="cvv" className="text-sm text-gray-500 font-bold">CVV</label>
                <input type="text" id="cvv" placeholder="123" {...register("cvv")}
                        className="border-b border-gray-200 py-2 px-2 outline-none text-sm"/>
                {errors.cvv && <p className="text-xs text-red-500">{errors.cvv.message}</p>}
            </div>

            <div className="flex items-center gap-2 mt-4">
                <Image src="/klarna.png" alt="klarna" width={50} height={25} className="md"/>
                <Image src="/stripe.png" alt="stripe" width={50} height={25} className="md"/>
                <Image src="/cards.png" alt="cards" width={50} height={25} className="md"/>

            </div>
            

            <div className="flex items-center justify-center">
                <button 
                    type="submit" 
                    className="w-2/3 bg-gray-700 hover:bg-gray-800 transition-all 
                               duration-200 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2  ">
                    Check out
                    <ShoppingCartIcon/>
                </button>
            </div>
            



        </form>
    )
};

export default PaymentForm;