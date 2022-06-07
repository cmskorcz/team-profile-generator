const generateManager = teamArr => {

    return teamArr
        .filter(({ officeNumber }) => officeNumber)
        .map(({ name, id, email, officeNumber, getRole }) => {

            return `
            <div class="card">
                <div class="card-header">
                    <h2>${name}</h2>
                    <h3>${getRole()}</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">Office: ${officeNumber}</li>
                </ul>
            </div>
            `
        })
        .join('')
}



const generateEngineer = teamArr => {

    return teamArr
        .filter(({ github }) => github)

        .map(({ name, id, email, github, getRole }) => {

            return `
            <div class="card">
                <div class="card-header">
                    <h2>${name}</h2>
                    <h3>${getRole()}</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></li>
                </ul>
            </div>
            `
        })
        .join('')
}

const generateIntern = teamArr => {

    return teamArr
        .filter(({ school }) => school)
        .map(({ name, id, email, school, getRole }) => {

            return `
            <div class="card">
                <div class="card-header">
                    <h2>${name}</h2>
                    <h3>${getRole()}</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">School: ${school}</li>
                </ul>
            </div>
            `
        })
        .join('')
    
}

module.exports = templateData => {

    return `
    <!DOCTYPE html>
    
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">
    </head>

    <body>
        <header>
            <h1 class="text-center bg-danger">Team Members</h1>
        </header>
        <main class="container">
            ${generateManager(templateData)}
            ${generateEngineer(templateData)}
            ${generateIntern(templateData)}
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>
    `
}