import { Card } from "@heroui/card";
import GoogleSignInButton from "./GoogleSignInButton";

const SignInPage = () => {
  return (
    <div className="gutter full-height flex items-center justify-center">
      <Card className="p-4">
        <GoogleSignInButton />
      </Card>
    </div>
  );
};

export default SignInPage;
