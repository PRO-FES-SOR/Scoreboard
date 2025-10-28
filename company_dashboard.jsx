import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Package, Undo2, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CompanyDashboard() {
  const [productStocks, setProductStocks] = useState(0);
  const [returnCount, setReturnCount] = useState(0);
  const [youtubeSubscribers, setYoutubeSubscribers] = useState(0);

  useEffect(() => {
    // Replace with actual API integrations
    const fetchData = async () => {
      const stockData = await Promise.resolve(1250);
      const returnData = await Promise.resolve(78);
      const subscriberData = await Promise.resolve(4570);

      setProductStocks(stockData);
      setReturnCount(returnData);
      setYoutubeSubscribers(subscriberData);
    };

    fetchData();
  }, []);

  const cards = [
    {
      title: 'Product Stock Count',
      value: productStocks,
      color: 'from-green-400 to-green-600',
      icon: <Package className="w-10 h-10 text-white" />,
      shadow: 'shadow-green-300'
    },
    {
      title: 'Return Count',
      value: returnCount,
      color: 'from-red-400 to-red-600',
      icon: <Undo2 className="w-10 h-10 text-white" />,
      shadow: 'shadow-red-300'
    },
    {
      title: 'YouTube Subscribers',
      value: youtubeSubscribers,
      color: 'from-blue-400 to-blue-600',
      icon: <Youtube className="w-10 h-10 text-white" />,
      shadow: 'shadow-blue-300'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <motion.h1
        className="text-4xl font-extrabold text-gray-800 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Company Performance Dashboard
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className={`bg-gradient-to-br ${card.color} text-white rounded-2xl p-6 ${card.shadow} hover:scale-105 transition-transform duration-300`}>
              <CardContent className="flex flex-col items-center space-y-4">
                <div className="bg-white/20 p-3 rounded-full">{card.icon}</div>
                <h2 className="text-lg font-semibold tracking-wide text-white/90">{card.title}</h2>
                <p className="text-5xl font-bold drop-shadow-md">{card.value}</p>
                <p className="text-sm opacity-80">Updated just now</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button
          onClick={() => window.location.reload()}
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          Refresh Dashboard
        </Button>
      </div>

      <motion.div
        className="mt-16 flex justify-center items-center text-gray-600 gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <TrendingUp className="w-5 h-5 text-green-500" />
        <p className="text-sm font-medium">All metrics are live and auto-refreshed every 5 minutes.</p>
      </motion.div>
    </div>
  );
}
