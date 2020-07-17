const fs = require('fs')
const data = require('./data.json')
exports.post = (req, res) => {
    const keys = Object.keys(req.body)
    for (key of keys) {
        if (req.body[key] == "") {
            res.send('por favor preencha todos os campos')
        }
    }
    let { id, avatr_url, created_at, name, birth, schooling, type_of_class, area } = req.body
    birth = Date.now(birth)
    created_at = Date.now()
    id = Number(data.teachers.length + 1)

    data.teachers.push({
        id,
        name,
        avatr_url,
        created_at,
        birth,
        schooling,
        type_of_class,
        area
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if (err) return res.send('Erro ao gerar arquivo')
        return res.redirect('/teachers')
    })
}