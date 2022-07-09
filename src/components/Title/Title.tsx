import { useRef, useEffect } from "react";
import styles from "./Title.module.css";

export default function Title() {
    const moveArea = useRef<HTMLElement>(null);

    useEffect(() => {
        document.addEventListener("mousemove", (event) => {
            document
                .querySelectorAll<HTMLElement>("." + styles.eye)
                .forEach((eye) => {
                    let x = eye.offsetLeft + eye.offsetWidth / 2;
                    let y = eye.offsetTop + eye.offsetHeight / 2;
                    let rad = Math.atan2(event.pageX - x, event.pageY - y);
                    let rot = rad * (180 / Math.PI) * -1 + 180;
                    eye.style.transform = ` rotate(${rot}deg)`;
                });
        });
    }, []);

    return (
        <section ref={moveArea} className={styles.moveArea}>
            <div className={styles.container}>
                <div className={styles.letter}>M</div>
                <div className={styles.eye}></div>
                <div className={styles.eye}></div>
                <div className={styles.letter}>DWATCH</div>
            </div>
        </section>
    );
}
