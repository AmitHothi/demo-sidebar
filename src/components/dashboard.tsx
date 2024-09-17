'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { PieChart, Pie, Cell } from 'recharts'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

// Mock data for the line chart
const lineData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 700 },
]

// Mock data for the pie chart
const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export function Dashboard() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "ai" }
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim() === "") return
    setMessages([...messages, { text: input, sender: "user" }])
    setInput("")
    // Simulating AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "Thank you for your message. How else can I help?", sender: "ai" }])
    }, 1000)
  }

  return (
    <div className="p-4 h-full">
      {/* <h1 className="text-2xl font-bold mb-4">Dashboard</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="col-span-1 md:col-span-2 lg:col-span-2">
          <CardHeader>
            <CardTitle>Line Graph</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%"  height={300}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pie Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle>Chat with AI</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-100% mb-4">
              {messages.map((message, index) => (
                <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                    {message.text}
                  </span>
                </div>
              ))}
            </ScrollArea>
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <Button onClick={handleSend}>Send</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}