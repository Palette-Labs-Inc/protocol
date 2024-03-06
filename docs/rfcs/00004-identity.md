# RFC: Decentralized Identifiers

- **status:** Draft
- **Author:** Michael Perhats
- **Created:** 02-26-2024
- **Last supportd:** 02-26-2024

## Abstract

This abstract is cut and paste from the [W3C publication on DIDs](https://www.w3.org/TR/did-core/)

Centralized identities are administered and controlled by a single authority. Centralized social networks offer users identities that are administered and controlled by the service. Decentralized social networks offer forms of identity that give users varying degrees of control. Decentralized identities may be federated, user-centric, or self-sovereign.

[Decentralized identifiers](https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers) (DIDs) are a new type of identifier that enables verifiable, decentralized digital identity. A [DID](https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers) refers to any subject (e.g., a person, organization, thing, data model, abstract entity, etc.) as determined by the controller of the [DID](https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers). In contrast to typical, federated identifiers, [DIDs](https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers) have been designed so that they may be decoupled from centralized registries, identity providers, and certificate authorities. Specifically, while other parties might be used to help enable the discovery of information related to a [DID](https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers), the design enables the controller of a [DID](https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers) to prove control over it without requiring permission from any other party. [DIDs](https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers) are [URIs](https://www.w3.org/TR/did-core/#dfn-uri) that associate a [DID subject](https://www.w3.org/TR/did-core/#dfn-did-subjects) with a [DID document](https://www.w3.org/TR/did-core/#dfn-did-documents) allowing trustable interactions associated with that subject.

Each [DID document](https://www.w3.org/TR/did-core/#dfn-did-documents) can express cryptographic material, [verification methods](https://www.w3.org/TR/did-core/#dfn-verification-method), or [services](https://www.w3.org/TR/did-core/#dfn-service), which provide a set of mechanisms enabling a [DID controller](https://www.w3.org/TR/did-core/#dfn-did-controllers) to prove control of the [DID](https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers). [Services](https://www.w3.org/TR/did-core/#dfn-service) enable trusted interactions associated with the [DID subject](https://www.w3.org/TR/did-core/#dfn-did-subjects). A [DID](https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers) might provide the means to return the [DID subject](https://www.w3.org/TR/did-core/#dfn-did-subjects) itself, if the [DID subject](https://www.w3.org/TR/did-core/#dfn-did-subjects) is an information resource such as a data model.

## Introduction

DIDs aspire to be a [self-sovereign identity](http://www.lifewithalacrity.com/2016/04/the-path-to-self-soverereign-identity.html). They differ from other globally unique identifiers in that they are globally resolvable, decentralized, and cryptographically verifiable. DIDs require a global key-value database in which the database is a blockchain, distributed ledger, or decentralized network.

## Motivation
Desirable qualities for decentralized identities:

- Allow for self authentication and migration between services
- Allow communication across services
- User controlled authorization
- Unique, global, and memorable

## Proposal (TODO)

The main content of the RFC:
- Detailed description of the proposed solution or standard.
- Technical specifications and design details.
- Examples of how the solution would work in practice.

## Examples (TODO)

## References
- Ceramic [Documentation](https://developers.ceramic.network/docs/introduction/did-overview), decentralized identifiers and DID-sessions. 
- Disco.xyz - introduces a concept of [data backpacks](https://docs.disco.xyz/disco-docs-1/welcome/welcome-to-disco/data-backpacks). Notes on the [3-sided marketplace](https://docs.disco.xyz/disco-docs-1/learn-more/data-backpacks-for-holders/the-3-sided-marketplace-of-verifiable-data) of Verifiable Data from Disco docs.