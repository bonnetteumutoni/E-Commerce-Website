interface ButtonProps{
    buttonText:string,variant:string,onClickHandler:()=>void
}
const Button=  ({buttonText,variant,onClickHandler}:ButtonProps)=>{
const buttonVariants=()=>{
    switch(variant){
     case 'primary':
        return 'bg-red-400 text-white'
        case 'secondary':
            return 'bg-white text-green-500 border-green-500'
            default:
                return 'bg-green-500 text-white'
    }
}

const variantStyles= buttonVariants();
    return(
        <button className={`${variantStyles} p-4 w-30 rounded-[3px]`}
        onClick= {onClickHandler}
         > {buttonText}</button>
    )
}
export default Button;