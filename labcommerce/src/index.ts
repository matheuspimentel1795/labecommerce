import app from "./app";
import { createProduct } from "./endpoint/createProduct";
import { createPurchase } from "./endpoint/createPurchase";
import { createTrip } from "./endpoint/createTrip";
import { createUser } from "./endpoint/createUser";
import { getProducts } from "./endpoint/getProducts";
import { getTrip } from "./endpoint/getTrip";
import { getUser } from "./endpoint/getUser";
import { ordenarProduct } from "./endpoint/ordernarProduct";
import { purchaseUser } from "./endpoint/purchaseUser";

app.post("/addUser",createUser)
app.post("/createProduct",createProduct)

app.get("/getUser",getUser)
app.get("/getProducts",getProducts)

//--------------------->desafio<--------------------------

app.post("/createTrip",createTrip)
app.get("/gettrip",getTrip)

app.post("/createPurchase",createPurchase)

app.get("/order/:type",ordenarProduct)

app.get("/purchaseUser/:IDuser",purchaseUser)