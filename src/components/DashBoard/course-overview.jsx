// import React from 'react'
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Separator } from "@/components/ui/separator"
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

// const data = [
//   { day: 'Sun', blue: 60000, purple: 200000 },
//   { day: 'Mon', blue: 80000, purple: 180000 },
//   { day: 'Tue', blue: 200000, purple: 120000 },
//   { day: 'Wed', blue: 10000, purple: 60000 },
//   { day: 'Thu', blue: 5000, purple: 80000 },
//   { day: 'Fri', blue: 180000, purple: 70000 },
//   { day: 'Sat', blue: 1000, purple: 200000 },
// ]

// const formatYAxis = (value) => {
//   if (value >= 1000000) return `${value / 1000000}m`
//   if (value >= 1000) return `${value / 1000}k`
//   return value
// }

// export default function CourseOverview() {
//   return (
//     <Card className="w-[584px] h-[480px]">
//       <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//         <CardTitle className="text-xl font-bold">Course Overview</CardTitle>
//         <Select defaultValue="this-week">
//           <SelectTrigger className="w-[180px]">
//             <SelectValue placeholder="Select a timeframe" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="this-week">This week</SelectItem>
//             <SelectItem value="last-week">Last week</SelectItem>
//             <SelectItem value="this-month">This month</SelectItem>
//           </SelectContent>
//         </Select>
//       </CardHeader>
//       <Separator className="mb-6" />
//       <CardContent>
//         <ResponsiveContainer width="100%" height={350}>
//           <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//             <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
//             <XAxis 
//               dataKey="day" 
//               axisLine={false} 
//               tickLine={false} 
//               tick={{ fill: '#888', fontSize: 12 }}
//             />
//             <YAxis 
//               tickFormatter={formatYAxis} 
//               axisLine={false} 
//               tickLine={false} 
//               tick={{ fill: '#888', fontSize: 12 }}
//               width={50}
//               domain={[0, 'dataMax + 100000']}
//               ticks={[0, 100000, 500000, 1000000]}
//             />
//             <Line 
//               type="monotone" 
//               dataKey="purple" 
//               stroke="#8884d8" 
//               strokeWidth={3} 
//               dot={false} 
//               activeDot={{ r: 8 }}
//             />
//             <Line 
//               type="monotone" 
//               dataKey="blue" 
//               stroke="#82ca9d" 
//               strokeWidth={3} 
//               dot={false} 
//               activeDot={{ r: 8 }}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </CardContent>
//     </Card>
//   )
// }

