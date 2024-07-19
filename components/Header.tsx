import { Button, Divider, Flex, Spacer } from "@yamada-ui/react";
import Logo from "@/components/Logo";
import styles from "./styles/header.module.css"

const Header = () => {
    return(
        <div>
            <Flex className={styles.header} align="center">
                <Logo size="small"/>
                <Spacer/>
                <div className={styles.loginButtonContainer}>
                    <Button variant="ghost" colorScheme="primary" size="sm">Sign in</Button>
                    <Button variant="outline" colorScheme="primary" size="sm">Sign up</Button>
                </div>
            </Flex>
            <Divider/>
        </div>
    )
}

export default Header;