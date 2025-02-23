import { verifyJwtToken } from "@/libs/auth";

const fromServer = async () => {
  const cookies = require("next/headers").cookies;
  const cookieList = await cookies();
  const { value: token } = cookieList.get("token") ?? { value: null };
  const verifiedToken = await verifyJwtToken(token);

  return verifiedToken;
};

export function useAuth() {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const getVerifiedToken = async () => {
      try {
        const res = await fetch("/api/auth");
        if (!res.ok) {
          throw new Error("Authentication failed");
        }
        const data = await res.json();
        setAuth(data.user);
      } catch (error) {
        setAuth(null);
      }
    };

    getVerifiedToken();
  }, []);

  return auth;
}

useAuth.fromServer = fromServer;
