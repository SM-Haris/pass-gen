import HashEncryptForm from "./components/hashEncryptForm";
import HashVerifyForm from "./components/hashVerfiyForm";


const HashPage = () => {

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Hash Generator</h1>

        <HashEncryptForm/>
        <div className="bg-white h-[3px] m-[50px] w-full"></div>
        <HashVerifyForm/>
    </div>
  );
};

export default HashPage;
