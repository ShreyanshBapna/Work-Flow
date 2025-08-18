export const InputBox = ({heading, type, placeholder, id, className, value, reference}: {
    reference?: React.RefObject<HTMLInputElement | null>,
    heading: string 
    type: string,
    placeholder?: string
    id: string
    className: string
    value?: string
}) => {
    return <div className="flex flex-col my-7">
        <label htmlFor={id} className="font-medium text-md">{heading}</label>
        <input ref={reference} id={id} type={type} placeholder={placeholder} value={value} className={className}/>
    </div>
}