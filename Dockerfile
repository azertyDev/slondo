# Укажите базовый образ Node.js
FROM node:22-alpine

# Установите рабочую директорию в контейнере
WORKDIR /app

# Скопируйте package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Установите зависимости
RUN npm install

# Скопируйте остальные файлы проекта в контейнер
COPY . .

# Укажите переменную окружения для режима разработки
ENV NODE_ENV=development

# Укажите порт, который будет использовать контейнер
EXPOSE 3317

# Команда для запуска dev сервера Next.js
CMD ["npm", "run", "start-mem"]
