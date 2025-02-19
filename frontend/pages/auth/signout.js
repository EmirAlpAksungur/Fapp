import React, { useEffect } from 'react'
import { useRouter } from "next/router";
import { deleteToken } from '@/utils/cookieSettings';
const signout = () => {
    const router = useRouter();
    useEffect(() => {
        deleteToken()
        router.push("/");
    }, [])
    return (
        <div>Çıkış yapılıyor</div>
    )
}

export default signout