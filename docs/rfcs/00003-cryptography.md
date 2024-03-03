# RFC: core cryptography concepts

- **status:** Draft
- **Author:** Michael Perhats
- **Created:** 02-26-2024
- **Last supportd:** 02-26-2024

## Abstract
In our analysis, we borrow concepts from both federated and p2p networks to deliver a self-authenticating protocol. Our research adopts concepts of[“authenticated data structures”](https://www.cs.umd.edu/~mwh/papers/gpads.pdf), [decentralized identifiers](https://www.w3.org/TR/did-core/), [public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography), [content addresses](https://en.wikipedia.org/wiki/Content-addressable_storage), and [verifiable computation](https://en.wikipedia.org/wiki/Content-addressable_storage). 

## Introduction
The [core network architecture](./00001-core-architecture.md) defines a distributed network of `Buyer` and `Provider` Servicing Nodes who onboard either side of a two-sided-market. In centralized corporate networks and federated server-to-server networks, the servers own a users identity and, as such, their relationship to the network. As the network grows, and power accumulates to central authorities, platforms begin to extract from stakeholders - usually through increasingly high take rates in commercial settings. The intermediaries relationships with network participants changes from positive-sum to zero-sum. _More about the attract, extract lifecycle of web2 platforms [here](https://cdixon.org/2018/02/18/why-decentralization-matters)_.

To prevent such undesirable market dynamics, we develop structures for a [self-authenticating](https://en.wiktionary.org/wiki/self-authenticating) protocol. Our design grants users the ability to "switch" between managed-hosts (nodes) at will, shifting control to users, and introduces a concept of a "data-backpack" through content-addressed (vs. location addressed) data structures.

**Our design has 3 considerations:**

- _Public-Key Cryptography_ - Users have full control over their data, when it is used, and who is authorized to use it. Users "stamp" the content and information that they create in the network with their signaute, allowing their account to be controlled by them, rather than an authorized hosting provider.

- _Content-addressed data_ a users data will be content-addressed (vs. location addrressed), and considerded _live_ independent from any specific host. A user can sign a piece of content with their private key to prove they created it. When this information is saved, the data contents themselves are used to generate a cryptographic hash or "fingerprint" of the content. Content-addressing allows for data to be verified regardless of it's location and introduces a new design space and mechanisms to migrate away from traditional client-to-server artchitectures.

As a user travels between applications in the network, they can authorize a client to use their data. This grants control to the user and introduces a UX improvement over traditional, non-interoperable applicatons: users need only input data once, removing the requirement for mundane and repetitive authentication flows for things like address input, email input, etc. - ultimately reducing friction for new client applications to offer unique services for users in the network.

- _Verifiable Compute / ZK_ - Verifiable computations allow an agent to outsource computational tasks to untrusted third parties and verify that the computation was performed correctly (as in a zero knowledge proof) without having to perform the computation themselves. Verifiably compute is useful in distributed systems for preserving private information (concealing inputs), and delegating complex tasks to entities with more resources to perform specific computations.

## Motivation

Our design supports a network with the following desirable qualities:
- **User Sovereignty**: Users control their identity and data without dependency on central authorities.
- **Data Portability**: Enables seamless transition between service providers, enhancing user choice and flexibility.
- **Interoperability**: Facilitates communication across diverse networks and services.
- **Privacy and Security**: Employs cryptographic methods for secure data exchange between entities.
- **Scalability and Efficiency**: Optimizes tradeoffs between federated and p2p networks.
- **Trust and Transparency**: Offers verifiable mechanisms for data integrity and authenticity.

## Proposal (TODO)

The main content of the RFC:
- Detailed description of the proposed solution or standard.
- Technical specifications and design details.
- Examples of how the solution would work in practice.

## Examples (TODO)

**Case study 1:**
- Alice signs up for Client App Nosh.
- Alice inputs shipping address, her shipping address is stored in `BSN(x)` (buyer side backend server).
- Client Nosh saves Shipping Address, data is content addressed in `BSN(x)`
- Alice authorizes Client App Chomp to use her data.
- Client App Chomp finds Alice's data based on her DID and the CID from a distributed hash table or registry, similar to IPFS.

**Case study 2:**
- Bob signs up for `PSN` GrubDash.
- `PSN` GrubDash goes down, has performance or latency issues, or begins charigng exorbinant fees. 
- Bob redirects his identity to `PSN` DelishEats
- The switch from `PSN` GrubDash to `PSN` DelishEats does not require permission from `PSN` GrubDash. 
- `PSN` DelishEats now fulfills Bob's needs.

## References
- ATProto [Repository specification](https://atproto.com/specs/repository).
- Farcaster [protocol specificatiion](https://github.com/farcasterxyz/protocol/blob/main/docs/SPECIFICATION.md#13-storage-registry)
- DIDs, [W3c] (https://www.w3.org/TR/did-core/)
- [Verifiable computing](https://en.wikipedia.org/wiki/Verifiable_computing)
- [“authenticated data structures”](https://www.cs.umd.edu/~mwh/papers/gpads.pdf)
- [decentralized identifiers](https://www.w3.org/TR/did-core/)
- [public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography)
- [content addresses](https://en.wikipedia.org/wiki/Content-addressable_storage)
- [verifiable computation](https://en.wikipedia.org/wiki/Content-addressable_storage)
- [IPFS, content addressing](https://filebase.com/blog/ipfs-content-addressing-explained/#:~:text=InterPlanetary%20File%20System%2C%20or%20IPFS,data's%20content%20identifier%20or%20CID.)
- - Bluesky full ecosystem [overview](https://gitlab.com/bluesky-community1/decentralized-ecosystem/-/blob/master/README.md) 
- Bluesky Identity and Auth [overview](https://gitlab.com/bluesky-community1/decentralized-ecosystem/-/blob/master/topics/identity.md)
- ActivityPub [W3C specification](https://www.w3.org/TR/activitypub/)
