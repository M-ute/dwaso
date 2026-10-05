import { ShippingFormInputs, shippingFormSchema } from "@/app/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowBigRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

const ShippingForm = ({setShippingForm} : {setShippingForm : (data:ShippingFormInputs) => void; }) => {
    const {
        register, 
        handleSubmit, 
        formState : { errors }
    } = useForm<ShippingFormInputs>({
        resolver:zodResolver(shippingFormSchema)
    });

    const router = useRouter();

    const handleShippingForm:SubmitHandler<ShippingFormInputs > = (data) => {
        setShippingForm(data);
        router.push("/cart?step=3", {scroll: false })
    }

    return (
        <form className=" flex flex-col gap-4" onSubmit={handleSubmit(handleShippingForm)}>
            {/* NAME FIELD */}
            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm text-gray-500 font-bold">Name</label>
                <input type="text" id="name" placeholder="John Doe" {...register("name")}
                        className="border-b border-gray-200 py-2 px-2 outline-none text-sm"/>
                {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
            </div>
            {/* EMAIL FIELD */}
            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm text-gray-500 font-bold">Email</label>
                <input type="email" id="email" placeholder="johndoe@gmail.com" {...register("email")}
                        className="border-b border-gray-200 py-2 px-2 outline-none text-sm"/>
                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
            </div>
            {/* PHONE FIELD */}
             <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-sm text-gray-500 font-bold">Phone</label>
                <input type="text" id="phone" placeholder="01233456789" {...register("phone")}
                        className="border-b border-gray-200 py-2 px-2 outline-none text-sm"/>
                {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
            </div>
            {/* ADDRESS FIELD */}
             <div className="flex flex-col gap-1">
                <label htmlFor="address" className="text-sm text-gray-500 font-bold">Address</label>
                <input type="text" id="address" placeholder="5BN Burma Camp" {...register("address")}
                        className="border-b border-gray-200 py-2 px-2 outline-none text-sm"/>
                {errors.address && <p className="text-xs text-red-500">{errors.address.message}</p>}
            </div>
            {/* CITY FIELD */}
             <div className="flex flex-col gap-1">
                <label htmlFor="city" className="text-sm text-gray-500 font-bold">City</label>
                <input type="text" id="city" placeholder="Accra" {...register("city")}
                        className="border-b border-gray-200 py-2 px-2 outline-none text-sm"/>
                {errors.city && <p className="text-xs text-red-500">{errors.city.message}</p>}
            </div>

            <div className="flex items-center justify-center">
                <button 
                    type="submit" 
                    className="w-2/3 bg-gray-700 hover:bg-gray-800 transition-all 
                               duration-200 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2  ">
                    Continue
                    <ArrowBigRightIcon/>
                </button>
            </div>
            



        </form>
    )
};

export default ShippingForm;