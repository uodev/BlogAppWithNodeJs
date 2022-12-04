import bcrypt from 'bcrypt'

export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt()
    return await bcrypt.hash(password,salt)
}

export const comparePassword = async (inputPassword,dbPassword) => await bcrypt.compare(inputPassword,dbPassword)