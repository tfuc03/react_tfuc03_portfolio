import React from 'react'

const Button = ({ label, classes, href, download   }) => {
  if (href && download) {
    return (
      <a 
        href={href} 
        download={download}
        className={`${classes}`}
      >
        {label}
      </a>
    )
  }
  
  return <button className={`${classes}`}   >
    {label}
  </button>
}

export default Button
