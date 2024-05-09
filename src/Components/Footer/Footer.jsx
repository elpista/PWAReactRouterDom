

function Footer({ig, mail}){
    let igLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/800px-Instagram_icon.png"
    let mailLogo = "https://www.ramosmejia.com/wp-content/uploads/2017/11/mail-logo.png"

    return(
    <div className="footer flex justify-center items-center text-center h-40 bg-blue-600 mt-10">
        <img src={igLogo} className="h-6" />
        <p className="ml-1">{ig}</p>
        <img src={mailLogo} className="h-6 ml-6"/>
        <p className="ml-1">{mail}</p>
    </div>
    );
}

export default Footer