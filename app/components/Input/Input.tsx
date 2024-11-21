export type InputProps = {
  label?: string;
  multiline?: boolean;
} & (
  React.InputHTMLAttributes<HTMLInputElement> |
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
)

const InputOrTextArea = (props: InputProps) => {
  if (props.multiline) {
    return <textarea {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>} />
  }
  return <input {...props as React.InputHTMLAttributes<HTMLInputElement>} />
}

const Input = ({ label, className, ...rest}: InputProps) => {
  return <div className="relative">
    {label && <label className="theme-grey absolute pt-1 pl-3 text-xs text-primary-100">{label}</label>}
    <InputOrTextArea
      className={`
        theme-grey bg-primary-50 text-primary rounded-md p-3
        disabled:bg-disabled disabled:text-primary-100 disabled:border-2 disabled:border-disabled
        ${label && 'pt-5'}
        ${className}
      `}
      {...rest}
    />
  </div>
}

export default Input