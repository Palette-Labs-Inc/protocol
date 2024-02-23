### Abstract

This study proposes a new communication standard; a set of rules and technical specifications for building open e-commerce networks across which providers and their services are universally discoverable from any protocol-enabled application. 

### Network Participants

#### Buyer
An individual with a need to purchase a product or service at a given moment in time. The `Buyer` is interested in joining the network to discover and purchase goods or services. The `Buyer` can engage with the network by using a protocol enabled application. 

#### Producer 
An organization or individual with a Catalog of products or services available for sale. 

#### Buyer Supporting Node (BSN)
`BSNs` are managed hosts that onboard the `Buyer` side of the network. These hosts typically build software applications. `BSNs` can be managed by individual developers or organizations who intend to offer experiences to consumers. `BSNs` might have a new idea for a new application, like a video-first shopping app, a social-commerce app, or a spatial-computing shopping experience. `BSNs` implement the protocol because it gives them instant access to a network of `Producers`. They can implement the protocol standard and get access to these `Producers` without ever having to formally onboard the `Producer` or communicate with them. This is beneficial because it increases their ability to quickly test their product. They only have to worry about dealing with one side of the two-sided market.

#### Producer Supporting Node (PSN)
`PSN`s are managed hosts that onboard the producer or seller side of the network. `PSNs` can be managed by a restaurant group, an individual restaurant, taxi-networks, an individual taxi driver, a big tech company, or any other organization that represents an individual or group of individual selling a good or a service. `PSNs` onboard into the protocol network to reach new consumers who want to purchase the services of the `Producers` they represent. 

The primary role of the `PSN` in the network is to attain and maintain fresh inventory lists for producers such that when a `Buyer` broadcasts an intent to transact, they can respond with the `Providers` that are capable of fulfilling the `Buyers` request.

`PSNs` can charge a fee for providing tools to `Producers` to help them maintain their inventory and accept more orders. Some `Producers` may choose to run their own server. This is within scope of the network, and any individual producer can do so, but requiring every `Producer` to run their own server is a steep UX requirement. 

`BSNs` and `PSNs` are non-profit organizations, universities, or any other company or group that host users’ data, like Gmail and Outlook host email. Managed hosts can offer features that would be impractical for users to run at scale, like a recommendation system. They can provide better user experiences, and we should expect most people to use them instead of running their own server.

#### Node Operator
A `PSN` or `BSN` providing services to a `Buyer` or `Producer` within the network, occupying a record in the `Registry`. 

### Public Network Infrastructure

#### Gateway Provider (GP)
`GP`s or `Gateways` route search packets from BSN's and index services that help `BSNs` discover relevant `Providers` during a `Buyers` discovery process.

```mermaid
sequenceDiagram
    autonumber
    participant Gateway
    participant REGISTRY as Registry
    participant PSN1 as PSN(1)
    participant PSNn as PSN(N)

    Note over Gateway, PSNn: The Gateway is routing software that help nodes discover relevant services during discovery
    loop Gateway, Registry Interaction
    Gateway->>REGISTRY: /lookup
    REGISTRY-->>Gateway: response
    end 

    par PSN interactions
        Note over Gateway,PSN1: PSN(1) receives request
        Gateway->>+PSN1: api/search
        PSN1-->>-Gateway: ACK
        PSN1->>+Gateway: api/on_search
        Note over Gateway,PSN1: PSN(1) triggers callback w/ provider list
        Gateway-->>-PSN1: ACK
        and
        Note over Gateway,PSNn: PSN(n) receives request
        Gateway->>+PSNn: api/search
        PSNn-->>-Gateway: ACK
        PSNn->>+Gateway: api/on_search
        Gateway-->>-PSNn: ACK
        Note over Gateway,PSNn: PSN(n) triggers callback w/ provider list
    end
 ```

#### Registry 
A decentralized public ledger that maintains the records of Node Operators, agents and their supported Industry Codes and the geographical regions that they represent. The registry is queried for a Producers products or services by `Gateway Providers` and `Buyer Supporting Nodes` during the search phase of a `Buyers` transaction lifecycle 

During the server-to-server communication node's are expected to send a signed digest of the request body using the private key that was used to register their node. When a server recives a new request, it verifies the signature header by looking up the public key of the signer in the registry and verifying the signature.

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
    PSN->>+REGISTRY: /lookup
    REGISTRY->>-PSN: response
    Note over REGISTRY,PSN: PSN finds public-key of BSN in registry
    REGISTRY->>PSN_VS: request
    Note over PSN_VS: PSN verifies BSN signature
    PSN_VS-->>PSN: response
    Note over PSN: PSN processes request
```
