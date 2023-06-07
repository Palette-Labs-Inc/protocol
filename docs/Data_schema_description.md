#### Table Bazzar
Bazzar: aggregator of localBusiness

<table>
    <tr>
        <td>id</td>
        <td>String</td>
        <td>Identifier for the bazaar</td>
    </tr>
    <tr>
        <td>localBusinesses</td>
        <td>LocalBusiness[]</td>
        <td>Array of local businesses associated with the bazaar</td>
    </tr>
    <tr>
        <td>fulfillmentModes</td>
        <td>EnumFulfillmentModes</td>
        <td>Modes of fulfillment supported by the bazaar, including pickup, delivery, dine in, takeout, drive through</td>
    </tr>
    <tr>
        <td>createdAt</td>
        <td>DateTime</td>
        <td>Date and time of creation of this data record</td>
    </tr>
    <tr>
        <td>updatedAt</td>
        <td>DateTime</td>
        <td>Date and time of last update of this data record</td>
    </tr>
    <tr>
        <td>promotions</td>
        <td>Promotion[]</td>
        <td>Array of promotions the bazaar has</td>
    </tr>
    <tr>
        <td>Courier</td>
        <td>Courier[]</td>
        <td>Array of couriers associated with the bazaar</td>
    </tr>
</table>                                                   

#### Table LocalBusiness

<table>
    <tr>
        <td>Field</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>id</td>
        <td>String</td>
        <td>Identifier for the local business</td>
    </tr>
    <tr>
        <td>name</td>
        <td>String</td>
        <td>Name of the local business</td>
    </tr>
    <tr>
        <td>description</td>
        <td>String</td>
        <td>Description of the local business</td>
    </tr>
    <tr>
        <td>url</td>
        <td>String</td>
        <td>Website URL of the local business</td>
    </tr>
    <tr>
        <td>telephone</td>
        <td>String</td>
        <td>Telephone number of the local business</td>
    </tr>
    <tr>
        <td>servesCuisine</td>
        <td>String</td>
        <td>Cuisine served by the local business</td>
    </tr>
    <tr>
        <td>aggregateRating</td>
        <td>AggregateRating</td>
        <td>Rating of the local business</td>
    </tr>
    <tr>
        <td>review</td>
        <td>Review[]</td>
        <td>Reviews associated with the local business</td>
    </tr>
    <tr>
        <td>photo</td>
        <td>Image[]</td>
        <td>Photos associated with the local business</td>
    </tr>
    <tr>
        <td>logo</td>
        <td>Logo</td>
        <td>Logo of the local business</td>
    </tr>
    <tr>
        <td>logoId</td>
        <td>String</td>
        <td>Foreign key: identifier for the logo</td>
    </tr>
    <tr>
        <td>openingHours</td>
        <td>String</td>
        <td>Opening hours of the local business</td>
    </tr>
    <tr>
        <td>openingHoursSpecification</td>
        <td>OpeningHoursSpecification[]</td>
        <td>Opening hours specifications</td>
    </tr>
    <tr>
        <td>longitude</td>
        <td>Float</td>
        <td>Longitude of the local business location</td>
    </tr>
    <tr>
        <td>latitude</td>
        <td>Float</td>
        <td>Latitude of the local business location</td>
    </tr>
    <tr>
        <td>globalLocationNumber</td>
        <td>BigInt</td>
        <td>GLN: a 13-digit number used to identify parties and physical locations</td>
    </tr>
    <tr>
        <td>faxNumber</td>
        <td>String</td>
        <td>Fax number of the local business</td>
    </tr>
    <tr>
        <td>address</td>
        <td>PostalAddress</td>
        <td>Address of the local business</td>
    </tr>
    <tr>
        <td>postalAddressId</td>
        <td>String</td>
        <td>Foreign key: identifier for the postal address</td>
    </tr>
    <tr>
        <td>paymentAccepted</td>
        <td>EnumPaymentAccepted[]</td>
        <td>Payment methods accepted by the local business, including credit card, cash invoice, Paypal, Google checkout, bank transfer in advance, check in advance, COD, direct debit, PaySwarm</td>
    </tr>
    <tr>
        <td>priceRange</td>
        <td>String</td>
        <td>Price range of the local business, from $ to $$$$</td>
    </tr>
    <tr>
        <td>email</td>
        <td>String</td>
        <td>Email address of the local business</td>
    </tr>
    <tr>
        <td>foundingDate</td>
        <td>DateTime</td>
        <td>Date of founding of the local business</td>
    </tr>
    <tr>
        <td>createdAt</td>
        <td>DateTime</td>
        <td>Date and time of creation of this data record</td>
    </tr>
    <tr>
        <td>updatedAt</td>
        <td>DateTime</td>
        <td>Date and time of last update of this data record</td>
    </tr>
    <tr>
        <td>hasPOS</td>
        <td>Boolean</td>
        <td>Indicates if the local business has a point-of-sale system</td>
    </tr>
    <tr>
        <td>pos</td>
        <td>String</td>
        <td>Point-of-sale system used by the local business</td>
    </tr>
    <tr>
        <td>branchCode</td>
        <td>String</td>
        <td>If the local business has a parent organization, the branch code of the local business</td>
    </tr>
    <tr>
        <td>parentOrganization</td>
        <td>Organization</td>
        <td>Parent organization of the local business, if any</td>
    </tr>
    <tr>
        <td>organizationId</td>
        <td>String</td>
        <td>Foreign key: identifier for the parent organization</td>
    </tr>
    <tr>
        <td>category</td>
        <td>EnumBusinessCategory[]</td>
        <td>Categorie the local business belongs, including food delivery, grocery</td>
    </tr>
    <tr>
        <td>promotions</td>
        <td>Promotion[]</td>
        <td>Promotions the local business has</td>
    </tr>
    <tr>
        <td>Bazaar</td>
        <td>Bazaar?</td>
        <td>Bazaar the local business associated with</td>
    </tr>
    <tr>
        <td>bazaarId</td>
        <td>String</td>
        <td>Foreign key: identifier for the associated bazaar</td>
    </tr>
    <tr>
        <td>Order</td>
        <td>Order[]</td>
        <td>Orders associated with the local business</td>
    </tr>
    <tr>
        <td>PaymentTerm</td>
        <td>PaymentTerm[]</td>
        <td>Payment terms associated with the local business</td>
    </tr>
    <tr>
        <td>hasMenu</td>
        <td>Menu[]</td>
        <td>Menus associated with the local business</td>
    </tr>
    <tr>
        <td>commission</td>
        <td>String</td>
        <td>Commission for the local business, if any</td>
    </tr>
    <tr>
        <td>aggregateRatingId</td>
        <td>String</td>
        <td>Foreign key: identifier for the aggregate rating</td>
    </tr>
