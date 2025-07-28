import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const products = [
  {
    "product_id": 1,
    "product_title": "UltraBook Pro 14",
    "product_image": "https://i.ibb.co/8nZ0gTkF/ultra-Book-pro-14.jpg",
    "category": "laptop",
    "price": 899.99,
    "description": "14-inch lightweight laptop with Intel i7 and 16GB RAM",
    "Specification": ["Intel i7", "16GB RAM", "512GB SSD", "Windows 11"],
    "availability": true,
    "rating": 4.6
  },
  {
    "product_id": 2,
    "product_title": "SoundX Wireless Earbuds",
    "product_image": "https://i.ibb.co/rKLt8vK2/sondx.jpg",
    "category": "earphone",
    "price": 99.99,
    "description": "True wireless earbuds with noise cancelling and mic",
    "Specification": ["Bluetooth 5.2", "ANC", "20hr battery"],
    "availability": true,
    "rating": 4.3
  },
  {
    "product_id": 3,
    "product_title": "GearFit Smartwatch 2",
    "product_image": "https://i.ibb.co/bgbWXj9W/smart-Watch.jpg",
    "category": "smart-watch",
    "price": 129.99,
    "description": "Fitness-focused smartwatch with heart rate and GPS",
    "Specification": ["GPS", "Heart Rate Monitor", "Sleep Tracker"],
    "availability": false,
    "rating": 4.2
  },
  {
    "product_id": 4,
    "product_title": "Laptop Cooling Pad",
    "product_image": "https://i.ibb.co/FLP4BQB5/laptop.jpg",
    "category": "laptop accessories",
    "price": 54.99,
    "description": "USB-powered cooling pad for laptops up to 17 inches",
    "Specification": ["Dual Fans", "Adjustable Height", "LED Lights"],
    "availability": true,
    "rating": 4.0
  },
  {
    "product_id": 5,
    "product_title": "FlexBand Smartwatch",
    "product_image": "https://i.ibb.co/607yrtQT/flexband.jpg",
    "category": "smart-watch",
    "price": 79.99,
    "description": "Stylish smartwatch with step counter and notifications",
    "Specification": ["Step Tracker", "Notifications", "Waterproof"],
    "availability": true,
    "rating": 4.4
  },
  {
    "product_id": 6,
    "product_title": "X200 Wireless Earphones",
    "product_image": "https://i.ibb.co/kswczp9v/x200.jpg",
    "category": "earphone",
    "price": 64.99,
    "description": "Comfortable earphones with bass boost and touch control",
    "Specification": ["Bass Boost", "Touch Control", "Bluetooth 5.0"],
    "availability": false,
    "rating": 4.1
  },
  {
    "product_id": 7,
    "product_title": "ProDock USB-C Hub",
    "product_image": "https://i.ibb.co/QvNNmrM9/proDocs.jpg",
    "category": "laptop accessories",
    "price": 89.99,
    "description": "Multiport USB-C hub for laptops and tablets",
    "Specification": ["4K HDMI", "3 USB Ports", "SD/TF Card Reader"],
    "availability": true,
    "rating": 4.5
  },
  {
    "product_id": 8,
    "product_title": "AlphaBook X15",
    "product_image": "https://i.ibb.co/PvMCswgJ/alpha-Book.jpg",
    "category": "laptop",
    "price": 749.00,
    "description": "15.6-inch laptop with AMD Ryzen 5 and SSD storage",
    "Specification": ["Ryzen 5", "8GB RAM", "256GB SSD", "Full HD"],
    "availability": true,
    "rating": 4.2
  },
  {
    "product_id": 9,
    "product_title": "WatchMate Neo",
    "product_image": "https://i.ibb.co/Mxc3tg5b/watch-Mate.jpg",
    "category": "smart-watch",
    "price": 99.50,
    "description": "All-in-one smartwatch with call feature and music control",
    "Specification": ["Call Function", "Music Control", "Waterproof"],
    "availability": true,
    "rating": 4.6
  },
  {
    "product_id": 10,
    "product_title": "NoiseBlaster Earbuds",
    "product_image": "https://i.ibb.co/sdVSmjDx/noise-Blaster.jpg",
    "category": "earphone",
    "price": 59.99,
    "description": "Earbuds with 4 microphones and ultra low latency",
    "Specification": ["4 Mics", "Low Latency", "USB-C Charging"],
    "availability": false,
    "rating": 4.0
  },
  
  {
    "product_id": 12,
    "product_title": "ZenBook Ultra 13",
    "product_image": "https://i.ibb.co/9kTbDLKR/zeenBook.jpg",
    "category": "laptop",
    "price": 1099.99,
    "description": "13-inch ultra-thin laptop with OLED display",
    "Specification": ["Intel i5", "512GB SSD", "OLED", "Touchscreen"],
    "availability": true,
    "rating": 4.8
  },
  {
    "product_id": 13,
    "product_title": "NovaPhone Z1",
    "product_image": "https://i.ibb.co/6JRR8X7W/nova-Phone.jpg",
    "category": "phone",
    "price": 599.99,
    "description": "Smartphone with AMOLED display and fast charging",
    "Specification": ["6.5-inch AMOLED", "128GB Storage", "Fast Charging"],
    "availability": true,
    "rating": 4.4
  },
  {
    "product_id": 14,
    "product_title": "PixelOne Lite",
    "product_image": "https://i.ibb.co/PGGszncb/galaxy.jpg",
    "category": "phone",
    "price": 449.99,
    "description": "Budget phone with great camera and performance",
    "Specification": ["Dual Camera", "Snapdragon 695", "90Hz Display"],
    "availability": false,
    "rating": 4.2
  },
  {
    "product_id": 15,
    "product_title": "Galaxy Neo X",
    "product_image": "https://i.ibb.co/bMNTMqm8/galaxy2.jpg",
    "category": "phone",
    "price": 799.00,
    "description": "Premium Android phone with 5G and waterproof design",
    "Specification": ["5G", "Waterproof IP68", "8GB RAM"],
    "availability": true,
    "rating": 4.7
  },
  
  {
    "product_id": 17,
    "product_title": "NoteGo M5",
    "product_image": "https://i.ibb.co/j9rPbRq6/notego.jpg",
    "category": "phone",
    "price": 289.99,
    "description": "Mid-range phone with large battery and stylus support",
    "Specification": ["6000mAh Battery", "Stylus Support", "Triple Camera"],
    "availability": true,
    "rating": 4.1
  }
  
]


  return (
    <div style={{ width: "100%", height: 400, padding: "20px" }}>
      <h2 className="text-3xl font-bold mb-6 text-center">Product Price Comparison</h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={products}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          barSize={40}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="product_title" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="price" fill="#7c3aed" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
      

  


export default Statistics