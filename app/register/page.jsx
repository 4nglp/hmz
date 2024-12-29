import RegisterForm from "./form";
const Register = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-900">
      <div className="shadow-xl p-4 bg-slate-800 rounded-xl">
        <h1 className="font-semibold text-2xl mb-5 text-center">
          Create your account
        </h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
