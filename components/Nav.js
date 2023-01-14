import NavStyles from '../styles/Nav.module.css'
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className={NavStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav