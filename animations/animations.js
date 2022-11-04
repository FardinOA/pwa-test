export const dropInFromTop = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "-100vh",
        opacity: 0,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
};

export const dropInFromBottom = {
    hidden: {
        y: "+100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "+100vh",
        opacity: 0,
    },
};

export const dropInFromRight = {
    hidden: {
        x: "+100vh",
        opacity: 0,
    },
    visible: {
        x: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        x: "+100vh",
        opacity: 0,
    },
};

export const dropInFromLeft = {
    hidden: {
        x: "-100vh",
        opacity: 0,
    },
    visible: {
        x: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        x: "-100vh",
        opacity: 0,
    },
};

export const newspaper = {
    hidden: {
        transform: "scale(0) rotate(720deg)",
        opacity: 0,
        transition: {
            delay: 0.3,
        },
    },
    visible: {
        transform: " scale(1) rotate(0deg)",
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
    exit: {
        transform: "scale(0) rotate(-720deg)",
        opacity: 0,
        transition: {
            duration: 0.3,
        },
    },
};

export const badSuspension = {
    hidden: {
        y: "-100vh",
        opacity: 0,
        transform: "scale(0) rotateX(-360deg)",
    },
    visible: {
        y: "-25vh",
        opacity: 1,
        transition: {
            duration: 0.2,
            type: "spring",
            damping: 15,
            stiffness: 500,
        },
    },
    exit: {
        y: "-100vh",
        opacity: 0,
    },
};

export const flip = {
    hidden: {
        transform: "scale(0) rotateX(-360deg)",
        opacity: 0,
        transition: {
            delay: 0.3,
        },
    },
    visible: {
        transform: " scale(1) rotateX(0deg)",
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
    exit: {
        transform: "scale(0) rotateX(360deg)",
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export const overlayVariants = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            duration: 0.3,
            delayChildren: 0.4,
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren",
            duration: 0.3,
            delay: 0.4,
        },
    },
};
