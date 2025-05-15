import { auth } from "@/server/auth/auth";

const ProfilePage = async () => {
  const session = await auth();
  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};

export default ProfilePage;
