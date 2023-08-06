import ResetPassword from "@/Pages/resetPassword";

type paramsProps = {
  username: string;
};

const Page = (params: paramsProps) => {
  return (
    <div>
      <ResetPassword params={params?.username} />
    </div>
  );
};

export default Page;
