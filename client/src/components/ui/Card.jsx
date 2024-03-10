import React from 'react'
function Card({
    title,icon:Icon,amount,description
}) {
  return (
    <CardContent>
        <div>
        <section className='flex justify-between gap-2'>
            <p className='tex-sm'>{title}</p>
            <Icon className='h-4 w-4 text-gray-400'/>
        </section>  
        <section className='flex flex-col gap-1'>
            <h2 className='text-2xl font-semibold'>{amount}</h2>
            <p className='text-xs text-gray-500'>{description}</p>
        </section>
        </div>
    </CardContent>
  )
}

export function CardContent({children}) {
    return (
        <div className='flex flex-col w-full rounded-xl border p-5 shadow'>
            {children}
            </div> 
      
        
    )
}

export default Card