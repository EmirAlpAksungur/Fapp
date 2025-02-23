import { useAuth } from "@/hooks/useAuth";
import "@/styles/components/footer/footer.scss";
const Footer = async () => {
  const auth = await useAuth.fromServer();

  return (
    !auth && (
      <div className="footer">
        <div>This site is protected by Privacy Policy</div>
        <div> Terms and conditions</div>
      </div>
    )
  );
};

export default Footer;
