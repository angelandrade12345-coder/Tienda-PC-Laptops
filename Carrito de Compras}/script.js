//Datos de los productos
const PRODUCTS = [
  { id:"gpu1",categoria:"gpu",nombre:"NVIDIA GeForce RTX 4070 Ti",modelo:"ASUS ROG Strix",specs:"12GB GDDR6X, PCIe 4.0",precio:979.00,img:"imagenes/gpu1.png"},
  { id:"gpu2",categoria:"gpu",nombre:"NVIDIA GeForce RTX 3060",modelo:"MSI Ventus",specs:"12GB GDDR6",precio:279.00,img:"imagenes/gpu2.jpg"},
  { id:"cpu1",categoria:"cpu",nombre:"AMD Ryzen 9 7950X3D",modelo:"7950X3D",specs:"16 núcleos / 32 hilos",precio:699.00,img:"imagenes/cpu1.jpg"},
  { id:"cpu2",categoria:"cpu",nombre:"Intel Core i5-13400F",modelo:"i5-13400F",specs:"10 núcleos / 16 hilos",precio:183.00,img:"imagenes/cpu2.png"},
  { id:"mobo1",categoria:"mobo",nombre:"ASUS X670E Hero",modelo:"AM5 DDR5",specs:"PCIe 5.0, Wi-Fi 6E",precio:499.00,img:"imagenes/mobo1.png"},
  { id:"mobo2",categoria:"mobo",nombre:"MSI PRO Z690-A",modelo:"LGA1700 DDR4",specs:"PCIe 4.0",precio:189.00,img:"imagenes/mobo2.png"},
  { id:"ram1",categoria:"ram",nombre:"G.Skill Trident Z5 32GB",modelo:"2x16GB DDR5-6000",specs:"DDR5, alto rendimiento",precio:189.00,img:"imagenes/ram1.jpg"},
  { id:"ram2",categoria:"ram",nombre:"Corsair Vengeance LPX 16GB",modelo:"2x8GB DDR4-3200",specs:"DDR4",precio:69.00,img:"imagenes/ram2.jpg"},
  { id:"psu1",categoria:"psu",nombre:"Corsair RM850x",modelo:"850W Gold",specs:"Modular, 80+ Gold",precio:129.00,img:"imagenes/psu1.jpg"},
  { id:"psu2",categoria:"psu",nombre:"EVGA 650W",modelo:"650W Bronze",specs:"Eficiencia media",precio:79.00,img:"imagenes/psu2.jpg"},
  { id:"case1",categoria:"case",nombre:"Corsair iCUE 4000X RGB",modelo:"ATX",specs:"4 ventiladores RGB incluidos",precio:139.00,img:"imagenes/case1.webp"},
  { id:"case2",categoria:"case",nombre:"NZXT H510",modelo:"ATX",specs:"Diseño minimalista",precio:79.00,img:"imagenes/case2.webp"},
  { id:"cool1",categoria:"cool",nombre:"NZXT Kraken Elite 360",modelo:"Líquido 360mm",specs:"Pantalla LCD, RGB, gama alta",precio:259.00,img:"imagenes/cool1.jpeg"},
  { id:"cool2",categoria:"cool",nombre:"Cooler Master ML240L",modelo:"Líquido 240mm",specs:"RGB, eficiente",precio:89.00,img:"imagenes/cool2.jpg"},
  { id:"ssd1",categoria:"ssd",nombre:"Samsung 980 PRO 1TB",modelo:"NVMe M.2",specs:"Velocidad lectura 7000MB/s",precio:109.00,img:"imagenes/ssd1.jpeg"},
  { id:"ssd2",categoria:"ssd",nombre:"WD Blue SN570 512GB",modelo:"NVMe M.2",specs:"Lectura 3500MB/s",precio:49.00,img:"imagenes/ssd2.jpg"},
  { id:"ssd3",categoria:"ssd",nombre:"Seagate FireCuda 530 2TB",modelo:"NVMe PCIe 4.0",specs:"Vel. lectura 7300MB/s, gama alta",precio:179.00,img:"imagenes/ssd3.jpg"},
  { id:"ssd4",categoria:"ssd",nombre:"Crucial P3 Plus 1TB",modelo:"NVMe PCIe 4.0",specs:"Lectura 5000MB/s, gama media",precio:59.00,img:"imagenes/ssd4.jpg"},
  { id:"monitor1",categoria:"monitor",nombre:"Samsung Odyssey G4",modelo:"25'' FHD 240Hz",specs:"1ms, FreeSync Premium",precio:249.00,img:"imagenes/monitor1.jpg"},
  { id:"monitor2",categoria:"monitor",nombre:"ASUS ROG Swift PG32UQ",modelo:"32'' 4K 144Hz HDR",specs:"DisplayHDR 600, G-SYNC",precio:899.00,img:"imagenes/monitor2.jpg"},
  { id:"lap1",categoria:"lap",nombre:"MSI GE76 Raider",modelo:"i9 / RTX3080Ti",specs:"17.3'', 32GB RAM, 1TB SSD",precio:2499.00,img:"imagenes/lap1.jpg"},
  { id:"lap2",categoria:"lap",nombre:"MSI Thin 15",modelo:"Ryzen 9 / RTX4060",specs:"15.6'', 16GB RAM, 1TB SSD",precio:1109.00,img:"imagenes/lap2.jpg"},
  { id:"lap3",categoria:"lap",nombre:"ASUS ROG Zephyrus G14",modelo:"Ryzen 9 / RTX4080",specs:"16GB RAM, 1TB SSD",precio:1899.00,img:"imagenes/lap3.jpg"},
  { id:"lap4",categoria:"lap",nombre:"ASUS VivoBook 14",modelo:"i5 / Iris Xe",specs:"8GB RAM, 512GB SSD",precio:649.00,img:"imagenes/lap4.jpg"},
  { id:"teclado1",categoria:"periferico",nombre:"Logitech G Pro X",modelo:"Teclado Mecánico RGB",specs:"Switches intercambiables",precio:129.00,img:"imagenes/teclado1.jpeg"},
  { id:"teclado2",categoria:"periferico",nombre:"Razer Huntsman Mini",modelo:"60% Optical Keyboard",specs:"Switch óptico con sonido de click Raze, 60%",precio:150.00,img:"imagenes/teclado2.jpg"},
  { id:"mouse1",categoria:"periferico",nombre:"Razer Basilisk V3",modelo:"Mouse RGB",specs:"26000 DPI, cable Speedflex",precio:69.00,img:"imagenes/mouse1.jpg"},
  { id:"mouse2",categoria:"periferico",nombre:"Logitech G Pro X Superlight 2",modelo:"Mouse inalámbrico",specs:"60g, sensor HERO 2, gama alta",precio:159.00,img:"imagenes/mouse2.webp"},
  { id:"audifono1",categoria:"periferico",nombre:"HyperX Cloud II",modelo:"Audífonos",specs:"7.1 Surround, micrófono desmontable",precio:99.00,img:"imagenes/audifono1.jpeg"},
  { id:"audifono2",categoria:"periferico",nombre:"Astro A50 Wireless",modelo:"Audífonos inalámbricos",specs:"Dolby Audio, base de carga, gama alta",precio:299.00,img:"imagenes/audifono2.jpg"},
  { id:"micro1",categoria:"periferico",nombre:"Blue Yeti",modelo:"Micrófono USB",specs:"Condensador, 3 patrones",precio:129.00,img:"imagenes/micro1.jpeg"},
];


