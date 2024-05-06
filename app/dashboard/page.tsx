"use client"

import React, {useEffect, useState} from 'react';
import { motion, useAnimation } from 'framer-motion'

const getRandomTransformOrigin = () => {
    const value = (16 + 40 * Math.random()) / 100;
    const value2 = (15 + 36 * Math.random()) / 100;
    return {
        originX: value,
        originY: value2
    };
};

const getRandomDelay = () => -(Math.random() * 0.7 + 0.05);

const randomDuration = () => Math.random() * 0.07 + 0.23;

const variants = {
    start: (i: number) => ({
        rotate: i % 2 === 0 ? [-1, 1.3, 0] : [1, -1.4, 0],
        transition: {
            delay: getRandomDelay(),
            repeat: Infinity,
            duration: randomDuration()
        }
    }),
    reset: {
        rotate: 0
    }
};


export default function Dashboard() {
    const [campaignSent, setCampaignSent] = useState(false);
    const [showText, setShowText] = useState(false);
    const [sent, setSent] = useState(false);
    const [bombDropped, setBombDropped] = useState(false);

    const handleButtonClick = () => {
        setBombDropped(true);
        // Simulating the time it takes for the bomb to drop to the bottom
        setTimeout(() => {
            setCampaignSent(true);
        }, 2000); // Adjust the time according to your animation duration

        if (!sent) {
            console.log("Sending Request")
            fetch('/api/event', {
                method: 'GET', // or 'GET'
                headers: {
                    'Content-Type': 'application/json',
                }
                // You can add the request body if needed
                // body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch((error) => {
                    console.error('Error:', error);
                });
            setSent(true);
        }
    };

    const control = useAnimation()

    useEffect(() => {
        control.start("start");
    })

    return (
        // <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        //   Dashboard
        // </div>
        <div className="relative h-screen flex justify-center items-center">
            <div className="absolute top-0 right-0 mt-4 mr-4">
                {/* Button */}
                <button
                    className="bg-red-500 hover:bg-red-600 text-white text-3xl font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                    onClick={handleButtonClick}>
                    START THE CAMPAIGN
                </button>
            </div>
            {!bombDropped && (
                <motion.div
                    initial={{ y: 0, scale: 1.1, rotate: -10 }}
                    animate={control}
                    variants={variants}
                    transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: .01
                    }}
                    className="absolute top-0 transform transition-transform duration-500"
                >
                    <img src="/Bomb.png" alt="Bomb" className="h-20" />
                </motion.div>
            )}
            {/* Bomb */}
            {bombDropped && (
                <motion.div
                    initial={{y: -225, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 1}}
                    className="absolute top-64 transform transition-transform duration-500"
                >
                    <img src="/Bomb.png" alt="Bomb" className="h-20"/>
                </motion.div>
            )}
            {/* Explosion animation */}
            {campaignSent && (
                <motion.div
                    initial={{scale: 0}}
                    animate={{scale: 5}}
                    transition={{delay: 0, duration: 1}}
                    onAnimationComplete={() => setShowText(true)} // Set campaignSent to true after the explosion animation completes
                    className="absolute top-64 transform transition-transform duration-500"
                >
                    <img src="/Explosion.png" alt="Explosion" className="h-40"/>
                </motion.div>
            )}
            {/* Text displaying after campaign is sent */}
            {showText && (
                <div className="absolute top-64 text-white text-4xl text-center bg-gray-900 p-4">
                    Campaign Sent!
                </div>
            )}
        </div>
    );
}
