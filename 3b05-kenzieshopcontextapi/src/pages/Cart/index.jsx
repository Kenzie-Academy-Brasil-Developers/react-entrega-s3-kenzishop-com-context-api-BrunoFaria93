import {
  Container,
  Button,
  TextField,
  CssBaseline,
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { CardActions, Card, CardContent } from "@mui/material";
import { useHistory } from "react-router-dom";
import formatValue from "../../utils/formatValue";
import { CardContainer, Container404, Image } from "./styles";
import Header from "../../components/Header";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { useAuth } from "../../providers/AuthContext";
import { useCart } from "../../providers/cart/cart";
import { CartContext, removeFromCart } from "../../providers/cart/cart";
import { useContext } from "react";
const useStyles = makeStyles({
  table: {
    maxWidth: 750,
    marginTop: "25px",
    margin: "15px",
    minHeight: 200,
  },
  root: {
    marginTop: "25px",
    minWidth: 275,
    maxHeight: 250,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginTop: "15px",
    marginBottom: "15px",
    justifyContent: "center",
  },
});

function Cart() {
  const {cart} = useCart();
  const {removeFromCart} = useContext(CartContext);
  const classes = useStyles();
  const history = useHistory();
  const subtotal = formatValue(
    cart.reduce((product, acc) => acc.price + product, 0).toFixed(2)
  );

  const finalizarCompra = () => {
    localStorage.clear();
    history.push("/");
    toast.success(`Compra realizada com sucesso!`);
    setTimeout(function () {
      window.location.reload(false);
    }, 500);
  };

  if (!cart.length) {
    return (
      <motion.div
        className="form-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <Container404>
          <div>
            <h1 className="msg404">
              {" "}
              Sem produtos no carrinho, que tal ir as compras?
            </h1>
            <Button
              onClick={() => history.push("/")}
              variant="contained"
              color="primary"
              size="large"
              sx={{
                backgroundColor: "#403CAA",
              }}
            >
              Bora!
            </Button>
          </div>
        </Container404>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="form-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TableContainer
          component={Paper}
          className={classes.table}
          id="tabelona"
        >
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Produto</strong>
                </TableCell>
                <TableCell> </TableCell>
                <TableCell align="right">
                  <strong>Preço</strong>
                </TableCell>
              </TableRow>
              <TableRow>
                <ul>
                  {cart.map((product) => (
                    <li key={product.id} className="li-cart">
                      <div className="div-cart">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="cart-img"
                        />
                        <div className='preco-remove'>
                        <span className="span-cart">
                          {product.priceFormatted}
                          </span>
                          <button className='remove-button' onClick={() => removeFromCart(product)}>remover</button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((product) => {
                <TableRow key={product.title}>
                  <TableCell>
                    <Image src={product.image} alt="Produto" />
                  </TableCell>
                  <TableCell>
                    {product.title}
            
                  </TableCell>

                  <TableCell align="right">{product.priceFormatted}</TableCell>
                </TableRow>;
             
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <Card>
          <CardContent>
            <Typography variant="h6" component="strong">
              <strong>Resumo do pedido</strong>
            </Typography>
            <CardContainer>
              <h4>{cart.length} Produto(s)</h4>
              <h4>{subtotal}</h4>
            </CardContainer>
          </CardContent>
          <CardActions className={classes.pos}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                backgroundColor: "#403CAA",
                "&:hover": {
                  backgroundColor: "#2a2877",
                },
              }}
              onClick={() => finalizarCompra()}
            >
              Finalizar o pedido
            </Button>
          </CardActions>
        </Card>
      </Container>
    </motion.div>
  );
}

export default Cart;
