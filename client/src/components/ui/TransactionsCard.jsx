import React from 'react'

function TransactionsCard({
    name,email,transactionAmount
}) {
  return (
    <div className='flex flex-wrap justify-between gap-3s'>
        <section className='flex justify-between gap-3'>
            <div className='h-12 w-12 rounded-full bg-gray-100 p-1'>
                <img width={200} hieght={200} src="" alt="avatar" />
            </div>
            <div className="text-sm">
            <p>{name}</p>
            <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px]  sm:w-auto  text-gray-400">
                {email}
            </div>
        </div>
        </section>
    </div>
  )
}

export default TransactionsCard