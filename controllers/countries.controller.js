/**
 * @author Ajilore Raphael Olamide < reaphealolams@gmail.com >
 * Right reserved 
*/
'use strict';
const transformResponse = require('./../utils/transformer').transformResponse


let Countries = {};
let saveCountries = []

Countries.getCountries = function(req, res, next) {
    try {
        res.status(200).json(transformResponse(1, "success", {"responseData": saveCountries}))

    } catch (error) {
        console.error({error})
        next(error)
    }
};

Countries.updateCountries = function(req, res, next) {
    try {
        
        if (req.body.countries) {
            let alreadySaved = saveCountries.find(country => country.toLowerCase() === req.body.countries.toLowerCase())

            if(alreadySaved) res.status(200).json(transformResponse(1, "success", {"responseData": "Country Already Exist"}, "Not Added"))
            else {
                saveCountries.push(req.body.countries)
                res.status(200).json(transformResponse(1, "success", {"responseData": "Country Added"}))
            }
         
        }

        else res.status(400).json(transformResponse(0, "success", {"responseData": "Country Not Added"}, "Empty Body"))


    } catch (error) {  
        console.error({error})
        next(error)   
    }
}


Countries.deleteCountries = function(req, res, next) {
    try {
        let country = req.params.name
        
        let found = saveCountries.indexOf(country)

        if (found > -1) {
            saveCountries.splice(found, 1)
            res.status(200).json(transformResponse(1, "success", {"responseData": "Country Deleted"}))
        }

        else res.status(404).json(transformResponse(0, "error", {"responseData": "Country not found"}))
        
        

    } catch (error) {
        console.error({error})   
        next(error)           
    }
}

module.exports = Countries;