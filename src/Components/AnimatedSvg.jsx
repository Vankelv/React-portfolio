import React from 'react'

const AnimatedSvg = () => {
  return (
    <div><svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#0072ff", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#01c1de", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect
        x="10"
        y="10"
        width="580"
        height="580"
        fill="none"
        stroke="url(#grad)"
        strokeWidth="1"
      />
      <rect x="20" y="20" width="60" height="60" fill="#0072ff" />
      <rect x="520" y="20" width="60" height="60" fill="#01c1de" />
      <rect x="20" y="520" width="60" height="60" fill="#ff8c00" />
      <rect x="520" y="520" width="60" height="60" fill="#dc3545" />
    </svg>
    </div>
  )
}

export default AnimatedSvg  