</table>

#### Table Organization
Parent organization of local businesses (if the business is a chain)
<table>
    <tr>
        <td>id</td>
        <td>String</td>
        <td>Identifier for the organization</td>
    </tr>
    <tr>
        <td>name</td>
        <td>String</td>
        <td>Name of the organization</td>
    </tr>
    <tr>
        <td>LocalBusiness</td>
        <td>LocalBusiness[]</td>
        <td>Local businesses associated with the organization</td>
    </tr>
    <tr>
        <td>createdAt</td>
        <td>DateTime</td>
        <td>Date and time of creation</td>
    </tr>
    <tr>
        <td>updatedAt</td>
        <td>DateTime</td>
        <td>Date and time of last update</td>
    </tr>
</table>

#### Table AggregateRating
Rating aggregation of local business
<table>
    <tr>
        <td>ratingCount</td>
        <td>Int</td>
        <td>Number of ratings</td>
    </tr>
    <tr>
        <td>reviewCount</td>
        <td>Int</td>
        <td>Number of reviews</td>
    </tr>
    <tr>
        <td>LocalBusiness</td>
        <td>LocalBusiness[]</td>
        <td>Local businesses associated with the aggregate rating</td>
    </tr>
    <tr>
        <td>itemReviewed</td>
        <td>EnumItemReview</td>
        <td>Item being reviewed</td>
    </tr>
    <tr>
        <td>author</td>
        <td>Customer</td>
        <td>Author of the aggregate rating</td>
    </tr>
    <tr>
        <td>bestRating</td>
        <td>Float</td>
        <td>Highest possible rating</td>
    </tr>
    <tr>
        <td>ratingExplanation</td>
        <td>String</td>
        <td>Review associated with the rating</td>
    </tr>
    <tr>
        <td>ratingValue</td>
        <td>Float</td>
        <td>Value of the rating, between bestRating and worstRating</td>
    </tr>
    <tr>
        <td>worstRating</td>
        <td>Float</td>
        <td>Lowest possible rating</td>
    </tr>
    <tr>
        <td>customerId</td>
        <td>String</td>
        <td>Foreign key: identifier for the customer</td>
    </tr>
</table>

#### Review
Reviews received by local businesses, dishes, or couriers

