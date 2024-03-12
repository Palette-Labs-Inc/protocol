# RFC: Self-Sovereign Identity and Data Portability for Federated Commercial Networks with WebAuthn and Personal Data Servers

- **status:** Draft
- **Author:** Michael Perhats
- **Created:** 02-26-2024
- **Last supportd:** 02-26-2024

## Abstract

This RFC proposes a self-sovereign identity and data portability framework for federated commercial networks, leveraging WebAuthn, personal data servers (PDS), and decentralized identifiers (DIDs). The proposed solution aims to enable users to maintain control over their identities and personal data while ensuring privacy and interoperability within the network. It introduces the concept of a "data backpack" through content-addressed data structures, allowing users to switch between managed hosts (nodes) without losing their data or requiring permission from central authorities.

## Introduction

In federated commercial networks, user privacy, data portability, and preventing central authority control are crucial aspects. Traditional approaches often lead to scenarios where central authorities accumulate excessive power, extract value from stakeholders, and control user identities and relationships within the network.

To address these challenges, this RFC proposes a self-sovereign identity and data portability framework that combines WebAuthn, personal data servers (PDS), and decentralized identifiers (DIDs). The framework aims to empower users with control over their identities, personal data, and relationships within the network, while enabling seamless migration between managed hosts (nodes) and ensuring privacy-preserving interactions.

## Motivation

The proposed solution aims to achieve the following goals:

1. **User Control over Identity and Data**: Enable users to maintain control over their identities and personal data, fostering self-sovereignty and data portability.
2. **Privacy-Preserving Interactions**: Ensure that users can selectively disclose relevant information while protecting sensitive data, such as addresses or personal identifiers, during interactions within the network.
3. **Seamless Migration between Hosts**: Allow users to switch between managed hosts (nodes) seamlessly, without losing their identity or data, and without requiring permission from central authorities.
4. **Content-Addressed Data Structures**: Introduce the concept of a "data backpack" through content-addressed (vs. location-addressed) data structures, enabling users to carry their data across different nodes and platforms.
5. **Federated Network Interoperability**: Ensure interoperability within federated commercial networks, supporting a distributed network of independently hosted Provider Supporting Servers and Buyer Supporting Servers.
6. **Decentralized Identity Management**: Leverage decentralized identifiers (DIDs) and Verifiable Credentials (VCs) to enable self-sovereign identity management and interoperability with existing decentralized identity standards and ecosystems.

## Proposal

The proposed solution involves integrating WebAuthn with personal data servers (PDS) and decentralized identifiers (DIDs) to create a self-sovereign identity and data portability framework for federated commercial networks. The key components and workflows are as follows:

### Key Components:

1. **Personal Data Server (PDS)**: A user-controlled data store (inspired by the Bluesky AT Protocol's PDS and Solid MIT's Pods) where individuals can manage their identities, personal data, and credentials. The PDS serves as a "data backpack" for users, enabling them to carry their data across different nodes and platforms using content-addressed data structures.

2. **WebAuthn Integration**: WebAuthn will be integrated into the PDS, allowing users to register and manage their WebAuthn authenticators (e.g., security keys, biometrics) directly within their personal data store.

3. **Decentralized Identifiers (DIDs) and Verifiable Credentials (VCs)**: The solution will support DIDs and VCs, enabling interoperability with existing decentralized identity standards and ecosystems. DIDs can serve as unique, global, and memorable identifiers for users, while VCs can represent various attributes or claims about their identity and credentials.

4. **Provider Supporting Servers (PSNs) and Buyer Supporting Servers (BSNs)**: These servers are responsible for onboarding participants (providers and buyers, respectively) on either side of the federated commercial network.

5. **Buyer and Provider Servicing Nodes**: These nodes represent the distributed network of independently hosted servers that facilitate interactions between buyers and providers within the federated commercial network.

6. **Privacy-Preserving Mechanisms**: The solution will incorporate mechanisms for privacy-preserving interactions, such as selective disclosure of information, zero-knowledge proofs, and secure communication channels, to protect sensitive user data during transactions and interactions within the network.

### Workflow:

1. Users create and manage their WebAuthn authenticators within their personal data server (PDS), which serves as their "data backpack."
2. Users can generate DIDs and associate them with their WebAuthn authenticators, enabling self-sovereign identity management.
3. Users can issue and manage Verifiable Credentials (VCs) associated with their DIDs, representing various attributes or claims about their identity and credentials.
4. Provider Supporting Servers (PSNs) onboard providers (merchants) into the federated commercial network, allowing them to maintain their inventory and catalog information within their PDS.
5. Buyer Supporting Servers (BSNs) onboard buyers into the network, leveraging the buyers' self-sovereign identities and credentials.
6. When interacting with Buyer or Provider Servicing Nodes within the federated network, users can authenticate using their WebAuthn authenticators, proving control over their DIDs.
7. Users can selectively disclose relevant VCs or prove specific claims (e.g., proving they are within a relative area without disclosing their address) to nodes or other participants, enabling data minimization and privacy-preserving interactions.
8. Users can seamlessly migrate their identities and data between different Buyer or Provider Servicing Nodes by carrying their "data backpack" (PDS) with them, ensuring user control and preventing central authority control.
9. Providers can control their discoverability within the network, selectively allowing or disallowing specific clients or agents to see their information based on their preferences or values.
10. Providers can revoke authorizations and switch between PSNs without requiring permission from the current PSN, ensuring data portability and control over their relationship with the network.

## Examples

(This section can be expanded with code snippets, reference implementations, or prototypes demonstrating the integration of WebAuthn with personal data servers, decentralized identifiers, and the proposed workflow within a federated commercial network.)

## References

1. [W3C Web Authentication (WebAuthn) Specification](https://www.w3.org/TR/webauthn/)
2. [Decentralized Identifiers (DIDs) v1.0](https://www.w3.org/TR/did-core/)
3. [Verifiable Credentials Data Model 1.0](https://www.w3.org/TR/vc-data-model/)
4. [Federated Identity Management](https://en.wikipedia.org/wiki/Federated_identity)
5. [Content-Addressable Storage](https://en.wikipedia.org/wiki/Content-addressable_storage)
6. [Bluesky AT Protocol Documentation](https://blueskyweb.xyz/docs/overview)
7. [Solid MIT Project](https://solidproject.org/)
8. [Zero-Knowledge Proofs](https://en.wikipedia.org/wiki/Zero-knowledge_proof)
9. [User-Controlled Capabilities (UCAN)](https://ucan.xyz/)