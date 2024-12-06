import { Form, Formik } from "formik";
import { roundClockLogo, adminbr, adminbl, admintr } from "../../assets";
import nexusLogoIcon from "../../assets/images/nexusLogoIcon.jpg";
import { useNavigate } from "react-router-dom";
import CustomToast from "../../components/CustomToast";
import CustomInput from "../../components/CustomInput";
import { initialValues, Schemas } from "../../utils/validationShema";
import { FaArrowRight } from "react-icons/fa";
import { adminLogin } from "../../services/auth";
import { useAdmin } from "../../context/AdminContext";
import { toast } from "react-toastify";

function AdminLogin() {
  const { login } = useAdmin();
  const navigate = useNavigate();

  const handleSubmit = async (
    values,
    { setSubmitting, setFieldError, resetForm }
  ) => {
    try {
      setSubmitting(true);
      const response = await adminLogin(values);
      login(response);
      resetForm();
      toast(<CustomToast message={response.message} />);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      if (error.message) {
        setFieldError("email", error.message);
      } else {
        setFieldError("email", "Something went wrong. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F6F0ED] relative overflow-hidden">
      <div className="flex flex-col justify-center items-center min-h-screen gap-8 mx-auto px-4">
        <img
          src={roundClockLogo}
          alt="Round o' Clock Logo"
          className="w-24 sm:w-32"
        />

        <div className="bg-[#FFFFFF] w-full max-w-[400px] py-8 sm:py-12 px-4 sm:px-6 rounded-md">
          <div className="flex items-center justify-center mb-4">
            <img
              src={nexusLogoIcon}
              alt="nexus-logo-icon"
              className="w-12 h-12"
            />
          </div>
          <h1 className="text-center md:text-2xl sm:text-xl font-semibold text-[#1F2127]">
            Welcome Back
          </h1>
          <p className="md:text-sm text-sm text-[#475467] text-center">
            Log in to your account
          </p>
          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues.admin}
            validationSchema={Schemas.adminSchema}
          >
            {({ isSubmitting, errors, touched }) => {
              return (
                <Form className="mt-8 space-y-8 sm:mt-12">
                  <div className="space-y-6">
                    <CustomInput
                      name="email"
                      type="email"
                      label="Email"
                      placeholder="Enter your email"
                      error={touched.email && errors.email}
                    />
                    <CustomInput
                      name="password"
                      type="password"
                      label="Password"
                      placeholder="Enter your password"
                      error={touched.password && errors.password}
                    />
                  </div>
                  <button
                    type="submit"
                    className="border rounded-md py-2 px-10 bg-[#FEDC44] flex items-center justify-center gap-1 text-xs sm:text-sm font-semibold w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Logging in..." : "Login"}
                    <span>
                      <FaArrowRight />
                    </span>
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
      <img src={admintr} className="absolute top-0 right-0 w-20 md:w-40" />
      <img
        src={adminbr}
        className="sm:absolute left-0 bottom-0 md:block md:w-30 top-[320px]"
      />
      <img src={adminbl} className="absolute bottom-0 right-0 w-[130px]" />
    </div>
  );
}

export default AdminLogin;
