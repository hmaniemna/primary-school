app.get('/geta', (req,res)=> {
   
    pool.getConnection((err,connection)=>{
       if(err) throw err
       console.log(`connected as ${connection.threadId}`)
       connection.query('SELECT * from  emploi',(err,rows)=> {

//     connection.release() // this one return the connection to the pool
        if(!err){
            res.send(rows)
        } else {
            console.log(err)
        }
       })
      

    })
})
// UPDATE by id // this is the desired one
app.put('/UPDATE/:t/:d/:v', (req,res)=> {

 pool.getConnection((err,connection)=>{
    if(err) throw err
    console.log(`connected as ${connection.threadId}`)
    connection.query(`UPDATE emploi SET ${req.params.d} = ? WHERE id_emploi = ?`,[req.params.v,req.params.t],(err,rows)=> {

     connection.release() // this one return the connection to the pool
     if(!err){
         res.send(rows)
     } else {
         console.log(err)
     }
    })
   

 })
})