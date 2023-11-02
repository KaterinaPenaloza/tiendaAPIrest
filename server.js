const express = require("express");
const app = express();
const dbVendedor = require("./db/vendedor");
const dbComprador = require("./db/comprador");
const dbProducto = require("./db/producto");
const dbTipoProducto = require("./db/tipoProducto");
const dbRequerimiento = require("./db/requerimientos");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

/********************** VENDEDOR ************************************** */
app.post("/vendedor", async (req, res) => {
    const results = await dbVendedor.createVendedor(req.body);
    res.status(201).json({ id: results[0]});
});

app.get("/vendedor", async (req, res) => {
    const vendedores = await dbVendedor.getAllVendedores();
    res.status(200).json({ vendedores });
});

app.get("/vendedor/:id", async (req, res) => {
    const vendedor = await dbVendedor.getVendedor(req.params.id);
    res.status(200).json({ vendedor });
});
app.patch("/vendedor/:id", async (req, res) => {
    const id = await dbVendedor.updateVendedor(req.params.id, req.body);
    res.status(200).json( { id });
});

app.delete("/vendedor/:id", async (req, res) => {
    await dbVendedor.deleteVendedor(req.params.id);
    res.status(200).json({ success: true });
});

/********************** COMPRADOR ************************************** */
app.post("/comprador", async (req, res) => {
    const results = await dbComprador.createComprador(req.body);
    res.status(201).json({ id: results[0]});
});

app.get("/comprador", async (req, res) => {
    const compradores = await dbComprador.getAllCompradores();
    res.status(200).json({ compradores });
});

app.get("/comprador/:id", async (req, res) => {
    const comprador = await dbComprador.getComprador(req.params.id);
    res.status(200).json({ comprador });
});
app.patch("/comprador/:id", async (req, res) => {
    const id = await dbComprador.updateComprador(req.params.id, req.body);
    res.status(200).json( { id });
});

app.delete("/comprador/:id", async (req, res) => {
    await dbComprador.deleteComprador(req.params.id);
    res.status(200).json({ success: true });
});

/********************** PRODUCTO ************************************** */
app.post("/producto", async (req, res) => {
    const producto = req.body;
    try {
      await dbProducto.createProducto(producto);
      res.status(201).json({ success: true });
    } catch (error) {
      if (error.code === 'ER_NO_REFERENCED_ROW_2') {
        res.status(400).json({ error: 'Clave foránea no válida' });
      } else {
        console.error(error);
        res.status(500).json({ error: "Error al crear el producto" });
      }
    }
  });


app.get("/producto", async (req, res) => {
    const producto = await dbProducto.getAllProducto();
    res.status(200).json({ producto });
});

app.get("/producto/:numeroVendedor/:idComprador/:idTipoProducto", async (req, res) => {
    const { numeroVendedor, idComprador, idTipoProducto } = req.params;
      const producto = await dbProducto.getProducto(numeroVendedor, idComprador, idTipoProducto);
      res.status(200).json({ producto });
});

app.patch("/producto/:numeroVendedor/:idComprador/:idTipoProducto", async (req, res) => {
    const { numeroVendedor, idComprador, idTipoProducto } = req.params;
    const producto = req.body;
    try {
      await dbProducto.updateProducto(numeroVendedor, idComprador, idTipoProducto, producto);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al actualizar el producto" });
    }
  });

app.delete("/producto/:numeroVendedor/:idComprador/:idTipoProducto", async (req, res) => {
    const { numeroVendedor, idComprador, idTipoProducto } = req.params;
    try {
      await dbProducto.deleteProducto(numeroVendedor, idComprador, idTipoProducto);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al eliminar el producto" });
    }
  });

/********************** TIPO PRODUCTO ************************************** */
app.post("/tipoProducto", async (req, res) => {
    const results = await dbTipoProducto.createTipoProducto(req.body);
    res.status(201).json({ id: results[0]});
});

app.get("/tipoProducto", async (req, res) => {
    const tipoProducto = await dbTipoProducto.getAllTipoProductos();
    res.status(200).json({ tipoProducto });
});

app.get("/tipoProducto/:id", async (req, res) => {
    const tipoProducto = await dbTipoProducto.getTipoProducto(req.params.id);
    res.status(200).json({ tipoProducto });
});
app.patch("/tipoProducto/:id", async (req, res) => {
    const id = await dbTipoProducto.updateTipoProducto(req.params.id, req.body);
    res.status(200).json( { id });
});

app.delete("/tipoProducto/:id", async (req, res) => {
    await dbTipoProducto.deleteTipoProducto(req.params.id);
    res.status(200).json({ success: true });
});
//*************************REQUERIMIENTO********************************* */
app.get("/requerimiento/:id", async (req, res) => {
    const requerimiento = await dbRequerimiento.requerimiento(req.params.id);
    res.status(200).json( {requerimiento} );
});
//*********************************************************************** */
app.get("/test", (req, res) => {
    res.status(200).json({ success: true });
});
/************************* SERVER *************************************** */
app.listen(1337, () => console.log("server is running on port 1337"));
