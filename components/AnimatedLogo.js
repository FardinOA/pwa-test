import { useCycle, motion } from "framer-motion";
import React, { useEffect } from "react";

const itemsA = [1, 2, 3, 4];
const itemsB = [3, 1, 4, 2];
const itemsC = [4, 3, 2, 1];
const itemsD = [2, 4, 1, 3];

const colors = ["#f44", "#3f0", "#fb0", "#0ef"];
const AnimatedLogo = () => {
    const [items, setItems] = useCycle(itemsA, itemsB, itemsC, itemsD);

    useEffect(() => {
        setTimeout(() => setItems(), 1000);
    }, [items]);
    return (
        <div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto",
                    gridGap: 10,
                }}
            >
                {items.map((item) => (
                    <motion.div
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 5,
                            backgroundColor: colors[item - 1],
                        }}
                        key={item}
                        layout
                        transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 25,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default AnimatedLogo;
