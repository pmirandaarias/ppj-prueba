## E-commerce para PPJ.

Este repo es para (no daré la descripción mejor) aplicar al puesto de XXX en YYY.

Esá hecho en base a create-react-app, por lo que automáticamente se crea este readme con las instrucciones de instalación y uso de yarn o npm, pero que, de acuerdo a lo solicitado, se detallará en español y lo más preciso posible. El Readme por defecto lo dejaré al final.

### Features
El e-commerce está desarrollado con:
- React
- React-router
- Redux
- React-redux
- React-bootstrap
- [AmiiboAPI](https://www.amiiboapi.com/)

### Instrucciones de instalación

Es necesario tener `npm` o `yarn` (recomendado) instalados. Luego siga este paso a paso:

1. `git clone https://github.com/pmirandaarias/ppj-prueba.git`
2. `cd ppj-prueba`
3. `yarn`
4. `yarn start`

Se abrirá una ventana en su navegador por defecto en `localhost:3000` donde visualizará el proyecto corriendo (en modo desarollo).


### Consideraciones de desarrollo

- Indentación de 2 espacios (tab) como es el trend actual en React (ya que se anidan muchos componentes, el árbol crece).
- Comento las líneas que merecen más explicación para un futuro desarrollo o mantenimiento, no en exceso porque es prueba.
- Preferí trabajar más en estilos propios a mano que usar plantillas/librerías o css externos tipo Semantic, Bulma, Materialize etc (además par dejar fuera jQuery, y hacer todo con React). Para mejor control de cada elemento además que es bien preciso y corto en funcionalidades. Traté de hacer todo from the scratch, pero basado en react-bootstrap (Bootstrap 4) para algunos componentes, botones, etc. Lo de tratar de hacer a mano los estilos, div, colores, etc, es para dar una idea también de mis conocimientos bajo presión.
- Como fue pedido `react-router`, lo usé para dejar una vista separada del Cart.
- Iba a hacer un combobox con la opción de elegir "type" para la llamada a la API de Amiibo, pero no estaba dentro de lo pedido (además se me ocurrió más tarde), para así ir cambiando el tipo de data al traer. Filtré por un tipo de data para tener un json de regular longitud y no fuesen tantos datos para probar en ese ecommerce de prueba.
- Traté de dejar algunos componentes stateless y otros statefull donde se requería.
- "Checkout" no hace nada, por un momento al leer las instrucciones pensé que la API recibiría peticiones POST para enviar datos pero leí que como era educacional, sólo aceptaba GET, así que no tiene mayor funcionalidad el Checkout.
- No hice uso de styles inline, para dejar todo en clases.
- Sobre GIT, usé 3 tipos de rama: las 2 básicas `master` y `develop`, más otras de desarrollos puntuales (`features/`), siguiendo lo más cercano al patrón `git-flow`.

***

A continuación, ReadME original del `create-react-app`:

***


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
Code Splitting
### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
