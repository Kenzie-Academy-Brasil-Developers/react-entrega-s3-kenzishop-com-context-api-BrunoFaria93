import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { Container, Button, TextField, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import api from "../../services/api";
import { motion } from "framer-motion";
import { useAuth } from "../../providers/AuthContext";

const Login = () => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState(false);

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 digitos")
      .required("Senha obrigatório"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { signIn } = useAuth();

  const onSubmit = (data) => {
    setLoading(true);

    signIn(data)
      .then((_) => {
        setLoading(false)
        console.log(data)
        toast.success(`Bem-vindo(a), ${data.username}!`)
        history.push('/')
      })
      .catch((err) => {
        console.log(err)
        toast.error("Username ou senha inválidos");
        setLoading(false);
        
      });
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
          alignItems: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
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
              className="input-login"
            ></TextField>
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
              className="input-login"
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
                  backgroundColor: "#2a2877",
                },
              }}
            >
              Entrar
            </Button>

            <Link className="link-cadastro" to="/signup">
              Cadastrar nova conta
            </Link>
          </Box>
        </form>
        {error && <span> Usuario ou senha incorretas! </span>}
      </Container>
    </motion.div>
  );
};

export default Login;
