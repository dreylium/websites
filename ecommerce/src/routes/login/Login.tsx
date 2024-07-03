import { useState } from 'react';
import Picture from '@ui/components/Picture';
import { Google } from '@ui/assets/Icons';
import { Link } from 'react-router-dom';

export default function Page() {
  const [mode, setmode] = useState('login');

  return (
    <div className="layout-px">
      <div className="mx-auto grid max-w-screen-2xl gap-x-10 py-16 xl:grid-cols-[auto_1fr] xl:p-0">
        <Picture src="/login/side_image.png" alt="login" className="hidden xl:block" />
        {mode === 'login' && (
          <div className="grid items-center">
            <section className="mx-auto w-full max-w-[370px]">
              <h1 className="mb-6 font-heading-medium text-24 lg:text-36">Login to Exlusive</h1>
              <p className="mb-2 text-sm lg:text-base">Enter your details below</p>
              <form
                action="/api/login"
                method="post"
                className="grid gap-y-10 py-10"
                onSubmit={(event) => event.preventDefault()}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email Adress"
                  className="border-b border-black px-2 pb-2"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="border-b border-black px-2 pb-2"
                />
                <div className="grid gap-y-4">
                  <button
                    type="submit"
                    className="rounded bg-clr-ButtonRed py-3 font-medium text-white md:h-12"
                  >
                    Login
                  </button>
                  <Link
                    to="https://google.com"
                    className="flex flex-wrap items-center justify-center gap-x-4 rounded border border-[#999999] px-2 py-2 text-center md:h-12"
                  >
                    <Google />
                    Login with Google Account
                  </Link>
                </div>
                <div className="flex flex-col items-start gap-y-4">
                  <span>
                    Don&apos;t have an account?
                    <button
                      type="button"
                      onClick={() => setmode('signup')}
                      className="ms-1 text-clr-Secondary2"
                    >
                      Sign up
                    </button>
                  </span>
                  <button
                    type="button"
                    onClick={() => setmode('forgot')}
                    className="text-clr-Secondary2"
                  >
                    Forgot Password
                  </button>
                </div>
              </form>
            </section>
          </div>
        )}
        {mode === 'signup' && (
          <div className="grid items-center">
            <section className="mx-auto w-full max-w-[370px]">
              <h1 className="mb-6 font-heading-medium text-24 lg:text-36">Create an account</h1>
              <p className="mb-2 text-sm lg:text-base">Enter your details below</p>
              <form
                action="/api/signup"
                method="post"
                className="grid gap-y-10 py-10"
                onSubmit={(event) => event.preventDefault()}
              >
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="border-b border-black px-2 pb-2"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Adress"
                  className="border-b border-black px-2 pb-2"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="border-b border-black px-2 pb-2"
                />
                <input
                  type="repassword"
                  name="repassword"
                  placeholder="Repeat Password"
                  className="border-b border-black px-2 pb-2"
                />
                <div className="grid grid-rows-[repeat(2,3.5rem)] gap-y-4">
                  <button
                    type="submit"
                    className="rounded bg-clr-ButtonRed px-12 py-4 font-medium text-white"
                  >
                    Create Account
                  </button>
                  <Link
                    to="https://google.com"
                    className="flex items-center justify-center gap-x-4 rounded border border-[#999999] py-4"
                  >
                    <Google />
                    Login with Google Account
                  </Link>
                </div>
                <span>
                  Already have account?
                  <button
                    type="button"
                    onClick={() => setmode('login')}
                    className="ms-1 text-clr-Secondary2"
                  >
                    Login
                  </button>
                </span>
              </form>
            </section>
          </div>
        )}
        {mode === 'forgot' && (
          <div className="grid items-center">
            <section className="mx-auto w-full max-w-[370px]">
              <h1 className="mb-6 font-heading-medium text-24 lg:text-36">Forgot Password</h1>
              <p className="mb-2 text-sm lg:text-base">Enter your Email Address</p>
              <form
                action="/api/forgotpassword"
                method="post"
                className="grid gap-y-10 py-6"
                onSubmit={(event) => event.preventDefault()}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email Adress"
                  className="border-b border-black px-2 pb-2"
                />
                <button
                  type="submit"
                  className="rounded bg-clr-ButtonRed px-12 py-4 font-medium text-white"
                >
                  Send Reset Link
                </button>
              </form>
              <button
                type="button"
                onClick={() => setmode('signup')}
                className="text-clr-Secondary2"
              >
                Back to login?
              </button>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
