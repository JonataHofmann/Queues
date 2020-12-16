import Mail from '../lib/Mail'

interface User {
  name: string
  email: string
  password: string
}

export default {
  key: 'RegistrationMail',
  async handle({ data }: any) {
    const { user } = data
    console.log('RegistrationMail:', 'user:', user)

    await Mail.sendMail({
      from: 'Queue Test <queue@queuetest.com.br>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de Usuário',
      html: `Olá ${user.name}, bem-vindo ao sistema de filas.  `,
    })
  },
}
