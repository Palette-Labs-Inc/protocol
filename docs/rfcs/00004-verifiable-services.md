# RFC: [RFC Title]

- **status:** Draft | Proposed | Accepted | Deprecated | Superseded
- **Author:** [Author Name]
- **Created:** [Creation Date]
- **Last supportd:** [Last supportd Date]

## Abstract

Introduce concept of markets being better at optimizing economic inefficiencies than central planners here.  

## Introduction

A more detailed explanation of the problem and why it is important to address it. This section should provide enough background to understand the context of the RFC.

## Motivation

Describe the motivation behind this proposal. Explain why the existing solutions are inadequate and how the proposed solution addresses the problem.

## Proposal

The main content of the RFC:
- Detailed description of the proposed solution or standard.
- Technical specifications and design details.
- Examples of how the solution would work in practice.

## Examples


## References

List any references such as existing RFCs, standards documents, or academic papers that were cited or used in the creation of this RFC.


### Bluesky - A self-authenticating social protocol
The conceptual framework we've adopted for meeting these objectives is the "self-authenticating protocol." In law, a [“self-authenticating” document](https://www.law.cornell.edu/rules/fre/rule_902) requires no extrinsic evidence of authenticity. In computer science, an [“authenticated data structure”](https://www.cs.umd.edu/~mwh/papers/gpads.pdf) can have its operations independently verifiable. When resources in a network can attest to their own authenticity, then that data is inherently _live_ – that is, canonical and transactable – no matter where it is located. This is a departure from the connection-centric model of the Web, where information is host-certified and therefore becomes _dead_ when it is no longer hosted by its original service. Self-authenticating data moves authority to the user and therefore preserves the liveness of data across every hosting service.

The three components that enable self-authentication are [cryptographic identifiers](https://en.wikipedia.org/wiki/Public-key_cryptography), [content-addressed data](https://en.wikipedia.org/wiki/Content-addressable_storage), and [verifiable computation](https://en.wikipedia.org/wiki/Verifiable_computing). The first two are familiar concepts in distributed systems, and the third is an emerging area of research that is not yet widely applied, but that we think will have large ramifications.

_Cryptographic identifiers_ associate users with public keys. [Self-sovereign identity](https://en.wikipedia.org/wiki/Self-sovereign_identity) is based on having cryptographic identifiers for users. Control of an account is proved by a cryptographic signature from a user, rather than an entry in a database keeping track of logins.

_Content-addressed data_ means content is referenced by its cryptographic hash — the unique digital “fingerprint” of a piece of data. Using public keys and content-addresses, we can sign content by the user's key to prove they created it. Authenticated data enables trust to reside in the data itself, not in where you found it, allowing apps to move away from client-server architectures. This creates “user-generated authority”.

_Verifiable computation_ uses cryptographic proofs to allow observers to verify that a computation was performed correctly without having to run it themselves. This can be used to preserve privacy by concealing inputs, as in a zero-knowledge proof, or to compress state that would otherwise have to be kept around for verification. The full potential of these cryptographic primitives is still being explored. Cutting edge research is currently being applied to scaling blockchains, but we are also investigating novel applications in distributed social networks.


## Bacalhau, Compute Over Data
- https://docs.bacalhau.org/

## Lilypad
_Lilypad is a verifiable trustless decentralized compute network that aims to prevent cheating in the network. The network consists of clients and compute nodes, and it assumes deterministic results. The main goal is to establish a game theoretic approach to verifiable computing, where clients can trust the results they receive from compute nodes. The approach used in Lilypad is pure verification by replication, without relying on cryptographic tools like snarks or trusted execution environments._

- https://docs.lilypad.tech/lilypad/
- https://docs.lilypad.tech/lilypad/lilypad-aurora-reference/game-theory 

## Fluence
- Verifiable Compute
- docs - https://fluence.dev/docs/build/introduction 
- https://fluence.network/
