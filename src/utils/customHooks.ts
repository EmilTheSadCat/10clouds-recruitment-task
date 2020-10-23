import { useState, useLayoutEffect } from 'react';

export const useWindowWidth = () => {
    const [size, setWidth] = useState([0, 0]);
    useLayoutEffect(() => {
        const updateWidth = () => {
            setWidth([window.innerWidth]);
        };
        window.addEventListener('resize', updateWidth);
        updateWidth();
        return () => window.removeEventListener('resize', updateWidth);
    }, []);
    return size;
};
