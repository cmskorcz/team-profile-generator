module.exports = templateDataArr => {

    const cardArr = []

    templateDataArr.forEach(employee => {
        const { name, id, email, office, github, school } = employee;
        const role = employee.getRole();

        if (role === 'Manager') {

            const cardTemplate = `
            <div>
    
                <div>${name}</div>
                <div>${role}</div>
                <div>
                    <div>${id}</div>
                    <div>${email}</div>
                    <div>${office}</div>
                </div>
    
            </div>
            `
            cardArr.push(cardTemplate)

        } else if (role === 'Engineer') {

            const cardTemplate = `
            <div>
    
                <div>${name}</div>
                <div>${role}</div>
                <div>
                    <div>${id}</div>
                    <div>${email}</div>
                    <div>${github}</div>
                </div>
    
            </div>
            `
            
            cardArr.push(cardTemplate)
        } else {

            const cardTemplate = `
            <div>
    
                <div>${name}</div>
                <div>${role}</div>
                <div>
                    <div>${id}</div>
                    <div>${email}</div>
                    <div>${school}</div>
                </div>
    
            </div>
            `    
            cardArr.push(cardTemplate)
        }
    })

    return cardArr

}