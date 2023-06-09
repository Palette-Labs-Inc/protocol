#### Bazzar
Bazzar: aggregator of localBusiness

<table>
    <tr>
        <td>Field</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
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

#### LocalBusiness

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

#### Organization
Parent organization of local businesses (if the business is a chain)
<table>
    <tr>
        <td>Field</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
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

#### AggregateRating
Rating aggregation of local business
<table>
    <tr>
        <td>Field</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
        <tr>
        <td>id</td>
        <td>String</td>
        <td>Identifier for the aggregate rating result</td>
    </tr>
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
        <td>Field</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
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
        <td>Field</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
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
        <td>defaultAddress</td>
        <td>Boolean</td>
        <td>Whether this address is the default address for the customer</td>
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

#### Promotion

Promotion event like buy one get one free

<table>
    <tr>
        <td>id</td>
        <td>String</td>
        <td>Identifier for the promotion</td>
    </tr>
    <tr>
        <td>LocalBusiness</td>
        <td>LocalBusiness[]</td>
        <td>Local businesses associated with the promotion</td>
    </tr>
    <tr>
        <td>Bazaar</td>
        <td>Bazaar?</td>
        <td>Bazaar associated with the promotion</td>
    </tr>
    <tr>
        <td>bazaarId</td>
        <td>String?</td>
        <td>Foreign key: identifier for the associated bazaar</td>
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
    <tr>
        <td>openingHours</td>
        <td>OpeningHoursSpecification[]</td>
        <td>Opening hours specifications for the promotion</td>
    </tr>
    <tr>
        <td>Order</td>
        <td>Order[]</td>
        <td>Orders associated with the promotion</td>
    </tr>
</table>

#### Image

<table>
    <tr>
        <td>Field</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>id</td>
        <td>String</td>
        <td>Identifier for the image</td>
    </tr>
    <tr>
        <td>LocalBusiness</td>
        <td>LocalBusiness?</td>
        <td>Local business this image is related to</td>
    </tr>
    <tr>
        <td>localBusinessId</td>
        <td>String?</td>
        <td>Foreign key: identifier for the associated local business</td>
    </tr>
    <tr>
        <td>url</td>
        <td>String</td>
        <td>URL of the image</td>
    </tr>
    <tr>
        <td>Review</td>
        <td>Review[]</td>
        <td>Reviews this image is related to</td>
    </tr>
    <tr>
        <td>MenuItem</td>
        <td>MenuItem?</td>
        <td>Menu item this image about</td>
    </tr>
    <tr>
        <td>menuItemId</td>
        <td>String?</td>
        <td>Foreign key: identifier for the associated menu item</td>
    </tr>
</table>

#### Logo

The logo of local business

<table>
    <tr>
        <td>Field</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>id</td>
        <td>String</td>
        <td>Identifier for the logo</td>
    </tr>
    <tr>
        <td>LocalBusiness</td>
        <td>LocalBusiness[]</td>
        <td>Local businesses using this logo</td>
    </tr>
    <tr>
        <td>url</td>
        <td>String</td>
        <td>URL of the logo</td>
    </tr>
</table>

#### Customer

Customers placed orders and gave ratings on this instance

<table>
    <tr>
        <td>Field</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>id</td>
        <td>String</td>
        <td>Identifier for the customer</td>
    </tr>
    <tr>
        <td>Review</td>
        <td>Review[]</td>
        <td>Reviews the customer post</td>
    </tr>
    <tr>
        <td>familyName</td>
        <td>String</td>
        <td>Family name of the customer</td>
    </tr>
    <tr>
        <td>givenName</td>
        <td>String</td>
        <td>Given name of the customer</td>
    </tr>
    <tr>
        <td>birthDate</td>
        <td>DateTime</td>
        <td>Birth date of the customer</td>
    </tr>
    <tr>
        <td>telephone</td>
        <td>String</td>
        <td>Telephone number of the customer</td>
    </tr>
    <tr>
        <td>address</td>
        <td>PostalAddress[]</td>
        <td>Addresses associated with the customer</td>
    </tr>
    <tr>
        <td>email</td>
        <td>String</td>
        <td>Email of the customer</td>
    </tr>
    <tr>
        <td>gender</td>
        <td>EnumGender</td>
        <td>Gender of the customer</td>
    </tr>
    <tr>
        <td>Order</td>
        <td>Order[]</td>
        <td>Orders associated with the customer</td>
    </tr>
    <tr>
        <td>PaymentTerm</td>
        <td>PaymentTerm[]</td>
        <td>Payment terms the customer made</td>
    </tr>
    <tr>
        <td>AggregateRating</td>
        <td>AggregateRating[]</td>
        <td>Aggregate ratings the customer gave</td>
    </tr>
