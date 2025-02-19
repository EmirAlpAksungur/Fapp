import SignIn from "./auth/signin";
import Table from "./table";

export default function Home({ currentUser }) {

  return (
    !currentUser ?
      <SignIn /> :
      <Table />
  );
} 