export const RInputBox = ({heading, type, placeholder, id, className, value, name, onChange}: {
    heading: string 
    type: string,
    placeholder?: string
    id: string
    name?: string
    className: string
    value?: string,
    onChange?: () => void
}) => {
    return <div className="flex">
        <input onChange={onChange} id={id} type={type} placeholder={placeholder} value={value} name={name} className={className}/>
        <label htmlFor={id} className="font-medium text-md">{heading}</label>
    </div>
}