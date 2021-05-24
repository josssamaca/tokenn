const express= require("express")
const morgan= require("morgan")
const exphbs = require("express-handlebars")
const path= require("path")
//inicio
const app=express();
//configuraciones
app.set("port",process.env.PORT || 4000);
app.set("views",path.join(__dirname,"views" ));
app.engine(".hbs", exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"),"layouts"),
    partialsDir: path.join(app.get("views"),"partials"),
    extname: ".hbs",
    helpers: require("./lib/handlebars")
    
}));
app.set("view engine",".hbs");

//peticiones 
app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//variables globales
app.use((req,res,next)=>{
    next();
});
//rutas
app.use(require("./routes"));
app.use(require("./routes/authentication"));
app.use("/links",require("./routes/links"));

app.use(require("./routes"));
app.use(require("./routes/authentication"));
app.use("/administrador",require("./routes/administrador"));

app.use(require("./routes"));
app.use(require("./routes/authentication"));
app.use("/links",require("./routes/links"));

app.use(require("./routes"));
app.use(require("./routes/authentication"));
app.use("/links",require("./routes/links"));


//rutas parcial
app.use("/menu", require("./routes/parcial/inicio"));
app.use("/clientes", require("./routes/parcial/clientes"));
app.use("/servicios", require("./routes/parcial/servicios"));
app.use("/ventas", require("./routes/parcial/ventas"));


//rutas quizz
app.use("/quizz", require("./routes/quizzz/view11"));
app.use("/quizz2", require("./routes/quizzz/view2"));
app.use("/quizz3", require("./routes/quizzz/view3"));
app.use("/quizz4", require("./routes/quizzz/view4"));


//ruta hbs

app.use("/productos", require("./routes/productos/productos"));



//public
app.unsubscribe(express.static(path.join(__dirname,"public")));
//inicia el server
app.use(express.static("./"))
app.listen(app.get("port"),()=>{
    console.log("server on port",app.get("port"));
});
