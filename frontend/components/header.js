import Link from 'next/link';
import "../styles/header.css"
export default ({ currentUser }) => {
  return (

    <nav className='header' style={{
      backgroundColor: !currentUser ? "transparent" : "#1e1e1e"
    }}>
      <Link className="header-brand" href="/">
        Logo - ProjeName
      </Link>

      {currentUser && <Link className="header-icon" href={"/auth/signout"}>
        Çıkış
      </Link>}
    </nav>
  );
};
