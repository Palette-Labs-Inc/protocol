### Abstract

This study introduces a graph theoretic approach to blockchain tokenomics for decentralized markets that effectively matches producers (i.e - sellers of products or services) with buyers. Traditionally, platforms capitalize on network effects, benefiting producers and buyers as their transactions increase. However, the growth of such platforms often leads to high rents due to increased market power. To address this, we propose a decentralized platform co-owned by market participants. We introduce algorithms for distributing platform ownership based on each agent’s contributions. Our design aims to incentivize producers to join as co-owners and actively contribute to the platform’s success by marketing it to buyers and recruiting additional producers. 

We model token economies as transaction graphs, where vertices represent participants (producers and consumers), and edges symbolize transactions with weighted values indicative of economic activity. Our key contribution is the development of a dynamic transaction graph model, which evolves with each transaction, reflecting changes in token circulation and platform ownership relative to the unique contributions of the agents within the open network. 

This study proposes a new communication standard; a set of rules and technical specifications for building open e-commerce networks across which providers and their services are universally discoverable from any protocol-enabled application. 

### Network Participants

#### Buyer
An individual with a need to purchase a product or service at a given moment in time. A Buyers identity and data is represented to the open network through the services provided by the Buyer Supporting Node. 

#### Buyer Supporting Node (BSN)
`BSNs` build software applications & store Buyer data for the network. BSNs can be managed by individual developers or organizations who intend to offer experiences to consumers but do not care to maintain inventory lists of producers.  

#### Producer 
An organization with a Catalog of products or services available for sale. A producers Catalog is managed by and represented to the open network through the Producer Supporting Node.

#### Producer Supporting Node (PSN)
`PSN`s onboard the producer side of the network. PSNs can be managed by a local chamber of commerce, a small business cooperative, individual restaurants or retailers, taxi-networks, big tech companies, etc. The primary role of the `PSN` in the open network is to attain and maintain fresh inventory lists for producers such that when a `Buyer` broadcasts an intent to transact, they can be sure that their request to avail services/products is fulfilled by the `Producer` 

#### Node Operator
A `PSN` or `BSN` providing services to a Buyer or Producer within the network, occupying a record in the Registry. 

### Public Network Infrastructure
#### Gateway Provider (GP)
`GP`s or `Gateways` are stateless routing software that helps nodes discover relevant services during discovery. 
 
 ```mermaid

 ```

#### Registry 
A decentralized public ledger that maintains the records of Node Operators, agents and their supported Industry Codes and the geographical regions that they represent. The registry is queried for a Producers products or services by `Gateway Providers` and `Buyer Supporting Nodes` during the search phase of a `Buyers` transaction lifecycle 

A decentralized public ledger that represents the list of registered Node's in the network. During the server-to-server communication node's are expected to send a signed digest of the request body using the private key that was used to register their node. When a server recives a new request, it verifies the signature header by looking up the public key of the signer in the registry and verifying the signature.

```mermaid
sequenceDiagram
    autonumber
    participant BSN
    participant PSN
    participant REGISTRY as Registry
    participant PSN_VS as PSN Verification Service

    BSN->>PSN: request
    Note left of BSN: BSN signs post request
    Note over BSN,PSN: BSN sends request to PSN
    PSN-->>BSN: ACK
    PSN->>REGISTRY: /lookup
    Note over REGISTRY,PSN: PSN finds public-key of BSN in registry
    REGISTRY->>PSN_VS: request
    Note over PSN_VS: PSN verifies BSN signature
    PSN_VS-->>PSN: response
    Note over PSN: PSN processes request
```

#### Commercial Transaction Lifecycle Overview
All commercial transactions in any two-sided market can be represented by a series of predictable interactions between a `Buyer` and a `Producer` over the life of a `Buyer`'s transaction. The network design establishes these interactions by a set of standardized APIs.

*Discovery* - a `Buyer` broadcasts their intent to avail a service. The network responds with a list of `Providers`
*Shop* - a `Buyer` constructs a cart from the items available in the catalogs of the `Provider` list and places an order with a `Provider`
*Fulfill* - the order is fulfilled. A `Buyer` can track the status of their order.
*Post-Fulfill* - a `Buyer` can review or request support for their order in the case that they are dissatisfied.

The network's core working groups and community will work on and publish standards for each API with unique schema definitions tailored to the specific service types for a variety of industries. All APIs are implemented as a series of signed, asynchronous POST requests between `Node Operators`.  

#### Discovery
Alice searches for stores by entering information on a client app. Alice's `BSN` broadcasts her intent to the network. The Network aggregates a list of available `Provider`s that can fulfill her request.

```mermaid
sequenceDiagram
    autonumber
    participant Alice as Alice
    participant ClientApp as Client App
    participant BSN as BSN
    participant Gateway as Gateway
    participant PSNn as PSN(n)

    Note over Alice, PSNn: discovery
    Alice->>ClientApp: search
    ClientApp->>BSN: api/search
    Note over ClientApp,BSN: Alice initiates a search
    BSN-->>ClientApp: request_id
    BSN->>Gateway: api/search
    Note over BSN,Gateway: BSN requests search via Gateway
    Gateway->>BSN: ACK
    Gateway->>PSNn: api/search
    Note over Gateway,PSNn: Gateway requests search from PSN
    PSNn-->>Gateway: ACK
    PSNn->>Gateway: api/on_search
    Note over PSNn,Gateway: PSN responds with search results
    Gateway-->>PSNn: ACK
    Gateway->>BSN: api/on_search
    Note over Gateway,BSN: Gateway sends search results to BSN
    BSN-->>Gateway: ACK
    BSN->>ClientApp: response
    ClientApp-->>Alice: response
```