</table>

#### Courier

Drivers or bickers who take charge of order delivery

<table>
    <tr>
        <td>Field</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>id</td>
        <td>String</td>
        <td>Identifier for the courier</td>
    </tr>
    <tr>
        <td>givenName</td>
        <td>String</td>
        <td>Given name of the courier</td>
    </tr>
    <tr>
        <td>familyName</td>
        <td>String</td>
        <td>Family name of the courier</td>
    </tr>
    <tr>
        <td>birthDate</td>
        <td>DateTime</td>
        <td>Birth date of the courier</td>
    </tr>
    <tr>
        <td>telephone</td>
        <td>String</td>
        <td>Telephone number of the courier</td>
    </tr>
    <tr>
        <td>address</td>
        <td>PostalAddress</td>
        <td>Address of the courier</td>
    </tr>
    <tr>
        <td>postalAddressId</td>
        <td>String</td>
        <td>Foreign Key: identifier for the associated address</td>
    </tr>
    <tr>
        <td>email</td>
        <td>String</td>
        <td>Email of the courier</td>
    </tr>
    <tr>
        <td>gender</td>
        <td>EnumGender</td>
        <td>Gender of the courier</td>
    </tr>
    <tr>
        <td>vehicle</td>
        <td>Vehicle</td>
        <td>Vehicle associated with the courier</td>
    </tr>
    <tr>
        <td>vehicleId</td>
        <td>String</td>
        <td>Foreign Key: identifier for the associated vehicle</td>
    </tr>
    <tr>
        <td>review</td>
        <td>Review[]</td>
        <td>Reviews the courier received</td>
    </tr>
    <tr>
        <td>rating</td>
        <td>Float</td>
        <td>Average rating the courier received</td>
    </tr>
    <tr>
        <td>bazaar</td>
        <td>Bazaar</td>
        <td>Bazaar associated with the courier</td>
    </tr>
    <tr>
        <td>OrderDelivery</td>
        <td>OrderDelivery[]</td>
        <td>Order deliveries associated with the courier</td>
    </tr>
    <tr>
        <td>bazaarId</td>
        <td>String</td>
        <td>Foreign key: identifier for the associated bazaar</td>
    </tr>
</table>

#### Vehicle

The vehicles couriers use to fulfill the delivery

<table>
    <tr>
        <td>Field</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>id</td>
        <td>String</td>
        <td>Identifier for the vehicle</td>
    </tr>
    <tr>
        <td>Courier</td>
        <td>Courier[]</td>
        <td>Couriers associated with the vehicle</td>
    </tr>
    <tr>
        <td>capacity</td>
        <td>Int</td>
        <td>Capacity of the vehicle</td>
    </tr>
    <tr>
        <td>category</td>
        <td>String</td>
        <td>Category of the vehicle</td>
    </tr>
    <tr>
        <td>code</td>
        <td>String</td>
        <td>Code of the vehicle</td>
    </tr>
    <tr>
        <td>color</td>
        <td>String</td>
        <td>Color of the vehicle</td>
    </tr>
    <tr>
        <td>model</td>
        <td>String</td>
        <td>Model of the vehicle</td>
    </tr>
    <tr>
        <td>registration</td>
        <td>String</td>
        <td>Registration of the vehicle</td>
    </tr>
    <tr>
        <td>size</td>
        <td>String</td>
        <td>Size of the vehicle</td>
    </tr>
    <tr>
        <td>wheelCount</td>
        <td>Int</td>
        <td>Number of wheels of the vehicle</td>
    </tr>
