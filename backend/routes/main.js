const express = require('express');
const router = express.Router();
const axios = require('axios');
const HTMLParser = require('node-html-parser');

router
    .get('/test', async(req,res)=>{
        console.log("SERVER CONNECTED!");
        res.json({data:"success"});
    })
    .get('/load-all/:location', async(req,res)=>{
        let data = {};
        if(req.params.location == 'mount_carmel'){
            try {
                // await axios.get(`http://10.181.160.100/get_public_tbl.cgi?A=1`)
                await axios.get(`http://10.181.160.100/index.shtml`)
                    .then(response => {
                        let temp = HTMLParser.parse(response.data);
                        //26-40 Rows for the API
                        for (let i = 26; i <= 41; i++) {
                            let row = temp.querySelector("html")['childNodes'][i];
                            let th = row['childNodes'][0]['childNodes'][0]['rawText'].trim();
                            let td = row['childNodes'][1]['childNodes'][0]['rawText'].trim();
                            data[th] = td;

                            if (row['childNodes'].length > 2) {
                                let th = row['childNodes'][2]['childNodes'][0]['rawText'];
                                th = th.indexOf(" &nbsp&nbsp&nbsp ") > -1 ? th.split(" &nbsp&nbsp&nbsp ")[1].trim() : th;
                                let td = row['childNodes'][3]['childNodes'][0]['rawText'];
                                td = td.indexOf(" &nbsp&nbsp&nbsp ") > -1 ? td.split(" &nbsp&nbsp&nbsp ")[1].trim() : td;
                                if (i != 36) {
                                    data[th] = td;
                                }
                            }   
                        }
                    })
            } catch (error) {
                console.log(`ERROR: ${error}`)
            }
            console.log('DATA:', data)
            res.json(data)
        }else{
            res.json({data:false})
        }
        // let db = require('')
    });

module.exports = router;