import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";
import Image from "next/image";

const signin = ({ providers }) => {
  return (
    <div>
      <div>
      <Header />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <img className="mt-56 w-80" src="https://links.papareact.com/ocw" alt="" />
        <p className="text-xs italic">
          This is not a real app educational purpose only
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div />
    </div>
  );
};

export default signin;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
