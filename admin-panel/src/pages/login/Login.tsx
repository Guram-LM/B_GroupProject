import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormStyle, LoginWrapper, SubmitButton, Title, ValidationPage } from "./style";
import { toast } from "react-toastify";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    
    if (email === "admin@admin.com" && password === "123456") {
      localStorage.setItem("auth", "true");
      navigate("/", { replace: true });
    } else {
      toast.info("Არასწორი ელფოსტა ან პაროლი");
    }
  };

  return (
    <ValidationPage>
        <LoginWrapper>
        <Title>Go to page</Title>
        <FormStyle onSubmit={handleLogin}>
            
            <input type="email" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
            
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password" />
        
            <SubmitButton type="submit"> Log In </SubmitButton>
        </FormStyle>
        </LoginWrapper>
    </ValidationPage>
    
  );
}