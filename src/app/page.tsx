"use client";

import { motion } from 'framer-motion';
import { ArrowUpIcon } from '@heroicons/react/24/solid';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Jan', TeamA: 4000, TeamB: 2400, TeamC: 2400 },
  { name: 'Feb', TeamA: 3000, TeamB: 1398, TeamC: 2210 },
  { name: 'Mar', TeamA: 2000, TeamB: 9800, TeamC: 2290 },
  { name: 'Apr', TeamA: 2780, TeamB: 3908, TeamC: 2000 },
  { name: 'May', TeamA: 1890, TeamB: 4800, TeamC: 2181 },
  { name: 'Jun', TeamA: 2390, TeamB: 3800, TeamC: 2500 },
  { name: 'Jul', TeamA: 3490, TeamB: 4300, TeamC: 2100 },
];

const pieData = [
  { name: 'America', value: 27.7 },
  { name: 'Asia', value: 34.7 },
  { name: 'Europe', value: 9.2 },
  { name: 'Africa', value: 28.4 },
];

const COLORS = ['#1E88E5', '#4CAF50', '#FFC107', '#F44336'];

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-gray-100"
    >
      <h1 className="text-3xl font-semibold mb-1 font-prompt pb-6">Welcome to NB-Hospital Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard title="Total Patients" value="1,234" icon="👥" color="bg-hospital-blue" />
        <StatCard title="Appointments Today" value="42" icon="📅" color="bg-hospital-green" />
        <StatCard title="Available Beds" value="15" icon="🛏️" color="bg-hospital-light-blue" />
        <StatCard title="Refer" value="3" icon="🚑" color="bg-hospital-red" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-4 rounded-lg shadow col-span-2"
        >
          <h2 className="text-xl font-semibold mb-4">Website Visits</h2>
          <p className="text-sm text-gray-500 mb-4">(+43%) than last year</p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} aria-label="Website Visits Line Chart">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="TeamA" stroke="#1E88E5" />
              <Line type="monotone" dataKey="TeamB" stroke="#4CAF50" />
              <Line type="monotone" dataKey="TeamC" stroke="#FFC107" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-4 rounded-lg shadow"
        >
          <h2 className="text-xl font-semibold mb-4">Current Visits</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart aria-label="Current Visits Pie Chart">
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </motion.div>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  icon: string;
  color: string;
}

function StatCard({ title, value, icon, color }: StatCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${color} text-white p-4 rounded-lg shadow-lg`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xl" role="img" aria-label={title}>{icon}</span>
        <span className="flex items-center">
          <ArrowUpIcon className="h-4 w-4 mr-1" />
          +2.6%
        </span>
      </div>
      <h3 className="text-2xl font-bold">{value}</h3>
      <p className="text-sm opacity-80">{title}</p>
    </motion.div>
  );
}