</table>

#### Order

Orders placed on this instance

<table>
    <tr>
        <td>Field</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>orderNumber</td>
        <td>String</td>
        <td>Identifier for the order</td>
    </tr>
    <tr>
        <td>seller</td>
        <td>LocalBusiness</td>
        <td>Seller associated with the order</td>
    </tr>
    <tr>
        <td>localBusinessId</td>
        <td>String</td>
        <td>Foreign Key: identifier for the associated local business</td>
    </tr>
    <tr>
        <td>orderedItem</td>
        <td>OrderItem[]</td>
        <td>Items included in the order</td>
    </tr>
    <tr>
        <td>orderStatus</td>
        <td>EnumOrderStatus</td>
        <td>Status of the order: including cancelled, delivered, in transit, payment due, pickup available, problem, processing and returned</td>
    </tr>
    <tr>
        <td>orderDelivery</td>
        <td>OrderDelivery</td>
        <td>Delivery details for the order</td>
    </tr>
    <tr>
        <td>orderDeliveryId</td>
        <td>String</td>
        <td>Foreign Key: identifier for the associated order delivery</td>
    </tr>
    <tr>
        <td>orderDate</td>
        <td>DateTime</td>
        <td>Date and time when the order was placed</td>
    </tr>
    <tr>
        <td>orderCompleteDate</td>
        <td>DateTime</td>
        <td>Date and time when the order was completed</td>
    </tr>
    <tr>
        <td>orderETA</td>
        <td>DateTime</td>
        <td>Estimated time of arrival for the order</td>
    </tr>
    <tr>
        <td>customer</td>
        <td>Customer</td>
        <td>Customer who placed the order</td>
    </tr>
    <tr>
        <td>customerId</td>
        <td>String</td>
        <td>Foreign Key: identifier for the associated customer</td>
    </tr>
    <tr>
        <td>discount</td>
        <td>Promotion</td>
        <td>Promotion applied to the order</td>
    </tr>
    <tr>
        <td>promotionId</td>
        <td>String</td>
        <td>Foreign Key: dentifier for the associated promotion</td>
    </tr>
    <tr>
        <td>paymentTerm</td>
        <td>PaymentTerm</td>
        <td>Payment term for the order</td>
    </tr>
    <tr>
        <td>paymentTermId</td>
        <td>String</td>
        <td>Foreign Key: dentifier for the associated payment term</td>
    </tr>
    <tr>
        <td>confirmationNumber</td>
        <td>String</td>
        <td>Confirmation number for the order</td>
    </tr>
    <tr>
        <td>deliveryAddress</td>
        <td>PostalAddress</td>
        <td>Delivery address for the order</td>
    </tr>
    <tr>
        <td>postalAddressId</td>
        <td>String</td>
        <td>Foreign Key: identifier for the associated postal address</td>
    </tr>
    <tr>
        <td>referenceOrderId</td>
        <td>String</td>
        <td>Reference order ID, if any</td>
    </tr>
    <tr>
        <td>updatedAt</td>
        <td>DateTime</td>
        <td>Date and time when the order was last updated</td>
    </tr>
    <tr>
        <td>type</td>
        <td>EnumFulfillmentModes</td>
        <td>Fulfillment mode for the order, including: pickup, delivery, dine in, takeout and drive through</td>
    </tr>
    <tr>
        <td>Cancellation</td>
        <td>Cancellation[]</td>
        <td>Cancellations associated with the order</td>
    </tr>
    <tr>
        <td>Support</td>
        <td>Support[]</td>
        <td>Support tickets associated with the order</td>
    </tr>
</table>

#### OrderItem

The item customer ordered, including quantity

