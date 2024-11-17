import React,{ReactNode} from 'react'



type PropsType = {
    children: ReactNode
}
export default function Button({children}:PropsType) {
    return (
        <button style={{
            padding: '10px 20px',
            fontSize: "1.2rem",
            borderRadius: '5px',
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            cursor: 'pointer'

        }}>
            {children}
      </button>
  )
}
