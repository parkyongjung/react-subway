import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './menuItem';
import { routes } from '../../router/router';

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

export const Navigation = () => {
    React.useEffect(() => {
        console.log(routes.length);
    }, []);

    return (
        <>
            <motion.ul variants={variants}>
                {routes.map((i) => (
                    <MenuItem i={i.name} key={i.name} />
                ))}
            </motion.ul>
        </>
    );
};
