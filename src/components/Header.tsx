/*Os titulos devem ter a primeira letra maiúscula,
para não serem confundidos com elementos html
exemplo: 
<header/> !== <Header/>
*/
import styles from './Header.module.css'

import igniteLogo from '../assets/Ignite-logo.svg'

export function Header(){
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt='logo'/>
        </header>
    );
}