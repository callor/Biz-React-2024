npm install prisma --save-dev
npm install @prisma/client

npx prisma init --datasource-provider mysql

npx prisma generate
npx prisma migrate dev --name init
