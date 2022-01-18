Para poder ejecutar las APIs se deben completar los siguientes pasos:

    - Instarlar los siguientes paquetes:
        - Dentro de "Node":

        - pip install Flask
            - npm install express mongodb
            - npm install --save-dev @babel/core @babel/cli @babel/preset-env
            - npm install @babel/node -D
            - npm install -D nodemon
            - npm install --save @babel/polyfill

    - Dentro de la carpeta Flask y de la carpeta gateway ejecutar: python app.py

    - Dentro de la carpeta Node ejecutar:
        - npm run build
        - npm run dev
    
    - Por ultimo acceder a la URL http://127.0.0.1:5000/.
        