<table>
    <tr>
        <td>Field</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>orderItemId</td>
        <td>String</td>
        <td>Unique identifier for the order item</td>
    </tr>
    <tr>
        <td>Order</td>
        <td>Order?</td>
        <td>Order associated with the item</td>
    </tr>
    <tr>
        <td>orderNumber</td>
        <td>String?</td>
        <td>Identifier for the associated order</td>
    </tr>
    <tr>
        <td>orderedItem</td>
        <td>MenuItem</td>
        <td>Menu item included in the order</td>
    </tr>
    <tr>
        <td>menuItemId</td>
        <td>String</td>
        <td>Identifier for the associated menu item</td>
    </tr>
    <tr>
        <td>orderQuantity</td>
        <td>Int</td>
        <td>Quantity of the ordered item</td>
    </tr>
    <tr>
        <td></td>
    </tr>
    <tr>
        <td>orderItemStatus</td>
        <td>EnumItemStatus</td>
        <td>Status of the order item</td>
    </tr>
</table>

#### PaymentTerm

Payment info related to orders

<table>
    <tr>
        <td>Field</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>id</td>
        <td>String</td>
        <td>Unique identifier for the payment term</td>
    </tr>
    <tr>
        <td>seller</td>
        <td>LocalBusiness</td>
        <td>Seller receives the payment term</td>
    </tr>
    <tr>
        <td>localBusinessId</td>
        <td>String</td>
        <td>Foreign Key: identifier for the associated seller</td>
    </tr>
    <tr>
        <td>customer</td>
        <td>Customer</td>
        <td>Customer pays for the payment</td>
    </tr>
    <tr>
        <td>customerId</td>
        <td>String</td>
        <td>Foreign Key: identifier for the associated customer</td>
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
        <td>lifecycleProcessing</td>
        <td>EnumPaymentTermLifecycle</td>
        <td>Lifecycle processing of the payment term, including pre order, pre fulfillment, on fulfillment and post fulfillment</td>
    </tr>
    <tr>
        <td>order</td>
        <td>Order?</td>
        <td>Order associated with the payment term</td>
    </tr>
    <tr>
        <td>orderPrice</td>
        <td>Float</td>
        <td>Price of the associated order</td>
    </tr>
    <tr>
        <td>tip</td>
        <td>Float</td>
        <td>Tip amount</td>
    </tr>
    <tr>
        <td>servicePrice</td>
        <td>Float</td>
        <td>Service fee, if any</td>
    </tr>
    <tr>
        <td>paymentCurrency</td>
        <td>String</td>
        <td>Currency used for the payment</td>
    </tr>
    <tr>
        <td>commissionCharged</td>
        <td>Float</td>
        <td>Commission charged, if any</td>
    </tr>
    <tr>
        <td>paymentMethod</td>
        <td>EnumPaymentAccepted</td>
        <td>Payment method, including credit card, cash, invoice, Paypal, Google Checkout, bank transfer in advance, check in advance, COD, direct debit and PaySwarm</td>
    </tr>
    <tr>
        <td>status</td>
        <td>EnumPaymentStatus</td>
        <td>Status of the payment term, including processed and collectable</td>
    </tr>
</table>

#### OrderDelivery

Order batching (couriers deliver multiple orders in one trip)

<table>
    <tr>
        <td>Field</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>id</td>
        <td>String</td>
        <td>Unique identifier for the order delivery</td>
    </tr>
    <tr>
        <td>Order</td>
        <td>Order[]</td>
        <td>Orders associated with the delivery</td>
    </tr>
    <tr>
        <td>courier</td>
        <td>Courier</td>
        <td>Courier responsible for the delivery</td>
    </tr>
    <tr>
        <td>courierId</td>
        <td>String</td>
        <td>Foreign Key: identifier for the associated courier</td>
    </tr>
</table>

#### Menu

