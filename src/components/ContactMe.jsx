import { useForm } from "react-hook-form";
const Errormsg=(props)=>{
    return <div className="m-0 text-xs text-red-600 ">
        {props.error}
    </div>
}
const ContactPage=()=>{
  
        const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm();
      
      
        const onSubmit = async (data) => {
          console.log(data);
        }
    return(
        <><div></div>
        <div className="w-[88vmin] h-max mx-auto my-10  " >
            <form onSubmit={handleSubmit(onSubmit)  } className="flex w-11/12 h-full   flex-col justify-center items-center gap-5">
                
        <input className="w-10/12 h-8 rounded-lg text-[black] font-normal focus:bg-[#2c2e3a] focus:outline-0 border-none focus:text-white text-sm px-2 " type="text" placeholder="Enter Name" {...register("Name",{
            required:{value:true, message:"*This field is Required"}
        })} />
        {errors.Name && <Errormsg error={errors.Name.message}/>}
         <input className="w-10/12 h-8 rounded-lg text-[black] font-normal focus:bg-[#2c2e3a] focus:outline-0 border-none focus:text-white text-sm px-2 " type="email" placeholder="Enter Your Email" {...register("Email",{
            required:{value:true, message:"*This field is Required"}
        })} />
          {errors.Email && <Errormsg error={errors.Email.message}/>}
         <input className="w-10/12 h-8 rounded-lg text-[black] font-normal focus:bg-[#2c2e3a] focus:outline-0 border-none focus:text-white text-sm px-2 " type="text" placeholder="Contact No.(Optional)" {...register("Phone")        
         } />
         
         <input className="w-10/12 min-h-32 max-h-max py-3 px-2 rounded-lg text-[black] font-normal focus:bg-[#2c2e3a] focus:outline-0 border-none focus:text-white text-sm  " type="text" placeholder="Enter Your Message" {...register("Message",{
            required:{value:true, message:"*This field is Required"}
        })} />  {errors.Message && <Errormsg error={errors.Message.message}/>}
        <button className="w-32 h-9 bg-[#0a21c0] text-white rounded-lg md:hover:bg-[#2c2e3a] active:bg-[#2c2e3a] md:active:bg-none " type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}

export default ContactPage;