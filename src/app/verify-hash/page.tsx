import HashVerifyForm from "@/components/hash/VerifyHashFrom";
import { verifyHash } from "./action";

const VerifyHashPage = () => {
  return (
    <>
      <p>Verify Hash Page</p>
      <HashVerifyForm formAction={verifyHash} />
    </>
  );
};

export default VerifyHashPage;
