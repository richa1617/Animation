import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ fontSize: "1rem" }}
      animate={{ fontSize: "3rem", color: "blue" }}
      transition={{ type: "spring", delay: 1 }}
    >
      <h1>Hello world</h1>
    </motion.div>
  );
}
