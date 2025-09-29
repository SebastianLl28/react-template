import { useUserProfile } from "@/app/store/auth/auth.store";

const ProfilePage = () => {
  const userProfile = useUserProfile();

  return (
    <div>
      <h1>Profile</h1>
      <pre>{JSON.stringify(userProfile, null, 2)}</pre>
    </div>
  );
};

export default ProfilePage;
