const functions = require('firebase-functions')
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')

const gmailEmail = encodeURIComponent(functions.config().gmail.email)
const gmailPassword = encodeURIComponent(functions.config().gmail.password)
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`)

admin.initializeApp(functions.config().firebase)

const getUserInformation = (user) => {
    const information = []
    const { name, email, birthDate, community, address } = user

    information.push('User:')
    information.push(`Name: ${name}`)
    information.push(`E-mail: ${email}`)
    information.push(`Date of Birth: ${birthDate}`)
    information.push(`Community: ${community}`)
    information.push(`Address: ${address}`)

    return information
}

const getStoresInformation = (stores, keys) => {
    const information = []
    information.push('Stores:')

    keys.forEach(key => {
        const { id, name } = stores[key]
        information.push(`- [${id}] ${name}`)
    })

    return information
}

const getInstructionInformation = (instruction) => {
    const information = []
    information.push('Instruction:')
    information.push(instruction || 'None')

    return information
}

exports.sendDeliveryEmail = functions.database.ref('/deliveries/{key}').onCreate(event => {
    const { key } = event.params
    const { uid, instruction, stores } = event.data.val()

    return Promise.all([
        admin.auth().getUser(uid),
        admin.database().ref(`users/${uid}`).once('value'),
        admin.database().ref('/stores').once('value')
    ]).then((values) => {
        const user = Object.assign({}, values[0], values[1].val())
        const allStores = values[2].val()

        const information = []
        information.push(getUserInformation(user).join('\n\t'))
        information.push(getStoresInformation(allStores, stores).join('\n\t'))
        information.push(getInstructionInformation(instruction).join('\n\t'))

        const email = {
            from: 'noreply@easy-living-deliveries.firebaseapp.com',
            to: 'easylivingdeliveries@gmail.com',
            subject: `[${key}] Delivery`,
            text: information.join('\n\n')
        }

        return mailTransport.sendMail(email).then(() => {
            console.log('Sending delivery email:', email)
        })
    })
})
