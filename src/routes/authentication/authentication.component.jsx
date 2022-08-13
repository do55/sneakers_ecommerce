import "./authentication.styles.scss";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import authSneaker from "../../assets/auth/authPage.jpg";
import Button from "../../components/button/button.component";
import {
  signInWithGooglePopup,
  signInWithFacebookPopup,
  signInWithGithubPopup,
} from "../../utils/firebase/firebase.utils";

const Authentication = () => {
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const signInWithFacebook = async () => {
    try {
      await signInWithFacebookPopup();
    } catch (error) {
      console.log(error.message);
    }
  };

  const signInWithGithub = async () => {
    try {
      await signInWithGithubPopup();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="authentication-container">
      <img className="authImg" src={authSneaker} alt="sneaker" />
      <SignInForm />
      <SignUpForm />
      <div className="buttons-auth">
        <Button type="button" buttonType="google" onClick={signInWithGoogle}>
          GOOGLE
        </Button>
        <Button
          type="button"
          buttonType="facebook"
          onClick={signInWithFacebook}
        >
          FACEBOOK
        </Button>
        <Button type="button" buttonType="github" onClick={signInWithGithub}>
          GITHUB
        </Button>
      </div>
    </div>
  );
};

export default Authentication;
