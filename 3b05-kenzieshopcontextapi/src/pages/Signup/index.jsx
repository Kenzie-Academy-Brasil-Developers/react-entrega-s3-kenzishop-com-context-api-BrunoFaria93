import {
    Container,
    Button,
    TextField,
    CssBaseline,
    Box,
    Typography,
    FormControl,
    RadioGroup,
    FormLabel,
    FormControlLabel,
    Radio,
  } from "@mui/material";
  import { Link } from "react-router-dom";
  import { yupResolver } from "@hookform/resolvers/yup";
  import * as yup from "yup";
  import { useForm } from "react-hook-form";
  import { useHistory } from "react-router-dom";
  import api from "../../services/api";
  import { useState } from "react";
  import { toast } from "react-hot-toast";
  import { motion } from "framer-motion";
  
  const Signup = () => {
    const schema = yup.object().shape({
      username: yup.string().required("Campo obrigatório!"),
      email: yup.string().required('E-mail obrigatório'),
      password: yup
        .string()
        .min(6, "Minimo de 6 digitos")
        .required("Campo obrigatório!"),
      passwordConfirm: yup
        .string()
        .oneOf([yup.ref("password")], "Senhas diferentes")
        .required("Campo obrigatório"),
    });
  
    const history = useHistory();
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });
  
    const handleSignIn = ({ username, email, password }) => {
      const user = { username, email, password };
      //  console.log(user);
      api
        .post('/users/', user)
        .then((response) => {
  
          console.log(response)
          toast.success("Cadastro feito com sucesso!");
          history.push("/login");
        })
        .catch((err) => toast.error("E-mail ou senha inválidos"));
    };
  
    return (
      <motion.div
        className="form-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className="header-login">
          <h1 className="logo-login">KenzieShop</h1>
        </header>
        <Container
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form className="form-cadastro" onSubmit={handleSubmit(handleSignIn)}>
            <div>
              <TextField
                {...register("username")}
                margin="normal"
                variant="outlined"
                label="Nome de usuário"
                size="small"
                color="primary"
                helperText={errors.username?.message}
                error={!!errors.username?.message}
              ></TextField>
            </div>
  
            <div>
              <TextField 
                  {...register("email")}
                  id="outlined-basic" 
                  fullWidth 
                  size="small"
                  label='E-mail' 
                  sx={{ mt:2, background: '#F5F5F5', color: '#999999' }}
                  helperText={errors.email?.message}
                  error={!!errors.email?.message}
                  />
            </div>
  
            <div>
              <TextField
                {...register("password")}
                margin="normal"
                variant="outlined"
                label="Senha"
                type="password"
                size="small"
                color="primary"
                helperText={errors.password?.message}
                error={!!errors.password?.message}
              ></TextField>
            </div>
            <div>
              <TextField
                {...register("passwordConfirm")}
                margin="normal"
                variant="outlined"
                label="Confirmar senha"
                type="password"
                size="small"
                color="primary"
                helperText={errors.passwordConfirm?.message}
                error={!!errors.passwordConfirm?.message}
              ></TextField>
            </div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  marginTop: 4,
                  padding: "7px 40px",
                  backgroundColor: "#403CAA",
                  "&:hover": {
                      backgroundColor: '#2a2877'
                  }
                }}
              >
                CADASTRAR
              </Button>
  
              <Link className="link-cadastro" to="/login">
                Voltar
              </Link>
            </Box>
          </form>
        </Container>
      </motion.div>
    );
  };
  export default Signup;
  