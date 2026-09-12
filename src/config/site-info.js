const siteInfo = {
    companyName: "Atlas Prime Corp",

    phone: "(815) 555-0123",

    email: "info@atlasprimecorp.com",
    
    address:
        "10 Gougar Rd 2nd Floor Suite 10, Joliet, IL 60432, United States",
};


export function initSiteInfo() {
    // Phone
    document.querySelectorAll("[data-site-phone]").forEach((element) => {
        element.textContent = siteInfo.phone;
        element.href = `tel:${siteInfo.phone.replace(/\D/g, "")}`;
    });


    // Email
    document.querySelectorAll("[data-site-email]").forEach((element) => {
        element.textContent = siteInfo.email;
        element.href = `mailto:${siteInfo.email}`;
    });
    

    // Address
    document.querySelectorAll("[data-site-address]").forEach((element) => {
        element.textContent = siteInfo.address;
    });

}