<table>
    <tr>
        <td>id</td>
        <td>String</td>
        <td>Identifier for the review</td>
    </tr>
    <tr>
        <td>LocalBusiness</td>
        <td>LocalBusiness?</td>
        <td>Local business received the review</td>
    </tr>
    <tr>
        <td>localBusinessId</td>
        <td>String?</td>
        <td>Foreign key: identifier for the associated local business</td>
    </tr>
    <tr>
        <td>reviewBody</td>
        <td>String</td>
        <td>Content of the review</td>
    </tr>
    <tr>
        <td>reviewRating</td>
        <td>String</td>
        <td>Rating of the review</td>
    </tr>
    <tr>
        <td>author</td>
        <td>Customer</td>
        <td>Author of the review</td>
    </tr>
    <tr>
        <td>dateCreated</td>
        <td>DateTime</td>
        <td>Date and time of creation of the review</td>
    </tr>
    <tr>
        <td>dateModified</td>
        <td>DateTime</td>
        <td>Date and time of last modification of the review</td>
    </tr>
    <tr>
        <td>image</td>
        <td>Image</td>
        <td>Image attached to the review</td>
    </tr>
    <tr>
        <td>imageId</td>
        <td>String</td>
        <td>Foreign key: identifier for the associated image</td>
    </tr>
    <tr>
        <td>customerId</td>
        <td>String</td>
        <td>Foreign key: identifier for the customer</td>
    </tr>
    <tr>
        <td>Courier</td>
        <td>Courier?</td>
        <td>Courier received the review</td>
    </tr>
    <tr>
        <td>courierId</td>
        <td>String?</td>
        <td>Foreign key: identifier for the associated courier</td>
    </tr>
    <tr>
        <td>MenuItem</td>
        <td>MenuItem?</td>
        <td>Menu item received the review</td>
    </tr>
    <tr>
        <td>menuItemId</td>
        <td>String?</td>
        <td>Foreign key: identifier for the associated menu item</td>
    </tr>
</table>

#### OpeningHoursSpecification
Structured data for local business opening hours and promotions

<table>
    <tr>
        <td>id</td>
        <td>String</td>
        <td>Identifier for the opening hours specification</td>
    </tr>
    <tr>
        <td>dayOfWeek</td>
        <td>EnumDayOfWeek</td>
        <td>Day of the week including Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday</td>
    </tr>
    <tr>
        <td>opens</td>
        <td>String</td>
        <td>Opening time</td>
    </tr>
    <tr>
        <td>closes</td>
        <td>String</td>
        <td>Closing time</td>
    </tr>
    <tr>
        <td>validFrom</td>
        <td>DateTime</td>
        <td>Start date</td>
    </tr>
    <tr>
        <td>validThrough</td>
        <td>DateTime</td>
        <td>End date</td>
    </tr>
    <tr>
        <td>Promotion</td>
        <td>Promotion?</td>
        <td>Promotion associated with this opening hours specification</td>
    </tr>
    <tr>
        <td>promotionId</td>
        <td>String?</td>
        <td>Foreign key: identifier for the associated promotion</td>
    </tr>
    <tr>
        <td>createdAt</td>
        <td>DateTime</td>
        <td>Date and time of this data record</td>
    </tr>
    <tr>
        <td>updatedAt</td>
        <td>DateTime</td>
        <td>Date and time of this data record</td>
    </tr>
    <tr>
        <td>Menu</td>
        <td>Menu[]</td>
        <td>Menus associated with this opening hours specification</td>
    </tr>
    <tr>
        <td>LocalBusiness</td>
        <td>LocalBusiness?</td>
        <td>Local business associated with the opening hours specification</td>
    </tr>
    <tr>
        <td>localBusinessId</td>
        <td>String?</td>
        <td>Foreign key: identifier for the associated local business</td>
    </tr>
</table>

#### PostalAddress
Structured data for postal addresses

<table>
    <tr>
        <td>id</td>
        <td>String</td>
        <td>Identifier for the postal address</td>
    </tr>
    <tr>
        <td>LocalBusiness</td>
        <td>LocalBusiness[]</td>
        <td>Local businesses associated with the postal address</td>
    </tr>
    <tr>
        <td>addressCountry</td>
        <td>String</td>
        <td>Country of the address</td>
    </tr>
    <tr>
        <td>addressLocality</td>
        <td>String</td>
        <td>Locality of the address (city, i.e. Princeton)</td>
    </tr>
    <tr>
        <td>addressRegion</td>
        <td>String</td>
        <td>Region of the address (state, i.e. New Jersey)</td>
    </tr>
    <tr>
        <td>postOfficeBoxNumber</td>
        <td>String</td>
        <td>P.O. box number</td>
    </tr>
    <tr>
        <td>postalCode</td>
        <td>String</td>
        <td>Postal code of the address (zip code)</td>
    </tr>
    <tr>
        <td>streetAddress</td>
        <td>String</td>
        <td>Street address</td>
    </tr>
    <tr>
        <td>Customer</td>
        <td>Customer?</td>
        <td>Customer associated with the postal address</td>
    </tr>
    <tr>
        <td>customerId</td>
        <td>String?</td>
        <td>Foreign key: identifier for the associated customer</td>
    </tr>
    <tr>
        <td>Courier</td>
        <td>Courier[]</td>
        <td>Couriers associated with this postal address</td>
    </tr>
    <tr>
        <td>globalLocationNumber</td>
        <td>BigInt</td>
        <td>GLN: a 13-digit number used to identify parties and physical locations</td>
    </tr>
    <tr>
        <td>Order</td>
        <td>Order[]</td>
        <td>Orders associated with this postal address</td>
    </tr>
    <tr>
        <td>Node</td>
        <td>Node[]</td>
        <td>Nodes associated with this postal address</td>
    </tr>
</table>



