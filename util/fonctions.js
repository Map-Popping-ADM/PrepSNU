const axios = require('axios');


//TODO: changer token et limit dans les paramètres
async function mediastack(pays, categorie) {
    let token = "bd83f1003997370821d2d357063ce57a";
    let limit = "100";
    let url = "http://api.mediastack.com/v1/news?access_key=" + token + "&limit=" + limit

    if (pays) url = url + "&countries=" + pays;
    if (categorie) url = url + "&categories=" + categorie;
    
    let requete = await axios.get(url);
    let data = requete.data;
    return data;
};

function googleTradUrl(url, lang) {
    let justUrl = url.replace(/^https?:\/\//, "");
    let domain = justUrl.substring(0, justUrl.indexOf('/')) || justUrl;
    let path = justUrl.substring(justUrl.indexOf('/') + 1);

    return tradUrl = "https://" + domain.replace(/\./g, "-") + ".translate.goog/" + path + "?_x_tr_sl=auto&_x_tr_tl=" + lang;
};

module.exports = {
    mediastack: mediastack,
    googleTradUrl: googleTradUrl
};