<table>
    <tr>
        <td>Field</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>id</td>
        <td>String</td>
        <td>Unique identifier for the menu</td>
    </tr>
    <tr>
        <td>name</td>
        <td>String</td>
        <td>Name of the menu</td>
    </tr>
    <tr>
        <td>seller</td>
        <td>LocalBusiness</td>
        <td>Seller (local business) uses the menu</td>
    </tr>
    <tr>
        <td>localBusinessId</td>
        <td>String</td>
        <td>Foreign Key: identifier for the associated local business</td>
    </tr>
    <tr>
        <td>description</td>
        <td>String</td>
        <td>Description of the menu</td>
    </tr>
    <tr>
        <td>openHours</td>
        <td>OpeningHoursSpecfication[]</td>
        <td>Opening hours for the menu</td>
    </tr>
    <tr>
        <td>createdAt</td>
        <td>DateTime</td>
        <td>Date and time when the menu was created</td>
    </tr>
    <tr>
        <td>updatedAt</td>
        <td>DateTime</td>
        <td>Date and time when the menu was last updated</td>
    </tr>
    <tr>
        <td>fulfillmentModes</td>
        <td>EnumFulfillmentModes</td>
        <td>Modes of fulfillment for the menu, including pickup, delivery, dine in, takeout, drive through</td>
    </tr>
    <tr>
        <td>hasmenuSection</td>
        <td>MenuSection[]</td>
        <td>Menu sections associated with the menu</td>
    </tr>
    <tr>
        <td>MenuItem</td>
        <td>MenuItem[]</td>
        <td>Menu items associated with the menu</td>
    </tr>
</table>

#### MenuItem

Dishes in the menu, including add-ons

<table>
    <tr>
        <td>Field</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>id</td>
        <td>String</td>
        <td>Unique identifier for the menu item</td>
    </tr>
    <tr>
        <td>OrderItem</td>
        <td>OrderItem[]</td>
        <td>Order items associated with the menu item</td>
    </tr>
    <tr>
        <td>Menu</td>
        <td>Menu?</td>
        <td>Menu associated with the menu item</td>
    </tr>
    <tr>
        <td>menuId</td>
        <td>String?</td>
        <td>Foreign Key: identifier for the associated menu</td>
    </tr>
    <tr>
        <td>name</td>
        <td>String</td>
        <td>Name of the menu item</td>
    </tr>
    <tr>
        <td>nutrition</td>
        <td>NutritionInformation</td>
        <td>Nutrition information for the menu item, calories etc. </td>
    </tr>
    <tr>
        <td>description</td>
        <td>String</td>
        <td>Description of the menu item</td>
    </tr>
    <tr>
        <td>hasmenuAddOn</td>
        <td>MenuItem[]</td>
        <td>Menu items that can be added as add-ons to the menu item</td>
    </tr>
    <tr>
        <td>menuAddon</td>
        <td>MenuItem[]</td>
        <td>Menu items that can be added as add-ons to the menu item</td>
    </tr>
    <tr>
        <td>price</td>
        <td>Float</td>
        <td>Price of the menu item</td>
    </tr>
    <tr>
        <td>priceCurrency</td>
        <td>String</td>
        <td>Currency used for the price of the menu item</td>
    </tr>
    <tr>
        <td>quantity</td>
        <td>Int</td>
        <td>Quantity of the menu item available</td>
    </tr>
    <tr>
        <td>maximumPurchasableCount</td>
        <td>Int</td>
        <td>Maximum count of the menu item that can be purchased</td>
    </tr>
    <tr>
        <td>minimumPurchasableCount</td>
        <td>Int</td>
        <td>Minimum count of the menu item that can be purchased</td>
    </tr>
    <tr>
        <td>itemStatus</td>
        <td>EnumItemStatus</td>
        <td>Status of the menu item, including back order, discontinued, in stock, in store only, limited availability, online only, out of stock, pre order, pre sale, sold out.</td>
    </tr>
    <tr>
        <td>fulfillmentMode</td>
        <td>EnumFulfillmentModes</td>
        <td>Mode of fulfillment for the menu item, including pickup, delivery, dine in, takeout, drive through</td>
    </tr>
    <tr>
        <td>createdAt</td>
        <td>DateTime</td>
        <td>Date and time when the menu item was created</td>
    </tr>
    <tr>
        <td>updatedAt</td>
        <td>DateTime</td>
        <td>Date and time when the menu item was last updated</td>
    </tr>
    <tr>
        <td>image</td>
        <td>Image[]</td>
        <td>Images associated with the menu item</td>
    </tr>
    <tr>
        <td>review</td>
        <td>Review[]</td>
        <td>Reviews associated with the menu item</td>
    </tr>
    <tr>
        <td>Quote</td>
        <td>Quote[]</td>
        <td>Quote associated with the menu item</td>
    </tr>
    <tr>
        <td>MenuSection</td>
        <td>MenuSection?</td>
        <td>Menu section the menu item belongs to</td>
    </tr>
    <tr>
        <td>menuSectionId</td>
        <td>String?</td>
        <td>Foreign Key: identifier for the associated menu section</td>
    </tr>
    <tr>
        <td>nutritionInformationId</td>
        <td>String</td>
        <td>Foreign Key: identifier for the associated nutrition information</td>
    </tr>
    <tr>
        <td>suitableForDiet</td>
        <td>EnumDiet</td>
        <td>Suitable diet for the menu item, diabetic, gluten free, halal, hindu, kosher, low calorie, low fat, low lactose, low salt, vegan, vegetarian</td>
    </tr>
