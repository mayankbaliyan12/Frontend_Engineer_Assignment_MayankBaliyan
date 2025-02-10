import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaTrash } from "react-icons/fa";
import axios from "axios";
import CardContent from "./CardContent";
import ActionButton from "./ActionButton";
const API_URL = "https://jsonplaceholder.typicode.com/posts";
import "./styles.css";

const Card = ({ children }) => (
  <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-300 shadow-xl rounded-xl border border-gray-400 relative transform transition duration-300 hover:scale-105 hover:shadow-2xl">
    {children}
  </div>
);

export default function CardList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setItems(response.data.slice(0, 6)); // Fetch initial 6 items
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`${API_URL}/${id}`).then(() => {
      setItems(items.filter((item) => item.id !== id));
    });
  };

  const handleAdd = () => {
    const newItem = {
      id: Date.now(),
      title: "New Card",
      body: "This is a newly added card.",
    };
    setItems([newItem, ...items]);
  };

  return (
    <div style={{ background: "#89ABE3" }}>
      <ActionButton onClick={handleAdd}>
        <FaPlus />
      </ActionButton>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <AnimatePresence>
          {items.map((item, _index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <Card>
                <CardContent
                  title={item.title}
                  body={item.body}
                  description={item.description}
                  handleDelete={handleDelete}
                  index={_index}
                  id={item.id}
                />
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
