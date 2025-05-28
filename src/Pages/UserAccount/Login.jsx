import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import login from "../../assets/Social/Animation - 1748425698021.json";

const Login = () => {
  const handelSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
  };
  return (
    <div>
      <div>
        <div className="hero my-20 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse gap-10">
            <div className="lg:w-[650px] w-[400px] lg:text-left">
              <Lottie animationData={login}></Lottie>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
              <h1 className="text-4xl text-center text-[#714b67] mt-4 font-bold">
                Log in now!
              </h1>
              <div className="card-body">
                <form onSubmit={handelSignIn} className="fieldset">
                  <label className="fieldset-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="fieldset-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>

                  <button className="btn btn-neutral bg-[#714b67] text-amber-100 border-none mt-4">
                    Log in
                  </button>
                  <div className="divider">OR</div>
                  <span className="text-center">
                    Dont't Have An Account{" "}
                    <Link to="/register">
                      <span className=" pt-5 underline text-blue-600">
                        Register
                      </span>
                    </Link>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
