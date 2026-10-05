import { ShippingFormInputs, shippingFormSchema } from "@/app/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const ShippingForm = () => {
    const {
        register, 
        handleSubmit, 
        formState : { errors }
    } = useForm<ShippingFormInputs>({
        resolver:zodResolver(shippingFormSchema)
    });
    return (
        <form className=" flex flex-col gap-4">
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
                <input type="text" id="email" placeholder="Accra" {...register("city")}
                        className="border-b border-gray-200 py-2 px-2 outline-none text-sm"/>
                {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
            </div>

            <button>

            </button>



        </form>
    )
};

export default ShippingForm;