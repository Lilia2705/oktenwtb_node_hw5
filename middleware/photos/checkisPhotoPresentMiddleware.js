// const {PHOTOS_CHECK} = require('../../constants');
//
// module.exports = (req, res, next) =>{
//     req.photos = [];
//     if(! req.files && req.files.photo){
//         next()
//     }
//     const {name, size, mimetype} = req.files.photo;
//     if (!PHOTOS_CHECK.PHOTO_MIMETYPES.includes())
//     next(throw new Error ('Not correct file'))
// }
//
// if (PHOTOS_CHECK.MAX_PHOTO_SIZE < size){
//     next(throw new Error ('Not correct file'))
// }