const TAX = 0.16;
let CART = JSON.parse(localStorage.getItem('tienda_cart') || '{}');


const formatUSD = v => `$${v.toFixed(2)}`;
const saveCart = () => localStorage.setItem('tienda_cart', JSON.stringify(CART));
const loadCart = () => CART = JSON.parse(localStorage.getItem('tienda_cart') || '{}');


function renderProducts(listado = PRODUCTS) {
  const contenedor = document.getElementById('lista-productos');
  const loader = document.getElementById('loader');
  loader.style.display = 'block';
  contenedor.innerHTML = '';

  setTimeout(() => {
    loader.style.display = 'none';
    listado.forEach(p => {
      const div = document.createElement('div');
      div.className = 'producto';
      div.innerHTML = `
        <img src="${p.img}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p><strong>Modelo:</strong> ${p.modelo}</p>
        <p>${p.specs}</p>
        <p><strong>Precio:</strong> ${formatUSD(p.precio)}</p>
        <div class="controls">
          <label>Cant: <input type="number" min="1" value="1" id="q-${p.id}"></label>
          <button onclick="addToCart('${p.id}')"><i class="fa-solid fa-cart-plus"></i> Agregar</button>
        </div>
      `;
      contenedor.appendChild(div);
    });
  }, 800);
}

