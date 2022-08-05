import React from "react";

const LoginForm = () => {
  return (
    <div className="pt-28">
      <div className="text-center max-w-sm mx-auto p-10 bg-white border">
        <h1 className="text-4xl">Fake Instagram</h1>
        <form className="flex flex-col m-5 gap-5">
          <input
            placeholder="Phone number, username or email address"
            className="bg-[#FAFAFA] border p-1 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-[#FAFAFA] border p-1 rounded"
          />
          <input type="submit" value="Log In" className="bg-[#0095F6] border p-1 rounded" />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
