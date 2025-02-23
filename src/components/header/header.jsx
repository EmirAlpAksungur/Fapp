import React from "react";
import Link from "next/link";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";
import Image from "next/image";
const header = () => {
  return (
    <header className="header">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={56} height={56} />
      </Link>
      <Link href="/logout">
        <IconButton className="header__btn">
          <LogoutIcon fontSize="large" />
        </IconButton>
      </Link>
    </header>
  );
};

export default header;
