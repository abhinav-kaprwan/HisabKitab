import React from 'react'
import { DataTable } from './ui/DataTable'

export const data= [
  {
    name: "728ed52f",
    email: 100,
    time: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
]

export const columns= [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  
]
function Transactions() {
  return (
    <div className="flex flex-col gap-5  w-full">
      <h1 className='"text-2xl font-semibold"'>Transactions</h1>
      <DataTable columns={columns} data={data}/>
    </div>
  )
}

export default Transactions