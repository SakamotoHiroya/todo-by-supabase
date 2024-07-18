import { Button, Flex, Spacer } from "@yamada-ui/react";
import Logo from "@/components/Logo";
import styles from "./styles/header.module.css"

const Header = () => {
    return(
        <Flex className={styles.header} align="center">
            <Logo size="medium"/>
            <Spacer/>
            <div className={styles.loginButtonContainer}>
                <Button variant="ghost">Sign in</Button>
                <Button variant="outline">Sign up</Button>
            </div>
        </Flex>
    )
}

export default Header;