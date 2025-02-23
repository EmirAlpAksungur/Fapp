"use client";
import React from "react";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Box, CircularProgress } from "@mui/material";

import "@/styles/components/loading/loading.scss";

const Logout = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const doRequest = async (event) => {
    const res = await fetch("/api/logout", {
      method: "POST",
    });

    if (res.status === 200) {
      const nextUrl = searchParams.get("next");
      console.log(nextUrl);

      router.push(nextUrl ?? "/");
      router.refresh();
    } else {
      alert("Login failed");
    }
  };
  useEffect(() => {
    doRequest();
  }, []);

  return (
    <Box className="loading-component-box">
      <CircularProgress className="loading-component-box__progress" />
    </Box>
  );
};

export default Logout;
