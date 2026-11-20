# Ferretería Mega Las Malvinas

Catálogo público de 114 productos de ferretería en Barranca, Perú.

[Abrir el catálogo](https://2511113009-create.github.io/billneitor/ferreteria-las-malvinas/)

## Editar con otra IA

Trabaja en la carpeta `ferreteria-las-malvinas/` de la rama `gh-pages`. Para probar el catálogo en tu equipo, abre `index.html` de esa carpeta en el navegador. Si prefieres usar un servidor local, ejecuta `python -m http.server 8000` desde la raíz y abre `http://localhost:8000/ferreteria-las-malvinas/`.

| Archivo | Qué puedes cambiar |
| --- | --- |
| `index.html` | Cabecera, buscador, navegación y secciones |
| `styles.css` | Colores, distribución y presentación en celulares |
| `products.js` | Nombres, categorías, precios y descripciones |
| `app.js` | Búsqueda por nombre, favoritos, carrito y cantidades |
| `portada.js` | Fotografías y productos destacados en la portada |

Para publicar mejoras, abre un pull request dirigido a `gh-pages`. GitHub Pages publica los cambios aceptados en esa rama.

## Fotos y pedidos

Las fotografías se cargan desde la tienda de origen. Al pulsar **Continuar al pago**, el navegador lleva únicamente los códigos internos y las cantidades al servidor de pedidos. Allí el cliente completa sus datos y revisa el total. La tienda administra los pagos y las constancias en un despliegue independiente. Si cambias precios o productos, actualiza también el catálogo de ese servidor.

[Tienda de pedidos](https://ferreteria-las-malvinas.nobleferry2.chatgpt.site/)
