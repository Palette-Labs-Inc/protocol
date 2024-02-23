#### Buyer
An individual with a need to purchase a product or service at a given moment in time. The `Buyer` is interested in joining the network to discover and purchase goods or services. The `Buyer` can engage with the network by using a protocol enabled client application. 

#### Producer 
An organization or individual with a Catalog of products or services available for sale. 

#### Buyer Supporting Node (BSN)
`BSNs` are managed hosts that onboard the `Buyer` side of the network. These hosts typically build software applications. `BSNs` can be managed by individual developers or organizations who intend to offer experiences to consumers. `BSNs` might have a new idea for a new application, like a video-first shopping app, a social-commerce app, or a spatial-computing shopping experience. `BSNs` implement the protocol because it gives them instant access to a network of `Producers`. They can implement the protocol standard and get access to these `Producers` without ever having to formally onboard the `Producer` or communicate with them. This is beneficial because it increases their ability to quickly test their product. They only have to worry about dealing with one side of the two-sided market.

#### Producer Supporting Node (PSN)
`PSN`s are managed hosts that onboard the producer or seller side of the network. `PSNs` can be managed by a restaurant group, an individual restaurant, taxi-networks, an individual taxi driver, a big tech company, or any other organization. `PSNs` use the network to reach new consumers who want to purchase the services of the `Producers` that they represent. 

The primary role of the `PSN` is to maintain inventory lists for `Producers` so that when a `Buyer` searches for a service, the `PSN` can respond with a list of `Providers` that are capable of fulfilling the `Buyers` request.

`PSNs` can charge a fee for providing tools to `Producers` that help them maintain their inventory and accept more orders. For example a `PSN` might make it easier for `Producers` to manage their inventory via a point-of-sale solution. Some `Producers` may choose to run their own server. 

#### Node Operator
A `PSN` or `BSN` providing services to a `Buyer` or `Producer` within the network, occupying a record in the `Registry`.

`BSNs` and `PSNs` are non-profit organizations, universities, or any other company or group that host user data, like Gmail and Outlook host email. These managed hosts can offer features that would be impractical for users to run independently at scale, like a recommendation system. They can provide better user experiences, and we should expect most people to use them instead of running their own server.

### Public Network Infrastructure

#### Gateway Provider (GP)
`GP`s or `Gateways` route search packets from `BSNs` to discover relevant `Providers` during a `Buyers` discovery process / search request.

#### Registry 
A decentralized public ledger that maintains the records of Node Operators, agents and their supported Industry Codes and the geographical regions that they represent. The registry is queried for a Producers products or services by `Gateway Providers` and `Buyer Supporting Nodes` during the search phase of a `Buyers` transaction lifecycle 

During the server-to-server communication node's are expected to send a signed digest of the request body using the private key that was used to register their node in the registry. When a server recives a new request, it verifies the signature header by looking up the public key of the signer in the registry and verifying the signature.

## Unscoped Service Providers
You could imagine that more complex services could be designed for the network, for example:
-  a routing or logistics service could inform which drivers are returned by a `PSN` when a `Buyer` searches for a mobility or rideshare service.  
- a recommendation service could inform which drivers are returned by a `PSN` when a `Buyer` searches for a book written by a specific author. 

You can imagine that some developers or researchers might want to concentrate on building out advanced services and "license them" to `Node Operators`. You can think of this almost as a decentralized microservices architecture. In future designs, there should be ways for these services to be listed and discovered. A token represents a new business model for a wide variety of new services to emerge that add utility to the network. 
___

# Questions

## Measuring Contributions
- How do tokens accrue to each of the service providers? I really like the graph theoretic approach that we have established. I think we also need to extend token distributions to the other service providers. 


## Monetary Policy
- How and when are tokens minted and issued? 


## Utility
- How are tokens used within the network after they are received? If all recipients simply spend their tokens, this will have negative pricing pressures on the network. 

## Reputation

- When a `BSN` communicates with a `PSN`, how can each Node have assurances that the service that is being requested will be fulfilled? One way to establish trust is to have a "registrar" where we (Nosh) serve the role of "approving" applicants to join the registry (and hence we permit which service providers can be discovered by the network). However, this adds permissions and goes against our values of designing a credibly neutral protocol. A game theoretic approach would be much better. What mechanisms can perform this task? You could imagine that, during each transaction between a buyer and a seller, there is an "escrow contract" that resolves after a transaction is fulfilled. This requires consensus from both the buyer and the seller which begs the question of how disputes are handled. 

- Is there an economic punishment for failing to fulfill a service? 

- If a buyer complains about the quality of service (requesting a refund, for example) what is our dispute or resolution protocol? How can this protocol be trustless (not require an intermediary arbiter)? 