//Carrito
function addToCart(id) {
  const qty = parseInt(document.getElementById('q-' + id).value) || 1;
  CART[id] = (CART[id] || 0) + qty;
  saveCart();
  renderCart();
  showToast();
}

function showToast() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function renderCart() {
  const tbody = document.querySelector('#tabla-carrito tbody');
  const msgVacio = document.getElementById('mensaje-vacio');
  tbody.innerHTML = '';
  let subtotal = 0, count = 0;

  for (const id in CART) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) continue;
    const qty = CART[id];
    const line = p.precio * qty;
    subtotal += line;
    count += qty;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${p.nombre}</td>
      <td><input type="number" min="1" value="${qty}" onchange="changeQty('${id}', this.value)"></td>
      <td>${formatUSD(p.precio)}</td>
      <td>${formatUSD(line)}</td>
      <td><button class="danger" onclick="removeItem('${id}')"><i class="fa-solid fa-xmark"></i></button></td>
    `;
    tbody.appendChild(tr);
  }

  const tax = subtotal * TAX;
  const total = subtotal + tax;
  document.getElementById('subtotal').textContent = `Subtotal: ${formatUSD(subtotal)}`;
  document.getElementById('iva').textContent = `IVA (16%): ${formatUSD(tax)}`;
  document.getElementById('total').innerHTML = `<strong>Total: ${formatUSD(total)}</strong>`;
  document.getElementById('cart-count').textContent = count;

  const tabla = document.getElementById('tabla-carrito');
  const totales = document.querySelector('.totales');
  const botones = document.querySelector('.botones');

  if (count === 0) {
    msgVacio.style.display = 'block';
    tabla.style.display = 'none';
    totales.style.display = 'none';
    botones.style.display = 'none';
  } else {
    msgVacio.style.display = 'none';
    tabla.style.display = 'table';
    totales.style.display = 'block';
    botones.style.display = 'flex';
  }
}

function changeQty(id, val) {
  CART[id] = parseInt(val) || 1;
  if (CART[id] <= 0) delete CART[id];
  saveCart();
  renderCart();
}

function removeItem(id) {
  delete CART[id];
  saveCart();
  renderCart();
}

function clearCart() {
  CART = {};
  saveCart();
  renderCart();
}

function goCheckout() {
  saveCart();
  window.open('checkout.html', '_blank');
}

//Filtros y busquedas
function aplicarFiltros() {
  const filtro = document.getElementById('filtro').value;
  const resultado = PRODUCTS.filter(p => {
    return filtro === 'todos' || p.categoria === filtro;
  });
  renderProducts(resultado);
}

//Eventos
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  renderProducts();
  renderCart();

  document.getElementById('vaciar').addEventListener('click', clearCart);
  document.getElementById('checkout').addEventListener('click', goCheckout);
  document.getElementById('filtro').addEventListener('change', aplicarFiltros);
});


localStorage.setItem('productos_data', JSON.stringify(PRODUCTS));
