"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "3D Printing & CAD Design",
    desc: "Prototyping, modeling, and custom 3D solutions for your ideas.",
    icon: "/globe.svg",
  },
  {
    title: "Custom School/College Projects",
    desc: "Tailored academic projects with expert guidance and support.",
    icon: "/file.svg",
  },
  {
    title: "Custom Drone Building",
    desc: "Design, build, and deploy drones for any application.",
    icon: "/window.svg",
  },
  {
    title: "Website Development & Hosting",
    desc: "Modern, responsive websites and reliable hosting services.",
    icon: "/next.svg",
  },
  {
    title: "IoT & Robotics Kits",
    desc: "Buy or resell innovative IoT and robotics kits for learning and projects.",
    icon: "/vercel.svg",
  },
  {
    title: "Import/Export Services",
    desc: "Seamless import/export solutions for tech products and components.",
    icon: "/globe.svg",
  },
];

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900">
      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center text-center py-24 px-4 gap-6">
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white mb-2 drop-shadow-md">
          Clyris Technologies
        </motion.h1>
        <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.7 }}
    className="text-lg sm:text-2xl text-gray-700 dark:text-gray-200 max-w-2xl text-center">
    India’s Trusted Tech Partner — Empowering 100+ Clients with Custom Projects, 3D Printing, Custom drones, and Cutting-Edge Tech Solutions
        </motion.p>
        <motion.a
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          href="https://wa.me/916360880248" // Replace with real WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-8 py-3 rounded-full bg-blue-600 text-white font-semibold text-lg shadow-lg hover:bg-cyan-500 transition-colors"
        >
          Chat on WhatsApp
        </motion.a>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-5xl mx-auto py-16 px-4">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-center mb-10 text-blue-700 dark:text-cyan-400">
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100 dark:border-gray-800 hover:scale-105 hover:shadow-2xl transition-transform"
            >
              <Image src={service.icon} alt={service.title} width={48} height={48} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-cyan-400">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="max-w-3xl mx-auto py-16 px-4 text-center">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold mb-6 text-blue-700 dark:text-cyan-400">
          About Us
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }} className="text-lg text-gray-700 dark:text-gray-200">
          Clyris Technologies is dedicated to driving innovation in technology and education. Our mission is to make advanced tech accessible, practical, and inspiring for everyone—from students to industry professionals. We value creativity, quality, and customer satisfaction, striving to deliver solutions that empower our clients to achieve more.
        </motion.p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto py-16 px-4 text-center">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold mb-6 text-blue-700 dark:text-cyan-400">
          Contact Us
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }} className="text-lg text-gray-700 dark:text-gray-200 mb-4">
          Have a question or want to start a project? Reach out to us on WhatsApp or email!
        </motion.p>
        <motion.a
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          href="https://wa.me/916360880248" // Replace with real WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-8 py-3 rounded-full bg-green-500 text-white font-semibold text-lg shadow-lg hover:bg-green-600 transition-colors"
        >
          Chat on WhatsApp
        </motion.a>
        <div className="mt-6 text-gray-600 dark:text-gray-400">
          <div>Email: <a href="mailto:clyrisweb@gmail.com" className="underline hover:text-blue-600">clyrisweb@gmail.com</a></div>
          <div>Phone: <a href="tel:+916360880248" className="underline hover:text-blue-600">+91 6360880248</a></div>
        </div>
      </section>
    </div>
  );
}
