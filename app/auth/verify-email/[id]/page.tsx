import VerifyEmail from "@/Pages/verifyEmail";

const Page = (params: { id: string }) => {
  return (
    <main>
      <VerifyEmail params={params?.id} />
    </main>
  );
};

export default Page;
