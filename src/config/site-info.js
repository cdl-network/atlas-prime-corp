const siteInfo = {
    companyName: "Atlas Prime Corp",

    phone: "630-297-0447",
    
    address:
        "10 Gougar Rd 2nd Floor Suite 10, Joliet, IL 60432, United States",
};


export function initSiteInfo() {
    // Phone
    document.querySelectorAll("[data-site-phone]").forEach((element) => {
        element.textContent = siteInfo.phone;
        element.href = `tel:${siteInfo.phone.replace(/\D/g, "")}`;
    });
    

    // Address
    document.querySelectorAll("[data-site-address]").forEach((element) => {
        element.textContent = siteInfo.address;
    });

}
