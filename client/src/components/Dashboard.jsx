import React from 'react'
import { CardContent } from './ui/Card'
import { DollarSign } from 'lucide-react'
import Card from './ui/Card'
import Graph from './ui/Graph'
const cardData = [
  {
    title:"Total Lending",
    icon:DollarSign,
    amount:5000,
    description:"It's something to test"
  },
  {
    title:"Total borrowing",
    icon:DollarSign,
    amount:1000,
    description:"It's something to test"
  },
  {
    title:"Today's transactions",
    icon:DollarSign,
    amount:5000,
    description:"It's something to test"
  },
  {
    title:"Hefdfllo",
    icon:DollarSign,
    amount:5000,
    description:"It's something to test"
  },
]
function Dashboard() {
  return (
    <div className='flex flex-col gap-5 w-full'>
      <h1 className='text-2xl font-semibold'>Dashboard</h1>
      <section className='grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4'>
        {cardData.map((data,key)=> (
          
          <Card 
          key={key}
          
          title={data.title}
          icon={data.icon}
          amount={data.amount}
          description={data.description}
          />
        ))}
      </section>
      <section className='grid grid-cols-1 gap-4 transition-all lg:grid-cols-2'>
        <CardContent>
            <Graph/>
        </CardContent>
        <CardContent>
          <section>
            <p>Recent Transactions</p>
            <p className='text-sm text-gray-400'>
              You made 200 transactions this month
            </p>
          </section>
        </CardContent>
          
      </section>
    </div>
  )
}

export default Dashboard