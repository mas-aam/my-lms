import Link from 'next/link';
import styles from '../lokal/styles/navbar.module.css';
import Image from 'next/image';
import { FaBookReader, FaGraduationCap, FaHome, FaCog } from "react-icons/fa";


const Navbar = () => {

    const navs = [{
            'id': '1',
            'menu':'Beranda',
            'href':'/beranda',
            'icon': <FaHome  className="w-4 h-7 text-black"/>,
            'selected': styles.selected
        },
        {
            'id': '2',
            'menu':'Kelas',
            'href':'/kelas',
            'icon':<FaBookReader  className="w-4 h-7 text-black"/>,
            'selected': ''
        },
        {
            'id': '3',
            'menu':'Mahasiswa',
            'href':'/mahasiswa',
            'icon':<FaGraduationCap  className="w-4 h-7 text-black"/>,
            'selected': ''
        },
        {
            'id': '4',
            'menu':'Pengaturan',
            'href':'/pengaturan',
            'icon':<FaCog  className="w-4 h-7 text-black"/>,
            'selected': ''
        }
    ];

    const menuNav = navs.map((menu)=>
                            <li className={styles.list} key={menu.id}>
                                <Link href={menu.href}>
                                    <a className="flex flex-row px-5">
                                            {menu.icon}
                                        <div className={styles.listText}>{menu.menu}</div>
                                    </a>
                                </Link>
                            </li>
    );

    return ( 
        <div>
            <div className={styles.navbar} >
                    <div className={styles.logo}>
                        <Link href="/beranda">
                            <a>
                            <Image
                                src="/img/logo.png" 
                                alt="Logo UNSIA"
                                width={170}
                                height={55}
                            />
                            </a>
                        </Link>
                    </div>
                    <div className={styles.nav}>
                        <ul className={styles.unList}>
                            {menuNav}
                        </ul>
                    </div>
            </div>
        </div>
     );
}
 
export default Navbar;