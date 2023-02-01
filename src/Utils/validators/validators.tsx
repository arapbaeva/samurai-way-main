import React from 'react'

export const required = (value: string) => {
if (value) return undefined
return 'Field is required'
}

//замыкание
export const maxLengthCreator = (MaxLength: number) => (value:string) =>{
    if (value.length > MaxLength) return `Max length is ${MaxLength} symbols`
    return undefined
}