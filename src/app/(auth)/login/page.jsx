"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button, Grid2, InputLabel, TextField } from "@mui/material";
export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    const { success } = await res.json();

    if (success) {
      const nextUrl = searchParams.get("next");

      router.push(nextUrl ?? "/");
      router.refresh();
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="card">
      <div className="auth-box">
        <div className="auth-box__header">Giriş Yap</div>
        <form onSubmit={handleSubmit} className="auth-box__body">
          <Grid2 container rowGap={3}>
            <Grid2 size={12}>
              <InputLabel className="auth-box__body__label">
                Kullanıcı Adı
              </InputLabel>
              <TextField
                type="text"
                name="username"
                className="auth-box__body__text-field"
              />
            </Grid2>
            <Grid2 size={12}>
              <InputLabel className="auth-box__body__label">Parola</InputLabel>
              <TextField
                type="password"
                name="password"
                className="auth-box__body__text-field"
              />
            </Grid2>
            <Button type="submit" className="auth-box__body__btn">
              Giriş Yap
            </Button>
          </Grid2>
        </form>
      </div>
    </div>
  );
}
