import signInWithGoogle from "../auth/services/signInWithGoogle";

const useCustomHook = () => {
  const login = async () => {
    try {
      const result = await signInWithGoogle();
      if (result) {
        localStorage.setItem("userImage", result.user.photoURL || "");
        localStorage.setItem("userName", result.user.displayName || "");
        localStorage.setItem("userEmail", result.user.email || "");
      } else {
        console.log("No user data available");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return { login };
};

export default useCustomHook;
