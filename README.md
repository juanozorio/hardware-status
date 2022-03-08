### Hardware Status

Um pequeno projeto que usa a lib OS do Node.js, que pega informações do seu computador, como sistema operacional, processador, memória e etc.

Para entregar dos esses dados no Front, usei o EJS.

O valor da memória livre atualiza a cada segundo.

Em sistema operacional, existe 3 tipos de saídas: 

1. MacOS - Darwin
2. Linux - Linux
3. Windows - Windows_NT

Para executar o projeto, primeiramente clone para sua máquina: 

> git clone https://github.com/juanozorio/hardware-status.git

Logo após, acesse o projeto pelo terminal, ou use o terminal integrado do VS Code e digite o comando:

> yarn start

Pronto! Agora devemos acessar o localhost:

> http://localhost:3080/

![infoExample](/images/infosHardware.jpg "Hardware Status")

