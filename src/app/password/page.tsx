import PasswordForm from "@/components/password/PasswordGenerateForm";
import { generatePasswordAction } from "./action";

const PasswordPage = () => {
  return (
    <>
      <p>Decrypt Page</p>
      <PasswordForm formAction={generatePasswordAction} />
    </>
  );
};

export default PasswordPage;
