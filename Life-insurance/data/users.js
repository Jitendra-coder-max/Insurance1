import bcrypt from 'bcryptjs'

//this is our sample user data to be used with the seeder file
const users = [{
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Jitendra Nishad',
    email: 'nishad@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Anil Tiwari',
    email: 'tiwari@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users