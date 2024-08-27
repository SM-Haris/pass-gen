import HashEncryptForm from "@/components/hash/HashForm";
import { createHash } from "./action";

const HashPage = () => {
  return (
    <>
      <p>Hash Page</p>
      <HashEncryptForm formAction={createHash} />
    </>
  );
};

export default HashPage;
