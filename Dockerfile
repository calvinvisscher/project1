# Gebruik de officiële Node.js 24 image
FROM node:24-slim

# Zet de werkmap in de container op /app
WORKDIR /app

# Kopieer de package.json naar de container
COPY package.json ./

# Installeer de dependencies (op dit moment nog geen, maar wel nodig voor de structuur)
RUN npm install

# Kopieer de rest van je code (zoals index.js) naar de container
COPY . .

# Geef aan dat poort 3000 openstaat
EXPOSE 3000

# Start de applicatie
CMD ["node", "server.js"]
