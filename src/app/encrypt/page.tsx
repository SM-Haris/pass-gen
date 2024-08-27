import EncryptForm from "@/components/encryption/EncryptForm";
import { encryptTextAction } from "./action";

const EncryptDataPage = () => {
  return (
    <>
      <p>Encrypt Page</p>
      <EncryptForm formAction={encryptTextAction} />
    </>
  );
};

export default EncryptDataPage;
