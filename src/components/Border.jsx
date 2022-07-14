export default function Border({ children, size = "2"}) {
  return (
    <div className={`border-solid border-${size}`}>
      {children}
    </div>
  )
}

