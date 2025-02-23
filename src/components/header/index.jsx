import { useAuth } from "@/hooks/useAuth";
import Header from "./header";
import UnAuthHeader from "./unAuthHeader";

async function Index() {
  const auth = await useAuth.fromServer();

  return auth ? <Header /> : <UnAuthHeader />;
}

export default Index;
