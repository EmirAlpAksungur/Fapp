import Link from "next/link";
import Image from "next/image";
import "@/styles/components/header/header.scss";
async function UnAuthHeader() {
  return (
    <header className="un-auth-header">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={56} height={56} />
      </Link>
    </header>
  );
}

export default UnAuthHeader;
