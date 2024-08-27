import DecryptForm from "@/components/encryption/DecryptForm";
import { decryptTextAction } from "./action";

const DecryptDataPage = () => {
  return (
    <>
      <p>Decrypt Page</p>
      <DecryptForm formAction={decryptTextAction} />
    </>
  );
};

export default DecryptDataPage;
