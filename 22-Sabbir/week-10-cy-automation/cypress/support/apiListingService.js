class apiListingService {
  createListing(listingData, image, token) {
    const blob = Cypress.Blob.base64StringToBlob(image, "image/jpg");
    const formData = new FormData();
    formData.append("images", blob);
    Object.keys(listingData).forEach((key) => {
      formData.append(key, listingData[key]);
    });
    return cy.request({
      method: "POST",
      url: "https://dev.delekhomes.com/api/estate-objects",
      body: formData,
      headers: { Authorization: "Bearer " + token },
    });
  }
}
export default new apiListingService();
