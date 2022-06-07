const generateManager = teamArr => {

    return `
        <div>
        ${teamArr
            .filter(({ officeNumber }) => officeNumber)
            .map(({ name, id, email, officeNumber, getRole }) => {

                return `
                    <h2>${name}</h2>
                    <h3>${getRole()}</h3>
                    <p>${id}</p>
                    <p>${email}</p>
                    <p>${officeNumber}</p>
                
                `
            })
            .join('')
        }
        </div>
    
    `
}

const generateEngineer = teamArr => {

    return teamArr
        .filter(({ github }) => github)

        .map(({ name, id, email, github, getRole }) => {

            return `
            <div>
                <h2>${name}</h2>
                <h3>${getRole()}</h3>
                <p>${id}</p>
                <p>${email}</p>
                <p>${github}</p>
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
            <div>
                <h2>${name}</h2>
                <h3>${getRole()}</h3>
                <p>${id}</p>
                <p>${email}</p>
                <p>${school}</p>
            </div>
            `
        })
        .join('')
    
}

module.exports = templateData => {

    return `
        <main>
            ${generateManager(templateData)}
            ${generateEngineer(templateData)}
            ${generateIntern(templateData)}
        </main>
    `

}