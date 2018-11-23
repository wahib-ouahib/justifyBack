module.exports = function(app, db){
    app.post('/notes', (req, res)=>{
        const note = {text: req.body.body, title: req.body.title}
        db.collection('justify').insert(note, (err, results)=>{
            if(err){
                res.send({'error':'feels bad man'});
            } else{
                res.send(result.ops[0])
            }

        })
    })
}