</table>

#### NutritionInformation

Nutrition information related to the menu item, calories etc. 

<table>
    <tr>
        <td>Field</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>id</td>
        <td>String</td>
        <td>Unique identifier for the nutrition information</td>
    </tr>
    <tr>
        <td>calories</td>
        <td>String</td>
        <td>Calorie content of the item</td>
    </tr>
    <tr>
        <td>servingSize</td>
        <td>String</td>
        <td>Serving size of the item</td>
    </tr>
    <tr>
        <td>fatContent</td>
        <td>String</td>
        <td>Fat content of the item</td>
    </tr>
    <tr>
        <td>fiberContent</td>
        <td>String</td>
        <td>Fiber content of the item</td>
    </tr>
    <tr>
        <td>proteinContent</td>
        <td>String</td>
        <td>Protein content of the item</td>
    </tr>
    <tr>
        <td>saturatedFatContent</td>
        <td>String</td>
        <td>Saturated fat content of the item</td>
    </tr>
    <tr>
        <td>unsaturatedFatContent</td>
        <td>String</td>
        <td>Unsaturated fat content of the item</td>
    </tr>
    <tr>
        <td>sugarContent</td>
        <td>String</td>
        <td>Sugar content of the item</td>
    </tr>
    <tr>
        <td>transFatContent</td>
        <td>String</td>
        <td>Trans fat content of the item</td>
    </tr>
    <tr>
        <td>sodiumContent</td>
        <td>String</td>
        <td>Sodium content of the item</td>
    </tr>
    <tr>
        <td>MenuItem</td>
        <td>MenuItem[]</td>
        <td>Menu items associated with the nutrition information</td>
    </tr>
</table>

#### Cancellation

Recording order cancellations

<table>
    <tr>
        <td>Field</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>id</td>
        <td>String</td>
        <td>Unique identifier for the cancellation</td>
    </tr>
    <tr>
        <td>orderNumber</td>
        <td>Order</td>
        <td>Order associated with the cancellation</td>
    </tr>
    <tr>
        <td>cancelledBy</td>
        <td>EnumCancelledBy</td>
        <td>Who initiated the cancellation</td>
    </tr>
    <tr>
        <td>createdAt</td>
        <td>DateTime</td>
        <td>Timestamp for when the cancellation was created</td>
    </tr>
    <tr>
        <td>isReasonRequired</td>
        <td>Boolean</td>
        <td>Whether a reason is required for cancellation</td>
    </tr>
    <tr>
        <td>reason</td>
        <td>String</td>
        <td>Reason for the cancellation</td>
    </tr>
    <tr>
        <td>updatedAt</td>
        <td>DateTime</td>
        <td>Timestamp for when the cancellation was last updated</td>
    </tr>
    <tr>
        <td>orderOrderNumber</td>
        <td>String</td>
        <td>Foreign Key: order number associated with the cancellation</td>
    </tr>
