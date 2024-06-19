'use client'
import React, { useEffect } from 'react';
import styles from './CursorRing.module.css';

const CursorRing = () => {
    useEffect(() => {
        const handleMouseMove = (event: any) => {
            const cursorRing: any = document.querySelector(`.${styles.cursorRing}`);
            cursorRing.style.left = `${event.clientX}px`;
            cursorRing.style.top = `${event.clientY}px`;
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div className={styles.cursorRing}></div>;
};

export default CursorRing;
