import { SquareCheckBig } from "@yamada-ui/lucide"
import styles from "./styles/logo.module.css"
import { M_PLUS_Rounded_1c } from "next/font/google";

const logoFont = M_PLUS_Rounded_1c({ subsets: ["latin"], weight: "500" });

type Size = "small" | "medium" | "large" | "extra-large"
const sizeStyles = {
    "small": styles.small,
    "medium": styles.medium,
    "large": styles.large,
    "extra-large": styles.extraLarge,
}

type Props = {
    size: Size,
}

const Logo = ({size} : Props) => {

    console.log();
    return(
        <h1 className={`${styles.logo} ${sizeStyles[size]}`}>
            
            <span className={`${styles.text} ${logoFont.className}`}><span className={styles.firstLetter}>T</span>od</span>
            <SquareCheckBig className={styles.icon}/>
            <span className={`${styles.text} ${logoFont.className}`}>List</span>
        </h1>
    )
}

export default Logo;