</table>

#### Quotes

Estimated prices provided by local businesses

<table>
    <tr>
        <td>Field</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>createdAt</td>
        <td>DateTime</td>
        <td>Timestamp for when the quote was created</td>
    </tr>
    <tr>
        <td>currency</td>
        <td>String</td>
        <td>Currency of the quote</td>
    </tr>
    <tr>
        <td>id</td>
        <td>String</td>
        <td>Unique identifier for the quote</td>
    </tr>
    <tr>
        <td>menuItems</td>
        <td>MenuItem[]</td>
        <td>Menu items included in the quote</td>
    </tr>
    <tr>
        <td>timeToLive</td>
        <td>Int</td>
        <td>Time to live (in seconds) for the quote</td>
    </tr>
    <tr>
        <td>totalPrice</td>
        <td>Float</td>
        <td>Total price of the quote</td>
    </tr>
    <tr>
        <td>updatedAt</td>
        <td>DateTime</td>
        <td>Timestamp for when the quote was last updated</td>
    </tr>
</table>

#### Support

Tickets asking for help from customer services 

<table>
    <tr>
        <td>Field</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>id</td>
        <td>String</td>
        <td>Unique identifier for the support entry</td>
    </tr>
    <tr>
        <td>createdAt</td>
        <td>DateTime</td>
        <td>Date and time of creation of this ticket</td>
    </tr>
    <tr>
        <td>updatedAt</td>
        <td>DateTime</td>
        <td>Date and time of last update of this ticket</td>
    </tr>
    <tr>
        <td>customer</td>
        <td>Customer</td>
        <td>Customer who submit this ticket</td>
    </tr>
    <tr>
        <td>photo</td>
        <td>Image[]</td>
        <td>Array of images uploaded by customer for ticket explanation</td>
    </tr>
    <tr>
        <td>orderNumber</td>
        <td>Order</td>
        <td>Order the tick is related to</td>
    </tr>
    <tr>
        <td>orderOrderNumber</td>
        <td>String</td>
        <td>Order number associated with the ticket</td>
    </tr>
    <tr>
        <td>status</td>
        <td>EnumSupportStatus</td>
        <td>Status of the ticket, including: submitted, in progress, cancelled and fixed</td>
    </tr>
    <tr>
        <td>customerId</td>
        <td>String</td>
        <td>Foreign Key: identifier of the associated customer</td>
    </tr>
</table>

#### Node

Information about the host of this instance

<table>
    <tr>
        <td>Field</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>createdAt</td>
        <td>DateTime</td>
        <td>Date and time of creation of this record</td>
    </tr>
    <tr>
        <td>hostUrl</td>
        <td>String</td>
        <td>URL of the host</td>
    </tr>
    <tr>
        <td>id</td>
        <td>String</td>
        <td>Unique identifier for the node</td>
    </tr>
    <tr>
        <td>industryCode</td>
        <td>EnumNodeIndustryCode</td>
        <td>Industry code of the node, including rideshare, delivery service partner, restaurant deliver service</td>
    </tr>
    <tr>
        <td>location</td>
        <td>PostalAddress</td>
        <td>physical address of the instance, if any</td>
    </tr>
    <tr>
        <td>operatorType</td>
        <td>EnumNodeOperatorType</td>
        <td>Type of the node operator, including UNO, BSN, SSN and CSN</td>
    </tr>
    <tr>
        <td>updatedAt</td>
        <td>DateTime</td>
        <td>Date and time of last update of this data record</td>
    </tr>
    <tr>
        <td>postalAddressId</td>
        <td>String</td>
        <td>Foreign Key: identifier of the associated postal address</td>
    </tr>
</table>

