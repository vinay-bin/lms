import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useLoginUserMutation , useRegisterUserMutation } from "@/features/api/authApi"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import showCustomToast from "@/utils/showCustomToast"


const Login = () => {

  const [currentTabValue , setCurrentTabValue ] = useState("login"); 
  
  const handleTabChange = (value) => {    
      if(value === "login"){
        registerReset();
      }else if(value === "signup"){
        loginReset();
      }
      setCurrentTabValue(value);    
  }


  // using useState for form :- const { name , value } = e.target; // Getting name and value from e.target

  const handleRegister = (type) => {
      const inputData = type === "signup" ? signupInput : loginInput;
  }

  const { register : registerForm, handleSubmit : handleRegisterSubmit, watch : registerWatch, reset : registerReset , formState: { errors : registerErrors, isSubmitting : registerIsSubmitting } } = useForm();

  const { register : loginForm, handleSubmit : handleLoginSubmit, reset:loginReset , formState: { errors : loginErrors, isSubmitting:loginIsSubmitting } } = useForm();

  const [ loginUser , { data : loginData , error : loginApiError , isLoading : loginIsLoading , isSuccess : loginIsSuccess } ] = useLoginUserMutation();

  const [ registerUser ,  { data : registerData , error : registerApiError , isLoading : registerIsLoading , isSuccess : registerIsSuccess } ] = useRegisterUserMutation();

  const registerApiErrorData = registerApiError && registerApiError.data?.errors;
  const loginApiErrorData = loginApiError && loginApiError.data?.errors;

  console.log([loginData , loginApiError , loginIsLoading , loginApiErrorData]);
  
  useEffect( () => { 
    if(registerData || loginData){
      let message = registerData ? registerData.message : ( loginData ? loginData.message : '' ); 
      showCustomToast(message , 'success' , 'top-center');
    }

    if(registerApiError || loginApiError){
      let message = registerApiError ? registerApiError.data.message : ( loginApiError ? loginApiError.data.message : '' ); 
      let data = registerApiError || loginApiError;
      showCustomToast(message , 'error' , 'top-center');
    }
  } , [registerData , registerApiError , loginData , loginApiError] )
  

  const onRegisterSubmit = async (data) => {
    await registerUser(data);
  }

  const onLoginSubmit = async (data) => {   
    await loginUser(data); 
  }

  return (
    <div className="h-screen grid place-content-center">
      <Tabs defaultValue={currentTabValue} className="w-[400px]" onValueChange={handleTabChange}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Create Account</CardTitle>
              <CardDescription>
                Create a new account and click signup when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <form onSubmit={handleRegisterSubmit(onRegisterSubmit)}>
                <div className="space-y-1">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" placeholder="Enter Full Name" {...registerForm("name", { required: { value: true, message: 'Full Name is required' }, maxLength: { value: 50, message: "Max 50 characters allowed" }, pattern: { value: /^[A-Za-z]+$/i, message: 'Only Alphabets allowed' } })} />
                  { (registerErrors.name || registerApiErrorData?.name ) && <p className="text-xs font-semibold text-red-500">{registerErrors.name?.message || registerApiErrorData?.name}</p>}
                </div>
                <div className="space-y-1 mt-4">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="text" placeholder="Enter Email" {...registerForm("email", { required: { value: true, message: 'Email is required' }, pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Enter valid email address' } })} />
                  { (registerErrors.email || registerApiErrorData?.email) && <p className="text-xs font-semibold text-red-500">{registerErrors.email?.message || registerApiErrorData?.email}</p>}
                </div>
                <div className="space-y-1 mt-4">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter Password" {...registerForm("password", { required: { value: true, message: "Password is required" }, pattern: { value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/, message: "Password must have at least 1 uppercase letter, 1 number, 1 special character, and be at least 8 characters long" } })} />
                  { (registerErrors.password || registerApiErrorData?.password) && <p className="text-xs font-semibold text-red-500">{registerErrors.password?.message || registerApiErrorData?.password }</p>}
                </div>
                <div className="space-y-1 mt-4">
                  <Label htmlFor="cpassword">Confirm Password</Label>
                  <Input id="cpassword" type="password" placeholder="Enter Confirm Password" {...registerForm("cpassword", {
                    required: { value: true, message: "Confirm Password is required" }, validate: (val) => {
                      if (registerWatch('password') != val) {
                        return "Your passwords do no match";
                      }
                    }
                  })} />
                  { (registerErrors.cpassword || registerApiErrorData?.cpassword) && <p className="text-xs font-semibold text-red-500">{registerErrors.cpassword?.message || registerApiErrorData?.cpassword}</p>}
                </div>

                <Button className={`mt-4 ${registerIsLoading ? "cursor-not-allowed" : "cursor-pointer"} `} disabled={ registerIsLoading && "disabled" } type="submit"> { registerIsLoading ? (<><Loader2 className="mr-2 h-4 w-4 animate-spain"/>Please Wait</>) : 'Signup' } </Button>

                {/* <Button className={`mt-4 ${registerIsSubmitting ? "cursor-not-allowed" : "cursor-pointer"} `} disabled={ registerIsSubmitting && "disabled" } type="submit"> { registerIsSubmitting ? 'Submitting' : 'Signup' } </Button> */}
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Login your password here. After signup, you'll be logged in.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
            <form onSubmit={handleLoginSubmit(onLoginSubmit)}>
              <div className="space-y-1">
                <Label htmlFor="loginEmail">Email</Label>
                <Input id="loginEmail" type="email" placeholder="Enter Email" {...loginForm("email", { required: { value: true, message: 'Email is required' }, pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Enter valid email address' } })} />
                { (loginErrors.email || loginApiErrorData?.email) && <p className="text-xs font-semibold text-red-500">{loginErrors.email?.message || loginApiErrorData?.email}</p>}
              </div>
              <div className="space-y-1 mt-4">
                <Label htmlFor="loginPassword">Password</Label>
                <Input id="loginPassword" type="password" placeholder="Enter Password" {...loginForm("password", { required: { value: true, message: 'Password is required' } })} />
                { (loginErrors.password || loginApiErrorData?.password ) && <p className="text-xs font-semibold text-red-500">{loginErrors.password?.message || loginApiErrorData?.password }</p>}
              </div>

                <Button className={`mt-4 ${loginIsLoading ? "cursor-not-allowed" : "cursor-pointer"} `} disabled={ loginIsLoading && "disabled" } type="submit"> { loginIsLoading ? (<><Loader2 className="mr-2 h-4 w-4 animate-spain"/>Please Wait</>) : 'Login' } </Button>
              {/* <Button className={`mt-4 ${loginIsSubmitting ? "cursor-not-allowed" : "cursor-pointer"} `} disabled={ loginIsSubmitting && "disabled" } type="submit"> { loginIsSubmitting ? 'Submitting' : 'Login' } </Button> */}
            </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Login;